import bcrypt from 'bcrypt';

const register = async (password) => {
	const salt = await bcrypt.genSalt(12);
	const hash = await bcrypt.hash(password, salt);
	console.log(hash); // store hash in database in user's record
};

const login = async (password) => {
	const hash = '$2b$16$voralVyzq61vnmChXN6bvuoGerui/udsFulB7l5cEXuN7wFgzHzve'; // get hash from user record in database
	const result = await bcrypt.compare(password, hash);
	console.log(result)
};

register('PASSWORD');
// login('test000'); 

