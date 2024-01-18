#FROM oven/bun
#WORKDIR /usr/src/app

ARG NODE_IMAGE=oven/bun:1-alpine

FROM --platform=linux/amd64 $NODE_IMAGE AS base
WORKDIR /usr/src/app
RUN apk --no-cache add openssh g++ make python3 git


#COPY package*.json bun.lockb ./
#RUN bun install
FROM base AS install
RUN mkdir -p /temp
#COPY package.json bun.lockb /temp/
COPY * ./
#RUN cd /temp && bun install
RUN bun install

#COPY . .
#FROM install AS prerelease
#COPY --from=install /temp/node_modules node_modules
#COPY . .

FROM install AS release
#COPY --chown=bun:bun --from=install /temp/node_modules node_modules
#COPY --chown=bun:bun --from=prerelease /usr/src/app/.output .
RUN bun run build

#USER bun
#ENV HOST 0.0.0.0
#EXPOSE 3000
ENTRYPOINT [ "bun", "run", "preview" ]

#ENV NODE_ENV=production
#RUN bun run build


#ENV NODE_ENV production
#
#CMD [ "bun", "run", "dev" ]
