# personal-timeline

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Deploy on gh-pages procedure
``` sh
# 1. build
yarn run build

# 2. navigate into the build output directory
cd dist

# 3. commit
git init
git add -A
git commit -m 'deploy'

# 4. push on gh-pages branch
git push -f git@github.com:julienr114/personal-timeline-game.git master:gh-pages
```
