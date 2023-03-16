const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
    try {
      const allGenres = await pool.query('SELECT * FROM Genre');
      res.json(allGenres.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const genre = await pool.query('SELECT * FROM Genre WHERE Id = $1', [id]);
      res.json(genre.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
router.post('/', async (req, res) => {
    try {
      const { Name } = req.body;
      const newGenre = await pool.query(
        'INSERT INTO Genre (Name) VALUES ($1) RETURNING *',
        [Name]
      );
      res.json(newGenre.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { Name } = req.body;
      const updatedGenre = await pool.query(
        'UPDATE Genre SET Name = $1 WHERE Id = $2 RETURNING *',
        [Name, id]
      );
      res.json(updatedGenre.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedGenre= await pool.query('DELETE FROM Genre WHERE Id = $1',
       [id]
      );
      res.json(`Genre with ID ${id} has been deleted.`);
    } catch (err) {
      console.error(err.message);
    }
  });

module.exports = router;
