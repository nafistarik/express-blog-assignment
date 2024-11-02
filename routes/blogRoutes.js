const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController');

router.post('/createBlog', blogController.createBlog);
router.get('/readBlog', blogController.readBlog);
router.put('/updateBlog', blogController.updateBlog);
router.delete('/deleteBlog', blogController.deleteBlog);

module.exports = router;