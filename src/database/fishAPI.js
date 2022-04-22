/* eslint linebreak-style: ["error", "windows"] */

export default async function fetchFishData() {
  const baseUrl = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';
  const response = await fetch(baseUrl);
  if (response.status !== 200) {
    throw new Error('Check your endpoint and try again');
  } try {
    const fishData = await response.json();
    return fishData;
  } catch (error) {
    throw new Error(error.message);
  }
}
