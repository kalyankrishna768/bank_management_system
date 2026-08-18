import { useState } from "react";
import api from "../services/ApiService";
import "./Transfer.css";

function Transfer() {
  const [transfer, setTransfer] = useState({
    fromaccno: "",
    toaccno: "",
    amount: "",
  });

  const handleChange = (e) => {
    setTransfer({
      ...transfer,
      [e.target.name]: e.target.value,
    });
  };

  const transferMoney = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/accounts/transfer",
        {},
        {
          params: {
            fromaccno: transfer.fromaccno,
            toaccno: transfer.toaccno,
            amount: transfer.amount,
          },
        },
      );

      alert("Money Transferred Successfully");

      console.log(response.data);

      setTransfer({
        fromaccno: "",
        toaccno: "",
        amount: "",
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert("Server Not Running");
      }
    }
  };

  return (
    <div className="transfer-page">
      <div className="transfer-card">
        {/* Header */}
        <div className="transfer-header">
          <div className="transfer-icon">⇄</div>

          <h2>Transfer Money</h2>

          <p>Transfer money securely between bank accounts</p>
        </div>

        {/* Form */}
        <form onSubmit={transferMoney}>
          {/* Sender Account */}
          <div className="transfer-form-group">
            <label htmlFor="fromaccno">Sender Account Number</label>

            <div className="transfer-input-wrapper">
              <span className="transfer-input-icon">💳</span>

              <input
                id="fromaccno"
                type="text"
                name="fromaccno"
                placeholder="Enter sender account number"
                value={transfer.fromaccno}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Receiver Account */}
          <div className="transfer-form-group">
            <label htmlFor="toaccno">Receiver Account Number</label>

            <div className="transfer-input-wrapper">
              <span className="transfer-input-icon">💳</span>

              <input
                id="toaccno"
                type="text"
                name="toaccno"
                placeholder="Enter receiver account number"
                value={transfer.toaccno}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Amount */}
          <div className="transfer-form-group">
            <label htmlFor="amount">Transfer Amount</label>

            <div className="transfer-input-wrapper">
              <span className="transfer-input-icon">₹</span>

              <input
                id="amount"
                type="number"
                name="amount"
                placeholder="Enter transfer amount"
                value={transfer.amount}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
          </div>

          {/* Transfer Button */}
          <button type="submit" className="transfer-button">
            Transfer Money
            <span>→</span>
          </button>
        </form>

        {/* Information */}
        <div className="transfer-note">
          <span>🔒</span>

          <p>
            Verify both account numbers and the amount before completing the
            transfer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
