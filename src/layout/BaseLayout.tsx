import { LayoutProps } from '../types';

export const BaseLayout = ({ children }: LayoutProps) => /*html*/`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elysia HTMX App</title>
    <script src="https://unpkg.com/htmx.org@1.9.6"></script>
    <link rel="stylesheet" href="/styles/global.css">
</head>
<body>
    ${children}
    <script src="/scripts/panel.js"></script>
</body>
</html>
`;
