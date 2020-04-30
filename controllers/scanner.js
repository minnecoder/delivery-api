const DriverReport = require('../models/DriverReport');
const Product = require('../models/Product');

// Save start and end of break


// If break found save to break2


exports.saveBreak = async (req, res) => {
  //  Find driver report for driver for the current day
  try {
    const report = await DriverReport.findOne({
      where: {
        date: req.params.date,
        route: req.params.route,
      },
    });
    // Check if break has already been saved
    if (report.dataValues.break1_start !== '') {
      // If no break saved save to break1
      report.dataValues.break1_start = req.body.break1_start;
      report.dataValues.break1_end = req.body.break1_end;
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

exports.testBreak = async (req, res) => {
  //  Find driver report for driver for the current day
  const report = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  console.log(report.dataValues);
};
