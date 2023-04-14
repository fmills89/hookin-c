import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";

const style = {
  zindex40: `z-40`,
  zindex30: `z-30`,
  zindex20: `z-30`,
};

function App() {
  return (
    <>
      {/* <div className={style.zindex40}>
        <Navbar />
      </div> */}
      <div className={style.zindex30}>
        <Home />
      </div>
      <div>
        <About />
      </div>

      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
