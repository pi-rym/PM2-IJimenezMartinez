const filmSection = document.getElementById('films')

function renderFilms(movie){

    const movieElement = document.createElement('article')
    const card = document.createElement('div')

    card.classList.add('divMovie')

    card.innerHTML = `<img src="${movie.poster}" arc="${movie.title}">`

    card.innerHTML = `
    <h3>${movie.title} (${movie.year})</h3>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Duración:</strong> ${movie.duration}</p>
    <p><strong>Género:</strong> ${movie.genre.join(', ')}</p>
    <p><strong>Rate:</strong> ${movie.rate}</p>
    `

    filmSection.appendChild(movieElement)
    movieElement.appendChild(containerMovie)
}

tempData.forEach(renderFilms);

