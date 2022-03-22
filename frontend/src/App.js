import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Routor from "./routes";

// import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.min.css";
import Wrapper from "../src/Components/Layout/Wrapper";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routor />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
