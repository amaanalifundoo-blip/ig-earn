export function getTelegramWebApp() {
  return window.Telegram?.WebApp || null;
}

export function getTelegramUser() {
  const tg = getTelegramWebApp();

  if (!tg) {
    return null;
  }

  return tg.initDataUnsafe?.user || null;
}

export function getTelegramInitData() {
  const tg = getTelegramWebApp();

  if (!tg) {
    return '';
  }

  return tg.initData || '';
}