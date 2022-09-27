FROM postgres
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB posts
COPY posts.sql /docker-entrypoint-initdb.d/