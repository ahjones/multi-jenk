goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____5038 = reader;

if(cljs.core.truth_(and__3546__auto____5038))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____5038;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____5039 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____5039))
{return or__3548__auto____5039;
} else
{var or__3548__auto____5040 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____5040))
{return or__3548__auto____5040;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____5041 = reader;

if(cljs.core.truth_(and__3546__auto____5041))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____5041;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____5042 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____5042))
{return or__3548__auto____5042;
} else
{var or__3548__auto____5043 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____5043))
{return or__3548__auto____5043;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__5044 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__5044.buffer_atom))))
{var idx__5045 = cljs.core.deref.call(null,this__5044.index_atom);

cljs.core.swap_BANG_.call(null,this__5044.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__5044.s,idx__5045);
} else
{var buf__5046 = cljs.core.deref.call(null,this__5044.buffer_atom);

cljs.core.swap_BANG_.call(null,this__5044.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__5046);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__5047 = this;
return cljs.core.swap_BANG_.call(null,this__5047.buffer_atom,(function (p1__5037_SHARP_){
return cljs.core.cons.call(null,ch,p1__5037_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____5048 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____5048))
{return or__3548__auto____5048;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____5049 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____5049))
{return or__3548__auto____5049;
} else
{var and__3546__auto____5051 = (function (){var or__3548__auto____5050 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____5050))
{return or__3548__auto____5050;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____5051))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__5052 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__5052);
return next_ch__5052;
})());
} else
{return and__3546__auto____5051;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__5053){
var rdr = cljs.core.first(arglist__5053);
var msg = cljs.core.rest(arglist__5053);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____5054 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____5054))
{var and__3546__auto____5055 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____5055))
{var and__3546__auto____5056 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____5056))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____5056;
}
} else
{return and__3546__auto____5055;
}
} else
{return and__3546__auto____5054;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__5057 = (new goog.string.StringBuffer(initch));
var ch__5058 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____5059 = (ch__5058 === null);

if(cljs.core.truth_(or__3548__auto____5059))
{return or__3548__auto____5059;
} else
{var or__3548__auto____5060 = cljs.reader.whitespace_QMARK_.call(null,ch__5058);

if(cljs.core.truth_(or__3548__auto____5060))
{return or__3548__auto____5060;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__5058);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__5058);
return sb__5057.toString();
} else
{{
var G__5061 = (function (){sb__5057.append(ch__5058);
return sb__5057;
})();
var G__5062 = cljs.reader.read_char.call(null,rdr);
sb__5057 = G__5061;
ch__5058 = G__5062;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__5063 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____5064 = cljs.core._EQ_.call(null,ch__5063,"n");

if(cljs.core.truth_(or__3548__auto____5064))
{return or__3548__auto____5064;
} else
{var or__3548__auto____5065 = cljs.core._EQ_.call(null,ch__5063,"r");

if(cljs.core.truth_(or__3548__auto____5065))
{return or__3548__auto____5065;
} else
{return (ch__5063 === null);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__5066 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__5067 = cljs.core.nth.call(null,groups__5066,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____5068 = (void 0 === group3__5067);

if(cljs.core.truth_(or__3548__auto____5068))
{return or__3548__auto____5068;
} else
{return (group3__5067.length < 1);
}
})())))
{return 0;
} else
{var negate__5070 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__5066,1)))?-1:1);
var vec__5069__5071 = (cljs.core.truth_(cljs.core.nth.call(null,groups__5066,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__5066,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__5066,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__5066,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__5066,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__5066,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__5066,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__5066,7),parseInt.call(null,cljs.core.nth.call(null,groups__5066,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__5072 = cljs.core.nth.call(null,vec__5069__5071,0,null);
var radix__5073 = cljs.core.nth.call(null,vec__5069__5071,1,null);

if(cljs.core.truth_((n__5072 === null)))
{return null;
} else
{return (negate__5070 * parseInt.call(null,n__5072,radix__5073));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__5074 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__5075 = cljs.core.nth.call(null,groups__5074,1);
var denominator__5076 = cljs.core.nth.call(null,groups__5074,2);

return (parseInt.call(null,numinator__5075) / parseInt.call(null,denominator__5076));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__5077 = cljs.reader.read_char.call(null,reader);
var mapresult__5078 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__5077);

if(cljs.core.truth_(mapresult__5078))
{return mapresult__5078;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____5079 = cljs.core._EQ_.call(null,"u",ch__5077);

if(cljs.core.truth_(or__3548__auto____5079))
{return or__3548__auto____5079;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__5077);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__5077);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__5077);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__5080 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__5080)))
{{
var G__5081 = cljs.reader.read_char.call(null,rdr);
ch__5080 = G__5081;
continue;
}
} else
{return ch__5080;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__5082 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__5083 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__5083))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__5083)))
{return a__5082;
} else
{var temp__3695__auto____5084 = cljs.core.get.call(null,cljs.reader.macros,ch__5083);

if(cljs.core.truth_(temp__3695__auto____5084))
{var macrofn__5085 = temp__3695__auto____5084;

var mret__5086 = macrofn__5085.call(null,rdr,ch__5083);

{
var G__5088 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__5086,rdr))?a__5082:cljs.core.conj.call(null,a__5082,mret__5086));
a__5082 = G__5088;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__5083);
var o__5087 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__5089 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__5087,rdr))?a__5082:cljs.core.conj.call(null,a__5082,o__5087));
a__5082 = G__5089;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__5090 = cljs.reader.read_char.call(null,rdr);
var dm__5091 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__5090);

if(cljs.core.truth_(dm__5091))
{return dm__5091.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__5090);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__5092 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__5092))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__5092);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__5093 = (new goog.string.StringBuffer(initch));
var ch__5094 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____5095 = (ch__5094 === null);

if(cljs.core.truth_(or__3548__auto____5095))
{return or__3548__auto____5095;
} else
{var or__3548__auto____5096 = cljs.reader.whitespace_QMARK_.call(null,ch__5094);

if(cljs.core.truth_(or__3548__auto____5096))
{return or__3548__auto____5096;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__5094);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__5094);
var s__5097 = buffer__5093.toString();

var or__3548__auto____5098 = cljs.reader.match_number.call(null,s__5097);

if(cljs.core.truth_(or__3548__auto____5098))
{return or__3548__auto____5098;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__5097,"]");
}
} else
{{
var G__5099 = (function (){buffer__5093.append(ch__5094);
return buffer__5093;
})();
var G__5100 = cljs.reader.read_char.call(null,reader);
buffer__5093 = G__5099;
ch__5094 = G__5100;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__5101 = (new goog.string.StringBuffer());
var ch__5102 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__5102 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__5102)))
{{
var G__5103 = (function (){buffer__5101.append(cljs.reader.escape_char.call(null,buffer__5101,reader));
return buffer__5101;
})();
var G__5104 = cljs.reader.read_char.call(null,reader);
buffer__5101 = G__5103;
ch__5102 = G__5104;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__5102)))
{return buffer__5101.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__5105 = (function (){buffer__5101.append(ch__5102);
return buffer__5101;
})();
var G__5106 = cljs.reader.read_char.call(null,reader);
buffer__5101 = G__5105;
ch__5102 = G__5106;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__5107 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__5107,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__5107,0,token__5107.indexOf("/")),cljs.core.subs.call(null,token__5107,(token__5107.indexOf("/") + 1),token__5107.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__5107,cljs.core.symbol.call(null,token__5107));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__5109 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__5108__5110 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__5109);
var token__5111 = cljs.core.nth.call(null,vec__5108__5110,0,null);
var ns__5112 = cljs.core.nth.call(null,vec__5108__5110,1,null);
var name__5113 = cljs.core.nth.call(null,vec__5108__5110,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____5115 = (function (){var and__3546__auto____5114 = cljs.core.not.call(null,(void 0 === ns__5112));

if(cljs.core.truth_(and__3546__auto____5114))
{return (ns__5112.substring((ns__5112.length - 2),ns__5112.length) === ":/");
} else
{return and__3546__auto____5114;
}
})();

if(cljs.core.truth_(or__3548__auto____5115))
{return or__3548__auto____5115;
} else
{var or__3548__auto____5116 = ((name__5113[(name__5113.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____5116))
{return or__3548__auto____5116;
} else
{return cljs.core.not.call(null,(token__5111.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__5111);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__5112.substring(0,ns__5112.indexOf("/")),name__5113);
} else
{return cljs.core.keyword.call(null,token__5111);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__5117 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__5117)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__5118 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____5119 = o__5118;

if(cljs.core.truth_((function (){var and__3546__auto____5120 = x__451__auto____5119;

if(cljs.core.truth_(and__3546__auto____5120))
{var and__3546__auto____5121 = x__451__auto____5119.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____5121))
{return cljs.core.not.call(null,x__451__auto____5119.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____5121;
}
} else
{return and__3546__auto____5120;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____5119);
}
})()))
{return cljs.core.with_meta.call(null,o__5118,cljs.core.merge.call(null,cljs.core.meta.call(null,o__5118),m__5117));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"\uFDD1'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"\uFDD1'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__5122 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__5122 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__5122)))
{{
var G__5124 = reader;
var G__5125 = eof_is_error;
var G__5126 = sentinel;
var G__5127 = is_recursive;
reader = G__5124;
eof_is_error = G__5125;
sentinel = G__5126;
is_recursive = G__5127;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__5122)))
{{
var G__5128 = cljs.reader.read_comment.call(null,reader,ch__5122);
var G__5129 = eof_is_error;
var G__5130 = sentinel;
var G__5131 = is_recursive;
reader = G__5128;
eof_is_error = G__5129;
sentinel = G__5130;
is_recursive = G__5131;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__5123 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__5122))?cljs.reader.macros.call(null,ch__5122).call(null,reader,ch__5122):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__5122))?cljs.reader.read_number.call(null,reader,ch__5122):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__5122):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__5123,reader)))
{{
var G__5132 = reader;
var G__5133 = eof_is_error;
var G__5134 = sentinel;
var G__5135 = is_recursive;
reader = G__5132;
eof_is_error = G__5133;
sentinel = G__5134;
is_recursive = G__5135;
continue;
}
} else
{return res__5123;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__5136 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__5136,true,null,false);
});
