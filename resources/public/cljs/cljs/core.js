goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____181872 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____181872))
{return or__3548__auto____181872;
} else
{var or__3548__auto____181873 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____181873))
{return or__3548__auto____181873;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__181937 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____181874 = this$;

if(cljs.core.truth_(and__3546__auto____181874))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181874;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____181875 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181875))
{return or__3548__auto____181875;
} else
{var or__3548__auto____181876 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181876))
{return or__3548__auto____181876;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__181938 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____181877 = this$;

if(cljs.core.truth_(and__3546__auto____181877))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181877;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____181878 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181878))
{return or__3548__auto____181878;
} else
{var or__3548__auto____181879 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181879))
{return or__3548__auto____181879;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__181939 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____181880 = this$;

if(cljs.core.truth_(and__3546__auto____181880))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181880;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____181881 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181881))
{return or__3548__auto____181881;
} else
{var or__3548__auto____181882 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181882))
{return or__3548__auto____181882;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__181940 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____181883 = this$;

if(cljs.core.truth_(and__3546__auto____181883))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181883;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____181884 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181884))
{return or__3548__auto____181884;
} else
{var or__3548__auto____181885 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181885))
{return or__3548__auto____181885;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__181941 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____181886 = this$;

if(cljs.core.truth_(and__3546__auto____181886))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181886;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____181887 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181887))
{return or__3548__auto____181887;
} else
{var or__3548__auto____181888 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181888))
{return or__3548__auto____181888;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__181942 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____181889 = this$;

if(cljs.core.truth_(and__3546__auto____181889))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181889;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____181890 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181890))
{return or__3548__auto____181890;
} else
{var or__3548__auto____181891 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181891))
{return or__3548__auto____181891;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__181943 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____181892 = this$;

if(cljs.core.truth_(and__3546__auto____181892))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181892;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____181893 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181893))
{return or__3548__auto____181893;
} else
{var or__3548__auto____181894 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181894))
{return or__3548__auto____181894;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__181944 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____181895 = this$;

if(cljs.core.truth_(and__3546__auto____181895))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181895;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____181896 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181896))
{return or__3548__auto____181896;
} else
{var or__3548__auto____181897 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181897))
{return or__3548__auto____181897;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__181945 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____181898 = this$;

if(cljs.core.truth_(and__3546__auto____181898))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181898;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____181899 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181899))
{return or__3548__auto____181899;
} else
{var or__3548__auto____181900 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181900))
{return or__3548__auto____181900;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__181946 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____181901 = this$;

if(cljs.core.truth_(and__3546__auto____181901))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181901;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____181902 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181902))
{return or__3548__auto____181902;
} else
{var or__3548__auto____181903 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181903))
{return or__3548__auto____181903;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__181947 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____181904 = this$;

if(cljs.core.truth_(and__3546__auto____181904))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181904;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____181905 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181905))
{return or__3548__auto____181905;
} else
{var or__3548__auto____181906 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181906))
{return or__3548__auto____181906;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__181948 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____181907 = this$;

if(cljs.core.truth_(and__3546__auto____181907))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181907;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____181908 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181908))
{return or__3548__auto____181908;
} else
{var or__3548__auto____181909 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181909))
{return or__3548__auto____181909;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__181949 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____181910 = this$;

if(cljs.core.truth_(and__3546__auto____181910))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181910;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____181911 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181911))
{return or__3548__auto____181911;
} else
{var or__3548__auto____181912 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181912))
{return or__3548__auto____181912;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__181950 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____181913 = this$;

if(cljs.core.truth_(and__3546__auto____181913))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181913;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____181914 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181914))
{return or__3548__auto____181914;
} else
{var or__3548__auto____181915 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181915))
{return or__3548__auto____181915;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__181951 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____181916 = this$;

if(cljs.core.truth_(and__3546__auto____181916))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181916;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____181917 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181917))
{return or__3548__auto____181917;
} else
{var or__3548__auto____181918 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181918))
{return or__3548__auto____181918;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__181952 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____181919 = this$;

if(cljs.core.truth_(and__3546__auto____181919))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181919;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____181920 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181920))
{return or__3548__auto____181920;
} else
{var or__3548__auto____181921 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181921))
{return or__3548__auto____181921;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__181953 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____181922 = this$;

if(cljs.core.truth_(and__3546__auto____181922))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181922;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____181923 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181923))
{return or__3548__auto____181923;
} else
{var or__3548__auto____181924 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181924))
{return or__3548__auto____181924;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__181954 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____181925 = this$;

if(cljs.core.truth_(and__3546__auto____181925))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181925;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____181926 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181926))
{return or__3548__auto____181926;
} else
{var or__3548__auto____181927 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181927))
{return or__3548__auto____181927;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__181955 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____181928 = this$;

if(cljs.core.truth_(and__3546__auto____181928))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181928;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____181929 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181929))
{return or__3548__auto____181929;
} else
{var or__3548__auto____181930 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181930))
{return or__3548__auto____181930;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__181956 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____181931 = this$;

if(cljs.core.truth_(and__3546__auto____181931))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181931;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____181932 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181932))
{return or__3548__auto____181932;
} else
{var or__3548__auto____181933 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181933))
{return or__3548__auto____181933;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__181957 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____181934 = this$;

if(cljs.core.truth_(and__3546__auto____181934))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____181934;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____181935 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____181935))
{return or__3548__auto____181935;
} else
{var or__3548__auto____181936 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____181936))
{return or__3548__auto____181936;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__181937.call(this,this$);
case  2 :
return _invoke__181938.call(this,this$,a);
case  3 :
return _invoke__181939.call(this,this$,a,b);
case  4 :
return _invoke__181940.call(this,this$,a,b,c);
case  5 :
return _invoke__181941.call(this,this$,a,b,c,d);
case  6 :
return _invoke__181942.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__181943.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__181944.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__181945.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__181946.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__181947.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__181948.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__181949.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__181950.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__181951.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__181952.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__181953.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__181954.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__181955.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__181956.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__181957.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____181959 = coll;

if(cljs.core.truth_(and__3546__auto____181959))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____181959;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____181960 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____181960))
{return or__3548__auto____181960;
} else
{var or__3548__auto____181961 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____181961))
{return or__3548__auto____181961;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____181962 = coll;

if(cljs.core.truth_(and__3546__auto____181962))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____181962;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____181963 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____181963))
{return or__3548__auto____181963;
} else
{var or__3548__auto____181964 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____181964))
{return or__3548__auto____181964;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____181965 = coll;

if(cljs.core.truth_(and__3546__auto____181965))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____181965;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____181966 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____181966))
{return or__3548__auto____181966;
} else
{var or__3548__auto____181967 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____181967))
{return or__3548__auto____181967;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__181974 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____181968 = coll;

if(cljs.core.truth_(and__3546__auto____181968))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____181968;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____181969 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____181969))
{return or__3548__auto____181969;
} else
{var or__3548__auto____181970 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____181970))
{return or__3548__auto____181970;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__181975 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____181971 = coll;

if(cljs.core.truth_(and__3546__auto____181971))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____181971;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____181972 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____181972))
{return or__3548__auto____181972;
} else
{var or__3548__auto____181973 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____181973))
{return or__3548__auto____181973;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__181974.call(this,coll,n);
case  3 :
return _nth__181975.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____181977 = coll;

if(cljs.core.truth_(and__3546__auto____181977))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____181977;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____181978 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____181978))
{return or__3548__auto____181978;
} else
{var or__3548__auto____181979 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____181979))
{return or__3548__auto____181979;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____181980 = coll;

if(cljs.core.truth_(and__3546__auto____181980))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____181980;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____181981 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____181981))
{return or__3548__auto____181981;
} else
{var or__3548__auto____181982 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____181982))
{return or__3548__auto____181982;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__181989 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____181983 = o;

if(cljs.core.truth_(and__3546__auto____181983))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____181983;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____181984 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____181984))
{return or__3548__auto____181984;
} else
{var or__3548__auto____181985 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____181985))
{return or__3548__auto____181985;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__181990 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____181986 = o;

if(cljs.core.truth_(and__3546__auto____181986))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____181986;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____181987 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____181987))
{return or__3548__auto____181987;
} else
{var or__3548__auto____181988 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____181988))
{return or__3548__auto____181988;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__181989.call(this,o,k);
case  3 :
return _lookup__181990.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____181992 = coll;

if(cljs.core.truth_(and__3546__auto____181992))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____181992;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____181993 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____181993))
{return or__3548__auto____181993;
} else
{var or__3548__auto____181994 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____181994))
{return or__3548__auto____181994;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____181995 = coll;

if(cljs.core.truth_(and__3546__auto____181995))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____181995;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____181996 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____181996))
{return or__3548__auto____181996;
} else
{var or__3548__auto____181997 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____181997))
{return or__3548__auto____181997;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____181998 = coll;

if(cljs.core.truth_(and__3546__auto____181998))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____181998;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____181999 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____181999))
{return or__3548__auto____181999;
} else
{var or__3548__auto____182000 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____182000))
{return or__3548__auto____182000;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____182001 = coll;

if(cljs.core.truth_(and__3546__auto____182001))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____182001;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____182002 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____182002))
{return or__3548__auto____182002;
} else
{var or__3548__auto____182003 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____182003))
{return or__3548__auto____182003;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____182004 = coll;

if(cljs.core.truth_(and__3546__auto____182004))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____182004;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____182005 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____182005))
{return or__3548__auto____182005;
} else
{var or__3548__auto____182006 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____182006))
{return or__3548__auto____182006;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____182007 = coll;

if(cljs.core.truth_(and__3546__auto____182007))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____182007;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____182008 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____182008))
{return or__3548__auto____182008;
} else
{var or__3548__auto____182009 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____182009))
{return or__3548__auto____182009;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____182010 = coll;

if(cljs.core.truth_(and__3546__auto____182010))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____182010;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____182011 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____182011))
{return or__3548__auto____182011;
} else
{var or__3548__auto____182012 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____182012))
{return or__3548__auto____182012;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____182013 = o;

if(cljs.core.truth_(and__3546__auto____182013))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____182013;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____182014 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____182014))
{return or__3548__auto____182014;
} else
{var or__3548__auto____182015 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____182015))
{return or__3548__auto____182015;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____182016 = o;

if(cljs.core.truth_(and__3546__auto____182016))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____182016;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____182017 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____182017))
{return or__3548__auto____182017;
} else
{var or__3548__auto____182018 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____182018))
{return or__3548__auto____182018;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____182019 = o;

if(cljs.core.truth_(and__3546__auto____182019))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____182019;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____182020 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____182020))
{return or__3548__auto____182020;
} else
{var or__3548__auto____182021 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____182021))
{return or__3548__auto____182021;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____182022 = o;

if(cljs.core.truth_(and__3546__auto____182022))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____182022;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____182023 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____182023))
{return or__3548__auto____182023;
} else
{var or__3548__auto____182024 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____182024))
{return or__3548__auto____182024;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__182031 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____182025 = coll;

if(cljs.core.truth_(and__3546__auto____182025))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____182025;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____182026 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____182026))
{return or__3548__auto____182026;
} else
{var or__3548__auto____182027 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____182027))
{return or__3548__auto____182027;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__182032 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____182028 = coll;

if(cljs.core.truth_(and__3546__auto____182028))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____182028;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____182029 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____182029))
{return or__3548__auto____182029;
} else
{var or__3548__auto____182030 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____182030))
{return or__3548__auto____182030;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__182031.call(this,coll,f);
case  3 :
return _reduce__182032.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____182034 = o;

if(cljs.core.truth_(and__3546__auto____182034))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____182034;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____182035 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____182035))
{return or__3548__auto____182035;
} else
{var or__3548__auto____182036 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____182036))
{return or__3548__auto____182036;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____182037 = o;

if(cljs.core.truth_(and__3546__auto____182037))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____182037;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____182038 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____182038))
{return or__3548__auto____182038;
} else
{var or__3548__auto____182039 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____182039))
{return or__3548__auto____182039;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____182040 = o;

if(cljs.core.truth_(and__3546__auto____182040))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____182040;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____182041 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____182041))
{return or__3548__auto____182041;
} else
{var or__3548__auto____182042 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____182042))
{return or__3548__auto____182042;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____182043 = o;

if(cljs.core.truth_(and__3546__auto____182043))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____182043;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____182044 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____182044))
{return or__3548__auto____182044;
} else
{var or__3548__auto____182045 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____182045))
{return or__3548__auto____182045;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____182046 = d;

if(cljs.core.truth_(and__3546__auto____182046))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____182046;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____182047 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____182047))
{return or__3548__auto____182047;
} else
{var or__3548__auto____182048 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____182048))
{return or__3548__auto____182048;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____182049 = this$;

if(cljs.core.truth_(and__3546__auto____182049))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____182049;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____182050 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182050))
{return or__3548__auto____182050;
} else
{var or__3548__auto____182051 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____182051))
{return or__3548__auto____182051;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____182052 = this$;

if(cljs.core.truth_(and__3546__auto____182052))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____182052;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____182053 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182053))
{return or__3548__auto____182053;
} else
{var or__3548__auto____182054 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____182054))
{return or__3548__auto____182054;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____182055 = this$;

if(cljs.core.truth_(and__3546__auto____182055))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____182055;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____182056 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182056))
{return or__3548__auto____182056;
} else
{var or__3548__auto____182057 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____182057))
{return or__3548__auto____182057;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__182058 = null;
var G__182058__182059 = (function (o,k){
return null;
});
var G__182058__182060 = (function (o,k,not_found){
return not_found;
});
G__182058 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__182058__182059.call(this,o,k);
case  3 :
return G__182058__182060.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182058;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__182062 = null;
var G__182062__182063 = (function (_,f){
return f.call(null);
});
var G__182062__182064 = (function (_,f,start){
return start;
});
G__182062 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__182062__182063.call(this,_,f);
case  3 :
return G__182062__182064.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182062;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__182066 = null;
var G__182066__182067 = (function (_,n){
return null;
});
var G__182066__182068 = (function (_,n,not_found){
return not_found;
});
G__182066 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__182066__182067.call(this,_,n);
case  3 :
return G__182066__182068.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182066;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__182076 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__182070 = cljs.core._nth.call(null,cicoll,0);
var n__182071 = 1;

while(true){
if(cljs.core.truth_((n__182071 < cljs.core._count.call(null,cicoll))))
{{
var G__182080 = f.call(null,val__182070,cljs.core._nth.call(null,cicoll,n__182071));
var G__182081 = (n__182071 + 1);
val__182070 = G__182080;
n__182071 = G__182081;
continue;
}
} else
{return val__182070;
}
break;
}
}
});
var ci_reduce__182077 = (function (cicoll,f,val){
var val__182072 = val;
var n__182073 = 0;

while(true){
if(cljs.core.truth_((n__182073 < cljs.core._count.call(null,cicoll))))
{{
var G__182082 = f.call(null,val__182072,cljs.core._nth.call(null,cicoll,n__182073));
var G__182083 = (n__182073 + 1);
val__182072 = G__182082;
n__182073 = G__182083;
continue;
}
} else
{return val__182072;
}
break;
}
});
var ci_reduce__182078 = (function (cicoll,f,val,idx){
var val__182074 = val;
var n__182075 = idx;

while(true){
if(cljs.core.truth_((n__182075 < cljs.core._count.call(null,cicoll))))
{{
var G__182084 = f.call(null,val__182074,cljs.core._nth.call(null,cicoll,n__182075));
var G__182085 = (n__182075 + 1);
val__182074 = G__182084;
n__182075 = G__182085;
continue;
}
} else
{return val__182074;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__182076.call(this,cicoll,f);
case  3 :
return ci_reduce__182077.call(this,cicoll,f,val);
case  4 :
return ci_reduce__182078.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__182086 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__182099 = null;
var G__182099__182100 = (function (_,f){
var this__182087 = this;
return cljs.core.ci_reduce.call(null,this__182087.a,f,(this__182087.a[this__182087.i]),(this__182087.i + 1));
});
var G__182099__182101 = (function (_,f,start){
var this__182088 = this;
return cljs.core.ci_reduce.call(null,this__182088.a,f,start,this__182088.i);
});
G__182099 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__182099__182100.call(this,_,f);
case  3 :
return G__182099__182101.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182099;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__182089 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__182090 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__182103 = null;
var G__182103__182104 = (function (coll,n){
var this__182091 = this;
var i__182092 = (n + this__182091.i);

if(cljs.core.truth_((i__182092 < this__182091.a.length)))
{return (this__182091.a[i__182092]);
} else
{return null;
}
});
var G__182103__182105 = (function (coll,n,not_found){
var this__182093 = this;
var i__182094 = (n + this__182093.i);

if(cljs.core.truth_((i__182094 < this__182093.a.length)))
{return (this__182093.a[i__182094]);
} else
{return not_found;
}
});
G__182103 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__182103__182104.call(this,coll,n);
case  3 :
return G__182103__182105.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182103;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__182095 = this;
return (this__182095.a.length - this__182095.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__182096 = this;
return (this__182096.a[this__182096.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__182097 = this;
if(cljs.core.truth_(((this__182097.i + 1) < this__182097.a.length)))
{return (new cljs.core.IndexedSeq(this__182097.a,(this__182097.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__182098 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__182107 = null;
var G__182107__182108 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__182107__182109 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__182107 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__182107__182108.call(this,array,f);
case  3 :
return G__182107__182109.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182107;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__182111 = null;
var G__182111__182112 = (function (array,k){
return (array[k]);
});
var G__182111__182113 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__182111 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__182111__182112.call(this,array,k);
case  3 :
return G__182111__182113.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182111;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__182115 = null;
var G__182115__182116 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__182115__182117 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__182115 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__182115__182116.call(this,array,n);
case  3 :
return G__182115__182117.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182115;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____182119 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____182119))
{var s__182120 = temp__3698__auto____182119;

return cljs.core._first.call(null,s__182120);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__182121 = cljs.core.next.call(null,s);
s = G__182121;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__182122 = cljs.core.seq.call(null,x);
var n__182123 = 0;

while(true){
if(cljs.core.truth_(s__182122))
{{
var G__182124 = cljs.core.next.call(null,s__182122);
var G__182125 = (n__182123 + 1);
s__182122 = G__182124;
n__182123 = G__182125;
continue;
}
} else
{return n__182123;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__182126 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__182127 = (function() { 
var G__182129__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__182130 = conj.call(null,coll,x);
var G__182131 = cljs.core.first.call(null,xs);
var G__182132 = cljs.core.next.call(null,xs);
coll = G__182130;
x = G__182131;
xs = G__182132;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__182129 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182129__delegate.call(this, coll, x, xs);
};
G__182129.cljs$lang$maxFixedArity = 2;
G__182129.cljs$lang$applyTo = (function (arglist__182133){
var coll = cljs.core.first(arglist__182133);
var x = cljs.core.first(cljs.core.next(arglist__182133));
var xs = cljs.core.rest(cljs.core.next(arglist__182133));
return G__182129__delegate.call(this, coll, x, xs);
});
return G__182129;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__182126.call(this,coll,x);
default:
return conj__182127.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__182127.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__182134 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__182135 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__182134.call(this,coll,n);
case  3 :
return nth__182135.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__182137 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__182138 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__182137.call(this,o,k);
case  3 :
return get__182138.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__182141 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__182142 = (function() { 
var G__182144__delegate = function (coll,k,v,kvs){
while(true){
var ret__182140 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__182145 = ret__182140;
var G__182146 = cljs.core.first.call(null,kvs);
var G__182147 = cljs.core.second.call(null,kvs);
var G__182148 = cljs.core.nnext.call(null,kvs);
coll = G__182145;
k = G__182146;
v = G__182147;
kvs = G__182148;
continue;
}
} else
{return ret__182140;
}
break;
}
};
var G__182144 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182144__delegate.call(this, coll, k, v, kvs);
};
G__182144.cljs$lang$maxFixedArity = 3;
G__182144.cljs$lang$applyTo = (function (arglist__182149){
var coll = cljs.core.first(arglist__182149);
var k = cljs.core.first(cljs.core.next(arglist__182149));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182149)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182149)));
return G__182144__delegate.call(this, coll, k, v, kvs);
});
return G__182144;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__182141.call(this,coll,k,v);
default:
return assoc__182142.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__182142.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__182151 = (function (coll){
return coll;
});
var dissoc__182152 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__182153 = (function() { 
var G__182155__delegate = function (coll,k,ks){
while(true){
var ret__182150 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__182156 = ret__182150;
var G__182157 = cljs.core.first.call(null,ks);
var G__182158 = cljs.core.next.call(null,ks);
coll = G__182156;
k = G__182157;
ks = G__182158;
continue;
}
} else
{return ret__182150;
}
break;
}
};
var G__182155 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182155__delegate.call(this, coll, k, ks);
};
G__182155.cljs$lang$maxFixedArity = 2;
G__182155.cljs$lang$applyTo = (function (arglist__182159){
var coll = cljs.core.first(arglist__182159);
var k = cljs.core.first(cljs.core.next(arglist__182159));
var ks = cljs.core.rest(cljs.core.next(arglist__182159));
return G__182155__delegate.call(this, coll, k, ks);
});
return G__182155;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__182151.call(this,coll);
case  2 :
return dissoc__182152.call(this,coll,k);
default:
return dissoc__182153.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__182153.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__451__auto____182160 = o;

if(cljs.core.truth_((function (){var and__3546__auto____182161 = x__451__auto____182160;

if(cljs.core.truth_(and__3546__auto____182161))
{var and__3546__auto____182162 = x__451__auto____182160.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____182162))
{return cljs.core.not.call(null,x__451__auto____182160.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____182162;
}
} else
{return and__3546__auto____182161;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____182160);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__182164 = (function (coll){
return coll;
});
var disj__182165 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__182166 = (function() { 
var G__182168__delegate = function (coll,k,ks){
while(true){
var ret__182163 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__182169 = ret__182163;
var G__182170 = cljs.core.first.call(null,ks);
var G__182171 = cljs.core.next.call(null,ks);
coll = G__182169;
k = G__182170;
ks = G__182171;
continue;
}
} else
{return ret__182163;
}
break;
}
};
var G__182168 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182168__delegate.call(this, coll, k, ks);
};
G__182168.cljs$lang$maxFixedArity = 2;
G__182168.cljs$lang$applyTo = (function (arglist__182172){
var coll = cljs.core.first(arglist__182172);
var k = cljs.core.first(cljs.core.next(arglist__182172));
var ks = cljs.core.rest(cljs.core.next(arglist__182172));
return G__182168__delegate.call(this, coll, k, ks);
});
return G__182168;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__182164.call(this,coll);
case  2 :
return disj__182165.call(this,coll,k);
default:
return disj__182166.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__182166.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____182173 = x;

if(cljs.core.truth_((function (){var and__3546__auto____182174 = x__451__auto____182173;

if(cljs.core.truth_(and__3546__auto____182174))
{var and__3546__auto____182175 = x__451__auto____182173.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____182175))
{return cljs.core.not.call(null,x__451__auto____182173.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____182175;
}
} else
{return and__3546__auto____182174;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____182173);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____182176 = x;

if(cljs.core.truth_((function (){var and__3546__auto____182177 = x__451__auto____182176;

if(cljs.core.truth_(and__3546__auto____182177))
{var and__3546__auto____182178 = x__451__auto____182176.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____182178))
{return cljs.core.not.call(null,x__451__auto____182176.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____182178;
}
} else
{return and__3546__auto____182177;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____182176);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____182179 = x;

if(cljs.core.truth_((function (){var and__3546__auto____182180 = x__451__auto____182179;

if(cljs.core.truth_(and__3546__auto____182180))
{var and__3546__auto____182181 = x__451__auto____182179.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____182181))
{return cljs.core.not.call(null,x__451__auto____182179.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____182181;
}
} else
{return and__3546__auto____182180;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____182179);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____182182 = x;

if(cljs.core.truth_((function (){var and__3546__auto____182183 = x__451__auto____182182;

if(cljs.core.truth_(and__3546__auto____182183))
{var and__3546__auto____182184 = x__451__auto____182182.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____182184))
{return cljs.core.not.call(null,x__451__auto____182182.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____182184;
}
} else
{return and__3546__auto____182183;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____182182);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____182185 = x;

if(cljs.core.truth_((function (){var and__3546__auto____182186 = x__451__auto____182185;

if(cljs.core.truth_(and__3546__auto____182186))
{var and__3546__auto____182187 = x__451__auto____182185.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____182187))
{return cljs.core.not.call(null,x__451__auto____182185.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____182187;
}
} else
{return and__3546__auto____182186;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____182185);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____182188 = x;

if(cljs.core.truth_((function (){var and__3546__auto____182189 = x__451__auto____182188;

if(cljs.core.truth_(and__3546__auto____182189))
{var and__3546__auto____182190 = x__451__auto____182188.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____182190))
{return cljs.core.not.call(null,x__451__auto____182188.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____182190;
}
} else
{return and__3546__auto____182189;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____182188);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____182191 = x;

if(cljs.core.truth_((function (){var and__3546__auto____182192 = x__451__auto____182191;

if(cljs.core.truth_(and__3546__auto____182192))
{var and__3546__auto____182193 = x__451__auto____182191.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____182193))
{return cljs.core.not.call(null,x__451__auto____182191.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____182193;
}
} else
{return and__3546__auto____182192;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____182191);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__182194 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__182194.push(key);
}));
return keys__182194;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__451__auto____182195 = s;

if(cljs.core.truth_((function (){var and__3546__auto____182196 = x__451__auto____182195;

if(cljs.core.truth_(and__3546__auto____182196))
{var and__3546__auto____182197 = x__451__auto____182195.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____182197))
{return cljs.core.not.call(null,x__451__auto____182195.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____182197;
}
} else
{return and__3546__auto____182196;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____182195);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____182198 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____182198))
{return cljs.core.not.call(null,(function (){var or__3548__auto____182199 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____182199))
{return or__3548__auto____182199;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____182198;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____182200 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____182200))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____182200;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____182201 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____182201))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____182201;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____182202 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____182202))
{return (n == n.toFixed());
} else
{return and__3546__auto____182202;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____182203 = coll;

if(cljs.core.truth_(and__3546__auto____182203))
{var and__3546__auto____182204 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____182204))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____182204;
}
} else
{return and__3546__auto____182203;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___182209 = (function (x){
return true;
});
var distinct_QMARK___182210 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___182211 = (function() { 
var G__182213__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__182205 = cljs.core.set([y,x]);
var xs__182206 = more;

while(true){
var x__182207 = cljs.core.first.call(null,xs__182206);
var etc__182208 = cljs.core.next.call(null,xs__182206);

if(cljs.core.truth_(xs__182206))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__182205,x__182207)))
{return false;
} else
{{
var G__182214 = cljs.core.conj.call(null,s__182205,x__182207);
var G__182215 = etc__182208;
s__182205 = G__182214;
xs__182206 = G__182215;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__182213 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182213__delegate.call(this, x, y, more);
};
G__182213.cljs$lang$maxFixedArity = 2;
G__182213.cljs$lang$applyTo = (function (arglist__182216){
var x = cljs.core.first(arglist__182216);
var y = cljs.core.first(cljs.core.next(arglist__182216));
var more = cljs.core.rest(cljs.core.next(arglist__182216));
return G__182213__delegate.call(this, x, y, more);
});
return G__182213;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___182209.call(this,x);
case  2 :
return distinct_QMARK___182210.call(this,x,y);
default:
return distinct_QMARK___182211.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___182211.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__182217 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__182217)))
{return r__182217;
} else
{if(cljs.core.truth_(r__182217))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__182219 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__182220 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__182218 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__182218,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__182218);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__182219.call(this,comp);
case  2 :
return sort__182220.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__182222 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__182223 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__182222.call(this,keyfn,comp);
case  3 :
return sort_by__182223.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__182225 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__182226 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__182225.call(this,f,val);
case  3 :
return reduce__182226.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__182232 = (function (f,coll){
var temp__3695__auto____182228 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____182228))
{var s__182229 = temp__3695__auto____182228;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__182229),cljs.core.next.call(null,s__182229));
} else
{return f.call(null);
}
});
var seq_reduce__182233 = (function (f,val,coll){
var val__182230 = val;
var coll__182231 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__182231))
{{
var G__182235 = f.call(null,val__182230,cljs.core.first.call(null,coll__182231));
var G__182236 = cljs.core.next.call(null,coll__182231);
val__182230 = G__182235;
coll__182231 = G__182236;
continue;
}
} else
{return val__182230;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__182232.call(this,f,val);
case  3 :
return seq_reduce__182233.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__182237 = null;
var G__182237__182238 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__182237__182239 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__182237 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__182237__182238.call(this,coll,f);
case  3 :
return G__182237__182239.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182237;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___182241 = (function (){
return 0;
});
var _PLUS___182242 = (function (x){
return x;
});
var _PLUS___182243 = (function (x,y){
return (x + y);
});
var _PLUS___182244 = (function() { 
var G__182246__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__182246 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182246__delegate.call(this, x, y, more);
};
G__182246.cljs$lang$maxFixedArity = 2;
G__182246.cljs$lang$applyTo = (function (arglist__182247){
var x = cljs.core.first(arglist__182247);
var y = cljs.core.first(cljs.core.next(arglist__182247));
var more = cljs.core.rest(cljs.core.next(arglist__182247));
return G__182246__delegate.call(this, x, y, more);
});
return G__182246;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___182241.call(this);
case  1 :
return _PLUS___182242.call(this,x);
case  2 :
return _PLUS___182243.call(this,x,y);
default:
return _PLUS___182244.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___182244.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___182248 = (function (x){
return (- x);
});
var ___182249 = (function (x,y){
return (x - y);
});
var ___182250 = (function() { 
var G__182252__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__182252 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182252__delegate.call(this, x, y, more);
};
G__182252.cljs$lang$maxFixedArity = 2;
G__182252.cljs$lang$applyTo = (function (arglist__182253){
var x = cljs.core.first(arglist__182253);
var y = cljs.core.first(cljs.core.next(arglist__182253));
var more = cljs.core.rest(cljs.core.next(arglist__182253));
return G__182252__delegate.call(this, x, y, more);
});
return G__182252;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___182248.call(this,x);
case  2 :
return ___182249.call(this,x,y);
default:
return ___182250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___182250.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___182254 = (function (){
return 1;
});
var _STAR___182255 = (function (x){
return x;
});
var _STAR___182256 = (function (x,y){
return (x * y);
});
var _STAR___182257 = (function() { 
var G__182259__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__182259 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182259__delegate.call(this, x, y, more);
};
G__182259.cljs$lang$maxFixedArity = 2;
G__182259.cljs$lang$applyTo = (function (arglist__182260){
var x = cljs.core.first(arglist__182260);
var y = cljs.core.first(cljs.core.next(arglist__182260));
var more = cljs.core.rest(cljs.core.next(arglist__182260));
return G__182259__delegate.call(this, x, y, more);
});
return G__182259;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___182254.call(this);
case  1 :
return _STAR___182255.call(this,x);
case  2 :
return _STAR___182256.call(this,x,y);
default:
return _STAR___182257.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___182257.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___182261 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___182262 = (function (x,y){
return (x / y);
});
var _SLASH___182263 = (function() { 
var G__182265__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__182265 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182265__delegate.call(this, x, y, more);
};
G__182265.cljs$lang$maxFixedArity = 2;
G__182265.cljs$lang$applyTo = (function (arglist__182266){
var x = cljs.core.first(arglist__182266);
var y = cljs.core.first(cljs.core.next(arglist__182266));
var more = cljs.core.rest(cljs.core.next(arglist__182266));
return G__182265__delegate.call(this, x, y, more);
});
return G__182265;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___182261.call(this,x);
case  2 :
return _SLASH___182262.call(this,x,y);
default:
return _SLASH___182263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___182263.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___182267 = (function (x){
return true;
});
var _LT___182268 = (function (x,y){
return (x < y);
});
var _LT___182269 = (function() { 
var G__182271__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__182272 = y;
var G__182273 = cljs.core.first.call(null,more);
var G__182274 = cljs.core.next.call(null,more);
x = G__182272;
y = G__182273;
more = G__182274;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__182271 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182271__delegate.call(this, x, y, more);
};
G__182271.cljs$lang$maxFixedArity = 2;
G__182271.cljs$lang$applyTo = (function (arglist__182275){
var x = cljs.core.first(arglist__182275);
var y = cljs.core.first(cljs.core.next(arglist__182275));
var more = cljs.core.rest(cljs.core.next(arglist__182275));
return G__182271__delegate.call(this, x, y, more);
});
return G__182271;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___182267.call(this,x);
case  2 :
return _LT___182268.call(this,x,y);
default:
return _LT___182269.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___182269.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___182276 = (function (x){
return true;
});
var _LT__EQ___182277 = (function (x,y){
return (x <= y);
});
var _LT__EQ___182278 = (function() { 
var G__182280__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__182281 = y;
var G__182282 = cljs.core.first.call(null,more);
var G__182283 = cljs.core.next.call(null,more);
x = G__182281;
y = G__182282;
more = G__182283;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__182280 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182280__delegate.call(this, x, y, more);
};
G__182280.cljs$lang$maxFixedArity = 2;
G__182280.cljs$lang$applyTo = (function (arglist__182284){
var x = cljs.core.first(arglist__182284);
var y = cljs.core.first(cljs.core.next(arglist__182284));
var more = cljs.core.rest(cljs.core.next(arglist__182284));
return G__182280__delegate.call(this, x, y, more);
});
return G__182280;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___182276.call(this,x);
case  2 :
return _LT__EQ___182277.call(this,x,y);
default:
return _LT__EQ___182278.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___182278.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___182285 = (function (x){
return true;
});
var _GT___182286 = (function (x,y){
return (x > y);
});
var _GT___182287 = (function() { 
var G__182289__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__182290 = y;
var G__182291 = cljs.core.first.call(null,more);
var G__182292 = cljs.core.next.call(null,more);
x = G__182290;
y = G__182291;
more = G__182292;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__182289 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182289__delegate.call(this, x, y, more);
};
G__182289.cljs$lang$maxFixedArity = 2;
G__182289.cljs$lang$applyTo = (function (arglist__182293){
var x = cljs.core.first(arglist__182293);
var y = cljs.core.first(cljs.core.next(arglist__182293));
var more = cljs.core.rest(cljs.core.next(arglist__182293));
return G__182289__delegate.call(this, x, y, more);
});
return G__182289;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___182285.call(this,x);
case  2 :
return _GT___182286.call(this,x,y);
default:
return _GT___182287.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___182287.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___182294 = (function (x){
return true;
});
var _GT__EQ___182295 = (function (x,y){
return (x >= y);
});
var _GT__EQ___182296 = (function() { 
var G__182298__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__182299 = y;
var G__182300 = cljs.core.first.call(null,more);
var G__182301 = cljs.core.next.call(null,more);
x = G__182299;
y = G__182300;
more = G__182301;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__182298 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182298__delegate.call(this, x, y, more);
};
G__182298.cljs$lang$maxFixedArity = 2;
G__182298.cljs$lang$applyTo = (function (arglist__182302){
var x = cljs.core.first(arglist__182302);
var y = cljs.core.first(cljs.core.next(arglist__182302));
var more = cljs.core.rest(cljs.core.next(arglist__182302));
return G__182298__delegate.call(this, x, y, more);
});
return G__182298;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___182294.call(this,x);
case  2 :
return _GT__EQ___182295.call(this,x,y);
default:
return _GT__EQ___182296.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___182296.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__182303 = (function (x){
return x;
});
var max__182304 = (function (x,y){
return ((x > y) ? x : y);
});
var max__182305 = (function() { 
var G__182307__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__182307 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182307__delegate.call(this, x, y, more);
};
G__182307.cljs$lang$maxFixedArity = 2;
G__182307.cljs$lang$applyTo = (function (arglist__182308){
var x = cljs.core.first(arglist__182308);
var y = cljs.core.first(cljs.core.next(arglist__182308));
var more = cljs.core.rest(cljs.core.next(arglist__182308));
return G__182307__delegate.call(this, x, y, more);
});
return G__182307;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__182303.call(this,x);
case  2 :
return max__182304.call(this,x,y);
default:
return max__182305.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__182305.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__182309 = (function (x){
return x;
});
var min__182310 = (function (x,y){
return ((x < y) ? x : y);
});
var min__182311 = (function() { 
var G__182313__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__182313 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182313__delegate.call(this, x, y, more);
};
G__182313.cljs$lang$maxFixedArity = 2;
G__182313.cljs$lang$applyTo = (function (arglist__182314){
var x = cljs.core.first(arglist__182314);
var y = cljs.core.first(cljs.core.next(arglist__182314));
var more = cljs.core.rest(cljs.core.next(arglist__182314));
return G__182313__delegate.call(this, x, y, more);
});
return G__182313;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__182309.call(this,x);
case  2 :
return min__182310.call(this,x,y);
default:
return min__182311.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__182311.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__182315 = (n % d);

return cljs.core.fix.call(null,((n - rem__182315) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__182316 = cljs.core.quot.call(null,n,d);

return (n - (d * q__182316));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__182317 = (function (){
return Math.random.call(null);
});
var rand__182318 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__182317.call(this);
case  1 :
return rand__182318.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___182320 = (function (x){
return true;
});
var _EQ__EQ___182321 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___182322 = (function() { 
var G__182324__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__182325 = y;
var G__182326 = cljs.core.first.call(null,more);
var G__182327 = cljs.core.next.call(null,more);
x = G__182325;
y = G__182326;
more = G__182327;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__182324 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182324__delegate.call(this, x, y, more);
};
G__182324.cljs$lang$maxFixedArity = 2;
G__182324.cljs$lang$applyTo = (function (arglist__182328){
var x = cljs.core.first(arglist__182328);
var y = cljs.core.first(cljs.core.next(arglist__182328));
var more = cljs.core.rest(cljs.core.next(arglist__182328));
return G__182324__delegate.call(this, x, y, more);
});
return G__182324;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___182320.call(this,x);
case  2 :
return _EQ__EQ___182321.call(this,x,y);
default:
return _EQ__EQ___182322.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___182322.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__182329 = n;
var xs__182330 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____182331 = xs__182330;

if(cljs.core.truth_(and__3546__auto____182331))
{return (n__182329 > 0);
} else
{return and__3546__auto____182331;
}
})()))
{{
var G__182332 = (n__182329 - 1);
var G__182333 = cljs.core.next.call(null,xs__182330);
n__182329 = G__182332;
xs__182330 = G__182333;
continue;
}
} else
{return xs__182330;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__182338 = null;
var G__182338__182339 = (function (coll,n){
var temp__3695__auto____182334 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____182334))
{var xs__182335 = temp__3695__auto____182334;

return cljs.core.first.call(null,xs__182335);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__182338__182340 = (function (coll,n,not_found){
var temp__3695__auto____182336 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____182336))
{var xs__182337 = temp__3695__auto____182336;

return cljs.core.first.call(null,xs__182337);
} else
{return not_found;
}
});
G__182338 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__182338__182339.call(this,coll,n);
case  3 :
return G__182338__182340.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182338;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___182342 = (function (){
return "";
});
var str_STAR___182343 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___182344 = (function() { 
var G__182346__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__182347 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__182348 = cljs.core.next.call(null,more);
sb = G__182347;
more = G__182348;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__182346 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__182346__delegate.call(this, x, ys);
};
G__182346.cljs$lang$maxFixedArity = 1;
G__182346.cljs$lang$applyTo = (function (arglist__182349){
var x = cljs.core.first(arglist__182349);
var ys = cljs.core.rest(arglist__182349);
return G__182346__delegate.call(this, x, ys);
});
return G__182346;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___182342.call(this);
case  1 :
return str_STAR___182343.call(this,x);
default:
return str_STAR___182344.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___182344.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__182350 = (function (){
return "";
});
var str__182351 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__182352 = (function() { 
var G__182354__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__182355 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__182356 = cljs.core.next.call(null,more);
sb = G__182355;
more = G__182356;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__182354 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__182354__delegate.call(this, x, ys);
};
G__182354.cljs$lang$maxFixedArity = 1;
G__182354.cljs$lang$applyTo = (function (arglist__182357){
var x = cljs.core.first(arglist__182357);
var ys = cljs.core.rest(arglist__182357);
return G__182354__delegate.call(this, x, ys);
});
return G__182354;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__182350.call(this);
case  1 :
return str__182351.call(this,x);
default:
return str__182352.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__182352.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__182358 = (function (s,start){
return s.substring(start);
});
var subs__182359 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__182358.call(this,s,start);
case  3 :
return subs__182359.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__182361 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__182362 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__182361.call(this,ns);
case  2 :
return symbol__182362.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__182364 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__182365 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__182364.call(this,ns);
case  2 :
return keyword__182365.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__182367 = cljs.core.seq.call(null,x);
var ys__182368 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__182367 === null)))
{return (ys__182368 === null);
} else
{if(cljs.core.truth_((ys__182368 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__182367),cljs.core.first.call(null,ys__182368))))
{{
var G__182369 = cljs.core.next.call(null,xs__182367);
var G__182370 = cljs.core.next.call(null,ys__182368);
xs__182367 = G__182369;
ys__182368 = G__182370;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__182371_SHARP_,p2__182372_SHARP_){
return cljs.core.hash_combine.call(null,p1__182371_SHARP_,cljs.core.hash.call(null,p2__182372_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__182373__182374 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__182373__182374))
{var G__182376__182378 = cljs.core.first.call(null,G__182373__182374);
var vec__182377__182379 = G__182376__182378;
var key_name__182380 = cljs.core.nth.call(null,vec__182377__182379,0,null);
var f__182381 = cljs.core.nth.call(null,vec__182377__182379,1,null);
var G__182373__182382 = G__182373__182374;

var G__182376__182383 = G__182376__182378;
var G__182373__182384 = G__182373__182382;

while(true){
var vec__182385__182386 = G__182376__182383;
var key_name__182387 = cljs.core.nth.call(null,vec__182385__182386,0,null);
var f__182388 = cljs.core.nth.call(null,vec__182385__182386,1,null);
var G__182373__182389 = G__182373__182384;

var str_name__182390 = cljs.core.name.call(null,key_name__182387);

obj[str_name__182390] = f__182388;
var temp__3698__auto____182391 = cljs.core.next.call(null,G__182373__182389);

if(cljs.core.truth_(temp__3698__auto____182391))
{var G__182373__182392 = temp__3698__auto____182391;

{
var G__182393 = cljs.core.first.call(null,G__182373__182392);
var G__182394 = G__182373__182392;
G__182376__182383 = G__182393;
G__182373__182384 = G__182394;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__182395 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__182396 = this;
return (new cljs.core.List(this__182396.meta,o,coll,(this__182396.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__182397 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__182398 = this;
return this__182398.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__182399 = this;
return this__182399.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__182400 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__182401 = this;
return this__182401.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__182402 = this;
return this__182402.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__182403 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__182404 = this;
return (new cljs.core.List(meta,this__182404.first,this__182404.rest,this__182404.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__182405 = this;
return this__182405.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__182406 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__182407 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__182408 = this;
return (new cljs.core.List(this__182408.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__182409 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__182410 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__182411 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__182412 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__182413 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__182414 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__182415 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__182416 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__182417 = this;
return this__182417.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__182418 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__182419){
var items = cljs.core.seq( arglist__182419 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__182420 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__182421 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__182422 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__182423 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__182423.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__182424 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__182425 = this;
return this__182425.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__182426 = this;
if(cljs.core.truth_((this__182426.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__182426.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__182427 = this;
return this__182427.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__182428 = this;
return (new cljs.core.Cons(meta,this__182428.first,this__182428.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__182429 = null;
var G__182429__182430 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__182429__182431 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__182429 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__182429__182430.call(this,string,f);
case  3 :
return G__182429__182431.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182429;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__182433 = null;
var G__182433__182434 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__182433__182435 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__182433 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__182433__182434.call(this,string,k);
case  3 :
return G__182433__182435.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182433;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__182437 = null;
var G__182437__182438 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__182437__182439 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__182437 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__182437__182438.call(this,string,n);
case  3 :
return G__182437__182439.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182437;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__182447 = null;
var G__182447__182448 = (function (tsym182441,coll){
var tsym182441__182443 = this;

var this$__182444 = tsym182441__182443;

return cljs.core.get.call(null,coll,this$__182444.toString());
});
var G__182447__182449 = (function (tsym182442,coll,not_found){
var tsym182442__182445 = this;

var this$__182446 = tsym182442__182445;

return cljs.core.get.call(null,coll,this$__182446.toString(),not_found);
});
G__182447 = function(tsym182442,coll,not_found){
switch(arguments.length){
case  2 :
return G__182447__182448.call(this,tsym182442,coll);
case  3 :
return G__182447__182449.call(this,tsym182442,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182447;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__182451 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__182451;
} else
{lazy_seq.x = x__182451.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__182452 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__182453 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__182454 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__182455 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__182455.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__182456 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__182457 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__182458 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__182459 = this;
return this__182459.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__182460 = this;
return (new cljs.core.LazySeq(meta,this__182460.realized,this__182460.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__182461 = [];

var s__182462 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__182462)))
{ary__182461.push(cljs.core.first.call(null,s__182462));
{
var G__182463 = cljs.core.next.call(null,s__182462);
s__182462 = G__182463;
continue;
}
} else
{return ary__182461;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__182464 = s;
var i__182465 = n;
var sum__182466 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____182467 = (i__182465 > 0);

if(cljs.core.truth_(and__3546__auto____182467))
{return cljs.core.seq.call(null,s__182464);
} else
{return and__3546__auto____182467;
}
})()))
{{
var G__182468 = cljs.core.next.call(null,s__182464);
var G__182469 = (i__182465 - 1);
var G__182470 = (sum__182466 + 1);
s__182464 = G__182468;
i__182465 = G__182469;
sum__182466 = G__182470;
continue;
}
} else
{return sum__182466;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__182474 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__182475 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__182476 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__182471 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__182471))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__182471),concat.call(null,cljs.core.rest.call(null,s__182471),y));
} else
{return y;
}
})));
});
var concat__182477 = (function() { 
var G__182479__delegate = function (x,y,zs){
var cat__182473 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__182472 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__182472))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__182472),cat.call(null,cljs.core.rest.call(null,xys__182472),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__182473.call(null,concat.call(null,x,y),zs);
};
var G__182479 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182479__delegate.call(this, x, y, zs);
};
G__182479.cljs$lang$maxFixedArity = 2;
G__182479.cljs$lang$applyTo = (function (arglist__182480){
var x = cljs.core.first(arglist__182480);
var y = cljs.core.first(cljs.core.next(arglist__182480));
var zs = cljs.core.rest(cljs.core.next(arglist__182480));
return G__182479__delegate.call(this, x, y, zs);
});
return G__182479;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__182474.call(this);
case  1 :
return concat__182475.call(this,x);
case  2 :
return concat__182476.call(this,x,y);
default:
return concat__182477.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__182477.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___182481 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___182482 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___182483 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___182484 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___182485 = (function() { 
var G__182487__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__182487 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__182487__delegate.call(this, a, b, c, d, more);
};
G__182487.cljs$lang$maxFixedArity = 4;
G__182487.cljs$lang$applyTo = (function (arglist__182488){
var a = cljs.core.first(arglist__182488);
var b = cljs.core.first(cljs.core.next(arglist__182488));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182488)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__182488))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__182488))));
return G__182487__delegate.call(this, a, b, c, d, more);
});
return G__182487;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___182481.call(this,a);
case  2 :
return list_STAR___182482.call(this,a,b);
case  3 :
return list_STAR___182483.call(this,a,b,c);
case  4 :
return list_STAR___182484.call(this,a,b,c,d);
default:
return list_STAR___182485.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___182485.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__182498 = (function (f,args){
var fixed_arity__182489 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__182489 + 1)) <= fixed_arity__182489)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__182499 = (function (f,x,args){
var arglist__182490 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__182491 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__182490,fixed_arity__182491) <= fixed_arity__182491)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__182490));
} else
{return f.cljs$lang$applyTo(arglist__182490);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__182490));
}
});
var apply__182500 = (function (f,x,y,args){
var arglist__182492 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__182493 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__182492,fixed_arity__182493) <= fixed_arity__182493)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__182492));
} else
{return f.cljs$lang$applyTo(arglist__182492);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__182492));
}
});
var apply__182501 = (function (f,x,y,z,args){
var arglist__182494 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__182495 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__182494,fixed_arity__182495) <= fixed_arity__182495)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__182494));
} else
{return f.cljs$lang$applyTo(arglist__182494);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__182494));
}
});
var apply__182502 = (function() { 
var G__182504__delegate = function (f,a,b,c,d,args){
var arglist__182496 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__182497 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__182496,fixed_arity__182497) <= fixed_arity__182497)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__182496));
} else
{return f.cljs$lang$applyTo(arglist__182496);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__182496));
}
};
var G__182504 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__182504__delegate.call(this, f, a, b, c, d, args);
};
G__182504.cljs$lang$maxFixedArity = 5;
G__182504.cljs$lang$applyTo = (function (arglist__182505){
var f = cljs.core.first(arglist__182505);
var a = cljs.core.first(cljs.core.next(arglist__182505));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182505)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__182505))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__182505)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__182505)))));
return G__182504__delegate.call(this, f, a, b, c, d, args);
});
return G__182504;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__182498.call(this,f,a);
case  3 :
return apply__182499.call(this,f,a,b);
case  4 :
return apply__182500.call(this,f,a,b,c);
case  5 :
return apply__182501.call(this,f,a,b,c,d);
default:
return apply__182502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__182502.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__182506){
var obj = cljs.core.first(arglist__182506);
var f = cljs.core.first(cljs.core.next(arglist__182506));
var args = cljs.core.rest(cljs.core.next(arglist__182506));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___182507 = (function (x){
return false;
});
var not_EQ___182508 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___182509 = (function() { 
var G__182511__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__182511 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182511__delegate.call(this, x, y, more);
};
G__182511.cljs$lang$maxFixedArity = 2;
G__182511.cljs$lang$applyTo = (function (arglist__182512){
var x = cljs.core.first(arglist__182512);
var y = cljs.core.first(cljs.core.next(arglist__182512));
var more = cljs.core.rest(cljs.core.next(arglist__182512));
return G__182511__delegate.call(this, x, y, more);
});
return G__182511;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___182507.call(this,x);
case  2 :
return not_EQ___182508.call(this,x,y);
default:
return not_EQ___182509.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___182509.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__182513 = pred;
var G__182514 = cljs.core.next.call(null,coll);
pred = G__182513;
coll = G__182514;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____182515 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____182515))
{return or__3548__auto____182515;
} else
{{
var G__182516 = pred;
var G__182517 = cljs.core.next.call(null,coll);
pred = G__182516;
coll = G__182517;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__182518 = null;
var G__182518__182519 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__182518__182520 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__182518__182521 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__182518__182522 = (function() { 
var G__182524__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__182524 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182524__delegate.call(this, x, y, zs);
};
G__182524.cljs$lang$maxFixedArity = 2;
G__182524.cljs$lang$applyTo = (function (arglist__182525){
var x = cljs.core.first(arglist__182525);
var y = cljs.core.first(cljs.core.next(arglist__182525));
var zs = cljs.core.rest(cljs.core.next(arglist__182525));
return G__182524__delegate.call(this, x, y, zs);
});
return G__182524;
})()
;
G__182518 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__182518__182519.call(this);
case  1 :
return G__182518__182520.call(this,x);
case  2 :
return G__182518__182521.call(this,x,y);
default:
return G__182518__182522.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__182518.cljs$lang$maxFixedArity = 2;
G__182518.cljs$lang$applyTo = G__182518__182522.cljs$lang$applyTo;
return G__182518;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__182526__delegate = function (args){
return x;
};
var G__182526 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__182526__delegate.call(this, args);
};
G__182526.cljs$lang$maxFixedArity = 0;
G__182526.cljs$lang$applyTo = (function (arglist__182527){
var args = cljs.core.seq( arglist__182527 );;
return G__182526__delegate.call(this, args);
});
return G__182526;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__182531 = (function (){
return cljs.core.identity;
});
var comp__182532 = (function (f){
return f;
});
var comp__182533 = (function (f,g){
return (function() {
var G__182537 = null;
var G__182537__182538 = (function (){
return f.call(null,g.call(null));
});
var G__182537__182539 = (function (x){
return f.call(null,g.call(null,x));
});
var G__182537__182540 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__182537__182541 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__182537__182542 = (function() { 
var G__182544__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__182544 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182544__delegate.call(this, x, y, z, args);
};
G__182544.cljs$lang$maxFixedArity = 3;
G__182544.cljs$lang$applyTo = (function (arglist__182545){
var x = cljs.core.first(arglist__182545);
var y = cljs.core.first(cljs.core.next(arglist__182545));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182545)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182545)));
return G__182544__delegate.call(this, x, y, z, args);
});
return G__182544;
})()
;
G__182537 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__182537__182538.call(this);
case  1 :
return G__182537__182539.call(this,x);
case  2 :
return G__182537__182540.call(this,x,y);
case  3 :
return G__182537__182541.call(this,x,y,z);
default:
return G__182537__182542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__182537.cljs$lang$maxFixedArity = 3;
G__182537.cljs$lang$applyTo = G__182537__182542.cljs$lang$applyTo;
return G__182537;
})()
});
var comp__182534 = (function (f,g,h){
return (function() {
var G__182546 = null;
var G__182546__182547 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__182546__182548 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__182546__182549 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__182546__182550 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__182546__182551 = (function() { 
var G__182553__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__182553 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182553__delegate.call(this, x, y, z, args);
};
G__182553.cljs$lang$maxFixedArity = 3;
G__182553.cljs$lang$applyTo = (function (arglist__182554){
var x = cljs.core.first(arglist__182554);
var y = cljs.core.first(cljs.core.next(arglist__182554));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182554)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182554)));
return G__182553__delegate.call(this, x, y, z, args);
});
return G__182553;
})()
;
G__182546 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__182546__182547.call(this);
case  1 :
return G__182546__182548.call(this,x);
case  2 :
return G__182546__182549.call(this,x,y);
case  3 :
return G__182546__182550.call(this,x,y,z);
default:
return G__182546__182551.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__182546.cljs$lang$maxFixedArity = 3;
G__182546.cljs$lang$applyTo = G__182546__182551.cljs$lang$applyTo;
return G__182546;
})()
});
var comp__182535 = (function() { 
var G__182555__delegate = function (f1,f2,f3,fs){
var fs__182528 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__182556__delegate = function (args){
var ret__182529 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__182528),args);
var fs__182530 = cljs.core.next.call(null,fs__182528);

while(true){
if(cljs.core.truth_(fs__182530))
{{
var G__182557 = cljs.core.first.call(null,fs__182530).call(null,ret__182529);
var G__182558 = cljs.core.next.call(null,fs__182530);
ret__182529 = G__182557;
fs__182530 = G__182558;
continue;
}
} else
{return ret__182529;
}
break;
}
};
var G__182556 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__182556__delegate.call(this, args);
};
G__182556.cljs$lang$maxFixedArity = 0;
G__182556.cljs$lang$applyTo = (function (arglist__182559){
var args = cljs.core.seq( arglist__182559 );;
return G__182556__delegate.call(this, args);
});
return G__182556;
})()
;
};
var G__182555 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182555__delegate.call(this, f1, f2, f3, fs);
};
G__182555.cljs$lang$maxFixedArity = 3;
G__182555.cljs$lang$applyTo = (function (arglist__182560){
var f1 = cljs.core.first(arglist__182560);
var f2 = cljs.core.first(cljs.core.next(arglist__182560));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182560)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182560)));
return G__182555__delegate.call(this, f1, f2, f3, fs);
});
return G__182555;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__182531.call(this);
case  1 :
return comp__182532.call(this,f1);
case  2 :
return comp__182533.call(this,f1,f2);
case  3 :
return comp__182534.call(this,f1,f2,f3);
default:
return comp__182535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__182535.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__182561 = (function (f,arg1){
return (function() { 
var G__182566__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__182566 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__182566__delegate.call(this, args);
};
G__182566.cljs$lang$maxFixedArity = 0;
G__182566.cljs$lang$applyTo = (function (arglist__182567){
var args = cljs.core.seq( arglist__182567 );;
return G__182566__delegate.call(this, args);
});
return G__182566;
})()
;
});
var partial__182562 = (function (f,arg1,arg2){
return (function() { 
var G__182568__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__182568 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__182568__delegate.call(this, args);
};
G__182568.cljs$lang$maxFixedArity = 0;
G__182568.cljs$lang$applyTo = (function (arglist__182569){
var args = cljs.core.seq( arglist__182569 );;
return G__182568__delegate.call(this, args);
});
return G__182568;
})()
;
});
var partial__182563 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__182570__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__182570 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__182570__delegate.call(this, args);
};
G__182570.cljs$lang$maxFixedArity = 0;
G__182570.cljs$lang$applyTo = (function (arglist__182571){
var args = cljs.core.seq( arglist__182571 );;
return G__182570__delegate.call(this, args);
});
return G__182570;
})()
;
});
var partial__182564 = (function() { 
var G__182572__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__182573__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__182573 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__182573__delegate.call(this, args);
};
G__182573.cljs$lang$maxFixedArity = 0;
G__182573.cljs$lang$applyTo = (function (arglist__182574){
var args = cljs.core.seq( arglist__182574 );;
return G__182573__delegate.call(this, args);
});
return G__182573;
})()
;
};
var G__182572 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__182572__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__182572.cljs$lang$maxFixedArity = 4;
G__182572.cljs$lang$applyTo = (function (arglist__182575){
var f = cljs.core.first(arglist__182575);
var arg1 = cljs.core.first(cljs.core.next(arglist__182575));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182575)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__182575))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__182575))));
return G__182572__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__182572;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__182561.call(this,f,arg1);
case  3 :
return partial__182562.call(this,f,arg1,arg2);
case  4 :
return partial__182563.call(this,f,arg1,arg2,arg3);
default:
return partial__182564.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__182564.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__182576 = (function (f,x){
return (function() {
var G__182580 = null;
var G__182580__182581 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__182580__182582 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__182580__182583 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__182580__182584 = (function() { 
var G__182586__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__182586 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182586__delegate.call(this, a, b, c, ds);
};
G__182586.cljs$lang$maxFixedArity = 3;
G__182586.cljs$lang$applyTo = (function (arglist__182587){
var a = cljs.core.first(arglist__182587);
var b = cljs.core.first(cljs.core.next(arglist__182587));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182587)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182587)));
return G__182586__delegate.call(this, a, b, c, ds);
});
return G__182586;
})()
;
G__182580 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__182580__182581.call(this,a);
case  2 :
return G__182580__182582.call(this,a,b);
case  3 :
return G__182580__182583.call(this,a,b,c);
default:
return G__182580__182584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__182580.cljs$lang$maxFixedArity = 3;
G__182580.cljs$lang$applyTo = G__182580__182584.cljs$lang$applyTo;
return G__182580;
})()
});
var fnil__182577 = (function (f,x,y){
return (function() {
var G__182588 = null;
var G__182588__182589 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__182588__182590 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__182588__182591 = (function() { 
var G__182593__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__182593 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182593__delegate.call(this, a, b, c, ds);
};
G__182593.cljs$lang$maxFixedArity = 3;
G__182593.cljs$lang$applyTo = (function (arglist__182594){
var a = cljs.core.first(arglist__182594);
var b = cljs.core.first(cljs.core.next(arglist__182594));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182594)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182594)));
return G__182593__delegate.call(this, a, b, c, ds);
});
return G__182593;
})()
;
G__182588 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__182588__182589.call(this,a,b);
case  3 :
return G__182588__182590.call(this,a,b,c);
default:
return G__182588__182591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__182588.cljs$lang$maxFixedArity = 3;
G__182588.cljs$lang$applyTo = G__182588__182591.cljs$lang$applyTo;
return G__182588;
})()
});
var fnil__182578 = (function (f,x,y,z){
return (function() {
var G__182595 = null;
var G__182595__182596 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__182595__182597 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__182595__182598 = (function() { 
var G__182600__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__182600 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182600__delegate.call(this, a, b, c, ds);
};
G__182600.cljs$lang$maxFixedArity = 3;
G__182600.cljs$lang$applyTo = (function (arglist__182601){
var a = cljs.core.first(arglist__182601);
var b = cljs.core.first(cljs.core.next(arglist__182601));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182601)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182601)));
return G__182600__delegate.call(this, a, b, c, ds);
});
return G__182600;
})()
;
G__182595 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__182595__182596.call(this,a,b);
case  3 :
return G__182595__182597.call(this,a,b,c);
default:
return G__182595__182598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__182595.cljs$lang$maxFixedArity = 3;
G__182595.cljs$lang$applyTo = G__182595__182598.cljs$lang$applyTo;
return G__182595;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__182576.call(this,f,x);
case  3 :
return fnil__182577.call(this,f,x,y);
case  4 :
return fnil__182578.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__182604 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____182602 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____182602))
{var s__182603 = temp__3698__auto____182602;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__182603)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__182603)));
} else
{return null;
}
})));
});

return mapi__182604.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____182605 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____182605))
{var s__182606 = temp__3698__auto____182605;

var x__182607 = f.call(null,cljs.core.first.call(null,s__182606));

if(cljs.core.truth_((x__182607 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__182606));
} else
{return cljs.core.cons.call(null,x__182607,keep.call(null,f,cljs.core.rest.call(null,s__182606)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__182617 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____182614 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____182614))
{var s__182615 = temp__3698__auto____182614;

var x__182616 = f.call(null,idx,cljs.core.first.call(null,s__182615));

if(cljs.core.truth_((x__182616 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__182615));
} else
{return cljs.core.cons.call(null,x__182616,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__182615)));
}
} else
{return null;
}
})));
});

return keepi__182617.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__182662 = (function (p){
return (function() {
var ep1 = null;
var ep1__182667 = (function (){
return true;
});
var ep1__182668 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__182669 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____182624 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____182624))
{return p.call(null,y);
} else
{return and__3546__auto____182624;
}
})());
});
var ep1__182670 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____182625 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____182625))
{var and__3546__auto____182626 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____182626))
{return p.call(null,z);
} else
{return and__3546__auto____182626;
}
} else
{return and__3546__auto____182625;
}
})());
});
var ep1__182671 = (function() { 
var G__182673__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____182627 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____182627))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____182627;
}
})());
};
var G__182673 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182673__delegate.call(this, x, y, z, args);
};
G__182673.cljs$lang$maxFixedArity = 3;
G__182673.cljs$lang$applyTo = (function (arglist__182674){
var x = cljs.core.first(arglist__182674);
var y = cljs.core.first(cljs.core.next(arglist__182674));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182674)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182674)));
return G__182673__delegate.call(this, x, y, z, args);
});
return G__182673;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__182667.call(this);
case  1 :
return ep1__182668.call(this,x);
case  2 :
return ep1__182669.call(this,x,y);
case  3 :
return ep1__182670.call(this,x,y,z);
default:
return ep1__182671.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__182671.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__182663 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__182675 = (function (){
return true;
});
var ep2__182676 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____182628 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____182628))
{return p2.call(null,x);
} else
{return and__3546__auto____182628;
}
})());
});
var ep2__182677 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____182629 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____182629))
{var and__3546__auto____182630 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____182630))
{var and__3546__auto____182631 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____182631))
{return p2.call(null,y);
} else
{return and__3546__auto____182631;
}
} else
{return and__3546__auto____182630;
}
} else
{return and__3546__auto____182629;
}
})());
});
var ep2__182678 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____182632 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____182632))
{var and__3546__auto____182633 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____182633))
{var and__3546__auto____182634 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____182634))
{var and__3546__auto____182635 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____182635))
{var and__3546__auto____182636 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____182636))
{return p2.call(null,z);
} else
{return and__3546__auto____182636;
}
} else
{return and__3546__auto____182635;
}
} else
{return and__3546__auto____182634;
}
} else
{return and__3546__auto____182633;
}
} else
{return and__3546__auto____182632;
}
})());
});
var ep2__182679 = (function() { 
var G__182681__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____182637 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____182637))
{return cljs.core.every_QMARK_.call(null,(function (p1__182608_SHARP_){
var and__3546__auto____182638 = p1.call(null,p1__182608_SHARP_);

if(cljs.core.truth_(and__3546__auto____182638))
{return p2.call(null,p1__182608_SHARP_);
} else
{return and__3546__auto____182638;
}
}),args);
} else
{return and__3546__auto____182637;
}
})());
};
var G__182681 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182681__delegate.call(this, x, y, z, args);
};
G__182681.cljs$lang$maxFixedArity = 3;
G__182681.cljs$lang$applyTo = (function (arglist__182682){
var x = cljs.core.first(arglist__182682);
var y = cljs.core.first(cljs.core.next(arglist__182682));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182682)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182682)));
return G__182681__delegate.call(this, x, y, z, args);
});
return G__182681;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__182675.call(this);
case  1 :
return ep2__182676.call(this,x);
case  2 :
return ep2__182677.call(this,x,y);
case  3 :
return ep2__182678.call(this,x,y,z);
default:
return ep2__182679.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__182679.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__182664 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__182683 = (function (){
return true;
});
var ep3__182684 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____182639 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____182639))
{var and__3546__auto____182640 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____182640))
{return p3.call(null,x);
} else
{return and__3546__auto____182640;
}
} else
{return and__3546__auto____182639;
}
})());
});
var ep3__182685 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____182641 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____182641))
{var and__3546__auto____182642 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____182642))
{var and__3546__auto____182643 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____182643))
{var and__3546__auto____182644 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____182644))
{var and__3546__auto____182645 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____182645))
{return p3.call(null,y);
} else
{return and__3546__auto____182645;
}
} else
{return and__3546__auto____182644;
}
} else
{return and__3546__auto____182643;
}
} else
{return and__3546__auto____182642;
}
} else
{return and__3546__auto____182641;
}
})());
});
var ep3__182686 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____182646 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____182646))
{var and__3546__auto____182647 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____182647))
{var and__3546__auto____182648 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____182648))
{var and__3546__auto____182649 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____182649))
{var and__3546__auto____182650 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____182650))
{var and__3546__auto____182651 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____182651))
{var and__3546__auto____182652 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____182652))
{var and__3546__auto____182653 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____182653))
{return p3.call(null,z);
} else
{return and__3546__auto____182653;
}
} else
{return and__3546__auto____182652;
}
} else
{return and__3546__auto____182651;
}
} else
{return and__3546__auto____182650;
}
} else
{return and__3546__auto____182649;
}
} else
{return and__3546__auto____182648;
}
} else
{return and__3546__auto____182647;
}
} else
{return and__3546__auto____182646;
}
})());
});
var ep3__182687 = (function() { 
var G__182689__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____182654 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____182654))
{return cljs.core.every_QMARK_.call(null,(function (p1__182609_SHARP_){
var and__3546__auto____182655 = p1.call(null,p1__182609_SHARP_);

if(cljs.core.truth_(and__3546__auto____182655))
{var and__3546__auto____182656 = p2.call(null,p1__182609_SHARP_);

if(cljs.core.truth_(and__3546__auto____182656))
{return p3.call(null,p1__182609_SHARP_);
} else
{return and__3546__auto____182656;
}
} else
{return and__3546__auto____182655;
}
}),args);
} else
{return and__3546__auto____182654;
}
})());
};
var G__182689 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182689__delegate.call(this, x, y, z, args);
};
G__182689.cljs$lang$maxFixedArity = 3;
G__182689.cljs$lang$applyTo = (function (arglist__182690){
var x = cljs.core.first(arglist__182690);
var y = cljs.core.first(cljs.core.next(arglist__182690));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182690)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182690)));
return G__182689__delegate.call(this, x, y, z, args);
});
return G__182689;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__182683.call(this);
case  1 :
return ep3__182684.call(this,x);
case  2 :
return ep3__182685.call(this,x,y);
case  3 :
return ep3__182686.call(this,x,y,z);
default:
return ep3__182687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__182687.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__182665 = (function() { 
var G__182691__delegate = function (p1,p2,p3,ps){
var ps__182657 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__182692 = (function (){
return true;
});
var epn__182693 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__182610_SHARP_){
return p1__182610_SHARP_.call(null,x);
}),ps__182657);
});
var epn__182694 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__182611_SHARP_){
var and__3546__auto____182658 = p1__182611_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____182658))
{return p1__182611_SHARP_.call(null,y);
} else
{return and__3546__auto____182658;
}
}),ps__182657);
});
var epn__182695 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__182612_SHARP_){
var and__3546__auto____182659 = p1__182612_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____182659))
{var and__3546__auto____182660 = p1__182612_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____182660))
{return p1__182612_SHARP_.call(null,z);
} else
{return and__3546__auto____182660;
}
} else
{return and__3546__auto____182659;
}
}),ps__182657);
});
var epn__182696 = (function() { 
var G__182698__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____182661 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____182661))
{return cljs.core.every_QMARK_.call(null,(function (p1__182613_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__182613_SHARP_,args);
}),ps__182657);
} else
{return and__3546__auto____182661;
}
})());
};
var G__182698 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182698__delegate.call(this, x, y, z, args);
};
G__182698.cljs$lang$maxFixedArity = 3;
G__182698.cljs$lang$applyTo = (function (arglist__182699){
var x = cljs.core.first(arglist__182699);
var y = cljs.core.first(cljs.core.next(arglist__182699));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182699)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182699)));
return G__182698__delegate.call(this, x, y, z, args);
});
return G__182698;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__182692.call(this);
case  1 :
return epn__182693.call(this,x);
case  2 :
return epn__182694.call(this,x,y);
case  3 :
return epn__182695.call(this,x,y,z);
default:
return epn__182696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__182696.cljs$lang$applyTo;
return epn;
})()
};
var G__182691 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182691__delegate.call(this, p1, p2, p3, ps);
};
G__182691.cljs$lang$maxFixedArity = 3;
G__182691.cljs$lang$applyTo = (function (arglist__182700){
var p1 = cljs.core.first(arglist__182700);
var p2 = cljs.core.first(cljs.core.next(arglist__182700));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182700)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182700)));
return G__182691__delegate.call(this, p1, p2, p3, ps);
});
return G__182691;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__182662.call(this,p1);
case  2 :
return every_pred__182663.call(this,p1,p2);
case  3 :
return every_pred__182664.call(this,p1,p2,p3);
default:
return every_pred__182665.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__182665.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__182740 = (function (p){
return (function() {
var sp1 = null;
var sp1__182745 = (function (){
return null;
});
var sp1__182746 = (function (x){
return p.call(null,x);
});
var sp1__182747 = (function (x,y){
var or__3548__auto____182702 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____182702))
{return or__3548__auto____182702;
} else
{return p.call(null,y);
}
});
var sp1__182748 = (function (x,y,z){
var or__3548__auto____182703 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____182703))
{return or__3548__auto____182703;
} else
{var or__3548__auto____182704 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____182704))
{return or__3548__auto____182704;
} else
{return p.call(null,z);
}
}
});
var sp1__182749 = (function() { 
var G__182751__delegate = function (x,y,z,args){
var or__3548__auto____182705 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____182705))
{return or__3548__auto____182705;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__182751 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182751__delegate.call(this, x, y, z, args);
};
G__182751.cljs$lang$maxFixedArity = 3;
G__182751.cljs$lang$applyTo = (function (arglist__182752){
var x = cljs.core.first(arglist__182752);
var y = cljs.core.first(cljs.core.next(arglist__182752));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182752)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182752)));
return G__182751__delegate.call(this, x, y, z, args);
});
return G__182751;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__182745.call(this);
case  1 :
return sp1__182746.call(this,x);
case  2 :
return sp1__182747.call(this,x,y);
case  3 :
return sp1__182748.call(this,x,y,z);
default:
return sp1__182749.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__182749.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__182741 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__182753 = (function (){
return null;
});
var sp2__182754 = (function (x){
var or__3548__auto____182706 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____182706))
{return or__3548__auto____182706;
} else
{return p2.call(null,x);
}
});
var sp2__182755 = (function (x,y){
var or__3548__auto____182707 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____182707))
{return or__3548__auto____182707;
} else
{var or__3548__auto____182708 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____182708))
{return or__3548__auto____182708;
} else
{var or__3548__auto____182709 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____182709))
{return or__3548__auto____182709;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__182756 = (function (x,y,z){
var or__3548__auto____182710 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____182710))
{return or__3548__auto____182710;
} else
{var or__3548__auto____182711 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____182711))
{return or__3548__auto____182711;
} else
{var or__3548__auto____182712 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____182712))
{return or__3548__auto____182712;
} else
{var or__3548__auto____182713 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____182713))
{return or__3548__auto____182713;
} else
{var or__3548__auto____182714 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____182714))
{return or__3548__auto____182714;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__182757 = (function() { 
var G__182759__delegate = function (x,y,z,args){
var or__3548__auto____182715 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____182715))
{return or__3548__auto____182715;
} else
{return cljs.core.some.call(null,(function (p1__182618_SHARP_){
var or__3548__auto____182716 = p1.call(null,p1__182618_SHARP_);

if(cljs.core.truth_(or__3548__auto____182716))
{return or__3548__auto____182716;
} else
{return p2.call(null,p1__182618_SHARP_);
}
}),args);
}
};
var G__182759 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182759__delegate.call(this, x, y, z, args);
};
G__182759.cljs$lang$maxFixedArity = 3;
G__182759.cljs$lang$applyTo = (function (arglist__182760){
var x = cljs.core.first(arglist__182760);
var y = cljs.core.first(cljs.core.next(arglist__182760));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182760)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182760)));
return G__182759__delegate.call(this, x, y, z, args);
});
return G__182759;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__182753.call(this);
case  1 :
return sp2__182754.call(this,x);
case  2 :
return sp2__182755.call(this,x,y);
case  3 :
return sp2__182756.call(this,x,y,z);
default:
return sp2__182757.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__182757.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__182742 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__182761 = (function (){
return null;
});
var sp3__182762 = (function (x){
var or__3548__auto____182717 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____182717))
{return or__3548__auto____182717;
} else
{var or__3548__auto____182718 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____182718))
{return or__3548__auto____182718;
} else
{return p3.call(null,x);
}
}
});
var sp3__182763 = (function (x,y){
var or__3548__auto____182719 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____182719))
{return or__3548__auto____182719;
} else
{var or__3548__auto____182720 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____182720))
{return or__3548__auto____182720;
} else
{var or__3548__auto____182721 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____182721))
{return or__3548__auto____182721;
} else
{var or__3548__auto____182722 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____182722))
{return or__3548__auto____182722;
} else
{var or__3548__auto____182723 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____182723))
{return or__3548__auto____182723;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__182764 = (function (x,y,z){
var or__3548__auto____182724 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____182724))
{return or__3548__auto____182724;
} else
{var or__3548__auto____182725 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____182725))
{return or__3548__auto____182725;
} else
{var or__3548__auto____182726 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____182726))
{return or__3548__auto____182726;
} else
{var or__3548__auto____182727 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____182727))
{return or__3548__auto____182727;
} else
{var or__3548__auto____182728 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____182728))
{return or__3548__auto____182728;
} else
{var or__3548__auto____182729 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____182729))
{return or__3548__auto____182729;
} else
{var or__3548__auto____182730 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____182730))
{return or__3548__auto____182730;
} else
{var or__3548__auto____182731 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____182731))
{return or__3548__auto____182731;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__182765 = (function() { 
var G__182767__delegate = function (x,y,z,args){
var or__3548__auto____182732 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____182732))
{return or__3548__auto____182732;
} else
{return cljs.core.some.call(null,(function (p1__182619_SHARP_){
var or__3548__auto____182733 = p1.call(null,p1__182619_SHARP_);

if(cljs.core.truth_(or__3548__auto____182733))
{return or__3548__auto____182733;
} else
{var or__3548__auto____182734 = p2.call(null,p1__182619_SHARP_);

if(cljs.core.truth_(or__3548__auto____182734))
{return or__3548__auto____182734;
} else
{return p3.call(null,p1__182619_SHARP_);
}
}
}),args);
}
};
var G__182767 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182767__delegate.call(this, x, y, z, args);
};
G__182767.cljs$lang$maxFixedArity = 3;
G__182767.cljs$lang$applyTo = (function (arglist__182768){
var x = cljs.core.first(arglist__182768);
var y = cljs.core.first(cljs.core.next(arglist__182768));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182768)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182768)));
return G__182767__delegate.call(this, x, y, z, args);
});
return G__182767;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__182761.call(this);
case  1 :
return sp3__182762.call(this,x);
case  2 :
return sp3__182763.call(this,x,y);
case  3 :
return sp3__182764.call(this,x,y,z);
default:
return sp3__182765.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__182765.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__182743 = (function() { 
var G__182769__delegate = function (p1,p2,p3,ps){
var ps__182735 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__182770 = (function (){
return null;
});
var spn__182771 = (function (x){
return cljs.core.some.call(null,(function (p1__182620_SHARP_){
return p1__182620_SHARP_.call(null,x);
}),ps__182735);
});
var spn__182772 = (function (x,y){
return cljs.core.some.call(null,(function (p1__182621_SHARP_){
var or__3548__auto____182736 = p1__182621_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____182736))
{return or__3548__auto____182736;
} else
{return p1__182621_SHARP_.call(null,y);
}
}),ps__182735);
});
var spn__182773 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__182622_SHARP_){
var or__3548__auto____182737 = p1__182622_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____182737))
{return or__3548__auto____182737;
} else
{var or__3548__auto____182738 = p1__182622_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____182738))
{return or__3548__auto____182738;
} else
{return p1__182622_SHARP_.call(null,z);
}
}
}),ps__182735);
});
var spn__182774 = (function() { 
var G__182776__delegate = function (x,y,z,args){
var or__3548__auto____182739 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____182739))
{return or__3548__auto____182739;
} else
{return cljs.core.some.call(null,(function (p1__182623_SHARP_){
return cljs.core.some.call(null,p1__182623_SHARP_,args);
}),ps__182735);
}
};
var G__182776 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182776__delegate.call(this, x, y, z, args);
};
G__182776.cljs$lang$maxFixedArity = 3;
G__182776.cljs$lang$applyTo = (function (arglist__182777){
var x = cljs.core.first(arglist__182777);
var y = cljs.core.first(cljs.core.next(arglist__182777));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182777)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182777)));
return G__182776__delegate.call(this, x, y, z, args);
});
return G__182776;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__182770.call(this);
case  1 :
return spn__182771.call(this,x);
case  2 :
return spn__182772.call(this,x,y);
case  3 :
return spn__182773.call(this,x,y,z);
default:
return spn__182774.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__182774.cljs$lang$applyTo;
return spn;
})()
};
var G__182769 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__182769__delegate.call(this, p1, p2, p3, ps);
};
G__182769.cljs$lang$maxFixedArity = 3;
G__182769.cljs$lang$applyTo = (function (arglist__182778){
var p1 = cljs.core.first(arglist__182778);
var p2 = cljs.core.first(cljs.core.next(arglist__182778));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182778)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182778)));
return G__182769__delegate.call(this, p1, p2, p3, ps);
});
return G__182769;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__182740.call(this,p1);
case  2 :
return some_fn__182741.call(this,p1,p2);
case  3 :
return some_fn__182742.call(this,p1,p2,p3);
default:
return some_fn__182743.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__182743.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__182791 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____182779 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____182779))
{var s__182780 = temp__3698__auto____182779;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__182780)),map.call(null,f,cljs.core.rest.call(null,s__182780)));
} else
{return null;
}
})));
});
var map__182792 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__182781 = cljs.core.seq.call(null,c1);
var s2__182782 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____182783 = s1__182781;

if(cljs.core.truth_(and__3546__auto____182783))
{return s2__182782;
} else
{return and__3546__auto____182783;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__182781),cljs.core.first.call(null,s2__182782)),map.call(null,f,cljs.core.rest.call(null,s1__182781),cljs.core.rest.call(null,s2__182782)));
} else
{return null;
}
})));
});
var map__182793 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__182784 = cljs.core.seq.call(null,c1);
var s2__182785 = cljs.core.seq.call(null,c2);
var s3__182786 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____182787 = s1__182784;

if(cljs.core.truth_(and__3546__auto____182787))
{var and__3546__auto____182788 = s2__182785;

if(cljs.core.truth_(and__3546__auto____182788))
{return s3__182786;
} else
{return and__3546__auto____182788;
}
} else
{return and__3546__auto____182787;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__182784),cljs.core.first.call(null,s2__182785),cljs.core.first.call(null,s3__182786)),map.call(null,f,cljs.core.rest.call(null,s1__182784),cljs.core.rest.call(null,s2__182785),cljs.core.rest.call(null,s3__182786)));
} else
{return null;
}
})));
});
var map__182794 = (function() { 
var G__182796__delegate = function (f,c1,c2,c3,colls){
var step__182790 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__182789 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__182789)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__182789),step.call(null,map.call(null,cljs.core.rest,ss__182789)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__182701_SHARP_){
return cljs.core.apply.call(null,f,p1__182701_SHARP_);
}),step__182790.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__182796 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__182796__delegate.call(this, f, c1, c2, c3, colls);
};
G__182796.cljs$lang$maxFixedArity = 4;
G__182796.cljs$lang$applyTo = (function (arglist__182797){
var f = cljs.core.first(arglist__182797);
var c1 = cljs.core.first(cljs.core.next(arglist__182797));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182797)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__182797))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__182797))));
return G__182796__delegate.call(this, f, c1, c2, c3, colls);
});
return G__182796;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__182791.call(this,f,c1);
case  3 :
return map__182792.call(this,f,c1,c2);
case  4 :
return map__182793.call(this,f,c1,c2,c3);
default:
return map__182794.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__182794.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____182798 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____182798))
{var s__182799 = temp__3698__auto____182798;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__182799),take.call(null,(n - 1),cljs.core.rest.call(null,s__182799)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__182802 = (function (n,coll){
while(true){
var s__182800 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____182801 = (n > 0);

if(cljs.core.truth_(and__3546__auto____182801))
{return s__182800;
} else
{return and__3546__auto____182801;
}
})()))
{{
var G__182803 = (n - 1);
var G__182804 = cljs.core.rest.call(null,s__182800);
n = G__182803;
coll = G__182804;
continue;
}
} else
{return s__182800;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__182802.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__182805 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__182806 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__182805.call(this,n);
case  2 :
return drop_last__182806.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__182808 = cljs.core.seq.call(null,coll);
var lead__182809 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__182809))
{{
var G__182810 = cljs.core.next.call(null,s__182808);
var G__182811 = cljs.core.next.call(null,lead__182809);
s__182808 = G__182810;
lead__182809 = G__182811;
continue;
}
} else
{return s__182808;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__182814 = (function (pred,coll){
while(true){
var s__182812 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____182813 = s__182812;

if(cljs.core.truth_(and__3546__auto____182813))
{return pred.call(null,cljs.core.first.call(null,s__182812));
} else
{return and__3546__auto____182813;
}
})()))
{{
var G__182815 = pred;
var G__182816 = cljs.core.rest.call(null,s__182812);
pred = G__182815;
coll = G__182816;
continue;
}
} else
{return s__182812;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__182814.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____182817 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____182817))
{var s__182818 = temp__3698__auto____182817;

return cljs.core.concat.call(null,s__182818,cycle.call(null,s__182818));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__182819 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__182820 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__182819.call(this,n);
case  2 :
return repeat__182820.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__182822 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__182823 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__182822.call(this,n);
case  2 :
return repeatedly__182823.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__182829 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__182825 = cljs.core.seq.call(null,c1);
var s2__182826 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____182827 = s1__182825;

if(cljs.core.truth_(and__3546__auto____182827))
{return s2__182826;
} else
{return and__3546__auto____182827;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__182825),cljs.core.cons.call(null,cljs.core.first.call(null,s2__182826),interleave.call(null,cljs.core.rest.call(null,s1__182825),cljs.core.rest.call(null,s2__182826))));
} else
{return null;
}
})));
});
var interleave__182830 = (function() { 
var G__182832__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__182828 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__182828)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__182828),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__182828)));
} else
{return null;
}
})));
};
var G__182832 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182832__delegate.call(this, c1, c2, colls);
};
G__182832.cljs$lang$maxFixedArity = 2;
G__182832.cljs$lang$applyTo = (function (arglist__182833){
var c1 = cljs.core.first(arglist__182833);
var c2 = cljs.core.first(cljs.core.next(arglist__182833));
var colls = cljs.core.rest(cljs.core.next(arglist__182833));
return G__182832__delegate.call(this, c1, c2, colls);
});
return G__182832;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__182829.call(this,c1,c2);
default:
return interleave__182830.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__182830.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__182836 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____182834 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____182834))
{var coll__182835 = temp__3695__auto____182834;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__182835),cat.call(null,cljs.core.rest.call(null,coll__182835),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__182836.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__182837 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__182838 = (function() { 
var G__182840__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__182840 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__182840__delegate.call(this, f, coll, colls);
};
G__182840.cljs$lang$maxFixedArity = 2;
G__182840.cljs$lang$applyTo = (function (arglist__182841){
var f = cljs.core.first(arglist__182841);
var coll = cljs.core.first(cljs.core.next(arglist__182841));
var colls = cljs.core.rest(cljs.core.next(arglist__182841));
return G__182840__delegate.call(this, f, coll, colls);
});
return G__182840;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__182837.call(this,f,coll);
default:
return mapcat__182838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__182838.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____182842 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____182842))
{var s__182843 = temp__3698__auto____182842;

var f__182844 = cljs.core.first.call(null,s__182843);
var r__182845 = cljs.core.rest.call(null,s__182843);

if(cljs.core.truth_(pred.call(null,f__182844)))
{return cljs.core.cons.call(null,f__182844,filter.call(null,pred,r__182845));
} else
{return filter.call(null,pred,r__182845);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__182847 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__182847.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__182846_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__182846_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__182854 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__182855 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____182848 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____182848))
{var s__182849 = temp__3698__auto____182848;

var p__182850 = cljs.core.take.call(null,n,s__182849);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__182850))))
{return cljs.core.cons.call(null,p__182850,partition.call(null,n,step,cljs.core.drop.call(null,step,s__182849)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__182856 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____182851 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____182851))
{var s__182852 = temp__3698__auto____182851;

var p__182853 = cljs.core.take.call(null,n,s__182852);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__182853))))
{return cljs.core.cons.call(null,p__182853,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__182852)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__182853,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__182854.call(this,n,step);
case  3 :
return partition__182855.call(this,n,step,pad);
case  4 :
return partition__182856.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__182862 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__182863 = (function (m,ks,not_found){
var sentinel__182858 = cljs.core.lookup_sentinel;
var m__182859 = m;
var ks__182860 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__182860))
{var m__182861 = cljs.core.get.call(null,m__182859,cljs.core.first.call(null,ks__182860),sentinel__182858);

if(cljs.core.truth_((sentinel__182858 === m__182861)))
{return not_found;
} else
{{
var G__182865 = sentinel__182858;
var G__182866 = m__182861;
var G__182867 = cljs.core.next.call(null,ks__182860);
sentinel__182858 = G__182865;
m__182859 = G__182866;
ks__182860 = G__182867;
continue;
}
}
} else
{return m__182859;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__182862.call(this,m,ks);
case  3 :
return get_in__182863.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__182868,v){
var vec__182869__182870 = p__182868;
var k__182871 = cljs.core.nth.call(null,vec__182869__182870,0,null);
var ks__182872 = cljs.core.nthnext.call(null,vec__182869__182870,1);

if(cljs.core.truth_(ks__182872))
{return cljs.core.assoc.call(null,m,k__182871,assoc_in.call(null,cljs.core.get.call(null,m,k__182871),ks__182872,v));
} else
{return cljs.core.assoc.call(null,m,k__182871,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__182873,f,args){
var vec__182874__182875 = p__182873;
var k__182876 = cljs.core.nth.call(null,vec__182874__182875,0,null);
var ks__182877 = cljs.core.nthnext.call(null,vec__182874__182875,1);

if(cljs.core.truth_(ks__182877))
{return cljs.core.assoc.call(null,m,k__182876,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__182876),ks__182877,f,args));
} else
{return cljs.core.assoc.call(null,m,k__182876,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__182876),args));
}
};
var update_in = function (m,p__182873,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__182873, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__182878){
var m = cljs.core.first(arglist__182878);
var p__182873 = cljs.core.first(cljs.core.next(arglist__182878));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__182878)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__182878)));
return update_in__delegate.call(this, m, p__182873, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__182879 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__182912 = null;
var G__182912__182913 = (function (coll,k){
var this__182880 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__182912__182914 = (function (coll,k,not_found){
var this__182881 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__182912 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__182912__182913.call(this,coll,k);
case  3 :
return G__182912__182914.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182912;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__182882 = this;
var new_array__182883 = cljs.core.aclone.call(null,this__182882.array);

(new_array__182883[k] = v);
return (new cljs.core.Vector(this__182882.meta,new_array__182883));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__182916 = null;
var G__182916__182917 = (function (tsym182884,k){
var this__182886 = this;
var tsym182884__182887 = this;

var coll__182888 = tsym182884__182887;

return cljs.core._lookup.call(null,coll__182888,k);
});
var G__182916__182918 = (function (tsym182885,k,not_found){
var this__182889 = this;
var tsym182885__182890 = this;

var coll__182891 = tsym182885__182890;

return cljs.core._lookup.call(null,coll__182891,k,not_found);
});
G__182916 = function(tsym182885,k,not_found){
switch(arguments.length){
case  2 :
return G__182916__182917.call(this,tsym182885,k);
case  3 :
return G__182916__182918.call(this,tsym182885,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182916;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__182892 = this;
var new_array__182893 = cljs.core.aclone.call(null,this__182892.array);

new_array__182893.push(o);
return (new cljs.core.Vector(this__182892.meta,new_array__182893));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__182920 = null;
var G__182920__182921 = (function (v,f){
var this__182894 = this;
return cljs.core.ci_reduce.call(null,this__182894.array,f);
});
var G__182920__182922 = (function (v,f,start){
var this__182895 = this;
return cljs.core.ci_reduce.call(null,this__182895.array,f,start);
});
G__182920 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__182920__182921.call(this,v,f);
case  3 :
return G__182920__182922.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182920;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__182896 = this;
if(cljs.core.truth_((this__182896.array.length > 0)))
{var vector_seq__182897 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__182896.array.length)))
{return cljs.core.cons.call(null,(this__182896.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__182897.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__182898 = this;
return this__182898.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__182899 = this;
var count__182900 = this__182899.array.length;

if(cljs.core.truth_((count__182900 > 0)))
{return (this__182899.array[(count__182900 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__182901 = this;
if(cljs.core.truth_((this__182901.array.length > 0)))
{var new_array__182902 = cljs.core.aclone.call(null,this__182901.array);

new_array__182902.pop();
return (new cljs.core.Vector(this__182901.meta,new_array__182902));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__182903 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__182904 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__182905 = this;
return (new cljs.core.Vector(meta,this__182905.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__182906 = this;
return this__182906.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__182924 = null;
var G__182924__182925 = (function (coll,n){
var this__182907 = this;
if(cljs.core.truth_((function (){var and__3546__auto____182908 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____182908))
{return (n < this__182907.array.length);
} else
{return and__3546__auto____182908;
}
})()))
{return (this__182907.array[n]);
} else
{return null;
}
});
var G__182924__182926 = (function (coll,n,not_found){
var this__182909 = this;
if(cljs.core.truth_((function (){var and__3546__auto____182910 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____182910))
{return (n < this__182909.array.length);
} else
{return and__3546__auto____182910;
}
})()))
{return (this__182909.array[n]);
} else
{return not_found;
}
});
G__182924 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__182924__182925.call(this,coll,n);
case  3 :
return G__182924__182926.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182924;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__182911 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__182911.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__182928 = pv.cnt;

if(cljs.core.truth_((cnt__182928 < 32)))
{return 0;
} else
{return (((cnt__182928 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__182929 = level;
var ret__182930 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__182929)))
{return ret__182930;
} else
{var embed__182931 = ret__182930;
var r__182932 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___182933 = (r__182932[0] = embed__182931);

{
var G__182934 = (ll__182929 - 5);
var G__182935 = r__182932;
ll__182929 = G__182934;
ret__182930 = G__182935;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__182936 = cljs.core.aclone.call(null,parent);
var subidx__182937 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__182936[subidx__182937] = tailnode);
return ret__182936;
} else
{var temp__3695__auto____182938 = (parent[subidx__182937]);

if(cljs.core.truth_(temp__3695__auto____182938))
{var child__182939 = temp__3695__auto____182938;

var node_to_insert__182940 = push_tail.call(null,pv,(level - 5),child__182939,tailnode);
var ___182941 = (ret__182936[subidx__182937] = node_to_insert__182940);

return ret__182936;
} else
{var node_to_insert__182942 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___182943 = (ret__182936[subidx__182937] = node_to_insert__182942);

return ret__182936;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____182944 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____182944))
{return (i < pv.cnt);
} else
{return and__3546__auto____182944;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__182945 = pv.root;
var level__182946 = pv.shift;

while(true){
if(cljs.core.truth_((level__182946 > 0)))
{{
var G__182947 = (node__182945[((i >> level__182946) & 31)]);
var G__182948 = (level__182946 - 5);
node__182945 = G__182947;
level__182946 = G__182948;
continue;
}
} else
{return node__182945;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__182949 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__182949[(i & 31)] = val);
return ret__182949;
} else
{var subidx__182950 = ((i >> level) & 31);
var ___182951 = (ret__182949[subidx__182950] = do_assoc.call(null,pv,(level - 5),(node[subidx__182950]),i,val));

return ret__182949;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__182952 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__182953 = pop_tail.call(null,pv,(level - 5),(node[subidx__182952]));

if(cljs.core.truth_((function (){var and__3546__auto____182954 = (new_child__182953 === null);

if(cljs.core.truth_(and__3546__auto____182954))
{return (subidx__182952 === 0);
} else
{return and__3546__auto____182954;
}
})()))
{return null;
} else
{var ret__182955 = cljs.core.aclone.call(null,node);
var ___182956 = (ret__182955[subidx__182952] = new_child__182953);

return ret__182955;
}
} else
{if(cljs.core.truth_((subidx__182952 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__182957 = cljs.core.aclone.call(null,node);
var ___182958 = (ret__182957[subidx__182952] = null);

return ret__182957;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
})
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__182959 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__182999 = null;
var G__182999__183000 = (function (coll,k){
var this__182960 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__182999__183001 = (function (coll,k,not_found){
var this__182961 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__182999 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__182999__183000.call(this,coll,k);
case  3 :
return G__182999__183001.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182999;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__182962 = this;
if(cljs.core.truth_((function (){var and__3546__auto____182963 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____182963))
{return (k < this__182962.cnt);
} else
{return and__3546__auto____182963;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__182964 = cljs.core.aclone.call(null,this__182962.tail);

(new_tail__182964[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__182962.meta,this__182962.cnt,this__182962.shift,this__182962.root,new_tail__182964));
} else
{return (new cljs.core.PersistentVector(this__182962.meta,this__182962.cnt,this__182962.shift,cljs.core.do_assoc.call(null,coll,this__182962.shift,this__182962.root,k,v),this__182962.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__182962.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__182962.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__183003 = null;
var G__183003__183004 = (function (tsym182965,k){
var this__182967 = this;
var tsym182965__182968 = this;

var coll__182969 = tsym182965__182968;

return cljs.core._lookup.call(null,coll__182969,k);
});
var G__183003__183005 = (function (tsym182966,k,not_found){
var this__182970 = this;
var tsym182966__182971 = this;

var coll__182972 = tsym182966__182971;

return cljs.core._lookup.call(null,coll__182972,k,not_found);
});
G__183003 = function(tsym182966,k,not_found){
switch(arguments.length){
case  2 :
return G__183003__183004.call(this,tsym182966,k);
case  3 :
return G__183003__183005.call(this,tsym182966,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183003;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__182973 = this;
if(cljs.core.truth_(((this__182973.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__182974 = cljs.core.aclone.call(null,this__182973.tail);

new_tail__182974.push(o);
return (new cljs.core.PersistentVector(this__182973.meta,(this__182973.cnt + 1),this__182973.shift,this__182973.root,new_tail__182974));
} else
{var root_overflow_QMARK___182975 = ((this__182973.cnt >> 5) > (1 << this__182973.shift));
var new_shift__182976 = (cljs.core.truth_(root_overflow_QMARK___182975)?(this__182973.shift + 5):this__182973.shift);
var new_root__182978 = (cljs.core.truth_(root_overflow_QMARK___182975)?(function (){var n_r__182977 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__182977[0] = this__182973.root);
(n_r__182977[1] = cljs.core.new_path.call(null,this__182973.shift,this__182973.tail));
return n_r__182977;
})():cljs.core.push_tail.call(null,coll,this__182973.shift,this__182973.root,this__182973.tail));

return (new cljs.core.PersistentVector(this__182973.meta,(this__182973.cnt + 1),new_shift__182976,new_root__182978,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__183007 = null;
var G__183007__183008 = (function (v,f){
var this__182979 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__183007__183009 = (function (v,f,start){
var this__182980 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__183007 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__183007__183008.call(this,v,f);
case  3 :
return G__183007__183009.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183007;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__182981 = this;
if(cljs.core.truth_((this__182981.cnt > 0)))
{var vector_seq__182982 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__182981.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__182982.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__182983 = this;
return this__182983.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__182984 = this;
if(cljs.core.truth_((this__182984.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__182984.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__182985 = this;
if(cljs.core.truth_((this__182985.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__182985.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__182985.meta);
} else
{if(cljs.core.truth_((1 < (this__182985.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__182985.meta,(this__182985.cnt - 1),this__182985.shift,this__182985.root,cljs.core.aclone.call(null,this__182985.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__182986 = cljs.core.array_for.call(null,coll,(this__182985.cnt - 2));
var nr__182987 = cljs.core.pop_tail.call(null,this__182985.shift,this__182985.root);
var new_root__182988 = (cljs.core.truth_((nr__182987 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__182987);
var cnt_1__182989 = (this__182985.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____182990 = (5 < this__182985.shift);

if(cljs.core.truth_(and__3546__auto____182990))
{return ((new_root__182988[1]) === null);
} else
{return and__3546__auto____182990;
}
})()))
{return (new cljs.core.PersistentVector(this__182985.meta,cnt_1__182989,(this__182985.shift - 5),(new_root__182988[0]),new_tail__182986));
} else
{return (new cljs.core.PersistentVector(this__182985.meta,cnt_1__182989,this__182985.shift,new_root__182988,new_tail__182986));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__182991 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__182992 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__182993 = this;
return (new cljs.core.PersistentVector(meta,this__182993.cnt,this__182993.shift,this__182993.root,this__182993.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__182994 = this;
return this__182994.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__183011 = null;
var G__183011__183012 = (function (coll,n){
var this__182995 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__183011__183013 = (function (coll,n,not_found){
var this__182996 = this;
if(cljs.core.truth_((function (){var and__3546__auto____182997 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____182997))
{return (n < this__182996.cnt);
} else
{return and__3546__auto____182997;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__183011 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__183011__183012.call(this,coll,n);
case  3 :
return G__183011__183013.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183011;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__182998 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__182998.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = (new Array(32));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[]));
cljs.core.PersistentVector.fromArray = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xs);
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__183015){
var args = cljs.core.seq( arglist__183015 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__183016 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__183044 = null;
var G__183044__183045 = (function (coll,k){
var this__183017 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__183044__183046 = (function (coll,k,not_found){
var this__183018 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__183044 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__183044__183045.call(this,coll,k);
case  3 :
return G__183044__183046.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183044;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__183019 = this;
var v_pos__183020 = (this__183019.start + key);

return (new cljs.core.Subvec(this__183019.meta,cljs.core._assoc.call(null,this__183019.v,v_pos__183020,val),this__183019.start,((this__183019.end > (v_pos__183020 + 1)) ? this__183019.end : (v_pos__183020 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__183048 = null;
var G__183048__183049 = (function (tsym183021,k){
var this__183023 = this;
var tsym183021__183024 = this;

var coll__183025 = tsym183021__183024;

return cljs.core._lookup.call(null,coll__183025,k);
});
var G__183048__183050 = (function (tsym183022,k,not_found){
var this__183026 = this;
var tsym183022__183027 = this;

var coll__183028 = tsym183022__183027;

return cljs.core._lookup.call(null,coll__183028,k,not_found);
});
G__183048 = function(tsym183022,k,not_found){
switch(arguments.length){
case  2 :
return G__183048__183049.call(this,tsym183022,k);
case  3 :
return G__183048__183050.call(this,tsym183022,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183048;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__183029 = this;
return (new cljs.core.Subvec(this__183029.meta,cljs.core._assoc_n.call(null,this__183029.v,this__183029.end,o),this__183029.start,(this__183029.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__183052 = null;
var G__183052__183053 = (function (coll,f){
var this__183030 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__183052__183054 = (function (coll,f,start){
var this__183031 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__183052 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__183052__183053.call(this,coll,f);
case  3 :
return G__183052__183054.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183052;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__183032 = this;
var subvec_seq__183033 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__183032.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__183032.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__183033.call(null,this__183032.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__183034 = this;
return (this__183034.end - this__183034.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__183035 = this;
return cljs.core._nth.call(null,this__183035.v,(this__183035.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__183036 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__183036.start,this__183036.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__183036.meta,this__183036.v,this__183036.start,(this__183036.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__183037 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__183038 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__183039 = this;
return (new cljs.core.Subvec(meta,this__183039.v,this__183039.start,this__183039.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__183040 = this;
return this__183040.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__183056 = null;
var G__183056__183057 = (function (coll,n){
var this__183041 = this;
return cljs.core._nth.call(null,this__183041.v,(this__183041.start + n));
});
var G__183056__183058 = (function (coll,n,not_found){
var this__183042 = this;
return cljs.core._nth.call(null,this__183042.v,(this__183042.start + n),not_found);
});
G__183056 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__183056__183057.call(this,coll,n);
case  3 :
return G__183056__183058.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183056;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__183043 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__183043.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__183060 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__183061 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__183060.call(this,v,start);
case  3 :
return subvec__183061.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__183063 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__183064 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__183065 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__183066 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__183066.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__183067 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__183068 = this;
return cljs.core._first.call(null,this__183068.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__183069 = this;
var temp__3695__auto____183070 = cljs.core.next.call(null,this__183069.front);

if(cljs.core.truth_(temp__3695__auto____183070))
{var f1__183071 = temp__3695__auto____183070;

return (new cljs.core.PersistentQueueSeq(this__183069.meta,f1__183071,this__183069.rear));
} else
{if(cljs.core.truth_((this__183069.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__183069.meta,this__183069.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__183072 = this;
return this__183072.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__183073 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__183073.front,this__183073.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__183074 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__183075 = this;
if(cljs.core.truth_(this__183075.front))
{return (new cljs.core.PersistentQueue(this__183075.meta,(this__183075.count + 1),this__183075.front,cljs.core.conj.call(null,(function (){var or__3548__auto____183076 = this__183075.rear;

if(cljs.core.truth_(or__3548__auto____183076))
{return or__3548__auto____183076;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__183075.meta,(this__183075.count + 1),cljs.core.conj.call(null,this__183075.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__183077 = this;
var rear__183078 = cljs.core.seq.call(null,this__183077.rear);

if(cljs.core.truth_((function (){var or__3548__auto____183079 = this__183077.front;

if(cljs.core.truth_(or__3548__auto____183079))
{return or__3548__auto____183079;
} else
{return rear__183078;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__183077.front,cljs.core.seq.call(null,rear__183078)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__183080 = this;
return this__183080.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__183081 = this;
return cljs.core._first.call(null,this__183081.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__183082 = this;
if(cljs.core.truth_(this__183082.front))
{var temp__3695__auto____183083 = cljs.core.next.call(null,this__183082.front);

if(cljs.core.truth_(temp__3695__auto____183083))
{var f1__183084 = temp__3695__auto____183083;

return (new cljs.core.PersistentQueue(this__183082.meta,(this__183082.count - 1),f1__183084,this__183082.rear));
} else
{return (new cljs.core.PersistentQueue(this__183082.meta,(this__183082.count - 1),cljs.core.seq.call(null,this__183082.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__183085 = this;
return cljs.core.first.call(null,this__183085.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__183086 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__183087 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__183088 = this;
return (new cljs.core.PersistentQueue(meta,this__183088.count,this__183088.front,this__183088.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__183089 = this;
return this__183089.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__183090 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__183091 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__183092 = array.length;

var i__183093 = 0;

while(true){
if(cljs.core.truth_((i__183093 < len__183092)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__183093]))))
{return i__183093;
} else
{{
var G__183094 = (i__183093 + incr);
i__183093 = G__183094;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___183096 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___183097 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____183095 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____183095))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____183095;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___183096.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___183097.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__183100 = cljs.core.hash.call(null,a);
var b__183101 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__183100 < b__183101)))
{return -1;
} else
{if(cljs.core.truth_((a__183100 > b__183101)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__183102 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__183129 = null;
var G__183129__183130 = (function (coll,k){
var this__183103 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__183129__183131 = (function (coll,k,not_found){
var this__183104 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__183104.strobj,(this__183104.strobj[k]),not_found);
});
G__183129 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__183129__183130.call(this,coll,k);
case  3 :
return G__183129__183131.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183129;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__183105 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__183106 = goog.object.clone.call(null,this__183105.strobj);
var overwrite_QMARK___183107 = new_strobj__183106.hasOwnProperty(k);

(new_strobj__183106[k] = v);
if(cljs.core.truth_(overwrite_QMARK___183107))
{return (new cljs.core.ObjMap(this__183105.meta,this__183105.keys,new_strobj__183106));
} else
{var new_keys__183108 = cljs.core.aclone.call(null,this__183105.keys);

new_keys__183108.push(k);
return (new cljs.core.ObjMap(this__183105.meta,new_keys__183108,new_strobj__183106));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__183105.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__183109 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__183109.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__183133 = null;
var G__183133__183134 = (function (tsym183110,k){
var this__183112 = this;
var tsym183110__183113 = this;

var coll__183114 = tsym183110__183113;

return cljs.core._lookup.call(null,coll__183114,k);
});
var G__183133__183135 = (function (tsym183111,k,not_found){
var this__183115 = this;
var tsym183111__183116 = this;

var coll__183117 = tsym183111__183116;

return cljs.core._lookup.call(null,coll__183117,k,not_found);
});
G__183133 = function(tsym183111,k,not_found){
switch(arguments.length){
case  2 :
return G__183133__183134.call(this,tsym183111,k);
case  3 :
return G__183133__183135.call(this,tsym183111,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183133;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__183118 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__183119 = this;
if(cljs.core.truth_((this__183119.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__183099_SHARP_){
return cljs.core.vector.call(null,p1__183099_SHARP_,(this__183119.strobj[p1__183099_SHARP_]));
}),this__183119.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__183120 = this;
return this__183120.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__183121 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__183122 = this;
return (new cljs.core.ObjMap(meta,this__183122.keys,this__183122.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__183123 = this;
return this__183123.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__183124 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__183124.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__183125 = this;
if(cljs.core.truth_((function (){var and__3546__auto____183126 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____183126))
{return this__183125.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____183126;
}
})()))
{var new_keys__183127 = cljs.core.aclone.call(null,this__183125.keys);
var new_strobj__183128 = goog.object.clone.call(null,this__183125.strobj);

new_keys__183127.splice(cljs.core.scan_array.call(null,1,k,new_keys__183127),1);
cljs.core.js_delete.call(null,new_strobj__183128,k);
return (new cljs.core.ObjMap(this__183125.meta,new_keys__183127,new_strobj__183128));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__183138 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__183176 = null;
var G__183176__183177 = (function (coll,k){
var this__183139 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__183176__183178 = (function (coll,k,not_found){
var this__183140 = this;
var bucket__183141 = (this__183140.hashobj[cljs.core.hash.call(null,k)]);
var i__183142 = (cljs.core.truth_(bucket__183141)?cljs.core.scan_array.call(null,2,k,bucket__183141):null);

if(cljs.core.truth_(i__183142))
{return (bucket__183141[(i__183142 + 1)]);
} else
{return not_found;
}
});
G__183176 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__183176__183177.call(this,coll,k);
case  3 :
return G__183176__183178.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183176;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__183143 = this;
var h__183144 = cljs.core.hash.call(null,k);
var bucket__183145 = (this__183143.hashobj[h__183144]);

if(cljs.core.truth_(bucket__183145))
{var new_bucket__183146 = cljs.core.aclone.call(null,bucket__183145);
var new_hashobj__183147 = goog.object.clone.call(null,this__183143.hashobj);

(new_hashobj__183147[h__183144] = new_bucket__183146);
var temp__3695__auto____183148 = cljs.core.scan_array.call(null,2,k,new_bucket__183146);

if(cljs.core.truth_(temp__3695__auto____183148))
{var i__183149 = temp__3695__auto____183148;

(new_bucket__183146[(i__183149 + 1)] = v);
return (new cljs.core.HashMap(this__183143.meta,this__183143.count,new_hashobj__183147));
} else
{new_bucket__183146.push(k,v);
return (new cljs.core.HashMap(this__183143.meta,(this__183143.count + 1),new_hashobj__183147));
}
} else
{var new_hashobj__183150 = goog.object.clone.call(null,this__183143.hashobj);

(new_hashobj__183150[h__183144] = [k,v]);
return (new cljs.core.HashMap(this__183143.meta,(this__183143.count + 1),new_hashobj__183150));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__183151 = this;
var bucket__183152 = (this__183151.hashobj[cljs.core.hash.call(null,k)]);
var i__183153 = (cljs.core.truth_(bucket__183152)?cljs.core.scan_array.call(null,2,k,bucket__183152):null);

if(cljs.core.truth_(i__183153))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__183180 = null;
var G__183180__183181 = (function (tsym183154,k){
var this__183156 = this;
var tsym183154__183157 = this;

var coll__183158 = tsym183154__183157;

return cljs.core._lookup.call(null,coll__183158,k);
});
var G__183180__183182 = (function (tsym183155,k,not_found){
var this__183159 = this;
var tsym183155__183160 = this;

var coll__183161 = tsym183155__183160;

return cljs.core._lookup.call(null,coll__183161,k,not_found);
});
G__183180 = function(tsym183155,k,not_found){
switch(arguments.length){
case  2 :
return G__183180__183181.call(this,tsym183155,k);
case  3 :
return G__183180__183182.call(this,tsym183155,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183180;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__183162 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__183163 = this;
if(cljs.core.truth_((this__183163.count > 0)))
{var hashes__183164 = cljs.core.js_keys.call(null,this__183163.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__183137_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__183163.hashobj[p1__183137_SHARP_])));
}),hashes__183164);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__183165 = this;
return this__183165.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__183166 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__183167 = this;
return (new cljs.core.HashMap(meta,this__183167.count,this__183167.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__183168 = this;
return this__183168.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__183169 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__183169.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__183170 = this;
var h__183171 = cljs.core.hash.call(null,k);
var bucket__183172 = (this__183170.hashobj[h__183171]);
var i__183173 = (cljs.core.truth_(bucket__183172)?cljs.core.scan_array.call(null,2,k,bucket__183172):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__183173)))
{return coll;
} else
{var new_hashobj__183174 = goog.object.clone.call(null,this__183170.hashobj);

if(cljs.core.truth_((3 > bucket__183172.length)))
{cljs.core.js_delete.call(null,new_hashobj__183174,h__183171);
} else
{var new_bucket__183175 = cljs.core.aclone.call(null,bucket__183172);

new_bucket__183175.splice(i__183173,2);
(new_hashobj__183174[h__183171] = new_bucket__183175);
}
return (new cljs.core.HashMap(this__183170.meta,(this__183170.count - 1),new_hashobj__183174));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__183184 = ks.length;

var i__183185 = 0;
var out__183186 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__183185 < len__183184)))
{{
var G__183187 = (i__183185 + 1);
var G__183188 = cljs.core.assoc.call(null,out__183186,(ks[i__183185]),(vs[i__183185]));
i__183185 = G__183187;
out__183186 = G__183188;
continue;
}
} else
{return out__183186;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__183189 = cljs.core.seq.call(null,keyvals);
var out__183190 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__183189))
{{
var G__183191 = cljs.core.nnext.call(null,in$__183189);
var G__183192 = cljs.core.assoc.call(null,out__183190,cljs.core.first.call(null,in$__183189),cljs.core.second.call(null,in$__183189));
in$__183189 = G__183191;
out__183190 = G__183192;
continue;
}
} else
{return out__183190;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__183193){
var keyvals = cljs.core.seq( arglist__183193 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__183194_SHARP_,p2__183195_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____183196 = p1__183194_SHARP_;

if(cljs.core.truth_(or__3548__auto____183196))
{return or__3548__auto____183196;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__183195_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__183197){
var maps = cljs.core.seq( arglist__183197 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__183200 = (function (m,e){
var k__183198 = cljs.core.first.call(null,e);
var v__183199 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__183198)))
{return cljs.core.assoc.call(null,m,k__183198,f.call(null,cljs.core.get.call(null,m,k__183198),v__183199));
} else
{return cljs.core.assoc.call(null,m,k__183198,v__183199);
}
});
var merge2__183202 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__183200,(function (){var or__3548__auto____183201 = m1;

if(cljs.core.truth_(or__3548__auto____183201))
{return or__3548__auto____183201;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__183202,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__183203){
var f = cljs.core.first(arglist__183203);
var maps = cljs.core.rest(arglist__183203);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__183205 = cljs.core.ObjMap.fromObject([],{});
var keys__183206 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__183206))
{var key__183207 = cljs.core.first.call(null,keys__183206);
var entry__183208 = cljs.core.get.call(null,map,key__183207,"\uFDD0'user/not-found");

{
var G__183209 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__183208,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__183205,key__183207,entry__183208):ret__183205);
var G__183210 = cljs.core.next.call(null,keys__183206);
ret__183205 = G__183209;
keys__183206 = G__183210;
continue;
}
} else
{return ret__183205;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__183211 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__183232 = null;
var G__183232__183233 = (function (coll,v){
var this__183212 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__183232__183234 = (function (coll,v,not_found){
var this__183213 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__183213.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__183232 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__183232__183233.call(this,coll,v);
case  3 :
return G__183232__183234.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183232;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__183236 = null;
var G__183236__183237 = (function (tsym183214,k){
var this__183216 = this;
var tsym183214__183217 = this;

var coll__183218 = tsym183214__183217;

return cljs.core._lookup.call(null,coll__183218,k);
});
var G__183236__183238 = (function (tsym183215,k,not_found){
var this__183219 = this;
var tsym183215__183220 = this;

var coll__183221 = tsym183215__183220;

return cljs.core._lookup.call(null,coll__183221,k,not_found);
});
G__183236 = function(tsym183215,k,not_found){
switch(arguments.length){
case  2 :
return G__183236__183237.call(this,tsym183215,k);
case  3 :
return G__183236__183238.call(this,tsym183215,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183236;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__183222 = this;
return (new cljs.core.Set(this__183222.meta,cljs.core.assoc.call(null,this__183222.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__183223 = this;
return cljs.core.keys.call(null,this__183223.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__183224 = this;
return (new cljs.core.Set(this__183224.meta,cljs.core.dissoc.call(null,this__183224.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__183225 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__183226 = this;
var and__3546__auto____183227 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____183227))
{var and__3546__auto____183228 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____183228))
{return cljs.core.every_QMARK_.call(null,(function (p1__183204_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__183204_SHARP_);
}),other);
} else
{return and__3546__auto____183228;
}
} else
{return and__3546__auto____183227;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__183229 = this;
return (new cljs.core.Set(meta,this__183229.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__183230 = this;
return this__183230.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__183231 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__183231.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__183241 = cljs.core.seq.call(null,coll);
var out__183242 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__183241))))
{{
var G__183243 = cljs.core.rest.call(null,in$__183241);
var G__183244 = cljs.core.conj.call(null,out__183242,cljs.core.first.call(null,in$__183241));
in$__183241 = G__183243;
out__183242 = G__183244;
continue;
}
} else
{return out__183242;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__183245 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____183246 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____183246))
{var e__183247 = temp__3695__auto____183246;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__183247));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__183245,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__183240_SHARP_){
var temp__3695__auto____183248 = cljs.core.find.call(null,smap,p1__183240_SHARP_);

if(cljs.core.truth_(temp__3695__auto____183248))
{var e__183249 = temp__3695__auto____183248;

return cljs.core.second.call(null,e__183249);
} else
{return p1__183240_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__183257 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__183250,seen){
while(true){
var vec__183251__183252 = p__183250;
var f__183253 = cljs.core.nth.call(null,vec__183251__183252,0,null);
var xs__183254 = vec__183251__183252;

var temp__3698__auto____183255 = cljs.core.seq.call(null,xs__183254);

if(cljs.core.truth_(temp__3698__auto____183255))
{var s__183256 = temp__3698__auto____183255;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__183253)))
{{
var G__183258 = cljs.core.rest.call(null,s__183256);
var G__183259 = seen;
p__183250 = G__183258;
seen = G__183259;
continue;
}
} else
{return cljs.core.cons.call(null,f__183253,step.call(null,cljs.core.rest.call(null,s__183256),cljs.core.conj.call(null,seen,f__183253)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__183257.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__183260 = cljs.core.PersistentVector.fromArray([]);
var s__183261 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__183261)))
{{
var G__183262 = cljs.core.conj.call(null,ret__183260,cljs.core.first.call(null,s__183261));
var G__183263 = cljs.core.next.call(null,s__183261);
ret__183260 = G__183262;
s__183261 = G__183263;
continue;
}
} else
{return cljs.core.seq.call(null,ret__183260);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____183264 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____183264))
{return or__3548__auto____183264;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__183265 = x.lastIndexOf("/");

if(cljs.core.truth_((i__183265 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__183265 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____183266 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____183266))
{return or__3548__auto____183266;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__183267 = x.lastIndexOf("/");

if(cljs.core.truth_((i__183267 > -1)))
{return cljs.core.subs.call(null,x,2,i__183267);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__183270 = cljs.core.ObjMap.fromObject([],{});
var ks__183271 = cljs.core.seq.call(null,keys);
var vs__183272 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____183273 = ks__183271;

if(cljs.core.truth_(and__3546__auto____183273))
{return vs__183272;
} else
{return and__3546__auto____183273;
}
})()))
{{
var G__183274 = cljs.core.assoc.call(null,map__183270,cljs.core.first.call(null,ks__183271),cljs.core.first.call(null,vs__183272));
var G__183275 = cljs.core.next.call(null,ks__183271);
var G__183276 = cljs.core.next.call(null,vs__183272);
map__183270 = G__183274;
ks__183271 = G__183275;
vs__183272 = G__183276;
continue;
}
} else
{return map__183270;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__183279 = (function (k,x){
return x;
});
var max_key__183280 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__183281 = (function() { 
var G__183283__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__183268_SHARP_,p2__183269_SHARP_){
return max_key.call(null,k,p1__183268_SHARP_,p2__183269_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__183283 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183283__delegate.call(this, k, x, y, more);
};
G__183283.cljs$lang$maxFixedArity = 3;
G__183283.cljs$lang$applyTo = (function (arglist__183284){
var k = cljs.core.first(arglist__183284);
var x = cljs.core.first(cljs.core.next(arglist__183284));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183284)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183284)));
return G__183283__delegate.call(this, k, x, y, more);
});
return G__183283;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__183279.call(this,k,x);
case  3 :
return max_key__183280.call(this,k,x,y);
default:
return max_key__183281.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__183281.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__183285 = (function (k,x){
return x;
});
var min_key__183286 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__183287 = (function() { 
var G__183289__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__183277_SHARP_,p2__183278_SHARP_){
return min_key.call(null,k,p1__183277_SHARP_,p2__183278_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__183289 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183289__delegate.call(this, k, x, y, more);
};
G__183289.cljs$lang$maxFixedArity = 3;
G__183289.cljs$lang$applyTo = (function (arglist__183290){
var k = cljs.core.first(arglist__183290);
var x = cljs.core.first(cljs.core.next(arglist__183290));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183290)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183290)));
return G__183289__delegate.call(this, k, x, y, more);
});
return G__183289;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__183285.call(this,k,x);
case  3 :
return min_key__183286.call(this,k,x,y);
default:
return min_key__183287.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__183287.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__183293 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__183294 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____183291 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183291))
{var s__183292 = temp__3698__auto____183291;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__183292),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__183292)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__183293.call(this,n,step);
case  3 :
return partition_all__183294.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____183296 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183296))
{var s__183297 = temp__3698__auto____183296;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__183297))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__183297),take_while.call(null,pred,cljs.core.rest.call(null,s__183297)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__183298 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__183299 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__183315 = null;
var G__183315__183316 = (function (rng,f){
var this__183300 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__183315__183317 = (function (rng,f,s){
var this__183301 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__183315 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__183315__183316.call(this,rng,f);
case  3 :
return G__183315__183317.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183315;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__183302 = this;
var comp__183303 = (cljs.core.truth_((this__183302.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__183303.call(null,this__183302.start,this__183302.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__183304 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__183304.end - this__183304.start) / this__183304.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__183305 = this;
return this__183305.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__183306 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__183306.meta,(this__183306.start + this__183306.step),this__183306.end,this__183306.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__183307 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__183308 = this;
return (new cljs.core.Range(meta,this__183308.start,this__183308.end,this__183308.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__183309 = this;
return this__183309.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__183319 = null;
var G__183319__183320 = (function (rng,n){
var this__183310 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__183310.start + (n * this__183310.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____183311 = (this__183310.start > this__183310.end);

if(cljs.core.truth_(and__3546__auto____183311))
{return cljs.core._EQ_.call(null,this__183310.step,0);
} else
{return and__3546__auto____183311;
}
})()))
{return this__183310.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__183319__183321 = (function (rng,n,not_found){
var this__183312 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__183312.start + (n * this__183312.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____183313 = (this__183312.start > this__183312.end);

if(cljs.core.truth_(and__3546__auto____183313))
{return cljs.core._EQ_.call(null,this__183312.step,0);
} else
{return and__3546__auto____183313;
}
})()))
{return this__183312.start;
} else
{return not_found;
}
}
});
G__183319 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__183319__183320.call(this,rng,n);
case  3 :
return G__183319__183321.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183319;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__183314 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__183314.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__183323 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__183324 = (function (end){
return range.call(null,0,end,1);
});
var range__183325 = (function (start,end){
return range.call(null,start,end,1);
});
var range__183326 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__183323.call(this);
case  1 :
return range__183324.call(this,start);
case  2 :
return range__183325.call(this,start,end);
case  3 :
return range__183326.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____183328 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183328))
{var s__183329 = temp__3698__auto____183328;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__183329),take_nth.call(null,n,cljs.core.drop.call(null,n,s__183329)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____183331 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183331))
{var s__183332 = temp__3698__auto____183331;

var fst__183333 = cljs.core.first.call(null,s__183332);
var fv__183334 = f.call(null,fst__183333);
var run__183335 = cljs.core.cons.call(null,fst__183333,cljs.core.take_while.call(null,(function (p1__183330_SHARP_){
return cljs.core._EQ_.call(null,fv__183334,f.call(null,p1__183330_SHARP_));
}),cljs.core.next.call(null,s__183332)));

return cljs.core.cons.call(null,run__183335,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__183335),s__183332))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__183350 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____183346 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____183346))
{var s__183347 = temp__3695__auto____183346;

return reductions.call(null,f,cljs.core.first.call(null,s__183347),cljs.core.rest.call(null,s__183347));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__183351 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____183348 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183348))
{var s__183349 = temp__3698__auto____183348;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__183349)),cljs.core.rest.call(null,s__183349));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__183350.call(this,f,init);
case  3 :
return reductions__183351.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__183354 = (function (f){
return (function() {
var G__183359 = null;
var G__183359__183360 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__183359__183361 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__183359__183362 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__183359__183363 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__183359__183364 = (function() { 
var G__183366__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__183366 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183366__delegate.call(this, x, y, z, args);
};
G__183366.cljs$lang$maxFixedArity = 3;
G__183366.cljs$lang$applyTo = (function (arglist__183367){
var x = cljs.core.first(arglist__183367);
var y = cljs.core.first(cljs.core.next(arglist__183367));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183367)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183367)));
return G__183366__delegate.call(this, x, y, z, args);
});
return G__183366;
})()
;
G__183359 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__183359__183360.call(this);
case  1 :
return G__183359__183361.call(this,x);
case  2 :
return G__183359__183362.call(this,x,y);
case  3 :
return G__183359__183363.call(this,x,y,z);
default:
return G__183359__183364.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__183359.cljs$lang$maxFixedArity = 3;
G__183359.cljs$lang$applyTo = G__183359__183364.cljs$lang$applyTo;
return G__183359;
})()
});
var juxt__183355 = (function (f,g){
return (function() {
var G__183368 = null;
var G__183368__183369 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__183368__183370 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__183368__183371 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__183368__183372 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__183368__183373 = (function() { 
var G__183375__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__183375 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183375__delegate.call(this, x, y, z, args);
};
G__183375.cljs$lang$maxFixedArity = 3;
G__183375.cljs$lang$applyTo = (function (arglist__183376){
var x = cljs.core.first(arglist__183376);
var y = cljs.core.first(cljs.core.next(arglist__183376));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183376)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183376)));
return G__183375__delegate.call(this, x, y, z, args);
});
return G__183375;
})()
;
G__183368 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__183368__183369.call(this);
case  1 :
return G__183368__183370.call(this,x);
case  2 :
return G__183368__183371.call(this,x,y);
case  3 :
return G__183368__183372.call(this,x,y,z);
default:
return G__183368__183373.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__183368.cljs$lang$maxFixedArity = 3;
G__183368.cljs$lang$applyTo = G__183368__183373.cljs$lang$applyTo;
return G__183368;
})()
});
var juxt__183356 = (function (f,g,h){
return (function() {
var G__183377 = null;
var G__183377__183378 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__183377__183379 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__183377__183380 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__183377__183381 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__183377__183382 = (function() { 
var G__183384__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__183384 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183384__delegate.call(this, x, y, z, args);
};
G__183384.cljs$lang$maxFixedArity = 3;
G__183384.cljs$lang$applyTo = (function (arglist__183385){
var x = cljs.core.first(arglist__183385);
var y = cljs.core.first(cljs.core.next(arglist__183385));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183385)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183385)));
return G__183384__delegate.call(this, x, y, z, args);
});
return G__183384;
})()
;
G__183377 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__183377__183378.call(this);
case  1 :
return G__183377__183379.call(this,x);
case  2 :
return G__183377__183380.call(this,x,y);
case  3 :
return G__183377__183381.call(this,x,y,z);
default:
return G__183377__183382.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__183377.cljs$lang$maxFixedArity = 3;
G__183377.cljs$lang$applyTo = G__183377__183382.cljs$lang$applyTo;
return G__183377;
})()
});
var juxt__183357 = (function() { 
var G__183386__delegate = function (f,g,h,fs){
var fs__183353 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__183387 = null;
var G__183387__183388 = (function (){
return cljs.core.reduce.call(null,(function (p1__183336_SHARP_,p2__183337_SHARP_){
return cljs.core.conj.call(null,p1__183336_SHARP_,p2__183337_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__183353);
});
var G__183387__183389 = (function (x){
return cljs.core.reduce.call(null,(function (p1__183338_SHARP_,p2__183339_SHARP_){
return cljs.core.conj.call(null,p1__183338_SHARP_,p2__183339_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__183353);
});
var G__183387__183390 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__183340_SHARP_,p2__183341_SHARP_){
return cljs.core.conj.call(null,p1__183340_SHARP_,p2__183341_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__183353);
});
var G__183387__183391 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__183342_SHARP_,p2__183343_SHARP_){
return cljs.core.conj.call(null,p1__183342_SHARP_,p2__183343_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__183353);
});
var G__183387__183392 = (function() { 
var G__183394__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__183344_SHARP_,p2__183345_SHARP_){
return cljs.core.conj.call(null,p1__183344_SHARP_,cljs.core.apply.call(null,p2__183345_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__183353);
};
var G__183394 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183394__delegate.call(this, x, y, z, args);
};
G__183394.cljs$lang$maxFixedArity = 3;
G__183394.cljs$lang$applyTo = (function (arglist__183395){
var x = cljs.core.first(arglist__183395);
var y = cljs.core.first(cljs.core.next(arglist__183395));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183395)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183395)));
return G__183394__delegate.call(this, x, y, z, args);
});
return G__183394;
})()
;
G__183387 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__183387__183388.call(this);
case  1 :
return G__183387__183389.call(this,x);
case  2 :
return G__183387__183390.call(this,x,y);
case  3 :
return G__183387__183391.call(this,x,y,z);
default:
return G__183387__183392.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__183387.cljs$lang$maxFixedArity = 3;
G__183387.cljs$lang$applyTo = G__183387__183392.cljs$lang$applyTo;
return G__183387;
})()
};
var G__183386 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183386__delegate.call(this, f, g, h, fs);
};
G__183386.cljs$lang$maxFixedArity = 3;
G__183386.cljs$lang$applyTo = (function (arglist__183396){
var f = cljs.core.first(arglist__183396);
var g = cljs.core.first(cljs.core.next(arglist__183396));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183396)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183396)));
return G__183386__delegate.call(this, f, g, h, fs);
});
return G__183386;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__183354.call(this,f);
case  2 :
return juxt__183355.call(this,f,g);
case  3 :
return juxt__183356.call(this,f,g,h);
default:
return juxt__183357.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__183357.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__183398 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__183401 = cljs.core.next.call(null,coll);
coll = G__183401;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__183399 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____183397 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____183397))
{return (n > 0);
} else
{return and__3546__auto____183397;
}
})()))
{{
var G__183402 = (n - 1);
var G__183403 = cljs.core.next.call(null,coll);
n = G__183402;
coll = G__183403;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__183398.call(this,n);
case  2 :
return dorun__183399.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__183404 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__183405 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__183404.call(this,n);
case  2 :
return doall__183405.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__183407 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__183407),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__183407),1)))
{return cljs.core.first.call(null,matches__183407);
} else
{return cljs.core.vec.call(null,matches__183407);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__183408 = re.exec(s);

if(cljs.core.truth_((matches__183408 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__183408),1)))
{return cljs.core.first.call(null,matches__183408);
} else
{return cljs.core.vec.call(null,matches__183408);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__183409 = cljs.core.re_find.call(null,re,s);
var match_idx__183410 = s.search(re);
var match_str__183411 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__183409))?cljs.core.first.call(null,match_data__183409):match_data__183409);
var post_match__183412 = cljs.core.subs.call(null,s,(match_idx__183410 + cljs.core.count.call(null,match_str__183411)));

if(cljs.core.truth_(match_data__183409))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__183409,re_seq.call(null,re,post_match__183412));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__183414__183415 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___183416 = cljs.core.nth.call(null,vec__183414__183415,0,null);
var flags__183417 = cljs.core.nth.call(null,vec__183414__183415,1,null);
var pattern__183418 = cljs.core.nth.call(null,vec__183414__183415,2,null);

return (new RegExp(pattern__183418,flags__183417));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__183413_SHARP_){
return print_one.call(null,p1__183413_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____183419 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____183419))
{var and__3546__auto____183423 = (function (){var x__451__auto____183420 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____183421 = x__451__auto____183420;

if(cljs.core.truth_(and__3546__auto____183421))
{var and__3546__auto____183422 = x__451__auto____183420.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____183422))
{return cljs.core.not.call(null,x__451__auto____183420.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____183422;
}
} else
{return and__3546__auto____183421;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____183420);
}
})();

if(cljs.core.truth_(and__3546__auto____183423))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____183423;
}
} else
{return and__3546__auto____183419;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____183424 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____183425 = x__451__auto____183424;

if(cljs.core.truth_(and__3546__auto____183425))
{var and__3546__auto____183426 = x__451__auto____183424.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____183426))
{return cljs.core.not.call(null,x__451__auto____183424.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____183426;
}
} else
{return and__3546__auto____183425;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____183424);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__183427 = cljs.core.first.call(null,objs);
var sb__183428 = (new goog.string.StringBuffer());

var G__183429__183430 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__183429__183430))
{var obj__183431 = cljs.core.first.call(null,G__183429__183430);
var G__183429__183432 = G__183429__183430;

while(true){
if(cljs.core.truth_((obj__183431 === first_obj__183427)))
{} else
{sb__183428.append(" ");
}
var G__183433__183434 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__183431,opts));

if(cljs.core.truth_(G__183433__183434))
{var string__183435 = cljs.core.first.call(null,G__183433__183434);
var G__183433__183436 = G__183433__183434;

while(true){
sb__183428.append(string__183435);
var temp__3698__auto____183437 = cljs.core.next.call(null,G__183433__183436);

if(cljs.core.truth_(temp__3698__auto____183437))
{var G__183433__183438 = temp__3698__auto____183437;

{
var G__183441 = cljs.core.first.call(null,G__183433__183438);
var G__183442 = G__183433__183438;
string__183435 = G__183441;
G__183433__183436 = G__183442;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____183439 = cljs.core.next.call(null,G__183429__183432);

if(cljs.core.truth_(temp__3698__auto____183439))
{var G__183429__183440 = temp__3698__auto____183439;

{
var G__183443 = cljs.core.first.call(null,G__183429__183440);
var G__183444 = G__183429__183440;
obj__183431 = G__183443;
G__183429__183432 = G__183444;
continue;
}
} else
{}
break;
}
} else
{}
return sb__183428;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return cljs.core.str.call(null,cljs.core.pr_sb.call(null,objs,opts));
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__183445 = cljs.core.pr_sb.call(null,objs,opts);

sb__183445.append("\n");
return cljs.core.str.call(null,sb__183445);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__183446 = cljs.core.first.call(null,objs);

var G__183447__183448 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__183447__183448))
{var obj__183449 = cljs.core.first.call(null,G__183447__183448);
var G__183447__183450 = G__183447__183448;

while(true){
if(cljs.core.truth_((obj__183449 === first_obj__183446)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__183451__183452 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__183449,opts));

if(cljs.core.truth_(G__183451__183452))
{var string__183453 = cljs.core.first.call(null,G__183451__183452);
var G__183451__183454 = G__183451__183452;

while(true){
cljs.core.string_print.call(null,string__183453);
var temp__3698__auto____183455 = cljs.core.next.call(null,G__183451__183454);

if(cljs.core.truth_(temp__3698__auto____183455))
{var G__183451__183456 = temp__3698__auto____183455;

{
var G__183459 = cljs.core.first.call(null,G__183451__183456);
var G__183460 = G__183451__183456;
string__183453 = G__183459;
G__183451__183454 = G__183460;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____183457 = cljs.core.next.call(null,G__183447__183450);

if(cljs.core.truth_(temp__3698__auto____183457))
{var G__183447__183458 = temp__3698__auto____183457;

{
var G__183461 = cljs.core.first.call(null,G__183447__183458);
var G__183462 = G__183447__183458;
obj__183449 = G__183461;
G__183447__183450 = G__183462;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__183463){
var objs = cljs.core.seq( arglist__183463 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__183464){
var objs = cljs.core.seq( arglist__183464 );;
return prn_str__delegate.call(this, objs);
});
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__183465){
var objs = cljs.core.seq( arglist__183465 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__183466){
var objs = cljs.core.seq( arglist__183466 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__183467){
var objs = cljs.core.seq( arglist__183467 );;
return print_str__delegate.call(this, objs);
});
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__183468){
var objs = cljs.core.seq( arglist__183468 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__183469){
var objs = cljs.core.seq( arglist__183469 );;
return println_str__delegate.call(this, objs);
});
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__183470){
var objs = cljs.core.seq( arglist__183470 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__183471 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__183471,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____183472 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____183472))
{var nspc__183473 = temp__3698__auto____183472;

return cljs.core.str.call(null,nspc__183473,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____183474 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____183474))
{var nspc__183475 = temp__3698__auto____183474;

return cljs.core.str.call(null,nspc__183475,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__183476 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__183476,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__183477 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__183478 = this;
var G__183479__183480 = cljs.core.seq.call(null,this__183478.watches);

if(cljs.core.truth_(G__183479__183480))
{var G__183482__183484 = cljs.core.first.call(null,G__183479__183480);
var vec__183483__183485 = G__183482__183484;
var key__183486 = cljs.core.nth.call(null,vec__183483__183485,0,null);
var f__183487 = cljs.core.nth.call(null,vec__183483__183485,1,null);
var G__183479__183488 = G__183479__183480;

var G__183482__183489 = G__183482__183484;
var G__183479__183490 = G__183479__183488;

while(true){
var vec__183491__183492 = G__183482__183489;
var key__183493 = cljs.core.nth.call(null,vec__183491__183492,0,null);
var f__183494 = cljs.core.nth.call(null,vec__183491__183492,1,null);
var G__183479__183495 = G__183479__183490;

f__183494.call(null,key__183493,this$,oldval,newval);
var temp__3698__auto____183496 = cljs.core.next.call(null,G__183479__183495);

if(cljs.core.truth_(temp__3698__auto____183496))
{var G__183479__183497 = temp__3698__auto____183496;

{
var G__183504 = cljs.core.first.call(null,G__183479__183497);
var G__183505 = G__183479__183497;
G__183482__183489 = G__183504;
G__183479__183490 = G__183505;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__183498 = this;
return this$.watches = cljs.core.assoc.call(null,this__183498.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__183499 = this;
return this$.watches = cljs.core.dissoc.call(null,this__183499.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__183500 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__183500.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__183501 = this;
return this__183501.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__183502 = this;
return this__183502.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__183503 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__183512 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__183513 = (function() { 
var G__183515__delegate = function (x,p__183506){
var map__183507__183508 = p__183506;
var map__183507__183509 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__183507__183508))?cljs.core.apply.call(null,cljs.core.hash_map,map__183507__183508):map__183507__183508);
var validator__183510 = cljs.core.get.call(null,map__183507__183509,"\uFDD0'validator");
var meta__183511 = cljs.core.get.call(null,map__183507__183509,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__183511,validator__183510,null));
};
var G__183515 = function (x,var_args){
var p__183506 = null;
if (goog.isDef(var_args)) {
  p__183506 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__183515__delegate.call(this, x, p__183506);
};
G__183515.cljs$lang$maxFixedArity = 1;
G__183515.cljs$lang$applyTo = (function (arglist__183516){
var x = cljs.core.first(arglist__183516);
var p__183506 = cljs.core.rest(arglist__183516);
return G__183515__delegate.call(this, x, p__183506);
});
return G__183515;
})()
;
atom = function(x,var_args){
var p__183506 = var_args;
switch(arguments.length){
case  1 :
return atom__183512.call(this,x);
default:
return atom__183513.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__183513.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____183517 = a.validator;

if(cljs.core.truth_(temp__3698__auto____183517))
{var validate__183518 = temp__3698__auto____183517;

if(cljs.core.truth_(validate__183518.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__183519 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__183519,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___183520 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___183521 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___183522 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___183523 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___183524 = (function() { 
var G__183526__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__183526 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__183526__delegate.call(this, a, f, x, y, z, more);
};
G__183526.cljs$lang$maxFixedArity = 5;
G__183526.cljs$lang$applyTo = (function (arglist__183527){
var a = cljs.core.first(arglist__183527);
var f = cljs.core.first(cljs.core.next(arglist__183527));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183527)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__183527))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__183527)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__183527)))));
return G__183526__delegate.call(this, a, f, x, y, z, more);
});
return G__183526;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___183520.call(this,a,f);
case  3 :
return swap_BANG___183521.call(this,a,f,x);
case  4 :
return swap_BANG___183522.call(this,a,f,x,y);
case  5 :
return swap_BANG___183523.call(this,a,f,x,y,z);
default:
return swap_BANG___183524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___183524.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__183528){
var iref = cljs.core.first(arglist__183528);
var f = cljs.core.first(cljs.core.next(arglist__183528));
var args = cljs.core.rest(cljs.core.next(arglist__183528));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__183529 = (function (){
return gensym.call(null,"G__");
});
var gensym__183530 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__183529.call(this);
case  1 :
return gensym__183530.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__183532 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__183532.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__183533 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__183533.state,(function (p__183534){
var curr_state__183535 = p__183534;
var curr_state__183536 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__183535))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__183535):curr_state__183535);
var done__183537 = cljs.core.get.call(null,curr_state__183536,"\uFDD0'done");

if(cljs.core.truth_(done__183537))
{return curr_state__183536;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__183533.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__183538__183539 = options;
var map__183538__183540 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__183538__183539))?cljs.core.apply.call(null,cljs.core.hash_map,map__183538__183539):map__183538__183539);
var keywordize_keys__183541 = cljs.core.get.call(null,map__183538__183540,"\uFDD0'keywordize-keys");
var keyfn__183542 = (cljs.core.truth_(keywordize_keys__183541)?cljs.core.keyword:cljs.core.str);
var f__183548 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____183547 = (function iter__183543(s__183544){
return (new cljs.core.LazySeq(null,false,(function (){
var s__183544__183545 = s__183544;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__183544__183545)))
{var k__183546 = cljs.core.first.call(null,s__183544__183545);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__183542.call(null,k__183546),thisfn.call(null,(x[k__183546]))]),iter__183543.call(null,cljs.core.rest.call(null,s__183544__183545)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____183547.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__183548.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__183549){
var x = cljs.core.first(arglist__183549);
var options = cljs.core.rest(arglist__183549);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__183550 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__183554__delegate = function (args){
var temp__3695__auto____183551 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__183550),args);

if(cljs.core.truth_(temp__3695__auto____183551))
{var v__183552 = temp__3695__auto____183551;

return v__183552;
} else
{var ret__183553 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__183550,cljs.core.assoc,args,ret__183553);
return ret__183553;
}
};
var G__183554 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__183554__delegate.call(this, args);
};
G__183554.cljs$lang$maxFixedArity = 0;
G__183554.cljs$lang$applyTo = (function (arglist__183555){
var args = cljs.core.seq( arglist__183555 );;
return G__183554__delegate.call(this, args);
});
return G__183554;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__183557 = (function (f){
while(true){
var ret__183556 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__183556)))
{{
var G__183560 = ret__183556;
f = G__183560;
continue;
}
} else
{return ret__183556;
}
break;
}
});
var trampoline__183558 = (function() { 
var G__183561__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__183561 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__183561__delegate.call(this, f, args);
};
G__183561.cljs$lang$maxFixedArity = 1;
G__183561.cljs$lang$applyTo = (function (arglist__183562){
var f = cljs.core.first(arglist__183562);
var args = cljs.core.rest(arglist__183562);
return G__183561__delegate.call(this, f, args);
});
return G__183561;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__183557.call(this,f);
default:
return trampoline__183558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__183558.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__183563 = (function (){
return rand.call(null,1);
});
var rand__183564 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__183563.call(this);
case  1 :
return rand__183564.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__183566 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__183566,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__183566,cljs.core.PersistentVector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___183575 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___183576 = (function (h,child,parent){
var or__3548__auto____183567 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____183567))
{return or__3548__auto____183567;
} else
{var or__3548__auto____183568 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____183568))
{return or__3548__auto____183568;
} else
{var and__3546__auto____183569 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____183569))
{var and__3546__auto____183570 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____183570))
{var and__3546__auto____183571 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____183571))
{var ret__183572 = true;
var i__183573 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____183574 = cljs.core.not.call(null,ret__183572);

if(cljs.core.truth_(or__3548__auto____183574))
{return or__3548__auto____183574;
} else
{return cljs.core._EQ_.call(null,i__183573,cljs.core.count.call(null,parent));
}
})()))
{return ret__183572;
} else
{{
var G__183578 = isa_QMARK_.call(null,h,child.call(null,i__183573),parent.call(null,i__183573));
var G__183579 = (i__183573 + 1);
ret__183572 = G__183578;
i__183573 = G__183579;
continue;
}
}
break;
}
} else
{return and__3546__auto____183571;
}
} else
{return and__3546__auto____183570;
}
} else
{return and__3546__auto____183569;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___183575.call(this,h,child);
case  3 :
return isa_QMARK___183576.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__183580 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__183581 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__183580.call(this,h);
case  2 :
return parents__183581.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__183583 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__183584 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__183583.call(this,h);
case  2 :
return ancestors__183584.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__183586 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__183587 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__183586.call(this,h);
case  2 :
return descendants__183587.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__183597 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__183598 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__183592 = "\uFDD0'parents".call(null,h);
var td__183593 = "\uFDD0'descendants".call(null,h);
var ta__183594 = "\uFDD0'ancestors".call(null,h);
var tf__183595 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____183596 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__183592.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__183594.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__183594.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__183592,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__183595.call(null,"\uFDD0'ancestors".call(null,h),tag,td__183593,parent,ta__183594),"\uFDD0'descendants":tf__183595.call(null,"\uFDD0'descendants".call(null,h),parent,ta__183594,tag,td__183593)});
})());

if(cljs.core.truth_(or__3548__auto____183596))
{return or__3548__auto____183596;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__183597.call(this,h,tag);
case  3 :
return derive__183598.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__183604 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__183605 = (function (h,tag,parent){
var parentMap__183600 = "\uFDD0'parents".call(null,h);
var childsParents__183601 = (cljs.core.truth_(parentMap__183600.call(null,tag))?cljs.core.disj.call(null,parentMap__183600.call(null,tag),parent):cljs.core.set([]));
var newParents__183602 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__183601))?cljs.core.assoc.call(null,parentMap__183600,tag,childsParents__183601):cljs.core.dissoc.call(null,parentMap__183600,tag));
var deriv_seq__183603 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__183589_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__183589_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__183589_SHARP_),cljs.core.second.call(null,p1__183589_SHARP_)));
}),cljs.core.seq.call(null,newParents__183602)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__183600.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__183590_SHARP_,p2__183591_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__183590_SHARP_,p2__183591_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__183603));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__183604.call(this,h,tag);
case  3 :
return underive__183605.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__183607 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____183609 = (cljs.core.truth_((function (){var and__3546__auto____183608 = xprefs__183607;

if(cljs.core.truth_(and__3546__auto____183608))
{return xprefs__183607.call(null,y);
} else
{return and__3546__auto____183608;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____183609))
{return or__3548__auto____183609;
} else
{var or__3548__auto____183611 = (function (){var ps__183610 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__183610) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__183610),prefer_table)))
{} else
{}
{
var G__183614 = cljs.core.rest.call(null,ps__183610);
ps__183610 = G__183614;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____183611))
{return or__3548__auto____183611;
} else
{var or__3548__auto____183613 = (function (){var ps__183612 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__183612) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__183612),y,prefer_table)))
{} else
{}
{
var G__183615 = cljs.core.rest.call(null,ps__183612);
ps__183612 = G__183615;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____183613))
{return or__3548__auto____183613;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____183616 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____183616))
{return or__3548__auto____183616;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__183625 = cljs.core.reduce.call(null,(function (be,p__183617){
var vec__183618__183619 = p__183617;
var k__183620 = cljs.core.nth.call(null,vec__183618__183619,0,null);
var ___183621 = cljs.core.nth.call(null,vec__183618__183619,1,null);
var e__183622 = vec__183618__183619;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__183620)))
{var be2__183624 = (cljs.core.truth_((function (){var or__3548__auto____183623 = (be === null);

if(cljs.core.truth_(or__3548__auto____183623))
{return or__3548__auto____183623;
} else
{return cljs.core.dominates.call(null,k__183620,cljs.core.first.call(null,be),prefer_table);
}
})())?e__183622:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__183624),k__183620,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__183620," and ",cljs.core.first.call(null,be2__183624),", and neither is preferred")));
}
return be2__183624;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__183625))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__183625));
return cljs.core.second.call(null,best_entry__183625);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____183626 = mf;

if(cljs.core.truth_(and__3546__auto____183626))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____183626;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____183627 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____183627))
{return or__3548__auto____183627;
} else
{var or__3548__auto____183628 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____183628))
{return or__3548__auto____183628;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____183629 = mf;

if(cljs.core.truth_(and__3546__auto____183629))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____183629;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____183630 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____183630))
{return or__3548__auto____183630;
} else
{var or__3548__auto____183631 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____183631))
{return or__3548__auto____183631;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____183632 = mf;

if(cljs.core.truth_(and__3546__auto____183632))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____183632;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____183633 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____183633))
{return or__3548__auto____183633;
} else
{var or__3548__auto____183634 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____183634))
{return or__3548__auto____183634;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____183635 = mf;

if(cljs.core.truth_(and__3546__auto____183635))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____183635;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____183636 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____183636))
{return or__3548__auto____183636;
} else
{var or__3548__auto____183637 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____183637))
{return or__3548__auto____183637;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____183638 = mf;

if(cljs.core.truth_(and__3546__auto____183638))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____183638;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____183639 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____183639))
{return or__3548__auto____183639;
} else
{var or__3548__auto____183640 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____183640))
{return or__3548__auto____183640;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____183641 = mf;

if(cljs.core.truth_(and__3546__auto____183641))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____183641;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____183642 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____183642))
{return or__3548__auto____183642;
} else
{var or__3548__auto____183643 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____183643))
{return or__3548__auto____183643;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____183644 = mf;

if(cljs.core.truth_(and__3546__auto____183644))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____183644;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____183645 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____183645))
{return or__3548__auto____183645;
} else
{var or__3548__auto____183646 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____183646))
{return or__3548__auto____183646;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____183647 = mf;

if(cljs.core.truth_(and__3546__auto____183647))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____183647;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____183648 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____183648))
{return or__3548__auto____183648;
} else
{var or__3548__auto____183649 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____183649))
{return or__3548__auto____183649;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__183650 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__183651 = cljs.core._get_method.call(null,mf,dispatch_val__183650);

if(cljs.core.truth_(target_fn__183651))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__183650)));
}
return cljs.core.apply.call(null,target_fn__183651,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__183652 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__183653 = this;
cljs.core.swap_BANG_.call(null,this__183653.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__183653.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__183653.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__183653.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__183654 = this;
cljs.core.swap_BANG_.call(null,this__183654.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__183654.method_cache,this__183654.method_table,this__183654.cached_hierarchy,this__183654.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__183655 = this;
cljs.core.swap_BANG_.call(null,this__183655.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__183655.method_cache,this__183655.method_table,this__183655.cached_hierarchy,this__183655.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__183656 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__183656.cached_hierarchy),cljs.core.deref.call(null,this__183656.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__183656.method_cache,this__183656.method_table,this__183656.cached_hierarchy,this__183656.hierarchy);
}
var temp__3695__auto____183657 = cljs.core.deref.call(null,this__183656.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____183657))
{var target_fn__183658 = temp__3695__auto____183657;

return target_fn__183658;
} else
{var temp__3695__auto____183659 = cljs.core.find_and_cache_best_method.call(null,this__183656.name,dispatch_val,this__183656.hierarchy,this__183656.method_table,this__183656.prefer_table,this__183656.method_cache,this__183656.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____183659))
{var target_fn__183660 = temp__3695__auto____183659;

return target_fn__183660;
} else
{return cljs.core.deref.call(null,this__183656.method_table).call(null,this__183656.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__183661 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__183661.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__183661.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__183661.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__183661.method_cache,this__183661.method_table,this__183661.cached_hierarchy,this__183661.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__183662 = this;
return cljs.core.deref.call(null,this__183662.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__183663 = this;
return cljs.core.deref.call(null,this__183663.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__183664 = this;
return cljs.core.do_dispatch.call(null,mf,this__183664.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__183665__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__183665 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__183665__delegate.call(this, _, args);
};
G__183665.cljs$lang$maxFixedArity = 1;
G__183665.cljs$lang$applyTo = (function (arglist__183666){
var _ = cljs.core.first(arglist__183666);
var args = cljs.core.rest(arglist__183666);
return G__183665__delegate.call(this, _, args);
});
return G__183665;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
