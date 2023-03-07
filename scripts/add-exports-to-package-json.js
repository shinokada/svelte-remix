import fs from 'fs/promises';
import path from 'path';

const distDir = './dist';

// Recursively find all the svelte files in the dist directory
const svelteFiles = [];

async function findSvelteFiles(dirPath) {
  const dirEntries = await fs.readdir(dirPath, { withFileTypes: true });
  for (const dirEntry of dirEntries) {
    if (dirEntry.isDirectory()) {
      await findSvelteFiles(path.join(dirPath, dirEntry.name));
    } else if (dirEntry.isFile() && dirEntry.name.endsWith('.svelte')) {
      svelteFiles.push(path.join(dirPath, dirEntry.name));
    }
  }
}

await findSvelteFiles(distDir);

// Create the exports object
const exports = {
  '.': {
    types: './dist/index.d.ts',
    svelte: './dist/index.js'
  }
};

for (const svelteFile of svelteFiles) {
  const dirName = path.dirname(svelteFile.substring(distDir.length + 1));
  const filePath = path.join(distDir, dirName, path.basename(svelteFile));
  const subDirs = dirName.split('/').filter(subDir => subDir !== 'Buildings');
  const subPath = `.${subDirs.map(dir => `/Buildings/${dir}`).join('')}/${path.basename(svelteFile)}`;

  exports[subPath] = {
    types: path.join(distDir, dirName, `${path.parse(svelteFile).name}.d.ts`),
    svelte: filePath
  };
}

// Read the package.json file
const packageJsonPath = './package.json';
const packageJsonString = await fs.readFile(packageJsonPath, 'utf8');
const packageJson = JSON.parse(packageJsonString);

// Add the exports object to the package.json file
packageJson.exports = exports;

// Write the updated package.json file
await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
