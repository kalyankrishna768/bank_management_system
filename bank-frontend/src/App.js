import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transfer from "./pages/Transfer";
import Balance from "./pages/Balance";
function App() {
  return (
    <BrowserRouter>
      {" "}
      <Navbar />{" "}
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/create-account" element={<CreateAccount />} />{" "}
        <Route path="/deposit" element={<Deposit />} />{" "}
        <Route path="/withdraw" element={<Withdraw />} />{" "}
        <Route path="/transfer" element={<Transfer />} />{" "}
        <Route path="/balance" element={<Balance />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
