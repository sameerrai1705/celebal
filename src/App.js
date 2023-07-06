import Navbar from "./components/Navbar";
import ThirdPage from "./components/ThirdPage";
import SecondPage from "./components/SecondPage";
import Detail from "./components/Detail";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <SecondPage></SecondPage>
      <Detail></Detail>
      <ThirdPage></ThirdPage>
      <About></About>
      <Footer></Footer>
    </>
  );
}

export default App;
