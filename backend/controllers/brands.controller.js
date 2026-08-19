const db = require('../db');

exports.getBrands = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM brands ORDER BY id ASC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching brands:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getBrandBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await db.query('SELECT * FROM brands WHERE slug = $1', [slug]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    const brand = result.rows[0];

    // Fetch popular products for this brand
    const productsResult = await db.query('SELECT * FROM products WHERE brand = $1 LIMIT 4', [brand.name]);
    
    res.status(200).json({
      ...brand,
      popularProducts: productsResult.rows
    });
  } catch (error) {
    console.error('Error fetching brand:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
