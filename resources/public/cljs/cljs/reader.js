goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____185814 = reader;

if(cljs.core.truth_(and__3546__auto____185814))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____185814;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____185815 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____185815))
{return or__3548__auto____185815;
} else
{var or__3548__auto____185816 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____185816))
{return or__3548__auto____185816;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____185817 = reader;

if(cljs.core.truth_(and__3546__auto____185817))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____185817;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____185818 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____185818))
{return or__3548__auto____185818;
} else
{var or__3548__auto____185819 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____185819))
{return or__3548__auto____185819;
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
var this__185820 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__185820.buffer_atom))))
{var idx__185821 = cljs.core.deref.call(null,this__185820.index_atom);

cljs.core.swap_BANG_.call(null,this__185820.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__185820.s,idx__185821);
} else
{var buf__185822 = cljs.core.deref.call(null,this__185820.buffer_atom);

cljs.core.swap_BANG_.call(null,this__185820.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__185822);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__185823 = this;
return cljs.core.swap_BANG_.call(null,this__185823.buffer_atom,(function (p1__185813_SHARP_){
return cljs.core.cons.call(null,ch,p1__185813_SHARP_);
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
var or__3548__auto____185824 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____185824))
{return or__3548__auto____185824;
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
var or__3548__auto____185825 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____185825))
{return or__3548__auto____185825;
} else
{var and__3546__auto____185827 = (function (){var or__3548__auto____185826 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____185826))
{return or__3548__auto____185826;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____185827))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__185828 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__185828);
return next_ch__185828;
})());
} else
{return and__3546__auto____185827;
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
reader_error.cljs$lang$applyTo = (function (arglist__185829){
var rdr = cljs.core.first(arglist__185829);
var msg = cljs.core.rest(arglist__185829);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____185830 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____185830))
{var and__3546__auto____185831 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____185831))
{var and__3546__auto____185832 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____185832))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____185832;
}
} else
{return and__3546__auto____185831;
}
} else
{return and__3546__auto____185830;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__185833 = (new goog.string.StringBuffer(initch));
var ch__185834 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____185835 = (ch__185834 === null);

if(cljs.core.truth_(or__3548__auto____185835))
{return or__3548__auto____185835;
} else
{var or__3548__auto____185836 = cljs.reader.whitespace_QMARK_.call(null,ch__185834);

if(cljs.core.truth_(or__3548__auto____185836))
{return or__3548__auto____185836;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__185834);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__185834);
return sb__185833.toString();
} else
{{
var G__185837 = (function (){sb__185833.append(ch__185834);
return sb__185833;
})();
var G__185838 = cljs.reader.read_char.call(null,rdr);
sb__185833 = G__185837;
ch__185834 = G__185838;
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
var ch__185839 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____185840 = cljs.core._EQ_.call(null,ch__185839,"n");

if(cljs.core.truth_(or__3548__auto____185840))
{return or__3548__auto____185840;
} else
{var or__3548__auto____185841 = cljs.core._EQ_.call(null,ch__185839,"r");

if(cljs.core.truth_(or__3548__auto____185841))
{return or__3548__auto____185841;
} else
{return (ch__185839 === null);
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
var groups__185842 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__185843 = cljs.core.nth.call(null,groups__185842,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____185844 = (void 0 === group3__185843);

if(cljs.core.truth_(or__3548__auto____185844))
{return or__3548__auto____185844;
} else
{return (group3__185843.length < 1);
}
})())))
{return 0;
} else
{var negate__185846 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__185842,1)))?-1:1);
var vec__185845__185847 = (cljs.core.truth_(cljs.core.nth.call(null,groups__185842,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__185842,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__185842,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__185842,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__185842,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__185842,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__185842,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__185842,7),parseInt.call(null,cljs.core.nth.call(null,groups__185842,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__185848 = cljs.core.nth.call(null,vec__185845__185847,0,null);
var radix__185849 = cljs.core.nth.call(null,vec__185845__185847,1,null);

if(cljs.core.truth_((n__185848 === null)))
{return null;
} else
{return (negate__185846 * parseInt.call(null,n__185848,radix__185849));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__185850 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__185851 = cljs.core.nth.call(null,groups__185850,1);
var denominator__185852 = cljs.core.nth.call(null,groups__185850,2);

return (parseInt.call(null,numinator__185851) / parseInt.call(null,denominator__185852));
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
var ch__185853 = cljs.reader.read_char.call(null,reader);
var mapresult__185854 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__185853);

if(cljs.core.truth_(mapresult__185854))
{return mapresult__185854;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____185855 = cljs.core._EQ_.call(null,"u",ch__185853);

if(cljs.core.truth_(or__3548__auto____185855))
{return or__3548__auto____185855;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__185853);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__185853);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__185853);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__185856 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__185856)))
{{
var G__185857 = cljs.reader.read_char.call(null,rdr);
ch__185856 = G__185857;
continue;
}
} else
{return ch__185856;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__185858 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__185859 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__185859))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__185859)))
{return a__185858;
} else
{var temp__3695__auto____185860 = cljs.core.get.call(null,cljs.reader.macros,ch__185859);

if(cljs.core.truth_(temp__3695__auto____185860))
{var macrofn__185861 = temp__3695__auto____185860;

var mret__185862 = macrofn__185861.call(null,rdr,ch__185859);

{
var G__185864 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__185862,rdr))?a__185858:cljs.core.conj.call(null,a__185858,mret__185862));
a__185858 = G__185864;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__185859);
var o__185863 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__185865 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__185863,rdr))?a__185858:cljs.core.conj.call(null,a__185858,o__185863));
a__185858 = G__185865;
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
var ch__185866 = cljs.reader.read_char.call(null,rdr);
var dm__185867 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__185866);

if(cljs.core.truth_(dm__185867))
{return dm__185867.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__185866);
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
var l__185868 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__185868))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__185868);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__185869 = (new goog.string.StringBuffer(initch));
var ch__185870 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____185871 = (ch__185870 === null);

if(cljs.core.truth_(or__3548__auto____185871))
{return or__3548__auto____185871;
} else
{var or__3548__auto____185872 = cljs.reader.whitespace_QMARK_.call(null,ch__185870);

if(cljs.core.truth_(or__3548__auto____185872))
{return or__3548__auto____185872;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__185870);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__185870);
var s__185873 = buffer__185869.toString();

var or__3548__auto____185874 = cljs.reader.match_number.call(null,s__185873);

if(cljs.core.truth_(or__3548__auto____185874))
{return or__3548__auto____185874;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__185873,"]");
}
} else
{{
var G__185875 = (function (){buffer__185869.append(ch__185870);
return buffer__185869;
})();
var G__185876 = cljs.reader.read_char.call(null,reader);
buffer__185869 = G__185875;
ch__185870 = G__185876;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__185877 = (new goog.string.StringBuffer());
var ch__185878 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__185878 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__185878)))
{{
var G__185879 = (function (){buffer__185877.append(cljs.reader.escape_char.call(null,buffer__185877,reader));
return buffer__185877;
})();
var G__185880 = cljs.reader.read_char.call(null,reader);
buffer__185877 = G__185879;
ch__185878 = G__185880;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__185878)))
{return buffer__185877.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__185881 = (function (){buffer__185877.append(ch__185878);
return buffer__185877;
})();
var G__185882 = cljs.reader.read_char.call(null,reader);
buffer__185877 = G__185881;
ch__185878 = G__185882;
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
var token__185883 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__185883,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__185883,0,token__185883.indexOf("/")),cljs.core.subs.call(null,token__185883,(token__185883.indexOf("/") + 1),token__185883.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__185883,cljs.core.symbol.call(null,token__185883));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__185885 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__185884__185886 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__185885);
var token__185887 = cljs.core.nth.call(null,vec__185884__185886,0,null);
var ns__185888 = cljs.core.nth.call(null,vec__185884__185886,1,null);
var name__185889 = cljs.core.nth.call(null,vec__185884__185886,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____185891 = (function (){var and__3546__auto____185890 = cljs.core.not.call(null,(void 0 === ns__185888));

if(cljs.core.truth_(and__3546__auto____185890))
{return (ns__185888.substring((ns__185888.length - 2),ns__185888.length) === ":/");
} else
{return and__3546__auto____185890;
}
})();

if(cljs.core.truth_(or__3548__auto____185891))
{return or__3548__auto____185891;
} else
{var or__3548__auto____185892 = ((name__185889[(name__185889.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____185892))
{return or__3548__auto____185892;
} else
{return cljs.core.not.call(null,(token__185887.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__185887);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__185888.substring(0,ns__185888.indexOf("/")),name__185889);
} else
{return cljs.core.keyword.call(null,token__185887);
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
var m__185893 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__185893)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__185894 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____185895 = o__185894;

if(cljs.core.truth_((function (){var and__3546__auto____185896 = x__451__auto____185895;

if(cljs.core.truth_(and__3546__auto____185896))
{var and__3546__auto____185897 = x__451__auto____185895.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____185897))
{return cljs.core.not.call(null,x__451__auto____185895.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____185897;
}
} else
{return and__3546__auto____185896;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____185895);
}
})()))
{return cljs.core.with_meta.call(null,o__185894,cljs.core.merge.call(null,cljs.core.meta.call(null,o__185894),m__185893));
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
var ch__185898 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__185898 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__185898)))
{{
var G__185900 = reader;
var G__185901 = eof_is_error;
var G__185902 = sentinel;
var G__185903 = is_recursive;
reader = G__185900;
eof_is_error = G__185901;
sentinel = G__185902;
is_recursive = G__185903;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__185898)))
{{
var G__185904 = cljs.reader.read_comment.call(null,reader,ch__185898);
var G__185905 = eof_is_error;
var G__185906 = sentinel;
var G__185907 = is_recursive;
reader = G__185904;
eof_is_error = G__185905;
sentinel = G__185906;
is_recursive = G__185907;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__185899 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__185898))?cljs.reader.macros.call(null,ch__185898).call(null,reader,ch__185898):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__185898))?cljs.reader.read_number.call(null,reader,ch__185898):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__185898):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__185899,reader)))
{{
var G__185908 = reader;
var G__185909 = eof_is_error;
var G__185910 = sentinel;
var G__185911 = is_recursive;
reader = G__185908;
eof_is_error = G__185909;
sentinel = G__185910;
is_recursive = G__185911;
continue;
}
} else
{return res__185899;
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
var r__185912 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__185912,true,null,false);
});
