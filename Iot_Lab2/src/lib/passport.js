const passport = require('passport');
const pool = require('../database');
const LocalStrategy = require('passport-local').Strategy;

const helpers = require('../lib/helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    console.log(req.body);
    const rows = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
    console.log(rows);
    if (rows.length > 0) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(password, user.password);
        if (validPassword) {
            done(null, user, req.flash('success', 'Welcome'));
        } else {
            done(null, false, req.flash('message', 'Incorrect Password'));
        }
    } else {
        return done(null, false, req.flash('message', "The Username does not exits"));
    }
}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    password: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const { nombre, password2 } = req.body;
    if (password != password2) {
        done(null, false, req.flash('message', "Password does not equal"));
    }
    else {
        const newUser = {
            email,
            password,
            nombre
        };
        newUser.password = await helpers.encryptPassword(password);
        const result = await pool.query('INSERT INTO usuario SET ?', [newUser]);
        newUser.id = result.insertId;
        console.log(result);
        return done(null, newUser);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM usuario WHERE id = ?', [id]);
    done(null, rows[0]);
});