cp -R dist/ ../magictheconvergence
cp views/visualSpoiler.html ../magictheconvergence/views/visualSpoiler
cp views/draftSim.html ../magictheconvergence/views/draftSim
cp node_modules/react/dist/react.min.js ../magictheconvergence/node_modules/react/dist/react.min.js
cp node_modules/react-dom/dist/react-dom.min.js ../magictheconvergence/node_modules/react-dom/dist/react-dom.min.js
cp favicon.ico ../magictheconvergence/favicon.ico
cp index.html ../magictheconvergence/index.html

cd ../magictheconvergence
git checkout master
echo "Are we on master?"
read
git add .
DATE=`date +%Y-%m-%d:%H:%M:%S`
git commit -m "Deploy on $DATE"
git push

echo "Done"
read