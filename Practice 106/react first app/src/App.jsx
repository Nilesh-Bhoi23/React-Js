import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <main>This Is My Sites Main Content</main>

      <div className="cards">
        <Card title="Card 1" description="Thist is card 1" />
        <Card title="Card 2" description="Thist is card 2" />
        <Card title="Card 3" descripton="Thist is card 3" />
        <Card title="Card 4" description="Thist is card 4" />
      </div>

      <Footer />
    </>
  );
}

export default App;
