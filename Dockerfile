# BUILD
FROM node:current as build
WORKDIR ./build
COPY . ./
RUN ["npm", "install"]
RUN ["npm", "run", "build"]

# DIST
FROM node:current as dist
WORKDIR ./dist
COPY --from=build build/dist/ dist/
COPY --from=build build/package* ./
RUN ["npm", "install", "--only=prod"]

# FINAL
FROM node:current as final
WORKDIR .
COPY --from=dist dist/ ./
ENTRYPOINT ["npm", "start"]
