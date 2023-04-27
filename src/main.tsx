import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.tsx";
import ColorModeContextProvider from "./theme.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		{/* <ColorModeContext.Provider value={colorMode}> */}
		{/* <ThemeProvider theme={theme}> */}
		<ColorModeContextProvider>
			<App />
		</ColorModeContextProvider>
		{/* </ThemeProvider> */}
		{/* </ColorModeContext.Provider> */}
	</React.StrictMode>
);
