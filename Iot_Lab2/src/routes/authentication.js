const express = require('express');
const router = express.Router();
const passport = require('passport');
const {isLoggedIn, isNotLoggedIn} = require('../lib/auth')
const pool = require('../database');

router.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('auth/signup');
});

router.post('/signup', passport.authenticate('local.signup',{
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/signin',isNotLoggedIn,(req, res) => {
    res.render('auth/signin');
});

router.post('/signin', (req, res) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res);
});

router.get('/profile', isLoggedIn, async(req, res) => {
    const sensor = await pool.query(' SELECT * FROM sensores WHERE id IN (SELECT MAX(id) FROM sensores GROUP BY sensor) ORDER BY id DESC');
    const actuadores = await pool.query('SELECT * FROM actuadores');
    console.log(sensor);
    res.render('profile', {sensor, actuadores});
});

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/signin');
});

router.get('/editON/:id', async(req,res) => {
    const{ id } = req.params;
    const actuador = await pool.query('UPDATE actuadores SET estado = 1 WHERE id = ?', [id]);
    res.redirect('/profile');
});

router.get('/editOFF/:id', async(req,res) => {
    const{ id } = req.params;
    const actuador = await pool.query('UPDATE actuadores SET estado = 0 WHERE id = ?', [id]);
    res.redirect('/profile');
});
module.exports = router;