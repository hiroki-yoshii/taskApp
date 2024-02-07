# api/Dockerfile
# Node.jsのバージョンを指定
FROM node:18-alpine

# Javaをインストール
RUN apk add --no-cache openjdk11

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# パッケージ.jsonとパッケージ.lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# openapi-generator-cli をグローバルにインストール
RUN npm install -g @openapitools/openapi-generator-cli

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションがリッスンするポートを指定
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "run", "start:dev"]