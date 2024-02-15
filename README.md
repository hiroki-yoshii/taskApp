# 使用方法
## OpenAPI Generatorを使用してNestJSでファイルを自動生成する

```
docker compose exec api  sh
openapi-generator-cli generate -i swagger.yaml -g typescript-nestjs -o /srcls
```
