(function () {
  'use strict';

  var noticeBar = document.getElementById('eventNotice');
  var noticeClose = document.querySelector('[data-notice-close]');
  var NOTICE_KEY = 'gitgood-notice-dismissed';

  if (noticeBar && noticeClose) {
    var noticeDismissed = false;
    try { noticeDismissed = localStorage.getItem(NOTICE_KEY) === '1'; } catch (e) {}
    if (noticeDismissed) {
      noticeBar.classList.add('is-hidden');
    }
    noticeClose.addEventListener('click', function () {
      noticeBar.classList.add('is-hidden');
      try { localStorage.setItem(NOTICE_KEY, '1'); } catch (e) {}
    });
  }

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('siteNav');
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var hasIO = 'IntersectionObserver' in window;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function onScroll() {
    if (window.scrollY > 8) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function closeMenu() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1000) {
      closeMenu();
    }
  });

  if (reduced || !hasIO) {
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) {
      el.classList.add('in');
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) {
      revealObserver.observe(el);
    });
  }

  var sections = [
    { id: 'home', link: null },
    { id: 'about', link: null },
    { id: 'services', link: null },
    { id: 'skills', link: null },
    { id: 'projects', link: null },
    { id: 'events', link: null }
  ];

  sections.forEach(function (section) {
    section.link = Array.prototype.find.call(links, function (a) {
      return a.getAttribute('href') === '#' + section.id;
    });
  });

  function setActive(id) {
    sections.forEach(function (section) {
      if (!section.link) return;
      if (section.id === id) {
        section.link.classList.add('is-active');
      } else {
        section.link.classList.remove('is-active');
      }
    });
  }

  if (hasIO) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(function (section) {
      var el = document.getElementById(section.id);
      if (el) {
        sectionObserver.observe(el);
      }
    });
  } else {
    setActive('home');
  }
})();