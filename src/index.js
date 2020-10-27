import React from "react";
import ReactDOM from "react-dom";
import AlwaysNews from "./AlwaysNews";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./styles/styles.scss";

ReactDOM.render(<AlwaysNews />, document.getElementById("root"));

serviceWorkerRegistration.register();
