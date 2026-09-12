---
title: "Hello, world (and how this blog works)"
subtitle: A first post that doubles as a cheat sheet for writing here.
tags: [meta]
---

Welcome to the blog. This first post exists mostly so that I remember how to write the next one. Every post is a Markdown file in `_posts/` named `YYYY-MM-DD-slug.md`, and GitHub Pages rebuilds the site on every push.

<!--more-->

## Math

Math is rendered client-side with KaTeX. Inline math uses `$$ ... $$` on the same line, like $$e = mc^2$$, and display math uses `$$` on its own lines:

$$
\Pr\bigl[\,\mathcal{V}(\mathsf{vk}, x, \pi) = 1 \;\wedge\; x \notin \mathcal{L}\,\bigr] \le \mathsf{negl}(\lambda)
$$

A SNARK for a relation $$\mathcal{R}$$ is *succinct* if the proof $$\pi$$ and the verifier's running time are $$\mathrm{poly}(\lambda, \log \lvert C \rvert)$$ for a circuit $$C$$. (One gotcha: write $$\lvert x \rvert$$ rather than `|x|` in inline math, because a bare pipe makes Markdown think the line is a table.)

## Code

Fenced code blocks are highlighted at build time:

```rust
fn evaluate<F: Field>(coeffs: &[F], point: F) -> F {
    // Horner's rule: O(n) field operations.
    coeffs.iter().rev().fold(F::zero(), |acc, c| acc * point + *c)
}
```

## Everything else

> Blockquotes look like this.

| Scheme   | Proof size | Verifier      |
|----------|-----------:|---------------|
| Groth16  | 3 G        | O(1)          |
| Pari     | 2 G + 2 F  | O(1)          |
| DewTwo   | 4.5 KB     | O(log N)      |

Images go in `assets/img/` and are referenced with `![alt](/assets/img/name.png)`. Footnotes work too.[^1]

[^1]: Like this one.
