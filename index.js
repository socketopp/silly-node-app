const agent = require('superagent');
const asciify = require('asciify-image');

const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';

const getDogImageURL = async () => {
  const { body: { message: dogUrl }} = await agent.get(DOG_API_URL);
  return dogUrl;
};

(async () => {
  // Get a URL for a random image of a dog
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
