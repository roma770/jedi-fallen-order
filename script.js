/* ============================================================
   Star Wars Jedi: Fallen Order — site behaviour
   ============================================================ */

/* ---------- Mobile menu (hamburger) ---------- */
(function () {
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }
})();

/* ---------- Dropdown nav (hover, JS-driven so it doesn't flicker) ---------- */
(function () {
  var navItems = document.querySelectorAll('.nav-item');
  var closeTimer = null;

  navItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      if (window.innerWidth <= 900) return; // hover disabled on mobile
      clearTimeout(closeTimer);
      navItems.forEach(function (i) { if (i !== item) i.classList.remove('open'); });
      item.classList.add('open');
    });
    item.addEventListener('mouseleave', function () {
      if (window.innerWidth <= 900) return;
      closeTimer = setTimeout(function () { item.classList.remove('open'); }, 120);
    });

    var dropdown = item.querySelector('.nav-dropdown');
    if (dropdown) {
      dropdown.addEventListener('mouseenter', function () { clearTimeout(closeTimer); });
      dropdown.addEventListener('mouseleave', function () {
        if (window.innerWidth <= 900) return;
        closeTimer = setTimeout(function () { item.classList.remove('open'); }, 120);
      });
    }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item')) {
      navItems.forEach(function (i) { i.classList.remove('open'); });
    }
  });
})();

/* ---------- Homepage tabs ---------- */
(function () {
  var btns = document.querySelectorAll('.tab-btn');
  var panels = document.querySelectorAll('.tab-panel');
  if (!btns.length) return;
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var idx = this.dataset.tab;
      btns.forEach(function (b) { b.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });
      this.classList.add('active');
      if (panels[idx]) panels[idx].classList.add('active');
    });
  });
})();

/* ---------- Homepage gallery thumbnails ---------- */
(function () {
  var main = document.getElementById('gallery-main');
  var thumbs = document.querySelectorAll('.gallery-thumbs img');
  if (!main || !thumbs.length) return;
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      main.src = this.src;
      thumbs.forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');
    });
  });
})();

/* ---------- Hero starfield ---------- */
(function () {
  var field = document.getElementById('stars');
  if (!field) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var count = 70;
  var frag = document.createDocumentFragment();
  for (var i = 0; i < count; i++) {
    var s = document.createElement('span');
    s.className = 'star';
    var size = (Math.random() * 2 + 1).toFixed(2);
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.left = (Math.random() * 100).toFixed(2) + '%';
    s.style.top = (Math.random() * 100).toFixed(2) + '%';
    s.style.setProperty('--d', (Math.random() * 3 + 2).toFixed(2) + 's');
    s.style.setProperty('--delay', (Math.random() * 3).toFixed(2) + 's');
    frag.appendChild(s);
  }
  field.appendChild(frag);
})();

/* ---------- Scroll-reveal animations ---------- */
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { observer.observe(el); });
})();

/* ---------- Screenshot lightbox ---------- */
(function () {
  var shots = document.querySelectorAll('.shot-grid img');
  if (!shots.length) return;

  var box = document.createElement('div');
  box.id = 'lightbox';
  box.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(box);
  var boxImg = box.querySelector('img');

  function open(src, alt) {
    boxImg.src = src;
    boxImg.alt = alt || '';
    box.classList.add('open');
  }
  function close() { box.classList.remove('open'); }

  shots.forEach(function (img) {
    img.addEventListener('click', function () { open(this.src, this.alt); });
  });
  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
