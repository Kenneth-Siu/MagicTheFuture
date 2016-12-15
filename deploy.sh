cp -R dist/ ../magictheconvergence
cp -R views/ ../magictheconvergence
cp node_modules/react/dist/react.min.js ../magictheconvergence/node_modules/react/dist/react.min.js
cp node_modules/react-dom/dist/react-dom.min.js ../magictheconvergence/node_modules/react-dom/dist/react-dom.min.js
cp favicon.ico ../magictheconvergence/favicon.ico
cp index.html ../magictheconvergence/index.html

cd ../magictheconvergence
git checkout master
git add .
DATE=`date +%Y-%m-%d:%H:%M:%S`
git commit -m "Deploy on $DATE"
git push

echo "Done"
read