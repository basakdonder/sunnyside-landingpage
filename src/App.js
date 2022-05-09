import "./App.css";
import ClientTestimonals from "./components/ClientTestimonals/ClientTestimonals";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <ClientTestimonals />
      <Footer />
    </>
  );
}

export default App;
