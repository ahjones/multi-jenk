goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____183668 = reader;

if(cljs.core.truth_(and__3546__auto____183668))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____183668;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____183669 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____183669))
{return or__3548__auto____183669;
} else
{var or__3548__auto____183670 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____183670))
{return or__3548__auto____183670;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____183671 = reader;

if(cljs.core.truth_(and__3546__auto____183671))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____183671;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____183672 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____183672))
{return or__3548__auto____183672;
} else
{var or__3548__auto____183673 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____183673))
{return or__3548__auto____183673;
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
var this__183674 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__183674.buffer_atom))))
{var idx__183675 = cljs.core.deref.call(null,this__183674.index_atom);

cljs.core.swap_BANG_.call(null,this__183674.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__183674.s,idx__183675);
} else
{var buf__183676 = cljs.core.deref.call(null,this__183674.buffer_atom);

cljs.core.swap_BANG_.call(null,this__183674.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__183676);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__183677 = this;
return cljs.core.swap_BANG_.call(null,this__183677.buffer_atom,(function (p1__183667_SHARP_){
return cljs.core.cons.call(null,ch,p1__183667_SHARP_);
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
var or__3548__auto____183678 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____183678))
{return or__3548__auto____183678;
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
var or__3548__auto____183679 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____183679))
{return or__3548__auto____183679;
} else
{var and__3546__auto____183681 = (function (){var or__3548__auto____183680 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____183680))
{return or__3548__auto____183680;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____183681))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__183682 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__183682);
return next_ch__183682;
})());
} else
{return and__3546__auto____183681;
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
reader_error.cljs$lang$applyTo = (function (arglist__183683){
var rdr = cljs.core.first(arglist__183683);
var msg = cljs.core.rest(arglist__183683);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____183684 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____183684))
{var and__3546__auto____183685 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____183685))
{var and__3546__auto____183686 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____183686))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____183686;
}
} else
{return and__3546__auto____183685;
}
} else
{return and__3546__auto____183684;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__183687 = (new goog.string.StringBuffer(initch));
var ch__183688 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____183689 = (ch__183688 === null);

if(cljs.core.truth_(or__3548__auto____183689))
{return or__3548__auto____183689;
} else
{var or__3548__auto____183690 = cljs.reader.whitespace_QMARK_.call(null,ch__183688);

if(cljs.core.truth_(or__3548__auto____183690))
{return or__3548__auto____183690;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__183688);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__183688);
return sb__183687.toString();
} else
{{
var G__183691 = (function (){sb__183687.append(ch__183688);
return sb__183687;
})();
var G__183692 = cljs.reader.read_char.call(null,rdr);
sb__183687 = G__183691;
ch__183688 = G__183692;
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
var ch__183693 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____183694 = cljs.core._EQ_.call(null,ch__183693,"n");

if(cljs.core.truth_(or__3548__auto____183694))
{return or__3548__auto____183694;
} else
{var or__3548__auto____183695 = cljs.core._EQ_.call(null,ch__183693,"r");

if(cljs.core.truth_(or__3548__auto____183695))
{return or__3548__auto____183695;
} else
{return (ch__183693 === null);
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
var groups__183696 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__183697 = cljs.core.nth.call(null,groups__183696,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____183698 = (void 0 === group3__183697);

if(cljs.core.truth_(or__3548__auto____183698))
{return or__3548__auto____183698;
} else
{return (group3__183697.length < 1);
}
})())))
{return 0;
} else
{var negate__183700 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__183696,1)))?-1:1);
var vec__183699__183701 = (cljs.core.truth_(cljs.core.nth.call(null,groups__183696,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__183696,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__183696,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__183696,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__183696,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__183696,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__183696,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__183696,7),parseInt.call(null,cljs.core.nth.call(null,groups__183696,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__183702 = cljs.core.nth.call(null,vec__183699__183701,0,null);
var radix__183703 = cljs.core.nth.call(null,vec__183699__183701,1,null);

if(cljs.core.truth_((n__183702 === null)))
{return null;
} else
{return (negate__183700 * parseInt.call(null,n__183702,radix__183703));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__183704 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__183705 = cljs.core.nth.call(null,groups__183704,1);
var denominator__183706 = cljs.core.nth.call(null,groups__183704,2);

return (parseInt.call(null,numinator__183705) / parseInt.call(null,denominator__183706));
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
var ch__183707 = cljs.reader.read_char.call(null,reader);
var mapresult__183708 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__183707);

if(cljs.core.truth_(mapresult__183708))
{return mapresult__183708;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____183709 = cljs.core._EQ_.call(null,"u",ch__183707);

if(cljs.core.truth_(or__3548__auto____183709))
{return or__3548__auto____183709;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__183707);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__183707);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__183707);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__183710 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__183710)))
{{
var G__183711 = cljs.reader.read_char.call(null,rdr);
ch__183710 = G__183711;
continue;
}
} else
{return ch__183710;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__183712 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__183713 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__183713))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__183713)))
{return a__183712;
} else
{var temp__3695__auto____183714 = cljs.core.get.call(null,cljs.reader.macros,ch__183713);

if(cljs.core.truth_(temp__3695__auto____183714))
{var macrofn__183715 = temp__3695__auto____183714;

var mret__183716 = macrofn__183715.call(null,rdr,ch__183713);

{
var G__183718 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__183716,rdr))?a__183712:cljs.core.conj.call(null,a__183712,mret__183716));
a__183712 = G__183718;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__183713);
var o__183717 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__183719 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__183717,rdr))?a__183712:cljs.core.conj.call(null,a__183712,o__183717));
a__183712 = G__183719;
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
var ch__183720 = cljs.reader.read_char.call(null,rdr);
var dm__183721 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__183720);

if(cljs.core.truth_(dm__183721))
{return dm__183721.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__183720);
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
var l__183722 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__183722))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__183722);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__183723 = (new goog.string.StringBuffer(initch));
var ch__183724 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____183725 = (ch__183724 === null);

if(cljs.core.truth_(or__3548__auto____183725))
{return or__3548__auto____183725;
} else
{var or__3548__auto____183726 = cljs.reader.whitespace_QMARK_.call(null,ch__183724);

if(cljs.core.truth_(or__3548__auto____183726))
{return or__3548__auto____183726;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__183724);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__183724);
var s__183727 = buffer__183723.toString();

var or__3548__auto____183728 = cljs.reader.match_number.call(null,s__183727);

if(cljs.core.truth_(or__3548__auto____183728))
{return or__3548__auto____183728;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__183727,"]");
}
} else
{{
var G__183729 = (function (){buffer__183723.append(ch__183724);
return buffer__183723;
})();
var G__183730 = cljs.reader.read_char.call(null,reader);
buffer__183723 = G__183729;
ch__183724 = G__183730;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__183731 = (new goog.string.StringBuffer());
var ch__183732 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__183732 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__183732)))
{{
var G__183733 = (function (){buffer__183731.append(cljs.reader.escape_char.call(null,buffer__183731,reader));
return buffer__183731;
})();
var G__183734 = cljs.reader.read_char.call(null,reader);
buffer__183731 = G__183733;
ch__183732 = G__183734;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__183732)))
{return buffer__183731.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__183735 = (function (){buffer__183731.append(ch__183732);
return buffer__183731;
})();
var G__183736 = cljs.reader.read_char.call(null,reader);
buffer__183731 = G__183735;
ch__183732 = G__183736;
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
var token__183737 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__183737,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__183737,0,token__183737.indexOf("/")),cljs.core.subs.call(null,token__183737,(token__183737.indexOf("/") + 1),token__183737.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__183737,cljs.core.symbol.call(null,token__183737));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__183739 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__183738__183740 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__183739);
var token__183741 = cljs.core.nth.call(null,vec__183738__183740,0,null);
var ns__183742 = cljs.core.nth.call(null,vec__183738__183740,1,null);
var name__183743 = cljs.core.nth.call(null,vec__183738__183740,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____183745 = (function (){var and__3546__auto____183744 = cljs.core.not.call(null,(void 0 === ns__183742));

if(cljs.core.truth_(and__3546__auto____183744))
{return (ns__183742.substring((ns__183742.length - 2),ns__183742.length) === ":/");
} else
{return and__3546__auto____183744;
}
})();

if(cljs.core.truth_(or__3548__auto____183745))
{return or__3548__auto____183745;
} else
{var or__3548__auto____183746 = ((name__183743[(name__183743.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____183746))
{return or__3548__auto____183746;
} else
{return cljs.core.not.call(null,(token__183741.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__183741);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__183742.substring(0,ns__183742.indexOf("/")),name__183743);
} else
{return cljs.core.keyword.call(null,token__183741);
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
var m__183747 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__183747)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__183748 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____183749 = o__183748;

if(cljs.core.truth_((function (){var and__3546__auto____183750 = x__451__auto____183749;

if(cljs.core.truth_(and__3546__auto____183750))
{var and__3546__auto____183751 = x__451__auto____183749.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____183751))
{return cljs.core.not.call(null,x__451__auto____183749.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____183751;
}
} else
{return and__3546__auto____183750;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____183749);
}
})()))
{return cljs.core.with_meta.call(null,o__183748,cljs.core.merge.call(null,cljs.core.meta.call(null,o__183748),m__183747));
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
var ch__183752 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__183752 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__183752)))
{{
var G__183754 = reader;
var G__183755 = eof_is_error;
var G__183756 = sentinel;
var G__183757 = is_recursive;
reader = G__183754;
eof_is_error = G__183755;
sentinel = G__183756;
is_recursive = G__183757;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__183752)))
{{
var G__183758 = cljs.reader.read_comment.call(null,reader,ch__183752);
var G__183759 = eof_is_error;
var G__183760 = sentinel;
var G__183761 = is_recursive;
reader = G__183758;
eof_is_error = G__183759;
sentinel = G__183760;
is_recursive = G__183761;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__183753 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__183752))?cljs.reader.macros.call(null,ch__183752).call(null,reader,ch__183752):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__183752))?cljs.reader.read_number.call(null,reader,ch__183752):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__183752):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__183753,reader)))
{{
var G__183762 = reader;
var G__183763 = eof_is_error;
var G__183764 = sentinel;
var G__183765 = is_recursive;
reader = G__183762;
eof_is_error = G__183763;
sentinel = G__183764;
is_recursive = G__183765;
continue;
}
} else
{return res__183753;
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
var r__183766 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__183766,true,null,false);
});
