goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____106653 = reader;

if(cljs.core.truth_(and__3546__auto____106653))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____106653;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____106654 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____106654))
{return or__3548__auto____106654;
} else
{var or__3548__auto____106655 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____106655))
{return or__3548__auto____106655;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____106656 = reader;

if(cljs.core.truth_(and__3546__auto____106656))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____106656;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____106657 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____106657))
{return or__3548__auto____106657;
} else
{var or__3548__auto____106658 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____106658))
{return or__3548__auto____106658;
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
var this__106659 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__106659.buffer_atom))))
{var idx__106660 = cljs.core.deref.call(null,this__106659.index_atom);

cljs.core.swap_BANG_.call(null,this__106659.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__106659.s,idx__106660);
} else
{var buf__106661 = cljs.core.deref.call(null,this__106659.buffer_atom);

cljs.core.swap_BANG_.call(null,this__106659.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__106661);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__106662 = this;
return cljs.core.swap_BANG_.call(null,this__106662.buffer_atom,(function (p1__106652_SHARP_){
return cljs.core.cons.call(null,ch,p1__106652_SHARP_);
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
var or__3548__auto____106663 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____106663))
{return or__3548__auto____106663;
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
var or__3548__auto____106664 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____106664))
{return or__3548__auto____106664;
} else
{var and__3546__auto____106666 = (function (){var or__3548__auto____106665 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____106665))
{return or__3548__auto____106665;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____106666))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__106667 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__106667);
return next_ch__106667;
})());
} else
{return and__3546__auto____106666;
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
reader_error.cljs$lang$applyTo = (function (arglist__106668){
var rdr = cljs.core.first(arglist__106668);
var msg = cljs.core.rest(arglist__106668);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____106669 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____106669))
{var and__3546__auto____106670 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____106670))
{var and__3546__auto____106671 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____106671))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____106671;
}
} else
{return and__3546__auto____106670;
}
} else
{return and__3546__auto____106669;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__106672 = (new goog.string.StringBuffer(initch));
var ch__106673 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____106674 = (ch__106673 === null);

if(cljs.core.truth_(or__3548__auto____106674))
{return or__3548__auto____106674;
} else
{var or__3548__auto____106675 = cljs.reader.whitespace_QMARK_.call(null,ch__106673);

if(cljs.core.truth_(or__3548__auto____106675))
{return or__3548__auto____106675;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__106673);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__106673);
return sb__106672.toString();
} else
{{
var G__106676 = (function (){sb__106672.append(ch__106673);
return sb__106672;
})();
var G__106677 = cljs.reader.read_char.call(null,rdr);
sb__106672 = G__106676;
ch__106673 = G__106677;
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
var ch__106678 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____106679 = cljs.core._EQ_.call(null,ch__106678,"n");

if(cljs.core.truth_(or__3548__auto____106679))
{return or__3548__auto____106679;
} else
{var or__3548__auto____106680 = cljs.core._EQ_.call(null,ch__106678,"r");

if(cljs.core.truth_(or__3548__auto____106680))
{return or__3548__auto____106680;
} else
{return (ch__106678 === null);
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
var groups__106681 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__106682 = cljs.core.nth.call(null,groups__106681,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____106683 = (void 0 === group3__106682);

if(cljs.core.truth_(or__3548__auto____106683))
{return or__3548__auto____106683;
} else
{return (group3__106682.length < 1);
}
})())))
{return 0;
} else
{var negate__106685 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__106681,1)))?-1:1);
var vec__106684__106686 = (cljs.core.truth_(cljs.core.nth.call(null,groups__106681,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__106681,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__106681,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__106681,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__106681,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__106681,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__106681,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__106681,7),parseInt.call(null,cljs.core.nth.call(null,groups__106681,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__106687 = cljs.core.nth.call(null,vec__106684__106686,0,null);
var radix__106688 = cljs.core.nth.call(null,vec__106684__106686,1,null);

if(cljs.core.truth_((n__106687 === null)))
{return null;
} else
{return (negate__106685 * parseInt.call(null,n__106687,radix__106688));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__106689 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__106690 = cljs.core.nth.call(null,groups__106689,1);
var denominator__106691 = cljs.core.nth.call(null,groups__106689,2);

return (parseInt.call(null,numinator__106690) / parseInt.call(null,denominator__106691));
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
var ch__106692 = cljs.reader.read_char.call(null,reader);
var mapresult__106693 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__106692);

if(cljs.core.truth_(mapresult__106693))
{return mapresult__106693;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____106694 = cljs.core._EQ_.call(null,"u",ch__106692);

if(cljs.core.truth_(or__3548__auto____106694))
{return or__3548__auto____106694;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__106692);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__106692);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__106692);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__106695 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__106695)))
{{
var G__106696 = cljs.reader.read_char.call(null,rdr);
ch__106695 = G__106696;
continue;
}
} else
{return ch__106695;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__106697 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__106698 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__106698))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__106698)))
{return a__106697;
} else
{var temp__3695__auto____106699 = cljs.core.get.call(null,cljs.reader.macros,ch__106698);

if(cljs.core.truth_(temp__3695__auto____106699))
{var macrofn__106700 = temp__3695__auto____106699;

var mret__106701 = macrofn__106700.call(null,rdr,ch__106698);

{
var G__106703 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__106701,rdr))?a__106697:cljs.core.conj.call(null,a__106697,mret__106701));
a__106697 = G__106703;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__106698);
var o__106702 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__106704 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__106702,rdr))?a__106697:cljs.core.conj.call(null,a__106697,o__106702));
a__106697 = G__106704;
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
var ch__106705 = cljs.reader.read_char.call(null,rdr);
var dm__106706 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__106705);

if(cljs.core.truth_(dm__106706))
{return dm__106706.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__106705);
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
var l__106707 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__106707))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__106707);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__106708 = (new goog.string.StringBuffer(initch));
var ch__106709 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____106710 = (ch__106709 === null);

if(cljs.core.truth_(or__3548__auto____106710))
{return or__3548__auto____106710;
} else
{var or__3548__auto____106711 = cljs.reader.whitespace_QMARK_.call(null,ch__106709);

if(cljs.core.truth_(or__3548__auto____106711))
{return or__3548__auto____106711;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__106709);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__106709);
var s__106712 = buffer__106708.toString();

var or__3548__auto____106713 = cljs.reader.match_number.call(null,s__106712);

if(cljs.core.truth_(or__3548__auto____106713))
{return or__3548__auto____106713;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__106712,"]");
}
} else
{{
var G__106714 = (function (){buffer__106708.append(ch__106709);
return buffer__106708;
})();
var G__106715 = cljs.reader.read_char.call(null,reader);
buffer__106708 = G__106714;
ch__106709 = G__106715;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__106716 = (new goog.string.StringBuffer());
var ch__106717 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__106717 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__106717)))
{{
var G__106718 = (function (){buffer__106716.append(cljs.reader.escape_char.call(null,buffer__106716,reader));
return buffer__106716;
})();
var G__106719 = cljs.reader.read_char.call(null,reader);
buffer__106716 = G__106718;
ch__106717 = G__106719;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__106717)))
{return buffer__106716.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__106720 = (function (){buffer__106716.append(ch__106717);
return buffer__106716;
})();
var G__106721 = cljs.reader.read_char.call(null,reader);
buffer__106716 = G__106720;
ch__106717 = G__106721;
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
var token__106722 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__106722,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__106722,0,token__106722.indexOf("/")),cljs.core.subs.call(null,token__106722,(token__106722.indexOf("/") + 1),token__106722.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__106722,cljs.core.symbol.call(null,token__106722));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__106724 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__106723__106725 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__106724);
var token__106726 = cljs.core.nth.call(null,vec__106723__106725,0,null);
var ns__106727 = cljs.core.nth.call(null,vec__106723__106725,1,null);
var name__106728 = cljs.core.nth.call(null,vec__106723__106725,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____106730 = (function (){var and__3546__auto____106729 = cljs.core.not.call(null,(void 0 === ns__106727));

if(cljs.core.truth_(and__3546__auto____106729))
{return (ns__106727.substring((ns__106727.length - 2),ns__106727.length) === ":/");
} else
{return and__3546__auto____106729;
}
})();

if(cljs.core.truth_(or__3548__auto____106730))
{return or__3548__auto____106730;
} else
{var or__3548__auto____106731 = ((name__106728[(name__106728.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____106731))
{return or__3548__auto____106731;
} else
{return cljs.core.not.call(null,(token__106726.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__106726);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__106727.substring(0,ns__106727.indexOf("/")),name__106728);
} else
{return cljs.core.keyword.call(null,token__106726);
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
var m__106732 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__106732)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__106733 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____106734 = o__106733;

if(cljs.core.truth_((function (){var and__3546__auto____106735 = x__451__auto____106734;

if(cljs.core.truth_(and__3546__auto____106735))
{var and__3546__auto____106736 = x__451__auto____106734.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____106736))
{return cljs.core.not.call(null,x__451__auto____106734.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____106736;
}
} else
{return and__3546__auto____106735;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____106734);
}
})()))
{return cljs.core.with_meta.call(null,o__106733,cljs.core.merge.call(null,cljs.core.meta.call(null,o__106733),m__106732));
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
var ch__106737 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__106737 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__106737)))
{{
var G__106739 = reader;
var G__106740 = eof_is_error;
var G__106741 = sentinel;
var G__106742 = is_recursive;
reader = G__106739;
eof_is_error = G__106740;
sentinel = G__106741;
is_recursive = G__106742;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__106737)))
{{
var G__106743 = cljs.reader.read_comment.call(null,reader,ch__106737);
var G__106744 = eof_is_error;
var G__106745 = sentinel;
var G__106746 = is_recursive;
reader = G__106743;
eof_is_error = G__106744;
sentinel = G__106745;
is_recursive = G__106746;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__106738 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__106737))?cljs.reader.macros.call(null,ch__106737).call(null,reader,ch__106737):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__106737))?cljs.reader.read_number.call(null,reader,ch__106737):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__106737):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__106738,reader)))
{{
var G__106747 = reader;
var G__106748 = eof_is_error;
var G__106749 = sentinel;
var G__106750 = is_recursive;
reader = G__106747;
eof_is_error = G__106748;
sentinel = G__106749;
is_recursive = G__106750;
continue;
}
} else
{return res__106738;
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
var r__106751 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__106751,true,null,false);
});
