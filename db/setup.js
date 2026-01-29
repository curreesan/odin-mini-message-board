const pool = require("./pool");

async function setupDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        user_name VARCHAR(100) NOT NULL,
        text TEXT NOT NULL,
        added TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await pool.query(`
      INSERT INTO messages (user_name, text)
      VALUES 
        ('Amando', 'Hi there!'),
        ('Charles', 'Hello World!')
      ON CONFLICT DO NOTHING;
    `);

    console.log("Table created and seeded if needed.");
  } catch (err) {
    console.error("Setup error:", err);
  } finally {
    await pool.end();
  }
}

setupDatabase();
