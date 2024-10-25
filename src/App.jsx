import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="overflow-hidden">
      <div className="fixed inset-0 -z-10 ">
        <div class="relative h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>
      <Navbar />
      <div className="text-stone-200">
        <Routes>
          <Route path={"/"} element={<Hero />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
