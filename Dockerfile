# Use a base image with a web server installed
FROM nginx:stable-alpine3.17

# Copy the website files to the appropriate location
COPY FRT/  /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
