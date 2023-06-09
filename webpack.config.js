const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        main: "./src/js/SaberToast.js"
    },
    output: {
        path: path.resolve(__dirname, "./"),
        filename: "saber-toast.js"
    },
    resolve: {
        extensions: [".js"]
    },
};