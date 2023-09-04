const path = require("path")

let result = path.parse("https://in.search.yahoo.com/search?fr=rendom+path.html");
console.log(result);
console.log(result.ext);
console.log(result.dir);

const os = require("os");
console.log(os.freemem());
console.log(os.hostname());
console.log(os.platform());
