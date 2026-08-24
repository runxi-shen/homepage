/* ── homepage interactions ──────────────────────────────
   Zero dependencies:
     1. ☾ light/dark toggle (dark by default, persisted)
     2. fade-up reveal on scroll (respects reduced motion)
     3. subtle header elevation once you scroll                     */

(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var STORAGE_KEY = "runxi-theme";

  /* ── 1. theme toggle ── */
  var toggle = document.querySelector(".theme-toggle");
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* private mode */ }
  }
  if (toggle) {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "dark" || stored === "light") root.setAttribute("data-theme", stored);
    } catch (e) { /* ignore */ }
    toggle.addEventListener("click", function () {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  /* ── 2. reveal on scroll ── */
  var revealEls = document.querySelectorAll(".section, .ticker, .hero-inner");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ── 3. header elevation on scroll ── */
  var header = document.getElementById("site-header");
  if (header) {
    var onScroll = function () {
      header.style.boxShadow = window.scrollY > 8 ? "0 6px 24px -12px rgba(0,0,0,0.5)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
