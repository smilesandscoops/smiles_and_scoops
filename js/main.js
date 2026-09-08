document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  var dropdowns = document.querySelectorAll('.has-dropdown');
  var closeTimer;

  dropdowns.forEach(function (dd) {
    dd.addEventListener('mouseenter', function () {
      clearTimeout(closeTimer);
      dd.classList.add('show-dropdown');
    });

    dd.addEventListener('mouseleave', function () {
      closeTimer = setTimeout(function () {
        dd.classList.remove('show-dropdown');
      }, 250);
    });

    dd.addEventListener('focusin', function () {
      clearTimeout(closeTimer);
      dd.classList.add('show-dropdown');
    });

    dd.addEventListener('focusout', function (e) {
      if (!dd.contains(e.relatedTarget)) {
        dd.classList.remove('show-dropdown');
      }
    });
  });

  document.addEventListener('click', function (e) {
    dropdowns.forEach(function (dd) {
      if (!dd.contains(e.target)) {
        dd.classList.remove('show-dropdown');
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dropdowns.forEach(function (dd) {
        dd.classList.remove('show-dropdown');
      });
    }
  });
});
