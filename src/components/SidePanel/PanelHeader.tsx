interface HeaderProps {
  title: string;
}

export const PanelHeader = ({ title }: HeaderProps) => /*html*/`
  <div class="panel-header">
    <h2>${title}</h2>
    <button onclick="togglePanel()">Toggle</button>
  </div>
`;
