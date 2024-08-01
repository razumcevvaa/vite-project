import './idbm.scss'
// поиск фильмов
const titleFilm = document.getElementById("title-film") as HTMLInputElement
const typeFilm = document.getElementById("type-film") as HTMLSelectElement
const searchButton = document.getElementById("search-button") as HTMLButtonElement
const resultsFilm = document.getElementById("result-film") as HTMLDivElement

searchButton.addEventListener('click', () => {
  const title = titleFilm.value
  const type = typeFilm.value

  // fetch(`http://www.omdbapi.com/?apikey=73558a7a&s=${title}&type=${type}`)
  fetch(`http://www.omdbapi.com/?apikey=73558a7a&s=${title}&type=${type}`)
    .then(response => response.json())
    .then(data => {
      if (data.Search && data.Search.length > 0) {
        data.Search.forEach((movie: any) => {
          const movieElement = document.createElement("div")
          movieElement.innerHTML +=
            `<img src="${movie.Poster}" alt = "${movie.Title}" >
                        <h3>${movie.Title} </h3>
                        <p> Type: ${movie.Type} </p>
                        <button data-id="${movie.imdbID}"> Details </button>`
          resultsFilm.appendChild(movieElement)
        })
      } else {
        const notFoundMessage = document.createElement("p")
        notFoundMessage.innerText = "Movie not found!"
        resultsFilm.appendChild(notFoundMessage)
      }
    })
    .catch(error => {
      console.log("An error occurred:", error)
    })
})

function showDetails(imdbID: string) {
  fetch(`http://www.omdbapi.com/?apikey=73558a7a&i=${imdbID}`)
    .then(response => response.json())
    .then(data => {
      const movieDetails = document.createElement("div");
      movieDetails.innerHTML =
        `<h3>${data.Title}</h3>
                <p>Released: ${data.Released}</p>
                <p>Genre: ${data.Genre}</p>
                <p>Director: ${data.Director}</p>
                <p>Actors: ${data.Actors}</p>
                <p>Plot: ${data.Plot}</p>`
      resultsFilm.appendChild(movieDetails)
    })
    .catch(error => {
      console.log("An error occurred:", error)
    })
}
// const plakat = document.getElementById("plakat") as HTMLDivElement
// setInterval(() => {
//   plakat.classList.add('nextPl')
// }, 5000)