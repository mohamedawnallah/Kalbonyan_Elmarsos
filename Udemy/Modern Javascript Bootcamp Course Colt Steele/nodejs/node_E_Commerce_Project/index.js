const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const usersRepo = require('./repositories/users.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: [ 'lfjdalksfkelkawr' ]
	})
);
app.get('/signup', (req, res) => {
	res.send(`
     <div>
     Your Id is ${req.session.userId}
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
     </div>
    `);
});

app.post('/signup', async (req, res) => {
	// get access to email, password, passwordConfirmation
	const { email, password, passwordConfirmation } = req.body;
	const exisitingUser = await usersRepo.getOneBy({ email });
	console.log(exisitingUser);
	if (exisitingUser) {
		return res.send('Email In Use');
	}

	if (password !== passwordConfirmation) {
		return res.send('Passwords Must Match');
	}
	//Create a user in our user repo to represent this person
	const user = await usersRepo.create({ email, password });

	//Store the id of that user in the users cookie
	req.session.userId = user.id;
	res.send(`
   Account Created!! 🎉
    `);
});

app.get('/signout', (req, res) => {
	req.session = null;
	res.send('You Are logged out');
});

app.get('/signin', (req, res) => {
	res.send(`
    <div>
     <form method="POST">
       <input name="email" placeholder="email" />
       <input name="password" placeholder="password" />
       <button>Sign In</button>
     </form>
    </div>
   `);
});

app.post('/signin', async (req, res) => {
	// get access to email, password, passwordConfirmation
	const { email, password } = req.body;
	const exisitingUser = await usersRepo.getOneBy({ email });
	console.log(exisitingUser);
	if (!exisitingUser) {
		return res.send('Email not found');
	}

	if (exisitingUser.password !== password) {
		return res.send('Invalid Password');
	}
    req.session.userId = exisitingUser.id;
	 res.send('Congratulations!🎉 You have already signed in');
});
app.listen(3000, () => {
	console.log('Listening');
});
