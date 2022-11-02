import Routers from "./layouts/Routers"
import { Route } from "react-router-dom"

/*  =========== CSS ======== */
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./css/override.css"


/*  =========== pages ======== */
import Home from "./pages/home"
import TeamPage from "./pages/team"
import AboutPage from "./pages/about"
import FaqPage from "./pages/faq"
import ProblemSoluionPage from "./pages/problem-solution"


function App() {
  return (
    <>
      <Routers>
          <Route path="/" element={ <Home/> }/>
          <Route path="/team" element={ <TeamPage/> }/>
          <Route path="/about" element={ <AboutPage/> }/>
          <Route path="/faq" element={ <FaqPage/> }/>
          <Route path="/problem-solution" element={ <ProblemSoluionPage/> }/>
      </Routers>
    </>
  );
}

export default App;
