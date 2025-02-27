const express = require("express");
var router = express.Router();
const Country = require("../models/dataSchema");
router.post("/create", (req, res, next) => {
  const newCountry = new Country({
    name: req.body.name,
    capital: req.body.capital,
  });
  var result=newCountry.save()
  res.status(200).json({ msg: result });
//   newCountry.save((err, country) => {
//     if (err) res.status(500).json({ errmsg: err });
//     res.status(200).json({ msg: country });
//   });
});
router.get("/read", (req, res, next) => {
  Country.find({}, (err, country) => {
    if (err) res.status(500).json({ errmsg: err });
    res.status(200).json({ msg: country });
  });
});
router.put("/update", (req, res, next) => {
  Country.findById(req.body._id, (err, country) => {
    if (err) res.status(500).json({ errmsg: err });
    (country.name = req.body.name),
      (country.capital = req.body.capital),
      country.save((err, country) => {
        if (err) res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: country });
      });
  });
});
router.delete("/delete/:id", (req, res, next) => {
  Country.findOneAndRemove({ _id: req.body.id }, (err, country) => {
    if (err) res.status(500).json({ errmsg: err });
    res.status(200).json({ msg: country });
  });
});

module.exports = router;
