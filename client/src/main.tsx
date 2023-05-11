import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter } from "react-router-dom";
import ColorModeContextProvider from "./theme.tsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ColorModeContextProvider>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<App />
				</LocalizationProvider>
			</ColorModeContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
