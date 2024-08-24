ARG NODE_VERSION=20.17.0

FROM node:${NODE_VERSION}-alpine as base

ARG PORT=3000

ENV NODE_ENV=production

WORKDIR /app


FROM base as build

COPY --link package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --production=false

COPY --link . .

RUN pnpm run build
RUN pnpm prune


FROM base

ENV PORT=$PORT

COPY --from=build /app/.output /app/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /app/node_modules /app/node_modules

CMD [ "node", ".output/server/index.mjs" ]
