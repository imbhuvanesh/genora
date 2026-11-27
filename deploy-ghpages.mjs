import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building production bundle...');
execSync('npm run build', { stdio: 'inherit' });

// Add .nojekyll so GitHub Pages does not ignore assets
fs.writeFileSync(path.join('dist', '.nojekyll'), '');

// Add 404.html for routing fallback if needed
fs.copyFileSync(path.join('dist', 'index.html'), path.join('dist', '404.html'));

const distDir = path.resolve('dist');
const originalDir = process.cwd();

// Get remote URL dynamically from git config
let remoteUrl = 'https://github.com/imbhuvanesh/genora.git';
try {
  remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim() || remoteUrl;
} catch {
  // fallback to genora.git
}

console.log(`Deploying to ${remoteUrl} (gh-pages)...`);

try {
  process.chdir(distDir);
  execSync('git init', { stdio: 'inherit' });
  execSync('git checkout -b gh-pages', { stdio: 'inherit' });
  execSync('git add -A', { stdio: 'inherit' });
  execSync('git commit -m "Deploy GENORA website to GitHub Pages"', { stdio: 'inherit' });
  execSync(`git push -f ${remoteUrl} gh-pages`, { stdio: 'inherit' });
  console.log('Successfully deployed to gh-pages branch!');
} finally {
  process.chdir(originalDir);
  const distGit = path.join(distDir, '.git');
  if (fs.existsSync(distGit)) {
    fs.rmSync(distGit, { recursive: true, force: true });
  }
}
