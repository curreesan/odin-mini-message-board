const pool = require("./pool");

async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages ORDER BY added DESC");
  return result.rows;
}

async function getMessageById(id) {
  const result = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return result.rows[0];
}

async function addMessage(user_name, text) {
  await pool.query("INSERT INTO messages (user_name, text) VALUES ($1, $2)", [
    user_name,
    text,
  ]);
}

module.exports = {
  getAllMessages,
  getMessageById,
  addMessage,
};
