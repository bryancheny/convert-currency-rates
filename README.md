# Currency Converter

This is a responsive currency converter website which fetches data daily from an external [API](https://www.exchangerate-api.com/). The page is pre-rendered at build time and a cached static page is shown to visitors. The site is rebuilt using [IFTTT](https://ifttt.com/) to visit Netlify's API endpoint everyday at 8.01am. (Unfortunately netlify doesn't support Next.js's [On-demand Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) yet) This is done because the external API itself only updates daily, using the free tier anyway. Built with Next.js, React and React-Bootstrap.

## [Demo here](https://convert-currency-rates.netlify.app/)

![image](https://user-images.githubusercontent.com/68541293/194449263-ebc52d24-4eab-4fae-ae61-ae597dd81423.png)
