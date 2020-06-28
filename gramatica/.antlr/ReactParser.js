// Generated from React.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ReactListener = require('./ReactListener').ReactListener;
var grammarFileName = "React.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00038\u01c4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0003\u0002\u0007\u00028\n\u0002\f\u0002\u000e\u0002;\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "B\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004L\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004U\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004[\n\u0004\u0005\u0004]\n\u0004\u0003\u0005\u0003\u0005\u0007",
    "\u0005a\n\u0005\f\u0005\u000e\u0005d\u000b\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0007\u0006i\n\u0006\f\u0006\u000e\u0006l\u000b\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007u\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007y\n\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007~\n\u0007\u0003\b\u0003",
    "\b\u0003\b\u0005\b\u0083\n\b\u0003\b\u0003\b\u0005\b\u0087\n\b\u0003",
    "\b\u0005\b\u008a\n\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t",
    "\u0005\t\u0092\n\t\u0003\t\u0003\t\u0005\t\u0096\n\t\u0003\t\u0005\t",
    "\u0099\n\t\u0003\t\u0005\t\u009c\n\t\u0003\t\u0003\t\u0007\t\u00a0\n",
    "\t\f\t\u000e\t\u00a3\u000b\t\u0003\t\u0005\t\u00a6\n\t\u0003\t\u0005",
    "\t\u00a9\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00b0\n",
    "\t\u0003\n\u0003\n\u0003\n\u0005\n\u00b5\n\n\u0003\n\u0003\n\u0003\n",
    "\u0005\n\u00ba\n\n\u0003\u000b\u0003\u000b\u0005\u000b\u00be\n\u000b",
    "\u0003\u000b\u0007\u000b\u00c1\n\u000b\f\u000b\u000e\u000b\u00c4\u000b",
    "\u000b\u0003\f\u0003\f\u0005\f\u00c8\n\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\r\u00cf\n\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00d8\n\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010\u00e0\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00e6\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u00f0\n\u0011\u0003\u0011\u0005\u0011\u00f3\n\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0005\u0013\u00fd\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u0103\n\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u010c",
    "\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u0111\n\u0014",
    "\f\u0014\u000e\u0014\u0114\u000b\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u0119\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0005\u0014\u011e\n\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0122",
    "\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014",
    "\u0128\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005",
    "\u0014\u012e\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0005\u0014\u0140\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u0146\n\u0014\u0003\u0014\u0003\u0014\u0005\u0014",
    "\u014a\n\u0014\u0005\u0014\u014c\n\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0005\u0015\u0151\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0005\u0015\u0156\n\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u015a",
    "\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0006\u0015\u015f\n\u0015",
    "\r\u0015\u000e\u0015\u0160\u0003\u0015\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u0166\n\u0015\u0005\u0015\u0168\n\u0015\u0003\u0016\u0006\u0016",
    "\u016b\n\u0016\r\u0016\u000e\u0016\u016c\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0005\u0017\u0173\n\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0005\u0017\u017f\n\u0017\u0007\u0017\u0181",
    "\n\u0017\f\u0017\u000e\u0017\u0184\u000b\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0005\u0018\u0190\n\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0005\u0018\u0195\n\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018",
    "\u01a4\n\u0018\u0003\u0018\u0007\u0018\u01a7\n\u0018\f\u0018\u000e\u0018",
    "\u01aa\u000b\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u01ae\n\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u01b3\n\u001a\f\u001a",
    "\u000e\u001a\u01b6\u000b\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0005\u001b\u01c2\n\u001b\u0003\u001b\u0002\u0004,.\u001c\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,.024\u0002\b\u0004\u0002\u0015\u001778\u0003\u0002\u001c\"\u0003",
    "\u0002%&\u0004\u0002\u0010\u0011\'(\u0003\u0002)*\u0003\u0002-.\u0002",
    "\u01f6\u00029\u0003\u0002\u0002\u0002\u0004A\u0003\u0002\u0002\u0002",
    "\u0006\\\u0003\u0002\u0002\u0002\b^\u0003\u0002\u0002\u0002\ne\u0003",
    "\u0002\u0002\u0002\fm\u0003\u0002\u0002\u0002\u000e\u007f\u0003\u0002",
    "\u0002\u0002\u0010\u008e\u0003\u0002\u0002\u0002\u0012\u00b1\u0003\u0002",
    "\u0002\u0002\u0014\u00bb\u0003\u0002\u0002\u0002\u0016\u00c5\u0003\u0002",
    "\u0002\u0002\u0018\u00c9\u0003\u0002\u0002\u0002\u001a\u00d0\u0003\u0002",
    "\u0002\u0002\u001c\u00d7\u0003\u0002\u0002\u0002\u001e\u00d9\u0003\u0002",
    "\u0002\u0002 \u00e7\u0003\u0002\u0002\u0002\"\u00f4\u0003\u0002\u0002",
    "\u0002$\u00f6\u0003\u0002\u0002\u0002&\u014b\u0003\u0002\u0002\u0002",
    "(\u0167\u0003\u0002\u0002\u0002*\u016a\u0003\u0002\u0002\u0002,\u0172",
    "\u0003\u0002\u0002\u0002.\u0194\u0003\u0002\u0002\u00020\u01ab\u0003",
    "\u0002\u0002\u00022\u01af\u0003\u0002\u0002\u00024\u01c1\u0003\u0002",
    "\u0002\u000268\u0005\u0004\u0003\u000276\u0003\u0002\u0002\u00028;\u0003",
    "\u0002\u0002\u000297\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002",
    ":<\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002<=\u0007\u0002\u0002",
    "\u0003=\u0003\u0003\u0002\u0002\u0002>B\u0005\u0006\u0004\u0002?B\u0005",
    "\f\u0007\u0002@B\u0005\u001e\u0010\u0002A>\u0003\u0002\u0002\u0002A",
    "?\u0003\u0002\u0002\u0002A@\u0003\u0002\u0002\u0002B\u0005\u0003\u0002",
    "\u0002\u0002CD\u0007\u0006\u0002\u0002DE\u0007\u0007\u0002\u0002EF\u0005",
    "\b\u0005\u0002FG\u0007\b\u0002\u0002GH\u0007\t\u0002\u0002HI\u00077",
    "\u0002\u0002IK\u0007\n\u0002\u0002JL\u0007\u000b\u0002\u0002KJ\u0003",
    "\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002L]\u0003\u0002\u0002\u0002",
    "MN\u0007\u0006\u0002\u0002NT\u00076\u0002\u0002OP\u0007\u0003\u0002",
    "\u0002PQ\u0007\u0007\u0002\u0002QR\u0005\b\u0005\u0002RS\u0007\b\u0002",
    "\u0002SU\u0003\u0002\u0002\u0002TO\u0003\u0002\u0002\u0002TU\u0003\u0002",
    "\u0002\u0002UV\u0003\u0002\u0002\u0002VW\u0007\t\u0002\u0002WX\u0007",
    "7\u0002\u0002XZ\u0007\n\u0002\u0002Y[\u0007\u000b\u0002\u0002ZY\u0003",
    "\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[]\u0003\u0002\u0002\u0002",
    "\\C\u0003\u0002\u0002\u0002\\M\u0003\u0002\u0002\u0002]\u0007\u0003",
    "\u0002\u0002\u0002^b\u00076\u0002\u0002_a\u0005\n\u0006\u0002`_\u0003",
    "\u0002\u0002\u0002ad\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002",
    "bc\u0003\u0002\u0002\u0002c\t\u0003\u0002\u0002\u0002db\u0003\u0002",
    "\u0002\u0002ef\u0007\u0003\u0002\u0002fj\u00076\u0002\u0002gi\u0005",
    "\n\u0006\u0002hg\u0003\u0002\u0002\u0002il\u0003\u0002\u0002\u0002j",
    "h\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002k\u000b\u0003\u0002",
    "\u0002\u0002lj\u0003\u0002\u0002\u0002mn\u0007\f\u0002\u0002no\u0007",
    "6\u0002\u0002op\u0007\r\u0002\u0002pq\u0005\b\u0005\u0002qr\u0007\u000e",
    "\u0002\u0002rt\u0007\u0007\u0002\u0002su\u0007\u000b\u0002\u0002ts\u0003",
    "\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002",
    "vx\u0005\u000e\b\u0002wy\u0007\u000b\u0002\u0002xw\u0003\u0002\u0002",
    "\u0002xy\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002z{\u0007\b",
    "\u0002\u0002{}\u0007\n\u0002\u0002|~\u0007\u000b\u0002\u0002}|\u0003",
    "\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\r\u0003\u0002\u0002\u0002",
    "\u007f\u0080\u0007\u000f\u0002\u0002\u0080\u0082\u0007\r\u0002\u0002",
    "\u0081\u0083\u0007\u000b\u0002\u0002\u0082\u0081\u0003\u0002\u0002\u0002",
    "\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0086\u0003\u0002\u0002\u0002",
    "\u0084\u0087\u0005\u0010\t\u0002\u0085\u0087\u0005\u0012\n\u0002\u0086",
    "\u0084\u0003\u0002\u0002\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0087",
    "\u0089\u0003\u0002\u0002\u0002\u0088\u008a\u0007\u000b\u0002\u0002\u0089",
    "\u0088\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a",
    "\u008b\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u000e\u0002\u0002\u008c",
    "\u008d\u0007\n\u0002\u0002\u008d\u000f\u0003\u0002\u0002\u0002\u008e",
    "\u008f\u0007\u0010\u0002\u0002\u008f\u0091\u00076\u0002\u0002\u0090",
    "\u0092\u0005\u0014\u000b\u0002\u0091\u0090\u0003\u0002\u0002\u0002\u0091",
    "\u0092\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093",
    "\u0095\u0007\u0011\u0002\u0002\u0094\u0096\u0007\u000b\u0002\u0002\u0095",
    "\u0094\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096",
    "\u0098\u0003\u0002\u0002\u0002\u0097\u0099\u0005\u001c\u000f\u0002\u0098",
    "\u0097\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099",
    "\u009b\u0003\u0002\u0002\u0002\u009a\u009c\u0007\u000b\u0002\u0002\u009b",
    "\u009a\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c",
    "\u00a1\u0003\u0002\u0002\u0002\u009d\u00a0\u0005\u0010\t\u0002\u009e",
    "\u00a0\u0005\u0012\n\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f",
    "\u009e\u0003\u0002\u0002\u0002\u00a0\u00a3\u0003\u0002\u0002\u0002\u00a1",
    "\u009f\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2",
    "\u00a5\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a4",
    "\u00a6\u0005\u001c\u000f\u0002\u00a5\u00a4\u0003\u0002\u0002\u0002\u00a5",
    "\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a8\u0003\u0002\u0002\u0002\u00a7",
    "\u00a9\u0007\u000b\u0002\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002\u00a8",
    "\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa",
    "\u00ab\u0007\u0010\u0002\u0002\u00ab\u00ac\u0007\u0012\u0002\u0002\u00ac",
    "\u00ad\u00076\u0002\u0002\u00ad\u00af\u0007\u0011\u0002\u0002\u00ae",
    "\u00b0\u0007\u000b\u0002\u0002\u00af\u00ae\u0003\u0002\u0002\u0002\u00af",
    "\u00b0\u0003\u0002\u0002\u0002\u00b0\u0011\u0003\u0002\u0002\u0002\u00b1",
    "\u00b2\u0007\u0010\u0002\u0002\u00b2\u00b4\u00076\u0002\u0002\u00b3",
    "\u00b5\u0005\u0014\u000b\u0002\u00b4\u00b3\u0003\u0002\u0002\u0002\u00b4",
    "\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6",
    "\u00b7\u0007\u0012\u0002\u0002\u00b7\u00b9\u0007\u0011\u0002\u0002\u00b8",
    "\u00ba\u0007\u000b\u0002\u0002\u00b9\u00b8\u0003\u0002\u0002\u0002\u00b9",
    "\u00ba\u0003\u0002\u0002\u0002\u00ba\u0013\u0003\u0002\u0002\u0002\u00bb",
    "\u00bd\u00076\u0002\u0002\u00bc\u00be\u0005\u0018\r\u0002\u00bd\u00bc",
    "\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00c2",
    "\u0003\u0002\u0002\u0002\u00bf\u00c1\u0005\u0016\f\u0002\u00c0\u00bf",
    "\u0003\u0002\u0002\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002\u00c2\u00c0",
    "\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u0015",
    "\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c7",
    "\u00076\u0002\u0002\u00c6\u00c8\u0005\u0018\r\u0002\u00c7\u00c6\u0003",
    "\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8\u0017\u0003",
    "\u0002\u0002\u0002\u00c9\u00ce\u0007\u0014\u0002\u0002\u00ca\u00cb\u0007",
    "\u0007\u0002\u0002\u00cb\u00cc\u00076\u0002\u0002\u00cc\u00cf\u0007",
    "\b\u0002\u0002\u00cd\u00cf\u0005\u001a\u000e\u0002\u00ce\u00ca\u0003",
    "\u0002\u0002\u0002\u00ce\u00cd\u0003\u0002\u0002\u0002\u00cf\u0019\u0003",
    "\u0002\u0002\u0002\u00d0\u00d1\t\u0002\u0002\u0002\u00d1\u001b\u0003",
    "\u0002\u0002\u0002\u00d2\u00d3\u0007\u0007\u0002\u0002\u00d3\u00d4\u0005",
    ",\u0017\u0002\u00d4\u00d5\u0007\b\u0002\u0002\u00d5\u00d8\u0003\u0002",
    "\u0002\u0002\u00d6\u00d8\u00077\u0002\u0002\u00d7\u00d2\u0003\u0002",
    "\u0002\u0002\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d8\u001d\u0003\u0002",
    "\u0002\u0002\u00d9\u00da\u00076\u0002\u0002\u00da\u00db\u0007\u0018",
    "\u0002\u0002\u00db\u00dc\u0007\u0019\u0002\u0002\u00dc\u00dd\u0007\u0014",
    "\u0002\u0002\u00dd\u00df\u0007\u0007\u0002\u0002\u00de\u00e0\u0007\u000b",
    "\u0002\u0002\u00df\u00de\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002",
    "\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e2\u0005 ",
    "\u0011\u0002\u00e2\u00e3\u0007\b\u0002\u0002\u00e3\u00e5\u0007\n\u0002",
    "\u0002\u00e4\u00e6\u0007\u000b\u0002\u0002\u00e5\u00e4\u0003\u0002\u0002",
    "\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u001f\u0003\u0002\u0002",
    "\u0002\u00e7\u00e8\u00076\u0002\u0002\u00e8\u00e9\u0007\u001b\u0002",
    "\u0002\u00e9\u00ea\u0007\u001a\u0002\u0002\u00ea\u00eb\u0007\u0018\u0002",
    "\u0002\u00eb\u00f2\u0005\"\u0012\u0002\u00ec\u00f3\u0007\u000b\u0002",
    "\u0002\u00ed\u00ef\u0007\u0003\u0002\u0002\u00ee\u00f0\u0007\u000b\u0002",
    "\u0002\u00ef\u00ee\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002",
    "\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f3\u0005 \u0011",
    "\u0002\u00f2\u00ec\u0003\u0002\u0002\u0002\u00f2\u00ed\u0003\u0002\u0002",
    "\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f3!\u0003\u0002\u0002",
    "\u0002\u00f4\u00f5\t\u0003\u0002\u0002\u00f5#\u0003\u0002\u0002\u0002",
    "\u00f6\u00f7\u0007%\u0002\u0002\u00f7\u00f8\u00076\u0002\u0002\u00f8",
    "\u00f9\u0007\u0014\u0002\u0002\u00f9\u00fa\u0005\u001a\u000e\u0002\u00fa",
    "\u00fc\u0007\n\u0002\u0002\u00fb\u00fd\u0007\u000b\u0002\u0002\u00fc",
    "\u00fb\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd",
    "%\u0003\u0002\u0002\u0002\u00fe\u00ff\u0007#\u0002\u0002\u00ff\u0100",
    "\u0005,\u0017\u0002\u0100\u0102\u0007\u0007\u0002\u0002\u0101\u0103",
    "\u0007\u000b\u0002\u0002\u0102\u0101\u0003\u0002\u0002\u0002\u0102\u0103",
    "\u0003\u0002\u0002\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104\u0105",
    "\u0005*\u0016\u0002\u0105\u0112\u0007\b\u0002\u0002\u0106\u0107\u0007",
    "$\u0002\u0002\u0107\u0108\u0007#\u0002\u0002\u0108\u0109\u0005,\u0017",
    "\u0002\u0109\u010b\u0007\u0007\u0002\u0002\u010a\u010c\u0007\u000b\u0002",
    "\u0002\u010b\u010a\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002\u0002",
    "\u0002\u010c\u010d\u0003\u0002\u0002\u0002\u010d\u010e\u0005*\u0016",
    "\u0002\u010e\u010f\u0007\b\u0002\u0002\u010f\u0111\u0003\u0002\u0002",
    "\u0002\u0110\u0106\u0003\u0002\u0002\u0002\u0111\u0114\u0003\u0002\u0002",
    "\u0002\u0112\u0110\u0003\u0002\u0002\u0002\u0112\u0113\u0003\u0002\u0002",
    "\u0002\u0113\u011d\u0003\u0002\u0002\u0002\u0114\u0112\u0003\u0002\u0002",
    "\u0002\u0115\u0116\u0007$\u0002\u0002\u0116\u0118\u0007\u0007\u0002",
    "\u0002\u0117\u0119\u0007\u000b\u0002\u0002\u0118\u0117\u0003\u0002\u0002",
    "\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u0119\u011a\u0003\u0002\u0002",
    "\u0002\u011a\u011b\u0005*\u0016\u0002\u011b\u011c\u0007\b\u0002\u0002",
    "\u011c\u011e\u0003\u0002\u0002\u0002\u011d\u0115\u0003\u0002\u0002\u0002",
    "\u011d\u011e\u0003\u0002\u0002\u0002\u011e\u011f\u0003\u0002\u0002\u0002",
    "\u011f\u0121\u0007\n\u0002\u0002\u0120\u0122\u0007\u000b\u0002\u0002",
    "\u0121\u0120\u0003\u0002\u0002\u0002\u0121\u0122\u0003\u0002\u0002\u0002",
    "\u0122\u014c\u0003\u0002\u0002\u0002\u0123\u0124\u00072\u0002\u0002",
    "\u0124\u0125\u0005,\u0017\u0002\u0125\u0127\u0007\u0007\u0002\u0002",
    "\u0126\u0128\u0007\u000b\u0002\u0002\u0127\u0126\u0003\u0002\u0002\u0002",
    "\u0127\u0128\u0003\u0002\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002",
    "\u0129\u012a\u0005*\u0016\u0002\u012a\u012b\u0007\b\u0002\u0002\u012b",
    "\u012d\u0007\n\u0002\u0002\u012c\u012e\u0007\u000b\u0002\u0002\u012d",
    "\u012c\u0003\u0002\u0002\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e",
    "\u014c\u0003\u0002\u0002\u0002\u012f\u0130\u00073\u0002\u0002\u0130",
    "\u0131\u0007\r\u0002\u0002\u0131\u0132\t\u0004\u0002\u0002\u0132\u0133",
    "\u00076\u0002\u0002\u0133\u0134\u0007\u0014\u0002\u0002\u0134\u0135",
    "\u0005\u001a\u000e\u0002\u0135\u0136\u0007\n\u0002\u0002\u0136\u0137",
    "\u00076\u0002\u0002\u0137\u0138\t\u0005\u0002\u0002\u0138\u0139\u0005",
    "\u001a\u000e\u0002\u0139\u013a\u0007\n\u0002\u0002\u013a\u013b\u0007",
    "6\u0002\u0002\u013b\u013c\t\u0006\u0002\u0002\u013c\u013d\u0007\u000e",
    "\u0002\u0002\u013d\u013f\u0007\u0007\u0002\u0002\u013e\u0140\u0007\u000b",
    "\u0002\u0002\u013f\u013e\u0003\u0002\u0002\u0002\u013f\u0140\u0003\u0002",
    "\u0002\u0002\u0140\u0141\u0003\u0002\u0002\u0002\u0141\u0142\u0005*",
    "\u0016\u0002\u0142\u0143\u0007\b\u0002\u0002\u0143\u0145\u0007\n\u0002",
    "\u0002\u0144\u0146\u0007\u000b\u0002\u0002\u0145\u0144\u0003\u0002\u0002",
    "\u0002\u0145\u0146\u0003\u0002\u0002\u0002\u0146\u014c\u0003\u0002\u0002",
    "\u0002\u0147\u0149\u0005(\u0015\u0002\u0148\u014a\u0007\u000b\u0002",
    "\u0002\u0149\u0148\u0003\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002",
    "\u0002\u014a\u014c\u0003\u0002\u0002\u0002\u014b\u00fe\u0003\u0002\u0002",
    "\u0002\u014b\u0123\u0003\u0002\u0002\u0002\u014b\u012f\u0003\u0002\u0002",
    "\u0002\u014b\u0147\u0003\u0002\u0002\u0002\u014c\'\u0003\u0002\u0002",
    "\u0002\u014d\u014e\u0007+\u0002\u0002\u014e\u0150\u0007\n\u0002\u0002",
    "\u014f\u0151\u0007\u000b\u0002\u0002\u0150\u014f\u0003\u0002\u0002\u0002",
    "\u0150\u0151\u0003\u0002\u0002\u0002\u0151\u0168\u0003\u0002\u0002\u0002",
    "\u0152\u0168\u0005,\u0017\u0002\u0153\u0155\u0007\u000f\u0002\u0002",
    "\u0154\u0156\u0005,\u0017\u0002\u0155\u0154\u0003\u0002\u0002\u0002",
    "\u0155\u0156\u0003\u0002\u0002\u0002\u0156\u0157\u0003\u0002\u0002\u0002",
    "\u0157\u0159\u0007\n\u0002\u0002\u0158\u015a\u0007\u000b\u0002\u0002",
    "\u0159\u0158\u0003\u0002\u0002\u0002\u0159\u015a\u0003\u0002\u0002\u0002",
    "\u015a\u0168\u0003\u0002\u0002\u0002\u015b\u015c\u00054\u001b\u0002",
    "\u015c\u015d\u0007\u0014\u0002\u0002\u015d\u015f\u0003\u0002\u0002\u0002",
    "\u015e\u015b\u0003\u0002\u0002\u0002\u015f\u0160\u0003\u0002\u0002\u0002",
    "\u0160\u015e\u0003\u0002\u0002\u0002\u0160\u0161\u0003\u0002\u0002\u0002",
    "\u0161\u0162\u0003\u0002\u0002\u0002\u0162\u0163\u0005,\u0017\u0002",
    "\u0163\u0165\u0007\n\u0002\u0002\u0164\u0166\u0007\u000b\u0002\u0002",
    "\u0165\u0164\u0003\u0002\u0002\u0002\u0165\u0166\u0003\u0002\u0002\u0002",
    "\u0166\u0168\u0003\u0002\u0002\u0002\u0167\u014d\u0003\u0002\u0002\u0002",
    "\u0167\u0152\u0003\u0002\u0002\u0002\u0167\u0153\u0003\u0002\u0002\u0002",
    "\u0167\u015e\u0003\u0002\u0002\u0002\u0168)\u0003\u0002\u0002\u0002",
    "\u0169\u016b\u0005&\u0014\u0002\u016a\u0169\u0003\u0002\u0002\u0002",
    "\u016b\u016c\u0003\u0002\u0002\u0002\u016c\u016a\u0003\u0002\u0002\u0002",
    "\u016c\u016d\u0003\u0002\u0002\u0002\u016d+\u0003\u0002\u0002\u0002",
    "\u016e\u016f\b\u0017\u0001\u0002\u016f\u0170\u0007,\u0002\u0002\u0170",
    "\u0173\u0005,\u0017\u0006\u0171\u0173\u0005.\u0018\u0002\u0172\u016e",
    "\u0003\u0002\u0002\u0002\u0172\u0171\u0003\u0002\u0002\u0002\u0173\u0182",
    "\u0003\u0002\u0002\u0002\u0174\u0175\f\u0005\u0002\u0002\u0175\u0176",
    "\t\u0007\u0002\u0002\u0176\u0181\u0005,\u0017\u0006\u0177\u0178\f\u0004",
    "\u0002\u0002\u0178\u0179\u0007/\u0002\u0002\u0179\u017a\u0005,\u0017",
    "\u0002\u017a\u017b\u0007\u001b\u0002\u0002\u017b\u017c\u0005,\u0017",
    "\u0002\u017c\u017e\u0007\n\u0002\u0002\u017d\u017f\u0007\u000b\u0002",
    "\u0002\u017e\u017d\u0003\u0002\u0002\u0002\u017e\u017f\u0003\u0002\u0002",
    "\u0002\u017f\u0181\u0003\u0002\u0002\u0002\u0180\u0174\u0003\u0002\u0002",
    "\u0002\u0180\u0177\u0003\u0002\u0002\u0002\u0181\u0184\u0003\u0002\u0002",
    "\u0002\u0182\u0180\u0003\u0002\u0002\u0002\u0182\u0183\u0003\u0002\u0002",
    "\u0002\u0183-\u0003\u0002\u0002\u0002\u0184\u0182\u0003\u0002\u0002",
    "\u0002\u0185\u0186\b\u0018\u0001\u0002\u0186\u0195\u00076\u0002\u0002",
    "\u0187\u0195\u0005\u001a\u000e\u0002\u0188\u0189\u0007\r\u0002\u0002",
    "\u0189\u018a\u0005,\u0017\u0002\u018a\u018b\u0007\u000e\u0002\u0002",
    "\u018b\u0195\u0003\u0002\u0002\u0002\u018c\u018d\u00076\u0002\u0002",
    "\u018d\u018f\u0007\r\u0002\u0002\u018e\u0190\u00050\u0019\u0002\u018f",
    "\u018e\u0003\u0002\u0002\u0002\u018f\u0190\u0003\u0002\u0002\u0002\u0190",
    "\u0191\u0003\u0002\u0002\u0002\u0191\u0195\u0007\u000e\u0002\u0002\u0192",
    "\u0193\u00074\u0002\u0002\u0193\u0195\u0005.\u0018\u0003\u0194\u0185",
    "\u0003\u0002\u0002\u0002\u0194\u0187\u0003\u0002\u0002\u0002\u0194\u0188",
    "\u0003\u0002\u0002\u0002\u0194\u018c\u0003\u0002\u0002\u0002\u0194\u0192",
    "\u0003\u0002\u0002\u0002\u0195\u01a8\u0003\u0002\u0002\u0002\u0196\u0197",
    "\f\u0007\u0002\u0002\u0197\u0198\u0007\u0018\u0002\u0002\u0198\u01a7",
    "\u00076\u0002\u0002\u0199\u019a\f\u0006\u0002\u0002\u019a\u019b\u0007",
    "0\u0002\u0002\u019b\u019c\u0005,\u0017\u0002\u019c\u019d\u00071\u0002",
    "\u0002\u019d\u01a7\u0003\u0002\u0002\u0002\u019e\u019f\f\u0005\u0002",
    "\u0002\u019f\u01a0\u0007\u0018\u0002\u0002\u01a0\u01a1\u00076\u0002",
    "\u0002\u01a1\u01a3\u0007\r\u0002\u0002\u01a2\u01a4\u00050\u0019\u0002",
    "\u01a3\u01a2\u0003\u0002\u0002\u0002\u01a3\u01a4\u0003\u0002\u0002\u0002",
    "\u01a4\u01a5\u0003\u0002\u0002\u0002\u01a5\u01a7\u0007\u000e\u0002\u0002",
    "\u01a6\u0196\u0003\u0002\u0002\u0002\u01a6\u0199\u0003\u0002\u0002\u0002",
    "\u01a6\u019e\u0003\u0002\u0002\u0002\u01a7\u01aa\u0003\u0002\u0002\u0002",
    "\u01a8\u01a6\u0003\u0002\u0002\u0002\u01a8\u01a9\u0003\u0002\u0002\u0002",
    "\u01a9/\u0003\u0002\u0002\u0002\u01aa\u01a8\u0003\u0002\u0002\u0002",
    "\u01ab\u01ad\u0005,\u0017\u0002\u01ac\u01ae\u00052\u001a\u0002\u01ad",
    "\u01ac\u0003\u0002\u0002\u0002\u01ad\u01ae\u0003\u0002\u0002\u0002\u01ae",
    "1\u0003\u0002\u0002\u0002\u01af\u01b0\u0007\u0003\u0002\u0002\u01b0",
    "\u01b4\u0005,\u0017\u0002\u01b1\u01b3\u00052\u001a\u0002\u01b2\u01b1",
    "\u0003\u0002\u0002\u0002\u01b3\u01b6\u0003\u0002\u0002\u0002\u01b4\u01b2",
    "\u0003\u0002\u0002\u0002\u01b4\u01b5\u0003\u0002\u0002\u0002\u01b53",
    "\u0003\u0002\u0002\u0002\u01b6\u01b4\u0003\u0002\u0002\u0002\u01b7\u01c2",
    "\u00076\u0002\u0002\u01b8\u01b9\u0005.\u0018\u0002\u01b9\u01ba\u0007",
    "\u0018\u0002\u0002\u01ba\u01bb\u00076\u0002\u0002\u01bb\u01c2\u0003",
    "\u0002\u0002\u0002\u01bc\u01bd\u0005.\u0018\u0002\u01bd\u01be\u0007",
    "0\u0002\u0002\u01be\u01bf\u0005,\u0017\u0002\u01bf\u01c0\u00071\u0002",
    "\u0002\u01c0\u01c2\u0003\u0002\u0002\u0002\u01c1\u01b7\u0003\u0002\u0002",
    "\u0002\u01c1\u01b8\u0003\u0002\u0002\u0002\u01c1\u01bc\u0003\u0002\u0002",
    "\u0002\u01c25\u0003\u0002\u0002\u0002D9AKTZ\\bjtx}\u0082\u0086\u0089",
    "\u0091\u0095\u0098\u009b\u009f\u00a1\u00a5\u00a8\u00af\u00b4\u00b9\u00bd",
    "\u00c2\u00c7\u00ce\u00d7\u00df\u00e5\u00ef\u00f2\u00fc\u0102\u010b\u0112",
    "\u0118\u011d\u0121\u0127\u012d\u013f\u0145\u0149\u014b\u0150\u0155\u0159",
    "\u0160\u0165\u0167\u016c\u0172\u017e\u0180\u0182\u018f\u0194\u01a3\u01a6",
    "\u01a8\u01ad\u01b4\u01c1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "'''", "'\"'", "'import'", "'{'", "'}'", 
                     "'from'", "';'", "'\n'", "'function'", "'('", "')'", 
                     "'return'", "'<'", "'>'", "'/'", "'export'", "'='", 
                     "'null'", "'true'", "'false'", "'.'", "'propTypes'", 
                     "'PropTypes'", "':'", "'array'", "'bool'", "'func'", 
                     "'number'", "'object'", "'string'", "'symbol'", "'if'", 
                     "'else'", "'var'", "'let'", "'==='", "'!=='", "'++'", 
                     "'--'", "'break'", "'!'", "'&&'", "'||'", "'?'", "'['", 
                     "']'", "'while'", "'for'", "'-'" ];

var symbolicNames = [ null, "COMA", "COMILLA1", "COMILLA2", "IMPORT", "CORCHETE_IZQ", 
                      "CORCHETE_DER", "FROM", "PUNTO_COMA", "SALTO", "FUNCTION", 
                      "PAR_IZQ", "PAR_DER", "RETURN", "OPEN_TAG", "CLOSE_TAG", 
                      "SLASH", "EXPORT", "IGUAL", "NULL", "TRUE", "FALSE", 
                      "PUNTO", "PROPTYPES", "PROPTYPESCLASS", "DOS_PUNTOS", 
                      "ARRAY", "BOOL", "FUNC", "NUMBER", "OBJECT", "STRING_TYPE", 
                      "SYMBOL", "IF", "ELSE", "VAR", "LET", "ES_IGUAL", 
                      "ES_DIFERENTE", "INCREMENTAR", "DECREMENTAR", "BREAK", 
                      "NOT", "AND", "OR", "INTERROGANTE", "PAR_CUADR_IZQ", 
                      "PAR_CUADR_DER", "WHILE", "FOR", "MENOS", "WHITESPACE", 
                      "ID", "STRING", "INTEGER" ];

var ruleNames =  [ "program", "program_body", "import_statement", "id_list", 
                   "more_id", "functionR", "func_body", "html_elements", 
                   "html_short_element", "props", "more_props", "possible_assign", 
                   "literal", "value_html_tag", "adding_proptypes", "prop_types_body", 
                   "types_of_proptypes", "var_def", "stmt", "simple_stmt", 
                   "block", "expr", "cexpr", "list_expr", "more_expr", "target" ];

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
ReactParser.IF = 33;
ReactParser.ELSE = 34;
ReactParser.VAR = 35;
ReactParser.LET = 36;
ReactParser.ES_IGUAL = 37;
ReactParser.ES_DIFERENTE = 38;
ReactParser.INCREMENTAR = 39;
ReactParser.DECREMENTAR = 40;
ReactParser.BREAK = 41;
ReactParser.NOT = 42;
ReactParser.AND = 43;
ReactParser.OR = 44;
ReactParser.INTERROGANTE = 45;
ReactParser.PAR_CUADR_IZQ = 46;
ReactParser.PAR_CUADR_DER = 47;
ReactParser.WHILE = 48;
ReactParser.FOR = 49;
ReactParser.MENOS = 50;
ReactParser.WHITESPACE = 51;
ReactParser.ID = 52;
ReactParser.STRING = 53;
ReactParser.INTEGER = 54;

ReactParser.RULE_program = 0;
ReactParser.RULE_program_body = 1;
ReactParser.RULE_import_statement = 2;
ReactParser.RULE_id_list = 3;
ReactParser.RULE_more_id = 4;
ReactParser.RULE_functionR = 5;
ReactParser.RULE_func_body = 6;
ReactParser.RULE_html_elements = 7;
ReactParser.RULE_html_short_element = 8;
ReactParser.RULE_props = 9;
ReactParser.RULE_more_props = 10;
ReactParser.RULE_possible_assign = 11;
ReactParser.RULE_literal = 12;
ReactParser.RULE_value_html_tag = 13;
ReactParser.RULE_adding_proptypes = 14;
ReactParser.RULE_prop_types_body = 15;
ReactParser.RULE_types_of_proptypes = 16;
ReactParser.RULE_var_def = 17;
ReactParser.RULE_stmt = 18;
ReactParser.RULE_simple_stmt = 19;
ReactParser.RULE_block = 20;
ReactParser.RULE_expr = 21;
ReactParser.RULE_cexpr = 22;
ReactParser.RULE_list_expr = 23;
ReactParser.RULE_more_expr = 24;
ReactParser.RULE_target = 25;


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
        this.state = 55;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ReactParser.IMPORT || _la===ReactParser.FUNCTION || _la===ReactParser.ID) {
            this.state = 52;
            this.program_body();
            this.state = 57;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 58;
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
        this.state = 63;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactParser.IMPORT:
            this.state = 60;
            this.import_statement();
            break;
        case ReactParser.FUNCTION:
            this.state = 61;
            this.functionR();
            break;
        case ReactParser.ID:
            this.state = 62;
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
        this.state = 90;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            localctx = new No_id_importContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 65;
            this.match(ReactParser.IMPORT);
            this.state = 66;
            this.match(ReactParser.CORCHETE_IZQ);
            this.state = 67;
            this.id_list();
            this.state = 68;
            this.match(ReactParser.CORCHETE_DER);
            this.state = 69;
            this.match(ReactParser.FROM);
            this.state = 70;
            this.match(ReactParser.STRING);
            this.state = 71;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.SALTO) {
                this.state = 72;
                this.match(ReactParser.SALTO);
            }

            break;

        case 2:
            localctx = new Id_importContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 75;
            this.match(ReactParser.IMPORT);
            this.state = 76;
            this.match(ReactParser.ID);
            this.state = 82;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.COMA) {
                this.state = 77;
                this.match(ReactParser.COMA);
                this.state = 78;
                this.match(ReactParser.CORCHETE_IZQ);
                this.state = 79;
                this.id_list();
                this.state = 80;
                this.match(ReactParser.CORCHETE_DER);
            }

            this.state = 84;
            this.match(ReactParser.FROM);
            this.state = 85;
            this.match(ReactParser.STRING);
            this.state = 86;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 88;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.SALTO) {
                this.state = 87;
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
        this.state = 92;
        this.match(ReactParser.ID);
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ReactParser.COMA) {
            this.state = 93;
            this.more_id();
            this.state = 98;
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
        this.state = 99;
        this.match(ReactParser.COMA);
        this.state = 100;
        this.match(ReactParser.ID);
        this.state = 104;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 101;
                this.more_id(); 
            }
            this.state = 106;
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
        this.state = 107;
        this.match(ReactParser.FUNCTION);
        this.state = 108;
        this.match(ReactParser.ID);
        this.state = 109;
        this.match(ReactParser.PAR_IZQ);
        this.state = 110;
        this.id_list();
        this.state = 111;
        this.match(ReactParser.PAR_DER);
        this.state = 112;
        this.match(ReactParser.CORCHETE_IZQ);
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 113;
            this.match(ReactParser.SALTO);
        }

        this.state = 116;
        this.func_body();
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 117;
            this.match(ReactParser.SALTO);
        }

        this.state = 120;
        this.match(ReactParser.CORCHETE_DER);
        this.state = 121;
        this.match(ReactParser.PUNTO_COMA);
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 122;
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

Func_bodyContext.prototype.PAR_DER = function() {
    return this.getToken(ReactParser.PAR_DER, 0);
};

Func_bodyContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

Func_bodyContext.prototype.html_elements = function() {
    return this.getTypedRuleContext(Html_elementsContext,0);
};

Func_bodyContext.prototype.html_short_element = function() {
    return this.getTypedRuleContext(Html_short_elementContext,0);
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
        this.state = 125;
        this.match(ReactParser.RETURN);
        this.state = 126;
        this.match(ReactParser.PAR_IZQ);
        this.state = 128;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 127;
            this.match(ReactParser.SALTO);
        }

        this.state = 132;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.state = 130;
            this.html_elements();
            break;

        case 2:
            this.state = 131;
            this.html_short_element();
            break;

        }
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 134;
            this.match(ReactParser.SALTO);
        }

        this.state = 137;
        this.match(ReactParser.PAR_DER);
        this.state = 138;
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

Html_elementsContext.prototype.html_short_element = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Html_short_elementContext);
    } else {
        return this.getTypedRuleContext(Html_short_elementContext,i);
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
        this.state = 140;
        this.match(ReactParser.OPEN_TAG);
        this.state = 141;
        this.match(ReactParser.ID);
        this.state = 143;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.ID) {
            this.state = 142;
            this.props();
        }

        this.state = 145;
        this.match(ReactParser.CLOSE_TAG);
        this.state = 147;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 146;
            this.match(ReactParser.SALTO);

        }
        this.state = 150;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 149;
            this.value_html_tag();

        }
        this.state = 153;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        if(la_===1) {
            this.state = 152;
            this.match(ReactParser.SALTO);

        }
        this.state = 159;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 157;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 155;
                    this.html_elements();
                    break;

                case 2:
                    this.state = 156;
                    this.html_short_element();
                    break;

                } 
            }
            this.state = 161;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
        }

        this.state = 163;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.CORCHETE_IZQ || _la===ReactParser.STRING) {
            this.state = 162;
            this.value_html_tag();
        }

        this.state = 166;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 165;
            this.match(ReactParser.SALTO);
        }

        this.state = 168;
        this.match(ReactParser.OPEN_TAG);
        this.state = 169;
        this.match(ReactParser.SLASH);
        this.state = 170;
        this.match(ReactParser.ID);
        this.state = 171;
        this.match(ReactParser.CLOSE_TAG);
        this.state = 173;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 172;
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


function Html_short_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_html_short_element;
    return this;
}

Html_short_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Html_short_elementContext.prototype.constructor = Html_short_elementContext;

Html_short_elementContext.prototype.OPEN_TAG = function() {
    return this.getToken(ReactParser.OPEN_TAG, 0);
};

Html_short_elementContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

Html_short_elementContext.prototype.SLASH = function() {
    return this.getToken(ReactParser.SLASH, 0);
};

Html_short_elementContext.prototype.CLOSE_TAG = function() {
    return this.getToken(ReactParser.CLOSE_TAG, 0);
};

Html_short_elementContext.prototype.props = function() {
    return this.getTypedRuleContext(PropsContext,0);
};

Html_short_elementContext.prototype.SALTO = function() {
    return this.getToken(ReactParser.SALTO, 0);
};

Html_short_elementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterHtml_short_element(this);
	}
};

Html_short_elementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitHtml_short_element(this);
	}
};




ReactParser.Html_short_elementContext = Html_short_elementContext;

ReactParser.prototype.html_short_element = function() {

    var localctx = new Html_short_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ReactParser.RULE_html_short_element);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.match(ReactParser.OPEN_TAG);
        this.state = 176;
        this.match(ReactParser.ID);
        this.state = 178;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.ID) {
            this.state = 177;
            this.props();
        }

        this.state = 180;
        this.match(ReactParser.SLASH);
        this.state = 181;
        this.match(ReactParser.CLOSE_TAG);
        this.state = 183;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        if(la_===1) {
            this.state = 182;
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

PropsContext.prototype.more_props = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(More_propsContext);
    } else {
        return this.getTypedRuleContext(More_propsContext,i);
    }
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
    this.enterRule(localctx, 18, ReactParser.RULE_props);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(ReactParser.ID);
        this.state = 187;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.IGUAL) {
            this.state = 186;
            this.possible_assign();
        }

        this.state = 192;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ReactParser.ID) {
            this.state = 189;
            this.more_props();
            this.state = 194;
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
    this.enterRule(localctx, 20, ReactParser.RULE_more_props);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(ReactParser.ID);
        this.state = 197;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.IGUAL) {
            this.state = 196;
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
    this.enterRule(localctx, 22, ReactParser.RULE_possible_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(ReactParser.IGUAL);
        this.state = 204;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactParser.CORCHETE_IZQ:
            this.state = 200;
            this.match(ReactParser.CORCHETE_IZQ);
            this.state = 201;
            this.match(ReactParser.ID);
            this.state = 202;
            this.match(ReactParser.CORCHETE_DER);
            break;
        case ReactParser.NULL:
        case ReactParser.TRUE:
        case ReactParser.FALSE:
        case ReactParser.STRING:
        case ReactParser.INTEGER:
            this.state = 203;
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
    this.enterRule(localctx, 24, ReactParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ReactParser.NULL) | (1 << ReactParser.TRUE) | (1 << ReactParser.FALSE))) !== 0) || _la===ReactParser.STRING || _la===ReactParser.INTEGER)) {
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
    this.enterRule(localctx, 26, ReactParser.RULE_value_html_tag);
    try {
        this.state = 213;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactParser.CORCHETE_IZQ:
            this.enterOuterAlt(localctx, 1);
            this.state = 208;
            this.match(ReactParser.CORCHETE_IZQ);
            this.state = 209;
            this.expr(0);
            this.state = 210;
            this.match(ReactParser.CORCHETE_DER);
            break;
        case ReactParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 212;
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
    this.enterRule(localctx, 28, ReactParser.RULE_adding_proptypes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this.match(ReactParser.ID);
        this.state = 216;
        this.match(ReactParser.PUNTO);
        this.state = 217;
        this.match(ReactParser.PROPTYPES);
        this.state = 218;
        this.match(ReactParser.IGUAL);
        this.state = 219;
        this.match(ReactParser.CORCHETE_IZQ);
        this.state = 221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 220;
            this.match(ReactParser.SALTO);
        }

        this.state = 223;
        this.prop_types_body();
        this.state = 224;
        this.match(ReactParser.CORCHETE_DER);
        this.state = 225;
        this.match(ReactParser.PUNTO_COMA);
        this.state = 227;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 226;
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
        this.state = 229;
        this.match(ReactParser.ID);
        this.state = 230;
        this.match(ReactParser.DOS_PUNTOS);
        this.state = 231;
        this.match(ReactParser.PROPTYPESCLASS);
        this.state = 232;
        this.match(ReactParser.PUNTO);
        this.state = 233;
        this.types_of_proptypes();
        this.state = 240;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case ReactParser.SALTO:
        	this.state = 234;
        	this.match(ReactParser.SALTO);
        	break;
        case ReactParser.COMA:
        	this.state = 235;
        	this.match(ReactParser.COMA);
        	this.state = 237;
        	this._errHandler.sync(this);
        	_la = this._input.LA(1);
        	if(_la===ReactParser.SALTO) {
        	    this.state = 236;
        	    this.match(ReactParser.SALTO);
        	}

        	this.state = 239;
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
        this.state = 242;
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


function Var_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_var_def;
    return this;
}

Var_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_defContext.prototype.constructor = Var_defContext;

Var_defContext.prototype.VAR = function() {
    return this.getToken(ReactParser.VAR, 0);
};

Var_defContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

Var_defContext.prototype.IGUAL = function() {
    return this.getToken(ReactParser.IGUAL, 0);
};

Var_defContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

Var_defContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

Var_defContext.prototype.SALTO = function() {
    return this.getToken(ReactParser.SALTO, 0);
};

Var_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterVar_def(this);
	}
};

Var_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitVar_def(this);
	}
};




ReactParser.Var_defContext = Var_defContext;

ReactParser.prototype.var_def = function() {

    var localctx = new Var_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ReactParser.RULE_var_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this.match(ReactParser.VAR);
        this.state = 245;
        this.match(ReactParser.ID);
        this.state = 246;
        this.match(ReactParser.IGUAL);
        this.state = 247;
        this.literal();
        this.state = 248;
        this.match(ReactParser.PUNTO_COMA);
        this.state = 250;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 249;
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


function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.IF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.IF);
    } else {
        return this.getToken(ReactParser.IF, i);
    }
};


StmtContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

StmtContext.prototype.CORCHETE_IZQ = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.CORCHETE_IZQ);
    } else {
        return this.getToken(ReactParser.CORCHETE_IZQ, i);
    }
};


StmtContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

StmtContext.prototype.CORCHETE_DER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.CORCHETE_DER);
    } else {
        return this.getToken(ReactParser.CORCHETE_DER, i);
    }
};


StmtContext.prototype.PUNTO_COMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.PUNTO_COMA);
    } else {
        return this.getToken(ReactParser.PUNTO_COMA, i);
    }
};


StmtContext.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.SALTO);
    } else {
        return this.getToken(ReactParser.SALTO, i);
    }
};


StmtContext.prototype.ELSE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.ELSE);
    } else {
        return this.getToken(ReactParser.ELSE, i);
    }
};


StmtContext.prototype.WHILE = function() {
    return this.getToken(ReactParser.WHILE, 0);
};

StmtContext.prototype.FOR = function() {
    return this.getToken(ReactParser.FOR, 0);
};

StmtContext.prototype.PAR_IZQ = function() {
    return this.getToken(ReactParser.PAR_IZQ, 0);
};

StmtContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.ID);
    } else {
        return this.getToken(ReactParser.ID, i);
    }
};


StmtContext.prototype.IGUAL = function() {
    return this.getToken(ReactParser.IGUAL, 0);
};

StmtContext.prototype.literal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LiteralContext);
    } else {
        return this.getTypedRuleContext(LiteralContext,i);
    }
};

StmtContext.prototype.PAR_DER = function() {
    return this.getToken(ReactParser.PAR_DER, 0);
};

StmtContext.prototype.VAR = function() {
    return this.getToken(ReactParser.VAR, 0);
};

StmtContext.prototype.LET = function() {
    return this.getToken(ReactParser.LET, 0);
};

StmtContext.prototype.OPEN_TAG = function() {
    return this.getToken(ReactParser.OPEN_TAG, 0);
};

StmtContext.prototype.CLOSE_TAG = function() {
    return this.getToken(ReactParser.CLOSE_TAG, 0);
};

StmtContext.prototype.ES_DIFERENTE = function() {
    return this.getToken(ReactParser.ES_DIFERENTE, 0);
};

StmtContext.prototype.ES_IGUAL = function() {
    return this.getToken(ReactParser.ES_IGUAL, 0);
};

StmtContext.prototype.INCREMENTAR = function() {
    return this.getToken(ReactParser.INCREMENTAR, 0);
};

StmtContext.prototype.DECREMENTAR = function() {
    return this.getToken(ReactParser.DECREMENTAR, 0);
};

StmtContext.prototype.simple_stmt = function() {
    return this.getTypedRuleContext(Simple_stmtContext,0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitStmt(this);
	}
};




ReactParser.StmtContext = StmtContext;

ReactParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ReactParser.RULE_stmt);
    var _la = 0; // Token type
    try {
        this.state = 329;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 252;
            this.match(ReactParser.IF);
            this.state = 253;
            this.expr(0);
            this.state = 254;
            this.match(ReactParser.CORCHETE_IZQ);
            this.state = 256;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.SALTO) {
                this.state = 255;
                this.match(ReactParser.SALTO);
            }

            this.state = 258;
            this.block();
            this.state = 259;
            this.match(ReactParser.CORCHETE_DER);
            this.state = 272;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 260;
                    this.match(ReactParser.ELSE);
                    this.state = 261;
                    this.match(ReactParser.IF);
                    this.state = 262;
                    this.expr(0);
                    this.state = 263;
                    this.match(ReactParser.CORCHETE_IZQ);
                    this.state = 265;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===ReactParser.SALTO) {
                        this.state = 264;
                        this.match(ReactParser.SALTO);
                    }

                    this.state = 267;
                    this.block();
                    this.state = 268;
                    this.match(ReactParser.CORCHETE_DER); 
                }
                this.state = 274;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
            }

            this.state = 283;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.ELSE) {
                this.state = 275;
                this.match(ReactParser.ELSE);
                this.state = 276;
                this.match(ReactParser.CORCHETE_IZQ);
                this.state = 278;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===ReactParser.SALTO) {
                    this.state = 277;
                    this.match(ReactParser.SALTO);
                }

                this.state = 280;
                this.block();
                this.state = 281;
                this.match(ReactParser.CORCHETE_DER);
            }

            this.state = 285;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 287;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.SALTO) {
                this.state = 286;
                this.match(ReactParser.SALTO);
            }

            break;
        case ReactParser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 289;
            this.match(ReactParser.WHILE);
            this.state = 290;
            this.expr(0);
            this.state = 291;
            this.match(ReactParser.CORCHETE_IZQ);
            this.state = 293;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.SALTO) {
                this.state = 292;
                this.match(ReactParser.SALTO);
            }

            this.state = 295;
            this.block();
            this.state = 296;
            this.match(ReactParser.CORCHETE_DER);
            this.state = 297;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 299;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.SALTO) {
                this.state = 298;
                this.match(ReactParser.SALTO);
            }

            break;
        case ReactParser.FOR:
            this.enterOuterAlt(localctx, 3);
            this.state = 301;
            this.match(ReactParser.FOR);
            this.state = 302;
            this.match(ReactParser.PAR_IZQ);
            this.state = 303;
            _la = this._input.LA(1);
            if(!(_la===ReactParser.VAR || _la===ReactParser.LET)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 304;
            this.match(ReactParser.ID);
            this.state = 305;
            this.match(ReactParser.IGUAL);
            this.state = 306;
            this.literal();
            this.state = 307;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 308;
            this.match(ReactParser.ID);
            this.state = 309;
            _la = this._input.LA(1);
            if(!(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (ReactParser.OPEN_TAG - 14)) | (1 << (ReactParser.CLOSE_TAG - 14)) | (1 << (ReactParser.ES_IGUAL - 14)) | (1 << (ReactParser.ES_DIFERENTE - 14)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 310;
            this.literal();
            this.state = 311;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 312;
            this.match(ReactParser.ID);
            this.state = 313;
            _la = this._input.LA(1);
            if(!(_la===ReactParser.INCREMENTAR || _la===ReactParser.DECREMENTAR)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 314;
            this.match(ReactParser.PAR_DER);
            this.state = 315;
            this.match(ReactParser.CORCHETE_IZQ);
            this.state = 317;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.SALTO) {
                this.state = 316;
                this.match(ReactParser.SALTO);
            }

            this.state = 319;
            this.block();
            this.state = 320;
            this.match(ReactParser.CORCHETE_DER);
            this.state = 321;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 323;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.SALTO) {
                this.state = 322;
                this.match(ReactParser.SALTO);
            }

            break;
        case ReactParser.PAR_IZQ:
        case ReactParser.RETURN:
        case ReactParser.NULL:
        case ReactParser.TRUE:
        case ReactParser.FALSE:
        case ReactParser.BREAK:
        case ReactParser.NOT:
        case ReactParser.MENOS:
        case ReactParser.ID:
        case ReactParser.STRING:
        case ReactParser.INTEGER:
            this.enterOuterAlt(localctx, 4);
            this.state = 325;
            this.simple_stmt();
            this.state = 327;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.SALTO) {
                this.state = 326;
                this.match(ReactParser.SALTO);
            }

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


function Simple_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_simple_stmt;
    return this;
}

Simple_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Simple_stmtContext.prototype.constructor = Simple_stmtContext;

Simple_stmtContext.prototype.BREAK = function() {
    return this.getToken(ReactParser.BREAK, 0);
};

Simple_stmtContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

Simple_stmtContext.prototype.SALTO = function() {
    return this.getToken(ReactParser.SALTO, 0);
};

Simple_stmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Simple_stmtContext.prototype.RETURN = function() {
    return this.getToken(ReactParser.RETURN, 0);
};

Simple_stmtContext.prototype.target = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TargetContext);
    } else {
        return this.getTypedRuleContext(TargetContext,i);
    }
};

Simple_stmtContext.prototype.IGUAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.IGUAL);
    } else {
        return this.getToken(ReactParser.IGUAL, i);
    }
};


Simple_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterSimple_stmt(this);
	}
};

Simple_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitSimple_stmt(this);
	}
};




ReactParser.Simple_stmtContext = Simple_stmtContext;

ReactParser.prototype.simple_stmt = function() {

    var localctx = new Simple_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ReactParser.RULE_simple_stmt);
    var _la = 0; // Token type
    try {
        this.state = 357;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 331;
            this.match(ReactParser.BREAK);
            this.state = 332;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 334;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
            if(la_===1) {
                this.state = 333;
                this.match(ReactParser.SALTO);

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 336;
            this.expr(0);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 337;
            this.match(ReactParser.RETURN);
            this.state = 339;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ReactParser.PAR_IZQ) | (1 << ReactParser.NULL) | (1 << ReactParser.TRUE) | (1 << ReactParser.FALSE))) !== 0) || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (ReactParser.NOT - 42)) | (1 << (ReactParser.MENOS - 42)) | (1 << (ReactParser.ID - 42)) | (1 << (ReactParser.STRING - 42)) | (1 << (ReactParser.INTEGER - 42)))) !== 0)) {
                this.state = 338;
                this.expr(0);
            }

            this.state = 341;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 343;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
            if(la_===1) {
                this.state = 342;
                this.match(ReactParser.SALTO);

            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 348; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 345;
            		this.target();
            		this.state = 346;
            		this.match(ReactParser.IGUAL);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 350; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,50, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 352;
            this.expr(0);
            this.state = 353;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 355;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
            if(la_===1) {
                this.state = 354;
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


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitBlock(this);
	}
};




ReactParser.BlockContext = BlockContext;

ReactParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ReactParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 360; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 359;
            this.stmt();
            this.state = 362; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ReactParser.PAR_IZQ) | (1 << ReactParser.RETURN) | (1 << ReactParser.NULL) | (1 << ReactParser.TRUE) | (1 << ReactParser.FALSE))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (ReactParser.IF - 33)) | (1 << (ReactParser.BREAK - 33)) | (1 << (ReactParser.NOT - 33)) | (1 << (ReactParser.WHILE - 33)) | (1 << (ReactParser.FOR - 33)) | (1 << (ReactParser.MENOS - 33)) | (1 << (ReactParser.ID - 33)) | (1 << (ReactParser.STRING - 33)) | (1 << (ReactParser.INTEGER - 33)))) !== 0));
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

ExprContext.prototype.NOT = function() {
    return this.getToken(ReactParser.NOT, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.cexpr = function() {
    return this.getTypedRuleContext(CexprContext,0);
};

ExprContext.prototype.AND = function() {
    return this.getToken(ReactParser.AND, 0);
};

ExprContext.prototype.OR = function() {
    return this.getToken(ReactParser.OR, 0);
};

ExprContext.prototype.INTERROGANTE = function() {
    return this.getToken(ReactParser.INTERROGANTE, 0);
};

ExprContext.prototype.DOS_PUNTOS = function() {
    return this.getToken(ReactParser.DOS_PUNTOS, 0);
};

ExprContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

ExprContext.prototype.SALTO = function() {
    return this.getToken(ReactParser.SALTO, 0);
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



ReactParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 42;
    this.enterRecursionRule(localctx, 42, ReactParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 368;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactParser.NOT:
            this.state = 365;
            this.match(ReactParser.NOT);
            this.state = 366;
            this.expr(4);
            break;
        case ReactParser.PAR_IZQ:
        case ReactParser.NULL:
        case ReactParser.TRUE:
        case ReactParser.FALSE:
        case ReactParser.MENOS:
        case ReactParser.ID:
        case ReactParser.STRING:
        case ReactParser.INTEGER:
            this.state = 367;
            this.cexpr(0);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 384;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,57,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 382;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expr);
                    this.state = 370;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 371;
                    _la = this._input.LA(1);
                    if(!(_la===ReactParser.AND || _la===ReactParser.OR)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 372;
                    this.expr(4);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_expr);
                    this.state = 373;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 374;
                    this.match(ReactParser.INTERROGANTE);
                    this.state = 375;
                    this.expr(0);
                    this.state = 376;
                    this.match(ReactParser.DOS_PUNTOS);
                    this.state = 377;
                    this.expr(0);
                    this.state = 378;
                    this.match(ReactParser.PUNTO_COMA);
                    this.state = 380;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
                    if(la_===1) {
                        this.state = 379;
                        this.match(ReactParser.SALTO);

                    }
                    break;

                } 
            }
            this.state = 386;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,57,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function CexprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_cexpr;
    return this;
}

CexprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CexprContext.prototype.constructor = CexprContext;

CexprContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

CexprContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

CexprContext.prototype.PAR_IZQ = function() {
    return this.getToken(ReactParser.PAR_IZQ, 0);
};

CexprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

CexprContext.prototype.PAR_DER = function() {
    return this.getToken(ReactParser.PAR_DER, 0);
};

CexprContext.prototype.list_expr = function() {
    return this.getTypedRuleContext(List_exprContext,0);
};

CexprContext.prototype.MENOS = function() {
    return this.getToken(ReactParser.MENOS, 0);
};

CexprContext.prototype.cexpr = function() {
    return this.getTypedRuleContext(CexprContext,0);
};

CexprContext.prototype.PUNTO = function() {
    return this.getToken(ReactParser.PUNTO, 0);
};

CexprContext.prototype.PAR_CUADR_IZQ = function() {
    return this.getToken(ReactParser.PAR_CUADR_IZQ, 0);
};

CexprContext.prototype.PAR_CUADR_DER = function() {
    return this.getToken(ReactParser.PAR_CUADR_DER, 0);
};

CexprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterCexpr(this);
	}
};

CexprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitCexpr(this);
	}
};



ReactParser.prototype.cexpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new CexprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 44;
    this.enterRecursionRule(localctx, 44, ReactParser.RULE_cexpr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 402;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
        switch(la_) {
        case 1:
            this.state = 388;
            this.match(ReactParser.ID);
            break;

        case 2:
            this.state = 389;
            this.literal();
            break;

        case 3:
            this.state = 390;
            this.match(ReactParser.PAR_IZQ);
            this.state = 391;
            this.expr(0);
            this.state = 392;
            this.match(ReactParser.PAR_DER);
            break;

        case 4:
            this.state = 394;
            this.match(ReactParser.ID);
            this.state = 395;
            this.match(ReactParser.PAR_IZQ);
            this.state = 397;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ReactParser.PAR_IZQ) | (1 << ReactParser.NULL) | (1 << ReactParser.TRUE) | (1 << ReactParser.FALSE))) !== 0) || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (ReactParser.NOT - 42)) | (1 << (ReactParser.MENOS - 42)) | (1 << (ReactParser.ID - 42)) | (1 << (ReactParser.STRING - 42)) | (1 << (ReactParser.INTEGER - 42)))) !== 0)) {
                this.state = 396;
                this.list_expr();
            }

            this.state = 399;
            this.match(ReactParser.PAR_DER);
            break;

        case 5:
            this.state = 400;
            this.match(ReactParser.MENOS);
            this.state = 401;
            this.cexpr(1);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 422;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,62,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 420;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,61,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new CexprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_cexpr);
                    this.state = 404;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 405;
                    this.match(ReactParser.PUNTO);
                    this.state = 406;
                    this.match(ReactParser.ID);
                    break;

                case 2:
                    localctx = new CexprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_cexpr);
                    this.state = 407;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 408;
                    this.match(ReactParser.PAR_CUADR_IZQ);
                    this.state = 409;
                    this.expr(0);
                    this.state = 410;
                    this.match(ReactParser.PAR_CUADR_DER);
                    break;

                case 3:
                    localctx = new CexprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ReactParser.RULE_cexpr);
                    this.state = 412;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 413;
                    this.match(ReactParser.PUNTO);
                    this.state = 414;
                    this.match(ReactParser.ID);
                    this.state = 415;
                    this.match(ReactParser.PAR_IZQ);
                    this.state = 417;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ReactParser.PAR_IZQ) | (1 << ReactParser.NULL) | (1 << ReactParser.TRUE) | (1 << ReactParser.FALSE))) !== 0) || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (ReactParser.NOT - 42)) | (1 << (ReactParser.MENOS - 42)) | (1 << (ReactParser.ID - 42)) | (1 << (ReactParser.STRING - 42)) | (1 << (ReactParser.INTEGER - 42)))) !== 0)) {
                        this.state = 416;
                        this.list_expr();
                    }

                    this.state = 419;
                    this.match(ReactParser.PAR_DER);
                    break;

                } 
            }
            this.state = 424;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,62,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function List_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_list_expr;
    return this;
}

List_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
List_exprContext.prototype.constructor = List_exprContext;

List_exprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

List_exprContext.prototype.more_expr = function() {
    return this.getTypedRuleContext(More_exprContext,0);
};

List_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterList_expr(this);
	}
};

List_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitList_expr(this);
	}
};




ReactParser.List_exprContext = List_exprContext;

ReactParser.prototype.list_expr = function() {

    var localctx = new List_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ReactParser.RULE_list_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 425;
        this.expr(0);
        this.state = 427;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.COMA) {
            this.state = 426;
            this.more_expr();
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


function More_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_more_expr;
    return this;
}

More_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
More_exprContext.prototype.constructor = More_exprContext;

More_exprContext.prototype.COMA = function() {
    return this.getToken(ReactParser.COMA, 0);
};

More_exprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

More_exprContext.prototype.more_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(More_exprContext);
    } else {
        return this.getTypedRuleContext(More_exprContext,i);
    }
};

More_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterMore_expr(this);
	}
};

More_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitMore_expr(this);
	}
};




ReactParser.More_exprContext = More_exprContext;

ReactParser.prototype.more_expr = function() {

    var localctx = new More_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, ReactParser.RULE_more_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 429;
        this.match(ReactParser.COMA);
        this.state = 430;
        this.expr(0);
        this.state = 434;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,64,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 431;
                this.more_expr(); 
            }
            this.state = 436;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,64,this._ctx);
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


function TargetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_target;
    return this;
}

TargetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TargetContext.prototype.constructor = TargetContext;

TargetContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

TargetContext.prototype.cexpr = function() {
    return this.getTypedRuleContext(CexprContext,0);
};

TargetContext.prototype.PUNTO = function() {
    return this.getToken(ReactParser.PUNTO, 0);
};

TargetContext.prototype.PAR_CUADR_IZQ = function() {
    return this.getToken(ReactParser.PAR_CUADR_IZQ, 0);
};

TargetContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

TargetContext.prototype.PAR_CUADR_DER = function() {
    return this.getToken(ReactParser.PAR_CUADR_DER, 0);
};

TargetContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterTarget(this);
	}
};

TargetContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitTarget(this);
	}
};




ReactParser.TargetContext = TargetContext;

ReactParser.prototype.target = function() {

    var localctx = new TargetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ReactParser.RULE_target);
    try {
        this.state = 447;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,65,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 437;
            this.match(ReactParser.ID);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 438;
            this.cexpr(0);
            this.state = 439;
            this.match(ReactParser.PUNTO);
            this.state = 440;
            this.match(ReactParser.ID);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 442;
            this.cexpr(0);
            this.state = 443;
            this.match(ReactParser.PAR_CUADR_IZQ);
            this.state = 444;
            this.expr(0);
            this.state = 445;
            this.match(ReactParser.PAR_CUADR_DER);
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


ReactParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 21:
			return this.expr_sempred(localctx, predIndex);
	case 22:
			return this.cexpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ReactParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ReactParser.prototype.cexpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 5);
		case 3:
			return this.precpred(this._ctx, 4);
		case 4:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ReactParser = ReactParser;
