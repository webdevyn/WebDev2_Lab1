# Tailwind Unit Converter

A portfolio project showcasing a responsive unit converter built with HTML, JavaScript, and Tailwind CSS. The app provides simple conversions for weight, distance, and temperature through a clean multi-page interface with reusable shared components.

## Overview

This project demonstrates front-end fundamentals including:

- Building a responsive user interface with Tailwind CSS
- Reusing shared HTML components across multiple pages
- Writing client-side JavaScript for dynamic unit conversion
- Organizing a small static web app for maintainability and readability

## Features

- Convert between kilograms and pounds
- Convert between kilometers and miles
- Convert between Celsius and Fahrenheit
- Shared navigation across pages
- Reusable input form component
- Lightweight static site with no build step required

## Tech Stack

- HTML5
- JavaScript
- Tailwind CSS (via CDN)

## Project Structure

```text
.
├── index.html
├── weight.html
├── distance.html
├── temperature.html
├── navbar.html
├── inputForm.html
└── script.js
```

## Running the Project Locally

Clone the repository and open one of the HTML files in your browser:

```bash
git clone https://github.com/webdevyn/tailwind-unit-converter.git
cd tailwind-unit-converter
open weight.html
```

If your browser blocks local `fetch()` requests when opening files directly, run a simple local server instead:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/weight.html
```

## What This Project Highlights

This project was built to practice and demonstrate:

- Responsive layout design
- DOM manipulation with JavaScript
- Reusable UI structure in a static site
- Basic conversion logic and event handling
- Clean project organization for small front-end apps

## Future Improvements

Potential next steps for expanding this project include:

- Add reverse conversion controls with clearer UX
- Improve error handling and input validation
- Consolidate the app into a single-page interface
- Add automated tests for conversion logic
- Refine accessibility and keyboard navigation

## About

This repository is part of my front-end development portfolio and reflects hands-on practice with building small, interactive browser-based applications.
