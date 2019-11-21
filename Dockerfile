FROM node
ENV PORT 8082
EXPOSE 8082
USER node
VOLUME ["/src/app"]
WORKDIR "/src/app"
CMD ["node" , "/src/app/app.js"]
