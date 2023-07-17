build:
	docker-compose build server

clean:
	docker-compose stop
	docker-compose rm -f
	docker volume rm prakticum_volume
	docker rmi postgres:14 prakticum-server prakticum-client

up:
	docker-compose up server

update:
	make clean --ignore-errors --keep-going
	make build
	make up

restart:
	docker-compose build server
	docker-compose up server
