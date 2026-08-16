import './style.css';

const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="app-shell">

    <!-- Header -->
    <header class="top-card">
      <div class="avatar">A</div>

      <div class="welcome">
        <h1>Hello, Amaan 👋</h1>
        <p>Keep engaging. Keep earning!</p>
      </div>

      <button class="chevron">›</button>
    </header>

    <!-- Balance -->
    <section class="balance-card">
      <div>
        <span class="balance-label">Your Balance</span>
        <div class="balance-amount">₹12.40</div>
      </div>

      <div class="wallet-outline">▱</div>
    </section>

    <!-- Statistics -->
    <section class="stats-card">
      <div class="stat">
        <strong>124</strong>
        <span>Total Submissions</span>
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

    <!-- Actions -->
    <section class="action-grid">

      <button class="action-card" data-page="submit">
        <div class="action-icon telegram">➤</div>
        <span>Submit Proof</span>
      </button>

      <button class="action-card" data-page="history">
        <div class="action-icon clock">◷</div>
        <span>History</span>
      </button>

      <button class="action-card" data-page="tasks">
        <div class="action-icon tasks">☷</div>
        <span>My Tasks</span>
      </button>

      <button class="action-card" data-page="referral">
        <div class="action-icon people">👥</div>
        <span>Refer & Earn</span>
      </button>

      <button class="action-card" data-page="withdraw">
        <div class="action-icon money">₹</div>
        <span>Withdraw</span>
      </button>

      <button class="action-card" data-page="help">
        <div class="action-icon help">?</div>
        <span>Help</span>
      </button>

    </section>

    <!-- Referral -->
    <button class="referral-card">
      <div class="gift">🎁</div>

      <div class="referral-content">
        <strong>Refer your friends & earn extra!</strong>
        <span>Get 10% of their earnings</span>
      </div>

      <div class="referral-arrow">›</div>
    </button>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav">

      <button class="nav-item active">
        <div>⌂</div>
        <span>Home</span>
      </button>

      <button class="nav-item" data-page="history">
        <div>☷</div>
        <span>History</span>
      </button>

      <button class="nav-item" data-page="wallet">
        <div>₹</div>
        <span>Wallet</span>
      </button>

      <button class="nav-item" data-page="profile">
        <div>●</div>
        <span>Profile</span>
      </button>

    </nav>

  </div>
`;

// Temporary button behaviour
document.querySelectorAll('[data-page]').forEach((button) => {
  button.addEventListener('click', () => {
    const page = button.dataset.page;

    if (tg?.showAlert) {
      tg.showAlert(`${page} screen coming soon`);
    } else {
      alert(`${page} screen coming soon`);
    }
  });
});