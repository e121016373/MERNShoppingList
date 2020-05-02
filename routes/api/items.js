const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @route GET api/items
// @desc Get all items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route POST api/items
// @desc add an item
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});

// @route DELETE api/items/:id
// @desc delete an item
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) =>
      item.remove().then(() =>
        res.json({
          success: true,
          data: item,
        })
      )
    )
    .catch((err) =>
      res.status(404).json({ success: false, msg: "Item is not found..." })
    );
});

module.exports = router;
