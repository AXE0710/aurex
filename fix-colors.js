const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        filelist = walkSync(path.join(dir, file), filelist);
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'app')).concat(walkSync(path.join(__dirname, 'components')));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Replace text-white with text-accent-foreground on components that have bg-accent
  content = content.replace(/bg-accent([\w- \/]*?)text-white/g, 'bg-accent$1text-accent-foreground');

  // 2. Certain Icons have `<IconName size={24} className="text-white" />` but they live inside a gold div.
  // For example: `<MapPin size={24} className="text-white" />` -> MapPin is an icon.
  // We can specifically look for `<[A-Z][A-Za-z0-9]+\s+size=\{\d+\}\s+className="text-white"\s*\/>`
  content = content.replace(/<([A-Z][A-Za-z0-9]+)\s+size=\{[^\}]+\}\s+className="text-white"/g, '<$1 size={24} className="text-accent-foreground"');
  
  // also specifically `<Check size={14} className="text-white" />`
  content = content.replace(/<Check\s+size=\{\d+\}\s+className="text-white"/g, '<Check size={14} className="text-accent-foreground"');

  if (content !== original) {
    console.log(`Updated ${file}`);
    fs.writeFileSync(file, content, 'utf8');
  }
});
