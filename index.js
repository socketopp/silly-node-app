const agent = require('superagent');
const asciify = require('asciify-image');

const BREED = 'shiba';
const DOG_API_URL = `https://dog.ceo/api/breed/${BREED}/images/random`;

const getDogImageURL = async () => {
  const { body: { message: dogUrl }} = await agent.get(DOG_API_URL);
  return dogUrl;
};

(async () => {
  // Get a URL for a random image of a dog with a specific breed.
  const dogUrl = await getDogImageURL();
  
  // Convert the image to ascii
  const ascii = await asciify(dogUrl, {
    fit: 'box',
    width: 60,
    height: 60,
  });

  // Print the ascii
  console.log(ascii);
})();
