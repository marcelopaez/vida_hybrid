import { SHOW_ALTERNATIVE_FOOTER, HIDE_ALTERNATIVE_FOOTER } from '../../redux/actions/general';

export const showAlternativeFooter = (dispatch) => {
  dispatch({ type: SHOW_ALTERNATIVE_FOOTER });
};

export const hideAlternativeFooter = (dispatch) => {
  dispatch({ type: HIDE_ALTERNATIVE_FOOTER });
};
