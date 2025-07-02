# Dockerfile for a simple static website using Nginx
FROM nginx:alpine

# remove the default nginx index.html file
RUN rm -rf /usr/share/nginx/html/*

# Copy the static files from the current directory to the nginx html directory
COPY . /usr/share/nginx/html

# port on which the container will listen
EXPOSE 80