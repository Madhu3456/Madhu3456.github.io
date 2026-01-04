# My Blog

A simple, clean, and mobile-friendly static blog website designed to be hosted for free on GitHub Pages.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)

## Features

- ✅ **Fully Static** - Pure HTML, CSS, and minimal JavaScript
- ✅ **Mobile-First Design** - Responsive on all screen sizes
- ✅ **No Dependencies** - No build tools, frameworks, or npm packages required
- ✅ **Free Hosting** - Works out of the box with GitHub Pages
- ✅ **Easy to Customize** - Clean code structure and CSS variables
- ✅ **Fast Loading** - Minimal assets and optimized performance
- ✅ **Accessible** - Semantic HTML and proper ARIA labels

## Project Structure

```
blog-site/
├── index.html              # Landing page (homepage)
├── posts.json              # Blog post metadata (title, excerpt, date)
├── README.md               # This file
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript for loading posts
├── posts/
│   ├── getting-started-with-blogging.html
│   ├── the-art-of-simplicity.html
│   └── building-for-the-web.html
├── assets/                 # Images and other static assets
│   └── .gitkeep
└── templates/
    └── post-template.html  # Template for new blog posts
```

## Quick Start

### Local Development

1. Clone or download this repository
2. Start a local server (required for JavaScript to work):

   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have npx)
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser and navigate to `http://localhost:8000`

### Deploy to GitHub Pages

1. **Create a GitHub repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it `username.github.io` (for a user site) or any name (for a project site)

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repository-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose the `main` branch and `/ (root)` folder
   - Click "Save"

4. **Access your site**
   - User site: `https://username.github.io`
   - Project site: `https://username.github.io/repository-name`

## Adding a New Blog Post

Adding a new blog post is simple and requires just two steps:

### Step 1: Create the Post HTML File

1. Copy `templates/post-template.html` to the `posts/` folder
2. Rename it with a URL-friendly name (e.g., `my-new-post.html`)
3. Edit the file:
   - Update the `<title>` tag
   - Update the meta description
   - Update the Open Graph tags
   - Change the date in the `<time>` element
   - Replace the post title and content

### Step 2: Update posts.json

Add your new post to the beginning of the `posts.json` array:

```json
[
  {
    "id": "my-new-post",
    "title": "My New Blog Post",
    "excerpt": "A short description of what this post is about. Keep it under 160 characters.",
    "date": "2026-01-15",
    "author": "Your Name",
    "file": "posts/my-new-post.html"
  },
  // ... existing posts
]
```

That's it! Your new post will automatically appear on the homepage.

## Customization

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
  --color-bg: #edbcad;           /* Background color */
  --color-text: #1a1a1a;         /* Primary text color */
  --color-text-muted: #4a4a4a;   /* Secondary text color */
  --color-accent: #8b4a3c;       /* Links and accent elements */
}
```

### Changing Fonts

The blog uses Google Fonts. To change fonts:

1. Visit [fonts.google.com](https://fonts.google.com)
2. Select your preferred fonts
3. Update the `<link>` tag in `index.html` and all post files
4. Update the font variables in `css/style.css`:

```css
:root {
  --font-heading: 'Your Heading Font', serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

### Changing the Site Title

Update the site title in:
- `index.html` - The `<title>` tag and `.site-title` content
- All post files in `posts/` - The `.site-title` content

### Adding Navigation Links

Edit the `<nav class="site-nav">` section in `index.html` and all post files.

## Browser Support

This blog supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ for the open web

