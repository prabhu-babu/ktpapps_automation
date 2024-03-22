FROM mcr.microsoft.com/playwright:v1.40.0-jammy

WORKDIR /app
COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "test"]

# docker-compose up --build
# ENV=prod docker-compose up --build