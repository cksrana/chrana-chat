import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("SEND MESSAGES Endpoint");
});

export default router;