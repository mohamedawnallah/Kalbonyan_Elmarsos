const fs = require('fs');
const crypto = require('crypto');
class UsersRepository {
	constructor(filename) {
		if (!filename) {
			throw new Error('Creating a Repository requires a filename');
		}
		this.filename = filename;
		try {
			fs.accessSync(this.filename);
		} catch (err) {
			// We will always deal with an array data structure
			fs.writeFileSync(this.filename, '[]');
		}
	}

	async getAll() {
		return JSON.parse(
			await fs.promises.readFile(this.filename, {
				encoding: 'utf8'
			})
		);
	}

	async create(attrs) {
		// {email:'askdsadasdsadasd', password:'sdaddsadas'}
		attrs.id = this.randomId();

		const records = await this.getAll();
		records.push(attrs);

		await this.writeAll(records);
	}

	async writeAll(records) {
		await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
	}
	 randomId() {
		return crypto.randomBytes(4).toString('hex');
	}
}

const test = async () => {
	const repo = new UsersRepository('users.json');
	await repo.create({ email: 'test@test.com', passowrd: 'password' });
	const users = await repo.getAll();
	console.log(users);
};

test();
