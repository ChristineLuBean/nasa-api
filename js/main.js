  const API_KEY = process.env.API_KEY;

// Function to fetch APOD data based on the selected date
function getFetch() {
  const selectedDate = document.querySelector('input').value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${selectedDate}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.querySelector('img').src = data.hdurl;
      document.querySelector('p').innerText = data.explanation;
    })
    .catch(err => {
      console.error(`Error: ${err}`);
    });
}

// Event listener for button click
document.querySelector('button').addEventListener('click', getFetch);

// Fetch APOD data for current date on page load
window.onload = function() {
  const currentDate = new Date().toJSON().slice(0, 10);
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${currentDate}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.querySelector('img').src = data.hdurl;
      document.querySelector('p').innerText = data.explanation;
    })
    .catch(err => {
      console.error(`Error: ${err}`);
    });
}
