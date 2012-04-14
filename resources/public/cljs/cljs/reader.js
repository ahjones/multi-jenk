goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____117325 = reader;

if(cljs.core.truth_(and__3546__auto____117325))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____117325;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____117326 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____117326))
{return or__3548__auto____117326;
} else
{var or__3548__auto____117327 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____117327))
{return or__3548__auto____117327;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____117328 = reader;

if(cljs.core.truth_(and__3546__auto____117328))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____117328;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____117329 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____117329))
{return or__3548__auto____117329;
} else
{var or__3548__auto____117330 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____117330))
{return or__3548__auto____117330;
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
var this__117331 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__117331.buffer_atom))))
{var idx__117332 = cljs.core.deref.call(null,this__117331.index_atom);

cljs.core.swap_BANG_.call(null,this__117331.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__117331.s,idx__117332);
} else
{var buf__117333 = cljs.core.deref.call(null,this__117331.buffer_atom);

cljs.core.swap_BANG_.call(null,this__117331.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__117333);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__117334 = this;
return cljs.core.swap_BANG_.call(null,this__117334.buffer_atom,(function (p1__117324_SHARP_){
return cljs.core.cons.call(null,ch,p1__117324_SHARP_);
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
var or__3548__auto____117335 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____117335))
{return or__3548__auto____117335;
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
var or__3548__auto____117336 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____117336))
{return or__3548__auto____117336;
} else
{var and__3546__auto____117338 = (function (){var or__3548__auto____117337 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____117337))
{return or__3548__auto____117337;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____117338))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__117339 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__117339);
return next_ch__117339;
})());
} else
{return and__3546__auto____117338;
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
reader_error.cljs$lang$applyTo = (function (arglist__117340){
var rdr = cljs.core.first(arglist__117340);
var msg = cljs.core.rest(arglist__117340);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____117341 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____117341))
{var and__3546__auto____117342 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____117342))
{var and__3546__auto____117343 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____117343))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____117343;
}
} else
{return and__3546__auto____117342;
}
} else
{return and__3546__auto____117341;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__117344 = (new goog.string.StringBuffer(initch));
var ch__117345 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____117346 = (ch__117345 === null);

if(cljs.core.truth_(or__3548__auto____117346))
{return or__3548__auto____117346;
} else
{var or__3548__auto____117347 = cljs.reader.whitespace_QMARK_.call(null,ch__117345);

if(cljs.core.truth_(or__3548__auto____117347))
{return or__3548__auto____117347;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__117345);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__117345);
return sb__117344.toString();
} else
{{
var G__117348 = (function (){sb__117344.append(ch__117345);
return sb__117344;
})();
var G__117349 = cljs.reader.read_char.call(null,rdr);
sb__117344 = G__117348;
ch__117345 = G__117349;
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
var ch__117350 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____117351 = cljs.core._EQ_.call(null,ch__117350,"n");

if(cljs.core.truth_(or__3548__auto____117351))
{return or__3548__auto____117351;
} else
{var or__3548__auto____117352 = cljs.core._EQ_.call(null,ch__117350,"r");

if(cljs.core.truth_(or__3548__auto____117352))
{return or__3548__auto____117352;
} else
{return (ch__117350 === null);
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
var groups__117353 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__117354 = cljs.core.nth.call(null,groups__117353,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____117355 = (void 0 === group3__117354);

if(cljs.core.truth_(or__3548__auto____117355))
{return or__3548__auto____117355;
} else
{return (group3__117354.length < 1);
}
})())))
{return 0;
} else
{var negate__117357 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__117353,1)))?-1:1);
var vec__117356__117358 = (cljs.core.truth_(cljs.core.nth.call(null,groups__117353,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__117353,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__117353,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__117353,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__117353,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__117353,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__117353,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__117353,7),parseInt.call(null,cljs.core.nth.call(null,groups__117353,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__117359 = cljs.core.nth.call(null,vec__117356__117358,0,null);
var radix__117360 = cljs.core.nth.call(null,vec__117356__117358,1,null);

if(cljs.core.truth_((n__117359 === null)))
{return null;
} else
{return (negate__117357 * parseInt.call(null,n__117359,radix__117360));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__117361 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__117362 = cljs.core.nth.call(null,groups__117361,1);
var denominator__117363 = cljs.core.nth.call(null,groups__117361,2);

return (parseInt.call(null,numinator__117362) / parseInt.call(null,denominator__117363));
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
var ch__117364 = cljs.reader.read_char.call(null,reader);
var mapresult__117365 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__117364);

if(cljs.core.truth_(mapresult__117365))
{return mapresult__117365;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____117366 = cljs.core._EQ_.call(null,"u",ch__117364);

if(cljs.core.truth_(or__3548__auto____117366))
{return or__3548__auto____117366;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__117364);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__117364);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__117364);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__117367 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__117367)))
{{
var G__117368 = cljs.reader.read_char.call(null,rdr);
ch__117367 = G__117368;
continue;
}
} else
{return ch__117367;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__117369 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__117370 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__117370))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__117370)))
{return a__117369;
} else
{var temp__3695__auto____117371 = cljs.core.get.call(null,cljs.reader.macros,ch__117370);

if(cljs.core.truth_(temp__3695__auto____117371))
{var macrofn__117372 = temp__3695__auto____117371;

var mret__117373 = macrofn__117372.call(null,rdr,ch__117370);

{
var G__117375 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__117373,rdr))?a__117369:cljs.core.conj.call(null,a__117369,mret__117373));
a__117369 = G__117375;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__117370);
var o__117374 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__117376 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__117374,rdr))?a__117369:cljs.core.conj.call(null,a__117369,o__117374));
a__117369 = G__117376;
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
var ch__117377 = cljs.reader.read_char.call(null,rdr);
var dm__117378 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__117377);

if(cljs.core.truth_(dm__117378))
{return dm__117378.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__117377);
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
var l__117379 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__117379))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__117379);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__117380 = (new goog.string.StringBuffer(initch));
var ch__117381 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____117382 = (ch__117381 === null);

if(cljs.core.truth_(or__3548__auto____117382))
{return or__3548__auto____117382;
} else
{var or__3548__auto____117383 = cljs.reader.whitespace_QMARK_.call(null,ch__117381);

if(cljs.core.truth_(or__3548__auto____117383))
{return or__3548__auto____117383;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__117381);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__117381);
var s__117384 = buffer__117380.toString();

var or__3548__auto____117385 = cljs.reader.match_number.call(null,s__117384);

if(cljs.core.truth_(or__3548__auto____117385))
{return or__3548__auto____117385;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__117384,"]");
}
} else
{{
var G__117386 = (function (){buffer__117380.append(ch__117381);
return buffer__117380;
})();
var G__117387 = cljs.reader.read_char.call(null,reader);
buffer__117380 = G__117386;
ch__117381 = G__117387;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__117388 = (new goog.string.StringBuffer());
var ch__117389 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__117389 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__117389)))
{{
var G__117390 = (function (){buffer__117388.append(cljs.reader.escape_char.call(null,buffer__117388,reader));
return buffer__117388;
})();
var G__117391 = cljs.reader.read_char.call(null,reader);
buffer__117388 = G__117390;
ch__117389 = G__117391;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__117389)))
{return buffer__117388.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__117392 = (function (){buffer__117388.append(ch__117389);
return buffer__117388;
})();
var G__117393 = cljs.reader.read_char.call(null,reader);
buffer__117388 = G__117392;
ch__117389 = G__117393;
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
var token__117394 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__117394,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__117394,0,token__117394.indexOf("/")),cljs.core.subs.call(null,token__117394,(token__117394.indexOf("/") + 1),token__117394.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__117394,cljs.core.symbol.call(null,token__117394));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__117396 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__117395__117397 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__117396);
var token__117398 = cljs.core.nth.call(null,vec__117395__117397,0,null);
var ns__117399 = cljs.core.nth.call(null,vec__117395__117397,1,null);
var name__117400 = cljs.core.nth.call(null,vec__117395__117397,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____117402 = (function (){var and__3546__auto____117401 = cljs.core.not.call(null,(void 0 === ns__117399));

if(cljs.core.truth_(and__3546__auto____117401))
{return (ns__117399.substring((ns__117399.length - 2),ns__117399.length) === ":/");
} else
{return and__3546__auto____117401;
}
})();

if(cljs.core.truth_(or__3548__auto____117402))
{return or__3548__auto____117402;
} else
{var or__3548__auto____117403 = ((name__117400[(name__117400.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____117403))
{return or__3548__auto____117403;
} else
{return cljs.core.not.call(null,(token__117398.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__117398);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__117399.substring(0,ns__117399.indexOf("/")),name__117400);
} else
{return cljs.core.keyword.call(null,token__117398);
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
var m__117404 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__117404)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__117405 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____117406 = o__117405;

if(cljs.core.truth_((function (){var and__3546__auto____117407 = x__451__auto____117406;

if(cljs.core.truth_(and__3546__auto____117407))
{var and__3546__auto____117408 = x__451__auto____117406.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____117408))
{return cljs.core.not.call(null,x__451__auto____117406.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____117408;
}
} else
{return and__3546__auto____117407;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____117406);
}
})()))
{return cljs.core.with_meta.call(null,o__117405,cljs.core.merge.call(null,cljs.core.meta.call(null,o__117405),m__117404));
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
var ch__117409 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__117409 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__117409)))
{{
var G__117411 = reader;
var G__117412 = eof_is_error;
var G__117413 = sentinel;
var G__117414 = is_recursive;
reader = G__117411;
eof_is_error = G__117412;
sentinel = G__117413;
is_recursive = G__117414;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__117409)))
{{
var G__117415 = cljs.reader.read_comment.call(null,reader,ch__117409);
var G__117416 = eof_is_error;
var G__117417 = sentinel;
var G__117418 = is_recursive;
reader = G__117415;
eof_is_error = G__117416;
sentinel = G__117417;
is_recursive = G__117418;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__117410 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__117409))?cljs.reader.macros.call(null,ch__117409).call(null,reader,ch__117409):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__117409))?cljs.reader.read_number.call(null,reader,ch__117409):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__117409):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__117410,reader)))
{{
var G__117419 = reader;
var G__117420 = eof_is_error;
var G__117421 = sentinel;
var G__117422 = is_recursive;
reader = G__117419;
eof_is_error = G__117420;
sentinel = G__117421;
is_recursive = G__117422;
continue;
}
} else
{return res__117410;
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
var r__117423 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__117423,true,null,false);
});
