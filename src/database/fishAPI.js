const baseUrl = 'https://www.fishwatch.gov/api/species';

export default async function FetchFishData() {
  const response = await fetch(baseUrl);
  if (response.status !== 200) {
    throw new Error(
      'wrong endpoint, check endpoint and try again',
    );
  } try {
    const res = response.json();
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
}
