import React from "react";
import ReactDOM from "react-dom";
import EasyNewsApp from "./EasyNewsApp";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./styles/styles.scss";

ReactDOM.render(<EasyNewsApp />, document.getElementById("root"));

serviceWorkerRegistration.register();
