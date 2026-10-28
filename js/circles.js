// Circle Animations Collection. Each entry draws one animation into a 180×180
// container `c`; css/circles.css holds the keyframes. Used by js/main.js.
const circleAnimations = (() => {
  const SVG_NS = "http://www.w3.org/2000/svg";

  function dot(className, size, x, y) {
    const d = document.createElement("div");
    d.className = className;
    d.style.width = d.style.height = `${size}px`;
    d.style.left = `calc(50% + ${x}px - ${size / 2}px)`;
    d.style.top = `calc(50% + ${y}px - ${size / 2}px)`;
    return d;
  }

  function pulsatingCircles(c) {
    c.appendChild(dot("dot pulse-dot", 8, 0, 0));
    for (let r = 0; r < 4; r++) {
      const radius = 15 + r * 15,
        count = 6 + r * 3;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * 2 * Math.PI;
        const d = dot("dot pulse-dot", 3 + r * 0.3, Math.cos(angle) * radius, Math.sin(angle) * radius);
        d.style.animationDelay = `${r * 0.2 + i * 0.1}s`;
        d.style.background = `rgba(255,255,255,${(90 - r * 10) / 100})`;
        c.appendChild(d);
      }
    }
  }

  function rotatingOrbits(c) {
    c.appendChild(dot("dot", 8, 0, 0));
    for (let r = 0; r < 3; r++) {
      const oc = document.createElement("div");
      oc.className = "orbit-container";
      oc.style.animationDuration = `${8 + r * 4}s`;
      oc.style.animationDirection = r % 2 ? "reverse" : "normal";
      const radius = 20 + r * 20,
        count = 6 + r * 3;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * 2 * Math.PI;
        const d = dot("dot", 4 - r * 0.5, Math.cos(angle) * radius, Math.sin(angle) * radius);
        d.style.background = `rgba(255,255,255,${(90 - r * 15) / 100})`;
        oc.appendChild(d);
      }
      c.appendChild(oc);
    }
  }

  function sequentialRings(c) {
    c.appendChild(dot("dot", 6, 0, 0));
    for (let i = 0; i < 5; i++) {
      const rad = 15 + i * 15,
        count = 8 + i * 4;
      for (let j = 0; j < count; j++) {
        const angle = (j / count) * 2 * Math.PI;
        const d = dot("dot", 3 + i * 0.2, Math.cos(angle) * rad, Math.sin(angle) * rad);
        d.style.animation = "expandRing 3s infinite";
        d.style.animationDelay = `${i * 0.3 + (j / count) * 0.1}s`;
        d.style.background = `rgba(255,255,255,${(90 - i * 15) / 100})`;
        c.appendChild(d);
      }
    }
  }

  function concentricRotations(c) {
    const wrap = document.createElement("div");
    wrap.className = "concentric-container";
    c.appendChild(wrap);
    const cd = dot("dot", 5, 0, 0);
    cd.style.background = "rgba(255,255,255,0.9)";
    wrap.appendChild(cd);
    for (let r = 0; r < 8; r++) {
      const ring = document.createElement("div");
      ring.className = "concentric-ring";
      ring.style.animationDuration = `${3 * Math.pow(1.5, r)}s`;
      const radius = 10 + r * 10;
      const count = Math.max(6, Math.floor((2 * Math.PI * radius) / 10));
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * 2 * Math.PI;
        const d = dot("dot", 4, Math.cos(angle) * radius, Math.sin(angle) * radius);
        d.style.background = `rgba(255,255,255,${(90 - r * 5) / 100})`;
        ring.appendChild(d);
      }
      wrap.appendChild(ring);
    }
  }

  function circularWaves(c) {
    c.appendChild(dot("dot", 8, 0, 0));
    for (let r = 0; r < 5; r++) {
      const rad = 15 + r * 15,
        count = 8 + r * 4;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * 2 * Math.PI;
        const d = dot("dot circular-wave-dot", 3 + r * 0.2, Math.cos(angle) * rad, Math.sin(angle) * rad);
        d.style.animationDelay = `${r * 0.2 + (i / count) * 0.5}s`;
        d.style.background = `rgba(255,255,255,${(90 - r * 10) / 100})`;
        c.appendChild(d);
      }
    }
  }

  function expandingLines(c) {
    const cd = dot("dot", 6, 0, 0);
    cd.style.background = "rgba(255,255,255,0.8)";
    c.appendChild(cd);
    for (let g = 0; g < 3; g++) {
      const lc = document.createElement("div");
      lc.className = "line-container";
      lc.style.animationDuration = `${8 + g * 4}s`;
      lc.style.animationDirection = g % 2 ? "reverse" : "normal";
      for (let i = 0; i < 12; i++) {
        const line = document.createElement("div");
        line.className = "expanding-line";
        line.style.animationDelay = `${(i / 12) * 2}s`;
        line.style.transform = `rotate(${(360 / 12) * i}deg)`;
        const d = document.createElement("div");
        d.className = "dot";
        d.style.width = d.style.height = "3px";
        d.style.left = "70px";
        d.style.top = "calc(50% - 1.5px)";
        d.style.background = "rgba(255,255,255,0.8)";
        line.appendChild(d);
        lc.appendChild(line);
      }
      c.appendChild(lc);
    }
  }

  function breathingGrid(c) {
    const grid = 9,
      spacing = 16;
    const offset = -(spacing * (grid - 1)) / 2;
    const center = (grid - 1) / 2;
    const maxD = Math.hypot(center, center);
    for (let y = 0; y < grid; y++) {
      for (let x = 0; x < grid; x++) {
        const d = dot("dot breathing-dot", 4, offset + x * spacing, offset + y * spacing);
        const dist = Math.hypot(x - center, y - center);
        d.style.animationDelay = `${(dist / maxD) * 1.5}s`;
        d.style.background = `rgba(255,255,255,${(90 - (dist / maxD) * 40) / 100})`;
        c.appendChild(d);
      }
    }
  }

  function rippleEffect(c) {
    const cd = dot("dot", 8, 0, 0);
    cd.style.background = "rgba(255,255,255,0.9)";
    cd.style.zIndex = "10";
    c.appendChild(cd);

    const rc = document.createElement("div");
    rc.className = "ripple-container";
    c.appendChild(rc);

    const numRipples = 4;
    const rippleDuration = 4; // seconds
    for (let i = 0; i < numRipples; i++) {
      const r = document.createElement("div");
      r.className = "ripple-ring";
      r.style.animationDelay = `${i * (rippleDuration / numRipples)}s`;
      rc.appendChild(r);
    }

    // Dots pulse outward in step with the rings
    const numRings = 6;
    const maxRadius = 80;
    for (let ring = 0; ring < numRings; ring++) {
      const radius = 15 + (ring * (maxRadius - 15)) / (numRings - 1);
      const numDots = 6 + ring * 3;
      for (let i = 0; i < numDots; i++) {
        const angle = (i / numDots) * 2 * Math.PI;
        const d = dot("ripple-wave-dot", 5 - ring * 0.5, Math.cos(angle) * radius, Math.sin(angle) * radius);
        d.style.animation = "rippleWave 1s infinite ease-in-out";
        d.style.animationDelay = `${(radius / maxRadius) * (rippleDuration / 1.2)}s`;
        d.style.background = `rgba(255,255,255,${(90 - ring * 10) / 100})`;
        c.appendChild(d);
      }
    }
  }

  function fibonacciSpiral(c) {
    const wrap = document.createElement("div");
    wrap.className = "fibonacci-container";
    c.appendChild(wrap);
    const cd = dot("dot", 6, 0, 0);
    cd.style.background = "rgba(255,255,255,0.9)";
    wrap.appendChild(cd);
    const golden = Math.PI * (3 - Math.sqrt(5)),
      N = 100,
      scale = 0.8;
    for (let i = 0; i < N; i++) {
      const angle = i * golden,
        rad = scale * Math.sqrt(i) * 4;
      const sz = 3 - (i / N) * 1.5;
      if (sz < 1) continue;
      const d = dot("fibonacci-dot", sz, Math.cos(angle) * rad, Math.sin(angle) * rad);
      d.style.animationDelay = `${(i / N) * 3}s`;
      d.style.background = `rgba(255,255,255,${(90 - (i / N) * 60) / 100})`;
      wrap.appendChild(d);
    }
  }

  function halftoneGradient(c) {
    const w = document.createElement("div");
    w.className = "halftone-container";
    c.appendChild(w);
    [20, 40, 60, 80].forEach((radius, i) => {
      const count = 12 + i * 8;
      for (let j = 0; j < count; j++) {
        const angle = (j / count) * 2 * Math.PI;
        const d = dot("halftone-dot", 6 - i, Math.cos(angle) * radius, Math.sin(angle) * radius);
        d.style.animationDelay = `${(i * 0.3 + j / count).toFixed(2)}s`;
        d.style.background = `rgba(255,255,255,${(90 - i * 15) / 100})`;
        w.appendChild(d);
      }
    });
  }

  function silverSpiral(c) {
    const w = document.createElement("div");
    w.className = "silver-container";
    c.appendChild(w);
    const N = 120,
      angleStep = Math.PI * (2 - Math.sqrt(2)),
      scale = 1.2;
    for (let i = 0; i < N; i++) {
      const angle = i * angleStep,
        rad = scale * Math.sqrt(i) * 6;
      const size = 4 - (i / N) * 2;
      if (size < 1) continue;
      const d = dot("silver-dot", size, Math.cos(angle) * rad, Math.sin(angle) * rad);
      d.style.animationDelay = `${(i / N) * 2}s`;
      w.appendChild(d);
    }
  }

  // SVG + SMIL, so it's paused/resumed via pauseAnimations() rather than CSS
  function sunflowerSpiral(c) {
    const N = 200;
    const SIZE = 180;
    const DOT_RADIUS = 2;
    const CENTER = SIZE / 2;
    const MAX_RADIUS = CENTER - 4 - DOT_RADIUS;
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
    const DURATION = 3;

    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("width", SIZE);
    svg.setAttribute("height", SIZE);
    svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);
    c.appendChild(svg);

    function pulse(circle, attr, values, begin) {
      const a = document.createElementNS(SVG_NS, "animate");
      a.setAttribute("attributeName", attr);
      a.setAttribute("values", values);
      a.setAttribute("dur", `${DURATION}s`);
      a.setAttribute("begin", `${begin}s`);
      a.setAttribute("repeatCount", "indefinite");
      a.setAttribute("calcMode", "spline");
      a.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      circle.appendChild(a);
    }

    for (let i = 0; i < N; i++) {
      const idx = i + 0.5;
      const frac = idx / N;
      const r = Math.sqrt(frac) * MAX_RADIUS;
      const theta = idx * GOLDEN_ANGLE;
      const circle = document.createElementNS(SVG_NS, "circle");
      circle.setAttribute("cx", CENTER + r * Math.cos(theta));
      circle.setAttribute("cy", CENTER + r * Math.sin(theta));
      circle.setAttribute("r", DOT_RADIUS);
      circle.setAttribute("fill", "#fff");
      circle.setAttribute("opacity", "0.6");
      pulse(circle, "r", `${DOT_RADIUS * 0.5};${DOT_RADIUS * 1.5};${DOT_RADIUS * 0.5}`, frac * DURATION);
      pulse(circle, "opacity", "0.3;1;0.3", frac * DURATION);
      svg.appendChild(circle);
    }
  }

  // Source shown in the code view, read from the functions themselves so it
  // never drifts from what runs. Includes the dot() helper where it's used.
  function source(fn) {
    const text = (f) => f.toString().replace(/\n {2}/g, "\n");
    return fn.toString().includes("dot(") ? `${text(dot)}\n\n${text(fn)}` : text(fn);
  }

  // `about` is the explanation in the code view; `css` is the animation's own
  // CSS (the shared .dot base is in css/circles.css).
  const list = [
    {
      title: "Pulsating Circles",
      draw: pulsatingCircles,
      about: "Four rings of dots around a centre point. Every dot runs the same fade-and-scale keyframe; staggering the delay by ring and by position makes the pulse travel around and outward.",
      css: `
      .pulse-dot {
        opacity: 0;
        transform-origin: center;
        animation: pulseFadeIn 3s infinite ease-in-out;
      }
      @keyframes pulseFadeIn {
        0% { opacity: 0; transform: scale(0.2); }
        40%, 60% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.2); }
      }
    `,
    },
    {
      title: "Rotating Orbits",
      draw: rotatingOrbits,
      about: "Three rings of dots, each inside its own rotating container. Outer rings turn slower and alternate direction, so they drift against each other.",
      css: `
      .orbit-container {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        animation: rotate 8s infinite linear;
      }
      @keyframes rotate {
        to { transform: rotateZ(360deg); }
      }
    `,
    },
    {
      title: "Sequential Rings",
      draw: sequentialRings,
      about: "Five rings that each scale in and fade away. Each ring starts 0.3s after the one inside it, so the rings seem to be born at the centre and travel outward.",
      css: `
      @keyframes expandRing {
        0% { transform: scale(0); opacity: 0; }
        20% { transform: scale(1); opacity: 1; }
        40%, 100% { transform: scale(1.1); opacity: 0; }
      }
    `,
    },
    {
      title: "Concentric Rotations",
      draw: concentricRotations,
      about: "Eight rings with dots spaced about 10px apart. Each ring rotates 1.5× slower than the one inside it, so the pattern shears into spirals and slowly lines up again.",
      css: `
      .concentric-container {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .concentric-ring {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        animation: rotateRing linear infinite;
      }
      @keyframes rotateRing {
        to { transform: rotate(360deg); }
      }
    `,
    },
    {
      title: "Circular Waves",
      draw: circularWaves,
      about: "Like Pulsating Circles, but the dots never disappear: they swell and dim between 0.7× and 1.2×, with a delay that mixes ring and angle so the wave spirals through.",
      css: `
      .circular-wave-dot {
        animation: circularWave 3s infinite ease-in-out;
        transform-origin: center;
      }
      @keyframes circularWave {
        0% { transform: scale(0.7); opacity: 0.3; }
        50% { transform: scale(1.2); opacity: 1; }
        100% { transform: scale(0.7); opacity: 0.3; }
      }
    `,
    },
    {
      title: "Expanding Lines",
      draw: expandingLines,
      about: "Twelve lines radiate from the centre, each growing to 70px and shrinking back with a dot riding its tip. Three copies rotate at different speeds and directions.",
      css: `
      .line-container {
        position: absolute;
        width: 100%;
        height: 100%;
        animation: rotateLines 8s infinite linear;
        transform-origin: center;
      }
      @keyframes rotateLines {
        to { transform: rotate(360deg); }
      }
      .expanding-line {
        position: absolute;
        height: 1px;
        left: 50%;
        top: 50%;
        transform-origin: left center;
        background: rgba(255, 255, 255, 0.3);
        animation: expandLine 4s infinite ease-in-out;
      }
      @keyframes expandLine {
        0% { width: 0; opacity: 0; }
        20%, 80% { width: 70px; opacity: 1; }
        100% { width: 0; opacity: 0; }
      }
    `,
    },
    {
      title: "Breathing Grid",
      draw: breathingGrid,
      about: "A 9×9 grid where each dot's delay is its distance from the centre. The breath starts in the middle and spreads out to the corners in rings.",
      css: `
      .breathing-dot {
        animation: breathe 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
        transform-origin: center;
      }
      @keyframes breathe {
        0% { transform: scale(0.8); opacity: 0.3; }
        50% { transform: scale(1.3); opacity: 1; }
        100% { transform: scale(0.8); opacity: 0.3; }
      }
    `,
    },
    {
      title: "Ripple Effect",
      draw: rippleEffect,
      about: "Outline rings expand from the centre every second, while dots on six rings pulse with a delay proportional to their radius, so they light up as each wave passes.",
      css: `
      .ripple-container {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .ripple-ring {
        position: absolute;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: ripple 4s infinite cubic-bezier(0, 0.5, 0.5, 1);
      }
      @keyframes ripple {
        0% { width: 0; height: 0; opacity: 1; }
        100% { width: 180px; height: 180px; opacity: 0; }
      }
      .ripple-wave-dot {
        position: absolute;
        border-radius: 50%;
        background: #fff;
        transform-origin: center;
      }
      @keyframes rippleWave {
        0%, 100% { transform: scale(0.8); opacity: 0.3; }
        50% { transform: scale(1.8); opacity: 1; }
      }
    `,
    },
    {
      title: "Fibonacci Spiral",
      draw: fibonacciSpiral,
      about: "Phyllotaxis: each dot is turned by the golden angle (≈137.5°) from the last and pushed out by √i, the way seeds pack in a sunflower head. The whole spiral slowly rotates.",
      css: `
      .fibonacci-container {
        position: absolute;
        width: 100%;
        height: 100%;
        animation: rotateSlow 30s infinite linear;
        transform-origin: center;
      }
      @keyframes rotateSlow {
        to { transform: rotate(360deg); }
      }
      .fibonacci-dot {
        position: absolute;
        border-radius: 50%;
        background: #fff;
        animation: fibPulse 3s infinite ease-in-out;
      }
      @keyframes fibPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
      }
    `,
    },
    {
      title: "Halftone Gradient",
      draw: halftoneGradient,
      about: "Four rings whose dots shrink from 6px to 3px outward, like a printed halftone. The dots pulse in sequence while the whole group rotates.",
      css: `
      .halftone-container {
        position: absolute;
        width: 100%;
        height: 100%;
        animation: rotateSlow 20s infinite linear;
        transform-origin: center;
      }
      @keyframes rotateSlow {
        to { transform: rotate(360deg); }
      }
      .halftone-dot {
        position: absolute;
        border-radius: 50%;
        background: #fff;
        animation: halftoneFade 4s infinite ease-in-out;
      }
      @keyframes halftoneFade {
        0%, 100% { opacity: 0.3; transform: scale(0.5); }
        50% { opacity: 1; transform: scale(1); }
      }
    `,
    },
    {
      title: "Silver Spiral",
      draw: silverSpiral,
      about: "The same spiral method as the Fibonacci one, but with an angle of π(2 − √2) ≈ 105° based on the silver ratio, which bends the dots into curved arms instead of even packing.",
      css: `
      .silver-container {
        position: absolute;
        width: 100%;
        height: 100%;
        animation: rotateSlow 25s infinite reverse linear;
        transform-origin: center;
      }
      @keyframes rotateSlow {
        to { transform: rotate(360deg); }
      }
      .silver-dot {
        position: absolute;
        border-radius: 50%;
        background: #fff;
        animation: silverPulse 3s infinite ease-in-out;
      }
      @keyframes silverPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.7); }
        50% { opacity: 1; transform: scale(1.3); }
      }
    `,
    },
    {
      title: "Sunflower Spiral",
      draw: sunflowerSpiral,
      about: "200 dots on a golden-angle spiral, drawn in SVG. Each circle animates its own radius and opacity with SMIL <animate>, timed by its distance from the centre. No CSS needed.",
      css: `
      /* No CSS: animated with SVG <animate> (see the JS tab). */
    `,
    },
  ].map((a) => ({ ...a, css: a.css.replace(/^ {6}/gm, "").trim(), js: source(a.draw) }));

  // The CSS above is what runs: it's added to the page once, here
  const style = document.createElement("style");
  style.textContent = list.map((a) => a.css).join("\n\n");
  document.head.appendChild(style);
  return list;
})();
