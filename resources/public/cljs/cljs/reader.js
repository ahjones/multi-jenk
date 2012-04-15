goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____9352 = reader;

if(cljs.core.truth_(and__3546__auto____9352))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____9352;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____9353 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9353))
{return or__3548__auto____9353;
} else
{var or__3548__auto____9354 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____9354))
{return or__3548__auto____9354;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____9355 = reader;

if(cljs.core.truth_(and__3546__auto____9355))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____9355;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____9356 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____9356))
{return or__3548__auto____9356;
} else
{var or__3548__auto____9357 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____9357))
{return or__3548__auto____9357;
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
var this__9358 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__9358.buffer_atom))))
{var idx__9359 = cljs.core.deref.call(null,this__9358.index_atom);

cljs.core.swap_BANG_.call(null,this__9358.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__9358.s,idx__9359);
} else
{var buf__9360 = cljs.core.deref.call(null,this__9358.buffer_atom);

cljs.core.swap_BANG_.call(null,this__9358.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__9360);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__9361 = this;
return cljs.core.swap_BANG_.call(null,this__9361.buffer_atom,(function (p1__9351_SHARP_){
return cljs.core.cons.call(null,ch,p1__9351_SHARP_);
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
var or__3548__auto____9362 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____9362))
{return or__3548__auto____9362;
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
var or__3548__auto____9363 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____9363))
{return or__3548__auto____9363;
} else
{var and__3546__auto____9365 = (function (){var or__3548__auto____9364 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____9364))
{return or__3548__auto____9364;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____9365))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__9366 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__9366);
return next_ch__9366;
})());
} else
{return and__3546__auto____9365;
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
reader_error.cljs$lang$applyTo = (function (arglist__9367){
var rdr = cljs.core.first(arglist__9367);
var msg = cljs.core.rest(arglist__9367);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____9368 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____9368))
{var and__3546__auto____9369 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____9369))
{var and__3546__auto____9370 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____9370))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____9370;
}
} else
{return and__3546__auto____9369;
}
} else
{return and__3546__auto____9368;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__9371 = (new goog.string.StringBuffer(initch));
var ch__9372 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9373 = (ch__9372 === null);

if(cljs.core.truth_(or__3548__auto____9373))
{return or__3548__auto____9373;
} else
{var or__3548__auto____9374 = cljs.reader.whitespace_QMARK_.call(null,ch__9372);

if(cljs.core.truth_(or__3548__auto____9374))
{return or__3548__auto____9374;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__9372);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__9372);
return sb__9371.toString();
} else
{{
var G__9375 = (function (){sb__9371.append(ch__9372);
return sb__9371;
})();
var G__9376 = cljs.reader.read_char.call(null,rdr);
sb__9371 = G__9375;
ch__9372 = G__9376;
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
var ch__9377 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____9378 = cljs.core._EQ_.call(null,ch__9377,"n");

if(cljs.core.truth_(or__3548__auto____9378))
{return or__3548__auto____9378;
} else
{var or__3548__auto____9379 = cljs.core._EQ_.call(null,ch__9377,"r");

if(cljs.core.truth_(or__3548__auto____9379))
{return or__3548__auto____9379;
} else
{return (ch__9377 === null);
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
var groups__9380 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__9381 = cljs.core.nth.call(null,groups__9380,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____9382 = (void 0 === group3__9381);

if(cljs.core.truth_(or__3548__auto____9382))
{return or__3548__auto____9382;
} else
{return (group3__9381.length < 1);
}
})())))
{return 0;
} else
{var negate__9384 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__9380,1)))?-1:1);
var vec__9383__9385 = (cljs.core.truth_(cljs.core.nth.call(null,groups__9380,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9380,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9380,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9380,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9380,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9380,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__9380,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__9380,7),parseInt.call(null,cljs.core.nth.call(null,groups__9380,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__9386 = cljs.core.nth.call(null,vec__9383__9385,0,null);
var radix__9387 = cljs.core.nth.call(null,vec__9383__9385,1,null);

if(cljs.core.truth_((n__9386 === null)))
{return null;
} else
{return (negate__9384 * parseInt.call(null,n__9386,radix__9387));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__9388 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__9389 = cljs.core.nth.call(null,groups__9388,1);
var denominator__9390 = cljs.core.nth.call(null,groups__9388,2);

return (parseInt.call(null,numinator__9389) / parseInt.call(null,denominator__9390));
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
var ch__9391 = cljs.reader.read_char.call(null,reader);
var mapresult__9392 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__9391);

if(cljs.core.truth_(mapresult__9392))
{return mapresult__9392;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____9393 = cljs.core._EQ_.call(null,"u",ch__9391);

if(cljs.core.truth_(or__3548__auto____9393))
{return or__3548__auto____9393;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__9391);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__9391);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__9391);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__9394 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__9394)))
{{
var G__9395 = cljs.reader.read_char.call(null,rdr);
ch__9394 = G__9395;
continue;
}
} else
{return ch__9394;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__9396 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__9397 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__9397))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__9397)))
{return a__9396;
} else
{var temp__3695__auto____9398 = cljs.core.get.call(null,cljs.reader.macros,ch__9397);

if(cljs.core.truth_(temp__3695__auto____9398))
{var macrofn__9399 = temp__3695__auto____9398;

var mret__9400 = macrofn__9399.call(null,rdr,ch__9397);

{
var G__9402 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__9400,rdr))?a__9396:cljs.core.conj.call(null,a__9396,mret__9400));
a__9396 = G__9402;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__9397);
var o__9401 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__9403 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__9401,rdr))?a__9396:cljs.core.conj.call(null,a__9396,o__9401));
a__9396 = G__9403;
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
var ch__9404 = cljs.reader.read_char.call(null,rdr);
var dm__9405 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__9404);

if(cljs.core.truth_(dm__9405))
{return dm__9405.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__9404);
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
var l__9406 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__9406))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__9406);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__9407 = (new goog.string.StringBuffer(initch));
var ch__9408 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9409 = (ch__9408 === null);

if(cljs.core.truth_(or__3548__auto____9409))
{return or__3548__auto____9409;
} else
{var or__3548__auto____9410 = cljs.reader.whitespace_QMARK_.call(null,ch__9408);

if(cljs.core.truth_(or__3548__auto____9410))
{return or__3548__auto____9410;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__9408);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__9408);
var s__9411 = buffer__9407.toString();

var or__3548__auto____9412 = cljs.reader.match_number.call(null,s__9411);

if(cljs.core.truth_(or__3548__auto____9412))
{return or__3548__auto____9412;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__9411,"]");
}
} else
{{
var G__9413 = (function (){buffer__9407.append(ch__9408);
return buffer__9407;
})();
var G__9414 = cljs.reader.read_char.call(null,reader);
buffer__9407 = G__9413;
ch__9408 = G__9414;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__9415 = (new goog.string.StringBuffer());
var ch__9416 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__9416 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__9416)))
{{
var G__9417 = (function (){buffer__9415.append(cljs.reader.escape_char.call(null,buffer__9415,reader));
return buffer__9415;
})();
var G__9418 = cljs.reader.read_char.call(null,reader);
buffer__9415 = G__9417;
ch__9416 = G__9418;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__9416)))
{return buffer__9415.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__9419 = (function (){buffer__9415.append(ch__9416);
return buffer__9415;
})();
var G__9420 = cljs.reader.read_char.call(null,reader);
buffer__9415 = G__9419;
ch__9416 = G__9420;
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
var token__9421 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__9421,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__9421,0,token__9421.indexOf("/")),cljs.core.subs.call(null,token__9421,(token__9421.indexOf("/") + 1),token__9421.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__9421,cljs.core.symbol.call(null,token__9421));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__9423 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__9422__9424 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__9423);
var token__9425 = cljs.core.nth.call(null,vec__9422__9424,0,null);
var ns__9426 = cljs.core.nth.call(null,vec__9422__9424,1,null);
var name__9427 = cljs.core.nth.call(null,vec__9422__9424,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____9429 = (function (){var and__3546__auto____9428 = cljs.core.not.call(null,(void 0 === ns__9426));

if(cljs.core.truth_(and__3546__auto____9428))
{return (ns__9426.substring((ns__9426.length - 2),ns__9426.length) === ":/");
} else
{return and__3546__auto____9428;
}
})();

if(cljs.core.truth_(or__3548__auto____9429))
{return or__3548__auto____9429;
} else
{var or__3548__auto____9430 = ((name__9427[(name__9427.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____9430))
{return or__3548__auto____9430;
} else
{return cljs.core.not.call(null,(token__9425.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__9425);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__9426.substring(0,ns__9426.indexOf("/")),name__9427);
} else
{return cljs.core.keyword.call(null,token__9425);
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
var m__9431 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__9431)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__9432 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____9433 = o__9432;

if(cljs.core.truth_((function (){var and__3546__auto____9434 = x__451__auto____9433;

if(cljs.core.truth_(and__3546__auto____9434))
{var and__3546__auto____9435 = x__451__auto____9433.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____9435))
{return cljs.core.not.call(null,x__451__auto____9433.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____9435;
}
} else
{return and__3546__auto____9434;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____9433);
}
})()))
{return cljs.core.with_meta.call(null,o__9432,cljs.core.merge.call(null,cljs.core.meta.call(null,o__9432),m__9431));
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
var ch__9436 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__9436 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__9436)))
{{
var G__9438 = reader;
var G__9439 = eof_is_error;
var G__9440 = sentinel;
var G__9441 = is_recursive;
reader = G__9438;
eof_is_error = G__9439;
sentinel = G__9440;
is_recursive = G__9441;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__9436)))
{{
var G__9442 = cljs.reader.read_comment.call(null,reader,ch__9436);
var G__9443 = eof_is_error;
var G__9444 = sentinel;
var G__9445 = is_recursive;
reader = G__9442;
eof_is_error = G__9443;
sentinel = G__9444;
is_recursive = G__9445;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__9437 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__9436))?cljs.reader.macros.call(null,ch__9436).call(null,reader,ch__9436):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__9436))?cljs.reader.read_number.call(null,reader,ch__9436):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__9436):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__9437,reader)))
{{
var G__9446 = reader;
var G__9447 = eof_is_error;
var G__9448 = sentinel;
var G__9449 = is_recursive;
reader = G__9446;
eof_is_error = G__9447;
sentinel = G__9448;
is_recursive = G__9449;
continue;
}
} else
{return res__9437;
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
var r__9450 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__9450,true,null,false);
});
