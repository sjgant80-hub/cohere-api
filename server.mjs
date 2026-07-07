#!/usr/bin/env node
/**
 * cohere-api · HTTP proxy for Cohere
 * Sovereign estate wrapper for Cohere · AI/LLM
 * Docs: https://docs.cohere.com/reference/about
 */
import { createServer } from 'node:http';
const PORT = process.env.PORT || 4200;
createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok', wraps: 'Cohere' }));
  res.end(JSON.stringify({ name: 'cohere-api', wraps: 'Cohere', docs: 'https://docs.cohere.com/reference/about' }));
}).listen(PORT, () => console.log('cohere-api on', PORT));
