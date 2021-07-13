import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from './contexts/MyContext';
// import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <React.StrictMode>
		<AppProvider>
				<App />
		</AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// serviceWorker.register();
