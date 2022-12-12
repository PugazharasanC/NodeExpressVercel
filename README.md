# NodeExpressVercel

Hosting your backend code on vercel is way more ~~Complicated~~ ***Easy***.

In order to host your backend application on Vercel. You need to have vercel configuration file(vercel.json).

```
/*
  vercel.json
  Do not modify this file
*/
{
  "version": 2,
  "builds": [
      {
          "src": "./index.js",
          "use": "@vercel/node"
      }
  ],
  "routes": [
      {
          "src": "/(.*)",
          "dest": "/"
      }
  ]
}

```
