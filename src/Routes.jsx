import React from "react";
import Home from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const Uploaded = React.lazy(() => import("pages/Uploaded"));
const Uploading = React.lazy(() => import("pages/Uploading"));
const Upload = React.lazy(() => import("pages/Upload"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/uploading" element={<Uploading />} />
          <Route path="/uploaded" element={<Uploaded />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
