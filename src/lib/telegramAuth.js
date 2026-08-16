import { supabase } from './supabase';

export async function authenticateTelegramUser(
  initData
) {
  if (!initData) {
    throw new Error(
      'Telegram initData is missing'
    );
  }

  const { data, error } =
    await supabase.functions.invoke(
      'telegram-auth',
      {
        body: {
          initData,
        },
      }
    );

  if (error) {
    console.error(
      'Telegram authentication error:',
      error
    );

    throw new Error(
      'Telegram authentication failed'
    );
  }

  if (!data?.success) {
    throw new Error(
      data?.error ||
        'Telegram authentication failed'
    );
  }

  return data;
}