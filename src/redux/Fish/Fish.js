import fetchFishData from '../../database/fishAPI';

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
    fetchFishData()
      .then((data) => {
        const fishJSON = data.map((dat) => ({
          id: dat.id,
          name: dat.name,
          sciName: dat.latin_name,
          maxLength: dat.length_max,
          minLength: dat.length_min,
          minWeight: dat.weight_min,
          maxWeight: dat.weight_max,
          lifespan: dat.lifespan,
          habitat: dat.habitat,
          diet: dat.diet,
          img: dat.image_link,
        }));
        dispatch(getFishSuccess(fishJSON));
      })
      .catch((error) => {
        dispatch(getFishFail(error.message));
      });
  };
}

export default function FishReducer(state = initialState, action) {
  switch (action.type) {
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
}

export {
  getFishRequest,
  getFishSuccess,
  getFishFail,
  getFish,
};
