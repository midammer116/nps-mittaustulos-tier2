const fs = require("fs");
const path = require("path");
const d = __dirname;
const h = fs.readFileSync(path.join(d, "components", "header.html"), "utf8");
const f = fs.readFileSync(path.join(d, "components", "footer.html"), "utf8");
const files = fs.readdirSync(d).filter(x => x.endsWith(".html") && x !== "index.html");
files.forEach(function(fp) {
  let c = fs.readFileSync(path.join(d, fp), "utf8");
  c = c.replace(/<body>[\s\S]*?(<section class="page-hero">)/, "<body>\n\n" + h + "\n\n$1");
  c = c.replace(/(<\/section>\s*<\/div>\s*<\/section>)[\s\S]*?(<script src=")/, "$1\n\n" + f + "\n\n$2");
  fs.writeFileSync(path.join(d, fp), c, "utf8");
  console.log("FX: " + fp);
});
console.log("DONE");
