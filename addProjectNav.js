/**
 * Appends project nav to a page underneath the topnav.
 * Sections: Overview | Process (Mission - Playthrough - Results) | Links
 */
window.onload = function() {
  // Create containers for sections and subsections
  let projNav = document.createElement("nav");
  projNav.class = "tab-bar";

  // Create links and append
  const links = ["#overview", "#process", "#links"];
  const labels = ["Overview", "Process", "Links"];
  const subLinks = ["#mission", "#playthrough", "#results"];
  const subLabels = ["Mission", "Playthrough", "Results"];
}

// TODO add "to top" and "to bottom" buttons?
