# docker/js/Dockerfile
FROM node:18-alpine

# アプリケーションディレクトリを作成
WORKDIR /app

# アプリケーションの依存関係をインストール
COPY src/js/package.json src/js/package-lock.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY src/js/ .

# アプリをビルド
RUN npm run build

# ポート3000を開放
EXPOSE 3000

# サーバーを起動
CMD ["npm", "start"]