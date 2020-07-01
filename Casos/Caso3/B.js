import {funcion1, funcion2} from 'rutaDependencia1';
import D from 'rutaD';
import E from 'rutaE';
function B(props){
    return(
        <div>
          <D propA={a} propB={b} propC={c} propD={d}/>
          <E propA={a} propB={b} propC={c} propD={d} propE={e}/>
        </div>
    );
};
B.propTypes = {
  a: PropTypes.bool,
  b: PropTypes.bool
};