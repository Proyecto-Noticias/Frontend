import React from "react";
import ReactDOM from "react-dom";
import AlwaysUpdate from "./AlwaysUpdate";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./styles/styles.scss";

ReactDOM.render(<AlwaysUpdate />, document.getElementById("root"));

serviceWorkerRegistration.register();
