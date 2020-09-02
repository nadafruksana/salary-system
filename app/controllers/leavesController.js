const Leave = require("../models/leave");

module.exports.list = (req, res) => {
  Leave.find()
    .then((leave) => {
      res.json(leave);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Leave.findById(id)
    .then((leave) => {
      if (leave) {
        res.json(leave);
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
  const leave = new Leave(body);
  leave.save()
    .then((leave) => {
      res.json(leave);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Leave.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((leave) => {
      res.json(leave);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Leave.findByIdAndDelete(id)
    .then((leave) => {
        leave ? res.json(leave) : res.json({});
    })
    .catch((err) => {
      res.json(err);
    });
};