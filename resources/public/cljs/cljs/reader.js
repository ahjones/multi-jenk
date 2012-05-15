goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____81237 = reader;

if(cljs.core.truth_(and__3546__auto____81237))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____81237;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____81238 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____81238))
{return or__3548__auto____81238;
} else
{var or__3548__auto____81239 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____81239))
{return or__3548__auto____81239;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____81240 = reader;

if(cljs.core.truth_(and__3546__auto____81240))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____81240;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____81241 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____81241))
{return or__3548__auto____81241;
} else
{var or__3548__auto____81242 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____81242))
{return or__3548__auto____81242;
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
var this__81243 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__81243.buffer_atom))))
{var idx__81244 = cljs.core.deref.call(null,this__81243.index_atom);

cljs.core.swap_BANG_.call(null,this__81243.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__81243.s,idx__81244);
} else
{var buf__81245 = cljs.core.deref.call(null,this__81243.buffer_atom);

cljs.core.swap_BANG_.call(null,this__81243.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__81245);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__81246 = this;
return cljs.core.swap_BANG_.call(null,this__81246.buffer_atom,(function (p1__81236_SHARP_){
return cljs.core.cons.call(null,ch,p1__81236_SHARP_);
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
var or__3548__auto____81247 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____81247))
{return or__3548__auto____81247;
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
var or__3548__auto____81248 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____81248))
{return or__3548__auto____81248;
} else
{var and__3546__auto____81250 = (function (){var or__3548__auto____81249 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____81249))
{return or__3548__auto____81249;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____81250))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__81251 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__81251);
return next_ch__81251;
})());
} else
{return and__3546__auto____81250;
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
reader_error.cljs$lang$applyTo = (function (arglist__81252){
var rdr = cljs.core.first(arglist__81252);
var msg = cljs.core.rest(arglist__81252);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____81253 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____81253))
{var and__3546__auto____81254 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____81254))
{var and__3546__auto____81255 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____81255))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____81255;
}
} else
{return and__3546__auto____81254;
}
} else
{return and__3546__auto____81253;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__81256 = (new goog.string.StringBuffer(initch));
var ch__81257 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____81258 = (ch__81257 === null);

if(cljs.core.truth_(or__3548__auto____81258))
{return or__3548__auto____81258;
} else
{var or__3548__auto____81259 = cljs.reader.whitespace_QMARK_.call(null,ch__81257);

if(cljs.core.truth_(or__3548__auto____81259))
{return or__3548__auto____81259;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__81257);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__81257);
return sb__81256.toString();
} else
{{
var G__81260 = (function (){sb__81256.append(ch__81257);
return sb__81256;
})();
var G__81261 = cljs.reader.read_char.call(null,rdr);
sb__81256 = G__81260;
ch__81257 = G__81261;
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
var ch__81262 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____81263 = cljs.core._EQ_.call(null,ch__81262,"n");

if(cljs.core.truth_(or__3548__auto____81263))
{return or__3548__auto____81263;
} else
{var or__3548__auto____81264 = cljs.core._EQ_.call(null,ch__81262,"r");

if(cljs.core.truth_(or__3548__auto____81264))
{return or__3548__auto____81264;
} else
{return (ch__81262 === null);
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
var groups__81265 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__81266 = cljs.core.nth.call(null,groups__81265,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____81267 = (void 0 === group3__81266);

if(cljs.core.truth_(or__3548__auto____81267))
{return or__3548__auto____81267;
} else
{return (group3__81266.length < 1);
}
})())))
{return 0;
} else
{var negate__81269 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__81265,1)))?-1:1);
var vec__81268__81270 = (cljs.core.truth_(cljs.core.nth.call(null,groups__81265,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__81265,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__81265,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__81265,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__81265,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__81265,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__81265,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__81265,7),parseInt.call(null,cljs.core.nth.call(null,groups__81265,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__81271 = cljs.core.nth.call(null,vec__81268__81270,0,null);
var radix__81272 = cljs.core.nth.call(null,vec__81268__81270,1,null);

if(cljs.core.truth_((n__81271 === null)))
{return null;
} else
{return (negate__81269 * parseInt.call(null,n__81271,radix__81272));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__81273 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__81274 = cljs.core.nth.call(null,groups__81273,1);
var denominator__81275 = cljs.core.nth.call(null,groups__81273,2);

return (parseInt.call(null,numinator__81274) / parseInt.call(null,denominator__81275));
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
var ch__81276 = cljs.reader.read_char.call(null,reader);
var mapresult__81277 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__81276);

if(cljs.core.truth_(mapresult__81277))
{return mapresult__81277;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____81278 = cljs.core._EQ_.call(null,"u",ch__81276);

if(cljs.core.truth_(or__3548__auto____81278))
{return or__3548__auto____81278;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__81276);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__81276);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__81276);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__81279 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__81279)))
{{
var G__81280 = cljs.reader.read_char.call(null,rdr);
ch__81279 = G__81280;
continue;
}
} else
{return ch__81279;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__81281 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__81282 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__81282))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__81282)))
{return a__81281;
} else
{var temp__3695__auto____81283 = cljs.core.get.call(null,cljs.reader.macros,ch__81282);

if(cljs.core.truth_(temp__3695__auto____81283))
{var macrofn__81284 = temp__3695__auto____81283;

var mret__81285 = macrofn__81284.call(null,rdr,ch__81282);

{
var G__81287 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__81285,rdr))?a__81281:cljs.core.conj.call(null,a__81281,mret__81285));
a__81281 = G__81287;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__81282);
var o__81286 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__81288 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__81286,rdr))?a__81281:cljs.core.conj.call(null,a__81281,o__81286));
a__81281 = G__81288;
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
var ch__81289 = cljs.reader.read_char.call(null,rdr);
var dm__81290 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__81289);

if(cljs.core.truth_(dm__81290))
{return dm__81290.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__81289);
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
var l__81291 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__81291))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__81291);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__81292 = (new goog.string.StringBuffer(initch));
var ch__81293 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____81294 = (ch__81293 === null);

if(cljs.core.truth_(or__3548__auto____81294))
{return or__3548__auto____81294;
} else
{var or__3548__auto____81295 = cljs.reader.whitespace_QMARK_.call(null,ch__81293);

if(cljs.core.truth_(or__3548__auto____81295))
{return or__3548__auto____81295;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__81293);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__81293);
var s__81296 = buffer__81292.toString();

var or__3548__auto____81297 = cljs.reader.match_number.call(null,s__81296);

if(cljs.core.truth_(or__3548__auto____81297))
{return or__3548__auto____81297;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__81296,"]");
}
} else
{{
var G__81298 = (function (){buffer__81292.append(ch__81293);
return buffer__81292;
})();
var G__81299 = cljs.reader.read_char.call(null,reader);
buffer__81292 = G__81298;
ch__81293 = G__81299;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__81300 = (new goog.string.StringBuffer());
var ch__81301 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__81301 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__81301)))
{{
var G__81302 = (function (){buffer__81300.append(cljs.reader.escape_char.call(null,buffer__81300,reader));
return buffer__81300;
})();
var G__81303 = cljs.reader.read_char.call(null,reader);
buffer__81300 = G__81302;
ch__81301 = G__81303;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__81301)))
{return buffer__81300.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__81304 = (function (){buffer__81300.append(ch__81301);
return buffer__81300;
})();
var G__81305 = cljs.reader.read_char.call(null,reader);
buffer__81300 = G__81304;
ch__81301 = G__81305;
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
var token__81306 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__81306,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__81306,0,token__81306.indexOf("/")),cljs.core.subs.call(null,token__81306,(token__81306.indexOf("/") + 1),token__81306.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__81306,cljs.core.symbol.call(null,token__81306));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__81308 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__81307__81309 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__81308);
var token__81310 = cljs.core.nth.call(null,vec__81307__81309,0,null);
var ns__81311 = cljs.core.nth.call(null,vec__81307__81309,1,null);
var name__81312 = cljs.core.nth.call(null,vec__81307__81309,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____81314 = (function (){var and__3546__auto____81313 = cljs.core.not.call(null,(void 0 === ns__81311));

if(cljs.core.truth_(and__3546__auto____81313))
{return (ns__81311.substring((ns__81311.length - 2),ns__81311.length) === ":/");
} else
{return and__3546__auto____81313;
}
})();

if(cljs.core.truth_(or__3548__auto____81314))
{return or__3548__auto____81314;
} else
{var or__3548__auto____81315 = ((name__81312[(name__81312.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____81315))
{return or__3548__auto____81315;
} else
{return cljs.core.not.call(null,(token__81310.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__81310);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__81311.substring(0,ns__81311.indexOf("/")),name__81312);
} else
{return cljs.core.keyword.call(null,token__81310);
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
var m__81316 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__81316)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__81317 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____81318 = o__81317;

if(cljs.core.truth_((function (){var and__3546__auto____81319 = x__451__auto____81318;

if(cljs.core.truth_(and__3546__auto____81319))
{var and__3546__auto____81320 = x__451__auto____81318.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____81320))
{return cljs.core.not.call(null,x__451__auto____81318.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____81320;
}
} else
{return and__3546__auto____81319;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____81318);
}
})()))
{return cljs.core.with_meta.call(null,o__81317,cljs.core.merge.call(null,cljs.core.meta.call(null,o__81317),m__81316));
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
var ch__81321 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__81321 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__81321)))
{{
var G__81323 = reader;
var G__81324 = eof_is_error;
var G__81325 = sentinel;
var G__81326 = is_recursive;
reader = G__81323;
eof_is_error = G__81324;
sentinel = G__81325;
is_recursive = G__81326;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__81321)))
{{
var G__81327 = cljs.reader.read_comment.call(null,reader,ch__81321);
var G__81328 = eof_is_error;
var G__81329 = sentinel;
var G__81330 = is_recursive;
reader = G__81327;
eof_is_error = G__81328;
sentinel = G__81329;
is_recursive = G__81330;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__81322 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__81321))?cljs.reader.macros.call(null,ch__81321).call(null,reader,ch__81321):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__81321))?cljs.reader.read_number.call(null,reader,ch__81321):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__81321):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__81322,reader)))
{{
var G__81331 = reader;
var G__81332 = eof_is_error;
var G__81333 = sentinel;
var G__81334 = is_recursive;
reader = G__81331;
eof_is_error = G__81332;
sentinel = G__81333;
is_recursive = G__81334;
continue;
}
} else
{return res__81322;
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
var r__81335 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__81335,true,null,false);
});
