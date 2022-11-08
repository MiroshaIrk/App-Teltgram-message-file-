/**
 * Вариант отправки файла в телеграм, тип (sendDocument)
 * 
 */

const TOKEN = '5538359709:AAHqEpK2t1l0PYiv3_BNkwn5dmsvY4uxDek';
const CHAT_ID = '-1001865335961';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendDocument`;
const successF = document.getElementById('success-file');

document.getElementById('tgFile').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append('chat_id', CHAT_ID);
  formData.append('document', this.document.files[0]);



  axios.post(URL_API, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then((res) => {
      successF.innerHTML = 'Файл отправлен!';
      successF.style.display = 'block';
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log('Конец!');
    })
});


/**
 * Вариант отправки сообщения через форму тип (sendMessage)
 * 
 * 
 */


const URL_API_M = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const successM = document.getElementById('success-message');

document.getElementById('tgMessage').addEventListener('submit', function (e) {
  e.preventDefault();
  let message = `<b>Заявка с сайта</b>\n`;
  message += `<b>Отправитель: </b> ${this.name.value}\n`;
  message += `<b>Сообщение: </b> ${this.text.value}\n`;
  message += `<b>Почта: </b> ${this.email.value}`;

  axios.post(URL_API_M, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
    .then((res) => {
      this.name.value = '';
      this.email.value = '';
      successM.innerHTML = 'Сообщение отправлено!';
      successM.style.display = 'block';
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log('Конец!');
    })
});
