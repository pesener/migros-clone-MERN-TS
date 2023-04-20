import { FETCH_DISTRICT } from "../../constants/actionConstants";

import * as api from "../../axios/indexAxios";

export const fetchDistrict = (city_id) => async (dispatch) => {
  try {
    const { data } = await api.getDataDistrict(city_id);
    dispatch({ type: FETCH_DISTRICT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
