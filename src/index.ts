import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import { BaseLayout } from './layouts/BaseLayout';
import { HomePage } from './pages/HomePage';

const app = new Elysia()
  .use(html())
  .get('/', () => BaseLayout(HomePage()))
  .listen(3000);

console.log(`🦊 Server is running at http://localhost:${app.server?.port}`);

