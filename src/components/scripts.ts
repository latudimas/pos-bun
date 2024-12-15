export const panelScript = `
  // Handle panel resizing
  const panel = document.querySelector('.side-panel');
  const handle = document.querySelector('.resize-handle');
  let isResizing = false;
  
  handle.addEventListener('mousedown', (e) => {
    isResizing = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopResize);
  });

  function handleMouseMove(e) {
    if (!isResizing) return;
    
    const container = document.querySelector('.layout');
    const containerRect = container.getBoundingClientRect();
    const newWidth = containerRect.right - e.clientX;
    
    if (newWidth >= 200 && newWidth <= 600) {
      panel.style.width = newWidth + 'px';
    }
  }

  function stopResize() {
    isResizing = false;
    document.removeEventListener('mousemove', handleMouseMove);
  }

  // Handle panel toggling
  const toggleBtn = document.querySelector('.toggle-panel');
  toggleBtn.addEventListener('click', () => {
    panel.classList.toggle('collapsed');
  });
`
