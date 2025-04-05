
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// Токен и chat_id пользователя
const TELEGRAM_TOKEN = '7319491525:AAHjJngTe50VxcFBr-z9-q_GUqxeSU_J_jY';
const CHAT_ID = '5289997696';

// Middleware для отправки IP в Telegram
app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const message = `Новый посетитель сайта! IP: ${ip}`;

  axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    chat_id: CHAT_ID,
    text: message,
  }).catch(err => {
    console.error('Ошибка отправки в Telegram:', err.message);
  });

  next();
});

// Отдача HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Сайт работает: http://localhost:${PORT}`);
});
