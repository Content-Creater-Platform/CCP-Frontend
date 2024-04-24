import { configureWeb3Modal } from "./connection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./pages/dashboard/feed";
import Monetization from "./pages/dashboard/monetization";
import Analytics from "./pages/dashboard/analytics";
import Profile from "./pages/dashboard/profile";

configureWeb3Modal();

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="feed" element={<Feed />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="monetization" element={<Monetization />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
