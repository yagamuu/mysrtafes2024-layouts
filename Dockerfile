FROM ghcr.io/nodecg/nodecg:latest

USER root
WORKDIR /opt/nodecg

RUN nodecg install yagamuu/nodecg-speedcontrol --dev

WORKDIR /opt/nodecg/bundles/nodecg-speedcontrol
RUN npm run build

WORKDIR /opt/nodecg/bundles/mysrtafes2024-layouts
COPY . /opt/nodecg/bundles/mysrtafes2024-layouts
RUN npm i

WORKDIR /opt/nodecg

EXPOSE 9090

CMD ["nodecg", "start"]