import { configureWeb3Modal } from "./connection";
import "./App.css";
import Header from "./components/Header";

configureWeb3Modal();

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
