rm ../magictheconvergence/dist/*
cp -R dist/ ../magictheconvergence

rm ../magictheconvergence/views/*
cp -R views/ ../magictheconvergence

cp node_modules/react/dist/react.min.js ../magictheconvergence/node_modules/react/dist/react.min.js
cp node_modules/react-dom/dist/react-dom.min.js ../magictheconvergence/node_modules/react-dom/dist/react-dom.min.js

rm ../magictheconvergence/favicon.png
cp favicon.png ../magictheconvergence/favicon.png

cp index.html ../magictheconvergence/index.html

cd ../magictheconvergence
git checkout master
git add .
DATE=`date +%Y-%m-%d:%H:%M:%S`
git commit -m "Deploy on $DATE"
git push

echo "Done"
read