import { SHOW_ALTERNATIVE_FOOTER, HIDE_ALTERNATIVE_FOOTER } from '../../actions/general';

const initState = {
  showAlternativeFooter: false,
};

const generalReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_ALTERNATIVE_FOOTER:
      return { ...state, showAlternativeFooter: true };
    case HIDE_ALTERNATIVE_FOOTER:
      return { ...state, showAlternativeFooter: false };
    default:
      return { ...state };
  }
};

export default generalReducer;
