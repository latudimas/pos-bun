import { PanelHeader } from './panel/PanelHeader';
import { PanelContent } from './panel/PanelContent';
import { ResizeHandle } from './panel/ResizeHandle';

const SidePanel = () => {
  return /*html*/`
    <div class="side-panel-container">
      <div id="side-panel" class="side-panel">
        ${PanelHeader()}
        ${PanelContent()}
      </div>
      ${ResizeHandle()}
    </div>
  `;
};

export { SidePanel };
