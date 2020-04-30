const agent = require('superagent');

const getDogImageURL = async () => {
  const { body: { message: dogUrl }} = await agent.get('https://dog.ceo/api/breeds/image/random');
  return dogUrl;
};

(async () => {
  console.log('hello!');
})();
