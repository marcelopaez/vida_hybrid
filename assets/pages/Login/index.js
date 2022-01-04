import Login from './Login';
import { connect } from 'react-redux';
import { showAlternativeFooter } from '../../api/general';

const mapDispatchToProps = (dispatch) => ({
  showAlternativeFooter: () => showAlternativeFooter(dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
