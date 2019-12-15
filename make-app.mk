app:
	docker-compose up

app-build:
	docker-compose build
	docker-compose run shop npm install
	docker-compose run shop npm run typeorm migration:run
	# docker-compose run app2 npm install

app-bash:
	docker-compose run app bash