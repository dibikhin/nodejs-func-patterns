var _ = require('underscore');

module.exports = {
    extend: extend
};

/**
 * Creates a new object looking like @parent extended w/ @child.
 * All the props from @parent non-existing in @child will be visible. 
 */
function extend(child, parent) {
    var extended = _.extend({}, parent);
    return _.extend(extended, child);
}
