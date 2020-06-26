// Generated from React.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ReactListener = require('./ReactListener').ReactListener;
var grammarFileName = "React.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003%\u00d7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0007\u0002&\n\u0002",
    "\f\u0002\u000e\u0002)\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u00030\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004:\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004C\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004I\n\u0004\u0005\u0004",
    "K\n\u0004\u0003\u0005\u0003\u0005\u0007\u0005O\n\u0005\f\u0005\u000e",
    "\u0005R\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "W\n\u0006\f\u0006\u000e\u0006Z\u000b\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007c",
    "\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007g\n\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007l\n\u0007\u0003\b\u0003\b\u0003\b\u0005",
    "\bq\n\b\u0003\b\u0003\b\u0005\bu\n\b\u0003\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\t\u0005\t}\n\t\u0003\t\u0003\t\u0005\t\u0081\n\t\u0003",
    "\t\u0005\t\u0084\n\t\u0003\t\u0005\t\u0087\n\t\u0003\t\u0007\t\u008a",
    "\n\t\f\t\u000e\t\u008d\u000b\t\u0003\t\u0005\t\u0090\n\t\u0003\t\u0005",
    "\t\u0093\n\t\u0003\t\u0005\t\u0096\n\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0005\n\u009f\n\n\u0003\n\u0005\n\u00a2\n",
    "\n\u0003\u000b\u0003\u000b\u0005\u000b\u00a6\n\u000b\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0005\f\u00ad\n\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00b6\n",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0005\u000f\u00be\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u00c4\n\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u00d0\n\u0011\u0003\u0011\u0005\u0011",
    "\u00d3\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0002\u0002\u0013",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"\u0002\u0004\u0004\u0002\u0015\u0017$%\u0003\u0002\u001c\"",
    "\u0002\u00e5\u0002\'\u0003\u0002\u0002\u0002\u0004/\u0003\u0002\u0002",
    "\u0002\u0006J\u0003\u0002\u0002\u0002\bL\u0003\u0002\u0002\u0002\nS",
    "\u0003\u0002\u0002\u0002\f[\u0003\u0002\u0002\u0002\u000em\u0003\u0002",
    "\u0002\u0002\u0010y\u0003\u0002\u0002\u0002\u0012\u009c\u0003\u0002",
    "\u0002\u0002\u0014\u00a3\u0003\u0002\u0002\u0002\u0016\u00a7\u0003\u0002",
    "\u0002\u0002\u0018\u00ae\u0003\u0002\u0002\u0002\u001a\u00b5\u0003\u0002",
    "\u0002\u0002\u001c\u00b7\u0003\u0002\u0002\u0002\u001e\u00c5\u0003\u0002",
    "\u0002\u0002 \u00c7\u0003\u0002\u0002\u0002\"\u00d4\u0003\u0002\u0002",
    "\u0002$&\u0005\u0004\u0003\u0002%$\u0003\u0002\u0002\u0002&)\u0003\u0002",
    "\u0002\u0002\'%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(",
    "*\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002*+\u0007\u0002\u0002",
    "\u0003+\u0003\u0003\u0002\u0002\u0002,0\u0005\u0006\u0004\u0002-0\u0005",
    "\f\u0007\u0002.0\u0005\u001c\u000f\u0002/,\u0003\u0002\u0002\u0002/",
    "-\u0003\u0002\u0002\u0002/.\u0003\u0002\u0002\u00020\u0005\u0003\u0002",
    "\u0002\u000212\u0007\u0006\u0002\u000223\u0007\u0007\u0002\u000234\u0005",
    "\b\u0005\u000245\u0007\b\u0002\u000256\u0007\t\u0002\u000267\u0007$",
    "\u0002\u000279\u0007\n\u0002\u00028:\u0007\u000b\u0002\u000298\u0003",
    "\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:K\u0003\u0002\u0002\u0002",
    ";<\u0007\u0006\u0002\u0002<B\u0007#\u0002\u0002=>\u0007\u0003\u0002",
    "\u0002>?\u0007\u0007\u0002\u0002?@\u0005\b\u0005\u0002@A\u0007\b\u0002",
    "\u0002AC\u0003\u0002\u0002\u0002B=\u0003\u0002\u0002\u0002BC\u0003\u0002",
    "\u0002\u0002CD\u0003\u0002\u0002\u0002DE\u0007\t\u0002\u0002EF\u0007",
    "$\u0002\u0002FH\u0007\n\u0002\u0002GI\u0007\u000b\u0002\u0002HG\u0003",
    "\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IK\u0003\u0002\u0002\u0002",
    "J1\u0003\u0002\u0002\u0002J;\u0003\u0002\u0002\u0002K\u0007\u0003\u0002",
    "\u0002\u0002LP\u0007#\u0002\u0002MO\u0005\n\u0006\u0002NM\u0003\u0002",
    "\u0002\u0002OR\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002PQ\u0003",
    "\u0002\u0002\u0002Q\t\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002",
    "ST\u0007\u0003\u0002\u0002TX\u0007#\u0002\u0002UW\u0005\n\u0006\u0002",
    "VU\u0003\u0002\u0002\u0002WZ\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002",
    "\u0002XY\u0003\u0002\u0002\u0002Y\u000b\u0003\u0002\u0002\u0002ZX\u0003",
    "\u0002\u0002\u0002[\\\u0007\f\u0002\u0002\\]\u0007#\u0002\u0002]^\u0007",
    "\r\u0002\u0002^_\u0005\b\u0005\u0002_`\u0007\u000e\u0002\u0002`b\u0007",
    "\u0007\u0002\u0002ac\u0007\u000b\u0002\u0002ba\u0003\u0002\u0002\u0002",
    "bc\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002df\u0005\u000e\b",
    "\u0002eg\u0007\u000b\u0002\u0002fe\u0003\u0002\u0002\u0002fg\u0003\u0002",
    "\u0002\u0002gh\u0003\u0002\u0002\u0002hi\u0007\b\u0002\u0002ik\u0007",
    "\n\u0002\u0002jl\u0007\u000b\u0002\u0002kj\u0003\u0002\u0002\u0002k",
    "l\u0003\u0002\u0002\u0002l\r\u0003\u0002\u0002\u0002mn\u0007\u000f\u0002",
    "\u0002np\u0007\r\u0002\u0002oq\u0007\u000b\u0002\u0002po\u0003\u0002",
    "\u0002\u0002pq\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002rt\u0005",
    "\u0010\t\u0002su\u0007\u000b\u0002\u0002ts\u0003\u0002\u0002\u0002t",
    "u\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002vw\u0007\u000e\u0002",
    "\u0002wx\u0007\n\u0002\u0002x\u000f\u0003\u0002\u0002\u0002yz\u0007",
    "\u0010\u0002\u0002z|\u0007#\u0002\u0002{}\u0005\u0012\n\u0002|{\u0003",
    "\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002",
    "~\u0080\u0007\u0011\u0002\u0002\u007f\u0081\u0007\u000b\u0002\u0002",
    "\u0080\u007f\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002",
    "\u0081\u0083\u0003\u0002\u0002\u0002\u0082\u0084\u0005\u001a\u000e\u0002",
    "\u0083\u0082\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002",
    "\u0084\u0086\u0003\u0002\u0002\u0002\u0085\u0087\u0007\u000b\u0002\u0002",
    "\u0086\u0085\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002",
    "\u0087\u008b\u0003\u0002\u0002\u0002\u0088\u008a\u0005\u0010\t\u0002",
    "\u0089\u0088\u0003\u0002\u0002\u0002\u008a\u008d\u0003\u0002\u0002\u0002",
    "\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002",
    "\u008c\u008f\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002",
    "\u008e\u0090\u0007\u000b\u0002\u0002\u008f\u008e\u0003\u0002\u0002\u0002",
    "\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0092\u0003\u0002\u0002\u0002",
    "\u0091\u0093\u0005\u001a\u000e\u0002\u0092\u0091\u0003\u0002\u0002\u0002",
    "\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0095\u0003\u0002\u0002\u0002",
    "\u0094\u0096\u0007\u000b\u0002\u0002\u0095\u0094\u0003\u0002\u0002\u0002",
    "\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002",
    "\u0097\u0098\u0007\u0010\u0002\u0002\u0098\u0099\u0007\u0012\u0002\u0002",
    "\u0099\u009a\u0007#\u0002\u0002\u009a\u009b\u0007\u0011\u0002\u0002",
    "\u009b\u0011\u0003\u0002\u0002\u0002\u009c\u009e\u0007#\u0002\u0002",
    "\u009d\u009f\u0005\u0016\f\u0002\u009e\u009d\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u00a1\u0003\u0002\u0002\u0002",
    "\u00a0\u00a2\u0005\u0014\u000b\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002",
    "\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u0013\u0003\u0002\u0002\u0002",
    "\u00a3\u00a5\u0007#\u0002\u0002\u00a4\u00a6\u0005\u0016\f\u0002\u00a5",
    "\u00a4\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6",
    "\u0015\u0003\u0002\u0002\u0002\u00a7\u00ac\u0007\u0014\u0002\u0002\u00a8",
    "\u00a9\u0007\u0007\u0002\u0002\u00a9\u00aa\u0007#\u0002\u0002\u00aa",
    "\u00ad\u0007\b\u0002\u0002\u00ab\u00ad\u0005\u0018\r\u0002\u00ac\u00a8",
    "\u0003\u0002\u0002\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ad\u0017",
    "\u0003\u0002\u0002\u0002\u00ae\u00af\t\u0002\u0002\u0002\u00af\u0019",
    "\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007\u0007\u0002\u0002\u00b1\u00b2",
    "\u0005\u001e\u0010\u0002\u00b2\u00b3\u0007\b\u0002\u0002\u00b3\u00b6",
    "\u0003\u0002\u0002\u0002\u00b4\u00b6\u0007$\u0002\u0002\u00b5\u00b0",
    "\u0003\u0002\u0002\u0002\u00b5\u00b4\u0003\u0002\u0002\u0002\u00b6\u001b",
    "\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007#\u0002\u0002\u00b8\u00b9",
    "\u0007\u0018\u0002\u0002\u00b9\u00ba\u0007\u0019\u0002\u0002\u00ba\u00bb",
    "\u0007\u0014\u0002\u0002\u00bb\u00bd\u0007\u0007\u0002\u0002\u00bc\u00be",
    "\u0007\u000b\u0002\u0002\u00bd\u00bc\u0003\u0002\u0002\u0002\u00bd\u00be",
    "\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf\u00c0",
    "\u0005 \u0011\u0002\u00c0\u00c1\u0007\b\u0002\u0002\u00c1\u00c3\u0007",
    "\n\u0002\u0002\u00c2\u00c4\u0007\u000b\u0002\u0002\u00c3\u00c2\u0003",
    "\u0002\u0002\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u001d\u0003",
    "\u0002\u0002\u0002\u00c5\u00c6\u0007$\u0002\u0002\u00c6\u001f\u0003",
    "\u0002\u0002\u0002\u00c7\u00c8\u0007#\u0002\u0002\u00c8\u00c9\u0007",
    "\u001b\u0002\u0002\u00c9\u00ca\u0007\u001a\u0002\u0002\u00ca\u00cb\u0007",
    "\u0018\u0002\u0002\u00cb\u00d2\u0005\"\u0012\u0002\u00cc\u00d3\u0007",
    "\u000b\u0002\u0002\u00cd\u00cf\u0007\u0003\u0002\u0002\u00ce\u00d0\u0007",
    "\u000b\u0002\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003",
    "\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d3\u0005",
    " \u0011\u0002\u00d2\u00cc\u0003\u0002\u0002\u0002\u00d2\u00cd\u0003",
    "\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3!\u0003",
    "\u0002\u0002\u0002\u00d4\u00d5\t\u0003\u0002\u0002\u00d5#\u0003\u0002",
    "\u0002\u0002 \'/9BHJPXbfkpt|\u0080\u0083\u0086\u008b\u008f\u0092\u0095",
    "\u009e\u00a1\u00a5\u00ac\u00b5\u00bd\u00c3\u00cf\u00d2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "'''", "'\"'", "'import'", "'{'", "'}'", 
                     "'from'", "';'", "'\n'", "'function'", "'('", "')'", 
                     "'return'", "'<'", "'>'", "'/'", "'export'", "'='", 
                     "'null'", "'true'", "'false'", "'.'", "'propTypes'", 
                     "'PropTypes'", "':'", "'array'", "'bool'", "'func'", 
                     "'number'", "'object'", "'string'", "'symbol'" ];

var symbolicNames = [ null, "COMA", "COMILLA1", "COMILLA2", "IMPORT", "CORCHETE_IZQ", 
                      "CORCHETE_DER", "FROM", "PUNTO_COMA", "SALTO", "FUNCTION", 
                      "PAR_IZQ", "PAR_DER", "RETURN", "OPEN_TAG", "CLOSE_TAG", 
                      "SLASH", "EXPORT", "IGUAL", "NULL", "TRUE", "FALSE", 
                      "PUNTO", "PROPTYPES", "PROPTYPESCLASS", "DOS_PUNTOS", 
                      "ARRAY", "BOOL", "FUNC", "NUMBER", "OBJECT", "STRING_TYPE", 
                      "SYMBOL", "ID", "STRING", "INTEGER" ];

var ruleNames =  [ "program", "program_body", "import_statement", "id_list", 
                   "more_id", "functionR", "func_body", "html_elements", 
                   "props", "more_props", "possible_assign", "literal", 
                   "value_html_tag", "adding_proptypes", "expr", "prop_types_body", 
                   "types_of_proptypes" ];

function ReactParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ReactParser.prototype = Object.create(antlr4.Parser.prototype);
ReactParser.prototype.constructor = ReactParser;

Object.defineProperty(ReactParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ReactParser.EOF = antlr4.Token.EOF;
ReactParser.COMA = 1;
ReactParser.COMILLA1 = 2;
ReactParser.COMILLA2 = 3;
ReactParser.IMPORT = 4;
ReactParser.CORCHETE_IZQ = 5;
ReactParser.CORCHETE_DER = 6;
ReactParser.FROM = 7;
ReactParser.PUNTO_COMA = 8;
ReactParser.SALTO = 9;
ReactParser.FUNCTION = 10;
ReactParser.PAR_IZQ = 11;
ReactParser.PAR_DER = 12;
ReactParser.RETURN = 13;
ReactParser.OPEN_TAG = 14;
ReactParser.CLOSE_TAG = 15;
ReactParser.SLASH = 16;
ReactParser.EXPORT = 17;
ReactParser.IGUAL = 18;
ReactParser.NULL = 19;
ReactParser.TRUE = 20;
ReactParser.FALSE = 21;
ReactParser.PUNTO = 22;
ReactParser.PROPTYPES = 23;
ReactParser.PROPTYPESCLASS = 24;
ReactParser.DOS_PUNTOS = 25;
ReactParser.ARRAY = 26;
ReactParser.BOOL = 27;
ReactParser.FUNC = 28;
ReactParser.NUMBER = 29;
ReactParser.OBJECT = 30;
ReactParser.STRING_TYPE = 31;
ReactParser.SYMBOL = 32;
ReactParser.ID = 33;
ReactParser.STRING = 34;
ReactParser.INTEGER = 35;

ReactParser.RULE_program = 0;
ReactParser.RULE_program_body = 1;
ReactParser.RULE_import_statement = 2;
ReactParser.RULE_id_list = 3;
ReactParser.RULE_more_id = 4;
ReactParser.RULE_functionR = 5;
ReactParser.RULE_func_body = 6;
ReactParser.RULE_html_elements = 7;
ReactParser.RULE_props = 8;
ReactParser.RULE_more_props = 9;
ReactParser.RULE_possible_assign = 10;
ReactParser.RULE_literal = 11;
ReactParser.RULE_value_html_tag = 12;
ReactParser.RULE_adding_proptypes = 13;
ReactParser.RULE_expr = 14;
ReactParser.RULE_prop_types_body = 15;
ReactParser.RULE_types_of_proptypes = 16;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(ReactParser.EOF, 0);
};

ProgramContext.prototype.program_body = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Program_bodyContext);
    } else {
        return this.getTypedRuleContext(Program_bodyContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitProgram(this);
	}
};




ReactParser.ProgramContext = ProgramContext;

ReactParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ReactParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (ReactParser.IMPORT - 4)) | (1 << (ReactParser.FUNCTION - 4)) | (1 << (ReactParser.ID - 4)))) !== 0)) {
            this.state = 34;
            this.program_body();
            this.state = 39;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 40;
        this.match(ReactParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Program_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_program_body;
    return this;
}

Program_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Program_bodyContext.prototype.constructor = Program_bodyContext;

Program_bodyContext.prototype.import_statement = function() {
    return this.getTypedRuleContext(Import_statementContext,0);
};

Program_bodyContext.prototype.functionR = function() {
    return this.getTypedRuleContext(FunctionRContext,0);
};

Program_bodyContext.prototype.adding_proptypes = function() {
    return this.getTypedRuleContext(Adding_proptypesContext,0);
};

Program_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterProgram_body(this);
	}
};

Program_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitProgram_body(this);
	}
};




ReactParser.Program_bodyContext = Program_bodyContext;

ReactParser.prototype.program_body = function() {

    var localctx = new Program_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ReactParser.RULE_program_body);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactParser.IMPORT:
            this.state = 42;
            this.import_statement();
            break;
        case ReactParser.FUNCTION:
            this.state = 43;
            this.functionR();
            break;
        case ReactParser.ID:
            this.state = 44;
            this.adding_proptypes();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Import_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_import_statement;
    return this;
}

Import_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Import_statementContext.prototype.constructor = Import_statementContext;


 
Import_statementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Id_importContext(parser, ctx) {
	Import_statementContext.call(this, parser);
    Import_statementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Id_importContext.prototype = Object.create(Import_statementContext.prototype);
Id_importContext.prototype.constructor = Id_importContext;

ReactParser.Id_importContext = Id_importContext;

Id_importContext.prototype.IMPORT = function() {
    return this.getToken(ReactParser.IMPORT, 0);
};

Id_importContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

Id_importContext.prototype.FROM = function() {
    return this.getToken(ReactParser.FROM, 0);
};

Id_importContext.prototype.STRING = function() {
    return this.getToken(ReactParser.STRING, 0);
};

Id_importContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

Id_importContext.prototype.COMA = function() {
    return this.getToken(ReactParser.COMA, 0);
};

Id_importContext.prototype.CORCHETE_IZQ = function() {
    return this.getToken(ReactParser.CORCHETE_IZQ, 0);
};

Id_importContext.prototype.id_list = function() {
    return this.getTypedRuleContext(Id_listContext,0);
};

Id_importContext.prototype.CORCHETE_DER = function() {
    return this.getToken(ReactParser.CORCHETE_DER, 0);
};

Id_importContext.prototype.SALTO = function() {
    return this.getToken(ReactParser.SALTO, 0);
};
Id_importContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterId_import(this);
	}
};

Id_importContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitId_import(this);
	}
};


function No_id_importContext(parser, ctx) {
	Import_statementContext.call(this, parser);
    Import_statementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

No_id_importContext.prototype = Object.create(Import_statementContext.prototype);
No_id_importContext.prototype.constructor = No_id_importContext;

ReactParser.No_id_importContext = No_id_importContext;

No_id_importContext.prototype.IMPORT = function() {
    return this.getToken(ReactParser.IMPORT, 0);
};

No_id_importContext.prototype.CORCHETE_IZQ = function() {
    return this.getToken(ReactParser.CORCHETE_IZQ, 0);
};

No_id_importContext.prototype.id_list = function() {
    return this.getTypedRuleContext(Id_listContext,0);
};

No_id_importContext.prototype.CORCHETE_DER = function() {
    return this.getToken(ReactParser.CORCHETE_DER, 0);
};

No_id_importContext.prototype.FROM = function() {
    return this.getToken(ReactParser.FROM, 0);
};

No_id_importContext.prototype.STRING = function() {
    return this.getToken(ReactParser.STRING, 0);
};

No_id_importContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

No_id_importContext.prototype.SALTO = function() {
    return this.getToken(ReactParser.SALTO, 0);
};
No_id_importContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterNo_id_import(this);
	}
};

No_id_importContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitNo_id_import(this);
	}
};



ReactParser.Import_statementContext = Import_statementContext;

ReactParser.prototype.import_statement = function() {

    var localctx = new Import_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ReactParser.RULE_import_statement);
    var _la = 0; // Token type
    try {
        this.state = 72;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            localctx = new No_id_importContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 47;
            this.match(ReactParser.IMPORT);
            this.state = 48;
            this.match(ReactParser.CORCHETE_IZQ);
            this.state = 49;
            this.id_list();
            this.state = 50;
            this.match(ReactParser.CORCHETE_DER);
            this.state = 51;
            this.match(ReactParser.FROM);
            this.state = 52;
            this.match(ReactParser.STRING);
            this.state = 53;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 55;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.SALTO) {
                this.state = 54;
                this.match(ReactParser.SALTO);
            }

            break;

        case 2:
            localctx = new Id_importContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 57;
            this.match(ReactParser.IMPORT);
            this.state = 58;
            this.match(ReactParser.ID);
            this.state = 64;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.COMA) {
                this.state = 59;
                this.match(ReactParser.COMA);
                this.state = 60;
                this.match(ReactParser.CORCHETE_IZQ);
                this.state = 61;
                this.id_list();
                this.state = 62;
                this.match(ReactParser.CORCHETE_DER);
            }

            this.state = 66;
            this.match(ReactParser.FROM);
            this.state = 67;
            this.match(ReactParser.STRING);
            this.state = 68;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 70;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.SALTO) {
                this.state = 69;
                this.match(ReactParser.SALTO);
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Id_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_id_list;
    return this;
}

Id_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Id_listContext.prototype.constructor = Id_listContext;

Id_listContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

Id_listContext.prototype.more_id = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(More_idContext);
    } else {
        return this.getTypedRuleContext(More_idContext,i);
    }
};

Id_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterId_list(this);
	}
};

Id_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitId_list(this);
	}
};




ReactParser.Id_listContext = Id_listContext;

ReactParser.prototype.id_list = function() {

    var localctx = new Id_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ReactParser.RULE_id_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(ReactParser.ID);
        this.state = 78;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ReactParser.COMA) {
            this.state = 75;
            this.more_id();
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function More_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_more_id;
    return this;
}

More_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
More_idContext.prototype.constructor = More_idContext;

More_idContext.prototype.COMA = function() {
    return this.getToken(ReactParser.COMA, 0);
};

More_idContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

More_idContext.prototype.more_id = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(More_idContext);
    } else {
        return this.getTypedRuleContext(More_idContext,i);
    }
};

More_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterMore_id(this);
	}
};

More_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitMore_id(this);
	}
};




ReactParser.More_idContext = More_idContext;

ReactParser.prototype.more_id = function() {

    var localctx = new More_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ReactParser.RULE_more_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(ReactParser.COMA);
        this.state = 82;
        this.match(ReactParser.ID);
        this.state = 86;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 83;
                this.more_id(); 
            }
            this.state = 88;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctionRContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_functionR;
    return this;
}

FunctionRContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionRContext.prototype.constructor = FunctionRContext;

FunctionRContext.prototype.FUNCTION = function() {
    return this.getToken(ReactParser.FUNCTION, 0);
};

FunctionRContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

FunctionRContext.prototype.PAR_IZQ = function() {
    return this.getToken(ReactParser.PAR_IZQ, 0);
};

FunctionRContext.prototype.id_list = function() {
    return this.getTypedRuleContext(Id_listContext,0);
};

FunctionRContext.prototype.PAR_DER = function() {
    return this.getToken(ReactParser.PAR_DER, 0);
};

FunctionRContext.prototype.CORCHETE_IZQ = function() {
    return this.getToken(ReactParser.CORCHETE_IZQ, 0);
};

FunctionRContext.prototype.func_body = function() {
    return this.getTypedRuleContext(Func_bodyContext,0);
};

FunctionRContext.prototype.CORCHETE_DER = function() {
    return this.getToken(ReactParser.CORCHETE_DER, 0);
};

FunctionRContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

FunctionRContext.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.SALTO);
    } else {
        return this.getToken(ReactParser.SALTO, i);
    }
};


FunctionRContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterFunctionR(this);
	}
};

FunctionRContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitFunctionR(this);
	}
};




ReactParser.FunctionRContext = FunctionRContext;

ReactParser.prototype.functionR = function() {

    var localctx = new FunctionRContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ReactParser.RULE_functionR);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this.match(ReactParser.FUNCTION);
        this.state = 90;
        this.match(ReactParser.ID);
        this.state = 91;
        this.match(ReactParser.PAR_IZQ);
        this.state = 92;
        this.id_list();
        this.state = 93;
        this.match(ReactParser.PAR_DER);
        this.state = 94;
        this.match(ReactParser.CORCHETE_IZQ);
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 95;
            this.match(ReactParser.SALTO);
        }

        this.state = 98;
        this.func_body();
        this.state = 100;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 99;
            this.match(ReactParser.SALTO);
        }

        this.state = 102;
        this.match(ReactParser.CORCHETE_DER);
        this.state = 103;
        this.match(ReactParser.PUNTO_COMA);
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 104;
            this.match(ReactParser.SALTO);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Func_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_func_body;
    return this;
}

Func_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_bodyContext.prototype.constructor = Func_bodyContext;

Func_bodyContext.prototype.RETURN = function() {
    return this.getToken(ReactParser.RETURN, 0);
};

Func_bodyContext.prototype.PAR_IZQ = function() {
    return this.getToken(ReactParser.PAR_IZQ, 0);
};

Func_bodyContext.prototype.html_elements = function() {
    return this.getTypedRuleContext(Html_elementsContext,0);
};

Func_bodyContext.prototype.PAR_DER = function() {
    return this.getToken(ReactParser.PAR_DER, 0);
};

Func_bodyContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

Func_bodyContext.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.SALTO);
    } else {
        return this.getToken(ReactParser.SALTO, i);
    }
};


Func_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterFunc_body(this);
	}
};

Func_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitFunc_body(this);
	}
};




ReactParser.Func_bodyContext = Func_bodyContext;

ReactParser.prototype.func_body = function() {

    var localctx = new Func_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ReactParser.RULE_func_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.match(ReactParser.RETURN);
        this.state = 108;
        this.match(ReactParser.PAR_IZQ);
        this.state = 110;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 109;
            this.match(ReactParser.SALTO);
        }

        this.state = 112;
        this.html_elements();
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 113;
            this.match(ReactParser.SALTO);
        }

        this.state = 116;
        this.match(ReactParser.PAR_DER);
        this.state = 117;
        this.match(ReactParser.PUNTO_COMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Html_elementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_html_elements;
    return this;
}

Html_elementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Html_elementsContext.prototype.constructor = Html_elementsContext;

Html_elementsContext.prototype.OPEN_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.OPEN_TAG);
    } else {
        return this.getToken(ReactParser.OPEN_TAG, i);
    }
};


Html_elementsContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.ID);
    } else {
        return this.getToken(ReactParser.ID, i);
    }
};


Html_elementsContext.prototype.CLOSE_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.CLOSE_TAG);
    } else {
        return this.getToken(ReactParser.CLOSE_TAG, i);
    }
};


Html_elementsContext.prototype.SLASH = function() {
    return this.getToken(ReactParser.SLASH, 0);
};

Html_elementsContext.prototype.props = function() {
    return this.getTypedRuleContext(PropsContext,0);
};

Html_elementsContext.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.SALTO);
    } else {
        return this.getToken(ReactParser.SALTO, i);
    }
};


Html_elementsContext.prototype.value_html_tag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Value_html_tagContext);
    } else {
        return this.getTypedRuleContext(Value_html_tagContext,i);
    }
};

Html_elementsContext.prototype.html_elements = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Html_elementsContext);
    } else {
        return this.getTypedRuleContext(Html_elementsContext,i);
    }
};

Html_elementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterHtml_elements(this);
	}
};

Html_elementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitHtml_elements(this);
	}
};




ReactParser.Html_elementsContext = Html_elementsContext;

ReactParser.prototype.html_elements = function() {

    var localctx = new Html_elementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ReactParser.RULE_html_elements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(ReactParser.OPEN_TAG);
        this.state = 120;
        this.match(ReactParser.ID);
        this.state = 122;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.ID) {
            this.state = 121;
            this.props();
        }

        this.state = 124;
        this.match(ReactParser.CLOSE_TAG);
        this.state = 126;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        if(la_===1) {
            this.state = 125;
            this.match(ReactParser.SALTO);

        }
        this.state = 129;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 128;
            this.value_html_tag();

        }
        this.state = 132;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 131;
            this.match(ReactParser.SALTO);

        }
        this.state = 137;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 134;
                this.html_elements(); 
            }
            this.state = 139;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

        this.state = 141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        if(la_===1) {
            this.state = 140;
            this.match(ReactParser.SALTO);

        }
        this.state = 144;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.CORCHETE_IZQ || _la===ReactParser.STRING) {
            this.state = 143;
            this.value_html_tag();
        }

        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 146;
            this.match(ReactParser.SALTO);
        }

        this.state = 149;
        this.match(ReactParser.OPEN_TAG);
        this.state = 150;
        this.match(ReactParser.SLASH);
        this.state = 151;
        this.match(ReactParser.ID);
        this.state = 152;
        this.match(ReactParser.CLOSE_TAG);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PropsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_props;
    return this;
}

PropsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropsContext.prototype.constructor = PropsContext;

PropsContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

PropsContext.prototype.possible_assign = function() {
    return this.getTypedRuleContext(Possible_assignContext,0);
};

PropsContext.prototype.more_props = function() {
    return this.getTypedRuleContext(More_propsContext,0);
};

PropsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterProps(this);
	}
};

PropsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitProps(this);
	}
};




ReactParser.PropsContext = PropsContext;

ReactParser.prototype.props = function() {

    var localctx = new PropsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ReactParser.RULE_props);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(ReactParser.ID);
        this.state = 156;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.IGUAL) {
            this.state = 155;
            this.possible_assign();
        }

        this.state = 159;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.ID) {
            this.state = 158;
            this.more_props();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function More_propsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_more_props;
    return this;
}

More_propsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
More_propsContext.prototype.constructor = More_propsContext;

More_propsContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

More_propsContext.prototype.possible_assign = function() {
    return this.getTypedRuleContext(Possible_assignContext,0);
};

More_propsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterMore_props(this);
	}
};

More_propsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitMore_props(this);
	}
};




ReactParser.More_propsContext = More_propsContext;

ReactParser.prototype.more_props = function() {

    var localctx = new More_propsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ReactParser.RULE_more_props);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(ReactParser.ID);
        this.state = 163;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.IGUAL) {
            this.state = 162;
            this.possible_assign();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Possible_assignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_possible_assign;
    return this;
}

Possible_assignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Possible_assignContext.prototype.constructor = Possible_assignContext;

Possible_assignContext.prototype.IGUAL = function() {
    return this.getToken(ReactParser.IGUAL, 0);
};

Possible_assignContext.prototype.CORCHETE_IZQ = function() {
    return this.getToken(ReactParser.CORCHETE_IZQ, 0);
};

Possible_assignContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

Possible_assignContext.prototype.CORCHETE_DER = function() {
    return this.getToken(ReactParser.CORCHETE_DER, 0);
};

Possible_assignContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

Possible_assignContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterPossible_assign(this);
	}
};

Possible_assignContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitPossible_assign(this);
	}
};




ReactParser.Possible_assignContext = Possible_assignContext;

ReactParser.prototype.possible_assign = function() {

    var localctx = new Possible_assignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ReactParser.RULE_possible_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.match(ReactParser.IGUAL);
        this.state = 170;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactParser.CORCHETE_IZQ:
            this.state = 166;
            this.match(ReactParser.CORCHETE_IZQ);
            this.state = 167;
            this.match(ReactParser.ID);
            this.state = 168;
            this.match(ReactParser.CORCHETE_DER);
            break;
        case ReactParser.NULL:
        case ReactParser.TRUE:
        case ReactParser.FALSE:
        case ReactParser.STRING:
        case ReactParser.INTEGER:
            this.state = 169;
            this.literal();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.STRING = function() {
    return this.getToken(ReactParser.STRING, 0);
};

LiteralContext.prototype.NULL = function() {
    return this.getToken(ReactParser.NULL, 0);
};

LiteralContext.prototype.TRUE = function() {
    return this.getToken(ReactParser.TRUE, 0);
};

LiteralContext.prototype.FALSE = function() {
    return this.getToken(ReactParser.FALSE, 0);
};

LiteralContext.prototype.INTEGER = function() {
    return this.getToken(ReactParser.INTEGER, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitLiteral(this);
	}
};




ReactParser.LiteralContext = LiteralContext;

ReactParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ReactParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        _la = this._input.LA(1);
        if(!(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (ReactParser.NULL - 19)) | (1 << (ReactParser.TRUE - 19)) | (1 << (ReactParser.FALSE - 19)) | (1 << (ReactParser.STRING - 19)) | (1 << (ReactParser.INTEGER - 19)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Value_html_tagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_value_html_tag;
    return this;
}

Value_html_tagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Value_html_tagContext.prototype.constructor = Value_html_tagContext;

Value_html_tagContext.prototype.CORCHETE_IZQ = function() {
    return this.getToken(ReactParser.CORCHETE_IZQ, 0);
};

Value_html_tagContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Value_html_tagContext.prototype.CORCHETE_DER = function() {
    return this.getToken(ReactParser.CORCHETE_DER, 0);
};

Value_html_tagContext.prototype.STRING = function() {
    return this.getToken(ReactParser.STRING, 0);
};

Value_html_tagContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterValue_html_tag(this);
	}
};

Value_html_tagContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitValue_html_tag(this);
	}
};




ReactParser.Value_html_tagContext = Value_html_tagContext;

ReactParser.prototype.value_html_tag = function() {

    var localctx = new Value_html_tagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ReactParser.RULE_value_html_tag);
    try {
        this.state = 179;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactParser.CORCHETE_IZQ:
            this.enterOuterAlt(localctx, 1);
            this.state = 174;
            this.match(ReactParser.CORCHETE_IZQ);
            this.state = 175;
            this.expr();
            this.state = 176;
            this.match(ReactParser.CORCHETE_DER);
            break;
        case ReactParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 178;
            this.match(ReactParser.STRING);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Adding_proptypesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_adding_proptypes;
    return this;
}

Adding_proptypesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Adding_proptypesContext.prototype.constructor = Adding_proptypesContext;

Adding_proptypesContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

Adding_proptypesContext.prototype.PUNTO = function() {
    return this.getToken(ReactParser.PUNTO, 0);
};

Adding_proptypesContext.prototype.PROPTYPES = function() {
    return this.getToken(ReactParser.PROPTYPES, 0);
};

Adding_proptypesContext.prototype.IGUAL = function() {
    return this.getToken(ReactParser.IGUAL, 0);
};

Adding_proptypesContext.prototype.CORCHETE_IZQ = function() {
    return this.getToken(ReactParser.CORCHETE_IZQ, 0);
};

Adding_proptypesContext.prototype.prop_types_body = function() {
    return this.getTypedRuleContext(Prop_types_bodyContext,0);
};

Adding_proptypesContext.prototype.CORCHETE_DER = function() {
    return this.getToken(ReactParser.CORCHETE_DER, 0);
};

Adding_proptypesContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

Adding_proptypesContext.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.SALTO);
    } else {
        return this.getToken(ReactParser.SALTO, i);
    }
};


Adding_proptypesContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterAdding_proptypes(this);
	}
};

Adding_proptypesContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitAdding_proptypes(this);
	}
};




ReactParser.Adding_proptypesContext = Adding_proptypesContext;

ReactParser.prototype.adding_proptypes = function() {

    var localctx = new Adding_proptypesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ReactParser.RULE_adding_proptypes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(ReactParser.ID);
        this.state = 182;
        this.match(ReactParser.PUNTO);
        this.state = 183;
        this.match(ReactParser.PROPTYPES);
        this.state = 184;
        this.match(ReactParser.IGUAL);
        this.state = 185;
        this.match(ReactParser.CORCHETE_IZQ);
        this.state = 187;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 186;
            this.match(ReactParser.SALTO);
        }

        this.state = 189;
        this.prop_types_body();
        this.state = 190;
        this.match(ReactParser.CORCHETE_DER);
        this.state = 191;
        this.match(ReactParser.PUNTO_COMA);
        this.state = 193;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 192;
            this.match(ReactParser.SALTO);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.STRING = function() {
    return this.getToken(ReactParser.STRING, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitExpr(this);
	}
};




ReactParser.ExprContext = ExprContext;

ReactParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ReactParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(ReactParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Prop_types_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_prop_types_body;
    return this;
}

Prop_types_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Prop_types_bodyContext.prototype.constructor = Prop_types_bodyContext;

Prop_types_bodyContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

Prop_types_bodyContext.prototype.DOS_PUNTOS = function() {
    return this.getToken(ReactParser.DOS_PUNTOS, 0);
};

Prop_types_bodyContext.prototype.PROPTYPESCLASS = function() {
    return this.getToken(ReactParser.PROPTYPESCLASS, 0);
};

Prop_types_bodyContext.prototype.PUNTO = function() {
    return this.getToken(ReactParser.PUNTO, 0);
};

Prop_types_bodyContext.prototype.types_of_proptypes = function() {
    return this.getTypedRuleContext(Types_of_proptypesContext,0);
};

Prop_types_bodyContext.prototype.SALTO = function() {
    return this.getToken(ReactParser.SALTO, 0);
};

Prop_types_bodyContext.prototype.COMA = function() {
    return this.getToken(ReactParser.COMA, 0);
};

Prop_types_bodyContext.prototype.prop_types_body = function() {
    return this.getTypedRuleContext(Prop_types_bodyContext,0);
};

Prop_types_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterProp_types_body(this);
	}
};

Prop_types_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitProp_types_body(this);
	}
};




ReactParser.Prop_types_bodyContext = Prop_types_bodyContext;

ReactParser.prototype.prop_types_body = function() {

    var localctx = new Prop_types_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ReactParser.RULE_prop_types_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(ReactParser.ID);
        this.state = 198;
        this.match(ReactParser.DOS_PUNTOS);
        this.state = 199;
        this.match(ReactParser.PROPTYPESCLASS);
        this.state = 200;
        this.match(ReactParser.PUNTO);
        this.state = 201;
        this.types_of_proptypes();
        this.state = 208;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case ReactParser.SALTO:
        	this.state = 202;
        	this.match(ReactParser.SALTO);
        	break;
        case ReactParser.COMA:
        	this.state = 203;
        	this.match(ReactParser.COMA);
        	this.state = 205;
        	this._errHandler.sync(this);
        	_la = this._input.LA(1);
        	if(_la===ReactParser.SALTO) {
        	    this.state = 204;
        	    this.match(ReactParser.SALTO);
        	}

        	this.state = 207;
        	this.prop_types_body();
        	break;
        case ReactParser.CORCHETE_DER:
        	break;
        default:
        	break;
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Types_of_proptypesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_types_of_proptypes;
    return this;
}

Types_of_proptypesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Types_of_proptypesContext.prototype.constructor = Types_of_proptypesContext;

Types_of_proptypesContext.prototype.ARRAY = function() {
    return this.getToken(ReactParser.ARRAY, 0);
};

Types_of_proptypesContext.prototype.BOOL = function() {
    return this.getToken(ReactParser.BOOL, 0);
};

Types_of_proptypesContext.prototype.FUNC = function() {
    return this.getToken(ReactParser.FUNC, 0);
};

Types_of_proptypesContext.prototype.NUMBER = function() {
    return this.getToken(ReactParser.NUMBER, 0);
};

Types_of_proptypesContext.prototype.OBJECT = function() {
    return this.getToken(ReactParser.OBJECT, 0);
};

Types_of_proptypesContext.prototype.STRING_TYPE = function() {
    return this.getToken(ReactParser.STRING_TYPE, 0);
};

Types_of_proptypesContext.prototype.SYMBOL = function() {
    return this.getToken(ReactParser.SYMBOL, 0);
};

Types_of_proptypesContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterTypes_of_proptypes(this);
	}
};

Types_of_proptypesContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitTypes_of_proptypes(this);
	}
};




ReactParser.Types_of_proptypesContext = Types_of_proptypesContext;

ReactParser.prototype.types_of_proptypes = function() {

    var localctx = new Types_of_proptypesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ReactParser.RULE_types_of_proptypes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        _la = this._input.LA(1);
        if(!(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (ReactParser.ARRAY - 26)) | (1 << (ReactParser.BOOL - 26)) | (1 << (ReactParser.FUNC - 26)) | (1 << (ReactParser.NUMBER - 26)) | (1 << (ReactParser.OBJECT - 26)) | (1 << (ReactParser.STRING_TYPE - 26)) | (1 << (ReactParser.SYMBOL - 26)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ReactParser = ReactParser;
