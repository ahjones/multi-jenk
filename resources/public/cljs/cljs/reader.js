goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____175115 = reader;

if(cljs.core.truth_(and__3546__auto____175115))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____175115;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____175116 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____175116))
{return or__3548__auto____175116;
} else
{var or__3548__auto____175117 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____175117))
{return or__3548__auto____175117;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____175118 = reader;

if(cljs.core.truth_(and__3546__auto____175118))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____175118;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____175119 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____175119))
{return or__3548__auto____175119;
} else
{var or__3548__auto____175120 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____175120))
{return or__3548__auto____175120;
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
var this__175121 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__175121.buffer_atom))))
{var idx__175122 = cljs.core.deref.call(null,this__175121.index_atom);

cljs.core.swap_BANG_.call(null,this__175121.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__175121.s,idx__175122);
} else
{var buf__175123 = cljs.core.deref.call(null,this__175121.buffer_atom);

cljs.core.swap_BANG_.call(null,this__175121.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__175123);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__175124 = this;
return cljs.core.swap_BANG_.call(null,this__175124.buffer_atom,(function (p1__175114_SHARP_){
return cljs.core.cons.call(null,ch,p1__175114_SHARP_);
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
var or__3548__auto____175125 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____175125))
{return or__3548__auto____175125;
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
var or__3548__auto____175126 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____175126))
{return or__3548__auto____175126;
} else
{var and__3546__auto____175128 = (function (){var or__3548__auto____175127 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____175127))
{return or__3548__auto____175127;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____175128))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__175129 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__175129);
return next_ch__175129;
})());
} else
{return and__3546__auto____175128;
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
reader_error.cljs$lang$applyTo = (function (arglist__175130){
var rdr = cljs.core.first(arglist__175130);
var msg = cljs.core.rest(arglist__175130);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____175131 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____175131))
{var and__3546__auto____175132 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____175132))
{var and__3546__auto____175133 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____175133))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____175133;
}
} else
{return and__3546__auto____175132;
}
} else
{return and__3546__auto____175131;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__175134 = (new goog.string.StringBuffer(initch));
var ch__175135 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____175136 = (ch__175135 === null);

if(cljs.core.truth_(or__3548__auto____175136))
{return or__3548__auto____175136;
} else
{var or__3548__auto____175137 = cljs.reader.whitespace_QMARK_.call(null,ch__175135);

if(cljs.core.truth_(or__3548__auto____175137))
{return or__3548__auto____175137;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__175135);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__175135);
return sb__175134.toString();
} else
{{
var G__175138 = (function (){sb__175134.append(ch__175135);
return sb__175134;
})();
var G__175139 = cljs.reader.read_char.call(null,rdr);
sb__175134 = G__175138;
ch__175135 = G__175139;
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
var ch__175140 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____175141 = cljs.core._EQ_.call(null,ch__175140,"n");

if(cljs.core.truth_(or__3548__auto____175141))
{return or__3548__auto____175141;
} else
{var or__3548__auto____175142 = cljs.core._EQ_.call(null,ch__175140,"r");

if(cljs.core.truth_(or__3548__auto____175142))
{return or__3548__auto____175142;
} else
{return (ch__175140 === null);
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
var groups__175143 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__175144 = cljs.core.nth.call(null,groups__175143,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____175145 = (void 0 === group3__175144);

if(cljs.core.truth_(or__3548__auto____175145))
{return or__3548__auto____175145;
} else
{return (group3__175144.length < 1);
}
})())))
{return 0;
} else
{var negate__175147 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__175143,1)))?-1:1);
var vec__175146__175148 = (cljs.core.truth_(cljs.core.nth.call(null,groups__175143,3))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__175143,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__175143,4))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__175143,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__175143,5))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__175143,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__175143,7))?cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,groups__175143,7),parseInt.call(null,cljs.core.nth.call(null,groups__175143,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.PersistentVector.fromArray([null,null]):null)))));
var n__175149 = cljs.core.nth.call(null,vec__175146__175148,0,null);
var radix__175150 = cljs.core.nth.call(null,vec__175146__175148,1,null);

if(cljs.core.truth_((n__175149 === null)))
{return null;
} else
{return (negate__175147 * parseInt.call(null,n__175149,radix__175150));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__175151 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__175152 = cljs.core.nth.call(null,groups__175151,1);
var denominator__175153 = cljs.core.nth.call(null,groups__175151,2);

return (parseInt.call(null,numinator__175152) / parseInt.call(null,denominator__175153));
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
var ch__175154 = cljs.reader.read_char.call(null,reader);
var mapresult__175155 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__175154);

if(cljs.core.truth_(mapresult__175155))
{return mapresult__175155;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____175156 = cljs.core._EQ_.call(null,"u",ch__175154);

if(cljs.core.truth_(or__3548__auto____175156))
{return or__3548__auto____175156;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__175154);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__175154);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__175154);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__175157 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__175157)))
{{
var G__175158 = cljs.reader.read_char.call(null,rdr);
ch__175157 = G__175158;
continue;
}
} else
{return ch__175157;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__175159 = cljs.core.PersistentVector.fromArray([]);

while(true){
var ch__175160 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__175160))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__175160)))
{return a__175159;
} else
{var temp__3695__auto____175161 = cljs.core.get.call(null,cljs.reader.macros,ch__175160);

if(cljs.core.truth_(temp__3695__auto____175161))
{var macrofn__175162 = temp__3695__auto____175161;

var mret__175163 = macrofn__175162.call(null,rdr,ch__175160);

{
var G__175165 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__175163,rdr))?a__175159:cljs.core.conj.call(null,a__175159,mret__175163));
a__175159 = G__175165;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__175160);
var o__175164 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__175166 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__175164,rdr))?a__175159:cljs.core.conj.call(null,a__175159,o__175164));
a__175159 = G__175166;
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
var ch__175167 = cljs.reader.read_char.call(null,rdr);
var dm__175168 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__175167);

if(cljs.core.truth_(dm__175168))
{return dm__175168.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__175167);
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
var l__175169 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__175169))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__175169);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__175170 = (new goog.string.StringBuffer(initch));
var ch__175171 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____175172 = (ch__175171 === null);

if(cljs.core.truth_(or__3548__auto____175172))
{return or__3548__auto____175172;
} else
{var or__3548__auto____175173 = cljs.reader.whitespace_QMARK_.call(null,ch__175171);

if(cljs.core.truth_(or__3548__auto____175173))
{return or__3548__auto____175173;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__175171);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__175171);
var s__175174 = buffer__175170.toString();

var or__3548__auto____175175 = cljs.reader.match_number.call(null,s__175174);

if(cljs.core.truth_(or__3548__auto____175175))
{return or__3548__auto____175175;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__175174,"]");
}
} else
{{
var G__175176 = (function (){buffer__175170.append(ch__175171);
return buffer__175170;
})();
var G__175177 = cljs.reader.read_char.call(null,reader);
buffer__175170 = G__175176;
ch__175171 = G__175177;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__175178 = (new goog.string.StringBuffer());
var ch__175179 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__175179 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__175179)))
{{
var G__175180 = (function (){buffer__175178.append(cljs.reader.escape_char.call(null,buffer__175178,reader));
return buffer__175178;
})();
var G__175181 = cljs.reader.read_char.call(null,reader);
buffer__175178 = G__175180;
ch__175179 = G__175181;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__175179)))
{return buffer__175178.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__175182 = (function (){buffer__175178.append(ch__175179);
return buffer__175178;
})();
var G__175183 = cljs.reader.read_char.call(null,reader);
buffer__175178 = G__175182;
ch__175179 = G__175183;
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
var token__175184 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__175184,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__175184,0,token__175184.indexOf("/")),cljs.core.subs.call(null,token__175184,(token__175184.indexOf("/") + 1),token__175184.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__175184,cljs.core.symbol.call(null,token__175184));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__175186 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__175185__175187 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__175186);
var token__175188 = cljs.core.nth.call(null,vec__175185__175187,0,null);
var ns__175189 = cljs.core.nth.call(null,vec__175185__175187,1,null);
var name__175190 = cljs.core.nth.call(null,vec__175185__175187,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____175192 = (function (){var and__3546__auto____175191 = cljs.core.not.call(null,(void 0 === ns__175189));

if(cljs.core.truth_(and__3546__auto____175191))
{return (ns__175189.substring((ns__175189.length - 2),ns__175189.length) === ":/");
} else
{return and__3546__auto____175191;
}
})();

if(cljs.core.truth_(or__3548__auto____175192))
{return or__3548__auto____175192;
} else
{var or__3548__auto____175193 = ((name__175190[(name__175190.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____175193))
{return or__3548__auto____175193;
} else
{return cljs.core.not.call(null,(token__175188.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__175188);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__175189.substring(0,ns__175189.indexOf("/")),name__175190);
} else
{return cljs.core.keyword.call(null,token__175188);
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
var m__175194 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__175194)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__175195 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__451__auto____175196 = o__175195;

if(cljs.core.truth_((function (){var and__3546__auto____175197 = x__451__auto____175196;

if(cljs.core.truth_(and__3546__auto____175197))
{var and__3546__auto____175198 = x__451__auto____175196.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____175198))
{return cljs.core.not.call(null,x__451__auto____175196.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____175198;
}
} else
{return and__3546__auto____175197;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__451__auto____175196);
}
})()))
{return cljs.core.with_meta.call(null,o__175195,cljs.core.merge.call(null,cljs.core.meta.call(null,o__175195),m__175194));
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
var ch__175199 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__175199 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__175199)))
{{
var G__175201 = reader;
var G__175202 = eof_is_error;
var G__175203 = sentinel;
var G__175204 = is_recursive;
reader = G__175201;
eof_is_error = G__175202;
sentinel = G__175203;
is_recursive = G__175204;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__175199)))
{{
var G__175205 = cljs.reader.read_comment.call(null,reader,ch__175199);
var G__175206 = eof_is_error;
var G__175207 = sentinel;
var G__175208 = is_recursive;
reader = G__175205;
eof_is_error = G__175206;
sentinel = G__175207;
is_recursive = G__175208;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__175200 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__175199))?cljs.reader.macros.call(null,ch__175199).call(null,reader,ch__175199):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__175199))?cljs.reader.read_number.call(null,reader,ch__175199):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__175199):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__175200,reader)))
{{
var G__175209 = reader;
var G__175210 = eof_is_error;
var G__175211 = sentinel;
var G__175212 = is_recursive;
reader = G__175209;
eof_is_error = G__175210;
sentinel = G__175211;
is_recursive = G__175212;
continue;
}
} else
{return res__175200;
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
var r__175213 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__175213,true,null,false);
});
