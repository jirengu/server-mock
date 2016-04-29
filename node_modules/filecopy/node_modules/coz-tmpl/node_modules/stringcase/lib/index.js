/**
 * Convert string cases between camel case, pascal case, snake case etc...
 * @module stringcase
 */

"use strict";

module.exports = {
    get camelcase() { return require('./camelcase'); },
    get capitalcase() { return require('./capitalcase'); },
    get constcase() { return require('./constcase'); },
    get decapitalcase() { return require('./decapitalcase'); },
    get enumcase() { return require('./enumcase'); },
    get lowercase() { return require('./lowercase'); },
    get pascalcase() { return require('./pascalcase'); },
    get pathcase() { return require('./pathcase'); },
    get sentencecase() { return require('./sentencecase'); },
    get snakecase() { return require('./snakecase'); },
    get spacecase() { return require('./spacecase'); },
    get spinalcase() { return require('./spinalcase'); },
    get titlecase() { return require('./titlecase'); },
    get trimcase() { return require('./trimcase'); },
    get uppercase() { return require('./uppercase'); }
};