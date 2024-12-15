import { Elysia, t } from 'elysia'
import { html } from '@elysiajs/html'
import { SidePanel } from './components/SidePanel'
import { styles } from './components/style'
import { panelScript } from './components/scripts'

const app = new Elysia()
  .use(html())
  .get('/', ({ html }) => html(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTMX + Elysia Demo</title>
        <script src="https://unpkg.com/htmx.org@1.9.10"></script>
        <style>
           ${styles} 
        </style>
    </head>
      <body>
          <div class="layout">
            <main class="main-content">
              <h1>Welcome to Elysia + HTMX</h1>
          
              <div class="greeting">
                  <p>Click the button to get a greeting!</p>
                  <button hx-post="/greet" 
                          hx-target="#greeting-result"
                          hx-swap="innerHTML">
                      Get Greeting
                  </button>
                  <div id="greeting-result"></div>
              </div>

            </main>

            ${SidePanel({
      children: html`
                <h2> Side Panel</h2>
                <p> This is Resizable and collapsible panel.</p>
                <div  hx-get="/panel-content"
                      hx-trigger="load"
                      hx-swap="innerHTML">
                </div>
              `})}
          </div>

        <script>${panelScript}</script>
      </body>
    </html>`
  ))
  .post('/greet', () => {
    const greetings = [
      'Hello there!',
      'Welcome!',
      'Nice to see you!',
      'Greetings!'
    ]
    return `<p>${greetings[Math.floor(Math.random() * greetings.length)]}</p>`
  })
  .get('panel-content', () => {
    return `
div style="margin-top: 1rem;">
        <h3>Dynamic Content</h3>
        <p>This content was loaded dynamically using HTMX.</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>`
  })
  .listen(3000)

console.log(`🦊 Server is running at http://localhost:3000`)

