// import AllRoutes from "./Routes/AllRoutes";
import Admission from "./components/Admission";
import Gradient from "./components/Gradient";
import { Header, Footer, Navbar } from "./components/index";
import { Academics, Activities, Home, Infrastructure, Media, Reach } from "./pages";
import { About } from './pages/About';

const App = () => {
  return (
    <div className="max-w-screen-7xl gap-4">
      <Navbar />
      <Header />
      <Home />
      <Admission />
      <Reach />
      <Infrastructure />
      <Academics />
      <Activities />
      <About />
      <Gradient />
      <Media />
      <Footer />

      {/* <AllRoutes /> */}
      <Footer />
    </div>
  );
};

export default App;
