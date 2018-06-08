# react-curriculum-vitae

Creating curriculum vitae with React.
Output pdf file.


![image](./doc/demo.png)


## DEMO

https://wheatandcat.github.io/react-curriculum-vitae/example/example.pdf

## init

```
npm i
npm run build
```

## develop

terminal A
```
npm start
```

terminal B
```
npm run watch:pdf
```

* access: => http://localhost:3000/

## production output pdf
```
vi ./src/secret.json
```

 * secret.json

```
{
  "name": "xxxx xxxx",
  "companyNames": [
    "株式会社 xxxxx",
    "株式会社 xxxxx",
    "株式会社 xxxxx",
    "株式会社 xxxxx",
    "株式会社 xxxxx"
  ]
}
```

```
ENV=production npm run pdf

open ./build/build.pdf
```
