/**
 * Appends topnav bar to a page.
 */
window.onload = function() {
  fetch('/topnav.html')
    .then(res => res.text())
    .then(text => {
      const topnav = document.createElement('nav');
      topnav.id = 'topnav';
      topnav.innerHTML = text;
      document.body.appendChild(topnav);
    });
}
