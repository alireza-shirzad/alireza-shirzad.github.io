# alireza-shirzad.github.io

Personal academic website. Dark theme, no external Jekyll theme, no build tooling beyond Jekyll itself.

## Deploy on GitHub Pages

1. Push this repository to `github.com/alireza-shirzad/alireza-shirzad.github.io` (branch `main`).
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/pages.yml` and publishes the site.

If you would rather use a project repository (e.g. `github.com/you/site`), set `baseurl: "/site"` in `_config.yml`.
The workflow passes the correct base path automatically.

## Run locally

```bash
bundle install
bundle exec jekyll serve --livereload
# open http://localhost:4000
```

## Write a blog post

```bash
./new-post.sh "Title of the post" crypto,snarks
```

That creates `_posts/YYYY-MM-DD-title-of-the-post.md`. Edit it, push, done. Front matter:

```yaml
---
title: "Title"
subtitle: optional one-liner
tags: [crypto, snarks]
math: true        # default; set false to skip loading KaTeX
---
```

- `<!--more-->` marks the end of the excerpt shown on the blog index.
- Math: `$$ ... $$` (inline on one line, display on its own lines).
- Code: fenced blocks with a language, highlighted at build time.
- Images: put them in `assets/img/` and use `![alt](/assets/img/file.png)`.

## Update content

Everything is data-driven. No HTML editing needed for the common cases.

| What                | File                     |
|---------------------|--------------------------|
| Bio text            | `index.md`               |
| Photo, address, emails, links | `_data/profile.yml` |
| News items          | `_data/news.yml`         |
| Publications        | `_data/publications.yml` |
| Talks               | `_data/talks.yml`        |
| Teaching            | `_data/teaching.yml`     |
| GitHub repositories | `_data/repos.yml`        |
| Navigation bar      | `_data/navigation.yml`   |
| Personal page       | `personal.md`            |
| CV                  | `assets/pdf/cv.pdf`      |
| Colors, fonts       | `assets/css/main.css` (`:root` variables at the top) |

Repository cards on `/code/` fetch live star counts from the GitHub API in the browser; the numbers in `_data/repos.yml` are the fallback.
