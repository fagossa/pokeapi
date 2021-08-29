.PHONY: build
build:
	npm run deploy

.PHONY: copy
copy:
	cp -R build/* .