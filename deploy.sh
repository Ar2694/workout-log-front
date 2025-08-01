echo "switching to branch main"

git checkout main

echo "Building the app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* $VITE_SERVER_URL

echo "Done!"