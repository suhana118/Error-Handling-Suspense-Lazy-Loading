// (Suspense + Lazy Loading + ErrorBoundary)


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

import Home from "./pages/Home";
import BuggyPage from "./pages/BuggyPage";

const About = lazy(() => import("./pages/About"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={
              <ErrorBoundary>
                <About />
              </ErrorBoundary>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ErrorBoundary>
                <Dashboard />
              </ErrorBoundary>
            }
          />

          <Route 
            path="/buggy"
            element={
            <ErrorBoundary>
                <BuggyPage />
            </ErrorBoundary>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;