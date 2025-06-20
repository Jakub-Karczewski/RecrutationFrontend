# Etap serwowania statycznych plików
FROM nginx:alpine

# Kopiujemy zbudowane pliki do folderu serwowanego przez Nginx
COPY build/ /usr/share/nginx/html

# Nginx domyślnie expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]