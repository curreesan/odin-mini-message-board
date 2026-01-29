const express = require("express");
const router = express.Router();

const { getAllMessages, getMessageById, addMessage } = require("../db/queries");

router.get("/", async (req, res) => {
  try {
    const messages = await getAllMessages();
    res.render("index", { title: "Mini Message Board", messages });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", async (req, res) => {
  const { messageUser, messageText } = req.body;

  if (!messageUser?.trim() || !messageText?.trim()) {
    return res.status(400).send("Name and message are required.");
  }

  if (messageUser.length > 100) {
    return res.status(400).send("Name too long (max 100 chars).");
  }

  try {
    await addMessage(messageUser.trim(), messageText.trim());
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving message");
  }
});

router.get("/messages/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).send("Invalid message ID");
  }

  try {
    const message = await getMessageById(id);
    if (!message) {
      return res.status(404).send("Message not found");
    }
    res.render("message", { message });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
