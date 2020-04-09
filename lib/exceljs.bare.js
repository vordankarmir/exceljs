// this bundle is built without polyfill leaving apps the freedom to add their own
const ExcelJS = {
  Workbook: require('./data/workbook'),
};

// Object.assign mono-fill
const Enums = require('./data/enums');

Object.keys(Enums).forEach((key) => {
  ExcelJS[key] = Enums[key];
});

module.exports = ExcelJS;
