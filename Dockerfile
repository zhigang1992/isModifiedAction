FROM node:10-slim

LABEL "com.github.actions.name"="isModified Github Action"
LABEL "com.github.actions.description"="Check if code is modified in push"
LABEL "com.github.actions.icon"="filter"
LABEL "com.github.actions.color"="black"

COPY entrypoint.sh /entrypoint.sh
COPY isModified.js /isModified.js

ENTRYPOINT ["/entrypoint.sh"]
