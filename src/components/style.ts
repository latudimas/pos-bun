export const styles = `
  body {
    font-family: system-ui, sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
  }

  .layout {
    display: flex;
    height: 100vh;
  }

  .main-content {
    flex-grow: 1;
    padding: 2rem;
    overflow-y: auto;
  }

  .side-panel {
    background: #f8f9fa;
    border-left: 1px solid #dee2e6;
    width: 300px;
    min-width: 200px;
    max-width: 600px;
    height: 100%;
    position: relative;
    transition: transform 0.3s ease;
  }

  .side-panel.collapsed {
    transform: translateX(100%);
  }

  .resize-handle {
    width: 8px;
    height: 100%;
    position: absolute;
    left: -4px;
    top: 0;
    cursor: col-resize;
    background: transparent;
  }

  .resize-handle:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  .toggle-panel {
    position: absolute;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
    padding: 8px;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-right: none;
    cursor: pointer;
    border-radius: 4px 0 0 4px;
  }

  .panel-content {
    padding: 1rem;
    overflow-y: auto;
    height: 100%;
    box-sizing: border-box;
  }

  .greeting {
    padding: 1rem;
    background: #f0f0f0;
    border-radius: 8px;
    margin: 1rem 0;
  }
`
