import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Portfolio from "../pages/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import Contact from "../pages/Contact/Contact";
import Layout from '../components/Layout/Layout'
import Admin from "../pages/Admin/Admin";
import Service from "../pages/Services/Service";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>}/>
        <Route path="/admin" element={<Layout><Admin /></Layout>}/>
        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Layout>
                <Portfolio />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <Service />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
