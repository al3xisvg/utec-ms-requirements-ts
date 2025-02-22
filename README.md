```
~ docker-compose up --build
```

```
~ docker build -t alexisvgutec/repo-utec-ms-requirements-ts:latest . --platform linux/amd64
~ docker tag alexisvgutec/repo-utec-ms-requirements-ts:latest alexisvgutec/repo-utec-ms-requirements-ts:1
~ docker push alexisvgutec/repo-utec-ms-requirements-ts:1
```

```
~ docker pull alexisvgutec/repo-utec-ms-requirements-ts:1
~ docker run -d -p 5000:5003 --name container-requirements alexisvgutec/repo-utec-ms-requirements-ts:1
```
