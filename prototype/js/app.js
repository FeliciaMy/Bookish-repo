/**
 * Bookish prototype — hash router + light interactions
 */
(function () {
  const TAB_SCREENS = new Set(["home", "explore", "sell-1", "profile"]);
  const FAB_SCREENS = new Set(["home", "explore"]);

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function currentRoute() {
    const hash = (location.hash || "#welcome").slice(1);
    return hash.split("?")[0] || "welcome";
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  function navigate(route) {
    location.hash = route;
  }

  function render() {
    const route = currentRoute();
    $$(".screen").forEach((el) => {
      el.classList.toggle("active", el.dataset.screen === route);
    });

    const nav = $("#bottom-nav");
    const fab = $("#fab");
    if (nav) {
      nav.classList.toggle("visible", TAB_SCREENS.has(route) || route === "sell-1");
    }
    if (fab) {
      fab.classList.toggle("visible", FAB_SCREENS.has(route));
    }

    // Active tab highlight
    const tabMap = {
      home: "home",
      explore: "explore",
      "sell-1": "sell",
      "sell-2": "sell",
      "sell-3": "sell",
      "sell-4": "sell",
      "sell-5": "sell",
      "sell-preview": "sell",
      profile: "profile",
      settings: "profile",
    };
    const activeTab = tabMap[route];
    $$(".nav-item").forEach((item) => {
      item.classList.toggle("active", item.dataset.tab === activeTab);
    });

    const activeScreen = $(`.screen[data-screen="${route}"]`);
    if (activeScreen) {
      const scroll = activeScreen.querySelector(".screen-scroll");
      if (scroll) scroll.scrollTop = 0;
    }
  }

  // Choice toggles (single-select within group)
  document.addEventListener("click", (e) => {
    const choice = e.target.closest(".choice");
    if (choice) {
      const group = choice.parentElement;
      if (group?.dataset.multi !== undefined) {
        choice.classList.toggle("selected");
      } else {
        $$(".choice", group).forEach((c) => c.classList.remove("selected"));
        choice.classList.add("selected");
      }
    }

    const filter = e.target.closest(".filter-chip");
    if (filter) {
      filter.classList.toggle("active");
    }

    const like = e.target.closest(".like-btn");
    if (like) {
      like.classList.toggle("liked");
      const countEl = like.querySelector(".like-count");
      if (countEl) {
        let n = parseInt(countEl.textContent, 10);
        n = like.classList.contains("liked") ? n + 1 : n - 1;
        countEl.textContent = n;
      }
    }

    const star = e.target.closest(".star-input span");
    if (star) {
      const wrap = star.parentElement;
      const idx = [...wrap.children].indexOf(star);
      $$("span", wrap).forEach((s, i) => s.classList.toggle("on", i <= idx));
    }

    const publishSale = e.target.closest("[data-publish-sale]");
    if (publishSale) {
      e.preventDefault();
      showToast("Listing published");
      setTimeout(() => navigate("sale"), 600);
    }

    const publishReview = e.target.closest("[data-publish-review]");
    if (publishReview) {
      e.preventDefault();
      showToast("Review published");
      setTimeout(() => navigate("review"), 600);
    }

    const photoAdd = e.target.closest(".photo-add");
    if (photoAdd && !photoAdd.classList.contains("has-img")) {
      photoAdd.classList.add("has-img");
      photoAdd.innerHTML =
        '<img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80" alt="Book photo" />';
    }

    const tabBtn = e.target.closest(".profile-tabs button");
    if (tabBtn) {
      $$(".profile-tabs button").forEach((b) => b.classList.remove("active"));
      tabBtn.classList.add("active");
      const panel = tabBtn.dataset.panel;
      $$(".profile-panel").forEach((p) => {
        p.hidden = p.dataset.panel !== panel;
      });
    }
  });

  window.addEventListener("hashchange", render);
  window.addEventListener("DOMContentLoaded", render);

  // Expose for inline links that need programmatic nav
  window.Bookish = { navigate, showToast };
})();
