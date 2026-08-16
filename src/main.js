import './style.css';
import { supabase } from './lib/supabase';

import {
  getTelegramWebApp,
  getTelegramUser,
  getTelegramInitData
} from './lib/telegram';

import { authenticateTelegramUser } from './lib/telegramAuth';


/* =========================================
   TELEGRAM
========================================= */

const tg = getTelegramWebApp();

if (tg) {
  tg.ready();
  tg.expand();
}

const telegramUser = getTelegramUser();
const telegramInitData = getTelegramInitData();

console.log(
  'Supabase connected:',
  !!supabase
);

console.log(
  'Telegram user:',
  telegramUser
);

console.log(
  'Telegram initData available:',
  !!telegramInitData
);


/* =========================================
   TELEGRAM AUTHENTICATION
========================================= */

let currentUser = null;

async function initializeUser() {

  /*
    Telegram ke andar hi authentication
    attempt karenge.

    Normal Chrome/browser mein initData
    nahi hota, isliye authentication skip
    rahega.
  */

  if (!telegramInitData) {
    console.log(
      'Telegram initData not available. Running in browser mode.'
    );

    return null;
  }

  try {

    const result =
      await authenticateTelegramUser(
        telegramInitData
      );

    console.log(
      'Telegram authentication successful:',
      result
    );

    if (result?.user) {
      currentUser = result.user;
    }

    return currentUser;

  } catch (error) {

    console.error(
      'Telegram authentication failed:',
      error
    );

    if (tg?.showAlert) {

      tg.showAlert(
        'Unable to connect your Telegram account.'
      );

    }

    return null;
  }
}


/* =========================================
   APP
========================================= */

const app = document.querySelector('#app');

if (!app) {
  throw new Error(
    'App container #app was not found.'
  );
}


/* =========================================
   RENDER HOME
========================================= */

function renderHome() {

  /*
    Database user mil gaya ho to
    real values use kar sakte hain.

    Abhi submissions ke real database
    numbers next step mein connect honge.
  */

  const balance =
    currentUser?.balance ??
    12.40;

  const username =
    currentUser?.first_name ||
    telegramUser?.first_name ||
    'Amaan';

  const formattedBalance =
    Number(balance).toFixed(2);


  app.innerHTML = `

    <main class="app-shell">

      <!-- Greeting -->

      <section class="greeting-card">

        <div class="profile-avatar">
          ${
            username
              .charAt(0)
              .toUpperCase()
          }
        </div>

        <div class="greeting-text">

          <h1>
            Hello, ${escapeHtml(username)} 👋
          </h1>

          <p>
            Keep engaging. Keep earning!
          </p>

        </div>

        <button
          class="header-arrow"
          aria-label="Open profile"
          data-page="profile"
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
              ${formattedBalance}
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

  setupEventListeners();
}


/* =========================================
   EVENT LISTENERS
========================================= */

function setupEventListeners() {

  document
    .querySelectorAll('[data-page]')
    .forEach((button) => {

      button.addEventListener(
        'click',
        () => {

          const page =
            button.dataset.page;

          showComingSoon(page);

        }
      );

    });


  document
    .querySelectorAll('[data-nav]')
    .forEach((button) => {

      button.addEventListener(
        'click',
        () => {

          document
            .querySelectorAll('.nav-item')
            .forEach((item) => {

              item.classList.remove(
                'active'
              );

            });

          button.classList.add(
            'active'
          );

          const page =
            button.dataset.nav;

          if (page !== 'home') {

            showComingSoon(page);

          }

        }
      );

    });

}


/* =========================================
   COMING SOON
========================================= */

function showComingSoon(page) {

  const message =
    `${capitalize(page)} screen coming soon`;

  if (tg?.showAlert) {

    tg.showAlert(message);

  } else {

    alert(message);

  }

}


/* =========================================
   HELPERS
========================================= */

function capitalize(value) {

  if (!value) {
    return '';
  }

  return (
    value.charAt(0).toUpperCase() +
    value.slice(1)
  );

}


function escapeHtml(value) {

  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

}


/* =========================================
   START APP
========================================= */

renderHome();


/*
  Telegram ke andar user authentication
  background mein chalegi.

  UI ko authentication ke liye block
  nahi kar rahe, taaki white screen na aaye.
*/

initializeUser()
  .then(() => {

    /*
      Authentication ke baad agar real
      user mil gaya hai to UI ko update
      kar do.
    */

    if (currentUser) {
      renderHome();
    }

  })
  .catch((error) => {

    console.error(
      'User initialization error:',
      error
    );

  });