FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY logo.svg /usr/share/nginx/html/
COPY test-logo.html /usr/share/nginx/html/
COPY debug-logo.html /usr/share/nginx/html/
COPY index-debug.html /usr/share/nginx/html/
COPY logo-debug.js /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
