import { Routes, Route } from "react-router-dom";
import Home from "./page/home/index";
import About from "./page/about/index";
import Contact from "./page/contact";
import Error from "./page/error";

function View() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* error page  */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default View;
