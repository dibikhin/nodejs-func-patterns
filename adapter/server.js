var log = require('./logger');
var shipping = require('./shipping');
var adapter = require('./shipping_adapter');

var credentials = { token: "30a8-6ee1" };
adapter.init(credentials);
     
// original shipping object and interface
     
var cost = shipping.request("78701", "10010", "2 lbs");
log.add("Old cost: " + cost);
     
// new shipping object with adapted interface
     
var new_cost = adapter.request("78701", "10010", "2 lbs");

log.add("New cost: " + new_cost);
log.show();
