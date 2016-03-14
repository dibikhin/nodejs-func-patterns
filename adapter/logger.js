// logger

var log = "";

module.exports = {
    add: add,
    show: show
};

function add(msg) { log += msg + "\n"; }
function show() { console.log(log); log = ""; }
