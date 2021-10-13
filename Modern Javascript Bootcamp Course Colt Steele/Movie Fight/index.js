const fetchData = async (searchTerm) => {
	const response = await axios
		.get('http://www.omdbapi.com/', {
			params: {
				apikey: 'd4bcc0fd',
				s: searchTerm
			}
		})
		.catch((error) => {
			console.log(error);
		});
	console.log(response.data);
};

const input = document.querySelector('input');


const onInput = (event) => {
	fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 500));
