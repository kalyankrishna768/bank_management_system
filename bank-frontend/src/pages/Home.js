import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-text">

            <p className="hero-small-title">
              WELCOME TO YOUR DIGITAL BANK
            </p>

            <h1>
              Bank Smarter.
              <br />
              <span>Live Better.</span>
            </h1>

            <p className="hero-description">
              Manage your bank account, deposit money, withdraw funds,
              transfer money and check your balance — all from one
              secure and convenient platform.
            </p>

            <div className="hero-buttons">

              <Link to="/create-account" className="primary-btn">
                Create Account
                <span>→</span>
              </Link>

              <Link to="/login" className="secondary-btn">
                Login
              </Link>

            </div>

            <div className="trust-info">

              <div className="trust-item">
                <span className="trust-icon">🔒</span>
                <div>
                  <strong>Secure</strong>
                  <small>Protected Banking</small>
                </div>
              </div>

              <div className="trust-item">
                <span className="trust-icon">⚡</span>
                <div>
                  <strong>Fast</strong>
                  <small>Quick Transactions</small>
                </div>
              </div>

              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <div>
                  <strong>Reliable</strong>
                  <small>Easy Management</small>
                </div>
              </div>

            </div>

          </div>


          {/* ================= BANK ILLUSTRATION ================= */}

          <div className="hero-visual">

            <div className="circle circle-one"></div>
            <div className="circle circle-two"></div>

            <div className="bank-card">

              <div className="bank-roof">
                <div className="roof-line"></div>
                <div className="roof-line"></div>
                <div className="roof-line"></div>
              </div>

              <div className="bank-columns">

                <div className="column">
                  <div className="column-top"></div>
                  <div className="column-body"></div>
                  <div className="column-bottom"></div>
                </div>

                <div className="column">
                  <div className="column-top"></div>
                  <div className="column-body"></div>
                  <div className="column-bottom"></div>
                </div>

                <div className="column">
                  <div className="column-top"></div>
                  <div className="column-body"></div>
                  <div className="column-bottom"></div>
                </div>

                <div className="column">
                  <div className="column-top"></div>
                  <div className="column-body"></div>
                  <div className="column-bottom"></div>
                </div>

              </div>

              <div className="bank-base">
                <span>BANK</span>
              </div>

            </div>

            <div className="floating-card card-security">
              🔒
              <span>Secure</span>
            </div>

            <div className="floating-card card-money">
              ₹
              <span>Money</span>
            </div>

            <div className="floating-card card-transfer">
              ⇄
              <span>Transfer</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES SECTION ================= */}

      <section className="services-section">

        <div className="section-heading">

          <p>OUR SERVICES</p>

          <h2>
            Everything You Need
            <br />
            <span>In One Place</span>
          </h2>

          <div className="heading-line"></div>

          <p className="section-description">
            Simple and convenient banking services designed to
            make managing your money easier.
          </p>

        </div>


        <div className="services-grid">

          <Link to="/create-account" className="service-card">
            <div className="service-icon create-icon">👤+</div>

            <h3>Create Account</h3>

            <p>
              Create your bank account quickly and start
              managing your finances.
            </p>

            <span className="service-link">
              Get Started →
            </span>
          </Link>


          <Link to="/deposit" className="service-card">
            <div className="service-icon deposit-icon">↓</div>

            <h3>Deposit</h3>

            <p>
              Deposit money into your account safely and
              conveniently.
            </p>

            <span className="service-link">
              Deposit Now →
            </span>
          </Link>


          <Link to="/withdraw" className="service-card">
            <div className="service-icon withdraw-icon">↑</div>

            <h3>Withdraw</h3>

            <p>
              Withdraw funds from your account whenever
              you need them.
            </p>

            <span className="service-link">
              Withdraw →
            </span>
          </Link>


          <Link to="/transfer" className="service-card">
            <div className="service-icon transfer-icon">⇄</div>

            <h3>Transfer Money</h3>

            <p>
              Transfer money securely and easily between
              bank accounts.
            </p>

            <span className="service-link">
              Transfer →
            </span>
          </Link>


          <Link to="/balance" className="service-card">
            <div className="service-icon balance-icon">₹</div>

            <h3>Check Balance</h3>

            <p>
              View your current account balance and keep
              track of your finances.
            </p>

            <span className="service-link">
              Check Balance →
            </span>
          </Link>

        </div>

      </section>


      {/* ================= SECURITY SECTION ================= */}

      <section className="security-section">

        <div className="security-content">

          <div className="security-icon-large">
            🔐
          </div>

          <div className="security-text">

            <p className="security-label">
              YOUR SECURITY MATTERS
            </p>

            <h2>
              Banking Made
              <span> Safe & Simple</span>
            </h2>

            <p>
              Your banking operations are designed with security
              and reliability in mind. Manage your account and
              transactions through one easy-to-use platform.
            </p>

          </div>

          <div className="security-features">

            <div>
              <strong>100%</strong>
              <span>Secure</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Available</span>
            </div>

            <div>
              <strong>Fast</strong>
              <span>Transactions</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CALL TO ACTION ================= */}

      <section className="cta-section">

        <div>

          <p>READY TO GET STARTED?</p>

          <h2>
            Take Control of Your Banking Today
          </h2>

          <p>
            Create your account and experience simple,
            convenient banking management.
          </p>

        </div>

        <Link to="/create-account" className="cta-button">
          Create Your Account →
        </Link>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="home-footer">

        <div className="footer-logo">
          🏦
          <span>Bank Management System</span>
        </div>

        <p>
          Secure • Simple • Reliable Banking
        </p>

        <p className="copyright">
          © 2026 Bank Management System. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;