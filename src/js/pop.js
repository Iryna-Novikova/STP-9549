document.getElementById('accept-cookies').addEventListener('click', hideCookiesPopup);
document.getElementById('decline-cookies').addEventListener('click', hideCookiesPopup);

function hideCookiesPopup() {
  const popup = document.getElementById('cookies-popup');
  popup.style.display = 'none';
}