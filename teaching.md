---
title: Teaching
description: Courses I have taught as the main instructor or supported as a teaching assistant.
permalink: /teaching/
---
{% assign T = site.data.teaching %}

## Instructor
{% for inst in T.instructor %}
<div class="inst"><strong>{{ inst.institution }}</strong><span>{{ inst.location }}</span></div>
<ul class="tl">
  {% for c in inst.courses %}<li><span>{{ c.name }}</span><span class="when">{{ c.term }}</span></li>{% endfor %}
</ul>
{% endfor %}

## Teaching Assistant
{% for inst in T.ta %}
<div class="inst"><strong>{{ inst.institution }}</strong><span>{{ inst.location }}</span></div>
<ul class="tl">
  {% for c in inst.courses %}<li><span>{{ c.name }}</span><span class="when">{{ c.term }}</span></li>{% endfor %}
</ul>
{% endfor %}
