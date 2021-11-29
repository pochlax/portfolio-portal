import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.js"
import About from "./components/About"
import Projects from "./components/Projects"
import Post from "./components/Post"
import SinglePost from "./components/SinglePost"
import NavBar from "./components/Navbar.js";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route element= {<Home/>} path='/'/>
        <Route element= {<About/>} path='/about'/>
        <Route element= {<Projects/>} path='/project'/>
        <Route element= {<Post/>} path='/posts'/>
        <Route element= {<SinglePost/>} path='/post/:slug'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
