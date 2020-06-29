grammar React;

program                 :   program_body* EOF;

program_body            :   (import_statement | functionR | adding_proptypes);

import_statement        :   IMPORT CORCHETE_IZQ id_list CORCHETE_DER FROM STRING PUNTO_COMA SALTO? #no_id_import|
                            IMPORT ID (COMA CORCHETE_IZQ id_list CORCHETE_DER )? FROM STRING PUNTO_COMA SALTO? #id_import;




id_list                 :   ID more_id*;

more_id                 :   COMA ID more_id*;

functionR               :   FUNCTION ID PAR_IZQ id_list PAR_DER CORCHETE_IZQ SALTO? func_body SALTO? CORCHETE_DER PUNTO_COMA SALTO?;

func_body               :   RETURN PAR_IZQ SALTO? (html_elements | html_short_element) SALTO? PAR_DER PUNTO_COMA;
html_elements           :   OPEN_TAG ID props? CLOSE_TAG SALTO? value_html_tag? SALTO? (html_elements | html_short_element)* value_html_tag? SALTO? OPEN_TAG SLASH ID CLOSE_TAG SALTO?;
html_short_element      :   OPEN_TAG ID props? SLASH CLOSE_TAG SALTO?;
props                   :   ID possible_assign? more_props*;
more_props              :   ID possible_assign?;
possible_assign         :   IGUAL (CORCHETE_IZQ ID CORCHETE_DER | literal);
literal                 :   STRING | NULL | TRUE | FALSE | INTEGER;
value_html_tag          :   CORCHETE_IZQ expr CORCHETE_DER | STRING;
adding_proptypes        :   ID PUNTO PROPTYPES IGUAL CORCHETE_IZQ SALTO? prop_types_body CORCHETE_DER PUNTO_COMA SALTO?;
prop_types_body         :   ID DOS_PUNTOS PROPTYPESCLASS PUNTO types_of_proptypes (SALTO | COMA SALTO? prop_types_body)?;
types_of_proptypes      :   ARRAY | BOOL | FUNC | NUMBER | OBJECT | STRING_TYPE | SYMBOL;

var_def                 :   VAR ID IGUAL literal PUNTO_COMA SALTO?;
stmt                    :   IF expr CORCHETE_IZQ SALTO? block CORCHETE_DER (ELSE IF expr CORCHETE_IZQ SALTO? block CORCHETE_DER)* (ELSE CORCHETE_IZQ SALTO? block CORCHETE_DER)? PUNTO_COMA SALTO?|
                            WHILE expr CORCHETE_IZQ SALTO? block CORCHETE_DER PUNTO_COMA SALTO? |
                            FOR PAR_IZQ (VAR | LET) ID IGUAL literal PUNTO_COMA ID (OPEN_TAG | CLOSE_TAG | ES_DIFERENTE | ES_IGUAL) literal PUNTO_COMA ID (INCREMENTAR | DECREMENTAR) PAR_DER CORCHETE_IZQ SALTO? block CORCHETE_DER PUNTO_COMA SALTO? |
                            simple_stmt SALTO?;
simple_stmt             :   BREAK PUNTO_COMA SALTO? | 
                            expr | 
                            RETURN expr? PUNTO_COMA SALTO? |
                            (target IGUAL)+  expr PUNTO_COMA SALTO?;
block                   :   stmt+;
expr                    :   NOT expr | 
                            expr (AND | OR) expr |
                            expr INTERROGANTE expr DOS_PUNTOS expr PUNTO_COMA SALTO? | 
                            cexpr;
cexpr                   :   ID |
                            literal |
                            PAR_IZQ expr PAR_DER |
                            cexpr PUNTO ID |
                            cexpr PAR_CUADR_IZQ expr PAR_CUADR_DER |
                            cexpr PUNTO ID PAR_IZQ list_expr? PAR_DER |
                            ID PAR_IZQ list_expr? PAR_DER |
                            //cexpr bin_op cexpr |
                            MENOS cexpr;
list_expr               :   expr more_expr?;
more_expr               :   COMA expr more_expr*;
target                  :   ID |
                            cexpr PUNTO ID |
                            cexpr PAR_CUADR_IZQ expr PAR_CUADR_DER;






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
IF                 :   'if';
ELSE               :   'else';
VAR                :   'var';
LET                :   'let'; 
ES_IGUAL           :   '===';
ES_DIFERENTE       :   '!==';
INCREMENTAR        :   '++';
DECREMENTAR        :   '--';
BREAK              :   'break';
NOT                :   '!';
AND                :   '&&';
OR                 :   '||';
INTERROGANTE       :   '?';
PAR_CUADR_IZQ      :   '[';
PAR_CUADR_DER      :   ']';
WHILE              :   'while';
FOR                :   'for';
MENOS              :   '-';


WHITESPACE       :   (' '|'\t') -> skip;
ID               :   ([A-Za-z_])([A-Za-z_0-9])* ;
STRING           :   COMILLA1 [A-Za-z0-9_!.? ]* COMILLA1 | COMILLA2 [A-Za-z0-9_!.? ]* COMILLA2;
INTEGER          :   '0'..'9'+;