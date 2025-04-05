
const express = require('express');
const path = require('path');
const app = express();

// Путь к папке с файлами
app.use(express.static(path.join(__dirname, 'public')));

// Отправка страницы при запросу на корень
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер работает на порту ${PORT}`);
});
