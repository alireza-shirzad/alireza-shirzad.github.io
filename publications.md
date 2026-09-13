---
title: Publications
description: Papers, preprints, and my master's thesis. Also on Google Scholar and DBLP.
permalink: /publications/
---
{% assign pubs = site.data.publications | sort: "year" | reverse %}
{% assign years = pubs | map: "year" | uniq %}
{% for y in years %}
<h2 class="year-heading">{{ y }}</h2>
{% for pub in pubs %}{% if pub.year == y %}{% include publication.html pub=pub %}{% endif %}{% endfor %}
{% endfor %}

