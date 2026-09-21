const fs = require("fs");
const path = require("path");
const d = __dirname;
const h = fs.readFileSync(path.join(d, "components", "header.html"), "utf8");
const ft = fs.readFileSync(path.join(d, "components", "footer.html"), "utf8");
fs.readdirSync(d).filter(function(x) { return x.endsWith(".html") && x !== "index.html"; }).forEach(function(fp) {
  let c = fs.readFileSync(path.join(d, fp), "utf8");
  if (c.indexOf("header-placeholder") !== -1 || c.indexOf("footer-placeholder") !== -1) {
    c = c.split('<div id="header-placeholder"></div>').join(h);
    c = c.split('<div id="footer-placeholder"></div>').join(ft);
    fs.writeFileSync(path.join(d, fp), c, "utf8");
    console.log("OK: " + fp);
  } else {
    console.log("SKIP: " + fp);
  }
});
