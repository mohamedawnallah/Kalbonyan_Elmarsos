const express = require('express');
const bodyParser = require('body-parser')
const usersRepo = require('./repositories/users.js');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
	res.send(`
     <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
     </div>
    `);
});

app.post('/', async (req, res) => {
	// get access to email, password, passwordConfirmation
    const {email, password, passwordConfirmation} = req.body;
    const exisitingUser = await usersRepo.getOneBy({email});
console.log(exisitingUser);
    if (exisitingUser) {
        return res.send('Email In Use')
    }
    
    if (password !== passwordConfirmation) {
        return res.send('Passwords Must Match');
    }
	res.send(`
   Account Created!! 🎉
    `);
});

app.listen(3000, () => {
	console.log('Listening');
});
