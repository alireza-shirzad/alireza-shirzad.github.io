---
title: Code
description: Building things from scratch excites me, especially when it comes to cryptography and SNARKs. Rust is my language of choice.
permalink: /code/
---
{% assign R = site.data.repos %}
{% for sec in R.sections %}
<h2>{{ sec.title }}</h2>
{% if sec.blurb %}<p class="muted">{{ sec.blurb }}</p>{% endif %}
<div class="repo-grid">
  {% for r in sec.repos %}
  {% assign parts = r.name | split: "/" %}
  <a class="repo" href="https://github.com/{{ r.name }}" target="_blank" rel="noopener" data-repo="{{ r.name }}">
    <span class="repo-name">{% include icon.html name="github" %}<span><span class="repo-owner">{{ parts[0] }}/</span>{{ parts[1] }}</span></span>
    <p class="repo-desc" data-desc>{{ r.description }}</p>
    <span class="repo-meta">
      <span>{% include icon.html name="star" %}<span data-stars>{{ r.stars | default: 0 }}</span></span>
      <span data-forks-wrap hidden>{% include icon.html name="fork" %}<span data-forks>0</span></span>
      <span><span class="lang-dot"></span><span data-lang>{{ r.language }}</span></span>
    </span>
  </a>
  {% endfor %}
</div>
{% endfor %}

<p class="muted">All of my public repositories are on <a href="https://github.com/{{ R.github_user }}?tab=repositories" target="_blank" rel="noopener">GitHub</a>.</p>

<script src="{{ '/assets/js/repos.js' | relative_url }}" defer></script>
