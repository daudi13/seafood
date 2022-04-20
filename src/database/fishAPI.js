const baseUrl = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';

export default async function FetchFishData() {
  const response = await fetch(baseUrl);
  if (response.status !== 200) {
    throw new Error(
      'wrong endpoint, check endpoint and try again',
    );
  } try {
    const res = await response.json();
    console.log(res);
  } catch (error) {
    throw new Error(error.message);
  }
}
