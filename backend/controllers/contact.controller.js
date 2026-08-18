const db = require('../db');

exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const query = `
      INSERT INTO contacts (name, email, subject, message)
      VALUES ($1, $2, $3, $4)
      RETURNING id, name, email, subject, created_at;
    `;
    const values = [name, email, subject, message];

    await db.query(query, values);

    res.status(201).json({
      success: true,
      message: 'Message submitted successfully',
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
