# Use Node 18.14.2 as the base image
FROM node:18.14.2 AS build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the source code and build the Angular app
COPY . .
RUN npm run build -- --configuration=production

# Use Nginx for serving the built app
FROM nginx:1.19
COPY --from=build /app/dist/marketplace /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
