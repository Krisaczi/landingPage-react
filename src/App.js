import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Offer from "./Components/Offer/Offer";
import offer from "./data/offer";
import team from "./data/team";

const App = () => {
  return (
    <>
      <Nav />
      <Main />
      <About team={team} />
      <Offer offer={offer} />
      <Footer />
    </>
  );
};

export default App;
