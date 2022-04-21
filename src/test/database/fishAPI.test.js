import fetchFishData from '../../database/fishAPI';

/* eslint linebreak-style: ["error", "windows"] */
describe('fetch animal items', () => {
  it('should return a response 200', async () => {
    const res = await fetchFishData();

    expect(res.status).toEqual(200);
  });
});
