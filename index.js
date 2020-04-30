const agent = require('superagent');
const asciify = require('asciify-image');

const getDogImageURL = async () => {
  const { body: { message: dogUrl }} = await agent.get('https://dog.ceo/api/breeds/image/random');
  return dogUrl;
};

(async () => {
  // Get a URL for a random image of a dog
  const dogUrl = await getDogImageURL();

  // Download the image
  const { body: data } = await agent.get(dogUrl);

  // Convert the image to ascii
  const ascii = await asciify(data, {
    fit: 'box',
    width: 60,
    height: 60,
  });

  // Print the ascii
  console.log(ascii);
})();
