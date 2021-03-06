const express = require("express");

const countries = require("./lib/countries");
const getCases = require("./lib/cases");

const url =
  "https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_daily_reports/08-19-2020.csv";

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).json(getCases(url, countries));
});

app.listen(PORT, function () {
  console.log(`server is running on port ${PORT} .....`);
});
