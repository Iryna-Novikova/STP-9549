document.querySelector('[data-accept-cookies]').addEventListener('click', hideCookiesPopup);
document.querySelector('[data-decline-cookies]').addEventListener('click', hideCookiesPopup);

function hideCookiesPopup() {
  const popup = document.getElementById('cookies-popup');
  popup.style.display = 'none';
}