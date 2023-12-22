FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /var/www/mslabel-front

COPY package.json package-lock.json ./
RUN  npm install --production

FROM node:18-alpine AS builder
WORKDIR /var/www/mslabel-front
COPY --from=deps /var/www/mslabel-front/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /var/www/mslabel-front

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /var/www/mslabel-front/.next ./.next
COPY --from=builder /var/www/mslabel-front/node_modules ./node_modules
COPY --from=builder /var/www/mslabel-front/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
