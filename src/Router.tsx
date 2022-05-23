import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./routes/Intro";
import Jabocar from "./routes/Jabocar";
import EightLab from "./routes/EightLab";
import BeSolution from "./routes/BeSolution";
import Brand from "./routes/Brand";
import BrandJabocar from "./routes/BrandJabocar";
import BrandLab from "./routes/BrandLab";
import BrandBe from "./routes/BrandBe";
import Map from "./routes/Map";
import ScrollToTop from "./utils/scroll";

function Router() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/jabocar" element={<Jabocar />} />
        <Route path="/8lab" element={<EightLab />} />
        <Route path="/besolution" element={<BeSolution />} />
        <Route path="/brand" element={<Brand />}>
          <Route path="jabocar" element={<BrandJabocar />} />
          <Route path="8lab" element={<BrandLab />} />
          <Route path="besolution" element={<BrandBe />} />
        </Route>
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
