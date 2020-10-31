import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loading from "../components/shared/Loading";
import { useSelector } from "react-redux";
const NotFound = lazy(() => import("../components/NotFound"));
const MainLogin = lazy(() => import("../screens/MainLogin"));
const MainRegister = lazy(() => import("../screens/MainRegister"));
const Navbar = lazy(() => import("../components/shared/Navbar"));
const HomeScreen = lazy(() => import("../screens/HomeScreen"));
const AdminScreen = lazy(() => import("../screens/admin/AdminScreen"));
const NewsDetail = lazy(() => import("../components/news/NewsDetail"));
const BlogScreen = lazy(() => import("../screens/BlogScreen"));
const Confirmation = lazy(() => import("../components/Confirmation"));
const NewsPerCategory = lazy(() => import("../screens/NewsPerCategory"));
const Footer = lazy(() => import("../components/shared/Footer"));

const AppRouter = () => {
  const { uid } = useSelector((state) => state.auth);

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Navbar />
        <main id="main">
          <Switch>
            <Route exact isAuth={!!uid} path="/blog" component={BlogScreen} />
            <Route exact isAuth={!!uid} path="/login" component={MainLogin} />
            <Route
              exact
              isAuth={!!uid}
              path="/register"
              component={MainRegister}
            />
            <Route
              exact
              isAuth={!!uid}
              path="/confirmation"
              component={Confirmation}
            />
            <Route exact isAuth={!!uid} path="/" component={HomeScreen} />
            <Route
              exact
              isAuth={!!uid}
              path="/new/:_id"
              component={NewsDetail}
            />
            <Route
              exact
              isAuth={!!uid}
              path="/category/:category"
              component={NewsPerCategory}
            />
            <Route
              exact
              isAuth={!!uid}
              path="/Ry8HifHDo2kKgv7he+bfn3ApR17iwLqOV96MvNbRtlU"
              component={AdminScreen}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </Suspense>
  );
};

export default AppRouter;
