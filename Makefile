.PHONY: start-env

start-env:
		docker compose up
stop-env:
		docker compose down

dive-into-api:
	docker-compose exec webapp bash
