exports.name = 'RY';
exports.config = {
    status: 'RY',
    longStatus: 'Registry',
    styleSheet: 'W3C-RY',
    track: 'Registry',
};

let { rules } = require('../TR');
const base = require('../base');

rules = base.removeRules(rules, ['sotd.draft-stability']);
exports.rules = rules;