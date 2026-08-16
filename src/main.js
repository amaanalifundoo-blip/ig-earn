import './style.css';
import { supabase } from './lib/supabase';

import {
  getTelegramWebApp,
  getTelegramUser,
  getTelegramInitData
} from './lib/telegram';


/* =========================================
   TELEGRAM + SUPABASE
========================================= */

const tg = getTelegramWebApp();

if (tg) {
  tg.ready();
  tg.expand();
}

const telegramUser = getTelegramUser();
const telegramInitData = getTelegramInitData();

console.log('Supabase connected:', !!supabase);
console.log('Telegram user:', telegramUser);
console.log(
  'Telegram initData available:',
  !!telegramInitData
);


/* =========================================
   APP
========================================= */

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="app-shell">

    <!-- Greeting -->

    <section class="greeting-card">

      <div class="profile-avatar">
        A
      </div>

      <div class="greeting-text">

        <h1>
          Hello, Amaan 👋
        </h1>

        <p>
          Keep engaging. Keep earning!
        </p>

      </div>

      <button
        class="header-arrow"
        aria-label="Open profile"
      >
        ›
      </button>

    </section>


    <!-- Balance -->

    <section class="balance-card">

      <div class="balance-content">

        <div class="balance-label">
          Your Balance
        </div>

        <div class="balance-amount">

          <span class="currency">
            ₹
          </span>

          <span>
            12.40
          </span>

        </div>

      </div>


      <div
        class="wallet-icon"
        aria-hidden="true"
      >

        <svg viewBox="0 0 48 48">

          <path
            d="M8 14.5C8 11.5 10.5 9 13.5 9H37"
            fill="none"
            stroke="currentColor"
            stroke-width="2.6"
            stroke-linecap="round"
          />

          <path
            d="M8 14.5V35c0 2.8 2.2 5 5 5h25c1.7 0 3-1.3 3-3V16c0-1.7-1.3-3-3-3H13.5"
            fill="none"
            stroke="currentColor"
            stroke-width="2.6"
            stroke-linecap="round"
          />

          <path
            d="M31 22h8v8h-8c-2.2 0-4-1.8-4-4s1.8-4 4-4Z"
            fill="none"
            stroke="currentColor"
            stroke-width="2.6"
          />

          <circle
            cx="31.5"
            cy="26"
            r="1.3"
            fill="currentColor"
          />

        </svg>

      </div>

    </section>


    <!-- Statistics -->

    <section class="stats-card">

      <div class="stat-item">

        <strong>
          124
        </strong>

        <span>
          Total Submissions
        </span>

      </div>


      <div class="stat-item">

        <strong>
          98
        </strong>

        <span>
          Approved
        </span>

      </div>


      <div class="stat-item">

        <strong>
          26
        </strong>

        <span>
          Pending
        </span>

      </div>

    </section>


    <!-- Action Grid -->

    <section class="action-grid">


      <!-- Submit Proof -->

      <button
        class="action-card"
        data-page="submit"
      >

        <span class="action-icon telegram-icon">

          <svg viewBox="0 0 24 24">

            <path
              d="M21.4 3.5 18 20c-.25 1.17-.9 1.46-1.82.91l-5.02-3.7-2.42 2.33c-.27.27-.5.5-1.03.5l.37-5.1 9.28-8.38c.4-.37-.09-.58-.62-.21L5.26 13.2.32 11.65c-1.07-.34-1.09-1.07.22-1.58L19.86 2.6c.9-.34 1.69.21 1.54.9Z"
              fill="currentColor"
            />

          </svg>

        </span>

        <span class="action-title">
          Submit Proof
        </span>

      </button>


      <!-- History -->

      <button
        class="action-card"
        data-page="history"
      >

        <span class="action-icon history-icon">

          <svg viewBox="0 0 24 24">

            <circle
              cx="12"
              cy="12"
              r="8.5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            />

            <path
              d="M12 7v5l3.5 2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />

          </svg>

        </span>

        <span class="action-title">
          History
        </span>

      </button>


      <!-- My Tasks -->

      <button
        class="action-card"
        data-page="tasks"
      >

        <span class="action-icon tasks-icon">

          <svg viewBox="0 0 24 24">

            <rect
              x="5"
              y="4"
              width="14"
              height="16"
              rx="2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            />

            <path
              d="M8 8h8M8 12h8M8 16h5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />

          </svg>

        </span>

        <span class="action-title">
          My Tasks
        </span>

      </button>


      <!-- Referral -->

      <button
        class="action-card"
        data-page="referral"
      >

        <span class="action-icon people-icon">
          👥
        </span>

        <span class="action-title">
          Refer & Earn
        </span>

      </button>


      <!-- Withdraw -->

      <button
        class="action-card"
        data-page="withdraw"
      >

        <span class="action-icon withdraw-icon">
          💼
        </span>

        <span class="action-title">
          Withdraw
        </span>

      </button>


      <!-- Help -->

      <button
        class="action-card"
        data-page="help"
      >

        <span class="action-icon help-icon">
          ?
        </span>

        <span class="action-title">
          Help
        </span>

      </button>

    </section>


    <!-- Referral Banner -->

    <button
      class="referral-card"
      data-page="referral"
    >

      <div class="gift-icon">
        🎁
      </div>

      <div class="referral-text">

        <strong>
          Refer your friends & earn extra!
        </strong>

        <span>
          Get 10% of their earnings
        </span>

      </div>

      <span class="referral-arrow">
        ›
      </span>

    </button>


    <!-- Bottom Navigation -->

    <nav class="bottom-nav">


      <button
        class="nav-item active"
        data-nav="home"
      >

        <span class="nav-icon">
          ⌂
        </span>

        <span>
          Home
        </span>

      </button>


      <button
        class="nav-item"
        data-nav="history"
      >

        <span class="nav-icon">
          ☷
        </span>

        <span>
          History
        </span>

      </button>


      <button
        class="nav-item"
        data-nav="wallet"
      >

        <span class="nav-icon">
          ₹
        </span>

        <span>
          Wallet
        </span>

      </button>


      <button
        class="nav-item"
        data-nav="profile"
      >

        <span class="nav-icon">
          ♙
        </span>

        <span>
          Profile
        </span>

      </button>

    </nav>

  </main>
`;


/* =========================================
   ACTION BUTTONS
========================================= */

document
  .querySelectorAll('[data-page]')
  .forEach((button) => {

    button.addEventListener('click', () => {

      const page = button.dataset.page;

      if (tg?.showAlert) {

        tg.showAlert(
          `${page} screen coming soon`
        );

      } else {

        alert(
          `${page} screen coming soon`
        );

      }

    });

  });


/* =========================================
   BOTTOM NAVIGATION
========================================= */

document
  .querySelectorAll('[data-nav]')
  .forEach((button) => {

    button.addEventListener('click', () => {

      document
        .querySelectorAll('.nav-item')
        .forEach((item) => {
          item.classList.remove('active');
        });

      button.classList.add('active');

      const page = button.dataset.nav;

      if (page !== 'home') {

        if (tg?.showAlert) {

          tg.showAlert(
            `${page} screen coming soon`
          );

        } else {

          alert(
            `${page} screen coming soon`
          );

        }

      }

    });

  });