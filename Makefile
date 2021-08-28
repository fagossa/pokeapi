deploy:
	npm run deploy
	rm -rf public src && cp -R build/* .