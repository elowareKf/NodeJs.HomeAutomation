FROM node
ENV PORT 8082
EXPOSE 8082
USER node
VOLUME ["/src/app"]
WORKDIR "/src/app"
RUN ["ls","-la"]
CMD ["node" , "/src/app/app.js"]
