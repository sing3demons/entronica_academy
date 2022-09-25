# demo-api-ts
demo project workshop 
- api login
- api register
- api user

## Getting started docker-compose
```docker
docker compose up -d
```

## Getting started
```sh
yarn 
```

```run 
tsc
yarn start
```

```dev 
yarn run dev
```
<hr/>
### Create project 
```init
yarn init -y
```

### install typescript nodemon ts-node for dev
```ts-node
yarn add -D typescript ts-node ts-node-dev 
```
### Create project ts
```
npx tsc --init
mkdir src
```


### edit tsconfig.json
```
"compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es2020",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  ```

### add script to package.json
  ```
  "scripts": {
        "start": "node src/index.js",
        "build": "tsc",
        "dev": "ts-node-dev src/index.ts"
    },
  ```

### install express
```
yarn add express morgan mongoose bcrypt
yarn add -D rimraf @types/express @types/morgan @types/mongoose @types/bcrypt
```

