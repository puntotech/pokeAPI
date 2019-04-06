GUIA

1. Hello world:

   - Crear server.ts
   - Crear app.ts
   - Crear controller
   -

2. Levantar MongoDB con docker-compose:

   - Crear fichero docker-compose.yml:

```yml
version: "3.1"

services:
  db:
    container_name: mongoDB
    image: mongo:latest
    restart: always
    volumes:
      - ./pokeData:/data/db
    environment:
      - MONGO_INITDB_DATABASE= Pokemon
    ports:
      - 27017:27017
```
