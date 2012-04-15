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
var or__3548__auto____14027 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____14027))
{return or__3548__auto____14027;
} else
{var or__3548__auto____14028 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____14028))
{return or__3548__auto____14028;
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
var _invoke__14092 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____14029 = this$;

if(cljs.core.truth_(and__3546__auto____14029))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14029;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____14030 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14030))
{return or__3548__auto____14030;
} else
{var or__3548__auto____14031 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14031))
{return or__3548__auto____14031;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__14093 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____14032 = this$;

if(cljs.core.truth_(and__3546__auto____14032))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14032;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____14033 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14033))
{return or__3548__auto____14033;
} else
{var or__3548__auto____14034 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14034))
{return or__3548__auto____14034;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__14094 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____14035 = this$;

if(cljs.core.truth_(and__3546__auto____14035))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14035;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____14036 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14036))
{return or__3548__auto____14036;
} else
{var or__3548__auto____14037 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14037))
{return or__3548__auto____14037;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__14095 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____14038 = this$;

if(cljs.core.truth_(and__3546__auto____14038))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14038;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____14039 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14039))
{return or__3548__auto____14039;
} else
{var or__3548__auto____14040 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14040))
{return or__3548__auto____14040;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__14096 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____14041 = this$;

if(cljs.core.truth_(and__3546__auto____14041))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14041;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____14042 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14042))
{return or__3548__auto____14042;
} else
{var or__3548__auto____14043 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14043))
{return or__3548__auto____14043;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__14097 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____14044 = this$;

if(cljs.core.truth_(and__3546__auto____14044))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14044;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____14045 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14045))
{return or__3548__auto____14045;
} else
{var or__3548__auto____14046 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14046))
{return or__3548__auto____14046;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__14098 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____14047 = this$;

if(cljs.core.truth_(and__3546__auto____14047))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14047;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____14048 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14048))
{return or__3548__auto____14048;
} else
{var or__3548__auto____14049 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14049))
{return or__3548__auto____14049;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__14099 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____14050 = this$;

if(cljs.core.truth_(and__3546__auto____14050))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14050;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____14051 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14051))
{return or__3548__auto____14051;
} else
{var or__3548__auto____14052 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14052))
{return or__3548__auto____14052;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__14100 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____14053 = this$;

if(cljs.core.truth_(and__3546__auto____14053))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14053;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____14054 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14054))
{return or__3548__auto____14054;
} else
{var or__3548__auto____14055 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14055))
{return or__3548__auto____14055;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__14101 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____14056 = this$;

if(cljs.core.truth_(and__3546__auto____14056))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14056;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____14057 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14057))
{return or__3548__auto____14057;
} else
{var or__3548__auto____14058 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14058))
{return or__3548__auto____14058;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__14102 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____14059 = this$;

if(cljs.core.truth_(and__3546__auto____14059))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14059;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____14060 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14060))
{return or__3548__auto____14060;
} else
{var or__3548__auto____14061 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14061))
{return or__3548__auto____14061;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__14103 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____14062 = this$;

if(cljs.core.truth_(and__3546__auto____14062))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14062;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____14063 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14063))
{return or__3548__auto____14063;
} else
{var or__3548__auto____14064 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14064))
{return or__3548__auto____14064;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__14104 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____14065 = this$;

if(cljs.core.truth_(and__3546__auto____14065))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14065;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____14066 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14066))
{return or__3548__auto____14066;
} else
{var or__3548__auto____14067 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14067))
{return or__3548__auto____14067;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14105 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____14068 = this$;

if(cljs.core.truth_(and__3546__auto____14068))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14068;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____14069 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14069))
{return or__3548__auto____14069;
} else
{var or__3548__auto____14070 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14070))
{return or__3548__auto____14070;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__14106 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____14071 = this$;

if(cljs.core.truth_(and__3546__auto____14071))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14071;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____14072 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14072))
{return or__3548__auto____14072;
} else
{var or__3548__auto____14073 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14073))
{return or__3548__auto____14073;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__14107 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____14074 = this$;

if(cljs.core.truth_(and__3546__auto____14074))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14074;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____14075 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14075))
{return or__3548__auto____14075;
} else
{var or__3548__auto____14076 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14076))
{return or__3548__auto____14076;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__14108 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____14077 = this$;

if(cljs.core.truth_(and__3546__auto____14077))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14077;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____14078 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14078))
{return or__3548__auto____14078;
} else
{var or__3548__auto____14079 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14079))
{return or__3548__auto____14079;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__14109 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____14080 = this$;

if(cljs.core.truth_(and__3546__auto____14080))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14080;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____14081 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14081))
{return or__3548__auto____14081;
} else
{var or__3548__auto____14082 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14082))
{return or__3548__auto____14082;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__14110 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____14083 = this$;

if(cljs.core.truth_(and__3546__auto____14083))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14083;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____14084 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14084))
{return or__3548__auto____14084;
} else
{var or__3548__auto____14085 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14085))
{return or__3548__auto____14085;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__14111 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____14086 = this$;

if(cljs.core.truth_(and__3546__auto____14086))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14086;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____14087 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14087))
{return or__3548__auto____14087;
} else
{var or__3548__auto____14088 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14088))
{return or__3548__auto____14088;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__14112 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____14089 = this$;

if(cljs.core.truth_(and__3546__auto____14089))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____14089;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____14090 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14090))
{return or__3548__auto____14090;
} else
{var or__3548__auto____14091 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____14091))
{return or__3548__auto____14091;
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
return _invoke__14092.call(this,this$);
case  2 :
return _invoke__14093.call(this,this$,a);
case  3 :
return _invoke__14094.call(this,this$,a,b);
case  4 :
return _invoke__14095.call(this,this$,a,b,c);
case  5 :
return _invoke__14096.call(this,this$,a,b,c,d);
case  6 :
return _invoke__14097.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__14098.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__14099.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__14100.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__14101.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__14102.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__14103.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__14104.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__14105.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__14106.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__14107.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__14108.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__14109.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__14110.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__14111.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__14112.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____14114 = coll;

if(cljs.core.truth_(and__3546__auto____14114))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____14114;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____14115 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14115))
{return or__3548__auto____14115;
} else
{var or__3548__auto____14116 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____14116))
{return or__3548__auto____14116;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____14117 = coll;

if(cljs.core.truth_(and__3546__auto____14117))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____14117;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____14118 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14118))
{return or__3548__auto____14118;
} else
{var or__3548__auto____14119 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____14119))
{return or__3548__auto____14119;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____14120 = coll;

if(cljs.core.truth_(and__3546__auto____14120))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____14120;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____14121 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14121))
{return or__3548__auto____14121;
} else
{var or__3548__auto____14122 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____14122))
{return or__3548__auto____14122;
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
var _nth__14129 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____14123 = coll;

if(cljs.core.truth_(and__3546__auto____14123))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____14123;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____14124 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14124))
{return or__3548__auto____14124;
} else
{var or__3548__auto____14125 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____14125))
{return or__3548__auto____14125;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__14130 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____14126 = coll;

if(cljs.core.truth_(and__3546__auto____14126))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____14126;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____14127 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14127))
{return or__3548__auto____14127;
} else
{var or__3548__auto____14128 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____14128))
{return or__3548__auto____14128;
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
return _nth__14129.call(this,coll,n);
case  3 :
return _nth__14130.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____14132 = coll;

if(cljs.core.truth_(and__3546__auto____14132))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____14132;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____14133 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14133))
{return or__3548__auto____14133;
} else
{var or__3548__auto____14134 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____14134))
{return or__3548__auto____14134;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____14135 = coll;

if(cljs.core.truth_(and__3546__auto____14135))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____14135;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____14136 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14136))
{return or__3548__auto____14136;
} else
{var or__3548__auto____14137 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____14137))
{return or__3548__auto____14137;
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
var _lookup__14144 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____14138 = o;

if(cljs.core.truth_(and__3546__auto____14138))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____14138;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____14139 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____14139))
{return or__3548__auto____14139;
} else
{var or__3548__auto____14140 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____14140))
{return or__3548__auto____14140;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__14145 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____14141 = o;

if(cljs.core.truth_(and__3546__auto____14141))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____14141;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____14142 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____14142))
{return or__3548__auto____14142;
} else
{var or__3548__auto____14143 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____14143))
{return or__3548__auto____14143;
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
return _lookup__14144.call(this,o,k);
case  3 :
return _lookup__14145.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____14147 = coll;

if(cljs.core.truth_(and__3546__auto____14147))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____14147;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____14148 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14148))
{return or__3548__auto____14148;
} else
{var or__3548__auto____14149 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____14149))
{return or__3548__auto____14149;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____14150 = coll;

if(cljs.core.truth_(and__3546__auto____14150))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____14150;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____14151 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14151))
{return or__3548__auto____14151;
} else
{var or__3548__auto____14152 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____14152))
{return or__3548__auto____14152;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____14153 = coll;

if(cljs.core.truth_(and__3546__auto____14153))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____14153;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____14154 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14154))
{return or__3548__auto____14154;
} else
{var or__3548__auto____14155 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____14155))
{return or__3548__auto____14155;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____14156 = coll;

if(cljs.core.truth_(and__3546__auto____14156))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____14156;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____14157 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14157))
{return or__3548__auto____14157;
} else
{var or__3548__auto____14158 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____14158))
{return or__3548__auto____14158;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____14159 = coll;

if(cljs.core.truth_(and__3546__auto____14159))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____14159;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____14160 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14160))
{return or__3548__auto____14160;
} else
{var or__3548__auto____14161 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____14161))
{return or__3548__auto____14161;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____14162 = coll;

if(cljs.core.truth_(and__3546__auto____14162))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____14162;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____14163 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14163))
{return or__3548__auto____14163;
} else
{var or__3548__auto____14164 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____14164))
{return or__3548__auto____14164;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____14165 = coll;

if(cljs.core.truth_(and__3546__auto____14165))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____14165;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____14166 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14166))
{return or__3548__auto____14166;
} else
{var or__3548__auto____14167 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____14167))
{return or__3548__auto____14167;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____14168 = o;

if(cljs.core.truth_(and__3546__auto____14168))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____14168;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____14169 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____14169))
{return or__3548__auto____14169;
} else
{var or__3548__auto____14170 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____14170))
{return or__3548__auto____14170;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____14171 = o;

if(cljs.core.truth_(and__3546__auto____14171))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____14171;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____14172 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____14172))
{return or__3548__auto____14172;
} else
{var or__3548__auto____14173 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____14173))
{return or__3548__auto____14173;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____14174 = o;

if(cljs.core.truth_(and__3546__auto____14174))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____14174;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____14175 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____14175))
{return or__3548__auto____14175;
} else
{var or__3548__auto____14176 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____14176))
{return or__3548__auto____14176;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____14177 = o;

if(cljs.core.truth_(and__3546__auto____14177))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____14177;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____14178 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____14178))
{return or__3548__auto____14178;
} else
{var or__3548__auto____14179 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____14179))
{return or__3548__auto____14179;
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
var _reduce__14186 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____14180 = coll;

if(cljs.core.truth_(and__3546__auto____14180))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____14180;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____14181 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14181))
{return or__3548__auto____14181;
} else
{var or__3548__auto____14182 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____14182))
{return or__3548__auto____14182;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__14187 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____14183 = coll;

if(cljs.core.truth_(and__3546__auto____14183))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____14183;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____14184 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____14184))
{return or__3548__auto____14184;
} else
{var or__3548__auto____14185 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____14185))
{return or__3548__auto____14185;
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
return _reduce__14186.call(this,coll,f);
case  3 :
return _reduce__14187.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____14189 = o;

if(cljs.core.truth_(and__3546__auto____14189))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____14189;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____14190 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____14190))
{return or__3548__auto____14190;
} else
{var or__3548__auto____14191 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____14191))
{return or__3548__auto____14191;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____14192 = o;

if(cljs.core.truth_(and__3546__auto____14192))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____14192;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____14193 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____14193))
{return or__3548__auto____14193;
} else
{var or__3548__auto____14194 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____14194))
{return or__3548__auto____14194;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____14195 = o;

if(cljs.core.truth_(and__3546__auto____14195))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____14195;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____14196 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____14196))
{return or__3548__auto____14196;
} else
{var or__3548__auto____14197 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____14197))
{return or__3548__auto____14197;
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
if(cljs.core.truth_((function (){var and__3546__auto____14198 = o;

if(cljs.core.truth_(and__3546__auto____14198))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____14198;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____14199 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____14199))
{return or__3548__auto____14199;
} else
{var or__3548__auto____14200 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____14200))
{return or__3548__auto____14200;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____14201 = d;

if(cljs.core.truth_(and__3546__auto____14201))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____14201;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____14202 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____14202))
{return or__3548__auto____14202;
} else
{var or__3548__auto____14203 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____14203))
{return or__3548__auto____14203;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____14204 = this$;

if(cljs.core.truth_(and__3546__auto____14204))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____14204;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____14205 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14205))
{return or__3548__auto____14205;
} else
{var or__3548__auto____14206 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____14206))
{return or__3548__auto____14206;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____14207 = this$;

if(cljs.core.truth_(and__3546__auto____14207))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____14207;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____14208 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14208))
{return or__3548__auto____14208;
} else
{var or__3548__auto____14209 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____14209))
{return or__3548__auto____14209;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____14210 = this$;

if(cljs.core.truth_(and__3546__auto____14210))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____14210;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____14211 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____14211))
{return or__3548__auto____14211;
} else
{var or__3548__auto____14212 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____14212))
{return or__3548__auto____14212;
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
var G__14213 = null;
var G__14213__14214 = (function (o,k){
return null;
});
var G__14213__14215 = (function (o,k,not_found){
return not_found;
});
G__14213 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__14213__14214.call(this,o,k);
case  3 :
return G__14213__14215.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14213;
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
var G__14217 = null;
var G__14217__14218 = (function (_,f){
return f.call(null);
});
var G__14217__14219 = (function (_,f,start){
return start;
});
G__14217 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__14217__14218.call(this,_,f);
case  3 :
return G__14217__14219.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14217;
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
var G__14221 = null;
var G__14221__14222 = (function (_,n){
return null;
});
var G__14221__14223 = (function (_,n,not_found){
return not_found;
});
G__14221 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__14221__14222.call(this,_,n);
case  3 :
return G__14221__14223.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14221;
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
var ci_reduce__14231 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__14225 = cljs.core._nth.call(null,cicoll,0);
var n__14226 = 1;

while(true){
if(cljs.core.truth_((n__14226 < cljs.core._count.call(null,cicoll))))
{{
var G__14235 = f.call(null,val__14225,cljs.core._nth.call(null,cicoll,n__14226));
var G__14236 = (n__14226 + 1);
val__14225 = G__14235;
n__14226 = G__14236;
continue;
}
} else
{return val__14225;
}
break;
}
}
});
var ci_reduce__14232 = (function (cicoll,f,val){
var val__14227 = val;
var n__14228 = 0;

while(true){
if(cljs.core.truth_((n__14228 < cljs.core._count.call(null,cicoll))))
{{
var G__14237 = f.call(null,val__14227,cljs.core._nth.call(null,cicoll,n__14228));
var G__14238 = (n__14228 + 1);
val__14227 = G__14237;
n__14228 = G__14238;
continue;
}
} else
{return val__14227;
}
break;
}
});
var ci_reduce__14233 = (function (cicoll,f,val,idx){
var val__14229 = val;
var n__14230 = idx;

while(true){
if(cljs.core.truth_((n__14230 < cljs.core._count.call(null,cicoll))))
{{
var G__14239 = f.call(null,val__14229,cljs.core._nth.call(null,cicoll,n__14230));
var G__14240 = (n__14230 + 1);
val__14229 = G__14239;
n__14230 = G__14240;
continue;
}
} else
{return val__14229;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__14231.call(this,cicoll,f);
case  3 :
return ci_reduce__14232.call(this,cicoll,f,val);
case  4 :
return ci_reduce__14233.call(this,cicoll,f,val,idx);
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
var this__14241 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14254 = null;
var G__14254__14255 = (function (_,f){
var this__14242 = this;
return cljs.core.ci_reduce.call(null,this__14242.a,f,(this__14242.a[this__14242.i]),(this__14242.i + 1));
});
var G__14254__14256 = (function (_,f,start){
var this__14243 = this;
return cljs.core.ci_reduce.call(null,this__14243.a,f,start,this__14243.i);
});
G__14254 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__14254__14255.call(this,_,f);
case  3 :
return G__14254__14256.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14254;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__14244 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__14245 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14258 = null;
var G__14258__14259 = (function (coll,n){
var this__14246 = this;
var i__14247 = (n + this__14246.i);

if(cljs.core.truth_((i__14247 < this__14246.a.length)))
{return (this__14246.a[i__14247]);
} else
{return null;
}
});
var G__14258__14260 = (function (coll,n,not_found){
var this__14248 = this;
var i__14249 = (n + this__14248.i);

if(cljs.core.truth_((i__14249 < this__14248.a.length)))
{return (this__14248.a[i__14249]);
} else
{return not_found;
}
});
G__14258 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__14258__14259.call(this,coll,n);
case  3 :
return G__14258__14260.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14258;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__14250 = this;
return (this__14250.a.length - this__14250.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__14251 = this;
return (this__14251.a[this__14251.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__14252 = this;
if(cljs.core.truth_(((this__14252.i + 1) < this__14252.a.length)))
{return (new cljs.core.IndexedSeq(this__14252.a,(this__14252.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__14253 = this;
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
var G__14262 = null;
var G__14262__14263 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__14262__14264 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__14262 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__14262__14263.call(this,array,f);
case  3 :
return G__14262__14264.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14262;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__14266 = null;
var G__14266__14267 = (function (array,k){
return (array[k]);
});
var G__14266__14268 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__14266 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__14266__14267.call(this,array,k);
case  3 :
return G__14266__14268.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14266;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__14270 = null;
var G__14270__14271 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__14270__14272 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__14270 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__14270__14271.call(this,array,n);
case  3 :
return G__14270__14272.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14270;
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
var temp__3698__auto____14274 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14274))
{var s__14275 = temp__3698__auto____14274;

return cljs.core._first.call(null,s__14275);
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
var G__14276 = cljs.core.next.call(null,s);
s = G__14276;
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
var s__14277 = cljs.core.seq.call(null,x);
var n__14278 = 0;

while(true){
if(cljs.core.truth_(s__14277))
{{
var G__14279 = cljs.core.next.call(null,s__14277);
var G__14280 = (n__14278 + 1);
s__14277 = G__14279;
n__14278 = G__14280;
continue;
}
} else
{return n__14278;
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
var conj__14281 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__14282 = (function() { 
var G__14284__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__14285 = conj.call(null,coll,x);
var G__14286 = cljs.core.first.call(null,xs);
var G__14287 = cljs.core.next.call(null,xs);
coll = G__14285;
x = G__14286;
xs = G__14287;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__14284 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14284__delegate.call(this, coll, x, xs);
};
G__14284.cljs$lang$maxFixedArity = 2;
G__14284.cljs$lang$applyTo = (function (arglist__14288){
var coll = cljs.core.first(arglist__14288);
var x = cljs.core.first(cljs.core.next(arglist__14288));
var xs = cljs.core.rest(cljs.core.next(arglist__14288));
return G__14284__delegate.call(this, coll, x, xs);
});
return G__14284;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__14281.call(this,coll,x);
default:
return conj__14282.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__14282.cljs$lang$applyTo;
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
var nth__14289 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__14290 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__14289.call(this,coll,n);
case  3 :
return nth__14290.call(this,coll,n,not_found);
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
var get__14292 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__14293 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__14292.call(this,o,k);
case  3 :
return get__14293.call(this,o,k,not_found);
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
var assoc__14296 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__14297 = (function() { 
var G__14299__delegate = function (coll,k,v,kvs){
while(true){
var ret__14295 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__14300 = ret__14295;
var G__14301 = cljs.core.first.call(null,kvs);
var G__14302 = cljs.core.second.call(null,kvs);
var G__14303 = cljs.core.nnext.call(null,kvs);
coll = G__14300;
k = G__14301;
v = G__14302;
kvs = G__14303;
continue;
}
} else
{return ret__14295;
}
break;
}
};
var G__14299 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14299__delegate.call(this, coll, k, v, kvs);
};
G__14299.cljs$lang$maxFixedArity = 3;
G__14299.cljs$lang$applyTo = (function (arglist__14304){
var coll = cljs.core.first(arglist__14304);
var k = cljs.core.first(cljs.core.next(arglist__14304));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14304)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14304)));
return G__14299__delegate.call(this, coll, k, v, kvs);
});
return G__14299;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__14296.call(this,coll,k,v);
default:
return assoc__14297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__14297.cljs$lang$applyTo;
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
var dissoc__14306 = (function (coll){
return coll;
});
var dissoc__14307 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__14308 = (function() { 
var G__14310__delegate = function (coll,k,ks){
while(true){
var ret__14305 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__14311 = ret__14305;
var G__14312 = cljs.core.first.call(null,ks);
var G__14313 = cljs.core.next.call(null,ks);
coll = G__14311;
k = G__14312;
ks = G__14313;
continue;
}
} else
{return ret__14305;
}
break;
}
};
var G__14310 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14310__delegate.call(this, coll, k, ks);
};
G__14310.cljs$lang$maxFixedArity = 2;
G__14310.cljs$lang$applyTo = (function (arglist__14314){
var coll = cljs.core.first(arglist__14314);
var k = cljs.core.first(cljs.core.next(arglist__14314));
var ks = cljs.core.rest(cljs.core.next(arglist__14314));
return G__14310__delegate.call(this, coll, k, ks);
});
return G__14310;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__14306.call(this,coll);
case  2 :
return dissoc__14307.call(this,coll,k);
default:
return dissoc__14308.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__14308.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____14315 = o;

if(cljs.core.truth_((function (){var and__3546__auto____14316 = x__451__auto____14315;

if(cljs.core.truth_(and__3546__auto____14316))
{var and__3546__auto____14317 = x__451__auto____14315.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14317))
{return cljs.core.not.call(null,x__451__auto____14315.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14317;
}
} else
{return and__3546__auto____14316;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____14315);
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
var disj__14319 = (function (coll){
return coll;
});
var disj__14320 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__14321 = (function() { 
var G__14323__delegate = function (coll,k,ks){
while(true){
var ret__14318 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__14324 = ret__14318;
var G__14325 = cljs.core.first.call(null,ks);
var G__14326 = cljs.core.next.call(null,ks);
coll = G__14324;
k = G__14325;
ks = G__14326;
continue;
}
} else
{return ret__14318;
}
break;
}
};
var G__14323 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14323__delegate.call(this, coll, k, ks);
};
G__14323.cljs$lang$maxFixedArity = 2;
G__14323.cljs$lang$applyTo = (function (arglist__14327){
var coll = cljs.core.first(arglist__14327);
var k = cljs.core.first(cljs.core.next(arglist__14327));
var ks = cljs.core.rest(cljs.core.next(arglist__14327));
return G__14323__delegate.call(this, coll, k, ks);
});
return G__14323;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__14319.call(this,coll);
case  2 :
return disj__14320.call(this,coll,k);
default:
return disj__14321.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__14321.cljs$lang$applyTo;
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
{var x__451__auto____14328 = x;

if(cljs.core.truth_((function (){var and__3546__auto____14329 = x__451__auto____14328;

if(cljs.core.truth_(and__3546__auto____14329))
{var and__3546__auto____14330 = x__451__auto____14328.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____14330))
{return cljs.core.not.call(null,x__451__auto____14328.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____14330;
}
} else
{return and__3546__auto____14329;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____14328);
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
{var x__451__auto____14331 = x;

if(cljs.core.truth_((function (){var and__3546__auto____14332 = x__451__auto____14331;

if(cljs.core.truth_(and__3546__auto____14332))
{var and__3546__auto____14333 = x__451__auto____14331.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____14333))
{return cljs.core.not.call(null,x__451__auto____14331.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____14333;
}
} else
{return and__3546__auto____14332;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____14331);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____14334 = x;

if(cljs.core.truth_((function (){var and__3546__auto____14335 = x__451__auto____14334;

if(cljs.core.truth_(and__3546__auto____14335))
{var and__3546__auto____14336 = x__451__auto____14334.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____14336))
{return cljs.core.not.call(null,x__451__auto____14334.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____14336;
}
} else
{return and__3546__auto____14335;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____14334);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____14337 = x;

if(cljs.core.truth_((function (){var and__3546__auto____14338 = x__451__auto____14337;

if(cljs.core.truth_(and__3546__auto____14338))
{var and__3546__auto____14339 = x__451__auto____14337.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____14339))
{return cljs.core.not.call(null,x__451__auto____14337.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____14339;
}
} else
{return and__3546__auto____14338;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____14337);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____14340 = x;

if(cljs.core.truth_((function (){var and__3546__auto____14341 = x__451__auto____14340;

if(cljs.core.truth_(and__3546__auto____14341))
{var and__3546__auto____14342 = x__451__auto____14340.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____14342))
{return cljs.core.not.call(null,x__451__auto____14340.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____14342;
}
} else
{return and__3546__auto____14341;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____14340);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____14343 = x;

if(cljs.core.truth_((function (){var and__3546__auto____14344 = x__451__auto____14343;

if(cljs.core.truth_(and__3546__auto____14344))
{var and__3546__auto____14345 = x__451__auto____14343.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____14345))
{return cljs.core.not.call(null,x__451__auto____14343.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____14345;
}
} else
{return and__3546__auto____14344;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____14343);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____14346 = x;

if(cljs.core.truth_((function (){var and__3546__auto____14347 = x__451__auto____14346;

if(cljs.core.truth_(and__3546__auto____14347))
{var and__3546__auto____14348 = x__451__auto____14346.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____14348))
{return cljs.core.not.call(null,x__451__auto____14346.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____14348;
}
} else
{return and__3546__auto____14347;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____14346);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__14349 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__14349.push(key);
}));
return keys__14349;
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
{var x__451__auto____14350 = s;

if(cljs.core.truth_((function (){var and__3546__auto____14351 = x__451__auto____14350;

if(cljs.core.truth_(and__3546__auto____14351))
{var and__3546__auto____14352 = x__451__auto____14350.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____14352))
{return cljs.core.not.call(null,x__451__auto____14350.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____14352;
}
} else
{return and__3546__auto____14351;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____14350);
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
var and__3546__auto____14353 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____14353))
{return cljs.core.not.call(null,(function (){var or__3548__auto____14354 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____14354))
{return or__3548__auto____14354;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____14353;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____14355 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____14355))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____14355;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____14356 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____14356))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____14356;
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
var and__3546__auto____14357 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____14357))
{return (n == n.toFixed());
} else
{return and__3546__auto____14357;
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
if(cljs.core.truth_((function (){var and__3546__auto____14358 = coll;

if(cljs.core.truth_(and__3546__auto____14358))
{var and__3546__auto____14359 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14359))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____14359;
}
} else
{return and__3546__auto____14358;
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
var distinct_QMARK___14364 = (function (x){
return true;
});
var distinct_QMARK___14365 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___14366 = (function() { 
var G__14368__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__14360 = cljs.core.set([y,x]);
var xs__14361 = more;

while(true){
var x__14362 = cljs.core.first.call(null,xs__14361);
var etc__14363 = cljs.core.next.call(null,xs__14361);

if(cljs.core.truth_(xs__14361))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__14360,x__14362)))
{return false;
} else
{{
var G__14369 = cljs.core.conj.call(null,s__14360,x__14362);
var G__14370 = etc__14363;
s__14360 = G__14369;
xs__14361 = G__14370;
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
var G__14368 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14368__delegate.call(this, x, y, more);
};
G__14368.cljs$lang$maxFixedArity = 2;
G__14368.cljs$lang$applyTo = (function (arglist__14371){
var x = cljs.core.first(arglist__14371);
var y = cljs.core.first(cljs.core.next(arglist__14371));
var more = cljs.core.rest(cljs.core.next(arglist__14371));
return G__14368__delegate.call(this, x, y, more);
});
return G__14368;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___14364.call(this,x);
case  2 :
return distinct_QMARK___14365.call(this,x,y);
default:
return distinct_QMARK___14366.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___14366.cljs$lang$applyTo;
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
var r__14372 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__14372)))
{return r__14372;
} else
{if(cljs.core.truth_(r__14372))
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
var sort__14374 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__14375 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__14373 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__14373,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__14373);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__14374.call(this,comp);
case  2 :
return sort__14375.call(this,comp,coll);
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
var sort_by__14377 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__14378 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__14377.call(this,keyfn,comp);
case  3 :
return sort_by__14378.call(this,keyfn,comp,coll);
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
var reduce__14380 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__14381 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__14380.call(this,f,val);
case  3 :
return reduce__14381.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__14387 = (function (f,coll){
var temp__3695__auto____14383 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14383))
{var s__14384 = temp__3695__auto____14383;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__14384),cljs.core.next.call(null,s__14384));
} else
{return f.call(null);
}
});
var seq_reduce__14388 = (function (f,val,coll){
var val__14385 = val;
var coll__14386 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__14386))
{{
var G__14390 = f.call(null,val__14385,cljs.core.first.call(null,coll__14386));
var G__14391 = cljs.core.next.call(null,coll__14386);
val__14385 = G__14390;
coll__14386 = G__14391;
continue;
}
} else
{return val__14385;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__14387.call(this,f,val);
case  3 :
return seq_reduce__14388.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__14392 = null;
var G__14392__14393 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__14392__14394 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__14392 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__14392__14393.call(this,coll,f);
case  3 :
return G__14392__14394.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14392;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___14396 = (function (){
return 0;
});
var _PLUS___14397 = (function (x){
return x;
});
var _PLUS___14398 = (function (x,y){
return (x + y);
});
var _PLUS___14399 = (function() { 
var G__14401__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__14401 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14401__delegate.call(this, x, y, more);
};
G__14401.cljs$lang$maxFixedArity = 2;
G__14401.cljs$lang$applyTo = (function (arglist__14402){
var x = cljs.core.first(arglist__14402);
var y = cljs.core.first(cljs.core.next(arglist__14402));
var more = cljs.core.rest(cljs.core.next(arglist__14402));
return G__14401__delegate.call(this, x, y, more);
});
return G__14401;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___14396.call(this);
case  1 :
return _PLUS___14397.call(this,x);
case  2 :
return _PLUS___14398.call(this,x,y);
default:
return _PLUS___14399.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___14399.cljs$lang$applyTo;
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
var ___14403 = (function (x){
return (- x);
});
var ___14404 = (function (x,y){
return (x - y);
});
var ___14405 = (function() { 
var G__14407__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__14407 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14407__delegate.call(this, x, y, more);
};
G__14407.cljs$lang$maxFixedArity = 2;
G__14407.cljs$lang$applyTo = (function (arglist__14408){
var x = cljs.core.first(arglist__14408);
var y = cljs.core.first(cljs.core.next(arglist__14408));
var more = cljs.core.rest(cljs.core.next(arglist__14408));
return G__14407__delegate.call(this, x, y, more);
});
return G__14407;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___14403.call(this,x);
case  2 :
return ___14404.call(this,x,y);
default:
return ___14405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___14405.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___14409 = (function (){
return 1;
});
var _STAR___14410 = (function (x){
return x;
});
var _STAR___14411 = (function (x,y){
return (x * y);
});
var _STAR___14412 = (function() { 
var G__14414__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__14414 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14414__delegate.call(this, x, y, more);
};
G__14414.cljs$lang$maxFixedArity = 2;
G__14414.cljs$lang$applyTo = (function (arglist__14415){
var x = cljs.core.first(arglist__14415);
var y = cljs.core.first(cljs.core.next(arglist__14415));
var more = cljs.core.rest(cljs.core.next(arglist__14415));
return G__14414__delegate.call(this, x, y, more);
});
return G__14414;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___14409.call(this);
case  1 :
return _STAR___14410.call(this,x);
case  2 :
return _STAR___14411.call(this,x,y);
default:
return _STAR___14412.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___14412.cljs$lang$applyTo;
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
var _SLASH___14416 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___14417 = (function (x,y){
return (x / y);
});
var _SLASH___14418 = (function() { 
var G__14420__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__14420 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14420__delegate.call(this, x, y, more);
};
G__14420.cljs$lang$maxFixedArity = 2;
G__14420.cljs$lang$applyTo = (function (arglist__14421){
var x = cljs.core.first(arglist__14421);
var y = cljs.core.first(cljs.core.next(arglist__14421));
var more = cljs.core.rest(cljs.core.next(arglist__14421));
return G__14420__delegate.call(this, x, y, more);
});
return G__14420;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___14416.call(this,x);
case  2 :
return _SLASH___14417.call(this,x,y);
default:
return _SLASH___14418.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___14418.cljs$lang$applyTo;
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
var _LT___14422 = (function (x){
return true;
});
var _LT___14423 = (function (x,y){
return (x < y);
});
var _LT___14424 = (function() { 
var G__14426__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__14427 = y;
var G__14428 = cljs.core.first.call(null,more);
var G__14429 = cljs.core.next.call(null,more);
x = G__14427;
y = G__14428;
more = G__14429;
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
var G__14426 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14426__delegate.call(this, x, y, more);
};
G__14426.cljs$lang$maxFixedArity = 2;
G__14426.cljs$lang$applyTo = (function (arglist__14430){
var x = cljs.core.first(arglist__14430);
var y = cljs.core.first(cljs.core.next(arglist__14430));
var more = cljs.core.rest(cljs.core.next(arglist__14430));
return G__14426__delegate.call(this, x, y, more);
});
return G__14426;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___14422.call(this,x);
case  2 :
return _LT___14423.call(this,x,y);
default:
return _LT___14424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___14424.cljs$lang$applyTo;
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
var _LT__EQ___14431 = (function (x){
return true;
});
var _LT__EQ___14432 = (function (x,y){
return (x <= y);
});
var _LT__EQ___14433 = (function() { 
var G__14435__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__14436 = y;
var G__14437 = cljs.core.first.call(null,more);
var G__14438 = cljs.core.next.call(null,more);
x = G__14436;
y = G__14437;
more = G__14438;
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
var G__14435 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14435__delegate.call(this, x, y, more);
};
G__14435.cljs$lang$maxFixedArity = 2;
G__14435.cljs$lang$applyTo = (function (arglist__14439){
var x = cljs.core.first(arglist__14439);
var y = cljs.core.first(cljs.core.next(arglist__14439));
var more = cljs.core.rest(cljs.core.next(arglist__14439));
return G__14435__delegate.call(this, x, y, more);
});
return G__14435;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___14431.call(this,x);
case  2 :
return _LT__EQ___14432.call(this,x,y);
default:
return _LT__EQ___14433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___14433.cljs$lang$applyTo;
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
var _GT___14440 = (function (x){
return true;
});
var _GT___14441 = (function (x,y){
return (x > y);
});
var _GT___14442 = (function() { 
var G__14444__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__14445 = y;
var G__14446 = cljs.core.first.call(null,more);
var G__14447 = cljs.core.next.call(null,more);
x = G__14445;
y = G__14446;
more = G__14447;
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
var G__14444 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14444__delegate.call(this, x, y, more);
};
G__14444.cljs$lang$maxFixedArity = 2;
G__14444.cljs$lang$applyTo = (function (arglist__14448){
var x = cljs.core.first(arglist__14448);
var y = cljs.core.first(cljs.core.next(arglist__14448));
var more = cljs.core.rest(cljs.core.next(arglist__14448));
return G__14444__delegate.call(this, x, y, more);
});
return G__14444;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___14440.call(this,x);
case  2 :
return _GT___14441.call(this,x,y);
default:
return _GT___14442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___14442.cljs$lang$applyTo;
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
var _GT__EQ___14449 = (function (x){
return true;
});
var _GT__EQ___14450 = (function (x,y){
return (x >= y);
});
var _GT__EQ___14451 = (function() { 
var G__14453__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__14454 = y;
var G__14455 = cljs.core.first.call(null,more);
var G__14456 = cljs.core.next.call(null,more);
x = G__14454;
y = G__14455;
more = G__14456;
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
var G__14453 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14453__delegate.call(this, x, y, more);
};
G__14453.cljs$lang$maxFixedArity = 2;
G__14453.cljs$lang$applyTo = (function (arglist__14457){
var x = cljs.core.first(arglist__14457);
var y = cljs.core.first(cljs.core.next(arglist__14457));
var more = cljs.core.rest(cljs.core.next(arglist__14457));
return G__14453__delegate.call(this, x, y, more);
});
return G__14453;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___14449.call(this,x);
case  2 :
return _GT__EQ___14450.call(this,x,y);
default:
return _GT__EQ___14451.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___14451.cljs$lang$applyTo;
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
var max__14458 = (function (x){
return x;
});
var max__14459 = (function (x,y){
return ((x > y) ? x : y);
});
var max__14460 = (function() { 
var G__14462__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__14462 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14462__delegate.call(this, x, y, more);
};
G__14462.cljs$lang$maxFixedArity = 2;
G__14462.cljs$lang$applyTo = (function (arglist__14463){
var x = cljs.core.first(arglist__14463);
var y = cljs.core.first(cljs.core.next(arglist__14463));
var more = cljs.core.rest(cljs.core.next(arglist__14463));
return G__14462__delegate.call(this, x, y, more);
});
return G__14462;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__14458.call(this,x);
case  2 :
return max__14459.call(this,x,y);
default:
return max__14460.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__14460.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__14464 = (function (x){
return x;
});
var min__14465 = (function (x,y){
return ((x < y) ? x : y);
});
var min__14466 = (function() { 
var G__14468__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__14468 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14468__delegate.call(this, x, y, more);
};
G__14468.cljs$lang$maxFixedArity = 2;
G__14468.cljs$lang$applyTo = (function (arglist__14469){
var x = cljs.core.first(arglist__14469);
var y = cljs.core.first(cljs.core.next(arglist__14469));
var more = cljs.core.rest(cljs.core.next(arglist__14469));
return G__14468__delegate.call(this, x, y, more);
});
return G__14468;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__14464.call(this,x);
case  2 :
return min__14465.call(this,x,y);
default:
return min__14466.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__14466.cljs$lang$applyTo;
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
var rem__14470 = (n % d);

return cljs.core.fix.call(null,((n - rem__14470) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__14471 = cljs.core.quot.call(null,n,d);

return (n - (d * q__14471));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14472 = (function (){
return Math.random.call(null);
});
var rand__14473 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14472.call(this);
case  1 :
return rand__14473.call(this,n);
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
var _EQ__EQ___14475 = (function (x){
return true;
});
var _EQ__EQ___14476 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___14477 = (function() { 
var G__14479__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__14480 = y;
var G__14481 = cljs.core.first.call(null,more);
var G__14482 = cljs.core.next.call(null,more);
x = G__14480;
y = G__14481;
more = G__14482;
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
var G__14479 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14479__delegate.call(this, x, y, more);
};
G__14479.cljs$lang$maxFixedArity = 2;
G__14479.cljs$lang$applyTo = (function (arglist__14483){
var x = cljs.core.first(arglist__14483);
var y = cljs.core.first(cljs.core.next(arglist__14483));
var more = cljs.core.rest(cljs.core.next(arglist__14483));
return G__14479__delegate.call(this, x, y, more);
});
return G__14479;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___14475.call(this,x);
case  2 :
return _EQ__EQ___14476.call(this,x,y);
default:
return _EQ__EQ___14477.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___14477.cljs$lang$applyTo;
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
var n__14484 = n;
var xs__14485 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14486 = xs__14485;

if(cljs.core.truth_(and__3546__auto____14486))
{return (n__14484 > 0);
} else
{return and__3546__auto____14486;
}
})()))
{{
var G__14487 = (n__14484 - 1);
var G__14488 = cljs.core.next.call(null,xs__14485);
n__14484 = G__14487;
xs__14485 = G__14488;
continue;
}
} else
{return xs__14485;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__14493 = null;
var G__14493__14494 = (function (coll,n){
var temp__3695__auto____14489 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____14489))
{var xs__14490 = temp__3695__auto____14489;

return cljs.core.first.call(null,xs__14490);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__14493__14495 = (function (coll,n,not_found){
var temp__3695__auto____14491 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____14491))
{var xs__14492 = temp__3695__auto____14491;

return cljs.core.first.call(null,xs__14492);
} else
{return not_found;
}
});
G__14493 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__14493__14494.call(this,coll,n);
case  3 :
return G__14493__14495.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14493;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___14497 = (function (){
return "";
});
var str_STAR___14498 = (function (x){
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
var str_STAR___14499 = (function() { 
var G__14501__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__14502 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__14503 = cljs.core.next.call(null,more);
sb = G__14502;
more = G__14503;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__14501 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14501__delegate.call(this, x, ys);
};
G__14501.cljs$lang$maxFixedArity = 1;
G__14501.cljs$lang$applyTo = (function (arglist__14504){
var x = cljs.core.first(arglist__14504);
var ys = cljs.core.rest(arglist__14504);
return G__14501__delegate.call(this, x, ys);
});
return G__14501;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___14497.call(this);
case  1 :
return str_STAR___14498.call(this,x);
default:
return str_STAR___14499.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___14499.cljs$lang$applyTo;
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
var str__14505 = (function (){
return "";
});
var str__14506 = (function (x){
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
var str__14507 = (function() { 
var G__14509__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__14510 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__14511 = cljs.core.next.call(null,more);
sb = G__14510;
more = G__14511;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__14509 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14509__delegate.call(this, x, ys);
};
G__14509.cljs$lang$maxFixedArity = 1;
G__14509.cljs$lang$applyTo = (function (arglist__14512){
var x = cljs.core.first(arglist__14512);
var ys = cljs.core.rest(arglist__14512);
return G__14509__delegate.call(this, x, ys);
});
return G__14509;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__14505.call(this);
case  1 :
return str__14506.call(this,x);
default:
return str__14507.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__14507.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__14513 = (function (s,start){
return s.substring(start);
});
var subs__14514 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__14513.call(this,s,start);
case  3 :
return subs__14514.call(this,s,start,end);
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
var symbol__14516 = (function (name){
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
var symbol__14517 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__14516.call(this,ns);
case  2 :
return symbol__14517.call(this,ns,name);
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
var keyword__14519 = (function (name){
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
var keyword__14520 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__14519.call(this,ns);
case  2 :
return keyword__14520.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__14522 = cljs.core.seq.call(null,x);
var ys__14523 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__14522 === null)))
{return (ys__14523 === null);
} else
{if(cljs.core.truth_((ys__14523 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__14522),cljs.core.first.call(null,ys__14523))))
{{
var G__14524 = cljs.core.next.call(null,xs__14522);
var G__14525 = cljs.core.next.call(null,ys__14523);
xs__14522 = G__14524;
ys__14523 = G__14525;
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
return cljs.core.reduce.call(null,(function (p1__14526_SHARP_,p2__14527_SHARP_){
return cljs.core.hash_combine.call(null,p1__14526_SHARP_,cljs.core.hash.call(null,p2__14527_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__14528__14529 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__14528__14529))
{var G__14531__14533 = cljs.core.first.call(null,G__14528__14529);
var vec__14532__14534 = G__14531__14533;
var key_name__14535 = cljs.core.nth.call(null,vec__14532__14534,0,null);
var f__14536 = cljs.core.nth.call(null,vec__14532__14534,1,null);
var G__14528__14537 = G__14528__14529;

var G__14531__14538 = G__14531__14533;
var G__14528__14539 = G__14528__14537;

while(true){
var vec__14540__14541 = G__14531__14538;
var key_name__14542 = cljs.core.nth.call(null,vec__14540__14541,0,null);
var f__14543 = cljs.core.nth.call(null,vec__14540__14541,1,null);
var G__14528__14544 = G__14528__14539;

var str_name__14545 = cljs.core.name.call(null,key_name__14542);

obj[str_name__14545] = f__14543;
var temp__3698__auto____14546 = cljs.core.next.call(null,G__14528__14544);

if(cljs.core.truth_(temp__3698__auto____14546))
{var G__14528__14547 = temp__3698__auto____14546;

{
var G__14548 = cljs.core.first.call(null,G__14528__14547);
var G__14549 = G__14528__14547;
G__14531__14538 = G__14548;
G__14528__14539 = G__14549;
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
var this__14550 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__14551 = this;
return (new cljs.core.List(this__14551.meta,o,coll,(this__14551.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__14552 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__14553 = this;
return this__14553.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__14554 = this;
return this__14554.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__14555 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__14556 = this;
return this__14556.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__14557 = this;
return this__14557.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__14558 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__14559 = this;
return (new cljs.core.List(meta,this__14559.first,this__14559.rest,this__14559.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__14560 = this;
return this__14560.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__14561 = this;
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
var this__14562 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__14563 = this;
return (new cljs.core.List(this__14563.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__14564 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__14565 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__14566 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__14567 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__14568 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__14569 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__14570 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__14571 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__14572 = this;
return this__14572.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__14573 = this;
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
list.cljs$lang$applyTo = (function (arglist__14574){
var items = cljs.core.seq( arglist__14574 );;
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
var this__14575 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__14576 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__14577 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__14578 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14578.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__14579 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__14580 = this;
return this__14580.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__14581 = this;
if(cljs.core.truth_((this__14581.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__14581.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__14582 = this;
return this__14582.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__14583 = this;
return (new cljs.core.Cons(meta,this__14583.first,this__14583.rest));
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
var G__14584 = null;
var G__14584__14585 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__14584__14586 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__14584 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__14584__14585.call(this,string,f);
case  3 :
return G__14584__14586.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14584;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__14588 = null;
var G__14588__14589 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__14588__14590 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__14588 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__14588__14589.call(this,string,k);
case  3 :
return G__14588__14590.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14588;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__14592 = null;
var G__14592__14593 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__14592__14594 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__14592 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__14592__14593.call(this,string,n);
case  3 :
return G__14592__14594.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14592;
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
var G__14602 = null;
var G__14602__14603 = (function (tsym14596,coll){
var tsym14596__14598 = this;

var this$__14599 = tsym14596__14598;

return cljs.core.get.call(null,coll,this$__14599.toString());
});
var G__14602__14604 = (function (tsym14597,coll,not_found){
var tsym14597__14600 = this;

var this$__14601 = tsym14597__14600;

return cljs.core.get.call(null,coll,this$__14601.toString(),not_found);
});
G__14602 = function(tsym14597,coll,not_found){
switch(arguments.length){
case  2 :
return G__14602__14603.call(this,tsym14597,coll);
case  3 :
return G__14602__14604.call(this,tsym14597,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14602;
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
var x__14606 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__14606;
} else
{lazy_seq.x = x__14606.call(null);
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
var this__14607 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__14608 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__14609 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__14610 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14610.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__14611 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__14612 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__14613 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__14614 = this;
return this__14614.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__14615 = this;
return (new cljs.core.LazySeq(meta,this__14615.realized,this__14615.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__14616 = [];

var s__14617 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14617)))
{ary__14616.push(cljs.core.first.call(null,s__14617));
{
var G__14618 = cljs.core.next.call(null,s__14617);
s__14617 = G__14618;
continue;
}
} else
{return ary__14616;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__14619 = s;
var i__14620 = n;
var sum__14621 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14622 = (i__14620 > 0);

if(cljs.core.truth_(and__3546__auto____14622))
{return cljs.core.seq.call(null,s__14619);
} else
{return and__3546__auto____14622;
}
})()))
{{
var G__14623 = cljs.core.next.call(null,s__14619);
var G__14624 = (i__14620 - 1);
var G__14625 = (sum__14621 + 1);
s__14619 = G__14623;
i__14620 = G__14624;
sum__14621 = G__14625;
continue;
}
} else
{return sum__14621;
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
var concat__14629 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__14630 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__14631 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14626 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__14626))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__14626),concat.call(null,cljs.core.rest.call(null,s__14626),y));
} else
{return y;
}
})));
});
var concat__14632 = (function() { 
var G__14634__delegate = function (x,y,zs){
var cat__14628 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__14627 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__14627))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__14627),cat.call(null,cljs.core.rest.call(null,xys__14627),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__14628.call(null,concat.call(null,x,y),zs);
};
var G__14634 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14634__delegate.call(this, x, y, zs);
};
G__14634.cljs$lang$maxFixedArity = 2;
G__14634.cljs$lang$applyTo = (function (arglist__14635){
var x = cljs.core.first(arglist__14635);
var y = cljs.core.first(cljs.core.next(arglist__14635));
var zs = cljs.core.rest(cljs.core.next(arglist__14635));
return G__14634__delegate.call(this, x, y, zs);
});
return G__14634;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__14629.call(this);
case  1 :
return concat__14630.call(this,x);
case  2 :
return concat__14631.call(this,x,y);
default:
return concat__14632.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__14632.cljs$lang$applyTo;
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
var list_STAR___14636 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___14637 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___14638 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___14639 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___14640 = (function() { 
var G__14642__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__14642 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__14642__delegate.call(this, a, b, c, d, more);
};
G__14642.cljs$lang$maxFixedArity = 4;
G__14642.cljs$lang$applyTo = (function (arglist__14643){
var a = cljs.core.first(arglist__14643);
var b = cljs.core.first(cljs.core.next(arglist__14643));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14643)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14643))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14643))));
return G__14642__delegate.call(this, a, b, c, d, more);
});
return G__14642;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___14636.call(this,a);
case  2 :
return list_STAR___14637.call(this,a,b);
case  3 :
return list_STAR___14638.call(this,a,b,c);
case  4 :
return list_STAR___14639.call(this,a,b,c,d);
default:
return list_STAR___14640.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___14640.cljs$lang$applyTo;
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
var apply__14653 = (function (f,args){
var fixed_arity__14644 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__14644 + 1)) <= fixed_arity__14644)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__14654 = (function (f,x,args){
var arglist__14645 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__14646 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__14645,fixed_arity__14646) <= fixed_arity__14646)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__14645));
} else
{return f.cljs$lang$applyTo(arglist__14645);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__14645));
}
});
var apply__14655 = (function (f,x,y,args){
var arglist__14647 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__14648 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__14647,fixed_arity__14648) <= fixed_arity__14648)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__14647));
} else
{return f.cljs$lang$applyTo(arglist__14647);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__14647));
}
});
var apply__14656 = (function (f,x,y,z,args){
var arglist__14649 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__14650 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__14649,fixed_arity__14650) <= fixed_arity__14650)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__14649));
} else
{return f.cljs$lang$applyTo(arglist__14649);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__14649));
}
});
var apply__14657 = (function() { 
var G__14659__delegate = function (f,a,b,c,d,args){
var arglist__14651 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__14652 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__14651,fixed_arity__14652) <= fixed_arity__14652)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__14651));
} else
{return f.cljs$lang$applyTo(arglist__14651);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__14651));
}
};
var G__14659 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14659__delegate.call(this, f, a, b, c, d, args);
};
G__14659.cljs$lang$maxFixedArity = 5;
G__14659.cljs$lang$applyTo = (function (arglist__14660){
var f = cljs.core.first(arglist__14660);
var a = cljs.core.first(cljs.core.next(arglist__14660));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14660)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14660))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14660)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14660)))));
return G__14659__delegate.call(this, f, a, b, c, d, args);
});
return G__14659;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__14653.call(this,f,a);
case  3 :
return apply__14654.call(this,f,a,b);
case  4 :
return apply__14655.call(this,f,a,b,c);
case  5 :
return apply__14656.call(this,f,a,b,c,d);
default:
return apply__14657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__14657.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__14661){
var obj = cljs.core.first(arglist__14661);
var f = cljs.core.first(cljs.core.next(arglist__14661));
var args = cljs.core.rest(cljs.core.next(arglist__14661));
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
var not_EQ___14662 = (function (x){
return false;
});
var not_EQ___14663 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___14664 = (function() { 
var G__14666__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__14666 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14666__delegate.call(this, x, y, more);
};
G__14666.cljs$lang$maxFixedArity = 2;
G__14666.cljs$lang$applyTo = (function (arglist__14667){
var x = cljs.core.first(arglist__14667);
var y = cljs.core.first(cljs.core.next(arglist__14667));
var more = cljs.core.rest(cljs.core.next(arglist__14667));
return G__14666__delegate.call(this, x, y, more);
});
return G__14666;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___14662.call(this,x);
case  2 :
return not_EQ___14663.call(this,x,y);
default:
return not_EQ___14664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___14664.cljs$lang$applyTo;
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
var G__14668 = pred;
var G__14669 = cljs.core.next.call(null,coll);
pred = G__14668;
coll = G__14669;
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
{var or__3548__auto____14670 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____14670))
{return or__3548__auto____14670;
} else
{{
var G__14671 = pred;
var G__14672 = cljs.core.next.call(null,coll);
pred = G__14671;
coll = G__14672;
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
var G__14673 = null;
var G__14673__14674 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__14673__14675 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__14673__14676 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__14673__14677 = (function() { 
var G__14679__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__14679 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14679__delegate.call(this, x, y, zs);
};
G__14679.cljs$lang$maxFixedArity = 2;
G__14679.cljs$lang$applyTo = (function (arglist__14680){
var x = cljs.core.first(arglist__14680);
var y = cljs.core.first(cljs.core.next(arglist__14680));
var zs = cljs.core.rest(cljs.core.next(arglist__14680));
return G__14679__delegate.call(this, x, y, zs);
});
return G__14679;
})()
;
G__14673 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__14673__14674.call(this);
case  1 :
return G__14673__14675.call(this,x);
case  2 :
return G__14673__14676.call(this,x,y);
default:
return G__14673__14677.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14673.cljs$lang$maxFixedArity = 2;
G__14673.cljs$lang$applyTo = G__14673__14677.cljs$lang$applyTo;
return G__14673;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__14681__delegate = function (args){
return x;
};
var G__14681 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14681__delegate.call(this, args);
};
G__14681.cljs$lang$maxFixedArity = 0;
G__14681.cljs$lang$applyTo = (function (arglist__14682){
var args = cljs.core.seq( arglist__14682 );;
return G__14681__delegate.call(this, args);
});
return G__14681;
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
var comp__14686 = (function (){
return cljs.core.identity;
});
var comp__14687 = (function (f){
return f;
});
var comp__14688 = (function (f,g){
return (function() {
var G__14692 = null;
var G__14692__14693 = (function (){
return f.call(null,g.call(null));
});
var G__14692__14694 = (function (x){
return f.call(null,g.call(null,x));
});
var G__14692__14695 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__14692__14696 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__14692__14697 = (function() { 
var G__14699__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14699 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14699__delegate.call(this, x, y, z, args);
};
G__14699.cljs$lang$maxFixedArity = 3;
G__14699.cljs$lang$applyTo = (function (arglist__14700){
var x = cljs.core.first(arglist__14700);
var y = cljs.core.first(cljs.core.next(arglist__14700));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14700)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14700)));
return G__14699__delegate.call(this, x, y, z, args);
});
return G__14699;
})()
;
G__14692 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14692__14693.call(this);
case  1 :
return G__14692__14694.call(this,x);
case  2 :
return G__14692__14695.call(this,x,y);
case  3 :
return G__14692__14696.call(this,x,y,z);
default:
return G__14692__14697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14692.cljs$lang$maxFixedArity = 3;
G__14692.cljs$lang$applyTo = G__14692__14697.cljs$lang$applyTo;
return G__14692;
})()
});
var comp__14689 = (function (f,g,h){
return (function() {
var G__14701 = null;
var G__14701__14702 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__14701__14703 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__14701__14704 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__14701__14705 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__14701__14706 = (function() { 
var G__14708__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__14708 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14708__delegate.call(this, x, y, z, args);
};
G__14708.cljs$lang$maxFixedArity = 3;
G__14708.cljs$lang$applyTo = (function (arglist__14709){
var x = cljs.core.first(arglist__14709);
var y = cljs.core.first(cljs.core.next(arglist__14709));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14709)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14709)));
return G__14708__delegate.call(this, x, y, z, args);
});
return G__14708;
})()
;
G__14701 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14701__14702.call(this);
case  1 :
return G__14701__14703.call(this,x);
case  2 :
return G__14701__14704.call(this,x,y);
case  3 :
return G__14701__14705.call(this,x,y,z);
default:
return G__14701__14706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14701.cljs$lang$maxFixedArity = 3;
G__14701.cljs$lang$applyTo = G__14701__14706.cljs$lang$applyTo;
return G__14701;
})()
});
var comp__14690 = (function() { 
var G__14710__delegate = function (f1,f2,f3,fs){
var fs__14683 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__14711__delegate = function (args){
var ret__14684 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__14683),args);
var fs__14685 = cljs.core.next.call(null,fs__14683);

while(true){
if(cljs.core.truth_(fs__14685))
{{
var G__14712 = cljs.core.first.call(null,fs__14685).call(null,ret__14684);
var G__14713 = cljs.core.next.call(null,fs__14685);
ret__14684 = G__14712;
fs__14685 = G__14713;
continue;
}
} else
{return ret__14684;
}
break;
}
};
var G__14711 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14711__delegate.call(this, args);
};
G__14711.cljs$lang$maxFixedArity = 0;
G__14711.cljs$lang$applyTo = (function (arglist__14714){
var args = cljs.core.seq( arglist__14714 );;
return G__14711__delegate.call(this, args);
});
return G__14711;
})()
;
};
var G__14710 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14710__delegate.call(this, f1, f2, f3, fs);
};
G__14710.cljs$lang$maxFixedArity = 3;
G__14710.cljs$lang$applyTo = (function (arglist__14715){
var f1 = cljs.core.first(arglist__14715);
var f2 = cljs.core.first(cljs.core.next(arglist__14715));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14715)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14715)));
return G__14710__delegate.call(this, f1, f2, f3, fs);
});
return G__14710;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__14686.call(this);
case  1 :
return comp__14687.call(this,f1);
case  2 :
return comp__14688.call(this,f1,f2);
case  3 :
return comp__14689.call(this,f1,f2,f3);
default:
return comp__14690.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__14690.cljs$lang$applyTo;
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
var partial__14716 = (function (f,arg1){
return (function() { 
var G__14721__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__14721 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14721__delegate.call(this, args);
};
G__14721.cljs$lang$maxFixedArity = 0;
G__14721.cljs$lang$applyTo = (function (arglist__14722){
var args = cljs.core.seq( arglist__14722 );;
return G__14721__delegate.call(this, args);
});
return G__14721;
})()
;
});
var partial__14717 = (function (f,arg1,arg2){
return (function() { 
var G__14723__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__14723 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14723__delegate.call(this, args);
};
G__14723.cljs$lang$maxFixedArity = 0;
G__14723.cljs$lang$applyTo = (function (arglist__14724){
var args = cljs.core.seq( arglist__14724 );;
return G__14723__delegate.call(this, args);
});
return G__14723;
})()
;
});
var partial__14718 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__14725__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__14725 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14725__delegate.call(this, args);
};
G__14725.cljs$lang$maxFixedArity = 0;
G__14725.cljs$lang$applyTo = (function (arglist__14726){
var args = cljs.core.seq( arglist__14726 );;
return G__14725__delegate.call(this, args);
});
return G__14725;
})()
;
});
var partial__14719 = (function() { 
var G__14727__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__14728__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__14728 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14728__delegate.call(this, args);
};
G__14728.cljs$lang$maxFixedArity = 0;
G__14728.cljs$lang$applyTo = (function (arglist__14729){
var args = cljs.core.seq( arglist__14729 );;
return G__14728__delegate.call(this, args);
});
return G__14728;
})()
;
};
var G__14727 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__14727__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__14727.cljs$lang$maxFixedArity = 4;
G__14727.cljs$lang$applyTo = (function (arglist__14730){
var f = cljs.core.first(arglist__14730);
var arg1 = cljs.core.first(cljs.core.next(arglist__14730));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14730)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14730))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14730))));
return G__14727__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__14727;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__14716.call(this,f,arg1);
case  3 :
return partial__14717.call(this,f,arg1,arg2);
case  4 :
return partial__14718.call(this,f,arg1,arg2,arg3);
default:
return partial__14719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__14719.cljs$lang$applyTo;
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
var fnil__14731 = (function (f,x){
return (function() {
var G__14735 = null;
var G__14735__14736 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__14735__14737 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__14735__14738 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__14735__14739 = (function() { 
var G__14741__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__14741 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14741__delegate.call(this, a, b, c, ds);
};
G__14741.cljs$lang$maxFixedArity = 3;
G__14741.cljs$lang$applyTo = (function (arglist__14742){
var a = cljs.core.first(arglist__14742);
var b = cljs.core.first(cljs.core.next(arglist__14742));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14742)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14742)));
return G__14741__delegate.call(this, a, b, c, ds);
});
return G__14741;
})()
;
G__14735 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__14735__14736.call(this,a);
case  2 :
return G__14735__14737.call(this,a,b);
case  3 :
return G__14735__14738.call(this,a,b,c);
default:
return G__14735__14739.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14735.cljs$lang$maxFixedArity = 3;
G__14735.cljs$lang$applyTo = G__14735__14739.cljs$lang$applyTo;
return G__14735;
})()
});
var fnil__14732 = (function (f,x,y){
return (function() {
var G__14743 = null;
var G__14743__14744 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__14743__14745 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__14743__14746 = (function() { 
var G__14748__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__14748 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14748__delegate.call(this, a, b, c, ds);
};
G__14748.cljs$lang$maxFixedArity = 3;
G__14748.cljs$lang$applyTo = (function (arglist__14749){
var a = cljs.core.first(arglist__14749);
var b = cljs.core.first(cljs.core.next(arglist__14749));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14749)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14749)));
return G__14748__delegate.call(this, a, b, c, ds);
});
return G__14748;
})()
;
G__14743 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__14743__14744.call(this,a,b);
case  3 :
return G__14743__14745.call(this,a,b,c);
default:
return G__14743__14746.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14743.cljs$lang$maxFixedArity = 3;
G__14743.cljs$lang$applyTo = G__14743__14746.cljs$lang$applyTo;
return G__14743;
})()
});
var fnil__14733 = (function (f,x,y,z){
return (function() {
var G__14750 = null;
var G__14750__14751 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__14750__14752 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__14750__14753 = (function() { 
var G__14755__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__14755 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14755__delegate.call(this, a, b, c, ds);
};
G__14755.cljs$lang$maxFixedArity = 3;
G__14755.cljs$lang$applyTo = (function (arglist__14756){
var a = cljs.core.first(arglist__14756);
var b = cljs.core.first(cljs.core.next(arglist__14756));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14756)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14756)));
return G__14755__delegate.call(this, a, b, c, ds);
});
return G__14755;
})()
;
G__14750 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__14750__14751.call(this,a,b);
case  3 :
return G__14750__14752.call(this,a,b,c);
default:
return G__14750__14753.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14750.cljs$lang$maxFixedArity = 3;
G__14750.cljs$lang$applyTo = G__14750__14753.cljs$lang$applyTo;
return G__14750;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__14731.call(this,f,x);
case  3 :
return fnil__14732.call(this,f,x,y);
case  4 :
return fnil__14733.call(this,f,x,y,z);
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
var mapi__14759 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14757 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14757))
{var s__14758 = temp__3698__auto____14757;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__14758)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__14758)));
} else
{return null;
}
})));
});

return mapi__14759.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14760 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14760))
{var s__14761 = temp__3698__auto____14760;

var x__14762 = f.call(null,cljs.core.first.call(null,s__14761));

if(cljs.core.truth_((x__14762 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__14761));
} else
{return cljs.core.cons.call(null,x__14762,keep.call(null,f,cljs.core.rest.call(null,s__14761)));
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
var keepi__14772 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14769 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14769))
{var s__14770 = temp__3698__auto____14769;

var x__14771 = f.call(null,idx,cljs.core.first.call(null,s__14770));

if(cljs.core.truth_((x__14771 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__14770));
} else
{return cljs.core.cons.call(null,x__14771,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__14770)));
}
} else
{return null;
}
})));
});

return keepi__14772.call(null,0,coll);
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
var every_pred__14817 = (function (p){
return (function() {
var ep1 = null;
var ep1__14822 = (function (){
return true;
});
var ep1__14823 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__14824 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____14779 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____14779))
{return p.call(null,y);
} else
{return and__3546__auto____14779;
}
})());
});
var ep1__14825 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____14780 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____14780))
{var and__3546__auto____14781 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____14781))
{return p.call(null,z);
} else
{return and__3546__auto____14781;
}
} else
{return and__3546__auto____14780;
}
})());
});
var ep1__14826 = (function() { 
var G__14828__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____14782 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____14782))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____14782;
}
})());
};
var G__14828 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14828__delegate.call(this, x, y, z, args);
};
G__14828.cljs$lang$maxFixedArity = 3;
G__14828.cljs$lang$applyTo = (function (arglist__14829){
var x = cljs.core.first(arglist__14829);
var y = cljs.core.first(cljs.core.next(arglist__14829));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14829)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14829)));
return G__14828__delegate.call(this, x, y, z, args);
});
return G__14828;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__14822.call(this);
case  1 :
return ep1__14823.call(this,x);
case  2 :
return ep1__14824.call(this,x,y);
case  3 :
return ep1__14825.call(this,x,y,z);
default:
return ep1__14826.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__14826.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__14818 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__14830 = (function (){
return true;
});
var ep2__14831 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____14783 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____14783))
{return p2.call(null,x);
} else
{return and__3546__auto____14783;
}
})());
});
var ep2__14832 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____14784 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____14784))
{var and__3546__auto____14785 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____14785))
{var and__3546__auto____14786 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____14786))
{return p2.call(null,y);
} else
{return and__3546__auto____14786;
}
} else
{return and__3546__auto____14785;
}
} else
{return and__3546__auto____14784;
}
})());
});
var ep2__14833 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____14787 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____14787))
{var and__3546__auto____14788 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____14788))
{var and__3546__auto____14789 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____14789))
{var and__3546__auto____14790 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____14790))
{var and__3546__auto____14791 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____14791))
{return p2.call(null,z);
} else
{return and__3546__auto____14791;
}
} else
{return and__3546__auto____14790;
}
} else
{return and__3546__auto____14789;
}
} else
{return and__3546__auto____14788;
}
} else
{return and__3546__auto____14787;
}
})());
});
var ep2__14834 = (function() { 
var G__14836__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____14792 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____14792))
{return cljs.core.every_QMARK_.call(null,(function (p1__14763_SHARP_){
var and__3546__auto____14793 = p1.call(null,p1__14763_SHARP_);

if(cljs.core.truth_(and__3546__auto____14793))
{return p2.call(null,p1__14763_SHARP_);
} else
{return and__3546__auto____14793;
}
}),args);
} else
{return and__3546__auto____14792;
}
})());
};
var G__14836 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14836__delegate.call(this, x, y, z, args);
};
G__14836.cljs$lang$maxFixedArity = 3;
G__14836.cljs$lang$applyTo = (function (arglist__14837){
var x = cljs.core.first(arglist__14837);
var y = cljs.core.first(cljs.core.next(arglist__14837));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14837)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14837)));
return G__14836__delegate.call(this, x, y, z, args);
});
return G__14836;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__14830.call(this);
case  1 :
return ep2__14831.call(this,x);
case  2 :
return ep2__14832.call(this,x,y);
case  3 :
return ep2__14833.call(this,x,y,z);
default:
return ep2__14834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__14834.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__14819 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__14838 = (function (){
return true;
});
var ep3__14839 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____14794 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____14794))
{var and__3546__auto____14795 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____14795))
{return p3.call(null,x);
} else
{return and__3546__auto____14795;
}
} else
{return and__3546__auto____14794;
}
})());
});
var ep3__14840 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____14796 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____14796))
{var and__3546__auto____14797 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____14797))
{var and__3546__auto____14798 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____14798))
{var and__3546__auto____14799 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____14799))
{var and__3546__auto____14800 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____14800))
{return p3.call(null,y);
} else
{return and__3546__auto____14800;
}
} else
{return and__3546__auto____14799;
}
} else
{return and__3546__auto____14798;
}
} else
{return and__3546__auto____14797;
}
} else
{return and__3546__auto____14796;
}
})());
});
var ep3__14841 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____14801 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____14801))
{var and__3546__auto____14802 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____14802))
{var and__3546__auto____14803 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____14803))
{var and__3546__auto____14804 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____14804))
{var and__3546__auto____14805 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____14805))
{var and__3546__auto____14806 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____14806))
{var and__3546__auto____14807 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____14807))
{var and__3546__auto____14808 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____14808))
{return p3.call(null,z);
} else
{return and__3546__auto____14808;
}
} else
{return and__3546__auto____14807;
}
} else
{return and__3546__auto____14806;
}
} else
{return and__3546__auto____14805;
}
} else
{return and__3546__auto____14804;
}
} else
{return and__3546__auto____14803;
}
} else
{return and__3546__auto____14802;
}
} else
{return and__3546__auto____14801;
}
})());
});
var ep3__14842 = (function() { 
var G__14844__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____14809 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____14809))
{return cljs.core.every_QMARK_.call(null,(function (p1__14764_SHARP_){
var and__3546__auto____14810 = p1.call(null,p1__14764_SHARP_);

if(cljs.core.truth_(and__3546__auto____14810))
{var and__3546__auto____14811 = p2.call(null,p1__14764_SHARP_);

if(cljs.core.truth_(and__3546__auto____14811))
{return p3.call(null,p1__14764_SHARP_);
} else
{return and__3546__auto____14811;
}
} else
{return and__3546__auto____14810;
}
}),args);
} else
{return and__3546__auto____14809;
}
})());
};
var G__14844 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14844__delegate.call(this, x, y, z, args);
};
G__14844.cljs$lang$maxFixedArity = 3;
G__14844.cljs$lang$applyTo = (function (arglist__14845){
var x = cljs.core.first(arglist__14845);
var y = cljs.core.first(cljs.core.next(arglist__14845));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14845)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14845)));
return G__14844__delegate.call(this, x, y, z, args);
});
return G__14844;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__14838.call(this);
case  1 :
return ep3__14839.call(this,x);
case  2 :
return ep3__14840.call(this,x,y);
case  3 :
return ep3__14841.call(this,x,y,z);
default:
return ep3__14842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__14842.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__14820 = (function() { 
var G__14846__delegate = function (p1,p2,p3,ps){
var ps__14812 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__14847 = (function (){
return true;
});
var epn__14848 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__14765_SHARP_){
return p1__14765_SHARP_.call(null,x);
}),ps__14812);
});
var epn__14849 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__14766_SHARP_){
var and__3546__auto____14813 = p1__14766_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____14813))
{return p1__14766_SHARP_.call(null,y);
} else
{return and__3546__auto____14813;
}
}),ps__14812);
});
var epn__14850 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__14767_SHARP_){
var and__3546__auto____14814 = p1__14767_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____14814))
{var and__3546__auto____14815 = p1__14767_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____14815))
{return p1__14767_SHARP_.call(null,z);
} else
{return and__3546__auto____14815;
}
} else
{return and__3546__auto____14814;
}
}),ps__14812);
});
var epn__14851 = (function() { 
var G__14853__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____14816 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____14816))
{return cljs.core.every_QMARK_.call(null,(function (p1__14768_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__14768_SHARP_,args);
}),ps__14812);
} else
{return and__3546__auto____14816;
}
})());
};
var G__14853 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14853__delegate.call(this, x, y, z, args);
};
G__14853.cljs$lang$maxFixedArity = 3;
G__14853.cljs$lang$applyTo = (function (arglist__14854){
var x = cljs.core.first(arglist__14854);
var y = cljs.core.first(cljs.core.next(arglist__14854));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14854)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14854)));
return G__14853__delegate.call(this, x, y, z, args);
});
return G__14853;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__14847.call(this);
case  1 :
return epn__14848.call(this,x);
case  2 :
return epn__14849.call(this,x,y);
case  3 :
return epn__14850.call(this,x,y,z);
default:
return epn__14851.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__14851.cljs$lang$applyTo;
return epn;
})()
};
var G__14846 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14846__delegate.call(this, p1, p2, p3, ps);
};
G__14846.cljs$lang$maxFixedArity = 3;
G__14846.cljs$lang$applyTo = (function (arglist__14855){
var p1 = cljs.core.first(arglist__14855);
var p2 = cljs.core.first(cljs.core.next(arglist__14855));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14855)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14855)));
return G__14846__delegate.call(this, p1, p2, p3, ps);
});
return G__14846;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__14817.call(this,p1);
case  2 :
return every_pred__14818.call(this,p1,p2);
case  3 :
return every_pred__14819.call(this,p1,p2,p3);
default:
return every_pred__14820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__14820.cljs$lang$applyTo;
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
var some_fn__14895 = (function (p){
return (function() {
var sp1 = null;
var sp1__14900 = (function (){
return null;
});
var sp1__14901 = (function (x){
return p.call(null,x);
});
var sp1__14902 = (function (x,y){
var or__3548__auto____14857 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____14857))
{return or__3548__auto____14857;
} else
{return p.call(null,y);
}
});
var sp1__14903 = (function (x,y,z){
var or__3548__auto____14858 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____14858))
{return or__3548__auto____14858;
} else
{var or__3548__auto____14859 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____14859))
{return or__3548__auto____14859;
} else
{return p.call(null,z);
}
}
});
var sp1__14904 = (function() { 
var G__14906__delegate = function (x,y,z,args){
var or__3548__auto____14860 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____14860))
{return or__3548__auto____14860;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__14906 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14906__delegate.call(this, x, y, z, args);
};
G__14906.cljs$lang$maxFixedArity = 3;
G__14906.cljs$lang$applyTo = (function (arglist__14907){
var x = cljs.core.first(arglist__14907);
var y = cljs.core.first(cljs.core.next(arglist__14907));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14907)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14907)));
return G__14906__delegate.call(this, x, y, z, args);
});
return G__14906;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__14900.call(this);
case  1 :
return sp1__14901.call(this,x);
case  2 :
return sp1__14902.call(this,x,y);
case  3 :
return sp1__14903.call(this,x,y,z);
default:
return sp1__14904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__14904.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__14896 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__14908 = (function (){
return null;
});
var sp2__14909 = (function (x){
var or__3548__auto____14861 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____14861))
{return or__3548__auto____14861;
} else
{return p2.call(null,x);
}
});
var sp2__14910 = (function (x,y){
var or__3548__auto____14862 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____14862))
{return or__3548__auto____14862;
} else
{var or__3548__auto____14863 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____14863))
{return or__3548__auto____14863;
} else
{var or__3548__auto____14864 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____14864))
{return or__3548__auto____14864;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__14911 = (function (x,y,z){
var or__3548__auto____14865 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____14865))
{return or__3548__auto____14865;
} else
{var or__3548__auto____14866 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____14866))
{return or__3548__auto____14866;
} else
{var or__3548__auto____14867 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____14867))
{return or__3548__auto____14867;
} else
{var or__3548__auto____14868 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____14868))
{return or__3548__auto____14868;
} else
{var or__3548__auto____14869 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____14869))
{return or__3548__auto____14869;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__14912 = (function() { 
var G__14914__delegate = function (x,y,z,args){
var or__3548__auto____14870 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____14870))
{return or__3548__auto____14870;
} else
{return cljs.core.some.call(null,(function (p1__14773_SHARP_){
var or__3548__auto____14871 = p1.call(null,p1__14773_SHARP_);

if(cljs.core.truth_(or__3548__auto____14871))
{return or__3548__auto____14871;
} else
{return p2.call(null,p1__14773_SHARP_);
}
}),args);
}
};
var G__14914 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14914__delegate.call(this, x, y, z, args);
};
G__14914.cljs$lang$maxFixedArity = 3;
G__14914.cljs$lang$applyTo = (function (arglist__14915){
var x = cljs.core.first(arglist__14915);
var y = cljs.core.first(cljs.core.next(arglist__14915));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14915)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14915)));
return G__14914__delegate.call(this, x, y, z, args);
});
return G__14914;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__14908.call(this);
case  1 :
return sp2__14909.call(this,x);
case  2 :
return sp2__14910.call(this,x,y);
case  3 :
return sp2__14911.call(this,x,y,z);
default:
return sp2__14912.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__14912.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__14897 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__14916 = (function (){
return null;
});
var sp3__14917 = (function (x){
var or__3548__auto____14872 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____14872))
{return or__3548__auto____14872;
} else
{var or__3548__auto____14873 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____14873))
{return or__3548__auto____14873;
} else
{return p3.call(null,x);
}
}
});
var sp3__14918 = (function (x,y){
var or__3548__auto____14874 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____14874))
{return or__3548__auto____14874;
} else
{var or__3548__auto____14875 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____14875))
{return or__3548__auto____14875;
} else
{var or__3548__auto____14876 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____14876))
{return or__3548__auto____14876;
} else
{var or__3548__auto____14877 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____14877))
{return or__3548__auto____14877;
} else
{var or__3548__auto____14878 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____14878))
{return or__3548__auto____14878;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__14919 = (function (x,y,z){
var or__3548__auto____14879 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____14879))
{return or__3548__auto____14879;
} else
{var or__3548__auto____14880 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____14880))
{return or__3548__auto____14880;
} else
{var or__3548__auto____14881 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____14881))
{return or__3548__auto____14881;
} else
{var or__3548__auto____14882 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____14882))
{return or__3548__auto____14882;
} else
{var or__3548__auto____14883 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____14883))
{return or__3548__auto____14883;
} else
{var or__3548__auto____14884 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____14884))
{return or__3548__auto____14884;
} else
{var or__3548__auto____14885 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____14885))
{return or__3548__auto____14885;
} else
{var or__3548__auto____14886 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____14886))
{return or__3548__auto____14886;
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
var sp3__14920 = (function() { 
var G__14922__delegate = function (x,y,z,args){
var or__3548__auto____14887 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____14887))
{return or__3548__auto____14887;
} else
{return cljs.core.some.call(null,(function (p1__14774_SHARP_){
var or__3548__auto____14888 = p1.call(null,p1__14774_SHARP_);

if(cljs.core.truth_(or__3548__auto____14888))
{return or__3548__auto____14888;
} else
{var or__3548__auto____14889 = p2.call(null,p1__14774_SHARP_);

if(cljs.core.truth_(or__3548__auto____14889))
{return or__3548__auto____14889;
} else
{return p3.call(null,p1__14774_SHARP_);
}
}
}),args);
}
};
var G__14922 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14922__delegate.call(this, x, y, z, args);
};
G__14922.cljs$lang$maxFixedArity = 3;
G__14922.cljs$lang$applyTo = (function (arglist__14923){
var x = cljs.core.first(arglist__14923);
var y = cljs.core.first(cljs.core.next(arglist__14923));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14923)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14923)));
return G__14922__delegate.call(this, x, y, z, args);
});
return G__14922;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__14916.call(this);
case  1 :
return sp3__14917.call(this,x);
case  2 :
return sp3__14918.call(this,x,y);
case  3 :
return sp3__14919.call(this,x,y,z);
default:
return sp3__14920.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__14920.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__14898 = (function() { 
var G__14924__delegate = function (p1,p2,p3,ps){
var ps__14890 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__14925 = (function (){
return null;
});
var spn__14926 = (function (x){
return cljs.core.some.call(null,(function (p1__14775_SHARP_){
return p1__14775_SHARP_.call(null,x);
}),ps__14890);
});
var spn__14927 = (function (x,y){
return cljs.core.some.call(null,(function (p1__14776_SHARP_){
var or__3548__auto____14891 = p1__14776_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____14891))
{return or__3548__auto____14891;
} else
{return p1__14776_SHARP_.call(null,y);
}
}),ps__14890);
});
var spn__14928 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__14777_SHARP_){
var or__3548__auto____14892 = p1__14777_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____14892))
{return or__3548__auto____14892;
} else
{var or__3548__auto____14893 = p1__14777_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____14893))
{return or__3548__auto____14893;
} else
{return p1__14777_SHARP_.call(null,z);
}
}
}),ps__14890);
});
var spn__14929 = (function() { 
var G__14931__delegate = function (x,y,z,args){
var or__3548__auto____14894 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____14894))
{return or__3548__auto____14894;
} else
{return cljs.core.some.call(null,(function (p1__14778_SHARP_){
return cljs.core.some.call(null,p1__14778_SHARP_,args);
}),ps__14890);
}
};
var G__14931 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14931__delegate.call(this, x, y, z, args);
};
G__14931.cljs$lang$maxFixedArity = 3;
G__14931.cljs$lang$applyTo = (function (arglist__14932){
var x = cljs.core.first(arglist__14932);
var y = cljs.core.first(cljs.core.next(arglist__14932));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14932)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14932)));
return G__14931__delegate.call(this, x, y, z, args);
});
return G__14931;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__14925.call(this);
case  1 :
return spn__14926.call(this,x);
case  2 :
return spn__14927.call(this,x,y);
case  3 :
return spn__14928.call(this,x,y,z);
default:
return spn__14929.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__14929.cljs$lang$applyTo;
return spn;
})()
};
var G__14924 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14924__delegate.call(this, p1, p2, p3, ps);
};
G__14924.cljs$lang$maxFixedArity = 3;
G__14924.cljs$lang$applyTo = (function (arglist__14933){
var p1 = cljs.core.first(arglist__14933);
var p2 = cljs.core.first(cljs.core.next(arglist__14933));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14933)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14933)));
return G__14924__delegate.call(this, p1, p2, p3, ps);
});
return G__14924;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__14895.call(this,p1);
case  2 :
return some_fn__14896.call(this,p1,p2);
case  3 :
return some_fn__14897.call(this,p1,p2,p3);
default:
return some_fn__14898.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__14898.cljs$lang$applyTo;
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
var map__14946 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14934 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14934))
{var s__14935 = temp__3698__auto____14934;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__14935)),map.call(null,f,cljs.core.rest.call(null,s__14935)));
} else
{return null;
}
})));
});
var map__14947 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__14936 = cljs.core.seq.call(null,c1);
var s2__14937 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____14938 = s1__14936;

if(cljs.core.truth_(and__3546__auto____14938))
{return s2__14937;
} else
{return and__3546__auto____14938;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__14936),cljs.core.first.call(null,s2__14937)),map.call(null,f,cljs.core.rest.call(null,s1__14936),cljs.core.rest.call(null,s2__14937)));
} else
{return null;
}
})));
});
var map__14948 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__14939 = cljs.core.seq.call(null,c1);
var s2__14940 = cljs.core.seq.call(null,c2);
var s3__14941 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____14942 = s1__14939;

if(cljs.core.truth_(and__3546__auto____14942))
{var and__3546__auto____14943 = s2__14940;

if(cljs.core.truth_(and__3546__auto____14943))
{return s3__14941;
} else
{return and__3546__auto____14943;
}
} else
{return and__3546__auto____14942;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__14939),cljs.core.first.call(null,s2__14940),cljs.core.first.call(null,s3__14941)),map.call(null,f,cljs.core.rest.call(null,s1__14939),cljs.core.rest.call(null,s2__14940),cljs.core.rest.call(null,s3__14941)));
} else
{return null;
}
})));
});
var map__14949 = (function() { 
var G__14951__delegate = function (f,c1,c2,c3,colls){
var step__14945 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__14944 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__14944)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__14944),step.call(null,map.call(null,cljs.core.rest,ss__14944)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__14856_SHARP_){
return cljs.core.apply.call(null,f,p1__14856_SHARP_);
}),step__14945.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__14951 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__14951__delegate.call(this, f, c1, c2, c3, colls);
};
G__14951.cljs$lang$maxFixedArity = 4;
G__14951.cljs$lang$applyTo = (function (arglist__14952){
var f = cljs.core.first(arglist__14952);
var c1 = cljs.core.first(cljs.core.next(arglist__14952));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14952)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14952))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14952))));
return G__14951__delegate.call(this, f, c1, c2, c3, colls);
});
return G__14951;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__14946.call(this,f,c1);
case  3 :
return map__14947.call(this,f,c1,c2);
case  4 :
return map__14948.call(this,f,c1,c2,c3);
default:
return map__14949.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__14949.cljs$lang$applyTo;
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
{var temp__3698__auto____14953 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14953))
{var s__14954 = temp__3698__auto____14953;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14954),take.call(null,(n - 1),cljs.core.rest.call(null,s__14954)));
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
var step__14957 = (function (n,coll){
while(true){
var s__14955 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____14956 = (n > 0);

if(cljs.core.truth_(and__3546__auto____14956))
{return s__14955;
} else
{return and__3546__auto____14956;
}
})()))
{{
var G__14958 = (n - 1);
var G__14959 = cljs.core.rest.call(null,s__14955);
n = G__14958;
coll = G__14959;
continue;
}
} else
{return s__14955;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__14957.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__14960 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__14961 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__14960.call(this,n);
case  2 :
return drop_last__14961.call(this,n,s);
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
var s__14963 = cljs.core.seq.call(null,coll);
var lead__14964 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__14964))
{{
var G__14965 = cljs.core.next.call(null,s__14963);
var G__14966 = cljs.core.next.call(null,lead__14964);
s__14963 = G__14965;
lead__14964 = G__14966;
continue;
}
} else
{return s__14963;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__14969 = (function (pred,coll){
while(true){
var s__14967 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____14968 = s__14967;

if(cljs.core.truth_(and__3546__auto____14968))
{return pred.call(null,cljs.core.first.call(null,s__14967));
} else
{return and__3546__auto____14968;
}
})()))
{{
var G__14970 = pred;
var G__14971 = cljs.core.rest.call(null,s__14967);
pred = G__14970;
coll = G__14971;
continue;
}
} else
{return s__14967;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__14969.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14972 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14972))
{var s__14973 = temp__3698__auto____14972;

return cljs.core.concat.call(null,s__14973,cycle.call(null,s__14973));
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
var repeat__14974 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__14975 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__14974.call(this,n);
case  2 :
return repeat__14975.call(this,n,x);
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
var repeatedly__14977 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__14978 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__14977.call(this,n);
case  2 :
return repeatedly__14978.call(this,n,f);
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
var interleave__14984 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__14980 = cljs.core.seq.call(null,c1);
var s2__14981 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____14982 = s1__14980;

if(cljs.core.truth_(and__3546__auto____14982))
{return s2__14981;
} else
{return and__3546__auto____14982;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__14980),cljs.core.cons.call(null,cljs.core.first.call(null,s2__14981),interleave.call(null,cljs.core.rest.call(null,s1__14980),cljs.core.rest.call(null,s2__14981))));
} else
{return null;
}
})));
});
var interleave__14985 = (function() { 
var G__14987__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__14983 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__14983)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__14983),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__14983)));
} else
{return null;
}
})));
};
var G__14987 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14987__delegate.call(this, c1, c2, colls);
};
G__14987.cljs$lang$maxFixedArity = 2;
G__14987.cljs$lang$applyTo = (function (arglist__14988){
var c1 = cljs.core.first(arglist__14988);
var c2 = cljs.core.first(cljs.core.next(arglist__14988));
var colls = cljs.core.rest(cljs.core.next(arglist__14988));
return G__14987__delegate.call(this, c1, c2, colls);
});
return G__14987;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__14984.call(this,c1,c2);
default:
return interleave__14985.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__14985.cljs$lang$applyTo;
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
var cat__14991 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14989 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14989))
{var coll__14990 = temp__3695__auto____14989;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__14990),cat.call(null,cljs.core.rest.call(null,coll__14990),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__14991.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__14992 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__14993 = (function() { 
var G__14995__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__14995 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14995__delegate.call(this, f, coll, colls);
};
G__14995.cljs$lang$maxFixedArity = 2;
G__14995.cljs$lang$applyTo = (function (arglist__14996){
var f = cljs.core.first(arglist__14996);
var coll = cljs.core.first(cljs.core.next(arglist__14996));
var colls = cljs.core.rest(cljs.core.next(arglist__14996));
return G__14995__delegate.call(this, f, coll, colls);
});
return G__14995;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__14992.call(this,f,coll);
default:
return mapcat__14993.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__14993.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14997 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14997))
{var s__14998 = temp__3698__auto____14997;

var f__14999 = cljs.core.first.call(null,s__14998);
var r__15000 = cljs.core.rest.call(null,s__14998);

if(cljs.core.truth_(pred.call(null,f__14999)))
{return cljs.core.cons.call(null,f__14999,filter.call(null,pred,r__15000));
} else
{return filter.call(null,pred,r__15000);
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
var walk__15002 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__15002.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__15001_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__15001_SHARP_));
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
var partition__15009 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__15010 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____15003 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____15003))
{var s__15004 = temp__3698__auto____15003;

var p__15005 = cljs.core.take.call(null,n,s__15004);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__15005))))
{return cljs.core.cons.call(null,p__15005,partition.call(null,n,step,cljs.core.drop.call(null,step,s__15004)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__15011 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____15006 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____15006))
{var s__15007 = temp__3698__auto____15006;

var p__15008 = cljs.core.take.call(null,n,s__15007);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__15008))))
{return cljs.core.cons.call(null,p__15008,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__15007)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__15008,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__15009.call(this,n,step);
case  3 :
return partition__15010.call(this,n,step,pad);
case  4 :
return partition__15011.call(this,n,step,pad,coll);
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
var get_in__15017 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__15018 = (function (m,ks,not_found){
var sentinel__15013 = cljs.core.lookup_sentinel;
var m__15014 = m;
var ks__15015 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__15015))
{var m__15016 = cljs.core.get.call(null,m__15014,cljs.core.first.call(null,ks__15015),sentinel__15013);

if(cljs.core.truth_((sentinel__15013 === m__15016)))
{return not_found;
} else
{{
var G__15020 = sentinel__15013;
var G__15021 = m__15016;
var G__15022 = cljs.core.next.call(null,ks__15015);
sentinel__15013 = G__15020;
m__15014 = G__15021;
ks__15015 = G__15022;
continue;
}
}
} else
{return m__15014;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__15017.call(this,m,ks);
case  3 :
return get_in__15018.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__15023,v){
var vec__15024__15025 = p__15023;
var k__15026 = cljs.core.nth.call(null,vec__15024__15025,0,null);
var ks__15027 = cljs.core.nthnext.call(null,vec__15024__15025,1);

if(cljs.core.truth_(ks__15027))
{return cljs.core.assoc.call(null,m,k__15026,assoc_in.call(null,cljs.core.get.call(null,m,k__15026),ks__15027,v));
} else
{return cljs.core.assoc.call(null,m,k__15026,v);
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
var update_in__delegate = function (m,p__15028,f,args){
var vec__15029__15030 = p__15028;
var k__15031 = cljs.core.nth.call(null,vec__15029__15030,0,null);
var ks__15032 = cljs.core.nthnext.call(null,vec__15029__15030,1);

if(cljs.core.truth_(ks__15032))
{return cljs.core.assoc.call(null,m,k__15031,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__15031),ks__15032,f,args));
} else
{return cljs.core.assoc.call(null,m,k__15031,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__15031),args));
}
};
var update_in = function (m,p__15028,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__15028, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__15033){
var m = cljs.core.first(arglist__15033);
var p__15028 = cljs.core.first(cljs.core.next(arglist__15033));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15033)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15033)));
return update_in__delegate.call(this, m, p__15028, f, args);
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
var this__15034 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__15067 = null;
var G__15067__15068 = (function (coll,k){
var this__15035 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__15067__15069 = (function (coll,k,not_found){
var this__15036 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__15067 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__15067__15068.call(this,coll,k);
case  3 :
return G__15067__15069.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15067;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__15037 = this;
var new_array__15038 = cljs.core.aclone.call(null,this__15037.array);

(new_array__15038[k] = v);
return (new cljs.core.Vector(this__15037.meta,new_array__15038));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__15071 = null;
var G__15071__15072 = (function (tsym15039,k){
var this__15041 = this;
var tsym15039__15042 = this;

var coll__15043 = tsym15039__15042;

return cljs.core._lookup.call(null,coll__15043,k);
});
var G__15071__15073 = (function (tsym15040,k,not_found){
var this__15044 = this;
var tsym15040__15045 = this;

var coll__15046 = tsym15040__15045;

return cljs.core._lookup.call(null,coll__15046,k,not_found);
});
G__15071 = function(tsym15040,k,not_found){
switch(arguments.length){
case  2 :
return G__15071__15072.call(this,tsym15040,k);
case  3 :
return G__15071__15073.call(this,tsym15040,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15071;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__15047 = this;
var new_array__15048 = cljs.core.aclone.call(null,this__15047.array);

new_array__15048.push(o);
return (new cljs.core.Vector(this__15047.meta,new_array__15048));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__15075 = null;
var G__15075__15076 = (function (v,f){
var this__15049 = this;
return cljs.core.ci_reduce.call(null,this__15049.array,f);
});
var G__15075__15077 = (function (v,f,start){
var this__15050 = this;
return cljs.core.ci_reduce.call(null,this__15050.array,f,start);
});
G__15075 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__15075__15076.call(this,v,f);
case  3 :
return G__15075__15077.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15075;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__15051 = this;
if(cljs.core.truth_((this__15051.array.length > 0)))
{var vector_seq__15052 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__15051.array.length)))
{return cljs.core.cons.call(null,(this__15051.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__15052.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__15053 = this;
return this__15053.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__15054 = this;
var count__15055 = this__15054.array.length;

if(cljs.core.truth_((count__15055 > 0)))
{return (this__15054.array[(count__15055 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__15056 = this;
if(cljs.core.truth_((this__15056.array.length > 0)))
{var new_array__15057 = cljs.core.aclone.call(null,this__15056.array);

new_array__15057.pop();
return (new cljs.core.Vector(this__15056.meta,new_array__15057));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__15058 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__15059 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__15060 = this;
return (new cljs.core.Vector(meta,this__15060.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__15061 = this;
return this__15061.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__15079 = null;
var G__15079__15080 = (function (coll,n){
var this__15062 = this;
if(cljs.core.truth_((function (){var and__3546__auto____15063 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____15063))
{return (n < this__15062.array.length);
} else
{return and__3546__auto____15063;
}
})()))
{return (this__15062.array[n]);
} else
{return null;
}
});
var G__15079__15081 = (function (coll,n,not_found){
var this__15064 = this;
if(cljs.core.truth_((function (){var and__3546__auto____15065 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____15065))
{return (n < this__15064.array.length);
} else
{return and__3546__auto____15065;
}
})()))
{return (this__15064.array[n]);
} else
{return not_found;
}
});
G__15079 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__15079__15080.call(this,coll,n);
case  3 :
return G__15079__15081.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15079;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__15066 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__15066.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__15083 = pv.cnt;

if(cljs.core.truth_((cnt__15083 < 32)))
{return 0;
} else
{return (((cnt__15083 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__15084 = level;
var ret__15085 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__15084)))
{return ret__15085;
} else
{var embed__15086 = ret__15085;
var r__15087 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___15088 = (r__15087[0] = embed__15086);

{
var G__15089 = (ll__15084 - 5);
var G__15090 = r__15087;
ll__15084 = G__15089;
ret__15085 = G__15090;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__15091 = cljs.core.aclone.call(null,parent);
var subidx__15092 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__15091[subidx__15092] = tailnode);
return ret__15091;
} else
{var temp__3695__auto____15093 = (parent[subidx__15092]);

if(cljs.core.truth_(temp__3695__auto____15093))
{var child__15094 = temp__3695__auto____15093;

var node_to_insert__15095 = push_tail.call(null,pv,(level - 5),child__15094,tailnode);
var ___15096 = (ret__15091[subidx__15092] = node_to_insert__15095);

return ret__15091;
} else
{var node_to_insert__15097 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___15098 = (ret__15091[subidx__15092] = node_to_insert__15097);

return ret__15091;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____15099 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____15099))
{return (i < pv.cnt);
} else
{return and__3546__auto____15099;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__15100 = pv.root;
var level__15101 = pv.shift;

while(true){
if(cljs.core.truth_((level__15101 > 0)))
{{
var G__15102 = (node__15100[((i >> level__15101) & 31)]);
var G__15103 = (level__15101 - 5);
node__15100 = G__15102;
level__15101 = G__15103;
continue;
}
} else
{return node__15100;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__15104 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__15104[(i & 31)] = val);
return ret__15104;
} else
{var subidx__15105 = ((i >> level) & 31);
var ___15106 = (ret__15104[subidx__15105] = do_assoc.call(null,pv,(level - 5),(node[subidx__15105]),i,val));

return ret__15104;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__15107 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__15108 = pop_tail.call(null,pv,(level - 5),(node[subidx__15107]));

if(cljs.core.truth_((function (){var and__3546__auto____15109 = (new_child__15108 === null);

if(cljs.core.truth_(and__3546__auto____15109))
{return (subidx__15107 === 0);
} else
{return and__3546__auto____15109;
}
})()))
{return null;
} else
{var ret__15110 = cljs.core.aclone.call(null,node);
var ___15111 = (ret__15110[subidx__15107] = new_child__15108);

return ret__15110;
}
} else
{if(cljs.core.truth_((subidx__15107 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__15112 = cljs.core.aclone.call(null,node);
var ___15113 = (ret__15112[subidx__15107] = null);

return ret__15112;
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
var this__15114 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__15154 = null;
var G__15154__15155 = (function (coll,k){
var this__15115 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__15154__15156 = (function (coll,k,not_found){
var this__15116 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__15154 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__15154__15155.call(this,coll,k);
case  3 :
return G__15154__15156.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15154;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__15117 = this;
if(cljs.core.truth_((function (){var and__3546__auto____15118 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____15118))
{return (k < this__15117.cnt);
} else
{return and__3546__auto____15118;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__15119 = cljs.core.aclone.call(null,this__15117.tail);

(new_tail__15119[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__15117.meta,this__15117.cnt,this__15117.shift,this__15117.root,new_tail__15119));
} else
{return (new cljs.core.PersistentVector(this__15117.meta,this__15117.cnt,this__15117.shift,cljs.core.do_assoc.call(null,coll,this__15117.shift,this__15117.root,k,v),this__15117.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__15117.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__15117.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__15158 = null;
var G__15158__15159 = (function (tsym15120,k){
var this__15122 = this;
var tsym15120__15123 = this;

var coll__15124 = tsym15120__15123;

return cljs.core._lookup.call(null,coll__15124,k);
});
var G__15158__15160 = (function (tsym15121,k,not_found){
var this__15125 = this;
var tsym15121__15126 = this;

var coll__15127 = tsym15121__15126;

return cljs.core._lookup.call(null,coll__15127,k,not_found);
});
G__15158 = function(tsym15121,k,not_found){
switch(arguments.length){
case  2 :
return G__15158__15159.call(this,tsym15121,k);
case  3 :
return G__15158__15160.call(this,tsym15121,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15158;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__15128 = this;
if(cljs.core.truth_(((this__15128.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__15129 = cljs.core.aclone.call(null,this__15128.tail);

new_tail__15129.push(o);
return (new cljs.core.PersistentVector(this__15128.meta,(this__15128.cnt + 1),this__15128.shift,this__15128.root,new_tail__15129));
} else
{var root_overflow_QMARK___15130 = ((this__15128.cnt >> 5) > (1 << this__15128.shift));
var new_shift__15131 = (cljs.core.truth_(root_overflow_QMARK___15130)?(this__15128.shift + 5):this__15128.shift);
var new_root__15133 = (cljs.core.truth_(root_overflow_QMARK___15130)?(function (){var n_r__15132 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__15132[0] = this__15128.root);
(n_r__15132[1] = cljs.core.new_path.call(null,this__15128.shift,this__15128.tail));
return n_r__15132;
})():cljs.core.push_tail.call(null,coll,this__15128.shift,this__15128.root,this__15128.tail));

return (new cljs.core.PersistentVector(this__15128.meta,(this__15128.cnt + 1),new_shift__15131,new_root__15133,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__15162 = null;
var G__15162__15163 = (function (v,f){
var this__15134 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__15162__15164 = (function (v,f,start){
var this__15135 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__15162 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__15162__15163.call(this,v,f);
case  3 :
return G__15162__15164.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15162;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__15136 = this;
if(cljs.core.truth_((this__15136.cnt > 0)))
{var vector_seq__15137 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__15136.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__15137.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__15138 = this;
return this__15138.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__15139 = this;
if(cljs.core.truth_((this__15139.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__15139.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__15140 = this;
if(cljs.core.truth_((this__15140.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__15140.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__15140.meta);
} else
{if(cljs.core.truth_((1 < (this__15140.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__15140.meta,(this__15140.cnt - 1),this__15140.shift,this__15140.root,cljs.core.aclone.call(null,this__15140.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__15141 = cljs.core.array_for.call(null,coll,(this__15140.cnt - 2));
var nr__15142 = cljs.core.pop_tail.call(null,this__15140.shift,this__15140.root);
var new_root__15143 = (cljs.core.truth_((nr__15142 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__15142);
var cnt_1__15144 = (this__15140.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____15145 = (5 < this__15140.shift);

if(cljs.core.truth_(and__3546__auto____15145))
{return ((new_root__15143[1]) === null);
} else
{return and__3546__auto____15145;
}
})()))
{return (new cljs.core.PersistentVector(this__15140.meta,cnt_1__15144,(this__15140.shift - 5),(new_root__15143[0]),new_tail__15141));
} else
{return (new cljs.core.PersistentVector(this__15140.meta,cnt_1__15144,this__15140.shift,new_root__15143,new_tail__15141));
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
var this__15146 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__15147 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__15148 = this;
return (new cljs.core.PersistentVector(meta,this__15148.cnt,this__15148.shift,this__15148.root,this__15148.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__15149 = this;
return this__15149.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__15166 = null;
var G__15166__15167 = (function (coll,n){
var this__15150 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__15166__15168 = (function (coll,n,not_found){
var this__15151 = this;
if(cljs.core.truth_((function (){var and__3546__auto____15152 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____15152))
{return (n < this__15151.cnt);
} else
{return and__3546__auto____15152;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__15166 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__15166__15167.call(this,coll,n);
case  3 :
return G__15166__15168.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15166;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__15153 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__15153.meta);
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
vector.cljs$lang$applyTo = (function (arglist__15170){
var args = cljs.core.seq( arglist__15170 );;
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
var this__15171 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__15199 = null;
var G__15199__15200 = (function (coll,k){
var this__15172 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__15199__15201 = (function (coll,k,not_found){
var this__15173 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__15199 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__15199__15200.call(this,coll,k);
case  3 :
return G__15199__15201.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15199;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__15174 = this;
var v_pos__15175 = (this__15174.start + key);

return (new cljs.core.Subvec(this__15174.meta,cljs.core._assoc.call(null,this__15174.v,v_pos__15175,val),this__15174.start,((this__15174.end > (v_pos__15175 + 1)) ? this__15174.end : (v_pos__15175 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__15203 = null;
var G__15203__15204 = (function (tsym15176,k){
var this__15178 = this;
var tsym15176__15179 = this;

var coll__15180 = tsym15176__15179;

return cljs.core._lookup.call(null,coll__15180,k);
});
var G__15203__15205 = (function (tsym15177,k,not_found){
var this__15181 = this;
var tsym15177__15182 = this;

var coll__15183 = tsym15177__15182;

return cljs.core._lookup.call(null,coll__15183,k,not_found);
});
G__15203 = function(tsym15177,k,not_found){
switch(arguments.length){
case  2 :
return G__15203__15204.call(this,tsym15177,k);
case  3 :
return G__15203__15205.call(this,tsym15177,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15203;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__15184 = this;
return (new cljs.core.Subvec(this__15184.meta,cljs.core._assoc_n.call(null,this__15184.v,this__15184.end,o),this__15184.start,(this__15184.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__15207 = null;
var G__15207__15208 = (function (coll,f){
var this__15185 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__15207__15209 = (function (coll,f,start){
var this__15186 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__15207 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__15207__15208.call(this,coll,f);
case  3 :
return G__15207__15209.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15207;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__15187 = this;
var subvec_seq__15188 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__15187.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__15187.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__15188.call(null,this__15187.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__15189 = this;
return (this__15189.end - this__15189.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__15190 = this;
return cljs.core._nth.call(null,this__15190.v,(this__15190.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__15191 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__15191.start,this__15191.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__15191.meta,this__15191.v,this__15191.start,(this__15191.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__15192 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__15193 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__15194 = this;
return (new cljs.core.Subvec(meta,this__15194.v,this__15194.start,this__15194.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__15195 = this;
return this__15195.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__15211 = null;
var G__15211__15212 = (function (coll,n){
var this__15196 = this;
return cljs.core._nth.call(null,this__15196.v,(this__15196.start + n));
});
var G__15211__15213 = (function (coll,n,not_found){
var this__15197 = this;
return cljs.core._nth.call(null,this__15197.v,(this__15197.start + n),not_found);
});
G__15211 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__15211__15212.call(this,coll,n);
case  3 :
return G__15211__15213.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15211;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__15198 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__15198.meta);
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
var subvec__15215 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__15216 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__15215.call(this,v,start);
case  3 :
return subvec__15216.call(this,v,start,end);
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
var this__15218 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__15219 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__15220 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__15221 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__15221.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__15222 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__15223 = this;
return cljs.core._first.call(null,this__15223.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__15224 = this;
var temp__3695__auto____15225 = cljs.core.next.call(null,this__15224.front);

if(cljs.core.truth_(temp__3695__auto____15225))
{var f1__15226 = temp__3695__auto____15225;

return (new cljs.core.PersistentQueueSeq(this__15224.meta,f1__15226,this__15224.rear));
} else
{if(cljs.core.truth_((this__15224.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__15224.meta,this__15224.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__15227 = this;
return this__15227.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__15228 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__15228.front,this__15228.rear));
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
var this__15229 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__15230 = this;
if(cljs.core.truth_(this__15230.front))
{return (new cljs.core.PersistentQueue(this__15230.meta,(this__15230.count + 1),this__15230.front,cljs.core.conj.call(null,(function (){var or__3548__auto____15231 = this__15230.rear;

if(cljs.core.truth_(or__3548__auto____15231))
{return or__3548__auto____15231;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__15230.meta,(this__15230.count + 1),cljs.core.conj.call(null,this__15230.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__15232 = this;
var rear__15233 = cljs.core.seq.call(null,this__15232.rear);

if(cljs.core.truth_((function (){var or__3548__auto____15234 = this__15232.front;

if(cljs.core.truth_(or__3548__auto____15234))
{return or__3548__auto____15234;
} else
{return rear__15233;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__15232.front,cljs.core.seq.call(null,rear__15233)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__15235 = this;
return this__15235.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__15236 = this;
return cljs.core._first.call(null,this__15236.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__15237 = this;
if(cljs.core.truth_(this__15237.front))
{var temp__3695__auto____15238 = cljs.core.next.call(null,this__15237.front);

if(cljs.core.truth_(temp__3695__auto____15238))
{var f1__15239 = temp__3695__auto____15238;

return (new cljs.core.PersistentQueue(this__15237.meta,(this__15237.count - 1),f1__15239,this__15237.rear));
} else
{return (new cljs.core.PersistentQueue(this__15237.meta,(this__15237.count - 1),cljs.core.seq.call(null,this__15237.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__15240 = this;
return cljs.core.first.call(null,this__15240.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__15241 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__15242 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__15243 = this;
return (new cljs.core.PersistentQueue(meta,this__15243.count,this__15243.front,this__15243.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__15244 = this;
return this__15244.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__15245 = this;
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
var this__15246 = this;
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
var len__15247 = array.length;

var i__15248 = 0;

while(true){
if(cljs.core.truth_((i__15248 < len__15247)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__15248]))))
{return i__15248;
} else
{{
var G__15249 = (i__15248 + incr);
i__15248 = G__15249;
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
var obj_map_contains_key_QMARK___15251 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___15252 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____15250 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____15250))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____15250;
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
return obj_map_contains_key_QMARK___15251.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___15252.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__15255 = cljs.core.hash.call(null,a);
var b__15256 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__15255 < b__15256)))
{return -1;
} else
{if(cljs.core.truth_((a__15255 > b__15256)))
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
var this__15257 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__15284 = null;
var G__15284__15285 = (function (coll,k){
var this__15258 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__15284__15286 = (function (coll,k,not_found){
var this__15259 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__15259.strobj,(this__15259.strobj[k]),not_found);
});
G__15284 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__15284__15285.call(this,coll,k);
case  3 :
return G__15284__15286.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15284;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__15260 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__15261 = goog.object.clone.call(null,this__15260.strobj);
var overwrite_QMARK___15262 = new_strobj__15261.hasOwnProperty(k);

(new_strobj__15261[k] = v);
if(cljs.core.truth_(overwrite_QMARK___15262))
{return (new cljs.core.ObjMap(this__15260.meta,this__15260.keys,new_strobj__15261));
} else
{var new_keys__15263 = cljs.core.aclone.call(null,this__15260.keys);

new_keys__15263.push(k);
return (new cljs.core.ObjMap(this__15260.meta,new_keys__15263,new_strobj__15261));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__15260.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__15264 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__15264.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__15288 = null;
var G__15288__15289 = (function (tsym15265,k){
var this__15267 = this;
var tsym15265__15268 = this;

var coll__15269 = tsym15265__15268;

return cljs.core._lookup.call(null,coll__15269,k);
});
var G__15288__15290 = (function (tsym15266,k,not_found){
var this__15270 = this;
var tsym15266__15271 = this;

var coll__15272 = tsym15266__15271;

return cljs.core._lookup.call(null,coll__15272,k,not_found);
});
G__15288 = function(tsym15266,k,not_found){
switch(arguments.length){
case  2 :
return G__15288__15289.call(this,tsym15266,k);
case  3 :
return G__15288__15290.call(this,tsym15266,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15288;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__15273 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__15274 = this;
if(cljs.core.truth_((this__15274.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__15254_SHARP_){
return cljs.core.vector.call(null,p1__15254_SHARP_,(this__15274.strobj[p1__15254_SHARP_]));
}),this__15274.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__15275 = this;
return this__15275.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__15276 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__15277 = this;
return (new cljs.core.ObjMap(meta,this__15277.keys,this__15277.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__15278 = this;
return this__15278.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__15279 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__15279.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__15280 = this;
if(cljs.core.truth_((function (){var and__3546__auto____15281 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____15281))
{return this__15280.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____15281;
}
})()))
{var new_keys__15282 = cljs.core.aclone.call(null,this__15280.keys);
var new_strobj__15283 = goog.object.clone.call(null,this__15280.strobj);

new_keys__15282.splice(cljs.core.scan_array.call(null,1,k,new_keys__15282),1);
cljs.core.js_delete.call(null,new_strobj__15283,k);
return (new cljs.core.ObjMap(this__15280.meta,new_keys__15282,new_strobj__15283));
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
var this__15293 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__15331 = null;
var G__15331__15332 = (function (coll,k){
var this__15294 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__15331__15333 = (function (coll,k,not_found){
var this__15295 = this;
var bucket__15296 = (this__15295.hashobj[cljs.core.hash.call(null,k)]);
var i__15297 = (cljs.core.truth_(bucket__15296)?cljs.core.scan_array.call(null,2,k,bucket__15296):null);

if(cljs.core.truth_(i__15297))
{return (bucket__15296[(i__15297 + 1)]);
} else
{return not_found;
}
});
G__15331 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__15331__15332.call(this,coll,k);
case  3 :
return G__15331__15333.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15331;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__15298 = this;
var h__15299 = cljs.core.hash.call(null,k);
var bucket__15300 = (this__15298.hashobj[h__15299]);

if(cljs.core.truth_(bucket__15300))
{var new_bucket__15301 = cljs.core.aclone.call(null,bucket__15300);
var new_hashobj__15302 = goog.object.clone.call(null,this__15298.hashobj);

(new_hashobj__15302[h__15299] = new_bucket__15301);
var temp__3695__auto____15303 = cljs.core.scan_array.call(null,2,k,new_bucket__15301);

if(cljs.core.truth_(temp__3695__auto____15303))
{var i__15304 = temp__3695__auto____15303;

(new_bucket__15301[(i__15304 + 1)] = v);
return (new cljs.core.HashMap(this__15298.meta,this__15298.count,new_hashobj__15302));
} else
{new_bucket__15301.push(k,v);
return (new cljs.core.HashMap(this__15298.meta,(this__15298.count + 1),new_hashobj__15302));
}
} else
{var new_hashobj__15305 = goog.object.clone.call(null,this__15298.hashobj);

(new_hashobj__15305[h__15299] = [k,v]);
return (new cljs.core.HashMap(this__15298.meta,(this__15298.count + 1),new_hashobj__15305));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__15306 = this;
var bucket__15307 = (this__15306.hashobj[cljs.core.hash.call(null,k)]);
var i__15308 = (cljs.core.truth_(bucket__15307)?cljs.core.scan_array.call(null,2,k,bucket__15307):null);

if(cljs.core.truth_(i__15308))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__15335 = null;
var G__15335__15336 = (function (tsym15309,k){
var this__15311 = this;
var tsym15309__15312 = this;

var coll__15313 = tsym15309__15312;

return cljs.core._lookup.call(null,coll__15313,k);
});
var G__15335__15337 = (function (tsym15310,k,not_found){
var this__15314 = this;
var tsym15310__15315 = this;

var coll__15316 = tsym15310__15315;

return cljs.core._lookup.call(null,coll__15316,k,not_found);
});
G__15335 = function(tsym15310,k,not_found){
switch(arguments.length){
case  2 :
return G__15335__15336.call(this,tsym15310,k);
case  3 :
return G__15335__15337.call(this,tsym15310,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15335;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__15317 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__15318 = this;
if(cljs.core.truth_((this__15318.count > 0)))
{var hashes__15319 = cljs.core.js_keys.call(null,this__15318.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__15292_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__15318.hashobj[p1__15292_SHARP_])));
}),hashes__15319);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__15320 = this;
return this__15320.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__15321 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__15322 = this;
return (new cljs.core.HashMap(meta,this__15322.count,this__15322.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__15323 = this;
return this__15323.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__15324 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__15324.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__15325 = this;
var h__15326 = cljs.core.hash.call(null,k);
var bucket__15327 = (this__15325.hashobj[h__15326]);
var i__15328 = (cljs.core.truth_(bucket__15327)?cljs.core.scan_array.call(null,2,k,bucket__15327):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__15328)))
{return coll;
} else
{var new_hashobj__15329 = goog.object.clone.call(null,this__15325.hashobj);

if(cljs.core.truth_((3 > bucket__15327.length)))
{cljs.core.js_delete.call(null,new_hashobj__15329,h__15326);
} else
{var new_bucket__15330 = cljs.core.aclone.call(null,bucket__15327);

new_bucket__15330.splice(i__15328,2);
(new_hashobj__15329[h__15326] = new_bucket__15330);
}
return (new cljs.core.HashMap(this__15325.meta,(this__15325.count - 1),new_hashobj__15329));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__15339 = ks.length;

var i__15340 = 0;
var out__15341 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__15340 < len__15339)))
{{
var G__15342 = (i__15340 + 1);
var G__15343 = cljs.core.assoc.call(null,out__15341,(ks[i__15340]),(vs[i__15340]));
i__15340 = G__15342;
out__15341 = G__15343;
continue;
}
} else
{return out__15341;
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
var in$__15344 = cljs.core.seq.call(null,keyvals);
var out__15345 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__15344))
{{
var G__15346 = cljs.core.nnext.call(null,in$__15344);
var G__15347 = cljs.core.assoc.call(null,out__15345,cljs.core.first.call(null,in$__15344),cljs.core.second.call(null,in$__15344));
in$__15344 = G__15346;
out__15345 = G__15347;
continue;
}
} else
{return out__15345;
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
hash_map.cljs$lang$applyTo = (function (arglist__15348){
var keyvals = cljs.core.seq( arglist__15348 );;
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
{return cljs.core.reduce.call(null,(function (p1__15349_SHARP_,p2__15350_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____15351 = p1__15349_SHARP_;

if(cljs.core.truth_(or__3548__auto____15351))
{return or__3548__auto____15351;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__15350_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__15352){
var maps = cljs.core.seq( arglist__15352 );;
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
{var merge_entry__15355 = (function (m,e){
var k__15353 = cljs.core.first.call(null,e);
var v__15354 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__15353)))
{return cljs.core.assoc.call(null,m,k__15353,f.call(null,cljs.core.get.call(null,m,k__15353),v__15354));
} else
{return cljs.core.assoc.call(null,m,k__15353,v__15354);
}
});
var merge2__15357 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__15355,(function (){var or__3548__auto____15356 = m1;

if(cljs.core.truth_(or__3548__auto____15356))
{return or__3548__auto____15356;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__15357,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__15358){
var f = cljs.core.first(arglist__15358);
var maps = cljs.core.rest(arglist__15358);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__15360 = cljs.core.ObjMap.fromObject([],{});
var keys__15361 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__15361))
{var key__15362 = cljs.core.first.call(null,keys__15361);
var entry__15363 = cljs.core.get.call(null,map,key__15362,"\uFDD0'user/not-found");

{
var G__15364 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__15363,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__15360,key__15362,entry__15363):ret__15360);
var G__15365 = cljs.core.next.call(null,keys__15361);
ret__15360 = G__15364;
keys__15361 = G__15365;
continue;
}
} else
{return ret__15360;
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
var this__15366 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__15387 = null;
var G__15387__15388 = (function (coll,v){
var this__15367 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__15387__15389 = (function (coll,v,not_found){
var this__15368 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__15368.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__15387 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__15387__15388.call(this,coll,v);
case  3 :
return G__15387__15389.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15387;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__15391 = null;
var G__15391__15392 = (function (tsym15369,k){
var this__15371 = this;
var tsym15369__15372 = this;

var coll__15373 = tsym15369__15372;

return cljs.core._lookup.call(null,coll__15373,k);
});
var G__15391__15393 = (function (tsym15370,k,not_found){
var this__15374 = this;
var tsym15370__15375 = this;

var coll__15376 = tsym15370__15375;

return cljs.core._lookup.call(null,coll__15376,k,not_found);
});
G__15391 = function(tsym15370,k,not_found){
switch(arguments.length){
case  2 :
return G__15391__15392.call(this,tsym15370,k);
case  3 :
return G__15391__15393.call(this,tsym15370,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15391;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__15377 = this;
return (new cljs.core.Set(this__15377.meta,cljs.core.assoc.call(null,this__15377.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__15378 = this;
return cljs.core.keys.call(null,this__15378.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__15379 = this;
return (new cljs.core.Set(this__15379.meta,cljs.core.dissoc.call(null,this__15379.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__15380 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__15381 = this;
var and__3546__auto____15382 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____15382))
{var and__3546__auto____15383 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____15383))
{return cljs.core.every_QMARK_.call(null,(function (p1__15359_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__15359_SHARP_);
}),other);
} else
{return and__3546__auto____15383;
}
} else
{return and__3546__auto____15382;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__15384 = this;
return (new cljs.core.Set(meta,this__15384.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__15385 = this;
return this__15385.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__15386 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__15386.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__15396 = cljs.core.seq.call(null,coll);
var out__15397 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__15396))))
{{
var G__15398 = cljs.core.rest.call(null,in$__15396);
var G__15399 = cljs.core.conj.call(null,out__15397,cljs.core.first.call(null,in$__15396));
in$__15396 = G__15398;
out__15397 = G__15399;
continue;
}
} else
{return out__15397;
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
{var n__15400 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____15401 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____15401))
{var e__15402 = temp__3695__auto____15401;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__15402));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__15400,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__15395_SHARP_){
var temp__3695__auto____15403 = cljs.core.find.call(null,smap,p1__15395_SHARP_);

if(cljs.core.truth_(temp__3695__auto____15403))
{var e__15404 = temp__3695__auto____15403;

return cljs.core.second.call(null,e__15404);
} else
{return p1__15395_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__15412 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__15405,seen){
while(true){
var vec__15406__15407 = p__15405;
var f__15408 = cljs.core.nth.call(null,vec__15406__15407,0,null);
var xs__15409 = vec__15406__15407;

var temp__3698__auto____15410 = cljs.core.seq.call(null,xs__15409);

if(cljs.core.truth_(temp__3698__auto____15410))
{var s__15411 = temp__3698__auto____15410;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__15408)))
{{
var G__15413 = cljs.core.rest.call(null,s__15411);
var G__15414 = seen;
p__15405 = G__15413;
seen = G__15414;
continue;
}
} else
{return cljs.core.cons.call(null,f__15408,step.call(null,cljs.core.rest.call(null,s__15411),cljs.core.conj.call(null,seen,f__15408)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__15412.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__15415 = cljs.core.PersistentVector.fromArray([]);
var s__15416 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__15416)))
{{
var G__15417 = cljs.core.conj.call(null,ret__15415,cljs.core.first.call(null,s__15416));
var G__15418 = cljs.core.next.call(null,s__15416);
ret__15415 = G__15417;
s__15416 = G__15418;
continue;
}
} else
{return cljs.core.seq.call(null,ret__15415);
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
{if(cljs.core.truth_((function (){var or__3548__auto____15419 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____15419))
{return or__3548__auto____15419;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__15420 = x.lastIndexOf("/");

if(cljs.core.truth_((i__15420 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__15420 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____15421 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____15421))
{return or__3548__auto____15421;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__15422 = x.lastIndexOf("/");

if(cljs.core.truth_((i__15422 > -1)))
{return cljs.core.subs.call(null,x,2,i__15422);
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
var map__15425 = cljs.core.ObjMap.fromObject([],{});
var ks__15426 = cljs.core.seq.call(null,keys);
var vs__15427 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____15428 = ks__15426;

if(cljs.core.truth_(and__3546__auto____15428))
{return vs__15427;
} else
{return and__3546__auto____15428;
}
})()))
{{
var G__15429 = cljs.core.assoc.call(null,map__15425,cljs.core.first.call(null,ks__15426),cljs.core.first.call(null,vs__15427));
var G__15430 = cljs.core.next.call(null,ks__15426);
var G__15431 = cljs.core.next.call(null,vs__15427);
map__15425 = G__15429;
ks__15426 = G__15430;
vs__15427 = G__15431;
continue;
}
} else
{return map__15425;
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
var max_key__15434 = (function (k,x){
return x;
});
var max_key__15435 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__15436 = (function() { 
var G__15438__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__15423_SHARP_,p2__15424_SHARP_){
return max_key.call(null,k,p1__15423_SHARP_,p2__15424_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__15438 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15438__delegate.call(this, k, x, y, more);
};
G__15438.cljs$lang$maxFixedArity = 3;
G__15438.cljs$lang$applyTo = (function (arglist__15439){
var k = cljs.core.first(arglist__15439);
var x = cljs.core.first(cljs.core.next(arglist__15439));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15439)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15439)));
return G__15438__delegate.call(this, k, x, y, more);
});
return G__15438;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__15434.call(this,k,x);
case  3 :
return max_key__15435.call(this,k,x,y);
default:
return max_key__15436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__15436.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__15440 = (function (k,x){
return x;
});
var min_key__15441 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__15442 = (function() { 
var G__15444__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__15432_SHARP_,p2__15433_SHARP_){
return min_key.call(null,k,p1__15432_SHARP_,p2__15433_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__15444 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15444__delegate.call(this, k, x, y, more);
};
G__15444.cljs$lang$maxFixedArity = 3;
G__15444.cljs$lang$applyTo = (function (arglist__15445){
var k = cljs.core.first(arglist__15445);
var x = cljs.core.first(cljs.core.next(arglist__15445));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15445)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15445)));
return G__15444__delegate.call(this, k, x, y, more);
});
return G__15444;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__15440.call(this,k,x);
case  3 :
return min_key__15441.call(this,k,x,y);
default:
return min_key__15442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__15442.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__15448 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__15449 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____15446 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____15446))
{var s__15447 = temp__3698__auto____15446;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__15447),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__15447)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__15448.call(this,n,step);
case  3 :
return partition_all__15449.call(this,n,step,coll);
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
var temp__3698__auto____15451 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____15451))
{var s__15452 = temp__3698__auto____15451;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__15452))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__15452),take_while.call(null,pred,cljs.core.rest.call(null,s__15452)));
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
var this__15453 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__15454 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__15470 = null;
var G__15470__15471 = (function (rng,f){
var this__15455 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__15470__15472 = (function (rng,f,s){
var this__15456 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__15470 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__15470__15471.call(this,rng,f);
case  3 :
return G__15470__15472.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15470;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__15457 = this;
var comp__15458 = (cljs.core.truth_((this__15457.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__15458.call(null,this__15457.start,this__15457.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__15459 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__15459.end - this__15459.start) / this__15459.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__15460 = this;
return this__15460.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__15461 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__15461.meta,(this__15461.start + this__15461.step),this__15461.end,this__15461.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__15462 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__15463 = this;
return (new cljs.core.Range(meta,this__15463.start,this__15463.end,this__15463.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__15464 = this;
return this__15464.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__15474 = null;
var G__15474__15475 = (function (rng,n){
var this__15465 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__15465.start + (n * this__15465.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____15466 = (this__15465.start > this__15465.end);

if(cljs.core.truth_(and__3546__auto____15466))
{return cljs.core._EQ_.call(null,this__15465.step,0);
} else
{return and__3546__auto____15466;
}
})()))
{return this__15465.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__15474__15476 = (function (rng,n,not_found){
var this__15467 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__15467.start + (n * this__15467.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____15468 = (this__15467.start > this__15467.end);

if(cljs.core.truth_(and__3546__auto____15468))
{return cljs.core._EQ_.call(null,this__15467.step,0);
} else
{return and__3546__auto____15468;
}
})()))
{return this__15467.start;
} else
{return not_found;
}
}
});
G__15474 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__15474__15475.call(this,rng,n);
case  3 :
return G__15474__15476.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15474;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__15469 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__15469.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__15478 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__15479 = (function (end){
return range.call(null,0,end,1);
});
var range__15480 = (function (start,end){
return range.call(null,start,end,1);
});
var range__15481 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__15478.call(this);
case  1 :
return range__15479.call(this,start);
case  2 :
return range__15480.call(this,start,end);
case  3 :
return range__15481.call(this,start,end,step);
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
var temp__3698__auto____15483 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____15483))
{var s__15484 = temp__3698__auto____15483;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__15484),take_nth.call(null,n,cljs.core.drop.call(null,n,s__15484)));
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
var temp__3698__auto____15486 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____15486))
{var s__15487 = temp__3698__auto____15486;

var fst__15488 = cljs.core.first.call(null,s__15487);
var fv__15489 = f.call(null,fst__15488);
var run__15490 = cljs.core.cons.call(null,fst__15488,cljs.core.take_while.call(null,(function (p1__15485_SHARP_){
return cljs.core._EQ_.call(null,fv__15489,f.call(null,p1__15485_SHARP_));
}),cljs.core.next.call(null,s__15487)));

return cljs.core.cons.call(null,run__15490,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__15490),s__15487))));
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
var reductions__15505 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____15501 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____15501))
{var s__15502 = temp__3695__auto____15501;

return reductions.call(null,f,cljs.core.first.call(null,s__15502),cljs.core.rest.call(null,s__15502));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__15506 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____15503 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____15503))
{var s__15504 = temp__3698__auto____15503;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__15504)),cljs.core.rest.call(null,s__15504));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__15505.call(this,f,init);
case  3 :
return reductions__15506.call(this,f,init,coll);
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
var juxt__15509 = (function (f){
return (function() {
var G__15514 = null;
var G__15514__15515 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__15514__15516 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__15514__15517 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__15514__15518 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__15514__15519 = (function() { 
var G__15521__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__15521 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15521__delegate.call(this, x, y, z, args);
};
G__15521.cljs$lang$maxFixedArity = 3;
G__15521.cljs$lang$applyTo = (function (arglist__15522){
var x = cljs.core.first(arglist__15522);
var y = cljs.core.first(cljs.core.next(arglist__15522));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15522)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15522)));
return G__15521__delegate.call(this, x, y, z, args);
});
return G__15521;
})()
;
G__15514 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__15514__15515.call(this);
case  1 :
return G__15514__15516.call(this,x);
case  2 :
return G__15514__15517.call(this,x,y);
case  3 :
return G__15514__15518.call(this,x,y,z);
default:
return G__15514__15519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__15514.cljs$lang$maxFixedArity = 3;
G__15514.cljs$lang$applyTo = G__15514__15519.cljs$lang$applyTo;
return G__15514;
})()
});
var juxt__15510 = (function (f,g){
return (function() {
var G__15523 = null;
var G__15523__15524 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__15523__15525 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__15523__15526 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__15523__15527 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__15523__15528 = (function() { 
var G__15530__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__15530 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15530__delegate.call(this, x, y, z, args);
};
G__15530.cljs$lang$maxFixedArity = 3;
G__15530.cljs$lang$applyTo = (function (arglist__15531){
var x = cljs.core.first(arglist__15531);
var y = cljs.core.first(cljs.core.next(arglist__15531));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15531)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15531)));
return G__15530__delegate.call(this, x, y, z, args);
});
return G__15530;
})()
;
G__15523 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__15523__15524.call(this);
case  1 :
return G__15523__15525.call(this,x);
case  2 :
return G__15523__15526.call(this,x,y);
case  3 :
return G__15523__15527.call(this,x,y,z);
default:
return G__15523__15528.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__15523.cljs$lang$maxFixedArity = 3;
G__15523.cljs$lang$applyTo = G__15523__15528.cljs$lang$applyTo;
return G__15523;
})()
});
var juxt__15511 = (function (f,g,h){
return (function() {
var G__15532 = null;
var G__15532__15533 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__15532__15534 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__15532__15535 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__15532__15536 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__15532__15537 = (function() { 
var G__15539__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__15539 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15539__delegate.call(this, x, y, z, args);
};
G__15539.cljs$lang$maxFixedArity = 3;
G__15539.cljs$lang$applyTo = (function (arglist__15540){
var x = cljs.core.first(arglist__15540);
var y = cljs.core.first(cljs.core.next(arglist__15540));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15540)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15540)));
return G__15539__delegate.call(this, x, y, z, args);
});
return G__15539;
})()
;
G__15532 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__15532__15533.call(this);
case  1 :
return G__15532__15534.call(this,x);
case  2 :
return G__15532__15535.call(this,x,y);
case  3 :
return G__15532__15536.call(this,x,y,z);
default:
return G__15532__15537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__15532.cljs$lang$maxFixedArity = 3;
G__15532.cljs$lang$applyTo = G__15532__15537.cljs$lang$applyTo;
return G__15532;
})()
});
var juxt__15512 = (function() { 
var G__15541__delegate = function (f,g,h,fs){
var fs__15508 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__15542 = null;
var G__15542__15543 = (function (){
return cljs.core.reduce.call(null,(function (p1__15491_SHARP_,p2__15492_SHARP_){
return cljs.core.conj.call(null,p1__15491_SHARP_,p2__15492_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__15508);
});
var G__15542__15544 = (function (x){
return cljs.core.reduce.call(null,(function (p1__15493_SHARP_,p2__15494_SHARP_){
return cljs.core.conj.call(null,p1__15493_SHARP_,p2__15494_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__15508);
});
var G__15542__15545 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__15495_SHARP_,p2__15496_SHARP_){
return cljs.core.conj.call(null,p1__15495_SHARP_,p2__15496_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__15508);
});
var G__15542__15546 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__15497_SHARP_,p2__15498_SHARP_){
return cljs.core.conj.call(null,p1__15497_SHARP_,p2__15498_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__15508);
});
var G__15542__15547 = (function() { 
var G__15549__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__15499_SHARP_,p2__15500_SHARP_){
return cljs.core.conj.call(null,p1__15499_SHARP_,cljs.core.apply.call(null,p2__15500_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__15508);
};
var G__15549 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15549__delegate.call(this, x, y, z, args);
};
G__15549.cljs$lang$maxFixedArity = 3;
G__15549.cljs$lang$applyTo = (function (arglist__15550){
var x = cljs.core.first(arglist__15550);
var y = cljs.core.first(cljs.core.next(arglist__15550));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15550)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15550)));
return G__15549__delegate.call(this, x, y, z, args);
});
return G__15549;
})()
;
G__15542 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__15542__15543.call(this);
case  1 :
return G__15542__15544.call(this,x);
case  2 :
return G__15542__15545.call(this,x,y);
case  3 :
return G__15542__15546.call(this,x,y,z);
default:
return G__15542__15547.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__15542.cljs$lang$maxFixedArity = 3;
G__15542.cljs$lang$applyTo = G__15542__15547.cljs$lang$applyTo;
return G__15542;
})()
};
var G__15541 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15541__delegate.call(this, f, g, h, fs);
};
G__15541.cljs$lang$maxFixedArity = 3;
G__15541.cljs$lang$applyTo = (function (arglist__15551){
var f = cljs.core.first(arglist__15551);
var g = cljs.core.first(cljs.core.next(arglist__15551));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15551)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15551)));
return G__15541__delegate.call(this, f, g, h, fs);
});
return G__15541;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__15509.call(this,f);
case  2 :
return juxt__15510.call(this,f,g);
case  3 :
return juxt__15511.call(this,f,g,h);
default:
return juxt__15512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__15512.cljs$lang$applyTo;
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
var dorun__15553 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__15556 = cljs.core.next.call(null,coll);
coll = G__15556;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__15554 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____15552 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____15552))
{return (n > 0);
} else
{return and__3546__auto____15552;
}
})()))
{{
var G__15557 = (n - 1);
var G__15558 = cljs.core.next.call(null,coll);
n = G__15557;
coll = G__15558;
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
return dorun__15553.call(this,n);
case  2 :
return dorun__15554.call(this,n,coll);
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
var doall__15559 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__15560 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__15559.call(this,n);
case  2 :
return doall__15560.call(this,n,coll);
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
var matches__15562 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__15562),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__15562),1)))
{return cljs.core.first.call(null,matches__15562);
} else
{return cljs.core.vec.call(null,matches__15562);
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
var matches__15563 = re.exec(s);

if(cljs.core.truth_((matches__15563 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__15563),1)))
{return cljs.core.first.call(null,matches__15563);
} else
{return cljs.core.vec.call(null,matches__15563);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__15564 = cljs.core.re_find.call(null,re,s);
var match_idx__15565 = s.search(re);
var match_str__15566 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__15564))?cljs.core.first.call(null,match_data__15564):match_data__15564);
var post_match__15567 = cljs.core.subs.call(null,s,(match_idx__15565 + cljs.core.count.call(null,match_str__15566)));

if(cljs.core.truth_(match_data__15564))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__15564,re_seq.call(null,re,post_match__15567));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__15569__15570 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___15571 = cljs.core.nth.call(null,vec__15569__15570,0,null);
var flags__15572 = cljs.core.nth.call(null,vec__15569__15570,1,null);
var pattern__15573 = cljs.core.nth.call(null,vec__15569__15570,2,null);

return (new RegExp(pattern__15573,flags__15572));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__15568_SHARP_){
return print_one.call(null,p1__15568_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____15574 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____15574))
{var and__3546__auto____15578 = (function (){var x__451__auto____15575 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____15576 = x__451__auto____15575;

if(cljs.core.truth_(and__3546__auto____15576))
{var and__3546__auto____15577 = x__451__auto____15575.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____15577))
{return cljs.core.not.call(null,x__451__auto____15575.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____15577;
}
} else
{return and__3546__auto____15576;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____15575);
}
})();

if(cljs.core.truth_(and__3546__auto____15578))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____15578;
}
} else
{return and__3546__auto____15574;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____15579 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____15580 = x__451__auto____15579;

if(cljs.core.truth_(and__3546__auto____15580))
{var and__3546__auto____15581 = x__451__auto____15579.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____15581))
{return cljs.core.not.call(null,x__451__auto____15579.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____15581;
}
} else
{return and__3546__auto____15580;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____15579);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__15582 = cljs.core.first.call(null,objs);
var sb__15583 = (new goog.string.StringBuffer());

var G__15584__15585 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__15584__15585))
{var obj__15586 = cljs.core.first.call(null,G__15584__15585);
var G__15584__15587 = G__15584__15585;

while(true){
if(cljs.core.truth_((obj__15586 === first_obj__15582)))
{} else
{sb__15583.append(" ");
}
var G__15588__15589 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__15586,opts));

if(cljs.core.truth_(G__15588__15589))
{var string__15590 = cljs.core.first.call(null,G__15588__15589);
var G__15588__15591 = G__15588__15589;

while(true){
sb__15583.append(string__15590);
var temp__3698__auto____15592 = cljs.core.next.call(null,G__15588__15591);

if(cljs.core.truth_(temp__3698__auto____15592))
{var G__15588__15593 = temp__3698__auto____15592;

{
var G__15596 = cljs.core.first.call(null,G__15588__15593);
var G__15597 = G__15588__15593;
string__15590 = G__15596;
G__15588__15591 = G__15597;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____15594 = cljs.core.next.call(null,G__15584__15587);

if(cljs.core.truth_(temp__3698__auto____15594))
{var G__15584__15595 = temp__3698__auto____15594;

{
var G__15598 = cljs.core.first.call(null,G__15584__15595);
var G__15599 = G__15584__15595;
obj__15586 = G__15598;
G__15584__15587 = G__15599;
continue;
}
} else
{}
break;
}
} else
{}
return sb__15583;
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
var sb__15600 = cljs.core.pr_sb.call(null,objs,opts);

sb__15600.append("\n");
return cljs.core.str.call(null,sb__15600);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__15601 = cljs.core.first.call(null,objs);

var G__15602__15603 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__15602__15603))
{var obj__15604 = cljs.core.first.call(null,G__15602__15603);
var G__15602__15605 = G__15602__15603;

while(true){
if(cljs.core.truth_((obj__15604 === first_obj__15601)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__15606__15607 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__15604,opts));

if(cljs.core.truth_(G__15606__15607))
{var string__15608 = cljs.core.first.call(null,G__15606__15607);
var G__15606__15609 = G__15606__15607;

while(true){
cljs.core.string_print.call(null,string__15608);
var temp__3698__auto____15610 = cljs.core.next.call(null,G__15606__15609);

if(cljs.core.truth_(temp__3698__auto____15610))
{var G__15606__15611 = temp__3698__auto____15610;

{
var G__15614 = cljs.core.first.call(null,G__15606__15611);
var G__15615 = G__15606__15611;
string__15608 = G__15614;
G__15606__15609 = G__15615;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____15612 = cljs.core.next.call(null,G__15602__15605);

if(cljs.core.truth_(temp__3698__auto____15612))
{var G__15602__15613 = temp__3698__auto____15612;

{
var G__15616 = cljs.core.first.call(null,G__15602__15613);
var G__15617 = G__15602__15613;
obj__15604 = G__15616;
G__15602__15605 = G__15617;
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
pr_str.cljs$lang$applyTo = (function (arglist__15618){
var objs = cljs.core.seq( arglist__15618 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__15619){
var objs = cljs.core.seq( arglist__15619 );;
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
pr.cljs$lang$applyTo = (function (arglist__15620){
var objs = cljs.core.seq( arglist__15620 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__15621){
var objs = cljs.core.seq( arglist__15621 );;
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
print_str.cljs$lang$applyTo = (function (arglist__15622){
var objs = cljs.core.seq( arglist__15622 );;
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
println.cljs$lang$applyTo = (function (arglist__15623){
var objs = cljs.core.seq( arglist__15623 );;
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
println_str.cljs$lang$applyTo = (function (arglist__15624){
var objs = cljs.core.seq( arglist__15624 );;
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
prn.cljs$lang$applyTo = (function (arglist__15625){
var objs = cljs.core.seq( arglist__15625 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__15626 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__15626,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____15627 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____15627))
{var nspc__15628 = temp__3698__auto____15627;

return cljs.core.str.call(null,nspc__15628,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____15629 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____15629))
{var nspc__15630 = temp__3698__auto____15629;

return cljs.core.str.call(null,nspc__15630,"/");
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
var pr_pair__15631 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__15631,"{",", ","}",opts,coll);
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
var this__15632 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__15633 = this;
var G__15634__15635 = cljs.core.seq.call(null,this__15633.watches);

if(cljs.core.truth_(G__15634__15635))
{var G__15637__15639 = cljs.core.first.call(null,G__15634__15635);
var vec__15638__15640 = G__15637__15639;
var key__15641 = cljs.core.nth.call(null,vec__15638__15640,0,null);
var f__15642 = cljs.core.nth.call(null,vec__15638__15640,1,null);
var G__15634__15643 = G__15634__15635;

var G__15637__15644 = G__15637__15639;
var G__15634__15645 = G__15634__15643;

while(true){
var vec__15646__15647 = G__15637__15644;
var key__15648 = cljs.core.nth.call(null,vec__15646__15647,0,null);
var f__15649 = cljs.core.nth.call(null,vec__15646__15647,1,null);
var G__15634__15650 = G__15634__15645;

f__15649.call(null,key__15648,this$,oldval,newval);
var temp__3698__auto____15651 = cljs.core.next.call(null,G__15634__15650);

if(cljs.core.truth_(temp__3698__auto____15651))
{var G__15634__15652 = temp__3698__auto____15651;

{
var G__15659 = cljs.core.first.call(null,G__15634__15652);
var G__15660 = G__15634__15652;
G__15637__15644 = G__15659;
G__15634__15645 = G__15660;
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
var this__15653 = this;
return this$.watches = cljs.core.assoc.call(null,this__15653.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__15654 = this;
return this$.watches = cljs.core.dissoc.call(null,this__15654.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__15655 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__15655.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15656 = this;
return this__15656.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15657 = this;
return this__15657.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__15658 = this;
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
var atom__15667 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__15668 = (function() { 
var G__15670__delegate = function (x,p__15661){
var map__15662__15663 = p__15661;
var map__15662__15664 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15662__15663))?cljs.core.apply.call(null,cljs.core.hash_map,map__15662__15663):map__15662__15663);
var validator__15665 = cljs.core.get.call(null,map__15662__15664,"\uFDD0'validator");
var meta__15666 = cljs.core.get.call(null,map__15662__15664,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__15666,validator__15665,null));
};
var G__15670 = function (x,var_args){
var p__15661 = null;
if (goog.isDef(var_args)) {
  p__15661 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15670__delegate.call(this, x, p__15661);
};
G__15670.cljs$lang$maxFixedArity = 1;
G__15670.cljs$lang$applyTo = (function (arglist__15671){
var x = cljs.core.first(arglist__15671);
var p__15661 = cljs.core.rest(arglist__15671);
return G__15670__delegate.call(this, x, p__15661);
});
return G__15670;
})()
;
atom = function(x,var_args){
var p__15661 = var_args;
switch(arguments.length){
case  1 :
return atom__15667.call(this,x);
default:
return atom__15668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__15668.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____15672 = a.validator;

if(cljs.core.truth_(temp__3698__auto____15672))
{var validate__15673 = temp__3698__auto____15672;

if(cljs.core.truth_(validate__15673.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__15674 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__15674,new_value);
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
var swap_BANG___15675 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___15676 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___15677 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___15678 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___15679 = (function() { 
var G__15681__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__15681 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__15681__delegate.call(this, a, f, x, y, z, more);
};
G__15681.cljs$lang$maxFixedArity = 5;
G__15681.cljs$lang$applyTo = (function (arglist__15682){
var a = cljs.core.first(arglist__15682);
var f = cljs.core.first(cljs.core.next(arglist__15682));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15682)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15682))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15682)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15682)))));
return G__15681__delegate.call(this, a, f, x, y, z, more);
});
return G__15681;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___15675.call(this,a,f);
case  3 :
return swap_BANG___15676.call(this,a,f,x);
case  4 :
return swap_BANG___15677.call(this,a,f,x,y);
case  5 :
return swap_BANG___15678.call(this,a,f,x,y,z);
default:
return swap_BANG___15679.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___15679.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15683){
var iref = cljs.core.first(arglist__15683);
var f = cljs.core.first(cljs.core.next(arglist__15683));
var args = cljs.core.rest(cljs.core.next(arglist__15683));
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
var gensym__15684 = (function (){
return gensym.call(null,"G__");
});
var gensym__15685 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15684.call(this);
case  1 :
return gensym__15685.call(this,prefix_string);
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
var this__15687 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__15687.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15688 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__15688.state,(function (p__15689){
var curr_state__15690 = p__15689;
var curr_state__15691 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__15690))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__15690):curr_state__15690);
var done__15692 = cljs.core.get.call(null,curr_state__15691,"\uFDD0'done");

if(cljs.core.truth_(done__15692))
{return curr_state__15691;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__15688.f.call(null)});
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
var map__15693__15694 = options;
var map__15693__15695 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15693__15694))?cljs.core.apply.call(null,cljs.core.hash_map,map__15693__15694):map__15693__15694);
var keywordize_keys__15696 = cljs.core.get.call(null,map__15693__15695,"\uFDD0'keywordize-keys");
var keyfn__15697 = (cljs.core.truth_(keywordize_keys__15696)?cljs.core.keyword:cljs.core.str);
var f__15703 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____15702 = (function iter__15698(s__15699){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15699__15700 = s__15699;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15699__15700)))
{var k__15701 = cljs.core.first.call(null,s__15699__15700);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__15697.call(null,k__15701),thisfn.call(null,(x[k__15701]))]),iter__15698.call(null,cljs.core.rest.call(null,s__15699__15700)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____15702.call(null,cljs.core.js_keys.call(null,x));
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

return f__15703.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15704){
var x = cljs.core.first(arglist__15704);
var options = cljs.core.rest(arglist__15704);
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
var mem__15705 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15709__delegate = function (args){
var temp__3695__auto____15706 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15705),args);

if(cljs.core.truth_(temp__3695__auto____15706))
{var v__15707 = temp__3695__auto____15706;

return v__15707;
} else
{var ret__15708 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15705,cljs.core.assoc,args,ret__15708);
return ret__15708;
}
};
var G__15709 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15709__delegate.call(this, args);
};
G__15709.cljs$lang$maxFixedArity = 0;
G__15709.cljs$lang$applyTo = (function (arglist__15710){
var args = cljs.core.seq( arglist__15710 );;
return G__15709__delegate.call(this, args);
});
return G__15709;
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
var trampoline__15712 = (function (f){
while(true){
var ret__15711 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15711)))
{{
var G__15715 = ret__15711;
f = G__15715;
continue;
}
} else
{return ret__15711;
}
break;
}
});
var trampoline__15713 = (function() { 
var G__15716__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15716 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15716__delegate.call(this, f, args);
};
G__15716.cljs$lang$maxFixedArity = 1;
G__15716.cljs$lang$applyTo = (function (arglist__15717){
var f = cljs.core.first(arglist__15717);
var args = cljs.core.rest(arglist__15717);
return G__15716__delegate.call(this, f, args);
});
return G__15716;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15712.call(this,f);
default:
return trampoline__15713.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15713.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15718 = (function (){
return rand.call(null,1);
});
var rand__15719 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15718.call(this);
case  1 :
return rand__15719.call(this,n);
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
var k__15721 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15721,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15721,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___15730 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15731 = (function (h,child,parent){
var or__3548__auto____15722 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15722))
{return or__3548__auto____15722;
} else
{var or__3548__auto____15723 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15723))
{return or__3548__auto____15723;
} else
{var and__3546__auto____15724 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15724))
{var and__3546__auto____15725 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15725))
{var and__3546__auto____15726 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15726))
{var ret__15727 = true;
var i__15728 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15729 = cljs.core.not.call(null,ret__15727);

if(cljs.core.truth_(or__3548__auto____15729))
{return or__3548__auto____15729;
} else
{return cljs.core._EQ_.call(null,i__15728,cljs.core.count.call(null,parent));
}
})()))
{return ret__15727;
} else
{{
var G__15733 = isa_QMARK_.call(null,h,child.call(null,i__15728),parent.call(null,i__15728));
var G__15734 = (i__15728 + 1);
ret__15727 = G__15733;
i__15728 = G__15734;
continue;
}
}
break;
}
} else
{return and__3546__auto____15726;
}
} else
{return and__3546__auto____15725;
}
} else
{return and__3546__auto____15724;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15730.call(this,h,child);
case  3 :
return isa_QMARK___15731.call(this,h,child,parent);
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
var parents__15735 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15736 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15735.call(this,h);
case  2 :
return parents__15736.call(this,h,tag);
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
var ancestors__15738 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15739 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15738.call(this,h);
case  2 :
return ancestors__15739.call(this,h,tag);
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
var descendants__15741 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15742 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15741.call(this,h);
case  2 :
return descendants__15742.call(this,h,tag);
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
var derive__15752 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15753 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__15747 = "\uFDD0'parents".call(null,h);
var td__15748 = "\uFDD0'descendants".call(null,h);
var ta__15749 = "\uFDD0'ancestors".call(null,h);
var tf__15750 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15751 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15747.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15749.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15749.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15747,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__15750.call(null,"\uFDD0'ancestors".call(null,h),tag,td__15748,parent,ta__15749),"\uFDD0'descendants":tf__15750.call(null,"\uFDD0'descendants".call(null,h),parent,ta__15749,tag,td__15748)});
})());

if(cljs.core.truth_(or__3548__auto____15751))
{return or__3548__auto____15751;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15752.call(this,h,tag);
case  3 :
return derive__15753.call(this,h,tag,parent);
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
var underive__15759 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15760 = (function (h,tag,parent){
var parentMap__15755 = "\uFDD0'parents".call(null,h);
var childsParents__15756 = (cljs.core.truth_(parentMap__15755.call(null,tag))?cljs.core.disj.call(null,parentMap__15755.call(null,tag),parent):cljs.core.set([]));
var newParents__15757 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15756))?cljs.core.assoc.call(null,parentMap__15755,tag,childsParents__15756):cljs.core.dissoc.call(null,parentMap__15755,tag));
var deriv_seq__15758 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15744_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15744_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15744_SHARP_),cljs.core.second.call(null,p1__15744_SHARP_)));
}),cljs.core.seq.call(null,newParents__15757)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15755.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15745_SHARP_,p2__15746_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15745_SHARP_,p2__15746_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15758));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15759.call(this,h,tag);
case  3 :
return underive__15760.call(this,h,tag,parent);
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
var xprefs__15762 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15764 = (cljs.core.truth_((function (){var and__3546__auto____15763 = xprefs__15762;

if(cljs.core.truth_(and__3546__auto____15763))
{return xprefs__15762.call(null,y);
} else
{return and__3546__auto____15763;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15764))
{return or__3548__auto____15764;
} else
{var or__3548__auto____15766 = (function (){var ps__15765 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15765) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15765),prefer_table)))
{} else
{}
{
var G__15769 = cljs.core.rest.call(null,ps__15765);
ps__15765 = G__15769;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15766))
{return or__3548__auto____15766;
} else
{var or__3548__auto____15768 = (function (){var ps__15767 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15767) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15767),y,prefer_table)))
{} else
{}
{
var G__15770 = cljs.core.rest.call(null,ps__15767);
ps__15767 = G__15770;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15768))
{return or__3548__auto____15768;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15771 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15771))
{return or__3548__auto____15771;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15780 = cljs.core.reduce.call(null,(function (be,p__15772){
var vec__15773__15774 = p__15772;
var k__15775 = cljs.core.nth.call(null,vec__15773__15774,0,null);
var ___15776 = cljs.core.nth.call(null,vec__15773__15774,1,null);
var e__15777 = vec__15773__15774;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15775)))
{var be2__15779 = (cljs.core.truth_((function (){var or__3548__auto____15778 = (be === null);

if(cljs.core.truth_(or__3548__auto____15778))
{return or__3548__auto____15778;
} else
{return cljs.core.dominates.call(null,k__15775,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15777:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15779),k__15775,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15775," and ",cljs.core.first.call(null,be2__15779),", and neither is preferred")));
}
return be2__15779;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15780))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15780));
return cljs.core.second.call(null,best_entry__15780);
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
if(cljs.core.truth_((function (){var and__3546__auto____15781 = mf;

if(cljs.core.truth_(and__3546__auto____15781))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15781;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15782 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15782))
{return or__3548__auto____15782;
} else
{var or__3548__auto____15783 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15783))
{return or__3548__auto____15783;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15784 = mf;

if(cljs.core.truth_(and__3546__auto____15784))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15784;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15785 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15785))
{return or__3548__auto____15785;
} else
{var or__3548__auto____15786 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15786))
{return or__3548__auto____15786;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15787 = mf;

if(cljs.core.truth_(and__3546__auto____15787))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15787;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15788 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15788))
{return or__3548__auto____15788;
} else
{var or__3548__auto____15789 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15789))
{return or__3548__auto____15789;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15790 = mf;

if(cljs.core.truth_(and__3546__auto____15790))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15790;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15791 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15791))
{return or__3548__auto____15791;
} else
{var or__3548__auto____15792 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15792))
{return or__3548__auto____15792;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15793 = mf;

if(cljs.core.truth_(and__3546__auto____15793))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15793;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15794 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15794))
{return or__3548__auto____15794;
} else
{var or__3548__auto____15795 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15795))
{return or__3548__auto____15795;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15796 = mf;

if(cljs.core.truth_(and__3546__auto____15796))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15796;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15797 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15797))
{return or__3548__auto____15797;
} else
{var or__3548__auto____15798 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15798))
{return or__3548__auto____15798;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15799 = mf;

if(cljs.core.truth_(and__3546__auto____15799))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15799;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15800 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15800))
{return or__3548__auto____15800;
} else
{var or__3548__auto____15801 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15801))
{return or__3548__auto____15801;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15802 = mf;

if(cljs.core.truth_(and__3546__auto____15802))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15802;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15803 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15803))
{return or__3548__auto____15803;
} else
{var or__3548__auto____15804 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15804))
{return or__3548__auto____15804;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15805 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15806 = cljs.core._get_method.call(null,mf,dispatch_val__15805);

if(cljs.core.truth_(target_fn__15806))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15805)));
}
return cljs.core.apply.call(null,target_fn__15806,args);
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
var this__15807 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15808 = this;
cljs.core.swap_BANG_.call(null,this__15808.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15808.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15808.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15808.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15809 = this;
cljs.core.swap_BANG_.call(null,this__15809.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15809.method_cache,this__15809.method_table,this__15809.cached_hierarchy,this__15809.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15810 = this;
cljs.core.swap_BANG_.call(null,this__15810.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15810.method_cache,this__15810.method_table,this__15810.cached_hierarchy,this__15810.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15811 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15811.cached_hierarchy),cljs.core.deref.call(null,this__15811.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15811.method_cache,this__15811.method_table,this__15811.cached_hierarchy,this__15811.hierarchy);
}
var temp__3695__auto____15812 = cljs.core.deref.call(null,this__15811.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15812))
{var target_fn__15813 = temp__3695__auto____15812;

return target_fn__15813;
} else
{var temp__3695__auto____15814 = cljs.core.find_and_cache_best_method.call(null,this__15811.name,dispatch_val,this__15811.hierarchy,this__15811.method_table,this__15811.prefer_table,this__15811.method_cache,this__15811.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15814))
{var target_fn__15815 = temp__3695__auto____15814;

return target_fn__15815;
} else
{return cljs.core.deref.call(null,this__15811.method_table).call(null,this__15811.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15816 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15816.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15816.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15816.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15816.method_cache,this__15816.method_table,this__15816.cached_hierarchy,this__15816.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15817 = this;
return cljs.core.deref.call(null,this__15817.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15818 = this;
return cljs.core.deref.call(null,this__15818.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15819 = this;
return cljs.core.do_dispatch.call(null,mf,this__15819.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15820__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15820 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15820__delegate.call(this, _, args);
};
G__15820.cljs$lang$maxFixedArity = 1;
G__15820.cljs$lang$applyTo = (function (arglist__15821){
var _ = cljs.core.first(arglist__15821);
var args = cljs.core.rest(arglist__15821);
return G__15820__delegate.call(this, _, args);
});
return G__15820;
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
