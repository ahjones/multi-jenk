goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____15823 = reader;

if(cljs.core.truth_(and__3546__auto____15823))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____15823;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____15824 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____15824))
{return or__3548__auto____15824;
} else
{var or__3548__auto____15825 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____15825))
{return or__3548__auto____15825;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____15826 = reader;

if(cljs.core.truth_(and__3546__auto____15826))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____15826;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____15827 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____15827))
{return or__3548__auto____15827;
} else
{var or__3548__auto____15828 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____15828))
{return or__3548__auto____15828;
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
var this__15829 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__15829.buffer_atom))))
{var idx__15830 = cljs.core.deref.call(null,this__15829.index_atom);

cljs.core.swap_BANG_.call(null,this__15829.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__15829.s,idx__15830);
} else
{var buf__15831 = cljs.core.deref.call(null,this__15829.buffer_atom);

cljs.core.swap_BANG_.call(null,this__15829.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__15831);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__15832 = this;
return cljs.core.swap_BANG_.call(null,this__15832.buffer_atom,(function (p1__15822_SHARP_){
return cljs.core.cons.call(null,ch,p1__15822_SHARP_);
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
var or__3548__auto____15833 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____15833))
{return or__3548__auto____15833;
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
var or__3548__auto____15834 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____15834))
{return or__3548__auto____15834;
} else
{var and__3546__auto____15836 = (function (){var or__3548__auto____15835 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____15835))
{return or__3548__auto____15835;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____15836))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__15837 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__15837);
return next_ch__15837;
})());
} else
{return and__3546__auto____15836;
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
reader_error.cljs$lang$applyTo = (function (arglist__15838){
var rdr = cljs.core.first(arglist__15838);
var msg = cljs.core.rest(arglist__15838);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____15839 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____15839))
{var and__3546__auto____15840 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____15840))
{var and__3546__auto____15841 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____15841))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____15841;
}
} else
{return and__3546__auto____15840;
}
} else
{return and__3546__auto____15839;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__15842 = (new goog.string.StringBuffer(initch));
var ch__15843 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15844 = (ch__15843 === null);

if(cljs.core.truth_(or__3548__auto____15844))
{return or__3548__auto____15844;
} else
{var or__3548__auto____15845 = cljs.reader.whitespace_QMARK_.call(null,ch__15843);

if(cljs.core.truth_(or__3548__auto____15845))
{return or__3548__auto____15845;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__15843);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__15843);
return sb__15842.toString();
} else
{{
var G__15846 = (function (){sb__15842.append(ch__15843);
return sb__15842;
})();
var G__15847 = cljs.reader.read_char.call(null,rdr);
sb__15842 = G__15846;
ch__15843 = G__15847;
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
var ch__15848 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____15849 = cljs.core._EQ_.call(null,ch__15848,"n");

if(cljs.core.truth_(or__3548__auto____15849))
{return or__3548__auto____15849;
} else
{var or__3548__auto____15850 = cljs.core._EQ_.call(null,ch__15848,"r");

if(cljs.core.truth_(or__3548__auto____15850))
{return or__3548__auto____15850;
} else
{return (ch__15848 === null);
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
var groups__15851 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__15852 = cljs.core.nth.call(null,groups__15851,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____15853 = (void 0 === group3__15852);

if(cljs.core.truth_(or__3548__auto____15853))
{return or__3548__auto____15853;
} else
{return (group3__15852.length < 1);
}
})())))
{return 0;
} else
{var negate__15855 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__15851,1)))?-1:1);
var vec__15854__15856 = (cljs.core.truth_(cljs.core.nth.call(null,groups__15851,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__15851,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__15851,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__15851,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__15851,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__15851,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__15851,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__15851,7),parseInt.call(null,cljs.core.nth.call(null,groups__15851,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__15857 = cljs.core.nth.call(null,vec__15854__15856,0,null);
var radix__15858 = cljs.core.nth.call(null,vec__15854__15856,1,null);

if(cljs.core.truth_((n__15857 === null)))
{return null;
} else
{return (negate__15855 * parseInt.call(null,n__15857,radix__15858));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__15859 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__15860 = cljs.core.nth.call(null,groups__15859,1);
var denominator__15861 = cljs.core.nth.call(null,groups__15859,2);

return (parseInt.call(null,numinator__15860) / parseInt.call(null,denominator__15861));
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
var ch__15862 = cljs.reader.read_char.call(null,reader);
var mapresult__15863 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__15862);

if(cljs.core.truth_(mapresult__15863))
{return mapresult__15863;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____15864 = cljs.core._EQ_.call(null,"u",ch__15862);

if(cljs.core.truth_(or__3548__auto____15864))
{return or__3548__auto____15864;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__15862);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__15862);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__15862);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__15865 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__15865)))
{{
var G__15866 = cljs.reader.read_char.call(null,rdr);
ch__15865 = G__15866;
continue;
}
} else
{return ch__15865;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__15867 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__15868 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__15868))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__15868)))
{return a__15867;
} else
{var temp__3695__auto____15869 = cljs.core.get.call(null,cljs.reader.macros,ch__15868);

if(cljs.core.truth_(temp__3695__auto____15869))
{var macrofn__15870 = temp__3695__auto____15869;

var mret__15871 = macrofn__15870.call(null,rdr,ch__15868);

{
var G__15873 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__15871,rdr))?a__15867:cljs.core.conj.call(null,a__15867,mret__15871));
a__15867 = G__15873;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__15868);
var o__15872 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__15874 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__15872,rdr))?a__15867:cljs.core.conj.call(null,a__15867,o__15872));
a__15867 = G__15874;
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
var ch__15875 = cljs.reader.read_char.call(null,rdr);
var dm__15876 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__15875);

if(cljs.core.truth_(dm__15876))
{return dm__15876.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__15875);
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
var l__15877 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__15877))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__15877);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__15878 = (new goog.string.StringBuffer(initch));
var ch__15879 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15880 = (ch__15879 === null);

if(cljs.core.truth_(or__3548__auto____15880))
{return or__3548__auto____15880;
} else
{var or__3548__auto____15881 = cljs.reader.whitespace_QMARK_.call(null,ch__15879);

if(cljs.core.truth_(or__3548__auto____15881))
{return or__3548__auto____15881;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__15879);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__15879);
var s__15882 = buffer__15878.toString();

var or__3548__auto____15883 = cljs.reader.match_number.call(null,s__15882);

if(cljs.core.truth_(or__3548__auto____15883))
{return or__3548__auto____15883;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__15882,"]");
}
} else
{{
var G__15884 = (function (){buffer__15878.append(ch__15879);
return buffer__15878;
})();
var G__15885 = cljs.reader.read_char.call(null,reader);
buffer__15878 = G__15884;
ch__15879 = G__15885;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__15886 = (new goog.string.StringBuffer());
var ch__15887 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__15887 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__15887)))
{{
var G__15888 = (function (){buffer__15886.append(cljs.reader.escape_char.call(null,buffer__15886,reader));
return buffer__15886;
})();
var G__15889 = cljs.reader.read_char.call(null,reader);
buffer__15886 = G__15888;
ch__15887 = G__15889;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__15887)))
{return buffer__15886.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__15890 = (function (){buffer__15886.append(ch__15887);
return buffer__15886;
})();
var G__15891 = cljs.reader.read_char.call(null,reader);
buffer__15886 = G__15890;
ch__15887 = G__15891;
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
var token__15892 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__15892,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__15892,0,token__15892.indexOf("/")),cljs.core.subs.call(null,token__15892,(token__15892.indexOf("/") + 1),token__15892.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__15892,cljs.core.symbol.call(null,token__15892));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__15894 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__15893__15895 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__15894);
var token__15896 = cljs.core.nth.call(null,vec__15893__15895,0,null);
var ns__15897 = cljs.core.nth.call(null,vec__15893__15895,1,null);
var name__15898 = cljs.core.nth.call(null,vec__15893__15895,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____15900 = (function (){var and__3546__auto____15899 = cljs.core.not.call(null,(void 0 === ns__15897));

if(cljs.core.truth_(and__3546__auto____15899))
{return (ns__15897.substring((ns__15897.length - 2),ns__15897.length) === ":/");
} else
{return and__3546__auto____15899;
}
})();

if(cljs.core.truth_(or__3548__auto____15900))
{return or__3548__auto____15900;
} else
{var or__3548__auto____15901 = ((name__15898[(name__15898.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____15901))
{return or__3548__auto____15901;
} else
{return cljs.core.not.call(null,(token__15896.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__15896);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__15897.substring(0,ns__15897.indexOf("/")),name__15898);
} else
{return cljs.core.keyword.call(null,token__15896);
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
var m__15902 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__15902)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__15903 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____15904 = o__15903;

if(cljs.core.truth_((function (){var and__3546__auto____15905 = x__451__auto____15904;

if(cljs.core.truth_(and__3546__auto____15905))
{var and__3546__auto____15906 = x__451__auto____15904.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____15906))
{return cljs.core.not.call(null,x__451__auto____15904.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____15906;
}
} else
{return and__3546__auto____15905;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____15904);
}
})()))
{return cljs.core.with_meta.call(null,o__15903,cljs.core.merge.call(null,cljs.core.meta.call(null,o__15903),m__15902));
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
var ch__15907 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__15907 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__15907)))
{{
var G__15909 = reader;
var G__15910 = eof_is_error;
var G__15911 = sentinel;
var G__15912 = is_recursive;
reader = G__15909;
eof_is_error = G__15910;
sentinel = G__15911;
is_recursive = G__15912;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__15907)))
{{
var G__15913 = cljs.reader.read_comment.call(null,reader,ch__15907);
var G__15914 = eof_is_error;
var G__15915 = sentinel;
var G__15916 = is_recursive;
reader = G__15913;
eof_is_error = G__15914;
sentinel = G__15915;
is_recursive = G__15916;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__15908 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__15907))?cljs.reader.macros.call(null,ch__15907).call(null,reader,ch__15907):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__15907))?cljs.reader.read_number.call(null,reader,ch__15907):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__15907):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__15908,reader)))
{{
var G__15917 = reader;
var G__15918 = eof_is_error;
var G__15919 = sentinel;
var G__15920 = is_recursive;
reader = G__15917;
eof_is_error = G__15918;
sentinel = G__15919;
is_recursive = G__15920;
continue;
}
} else
{return res__15908;
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
var r__15921 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__15921,true,null,false);
});
