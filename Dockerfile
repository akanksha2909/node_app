FROM node:argon

# Create app directory
RUN mkdir -p /var/lib/jenkins/workspace/Node_app/app
WORKDIR /var/lib/jenkins/workspace/Node_app/app

# Bundle app source
COPY . /var/lib/jenkins/workspace/Node_app/app

EXPOSE 7070
CMD [ "node", "app.js" ]
