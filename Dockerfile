FROM node:12
# Create app directory
RUN mkdir -p /usr/src/app
# Create working directory
WORKDIR /usr/src/app
# Copy pacakge.json
COPY package.json /usr/src/app/
# Install app dependencies
RUN npm install
RUN npm install -g forever
# Bundle app source
COPY . /usr/src/app
# Expose port
EXPOSE 3000-3100
# Start npm
CMD [ "npm", "test" ]
