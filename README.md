# Apicult’eirb
Static showcase site for the French Apicult’eirb association: presenting the association and its news.

## Running in development mode

```bash
npm install
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for production

```bash
npm run build
```
The static files will be located in the `dist/` folder.

## Updating the news content

News items are located in `src/sections/Actu.tsx`. Each item is a TypeScript object with the following fields:

```typescript
interface Actu {
  date: string;      // Date of the news item (e.g. "April 2025")
  title: string;     // Title of the news item
  content: string;   // Content of the news item (can include line breaks)
  images?: string[]; // Optional array of image URLs related to the news item
}
```

To add a new news item, simply add a new object to the `actus` array in `src/sections/Actu.tsx`. Make sure to follow the existing format for consistency.

## License / Mention

© 2025 Apicult’eirb — All rights reserved.