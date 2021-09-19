/**
 * Appends topnav bar to a page.
 */
window.onload = function() {
  // Add topnav
  fetch('/topnav.html')
    .then(res => res.text())
    .then(text => {
      const topnav = document.createElement('nav');
      topnav.id = 'topnav';
      topnav.innerHTML = text;
      document.body.appendChild(topnav);
    });

  // Add footer
  fetch('/footer.html')
    .then(res => res.text())
    .then(text => {
      const foot = document.createElement('footer');
      foot.innerHTML = text;
      let page = document.querySelector('#page');
      page.appendChild(foot);
    });
}
