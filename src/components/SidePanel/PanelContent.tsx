interface ContentProps {
  content: string;
}

export const PanelContent = ({ content }: ContentProps) => /*html*/`
  <div class="panel-content">
    <p>${content}</p>
  </div>
`;
