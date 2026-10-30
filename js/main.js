// Projects per section. Add an entry here to add work to the slider.
// Each project has one or more media slides: { src, alt, srcset? } for images,
// { video, alt } for videos, { embed, alt } for a live page in the frame.
// Leave out `media` for a link-only entry with just the title and caption.
// `subtitle`, `text` and `url` (live link) are optional.
// For images that aren't landscape, add fit: "contain" and a `bg` color so the
// whole image shows inside the frame instead of being cropped.
const projects = {
  web: [
    {
      title: "Datlas (2024–2026)",
      subtitle: "Role: Freelance web developer",
      text: "Website for Datlas, an Italian company that runs digital transformation, data centers and operational services for enterprise customers. I worked on the site remotely as a freelance web developer.",
      url: "https://www.datlas.it/",
    },
    {
      title: "CS Design",
      subtitle: "Role: Design, development & print",
      text: "Website and print work for CS Design, an architecture firm founded by Pamela Semilli and Danny Cerezo. I designed and built the site and designed the print materials to match.",
      media: [
        {
          src: "images/65f6e0e56a47aad0f7ecc464_Squoosh-Mockup.jpg",
          srcset: [
            "images/65f6e0e56a47aad0f7ecc464_Squoosh-Mockup-p-500.jpg 500w",
            "images/65f6e0e56a47aad0f7ecc464_Squoosh-Mockup-p-800.jpg 800w",
            "images/65f6e0e56a47aad0f7ecc464_Squoosh-Mockup-p-1080.jpg 1080w",
            "images/65f6e0e56a47aad0f7ecc464_Squoosh-Mockup.jpg 1680w",
          ],
          alt: "CS Design website, “Architecture to Construction”, shown on a desktop monitor",
        },
        { src: "images/cs-design-02-founders.webp", alt: "CS Design office page: “Founded by Pamela Semilli and Danny Cerezo” above a project photo", fit: "contain", bg: "#f9ffff" },
        { src: "images/cs-design-03-office.webp", alt: "CS Design office page: “The one-stop-shop architecture firm you’ve been looking for” with office details and who we are" },
        { src: "images/cs-design-04-what-we-do.webp", alt: "CS Design “What we do and what we don’t” section beside a kitchen photo" },
        { src: "images/cs-design-05-we-are-not.webp", alt: "CS Design “We are not…” overlay in white type on black" },
        { src: "images/cs-design-06-partner-danny.webp", alt: "CS Design partners overlay with Danny Cerezo’s biography and portrait" },
        { src: "images/cs-design-07-partner-pamela.webp", alt: "CS Design partners overlay with Pamela Semilli’s biography and portrait" },
        { src: "images/cs-design-08-project-preuss.webp", alt: "CS Design project page for Preuss 2013: four single-family homes with a slatted wood facade", fit: "contain", bg: "#f9ffff" },
        { src: "images/cs-design-09-business-cards.webp", alt: "CS Design business cards for partner Danny Cerezo, light grid fronts and dark backs with the cs design logo" },
      ],
    },
    {
      title: "set architects",
      subtitle: "Role: Freelance web developer",
      text: "Website for set architects, an architecture studio based in Rome. I worked on the project as a freelance web developer.",
      url: "https://www.set-architects.com/",
      media: [
        { src: "images/set-architects-01-projects.webp", alt: "set architects website: projects overview as a grid of building photos and renderings", fit: "contain", bg: "#fff" },
        { src: "images/set-architects-02-project.webp", alt: "set architects project page for Mazzini Primary School with a large rendering and project details in a row", fit: "contain", bg: "#fff" },
        { src: "images/set-architects-03-images.webp", alt: "set architects project page for House with a square window, image view", fit: "contain", bg: "#fff" },
        { src: "images/set-architects-04-drawings.webp", alt: "set architects drawings view: floor plan of Mazzini Primary School", fit: "contain", bg: "#fff" },
        { src: "images/set-architects-05-drawings-detail.webp", alt: "set architects drawings view: floor plans of House with a square window", fit: "contain", bg: "#fff" },
        { src: "images/set-architects-06-press.webp", alt: "set architects press page: list of publications by date, issue and type", fit: "contain", bg: "#fff" },
        { src: "images/set-architects-07-contact.webp", alt: "set architects contact page with address, email and applications", fit: "contain", bg: "#fff" },
      ],
    },
    {
      title: "Skinskapes",
      subtitle: "Online shop for a streetwear label",
      url: "https://skinskapes.webflow.io/",
      text: "Online shop for Skinskapes, a unisex streetwear label with hand-sprayed graffiti pieces. Big right-aligned type, numbered lookbook slides and a product grid that switches to dark for the Blood Age 2024 collection.",
      media: [
        { src: "images/skinskapes-01-hero.webp", alt: "Skinskapes home page: lookbook photo numbered 01 beside large “Skinskapes street style unisex clothing” type", fit: "contain", bg: "#ebebeb" },
        { src: "images/skinskapes-02-lookbook.webp", alt: "Skinskapes lookbook slide 03: model on an escalator next to “Leather fiti coat, flared reverse fiti pants” in black and orange type", fit: "contain", bg: "#ebebeb" },
        { src: "images/skinskapes-03-shop-all.webp", alt: "Skinskapes “Blood Age 2024” collection page on black with a row of graffiti-sprayed caps and T-shirts", fit: "contain", bg: "#1c1c1c" },
        { src: "images/skinskapes-04-shop-grid.webp", alt: "Skinskapes product grid on black: fiti white tee, baggy denim fiti pants and icicle cap with names and prices in yen", fit: "contain", bg: "#1c1c1c" },
      ],
    },
  ],
  creative: [
    {
      title: "Match Report (2026)",
      subtitle: "World Cup match data",
      text: "A side project that turns World Cup match data into something that looks like the old printed match reports. This version uses 2026 match data from a few online sources. Built with React and Webflow.",
      media: [
        { video: "images/match-report-2026.mp4", alt: "Match Report 2026 in use" },
        { src: "images/match-report-2026-mobile.webp", alt: "Match Report on two phones: match overview for Brazil vs Norway and England’s starting line-up" },
        { src: "images/match-report-2026-desktop.webp", alt: "Match Report desktop view: Norway line-up on a dark pitch with captain, manager and substitutes" },
      ],
    },
    {
      title: "Pocket Sampler",
      subtitle: "Browser-based sampler & drum machine",
      url: "https://remontewodrosasefa-hash.github.io/WEB-Pocket-Operator/",
      text: "A browser-based pocket sampler and drum machine inspired by Teenage Engineering’s PO-33 K.O!, with 16 pads, a 16-step sequencer, and live microphone sampling. It’s built in plain HTML, CSS and JavaScript with Tone.js, and installs as an offline app on your phone.",
      media: [
        { src: "images/pocket-sampler-overview.webp", alt: "Pocket Sampler against a cloudy sky: LCD screen showing a 16-step pattern above the control buttons and pads" },
        { src: "images/pocket-sampler-pads.webp", alt: "Pocket Sampler close-up beside a sky photo: a pixel-art character on the LCD above the sound, pattern and bpm buttons" },
        { src: "images/pocket-sampler-xy.webp", alt: "Pocket Sampler XY pad in tone mode, muffled to bright, against clouds" },
      ],
    },
    {
      title: "Circle Animations",
      subtitle: "An experiment with dots and circles",
      text: "Looping animations made of dots and circles: orbits, ripples, grids and spirals. Each one is a few lines of math, animated with CSS and SVG.",
      // Instead of media: a live collection (js/circles.js). `preview` picks
      // the six shown in the overview frame; the rest open with a click.
      collection: circleAnimations,
      preview: [3, 1, 7, 11, 9, 5],
    },
    {
      title: "Node Blob",
      subtitle: "Interactive poster",
      url: "lab/node-blob/",
      text: "A poster where the nodes of a network melt into one soft shape. Drag a node to move it, drag its outline or scroll to resize it, and double-click to add or remove one. The outline is drawn from a distance field with marching squares, in plain JavaScript and canvas.",
      media: [{ embed: "lab/node-blob/?embed", alt: "Node Blob, a live interactive poster: pink blobs labelled ME and YOU join into one shape over grey and blush-pink type", bg: "#cfcfcf" }],
    },
    {
      title: "Object Shapes",
      subtitle: "Shape animation",
      text: "Black silhouettes of everyday objects morphing into each other on blue: a flower pot, a bottle, a plug, a flask, a carrot and a glass.",
      media: [{ video: "images/object-shapes.mp4", alt: "Black silhouettes of everyday objects morphing into one another on a blue background" }],
    },
  ],
};

const body = document.body;
const work = document.querySelector(".work");
const list = document.querySelector(".projects");
const template = document.querySelector("#project-template");
const overlays = document.querySelectorAll(".info[data-section]");
const overlayLinks = document.querySelectorAll("[data-overlay]");
const navLinks = document.querySelectorAll("[data-link]");

let section = null;
let rendered = null;
let lastHash = "#";
let activeStep = null; // arrow keys drive the slider last clicked or hovered

// Builds one project block with its own slider and caption.
function createProject(p) {
  const el = template.content.firstElementChild.cloneNode(true);
  const img = el.querySelector(".slider-img");
  const video = el.querySelector(".slider-video");
  const embed = el.querySelector(".slider-embed");
  const frame = el.querySelector(".slider-frame");
  const count = el.querySelector(".slider-count");
  const [prev, next] = el.querySelectorAll(".arrow");
  const caption = el.querySelector(".slider-caption");
  let i = 0;

  el.querySelector(".slider-title").textContent = p.title;
  el.querySelector(".caption-sub").textContent = p.subtitle || "";
  el.querySelector(".caption-text").textContent = p.text || "";
  const link = el.querySelector(".caption-link");
  if (p.url) {
    link.href = p.url;
    link.hidden = false;
  }
  caption.hidden = !p.subtitle && !p.text && !p.url;
  if (p.collection) return setupCollection(el, p);
  if (!p.media) {
    // Link-only project: just the title and caption, no frame
    el.classList.add("is-text");
    el.querySelector(".slider-controls").remove();
    frame.remove();
    return el;
  }
  prev.disabled = next.disabled = p.media.length < 2;

  function show() {
    const s = p.media[i];
    count.textContent = `${i + 1}/${p.media.length}`;
    img.hidden = !!(s.video || s.embed);
    video.hidden = !s.video;
    embed.hidden = !s.embed;
    img.style.objectFit = s.fit || "";
    frame.style.background = s.bg || "";

    // Only the visible slide keeps a page or video running
    if (!s.embed) embed.removeAttribute("src");
    if (!s.video && video.hasAttribute("src")) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }

    if (s.video || s.embed) {
      img.removeAttribute("src");
      img.removeAttribute("srcset");
    }
    if (s.embed) {
      if (!embed.src.endsWith(s.embed)) embed.src = s.embed;
      embed.title = s.alt;
      return;
    }
    if (s.video) {
      if (!video.src.endsWith(s.video)) video.src = s.video;
      video.setAttribute("aria-label", s.alt);
      video.play().catch(() => {});
      return;
    }

    img.classList.add("is-loading");
    img.onload = () => img.classList.remove("is-loading");
    if (s.srcset) img.srcset = s.srcset.join(", ");
    else img.removeAttribute("srcset");
    img.src = s.src;
    img.alt = s.alt;
    if (img.complete) img.classList.remove("is-loading");
  }

  function step(dir) {
    i = (i + dir + p.media.length) % p.media.length;
    show();
  }

  prev.addEventListener("click", () => step(-1));
  next.addEventListener("click", () => step(1));
  if (p.media.length > 1) {
    el.addEventListener("pointerenter", () => (activeStep = step));
    el.addEventListener("click", () => (activeStep = step));
    activeStep ??= step;
  }

  show();
  return el;
}

// Draws one animation into a cell, scaled from its 180px design size to fit.
const fitStage = new ResizeObserver((entries) => {
  for (const { target, contentRect } of entries) {
    target.style.setProperty("--s", Math.min(contentRect.width, contentRect.height) / 190);
  }
});

function circleCell(a) {
  const cell = document.createElement("div");
  const stage = document.createElement("div");
  cell.className = "circle-cell";
  stage.className = "circle-stage";
  a.draw(stage);
  cell.appendChild(stage);
  fitStage.observe(cell);
  return cell;
}

const cornerSvg =
  '<svg width="16" height="16" viewBox="0 0 512 512" aria-hidden="true"><polygon fill="currentColor" points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288"/></svg>';

// A project whose frame shows a live overview of a collection, with a toggle
// that opens the whole collection below it.
function setupCollection(el, p) {
  const frame = el.querySelector(".slider-frame");
  const controls = el.querySelector(".slider-controls");
  const panel = document.createElement("div");
  const inner = document.createElement("div");
  const toggle = document.createElement("button");
  const label = `View all (${p.collection.length})`;
  const id = `collection-${p.title.toLowerCase().replace(/\W+/g, "-")}`;

  frame.classList.add("is-collection");
  frame.replaceChildren(...p.preview.map((i) => circleCell(p.collection[i])));
  frame.setAttribute("aria-label", `Preview of ${p.title}`);

  toggle.className = "expand";
  toggle.textContent = label;
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", id);
  controls.replaceChildren(toggle);

  panel.className = "collection";
  panel.id = id;
  panel.inert = true;
  inner.className = "collection-inner";
  panel.appendChild(inner);
  el.appendChild(panel);

  // Built on first open, so the page doesn't draw all twelve up front
  function build() {
    const grid = document.createElement("div");
    grid.className = "collection-grid";
    for (const a of p.collection) {
      const tile = document.createElement("figure");
      const title = document.createElement("figcaption");
      const code = document.createElement("button");
      tile.className = "circle-tile";
      title.textContent = a.title;
      code.className = "tile-code";
      code.textContent = "Code";
      code.setAttribute("aria-label", `Show code for ${a.title}`);
      // The whole tile opens the code view (a big tap target); clicks on the
      // button bubble up to it
      tile.addEventListener("click", () => showCode(a));
      tile.append(title, circleCell(a), code);
      for (const pos of ["top-left", "top-right", "bottom-left", "bottom-right"]) {
        const corner = document.createElement("span");
        corner.className = `corner ${pos}`;
        corner.innerHTML = cornerSvg;
        tile.appendChild(corner);
      }
      grid.appendChild(tile);
    }
    inner.appendChild(grid);
  }

  function setOpen(open) {
    if (open && !inner.firstChild) build();
    panel.classList.toggle("is-open", open);
    panel.inert = !open;
    toggle.setAttribute("aria-expanded", open);
    toggle.textContent = open ? "Close" : label;
    // The SVG (SMIL) animations don't follow CSS animation-play-state
    panel.querySelectorAll(".circle-stage svg").forEach((s) => (open ? s.unpauseAnimations() : s.pauseAnimations()));
    if (open) panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  toggle.addEventListener("click", () => setOpen(!panel.classList.contains("is-open")));
  frame.addEventListener("click", () => setOpen(true));
  return el;
}

// Code view: one shared dialog with the animation large, its explanation,
// and its JS/CSS (both from js/circles.js).
let codeDialog = null;

function createCodeDialog() {
  const d = document.createElement("dialog");
  d.className = "code-view";
  d.setAttribute("aria-labelledby", "code-view-title");
  // Focus the sheet itself on open, not the Close button (no focus ring on tap)
  d.tabIndex = -1;
  d.innerHTML = `
    <div class="code-stage"></div>
    <div class="code-body">
      <div class="code-head">
        <h2 id="code-view-title" class="mono"></h2>
        <button class="code-close mono" aria-label="Close code view">Close</button>
      </div>
      <p class="code-about"></p>
      <div class="code-tabs mono" role="tablist">
        <button role="tab" data-lang="js">JS</button>
        <button role="tab" data-lang="css">CSS</button>
        <button class="code-copy">Copy</button>
      </div>
      <pre class="code-pre" role="tabpanel" tabindex="0"><code></code></pre>
    </div>`;
  d.querySelector(".code-close").addEventListener("click", () => d.close());
  // Click on the backdrop closes it
  d.addEventListener("click", (e) => e.target === d && d.close());
  d.addEventListener("close", () => d.querySelector(".code-stage").replaceChildren());
  document.body.appendChild(d);
  return d;
}

function showCode(a) {
  codeDialog ??= createCodeDialog();
  const d = codeDialog;
  const code = { js: a.js, css: a.css };
  const tabs = d.querySelectorAll("[role=tab]");
  const copy = d.querySelector(".code-copy");
  let lang = "js";

  function select(l) {
    lang = l;
    tabs.forEach((t) => t.setAttribute("aria-selected", t.dataset.lang === l));
    d.querySelector("code").textContent = code[l];
    d.querySelector(".code-pre").scrollTop = 0;
  }

  d.querySelector("h2").textContent = a.title;
  d.querySelector(".code-about").textContent = a.about;
  d.querySelector(".code-stage").replaceChildren(circleCell(a));
  tabs.forEach((t) => (t.onclick = () => select(t.dataset.lang)));
  copy.textContent = "Copy";
  copy.onclick = () =>
    navigator.clipboard.writeText(code[lang]).then(() => {
      copy.textContent = "Copied";
      setTimeout(() => (copy.textContent = "Copy"), 1500);
    });
  select("js");
  d.showModal();
  d.focus();
}

function render(key) {
  if (rendered === key) return;
  rendered = key;
  activeStep = null;
  list.replaceChildren(...projects[key].map(createProject));
}

function route() {
  const hash = location.hash;
  const name = hash.slice(1);
  const overlay = [...overlays].some((s) => s.dataset.section === name) ? name : null;
  section = projects[name] ? name : null;

  body.dataset.view = overlay ? "info" : section ? "work" : "home";
  body.dataset.section = !overlay && section ? section : "";
  work.hidden = !section;
  overlays.forEach((s) => (s.hidden = s.dataset.section !== overlay));

  navLinks.forEach((a) => {
    if (a.dataset.link === section) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });

  // Footer links toggle: while open, they lead back where you came from.
  overlayLinks.forEach((a) => {
    const open = a.dataset.overlay === overlay;
    a.href = open ? lastHash : `#${a.dataset.overlay}`;
    if (open) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  if (!overlay) lastHash = hash || "#";

  if (section) render(section);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && body.dataset.view === "info") location.hash = lastHash;
  if (!section || !activeStep || codeDialog?.open) return;
  if (e.key === "ArrowLeft") activeStep(-1);
  if (e.key === "ArrowRight") activeStep(1);
});

window.addEventListener("hashchange", route);
route();
