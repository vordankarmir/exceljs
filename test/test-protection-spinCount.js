const Excel = require('../lib/exceljs.js');
const HrStopwatch = require('./utils/hr-stopwatch');

const [, , filename, password] = process.argv;

const wb = new Excel.Workbook();
const ws = wb.addWorksheet('Foo');
ws.getCell('A1').value = 'Bar';

async function save() {
  const stopwatch = new HrStopwatch();

  stopwatch.start();
  await ws.protect(password); // default 100000
  console.log('Protection Time [spinCount default]:', stopwatch.microseconds);

  await wb.xlsx.writeFile(`${0}-${filename}`);

  // options defined but spinCount not
  stopwatch.start();
  await ws.protect(password, {insertRows: true}); // default 100000
  console.log('Protection Time [spinCount default]:', stopwatch.microseconds);

  await wb.xlsx.writeFile(`${1}-${filename}`);

  const values = [
    100000,
    10000,
    1,
    0,
    -1,
    undefined,
    null,
    NaN,
    Infinity,
    -Infinity,
    31415.9265,
  ];

  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];

    stopwatch.start();
    // eslint-disable-next-line no-await-in-loop
    await ws.protect(password, {spinCount: value});
    console.log(
      `Protection Time [spinCount ${value}]:`,
      stopwatch.microseconds
    );

    // eslint-disable-next-line no-await-in-loop
    await wb.xlsx.writeFile(`${index + 2}-${filename}`);
  }
}

save().catch((error) => {
  console.log(error.message);
});
