# Étape 1 : build (pour le front vanilla, juste copier les fichiers)
FROM node:20-alpine AS build
WORKDIR /app

# Copier le dossier public
COPY public ./public

# Préparer le dossier final pour Nginx
RUN mkdir -p /app/dist && cp -r public/* /app/dist/

# Étape 2 : serveur Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose le port HTTP
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
