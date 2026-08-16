import './style.css';

const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();

  console.log('Telegram Mini App connected');
  console.log('Telegram version:', tg.version);
  console.log('Telegram platform:', tg.platform);
  console.log('Telegram user:', tg.initDataUnsafe?.user);
}


document.querySelector('#app').innerHTML = `
  <main class="app">

    <!-- Greeting -->
    <section class="greeting-card">
      <div class="profile-avatar">A</div>

      <div class="greeting-content">
        <h1>Hello, Amaan 👋</h1>
        <p>Keep engaging. Keep earning!</p>
      </div>

      <button class="header-arrow">›</button>
    </section>


    <!-- Balance -->
    <section class="balance-card">
      <div class="balance-info">
        <p>Your Balance</p>
        <h2>₹12.40</h2>
      </div>

      <div class="wallet-large">
        💼
      </div>
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


    <!-- Quick Actions -->
    <section class="action-grid">

      <button class="action-card">
        <div class="action-icon telegram">
          ➤
        </div>

        <span>Submit Proof</span>
      </button>


      <button class="action-card">
        <div class="action-icon history">
          ◷
        </div>

        <span>History</span>
      </button>


      <button class="action-card">
        <div class="action-icon tasks">
          ☷
        </div>

        <span>My Tasks</span>
      </button>


      <button class="action-card">
        <div class="action-icon referral">
          👥
        </div>

        <span>Refer & Earn</span>
      </button>


      <button class="action-card">
        <div class="action-icon withdraw">
          💼
        </div>

        <span>Withdraw</span>
      </button>


      <button class="action-card">
        <div class="action-icon help">
          ?
        </div>

        <span>Help</span>
      </button>

    </section>


    <!-- Referral -->
    <button class="referral-banner">

      <div class="gift-icon">
        🎁
      </div>

      <div class="referral-text">
        <strong>Refer your friends & earn extra!</strong>
        <span>Get 10% of their earnings</span>
      </div>

      <div class="referral-arrow">
        ›
      </div>

    </button>


    <!-- Bottom Navigation -->
    <nav class="bottom-navigation">

      <button class="bottom-item active">
        <div class="bottom-icon">⌂</div>
        <span>Home</span>
      </button>

      <button class="bottom-item">
        <div class="bottom-icon">☷</div>
        <span>History</span>
      </button>

      <button class="bottom-item">
        <div class="bottom-icon">▣</div>
        <span>Wallet</span>
      </button>

      <button class="bottom-item">
        <div class="bottom-icon">●</div>
        <span>Profile</span>
      </button>

    </nav>

  </main>
`;