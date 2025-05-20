import "./App.css";
import Header from "./components/Header";
import Menu from "./components/services/Menu";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <h1 className="text-2xl font-bold text-center p-6">🍔 Nosso Cardápio</h1>  */}
      <Header />
      <Menu />
    </div>
  );
}

export default App;
