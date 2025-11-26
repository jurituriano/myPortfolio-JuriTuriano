import Header from "./pages/header";
import HomePage from "./pages/homepage";
import Aboutme from "./pages/aboutme";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Footer from "./pages/footer";

function App() {
  return (
    <div className=" container mx-auto px-8 lg:px-52  font-outfit ">
      <Header />
      <HomePage />
      <Aboutme />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
