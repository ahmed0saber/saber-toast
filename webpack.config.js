const path = require("path");

module.exports = {
    entry: "./src/js/saber-toast.js",

    output: {
        filename: "saber-toast.bundled.js",
        path: path.resolve(__dirname, "dist"),
    },

    mode: "production"
};