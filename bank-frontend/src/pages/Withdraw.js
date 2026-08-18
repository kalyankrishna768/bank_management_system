import { useState } from "react";
import api from "../services/ApiService";
import "./Withdrawl.css";

function Withdrawl() {
  const [accno, setAccno] = useState("");
  const [amount, setAmount] = useState("");

  const withdrawMoney = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        `/accounts/withdrawl/${accno}?amount=${amount}`,
      );

      alert("Amount Withdrawn Successfully");

      console.log(response.data);

      setAccno("");
      setAmount("");
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert("Server Not Running");
      }
    }
  };

  return (
    <div className="withdraw-page">
      <div className="withdraw-card">
        {/* Header */}
        <div className="withdraw-header">
          <div className="withdraw-icon">💸</div>

          <h2>Withdraw Money</h2>

          <p>Withdraw money from your bank account</p>
        </div>

        {/* Form */}
        <form onSubmit={withdrawMoney}>
          {/* Account Number */}
          <div className="withdraw-form-group">
            <label htmlFor="accountNumber">Account Number</label>

            <div className="withdraw-input-wrapper">
              <span className="withdraw-input-icon">💳</span>

              <input
                id="accountNumber"
                type="text"
                placeholder="Enter account number"
                value={accno}
                onChange={(e) => setAccno(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Amount */}
          <div className="withdraw-form-group">
            <label htmlFor="amount">Withdrawal Amount</label>

            <div className="withdraw-input-wrapper">
              <span className="withdraw-input-icon">₹</span>

              <input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                required
              />
            </div>
          </div>

          {/* Withdraw Button */}
          <button type="submit" className="withdraw-button">
            Withdraw Money
            <span>→</span>
          </button>
        </form>

        {/* Information */}
        <div className="withdraw-note">
          <span>⚠️</span>

          <p>
            Make sure you have sufficient balance before making a withdrawal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Withdrawl;
