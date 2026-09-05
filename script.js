(function () {
  var header = document.getElementById('siteHeader');
  var toggle = document.getElementById('navToggle');

  function onScroll() {
    if (window.scrollY > 8) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  toggle.addEventListener('click', function () {
    var isOpen = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close mobile menu after tapping a link
  document.getElementById('mainNav').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
