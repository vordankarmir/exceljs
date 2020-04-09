const ExcelJS = {
  Workbook: require('./data/workbook'),
  ModelContainer: require('./data/modelcontainer'),
  stream: {
    xlsx: {
      WorkbookWriter: require('./stream/xlsx/workbook-writer'),
      WorkbookReader: require('./stream/xlsx/workbook-reader'),
    },
  },
};

Object.assign(ExcelJS, require('./data/enums'));

module.exports = ExcelJS;
