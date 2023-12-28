import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header.jsx";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import MyServices from "./MyServices";
import FAQ from "./FAQ.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<MyServices />} />
          <Route path="/faq-11" element={<FAQ />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
