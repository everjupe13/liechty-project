#!/bin/sh

IMAGE_NAME=liechty_front
CONTAINER_NAME=liechty_front_container

docker build -t $IMAGE_NAME .
# docker run -d --rm -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
docker run -d --restart unless-stopped -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
