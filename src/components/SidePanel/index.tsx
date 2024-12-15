import { PanelProps } from '../../types';
import { PanelHeader } from './PanelHeader';
import { PanelContent } from './PanelContent';
import { ResizeHandle } from './ResizeHandle';

export const SidePanel = ({ title = 'Side Panel', content = 'This is the side panel content.' }: PanelProps = {}) => /*html*/`
  <div class="side-panel-container">
    <div id="side-panel" class="side-panel">
      ${PanelHeader({ title })}
      ${PanelContent({ content })}
    </div>
    ${ResizeHandle()}
  </div>
`;
