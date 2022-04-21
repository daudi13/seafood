/* eslint linebreak-style: ["error", "windows"] */
export default async function fetchFishData() {
  const baseUrl = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';
  const response = await fetch(baseUrl);
  if (response.status === 200) {
    return response.json();
  }
  return null;
}
