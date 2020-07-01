import {funcion1} from 'dependencia1';
function Comentario(props){
    return(
        <div>
          <texto/>
        </div>
    );
};
LandingView.propTypes = {
  nombreForo: PropTypes.string,
  tema: PropTypes.string
};