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
var or__3548__auto____184018 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____184018))
{return or__3548__auto____184018;
} else
{var or__3548__auto____184019 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____184019))
{return or__3548__auto____184019;
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
var _invoke__184083 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____184020 = this$;

if(cljs.core.truth_(and__3546__auto____184020))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184020;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____184021 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184021))
{return or__3548__auto____184021;
} else
{var or__3548__auto____184022 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184022))
{return or__3548__auto____184022;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__184084 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____184023 = this$;

if(cljs.core.truth_(and__3546__auto____184023))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184023;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____184024 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184024))
{return or__3548__auto____184024;
} else
{var or__3548__auto____184025 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184025))
{return or__3548__auto____184025;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__184085 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____184026 = this$;

if(cljs.core.truth_(and__3546__auto____184026))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184026;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____184027 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184027))
{return or__3548__auto____184027;
} else
{var or__3548__auto____184028 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184028))
{return or__3548__auto____184028;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__184086 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____184029 = this$;

if(cljs.core.truth_(and__3546__auto____184029))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184029;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____184030 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184030))
{return or__3548__auto____184030;
} else
{var or__3548__auto____184031 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184031))
{return or__3548__auto____184031;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__184087 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____184032 = this$;

if(cljs.core.truth_(and__3546__auto____184032))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184032;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____184033 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184033))
{return or__3548__auto____184033;
} else
{var or__3548__auto____184034 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184034))
{return or__3548__auto____184034;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__184088 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____184035 = this$;

if(cljs.core.truth_(and__3546__auto____184035))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184035;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____184036 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184036))
{return or__3548__auto____184036;
} else
{var or__3548__auto____184037 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184037))
{return or__3548__auto____184037;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__184089 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____184038 = this$;

if(cljs.core.truth_(and__3546__auto____184038))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184038;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____184039 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184039))
{return or__3548__auto____184039;
} else
{var or__3548__auto____184040 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184040))
{return or__3548__auto____184040;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__184090 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____184041 = this$;

if(cljs.core.truth_(and__3546__auto____184041))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184041;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____184042 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184042))
{return or__3548__auto____184042;
} else
{var or__3548__auto____184043 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184043))
{return or__3548__auto____184043;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__184091 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____184044 = this$;

if(cljs.core.truth_(and__3546__auto____184044))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184044;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____184045 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184045))
{return or__3548__auto____184045;
} else
{var or__3548__auto____184046 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184046))
{return or__3548__auto____184046;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__184092 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____184047 = this$;

if(cljs.core.truth_(and__3546__auto____184047))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184047;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____184048 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184048))
{return or__3548__auto____184048;
} else
{var or__3548__auto____184049 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184049))
{return or__3548__auto____184049;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__184093 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____184050 = this$;

if(cljs.core.truth_(and__3546__auto____184050))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184050;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____184051 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184051))
{return or__3548__auto____184051;
} else
{var or__3548__auto____184052 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184052))
{return or__3548__auto____184052;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__184094 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____184053 = this$;

if(cljs.core.truth_(and__3546__auto____184053))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184053;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____184054 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184054))
{return or__3548__auto____184054;
} else
{var or__3548__auto____184055 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184055))
{return or__3548__auto____184055;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__184095 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____184056 = this$;

if(cljs.core.truth_(and__3546__auto____184056))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184056;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____184057 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184057))
{return or__3548__auto____184057;
} else
{var or__3548__auto____184058 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184058))
{return or__3548__auto____184058;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__184096 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____184059 = this$;

if(cljs.core.truth_(and__3546__auto____184059))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184059;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____184060 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184060))
{return or__3548__auto____184060;
} else
{var or__3548__auto____184061 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184061))
{return or__3548__auto____184061;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__184097 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____184062 = this$;

if(cljs.core.truth_(and__3546__auto____184062))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184062;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____184063 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184063))
{return or__3548__auto____184063;
} else
{var or__3548__auto____184064 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184064))
{return or__3548__auto____184064;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__184098 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____184065 = this$;

if(cljs.core.truth_(and__3546__auto____184065))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184065;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____184066 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184066))
{return or__3548__auto____184066;
} else
{var or__3548__auto____184067 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184067))
{return or__3548__auto____184067;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__184099 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____184068 = this$;

if(cljs.core.truth_(and__3546__auto____184068))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184068;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____184069 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184069))
{return or__3548__auto____184069;
} else
{var or__3548__auto____184070 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184070))
{return or__3548__auto____184070;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__184100 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____184071 = this$;

if(cljs.core.truth_(and__3546__auto____184071))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184071;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____184072 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184072))
{return or__3548__auto____184072;
} else
{var or__3548__auto____184073 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184073))
{return or__3548__auto____184073;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__184101 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____184074 = this$;

if(cljs.core.truth_(and__3546__auto____184074))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184074;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____184075 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184075))
{return or__3548__auto____184075;
} else
{var or__3548__auto____184076 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184076))
{return or__3548__auto____184076;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__184102 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____184077 = this$;

if(cljs.core.truth_(and__3546__auto____184077))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184077;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____184078 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184078))
{return or__3548__auto____184078;
} else
{var or__3548__auto____184079 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184079))
{return or__3548__auto____184079;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__184103 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____184080 = this$;

if(cljs.core.truth_(and__3546__auto____184080))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____184080;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____184081 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184081))
{return or__3548__auto____184081;
} else
{var or__3548__auto____184082 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____184082))
{return or__3548__auto____184082;
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
return _invoke__184083.call(this,this$);
case  2 :
return _invoke__184084.call(this,this$,a);
case  3 :
return _invoke__184085.call(this,this$,a,b);
case  4 :
return _invoke__184086.call(this,this$,a,b,c);
case  5 :
return _invoke__184087.call(this,this$,a,b,c,d);
case  6 :
return _invoke__184088.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__184089.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__184090.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__184091.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__184092.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__184093.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__184094.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__184095.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__184096.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__184097.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__184098.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__184099.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__184100.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__184101.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__184102.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__184103.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____184105 = coll;

if(cljs.core.truth_(and__3546__auto____184105))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____184105;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____184106 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184106))
{return or__3548__auto____184106;
} else
{var or__3548__auto____184107 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____184107))
{return or__3548__auto____184107;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____184108 = coll;

if(cljs.core.truth_(and__3546__auto____184108))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____184108;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____184109 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184109))
{return or__3548__auto____184109;
} else
{var or__3548__auto____184110 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____184110))
{return or__3548__auto____184110;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____184111 = coll;

if(cljs.core.truth_(and__3546__auto____184111))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____184111;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____184112 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184112))
{return or__3548__auto____184112;
} else
{var or__3548__auto____184113 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____184113))
{return or__3548__auto____184113;
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
var _nth__184120 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____184114 = coll;

if(cljs.core.truth_(and__3546__auto____184114))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____184114;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____184115 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184115))
{return or__3548__auto____184115;
} else
{var or__3548__auto____184116 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____184116))
{return or__3548__auto____184116;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__184121 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____184117 = coll;

if(cljs.core.truth_(and__3546__auto____184117))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____184117;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____184118 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184118))
{return or__3548__auto____184118;
} else
{var or__3548__auto____184119 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____184119))
{return or__3548__auto____184119;
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
return _nth__184120.call(this,coll,n);
case  3 :
return _nth__184121.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____184123 = coll;

if(cljs.core.truth_(and__3546__auto____184123))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____184123;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____184124 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184124))
{return or__3548__auto____184124;
} else
{var or__3548__auto____184125 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____184125))
{return or__3548__auto____184125;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____184126 = coll;

if(cljs.core.truth_(and__3546__auto____184126))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____184126;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____184127 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184127))
{return or__3548__auto____184127;
} else
{var or__3548__auto____184128 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____184128))
{return or__3548__auto____184128;
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
var _lookup__184135 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____184129 = o;

if(cljs.core.truth_(and__3546__auto____184129))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____184129;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____184130 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____184130))
{return or__3548__auto____184130;
} else
{var or__3548__auto____184131 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____184131))
{return or__3548__auto____184131;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__184136 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____184132 = o;

if(cljs.core.truth_(and__3546__auto____184132))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____184132;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____184133 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____184133))
{return or__3548__auto____184133;
} else
{var or__3548__auto____184134 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____184134))
{return or__3548__auto____184134;
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
return _lookup__184135.call(this,o,k);
case  3 :
return _lookup__184136.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____184138 = coll;

if(cljs.core.truth_(and__3546__auto____184138))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____184138;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____184139 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184139))
{return or__3548__auto____184139;
} else
{var or__3548__auto____184140 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____184140))
{return or__3548__auto____184140;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____184141 = coll;

if(cljs.core.truth_(and__3546__auto____184141))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____184141;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____184142 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184142))
{return or__3548__auto____184142;
} else
{var or__3548__auto____184143 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____184143))
{return or__3548__auto____184143;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____184144 = coll;

if(cljs.core.truth_(and__3546__auto____184144))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____184144;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____184145 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184145))
{return or__3548__auto____184145;
} else
{var or__3548__auto____184146 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____184146))
{return or__3548__auto____184146;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____184147 = coll;

if(cljs.core.truth_(and__3546__auto____184147))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____184147;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____184148 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184148))
{return or__3548__auto____184148;
} else
{var or__3548__auto____184149 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____184149))
{return or__3548__auto____184149;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____184150 = coll;

if(cljs.core.truth_(and__3546__auto____184150))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____184150;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____184151 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184151))
{return or__3548__auto____184151;
} else
{var or__3548__auto____184152 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____184152))
{return or__3548__auto____184152;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____184153 = coll;

if(cljs.core.truth_(and__3546__auto____184153))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____184153;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____184154 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184154))
{return or__3548__auto____184154;
} else
{var or__3548__auto____184155 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____184155))
{return or__3548__auto____184155;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____184156 = coll;

if(cljs.core.truth_(and__3546__auto____184156))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____184156;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____184157 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184157))
{return or__3548__auto____184157;
} else
{var or__3548__auto____184158 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____184158))
{return or__3548__auto____184158;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____184159 = o;

if(cljs.core.truth_(and__3546__auto____184159))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____184159;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____184160 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____184160))
{return or__3548__auto____184160;
} else
{var or__3548__auto____184161 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____184161))
{return or__3548__auto____184161;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____184162 = o;

if(cljs.core.truth_(and__3546__auto____184162))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____184162;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____184163 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____184163))
{return or__3548__auto____184163;
} else
{var or__3548__auto____184164 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____184164))
{return or__3548__auto____184164;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____184165 = o;

if(cljs.core.truth_(and__3546__auto____184165))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____184165;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____184166 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____184166))
{return or__3548__auto____184166;
} else
{var or__3548__auto____184167 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____184167))
{return or__3548__auto____184167;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____184168 = o;

if(cljs.core.truth_(and__3546__auto____184168))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____184168;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____184169 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____184169))
{return or__3548__auto____184169;
} else
{var or__3548__auto____184170 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____184170))
{return or__3548__auto____184170;
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
var _reduce__184177 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____184171 = coll;

if(cljs.core.truth_(and__3546__auto____184171))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____184171;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____184172 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184172))
{return or__3548__auto____184172;
} else
{var or__3548__auto____184173 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____184173))
{return or__3548__auto____184173;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__184178 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____184174 = coll;

if(cljs.core.truth_(and__3546__auto____184174))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____184174;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____184175 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____184175))
{return or__3548__auto____184175;
} else
{var or__3548__auto____184176 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____184176))
{return or__3548__auto____184176;
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
return _reduce__184177.call(this,coll,f);
case  3 :
return _reduce__184178.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____184180 = o;

if(cljs.core.truth_(and__3546__auto____184180))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____184180;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____184181 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____184181))
{return or__3548__auto____184181;
} else
{var or__3548__auto____184182 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____184182))
{return or__3548__auto____184182;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____184183 = o;

if(cljs.core.truth_(and__3546__auto____184183))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____184183;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____184184 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____184184))
{return or__3548__auto____184184;
} else
{var or__3548__auto____184185 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____184185))
{return or__3548__auto____184185;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____184186 = o;

if(cljs.core.truth_(and__3546__auto____184186))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____184186;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____184187 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____184187))
{return or__3548__auto____184187;
} else
{var or__3548__auto____184188 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____184188))
{return or__3548__auto____184188;
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
if(cljs.core.truth_((function (){var and__3546__auto____184189 = o;

if(cljs.core.truth_(and__3546__auto____184189))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____184189;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____184190 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____184190))
{return or__3548__auto____184190;
} else
{var or__3548__auto____184191 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____184191))
{return or__3548__auto____184191;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____184192 = d;

if(cljs.core.truth_(and__3546__auto____184192))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____184192;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____184193 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____184193))
{return or__3548__auto____184193;
} else
{var or__3548__auto____184194 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____184194))
{return or__3548__auto____184194;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____184195 = this$;

if(cljs.core.truth_(and__3546__auto____184195))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____184195;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____184196 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184196))
{return or__3548__auto____184196;
} else
{var or__3548__auto____184197 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____184197))
{return or__3548__auto____184197;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____184198 = this$;

if(cljs.core.truth_(and__3546__auto____184198))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____184198;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____184199 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184199))
{return or__3548__auto____184199;
} else
{var or__3548__auto____184200 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____184200))
{return or__3548__auto____184200;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____184201 = this$;

if(cljs.core.truth_(and__3546__auto____184201))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____184201;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____184202 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____184202))
{return or__3548__auto____184202;
} else
{var or__3548__auto____184203 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____184203))
{return or__3548__auto____184203;
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
var G__184204 = null;
var G__184204__184205 = (function (o,k){
return null;
});
var G__184204__184206 = (function (o,k,not_found){
return not_found;
});
G__184204 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__184204__184205.call(this,o,k);
case  3 :
return G__184204__184206.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184204;
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
var G__184208 = null;
var G__184208__184209 = (function (_,f){
return f.call(null);
});
var G__184208__184210 = (function (_,f,start){
return start;
});
G__184208 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__184208__184209.call(this,_,f);
case  3 :
return G__184208__184210.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184208;
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
var G__184212 = null;
var G__184212__184213 = (function (_,n){
return null;
});
var G__184212__184214 = (function (_,n,not_found){
return not_found;
});
G__184212 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__184212__184213.call(this,_,n);
case  3 :
return G__184212__184214.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184212;
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
var ci_reduce__184222 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__184216 = cljs.core._nth.call(null,cicoll,0);
var n__184217 = 1;

while(true){
if(cljs.core.truth_((n__184217 < cljs.core._count.call(null,cicoll))))
{{
var G__184226 = f.call(null,val__184216,cljs.core._nth.call(null,cicoll,n__184217));
var G__184227 = (n__184217 + 1);
val__184216 = G__184226;
n__184217 = G__184227;
continue;
}
} else
{return val__184216;
}
break;
}
}
});
var ci_reduce__184223 = (function (cicoll,f,val){
var val__184218 = val;
var n__184219 = 0;

while(true){
if(cljs.core.truth_((n__184219 < cljs.core._count.call(null,cicoll))))
{{
var G__184228 = f.call(null,val__184218,cljs.core._nth.call(null,cicoll,n__184219));
var G__184229 = (n__184219 + 1);
val__184218 = G__184228;
n__184219 = G__184229;
continue;
}
} else
{return val__184218;
}
break;
}
});
var ci_reduce__184224 = (function (cicoll,f,val,idx){
var val__184220 = val;
var n__184221 = idx;

while(true){
if(cljs.core.truth_((n__184221 < cljs.core._count.call(null,cicoll))))
{{
var G__184230 = f.call(null,val__184220,cljs.core._nth.call(null,cicoll,n__184221));
var G__184231 = (n__184221 + 1);
val__184220 = G__184230;
n__184221 = G__184231;
continue;
}
} else
{return val__184220;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__184222.call(this,cicoll,f);
case  3 :
return ci_reduce__184223.call(this,cicoll,f,val);
case  4 :
return ci_reduce__184224.call(this,cicoll,f,val,idx);
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
var this__184232 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__184245 = null;
var G__184245__184246 = (function (_,f){
var this__184233 = this;
return cljs.core.ci_reduce.call(null,this__184233.a,f,(this__184233.a[this__184233.i]),(this__184233.i + 1));
});
var G__184245__184247 = (function (_,f,start){
var this__184234 = this;
return cljs.core.ci_reduce.call(null,this__184234.a,f,start,this__184234.i);
});
G__184245 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__184245__184246.call(this,_,f);
case  3 :
return G__184245__184247.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184245;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__184235 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__184236 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__184249 = null;
var G__184249__184250 = (function (coll,n){
var this__184237 = this;
var i__184238 = (n + this__184237.i);

if(cljs.core.truth_((i__184238 < this__184237.a.length)))
{return (this__184237.a[i__184238]);
} else
{return null;
}
});
var G__184249__184251 = (function (coll,n,not_found){
var this__184239 = this;
var i__184240 = (n + this__184239.i);

if(cljs.core.truth_((i__184240 < this__184239.a.length)))
{return (this__184239.a[i__184240]);
} else
{return not_found;
}
});
G__184249 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__184249__184250.call(this,coll,n);
case  3 :
return G__184249__184251.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184249;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__184241 = this;
return (this__184241.a.length - this__184241.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__184242 = this;
return (this__184242.a[this__184242.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__184243 = this;
if(cljs.core.truth_(((this__184243.i + 1) < this__184243.a.length)))
{return (new cljs.core.IndexedSeq(this__184243.a,(this__184243.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__184244 = this;
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
var G__184253 = null;
var G__184253__184254 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__184253__184255 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__184253 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__184253__184254.call(this,array,f);
case  3 :
return G__184253__184255.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184253;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__184257 = null;
var G__184257__184258 = (function (array,k){
return (array[k]);
});
var G__184257__184259 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__184257 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__184257__184258.call(this,array,k);
case  3 :
return G__184257__184259.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184257;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__184261 = null;
var G__184261__184262 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__184261__184263 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__184261 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__184261__184262.call(this,array,n);
case  3 :
return G__184261__184263.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184261;
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
var temp__3698__auto____184265 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184265))
{var s__184266 = temp__3698__auto____184265;

return cljs.core._first.call(null,s__184266);
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
var G__184267 = cljs.core.next.call(null,s);
s = G__184267;
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
var s__184268 = cljs.core.seq.call(null,x);
var n__184269 = 0;

while(true){
if(cljs.core.truth_(s__184268))
{{
var G__184270 = cljs.core.next.call(null,s__184268);
var G__184271 = (n__184269 + 1);
s__184268 = G__184270;
n__184269 = G__184271;
continue;
}
} else
{return n__184269;
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
var conj__184272 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__184273 = (function() { 
var G__184275__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__184276 = conj.call(null,coll,x);
var G__184277 = cljs.core.first.call(null,xs);
var G__184278 = cljs.core.next.call(null,xs);
coll = G__184276;
x = G__184277;
xs = G__184278;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__184275 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184275__delegate.call(this, coll, x, xs);
};
G__184275.cljs$lang$maxFixedArity = 2;
G__184275.cljs$lang$applyTo = (function (arglist__184279){
var coll = cljs.core.first(arglist__184279);
var x = cljs.core.first(cljs.core.next(arglist__184279));
var xs = cljs.core.rest(cljs.core.next(arglist__184279));
return G__184275__delegate.call(this, coll, x, xs);
});
return G__184275;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__184272.call(this,coll,x);
default:
return conj__184273.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__184273.cljs$lang$applyTo;
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
var nth__184280 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__184281 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__184280.call(this,coll,n);
case  3 :
return nth__184281.call(this,coll,n,not_found);
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
var get__184283 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__184284 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__184283.call(this,o,k);
case  3 :
return get__184284.call(this,o,k,not_found);
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
var assoc__184287 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__184288 = (function() { 
var G__184290__delegate = function (coll,k,v,kvs){
while(true){
var ret__184286 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__184291 = ret__184286;
var G__184292 = cljs.core.first.call(null,kvs);
var G__184293 = cljs.core.second.call(null,kvs);
var G__184294 = cljs.core.nnext.call(null,kvs);
coll = G__184291;
k = G__184292;
v = G__184293;
kvs = G__184294;
continue;
}
} else
{return ret__184286;
}
break;
}
};
var G__184290 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184290__delegate.call(this, coll, k, v, kvs);
};
G__184290.cljs$lang$maxFixedArity = 3;
G__184290.cljs$lang$applyTo = (function (arglist__184295){
var coll = cljs.core.first(arglist__184295);
var k = cljs.core.first(cljs.core.next(arglist__184295));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184295)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184295)));
return G__184290__delegate.call(this, coll, k, v, kvs);
});
return G__184290;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__184287.call(this,coll,k,v);
default:
return assoc__184288.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__184288.cljs$lang$applyTo;
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
var dissoc__184297 = (function (coll){
return coll;
});
var dissoc__184298 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__184299 = (function() { 
var G__184301__delegate = function (coll,k,ks){
while(true){
var ret__184296 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__184302 = ret__184296;
var G__184303 = cljs.core.first.call(null,ks);
var G__184304 = cljs.core.next.call(null,ks);
coll = G__184302;
k = G__184303;
ks = G__184304;
continue;
}
} else
{return ret__184296;
}
break;
}
};
var G__184301 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184301__delegate.call(this, coll, k, ks);
};
G__184301.cljs$lang$maxFixedArity = 2;
G__184301.cljs$lang$applyTo = (function (arglist__184305){
var coll = cljs.core.first(arglist__184305);
var k = cljs.core.first(cljs.core.next(arglist__184305));
var ks = cljs.core.rest(cljs.core.next(arglist__184305));
return G__184301__delegate.call(this, coll, k, ks);
});
return G__184301;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__184297.call(this,coll);
case  2 :
return dissoc__184298.call(this,coll,k);
default:
return dissoc__184299.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__184299.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____184306 = o;

if(cljs.core.truth_((function (){var and__3546__auto____184307 = x__451__auto____184306;

if(cljs.core.truth_(and__3546__auto____184307))
{var and__3546__auto____184308 = x__451__auto____184306.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____184308))
{return cljs.core.not.call(null,x__451__auto____184306.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____184308;
}
} else
{return and__3546__auto____184307;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____184306);
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
var disj__184310 = (function (coll){
return coll;
});
var disj__184311 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__184312 = (function() { 
var G__184314__delegate = function (coll,k,ks){
while(true){
var ret__184309 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__184315 = ret__184309;
var G__184316 = cljs.core.first.call(null,ks);
var G__184317 = cljs.core.next.call(null,ks);
coll = G__184315;
k = G__184316;
ks = G__184317;
continue;
}
} else
{return ret__184309;
}
break;
}
};
var G__184314 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184314__delegate.call(this, coll, k, ks);
};
G__184314.cljs$lang$maxFixedArity = 2;
G__184314.cljs$lang$applyTo = (function (arglist__184318){
var coll = cljs.core.first(arglist__184318);
var k = cljs.core.first(cljs.core.next(arglist__184318));
var ks = cljs.core.rest(cljs.core.next(arglist__184318));
return G__184314__delegate.call(this, coll, k, ks);
});
return G__184314;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__184310.call(this,coll);
case  2 :
return disj__184311.call(this,coll,k);
default:
return disj__184312.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__184312.cljs$lang$applyTo;
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
{var x__451__auto____184319 = x;

if(cljs.core.truth_((function (){var and__3546__auto____184320 = x__451__auto____184319;

if(cljs.core.truth_(and__3546__auto____184320))
{var and__3546__auto____184321 = x__451__auto____184319.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____184321))
{return cljs.core.not.call(null,x__451__auto____184319.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____184321;
}
} else
{return and__3546__auto____184320;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____184319);
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
{var x__451__auto____184322 = x;

if(cljs.core.truth_((function (){var and__3546__auto____184323 = x__451__auto____184322;

if(cljs.core.truth_(and__3546__auto____184323))
{var and__3546__auto____184324 = x__451__auto____184322.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____184324))
{return cljs.core.not.call(null,x__451__auto____184322.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____184324;
}
} else
{return and__3546__auto____184323;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____184322);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____184325 = x;

if(cljs.core.truth_((function (){var and__3546__auto____184326 = x__451__auto____184325;

if(cljs.core.truth_(and__3546__auto____184326))
{var and__3546__auto____184327 = x__451__auto____184325.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____184327))
{return cljs.core.not.call(null,x__451__auto____184325.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____184327;
}
} else
{return and__3546__auto____184326;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____184325);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____184328 = x;

if(cljs.core.truth_((function (){var and__3546__auto____184329 = x__451__auto____184328;

if(cljs.core.truth_(and__3546__auto____184329))
{var and__3546__auto____184330 = x__451__auto____184328.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____184330))
{return cljs.core.not.call(null,x__451__auto____184328.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____184330;
}
} else
{return and__3546__auto____184329;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____184328);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____184331 = x;

if(cljs.core.truth_((function (){var and__3546__auto____184332 = x__451__auto____184331;

if(cljs.core.truth_(and__3546__auto____184332))
{var and__3546__auto____184333 = x__451__auto____184331.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____184333))
{return cljs.core.not.call(null,x__451__auto____184331.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____184333;
}
} else
{return and__3546__auto____184332;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____184331);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____184334 = x;

if(cljs.core.truth_((function (){var and__3546__auto____184335 = x__451__auto____184334;

if(cljs.core.truth_(and__3546__auto____184335))
{var and__3546__auto____184336 = x__451__auto____184334.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____184336))
{return cljs.core.not.call(null,x__451__auto____184334.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____184336;
}
} else
{return and__3546__auto____184335;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____184334);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____184337 = x;

if(cljs.core.truth_((function (){var and__3546__auto____184338 = x__451__auto____184337;

if(cljs.core.truth_(and__3546__auto____184338))
{var and__3546__auto____184339 = x__451__auto____184337.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____184339))
{return cljs.core.not.call(null,x__451__auto____184337.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____184339;
}
} else
{return and__3546__auto____184338;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____184337);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__184340 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__184340.push(key);
}));
return keys__184340;
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
{var x__451__auto____184341 = s;

if(cljs.core.truth_((function (){var and__3546__auto____184342 = x__451__auto____184341;

if(cljs.core.truth_(and__3546__auto____184342))
{var and__3546__auto____184343 = x__451__auto____184341.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____184343))
{return cljs.core.not.call(null,x__451__auto____184341.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____184343;
}
} else
{return and__3546__auto____184342;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____184341);
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
var and__3546__auto____184344 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____184344))
{return cljs.core.not.call(null,(function (){var or__3548__auto____184345 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____184345))
{return or__3548__auto____184345;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____184344;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____184346 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____184346))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____184346;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____184347 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____184347))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____184347;
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
var and__3546__auto____184348 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____184348))
{return (n == n.toFixed());
} else
{return and__3546__auto____184348;
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
if(cljs.core.truth_((function (){var and__3546__auto____184349 = coll;

if(cljs.core.truth_(and__3546__auto____184349))
{var and__3546__auto____184350 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____184350))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____184350;
}
} else
{return and__3546__auto____184349;
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
var distinct_QMARK___184355 = (function (x){
return true;
});
var distinct_QMARK___184356 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___184357 = (function() { 
var G__184359__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__184351 = cljs.core.set([y,x]);
var xs__184352 = more;

while(true){
var x__184353 = cljs.core.first.call(null,xs__184352);
var etc__184354 = cljs.core.next.call(null,xs__184352);

if(cljs.core.truth_(xs__184352))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__184351,x__184353)))
{return false;
} else
{{
var G__184360 = cljs.core.conj.call(null,s__184351,x__184353);
var G__184361 = etc__184354;
s__184351 = G__184360;
xs__184352 = G__184361;
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
var G__184359 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184359__delegate.call(this, x, y, more);
};
G__184359.cljs$lang$maxFixedArity = 2;
G__184359.cljs$lang$applyTo = (function (arglist__184362){
var x = cljs.core.first(arglist__184362);
var y = cljs.core.first(cljs.core.next(arglist__184362));
var more = cljs.core.rest(cljs.core.next(arglist__184362));
return G__184359__delegate.call(this, x, y, more);
});
return G__184359;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___184355.call(this,x);
case  2 :
return distinct_QMARK___184356.call(this,x,y);
default:
return distinct_QMARK___184357.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___184357.cljs$lang$applyTo;
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
var r__184363 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__184363)))
{return r__184363;
} else
{if(cljs.core.truth_(r__184363))
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
var sort__184365 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__184366 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__184364 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__184364,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__184364);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__184365.call(this,comp);
case  2 :
return sort__184366.call(this,comp,coll);
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
var sort_by__184368 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__184369 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__184368.call(this,keyfn,comp);
case  3 :
return sort_by__184369.call(this,keyfn,comp,coll);
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
var reduce__184371 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__184372 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__184371.call(this,f,val);
case  3 :
return reduce__184372.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__184378 = (function (f,coll){
var temp__3695__auto____184374 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____184374))
{var s__184375 = temp__3695__auto____184374;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__184375),cljs.core.next.call(null,s__184375));
} else
{return f.call(null);
}
});
var seq_reduce__184379 = (function (f,val,coll){
var val__184376 = val;
var coll__184377 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__184377))
{{
var G__184381 = f.call(null,val__184376,cljs.core.first.call(null,coll__184377));
var G__184382 = cljs.core.next.call(null,coll__184377);
val__184376 = G__184381;
coll__184377 = G__184382;
continue;
}
} else
{return val__184376;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__184378.call(this,f,val);
case  3 :
return seq_reduce__184379.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__184383 = null;
var G__184383__184384 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__184383__184385 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__184383 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__184383__184384.call(this,coll,f);
case  3 :
return G__184383__184385.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184383;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___184387 = (function (){
return 0;
});
var _PLUS___184388 = (function (x){
return x;
});
var _PLUS___184389 = (function (x,y){
return (x + y);
});
var _PLUS___184390 = (function() { 
var G__184392__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__184392 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184392__delegate.call(this, x, y, more);
};
G__184392.cljs$lang$maxFixedArity = 2;
G__184392.cljs$lang$applyTo = (function (arglist__184393){
var x = cljs.core.first(arglist__184393);
var y = cljs.core.first(cljs.core.next(arglist__184393));
var more = cljs.core.rest(cljs.core.next(arglist__184393));
return G__184392__delegate.call(this, x, y, more);
});
return G__184392;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___184387.call(this);
case  1 :
return _PLUS___184388.call(this,x);
case  2 :
return _PLUS___184389.call(this,x,y);
default:
return _PLUS___184390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___184390.cljs$lang$applyTo;
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
var ___184394 = (function (x){
return (- x);
});
var ___184395 = (function (x,y){
return (x - y);
});
var ___184396 = (function() { 
var G__184398__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__184398 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184398__delegate.call(this, x, y, more);
};
G__184398.cljs$lang$maxFixedArity = 2;
G__184398.cljs$lang$applyTo = (function (arglist__184399){
var x = cljs.core.first(arglist__184399);
var y = cljs.core.first(cljs.core.next(arglist__184399));
var more = cljs.core.rest(cljs.core.next(arglist__184399));
return G__184398__delegate.call(this, x, y, more);
});
return G__184398;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___184394.call(this,x);
case  2 :
return ___184395.call(this,x,y);
default:
return ___184396.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___184396.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___184400 = (function (){
return 1;
});
var _STAR___184401 = (function (x){
return x;
});
var _STAR___184402 = (function (x,y){
return (x * y);
});
var _STAR___184403 = (function() { 
var G__184405__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__184405 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184405__delegate.call(this, x, y, more);
};
G__184405.cljs$lang$maxFixedArity = 2;
G__184405.cljs$lang$applyTo = (function (arglist__184406){
var x = cljs.core.first(arglist__184406);
var y = cljs.core.first(cljs.core.next(arglist__184406));
var more = cljs.core.rest(cljs.core.next(arglist__184406));
return G__184405__delegate.call(this, x, y, more);
});
return G__184405;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___184400.call(this);
case  1 :
return _STAR___184401.call(this,x);
case  2 :
return _STAR___184402.call(this,x,y);
default:
return _STAR___184403.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___184403.cljs$lang$applyTo;
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
var _SLASH___184407 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___184408 = (function (x,y){
return (x / y);
});
var _SLASH___184409 = (function() { 
var G__184411__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__184411 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184411__delegate.call(this, x, y, more);
};
G__184411.cljs$lang$maxFixedArity = 2;
G__184411.cljs$lang$applyTo = (function (arglist__184412){
var x = cljs.core.first(arglist__184412);
var y = cljs.core.first(cljs.core.next(arglist__184412));
var more = cljs.core.rest(cljs.core.next(arglist__184412));
return G__184411__delegate.call(this, x, y, more);
});
return G__184411;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___184407.call(this,x);
case  2 :
return _SLASH___184408.call(this,x,y);
default:
return _SLASH___184409.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___184409.cljs$lang$applyTo;
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
var _LT___184413 = (function (x){
return true;
});
var _LT___184414 = (function (x,y){
return (x < y);
});
var _LT___184415 = (function() { 
var G__184417__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__184418 = y;
var G__184419 = cljs.core.first.call(null,more);
var G__184420 = cljs.core.next.call(null,more);
x = G__184418;
y = G__184419;
more = G__184420;
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
var G__184417 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184417__delegate.call(this, x, y, more);
};
G__184417.cljs$lang$maxFixedArity = 2;
G__184417.cljs$lang$applyTo = (function (arglist__184421){
var x = cljs.core.first(arglist__184421);
var y = cljs.core.first(cljs.core.next(arglist__184421));
var more = cljs.core.rest(cljs.core.next(arglist__184421));
return G__184417__delegate.call(this, x, y, more);
});
return G__184417;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___184413.call(this,x);
case  2 :
return _LT___184414.call(this,x,y);
default:
return _LT___184415.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___184415.cljs$lang$applyTo;
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
var _LT__EQ___184422 = (function (x){
return true;
});
var _LT__EQ___184423 = (function (x,y){
return (x <= y);
});
var _LT__EQ___184424 = (function() { 
var G__184426__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__184427 = y;
var G__184428 = cljs.core.first.call(null,more);
var G__184429 = cljs.core.next.call(null,more);
x = G__184427;
y = G__184428;
more = G__184429;
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
var G__184426 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184426__delegate.call(this, x, y, more);
};
G__184426.cljs$lang$maxFixedArity = 2;
G__184426.cljs$lang$applyTo = (function (arglist__184430){
var x = cljs.core.first(arglist__184430);
var y = cljs.core.first(cljs.core.next(arglist__184430));
var more = cljs.core.rest(cljs.core.next(arglist__184430));
return G__184426__delegate.call(this, x, y, more);
});
return G__184426;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___184422.call(this,x);
case  2 :
return _LT__EQ___184423.call(this,x,y);
default:
return _LT__EQ___184424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___184424.cljs$lang$applyTo;
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
var _GT___184431 = (function (x){
return true;
});
var _GT___184432 = (function (x,y){
return (x > y);
});
var _GT___184433 = (function() { 
var G__184435__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__184436 = y;
var G__184437 = cljs.core.first.call(null,more);
var G__184438 = cljs.core.next.call(null,more);
x = G__184436;
y = G__184437;
more = G__184438;
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
var G__184435 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184435__delegate.call(this, x, y, more);
};
G__184435.cljs$lang$maxFixedArity = 2;
G__184435.cljs$lang$applyTo = (function (arglist__184439){
var x = cljs.core.first(arglist__184439);
var y = cljs.core.first(cljs.core.next(arglist__184439));
var more = cljs.core.rest(cljs.core.next(arglist__184439));
return G__184435__delegate.call(this, x, y, more);
});
return G__184435;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___184431.call(this,x);
case  2 :
return _GT___184432.call(this,x,y);
default:
return _GT___184433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___184433.cljs$lang$applyTo;
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
var _GT__EQ___184440 = (function (x){
return true;
});
var _GT__EQ___184441 = (function (x,y){
return (x >= y);
});
var _GT__EQ___184442 = (function() { 
var G__184444__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__184445 = y;
var G__184446 = cljs.core.first.call(null,more);
var G__184447 = cljs.core.next.call(null,more);
x = G__184445;
y = G__184446;
more = G__184447;
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
var G__184444 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184444__delegate.call(this, x, y, more);
};
G__184444.cljs$lang$maxFixedArity = 2;
G__184444.cljs$lang$applyTo = (function (arglist__184448){
var x = cljs.core.first(arglist__184448);
var y = cljs.core.first(cljs.core.next(arglist__184448));
var more = cljs.core.rest(cljs.core.next(arglist__184448));
return G__184444__delegate.call(this, x, y, more);
});
return G__184444;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___184440.call(this,x);
case  2 :
return _GT__EQ___184441.call(this,x,y);
default:
return _GT__EQ___184442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___184442.cljs$lang$applyTo;
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
var max__184449 = (function (x){
return x;
});
var max__184450 = (function (x,y){
return ((x > y) ? x : y);
});
var max__184451 = (function() { 
var G__184453__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__184453 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184453__delegate.call(this, x, y, more);
};
G__184453.cljs$lang$maxFixedArity = 2;
G__184453.cljs$lang$applyTo = (function (arglist__184454){
var x = cljs.core.first(arglist__184454);
var y = cljs.core.first(cljs.core.next(arglist__184454));
var more = cljs.core.rest(cljs.core.next(arglist__184454));
return G__184453__delegate.call(this, x, y, more);
});
return G__184453;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__184449.call(this,x);
case  2 :
return max__184450.call(this,x,y);
default:
return max__184451.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__184451.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__184455 = (function (x){
return x;
});
var min__184456 = (function (x,y){
return ((x < y) ? x : y);
});
var min__184457 = (function() { 
var G__184459__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__184459 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184459__delegate.call(this, x, y, more);
};
G__184459.cljs$lang$maxFixedArity = 2;
G__184459.cljs$lang$applyTo = (function (arglist__184460){
var x = cljs.core.first(arglist__184460);
var y = cljs.core.first(cljs.core.next(arglist__184460));
var more = cljs.core.rest(cljs.core.next(arglist__184460));
return G__184459__delegate.call(this, x, y, more);
});
return G__184459;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__184455.call(this,x);
case  2 :
return min__184456.call(this,x,y);
default:
return min__184457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__184457.cljs$lang$applyTo;
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
var rem__184461 = (n % d);

return cljs.core.fix.call(null,((n - rem__184461) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__184462 = cljs.core.quot.call(null,n,d);

return (n - (d * q__184462));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__184463 = (function (){
return Math.random.call(null);
});
var rand__184464 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__184463.call(this);
case  1 :
return rand__184464.call(this,n);
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
var _EQ__EQ___184466 = (function (x){
return true;
});
var _EQ__EQ___184467 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___184468 = (function() { 
var G__184470__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__184471 = y;
var G__184472 = cljs.core.first.call(null,more);
var G__184473 = cljs.core.next.call(null,more);
x = G__184471;
y = G__184472;
more = G__184473;
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
var G__184470 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184470__delegate.call(this, x, y, more);
};
G__184470.cljs$lang$maxFixedArity = 2;
G__184470.cljs$lang$applyTo = (function (arglist__184474){
var x = cljs.core.first(arglist__184474);
var y = cljs.core.first(cljs.core.next(arglist__184474));
var more = cljs.core.rest(cljs.core.next(arglist__184474));
return G__184470__delegate.call(this, x, y, more);
});
return G__184470;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___184466.call(this,x);
case  2 :
return _EQ__EQ___184467.call(this,x,y);
default:
return _EQ__EQ___184468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___184468.cljs$lang$applyTo;
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
var n__184475 = n;
var xs__184476 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____184477 = xs__184476;

if(cljs.core.truth_(and__3546__auto____184477))
{return (n__184475 > 0);
} else
{return and__3546__auto____184477;
}
})()))
{{
var G__184478 = (n__184475 - 1);
var G__184479 = cljs.core.next.call(null,xs__184476);
n__184475 = G__184478;
xs__184476 = G__184479;
continue;
}
} else
{return xs__184476;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__184484 = null;
var G__184484__184485 = (function (coll,n){
var temp__3695__auto____184480 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____184480))
{var xs__184481 = temp__3695__auto____184480;

return cljs.core.first.call(null,xs__184481);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__184484__184486 = (function (coll,n,not_found){
var temp__3695__auto____184482 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____184482))
{var xs__184483 = temp__3695__auto____184482;

return cljs.core.first.call(null,xs__184483);
} else
{return not_found;
}
});
G__184484 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__184484__184485.call(this,coll,n);
case  3 :
return G__184484__184486.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184484;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___184488 = (function (){
return "";
});
var str_STAR___184489 = (function (x){
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
var str_STAR___184490 = (function() { 
var G__184492__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__184493 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__184494 = cljs.core.next.call(null,more);
sb = G__184493;
more = G__184494;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__184492 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__184492__delegate.call(this, x, ys);
};
G__184492.cljs$lang$maxFixedArity = 1;
G__184492.cljs$lang$applyTo = (function (arglist__184495){
var x = cljs.core.first(arglist__184495);
var ys = cljs.core.rest(arglist__184495);
return G__184492__delegate.call(this, x, ys);
});
return G__184492;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___184488.call(this);
case  1 :
return str_STAR___184489.call(this,x);
default:
return str_STAR___184490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___184490.cljs$lang$applyTo;
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
var str__184496 = (function (){
return "";
});
var str__184497 = (function (x){
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
var str__184498 = (function() { 
var G__184500__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__184501 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__184502 = cljs.core.next.call(null,more);
sb = G__184501;
more = G__184502;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__184500 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__184500__delegate.call(this, x, ys);
};
G__184500.cljs$lang$maxFixedArity = 1;
G__184500.cljs$lang$applyTo = (function (arglist__184503){
var x = cljs.core.first(arglist__184503);
var ys = cljs.core.rest(arglist__184503);
return G__184500__delegate.call(this, x, ys);
});
return G__184500;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__184496.call(this);
case  1 :
return str__184497.call(this,x);
default:
return str__184498.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__184498.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__184504 = (function (s,start){
return s.substring(start);
});
var subs__184505 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__184504.call(this,s,start);
case  3 :
return subs__184505.call(this,s,start,end);
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
var symbol__184507 = (function (name){
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
var symbol__184508 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__184507.call(this,ns);
case  2 :
return symbol__184508.call(this,ns,name);
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
var keyword__184510 = (function (name){
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
var keyword__184511 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__184510.call(this,ns);
case  2 :
return keyword__184511.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__184513 = cljs.core.seq.call(null,x);
var ys__184514 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__184513 === null)))
{return (ys__184514 === null);
} else
{if(cljs.core.truth_((ys__184514 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__184513),cljs.core.first.call(null,ys__184514))))
{{
var G__184515 = cljs.core.next.call(null,xs__184513);
var G__184516 = cljs.core.next.call(null,ys__184514);
xs__184513 = G__184515;
ys__184514 = G__184516;
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
return cljs.core.reduce.call(null,(function (p1__184517_SHARP_,p2__184518_SHARP_){
return cljs.core.hash_combine.call(null,p1__184517_SHARP_,cljs.core.hash.call(null,p2__184518_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__184519__184520 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__184519__184520))
{var G__184522__184524 = cljs.core.first.call(null,G__184519__184520);
var vec__184523__184525 = G__184522__184524;
var key_name__184526 = cljs.core.nth.call(null,vec__184523__184525,0,null);
var f__184527 = cljs.core.nth.call(null,vec__184523__184525,1,null);
var G__184519__184528 = G__184519__184520;

var G__184522__184529 = G__184522__184524;
var G__184519__184530 = G__184519__184528;

while(true){
var vec__184531__184532 = G__184522__184529;
var key_name__184533 = cljs.core.nth.call(null,vec__184531__184532,0,null);
var f__184534 = cljs.core.nth.call(null,vec__184531__184532,1,null);
var G__184519__184535 = G__184519__184530;

var str_name__184536 = cljs.core.name.call(null,key_name__184533);

obj[str_name__184536] = f__184534;
var temp__3698__auto____184537 = cljs.core.next.call(null,G__184519__184535);

if(cljs.core.truth_(temp__3698__auto____184537))
{var G__184519__184538 = temp__3698__auto____184537;

{
var G__184539 = cljs.core.first.call(null,G__184519__184538);
var G__184540 = G__184519__184538;
G__184522__184529 = G__184539;
G__184519__184530 = G__184540;
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
var this__184541 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__184542 = this;
return (new cljs.core.List(this__184542.meta,o,coll,(this__184542.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__184543 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__184544 = this;
return this__184544.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__184545 = this;
return this__184545.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__184546 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__184547 = this;
return this__184547.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__184548 = this;
return this__184548.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__184549 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__184550 = this;
return (new cljs.core.List(meta,this__184550.first,this__184550.rest,this__184550.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__184551 = this;
return this__184551.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__184552 = this;
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
var this__184553 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__184554 = this;
return (new cljs.core.List(this__184554.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__184555 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__184556 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__184557 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__184558 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__184559 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__184560 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__184561 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__184562 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__184563 = this;
return this__184563.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__184564 = this;
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
list.cljs$lang$applyTo = (function (arglist__184565){
var items = cljs.core.seq( arglist__184565 );;
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
var this__184566 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__184567 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__184568 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__184569 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__184569.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__184570 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__184571 = this;
return this__184571.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__184572 = this;
if(cljs.core.truth_((this__184572.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__184572.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__184573 = this;
return this__184573.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__184574 = this;
return (new cljs.core.Cons(meta,this__184574.first,this__184574.rest));
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
var G__184575 = null;
var G__184575__184576 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__184575__184577 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__184575 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__184575__184576.call(this,string,f);
case  3 :
return G__184575__184577.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184575;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__184579 = null;
var G__184579__184580 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__184579__184581 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__184579 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__184579__184580.call(this,string,k);
case  3 :
return G__184579__184581.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184579;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__184583 = null;
var G__184583__184584 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__184583__184585 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__184583 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__184583__184584.call(this,string,n);
case  3 :
return G__184583__184585.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184583;
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
var G__184593 = null;
var G__184593__184594 = (function (tsym184587,coll){
var tsym184587__184589 = this;

var this$__184590 = tsym184587__184589;

return cljs.core.get.call(null,coll,this$__184590.toString());
});
var G__184593__184595 = (function (tsym184588,coll,not_found){
var tsym184588__184591 = this;

var this$__184592 = tsym184588__184591;

return cljs.core.get.call(null,coll,this$__184592.toString(),not_found);
});
G__184593 = function(tsym184588,coll,not_found){
switch(arguments.length){
case  2 :
return G__184593__184594.call(this,tsym184588,coll);
case  3 :
return G__184593__184595.call(this,tsym184588,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184593;
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
var x__184597 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__184597;
} else
{lazy_seq.x = x__184597.call(null);
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
var this__184598 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__184599 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__184600 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__184601 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__184601.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__184602 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__184603 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__184604 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__184605 = this;
return this__184605.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__184606 = this;
return (new cljs.core.LazySeq(meta,this__184606.realized,this__184606.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__184607 = [];

var s__184608 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__184608)))
{ary__184607.push(cljs.core.first.call(null,s__184608));
{
var G__184609 = cljs.core.next.call(null,s__184608);
s__184608 = G__184609;
continue;
}
} else
{return ary__184607;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__184610 = s;
var i__184611 = n;
var sum__184612 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____184613 = (i__184611 > 0);

if(cljs.core.truth_(and__3546__auto____184613))
{return cljs.core.seq.call(null,s__184610);
} else
{return and__3546__auto____184613;
}
})()))
{{
var G__184614 = cljs.core.next.call(null,s__184610);
var G__184615 = (i__184611 - 1);
var G__184616 = (sum__184612 + 1);
s__184610 = G__184614;
i__184611 = G__184615;
sum__184612 = G__184616;
continue;
}
} else
{return sum__184612;
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
var concat__184620 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__184621 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__184622 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__184617 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__184617))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__184617),concat.call(null,cljs.core.rest.call(null,s__184617),y));
} else
{return y;
}
})));
});
var concat__184623 = (function() { 
var G__184625__delegate = function (x,y,zs){
var cat__184619 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__184618 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__184618))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__184618),cat.call(null,cljs.core.rest.call(null,xys__184618),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__184619.call(null,concat.call(null,x,y),zs);
};
var G__184625 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184625__delegate.call(this, x, y, zs);
};
G__184625.cljs$lang$maxFixedArity = 2;
G__184625.cljs$lang$applyTo = (function (arglist__184626){
var x = cljs.core.first(arglist__184626);
var y = cljs.core.first(cljs.core.next(arglist__184626));
var zs = cljs.core.rest(cljs.core.next(arglist__184626));
return G__184625__delegate.call(this, x, y, zs);
});
return G__184625;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__184620.call(this);
case  1 :
return concat__184621.call(this,x);
case  2 :
return concat__184622.call(this,x,y);
default:
return concat__184623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__184623.cljs$lang$applyTo;
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
var list_STAR___184627 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___184628 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___184629 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___184630 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___184631 = (function() { 
var G__184633__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__184633 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__184633__delegate.call(this, a, b, c, d, more);
};
G__184633.cljs$lang$maxFixedArity = 4;
G__184633.cljs$lang$applyTo = (function (arglist__184634){
var a = cljs.core.first(arglist__184634);
var b = cljs.core.first(cljs.core.next(arglist__184634));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184634)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__184634))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__184634))));
return G__184633__delegate.call(this, a, b, c, d, more);
});
return G__184633;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___184627.call(this,a);
case  2 :
return list_STAR___184628.call(this,a,b);
case  3 :
return list_STAR___184629.call(this,a,b,c);
case  4 :
return list_STAR___184630.call(this,a,b,c,d);
default:
return list_STAR___184631.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___184631.cljs$lang$applyTo;
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
var apply__184644 = (function (f,args){
var fixed_arity__184635 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__184635 + 1)) <= fixed_arity__184635)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__184645 = (function (f,x,args){
var arglist__184636 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__184637 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__184636,fixed_arity__184637) <= fixed_arity__184637)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__184636));
} else
{return f.cljs$lang$applyTo(arglist__184636);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__184636));
}
});
var apply__184646 = (function (f,x,y,args){
var arglist__184638 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__184639 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__184638,fixed_arity__184639) <= fixed_arity__184639)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__184638));
} else
{return f.cljs$lang$applyTo(arglist__184638);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__184638));
}
});
var apply__184647 = (function (f,x,y,z,args){
var arglist__184640 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__184641 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__184640,fixed_arity__184641) <= fixed_arity__184641)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__184640));
} else
{return f.cljs$lang$applyTo(arglist__184640);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__184640));
}
});
var apply__184648 = (function() { 
var G__184650__delegate = function (f,a,b,c,d,args){
var arglist__184642 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__184643 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__184642,fixed_arity__184643) <= fixed_arity__184643)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__184642));
} else
{return f.cljs$lang$applyTo(arglist__184642);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__184642));
}
};
var G__184650 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__184650__delegate.call(this, f, a, b, c, d, args);
};
G__184650.cljs$lang$maxFixedArity = 5;
G__184650.cljs$lang$applyTo = (function (arglist__184651){
var f = cljs.core.first(arglist__184651);
var a = cljs.core.first(cljs.core.next(arglist__184651));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184651)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__184651))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__184651)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__184651)))));
return G__184650__delegate.call(this, f, a, b, c, d, args);
});
return G__184650;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__184644.call(this,f,a);
case  3 :
return apply__184645.call(this,f,a,b);
case  4 :
return apply__184646.call(this,f,a,b,c);
case  5 :
return apply__184647.call(this,f,a,b,c,d);
default:
return apply__184648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__184648.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__184652){
var obj = cljs.core.first(arglist__184652);
var f = cljs.core.first(cljs.core.next(arglist__184652));
var args = cljs.core.rest(cljs.core.next(arglist__184652));
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
var not_EQ___184653 = (function (x){
return false;
});
var not_EQ___184654 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___184655 = (function() { 
var G__184657__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__184657 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184657__delegate.call(this, x, y, more);
};
G__184657.cljs$lang$maxFixedArity = 2;
G__184657.cljs$lang$applyTo = (function (arglist__184658){
var x = cljs.core.first(arglist__184658);
var y = cljs.core.first(cljs.core.next(arglist__184658));
var more = cljs.core.rest(cljs.core.next(arglist__184658));
return G__184657__delegate.call(this, x, y, more);
});
return G__184657;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___184653.call(this,x);
case  2 :
return not_EQ___184654.call(this,x,y);
default:
return not_EQ___184655.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___184655.cljs$lang$applyTo;
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
var G__184659 = pred;
var G__184660 = cljs.core.next.call(null,coll);
pred = G__184659;
coll = G__184660;
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
{var or__3548__auto____184661 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____184661))
{return or__3548__auto____184661;
} else
{{
var G__184662 = pred;
var G__184663 = cljs.core.next.call(null,coll);
pred = G__184662;
coll = G__184663;
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
var G__184664 = null;
var G__184664__184665 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__184664__184666 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__184664__184667 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__184664__184668 = (function() { 
var G__184670__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__184670 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184670__delegate.call(this, x, y, zs);
};
G__184670.cljs$lang$maxFixedArity = 2;
G__184670.cljs$lang$applyTo = (function (arglist__184671){
var x = cljs.core.first(arglist__184671);
var y = cljs.core.first(cljs.core.next(arglist__184671));
var zs = cljs.core.rest(cljs.core.next(arglist__184671));
return G__184670__delegate.call(this, x, y, zs);
});
return G__184670;
})()
;
G__184664 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__184664__184665.call(this);
case  1 :
return G__184664__184666.call(this,x);
case  2 :
return G__184664__184667.call(this,x,y);
default:
return G__184664__184668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__184664.cljs$lang$maxFixedArity = 2;
G__184664.cljs$lang$applyTo = G__184664__184668.cljs$lang$applyTo;
return G__184664;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__184672__delegate = function (args){
return x;
};
var G__184672 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__184672__delegate.call(this, args);
};
G__184672.cljs$lang$maxFixedArity = 0;
G__184672.cljs$lang$applyTo = (function (arglist__184673){
var args = cljs.core.seq( arglist__184673 );;
return G__184672__delegate.call(this, args);
});
return G__184672;
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
var comp__184677 = (function (){
return cljs.core.identity;
});
var comp__184678 = (function (f){
return f;
});
var comp__184679 = (function (f,g){
return (function() {
var G__184683 = null;
var G__184683__184684 = (function (){
return f.call(null,g.call(null));
});
var G__184683__184685 = (function (x){
return f.call(null,g.call(null,x));
});
var G__184683__184686 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__184683__184687 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__184683__184688 = (function() { 
var G__184690__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__184690 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184690__delegate.call(this, x, y, z, args);
};
G__184690.cljs$lang$maxFixedArity = 3;
G__184690.cljs$lang$applyTo = (function (arglist__184691){
var x = cljs.core.first(arglist__184691);
var y = cljs.core.first(cljs.core.next(arglist__184691));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184691)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184691)));
return G__184690__delegate.call(this, x, y, z, args);
});
return G__184690;
})()
;
G__184683 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__184683__184684.call(this);
case  1 :
return G__184683__184685.call(this,x);
case  2 :
return G__184683__184686.call(this,x,y);
case  3 :
return G__184683__184687.call(this,x,y,z);
default:
return G__184683__184688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__184683.cljs$lang$maxFixedArity = 3;
G__184683.cljs$lang$applyTo = G__184683__184688.cljs$lang$applyTo;
return G__184683;
})()
});
var comp__184680 = (function (f,g,h){
return (function() {
var G__184692 = null;
var G__184692__184693 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__184692__184694 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__184692__184695 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__184692__184696 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__184692__184697 = (function() { 
var G__184699__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__184699 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184699__delegate.call(this, x, y, z, args);
};
G__184699.cljs$lang$maxFixedArity = 3;
G__184699.cljs$lang$applyTo = (function (arglist__184700){
var x = cljs.core.first(arglist__184700);
var y = cljs.core.first(cljs.core.next(arglist__184700));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184700)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184700)));
return G__184699__delegate.call(this, x, y, z, args);
});
return G__184699;
})()
;
G__184692 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__184692__184693.call(this);
case  1 :
return G__184692__184694.call(this,x);
case  2 :
return G__184692__184695.call(this,x,y);
case  3 :
return G__184692__184696.call(this,x,y,z);
default:
return G__184692__184697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__184692.cljs$lang$maxFixedArity = 3;
G__184692.cljs$lang$applyTo = G__184692__184697.cljs$lang$applyTo;
return G__184692;
})()
});
var comp__184681 = (function() { 
var G__184701__delegate = function (f1,f2,f3,fs){
var fs__184674 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__184702__delegate = function (args){
var ret__184675 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__184674),args);
var fs__184676 = cljs.core.next.call(null,fs__184674);

while(true){
if(cljs.core.truth_(fs__184676))
{{
var G__184703 = cljs.core.first.call(null,fs__184676).call(null,ret__184675);
var G__184704 = cljs.core.next.call(null,fs__184676);
ret__184675 = G__184703;
fs__184676 = G__184704;
continue;
}
} else
{return ret__184675;
}
break;
}
};
var G__184702 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__184702__delegate.call(this, args);
};
G__184702.cljs$lang$maxFixedArity = 0;
G__184702.cljs$lang$applyTo = (function (arglist__184705){
var args = cljs.core.seq( arglist__184705 );;
return G__184702__delegate.call(this, args);
});
return G__184702;
})()
;
};
var G__184701 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184701__delegate.call(this, f1, f2, f3, fs);
};
G__184701.cljs$lang$maxFixedArity = 3;
G__184701.cljs$lang$applyTo = (function (arglist__184706){
var f1 = cljs.core.first(arglist__184706);
var f2 = cljs.core.first(cljs.core.next(arglist__184706));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184706)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184706)));
return G__184701__delegate.call(this, f1, f2, f3, fs);
});
return G__184701;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__184677.call(this);
case  1 :
return comp__184678.call(this,f1);
case  2 :
return comp__184679.call(this,f1,f2);
case  3 :
return comp__184680.call(this,f1,f2,f3);
default:
return comp__184681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__184681.cljs$lang$applyTo;
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
var partial__184707 = (function (f,arg1){
return (function() { 
var G__184712__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__184712 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__184712__delegate.call(this, args);
};
G__184712.cljs$lang$maxFixedArity = 0;
G__184712.cljs$lang$applyTo = (function (arglist__184713){
var args = cljs.core.seq( arglist__184713 );;
return G__184712__delegate.call(this, args);
});
return G__184712;
})()
;
});
var partial__184708 = (function (f,arg1,arg2){
return (function() { 
var G__184714__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__184714 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__184714__delegate.call(this, args);
};
G__184714.cljs$lang$maxFixedArity = 0;
G__184714.cljs$lang$applyTo = (function (arglist__184715){
var args = cljs.core.seq( arglist__184715 );;
return G__184714__delegate.call(this, args);
});
return G__184714;
})()
;
});
var partial__184709 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__184716__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__184716 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__184716__delegate.call(this, args);
};
G__184716.cljs$lang$maxFixedArity = 0;
G__184716.cljs$lang$applyTo = (function (arglist__184717){
var args = cljs.core.seq( arglist__184717 );;
return G__184716__delegate.call(this, args);
});
return G__184716;
})()
;
});
var partial__184710 = (function() { 
var G__184718__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__184719__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__184719 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__184719__delegate.call(this, args);
};
G__184719.cljs$lang$maxFixedArity = 0;
G__184719.cljs$lang$applyTo = (function (arglist__184720){
var args = cljs.core.seq( arglist__184720 );;
return G__184719__delegate.call(this, args);
});
return G__184719;
})()
;
};
var G__184718 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__184718__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__184718.cljs$lang$maxFixedArity = 4;
G__184718.cljs$lang$applyTo = (function (arglist__184721){
var f = cljs.core.first(arglist__184721);
var arg1 = cljs.core.first(cljs.core.next(arglist__184721));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184721)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__184721))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__184721))));
return G__184718__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__184718;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__184707.call(this,f,arg1);
case  3 :
return partial__184708.call(this,f,arg1,arg2);
case  4 :
return partial__184709.call(this,f,arg1,arg2,arg3);
default:
return partial__184710.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__184710.cljs$lang$applyTo;
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
var fnil__184722 = (function (f,x){
return (function() {
var G__184726 = null;
var G__184726__184727 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__184726__184728 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__184726__184729 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__184726__184730 = (function() { 
var G__184732__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__184732 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184732__delegate.call(this, a, b, c, ds);
};
G__184732.cljs$lang$maxFixedArity = 3;
G__184732.cljs$lang$applyTo = (function (arglist__184733){
var a = cljs.core.first(arglist__184733);
var b = cljs.core.first(cljs.core.next(arglist__184733));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184733)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184733)));
return G__184732__delegate.call(this, a, b, c, ds);
});
return G__184732;
})()
;
G__184726 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__184726__184727.call(this,a);
case  2 :
return G__184726__184728.call(this,a,b);
case  3 :
return G__184726__184729.call(this,a,b,c);
default:
return G__184726__184730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__184726.cljs$lang$maxFixedArity = 3;
G__184726.cljs$lang$applyTo = G__184726__184730.cljs$lang$applyTo;
return G__184726;
})()
});
var fnil__184723 = (function (f,x,y){
return (function() {
var G__184734 = null;
var G__184734__184735 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__184734__184736 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__184734__184737 = (function() { 
var G__184739__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__184739 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184739__delegate.call(this, a, b, c, ds);
};
G__184739.cljs$lang$maxFixedArity = 3;
G__184739.cljs$lang$applyTo = (function (arglist__184740){
var a = cljs.core.first(arglist__184740);
var b = cljs.core.first(cljs.core.next(arglist__184740));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184740)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184740)));
return G__184739__delegate.call(this, a, b, c, ds);
});
return G__184739;
})()
;
G__184734 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__184734__184735.call(this,a,b);
case  3 :
return G__184734__184736.call(this,a,b,c);
default:
return G__184734__184737.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__184734.cljs$lang$maxFixedArity = 3;
G__184734.cljs$lang$applyTo = G__184734__184737.cljs$lang$applyTo;
return G__184734;
})()
});
var fnil__184724 = (function (f,x,y,z){
return (function() {
var G__184741 = null;
var G__184741__184742 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__184741__184743 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__184741__184744 = (function() { 
var G__184746__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__184746 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184746__delegate.call(this, a, b, c, ds);
};
G__184746.cljs$lang$maxFixedArity = 3;
G__184746.cljs$lang$applyTo = (function (arglist__184747){
var a = cljs.core.first(arglist__184747);
var b = cljs.core.first(cljs.core.next(arglist__184747));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184747)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184747)));
return G__184746__delegate.call(this, a, b, c, ds);
});
return G__184746;
})()
;
G__184741 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__184741__184742.call(this,a,b);
case  3 :
return G__184741__184743.call(this,a,b,c);
default:
return G__184741__184744.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__184741.cljs$lang$maxFixedArity = 3;
G__184741.cljs$lang$applyTo = G__184741__184744.cljs$lang$applyTo;
return G__184741;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__184722.call(this,f,x);
case  3 :
return fnil__184723.call(this,f,x,y);
case  4 :
return fnil__184724.call(this,f,x,y,z);
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
var mapi__184750 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____184748 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184748))
{var s__184749 = temp__3698__auto____184748;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__184749)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__184749)));
} else
{return null;
}
})));
});

return mapi__184750.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____184751 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184751))
{var s__184752 = temp__3698__auto____184751;

var x__184753 = f.call(null,cljs.core.first.call(null,s__184752));

if(cljs.core.truth_((x__184753 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__184752));
} else
{return cljs.core.cons.call(null,x__184753,keep.call(null,f,cljs.core.rest.call(null,s__184752)));
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
var keepi__184763 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____184760 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184760))
{var s__184761 = temp__3698__auto____184760;

var x__184762 = f.call(null,idx,cljs.core.first.call(null,s__184761));

if(cljs.core.truth_((x__184762 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__184761));
} else
{return cljs.core.cons.call(null,x__184762,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__184761)));
}
} else
{return null;
}
})));
});

return keepi__184763.call(null,0,coll);
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
var every_pred__184808 = (function (p){
return (function() {
var ep1 = null;
var ep1__184813 = (function (){
return true;
});
var ep1__184814 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__184815 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____184770 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____184770))
{return p.call(null,y);
} else
{return and__3546__auto____184770;
}
})());
});
var ep1__184816 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____184771 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____184771))
{var and__3546__auto____184772 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____184772))
{return p.call(null,z);
} else
{return and__3546__auto____184772;
}
} else
{return and__3546__auto____184771;
}
})());
});
var ep1__184817 = (function() { 
var G__184819__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____184773 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____184773))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____184773;
}
})());
};
var G__184819 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184819__delegate.call(this, x, y, z, args);
};
G__184819.cljs$lang$maxFixedArity = 3;
G__184819.cljs$lang$applyTo = (function (arglist__184820){
var x = cljs.core.first(arglist__184820);
var y = cljs.core.first(cljs.core.next(arglist__184820));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184820)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184820)));
return G__184819__delegate.call(this, x, y, z, args);
});
return G__184819;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__184813.call(this);
case  1 :
return ep1__184814.call(this,x);
case  2 :
return ep1__184815.call(this,x,y);
case  3 :
return ep1__184816.call(this,x,y,z);
default:
return ep1__184817.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__184817.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__184809 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__184821 = (function (){
return true;
});
var ep2__184822 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____184774 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____184774))
{return p2.call(null,x);
} else
{return and__3546__auto____184774;
}
})());
});
var ep2__184823 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____184775 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____184775))
{var and__3546__auto____184776 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____184776))
{var and__3546__auto____184777 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____184777))
{return p2.call(null,y);
} else
{return and__3546__auto____184777;
}
} else
{return and__3546__auto____184776;
}
} else
{return and__3546__auto____184775;
}
})());
});
var ep2__184824 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____184778 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____184778))
{var and__3546__auto____184779 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____184779))
{var and__3546__auto____184780 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____184780))
{var and__3546__auto____184781 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____184781))
{var and__3546__auto____184782 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____184782))
{return p2.call(null,z);
} else
{return and__3546__auto____184782;
}
} else
{return and__3546__auto____184781;
}
} else
{return and__3546__auto____184780;
}
} else
{return and__3546__auto____184779;
}
} else
{return and__3546__auto____184778;
}
})());
});
var ep2__184825 = (function() { 
var G__184827__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____184783 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____184783))
{return cljs.core.every_QMARK_.call(null,(function (p1__184754_SHARP_){
var and__3546__auto____184784 = p1.call(null,p1__184754_SHARP_);

if(cljs.core.truth_(and__3546__auto____184784))
{return p2.call(null,p1__184754_SHARP_);
} else
{return and__3546__auto____184784;
}
}),args);
} else
{return and__3546__auto____184783;
}
})());
};
var G__184827 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184827__delegate.call(this, x, y, z, args);
};
G__184827.cljs$lang$maxFixedArity = 3;
G__184827.cljs$lang$applyTo = (function (arglist__184828){
var x = cljs.core.first(arglist__184828);
var y = cljs.core.first(cljs.core.next(arglist__184828));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184828)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184828)));
return G__184827__delegate.call(this, x, y, z, args);
});
return G__184827;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__184821.call(this);
case  1 :
return ep2__184822.call(this,x);
case  2 :
return ep2__184823.call(this,x,y);
case  3 :
return ep2__184824.call(this,x,y,z);
default:
return ep2__184825.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__184825.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__184810 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__184829 = (function (){
return true;
});
var ep3__184830 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____184785 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____184785))
{var and__3546__auto____184786 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____184786))
{return p3.call(null,x);
} else
{return and__3546__auto____184786;
}
} else
{return and__3546__auto____184785;
}
})());
});
var ep3__184831 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____184787 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____184787))
{var and__3546__auto____184788 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____184788))
{var and__3546__auto____184789 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____184789))
{var and__3546__auto____184790 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____184790))
{var and__3546__auto____184791 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____184791))
{return p3.call(null,y);
} else
{return and__3546__auto____184791;
}
} else
{return and__3546__auto____184790;
}
} else
{return and__3546__auto____184789;
}
} else
{return and__3546__auto____184788;
}
} else
{return and__3546__auto____184787;
}
})());
});
var ep3__184832 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____184792 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____184792))
{var and__3546__auto____184793 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____184793))
{var and__3546__auto____184794 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____184794))
{var and__3546__auto____184795 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____184795))
{var and__3546__auto____184796 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____184796))
{var and__3546__auto____184797 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____184797))
{var and__3546__auto____184798 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____184798))
{var and__3546__auto____184799 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____184799))
{return p3.call(null,z);
} else
{return and__3546__auto____184799;
}
} else
{return and__3546__auto____184798;
}
} else
{return and__3546__auto____184797;
}
} else
{return and__3546__auto____184796;
}
} else
{return and__3546__auto____184795;
}
} else
{return and__3546__auto____184794;
}
} else
{return and__3546__auto____184793;
}
} else
{return and__3546__auto____184792;
}
})());
});
var ep3__184833 = (function() { 
var G__184835__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____184800 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____184800))
{return cljs.core.every_QMARK_.call(null,(function (p1__184755_SHARP_){
var and__3546__auto____184801 = p1.call(null,p1__184755_SHARP_);

if(cljs.core.truth_(and__3546__auto____184801))
{var and__3546__auto____184802 = p2.call(null,p1__184755_SHARP_);

if(cljs.core.truth_(and__3546__auto____184802))
{return p3.call(null,p1__184755_SHARP_);
} else
{return and__3546__auto____184802;
}
} else
{return and__3546__auto____184801;
}
}),args);
} else
{return and__3546__auto____184800;
}
})());
};
var G__184835 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184835__delegate.call(this, x, y, z, args);
};
G__184835.cljs$lang$maxFixedArity = 3;
G__184835.cljs$lang$applyTo = (function (arglist__184836){
var x = cljs.core.first(arglist__184836);
var y = cljs.core.first(cljs.core.next(arglist__184836));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184836)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184836)));
return G__184835__delegate.call(this, x, y, z, args);
});
return G__184835;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__184829.call(this);
case  1 :
return ep3__184830.call(this,x);
case  2 :
return ep3__184831.call(this,x,y);
case  3 :
return ep3__184832.call(this,x,y,z);
default:
return ep3__184833.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__184833.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__184811 = (function() { 
var G__184837__delegate = function (p1,p2,p3,ps){
var ps__184803 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__184838 = (function (){
return true;
});
var epn__184839 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__184756_SHARP_){
return p1__184756_SHARP_.call(null,x);
}),ps__184803);
});
var epn__184840 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__184757_SHARP_){
var and__3546__auto____184804 = p1__184757_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____184804))
{return p1__184757_SHARP_.call(null,y);
} else
{return and__3546__auto____184804;
}
}),ps__184803);
});
var epn__184841 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__184758_SHARP_){
var and__3546__auto____184805 = p1__184758_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____184805))
{var and__3546__auto____184806 = p1__184758_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____184806))
{return p1__184758_SHARP_.call(null,z);
} else
{return and__3546__auto____184806;
}
} else
{return and__3546__auto____184805;
}
}),ps__184803);
});
var epn__184842 = (function() { 
var G__184844__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____184807 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____184807))
{return cljs.core.every_QMARK_.call(null,(function (p1__184759_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__184759_SHARP_,args);
}),ps__184803);
} else
{return and__3546__auto____184807;
}
})());
};
var G__184844 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184844__delegate.call(this, x, y, z, args);
};
G__184844.cljs$lang$maxFixedArity = 3;
G__184844.cljs$lang$applyTo = (function (arglist__184845){
var x = cljs.core.first(arglist__184845);
var y = cljs.core.first(cljs.core.next(arglist__184845));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184845)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184845)));
return G__184844__delegate.call(this, x, y, z, args);
});
return G__184844;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__184838.call(this);
case  1 :
return epn__184839.call(this,x);
case  2 :
return epn__184840.call(this,x,y);
case  3 :
return epn__184841.call(this,x,y,z);
default:
return epn__184842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__184842.cljs$lang$applyTo;
return epn;
})()
};
var G__184837 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184837__delegate.call(this, p1, p2, p3, ps);
};
G__184837.cljs$lang$maxFixedArity = 3;
G__184837.cljs$lang$applyTo = (function (arglist__184846){
var p1 = cljs.core.first(arglist__184846);
var p2 = cljs.core.first(cljs.core.next(arglist__184846));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184846)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184846)));
return G__184837__delegate.call(this, p1, p2, p3, ps);
});
return G__184837;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__184808.call(this,p1);
case  2 :
return every_pred__184809.call(this,p1,p2);
case  3 :
return every_pred__184810.call(this,p1,p2,p3);
default:
return every_pred__184811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__184811.cljs$lang$applyTo;
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
var some_fn__184886 = (function (p){
return (function() {
var sp1 = null;
var sp1__184891 = (function (){
return null;
});
var sp1__184892 = (function (x){
return p.call(null,x);
});
var sp1__184893 = (function (x,y){
var or__3548__auto____184848 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____184848))
{return or__3548__auto____184848;
} else
{return p.call(null,y);
}
});
var sp1__184894 = (function (x,y,z){
var or__3548__auto____184849 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____184849))
{return or__3548__auto____184849;
} else
{var or__3548__auto____184850 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____184850))
{return or__3548__auto____184850;
} else
{return p.call(null,z);
}
}
});
var sp1__184895 = (function() { 
var G__184897__delegate = function (x,y,z,args){
var or__3548__auto____184851 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____184851))
{return or__3548__auto____184851;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__184897 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184897__delegate.call(this, x, y, z, args);
};
G__184897.cljs$lang$maxFixedArity = 3;
G__184897.cljs$lang$applyTo = (function (arglist__184898){
var x = cljs.core.first(arglist__184898);
var y = cljs.core.first(cljs.core.next(arglist__184898));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184898)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184898)));
return G__184897__delegate.call(this, x, y, z, args);
});
return G__184897;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__184891.call(this);
case  1 :
return sp1__184892.call(this,x);
case  2 :
return sp1__184893.call(this,x,y);
case  3 :
return sp1__184894.call(this,x,y,z);
default:
return sp1__184895.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__184895.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__184887 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__184899 = (function (){
return null;
});
var sp2__184900 = (function (x){
var or__3548__auto____184852 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____184852))
{return or__3548__auto____184852;
} else
{return p2.call(null,x);
}
});
var sp2__184901 = (function (x,y){
var or__3548__auto____184853 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____184853))
{return or__3548__auto____184853;
} else
{var or__3548__auto____184854 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____184854))
{return or__3548__auto____184854;
} else
{var or__3548__auto____184855 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____184855))
{return or__3548__auto____184855;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__184902 = (function (x,y,z){
var or__3548__auto____184856 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____184856))
{return or__3548__auto____184856;
} else
{var or__3548__auto____184857 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____184857))
{return or__3548__auto____184857;
} else
{var or__3548__auto____184858 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____184858))
{return or__3548__auto____184858;
} else
{var or__3548__auto____184859 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____184859))
{return or__3548__auto____184859;
} else
{var or__3548__auto____184860 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____184860))
{return or__3548__auto____184860;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__184903 = (function() { 
var G__184905__delegate = function (x,y,z,args){
var or__3548__auto____184861 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____184861))
{return or__3548__auto____184861;
} else
{return cljs.core.some.call(null,(function (p1__184764_SHARP_){
var or__3548__auto____184862 = p1.call(null,p1__184764_SHARP_);

if(cljs.core.truth_(or__3548__auto____184862))
{return or__3548__auto____184862;
} else
{return p2.call(null,p1__184764_SHARP_);
}
}),args);
}
};
var G__184905 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184905__delegate.call(this, x, y, z, args);
};
G__184905.cljs$lang$maxFixedArity = 3;
G__184905.cljs$lang$applyTo = (function (arglist__184906){
var x = cljs.core.first(arglist__184906);
var y = cljs.core.first(cljs.core.next(arglist__184906));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184906)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184906)));
return G__184905__delegate.call(this, x, y, z, args);
});
return G__184905;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__184899.call(this);
case  1 :
return sp2__184900.call(this,x);
case  2 :
return sp2__184901.call(this,x,y);
case  3 :
return sp2__184902.call(this,x,y,z);
default:
return sp2__184903.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__184903.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__184888 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__184907 = (function (){
return null;
});
var sp3__184908 = (function (x){
var or__3548__auto____184863 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____184863))
{return or__3548__auto____184863;
} else
{var or__3548__auto____184864 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____184864))
{return or__3548__auto____184864;
} else
{return p3.call(null,x);
}
}
});
var sp3__184909 = (function (x,y){
var or__3548__auto____184865 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____184865))
{return or__3548__auto____184865;
} else
{var or__3548__auto____184866 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____184866))
{return or__3548__auto____184866;
} else
{var or__3548__auto____184867 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____184867))
{return or__3548__auto____184867;
} else
{var or__3548__auto____184868 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____184868))
{return or__3548__auto____184868;
} else
{var or__3548__auto____184869 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____184869))
{return or__3548__auto____184869;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__184910 = (function (x,y,z){
var or__3548__auto____184870 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____184870))
{return or__3548__auto____184870;
} else
{var or__3548__auto____184871 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____184871))
{return or__3548__auto____184871;
} else
{var or__3548__auto____184872 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____184872))
{return or__3548__auto____184872;
} else
{var or__3548__auto____184873 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____184873))
{return or__3548__auto____184873;
} else
{var or__3548__auto____184874 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____184874))
{return or__3548__auto____184874;
} else
{var or__3548__auto____184875 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____184875))
{return or__3548__auto____184875;
} else
{var or__3548__auto____184876 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____184876))
{return or__3548__auto____184876;
} else
{var or__3548__auto____184877 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____184877))
{return or__3548__auto____184877;
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
var sp3__184911 = (function() { 
var G__184913__delegate = function (x,y,z,args){
var or__3548__auto____184878 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____184878))
{return or__3548__auto____184878;
} else
{return cljs.core.some.call(null,(function (p1__184765_SHARP_){
var or__3548__auto____184879 = p1.call(null,p1__184765_SHARP_);

if(cljs.core.truth_(or__3548__auto____184879))
{return or__3548__auto____184879;
} else
{var or__3548__auto____184880 = p2.call(null,p1__184765_SHARP_);

if(cljs.core.truth_(or__3548__auto____184880))
{return or__3548__auto____184880;
} else
{return p3.call(null,p1__184765_SHARP_);
}
}
}),args);
}
};
var G__184913 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184913__delegate.call(this, x, y, z, args);
};
G__184913.cljs$lang$maxFixedArity = 3;
G__184913.cljs$lang$applyTo = (function (arglist__184914){
var x = cljs.core.first(arglist__184914);
var y = cljs.core.first(cljs.core.next(arglist__184914));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184914)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184914)));
return G__184913__delegate.call(this, x, y, z, args);
});
return G__184913;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__184907.call(this);
case  1 :
return sp3__184908.call(this,x);
case  2 :
return sp3__184909.call(this,x,y);
case  3 :
return sp3__184910.call(this,x,y,z);
default:
return sp3__184911.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__184911.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__184889 = (function() { 
var G__184915__delegate = function (p1,p2,p3,ps){
var ps__184881 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__184916 = (function (){
return null;
});
var spn__184917 = (function (x){
return cljs.core.some.call(null,(function (p1__184766_SHARP_){
return p1__184766_SHARP_.call(null,x);
}),ps__184881);
});
var spn__184918 = (function (x,y){
return cljs.core.some.call(null,(function (p1__184767_SHARP_){
var or__3548__auto____184882 = p1__184767_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____184882))
{return or__3548__auto____184882;
} else
{return p1__184767_SHARP_.call(null,y);
}
}),ps__184881);
});
var spn__184919 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__184768_SHARP_){
var or__3548__auto____184883 = p1__184768_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____184883))
{return or__3548__auto____184883;
} else
{var or__3548__auto____184884 = p1__184768_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____184884))
{return or__3548__auto____184884;
} else
{return p1__184768_SHARP_.call(null,z);
}
}
}),ps__184881);
});
var spn__184920 = (function() { 
var G__184922__delegate = function (x,y,z,args){
var or__3548__auto____184885 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____184885))
{return or__3548__auto____184885;
} else
{return cljs.core.some.call(null,(function (p1__184769_SHARP_){
return cljs.core.some.call(null,p1__184769_SHARP_,args);
}),ps__184881);
}
};
var G__184922 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184922__delegate.call(this, x, y, z, args);
};
G__184922.cljs$lang$maxFixedArity = 3;
G__184922.cljs$lang$applyTo = (function (arglist__184923){
var x = cljs.core.first(arglist__184923);
var y = cljs.core.first(cljs.core.next(arglist__184923));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184923)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184923)));
return G__184922__delegate.call(this, x, y, z, args);
});
return G__184922;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__184916.call(this);
case  1 :
return spn__184917.call(this,x);
case  2 :
return spn__184918.call(this,x,y);
case  3 :
return spn__184919.call(this,x,y,z);
default:
return spn__184920.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__184920.cljs$lang$applyTo;
return spn;
})()
};
var G__184915 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184915__delegate.call(this, p1, p2, p3, ps);
};
G__184915.cljs$lang$maxFixedArity = 3;
G__184915.cljs$lang$applyTo = (function (arglist__184924){
var p1 = cljs.core.first(arglist__184924);
var p2 = cljs.core.first(cljs.core.next(arglist__184924));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184924)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184924)));
return G__184915__delegate.call(this, p1, p2, p3, ps);
});
return G__184915;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__184886.call(this,p1);
case  2 :
return some_fn__184887.call(this,p1,p2);
case  3 :
return some_fn__184888.call(this,p1,p2,p3);
default:
return some_fn__184889.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__184889.cljs$lang$applyTo;
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
var map__184937 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____184925 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184925))
{var s__184926 = temp__3698__auto____184925;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__184926)),map.call(null,f,cljs.core.rest.call(null,s__184926)));
} else
{return null;
}
})));
});
var map__184938 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__184927 = cljs.core.seq.call(null,c1);
var s2__184928 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____184929 = s1__184927;

if(cljs.core.truth_(and__3546__auto____184929))
{return s2__184928;
} else
{return and__3546__auto____184929;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__184927),cljs.core.first.call(null,s2__184928)),map.call(null,f,cljs.core.rest.call(null,s1__184927),cljs.core.rest.call(null,s2__184928)));
} else
{return null;
}
})));
});
var map__184939 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__184930 = cljs.core.seq.call(null,c1);
var s2__184931 = cljs.core.seq.call(null,c2);
var s3__184932 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____184933 = s1__184930;

if(cljs.core.truth_(and__3546__auto____184933))
{var and__3546__auto____184934 = s2__184931;

if(cljs.core.truth_(and__3546__auto____184934))
{return s3__184932;
} else
{return and__3546__auto____184934;
}
} else
{return and__3546__auto____184933;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__184930),cljs.core.first.call(null,s2__184931),cljs.core.first.call(null,s3__184932)),map.call(null,f,cljs.core.rest.call(null,s1__184930),cljs.core.rest.call(null,s2__184931),cljs.core.rest.call(null,s3__184932)));
} else
{return null;
}
})));
});
var map__184940 = (function() { 
var G__184942__delegate = function (f,c1,c2,c3,colls){
var step__184936 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__184935 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__184935)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__184935),step.call(null,map.call(null,cljs.core.rest,ss__184935)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__184847_SHARP_){
return cljs.core.apply.call(null,f,p1__184847_SHARP_);
}),step__184936.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__184942 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__184942__delegate.call(this, f, c1, c2, c3, colls);
};
G__184942.cljs$lang$maxFixedArity = 4;
G__184942.cljs$lang$applyTo = (function (arglist__184943){
var f = cljs.core.first(arglist__184943);
var c1 = cljs.core.first(cljs.core.next(arglist__184943));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184943)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__184943))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__184943))));
return G__184942__delegate.call(this, f, c1, c2, c3, colls);
});
return G__184942;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__184937.call(this,f,c1);
case  3 :
return map__184938.call(this,f,c1,c2);
case  4 :
return map__184939.call(this,f,c1,c2,c3);
default:
return map__184940.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__184940.cljs$lang$applyTo;
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
{var temp__3698__auto____184944 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184944))
{var s__184945 = temp__3698__auto____184944;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__184945),take.call(null,(n - 1),cljs.core.rest.call(null,s__184945)));
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
var step__184948 = (function (n,coll){
while(true){
var s__184946 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____184947 = (n > 0);

if(cljs.core.truth_(and__3546__auto____184947))
{return s__184946;
} else
{return and__3546__auto____184947;
}
})()))
{{
var G__184949 = (n - 1);
var G__184950 = cljs.core.rest.call(null,s__184946);
n = G__184949;
coll = G__184950;
continue;
}
} else
{return s__184946;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__184948.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__184951 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__184952 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__184951.call(this,n);
case  2 :
return drop_last__184952.call(this,n,s);
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
var s__184954 = cljs.core.seq.call(null,coll);
var lead__184955 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__184955))
{{
var G__184956 = cljs.core.next.call(null,s__184954);
var G__184957 = cljs.core.next.call(null,lead__184955);
s__184954 = G__184956;
lead__184955 = G__184957;
continue;
}
} else
{return s__184954;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__184960 = (function (pred,coll){
while(true){
var s__184958 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____184959 = s__184958;

if(cljs.core.truth_(and__3546__auto____184959))
{return pred.call(null,cljs.core.first.call(null,s__184958));
} else
{return and__3546__auto____184959;
}
})()))
{{
var G__184961 = pred;
var G__184962 = cljs.core.rest.call(null,s__184958);
pred = G__184961;
coll = G__184962;
continue;
}
} else
{return s__184958;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__184960.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____184963 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184963))
{var s__184964 = temp__3698__auto____184963;

return cljs.core.concat.call(null,s__184964,cycle.call(null,s__184964));
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
var repeat__184965 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__184966 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__184965.call(this,n);
case  2 :
return repeat__184966.call(this,n,x);
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
var repeatedly__184968 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__184969 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__184968.call(this,n);
case  2 :
return repeatedly__184969.call(this,n,f);
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
var interleave__184975 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__184971 = cljs.core.seq.call(null,c1);
var s2__184972 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____184973 = s1__184971;

if(cljs.core.truth_(and__3546__auto____184973))
{return s2__184972;
} else
{return and__3546__auto____184973;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__184971),cljs.core.cons.call(null,cljs.core.first.call(null,s2__184972),interleave.call(null,cljs.core.rest.call(null,s1__184971),cljs.core.rest.call(null,s2__184972))));
} else
{return null;
}
})));
});
var interleave__184976 = (function() { 
var G__184978__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__184974 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__184974)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__184974),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__184974)));
} else
{return null;
}
})));
};
var G__184978 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184978__delegate.call(this, c1, c2, colls);
};
G__184978.cljs$lang$maxFixedArity = 2;
G__184978.cljs$lang$applyTo = (function (arglist__184979){
var c1 = cljs.core.first(arglist__184979);
var c2 = cljs.core.first(cljs.core.next(arglist__184979));
var colls = cljs.core.rest(cljs.core.next(arglist__184979));
return G__184978__delegate.call(this, c1, c2, colls);
});
return G__184978;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__184975.call(this,c1,c2);
default:
return interleave__184976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__184976.cljs$lang$applyTo;
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
var cat__184982 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____184980 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____184980))
{var coll__184981 = temp__3695__auto____184980;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__184981),cat.call(null,cljs.core.rest.call(null,coll__184981),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__184982.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__184983 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__184984 = (function() { 
var G__184986__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__184986 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184986__delegate.call(this, f, coll, colls);
};
G__184986.cljs$lang$maxFixedArity = 2;
G__184986.cljs$lang$applyTo = (function (arglist__184987){
var f = cljs.core.first(arglist__184987);
var coll = cljs.core.first(cljs.core.next(arglist__184987));
var colls = cljs.core.rest(cljs.core.next(arglist__184987));
return G__184986__delegate.call(this, f, coll, colls);
});
return G__184986;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__184983.call(this,f,coll);
default:
return mapcat__184984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__184984.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____184988 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184988))
{var s__184989 = temp__3698__auto____184988;

var f__184990 = cljs.core.first.call(null,s__184989);
var r__184991 = cljs.core.rest.call(null,s__184989);

if(cljs.core.truth_(pred.call(null,f__184990)))
{return cljs.core.cons.call(null,f__184990,filter.call(null,pred,r__184991));
} else
{return filter.call(null,pred,r__184991);
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
var walk__184993 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__184993.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__184992_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__184992_SHARP_));
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
var partition__185000 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__185001 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____184994 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184994))
{var s__184995 = temp__3698__auto____184994;

var p__184996 = cljs.core.take.call(null,n,s__184995);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__184996))))
{return cljs.core.cons.call(null,p__184996,partition.call(null,n,step,cljs.core.drop.call(null,step,s__184995)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__185002 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____184997 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184997))
{var s__184998 = temp__3698__auto____184997;

var p__184999 = cljs.core.take.call(null,n,s__184998);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__184999))))
{return cljs.core.cons.call(null,p__184999,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__184998)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__184999,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__185000.call(this,n,step);
case  3 :
return partition__185001.call(this,n,step,pad);
case  4 :
return partition__185002.call(this,n,step,pad,coll);
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
var get_in__185008 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__185009 = (function (m,ks,not_found){
var sentinel__185004 = cljs.core.lookup_sentinel;
var m__185005 = m;
var ks__185006 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__185006))
{var m__185007 = cljs.core.get.call(null,m__185005,cljs.core.first.call(null,ks__185006),sentinel__185004);

if(cljs.core.truth_((sentinel__185004 === m__185007)))
{return not_found;
} else
{{
var G__185011 = sentinel__185004;
var G__185012 = m__185007;
var G__185013 = cljs.core.next.call(null,ks__185006);
sentinel__185004 = G__185011;
m__185005 = G__185012;
ks__185006 = G__185013;
continue;
}
}
} else
{return m__185005;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__185008.call(this,m,ks);
case  3 :
return get_in__185009.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__185014,v){
var vec__185015__185016 = p__185014;
var k__185017 = cljs.core.nth.call(null,vec__185015__185016,0,null);
var ks__185018 = cljs.core.nthnext.call(null,vec__185015__185016,1);

if(cljs.core.truth_(ks__185018))
{return cljs.core.assoc.call(null,m,k__185017,assoc_in.call(null,cljs.core.get.call(null,m,k__185017),ks__185018,v));
} else
{return cljs.core.assoc.call(null,m,k__185017,v);
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
var update_in__delegate = function (m,p__185019,f,args){
var vec__185020__185021 = p__185019;
var k__185022 = cljs.core.nth.call(null,vec__185020__185021,0,null);
var ks__185023 = cljs.core.nthnext.call(null,vec__185020__185021,1);

if(cljs.core.truth_(ks__185023))
{return cljs.core.assoc.call(null,m,k__185022,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__185022),ks__185023,f,args));
} else
{return cljs.core.assoc.call(null,m,k__185022,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__185022),args));
}
};
var update_in = function (m,p__185019,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__185019, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__185024){
var m = cljs.core.first(arglist__185024);
var p__185019 = cljs.core.first(cljs.core.next(arglist__185024));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__185024)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__185024)));
return update_in__delegate.call(this, m, p__185019, f, args);
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
var this__185025 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__185058 = null;
var G__185058__185059 = (function (coll,k){
var this__185026 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__185058__185060 = (function (coll,k,not_found){
var this__185027 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__185058 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__185058__185059.call(this,coll,k);
case  3 :
return G__185058__185060.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185058;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__185028 = this;
var new_array__185029 = cljs.core.aclone.call(null,this__185028.array);

(new_array__185029[k] = v);
return (new cljs.core.Vector(this__185028.meta,new_array__185029));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__185062 = null;
var G__185062__185063 = (function (tsym185030,k){
var this__185032 = this;
var tsym185030__185033 = this;

var coll__185034 = tsym185030__185033;

return cljs.core._lookup.call(null,coll__185034,k);
});
var G__185062__185064 = (function (tsym185031,k,not_found){
var this__185035 = this;
var tsym185031__185036 = this;

var coll__185037 = tsym185031__185036;

return cljs.core._lookup.call(null,coll__185037,k,not_found);
});
G__185062 = function(tsym185031,k,not_found){
switch(arguments.length){
case  2 :
return G__185062__185063.call(this,tsym185031,k);
case  3 :
return G__185062__185064.call(this,tsym185031,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185062;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__185038 = this;
var new_array__185039 = cljs.core.aclone.call(null,this__185038.array);

new_array__185039.push(o);
return (new cljs.core.Vector(this__185038.meta,new_array__185039));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__185066 = null;
var G__185066__185067 = (function (v,f){
var this__185040 = this;
return cljs.core.ci_reduce.call(null,this__185040.array,f);
});
var G__185066__185068 = (function (v,f,start){
var this__185041 = this;
return cljs.core.ci_reduce.call(null,this__185041.array,f,start);
});
G__185066 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__185066__185067.call(this,v,f);
case  3 :
return G__185066__185068.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185066;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__185042 = this;
if(cljs.core.truth_((this__185042.array.length > 0)))
{var vector_seq__185043 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__185042.array.length)))
{return cljs.core.cons.call(null,(this__185042.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__185043.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__185044 = this;
return this__185044.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__185045 = this;
var count__185046 = this__185045.array.length;

if(cljs.core.truth_((count__185046 > 0)))
{return (this__185045.array[(count__185046 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__185047 = this;
if(cljs.core.truth_((this__185047.array.length > 0)))
{var new_array__185048 = cljs.core.aclone.call(null,this__185047.array);

new_array__185048.pop();
return (new cljs.core.Vector(this__185047.meta,new_array__185048));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__185049 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__185050 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__185051 = this;
return (new cljs.core.Vector(meta,this__185051.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__185052 = this;
return this__185052.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__185070 = null;
var G__185070__185071 = (function (coll,n){
var this__185053 = this;
if(cljs.core.truth_((function (){var and__3546__auto____185054 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____185054))
{return (n < this__185053.array.length);
} else
{return and__3546__auto____185054;
}
})()))
{return (this__185053.array[n]);
} else
{return null;
}
});
var G__185070__185072 = (function (coll,n,not_found){
var this__185055 = this;
if(cljs.core.truth_((function (){var and__3546__auto____185056 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____185056))
{return (n < this__185055.array.length);
} else
{return and__3546__auto____185056;
}
})()))
{return (this__185055.array[n]);
} else
{return not_found;
}
});
G__185070 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__185070__185071.call(this,coll,n);
case  3 :
return G__185070__185072.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185070;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__185057 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__185057.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__185074 = pv.cnt;

if(cljs.core.truth_((cnt__185074 < 32)))
{return 0;
} else
{return (((cnt__185074 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__185075 = level;
var ret__185076 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__185075)))
{return ret__185076;
} else
{var embed__185077 = ret__185076;
var r__185078 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___185079 = (r__185078[0] = embed__185077);

{
var G__185080 = (ll__185075 - 5);
var G__185081 = r__185078;
ll__185075 = G__185080;
ret__185076 = G__185081;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__185082 = cljs.core.aclone.call(null,parent);
var subidx__185083 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__185082[subidx__185083] = tailnode);
return ret__185082;
} else
{var temp__3695__auto____185084 = (parent[subidx__185083]);

if(cljs.core.truth_(temp__3695__auto____185084))
{var child__185085 = temp__3695__auto____185084;

var node_to_insert__185086 = push_tail.call(null,pv,(level - 5),child__185085,tailnode);
var ___185087 = (ret__185082[subidx__185083] = node_to_insert__185086);

return ret__185082;
} else
{var node_to_insert__185088 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___185089 = (ret__185082[subidx__185083] = node_to_insert__185088);

return ret__185082;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____185090 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____185090))
{return (i < pv.cnt);
} else
{return and__3546__auto____185090;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__185091 = pv.root;
var level__185092 = pv.shift;

while(true){
if(cljs.core.truth_((level__185092 > 0)))
{{
var G__185093 = (node__185091[((i >> level__185092) & 31)]);
var G__185094 = (level__185092 - 5);
node__185091 = G__185093;
level__185092 = G__185094;
continue;
}
} else
{return node__185091;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__185095 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__185095[(i & 31)] = val);
return ret__185095;
} else
{var subidx__185096 = ((i >> level) & 31);
var ___185097 = (ret__185095[subidx__185096] = do_assoc.call(null,pv,(level - 5),(node[subidx__185096]),i,val));

return ret__185095;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__185098 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__185099 = pop_tail.call(null,pv,(level - 5),(node[subidx__185098]));

if(cljs.core.truth_((function (){var and__3546__auto____185100 = (new_child__185099 === null);

if(cljs.core.truth_(and__3546__auto____185100))
{return (subidx__185098 === 0);
} else
{return and__3546__auto____185100;
}
})()))
{return null;
} else
{var ret__185101 = cljs.core.aclone.call(null,node);
var ___185102 = (ret__185101[subidx__185098] = new_child__185099);

return ret__185101;
}
} else
{if(cljs.core.truth_((subidx__185098 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__185103 = cljs.core.aclone.call(null,node);
var ___185104 = (ret__185103[subidx__185098] = null);

return ret__185103;
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
var this__185105 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__185145 = null;
var G__185145__185146 = (function (coll,k){
var this__185106 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__185145__185147 = (function (coll,k,not_found){
var this__185107 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__185145 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__185145__185146.call(this,coll,k);
case  3 :
return G__185145__185147.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185145;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__185108 = this;
if(cljs.core.truth_((function (){var and__3546__auto____185109 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____185109))
{return (k < this__185108.cnt);
} else
{return and__3546__auto____185109;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__185110 = cljs.core.aclone.call(null,this__185108.tail);

(new_tail__185110[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__185108.meta,this__185108.cnt,this__185108.shift,this__185108.root,new_tail__185110));
} else
{return (new cljs.core.PersistentVector(this__185108.meta,this__185108.cnt,this__185108.shift,cljs.core.do_assoc.call(null,coll,this__185108.shift,this__185108.root,k,v),this__185108.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__185108.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__185108.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__185149 = null;
var G__185149__185150 = (function (tsym185111,k){
var this__185113 = this;
var tsym185111__185114 = this;

var coll__185115 = tsym185111__185114;

return cljs.core._lookup.call(null,coll__185115,k);
});
var G__185149__185151 = (function (tsym185112,k,not_found){
var this__185116 = this;
var tsym185112__185117 = this;

var coll__185118 = tsym185112__185117;

return cljs.core._lookup.call(null,coll__185118,k,not_found);
});
G__185149 = function(tsym185112,k,not_found){
switch(arguments.length){
case  2 :
return G__185149__185150.call(this,tsym185112,k);
case  3 :
return G__185149__185151.call(this,tsym185112,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185149;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__185119 = this;
if(cljs.core.truth_(((this__185119.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__185120 = cljs.core.aclone.call(null,this__185119.tail);

new_tail__185120.push(o);
return (new cljs.core.PersistentVector(this__185119.meta,(this__185119.cnt + 1),this__185119.shift,this__185119.root,new_tail__185120));
} else
{var root_overflow_QMARK___185121 = ((this__185119.cnt >> 5) > (1 << this__185119.shift));
var new_shift__185122 = (cljs.core.truth_(root_overflow_QMARK___185121)?(this__185119.shift + 5):this__185119.shift);
var new_root__185124 = (cljs.core.truth_(root_overflow_QMARK___185121)?(function (){var n_r__185123 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__185123[0] = this__185119.root);
(n_r__185123[1] = cljs.core.new_path.call(null,this__185119.shift,this__185119.tail));
return n_r__185123;
})():cljs.core.push_tail.call(null,coll,this__185119.shift,this__185119.root,this__185119.tail));

return (new cljs.core.PersistentVector(this__185119.meta,(this__185119.cnt + 1),new_shift__185122,new_root__185124,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__185153 = null;
var G__185153__185154 = (function (v,f){
var this__185125 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__185153__185155 = (function (v,f,start){
var this__185126 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__185153 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__185153__185154.call(this,v,f);
case  3 :
return G__185153__185155.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185153;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__185127 = this;
if(cljs.core.truth_((this__185127.cnt > 0)))
{var vector_seq__185128 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__185127.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__185128.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__185129 = this;
return this__185129.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__185130 = this;
if(cljs.core.truth_((this__185130.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__185130.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__185131 = this;
if(cljs.core.truth_((this__185131.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__185131.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__185131.meta);
} else
{if(cljs.core.truth_((1 < (this__185131.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__185131.meta,(this__185131.cnt - 1),this__185131.shift,this__185131.root,cljs.core.aclone.call(null,this__185131.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__185132 = cljs.core.array_for.call(null,coll,(this__185131.cnt - 2));
var nr__185133 = cljs.core.pop_tail.call(null,this__185131.shift,this__185131.root);
var new_root__185134 = (cljs.core.truth_((nr__185133 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__185133);
var cnt_1__185135 = (this__185131.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____185136 = (5 < this__185131.shift);

if(cljs.core.truth_(and__3546__auto____185136))
{return ((new_root__185134[1]) === null);
} else
{return and__3546__auto____185136;
}
})()))
{return (new cljs.core.PersistentVector(this__185131.meta,cnt_1__185135,(this__185131.shift - 5),(new_root__185134[0]),new_tail__185132));
} else
{return (new cljs.core.PersistentVector(this__185131.meta,cnt_1__185135,this__185131.shift,new_root__185134,new_tail__185132));
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
var this__185137 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__185138 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__185139 = this;
return (new cljs.core.PersistentVector(meta,this__185139.cnt,this__185139.shift,this__185139.root,this__185139.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__185140 = this;
return this__185140.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__185157 = null;
var G__185157__185158 = (function (coll,n){
var this__185141 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__185157__185159 = (function (coll,n,not_found){
var this__185142 = this;
if(cljs.core.truth_((function (){var and__3546__auto____185143 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____185143))
{return (n < this__185142.cnt);
} else
{return and__3546__auto____185143;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__185157 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__185157__185158.call(this,coll,n);
case  3 :
return G__185157__185159.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185157;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__185144 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__185144.meta);
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
vector.cljs$lang$applyTo = (function (arglist__185161){
var args = cljs.core.seq( arglist__185161 );;
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
var this__185162 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__185190 = null;
var G__185190__185191 = (function (coll,k){
var this__185163 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__185190__185192 = (function (coll,k,not_found){
var this__185164 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__185190 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__185190__185191.call(this,coll,k);
case  3 :
return G__185190__185192.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185190;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__185165 = this;
var v_pos__185166 = (this__185165.start + key);

return (new cljs.core.Subvec(this__185165.meta,cljs.core._assoc.call(null,this__185165.v,v_pos__185166,val),this__185165.start,((this__185165.end > (v_pos__185166 + 1)) ? this__185165.end : (v_pos__185166 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__185194 = null;
var G__185194__185195 = (function (tsym185167,k){
var this__185169 = this;
var tsym185167__185170 = this;

var coll__185171 = tsym185167__185170;

return cljs.core._lookup.call(null,coll__185171,k);
});
var G__185194__185196 = (function (tsym185168,k,not_found){
var this__185172 = this;
var tsym185168__185173 = this;

var coll__185174 = tsym185168__185173;

return cljs.core._lookup.call(null,coll__185174,k,not_found);
});
G__185194 = function(tsym185168,k,not_found){
switch(arguments.length){
case  2 :
return G__185194__185195.call(this,tsym185168,k);
case  3 :
return G__185194__185196.call(this,tsym185168,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185194;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__185175 = this;
return (new cljs.core.Subvec(this__185175.meta,cljs.core._assoc_n.call(null,this__185175.v,this__185175.end,o),this__185175.start,(this__185175.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__185198 = null;
var G__185198__185199 = (function (coll,f){
var this__185176 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__185198__185200 = (function (coll,f,start){
var this__185177 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__185198 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__185198__185199.call(this,coll,f);
case  3 :
return G__185198__185200.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185198;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__185178 = this;
var subvec_seq__185179 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__185178.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__185178.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__185179.call(null,this__185178.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__185180 = this;
return (this__185180.end - this__185180.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__185181 = this;
return cljs.core._nth.call(null,this__185181.v,(this__185181.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__185182 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__185182.start,this__185182.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__185182.meta,this__185182.v,this__185182.start,(this__185182.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__185183 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__185184 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__185185 = this;
return (new cljs.core.Subvec(meta,this__185185.v,this__185185.start,this__185185.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__185186 = this;
return this__185186.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__185202 = null;
var G__185202__185203 = (function (coll,n){
var this__185187 = this;
return cljs.core._nth.call(null,this__185187.v,(this__185187.start + n));
});
var G__185202__185204 = (function (coll,n,not_found){
var this__185188 = this;
return cljs.core._nth.call(null,this__185188.v,(this__185188.start + n),not_found);
});
G__185202 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__185202__185203.call(this,coll,n);
case  3 :
return G__185202__185204.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185202;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__185189 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__185189.meta);
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
var subvec__185206 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__185207 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__185206.call(this,v,start);
case  3 :
return subvec__185207.call(this,v,start,end);
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
var this__185209 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__185210 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__185211 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__185212 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__185212.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__185213 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__185214 = this;
return cljs.core._first.call(null,this__185214.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__185215 = this;
var temp__3695__auto____185216 = cljs.core.next.call(null,this__185215.front);

if(cljs.core.truth_(temp__3695__auto____185216))
{var f1__185217 = temp__3695__auto____185216;

return (new cljs.core.PersistentQueueSeq(this__185215.meta,f1__185217,this__185215.rear));
} else
{if(cljs.core.truth_((this__185215.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__185215.meta,this__185215.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__185218 = this;
return this__185218.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__185219 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__185219.front,this__185219.rear));
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
var this__185220 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__185221 = this;
if(cljs.core.truth_(this__185221.front))
{return (new cljs.core.PersistentQueue(this__185221.meta,(this__185221.count + 1),this__185221.front,cljs.core.conj.call(null,(function (){var or__3548__auto____185222 = this__185221.rear;

if(cljs.core.truth_(or__3548__auto____185222))
{return or__3548__auto____185222;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__185221.meta,(this__185221.count + 1),cljs.core.conj.call(null,this__185221.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__185223 = this;
var rear__185224 = cljs.core.seq.call(null,this__185223.rear);

if(cljs.core.truth_((function (){var or__3548__auto____185225 = this__185223.front;

if(cljs.core.truth_(or__3548__auto____185225))
{return or__3548__auto____185225;
} else
{return rear__185224;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__185223.front,cljs.core.seq.call(null,rear__185224)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__185226 = this;
return this__185226.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__185227 = this;
return cljs.core._first.call(null,this__185227.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__185228 = this;
if(cljs.core.truth_(this__185228.front))
{var temp__3695__auto____185229 = cljs.core.next.call(null,this__185228.front);

if(cljs.core.truth_(temp__3695__auto____185229))
{var f1__185230 = temp__3695__auto____185229;

return (new cljs.core.PersistentQueue(this__185228.meta,(this__185228.count - 1),f1__185230,this__185228.rear));
} else
{return (new cljs.core.PersistentQueue(this__185228.meta,(this__185228.count - 1),cljs.core.seq.call(null,this__185228.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__185231 = this;
return cljs.core.first.call(null,this__185231.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__185232 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__185233 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__185234 = this;
return (new cljs.core.PersistentQueue(meta,this__185234.count,this__185234.front,this__185234.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__185235 = this;
return this__185235.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__185236 = this;
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
var this__185237 = this;
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
var len__185238 = array.length;

var i__185239 = 0;

while(true){
if(cljs.core.truth_((i__185239 < len__185238)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__185239]))))
{return i__185239;
} else
{{
var G__185240 = (i__185239 + incr);
i__185239 = G__185240;
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
var obj_map_contains_key_QMARK___185242 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___185243 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____185241 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____185241))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____185241;
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
return obj_map_contains_key_QMARK___185242.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___185243.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__185246 = cljs.core.hash.call(null,a);
var b__185247 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__185246 < b__185247)))
{return -1;
} else
{if(cljs.core.truth_((a__185246 > b__185247)))
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
var this__185248 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__185275 = null;
var G__185275__185276 = (function (coll,k){
var this__185249 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__185275__185277 = (function (coll,k,not_found){
var this__185250 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__185250.strobj,(this__185250.strobj[k]),not_found);
});
G__185275 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__185275__185276.call(this,coll,k);
case  3 :
return G__185275__185277.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185275;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__185251 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__185252 = goog.object.clone.call(null,this__185251.strobj);
var overwrite_QMARK___185253 = new_strobj__185252.hasOwnProperty(k);

(new_strobj__185252[k] = v);
if(cljs.core.truth_(overwrite_QMARK___185253))
{return (new cljs.core.ObjMap(this__185251.meta,this__185251.keys,new_strobj__185252));
} else
{var new_keys__185254 = cljs.core.aclone.call(null,this__185251.keys);

new_keys__185254.push(k);
return (new cljs.core.ObjMap(this__185251.meta,new_keys__185254,new_strobj__185252));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__185251.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__185255 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__185255.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__185279 = null;
var G__185279__185280 = (function (tsym185256,k){
var this__185258 = this;
var tsym185256__185259 = this;

var coll__185260 = tsym185256__185259;

return cljs.core._lookup.call(null,coll__185260,k);
});
var G__185279__185281 = (function (tsym185257,k,not_found){
var this__185261 = this;
var tsym185257__185262 = this;

var coll__185263 = tsym185257__185262;

return cljs.core._lookup.call(null,coll__185263,k,not_found);
});
G__185279 = function(tsym185257,k,not_found){
switch(arguments.length){
case  2 :
return G__185279__185280.call(this,tsym185257,k);
case  3 :
return G__185279__185281.call(this,tsym185257,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185279;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__185264 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__185265 = this;
if(cljs.core.truth_((this__185265.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__185245_SHARP_){
return cljs.core.vector.call(null,p1__185245_SHARP_,(this__185265.strobj[p1__185245_SHARP_]));
}),this__185265.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__185266 = this;
return this__185266.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__185267 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__185268 = this;
return (new cljs.core.ObjMap(meta,this__185268.keys,this__185268.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__185269 = this;
return this__185269.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__185270 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__185270.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__185271 = this;
if(cljs.core.truth_((function (){var and__3546__auto____185272 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____185272))
{return this__185271.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____185272;
}
})()))
{var new_keys__185273 = cljs.core.aclone.call(null,this__185271.keys);
var new_strobj__185274 = goog.object.clone.call(null,this__185271.strobj);

new_keys__185273.splice(cljs.core.scan_array.call(null,1,k,new_keys__185273),1);
cljs.core.js_delete.call(null,new_strobj__185274,k);
return (new cljs.core.ObjMap(this__185271.meta,new_keys__185273,new_strobj__185274));
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
var this__185284 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__185322 = null;
var G__185322__185323 = (function (coll,k){
var this__185285 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__185322__185324 = (function (coll,k,not_found){
var this__185286 = this;
var bucket__185287 = (this__185286.hashobj[cljs.core.hash.call(null,k)]);
var i__185288 = (cljs.core.truth_(bucket__185287)?cljs.core.scan_array.call(null,2,k,bucket__185287):null);

if(cljs.core.truth_(i__185288))
{return (bucket__185287[(i__185288 + 1)]);
} else
{return not_found;
}
});
G__185322 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__185322__185323.call(this,coll,k);
case  3 :
return G__185322__185324.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185322;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__185289 = this;
var h__185290 = cljs.core.hash.call(null,k);
var bucket__185291 = (this__185289.hashobj[h__185290]);

if(cljs.core.truth_(bucket__185291))
{var new_bucket__185292 = cljs.core.aclone.call(null,bucket__185291);
var new_hashobj__185293 = goog.object.clone.call(null,this__185289.hashobj);

(new_hashobj__185293[h__185290] = new_bucket__185292);
var temp__3695__auto____185294 = cljs.core.scan_array.call(null,2,k,new_bucket__185292);

if(cljs.core.truth_(temp__3695__auto____185294))
{var i__185295 = temp__3695__auto____185294;

(new_bucket__185292[(i__185295 + 1)] = v);
return (new cljs.core.HashMap(this__185289.meta,this__185289.count,new_hashobj__185293));
} else
{new_bucket__185292.push(k,v);
return (new cljs.core.HashMap(this__185289.meta,(this__185289.count + 1),new_hashobj__185293));
}
} else
{var new_hashobj__185296 = goog.object.clone.call(null,this__185289.hashobj);

(new_hashobj__185296[h__185290] = [k,v]);
return (new cljs.core.HashMap(this__185289.meta,(this__185289.count + 1),new_hashobj__185296));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__185297 = this;
var bucket__185298 = (this__185297.hashobj[cljs.core.hash.call(null,k)]);
var i__185299 = (cljs.core.truth_(bucket__185298)?cljs.core.scan_array.call(null,2,k,bucket__185298):null);

if(cljs.core.truth_(i__185299))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__185326 = null;
var G__185326__185327 = (function (tsym185300,k){
var this__185302 = this;
var tsym185300__185303 = this;

var coll__185304 = tsym185300__185303;

return cljs.core._lookup.call(null,coll__185304,k);
});
var G__185326__185328 = (function (tsym185301,k,not_found){
var this__185305 = this;
var tsym185301__185306 = this;

var coll__185307 = tsym185301__185306;

return cljs.core._lookup.call(null,coll__185307,k,not_found);
});
G__185326 = function(tsym185301,k,not_found){
switch(arguments.length){
case  2 :
return G__185326__185327.call(this,tsym185301,k);
case  3 :
return G__185326__185328.call(this,tsym185301,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185326;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__185308 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__185309 = this;
if(cljs.core.truth_((this__185309.count > 0)))
{var hashes__185310 = cljs.core.js_keys.call(null,this__185309.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__185283_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__185309.hashobj[p1__185283_SHARP_])));
}),hashes__185310);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__185311 = this;
return this__185311.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__185312 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__185313 = this;
return (new cljs.core.HashMap(meta,this__185313.count,this__185313.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__185314 = this;
return this__185314.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__185315 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__185315.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__185316 = this;
var h__185317 = cljs.core.hash.call(null,k);
var bucket__185318 = (this__185316.hashobj[h__185317]);
var i__185319 = (cljs.core.truth_(bucket__185318)?cljs.core.scan_array.call(null,2,k,bucket__185318):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__185319)))
{return coll;
} else
{var new_hashobj__185320 = goog.object.clone.call(null,this__185316.hashobj);

if(cljs.core.truth_((3 > bucket__185318.length)))
{cljs.core.js_delete.call(null,new_hashobj__185320,h__185317);
} else
{var new_bucket__185321 = cljs.core.aclone.call(null,bucket__185318);

new_bucket__185321.splice(i__185319,2);
(new_hashobj__185320[h__185317] = new_bucket__185321);
}
return (new cljs.core.HashMap(this__185316.meta,(this__185316.count - 1),new_hashobj__185320));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__185330 = ks.length;

var i__185331 = 0;
var out__185332 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__185331 < len__185330)))
{{
var G__185333 = (i__185331 + 1);
var G__185334 = cljs.core.assoc.call(null,out__185332,(ks[i__185331]),(vs[i__185331]));
i__185331 = G__185333;
out__185332 = G__185334;
continue;
}
} else
{return out__185332;
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
var in$__185335 = cljs.core.seq.call(null,keyvals);
var out__185336 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__185335))
{{
var G__185337 = cljs.core.nnext.call(null,in$__185335);
var G__185338 = cljs.core.assoc.call(null,out__185336,cljs.core.first.call(null,in$__185335),cljs.core.second.call(null,in$__185335));
in$__185335 = G__185337;
out__185336 = G__185338;
continue;
}
} else
{return out__185336;
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
hash_map.cljs$lang$applyTo = (function (arglist__185339){
var keyvals = cljs.core.seq( arglist__185339 );;
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
{return cljs.core.reduce.call(null,(function (p1__185340_SHARP_,p2__185341_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____185342 = p1__185340_SHARP_;

if(cljs.core.truth_(or__3548__auto____185342))
{return or__3548__auto____185342;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__185341_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__185343){
var maps = cljs.core.seq( arglist__185343 );;
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
{var merge_entry__185346 = (function (m,e){
var k__185344 = cljs.core.first.call(null,e);
var v__185345 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__185344)))
{return cljs.core.assoc.call(null,m,k__185344,f.call(null,cljs.core.get.call(null,m,k__185344),v__185345));
} else
{return cljs.core.assoc.call(null,m,k__185344,v__185345);
}
});
var merge2__185348 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__185346,(function (){var or__3548__auto____185347 = m1;

if(cljs.core.truth_(or__3548__auto____185347))
{return or__3548__auto____185347;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__185348,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__185349){
var f = cljs.core.first(arglist__185349);
var maps = cljs.core.rest(arglist__185349);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__185351 = cljs.core.ObjMap.fromObject([],{});
var keys__185352 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__185352))
{var key__185353 = cljs.core.first.call(null,keys__185352);
var entry__185354 = cljs.core.get.call(null,map,key__185353,"\uFDD0'user/not-found");

{
var G__185355 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__185354,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__185351,key__185353,entry__185354):ret__185351);
var G__185356 = cljs.core.next.call(null,keys__185352);
ret__185351 = G__185355;
keys__185352 = G__185356;
continue;
}
} else
{return ret__185351;
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
var this__185357 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__185378 = null;
var G__185378__185379 = (function (coll,v){
var this__185358 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__185378__185380 = (function (coll,v,not_found){
var this__185359 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__185359.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__185378 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__185378__185379.call(this,coll,v);
case  3 :
return G__185378__185380.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185378;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__185382 = null;
var G__185382__185383 = (function (tsym185360,k){
var this__185362 = this;
var tsym185360__185363 = this;

var coll__185364 = tsym185360__185363;

return cljs.core._lookup.call(null,coll__185364,k);
});
var G__185382__185384 = (function (tsym185361,k,not_found){
var this__185365 = this;
var tsym185361__185366 = this;

var coll__185367 = tsym185361__185366;

return cljs.core._lookup.call(null,coll__185367,k,not_found);
});
G__185382 = function(tsym185361,k,not_found){
switch(arguments.length){
case  2 :
return G__185382__185383.call(this,tsym185361,k);
case  3 :
return G__185382__185384.call(this,tsym185361,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185382;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__185368 = this;
return (new cljs.core.Set(this__185368.meta,cljs.core.assoc.call(null,this__185368.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__185369 = this;
return cljs.core.keys.call(null,this__185369.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__185370 = this;
return (new cljs.core.Set(this__185370.meta,cljs.core.dissoc.call(null,this__185370.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__185371 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__185372 = this;
var and__3546__auto____185373 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____185373))
{var and__3546__auto____185374 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____185374))
{return cljs.core.every_QMARK_.call(null,(function (p1__185350_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__185350_SHARP_);
}),other);
} else
{return and__3546__auto____185374;
}
} else
{return and__3546__auto____185373;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__185375 = this;
return (new cljs.core.Set(meta,this__185375.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__185376 = this;
return this__185376.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__185377 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__185377.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__185387 = cljs.core.seq.call(null,coll);
var out__185388 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__185387))))
{{
var G__185389 = cljs.core.rest.call(null,in$__185387);
var G__185390 = cljs.core.conj.call(null,out__185388,cljs.core.first.call(null,in$__185387));
in$__185387 = G__185389;
out__185388 = G__185390;
continue;
}
} else
{return out__185388;
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
{var n__185391 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____185392 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____185392))
{var e__185393 = temp__3695__auto____185392;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__185393));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__185391,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__185386_SHARP_){
var temp__3695__auto____185394 = cljs.core.find.call(null,smap,p1__185386_SHARP_);

if(cljs.core.truth_(temp__3695__auto____185394))
{var e__185395 = temp__3695__auto____185394;

return cljs.core.second.call(null,e__185395);
} else
{return p1__185386_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__185403 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__185396,seen){
while(true){
var vec__185397__185398 = p__185396;
var f__185399 = cljs.core.nth.call(null,vec__185397__185398,0,null);
var xs__185400 = vec__185397__185398;

var temp__3698__auto____185401 = cljs.core.seq.call(null,xs__185400);

if(cljs.core.truth_(temp__3698__auto____185401))
{var s__185402 = temp__3698__auto____185401;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__185399)))
{{
var G__185404 = cljs.core.rest.call(null,s__185402);
var G__185405 = seen;
p__185396 = G__185404;
seen = G__185405;
continue;
}
} else
{return cljs.core.cons.call(null,f__185399,step.call(null,cljs.core.rest.call(null,s__185402),cljs.core.conj.call(null,seen,f__185399)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__185403.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__185406 = cljs.core.PersistentVector.fromArray([]);
var s__185407 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__185407)))
{{
var G__185408 = cljs.core.conj.call(null,ret__185406,cljs.core.first.call(null,s__185407));
var G__185409 = cljs.core.next.call(null,s__185407);
ret__185406 = G__185408;
s__185407 = G__185409;
continue;
}
} else
{return cljs.core.seq.call(null,ret__185406);
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
{if(cljs.core.truth_((function (){var or__3548__auto____185410 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____185410))
{return or__3548__auto____185410;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__185411 = x.lastIndexOf("/");

if(cljs.core.truth_((i__185411 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__185411 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____185412 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____185412))
{return or__3548__auto____185412;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__185413 = x.lastIndexOf("/");

if(cljs.core.truth_((i__185413 > -1)))
{return cljs.core.subs.call(null,x,2,i__185413);
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
var map__185416 = cljs.core.ObjMap.fromObject([],{});
var ks__185417 = cljs.core.seq.call(null,keys);
var vs__185418 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____185419 = ks__185417;

if(cljs.core.truth_(and__3546__auto____185419))
{return vs__185418;
} else
{return and__3546__auto____185419;
}
})()))
{{
var G__185420 = cljs.core.assoc.call(null,map__185416,cljs.core.first.call(null,ks__185417),cljs.core.first.call(null,vs__185418));
var G__185421 = cljs.core.next.call(null,ks__185417);
var G__185422 = cljs.core.next.call(null,vs__185418);
map__185416 = G__185420;
ks__185417 = G__185421;
vs__185418 = G__185422;
continue;
}
} else
{return map__185416;
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
var max_key__185425 = (function (k,x){
return x;
});
var max_key__185426 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__185427 = (function() { 
var G__185429__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__185414_SHARP_,p2__185415_SHARP_){
return max_key.call(null,k,p1__185414_SHARP_,p2__185415_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__185429 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__185429__delegate.call(this, k, x, y, more);
};
G__185429.cljs$lang$maxFixedArity = 3;
G__185429.cljs$lang$applyTo = (function (arglist__185430){
var k = cljs.core.first(arglist__185430);
var x = cljs.core.first(cljs.core.next(arglist__185430));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__185430)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__185430)));
return G__185429__delegate.call(this, k, x, y, more);
});
return G__185429;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__185425.call(this,k,x);
case  3 :
return max_key__185426.call(this,k,x,y);
default:
return max_key__185427.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__185427.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__185431 = (function (k,x){
return x;
});
var min_key__185432 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__185433 = (function() { 
var G__185435__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__185423_SHARP_,p2__185424_SHARP_){
return min_key.call(null,k,p1__185423_SHARP_,p2__185424_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__185435 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__185435__delegate.call(this, k, x, y, more);
};
G__185435.cljs$lang$maxFixedArity = 3;
G__185435.cljs$lang$applyTo = (function (arglist__185436){
var k = cljs.core.first(arglist__185436);
var x = cljs.core.first(cljs.core.next(arglist__185436));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__185436)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__185436)));
return G__185435__delegate.call(this, k, x, y, more);
});
return G__185435;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__185431.call(this,k,x);
case  3 :
return min_key__185432.call(this,k,x,y);
default:
return min_key__185433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__185433.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__185439 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__185440 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____185437 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____185437))
{var s__185438 = temp__3698__auto____185437;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__185438),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__185438)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__185439.call(this,n,step);
case  3 :
return partition_all__185440.call(this,n,step,coll);
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
var temp__3698__auto____185442 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____185442))
{var s__185443 = temp__3698__auto____185442;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__185443))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__185443),take_while.call(null,pred,cljs.core.rest.call(null,s__185443)));
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
var this__185444 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__185445 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__185461 = null;
var G__185461__185462 = (function (rng,f){
var this__185446 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__185461__185463 = (function (rng,f,s){
var this__185447 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__185461 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__185461__185462.call(this,rng,f);
case  3 :
return G__185461__185463.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185461;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__185448 = this;
var comp__185449 = (cljs.core.truth_((this__185448.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__185449.call(null,this__185448.start,this__185448.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__185450 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__185450.end - this__185450.start) / this__185450.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__185451 = this;
return this__185451.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__185452 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__185452.meta,(this__185452.start + this__185452.step),this__185452.end,this__185452.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__185453 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__185454 = this;
return (new cljs.core.Range(meta,this__185454.start,this__185454.end,this__185454.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__185455 = this;
return this__185455.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__185465 = null;
var G__185465__185466 = (function (rng,n){
var this__185456 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__185456.start + (n * this__185456.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____185457 = (this__185456.start > this__185456.end);

if(cljs.core.truth_(and__3546__auto____185457))
{return cljs.core._EQ_.call(null,this__185456.step,0);
} else
{return and__3546__auto____185457;
}
})()))
{return this__185456.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__185465__185467 = (function (rng,n,not_found){
var this__185458 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__185458.start + (n * this__185458.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____185459 = (this__185458.start > this__185458.end);

if(cljs.core.truth_(and__3546__auto____185459))
{return cljs.core._EQ_.call(null,this__185458.step,0);
} else
{return and__3546__auto____185459;
}
})()))
{return this__185458.start;
} else
{return not_found;
}
}
});
G__185465 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__185465__185466.call(this,rng,n);
case  3 :
return G__185465__185467.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__185465;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__185460 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__185460.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__185469 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__185470 = (function (end){
return range.call(null,0,end,1);
});
var range__185471 = (function (start,end){
return range.call(null,start,end,1);
});
var range__185472 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__185469.call(this);
case  1 :
return range__185470.call(this,start);
case  2 :
return range__185471.call(this,start,end);
case  3 :
return range__185472.call(this,start,end,step);
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
var temp__3698__auto____185474 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____185474))
{var s__185475 = temp__3698__auto____185474;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__185475),take_nth.call(null,n,cljs.core.drop.call(null,n,s__185475)));
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
var temp__3698__auto____185477 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____185477))
{var s__185478 = temp__3698__auto____185477;

var fst__185479 = cljs.core.first.call(null,s__185478);
var fv__185480 = f.call(null,fst__185479);
var run__185481 = cljs.core.cons.call(null,fst__185479,cljs.core.take_while.call(null,(function (p1__185476_SHARP_){
return cljs.core._EQ_.call(null,fv__185480,f.call(null,p1__185476_SHARP_));
}),cljs.core.next.call(null,s__185478)));

return cljs.core.cons.call(null,run__185481,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__185481),s__185478))));
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
var reductions__185496 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____185492 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____185492))
{var s__185493 = temp__3695__auto____185492;

return reductions.call(null,f,cljs.core.first.call(null,s__185493),cljs.core.rest.call(null,s__185493));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__185497 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____185494 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____185494))
{var s__185495 = temp__3698__auto____185494;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__185495)),cljs.core.rest.call(null,s__185495));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__185496.call(this,f,init);
case  3 :
return reductions__185497.call(this,f,init,coll);
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
var juxt__185500 = (function (f){
return (function() {
var G__185505 = null;
var G__185505__185506 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__185505__185507 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__185505__185508 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__185505__185509 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__185505__185510 = (function() { 
var G__185512__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__185512 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__185512__delegate.call(this, x, y, z, args);
};
G__185512.cljs$lang$maxFixedArity = 3;
G__185512.cljs$lang$applyTo = (function (arglist__185513){
var x = cljs.core.first(arglist__185513);
var y = cljs.core.first(cljs.core.next(arglist__185513));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__185513)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__185513)));
return G__185512__delegate.call(this, x, y, z, args);
});
return G__185512;
})()
;
G__185505 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__185505__185506.call(this);
case  1 :
return G__185505__185507.call(this,x);
case  2 :
return G__185505__185508.call(this,x,y);
case  3 :
return G__185505__185509.call(this,x,y,z);
default:
return G__185505__185510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__185505.cljs$lang$maxFixedArity = 3;
G__185505.cljs$lang$applyTo = G__185505__185510.cljs$lang$applyTo;
return G__185505;
})()
});
var juxt__185501 = (function (f,g){
return (function() {
var G__185514 = null;
var G__185514__185515 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__185514__185516 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__185514__185517 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__185514__185518 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__185514__185519 = (function() { 
var G__185521__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__185521 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__185521__delegate.call(this, x, y, z, args);
};
G__185521.cljs$lang$maxFixedArity = 3;
G__185521.cljs$lang$applyTo = (function (arglist__185522){
var x = cljs.core.first(arglist__185522);
var y = cljs.core.first(cljs.core.next(arglist__185522));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__185522)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__185522)));
return G__185521__delegate.call(this, x, y, z, args);
});
return G__185521;
})()
;
G__185514 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__185514__185515.call(this);
case  1 :
return G__185514__185516.call(this,x);
case  2 :
return G__185514__185517.call(this,x,y);
case  3 :
return G__185514__185518.call(this,x,y,z);
default:
return G__185514__185519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__185514.cljs$lang$maxFixedArity = 3;
G__185514.cljs$lang$applyTo = G__185514__185519.cljs$lang$applyTo;
return G__185514;
})()
});
var juxt__185502 = (function (f,g,h){
return (function() {
var G__185523 = null;
var G__185523__185524 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__185523__185525 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__185523__185526 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__185523__185527 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__185523__185528 = (function() { 
var G__185530__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__185530 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__185530__delegate.call(this, x, y, z, args);
};
G__185530.cljs$lang$maxFixedArity = 3;
G__185530.cljs$lang$applyTo = (function (arglist__185531){
var x = cljs.core.first(arglist__185531);
var y = cljs.core.first(cljs.core.next(arglist__185531));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__185531)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__185531)));
return G__185530__delegate.call(this, x, y, z, args);
});
return G__185530;
})()
;
G__185523 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__185523__185524.call(this);
case  1 :
return G__185523__185525.call(this,x);
case  2 :
return G__185523__185526.call(this,x,y);
case  3 :
return G__185523__185527.call(this,x,y,z);
default:
return G__185523__185528.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__185523.cljs$lang$maxFixedArity = 3;
G__185523.cljs$lang$applyTo = G__185523__185528.cljs$lang$applyTo;
return G__185523;
})()
});
var juxt__185503 = (function() { 
var G__185532__delegate = function (f,g,h,fs){
var fs__185499 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__185533 = null;
var G__185533__185534 = (function (){
return cljs.core.reduce.call(null,(function (p1__185482_SHARP_,p2__185483_SHARP_){
return cljs.core.conj.call(null,p1__185482_SHARP_,p2__185483_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__185499);
});
var G__185533__185535 = (function (x){
return cljs.core.reduce.call(null,(function (p1__185484_SHARP_,p2__185485_SHARP_){
return cljs.core.conj.call(null,p1__185484_SHARP_,p2__185485_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__185499);
});
var G__185533__185536 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__185486_SHARP_,p2__185487_SHARP_){
return cljs.core.conj.call(null,p1__185486_SHARP_,p2__185487_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__185499);
});
var G__185533__185537 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__185488_SHARP_,p2__185489_SHARP_){
return cljs.core.conj.call(null,p1__185488_SHARP_,p2__185489_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__185499);
});
var G__185533__185538 = (function() { 
var G__185540__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__185490_SHARP_,p2__185491_SHARP_){
return cljs.core.conj.call(null,p1__185490_SHARP_,cljs.core.apply.call(null,p2__185491_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__185499);
};
var G__185540 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__185540__delegate.call(this, x, y, z, args);
};
G__185540.cljs$lang$maxFixedArity = 3;
G__185540.cljs$lang$applyTo = (function (arglist__185541){
var x = cljs.core.first(arglist__185541);
var y = cljs.core.first(cljs.core.next(arglist__185541));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__185541)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__185541)));
return G__185540__delegate.call(this, x, y, z, args);
});
return G__185540;
})()
;
G__185533 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__185533__185534.call(this);
case  1 :
return G__185533__185535.call(this,x);
case  2 :
return G__185533__185536.call(this,x,y);
case  3 :
return G__185533__185537.call(this,x,y,z);
default:
return G__185533__185538.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__185533.cljs$lang$maxFixedArity = 3;
G__185533.cljs$lang$applyTo = G__185533__185538.cljs$lang$applyTo;
return G__185533;
})()
};
var G__185532 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__185532__delegate.call(this, f, g, h, fs);
};
G__185532.cljs$lang$maxFixedArity = 3;
G__185532.cljs$lang$applyTo = (function (arglist__185542){
var f = cljs.core.first(arglist__185542);
var g = cljs.core.first(cljs.core.next(arglist__185542));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__185542)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__185542)));
return G__185532__delegate.call(this, f, g, h, fs);
});
return G__185532;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__185500.call(this,f);
case  2 :
return juxt__185501.call(this,f,g);
case  3 :
return juxt__185502.call(this,f,g,h);
default:
return juxt__185503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__185503.cljs$lang$applyTo;
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
var dorun__185544 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__185547 = cljs.core.next.call(null,coll);
coll = G__185547;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__185545 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____185543 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____185543))
{return (n > 0);
} else
{return and__3546__auto____185543;
}
})()))
{{
var G__185548 = (n - 1);
var G__185549 = cljs.core.next.call(null,coll);
n = G__185548;
coll = G__185549;
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
return dorun__185544.call(this,n);
case  2 :
return dorun__185545.call(this,n,coll);
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
var doall__185550 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__185551 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__185550.call(this,n);
case  2 :
return doall__185551.call(this,n,coll);
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
var matches__185553 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__185553),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__185553),1)))
{return cljs.core.first.call(null,matches__185553);
} else
{return cljs.core.vec.call(null,matches__185553);
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
var matches__185554 = re.exec(s);

if(cljs.core.truth_((matches__185554 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__185554),1)))
{return cljs.core.first.call(null,matches__185554);
} else
{return cljs.core.vec.call(null,matches__185554);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__185555 = cljs.core.re_find.call(null,re,s);
var match_idx__185556 = s.search(re);
var match_str__185557 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__185555))?cljs.core.first.call(null,match_data__185555):match_data__185555);
var post_match__185558 = cljs.core.subs.call(null,s,(match_idx__185556 + cljs.core.count.call(null,match_str__185557)));

if(cljs.core.truth_(match_data__185555))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__185555,re_seq.call(null,re,post_match__185558));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__185560__185561 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___185562 = cljs.core.nth.call(null,vec__185560__185561,0,null);
var flags__185563 = cljs.core.nth.call(null,vec__185560__185561,1,null);
var pattern__185564 = cljs.core.nth.call(null,vec__185560__185561,2,null);

return (new RegExp(pattern__185564,flags__185563));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__185559_SHARP_){
return print_one.call(null,p1__185559_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____185565 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____185565))
{var and__3546__auto____185569 = (function (){var x__451__auto____185566 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____185567 = x__451__auto____185566;

if(cljs.core.truth_(and__3546__auto____185567))
{var and__3546__auto____185568 = x__451__auto____185566.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____185568))
{return cljs.core.not.call(null,x__451__auto____185566.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____185568;
}
} else
{return and__3546__auto____185567;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____185566);
}
})();

if(cljs.core.truth_(and__3546__auto____185569))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____185569;
}
} else
{return and__3546__auto____185565;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____185570 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____185571 = x__451__auto____185570;

if(cljs.core.truth_(and__3546__auto____185571))
{var and__3546__auto____185572 = x__451__auto____185570.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____185572))
{return cljs.core.not.call(null,x__451__auto____185570.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____185572;
}
} else
{return and__3546__auto____185571;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____185570);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__185573 = cljs.core.first.call(null,objs);
var sb__185574 = (new goog.string.StringBuffer());

var G__185575__185576 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__185575__185576))
{var obj__185577 = cljs.core.first.call(null,G__185575__185576);
var G__185575__185578 = G__185575__185576;

while(true){
if(cljs.core.truth_((obj__185577 === first_obj__185573)))
{} else
{sb__185574.append(" ");
}
var G__185579__185580 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__185577,opts));

if(cljs.core.truth_(G__185579__185580))
{var string__185581 = cljs.core.first.call(null,G__185579__185580);
var G__185579__185582 = G__185579__185580;

while(true){
sb__185574.append(string__185581);
var temp__3698__auto____185583 = cljs.core.next.call(null,G__185579__185582);

if(cljs.core.truth_(temp__3698__auto____185583))
{var G__185579__185584 = temp__3698__auto____185583;

{
var G__185587 = cljs.core.first.call(null,G__185579__185584);
var G__185588 = G__185579__185584;
string__185581 = G__185587;
G__185579__185582 = G__185588;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____185585 = cljs.core.next.call(null,G__185575__185578);

if(cljs.core.truth_(temp__3698__auto____185585))
{var G__185575__185586 = temp__3698__auto____185585;

{
var G__185589 = cljs.core.first.call(null,G__185575__185586);
var G__185590 = G__185575__185586;
obj__185577 = G__185589;
G__185575__185578 = G__185590;
continue;
}
} else
{}
break;
}
} else
{}
return sb__185574;
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
var sb__185591 = cljs.core.pr_sb.call(null,objs,opts);

sb__185591.append("\n");
return cljs.core.str.call(null,sb__185591);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__185592 = cljs.core.first.call(null,objs);

var G__185593__185594 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__185593__185594))
{var obj__185595 = cljs.core.first.call(null,G__185593__185594);
var G__185593__185596 = G__185593__185594;

while(true){
if(cljs.core.truth_((obj__185595 === first_obj__185592)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__185597__185598 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__185595,opts));

if(cljs.core.truth_(G__185597__185598))
{var string__185599 = cljs.core.first.call(null,G__185597__185598);
var G__185597__185600 = G__185597__185598;

while(true){
cljs.core.string_print.call(null,string__185599);
var temp__3698__auto____185601 = cljs.core.next.call(null,G__185597__185600);

if(cljs.core.truth_(temp__3698__auto____185601))
{var G__185597__185602 = temp__3698__auto____185601;

{
var G__185605 = cljs.core.first.call(null,G__185597__185602);
var G__185606 = G__185597__185602;
string__185599 = G__185605;
G__185597__185600 = G__185606;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____185603 = cljs.core.next.call(null,G__185593__185596);

if(cljs.core.truth_(temp__3698__auto____185603))
{var G__185593__185604 = temp__3698__auto____185603;

{
var G__185607 = cljs.core.first.call(null,G__185593__185604);
var G__185608 = G__185593__185604;
obj__185595 = G__185607;
G__185593__185596 = G__185608;
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
pr_str.cljs$lang$applyTo = (function (arglist__185609){
var objs = cljs.core.seq( arglist__185609 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__185610){
var objs = cljs.core.seq( arglist__185610 );;
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
pr.cljs$lang$applyTo = (function (arglist__185611){
var objs = cljs.core.seq( arglist__185611 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__185612){
var objs = cljs.core.seq( arglist__185612 );;
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
print_str.cljs$lang$applyTo = (function (arglist__185613){
var objs = cljs.core.seq( arglist__185613 );;
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
println.cljs$lang$applyTo = (function (arglist__185614){
var objs = cljs.core.seq( arglist__185614 );;
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
println_str.cljs$lang$applyTo = (function (arglist__185615){
var objs = cljs.core.seq( arglist__185615 );;
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
prn.cljs$lang$applyTo = (function (arglist__185616){
var objs = cljs.core.seq( arglist__185616 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__185617 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__185617,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____185618 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____185618))
{var nspc__185619 = temp__3698__auto____185618;

return cljs.core.str.call(null,nspc__185619,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____185620 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____185620))
{var nspc__185621 = temp__3698__auto____185620;

return cljs.core.str.call(null,nspc__185621,"/");
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
var pr_pair__185622 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__185622,"{",", ","}",opts,coll);
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
var this__185623 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__185624 = this;
var G__185625__185626 = cljs.core.seq.call(null,this__185624.watches);

if(cljs.core.truth_(G__185625__185626))
{var G__185628__185630 = cljs.core.first.call(null,G__185625__185626);
var vec__185629__185631 = G__185628__185630;
var key__185632 = cljs.core.nth.call(null,vec__185629__185631,0,null);
var f__185633 = cljs.core.nth.call(null,vec__185629__185631,1,null);
var G__185625__185634 = G__185625__185626;

var G__185628__185635 = G__185628__185630;
var G__185625__185636 = G__185625__185634;

while(true){
var vec__185637__185638 = G__185628__185635;
var key__185639 = cljs.core.nth.call(null,vec__185637__185638,0,null);
var f__185640 = cljs.core.nth.call(null,vec__185637__185638,1,null);
var G__185625__185641 = G__185625__185636;

f__185640.call(null,key__185639,this$,oldval,newval);
var temp__3698__auto____185642 = cljs.core.next.call(null,G__185625__185641);

if(cljs.core.truth_(temp__3698__auto____185642))
{var G__185625__185643 = temp__3698__auto____185642;

{
var G__185650 = cljs.core.first.call(null,G__185625__185643);
var G__185651 = G__185625__185643;
G__185628__185635 = G__185650;
G__185625__185636 = G__185651;
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
var this__185644 = this;
return this$.watches = cljs.core.assoc.call(null,this__185644.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__185645 = this;
return this$.watches = cljs.core.dissoc.call(null,this__185645.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__185646 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__185646.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__185647 = this;
return this__185647.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__185648 = this;
return this__185648.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__185649 = this;
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
var atom__185658 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__185659 = (function() { 
var G__185661__delegate = function (x,p__185652){
var map__185653__185654 = p__185652;
var map__185653__185655 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__185653__185654))?cljs.core.apply.call(null,cljs.core.hash_map,map__185653__185654):map__185653__185654);
var validator__185656 = cljs.core.get.call(null,map__185653__185655,"\uFDD0'validator");
var meta__185657 = cljs.core.get.call(null,map__185653__185655,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__185657,validator__185656,null));
};
var G__185661 = function (x,var_args){
var p__185652 = null;
if (goog.isDef(var_args)) {
  p__185652 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__185661__delegate.call(this, x, p__185652);
};
G__185661.cljs$lang$maxFixedArity = 1;
G__185661.cljs$lang$applyTo = (function (arglist__185662){
var x = cljs.core.first(arglist__185662);
var p__185652 = cljs.core.rest(arglist__185662);
return G__185661__delegate.call(this, x, p__185652);
});
return G__185661;
})()
;
atom = function(x,var_args){
var p__185652 = var_args;
switch(arguments.length){
case  1 :
return atom__185658.call(this,x);
default:
return atom__185659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__185659.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____185663 = a.validator;

if(cljs.core.truth_(temp__3698__auto____185663))
{var validate__185664 = temp__3698__auto____185663;

if(cljs.core.truth_(validate__185664.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__185665 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__185665,new_value);
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
var swap_BANG___185666 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___185667 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___185668 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___185669 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___185670 = (function() { 
var G__185672__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__185672 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__185672__delegate.call(this, a, f, x, y, z, more);
};
G__185672.cljs$lang$maxFixedArity = 5;
G__185672.cljs$lang$applyTo = (function (arglist__185673){
var a = cljs.core.first(arglist__185673);
var f = cljs.core.first(cljs.core.next(arglist__185673));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__185673)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__185673))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__185673)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__185673)))));
return G__185672__delegate.call(this, a, f, x, y, z, more);
});
return G__185672;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___185666.call(this,a,f);
case  3 :
return swap_BANG___185667.call(this,a,f,x);
case  4 :
return swap_BANG___185668.call(this,a,f,x,y);
case  5 :
return swap_BANG___185669.call(this,a,f,x,y,z);
default:
return swap_BANG___185670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___185670.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__185674){
var iref = cljs.core.first(arglist__185674);
var f = cljs.core.first(cljs.core.next(arglist__185674));
var args = cljs.core.rest(cljs.core.next(arglist__185674));
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
var gensym__185675 = (function (){
return gensym.call(null,"G__");
});
var gensym__185676 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__185675.call(this);
case  1 :
return gensym__185676.call(this,prefix_string);
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
var this__185678 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__185678.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__185679 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__185679.state,(function (p__185680){
var curr_state__185681 = p__185680;
var curr_state__185682 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__185681))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__185681):curr_state__185681);
var done__185683 = cljs.core.get.call(null,curr_state__185682,"\uFDD0'done");

if(cljs.core.truth_(done__185683))
{return curr_state__185682;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__185679.f.call(null)});
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
var map__185684__185685 = options;
var map__185684__185686 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__185684__185685))?cljs.core.apply.call(null,cljs.core.hash_map,map__185684__185685):map__185684__185685);
var keywordize_keys__185687 = cljs.core.get.call(null,map__185684__185686,"\uFDD0'keywordize-keys");
var keyfn__185688 = (cljs.core.truth_(keywordize_keys__185687)?cljs.core.keyword:cljs.core.str);
var f__185694 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____185693 = (function iter__185689(s__185690){
return (new cljs.core.LazySeq(null,false,(function (){
var s__185690__185691 = s__185690;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__185690__185691)))
{var k__185692 = cljs.core.first.call(null,s__185690__185691);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__185688.call(null,k__185692),thisfn.call(null,(x[k__185692]))]),iter__185689.call(null,cljs.core.rest.call(null,s__185690__185691)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____185693.call(null,cljs.core.js_keys.call(null,x));
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

return f__185694.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__185695){
var x = cljs.core.first(arglist__185695);
var options = cljs.core.rest(arglist__185695);
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
var mem__185696 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__185700__delegate = function (args){
var temp__3695__auto____185697 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__185696),args);

if(cljs.core.truth_(temp__3695__auto____185697))
{var v__185698 = temp__3695__auto____185697;

return v__185698;
} else
{var ret__185699 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__185696,cljs.core.assoc,args,ret__185699);
return ret__185699;
}
};
var G__185700 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__185700__delegate.call(this, args);
};
G__185700.cljs$lang$maxFixedArity = 0;
G__185700.cljs$lang$applyTo = (function (arglist__185701){
var args = cljs.core.seq( arglist__185701 );;
return G__185700__delegate.call(this, args);
});
return G__185700;
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
var trampoline__185703 = (function (f){
while(true){
var ret__185702 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__185702)))
{{
var G__185706 = ret__185702;
f = G__185706;
continue;
}
} else
{return ret__185702;
}
break;
}
});
var trampoline__185704 = (function() { 
var G__185707__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__185707 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__185707__delegate.call(this, f, args);
};
G__185707.cljs$lang$maxFixedArity = 1;
G__185707.cljs$lang$applyTo = (function (arglist__185708){
var f = cljs.core.first(arglist__185708);
var args = cljs.core.rest(arglist__185708);
return G__185707__delegate.call(this, f, args);
});
return G__185707;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__185703.call(this,f);
default:
return trampoline__185704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__185704.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__185709 = (function (){
return rand.call(null,1);
});
var rand__185710 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__185709.call(this);
case  1 :
return rand__185710.call(this,n);
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
var k__185712 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__185712,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__185712,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___185721 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___185722 = (function (h,child,parent){
var or__3548__auto____185713 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____185713))
{return or__3548__auto____185713;
} else
{var or__3548__auto____185714 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____185714))
{return or__3548__auto____185714;
} else
{var and__3546__auto____185715 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____185715))
{var and__3546__auto____185716 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____185716))
{var and__3546__auto____185717 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____185717))
{var ret__185718 = true;
var i__185719 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____185720 = cljs.core.not.call(null,ret__185718);

if(cljs.core.truth_(or__3548__auto____185720))
{return or__3548__auto____185720;
} else
{return cljs.core._EQ_.call(null,i__185719,cljs.core.count.call(null,parent));
}
})()))
{return ret__185718;
} else
{{
var G__185724 = isa_QMARK_.call(null,h,child.call(null,i__185719),parent.call(null,i__185719));
var G__185725 = (i__185719 + 1);
ret__185718 = G__185724;
i__185719 = G__185725;
continue;
}
}
break;
}
} else
{return and__3546__auto____185717;
}
} else
{return and__3546__auto____185716;
}
} else
{return and__3546__auto____185715;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___185721.call(this,h,child);
case  3 :
return isa_QMARK___185722.call(this,h,child,parent);
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
var parents__185726 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__185727 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__185726.call(this,h);
case  2 :
return parents__185727.call(this,h,tag);
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
var ancestors__185729 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__185730 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__185729.call(this,h);
case  2 :
return ancestors__185730.call(this,h,tag);
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
var descendants__185732 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__185733 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__185732.call(this,h);
case  2 :
return descendants__185733.call(this,h,tag);
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
var derive__185743 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__185744 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__185738 = "\uFDD0'parents".call(null,h);
var td__185739 = "\uFDD0'descendants".call(null,h);
var ta__185740 = "\uFDD0'ancestors".call(null,h);
var tf__185741 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____185742 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__185738.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__185740.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__185740.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__185738,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__185741.call(null,"\uFDD0'ancestors".call(null,h),tag,td__185739,parent,ta__185740),"\uFDD0'descendants":tf__185741.call(null,"\uFDD0'descendants".call(null,h),parent,ta__185740,tag,td__185739)});
})());

if(cljs.core.truth_(or__3548__auto____185742))
{return or__3548__auto____185742;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__185743.call(this,h,tag);
case  3 :
return derive__185744.call(this,h,tag,parent);
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
var underive__185750 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__185751 = (function (h,tag,parent){
var parentMap__185746 = "\uFDD0'parents".call(null,h);
var childsParents__185747 = (cljs.core.truth_(parentMap__185746.call(null,tag))?cljs.core.disj.call(null,parentMap__185746.call(null,tag),parent):cljs.core.set([]));
var newParents__185748 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__185747))?cljs.core.assoc.call(null,parentMap__185746,tag,childsParents__185747):cljs.core.dissoc.call(null,parentMap__185746,tag));
var deriv_seq__185749 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__185735_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__185735_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__185735_SHARP_),cljs.core.second.call(null,p1__185735_SHARP_)));
}),cljs.core.seq.call(null,newParents__185748)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__185746.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__185736_SHARP_,p2__185737_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__185736_SHARP_,p2__185737_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__185749));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__185750.call(this,h,tag);
case  3 :
return underive__185751.call(this,h,tag,parent);
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
var xprefs__185753 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____185755 = (cljs.core.truth_((function (){var and__3546__auto____185754 = xprefs__185753;

if(cljs.core.truth_(and__3546__auto____185754))
{return xprefs__185753.call(null,y);
} else
{return and__3546__auto____185754;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____185755))
{return or__3548__auto____185755;
} else
{var or__3548__auto____185757 = (function (){var ps__185756 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__185756) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__185756),prefer_table)))
{} else
{}
{
var G__185760 = cljs.core.rest.call(null,ps__185756);
ps__185756 = G__185760;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____185757))
{return or__3548__auto____185757;
} else
{var or__3548__auto____185759 = (function (){var ps__185758 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__185758) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__185758),y,prefer_table)))
{} else
{}
{
var G__185761 = cljs.core.rest.call(null,ps__185758);
ps__185758 = G__185761;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____185759))
{return or__3548__auto____185759;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____185762 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____185762))
{return or__3548__auto____185762;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__185771 = cljs.core.reduce.call(null,(function (be,p__185763){
var vec__185764__185765 = p__185763;
var k__185766 = cljs.core.nth.call(null,vec__185764__185765,0,null);
var ___185767 = cljs.core.nth.call(null,vec__185764__185765,1,null);
var e__185768 = vec__185764__185765;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__185766)))
{var be2__185770 = (cljs.core.truth_((function (){var or__3548__auto____185769 = (be === null);

if(cljs.core.truth_(or__3548__auto____185769))
{return or__3548__auto____185769;
} else
{return cljs.core.dominates.call(null,k__185766,cljs.core.first.call(null,be),prefer_table);
}
})())?e__185768:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__185770),k__185766,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__185766," and ",cljs.core.first.call(null,be2__185770),", and neither is preferred")));
}
return be2__185770;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__185771))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__185771));
return cljs.core.second.call(null,best_entry__185771);
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
if(cljs.core.truth_((function (){var and__3546__auto____185772 = mf;

if(cljs.core.truth_(and__3546__auto____185772))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____185772;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____185773 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____185773))
{return or__3548__auto____185773;
} else
{var or__3548__auto____185774 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____185774))
{return or__3548__auto____185774;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____185775 = mf;

if(cljs.core.truth_(and__3546__auto____185775))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____185775;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____185776 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____185776))
{return or__3548__auto____185776;
} else
{var or__3548__auto____185777 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____185777))
{return or__3548__auto____185777;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____185778 = mf;

if(cljs.core.truth_(and__3546__auto____185778))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____185778;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____185779 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____185779))
{return or__3548__auto____185779;
} else
{var or__3548__auto____185780 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____185780))
{return or__3548__auto____185780;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____185781 = mf;

if(cljs.core.truth_(and__3546__auto____185781))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____185781;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____185782 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____185782))
{return or__3548__auto____185782;
} else
{var or__3548__auto____185783 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____185783))
{return or__3548__auto____185783;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____185784 = mf;

if(cljs.core.truth_(and__3546__auto____185784))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____185784;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____185785 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____185785))
{return or__3548__auto____185785;
} else
{var or__3548__auto____185786 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____185786))
{return or__3548__auto____185786;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____185787 = mf;

if(cljs.core.truth_(and__3546__auto____185787))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____185787;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____185788 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____185788))
{return or__3548__auto____185788;
} else
{var or__3548__auto____185789 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____185789))
{return or__3548__auto____185789;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____185790 = mf;

if(cljs.core.truth_(and__3546__auto____185790))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____185790;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____185791 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____185791))
{return or__3548__auto____185791;
} else
{var or__3548__auto____185792 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____185792))
{return or__3548__auto____185792;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____185793 = mf;

if(cljs.core.truth_(and__3546__auto____185793))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____185793;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____185794 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____185794))
{return or__3548__auto____185794;
} else
{var or__3548__auto____185795 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____185795))
{return or__3548__auto____185795;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__185796 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__185797 = cljs.core._get_method.call(null,mf,dispatch_val__185796);

if(cljs.core.truth_(target_fn__185797))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__185796)));
}
return cljs.core.apply.call(null,target_fn__185797,args);
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
var this__185798 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__185799 = this;
cljs.core.swap_BANG_.call(null,this__185799.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__185799.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__185799.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__185799.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__185800 = this;
cljs.core.swap_BANG_.call(null,this__185800.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__185800.method_cache,this__185800.method_table,this__185800.cached_hierarchy,this__185800.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__185801 = this;
cljs.core.swap_BANG_.call(null,this__185801.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__185801.method_cache,this__185801.method_table,this__185801.cached_hierarchy,this__185801.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__185802 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__185802.cached_hierarchy),cljs.core.deref.call(null,this__185802.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__185802.method_cache,this__185802.method_table,this__185802.cached_hierarchy,this__185802.hierarchy);
}
var temp__3695__auto____185803 = cljs.core.deref.call(null,this__185802.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____185803))
{var target_fn__185804 = temp__3695__auto____185803;

return target_fn__185804;
} else
{var temp__3695__auto____185805 = cljs.core.find_and_cache_best_method.call(null,this__185802.name,dispatch_val,this__185802.hierarchy,this__185802.method_table,this__185802.prefer_table,this__185802.method_cache,this__185802.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____185805))
{var target_fn__185806 = temp__3695__auto____185805;

return target_fn__185806;
} else
{return cljs.core.deref.call(null,this__185802.method_table).call(null,this__185802.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__185807 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__185807.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__185807.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__185807.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__185807.method_cache,this__185807.method_table,this__185807.cached_hierarchy,this__185807.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__185808 = this;
return cljs.core.deref.call(null,this__185808.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__185809 = this;
return cljs.core.deref.call(null,this__185809.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__185810 = this;
return cljs.core.do_dispatch.call(null,mf,this__185810.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__185811__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__185811 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__185811__delegate.call(this, _, args);
};
G__185811.cljs$lang$maxFixedArity = 1;
G__185811.cljs$lang$applyTo = (function (arglist__185812){
var _ = cljs.core.first(arglist__185812);
var args = cljs.core.rest(arglist__185812);
return G__185811__delegate.call(this, _, args);
});
return G__185811;
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
