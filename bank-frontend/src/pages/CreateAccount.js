import { useState } from "react";
import api from "../services/ApiService";
import "./CreateAccount.css";

function CreateAccount() {
  const [userId, setUserId] = useState("");

  const [account, setAccount] = useState({
    accno: "",
    acctype: "",
    accbal: "",
  });

  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const createAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(`/accounts/create/${userId}`, account);

      alert("Account Created Successfully");

      console.log(response.data);

      setUserId("");

      setAccount({
        accno: "",
        acctype: "",
        accbal: "",
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
    <div className="create-account-page">
      <div className="create-account-card">
        <div className="create-account-header">
          <div className="create-account-icon">🏦</div>

          <h2>Create Bank Account</h2>

          <p>Create a bank account for a registered user</p>
        </div>

        <form onSubmit={createAccount}>
          {/* User ID */}
          <div className="account-form-group">
            <label htmlFor="userId">User ID</label>

            <div className="account-input-wrapper">
              <span className="account-input-icon">👤</span>

              <input
                id="userId"
                type="number"
                placeholder="Enter registered User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>

            <small>Enter the User ID of the registered user.</small>
          </div>

          {/* Account Number */}
          <div className="account-form-group">
            <label htmlFor="accountNumber">Account Number</label>

            <div className="account-input-wrapper">
              <span className="account-input-icon">💳</span>

              <input
                id="accountNumber"
                type="text"
                name="accno"
                placeholder="Enter account number"
                value={account.accno}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Account Type */}
          <div className="account-form-group">
            <label htmlFor="accountType">Account Type</label>

            <div className="account-input-wrapper">
              <span className="account-input-icon">🏦</span>

              <select
                id="accountType"
                name="acctype"
                value={account.acctype}
                onChange={handleChange}
                required
              >
                <option value="">Select account type</option>

                <option value="savings">Savings Account</option>

                <option value="current">Current Account</option>
              </select>
            </div>
          </div>

          {/* Initial Balance */}
          <div className="account-form-group">
            <label htmlFor="accountBalance">Initial Balance</label>

            <div className="account-input-wrapper">
              <span className="account-input-icon">₹</span>

              <input
                id="accountBalance"
                type="number"
                name="accbal"
                placeholder="Enter initial balance"
                value={account.accbal}
                onChange={handleChange}
                min="0"
                required
              />
            </div>
          </div>

          {/* Button */}
          <button type="submit" className="create-account-button">
            Create Bank Account
            <span>→</span>
          </button>
        </form>

        <div className="account-note">
          <span>ℹ️</span>

          <p>
            This creates the actual bank account associated with the registered
            user.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
