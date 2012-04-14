goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____321540 = reader;

if(cljs.core.truth_(and__3546__auto____321540))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____321540;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____321541 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____321541))
{return or__3548__auto____321541;
} else
{var or__3548__auto____321542 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____321542))
{return or__3548__auto____321542;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____321543 = reader;

if(cljs.core.truth_(and__3546__auto____321543))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____321543;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____321544 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____321544))
{return or__3548__auto____321544;
} else
{var or__3548__auto____321545 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____321545))
{return or__3548__auto____321545;
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
var this__321546 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__321546.buffer_atom))))
{var idx__321547 = cljs.core.deref.call(null,this__321546.index_atom);

cljs.core.swap_BANG_.call(null,this__321546.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__321546.s,idx__321547);
} else
{var buf__321548 = cljs.core.deref.call(null,this__321546.buffer_atom);

cljs.core.swap_BANG_.call(null,this__321546.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__321548);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__321549 = this;
return cljs.core.swap_BANG_.call(null,this__321549.buffer_atom,(function (p1__321539_SHARP_){
return cljs.core.cons.call(null,ch,p1__321539_SHARP_);
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
var or__3548__auto____321550 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____321550))
{return or__3548__auto____321550;
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
var or__3548__auto____321551 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____321551))
{return or__3548__auto____321551;
} else
{var and__3546__auto____321553 = (function (){var or__3548__auto____321552 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____321552))
{return or__3548__auto____321552;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____321553))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__321554 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__321554);
return next_ch__321554;
})());
} else
{return and__3546__auto____321553;
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
reader_error.cljs$lang$applyTo = (function (arglist__321555){
var rdr = cljs.core.first(arglist__321555);
var msg = cljs.core.rest(arglist__321555);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____321556 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____321556))
{var and__3546__auto____321557 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____321557))
{var and__3546__auto____321558 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____321558))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____321558;
}
} else
{return and__3546__auto____321557;
}
} else
{return and__3546__auto____321556;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__321559 = (new goog.string.StringBuffer(initch));
var ch__321560 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____321561 = (ch__321560 === null);

if(cljs.core.truth_(or__3548__auto____321561))
{return or__3548__auto____321561;
} else
{var or__3548__auto____321562 = cljs.reader.whitespace_QMARK_.call(null,ch__321560);

if(cljs.core.truth_(or__3548__auto____321562))
{return or__3548__auto____321562;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__321560);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__321560);
return sb__321559.toString();
} else
{{
var G__321563 = (function (){sb__321559.append(ch__321560);
return sb__321559;
})();
var G__321564 = cljs.reader.read_char.call(null,rdr);
sb__321559 = G__321563;
ch__321560 = G__321564;
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
var ch__321565 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____321566 = cljs.core._EQ_.call(null,ch__321565,"n");

if(cljs.core.truth_(or__3548__auto____321566))
{return or__3548__auto____321566;
} else
{var or__3548__auto____321567 = cljs.core._EQ_.call(null,ch__321565,"r");

if(cljs.core.truth_(or__3548__auto____321567))
{return or__3548__auto____321567;
} else
{return (ch__321565 === null);
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
var groups__321568 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__321569 = cljs.core.nth.call(null,groups__321568,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____321570 = (void 0 === group3__321569);

if(cljs.core.truth_(or__3548__auto____321570))
{return or__3548__auto____321570;
} else
{return (group3__321569.length < 1);
}
})())))
{return 0;
} else
{var negate__321572 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__321568,1)))?-1:1);
var vec__321571__321573 = (cljs.core.truth_(cljs.core.nth.call(null,groups__321568,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__321568,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__321568,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__321568,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__321568,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__321568,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__321568,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__321568,7),parseInt.call(null,cljs.core.nth.call(null,groups__321568,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__321574 = cljs.core.nth.call(null,vec__321571__321573,0,null);
var radix__321575 = cljs.core.nth.call(null,vec__321571__321573,1,null);

if(cljs.core.truth_((n__321574 === null)))
{return null;
} else
{return (negate__321572 * parseInt.call(null,n__321574,radix__321575));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__321576 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__321577 = cljs.core.nth.call(null,groups__321576,1);
var denominator__321578 = cljs.core.nth.call(null,groups__321576,2);

return (parseInt.call(null,numinator__321577) / parseInt.call(null,denominator__321578));
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
var ch__321579 = cljs.reader.read_char.call(null,reader);
var mapresult__321580 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__321579);

if(cljs.core.truth_(mapresult__321580))
{return mapresult__321580;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____321581 = cljs.core._EQ_.call(null,"u",ch__321579);

if(cljs.core.truth_(or__3548__auto____321581))
{return or__3548__auto____321581;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__321579);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__321579);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__321579);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__321582 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__321582)))
{{
var G__321583 = cljs.reader.read_char.call(null,rdr);
ch__321582 = G__321583;
continue;
}
} else
{return ch__321582;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__321584 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__321585 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__321585))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__321585)))
{return a__321584;
} else
{var temp__3695__auto____321586 = cljs.core.get.call(null,cljs.reader.macros,ch__321585);

if(cljs.core.truth_(temp__3695__auto____321586))
{var macrofn__321587 = temp__3695__auto____321586;

var mret__321588 = macrofn__321587.call(null,rdr,ch__321585);

{
var G__321590 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__321588,rdr))?a__321584:cljs.core.conj.call(null,a__321584,mret__321588));
a__321584 = G__321590;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__321585);
var o__321589 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__321591 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__321589,rdr))?a__321584:cljs.core.conj.call(null,a__321584,o__321589));
a__321584 = G__321591;
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
var ch__321592 = cljs.reader.read_char.call(null,rdr);
var dm__321593 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__321592);

if(cljs.core.truth_(dm__321593))
{return dm__321593.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__321592);
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
var l__321594 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__321594))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__321594);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__321595 = (new goog.string.StringBuffer(initch));
var ch__321596 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____321597 = (ch__321596 === null);

if(cljs.core.truth_(or__3548__auto____321597))
{return or__3548__auto____321597;
} else
{var or__3548__auto____321598 = cljs.reader.whitespace_QMARK_.call(null,ch__321596);

if(cljs.core.truth_(or__3548__auto____321598))
{return or__3548__auto____321598;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__321596);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__321596);
var s__321599 = buffer__321595.toString();

var or__3548__auto____321600 = cljs.reader.match_number.call(null,s__321599);

if(cljs.core.truth_(or__3548__auto____321600))
{return or__3548__auto____321600;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__321599,"]");
}
} else
{{
var G__321601 = (function (){buffer__321595.append(ch__321596);
return buffer__321595;
})();
var G__321602 = cljs.reader.read_char.call(null,reader);
buffer__321595 = G__321601;
ch__321596 = G__321602;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__321603 = (new goog.string.StringBuffer());
var ch__321604 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__321604 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__321604)))
{{
var G__321605 = (function (){buffer__321603.append(cljs.reader.escape_char.call(null,buffer__321603,reader));
return buffer__321603;
})();
var G__321606 = cljs.reader.read_char.call(null,reader);
buffer__321603 = G__321605;
ch__321604 = G__321606;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__321604)))
{return buffer__321603.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__321607 = (function (){buffer__321603.append(ch__321604);
return buffer__321603;
})();
var G__321608 = cljs.reader.read_char.call(null,reader);
buffer__321603 = G__321607;
ch__321604 = G__321608;
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
var token__321609 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__321609,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__321609,0,token__321609.indexOf("/")),cljs.core.subs.call(null,token__321609,(token__321609.indexOf("/") + 1),token__321609.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__321609,cljs.core.symbol.call(null,token__321609));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__321611 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__321610__321612 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__321611);
var token__321613 = cljs.core.nth.call(null,vec__321610__321612,0,null);
var ns__321614 = cljs.core.nth.call(null,vec__321610__321612,1,null);
var name__321615 = cljs.core.nth.call(null,vec__321610__321612,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____321617 = (function (){var and__3546__auto____321616 = cljs.core.not.call(null,(void 0 === ns__321614));

if(cljs.core.truth_(and__3546__auto____321616))
{return (ns__321614.substring((ns__321614.length - 2),ns__321614.length) === ":/");
} else
{return and__3546__auto____321616;
}
})();

if(cljs.core.truth_(or__3548__auto____321617))
{return or__3548__auto____321617;
} else
{var or__3548__auto____321618 = ((name__321615[(name__321615.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____321618))
{return or__3548__auto____321618;
} else
{return cljs.core.not.call(null,(token__321613.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__321613);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__321614.substring(0,ns__321614.indexOf("/")),name__321615);
} else
{return cljs.core.keyword.call(null,token__321613);
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
var m__321619 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__321619)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__321620 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____321621 = o__321620;

if(cljs.core.truth_((function (){var and__3546__auto____321622 = x__451__auto____321621;

if(cljs.core.truth_(and__3546__auto____321622))
{var and__3546__auto____321623 = x__451__auto____321621.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____321623))
{return cljs.core.not.call(null,x__451__auto____321621.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____321623;
}
} else
{return and__3546__auto____321622;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____321621);
}
})()))
{return cljs.core.with_meta.call(null,o__321620,cljs.core.merge.call(null,cljs.core.meta.call(null,o__321620),m__321619));
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
var ch__321624 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__321624 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__321624)))
{{
var G__321626 = reader;
var G__321627 = eof_is_error;
var G__321628 = sentinel;
var G__321629 = is_recursive;
reader = G__321626;
eof_is_error = G__321627;
sentinel = G__321628;
is_recursive = G__321629;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__321624)))
{{
var G__321630 = cljs.reader.read_comment.call(null,reader,ch__321624);
var G__321631 = eof_is_error;
var G__321632 = sentinel;
var G__321633 = is_recursive;
reader = G__321630;
eof_is_error = G__321631;
sentinel = G__321632;
is_recursive = G__321633;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__321625 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__321624))?cljs.reader.macros.call(null,ch__321624).call(null,reader,ch__321624):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__321624))?cljs.reader.read_number.call(null,reader,ch__321624):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__321624):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__321625,reader)))
{{
var G__321634 = reader;
var G__321635 = eof_is_error;
var G__321636 = sentinel;
var G__321637 = is_recursive;
reader = G__321634;
eof_is_error = G__321635;
sentinel = G__321636;
is_recursive = G__321637;
continue;
}
} else
{return res__321625;
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
var r__321638 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__321638,true,null,false);
});
