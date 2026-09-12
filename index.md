---
layout: default
title: Home
permalink: /
---
{% assign me = site.data.profile %}
<section class="hero">
  <div class="hero-text">
    <h1>{{ me.name }}</h1>
    <p class="role">{{ me.role }}</p>

<div markdown="1">
Hi! I'm {{ me.short_name }}. I am a Ph.D. student of [Computer and Information Science](https://www.cis.upenn.edu/) at the [University of Pennsylvania](https://www.upenn.edu/), where I am a member of the [Security and Privacy Lab](https://splab.cis.upenn.edu/). I am fortunate to be advised by [Pratyush Mishra](https://pratyushmishra.com/).

I'm interested in **applied cryptography** and building **provably secure systems** for real-world applications. Most of my work is on succinct proof systems: SNARKs, polynomial commitment schemes, and the things one can build with them, from transparent key directories to verifiable databases.

Previously, I was a research intern at [Lagrange](https://www.lagrange.dev/), hosted by [Charalampos (Babis) Papamanthou](https://www.cs.yale.edu/homes/cpap/) and [Dimitris Papadopoulos](https://www.cse.ust.hk/~dipapado/).

Before joining Penn, I earned a master's degree in Secure Communication and Cryptography from [Sharif University of Technology](https://en.sharif.ir/), where I worked with [Dr. Taraneh Eghlidos](https://sharif.edu/~teghlidos/). I received my bachelor's degree in Electrical Engineering (with a Computer Science minor) from the same university.
</div>

    <div class="social">
      {% for l in me.links %}
      <a href="{{ l.url | relative_url }}" target="_blank" rel="noopener">{% include icon.html name=l.icon %}{{ l.label }}</a>
      {% endfor %}
    </div>
  </div>

  <figure class="hero-photo">
    <img src="{{ me.photo | relative_url }}" alt="Portrait of {{ me.name }}" width="500" height="375">
    {% if me.photo_credit %}<figcaption>{{ me.photo_credit.text }}{% if me.photo_credit.url %} · <a href="{{ me.photo_credit.url }}" target="_blank" rel="noopener">link</a>{% endif %}</figcaption>{% endif %}
  </figure>
</section>

<section class="contact-grid">
  <div class="card">
    <h4>{% include icon.html name="pin" %} Office</h4>
    <address>{% for line in me.address %}{{ line }}{% unless forloop.last %}<br>{% endunless %}{% endfor %}</address>
  </div>
  <div class="card">
    <h4>{% include icon.html name="mail" %} Email</h4>
    <ul>
      {% for e in me.emails %}<li><a href="mailto:{{ e.address }}"><code>{{ e.address }}</code></a> <small>({{ e.label }})</small></li>{% endfor %}
    </ul>
    {% if me.contact_note %}<p class="muted" style="margin-top:.5rem;font-size:.85rem">{{ me.contact_note }}</p>{% endif %}
  </div>
</section>

<h2>News</h2>
<ul class="news-list">
  {% for n in site.data.news limit: 6 %}
  <li>
    <span class="news-date">{{ n.date | date: "%b %-d, %Y" }}</span>
    <div>{{ n.text | markdownify }}</div>
  </li>
  {% endfor %}
</ul>
