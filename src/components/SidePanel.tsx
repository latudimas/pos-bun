import { html } from '@elysiajs/html'

export const SidePanel = ({ children }: { children?: any }) => html`
  <aside class="side-panel">
    <div class="resize-handle"></div>
    <button class="toggle-panel">☰</button>
    <div class="panel-content">
      ${children}
    </div>
  </aside>
`
