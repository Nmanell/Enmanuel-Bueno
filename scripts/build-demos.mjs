import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const demosDir = path.join(root, "demos");

const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">`;

function readLines(file, startLine, endLine) {
  const lines = fs.readFileSync(file, "utf8").split("\n");
  return lines.slice(startLine - 1, endLine).join("\n");
}

function shell(meta) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${meta.title} | Enmanuel Bueno</title>
  ${fonts}
  <link rel="stylesheet" href="../assets/css/site.css" />
  <base href="${meta.base}" />
  <link rel="stylesheet" href="resources/style.css" />
  ${meta.headScripts}
</head>
<body class="demo-page" ${meta.bodyOnload}>
  <span id="title" hidden></span><span id="author" hidden></span>
  <div id="site-nav-root" data-active="${meta.navId}"></div>
  <main class="demo-main">
    <header class="demo-intro">
      <p class="demo-tag">${meta.tag}</p>
      <h1>${meta.h1}</h1>
      <p class="demo-lead">${meta.description}</p>
    </header>
    <section class="demo-stage site-card">
      ${meta.bodyContent}
    </section>
  </main>
  <script src="../assets/js/nav.js"></script>
</body>
</html>`;
}

const demos = [
  {
    out: "a1-task1.html",
    navId: "a1-task1",
    title: "2D Sierpinski Gasket",
    tag: "WebGPU · Assignment 1",
    h1: "2D Sierpinski Gasket",
    description:
      "Recursive triangle subdivision with linear color interpolation. Adjust recursion depth, blend ratio (lambda), and alpha to explore how the gasket is built and how transparency is applied in the fragment stage.",
    base: "../31635407-Enmanue-Bueno-A1/",
    headScripts: `<script src="resources/math.js"></script>
<script src="resources/color.js"></script>
<script src="task11.js"></script>`,
    bodyOnload: 'onload="main();"',
    canvas: { file: "31635407-Enmanue-Bueno-A1/task11.html", start: 63, end: 82 },
  },
  {
    out: "a1-task2.html",
    navId: "a1-task2",
    title: "HSV Circle Fan",
    tag: "WebGPU · Assignment 1",
    h1: "Circle with HSV Color Fan",
    description:
      "A circle approximated with a triangle fan and an outline pass as a line strip. Hue varies around the circle in HSV space while sliders control segment count, fill visibility, and opacity.",
    base: "../31635407-Enmanue-Bueno-A1/",
    headScripts: `<script src="resources/math.js"></script>
<script src="resources/color.js"></script>
<script src="task12.js"></script>`,
    bodyOnload: 'onload="main();"',
    canvas: { file: "31635407-Enmanue-Bueno-A1/task12.html", start: 66, end: 84 },
  },
  {
    out: "a1-task3.html",
    navId: "a1-task3",
    title: "3D Sierpinski Tetrahedra",
    tag: "WebGPU · Assignment 1",
    h1: "3D Sierpinski Gasket",
    description:
      "A three-dimensional Sierpinski structure built from tetrahedra with per-vertex colors. Depth testing reveals the recursive 3D layout; recursion and alpha controls mirror the 2D task in world space.",
    base: "../31635407-Enmanue-Bueno-A1/",
    headScripts: `<script src="resources/math.js"></script>
<script src="resources/color.js"></script>
<script src="task13.js"></script>`,
    bodyOnload: 'onload="main();"',
    canvas: { file: "31635407-Enmanue-Bueno-A1/task13.html", start: 72, end: 90 },
  },
  {
    out: "a1-task4.html",
    navId: "a1-task4",
    title: "Sun–Earth–Moon Scene",
    tag: "WebGPU · Assignment 1",
    h1: "Procedural Sphere & Orbital Motion",
    description:
      "UV-sphere geometry with noise-based vertex colors drives a miniature solar system: Earth orbits the Sun with axial tilt and spin, and the Moon orbits Earth. Use the overlay controls for animation speed, toggles, and depth settings.",
    base: "../31635407-Enmanue-Bueno-A1/",
    headScripts: `<script src="resources/color.js"></script>
<script src="resources/perlin.js"></script>
<script src="resources/math.js"></script>
<script src="resources/webgpu-preview-common.js"></script>
<script src="resources/webgpu-task14.js"></script>
<script src="task14.js"></script>`,
    bodyOnload: 'onload="main();"',
    canvas: { file: "31635407-Enmanue-Bueno-A1/task14.html", start: 135, end: 192 },
  },
  {
    out: "a2-phong.html",
    navId: "a2-phong",
    title: "Phong Shading & Camera",
    tag: "WebGPU · Assignment 2",
    h1: "Phong Lighting & Projections",
    description:
      "Interactive 3D scene with custom view and projection matrices, view-space transforms in WGSL, and Phong shading. Switch perspective and orthographic cameras, materials, and lights to compare shading models on multiple meshes.",
    base: "../31635407-Bueno-Enmanuel-A2/",
    headScripts: `<script src="resources/color.js"></script>
<script src="resources/perlin.js"></script>
<script src="resources/obj-loader.js"></script>
<script src="resources/data.js"></script>
<script src="resources/math.js"></script>
<script src="resources/geometry.js"></script>
<script src="resources/webgpu-preview-common.js"></script>
<script src="resources/webgpu-task2.js"></script>
<script src="task2.js"></script>
<script>
function visibility(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") { x.style.display = "grid"; } else { x.style.display = "none"; }
}
</script>`,
    bodyOnload: 'onload="main();"',
    canvas: { file: "31635407-Bueno-Enmanuel-A2/task2.html", start: 229, end: 436 },
  },
  {
    out: "a3-materials.html",
    navId: "a3-materials",
    title: "Textures & Normal Maps",
    tag: "WebGPU · Assignment 3",
    h1: "Textures, Tangents & Normal Mapping",
    description:
      "A lit scene with diffuse and normal maps, runtime tangent generation, and tangent-space Phong shading. Orbit with the mouse, open the on-canvas GUI to change meshes, materials, filters, and debug visualizations.",
    base: "../a3_student/",
    headScripts: `<script src="resources/utils.js"></script>
<script src="resources/color.js"></script>
<script src="resources/perlin.js"></script>
<script src="resources/obj-loader.js"></script>
<script src="resources/data.js"></script>
<script src="resources/math.js"></script>
<script src="resources/geometry.js"></script>
<script src="task3.js"></script>
<script src="resources/webgpu-preview-common.js"></script>
<script src="resources/webgpu-task3.js"></script>
<script>
function visibility(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") { x.style.display = "grid"; } else { x.style.display = "none"; }
}
</script>`,
    bodyOnload: 'onload="main();"',
    canvas: { file: "a3_student/task3.html", start: 188, end: 405 },
  },
];

fs.mkdirSync(demosDir, { recursive: true });

for (const demo of demos) {
  const bodyContent = readLines(path.join(root, demo.canvas.file), demo.canvas.start, demo.canvas.end);
  const html = shell({ ...demo, bodyContent });
  fs.writeFileSync(path.join(demosDir, demo.out), html);
}

const a5Body = `<div class="canvasdiv">
            <canvas id="canvas" width="800" height="800"></canvas>
            <div id="webgpuStatus"></div>
        </div>
        <div class="demo-controls-panel">
                <p>Drag the canvas to orbit. Right-drag or scroll wheel to dolly.</p>
                <p>
                    Vertical FOV: <span id="fovValue">50°</span>
                    <input id="fovSlider" type="range" min="20" max="110" step="1" value="50" />
                </p>
                <p>
                    Max bounces: <span id="bouncesValue">4</span>
                    <input id="bouncesSlider" type="range" min="1" max="8" step="1" value="4" />
                </p>
                <p>
                    <label>
                        <input id="neeToggle" type="checkbox" checked />
                        Next-event estimation (direct lighting)
                    </label>
                </p>
                <p>
                    <label>
                        <input id="accumToggle" type="checkbox" checked />
                        Multi-frame accumulation
                    </label>
                </p>
                <p>
                    <button id="resetButton" type="button">Reset accumulation</button>
                    <button id="saveRenderButton" type="button">Save reference render (PNG)</button>
                </p>
                <p>frame: <span id="frameDisplay">0</span></p>
        </div>`;

const a5Html = shell({
  navId: "a5-raytrace",
  title: "Cornell Box Ray Tracer",
  tag: "WebGPU · Assignment 5",
  h1: "Compute-Shaded Ray Tracer",
  description:
    "A Cornell box path traced on the GPU with sphere intersection, Lambert–Phong direct lighting via next-event estimation, and mirror reflections on metal. Drag to orbit the camera; use the controls below for FOV, bounces, NEE, and progressive accumulation.",
  base: "../a5_student/",
  headScripts: `<script src="resources/utils.js"></script>
<script src="resources/color.js"></script>
<script src="resources/perlin.js"></script>
<script src="resources/math.js"></script>
<script src="resources/scene.js"></script>
<script src="task5.js"></script>
<script src="resources/webgpu-preview-common.js"></script>
<script src="resources/webgpu-task5.js"></script>`,
  bodyOnload: 'onload="main();"',
  bodyContent: a5Body,
});

fs.writeFileSync(path.join(demosDir, "a5-raytrace.html"), a5Html);

console.log("Wrote", demos.length + 1, "demo pages to demos/");
