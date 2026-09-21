import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>Hi, I'm Taqiyah 💜</h1>
      <h2>CSE Student</h2>
      <p>Welcome to my personal portfolio!</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Me</h1>
      <p>
        I am a second-year Computer Science Engineering
        student interested in programming and technology.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="page">
      <h1>My Skills</h1>
      <p>💻 Java</p>
      <p>🌐 HTML & CSS</p>
      <p>⚛️ React</p>
      <p>🐍 Python</p>
    </div>
  );
}

function Projects() {
  return (
    <div className="page">
      <h1>My Projects</h1>
      <p>Expense Tracker</p>
      <p>Vehicle Management System</p>
      <p>Truth or Dare Game</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Me</h1>
      <p>Email: example@gmail.com</p>
      <p>Phone: 9876543210</p>
    </div>
  );
}

function Details() {
  return (
    <BrowserRouter>
      <nav>
        <h2>My Portfolio 💜</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Details;