import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const token = process.env.GITHUB_TOKEN;

if (!token) {
  console.error('Missing GITHUB_TOKEN environment variable.');
  process.exit(1);
}

const BLOG_REPO = `https://${token}@github.com/Shardul-Kavar/my-blogs.git`;

const destination = path.resolve('.blog');

if (fs.existsSync(destination)) {
  fs.rmSync(destination, {
    recursive: true,
    force: true,
  });
}

console.log('Fetching private blog repository...');

try {
  execSync(`git clone --depth 1 ${BLOG_REPO} ${destination}`, {
    stdio: 'inherit',
  });
  console.log('Blog repository cloned successfully.');
} catch (error) {
  console.error('Failed to clone blog repository.');
  process.exit(1);
}
