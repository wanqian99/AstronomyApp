import { colors } from "@mui/material";
import {
	amber,
	blue,
	deepOrange,
	grey,
	indigo,
	pink,
	purple,
} from "@mui/material/colors";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
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
					...(mode === "light"
						? {
								////// palette values for light mode
								// nav
								primary: {
									main: purple[300],
								},
								// toggle mode icon, drawer moonstar icon
								secondary: {
									main: purple[900],
								},
								divider: purple[900],
								//content
								background: {
									default: "#fff",
									// paper: deepOrange[900],
								},
								text: {
									primary: "#000",
								},
						  }
						: {
								////// palette values for dark mode
								//nav
								primary: {
									main: purple[900],
								},
								// toggle mode icon
								secondary: {
									main: purple[300],
								},
								divider: purple[300],
								//content
								background: {
									default: grey[900],
									// paper: deepOrange[900],
								},
								text: {
									primary: "#fff",
								},
						  }),
				},
				typography: {
					// h1: {
					// 	fontFamily: "monospace",
					// 	color: purple[300],
					// },
					// fontFamily: "monospace",
					fontFamily: "Roboto",
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