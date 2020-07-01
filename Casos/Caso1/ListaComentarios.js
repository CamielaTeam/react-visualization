import {funcion1} from 'dependencia1';
import Comentario from 'rutaComentario';
function ListaComentarios(props){
    return(
        <Comentario nombreForo={nombreForo} tema={tema}/>
    );
};
CustomButton.propTypes = {
  nombreForo: PropTypes.string,
  tema: PropTypes.string
};