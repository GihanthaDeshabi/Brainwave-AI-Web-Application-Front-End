import ButtonGradient from "./assets/assets/svg/ButtonGradient";
import Benifits from "./Components/Benifits";
import Colobaration from "./Components/Colobaration";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing";
import Roadmap from "./Components/Roadmap";
import Servises from "./Components/Servises";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        <Header />
        <Hero />
        <Benifits />
        <Colobaration />
        <Servises />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
