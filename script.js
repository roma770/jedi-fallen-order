// ── Dropdown nav (через JS — не исчезает при переходе к пунктам) ──
var navItems = document.querySelectorAll('.nav-item');
var closeTimer = null;

navItems.forEach(function(item) {
  item.addEventListener('mouseenter', function() {
    clearTimeout(closeTimer);
    // закрыть все остальные
    navItems.forEach(function(i) { if (i !== item) i.classList.remove('open'); });
    item.classList.add('open');
  });

  item.addEventListener('mouseleave', function() {
    // небольшая задержка, чтобы мышь успела попасть на dropdown
    closeTimer = setTimeout(function() {
      item.classList.remove('open');
    }, 120);
  });

  var dropdown = item.querySelector('.nav-dropdown');
  if (dropdown) {
    dropdown.addEventListener('mouseenter', function() {
      clearTimeout(closeTimer);
    });
    dropdown.addEventListener('mouseleave', function() {
      closeTimer = setTimeout(function() {
        item.classList.remove('open');
      }, 120);
    });
  }
});

// Клик вне — закрыть все
document.addEventListener('click', function(e) {
  if (!e.target.closest('.nav-item')) {
    navItems.forEach(function(i) { i.classList.remove('open'); });
  }
});

// ── Tab switching ──
document.querySelectorAll('.tab-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var idx = this.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
    this.classList.add('active');
    document.querySelectorAll('.tab-panel')[idx].classList.add('active');
  });
});

// ── Gallery thumbnails ──
document.querySelectorAll('.gallery-thumbs img').forEach(function(thumb) {
  thumb.addEventListener('click', function() {
    document.getElementById('gallery-main').src = this.src;
    document.querySelectorAll('.gallery-thumbs img').forEach(function(t) { t.classList.remove('active'); });
    this.classList.add('active');
  });
});

// ── Scroll reveal ──
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });