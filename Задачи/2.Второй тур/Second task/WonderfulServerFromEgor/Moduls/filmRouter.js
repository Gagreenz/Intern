const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const allFilms = await pool.query('SELECT * FROM Films');
    res.json(allFilms.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const film = await pool.query('SELECT * FROM Films WHERE Id = $1', [id]);
    res.json(film.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, releaseYear } = req.body;
    const newFilm = await pool.query(
      'INSERT INTO Films (Title, ReleaseYear) VALUES ($1, $2) RETURNING *',
      [title, releaseYear]
    );
    res.json(newFilm.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, releaseYear } = req.body;
    const updatedFilm = await pool.query(
      'UPDATE Films SET Title = $1, ReleaseYear = $2 WHERE Id = $3 RETURNING *',
      [title, releaseYear, id]
    );
    res.json(updatedFilm.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFilm = await pool.query('DELETE FROM Films WHERE Id = $1', [id]);
    res.json(`Film with ID ${id} has been deleted.`);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
