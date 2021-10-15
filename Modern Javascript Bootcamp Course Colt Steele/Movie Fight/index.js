const autocompleteConfig = {
	renderOption(movie) {
		const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;

		return `
                <img src= '${imgSrc}'/>
                ${movie.Title} (${movie.Year})
            `;
	},

	inputValue(movie) {
		return movie.Title;
	},
	async fetchData(searchTerm) {
		const response = await axios
			.get('https://www.omdbapi.com/', {
				params: {
					apikey: 'd4bcc0fd',
					s: searchTerm
				}
			})
			.catch((error) => {
				console.log(error);
			});
		if (response.data.Error) {
			return [];
		}
		return response.data.Search;
	}
};

createAutoComplete({
	...autocompleteConfig,
	root: document.querySelector('#left-autocomplete'),
	onOptionSelect(movie) {
		document.querySelector('.tutorial').classList.add('is-hidden');
		onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
	}
});
createAutoComplete({
	...autocompleteConfig,
	root: document.querySelector('#right-autocomplete'),
	onOptionSelect(movie) {
		document.querySelector('.tutorial').classList.add('is-hidden');
		onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
	}
});
let leftMovie;
let rightMovie;

const onMovieSelect = async (movie, summaryElement, side) => {
	const response = await axios
		.get('https://www.omdbapi.com/', {
			params: {
				apikey: 'd4bcc0fd',
				i: movie.imdbID
			}
		})
		.catch((error) => {
			console.log(error);
		});
	summaryElement.innerHTML = movieTemplate(response.data);

	if (side === 'left') {
		leftMovie = response.data;
	} else {
		rightMovie = response.data;
	}

	if (leftMovie && rightMovie) {
		runComparison();
	}
};
const runComparison = () => {
	const leftSideStats = document.querySelectorAll('#left-summary .notification');
	const rightSideStats = document.querySelectorAll('#right-summary .notification');

	leftSideStats.forEach((leftState, index) => {
		const rightState = rightSideStats[index];
		const leftSideValue = leftState.dataset.value;
		const rightSideValue = rightState.dataset.value;
  
		if (rightSideValue > leftSideValue) {
			leftState.classList.remove('is-primary');
			leftState.classList.add('is-warning');

		} else if ( rightSideValue !== leftSideValue ) {
			rightState.classList.remove('is-primary');
			rightState.classList.add('is-warning');
		}

	});
};

const movieTemplate = (movieDetails) => {
	const dollars = parseInt(movieDetails.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));

	const metascore = parseInt(movieDetails.Metascore);

	const imdbScore = parseFloat(movieDetails.imdbRating);

	const imdbVotes = parseInt(movieDetails.imdbVotes.replace(/,/g, ''));

	const awards = movieDetails.Awards.split(' ').reduce((accumlator, word) => {
		const value = parseInt(word);
		if (isNaN(value)) {
			return accumlator;
		} else {
			return accumlator + value;
		}
	}, 0);
	console.log(awards);
	console.log(dollars, metascore, imdbScore, imdbVotes);
	return `
    <article class="media">
        <figure class="media-left">
            <p class="image">
                <img src="${movieDetails.Poster}"/>
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
              <h1>${movieDetails.Title}</h1>
              <h4>${movieDetails.Genre}</h4>
              <p>${movieDetails.Plot}</p>
            </div>
        </div>
    </article>
    <article data-value=${awards} class="notification is-primary">
      <p class="title">${movieDetails.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>
    
    <article data-value=${dollars} class="notification is-primary">
      <p class="title">${movieDetails.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>

    <article data-value=${metascore} class="notification is-primary">
      <p class="title">${movieDetails.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>

    <article data-value=${imdbScore} class="notification is-primary">
      <p class="title">${movieDetails.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p> 
    </article>

    <article data-value=${imdbVotes} class="notification is-primary">
      <p class="title">${movieDetails.imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
    </article>
  
   `;
};
