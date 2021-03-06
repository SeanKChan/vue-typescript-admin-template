#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build:prod  -- --report

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll


git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:SeanKChan/vue-typescript-admin-template.git master:gh-pages

echo "open https://seankchan.github.io/vue-typescript-admin-template/

cd -
