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

Once its done, Kindly add the below json value to your package.json file.


```
"engines": {
    "node" : "14.x"
  }
```


Here you go. Now your project is all set and ready to host it on Vercel.

###Do not forget to push your project on github.

Now open your browser and goto [Vercel.com](https://vercel.com/)

* Login
* Connect your github profile
* import your project
* add env variables and values
* Deploy

and Boooooooooom.......... Your site is deployed.
