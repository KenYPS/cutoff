
# FROM node:12.14.1-alpine as build

# WORKDIR /app

# COPY . /app

# RUN yarn

# RUN yarn build


# set up production environment
# the base image for this is an alpine based nginx image
FROM nginx:alpine
# copy the build folder from react to the root of nginx (www)
COPY ./build /usr/share/nginx/html
# --------- only for those using react router ----------
# if you are using react router 
# you need to overwrite the default nginx configurations
# remove default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY nginx.conf /etc/nginx/conf.d
# --------- /only for those using react router ----------
# expose port 80 to the outer world
EXPOSE 9090
# start nginx 
