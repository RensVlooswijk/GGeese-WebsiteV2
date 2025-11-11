# ---- Build stage ----
FROM node:latest AS build
WORKDIR /app

# Install deps
COPY frontend/package*.json ./
RUN npm ci --legacy-peer-deps

# Build
COPY frontend/ ./
RUN npm run build

# ---- Runtime stage ----
FROM node:latest AS runtime
WORKDIR /app

# Minimal runtime: just the static build + serve
RUN npm i -g serve@14
COPY --from=build /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
