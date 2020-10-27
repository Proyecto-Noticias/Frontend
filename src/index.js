import React from "react";
import ReactDOM from "react-dom";
import EasyNewsApp from "./EasyNewsApp";
import registerServiceWorker from "./registerServiceWorker";

import "./styles/styles.scss";

ReactDOM.render(<EasyNewsApp />, document.getElementById("root"));

registerServiceWorker();
