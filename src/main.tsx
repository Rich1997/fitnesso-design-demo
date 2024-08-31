import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { SelectionProvider } from "./context/SelectionContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <SelectionProvider>
            <App />
        </SelectionProvider>
    </ThemeProvider>
);
