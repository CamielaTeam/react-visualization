grammar React;

program                 :   program_body* EOF;

program_body            :   (import_statement | functionR | adding_proptypes);

import_statement        :   IMPORT CORCHETE_IZQ id_list CORCHETE_DER FROM STRING PUNTO_COMA SALTO? #no_id_import|
                            IMPORT ID (COMA CORCHETE_IZQ id_list CORCHETE_DER )? FROM STRING PUNTO_COMA SALTO? #id_import;




id_list                 :   ID more_id*;

more_id                 :   COMA ID more_id*;

functionR               :   FUNCTION ID PAR_IZQ id_list PAR_DER CORCHETE_IZQ SALTO? func_body SALTO? CORCHETE_DER PUNTO_COMA SALTO?;

func_body               :   RETURN PAR_IZQ SALTO? html_elements SALTO? PAR_DER PUNTO_COMA;
html_elements           :   OPEN_TAG ID props? CLOSE_TAG SALTO? value_html_tag? SALTO? html_elements* SALTO? value_html_tag? SALTO? OPEN_TAG SLASH ID CLOSE_TAG ;
html_short_element      :   OPEN_TAG ID props? SLASH CLOSE_TAG ;
props                   :   ID possible_assign? more_props?;
more_props              :   ID possible_assign?;
possible_assign         :   IGUAL (CORCHETE_IZQ ID CORCHETE_DER | literal);
literal                 :   STRING | NULL | TRUE | FALSE | INTEGER;
value_html_tag          :   CORCHETE_IZQ expr CORCHETE_DER | STRING;
adding_proptypes        :   ID PUNTO PROPTYPES IGUAL CORCHETE_IZQ SALTO? prop_types_body CORCHETE_DER PUNTO_COMA SALTO?;
expr                    :   STRING;
prop_types_body         :   ID DOS_PUNTOS PROPTYPESCLASS PUNTO types_of_proptypes (SALTO | COMA SALTO? prop_types_body)?;
types_of_proptypes      :   ARRAY | BOOL | FUNC | NUMBER | OBJECT | STRING_TYPE | SYMBOL;



COMA               :   ',';
COMILLA1           :   '\'';
COMILLA2           :   '"';
IMPORT             :   'import';
CORCHETE_IZQ       :   '{';
CORCHETE_DER       :   '}';
FROM               :   'from';
PUNTO_COMA         :   ';';
SALTO              :   '\n';
FUNCTION           :   'function';
PAR_IZQ            :   '(';
PAR_DER            :   ')';
RETURN             :   'return';
OPEN_TAG           :   '<';
CLOSE_TAG          :   '>';
SLASH              :   '/';
EXPORT             :   'export';
IGUAL              :   '=';
NULL               :   'null';
TRUE               :   'true';
FALSE              :   'false';
PUNTO              :   '.';
PROPTYPES          :   'propTypes';
PROPTYPESCLASS     :   'PropTypes';
DOS_PUNTOS         :   ':';
ARRAY              :   'array';
BOOL               :   'bool';
FUNC               :   'func';
NUMBER             :   'number';
OBJECT             :   'object';
STRING_TYPE        :   'string';
SYMBOL             :   'symbol';







ID               :   ([A-Za-z_])([A-Za-z_0-9])* ;
STRING           :   COMILLA1 [A-Za-z0-9_!.? ]* COMILLA1 | COMILLA2 [A-Za-z0-9_!.? ]* COMILLA2;
INTEGER          :   '0'..'9'+;