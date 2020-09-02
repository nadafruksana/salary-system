const Staff = require("../models/staff");

module.exports.list = (req, res) => {
  Staff.find()
    .then((staff) => {
      res.json(staff);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Staff.findById(id)
    .then((staff) => {
      if (staff) {
        res.json(staff);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const staff = new Staff(body);
  staff.save()
    .then((staff) => {
      res.json(staff);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Staff.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((staff) => {
      res.json(staff);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Staff.findByIdAndDelete(id)
    .then((staff) => {
      staff ? res.json(staff) : res.json({});
    })
    .catch((err) => {
      res.json(err);
    });
};