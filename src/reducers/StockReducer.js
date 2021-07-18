import{
    GET_SUGGESTIONS_BY_NAME,
    GET_SUGGESTIONS_BY_NAME_ERROR
} from "../actions/types";
const initialState = {
    suggestions: null,
    suggestionsError: null
};
export default function(state = initialState, actions) {
    switch (actions.type) {
        case GET_SUGGESTIONS_BY_NAME:
            return {
            ...state,
            suggestions: actions.payload
            };
        case GET_SUGGESTIONS_BY_NAME_ERROR:
            return {
            ...state,
            suggestionsError: actions.payload
            };
        default:
            return state;
    }
}