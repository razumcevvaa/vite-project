import './idbm.scss'
// поиск фильмов
const titleFilm = document.getElementById("title-film") as HTMLInputElement
const searchButton = document.getElementById("search-button") as HTMLButtonElement
const resultsFilm = document.getElementById("result-film") as HTMLDivElement

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  if (!target.dataset.value) return
  const type = target.dataset.value
  const title = titleFilm.value
  if (!title) return
  request(`http://www.omdbapi.com/?apikey=73558a7a&s=${title}&type=${type}`)
})

titleFilm.addEventListener('keydown', (event) => {
  const title = titleFilm.value
  if (event.keyCode === 13) {
    request(`http://www.omdbapi.com/?apikey=73558a7a&s=${title}`)
  }
})

function request(url: string) {
  resultsFilm.innerHTML = ''
  fetch(url)
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
}

searchButton.addEventListener('click', () => {
  const title = titleFilm.value
  request(`http://www.omdbapi.com/?apikey=73558a7a&s=${title}`)
})

function showDetails(imdbID: string) {
  fetch(`http://www.omdbapi.com/?apikey=73558a7a&i=${imdbID}`)
    .then(response => response.json())
    .then(data => {
      const movieDetails = document.createElement("div")
      movieDetails.innerHTML =
        `<img src="${data.Poster}" alt = "${data.Title}" >
        <div>
        <h3>${data.Title}</h3>
                <p>Released: ${data.Released}</p>
                <p>Genre: ${data.Genre}</p>
                <p>Director: ${data.Director}</p>
                <p>Actors: ${data.Actors}</p>
                <p>Plot: ${data.Plot}</p> </div>`
      document.body.style.opacity = '0.3'
      movieDetails.className = 'overlay'
      document.body.append(movieDetails)
    })
    .catch(error => {
      console.log("An error occurred:", error)
    })
}

resultsFilm.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  if (!target.dataset.id) return
  showDetails(target.dataset.id)
})

async function sleep(s: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), s * 1000)
  })
}

const plakat = document.getElementById("plakat") as HTMLDivElement
async function nextP() {
  const images = ['joker.webp', 'super.jpeg', 'marvel.webp', 'looper.jpg', 'hol.jpeg', 'forsaw.jpeg']
  for (let i = 0; i <= images.length; i++) {
    if (i == images.length) i = 0
    plakat.style.backgroundImage = `url(${images[i]})`
    const img = document.createElement('img')
    img.src = i == images.length - 1 ? images[0] : images[i + 1]
    await sleep(7)
  }
}
nextP()


