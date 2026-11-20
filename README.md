# saronpaz.com — new static site

A fast rebuild of the old WordPress site (same design, same URLs), made with [Astro](https://astro.build).
No database, no admin panel, no plugins: every page is a plain file.

## Where things live

| What | File |
|---|---|
| A project (text, year, client, tags, images, videos) | `src/content/projects/<name>.md` |
| Services + MeansToNoEnd | `src/content/pages/<name>.md` |
| Hero lines, About, "Talk to us", contact details, menu, Partners, Clients, Talented Friends, Just talented (name, image, website `url`) | `src/data/site.json` |
| Images | `public/images/<project>/` |
| Look & feel | `src/styles/global.css` and the `<style>` block in each `.astro` file |

### Project file fields

```yaml
title: "DoppelGänger"
subtitle: "Army of one"        # small italic line under the title (optional)
section: "experiments"         # experiences | experiments | expeditions | other (not on homepage)
order: 39                      # position on the homepage
category: "Installations"
experiences: ["Public X", "Tech X"]
tags: ["Public X", "Tech X"]   # homepage filter buttons
client: "Science Gallery Dublin"
year: "2017"
thumb: "/images/doppelganger/thumb.webp"
header: "/images/doppelganger/header.webp"
headerPosition: "center 20%"   # optional: which part of the banner image shows
videos: ["gI6PaABY3XQ"]        # YouTube ids (or "vimeo:123456")
gallery: ["/images/doppelganger/001.webp"]
hidden: false                  # true = keep the page but hide it from the homepage
```

Everything under the second `---` is the project text (Markdown, one blank line between paragraphs).

## Run it

```bash
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # final site in dist/
```

## Hosting

- Live at https://saronpaz.com on GitHub Pages (repo sarohm/saronpaz-site). Every push to main deploys.
- Domain registered at box.il; DNS managed in box.il's DNS zone editor (4 A records to GitHub Pages + CNAME www → sarohm.github.io).
- Repo variable SITE_BASE is "/".

## Notes


- The old WordPress was compromised (~300 spam posts, outdated Slider Revolution plugin). None of that was copied.
- Contact is a mailto button (no form backend).
