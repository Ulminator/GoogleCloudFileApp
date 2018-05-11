docker kill filescan && docker rm -f filescan

# Build the image
docker build --build-arg NODE_ENV=development -t filescan .

# Build the container from the image
docker run --publish 8080:8080 -d --name filescan filescan