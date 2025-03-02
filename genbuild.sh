if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS - apple
    sed -i '' 's|http://localhost:3000/|assets/index.html|g' src/services/ModalService.ts
else
    sed -i 's|http://localhost:3000/|assets/index.html|g' src/services/ModalService.ts
fi

rm -rf build
npx react-scripts build
#!/bin/sh 

mkdir build/assets
mv build/static/css/*.css build/assets
mv build/static/js/*.js build/assets
#mv build/static/media/* build/assets

rm -rf build/static

if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS apple
    cd build/ && find . -mindepth 1 -maxdepth 1 ! -name 'assets' -exec mv {} assets/ \;
else
    cd build/ && mv $(ls --ignore=assets .) assets/
fi
cd ..
cp -r zendesk_mock/assets/* build/assets
rm build/assets/iframe.html
rm build/assets/favicon.ico
cp -r zendesk_mock/translations build
cp zendesk_mock/manifest.json build

if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS apple
    awk '{gsub("http://localhost:[0-9]+", "assets/index.html")}1' build/manifest.json > build/manifest_tmp.json && mv build/manifest_tmp.json build/manifest.json
    awk '{gsub("/static/[^/]*/", "")}1' build/assets/asset-manifest.json > build/assets/asset-manifest_tmp.json && mv build/assets/asset-manifest_tmp.json build/assets/asset-manifest.json
    awk '{gsub("/static/[^/]*/", "")}1' build/assets/index.html > build/assets/index_tmp.html && mv build/assets/index_tmp.html build/assets/index.html
    awk '{gsub("url\\.", "url(")}1' build/assets/main.*.css > build/assets/main_tmp.css && mv build/assets/main_tmp.css build/assets/main.css

else
    sed -i 's/http\:\/\/localhost\:[0-9]\+/assets\/index.html/g' build/manifest.json
    sed -i 's/\/static\/[^\/]\+\///g' build/assets/asset-manifest.json
    sed -i 's/\/static\/[^\/]\+\///g' build/assets/index.html
    # sed -i 's/\/static\/[^\/]\+\///g' build/assets/precache-manifest.*   <--
    sed -i 's/url.\//url(/g' build/assets/main.*.css
fi

cd  build
zcli apps:package

cd ..
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS apple
    sed -i '' 's|assets/index.html|http://localhost:3000/|g' src/services/ModalService.ts
else
    sed -i 's|assets/index.html|http://localhost:3000/|g' src/services/ModalService.ts
fi
