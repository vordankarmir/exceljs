const ExcelJS = {
  // eslint-disable-next-line import/no-useless-path-segments
  Workbook: require('../lib/doc/workbook'),
  ModelContainer: require('./doc/modelcontainer'),
  stream: {
    xlsx: {
      WorkbookWriter: require('./stream/xlsx/workbook-writer'),
      WorkbookReader: require('./stream/xlsx/workbook-reader'),
    },
  },
};

Object.assign(ExcelJS, require('./doc/enums'));

module.exports = ExcelJS;
