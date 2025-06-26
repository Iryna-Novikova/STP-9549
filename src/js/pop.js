const popup = document.querySelector('[data-cookies-popup]');

  // Перевірка наявності cookie_status
  const cookieStatus = localStorage.getItem('cookie_status');
  if (cookieStatus) {
    popup.style.display = 'none';
  }

  // Обробка кнопок
  document.querySelector('[data-accept-cookies]')
    .addEventListener('click', () => setCookieStatus('accepted'));

  document.querySelector('[data-decline-cookies]')
    .addEventListener('click', () => setCookieStatus('declined'));

  function setCookieStatus(status) {
    localStorage.setItem('cookie_status', status);
    hideCookiesPopup();
  }

  function hideCookiesPopup() {
    popup.style.display = 'none';
}
  
// document
//   .querySelector('[data-accept-cookies]')
//   .addEventListener('click', hideCookiesPopup);
// document
//   .querySelector('[data-decline-cookies]')
//   .addEventListener('click', hideCookiesPopup);

// function hideCookiesPopup() {
//   const popup = document.getElementById('[data-cookies-popup]');
//   popup.style.display = 'none';
// }
