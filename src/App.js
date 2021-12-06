import { BrowserRouter} from "react-router-dom";
import NavBar from "./components/Navbar.js";
import Technologies from "./components/Technologies.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Experiences from "./components/Experiences.js";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <BrowserRouter>
        <NavBar className = "sticky top-0"/>
        <About/>
        <Projects/>
        <Technologies/>
        <Experiences/>
      </BrowserRouter>
    </main>
  );
}

export default App;
