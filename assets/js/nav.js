(function () {
  var DEMOS = [
    { href: "demos/a1-task1.html", id: "a1-task1", label: "2D Sierpinski Gasket" },
    { href: "demos/a1-task2.html", id: "a1-task2", label: "HSV Circle Fan" },
    { href: "demos/a1-task3.html", id: "a1-task3", label: "3D Sierpinski Tetrahedra" },
    { href: "demos/a1-task4.html", id: "a1-task4", label: "Sun–Earth–Moon Scene" }
      { href: "demos/a2-phong.html", id: "a2-phong", label: "Phong Shading & Camera" },
    { href: "demos/a3-materials.html", id: "a3-materials", label: "Textures & Normal Maps" },
    { href: "demos/a5-raytrace.html", id: "a5-raytrace", label: "Cornell Box Ray Tracer" }
  ];

  function prefix() {
    var path = window.location.pathname.replace(/\\/g, "/");
    if (path.indexOf("/demos/") !== -1) {
      return "../";
    }
    return "";
  }

  function buildNav(activeId) {
    var p = prefix();
    var html = '<header class="site-header"><div class="site-header__inner">';
    html += '<a class="site-logo" href="' + p + 'index.html">Enmanuel <span>Bueno</span></a>';
    html += '<nav class="site-nav" aria-label="Primary">';
    html += navLink(p + "index.html", activeId === "home", "Home");
    html += navLink(p + "resume.html", activeId === "resume", "Resume");
    html += '<details class="site-nav__group"><summary>WebGPU demos</summary><div class="site-nav__dropdown">';
    DEMOS.forEach(function (section) {
      html += '<span class="site-nav__label">' + section.group + "</span>";
      section.items.forEach(function (item) {
        var cls = item.id === activeId ? ' class="is-active"' : "";
        html += '<a href="' + p + item.href + '"' + cls + ">" + item.label + "</a>";
      });
    });
    html += "</div></details></nav></div></header>";
    return html;
  }

  function navLink(href, active, label) {
    return '<a href="' + href + '"' + (active ? ' class="is-active"' : "") + ">" + label + "</a>";
  }

  var root = document.getElementById("site-nav-root");
  if (root) {
    var active = root.getAttribute("data-active") || "";
    root.outerHTML = buildNav(active);
  }
})();
