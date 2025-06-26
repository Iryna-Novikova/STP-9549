const popup = document.querySelector('[data-cookies-popup]');

// Перевірка наявності cookie_status
const cookieStatus = localStorage.getItem('cookie_status');
if (cookieStatus) {
  hideCookiesPopup();
}

// Обробка кнопок
document
  .querySelector('[data-accept-cookies]')
  .addEventListener('click', () => setCookieStatus('accepted'));

document
  .querySelector('[data-decline-cookies]')
  .addEventListener('click', () => setCookieStatus('declined'));

function setCookieStatus(status) {
  localStorage.setItem('cookie_status', status);
  hideCookiesPopup();
}

function hideCookiesPopup() {
  popup.style.display = 'none';
}
