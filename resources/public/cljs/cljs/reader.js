goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____164450 = reader;

if(cljs.core.truth_(and__3546__auto____164450))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____164450;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____164451 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____164451))
{return or__3548__auto____164451;
} else
{var or__3548__auto____164452 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____164452))
{return or__3548__auto____164452;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____164453 = reader;

if(cljs.core.truth_(and__3546__auto____164453))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____164453;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____164454 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____164454))
{return or__3548__auto____164454;
} else
{var or__3548__auto____164455 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____164455))
{return or__3548__auto____164455;
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
var this__164456 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__164456.buffer_atom))))
{var idx__164457 = cljs.core.deref.call(null,this__164456.index_atom);

cljs.core.swap_BANG_.call(null,this__164456.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__164456.s,idx__164457);
} else
{var buf__164458 = cljs.core.deref.call(null,this__164456.buffer_atom);

cljs.core.swap_BANG_.call(null,this__164456.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__164458);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__164459 = this;
return cljs.core.swap_BANG_.call(null,this__164459.buffer_atom,(function (p1__164449_SHARP_){
return cljs.core.cons.call(null,ch,p1__164449_SHARP_);
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
var or__3548__auto____164460 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____164460))
{return or__3548__auto____164460;
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
var or__3548__auto____164461 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____164461))
{return or__3548__auto____164461;
} else
{var and__3546__auto____164463 = (function (){var or__3548__auto____164462 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____164462))
{return or__3548__auto____164462;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____164463))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__164464 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__164464);
return next_ch__164464;
})());
} else
{return and__3546__auto____164463;
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
reader_error.cljs$lang$applyTo = (function (arglist__164465){
var rdr = cljs.core.first(arglist__164465);
var msg = cljs.core.rest(arglist__164465);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____164466 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____164466))
{var and__3546__auto____164467 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____164467))
{var and__3546__auto____164468 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____164468))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____164468;
}
} else
{return and__3546__auto____164467;
}
} else
{return and__3546__auto____164466;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__164469 = (new goog.string.StringBuffer(initch));
var ch__164470 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____164471 = (ch__164470 === null);

if(cljs.core.truth_(or__3548__auto____164471))
{return or__3548__auto____164471;
} else
{var or__3548__auto____164472 = cljs.reader.whitespace_QMARK_.call(null,ch__164470);

if(cljs.core.truth_(or__3548__auto____164472))
{return or__3548__auto____164472;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__164470);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__164470);
return sb__164469.toString();
} else
{{
var G__164473 = (function (){sb__164469.append(ch__164470);
return sb__164469;
})();
var G__164474 = cljs.reader.read_char.call(null,rdr);
sb__164469 = G__164473;
ch__164470 = G__164474;
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
var ch__164475 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____164476 = cljs.core._EQ_.call(null,ch__164475,"n");

if(cljs.core.truth_(or__3548__auto____164476))
{return or__3548__auto____164476;
} else
{var or__3548__auto____164477 = cljs.core._EQ_.call(null,ch__164475,"r");

if(cljs.core.truth_(or__3548__auto____164477))
{return or__3548__auto____164477;
} else
{return (ch__164475 === null);
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
var groups__164478 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__164479 = cljs.core.nth.call(null,groups__164478,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____164480 = (void 0 === group3__164479);

if(cljs.core.truth_(or__3548__auto____164480))
{return or__3548__auto____164480;
} else
{return (group3__164479.length < 1);
}
})())))
{return 0;
} else
{var negate__164482 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__164478,1)))?-1:1);
var vec__164481__164483 = (cljs.core.truth_(cljs.core.nth.call(null,groups__164478,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__164478,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__164478,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__164478,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__164478,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__164478,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__164478,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__164478,7),parseInt.call(null,cljs.core.nth.call(null,groups__164478,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__164484 = cljs.core.nth.call(null,vec__164481__164483,0,null);
var radix__164485 = cljs.core.nth.call(null,vec__164481__164483,1,null);

if(cljs.core.truth_((n__164484 === null)))
{return null;
} else
{return (negate__164482 * parseInt.call(null,n__164484,radix__164485));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__164486 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__164487 = cljs.core.nth.call(null,groups__164486,1);
var denominator__164488 = cljs.core.nth.call(null,groups__164486,2);

return (parseInt.call(null,numinator__164487) / parseInt.call(null,denominator__164488));
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
var ch__164489 = cljs.reader.read_char.call(null,reader);
var mapresult__164490 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__164489);

if(cljs.core.truth_(mapresult__164490))
{return mapresult__164490;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____164491 = cljs.core._EQ_.call(null,"u",ch__164489);

if(cljs.core.truth_(or__3548__auto____164491))
{return or__3548__auto____164491;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__164489);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__164489);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__164489);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__164492 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__164492)))
{{
var G__164493 = cljs.reader.read_char.call(null,rdr);
ch__164492 = G__164493;
continue;
}
} else
{return ch__164492;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__164494 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__164495 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__164495))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__164495)))
{return a__164494;
} else
{var temp__3695__auto____164496 = cljs.core.get.call(null,cljs.reader.macros,ch__164495);

if(cljs.core.truth_(temp__3695__auto____164496))
{var macrofn__164497 = temp__3695__auto____164496;

var mret__164498 = macrofn__164497.call(null,rdr,ch__164495);

{
var G__164500 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__164498,rdr))?a__164494:cljs.core.conj.call(null,a__164494,mret__164498));
a__164494 = G__164500;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__164495);
var o__164499 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__164501 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__164499,rdr))?a__164494:cljs.core.conj.call(null,a__164494,o__164499));
a__164494 = G__164501;
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
var ch__164502 = cljs.reader.read_char.call(null,rdr);
var dm__164503 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__164502);

if(cljs.core.truth_(dm__164503))
{return dm__164503.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__164502);
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
var l__164504 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__164504))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__164504);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__164505 = (new goog.string.StringBuffer(initch));
var ch__164506 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____164507 = (ch__164506 === null);

if(cljs.core.truth_(or__3548__auto____164507))
{return or__3548__auto____164507;
} else
{var or__3548__auto____164508 = cljs.reader.whitespace_QMARK_.call(null,ch__164506);

if(cljs.core.truth_(or__3548__auto____164508))
{return or__3548__auto____164508;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__164506);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__164506);
var s__164509 = buffer__164505.toString();

var or__3548__auto____164510 = cljs.reader.match_number.call(null,s__164509);

if(cljs.core.truth_(or__3548__auto____164510))
{return or__3548__auto____164510;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__164509,"]");
}
} else
{{
var G__164511 = (function (){buffer__164505.append(ch__164506);
return buffer__164505;
})();
var G__164512 = cljs.reader.read_char.call(null,reader);
buffer__164505 = G__164511;
ch__164506 = G__164512;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__164513 = (new goog.string.StringBuffer());
var ch__164514 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__164514 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__164514)))
{{
var G__164515 = (function (){buffer__164513.append(cljs.reader.escape_char.call(null,buffer__164513,reader));
return buffer__164513;
})();
var G__164516 = cljs.reader.read_char.call(null,reader);
buffer__164513 = G__164515;
ch__164514 = G__164516;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__164514)))
{return buffer__164513.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__164517 = (function (){buffer__164513.append(ch__164514);
return buffer__164513;
})();
var G__164518 = cljs.reader.read_char.call(null,reader);
buffer__164513 = G__164517;
ch__164514 = G__164518;
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
var token__164519 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__164519,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__164519,0,token__164519.indexOf("/")),cljs.core.subs.call(null,token__164519,(token__164519.indexOf("/") + 1),token__164519.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__164519,cljs.core.symbol.call(null,token__164519));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__164521 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__164520__164522 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__164521);
var token__164523 = cljs.core.nth.call(null,vec__164520__164522,0,null);
var ns__164524 = cljs.core.nth.call(null,vec__164520__164522,1,null);
var name__164525 = cljs.core.nth.call(null,vec__164520__164522,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____164527 = (function (){var and__3546__auto____164526 = cljs.core.not.call(null,(void 0 === ns__164524));

if(cljs.core.truth_(and__3546__auto____164526))
{return (ns__164524.substring((ns__164524.length - 2),ns__164524.length) === ":/");
} else
{return and__3546__auto____164526;
}
})();

if(cljs.core.truth_(or__3548__auto____164527))
{return or__3548__auto____164527;
} else
{var or__3548__auto____164528 = ((name__164525[(name__164525.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____164528))
{return or__3548__auto____164528;
} else
{return cljs.core.not.call(null,(token__164523.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__164523);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__164524.substring(0,ns__164524.indexOf("/")),name__164525);
} else
{return cljs.core.keyword.call(null,token__164523);
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
var m__164529 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__164529)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__164530 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____164531 = o__164530;

if(cljs.core.truth_((function (){var and__3546__auto____164532 = x__451__auto____164531;

if(cljs.core.truth_(and__3546__auto____164532))
{var and__3546__auto____164533 = x__451__auto____164531.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____164533))
{return cljs.core.not.call(null,x__451__auto____164531.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____164533;
}
} else
{return and__3546__auto____164532;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____164531);
}
})()))
{return cljs.core.with_meta.call(null,o__164530,cljs.core.merge.call(null,cljs.core.meta.call(null,o__164530),m__164529));
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
var ch__164534 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__164534 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__164534)))
{{
var G__164536 = reader;
var G__164537 = eof_is_error;
var G__164538 = sentinel;
var G__164539 = is_recursive;
reader = G__164536;
eof_is_error = G__164537;
sentinel = G__164538;
is_recursive = G__164539;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__164534)))
{{
var G__164540 = cljs.reader.read_comment.call(null,reader,ch__164534);
var G__164541 = eof_is_error;
var G__164542 = sentinel;
var G__164543 = is_recursive;
reader = G__164540;
eof_is_error = G__164541;
sentinel = G__164542;
is_recursive = G__164543;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__164535 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__164534))?cljs.reader.macros.call(null,ch__164534).call(null,reader,ch__164534):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__164534))?cljs.reader.read_number.call(null,reader,ch__164534):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__164534):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__164535,reader)))
{{
var G__164544 = reader;
var G__164545 = eof_is_error;
var G__164546 = sentinel;
var G__164547 = is_recursive;
reader = G__164544;
eof_is_error = G__164545;
sentinel = G__164546;
is_recursive = G__164547;
continue;
}
} else
{return res__164535;
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
var r__164548 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__164548,true,null,false);
});
