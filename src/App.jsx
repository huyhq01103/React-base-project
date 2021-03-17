import React, { useState, lazy, Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "src/components/header/header";
import Footer from "src/components/footer";
import "./assets/stylus/app.styl";
const Home = lazy(() => import("src/components/pages/home/home"));
const About = lazy(() => import("src/components/pages/about/about"));
const News = lazy(() => import("src/components/pages/news/news"));
function App() {
  return (
    <>
      <Header />
      <Suspense fallback="Loading...">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
          {/* <Route exact path="/news" component={News} />
          <Route
            path="/news/:newsId"
            render={(matchProps) => (
              <NewsDetail {...matchProps} />
            )}
          /> */}
        </Switch>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
