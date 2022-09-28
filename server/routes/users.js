const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.get(`/getUsers`, userController.getUsers);
router.get(`/getPendingWalletUsers`, userController.getPendingWalletUsers);
router.get(`/getPendingBanks`, userController.getPendingBanks);
router.post(`/addUser`, userController.addUser);
router.put("/updateUser/:id", userController.updateUser);
router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = router;
  