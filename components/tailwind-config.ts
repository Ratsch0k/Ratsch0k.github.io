/**
 * Complete tailwindcss config.
 * 
 * Will be generated at built-time with *babel-plugin-preval*
 */
export default preval`
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../tailwind.config');

module.exports = resolveConfig(tailwindConfig);
`;