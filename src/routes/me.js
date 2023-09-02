const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored-courses', meController.storedCourses);
router.get('/deleted-courses', meController.deletedCourses);

module.exports = router;
