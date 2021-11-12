const waitFor = async (selector) => {
	return new Promise((resolve, reject) => {
		const interval = setInterval(() => {
			if (document.querySelector(selector)) {
				clearInterval(interval);
                clearInterval(timeout);
				resolve();
			}
		}, 30);

		const timeout = setTimeout(() => {
			clearInterval(interval);
			reject();
		}, 2000);
	});
};
beforeEach(() => {
	document.querySelector('#target').innerHTML = '';
	createAutoComplete({
		root: document.querySelector('#target'),
		fetchData() {
			return [
				{
					Title: 'Avengers'
				},
				{
					Title: 'Not Avengers'
				},
				{
					Title: 'Some Other Movie'
				},
				{
					Title: 'Just Movie'
				}
			];
		},
		renderOption(movie) {
			return movie.Title;
		}
	});
});
it('Dropdown starts closed', () => {
	const dropdown = document.querySelector('.dropdown');

	expect(dropdown.className).not.to.include('is-active');
});

it('After Searching, dropdown opens up', async () => {
	const input = document.querySelector('input');
	input.value = 'avengers';
	input.dispatchEvent(new Event('input'));

	await waitFor('.dropdown-item');

	const dropdown = document.querySelector('.dropdown');
	expect(dropdown.className).to.include('is-active');
});

it('After Searching, displays some results', async() => {
    const input = document.querySelector('input');
	input.value = 'avengers';
	input.dispatchEvent(new Event('input'));

	await waitFor('.dropdown-item');
    const items = document.querySelectorAll('.dropdown-item');
    expect(items.length).to.equal(4);
})
