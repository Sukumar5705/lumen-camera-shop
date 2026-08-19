import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

// Import data from frontend TS files
import { products } from '../../src/data/products';
import { brands } from '../../src/data/brands';
import { blogs } from '../../src/data/blogs';

// Use require for dotenv to keep it simple in ts-node
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function runSeed() {
  const client = await pool.connect();
  
  try {
    console.log('Starting seed...');

    // Run schema
    const schemaSql = fs.readFileSync(path.resolve(__dirname, 'schema.sql'), 'utf-8');
    await client.query(schemaSql);
    console.log('Schema applied.');

    // Clear existing tables
    await client.query('TRUNCATE TABLE products, brands, blogs CASCADE');
    console.log('Tables truncated.');

    // Insert Products
    for (const p of products) {
      await client.query(`
        INSERT INTO products (id, name, category, brand, price, old_price, rating, review_count, image, badge, stock_status, description)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      `, [
        p.id, p.name, p.category, p.brand, p.price, p.oldPrice || null, p.rating, p.reviewCount,
        p.image, p.badge || null, p.stockStatus, p.description
      ]);
    }
    console.log(`Seeded ${products.length} products.`);

    // Insert Brands
    for (const b of brands) {
      await client.query(`
        INSERT INTO brands (id, name, slug, logo, founded, country, type, description, history, product_count, cover_image, tagline, featured_tech)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      `, [
        b.id, b.name, b.slug, b.logo, b.founded, b.country, b.type, b.description, b.history,
        b.productCount, b.coverImage, b.tagline, JSON.stringify(b.featuredTech)
      ]);
    }
    console.log(`Seeded ${brands.length} brands.`);

    // Insert Blogs
    for (const bg of blogs) {
      // blogs have `author` object
      await client.query(`
        INSERT INTO blogs (id, title, slug, cover_image, category, author_name, author_avatar, author_role, publish_date, reading_time, excerpt, featured)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      `, [
        bg.id, bg.title, bg.slug, bg.coverImage, bg.category, bg.author.name, bg.author.avatar, bg.author.role,
        bg.publishDate, bg.readingTime, bg.excerpt, bg.featured || false
      ]);
    }
    console.log(`Seeded ${blogs.length} blogs.`);

    console.log('Seed completed successfully!');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    client.release();
    pool.end();
  }
}

runSeed();
