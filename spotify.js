async function downloadSong() {
  const url = document.getElementById("spotifyUrl").value;
  const downloadLink = document.getElementById("downloadLink");
  downloadLink.innerHTML = "Loading...";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
      "X-RapidAPI-Host": "spotify-song-downloader.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(
      `https://spotify-song-downloader.p.rapidapi.com/download?url=${encodeURIComponent(
        url
      )}`,
      options
    );
    const data = await response.json();
    if (data.link) {
      downloadLink.innerHTML = `<a href="${data.link}" class="btn btn-success" target="_blank">Download Here</a>`;
    } else {
      downloadLink.innerHTML =
        "Failed to generate download link. Please check your URL.";
    }
  } catch (error) {
    downloadLink.innerHTML = "An error occurred. Please try again.";
  }
}
