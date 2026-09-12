---
title: Persian name font preview
description: Temporary page. Every free calligraphic Arabic-script font, rendering the name. Not linked from the navigation.
permalink: /fonts-preview/
sitemap: false
---
<link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&family=Gulzar&family=Amiri&family=Amiri+Quran&family=Scheherazade+New&family=Lateef&family=Harmattan&family=Noto+Naskh+Arabic&family=Markazi+Text&family=Ruwudu&family=Alkalami&family=Aref+Ruqaa&family=Aref+Ruqaa+Ink&family=Katibeh&family=Lalezar&family=Mirza&family=Jomhuria&family=Rakkas&family=Reem+Kufi&family=Reem+Kufi+Ink&family=Qahiri&family=Noto+Kufi+Arabic&family=Vibes&family=Marhey&family=Blaka+Ink&display=swap" rel="stylesheet">
<style>
  @font-face { font-family: "IranNastaliq"; src: url("{{ '/assets/fonts/IranNastaliq-Web.woff2' | relative_url }}") format("woff2"); font-display: swap; }
  .fp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: .9rem; }
  .fp { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: .9rem 1.1rem; }
  .fp-meta { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; margin-bottom: .4rem; }
  .fp-meta code { font-size: .8rem; }
  .fp-meta span { font-size: .75rem; color: var(--text-faint); text-transform: uppercase; letter-spacing: .06em; }
  .fp-name { direction: rtl; font-size: 2.4rem; line-height: 1.6; color: var(--text); padding: .3rem 0; }
  .fp-name.nastaliq { line-height: 2.1; }
  .fp-sm { display: inline-flex; align-items: center; gap: .5rem; margin-top: .3rem; padding-top: .5rem; border-top: 1px dashed var(--border); width: 100%; }
  .fp-sm i { font-size: .82rem; color: var(--text-faint); }
  .fp-sm b { direction: rtl; font-weight: 400; font-size: 1.6rem; color: var(--text-muted); line-height: 1.4; }
</style>

{% assign fonts = "IranNastaliq|nastaliq|self-hosted (OFL),Noto Nastaliq Urdu|nastaliq|Google Fonts,Gulzar|nastaliq|Google Fonts,Amiri|naskh|Google Fonts,Amiri Quran|naskh|Google Fonts,Scheherazade New|naskh|Google Fonts,Lateef|naskh|Google Fonts,Harmattan|naskh|Google Fonts,Noto Naskh Arabic|naskh|Google Fonts,Markazi Text|naskh|Google Fonts,Ruwudu|naskh|Google Fonts,Alkalami|naskh|Google Fonts,Aref Ruqaa|ruqaa|Google Fonts,Aref Ruqaa Ink|ruqaa|Google Fonts,Katibeh|display|Google Fonts,Lalezar|display|Google Fonts,Mirza|display|Google Fonts,Jomhuria|display|Google Fonts,Rakkas|display|Google Fonts,Reem Kufi|kufi|Google Fonts,Reem Kufi Ink|kufi|Google Fonts,Qahiri|kufi|Google Fonts,Noto Kufi Arabic|kufi|Google Fonts,Vibes|handwritten|Google Fonts,Marhey|handwritten|Google Fonts,Blaka Ink|handwritten|Google Fonts" | split: "," %}

<p class="muted">{{ fonts.size }} fonts. Each card shows the name large, then at the size used on the home page. Tell me the name in the <code>code</code> tag of the one you want.</p>

<div class="fp-grid">
{% for f in fonts %}{% assign p = f | split: "|" %}
<div class="fp" id="{{ p[0] | slugify }}">
  <div class="fp-meta"><code>{{ p[0] }}</code><span>{{ p[1] }} · {{ p[2] }}</span></div>
  <div class="fp-name{% if p[1] == 'nastaliq' %} nastaliq{% endif %}" lang="fa" style="font-family: '{{ p[0] }}', serif;">{{ site.data.profile.persian_name }}</div>
  <div class="fp-sm"><i>in Persian:</i> <b lang="fa" style="font-family: '{{ p[0] }}', serif;">{{ site.data.profile.persian_name }}</b></div>
</div>
{% endfor %}
</div>
