
  const dogImage = document.getElementById('dog-image');
  const newImageButton = document.getElementById('new-image-button');

  const getRandomDogImage = () => {
      const url = "https://dog.ceo/api/breeds/image/random";

      return fetch(url)
          .then(response => response.json())
          .then(data => {
              return data.message; // The image URL is in the "message" property
          })
          .catch(error => {
              console.error(error);
          });
  };

  const loadNewImage = () => {
      getRandomDogImage().then(imageUrl => {
          dogImage.src = imageUrl;
      });
  };

  newImageButton.addEventListener('click', loadNewImage);

  // Load an initial image when the page loads
  loadNewImage();;
