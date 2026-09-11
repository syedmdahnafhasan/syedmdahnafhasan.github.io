# Academic Portfolio Website (GitHub Pages)

This repository contains a static academic portfolio website designed for GitHub Pages.
It uses only HTML, CSS, and minimal static assets.

## Files and Structure

- `index.html`: home page with bio, research interests, and selected publications
- `projects.html`: full project list
- `publications.html`: publication list in academic CV style
- `cv.html`: structured CV (education, experience, awards, skills, interests)
- `assets/css/style.css`: shared site styling (light and dark color sets)
- `assets/js/theme.js`: dark/light toggle button; dark is the default, and the visitor's choice is saved in the browser
- `assets/images/profile.jpg`: profile photo (600px wide)

Contact info (email, GitHub, LinkedIn) lives in the header social icons on every page, not a separate Contact tab.

## Update Profile Photo

1. Replace `assets/images/profile.jpg` with your own image (resize to about 600px wide to keep the page fast).
2. Keep the same filename, or update the image path in `index.html`.

## Update CV

1. Open `cv.html`.
2. Update the Education, Experience, Honors & Awards, Skills, and Research Interests sections directly.

## Edit Projects

1. Open `projects.html`.
2. Update project titles, descriptions, and links (`Paper`, `Code`, `Dataset`).
3. Optionally update the highlighted projects in `index.html`.

## Edit Publications

1. Open `publications.html`.
2. Update authors, title, venue/year, and publication links.
3. Keep formatting consistent for readability.

## Deploy with GitHub Pages

1. Push changes to the `main` branch.
2. In repository settings, enable GitHub Pages from the `main` branch root.
