document.addEventListener("DOMContentLoaded", function () {

  // --------------------
  // LOADING SCREEN
  // --------------------

  const loader = document.createElement("div");
  loader.innerHTML = "<p>Initializing system...</p>";

  loader.style.position = "fixed";
  loader.style.top = "0";
  loader.style.left = "0";
  loader.style.width = "100%";
  loader.style.height = "100%";
  loader.style.background = "black";
  loader.style.color = "#00ff88";
  loader.style.display = "flex";
  loader.style.alignItems = "center";
  loader.style.justifyContent = "center";
  loader.style.fontFamily = "monospace";
  loader.style.fontSize = "24px";
  loader.style.zIndex = "9999";

  document.body.appendChild(loader);


  // remove loader after 2s
  setTimeout(() => {

    loader.style.transition = "opacity 1s";
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.remove();
      startAnimations(); // start everything after loader
    }, 1000);

  }, 2000);



  function startAnimations() {

    // --------------------
    // TYPEWRITER EFFECT
    // --------------------

    const subtitle = document.querySelector(".subtitle");
    const text = subtitle.textContent;
    subtitle.textContent = "";

    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
      }
    }

    typeWriter();



    // --------------------
    // TITLE COLOR GLOW
    // --------------------

    const title = document.querySelector("h1");

    const colors = [
      "#ff2e93",
      "#ff6bb5",
      "#ff9bd1",
      "#ff2e93"
    ];

    let colorIndex = 0;

    setInterval(() => {
      title.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }, 1200);



    // --------------------
    // TERMINAL BOOT EFFECT
    // --------------------

    const terminalLines = document.querySelectorAll(".terminal p");

    terminalLines.forEach(line => {
      line.style.display = "none";
    });

    let lineIndex = 0;

    function showNextLine() {
      if (lineIndex < terminalLines.length) {
        terminalLines[lineIndex].style.display = "block";
        lineIndex++;
        setTimeout(showNextLine, 700);
      }
    }

    showNextLine();



    // --------------------
// GLOWING CURSOR TRAIL
// --------------------

const trailCount = 12;
const trails = [];

for (let i = 0; i < trailCount; i++) {
  const t = document.createElement("div");

  t.style.position = "fixed";
  t.style.width = "12px";
  t.style.height = "12px";
  t.style.borderRadius = "50%";
  t.style.pointerEvents = "none";
  t.style.background = "hotpink";
  t.style.boxShadow = "0 0 12px hotpink, 0 0 25px hotpink";
  t.style.opacity = (1 - i / trailCount);

  document.body.appendChild(t);
  trails.push({el: t, x: 0, y: 0});
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateTrail() {

  let x = mouseX;
  let y = mouseY;

  trails.forEach((trail, index) => {

    trail.x += (x - trail.x) * 0.4;
    trail.y += (y - trail.y) * 0.4;

    trail.el.style.left = trail.x - 6 + "px";
    trail.el.style.top = trail.y - 6 + "px";

    x = trail.x;
    y = trail.y;

  });

  requestAnimationFrame(animateTrail);
}

animateTrail();

  }

});