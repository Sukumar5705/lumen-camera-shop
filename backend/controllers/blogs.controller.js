const db = require('../db');

exports.getBlogs = async (req, res) => {
  try {
    const { category, featured } = req.query;
    
    let query = 'SELECT * FROM blogs WHERE 1=1';
    let params = [];
    let paramIndex = 1;

    if (category) {
      query += ` AND category = $${paramIndex}`;
      params.push(category);
      paramIndex++;
    }

    if (featured === 'true') {
      query += ` AND featured = true`;
    }

    query += ' ORDER BY id ASC';

    const result = await db.query(query, params);
    
    // Transform to match frontend expected structure
    const blogs = result.rows.map(b => ({
      id: b.id,
      title: b.title,
      slug: b.slug,
      coverImage: b.cover_image,
      category: b.category,
      author: {
        name: b.author_name,
        avatar: b.author_avatar,
        role: b.author_role
      },
      publishDate: b.publish_date,
      readingTime: b.reading_time,
      excerpt: b.excerpt,
      featured: b.featured,
      content: b.content
    }));

    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await db.query('SELECT * FROM blogs WHERE slug = $1', [slug]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    const b = result.rows[0];
    const blog = {
      id: b.id,
      title: b.title,
      slug: b.slug,
      coverImage: b.cover_image,
      category: b.category,
      author: {
        name: b.author_name,
        avatar: b.author_avatar,
        role: b.author_role
      },
      publishDate: b.publish_date,
      readingTime: b.reading_time,
      excerpt: b.excerpt,
      featured: b.featured,
      content: b.content
    };

    res.status(200).json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
