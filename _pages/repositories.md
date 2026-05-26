---
layout: page
permalink: /repositories/
title: repositories
description: Building things from scratch excites me—especially when it comes to cryptography and SNARKs. Rust is my preferred language.
nav: true
nav_order: 5
---

{% if site.repo_trophies.enabled and site.data.repositories.github_users %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}
  <h4>{{ user }}</h4>
{% endif %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
{% include repository/repo_trophies.liquid username=user %}
</div>

---

{% endfor %}
{% endif %}

<!-- {% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %} -->


{% if site.data.repositories.authored_repos %}
## My projects

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.authored_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

{% if site.data.repositories.open_source_repos %}
## My open-source contributions 

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.open_source_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
