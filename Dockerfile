FROM ghcr.io/nodecg/nodecg:latest

USER root
WORKDIR /opt/nodecg

# nodecg-spotify-widgetのインストールでコケるため
# 直接コンテナ内に入ってディレクトリ配下でnpm iしないとダメかも
RUN apt-get update && \
  apt-get install -y make gcc g++ python3

RUN nodecg install yagamuu/nodecg-speedcontrol --dev && \
  nodecg install yagamuu/nodecg-spotify-widget && \
  nodecg install cma2819/nodecg-timekeeper

WORKDIR /opt/nodecg/bundles/nodecg-speedcontrol
RUN npm run build

WORKDIR /opt/nodecg/bundles/nodecg-spotify-widget
RUN npm i

WORKDIR /opt/nodecg/bundles/mysrtafes2024-layouts
COPY . /opt/nodecg/bundles/mysrtafes2024-layouts
RUN npm i

WORKDIR /opt/nodecg

EXPOSE 9090

CMD ["nodecg", "start"]