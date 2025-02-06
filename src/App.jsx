import Header from "./pages/header";
import HomePage from "./pages/homepage";
import Aboutme from "./pages/aboutme";
import Projects from "./pages/projects";

function App() {
  return (
    <div className=" container mx-auto px-8 font-outfit ">
      <Header />
      <HomePage />
      <Aboutme />
      <Projects/>
    </div>
  );
}

export default App;
