// Fetches live stars / description / language for every element that has a
// data-repo="owner/name" attribute. The static values written by Jekyll stay
// in place if the GitHub API is unreachable or rate-limited.
(function () {
  var cards = document.querySelectorAll("[data-repo]");
  if (!cards.length) return;

  function fmt(n) {
    return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
  }

  cards.forEach(function (card) {
    var full = card.getAttribute("data-repo");
    var key = "gh:" + full;
    var cached = null;
    try { cached = JSON.parse(sessionStorage.getItem(key)); } catch (e) {}

    function apply(d) {
      if (!d) return;
      var stars = card.querySelector("[data-stars]");
      var forks = card.querySelector("[data-forks]");
      var desc = card.querySelector("[data-desc]");
      var lang = card.querySelector("[data-lang]");
      if (stars && typeof d.stargazers_count === "number") stars.textContent = fmt(d.stargazers_count);
      if (forks && typeof d.forks_count === "number") { forks.textContent = fmt(d.forks_count); var w = card.querySelector("[data-forks-wrap]"); if (w) w.hidden = false; }
      if (desc && d.description && !desc.getAttribute("data-desc")) desc.textContent = d.description;
      if (lang && d.language) lang.textContent = d.language;
    }

    if (cached) { apply(cached); return; }

    fetch("https://api.github.com/repos/" + full, { headers: { Accept: "application/vnd.github+json" } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d) return;
        var slim = { stargazers_count: d.stargazers_count, forks_count: d.forks_count, description: d.description, language: d.language };
        try { sessionStorage.setItem(key, JSON.stringify(slim)); } catch (e) {}
        apply(slim);
      })
      .catch(function () { /* keep static values */ });
  });
})();
