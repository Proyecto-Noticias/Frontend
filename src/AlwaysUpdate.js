import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";

import { store } from "./store/store";
import Loading from "./components/shared/Loading";
const AppRouter = lazy(() => import("./routes/AppRouter"));
function AlwaysUpdate() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <AppRouter />
      </Suspense>
    </Provider>
  );
}

export default AlwaysUpdate;
