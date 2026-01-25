const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const srcDir = path.join(root, 'src');
const publicDir = path.join(root, 'public');

const layoutPath = path.join(srcDir, 'layouts', 'base.html');
const pagePath = path.join(srcDir, 'pages', 'index.html');
const componentsDir = path.join(srcDir, 'components');

const readFile = (filePath) => fs.readFileSync(filePath, 'utf8');

const resolveComponents = (content) =>
  content.replace(/\{\{>\s*([\w-]+)\s*\}\}/g, (_match, name) => {
    const componentPath = path.join(componentsDir, `${name}.html`);
    if (!fs.existsSync(componentPath)) {
      throw new Error(`Missing component: ${name}`);
    }
    return readFile(componentPath).trimEnd();
  });

const build = () => {
  const layout = readFile(layoutPath);
  const page = readFile(pagePath);
  const pageWithComponents = resolveComponents(page);
  const html = layout.replace('{{content}}', pageWithComponents.trim());

  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, 'index.html'), html);

  fs.cpSync(path.join(srcDir, 'styles'), path.join(publicDir, 'styles'), { recursive: true });
  fs.cpSync(path.join(srcDir, 'scripts'), path.join(publicDir, 'scripts'), { recursive: true });
};

build();
