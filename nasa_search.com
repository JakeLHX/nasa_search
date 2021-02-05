server {
  listen 3002 default_server;
  listen [::]:3002 default_server;
  root /app/nasa_search/dist/;
  index index.html;
  server_name localhost http://77.68.95.65/;
  location / {
    try_files $uri $uri/ =404;
  }
}