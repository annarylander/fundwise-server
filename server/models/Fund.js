const mongoose = require("mongoose");

const fundSchema = new mongoose.Schema({
  fundName: String,
  holdingsDate: Date,
  fundCompanyName: String,
  fundHoldings: [{ companyName: String, shareOfFund: Number }],
});
fundSchema.index({ fundName: "text" });

const Fund = mongoose.model("Fund", fundSchema);

exports.Fund = Fund;
