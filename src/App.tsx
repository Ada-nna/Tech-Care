import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MobileBlocker from "./components/MobileBlocker ";

const App = () => {
  return (
    <>
      <MobileBlocker />

      <div className="hidden sm:block p-6">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default App;
