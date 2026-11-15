# Band Website

A promotional site for a band built in Vue 3 and Vite, including contact functionality with EmailJS, repertoire and testimonial pages, a parallax home page and responsive design.

## Future features
- Additional content pages including more videos
- Interactive set list creator

## Requirements

Node.js 20.19+ (Node 26 recommended — see `.nvmrc`):

```
nvm use
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Previews the production build locally
```
npm run preview
```

### Lints files
```
npm run lint
```

## Environment variables

The contact form sends email via EmailJS and needs these variables at build time. They're set in the hosting environment for production. To test the form locally, create a `.env.local` file (it's gitignored) in the project root:

```
VUE_APP_EMAIL_SERVICE=<EmailJS service ID>
VUE_APP_EMAIL_CONTACT=<EmailJS template ID>
VUE_APP_EMAIL_ID=<EmailJS public key>
```

## Link previews

The page title, description and Open Graph tags used by Facebook, WhatsApp etc. are static in `index.html`, and the preview image is `public/og-image.jpg`. After changing them, use the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and click **Scrape Again** to refresh Facebook's cached preview.
