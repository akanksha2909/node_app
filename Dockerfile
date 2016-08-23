FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /var/lib/jenkins/workspace/Node_app

# Bundle app source
COPY . /var/lib/jenkins/workspace/Node_app

EXPOSE 7070
CMD [ "node", "app.js" ]
