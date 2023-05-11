import { grey, indigo } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode, createContext, useMemo, useState } from "react";

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
					...(mode === "light"
						? {
								////// palette values for light mode
								// nav
								primary: {
									main: indigo[900],
								},
								// home - explore text
								secondary: {
									main: indigo[900],
								},
								// divider, drawer moonstar icon,
								// planet form title, planet form buttons,
								// planet position title
								// planet card title texts
								divider: indigo[900],
								//content, form button text
								background: {
									default: grey[100],
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
									main: "#000",
								},
								// home - explore text
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
								},
								text: {
									// drawer text
									primary: "#fff",
									// position card text
									secondary: grey[400],
								},
						  }),
				},
				typography: {
					fontFamily: "monospace",
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
