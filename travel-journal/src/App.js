
import './App.css';
import data from "./data.js";
import Navbar from "./components/NavBar.js";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";

export default function App() {
  const maxCardsToShow = 3;
  const cards = data.slice(0, maxCardsToShow).map((item) => {
    return <Card key={item.key} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
  );
}





  
