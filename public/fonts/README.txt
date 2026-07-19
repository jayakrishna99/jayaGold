Aktiv Grotesk (Dalton Maag) is the site's typeface. Two ways to activate it:

1. Adobe Fonts (recommended): create a web project containing Aktiv Grotesk
   at fonts.adobe.com, then paste the kit <link> into src/app/layout.tsx
   where the placeholder comment is. The CSS already references the
   Adobe family name "aktiv-grotesk".

2. Self-hosted: place licensed webfont files here:

     AktivGrotesk-Regular.woff2
     AktivGrotesk-Medium.woff2
     AktivGrotesk-Bold.woff2

   The @font-face rules in src/app/globals.css pick them up automatically.

Until either is in place, the site falls back to Poppins.
