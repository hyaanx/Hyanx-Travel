import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './routes/home.jsx';
import About from './routes/About.jsx';
import Service from './routes/Service.jsx';
import Contact from './routes/Contact.jsx';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
