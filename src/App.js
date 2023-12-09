import { Route, Routes } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

import GlobalStyle from "./components/GlobalStyle";

import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/work" exact element={<OurWork />} />
        <Route path="/contact" exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
