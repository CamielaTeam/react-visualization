import {funcion1} from 'dependencia1';
function Comentario(props){
    return(
        <div>
          <texto/>
        </div>
    );
};
Comentario.propTypes = {
  nombreForo: PropTypes.string,
  tema: PropTypes.string
};