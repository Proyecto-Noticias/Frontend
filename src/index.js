import React from "react";
import ReactDOM from "react-dom";
import EasyNewsApp from "./EasyNewsApp";
import * as serviceWorker from "./serviceWorker";

import "./styles/styles.scss";

ReactDOM.render(<EasyNewsApp />, document.getElementById("root"));

// serviceWorker.register();
