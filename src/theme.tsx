import { grey, indigo } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode, createContext, useMemo, useState } from "react";

// const theme = createTheme({
// 	// status: {
// 	//     danger: '#e53e3e',
// 	//   },
// 	palette: {
// 		primary: {
// 			// Purple and green play nicely together.
// 			main: purple[500],
// 		},
// 		secondary: {
// 			// This is green.A700 as hex.
// 			main: "#11cb5f",
// 		},
// 	},
// });

// const theme = createTheme({
// 	palette: {
// 		mode: "dark",
// 		primary: {
// 			light: "#757ce8",
// 			main: "#3f50b5",
// 			dark: "#002884",
// 			contrastText: "#fff",
// 		},
// 		secondary: {
// 			light: "#ff7961",
// 			main: "#f44336",
// 			dark: "#ba000d",
// 			contrastText: "#000",
// 		},
// 	},
// });

// export default theme;

interface Props {
	children: ReactNode;
}

interface IColorModeContext {
	toggleColorMode: () => void;
	mode: "dark" | "light";
}

export const ColorModeContext = createContext<IColorModeContext>({
	toggleColorMode: () => {},
	mode: "light",
});

const ColorModeContextProvider = ({ children }: Props) => {
	const [mode, setMode] = useState<"light" | "dark">("light");
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) =>
					prevMode === "light" ? "dark" : "light"
				);
			},
			mode,
		}),
		[mode]
	);

	const theme = useMemo(
		() =>
			createTheme({
				components: {
					// Name of the component
					// MuiButtonBase: {
					// 	defaultProps: {
					// 		// The props to change the default for.
					// 		disableRipple: true, // No more ripple, on the whole application 💣!
					// 	},
					// },
					// MuiFormLabel: {
					// 	defaultProps: {
					// 		// root:
					// 	},
					// },
				},
				palette: {
					mode,
					// primary: {
					// 	main: purple[900],
					// 	// main: purple[50],
					// 	light: pink[500],
					// 	// main: "#3f50b5",
					// 	dark: blue[500],
					// 	// contrastText: "#fff",
					// },
					// secondary: {
					// 	main: blue[900],
					// 	// main: blue[50],
					// 	// light: "#ff7961",
					// 	// main: "#f44336",
					// 	// dark: "#ba000d",
					// 	// contrastText: "#000",
					// },
					// background: {
					// 	default: grey[900],
					// 	// paper: pink[50],
					// },
					// ...(mode === "light"
					// 	? {
					// 			////// palette values for light mode
					// 			// nav
					// 			primary: {
					// 				// main: purple[900],
					// 				main: purple[300],
					// 			},
					// 			// toggle mode icon
					// 			secondary: {
					// 				// main: purple[300],
					// 				main: purple[900],
					// 			},
					// 			// divider
					// 			divider: purple[900],
					// 			//content, form button text
					// 			background: {
					// 				// default: "#fff",
					// 				default: grey[100],
					// 				// paper: deepOrange[900],
					// 			},
					// 			text: {
					// 				// drawer text
					// 				primary: "#000",
					// 				// position card text
					// 				secondary: "#000",
					// 			},
					// 	  }
					// 	: {
					// 			////// palette values for dark mode
					// 			//nav
					// 			primary: {
					// 				// main: purple[300],
					// 				main: "#000",
					// 			},
					// 			// toggle mode icon
					// 			secondary: {
					// 				main: purple[300],
					// 			},
					// 			// divider
					// 			divider: purple[300],
					// 			//content, form button text
					// 			background: {
					// 				default: grey[900],
					// 				// paper: deepOrange[900],
					// 			},
					// 			text: {
					// 				// drawer text
					// 				primary: purple[300],
					// 				// position card text
					// 				secondary: grey[400],
					// 			},
					// 	  }),

					...(mode === "light"
						? {
								////// palette values for light mode
								// nav
								primary: {
									// main: purple[900],
									main: indigo[900],
								},
								//
								secondary: {
									// main: purple[300],
									main: "#fff",
								},
								// divider, drawer moonstar icon,
								// planet form title, planet form buttons,
								// planet position title
								// planet card title texts
								divider: indigo[900],
								//content, form button text
								background: {
									// default: "#fff",
									default: grey[100],
									// paper: deepOrange[900],
								},
								text: {
									// drawer text
									primary: "#000",
									// position card text
									secondary: "#000",
								},
						  }
						: {
								////// palette values for dark mode
								//nav
								primary: {
									// main: purple[300],
									main: "#000",
								},
								//
								secondary: {
									main: "#fff",
								},
								// divider, drawer moonstar icon,
								// planet form title, planet form buttons,
								// planet position title
								// planet card title texts
								divider: indigo[300],
								//content, form button text
								background: {
									default: grey[900],
									// paper: deepOrange[900],
								},
								text: {
									// drawer text
									// primary: indigo[300],
									primary: "#fff",
									// position card text
									secondary: grey[400],
								},
						  }),
				},
				typography: {
					// h1: {
					// 	fontFamily: "monospace",
					// 	color: purple[300],
					// },
					fontFamily: "monospace",
					// fontFamily: "Roboto",
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default ColorModeContextProvider;

export const useColorMode = () => createContext(ColorModeContext);
