const fs = require('fs');
const path = require('path');

const DIST_DIR = './dist';

// Clean and create dist directory
if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true });
}
fs.mkdirSync(DIST_DIR);

// Files to copy to dist
const filesToCopy = [
    'index.html',
    'logo.svg', 
    'version.json',
    'server.js',
    'package.json',
    'run.sh'
];

// Copy files
filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join(DIST_DIR, file));
        console.log(`✓ Copied ${file}`);
    } else {
        console.log(`⚠ Warning: ${file} not found`);
    }
});

// Create a production-ready package.json
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const distPkg = {
    ...pkg,
    devDependencies: undefined,
    scripts: {
        start: "node server.js"
    }
};

fs.writeFileSync(path.join(DIST_DIR, 'package.json'), JSON.stringify(distPkg, null, 2));
console.log('✓ Created production package.json');

// Create deployment README
const readme = `# Nanohealer Deployment Package

## Installation
1. Upload all files to your NFS site
2. Run: npm install
3. Run: npm start

## Files included:
- index.html (game)
- logo.svg (logo)
- version.json (version data)  
- server.js (Node.js server)
- package.json (dependencies)

## Verification:
Visit /version to confirm Node.js is running
`;

fs.writeFileSync(path.join(DIST_DIR, 'README.md'), readme);
console.log('✓ Created deployment README');

console.log(`\n🎯 Build complete! Upload the contents of '${DIST_DIR}' to NFS.`);
