import { useState } from "react";
import api from "../services/ApiService";
import "./Balance.css";

function Balance() {
  const [accountNumber, setAccountNumber] = useState("");
  const [balance, setBalance] = useState("");

  const checkBalance = async () => {
    if (accountNumber === "") {
      alert("Please enter Account Number");
      return;
    }

    try {
      const response = await api.get(`/accounts/balance/${accountNumber}`);

      // If backend returns only balance
      if (typeof response.data === "number") {
        setBalance(response.data);
      }

      // If backend returns account object
      else {
        setBalance(response.data.accountBalance);
      }
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(error.response.data);
      } else {
        alert("Unable to connect to server");
      }
    }
  };

  return (
    <div className="balance-page">
      <div className="balance-card">
        {/* Header */}
        <div className="balance-header">
          <div className="balance-icon">₹</div>

          <h2>Balance Enquiry</h2>

          <p>Check your current bank account balance</p>
        </div>

        {/* Account Number */}
        <div className="balance-form-group">
          <label htmlFor="accountNumber">Account Number</label>

          <div className="balance-input-wrapper">
            <span className="balance-input-icon">💳</span>

            <input
              id="accountNumber"
              type="text"
              placeholder="Enter account number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>
        </div>

        {/* Check Balance Button */}
        <button className="balance-button" onClick={checkBalance}>
          Check Balance
          <span>→</span>
        </button>

        {/* Balance Result */}
        {balance !== "" && (
          <div className="balance-result">
            <div className="balance-result-icon">₹</div>

            <p>Current Available Balance</p>

            <h1>₹ {Number(balance).toLocaleString("en-IN")}</h1>

            <span>Account: {accountNumber}</span>
          </div>
        )}

        {/* Information */}
        <div className="balance-note">
          <span>🔒</span>

          <p>
            Your account balance is retrieved securely from the banking system.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Balance;
