import Salas from './Salas';
import { connect } from 'react-redux';
import { hideAlternativeFooter } from '../../api/general';

const mapDispatchToProps = (dispatch) => ({
  hideAlternativeFooter: () => hideAlternativeFooter(dispatch),
});

export default connect(null, mapDispatchToProps)(Salas);
