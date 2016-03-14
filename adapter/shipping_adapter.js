// adapter interface

var shipping = require('./advanced_shipping');

module.exports = {
    init: init,
    request: request
};

function request(zipStart, zipEnd, weight) {
    shipping.setStart(zipStart);
    shipping.setDestination(zipEnd);
    return shipping.calculate(weight);
}

function init(credentials) {
    shipping.login(credentials);
}
