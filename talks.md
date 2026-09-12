---
title: Talks
description: Invited talks at academic seminars and conference presentations.
permalink: /talks/
---
{% for t in site.data.talks %}
<div class="tl-group">
  <h3 class="tl-group-title">{% if t.pub %}<a href="{{ '/publications/#' | append: t.pub | relative_url }}">{{ t.title }}</a>{% else %}{{ t.title }}{% endif %}</h3>
  <ul class="tl">
    {% for e in t.events %}
    <li><span>{{ e.venue }}{% if e.location %} <span class="where">· {{ e.location }}</span>{% endif %}</span><span class="when">{{ e.date }}</span></li>
    {% endfor %}
  </ul>
</div>
{% endfor %}
