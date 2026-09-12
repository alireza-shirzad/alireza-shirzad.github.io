#!/usr/bin/env bash
# Create a new blog post:  ./new-post.sh "My post title" [tag1,tag2]
set -euo pipefail
if [ $# -lt 1 ]; then echo "usage: $0 \"Post title\" [tag1,tag2]"; exit 1; fi
title="$1"
tags="${2:-}"
date="$(date +%Y-%m-%d)"
slug="$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g')"
file="$(dirname "$0")/_posts/${date}-${slug}.md"
if [ -e "$file" ]; then echo "already exists: $file"; exit 1; fi
{
  echo "---"
  echo "title: \"$title\""
  echo "subtitle:"
  echo "tags: [${tags}]"
  echo "---"
  echo
  echo "Write your intro here. Everything above the marker below shows up as the excerpt on the blog index."
  echo
  echo "<!--more-->"
  echo
  echo "## Section"
  echo
} > "$file"
echo "created $file"
