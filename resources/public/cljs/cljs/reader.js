goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____166583 = reader;

if(cljs.core.truth_(and__3546__auto____166583))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____166583;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____166584 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____166584))
{return or__3548__auto____166584;
} else
{var or__3548__auto____166585 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____166585))
{return or__3548__auto____166585;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____166586 = reader;

if(cljs.core.truth_(and__3546__auto____166586))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____166586;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____166587 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____166587))
{return or__3548__auto____166587;
} else
{var or__3548__auto____166588 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____166588))
{return or__3548__auto____166588;
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
var this__166589 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__166589.buffer_atom))))
{var idx__166590 = cljs.core.deref.call(null,this__166589.index_atom);

cljs.core.swap_BANG_.call(null,this__166589.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__166589.s,idx__166590);
} else
{var buf__166591 = cljs.core.deref.call(null,this__166589.buffer_atom);

cljs.core.swap_BANG_.call(null,this__166589.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__166591);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__166592 = this;
return cljs.core.swap_BANG_.call(null,this__166592.buffer_atom,(function (p1__166582_SHARP_){
return cljs.core.cons.call(null,ch,p1__166582_SHARP_);
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
var or__3548__auto____166593 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____166593))
{return or__3548__auto____166593;
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
var or__3548__auto____166594 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____166594))
{return or__3548__auto____166594;
} else
{var and__3546__auto____166596 = (function (){var or__3548__auto____166595 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____166595))
{return or__3548__auto____166595;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____166596))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__166597 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__166597);
return next_ch__166597;
})());
} else
{return and__3546__auto____166596;
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
reader_error.cljs$lang$applyTo = (function (arglist__166598){
var rdr = cljs.core.first(arglist__166598);
var msg = cljs.core.rest(arglist__166598);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____166599 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____166599))
{var and__3546__auto____166600 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____166600))
{var and__3546__auto____166601 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____166601))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____166601;
}
} else
{return and__3546__auto____166600;
}
} else
{return and__3546__auto____166599;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__166602 = (new goog.string.StringBuffer(initch));
var ch__166603 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____166604 = (ch__166603 === null);

if(cljs.core.truth_(or__3548__auto____166604))
{return or__3548__auto____166604;
} else
{var or__3548__auto____166605 = cljs.reader.whitespace_QMARK_.call(null,ch__166603);

if(cljs.core.truth_(or__3548__auto____166605))
{return or__3548__auto____166605;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__166603);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__166603);
return sb__166602.toString();
} else
{{
var G__166606 = (function (){sb__166602.append(ch__166603);
return sb__166602;
})();
var G__166607 = cljs.reader.read_char.call(null,rdr);
sb__166602 = G__166606;
ch__166603 = G__166607;
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
var ch__166608 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____166609 = cljs.core._EQ_.call(null,ch__166608,"n");

if(cljs.core.truth_(or__3548__auto____166609))
{return or__3548__auto____166609;
} else
{var or__3548__auto____166610 = cljs.core._EQ_.call(null,ch__166608,"r");

if(cljs.core.truth_(or__3548__auto____166610))
{return or__3548__auto____166610;
} else
{return (ch__166608 === null);
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
var groups__166611 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__166612 = cljs.core.nth.call(null,groups__166611,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____166613 = (void 0 === group3__166612);

if(cljs.core.truth_(or__3548__auto____166613))
{return or__3548__auto____166613;
} else
{return (group3__166612.length < 1);
}
})())))
{return 0;
} else
{var negate__166615 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__166611,1)))?-1:1);
var vec__166614__166616 = (cljs.core.truth_(cljs.core.nth.call(null,groups__166611,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__166611,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__166611,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__166611,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__166611,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__166611,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__166611,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__166611,7),parseInt.call(null,cljs.core.nth.call(null,groups__166611,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__166617 = cljs.core.nth.call(null,vec__166614__166616,0,null);
var radix__166618 = cljs.core.nth.call(null,vec__166614__166616,1,null);

if(cljs.core.truth_((n__166617 === null)))
{return null;
} else
{return (negate__166615 * parseInt.call(null,n__166617,radix__166618));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__166619 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__166620 = cljs.core.nth.call(null,groups__166619,1);
var denominator__166621 = cljs.core.nth.call(null,groups__166619,2);

return (parseInt.call(null,numinator__166620) / parseInt.call(null,denominator__166621));
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
var ch__166622 = cljs.reader.read_char.call(null,reader);
var mapresult__166623 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__166622);

if(cljs.core.truth_(mapresult__166623))
{return mapresult__166623;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____166624 = cljs.core._EQ_.call(null,"u",ch__166622);

if(cljs.core.truth_(or__3548__auto____166624))
{return or__3548__auto____166624;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__166622);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__166622);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__166622);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__166625 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__166625)))
{{
var G__166626 = cljs.reader.read_char.call(null,rdr);
ch__166625 = G__166626;
continue;
}
} else
{return ch__166625;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__166627 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__166628 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__166628))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__166628)))
{return a__166627;
} else
{var temp__3695__auto____166629 = cljs.core.get.call(null,cljs.reader.macros,ch__166628);

if(cljs.core.truth_(temp__3695__auto____166629))
{var macrofn__166630 = temp__3695__auto____166629;

var mret__166631 = macrofn__166630.call(null,rdr,ch__166628);

{
var G__166633 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__166631,rdr))?a__166627:cljs.core.conj.call(null,a__166627,mret__166631));
a__166627 = G__166633;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__166628);
var o__166632 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__166634 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__166632,rdr))?a__166627:cljs.core.conj.call(null,a__166627,o__166632));
a__166627 = G__166634;
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
var ch__166635 = cljs.reader.read_char.call(null,rdr);
var dm__166636 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__166635);

if(cljs.core.truth_(dm__166636))
{return dm__166636.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__166635);
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
var l__166637 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__166637))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__166637);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__166638 = (new goog.string.StringBuffer(initch));
var ch__166639 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____166640 = (ch__166639 === null);

if(cljs.core.truth_(or__3548__auto____166640))
{return or__3548__auto____166640;
} else
{var or__3548__auto____166641 = cljs.reader.whitespace_QMARK_.call(null,ch__166639);

if(cljs.core.truth_(or__3548__auto____166641))
{return or__3548__auto____166641;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__166639);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__166639);
var s__166642 = buffer__166638.toString();

var or__3548__auto____166643 = cljs.reader.match_number.call(null,s__166642);

if(cljs.core.truth_(or__3548__auto____166643))
{return or__3548__auto____166643;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__166642,"]");
}
} else
{{
var G__166644 = (function (){buffer__166638.append(ch__166639);
return buffer__166638;
})();
var G__166645 = cljs.reader.read_char.call(null,reader);
buffer__166638 = G__166644;
ch__166639 = G__166645;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__166646 = (new goog.string.StringBuffer());
var ch__166647 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__166647 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__166647)))
{{
var G__166648 = (function (){buffer__166646.append(cljs.reader.escape_char.call(null,buffer__166646,reader));
return buffer__166646;
})();
var G__166649 = cljs.reader.read_char.call(null,reader);
buffer__166646 = G__166648;
ch__166647 = G__166649;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__166647)))
{return buffer__166646.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__166650 = (function (){buffer__166646.append(ch__166647);
return buffer__166646;
})();
var G__166651 = cljs.reader.read_char.call(null,reader);
buffer__166646 = G__166650;
ch__166647 = G__166651;
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
var token__166652 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__166652,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__166652,0,token__166652.indexOf("/")),cljs.core.subs.call(null,token__166652,(token__166652.indexOf("/") + 1),token__166652.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__166652,cljs.core.symbol.call(null,token__166652));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__166654 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__166653__166655 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__166654);
var token__166656 = cljs.core.nth.call(null,vec__166653__166655,0,null);
var ns__166657 = cljs.core.nth.call(null,vec__166653__166655,1,null);
var name__166658 = cljs.core.nth.call(null,vec__166653__166655,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____166660 = (function (){var and__3546__auto____166659 = cljs.core.not.call(null,(void 0 === ns__166657));

if(cljs.core.truth_(and__3546__auto____166659))
{return (ns__166657.substring((ns__166657.length - 2),ns__166657.length) === ":/");
} else
{return and__3546__auto____166659;
}
})();

if(cljs.core.truth_(or__3548__auto____166660))
{return or__3548__auto____166660;
} else
{var or__3548__auto____166661 = ((name__166658[(name__166658.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____166661))
{return or__3548__auto____166661;
} else
{return cljs.core.not.call(null,(token__166656.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__166656);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__166657.substring(0,ns__166657.indexOf("/")),name__166658);
} else
{return cljs.core.keyword.call(null,token__166656);
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
var m__166662 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__166662)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__166663 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____166664 = o__166663;

if(cljs.core.truth_((function (){var and__3546__auto____166665 = x__451__auto____166664;

if(cljs.core.truth_(and__3546__auto____166665))
{var and__3546__auto____166666 = x__451__auto____166664.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____166666))
{return cljs.core.not.call(null,x__451__auto____166664.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____166666;
}
} else
{return and__3546__auto____166665;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____166664);
}
})()))
{return cljs.core.with_meta.call(null,o__166663,cljs.core.merge.call(null,cljs.core.meta.call(null,o__166663),m__166662));
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
var ch__166667 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__166667 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__166667)))
{{
var G__166669 = reader;
var G__166670 = eof_is_error;
var G__166671 = sentinel;
var G__166672 = is_recursive;
reader = G__166669;
eof_is_error = G__166670;
sentinel = G__166671;
is_recursive = G__166672;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__166667)))
{{
var G__166673 = cljs.reader.read_comment.call(null,reader,ch__166667);
var G__166674 = eof_is_error;
var G__166675 = sentinel;
var G__166676 = is_recursive;
reader = G__166673;
eof_is_error = G__166674;
sentinel = G__166675;
is_recursive = G__166676;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__166668 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__166667))?cljs.reader.macros.call(null,ch__166667).call(null,reader,ch__166667):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__166667))?cljs.reader.read_number.call(null,reader,ch__166667):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__166667):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__166668,reader)))
{{
var G__166677 = reader;
var G__166678 = eof_is_error;
var G__166679 = sentinel;
var G__166680 = is_recursive;
reader = G__166677;
eof_is_error = G__166678;
sentinel = G__166679;
is_recursive = G__166680;
continue;
}
} else
{return res__166668;
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
var r__166681 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__166681,true,null,false);
});
