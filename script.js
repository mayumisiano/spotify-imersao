const searchInput = document.getElementById("search-input");
const resultsArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm) {
  fetch(`http://localhost:4000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  resultPlaylist.classList.add("hidden");
  const artistName = document.getElementById("artist-name");
  const artistImage = document.getElementById("artist-img");

  results.forEach(element => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImage;
  });
  resultsArtist.classList.remove("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultsArtist.classList.add("hidden");
    resultPlaylist.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});
