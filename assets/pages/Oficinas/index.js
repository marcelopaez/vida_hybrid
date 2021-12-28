import Oficinas from './Oficinas';
import { connect } from 'react-redux';
import { showAlternativeFooter } from '../../api/general';

const mapDispatchToProps = (dispatch) => ({
  showAlternativeFooter: () => showAlternativeFooter(dispatch),
});

export default connect(null, mapDispatchToProps)(Oficinas);
