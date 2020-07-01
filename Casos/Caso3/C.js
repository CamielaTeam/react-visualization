import {funcion1, funcion2} from 'rutaDependencia1';
import F from 'rutaF';
import G from 'rutaG';
function C(props){
    return(
        <div>
          <F propA={a} propB={b} propC={c} propD={d} propE={e} propF={f}/>
          <G propA={a} propB={b} propC={c} propD={d} propE={e} propF={f} propG={g}/>
        </div>
    );
};
C.propTypes = {
  a: PropTypes.bool,
  b: PropTypes.bool,
  c: PropTypes.bool
};