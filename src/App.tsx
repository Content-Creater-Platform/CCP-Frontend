import { configureWeb3Modal } from "./connection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./pages/dashboard/feed";
import Monetization from "./pages/dashboard/monetization";
import Analytics from "./pages/dashboard/analytics";
import Profile from "./pages/dashboard/profile";
import Overview from "./pages/DAOdashboard/Overview";
import Proposals from "./pages/DAOdashboard/Proposals";
import Voting from "./pages/DAOdashboard/Voting";
import Treasury from "./pages/DAOdashboard/Treasury";

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
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="proposals" element={<Proposals />} />
          <Route path="voting" element={<Voting />} />
          <Route path="treasury" element={<Treasury />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
