import {funcion1, funcion2} from 'rutaDependencia1';
import B from 'rutaB';
import C from 'rutaC';
function A(props){
    return(
        <div>
          <B propA={a} propB={b}/>
          <C propA={a} propB={b} propC={c}/>
        </div>
    );
};
A.propTypes = {
  a: PropTypes.bool
};