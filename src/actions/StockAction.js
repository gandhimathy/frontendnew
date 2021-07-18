
import{
    GET_SUGGESTIONS_BY_NAME,
    GET_SUGGESTIONS_BY_NAME_ERROR
} from "./types";
import axios from "axios";
import config from "../Config";

export const getSuggestions = keyWord => dispach => {
    axios
      .get(config.apiGateway.URL + "getSuggestions/"+keyWord)
      .then(response => {
        dispach({
          type: GET_SUGGESTIONS_BY_NAME,
          payload: response.data
        });
      })
      .catch(err => {
        dispach({
          type: GET_SUGGESTIONS_BY_NAME_ERROR,
          payload: err.response.data
        });
      });
  };
