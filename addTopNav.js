/**
 * Appends topnav bar to a page.
 */
window.onload = function() {
  // Create topnav containers
  var db = document.body;
  var topnav = document.createElement("nav");
  var logoDiv = document.createElement("div");
  var tabDiv = document.createElement("div");
  topnav.id = "topnav";
  tabDiv.id = "top-nav-tab-group";
  db.appendChild(topnav);
  topnav.appendChild(logoDiv);
  topnav.appendChild(tabDiv);

  // Create content and append to logoDiv
  var logoAnchor = document.createElement("a");
  logoAnchor.id = "logo-box";
  logoAnchor.href = "/";
  var logoImg = document.createElement("img");
  logoImg.src = "/logo-favicon.png";
  logoImg.id = "logo";
  var logoTxt = document.createElement("span");
  logoTxt.id = "logo-name";
  logoTxt.innerText = "Jasmine Lang";
  logoAnchor.appendChild(logoImg);
  logoAnchor.appendChild(logoTxt);
  logoDiv.appendChild(logoAnchor);

  // Create content and append to tabDiv
  var links = ["/", "/about.html", "/gallery.html", "/contact.html"];
  var labels = ["Home", "About", "Gallery", "Contact"];
  for (var i = 0; i < links.length; i++) {
    var tab = document.createElement("a");
    tab.className = "top-nav-tab";
    tab.href = links[i];
    tab.innerText = labels[i];
    tabDiv.appendChild(tab);
  }
}
