import FetchFishData from '../../database/fishAPI';

const GET_FISH_REQUEST = 'seafood/Fish/FETCH/GET_REQUEST';
const GET_FISH_SUCCESS = 'seafood/Fish/GET_SUCCESS';
const GET_FISH_FAIL = 'seafood/Fish/GET_FAIL';

const initialState = {
  loading: false,
  fishArray: [],
  error: '',
};

const getFishRequest = () => ({
  type: GET_FISH_REQUEST,
});

const getFishSuccess = (fishArray) => ({
  type: GET_FISH_SUCCESS,
  payload: fishArray,
});

const getFishFail = (error) => ({
  type: GET_FISH_FAIL,
  payload: error,
});

function getFish() {
  return (dispatch) => {
    dispatch(getFishRequest());
    FetchFishData()
      .then((data) => {
        const fishJSON = data.map((dat) => ({
          sciName: dat['Scientific Name'],
          normalName: dat['Species Name'],
          biology: dat.Biology,
          calories: dat.Calories,
          carbohydrates: dat.Carbohydrate,
          fat: dat['Fat, Total'],
          proteins: dat.Protein,
          imgArr: dat['Image Gallery'],
          locale: dat.Location,
          population: dat['Population Status'],
          harvest: dat.Harvest,
          health: dat['Health Benefits'],
        }));
        dispatch(getFishSuccess(fishJSON));
      })
      .catch((error) => {
        dispatch(getFishFail(error.message));
      });
  };
}

export default function FishReducer(state = initialState, action) {
  switch (state.action) {
    case GET_FISH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_FISH_SUCCESS:
      return {
        ...state,
        fishArray: action.payload,
      };
    case GET_FISH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
