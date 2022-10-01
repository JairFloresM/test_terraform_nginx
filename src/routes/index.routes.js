const {Router} = require('express');
const router = Router();



router.get('/', (req, res) => {
    res.send("<p>Esto es una prueba de nodejs con nginx y azure</p>");
});


module.exports = router;