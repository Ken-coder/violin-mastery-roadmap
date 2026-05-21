# Violin Mastery Roadmap

An interactive, bright infographic roadmap for learning violin from first setup
to stage-ready performance.

## Features

- Personalized learning start date and expected finish date
- Overall progress dashboard
- Clickable milestone cards
- Daily activity checklists for every milestone
- Date-progress and task-progress tracking
- Helpful violin resources for each phase
- Missed-day alert workflow with optional EmailJS support

## Live Site

This project is designed for GitHub Pages and runs as a static website with no
build step.

## Local Use

Open `index.html` in a browser, or serve the folder with any static file server.

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Email Alerts

The app detects missed daily checklist work in the browser. To send automatic
email alerts, configure the EmailJS fields inside the website settings panel.

Without EmailJS, the tracker can still prepare a missed-day email draft.
