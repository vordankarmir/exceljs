const ExcelJS = {
  Workbook: require("./document/workbook"),
  ModelContainer: require("./document/modelcontainer"),
  stream: {
    xlsx: {
      WorkbookWriter: require("./stream/xlsx/workbook-writer"),
      WorkbookReader: require("./stream/xlsx/workbook-reader"),
    },
  },
};

Object.assign(ExcelJS, require("./document/enums"));

module.exports = ExcelJS;
