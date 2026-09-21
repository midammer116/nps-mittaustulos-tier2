const fs = require('fs');
const content = fs.readFileSync('./generate-pages.js', 'utf8');
console.log('Size:', content.length);
console.log('Lines:', content.split('\n').length);
// Check around line 18
const lines = content.split('\n');
console.log('Line 17 length:', lines[16].length);
console.log('Line 18 length:', lines[17].length);
// Check for unusual chars in first 500 chars of line 18
const line18 = lines[17];
for (let i = 0; i < line18.length; i++) {
  const code = line18.charCodeAt(i);
  if (code > 127) {
    // non-ASCII
  }
}
// Try to parse
try {
  require('./generate-pages.js');
  console.log('PARSING: OK');
} catch(e) {
  console.log('PARSING ERROR:', e.message.substring(0, 200));
  // Find the exact char at the error
  const pos = e.message.match(/position (\d+)/);
  if (pos) {
    console.log('Error at position:', pos[1]);
    console.log('Char:', content[parseInt(pos[1])]);
    console.log('Context:', content.substring(parseInt(pos[1]) - 20, parseInt(pos[1]) + 20));
  }
}