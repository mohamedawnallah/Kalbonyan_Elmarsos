const express = require('express');
const bodyParser = require('body-parser')

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

app.post('/',  (req, res) => {
	// get access to email, password, passwordConfirmation
    console.log(req.body)
	res.send(`
   Account Created!! 🎉
    `);
});

app.listen(3000, () => {
	console.log('Listening');
});
