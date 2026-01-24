console.log("main.js загружен");

fetch("/people")
  .then(res => res.json())
  .then(data => {
      console.log("Данные с сервера:", data);
  })
  .catch(err => console.error("Ошибка fetch:", err));
