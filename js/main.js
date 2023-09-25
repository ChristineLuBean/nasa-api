const apiKey = 'nPdJJm8JCgqsIQzF9Z36zFlUcf4MuFBE8dySsGT2';

// Function to fetch APOD data based on the selected date
function getFetch() {
  const selectedDate = document.querySelector('input').value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}`;
  document.querySelector('img').src = '';
  document.querySelector('iframe').src = '';

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.media_type === 'image') {
        document.querySelector('iframe').src = '';
        document.querySelector('img').src = data.hdurl;
      } else if (data.media_type === 'video') {
        document.querySelector('img').src = '';
        document.querySelector('iframe').src = data.url;
      }
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
      console.log(data)
      if (data.media_type === 'image') {
        document.querySelector('img').src = data.hdurl;
      } else if (data.media_type === 'video') {
        document.querySelector('iframe').src = data.url;
      }
      document.querySelector('p').innerText = data.explanation;
    })
    .catch(err => {
      console.error(`Error: ${err}`);
    });
}
