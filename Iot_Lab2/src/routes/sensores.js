const {Router } = require('express');
const router = Router();
const pool = require('../database');

router.get('/', (req, res) =>{
    res.send('sensor');
});

router.post('/', async (req,res) => {
    const {sensor, temp, hum} = req.body;
    if (sensor && temp && hum) {
        const newSensor = {
            sensor,
            temp,
            hum
        };
        const result = await pool.query('INSERT INTO sensores SET ?', [newSensor]);
        res.json('saved')
    } else {
        res.send('Wrong Request')
    }
});



module.exports = router;