import { useState } from "react";
import api from "../services/ApiService";
import "./Deposit.css";

function Deposit() {
  const [accno, setAccno] = useState("");
  const [amount, setAmount] = useState("");

  const depositMoney = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        `/accounts/deposit/${accno}?amount=${amount}`,
      );

      alert("Amount Deposited Successfully");

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
    <div className="deposit-page">
      <div className="deposit-card">
        {/* Header */}
        <div className="deposit-header">
          <div className="deposit-icon">💰</div>

          <h2>Deposit Money</h2>

          <p>Add money to your bank account</p>
        </div>

        {/* Form */}
        <form onSubmit={depositMoney}>
          {/* Account Number */}
          <div className="deposit-form-group">
            <label htmlFor="accountNumber">Account Number</label>

            <div className="deposit-input-wrapper">
              <span className="deposit-input-icon">💳</span>

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
          <div className="deposit-form-group">
            <label htmlFor="amount">Deposit Amount</label>

            <div className="deposit-input-wrapper">
              <span className="deposit-input-icon">₹</span>

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

          {/* Deposit Button */}
          <button type="submit" className="deposit-button">
            Deposit Money
            <span>→</span>
          </button>
        </form>

        {/* Information */}
        <div className="deposit-note">
          <span>💡</span>

          <p>
            Make sure the account number and deposit amount are correct before
            submitting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
