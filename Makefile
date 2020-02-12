SHELL = /bin/sh

application_folder = "/home/vinjos/GIT/vuejslearn/vuejslearn/"

application_container_name = "vuejslearn"

shell_bin := $(SHELL command -v )

.DEFAULT_GOAL := help

.PHONY : all
		up
		down
		build

all: up \
	down build message

help: # Vuejs learn application.
	@echo "Vuejs learn application."
	@echo "You can run this application with parameters: build, up, down, clean"

build: # Build docker container.
	$(shell_bin)  docker build -t $(application_container_name):latest .

up: # Run docker container.
	$(shell_bin) docker run -p 8082:80 -v ${application_folder}:/var/www/html/ $(application_container_name) &

down: # Remove docker container.
	$(shell_bin) docker rm $(shell docker stop $(shell docker ps -a -q -f ancestor=$(application_container_name)))

clean: # Remove docker image from local repository.
	$(shell_bin) docker rmi $(application_container_name)