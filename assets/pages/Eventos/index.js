import Eventos from './Eventos';
import { connect } from 'react-redux';
import { hideAlternativeFooter } from '../../api/general';

const mapDispatchToProps = (dispatch) => ({
  hideAlternativeFooter: () => hideAlternativeFooter(dispatch),
});

export default connect(null, mapDispatchToProps)(Eventos);
