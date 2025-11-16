# Étape 1 : Préparer les fichiers du front
FROM node:20-alpine AS build
WORKDIR /app

# Copier tout le front (ton repo contient /public)
COPY . .

# Copier les fichiers dans /dist pour Nginx
RUN mkdir -p /app/dist && cp -r public/* /app/dist

# Injecter automatiquement l'attribut data-env="prod" dans index.html
RUN sed -i 's/data-env="[^"]*"/data-env="prod"/' /app/dist/index.html

# Étape 2 : Nginx pour servir le front
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copier le front buildé
COPY --from=build /app/dist /usr/share/nginx/html

# Copier la config Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port HTTP
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
