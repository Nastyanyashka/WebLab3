const axios = require('axios');


  export function calculate() {
    var resultBox = document.getElementById("resultBox");
    var text = document.getElementById("text");
    var page = document.getElementById("page");

// Делаем запрос пользователя с данным ID
axios.get('https://api.hh.ru/vacancies?text=' + text.value+ '&page=' + page.value)
  .then(function (response) {
    for (var i = 0; i < 20; i++)
    {
      resultBox.innerHTML += "Вакансия №" + (i+1) + "<br />";
      resultBox.innerHTML += "Идентификатор вакансии: " + response.items[i].id + "<br />";
      resultBox.innerHTML += "Адрес вакансии: " + response.items[i].address + "<br />";
      resultBox.innerHTML += "Ссылка на вакансию: " + response.items[i].alternate_url + "<br />";
      if (value.items[i].salary != null)
          resultBox.innerHTML += "Оклад от: " + response.items[i].salary.from + " до "+ response.items[i].salary.to + " в " +  + response.items[i].salary.currency + "<br />";
      resultBox.innerHTML += "Название вакансии: " + response.items[i].name + "<br />";
      resultBox.innerHTML += "<br />" ;
    }
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });


  }