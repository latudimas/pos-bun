import { SidePanel } from '../components/SidePanel';
import { MainContent } from '../components/MainContent';

export const HomePage = () => /*html*/`
  <div class="container">
    ${MainContent()}
    ${SidePanel()}
  </div>
`;
