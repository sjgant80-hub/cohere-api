# cohere-api

Sovereign HTTP proxy for **Cohere** · exposes SDK methods over REST.

## Endpoints
- `GET /` — metadata + available methods
- `GET /health` — health check
- `POST /call/:method` — invoke SDK method with JSON body as params

## Env
`COHERE_API_KEY` required.

## Run
```bash
npm install && npm start
```

MIT · AI-Native Solutions estate.
