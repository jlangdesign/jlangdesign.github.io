/**
 * Appends topnav bar to a page.
 */
window.onload = function() {
  // Create topnav containers
  let db = document.body;
  let topnav = document.createElement("nav");
  let logoDiv = document.createElement("div");
  let tabDiv = document.createElement("div");
  topnav.id = "topnav";
  tabDiv.id = "top-nav-tab-group";
  db.appendChild(topnav);
  topnav.appendChild(logoDiv);
  topnav.appendChild(tabDiv);

  // Create content and append to logoDiv
  let logoAnchor = document.createElement("a");
  logoAnchor.id = "logo-box";
  logoAnchor.href = "/";
  let logoImg = document.createElement("img");
  logoImg.src = "/logo-favicon.png";
  logoImg.id = "logo";
  let logoTxt = document.createElement("span");
  logoTxt.id = "logo-name";
  logoTxt.innerText = "Jasmine Lang";
  logoAnchor.appendChild(logoImg);
  logoAnchor.appendChild(logoTxt);
  logoDiv.appendChild(logoAnchor);

  // Create content and append to tabDiv
  const links = ["/", "/about.html", "/gallery.html", "/contact.html"];
  const labels = ["Home", "About", "Gallery", "Contact"];
  for (let i = 0; i < links.length; i++) {
    let tab = document.createElement("a");
    tab.className = "top-nav-tab";
    tab.href = links[i];
    tab.innerText = labels[i];
    tabDiv.appendChild(tab);
  }
}
