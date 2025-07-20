FROM cypress/included:14.5.0

WORKDIR /app
COPY . .

RUN apt-get update && apt-get install -y default-jre
RUN npm install

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
