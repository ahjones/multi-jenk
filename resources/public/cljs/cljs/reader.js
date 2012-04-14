goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____187960 = reader;

if(cljs.core.truth_(and__3546__auto____187960))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____187960;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____187961 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____187961))
{return or__3548__auto____187961;
} else
{var or__3548__auto____187962 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____187962))
{return or__3548__auto____187962;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____187963 = reader;

if(cljs.core.truth_(and__3546__auto____187963))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____187963;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____187964 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____187964))
{return or__3548__auto____187964;
} else
{var or__3548__auto____187965 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____187965))
{return or__3548__auto____187965;
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
var this__187966 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__187966.buffer_atom))))
{var idx__187967 = cljs.core.deref.call(null,this__187966.index_atom);

cljs.core.swap_BANG_.call(null,this__187966.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__187966.s,idx__187967);
} else
{var buf__187968 = cljs.core.deref.call(null,this__187966.buffer_atom);

cljs.core.swap_BANG_.call(null,this__187966.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__187968);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__187969 = this;
return cljs.core.swap_BANG_.call(null,this__187969.buffer_atom,(function (p1__187959_SHARP_){
return cljs.core.cons.call(null,ch,p1__187959_SHARP_);
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
var or__3548__auto____187970 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____187970))
{return or__3548__auto____187970;
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
var or__3548__auto____187971 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____187971))
{return or__3548__auto____187971;
} else
{var and__3546__auto____187973 = (function (){var or__3548__auto____187972 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____187972))
{return or__3548__auto____187972;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____187973))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__187974 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__187974);
return next_ch__187974;
})());
} else
{return and__3546__auto____187973;
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
reader_error.cljs$lang$applyTo = (function (arglist__187975){
var rdr = cljs.core.first(arglist__187975);
var msg = cljs.core.rest(arglist__187975);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____187976 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____187976))
{var and__3546__auto____187977 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____187977))
{var and__3546__auto____187978 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____187978))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____187978;
}
} else
{return and__3546__auto____187977;
}
} else
{return and__3546__auto____187976;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__187979 = (new goog.string.StringBuffer(initch));
var ch__187980 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____187981 = (ch__187980 === null);

if(cljs.core.truth_(or__3548__auto____187981))
{return or__3548__auto____187981;
} else
{var or__3548__auto____187982 = cljs.reader.whitespace_QMARK_.call(null,ch__187980);

if(cljs.core.truth_(or__3548__auto____187982))
{return or__3548__auto____187982;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__187980);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__187980);
return sb__187979.toString();
} else
{{
var G__187983 = (function (){sb__187979.append(ch__187980);
return sb__187979;
})();
var G__187984 = cljs.reader.read_char.call(null,rdr);
sb__187979 = G__187983;
ch__187980 = G__187984;
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
var ch__187985 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____187986 = cljs.core._EQ_.call(null,ch__187985,"n");

if(cljs.core.truth_(or__3548__auto____187986))
{return or__3548__auto____187986;
} else
{var or__3548__auto____187987 = cljs.core._EQ_.call(null,ch__187985,"r");

if(cljs.core.truth_(or__3548__auto____187987))
{return or__3548__auto____187987;
} else
{return (ch__187985 === null);
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
var groups__187988 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__187989 = cljs.core.nth.call(null,groups__187988,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____187990 = (void 0 === group3__187989);

if(cljs.core.truth_(or__3548__auto____187990))
{return or__3548__auto____187990;
} else
{return (group3__187989.length < 1);
}
})())))
{return 0;
} else
{var negate__187992 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__187988,1)))?-1:1);
var vec__187991__187993 = (cljs.core.truth_(cljs.core.nth.call(null,groups__187988,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__187988,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__187988,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__187988,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__187988,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__187988,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__187988,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__187988,7),parseInt.call(null,cljs.core.nth.call(null,groups__187988,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__187994 = cljs.core.nth.call(null,vec__187991__187993,0,null);
var radix__187995 = cljs.core.nth.call(null,vec__187991__187993,1,null);

if(cljs.core.truth_((n__187994 === null)))
{return null;
} else
{return (negate__187992 * parseInt.call(null,n__187994,radix__187995));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__187996 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__187997 = cljs.core.nth.call(null,groups__187996,1);
var denominator__187998 = cljs.core.nth.call(null,groups__187996,2);

return (parseInt.call(null,numinator__187997) / parseInt.call(null,denominator__187998));
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
var ch__187999 = cljs.reader.read_char.call(null,reader);
var mapresult__188000 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__187999);

if(cljs.core.truth_(mapresult__188000))
{return mapresult__188000;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____188001 = cljs.core._EQ_.call(null,"u",ch__187999);

if(cljs.core.truth_(or__3548__auto____188001))
{return or__3548__auto____188001;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__187999);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__187999);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__187999);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__188002 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__188002)))
{{
var G__188003 = cljs.reader.read_char.call(null,rdr);
ch__188002 = G__188003;
continue;
}
} else
{return ch__188002;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__188004 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__188005 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__188005))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__188005)))
{return a__188004;
} else
{var temp__3695__auto____188006 = cljs.core.get.call(null,cljs.reader.macros,ch__188005);

if(cljs.core.truth_(temp__3695__auto____188006))
{var macrofn__188007 = temp__3695__auto____188006;

var mret__188008 = macrofn__188007.call(null,rdr,ch__188005);

{
var G__188010 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__188008,rdr))?a__188004:cljs.core.conj.call(null,a__188004,mret__188008));
a__188004 = G__188010;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__188005);
var o__188009 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__188011 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__188009,rdr))?a__188004:cljs.core.conj.call(null,a__188004,o__188009));
a__188004 = G__188011;
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
var ch__188012 = cljs.reader.read_char.call(null,rdr);
var dm__188013 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__188012);

if(cljs.core.truth_(dm__188013))
{return dm__188013.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__188012);
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
var l__188014 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__188014))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__188014);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__188015 = (new goog.string.StringBuffer(initch));
var ch__188016 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____188017 = (ch__188016 === null);

if(cljs.core.truth_(or__3548__auto____188017))
{return or__3548__auto____188017;
} else
{var or__3548__auto____188018 = cljs.reader.whitespace_QMARK_.call(null,ch__188016);

if(cljs.core.truth_(or__3548__auto____188018))
{return or__3548__auto____188018;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__188016);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__188016);
var s__188019 = buffer__188015.toString();

var or__3548__auto____188020 = cljs.reader.match_number.call(null,s__188019);

if(cljs.core.truth_(or__3548__auto____188020))
{return or__3548__auto____188020;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__188019,"]");
}
} else
{{
var G__188021 = (function (){buffer__188015.append(ch__188016);
return buffer__188015;
})();
var G__188022 = cljs.reader.read_char.call(null,reader);
buffer__188015 = G__188021;
ch__188016 = G__188022;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__188023 = (new goog.string.StringBuffer());
var ch__188024 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__188024 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__188024)))
{{
var G__188025 = (function (){buffer__188023.append(cljs.reader.escape_char.call(null,buffer__188023,reader));
return buffer__188023;
})();
var G__188026 = cljs.reader.read_char.call(null,reader);
buffer__188023 = G__188025;
ch__188024 = G__188026;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__188024)))
{return buffer__188023.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__188027 = (function (){buffer__188023.append(ch__188024);
return buffer__188023;
})();
var G__188028 = cljs.reader.read_char.call(null,reader);
buffer__188023 = G__188027;
ch__188024 = G__188028;
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
var token__188029 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__188029,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__188029,0,token__188029.indexOf("/")),cljs.core.subs.call(null,token__188029,(token__188029.indexOf("/") + 1),token__188029.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__188029,cljs.core.symbol.call(null,token__188029));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__188031 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__188030__188032 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__188031);
var token__188033 = cljs.core.nth.call(null,vec__188030__188032,0,null);
var ns__188034 = cljs.core.nth.call(null,vec__188030__188032,1,null);
var name__188035 = cljs.core.nth.call(null,vec__188030__188032,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____188037 = (function (){var and__3546__auto____188036 = cljs.core.not.call(null,(void 0 === ns__188034));

if(cljs.core.truth_(and__3546__auto____188036))
{return (ns__188034.substring((ns__188034.length - 2),ns__188034.length) === ":/");
} else
{return and__3546__auto____188036;
}
})();

if(cljs.core.truth_(or__3548__auto____188037))
{return or__3548__auto____188037;
} else
{var or__3548__auto____188038 = ((name__188035[(name__188035.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____188038))
{return or__3548__auto____188038;
} else
{return cljs.core.not.call(null,(token__188033.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__188033);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__188034.substring(0,ns__188034.indexOf("/")),name__188035);
} else
{return cljs.core.keyword.call(null,token__188033);
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
var m__188039 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__188039)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__188040 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____188041 = o__188040;

if(cljs.core.truth_((function (){var and__3546__auto____188042 = x__451__auto____188041;

if(cljs.core.truth_(and__3546__auto____188042))
{var and__3546__auto____188043 = x__451__auto____188041.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____188043))
{return cljs.core.not.call(null,x__451__auto____188041.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____188043;
}
} else
{return and__3546__auto____188042;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____188041);
}
})()))
{return cljs.core.with_meta.call(null,o__188040,cljs.core.merge.call(null,cljs.core.meta.call(null,o__188040),m__188039));
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
var ch__188044 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__188044 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__188044)))
{{
var G__188046 = reader;
var G__188047 = eof_is_error;
var G__188048 = sentinel;
var G__188049 = is_recursive;
reader = G__188046;
eof_is_error = G__188047;
sentinel = G__188048;
is_recursive = G__188049;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__188044)))
{{
var G__188050 = cljs.reader.read_comment.call(null,reader,ch__188044);
var G__188051 = eof_is_error;
var G__188052 = sentinel;
var G__188053 = is_recursive;
reader = G__188050;
eof_is_error = G__188051;
sentinel = G__188052;
is_recursive = G__188053;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__188045 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__188044))?cljs.reader.macros.call(null,ch__188044).call(null,reader,ch__188044):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__188044))?cljs.reader.read_number.call(null,reader,ch__188044):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__188044):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__188045,reader)))
{{
var G__188054 = reader;
var G__188055 = eof_is_error;
var G__188056 = sentinel;
var G__188057 = is_recursive;
reader = G__188054;
eof_is_error = G__188055;
sentinel = G__188056;
is_recursive = G__188057;
continue;
}
} else
{return res__188045;
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
var r__188058 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__188058,true,null,false);
});
