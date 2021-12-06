import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.js"
import About from "./components/About"
import Projects from "./components/Projects"
import Post from "./components/Post"
import SinglePost from "./components/SinglePost"
import NavBar from "./components/Navbar.js";
import Technologies from "./components/Technologies.js";
import About2 from "./components/About2.js";
import Projects2 from "./components/Projects2.js";
import Experience from "./components/Experience.js";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <BrowserRouter>
      <NavBar className = "sticky top-0"/>
        <Routes>
          <Route element= {<Home/>} path='/'/>
          <Route element= {<About/>} path='/about'/>
          <Route element= {<Projects/>} path='/project'/>
          <Route element= {<Post/>} path='/posts'/>
          <Route element= {<SinglePost/>} path='/post/:slug'/>
          <Route element = {<Technologies/>} path = '/techStack'> </Route>
        </Routes>
      <About2/>
      <Projects2/>
      <Technologies/>
      <Experience/>
      </BrowserRouter>
    </main>
  );
}

export default App;
