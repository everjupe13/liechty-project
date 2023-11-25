#!/bin/sh

IMAGE_NAME=liechty_front
CONTAINER_NAME=liechty_front_container

docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME
docker rmi -f $IMAGE_NAME