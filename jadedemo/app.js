const http = require("http"),
    jade = require("jade");

var fruits = {
    "apple": 13,
    "banner": 14,
    "orange": 14,
    "sala": 14,
    "xigua": 14,
};
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    const html = jade.renderFile("index.jade", {
        author: "Jason",
        fruits: fruits,
        pretty: true
    });

    res.end(html);
}).listen(8888);
console.log("Server running at http://127.0.0.1:8888");