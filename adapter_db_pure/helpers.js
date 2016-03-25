var _ = require('underscore');

module.exports = {
    extend: extend
};

/**
 * Creates a new object looking like @parent extended w/ @child.
 * All the non-existing props from @parent will be visible in @child
 * (and they should throw an error).
 */
function extend(child, parent) {
    var extended = _.extend({}, parent);
    return _.extend(extended, child);
}
