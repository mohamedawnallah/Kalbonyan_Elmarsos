const createAutoComplete = ({ root, renderOption, onOptionSelect, inputValue, fetchData }) => {
	root.innerHTML = `
  <label><b>Search</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;
	const input = root.querySelector('input');
	const dropDown = root.querySelector('.dropdown');
	const resultsWrapper = root.querySelector('.results');

	const onInput = async (event) => {
		//Config for Autocomplete
		const items = await fetchData(event.target.value);
		//Function that knows how to render a item
		if (!items.length) {
			dropDown.classList.remove('is-active');
			return;
		}
		dropDown.classList.add('is-active');
		resultsWrapper.innerHTML = '';

		for (let item of items) {
			const option = document.createElement('a');

			option.classList.add('dropdown-item');

			option.innerHTML = renderOption(item);

			option.addEventListener('click', () => {
				dropDown.classList.remove('is-active');
				inputValue(item);
				onOptionSelect(item);
			});
			resultsWrapper.appendChild(option);
		}
	};
	input.addEventListener('input', debounce(onInput, 500));
	//function that gets invoked when a user clicks an option

	document.addEventListener('click', (event) => {
		if (!root.contains(event.target)) {
			dropDown.classList.remove('is-active');
		}
	});
};
