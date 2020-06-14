// this bundle is built without polyfill leaving apps the freedom to add their own
const ExcelJS = {
  Workbook: require("./document/workbook"),
};

// Object.assign mono-fill
const Enums = require("./document/enums");

Object.keys(Enums).forEach((key) => {
  ExcelJS[key] = Enums[key];
});

module.exports = ExcelJS;
