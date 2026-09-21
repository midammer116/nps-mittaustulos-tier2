const fs = require("fs");
const path = require("path");
const d = __dirname;
const f = fs.readFileSync(path.join(d, "components", "footer.html"), "utf8");
const files = fs.readdirSync(d).filter(x => x.endsWith(".html") && x !== "index.html");
files.forEach(function(fp) {
  let c = fs.readFileSync(path.join(d, fp), "utf8");
  let idx = c.lastIndexOf("</section>");
  let idx2 = c.indexOf("<script", idx);
  if (idx > 0 && idx2 > idx) {
    c = c.substring(0, idx + 10) + "\n\n" + f + "\n\n" + c.substring(idx2);
    fs.writeFileSync(path.join(d, fp), c, "utf8");
    console.log("FX: " + fp);
  } else {
    console.log("SKIP: " + fp + " (no match)");
  }
});
console.log("DONE");
