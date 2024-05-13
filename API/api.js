const axios = require('axios');
// button.onclick = calculate();

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
      resultBox.innerHTML += "Идентификатор вакансии: " + response.data.items[i].id + "<br />";
      resultBox.innerHTML += "Адрес вакансии: " + response.data.items[i].address + "<br />";
      resultBox.innerHTML += "Ссылка на вакансию: " + response.data.items[i].alternate_url + "<br />";
      if (response.data.items[i].salary != null)
          resultBox.innerHTML += "Оклад от: " + response.data.items[i].salary.from + " до "+ response.data.items[i].salary.to + " в " +  + response.data.items[i].salary.currency + "<br />";
      resultBox.innerHTML += "Название вакансии: " + response.data.items[i].name + "<br />";
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

  window.calculate = calculate;

  var button = document.getElementById("button1");
button.addEventListener("click", calculate);