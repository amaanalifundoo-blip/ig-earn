import './style.css';

const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="app">

    <section class="greeting-card">
      <div class="profile-avatar">A</div>

      <div class="greeting-content">
        <h1>Hello, Amaan 👋</h1>
        <p>Keep engaging. Keep earning!</p>
      </div>
    </section>

    <section class="balance-card">
      <div>
        <p>Your Balance</p>
        <h2>₹12.40</h2>
      </div>

      <div class="wallet-icon">₹</div>
    </section>

    <section class="stats-card">
      <div class="stat">
        <strong>124</strong>
        <span>Total</span>
      </div>

      <div class="stat">
        <strong>98</strong>
        <span>Approved</span>
      </div>

      <div class="stat">
        <strong>26</strong>
        <span>Pending</span>
      </div>
    </section>

    <section class="action-grid">

      <button class="action-card">
        <div class="action-icon">➤</div>
        <span>Submit Proof</span>
      </button>

      <button class="action-card">
        <div class="action-icon">◷</div>
        <span>History</span>
      </button>

      <button class="action-card">
        <div class="action-icon">☷</div>
        <span>My Tasks</span>
      </button>

      <button class="action-card">
        <div class="action-icon">👥</div>
        <span>Refer & Earn</span>
      </button>

      <button class="action-card">
        <div class="action-icon">₹</div>
        <span>Withdraw</span>
      </button>

      <button class="action-card">
        <div class="action-icon">?</div>
        <span>Help</span>
      </button>

    </section>

    <button class="referral-banner">
      <span class="gift">🎁</span>

      <span class="referral-text">
        <strong>Refer your friends & earn extra!</strong>
        <small>Get 10% of their earnings</small>
      </span>

      <span class="arrow">›</span>
    </button>

    <nav class="bottom-navigation">

      <button class="bottom-item active">
        <span>⌂</span>
        <small>Home</small>
      </button>

      <button class="bottom-item">
        <span>☷</span>
        <small>History</small>
      </button>

      <button class="bottom-item">
        <span>₹</span>
        <small>Wallet</small>
      </button>

      <button class="bottom-item">
        <span>●</span>
        <small>Profile</small>
      </button>

    </nav>

  </main>
`;