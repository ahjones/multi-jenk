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
var or__3548__auto____3186 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____3186))
{return or__3548__auto____3186;
} else
{var or__3548__auto____3187 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____3187))
{return or__3548__auto____3187;
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
var _invoke__3251 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3188 = this$;

if(cljs.core.truth_(and__3546__auto____3188))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3188;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____3189 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3189))
{return or__3548__auto____3189;
} else
{var or__3548__auto____3190 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3190))
{return or__3548__auto____3190;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__3252 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____3191 = this$;

if(cljs.core.truth_(and__3546__auto____3191))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3191;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____3192 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3192))
{return or__3548__auto____3192;
} else
{var or__3548__auto____3193 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3193))
{return or__3548__auto____3193;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3253 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____3194 = this$;

if(cljs.core.truth_(and__3546__auto____3194))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3194;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____3195 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3195))
{return or__3548__auto____3195;
} else
{var or__3548__auto____3196 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3196))
{return or__3548__auto____3196;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__3254 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____3197 = this$;

if(cljs.core.truth_(and__3546__auto____3197))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3197;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____3198 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3198))
{return or__3548__auto____3198;
} else
{var or__3548__auto____3199 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3199))
{return or__3548__auto____3199;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__3255 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____3200 = this$;

if(cljs.core.truth_(and__3546__auto____3200))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3200;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____3201 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3201))
{return or__3548__auto____3201;
} else
{var or__3548__auto____3202 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3202))
{return or__3548__auto____3202;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__3256 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____3203 = this$;

if(cljs.core.truth_(and__3546__auto____3203))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3203;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____3204 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3204))
{return or__3548__auto____3204;
} else
{var or__3548__auto____3205 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3205))
{return or__3548__auto____3205;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__3257 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____3206 = this$;

if(cljs.core.truth_(and__3546__auto____3206))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3206;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____3207 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3207))
{return or__3548__auto____3207;
} else
{var or__3548__auto____3208 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3208))
{return or__3548__auto____3208;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__3258 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____3209 = this$;

if(cljs.core.truth_(and__3546__auto____3209))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3209;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____3210 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3210))
{return or__3548__auto____3210;
} else
{var or__3548__auto____3211 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3211))
{return or__3548__auto____3211;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__3259 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____3212 = this$;

if(cljs.core.truth_(and__3546__auto____3212))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3212;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____3213 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3213))
{return or__3548__auto____3213;
} else
{var or__3548__auto____3214 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3214))
{return or__3548__auto____3214;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__3260 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____3215 = this$;

if(cljs.core.truth_(and__3546__auto____3215))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3215;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____3216 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3216))
{return or__3548__auto____3216;
} else
{var or__3548__auto____3217 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3217))
{return or__3548__auto____3217;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__3261 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____3218 = this$;

if(cljs.core.truth_(and__3546__auto____3218))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3218;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____3219 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3219))
{return or__3548__auto____3219;
} else
{var or__3548__auto____3220 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3220))
{return or__3548__auto____3220;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__3262 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____3221 = this$;

if(cljs.core.truth_(and__3546__auto____3221))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3221;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____3222 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3222))
{return or__3548__auto____3222;
} else
{var or__3548__auto____3223 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3223))
{return or__3548__auto____3223;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__3263 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____3224 = this$;

if(cljs.core.truth_(and__3546__auto____3224))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3224;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____3225 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3225))
{return or__3548__auto____3225;
} else
{var or__3548__auto____3226 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3226))
{return or__3548__auto____3226;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__3264 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____3227 = this$;

if(cljs.core.truth_(and__3546__auto____3227))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3227;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____3228 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3228))
{return or__3548__auto____3228;
} else
{var or__3548__auto____3229 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3229))
{return or__3548__auto____3229;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__3265 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____3230 = this$;

if(cljs.core.truth_(and__3546__auto____3230))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3230;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____3231 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3231))
{return or__3548__auto____3231;
} else
{var or__3548__auto____3232 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3232))
{return or__3548__auto____3232;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__3266 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____3233 = this$;

if(cljs.core.truth_(and__3546__auto____3233))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3233;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____3234 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3234))
{return or__3548__auto____3234;
} else
{var or__3548__auto____3235 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3235))
{return or__3548__auto____3235;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__3267 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____3236 = this$;

if(cljs.core.truth_(and__3546__auto____3236))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3236;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____3237 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3237))
{return or__3548__auto____3237;
} else
{var or__3548__auto____3238 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3238))
{return or__3548__auto____3238;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__3268 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____3239 = this$;

if(cljs.core.truth_(and__3546__auto____3239))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3239;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____3240 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3240))
{return or__3548__auto____3240;
} else
{var or__3548__auto____3241 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3241))
{return or__3548__auto____3241;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__3269 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____3242 = this$;

if(cljs.core.truth_(and__3546__auto____3242))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3242;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____3243 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3243))
{return or__3548__auto____3243;
} else
{var or__3548__auto____3244 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3244))
{return or__3548__auto____3244;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__3270 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____3245 = this$;

if(cljs.core.truth_(and__3546__auto____3245))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3245;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____3246 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3246))
{return or__3548__auto____3246;
} else
{var or__3548__auto____3247 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3247))
{return or__3548__auto____3247;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__3271 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____3248 = this$;

if(cljs.core.truth_(and__3546__auto____3248))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3248;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____3249 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3249))
{return or__3548__auto____3249;
} else
{var or__3548__auto____3250 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3250))
{return or__3548__auto____3250;
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
return _invoke__3251.call(this,this$);
case  2 :
return _invoke__3252.call(this,this$,a);
case  3 :
return _invoke__3253.call(this,this$,a,b);
case  4 :
return _invoke__3254.call(this,this$,a,b,c);
case  5 :
return _invoke__3255.call(this,this$,a,b,c,d);
case  6 :
return _invoke__3256.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__3257.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__3258.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__3259.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__3260.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__3261.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__3262.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__3263.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__3264.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__3265.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__3266.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__3267.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__3268.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__3269.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__3270.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__3271.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3273 = coll;

if(cljs.core.truth_(and__3546__auto____3273))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3273;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3274 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3274))
{return or__3548__auto____3274;
} else
{var or__3548__auto____3275 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3275))
{return or__3548__auto____3275;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3276 = coll;

if(cljs.core.truth_(and__3546__auto____3276))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3276;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3277 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3277))
{return or__3548__auto____3277;
} else
{var or__3548__auto____3278 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3278))
{return or__3548__auto____3278;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3279 = coll;

if(cljs.core.truth_(and__3546__auto____3279))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3279;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3280 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3280))
{return or__3548__auto____3280;
} else
{var or__3548__auto____3281 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3281))
{return or__3548__auto____3281;
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
var _nth__3288 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3282 = coll;

if(cljs.core.truth_(and__3546__auto____3282))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3282;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3283 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3283))
{return or__3548__auto____3283;
} else
{var or__3548__auto____3284 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3284))
{return or__3548__auto____3284;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3289 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3285 = coll;

if(cljs.core.truth_(and__3546__auto____3285))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3285;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3286 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3286))
{return or__3548__auto____3286;
} else
{var or__3548__auto____3287 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3287))
{return or__3548__auto____3287;
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
return _nth__3288.call(this,coll,n);
case  3 :
return _nth__3289.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3291 = coll;

if(cljs.core.truth_(and__3546__auto____3291))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3291;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3292 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3292))
{return or__3548__auto____3292;
} else
{var or__3548__auto____3293 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3293))
{return or__3548__auto____3293;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3294 = coll;

if(cljs.core.truth_(and__3546__auto____3294))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3294;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3295 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3295))
{return or__3548__auto____3295;
} else
{var or__3548__auto____3296 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3296))
{return or__3548__auto____3296;
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
var _lookup__3303 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3297 = o;

if(cljs.core.truth_(and__3546__auto____3297))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3297;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3298 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3298))
{return or__3548__auto____3298;
} else
{var or__3548__auto____3299 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3299))
{return or__3548__auto____3299;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3304 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3300 = o;

if(cljs.core.truth_(and__3546__auto____3300))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3300;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3301 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3301))
{return or__3548__auto____3301;
} else
{var or__3548__auto____3302 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3302))
{return or__3548__auto____3302;
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
return _lookup__3303.call(this,o,k);
case  3 :
return _lookup__3304.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3306 = coll;

if(cljs.core.truth_(and__3546__auto____3306))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3306;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3307 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3307))
{return or__3548__auto____3307;
} else
{var or__3548__auto____3308 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3308))
{return or__3548__auto____3308;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3309 = coll;

if(cljs.core.truth_(and__3546__auto____3309))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3309;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3310 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3310))
{return or__3548__auto____3310;
} else
{var or__3548__auto____3311 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3311))
{return or__3548__auto____3311;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3312 = coll;

if(cljs.core.truth_(and__3546__auto____3312))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3312;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3313 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3313))
{return or__3548__auto____3313;
} else
{var or__3548__auto____3314 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3314))
{return or__3548__auto____3314;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3315 = coll;

if(cljs.core.truth_(and__3546__auto____3315))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3315;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3316 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3316))
{return or__3548__auto____3316;
} else
{var or__3548__auto____3317 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3317))
{return or__3548__auto____3317;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3318 = coll;

if(cljs.core.truth_(and__3546__auto____3318))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3318;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3319 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3319))
{return or__3548__auto____3319;
} else
{var or__3548__auto____3320 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3320))
{return or__3548__auto____3320;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3321 = coll;

if(cljs.core.truth_(and__3546__auto____3321))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3321;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3322 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3322))
{return or__3548__auto____3322;
} else
{var or__3548__auto____3323 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3323))
{return or__3548__auto____3323;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3324 = coll;

if(cljs.core.truth_(and__3546__auto____3324))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3324;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3325 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3325))
{return or__3548__auto____3325;
} else
{var or__3548__auto____3326 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3326))
{return or__3548__auto____3326;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3327 = o;

if(cljs.core.truth_(and__3546__auto____3327))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3327;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3328 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3328))
{return or__3548__auto____3328;
} else
{var or__3548__auto____3329 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3329))
{return or__3548__auto____3329;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3330 = o;

if(cljs.core.truth_(and__3546__auto____3330))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3330;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3331 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3331))
{return or__3548__auto____3331;
} else
{var or__3548__auto____3332 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3332))
{return or__3548__auto____3332;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3333 = o;

if(cljs.core.truth_(and__3546__auto____3333))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3333;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3334 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3334))
{return or__3548__auto____3334;
} else
{var or__3548__auto____3335 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3335))
{return or__3548__auto____3335;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3336 = o;

if(cljs.core.truth_(and__3546__auto____3336))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3336;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3337 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3337))
{return or__3548__auto____3337;
} else
{var or__3548__auto____3338 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3338))
{return or__3548__auto____3338;
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
var _reduce__3345 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3339 = coll;

if(cljs.core.truth_(and__3546__auto____3339))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3339;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3340 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3340))
{return or__3548__auto____3340;
} else
{var or__3548__auto____3341 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3341))
{return or__3548__auto____3341;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3346 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3342 = coll;

if(cljs.core.truth_(and__3546__auto____3342))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3342;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3343 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3343))
{return or__3548__auto____3343;
} else
{var or__3548__auto____3344 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3344))
{return or__3548__auto____3344;
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
return _reduce__3345.call(this,coll,f);
case  3 :
return _reduce__3346.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3348 = o;

if(cljs.core.truth_(and__3546__auto____3348))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3348;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3349 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3349))
{return or__3548__auto____3349;
} else
{var or__3548__auto____3350 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3350))
{return or__3548__auto____3350;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3351 = o;

if(cljs.core.truth_(and__3546__auto____3351))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3351;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3352 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3352))
{return or__3548__auto____3352;
} else
{var or__3548__auto____3353 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3353))
{return or__3548__auto____3353;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3354 = o;

if(cljs.core.truth_(and__3546__auto____3354))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3354;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3355 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3355))
{return or__3548__auto____3355;
} else
{var or__3548__auto____3356 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3356))
{return or__3548__auto____3356;
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
if(cljs.core.truth_((function (){var and__3546__auto____3357 = o;

if(cljs.core.truth_(and__3546__auto____3357))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3357;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3358 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3358))
{return or__3548__auto____3358;
} else
{var or__3548__auto____3359 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3359))
{return or__3548__auto____3359;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3360 = d;

if(cljs.core.truth_(and__3546__auto____3360))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3360;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3361 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3361))
{return or__3548__auto____3361;
} else
{var or__3548__auto____3362 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3362))
{return or__3548__auto____3362;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3363 = this$;

if(cljs.core.truth_(and__3546__auto____3363))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3363;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3364 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3364))
{return or__3548__auto____3364;
} else
{var or__3548__auto____3365 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3365))
{return or__3548__auto____3365;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3366 = this$;

if(cljs.core.truth_(and__3546__auto____3366))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3366;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3367 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3367))
{return or__3548__auto____3367;
} else
{var or__3548__auto____3368 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3368))
{return or__3548__auto____3368;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3369 = this$;

if(cljs.core.truth_(and__3546__auto____3369))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3369;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3370 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3370))
{return or__3548__auto____3370;
} else
{var or__3548__auto____3371 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3371))
{return or__3548__auto____3371;
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
var G__3372 = null;
var G__3372__3373 = (function (o,k){
return null;
});
var G__3372__3374 = (function (o,k,not_found){
return not_found;
});
G__3372 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3372__3373.call(this,o,k);
case  3 :
return G__3372__3374.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3372;
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
var G__3376 = null;
var G__3376__3377 = (function (_,f){
return f.call(null);
});
var G__3376__3378 = (function (_,f,start){
return start;
});
G__3376 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3376__3377.call(this,_,f);
case  3 :
return G__3376__3378.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3376;
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
var G__3380 = null;
var G__3380__3381 = (function (_,n){
return null;
});
var G__3380__3382 = (function (_,n,not_found){
return not_found;
});
G__3380 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3380__3381.call(this,_,n);
case  3 :
return G__3380__3382.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3380;
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
var ci_reduce__3390 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3384 = cljs.core._nth.call(null,cicoll,0);
var n__3385 = 1;

while(true){
if(cljs.core.truth_((n__3385 < cljs.core._count.call(null,cicoll))))
{{
var G__3394 = f.call(null,val__3384,cljs.core._nth.call(null,cicoll,n__3385));
var G__3395 = (n__3385 + 1);
val__3384 = G__3394;
n__3385 = G__3395;
continue;
}
} else
{return val__3384;
}
break;
}
}
});
var ci_reduce__3391 = (function (cicoll,f,val){
var val__3386 = val;
var n__3387 = 0;

while(true){
if(cljs.core.truth_((n__3387 < cljs.core._count.call(null,cicoll))))
{{
var G__3396 = f.call(null,val__3386,cljs.core._nth.call(null,cicoll,n__3387));
var G__3397 = (n__3387 + 1);
val__3386 = G__3396;
n__3387 = G__3397;
continue;
}
} else
{return val__3386;
}
break;
}
});
var ci_reduce__3392 = (function (cicoll,f,val,idx){
var val__3388 = val;
var n__3389 = idx;

while(true){
if(cljs.core.truth_((n__3389 < cljs.core._count.call(null,cicoll))))
{{
var G__3398 = f.call(null,val__3388,cljs.core._nth.call(null,cicoll,n__3389));
var G__3399 = (n__3389 + 1);
val__3388 = G__3398;
n__3389 = G__3399;
continue;
}
} else
{return val__3388;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3390.call(this,cicoll,f);
case  3 :
return ci_reduce__3391.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3392.call(this,cicoll,f,val,idx);
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
var this__3400 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3413 = null;
var G__3413__3414 = (function (_,f){
var this__3401 = this;
return cljs.core.ci_reduce.call(null,this__3401.a,f,(this__3401.a[this__3401.i]),(this__3401.i + 1));
});
var G__3413__3415 = (function (_,f,start){
var this__3402 = this;
return cljs.core.ci_reduce.call(null,this__3402.a,f,start,this__3402.i);
});
G__3413 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3413__3414.call(this,_,f);
case  3 :
return G__3413__3415.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3413;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3403 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3404 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3417 = null;
var G__3417__3418 = (function (coll,n){
var this__3405 = this;
var i__3406 = (n + this__3405.i);

if(cljs.core.truth_((i__3406 < this__3405.a.length)))
{return (this__3405.a[i__3406]);
} else
{return null;
}
});
var G__3417__3419 = (function (coll,n,not_found){
var this__3407 = this;
var i__3408 = (n + this__3407.i);

if(cljs.core.truth_((i__3408 < this__3407.a.length)))
{return (this__3407.a[i__3408]);
} else
{return not_found;
}
});
G__3417 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3417__3418.call(this,coll,n);
case  3 :
return G__3417__3419.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3417;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3409 = this;
return (this__3409.a.length - this__3409.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3410 = this;
return (this__3410.a[this__3410.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3411 = this;
if(cljs.core.truth_(((this__3411.i + 1) < this__3411.a.length)))
{return (new cljs.core.IndexedSeq(this__3411.a,(this__3411.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3412 = this;
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
var G__3421 = null;
var G__3421__3422 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3421__3423 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3421 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3421__3422.call(this,array,f);
case  3 :
return G__3421__3423.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3421;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3425 = null;
var G__3425__3426 = (function (array,k){
return (array[k]);
});
var G__3425__3427 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3425 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3425__3426.call(this,array,k);
case  3 :
return G__3425__3427.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3425;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3429 = null;
var G__3429__3430 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3429__3431 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3429 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3429__3430.call(this,array,n);
case  3 :
return G__3429__3431.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3429;
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
var temp__3698__auto____3433 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3433))
{var s__3434 = temp__3698__auto____3433;

return cljs.core._first.call(null,s__3434);
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
var G__3435 = cljs.core.next.call(null,s);
s = G__3435;
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
var s__3436 = cljs.core.seq.call(null,x);
var n__3437 = 0;

while(true){
if(cljs.core.truth_(s__3436))
{{
var G__3438 = cljs.core.next.call(null,s__3436);
var G__3439 = (n__3437 + 1);
s__3436 = G__3438;
n__3437 = G__3439;
continue;
}
} else
{return n__3437;
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
var conj__3440 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3441 = (function() { 
var G__3443__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3444 = conj.call(null,coll,x);
var G__3445 = cljs.core.first.call(null,xs);
var G__3446 = cljs.core.next.call(null,xs);
coll = G__3444;
x = G__3445;
xs = G__3446;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3443 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3443__delegate.call(this, coll, x, xs);
};
G__3443.cljs$lang$maxFixedArity = 2;
G__3443.cljs$lang$applyTo = (function (arglist__3447){
var coll = cljs.core.first(arglist__3447);
var x = cljs.core.first(cljs.core.next(arglist__3447));
var xs = cljs.core.rest(cljs.core.next(arglist__3447));
return G__3443__delegate.call(this, coll, x, xs);
});
return G__3443;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3440.call(this,coll,x);
default:
return conj__3441.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3441.cljs$lang$applyTo;
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
var nth__3448 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3449 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3448.call(this,coll,n);
case  3 :
return nth__3449.call(this,coll,n,not_found);
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
var get__3451 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3452 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3451.call(this,o,k);
case  3 :
return get__3452.call(this,o,k,not_found);
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
var assoc__3455 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3456 = (function() { 
var G__3458__delegate = function (coll,k,v,kvs){
while(true){
var ret__3454 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3459 = ret__3454;
var G__3460 = cljs.core.first.call(null,kvs);
var G__3461 = cljs.core.second.call(null,kvs);
var G__3462 = cljs.core.nnext.call(null,kvs);
coll = G__3459;
k = G__3460;
v = G__3461;
kvs = G__3462;
continue;
}
} else
{return ret__3454;
}
break;
}
};
var G__3458 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3458__delegate.call(this, coll, k, v, kvs);
};
G__3458.cljs$lang$maxFixedArity = 3;
G__3458.cljs$lang$applyTo = (function (arglist__3463){
var coll = cljs.core.first(arglist__3463);
var k = cljs.core.first(cljs.core.next(arglist__3463));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3463)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3463)));
return G__3458__delegate.call(this, coll, k, v, kvs);
});
return G__3458;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3455.call(this,coll,k,v);
default:
return assoc__3456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3456.cljs$lang$applyTo;
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
var dissoc__3465 = (function (coll){
return coll;
});
var dissoc__3466 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3467 = (function() { 
var G__3469__delegate = function (coll,k,ks){
while(true){
var ret__3464 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3470 = ret__3464;
var G__3471 = cljs.core.first.call(null,ks);
var G__3472 = cljs.core.next.call(null,ks);
coll = G__3470;
k = G__3471;
ks = G__3472;
continue;
}
} else
{return ret__3464;
}
break;
}
};
var G__3469 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3469__delegate.call(this, coll, k, ks);
};
G__3469.cljs$lang$maxFixedArity = 2;
G__3469.cljs$lang$applyTo = (function (arglist__3473){
var coll = cljs.core.first(arglist__3473);
var k = cljs.core.first(cljs.core.next(arglist__3473));
var ks = cljs.core.rest(cljs.core.next(arglist__3473));
return G__3469__delegate.call(this, coll, k, ks);
});
return G__3469;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3465.call(this,coll);
case  2 :
return dissoc__3466.call(this,coll,k);
default:
return dissoc__3467.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3467.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____3474 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3475 = x__451__auto____3474;

if(cljs.core.truth_(and__3546__auto____3475))
{var and__3546__auto____3476 = x__451__auto____3474.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3476))
{return cljs.core.not.call(null,x__451__auto____3474.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3476;
}
} else
{return and__3546__auto____3475;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____3474);
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
var disj__3478 = (function (coll){
return coll;
});
var disj__3479 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3480 = (function() { 
var G__3482__delegate = function (coll,k,ks){
while(true){
var ret__3477 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3483 = ret__3477;
var G__3484 = cljs.core.first.call(null,ks);
var G__3485 = cljs.core.next.call(null,ks);
coll = G__3483;
k = G__3484;
ks = G__3485;
continue;
}
} else
{return ret__3477;
}
break;
}
};
var G__3482 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3482__delegate.call(this, coll, k, ks);
};
G__3482.cljs$lang$maxFixedArity = 2;
G__3482.cljs$lang$applyTo = (function (arglist__3486){
var coll = cljs.core.first(arglist__3486);
var k = cljs.core.first(cljs.core.next(arglist__3486));
var ks = cljs.core.rest(cljs.core.next(arglist__3486));
return G__3482__delegate.call(this, coll, k, ks);
});
return G__3482;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3478.call(this,coll);
case  2 :
return disj__3479.call(this,coll,k);
default:
return disj__3480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3480.cljs$lang$applyTo;
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
{var x__451__auto____3487 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3488 = x__451__auto____3487;

if(cljs.core.truth_(and__3546__auto____3488))
{var and__3546__auto____3489 = x__451__auto____3487.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3489))
{return cljs.core.not.call(null,x__451__auto____3487.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3489;
}
} else
{return and__3546__auto____3488;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____3487);
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
{var x__451__auto____3490 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3491 = x__451__auto____3490;

if(cljs.core.truth_(and__3546__auto____3491))
{var and__3546__auto____3492 = x__451__auto____3490.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3492))
{return cljs.core.not.call(null,x__451__auto____3490.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3492;
}
} else
{return and__3546__auto____3491;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____3490);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____3493 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3494 = x__451__auto____3493;

if(cljs.core.truth_(and__3546__auto____3494))
{var and__3546__auto____3495 = x__451__auto____3493.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3495))
{return cljs.core.not.call(null,x__451__auto____3493.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3495;
}
} else
{return and__3546__auto____3494;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____3493);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____3496 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3497 = x__451__auto____3496;

if(cljs.core.truth_(and__3546__auto____3497))
{var and__3546__auto____3498 = x__451__auto____3496.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3498))
{return cljs.core.not.call(null,x__451__auto____3496.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3498;
}
} else
{return and__3546__auto____3497;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____3496);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____3499 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3500 = x__451__auto____3499;

if(cljs.core.truth_(and__3546__auto____3500))
{var and__3546__auto____3501 = x__451__auto____3499.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3501))
{return cljs.core.not.call(null,x__451__auto____3499.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3501;
}
} else
{return and__3546__auto____3500;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____3499);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____3502 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3503 = x__451__auto____3502;

if(cljs.core.truth_(and__3546__auto____3503))
{var and__3546__auto____3504 = x__451__auto____3502.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3504))
{return cljs.core.not.call(null,x__451__auto____3502.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3504;
}
} else
{return and__3546__auto____3503;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____3502);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____3505 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3506 = x__451__auto____3505;

if(cljs.core.truth_(and__3546__auto____3506))
{var and__3546__auto____3507 = x__451__auto____3505.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3507))
{return cljs.core.not.call(null,x__451__auto____3505.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3507;
}
} else
{return and__3546__auto____3506;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____3505);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3508 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3508.push(key);
}));
return keys__3508;
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
{var x__451__auto____3509 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3510 = x__451__auto____3509;

if(cljs.core.truth_(and__3546__auto____3510))
{var and__3546__auto____3511 = x__451__auto____3509.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3511))
{return cljs.core.not.call(null,x__451__auto____3509.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3511;
}
} else
{return and__3546__auto____3510;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____3509);
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
var and__3546__auto____3512 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3512))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3513 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____3513))
{return or__3548__auto____3513;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____3512;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3514 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3514))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____3514;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3515 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3515))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____3515;
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
var and__3546__auto____3516 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3516))
{return (n == n.toFixed());
} else
{return and__3546__auto____3516;
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
if(cljs.core.truth_((function (){var and__3546__auto____3517 = coll;

if(cljs.core.truth_(and__3546__auto____3517))
{var and__3546__auto____3518 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3518))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3518;
}
} else
{return and__3546__auto____3517;
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
var distinct_QMARK___3523 = (function (x){
return true;
});
var distinct_QMARK___3524 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3525 = (function() { 
var G__3527__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3519 = cljs.core.set([y,x]);
var xs__3520 = more;

while(true){
var x__3521 = cljs.core.first.call(null,xs__3520);
var etc__3522 = cljs.core.next.call(null,xs__3520);

if(cljs.core.truth_(xs__3520))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3519,x__3521)))
{return false;
} else
{{
var G__3528 = cljs.core.conj.call(null,s__3519,x__3521);
var G__3529 = etc__3522;
s__3519 = G__3528;
xs__3520 = G__3529;
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
var G__3527 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3527__delegate.call(this, x, y, more);
};
G__3527.cljs$lang$maxFixedArity = 2;
G__3527.cljs$lang$applyTo = (function (arglist__3530){
var x = cljs.core.first(arglist__3530);
var y = cljs.core.first(cljs.core.next(arglist__3530));
var more = cljs.core.rest(cljs.core.next(arglist__3530));
return G__3527__delegate.call(this, x, y, more);
});
return G__3527;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3523.call(this,x);
case  2 :
return distinct_QMARK___3524.call(this,x,y);
default:
return distinct_QMARK___3525.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3525.cljs$lang$applyTo;
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
var r__3531 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3531)))
{return r__3531;
} else
{if(cljs.core.truth_(r__3531))
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
var sort__3533 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3534 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3532 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3532,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3532);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3533.call(this,comp);
case  2 :
return sort__3534.call(this,comp,coll);
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
var sort_by__3536 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3537 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3536.call(this,keyfn,comp);
case  3 :
return sort_by__3537.call(this,keyfn,comp,coll);
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
var reduce__3539 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3540 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3539.call(this,f,val);
case  3 :
return reduce__3540.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3546 = (function (f,coll){
var temp__3695__auto____3542 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3542))
{var s__3543 = temp__3695__auto____3542;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3543),cljs.core.next.call(null,s__3543));
} else
{return f.call(null);
}
});
var seq_reduce__3547 = (function (f,val,coll){
var val__3544 = val;
var coll__3545 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3545))
{{
var G__3549 = f.call(null,val__3544,cljs.core.first.call(null,coll__3545));
var G__3550 = cljs.core.next.call(null,coll__3545);
val__3544 = G__3549;
coll__3545 = G__3550;
continue;
}
} else
{return val__3544;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3546.call(this,f,val);
case  3 :
return seq_reduce__3547.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3551 = null;
var G__3551__3552 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3551__3553 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3551 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3551__3552.call(this,coll,f);
case  3 :
return G__3551__3553.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3551;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3555 = (function (){
return 0;
});
var _PLUS___3556 = (function (x){
return x;
});
var _PLUS___3557 = (function (x,y){
return (x + y);
});
var _PLUS___3558 = (function() { 
var G__3560__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3560 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3560__delegate.call(this, x, y, more);
};
G__3560.cljs$lang$maxFixedArity = 2;
G__3560.cljs$lang$applyTo = (function (arglist__3561){
var x = cljs.core.first(arglist__3561);
var y = cljs.core.first(cljs.core.next(arglist__3561));
var more = cljs.core.rest(cljs.core.next(arglist__3561));
return G__3560__delegate.call(this, x, y, more);
});
return G__3560;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3555.call(this);
case  1 :
return _PLUS___3556.call(this,x);
case  2 :
return _PLUS___3557.call(this,x,y);
default:
return _PLUS___3558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3558.cljs$lang$applyTo;
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
var ___3562 = (function (x){
return (- x);
});
var ___3563 = (function (x,y){
return (x - y);
});
var ___3564 = (function() { 
var G__3566__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3566 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3566__delegate.call(this, x, y, more);
};
G__3566.cljs$lang$maxFixedArity = 2;
G__3566.cljs$lang$applyTo = (function (arglist__3567){
var x = cljs.core.first(arglist__3567);
var y = cljs.core.first(cljs.core.next(arglist__3567));
var more = cljs.core.rest(cljs.core.next(arglist__3567));
return G__3566__delegate.call(this, x, y, more);
});
return G__3566;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3562.call(this,x);
case  2 :
return ___3563.call(this,x,y);
default:
return ___3564.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3564.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3568 = (function (){
return 1;
});
var _STAR___3569 = (function (x){
return x;
});
var _STAR___3570 = (function (x,y){
return (x * y);
});
var _STAR___3571 = (function() { 
var G__3573__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3573 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3573__delegate.call(this, x, y, more);
};
G__3573.cljs$lang$maxFixedArity = 2;
G__3573.cljs$lang$applyTo = (function (arglist__3574){
var x = cljs.core.first(arglist__3574);
var y = cljs.core.first(cljs.core.next(arglist__3574));
var more = cljs.core.rest(cljs.core.next(arglist__3574));
return G__3573__delegate.call(this, x, y, more);
});
return G__3573;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3568.call(this);
case  1 :
return _STAR___3569.call(this,x);
case  2 :
return _STAR___3570.call(this,x,y);
default:
return _STAR___3571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3571.cljs$lang$applyTo;
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
var _SLASH___3575 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3576 = (function (x,y){
return (x / y);
});
var _SLASH___3577 = (function() { 
var G__3579__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3579 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3579__delegate.call(this, x, y, more);
};
G__3579.cljs$lang$maxFixedArity = 2;
G__3579.cljs$lang$applyTo = (function (arglist__3580){
var x = cljs.core.first(arglist__3580);
var y = cljs.core.first(cljs.core.next(arglist__3580));
var more = cljs.core.rest(cljs.core.next(arglist__3580));
return G__3579__delegate.call(this, x, y, more);
});
return G__3579;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3575.call(this,x);
case  2 :
return _SLASH___3576.call(this,x,y);
default:
return _SLASH___3577.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3577.cljs$lang$applyTo;
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
var _LT___3581 = (function (x){
return true;
});
var _LT___3582 = (function (x,y){
return (x < y);
});
var _LT___3583 = (function() { 
var G__3585__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3586 = y;
var G__3587 = cljs.core.first.call(null,more);
var G__3588 = cljs.core.next.call(null,more);
x = G__3586;
y = G__3587;
more = G__3588;
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
var G__3585 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3585__delegate.call(this, x, y, more);
};
G__3585.cljs$lang$maxFixedArity = 2;
G__3585.cljs$lang$applyTo = (function (arglist__3589){
var x = cljs.core.first(arglist__3589);
var y = cljs.core.first(cljs.core.next(arglist__3589));
var more = cljs.core.rest(cljs.core.next(arglist__3589));
return G__3585__delegate.call(this, x, y, more);
});
return G__3585;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3581.call(this,x);
case  2 :
return _LT___3582.call(this,x,y);
default:
return _LT___3583.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3583.cljs$lang$applyTo;
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
var _LT__EQ___3590 = (function (x){
return true;
});
var _LT__EQ___3591 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3592 = (function() { 
var G__3594__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3595 = y;
var G__3596 = cljs.core.first.call(null,more);
var G__3597 = cljs.core.next.call(null,more);
x = G__3595;
y = G__3596;
more = G__3597;
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
var G__3594 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3594__delegate.call(this, x, y, more);
};
G__3594.cljs$lang$maxFixedArity = 2;
G__3594.cljs$lang$applyTo = (function (arglist__3598){
var x = cljs.core.first(arglist__3598);
var y = cljs.core.first(cljs.core.next(arglist__3598));
var more = cljs.core.rest(cljs.core.next(arglist__3598));
return G__3594__delegate.call(this, x, y, more);
});
return G__3594;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3590.call(this,x);
case  2 :
return _LT__EQ___3591.call(this,x,y);
default:
return _LT__EQ___3592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3592.cljs$lang$applyTo;
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
var _GT___3599 = (function (x){
return true;
});
var _GT___3600 = (function (x,y){
return (x > y);
});
var _GT___3601 = (function() { 
var G__3603__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3604 = y;
var G__3605 = cljs.core.first.call(null,more);
var G__3606 = cljs.core.next.call(null,more);
x = G__3604;
y = G__3605;
more = G__3606;
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
var G__3603 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3603__delegate.call(this, x, y, more);
};
G__3603.cljs$lang$maxFixedArity = 2;
G__3603.cljs$lang$applyTo = (function (arglist__3607){
var x = cljs.core.first(arglist__3607);
var y = cljs.core.first(cljs.core.next(arglist__3607));
var more = cljs.core.rest(cljs.core.next(arglist__3607));
return G__3603__delegate.call(this, x, y, more);
});
return G__3603;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3599.call(this,x);
case  2 :
return _GT___3600.call(this,x,y);
default:
return _GT___3601.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3601.cljs$lang$applyTo;
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
var _GT__EQ___3608 = (function (x){
return true;
});
var _GT__EQ___3609 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3610 = (function() { 
var G__3612__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3613 = y;
var G__3614 = cljs.core.first.call(null,more);
var G__3615 = cljs.core.next.call(null,more);
x = G__3613;
y = G__3614;
more = G__3615;
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
var G__3612 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3612__delegate.call(this, x, y, more);
};
G__3612.cljs$lang$maxFixedArity = 2;
G__3612.cljs$lang$applyTo = (function (arglist__3616){
var x = cljs.core.first(arglist__3616);
var y = cljs.core.first(cljs.core.next(arglist__3616));
var more = cljs.core.rest(cljs.core.next(arglist__3616));
return G__3612__delegate.call(this, x, y, more);
});
return G__3612;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3608.call(this,x);
case  2 :
return _GT__EQ___3609.call(this,x,y);
default:
return _GT__EQ___3610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3610.cljs$lang$applyTo;
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
var max__3617 = (function (x){
return x;
});
var max__3618 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3619 = (function() { 
var G__3621__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3621 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3621__delegate.call(this, x, y, more);
};
G__3621.cljs$lang$maxFixedArity = 2;
G__3621.cljs$lang$applyTo = (function (arglist__3622){
var x = cljs.core.first(arglist__3622);
var y = cljs.core.first(cljs.core.next(arglist__3622));
var more = cljs.core.rest(cljs.core.next(arglist__3622));
return G__3621__delegate.call(this, x, y, more);
});
return G__3621;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3617.call(this,x);
case  2 :
return max__3618.call(this,x,y);
default:
return max__3619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3619.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3623 = (function (x){
return x;
});
var min__3624 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3625 = (function() { 
var G__3627__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3627 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3627__delegate.call(this, x, y, more);
};
G__3627.cljs$lang$maxFixedArity = 2;
G__3627.cljs$lang$applyTo = (function (arglist__3628){
var x = cljs.core.first(arglist__3628);
var y = cljs.core.first(cljs.core.next(arglist__3628));
var more = cljs.core.rest(cljs.core.next(arglist__3628));
return G__3627__delegate.call(this, x, y, more);
});
return G__3627;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3623.call(this,x);
case  2 :
return min__3624.call(this,x,y);
default:
return min__3625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3625.cljs$lang$applyTo;
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
var rem__3629 = (n % d);

return cljs.core.fix.call(null,((n - rem__3629) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3630 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3630));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3631 = (function (){
return Math.random.call(null);
});
var rand__3632 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3631.call(this);
case  1 :
return rand__3632.call(this,n);
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
var _EQ__EQ___3634 = (function (x){
return true;
});
var _EQ__EQ___3635 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3636 = (function() { 
var G__3638__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3639 = y;
var G__3640 = cljs.core.first.call(null,more);
var G__3641 = cljs.core.next.call(null,more);
x = G__3639;
y = G__3640;
more = G__3641;
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
var G__3638 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3638__delegate.call(this, x, y, more);
};
G__3638.cljs$lang$maxFixedArity = 2;
G__3638.cljs$lang$applyTo = (function (arglist__3642){
var x = cljs.core.first(arglist__3642);
var y = cljs.core.first(cljs.core.next(arglist__3642));
var more = cljs.core.rest(cljs.core.next(arglist__3642));
return G__3638__delegate.call(this, x, y, more);
});
return G__3638;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3634.call(this,x);
case  2 :
return _EQ__EQ___3635.call(this,x,y);
default:
return _EQ__EQ___3636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3636.cljs$lang$applyTo;
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
var n__3643 = n;
var xs__3644 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3645 = xs__3644;

if(cljs.core.truth_(and__3546__auto____3645))
{return (n__3643 > 0);
} else
{return and__3546__auto____3645;
}
})()))
{{
var G__3646 = (n__3643 - 1);
var G__3647 = cljs.core.next.call(null,xs__3644);
n__3643 = G__3646;
xs__3644 = G__3647;
continue;
}
} else
{return xs__3644;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3652 = null;
var G__3652__3653 = (function (coll,n){
var temp__3695__auto____3648 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3648))
{var xs__3649 = temp__3695__auto____3648;

return cljs.core.first.call(null,xs__3649);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3652__3654 = (function (coll,n,not_found){
var temp__3695__auto____3650 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3650))
{var xs__3651 = temp__3695__auto____3650;

return cljs.core.first.call(null,xs__3651);
} else
{return not_found;
}
});
G__3652 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3652__3653.call(this,coll,n);
case  3 :
return G__3652__3654.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3652;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3656 = (function (){
return "";
});
var str_STAR___3657 = (function (x){
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
var str_STAR___3658 = (function() { 
var G__3660__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3661 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3662 = cljs.core.next.call(null,more);
sb = G__3661;
more = G__3662;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3660 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3660__delegate.call(this, x, ys);
};
G__3660.cljs$lang$maxFixedArity = 1;
G__3660.cljs$lang$applyTo = (function (arglist__3663){
var x = cljs.core.first(arglist__3663);
var ys = cljs.core.rest(arglist__3663);
return G__3660__delegate.call(this, x, ys);
});
return G__3660;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3656.call(this);
case  1 :
return str_STAR___3657.call(this,x);
default:
return str_STAR___3658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3658.cljs$lang$applyTo;
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
var str__3664 = (function (){
return "";
});
var str__3665 = (function (x){
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
var str__3666 = (function() { 
var G__3668__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3669 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__3670 = cljs.core.next.call(null,more);
sb = G__3669;
more = G__3670;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__3668 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3668__delegate.call(this, x, ys);
};
G__3668.cljs$lang$maxFixedArity = 1;
G__3668.cljs$lang$applyTo = (function (arglist__3671){
var x = cljs.core.first(arglist__3671);
var ys = cljs.core.rest(arglist__3671);
return G__3668__delegate.call(this, x, ys);
});
return G__3668;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3664.call(this);
case  1 :
return str__3665.call(this,x);
default:
return str__3666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3666.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3672 = (function (s,start){
return s.substring(start);
});
var subs__3673 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3672.call(this,s,start);
case  3 :
return subs__3673.call(this,s,start,end);
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
var symbol__3675 = (function (name){
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
var symbol__3676 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3675.call(this,ns);
case  2 :
return symbol__3676.call(this,ns,name);
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
var keyword__3678 = (function (name){
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
var keyword__3679 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3678.call(this,ns);
case  2 :
return keyword__3679.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3681 = cljs.core.seq.call(null,x);
var ys__3682 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__3681 === null)))
{return (ys__3682 === null);
} else
{if(cljs.core.truth_((ys__3682 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3681),cljs.core.first.call(null,ys__3682))))
{{
var G__3683 = cljs.core.next.call(null,xs__3681);
var G__3684 = cljs.core.next.call(null,ys__3682);
xs__3681 = G__3683;
ys__3682 = G__3684;
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
return cljs.core.reduce.call(null,(function (p1__3685_SHARP_,p2__3686_SHARP_){
return cljs.core.hash_combine.call(null,p1__3685_SHARP_,cljs.core.hash.call(null,p2__3686_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3687__3688 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3687__3688))
{var G__3690__3692 = cljs.core.first.call(null,G__3687__3688);
var vec__3691__3693 = G__3690__3692;
var key_name__3694 = cljs.core.nth.call(null,vec__3691__3693,0,null);
var f__3695 = cljs.core.nth.call(null,vec__3691__3693,1,null);
var G__3687__3696 = G__3687__3688;

var G__3690__3697 = G__3690__3692;
var G__3687__3698 = G__3687__3696;

while(true){
var vec__3699__3700 = G__3690__3697;
var key_name__3701 = cljs.core.nth.call(null,vec__3699__3700,0,null);
var f__3702 = cljs.core.nth.call(null,vec__3699__3700,1,null);
var G__3687__3703 = G__3687__3698;

var str_name__3704 = cljs.core.name.call(null,key_name__3701);

obj[str_name__3704] = f__3702;
var temp__3698__auto____3705 = cljs.core.next.call(null,G__3687__3703);

if(cljs.core.truth_(temp__3698__auto____3705))
{var G__3687__3706 = temp__3698__auto____3705;

{
var G__3707 = cljs.core.first.call(null,G__3687__3706);
var G__3708 = G__3687__3706;
G__3690__3697 = G__3707;
G__3687__3698 = G__3708;
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
var this__3709 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3710 = this;
return (new cljs.core.List(this__3710.meta,o,coll,(this__3710.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3711 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3712 = this;
return this__3712.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3713 = this;
return this__3713.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3714 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3715 = this;
return this__3715.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3716 = this;
return this__3716.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3717 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3718 = this;
return (new cljs.core.List(meta,this__3718.first,this__3718.rest,this__3718.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3719 = this;
return this__3719.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3720 = this;
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
var this__3721 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3722 = this;
return (new cljs.core.List(this__3722.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3723 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3724 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3725 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3726 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3727 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3728 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3729 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3730 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3731 = this;
return this__3731.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3732 = this;
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
list.cljs$lang$applyTo = (function (arglist__3733){
var items = cljs.core.seq( arglist__3733 );;
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
var this__3734 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3735 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3736 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3737 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3737.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3738 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3739 = this;
return this__3739.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3740 = this;
if(cljs.core.truth_((this__3740.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__3740.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3741 = this;
return this__3741.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3742 = this;
return (new cljs.core.Cons(meta,this__3742.first,this__3742.rest));
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
var G__3743 = null;
var G__3743__3744 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3743__3745 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3743 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3743__3744.call(this,string,f);
case  3 :
return G__3743__3745.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3743;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3747 = null;
var G__3747__3748 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3747__3749 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3747 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3747__3748.call(this,string,k);
case  3 :
return G__3747__3749.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3747;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3751 = null;
var G__3751__3752 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3751__3753 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3751 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3751__3752.call(this,string,n);
case  3 :
return G__3751__3753.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3751;
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
var G__3761 = null;
var G__3761__3762 = (function (tsym3755,coll){
var tsym3755__3757 = this;

var this$__3758 = tsym3755__3757;

return cljs.core.get.call(null,coll,this$__3758.toString());
});
var G__3761__3763 = (function (tsym3756,coll,not_found){
var tsym3756__3759 = this;

var this$__3760 = tsym3756__3759;

return cljs.core.get.call(null,coll,this$__3760.toString(),not_found);
});
G__3761 = function(tsym3756,coll,not_found){
switch(arguments.length){
case  2 :
return G__3761__3762.call(this,tsym3756,coll);
case  3 :
return G__3761__3763.call(this,tsym3756,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3761;
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
var x__3765 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3765;
} else
{lazy_seq.x = x__3765.call(null);
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
var this__3766 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3767 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3768 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3769 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3769.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3770 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3771 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3772 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3773 = this;
return this__3773.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3774 = this;
return (new cljs.core.LazySeq(meta,this__3774.realized,this__3774.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3775 = [];

var s__3776 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3776)))
{ary__3775.push(cljs.core.first.call(null,s__3776));
{
var G__3777 = cljs.core.next.call(null,s__3776);
s__3776 = G__3777;
continue;
}
} else
{return ary__3775;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3778 = s;
var i__3779 = n;
var sum__3780 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3781 = (i__3779 > 0);

if(cljs.core.truth_(and__3546__auto____3781))
{return cljs.core.seq.call(null,s__3778);
} else
{return and__3546__auto____3781;
}
})()))
{{
var G__3782 = cljs.core.next.call(null,s__3778);
var G__3783 = (i__3779 - 1);
var G__3784 = (sum__3780 + 1);
s__3778 = G__3782;
i__3779 = G__3783;
sum__3780 = G__3784;
continue;
}
} else
{return sum__3780;
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
var concat__3788 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3789 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3790 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3785 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3785))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3785),concat.call(null,cljs.core.rest.call(null,s__3785),y));
} else
{return y;
}
})));
});
var concat__3791 = (function() { 
var G__3793__delegate = function (x,y,zs){
var cat__3787 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3786 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3786))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3786),cat.call(null,cljs.core.rest.call(null,xys__3786),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3787.call(null,concat.call(null,x,y),zs);
};
var G__3793 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3793__delegate.call(this, x, y, zs);
};
G__3793.cljs$lang$maxFixedArity = 2;
G__3793.cljs$lang$applyTo = (function (arglist__3794){
var x = cljs.core.first(arglist__3794);
var y = cljs.core.first(cljs.core.next(arglist__3794));
var zs = cljs.core.rest(cljs.core.next(arglist__3794));
return G__3793__delegate.call(this, x, y, zs);
});
return G__3793;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3788.call(this);
case  1 :
return concat__3789.call(this,x);
case  2 :
return concat__3790.call(this,x,y);
default:
return concat__3791.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3791.cljs$lang$applyTo;
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
var list_STAR___3795 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3796 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3797 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3798 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3799 = (function() { 
var G__3801__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3801 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3801__delegate.call(this, a, b, c, d, more);
};
G__3801.cljs$lang$maxFixedArity = 4;
G__3801.cljs$lang$applyTo = (function (arglist__3802){
var a = cljs.core.first(arglist__3802);
var b = cljs.core.first(cljs.core.next(arglist__3802));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3802)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3802))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3802))));
return G__3801__delegate.call(this, a, b, c, d, more);
});
return G__3801;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3795.call(this,a);
case  2 :
return list_STAR___3796.call(this,a,b);
case  3 :
return list_STAR___3797.call(this,a,b,c);
case  4 :
return list_STAR___3798.call(this,a,b,c,d);
default:
return list_STAR___3799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3799.cljs$lang$applyTo;
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
var apply__3812 = (function (f,args){
var fixed_arity__3803 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3803 + 1)) <= fixed_arity__3803)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3813 = (function (f,x,args){
var arglist__3804 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3805 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3804,fixed_arity__3805) <= fixed_arity__3805)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3804));
} else
{return f.cljs$lang$applyTo(arglist__3804);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3804));
}
});
var apply__3814 = (function (f,x,y,args){
var arglist__3806 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3807 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3806,fixed_arity__3807) <= fixed_arity__3807)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3806));
} else
{return f.cljs$lang$applyTo(arglist__3806);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3806));
}
});
var apply__3815 = (function (f,x,y,z,args){
var arglist__3808 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3809 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3808,fixed_arity__3809) <= fixed_arity__3809)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3808));
} else
{return f.cljs$lang$applyTo(arglist__3808);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3808));
}
});
var apply__3816 = (function() { 
var G__3818__delegate = function (f,a,b,c,d,args){
var arglist__3810 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3811 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3810,fixed_arity__3811) <= fixed_arity__3811)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3810));
} else
{return f.cljs$lang$applyTo(arglist__3810);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3810));
}
};
var G__3818 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3818__delegate.call(this, f, a, b, c, d, args);
};
G__3818.cljs$lang$maxFixedArity = 5;
G__3818.cljs$lang$applyTo = (function (arglist__3819){
var f = cljs.core.first(arglist__3819);
var a = cljs.core.first(cljs.core.next(arglist__3819));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3819)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3819))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3819)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3819)))));
return G__3818__delegate.call(this, f, a, b, c, d, args);
});
return G__3818;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3812.call(this,f,a);
case  3 :
return apply__3813.call(this,f,a,b);
case  4 :
return apply__3814.call(this,f,a,b,c);
case  5 :
return apply__3815.call(this,f,a,b,c,d);
default:
return apply__3816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3816.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3820){
var obj = cljs.core.first(arglist__3820);
var f = cljs.core.first(cljs.core.next(arglist__3820));
var args = cljs.core.rest(cljs.core.next(arglist__3820));
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
var not_EQ___3821 = (function (x){
return false;
});
var not_EQ___3822 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3823 = (function() { 
var G__3825__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3825 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3825__delegate.call(this, x, y, more);
};
G__3825.cljs$lang$maxFixedArity = 2;
G__3825.cljs$lang$applyTo = (function (arglist__3826){
var x = cljs.core.first(arglist__3826);
var y = cljs.core.first(cljs.core.next(arglist__3826));
var more = cljs.core.rest(cljs.core.next(arglist__3826));
return G__3825__delegate.call(this, x, y, more);
});
return G__3825;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3821.call(this,x);
case  2 :
return not_EQ___3822.call(this,x,y);
default:
return not_EQ___3823.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3823.cljs$lang$applyTo;
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
var G__3827 = pred;
var G__3828 = cljs.core.next.call(null,coll);
pred = G__3827;
coll = G__3828;
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
{var or__3548__auto____3829 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3829))
{return or__3548__auto____3829;
} else
{{
var G__3830 = pred;
var G__3831 = cljs.core.next.call(null,coll);
pred = G__3830;
coll = G__3831;
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
var G__3832 = null;
var G__3832__3833 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3832__3834 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3832__3835 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3832__3836 = (function() { 
var G__3838__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3838 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3838__delegate.call(this, x, y, zs);
};
G__3838.cljs$lang$maxFixedArity = 2;
G__3838.cljs$lang$applyTo = (function (arglist__3839){
var x = cljs.core.first(arglist__3839);
var y = cljs.core.first(cljs.core.next(arglist__3839));
var zs = cljs.core.rest(cljs.core.next(arglist__3839));
return G__3838__delegate.call(this, x, y, zs);
});
return G__3838;
})()
;
G__3832 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3832__3833.call(this);
case  1 :
return G__3832__3834.call(this,x);
case  2 :
return G__3832__3835.call(this,x,y);
default:
return G__3832__3836.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3832.cljs$lang$maxFixedArity = 2;
G__3832.cljs$lang$applyTo = G__3832__3836.cljs$lang$applyTo;
return G__3832;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3840__delegate = function (args){
return x;
};
var G__3840 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3840__delegate.call(this, args);
};
G__3840.cljs$lang$maxFixedArity = 0;
G__3840.cljs$lang$applyTo = (function (arglist__3841){
var args = cljs.core.seq( arglist__3841 );;
return G__3840__delegate.call(this, args);
});
return G__3840;
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
var comp__3845 = (function (){
return cljs.core.identity;
});
var comp__3846 = (function (f){
return f;
});
var comp__3847 = (function (f,g){
return (function() {
var G__3851 = null;
var G__3851__3852 = (function (){
return f.call(null,g.call(null));
});
var G__3851__3853 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3851__3854 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3851__3855 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3851__3856 = (function() { 
var G__3858__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3858 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3858__delegate.call(this, x, y, z, args);
};
G__3858.cljs$lang$maxFixedArity = 3;
G__3858.cljs$lang$applyTo = (function (arglist__3859){
var x = cljs.core.first(arglist__3859);
var y = cljs.core.first(cljs.core.next(arglist__3859));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3859)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3859)));
return G__3858__delegate.call(this, x, y, z, args);
});
return G__3858;
})()
;
G__3851 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3851__3852.call(this);
case  1 :
return G__3851__3853.call(this,x);
case  2 :
return G__3851__3854.call(this,x,y);
case  3 :
return G__3851__3855.call(this,x,y,z);
default:
return G__3851__3856.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3851.cljs$lang$maxFixedArity = 3;
G__3851.cljs$lang$applyTo = G__3851__3856.cljs$lang$applyTo;
return G__3851;
})()
});
var comp__3848 = (function (f,g,h){
return (function() {
var G__3860 = null;
var G__3860__3861 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3860__3862 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3860__3863 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3860__3864 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3860__3865 = (function() { 
var G__3867__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3867 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3867__delegate.call(this, x, y, z, args);
};
G__3867.cljs$lang$maxFixedArity = 3;
G__3867.cljs$lang$applyTo = (function (arglist__3868){
var x = cljs.core.first(arglist__3868);
var y = cljs.core.first(cljs.core.next(arglist__3868));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3868)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3868)));
return G__3867__delegate.call(this, x, y, z, args);
});
return G__3867;
})()
;
G__3860 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3860__3861.call(this);
case  1 :
return G__3860__3862.call(this,x);
case  2 :
return G__3860__3863.call(this,x,y);
case  3 :
return G__3860__3864.call(this,x,y,z);
default:
return G__3860__3865.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3860.cljs$lang$maxFixedArity = 3;
G__3860.cljs$lang$applyTo = G__3860__3865.cljs$lang$applyTo;
return G__3860;
})()
});
var comp__3849 = (function() { 
var G__3869__delegate = function (f1,f2,f3,fs){
var fs__3842 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3870__delegate = function (args){
var ret__3843 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3842),args);
var fs__3844 = cljs.core.next.call(null,fs__3842);

while(true){
if(cljs.core.truth_(fs__3844))
{{
var G__3871 = cljs.core.first.call(null,fs__3844).call(null,ret__3843);
var G__3872 = cljs.core.next.call(null,fs__3844);
ret__3843 = G__3871;
fs__3844 = G__3872;
continue;
}
} else
{return ret__3843;
}
break;
}
};
var G__3870 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3870__delegate.call(this, args);
};
G__3870.cljs$lang$maxFixedArity = 0;
G__3870.cljs$lang$applyTo = (function (arglist__3873){
var args = cljs.core.seq( arglist__3873 );;
return G__3870__delegate.call(this, args);
});
return G__3870;
})()
;
};
var G__3869 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3869__delegate.call(this, f1, f2, f3, fs);
};
G__3869.cljs$lang$maxFixedArity = 3;
G__3869.cljs$lang$applyTo = (function (arglist__3874){
var f1 = cljs.core.first(arglist__3874);
var f2 = cljs.core.first(cljs.core.next(arglist__3874));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3874)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3874)));
return G__3869__delegate.call(this, f1, f2, f3, fs);
});
return G__3869;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3845.call(this);
case  1 :
return comp__3846.call(this,f1);
case  2 :
return comp__3847.call(this,f1,f2);
case  3 :
return comp__3848.call(this,f1,f2,f3);
default:
return comp__3849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3849.cljs$lang$applyTo;
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
var partial__3875 = (function (f,arg1){
return (function() { 
var G__3880__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3880 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3880__delegate.call(this, args);
};
G__3880.cljs$lang$maxFixedArity = 0;
G__3880.cljs$lang$applyTo = (function (arglist__3881){
var args = cljs.core.seq( arglist__3881 );;
return G__3880__delegate.call(this, args);
});
return G__3880;
})()
;
});
var partial__3876 = (function (f,arg1,arg2){
return (function() { 
var G__3882__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3882 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3882__delegate.call(this, args);
};
G__3882.cljs$lang$maxFixedArity = 0;
G__3882.cljs$lang$applyTo = (function (arglist__3883){
var args = cljs.core.seq( arglist__3883 );;
return G__3882__delegate.call(this, args);
});
return G__3882;
})()
;
});
var partial__3877 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3884__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3884 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3884__delegate.call(this, args);
};
G__3884.cljs$lang$maxFixedArity = 0;
G__3884.cljs$lang$applyTo = (function (arglist__3885){
var args = cljs.core.seq( arglist__3885 );;
return G__3884__delegate.call(this, args);
});
return G__3884;
})()
;
});
var partial__3878 = (function() { 
var G__3886__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3887__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3887 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3887__delegate.call(this, args);
};
G__3887.cljs$lang$maxFixedArity = 0;
G__3887.cljs$lang$applyTo = (function (arglist__3888){
var args = cljs.core.seq( arglist__3888 );;
return G__3887__delegate.call(this, args);
});
return G__3887;
})()
;
};
var G__3886 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3886__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3886.cljs$lang$maxFixedArity = 4;
G__3886.cljs$lang$applyTo = (function (arglist__3889){
var f = cljs.core.first(arglist__3889);
var arg1 = cljs.core.first(cljs.core.next(arglist__3889));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3889)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3889))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3889))));
return G__3886__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3886;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3875.call(this,f,arg1);
case  3 :
return partial__3876.call(this,f,arg1,arg2);
case  4 :
return partial__3877.call(this,f,arg1,arg2,arg3);
default:
return partial__3878.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3878.cljs$lang$applyTo;
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
var fnil__3890 = (function (f,x){
return (function() {
var G__3894 = null;
var G__3894__3895 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__3894__3896 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__3894__3897 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__3894__3898 = (function() { 
var G__3900__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__3900 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3900__delegate.call(this, a, b, c, ds);
};
G__3900.cljs$lang$maxFixedArity = 3;
G__3900.cljs$lang$applyTo = (function (arglist__3901){
var a = cljs.core.first(arglist__3901);
var b = cljs.core.first(cljs.core.next(arglist__3901));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3901)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3901)));
return G__3900__delegate.call(this, a, b, c, ds);
});
return G__3900;
})()
;
G__3894 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3894__3895.call(this,a);
case  2 :
return G__3894__3896.call(this,a,b);
case  3 :
return G__3894__3897.call(this,a,b,c);
default:
return G__3894__3898.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3894.cljs$lang$maxFixedArity = 3;
G__3894.cljs$lang$applyTo = G__3894__3898.cljs$lang$applyTo;
return G__3894;
})()
});
var fnil__3891 = (function (f,x,y){
return (function() {
var G__3902 = null;
var G__3902__3903 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3902__3904 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__3902__3905 = (function() { 
var G__3907__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__3907 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3907__delegate.call(this, a, b, c, ds);
};
G__3907.cljs$lang$maxFixedArity = 3;
G__3907.cljs$lang$applyTo = (function (arglist__3908){
var a = cljs.core.first(arglist__3908);
var b = cljs.core.first(cljs.core.next(arglist__3908));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3908)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3908)));
return G__3907__delegate.call(this, a, b, c, ds);
});
return G__3907;
})()
;
G__3902 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3902__3903.call(this,a,b);
case  3 :
return G__3902__3904.call(this,a,b,c);
default:
return G__3902__3905.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3902.cljs$lang$maxFixedArity = 3;
G__3902.cljs$lang$applyTo = G__3902__3905.cljs$lang$applyTo;
return G__3902;
})()
});
var fnil__3892 = (function (f,x,y,z){
return (function() {
var G__3909 = null;
var G__3909__3910 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3909__3911 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__3909__3912 = (function() { 
var G__3914__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__3914 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3914__delegate.call(this, a, b, c, ds);
};
G__3914.cljs$lang$maxFixedArity = 3;
G__3914.cljs$lang$applyTo = (function (arglist__3915){
var a = cljs.core.first(arglist__3915);
var b = cljs.core.first(cljs.core.next(arglist__3915));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3915)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3915)));
return G__3914__delegate.call(this, a, b, c, ds);
});
return G__3914;
})()
;
G__3909 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3909__3910.call(this,a,b);
case  3 :
return G__3909__3911.call(this,a,b,c);
default:
return G__3909__3912.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3909.cljs$lang$maxFixedArity = 3;
G__3909.cljs$lang$applyTo = G__3909__3912.cljs$lang$applyTo;
return G__3909;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3890.call(this,f,x);
case  3 :
return fnil__3891.call(this,f,x,y);
case  4 :
return fnil__3892.call(this,f,x,y,z);
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
var mapi__3918 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3916 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3916))
{var s__3917 = temp__3698__auto____3916;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3917)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3917)));
} else
{return null;
}
})));
});

return mapi__3918.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3919 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3919))
{var s__3920 = temp__3698__auto____3919;

var x__3921 = f.call(null,cljs.core.first.call(null,s__3920));

if(cljs.core.truth_((x__3921 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3920));
} else
{return cljs.core.cons.call(null,x__3921,keep.call(null,f,cljs.core.rest.call(null,s__3920)));
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
var keepi__3931 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3928 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3928))
{var s__3929 = temp__3698__auto____3928;

var x__3930 = f.call(null,idx,cljs.core.first.call(null,s__3929));

if(cljs.core.truth_((x__3930 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3929));
} else
{return cljs.core.cons.call(null,x__3930,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3929)));
}
} else
{return null;
}
})));
});

return keepi__3931.call(null,0,coll);
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
var every_pred__3976 = (function (p){
return (function() {
var ep1 = null;
var ep1__3981 = (function (){
return true;
});
var ep1__3982 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3983 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3938 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3938))
{return p.call(null,y);
} else
{return and__3546__auto____3938;
}
})());
});
var ep1__3984 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3939 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3939))
{var and__3546__auto____3940 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3940))
{return p.call(null,z);
} else
{return and__3546__auto____3940;
}
} else
{return and__3546__auto____3939;
}
})());
});
var ep1__3985 = (function() { 
var G__3987__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3941 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3941))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3941;
}
})());
};
var G__3987 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3987__delegate.call(this, x, y, z, args);
};
G__3987.cljs$lang$maxFixedArity = 3;
G__3987.cljs$lang$applyTo = (function (arglist__3988){
var x = cljs.core.first(arglist__3988);
var y = cljs.core.first(cljs.core.next(arglist__3988));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3988)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3988)));
return G__3987__delegate.call(this, x, y, z, args);
});
return G__3987;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3981.call(this);
case  1 :
return ep1__3982.call(this,x);
case  2 :
return ep1__3983.call(this,x,y);
case  3 :
return ep1__3984.call(this,x,y,z);
default:
return ep1__3985.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3985.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3977 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3989 = (function (){
return true;
});
var ep2__3990 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3942 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3942))
{return p2.call(null,x);
} else
{return and__3546__auto____3942;
}
})());
});
var ep2__3991 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3943 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3943))
{var and__3546__auto____3944 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3944))
{var and__3546__auto____3945 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3945))
{return p2.call(null,y);
} else
{return and__3546__auto____3945;
}
} else
{return and__3546__auto____3944;
}
} else
{return and__3546__auto____3943;
}
})());
});
var ep2__3992 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3946 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3946))
{var and__3546__auto____3947 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3947))
{var and__3546__auto____3948 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3948))
{var and__3546__auto____3949 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3949))
{var and__3546__auto____3950 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3950))
{return p2.call(null,z);
} else
{return and__3546__auto____3950;
}
} else
{return and__3546__auto____3949;
}
} else
{return and__3546__auto____3948;
}
} else
{return and__3546__auto____3947;
}
} else
{return and__3546__auto____3946;
}
})());
});
var ep2__3993 = (function() { 
var G__3995__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3951 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3951))
{return cljs.core.every_QMARK_.call(null,(function (p1__3922_SHARP_){
var and__3546__auto____3952 = p1.call(null,p1__3922_SHARP_);

if(cljs.core.truth_(and__3546__auto____3952))
{return p2.call(null,p1__3922_SHARP_);
} else
{return and__3546__auto____3952;
}
}),args);
} else
{return and__3546__auto____3951;
}
})());
};
var G__3995 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3995__delegate.call(this, x, y, z, args);
};
G__3995.cljs$lang$maxFixedArity = 3;
G__3995.cljs$lang$applyTo = (function (arglist__3996){
var x = cljs.core.first(arglist__3996);
var y = cljs.core.first(cljs.core.next(arglist__3996));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3996)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3996)));
return G__3995__delegate.call(this, x, y, z, args);
});
return G__3995;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3989.call(this);
case  1 :
return ep2__3990.call(this,x);
case  2 :
return ep2__3991.call(this,x,y);
case  3 :
return ep2__3992.call(this,x,y,z);
default:
return ep2__3993.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3993.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3978 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3997 = (function (){
return true;
});
var ep3__3998 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3953 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3953))
{var and__3546__auto____3954 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3954))
{return p3.call(null,x);
} else
{return and__3546__auto____3954;
}
} else
{return and__3546__auto____3953;
}
})());
});
var ep3__3999 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3955 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3955))
{var and__3546__auto____3956 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3956))
{var and__3546__auto____3957 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3957))
{var and__3546__auto____3958 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3958))
{var and__3546__auto____3959 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3959))
{return p3.call(null,y);
} else
{return and__3546__auto____3959;
}
} else
{return and__3546__auto____3958;
}
} else
{return and__3546__auto____3957;
}
} else
{return and__3546__auto____3956;
}
} else
{return and__3546__auto____3955;
}
})());
});
var ep3__4000 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3960 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3960))
{var and__3546__auto____3961 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3961))
{var and__3546__auto____3962 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3962))
{var and__3546__auto____3963 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3963))
{var and__3546__auto____3964 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3964))
{var and__3546__auto____3965 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3965))
{var and__3546__auto____3966 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3966))
{var and__3546__auto____3967 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3967))
{return p3.call(null,z);
} else
{return and__3546__auto____3967;
}
} else
{return and__3546__auto____3966;
}
} else
{return and__3546__auto____3965;
}
} else
{return and__3546__auto____3964;
}
} else
{return and__3546__auto____3963;
}
} else
{return and__3546__auto____3962;
}
} else
{return and__3546__auto____3961;
}
} else
{return and__3546__auto____3960;
}
})());
});
var ep3__4001 = (function() { 
var G__4003__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3968 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3968))
{return cljs.core.every_QMARK_.call(null,(function (p1__3923_SHARP_){
var and__3546__auto____3969 = p1.call(null,p1__3923_SHARP_);

if(cljs.core.truth_(and__3546__auto____3969))
{var and__3546__auto____3970 = p2.call(null,p1__3923_SHARP_);

if(cljs.core.truth_(and__3546__auto____3970))
{return p3.call(null,p1__3923_SHARP_);
} else
{return and__3546__auto____3970;
}
} else
{return and__3546__auto____3969;
}
}),args);
} else
{return and__3546__auto____3968;
}
})());
};
var G__4003 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4003__delegate.call(this, x, y, z, args);
};
G__4003.cljs$lang$maxFixedArity = 3;
G__4003.cljs$lang$applyTo = (function (arglist__4004){
var x = cljs.core.first(arglist__4004);
var y = cljs.core.first(cljs.core.next(arglist__4004));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4004)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4004)));
return G__4003__delegate.call(this, x, y, z, args);
});
return G__4003;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3997.call(this);
case  1 :
return ep3__3998.call(this,x);
case  2 :
return ep3__3999.call(this,x,y);
case  3 :
return ep3__4000.call(this,x,y,z);
default:
return ep3__4001.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4001.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3979 = (function() { 
var G__4005__delegate = function (p1,p2,p3,ps){
var ps__3971 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__4006 = (function (){
return true;
});
var epn__4007 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3924_SHARP_){
return p1__3924_SHARP_.call(null,x);
}),ps__3971);
});
var epn__4008 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3925_SHARP_){
var and__3546__auto____3972 = p1__3925_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3972))
{return p1__3925_SHARP_.call(null,y);
} else
{return and__3546__auto____3972;
}
}),ps__3971);
});
var epn__4009 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3926_SHARP_){
var and__3546__auto____3973 = p1__3926_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3973))
{var and__3546__auto____3974 = p1__3926_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3974))
{return p1__3926_SHARP_.call(null,z);
} else
{return and__3546__auto____3974;
}
} else
{return and__3546__auto____3973;
}
}),ps__3971);
});
var epn__4010 = (function() { 
var G__4012__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3975 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3975))
{return cljs.core.every_QMARK_.call(null,(function (p1__3927_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3927_SHARP_,args);
}),ps__3971);
} else
{return and__3546__auto____3975;
}
})());
};
var G__4012 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4012__delegate.call(this, x, y, z, args);
};
G__4012.cljs$lang$maxFixedArity = 3;
G__4012.cljs$lang$applyTo = (function (arglist__4013){
var x = cljs.core.first(arglist__4013);
var y = cljs.core.first(cljs.core.next(arglist__4013));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4013)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4013)));
return G__4012__delegate.call(this, x, y, z, args);
});
return G__4012;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__4006.call(this);
case  1 :
return epn__4007.call(this,x);
case  2 :
return epn__4008.call(this,x,y);
case  3 :
return epn__4009.call(this,x,y,z);
default:
return epn__4010.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4010.cljs$lang$applyTo;
return epn;
})()
};
var G__4005 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4005__delegate.call(this, p1, p2, p3, ps);
};
G__4005.cljs$lang$maxFixedArity = 3;
G__4005.cljs$lang$applyTo = (function (arglist__4014){
var p1 = cljs.core.first(arglist__4014);
var p2 = cljs.core.first(cljs.core.next(arglist__4014));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4014)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4014)));
return G__4005__delegate.call(this, p1, p2, p3, ps);
});
return G__4005;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3976.call(this,p1);
case  2 :
return every_pred__3977.call(this,p1,p2);
case  3 :
return every_pred__3978.call(this,p1,p2,p3);
default:
return every_pred__3979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3979.cljs$lang$applyTo;
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
var some_fn__4054 = (function (p){
return (function() {
var sp1 = null;
var sp1__4059 = (function (){
return null;
});
var sp1__4060 = (function (x){
return p.call(null,x);
});
var sp1__4061 = (function (x,y){
var or__3548__auto____4016 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____4016))
{return or__3548__auto____4016;
} else
{return p.call(null,y);
}
});
var sp1__4062 = (function (x,y,z){
var or__3548__auto____4017 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____4017))
{return or__3548__auto____4017;
} else
{var or__3548__auto____4018 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____4018))
{return or__3548__auto____4018;
} else
{return p.call(null,z);
}
}
});
var sp1__4063 = (function() { 
var G__4065__delegate = function (x,y,z,args){
var or__3548__auto____4019 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4019))
{return or__3548__auto____4019;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__4065 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4065__delegate.call(this, x, y, z, args);
};
G__4065.cljs$lang$maxFixedArity = 3;
G__4065.cljs$lang$applyTo = (function (arglist__4066){
var x = cljs.core.first(arglist__4066);
var y = cljs.core.first(cljs.core.next(arglist__4066));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4066)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4066)));
return G__4065__delegate.call(this, x, y, z, args);
});
return G__4065;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__4059.call(this);
case  1 :
return sp1__4060.call(this,x);
case  2 :
return sp1__4061.call(this,x,y);
case  3 :
return sp1__4062.call(this,x,y,z);
default:
return sp1__4063.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4063.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__4055 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__4067 = (function (){
return null;
});
var sp2__4068 = (function (x){
var or__3548__auto____4020 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4020))
{return or__3548__auto____4020;
} else
{return p2.call(null,x);
}
});
var sp2__4069 = (function (x,y){
var or__3548__auto____4021 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4021))
{return or__3548__auto____4021;
} else
{var or__3548__auto____4022 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4022))
{return or__3548__auto____4022;
} else
{var or__3548__auto____4023 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4023))
{return or__3548__auto____4023;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__4070 = (function (x,y,z){
var or__3548__auto____4024 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4024))
{return or__3548__auto____4024;
} else
{var or__3548__auto____4025 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4025))
{return or__3548__auto____4025;
} else
{var or__3548__auto____4026 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____4026))
{return or__3548__auto____4026;
} else
{var or__3548__auto____4027 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4027))
{return or__3548__auto____4027;
} else
{var or__3548__auto____4028 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4028))
{return or__3548__auto____4028;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4071 = (function() { 
var G__4073__delegate = function (x,y,z,args){
var or__3548__auto____4029 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4029))
{return or__3548__auto____4029;
} else
{return cljs.core.some.call(null,(function (p1__3932_SHARP_){
var or__3548__auto____4030 = p1.call(null,p1__3932_SHARP_);

if(cljs.core.truth_(or__3548__auto____4030))
{return or__3548__auto____4030;
} else
{return p2.call(null,p1__3932_SHARP_);
}
}),args);
}
};
var G__4073 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4073__delegate.call(this, x, y, z, args);
};
G__4073.cljs$lang$maxFixedArity = 3;
G__4073.cljs$lang$applyTo = (function (arglist__4074){
var x = cljs.core.first(arglist__4074);
var y = cljs.core.first(cljs.core.next(arglist__4074));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4074)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4074)));
return G__4073__delegate.call(this, x, y, z, args);
});
return G__4073;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__4067.call(this);
case  1 :
return sp2__4068.call(this,x);
case  2 :
return sp2__4069.call(this,x,y);
case  3 :
return sp2__4070.call(this,x,y,z);
default:
return sp2__4071.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4071.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__4056 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__4075 = (function (){
return null;
});
var sp3__4076 = (function (x){
var or__3548__auto____4031 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4031))
{return or__3548__auto____4031;
} else
{var or__3548__auto____4032 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4032))
{return or__3548__auto____4032;
} else
{return p3.call(null,x);
}
}
});
var sp3__4077 = (function (x,y){
var or__3548__auto____4033 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4033))
{return or__3548__auto____4033;
} else
{var or__3548__auto____4034 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4034))
{return or__3548__auto____4034;
} else
{var or__3548__auto____4035 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____4035))
{return or__3548__auto____4035;
} else
{var or__3548__auto____4036 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4036))
{return or__3548__auto____4036;
} else
{var or__3548__auto____4037 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4037))
{return or__3548__auto____4037;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__4078 = (function (x,y,z){
var or__3548__auto____4038 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4038))
{return or__3548__auto____4038;
} else
{var or__3548__auto____4039 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4039))
{return or__3548__auto____4039;
} else
{var or__3548__auto____4040 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____4040))
{return or__3548__auto____4040;
} else
{var or__3548__auto____4041 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4041))
{return or__3548__auto____4041;
} else
{var or__3548__auto____4042 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4042))
{return or__3548__auto____4042;
} else
{var or__3548__auto____4043 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____4043))
{return or__3548__auto____4043;
} else
{var or__3548__auto____4044 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____4044))
{return or__3548__auto____4044;
} else
{var or__3548__auto____4045 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____4045))
{return or__3548__auto____4045;
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
var sp3__4079 = (function() { 
var G__4081__delegate = function (x,y,z,args){
var or__3548__auto____4046 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4046))
{return or__3548__auto____4046;
} else
{return cljs.core.some.call(null,(function (p1__3933_SHARP_){
var or__3548__auto____4047 = p1.call(null,p1__3933_SHARP_);

if(cljs.core.truth_(or__3548__auto____4047))
{return or__3548__auto____4047;
} else
{var or__3548__auto____4048 = p2.call(null,p1__3933_SHARP_);

if(cljs.core.truth_(or__3548__auto____4048))
{return or__3548__auto____4048;
} else
{return p3.call(null,p1__3933_SHARP_);
}
}
}),args);
}
};
var G__4081 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4081__delegate.call(this, x, y, z, args);
};
G__4081.cljs$lang$maxFixedArity = 3;
G__4081.cljs$lang$applyTo = (function (arglist__4082){
var x = cljs.core.first(arglist__4082);
var y = cljs.core.first(cljs.core.next(arglist__4082));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4082)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4082)));
return G__4081__delegate.call(this, x, y, z, args);
});
return G__4081;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__4075.call(this);
case  1 :
return sp3__4076.call(this,x);
case  2 :
return sp3__4077.call(this,x,y);
case  3 :
return sp3__4078.call(this,x,y,z);
default:
return sp3__4079.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4079.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__4057 = (function() { 
var G__4083__delegate = function (p1,p2,p3,ps){
var ps__4049 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__4084 = (function (){
return null;
});
var spn__4085 = (function (x){
return cljs.core.some.call(null,(function (p1__3934_SHARP_){
return p1__3934_SHARP_.call(null,x);
}),ps__4049);
});
var spn__4086 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3935_SHARP_){
var or__3548__auto____4050 = p1__3935_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4050))
{return or__3548__auto____4050;
} else
{return p1__3935_SHARP_.call(null,y);
}
}),ps__4049);
});
var spn__4087 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3936_SHARP_){
var or__3548__auto____4051 = p1__3936_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4051))
{return or__3548__auto____4051;
} else
{var or__3548__auto____4052 = p1__3936_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____4052))
{return or__3548__auto____4052;
} else
{return p1__3936_SHARP_.call(null,z);
}
}
}),ps__4049);
});
var spn__4088 = (function() { 
var G__4090__delegate = function (x,y,z,args){
var or__3548__auto____4053 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4053))
{return or__3548__auto____4053;
} else
{return cljs.core.some.call(null,(function (p1__3937_SHARP_){
return cljs.core.some.call(null,p1__3937_SHARP_,args);
}),ps__4049);
}
};
var G__4090 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4090__delegate.call(this, x, y, z, args);
};
G__4090.cljs$lang$maxFixedArity = 3;
G__4090.cljs$lang$applyTo = (function (arglist__4091){
var x = cljs.core.first(arglist__4091);
var y = cljs.core.first(cljs.core.next(arglist__4091));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4091)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4091)));
return G__4090__delegate.call(this, x, y, z, args);
});
return G__4090;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__4084.call(this);
case  1 :
return spn__4085.call(this,x);
case  2 :
return spn__4086.call(this,x,y);
case  3 :
return spn__4087.call(this,x,y,z);
default:
return spn__4088.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4088.cljs$lang$applyTo;
return spn;
})()
};
var G__4083 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4083__delegate.call(this, p1, p2, p3, ps);
};
G__4083.cljs$lang$maxFixedArity = 3;
G__4083.cljs$lang$applyTo = (function (arglist__4092){
var p1 = cljs.core.first(arglist__4092);
var p2 = cljs.core.first(cljs.core.next(arglist__4092));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4092)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4092)));
return G__4083__delegate.call(this, p1, p2, p3, ps);
});
return G__4083;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__4054.call(this,p1);
case  2 :
return some_fn__4055.call(this,p1,p2);
case  3 :
return some_fn__4056.call(this,p1,p2,p3);
default:
return some_fn__4057.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4057.cljs$lang$applyTo;
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
var map__4105 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4093 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4093))
{var s__4094 = temp__3698__auto____4093;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__4094)),map.call(null,f,cljs.core.rest.call(null,s__4094)));
} else
{return null;
}
})));
});
var map__4106 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4095 = cljs.core.seq.call(null,c1);
var s2__4096 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4097 = s1__4095;

if(cljs.core.truth_(and__3546__auto____4097))
{return s2__4096;
} else
{return and__3546__auto____4097;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4095),cljs.core.first.call(null,s2__4096)),map.call(null,f,cljs.core.rest.call(null,s1__4095),cljs.core.rest.call(null,s2__4096)));
} else
{return null;
}
})));
});
var map__4107 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4098 = cljs.core.seq.call(null,c1);
var s2__4099 = cljs.core.seq.call(null,c2);
var s3__4100 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____4101 = s1__4098;

if(cljs.core.truth_(and__3546__auto____4101))
{var and__3546__auto____4102 = s2__4099;

if(cljs.core.truth_(and__3546__auto____4102))
{return s3__4100;
} else
{return and__3546__auto____4102;
}
} else
{return and__3546__auto____4101;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4098),cljs.core.first.call(null,s2__4099),cljs.core.first.call(null,s3__4100)),map.call(null,f,cljs.core.rest.call(null,s1__4098),cljs.core.rest.call(null,s2__4099),cljs.core.rest.call(null,s3__4100)));
} else
{return null;
}
})));
});
var map__4108 = (function() { 
var G__4110__delegate = function (f,c1,c2,c3,colls){
var step__4104 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4103 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4103)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__4103),step.call(null,map.call(null,cljs.core.rest,ss__4103)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__4015_SHARP_){
return cljs.core.apply.call(null,f,p1__4015_SHARP_);
}),step__4104.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4110 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4110__delegate.call(this, f, c1, c2, c3, colls);
};
G__4110.cljs$lang$maxFixedArity = 4;
G__4110.cljs$lang$applyTo = (function (arglist__4111){
var f = cljs.core.first(arglist__4111);
var c1 = cljs.core.first(cljs.core.next(arglist__4111));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4111)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4111))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4111))));
return G__4110__delegate.call(this, f, c1, c2, c3, colls);
});
return G__4110;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__4105.call(this,f,c1);
case  3 :
return map__4106.call(this,f,c1,c2);
case  4 :
return map__4107.call(this,f,c1,c2,c3);
default:
return map__4108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__4108.cljs$lang$applyTo;
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
{var temp__3698__auto____4112 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4112))
{var s__4113 = temp__3698__auto____4112;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4113),take.call(null,(n - 1),cljs.core.rest.call(null,s__4113)));
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
var step__4116 = (function (n,coll){
while(true){
var s__4114 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4115 = (n > 0);

if(cljs.core.truth_(and__3546__auto____4115))
{return s__4114;
} else
{return and__3546__auto____4115;
}
})()))
{{
var G__4117 = (n - 1);
var G__4118 = cljs.core.rest.call(null,s__4114);
n = G__4117;
coll = G__4118;
continue;
}
} else
{return s__4114;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4116.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__4119 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__4120 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__4119.call(this,n);
case  2 :
return drop_last__4120.call(this,n,s);
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
var s__4122 = cljs.core.seq.call(null,coll);
var lead__4123 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__4123))
{{
var G__4124 = cljs.core.next.call(null,s__4122);
var G__4125 = cljs.core.next.call(null,lead__4123);
s__4122 = G__4124;
lead__4123 = G__4125;
continue;
}
} else
{return s__4122;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4128 = (function (pred,coll){
while(true){
var s__4126 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4127 = s__4126;

if(cljs.core.truth_(and__3546__auto____4127))
{return pred.call(null,cljs.core.first.call(null,s__4126));
} else
{return and__3546__auto____4127;
}
})()))
{{
var G__4129 = pred;
var G__4130 = cljs.core.rest.call(null,s__4126);
pred = G__4129;
coll = G__4130;
continue;
}
} else
{return s__4126;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4128.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4131 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4131))
{var s__4132 = temp__3698__auto____4131;

return cljs.core.concat.call(null,s__4132,cycle.call(null,s__4132));
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
var repeat__4133 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__4134 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__4133.call(this,n);
case  2 :
return repeat__4134.call(this,n,x);
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
var repeatedly__4136 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__4137 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__4136.call(this,n);
case  2 :
return repeatedly__4137.call(this,n,f);
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
var interleave__4143 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4139 = cljs.core.seq.call(null,c1);
var s2__4140 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4141 = s1__4139;

if(cljs.core.truth_(and__3546__auto____4141))
{return s2__4140;
} else
{return and__3546__auto____4141;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4139),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4140),interleave.call(null,cljs.core.rest.call(null,s1__4139),cljs.core.rest.call(null,s2__4140))));
} else
{return null;
}
})));
});
var interleave__4144 = (function() { 
var G__4146__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4142 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4142)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4142),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4142)));
} else
{return null;
}
})));
};
var G__4146 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4146__delegate.call(this, c1, c2, colls);
};
G__4146.cljs$lang$maxFixedArity = 2;
G__4146.cljs$lang$applyTo = (function (arglist__4147){
var c1 = cljs.core.first(arglist__4147);
var c2 = cljs.core.first(cljs.core.next(arglist__4147));
var colls = cljs.core.rest(cljs.core.next(arglist__4147));
return G__4146__delegate.call(this, c1, c2, colls);
});
return G__4146;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__4143.call(this,c1,c2);
default:
return interleave__4144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__4144.cljs$lang$applyTo;
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
var cat__4150 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4148 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4148))
{var coll__4149 = temp__3695__auto____4148;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4149),cat.call(null,cljs.core.rest.call(null,coll__4149),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__4150.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__4151 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__4152 = (function() { 
var G__4154__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4154 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4154__delegate.call(this, f, coll, colls);
};
G__4154.cljs$lang$maxFixedArity = 2;
G__4154.cljs$lang$applyTo = (function (arglist__4155){
var f = cljs.core.first(arglist__4155);
var coll = cljs.core.first(cljs.core.next(arglist__4155));
var colls = cljs.core.rest(cljs.core.next(arglist__4155));
return G__4154__delegate.call(this, f, coll, colls);
});
return G__4154;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__4151.call(this,f,coll);
default:
return mapcat__4152.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__4152.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4156 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4156))
{var s__4157 = temp__3698__auto____4156;

var f__4158 = cljs.core.first.call(null,s__4157);
var r__4159 = cljs.core.rest.call(null,s__4157);

if(cljs.core.truth_(pred.call(null,f__4158)))
{return cljs.core.cons.call(null,f__4158,filter.call(null,pred,r__4159));
} else
{return filter.call(null,pred,r__4159);
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
var walk__4161 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__4161.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4160_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4160_SHARP_));
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
var partition__4168 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4169 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4162 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4162))
{var s__4163 = temp__3698__auto____4162;

var p__4164 = cljs.core.take.call(null,n,s__4163);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4164))))
{return cljs.core.cons.call(null,p__4164,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4163)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4170 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4165 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4165))
{var s__4166 = temp__3698__auto____4165;

var p__4167 = cljs.core.take.call(null,n,s__4166);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4167))))
{return cljs.core.cons.call(null,p__4167,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4166)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4167,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4168.call(this,n,step);
case  3 :
return partition__4169.call(this,n,step,pad);
case  4 :
return partition__4170.call(this,n,step,pad,coll);
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
var get_in__4176 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4177 = (function (m,ks,not_found){
var sentinel__4172 = cljs.core.lookup_sentinel;
var m__4173 = m;
var ks__4174 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4174))
{var m__4175 = cljs.core.get.call(null,m__4173,cljs.core.first.call(null,ks__4174),sentinel__4172);

if(cljs.core.truth_((sentinel__4172 === m__4175)))
{return not_found;
} else
{{
var G__4179 = sentinel__4172;
var G__4180 = m__4175;
var G__4181 = cljs.core.next.call(null,ks__4174);
sentinel__4172 = G__4179;
m__4173 = G__4180;
ks__4174 = G__4181;
continue;
}
}
} else
{return m__4173;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4176.call(this,m,ks);
case  3 :
return get_in__4177.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__4182,v){
var vec__4183__4184 = p__4182;
var k__4185 = cljs.core.nth.call(null,vec__4183__4184,0,null);
var ks__4186 = cljs.core.nthnext.call(null,vec__4183__4184,1);

if(cljs.core.truth_(ks__4186))
{return cljs.core.assoc.call(null,m,k__4185,assoc_in.call(null,cljs.core.get.call(null,m,k__4185),ks__4186,v));
} else
{return cljs.core.assoc.call(null,m,k__4185,v);
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
var update_in__delegate = function (m,p__4187,f,args){
var vec__4188__4189 = p__4187;
var k__4190 = cljs.core.nth.call(null,vec__4188__4189,0,null);
var ks__4191 = cljs.core.nthnext.call(null,vec__4188__4189,1);

if(cljs.core.truth_(ks__4191))
{return cljs.core.assoc.call(null,m,k__4190,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4190),ks__4191,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4190,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4190),args));
}
};
var update_in = function (m,p__4187,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4187, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4192){
var m = cljs.core.first(arglist__4192);
var p__4187 = cljs.core.first(cljs.core.next(arglist__4192));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4192)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4192)));
return update_in__delegate.call(this, m, p__4187, f, args);
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
var this__4193 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4226 = null;
var G__4226__4227 = (function (coll,k){
var this__4194 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4226__4228 = (function (coll,k,not_found){
var this__4195 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4226 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4226__4227.call(this,coll,k);
case  3 :
return G__4226__4228.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4226;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4196 = this;
var new_array__4197 = cljs.core.aclone.call(null,this__4196.array);

(new_array__4197[k] = v);
return (new cljs.core.Vector(this__4196.meta,new_array__4197));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__4230 = null;
var G__4230__4231 = (function (tsym4198,k){
var this__4200 = this;
var tsym4198__4201 = this;

var coll__4202 = tsym4198__4201;

return cljs.core._lookup.call(null,coll__4202,k);
});
var G__4230__4232 = (function (tsym4199,k,not_found){
var this__4203 = this;
var tsym4199__4204 = this;

var coll__4205 = tsym4199__4204;

return cljs.core._lookup.call(null,coll__4205,k,not_found);
});
G__4230 = function(tsym4199,k,not_found){
switch(arguments.length){
case  2 :
return G__4230__4231.call(this,tsym4199,k);
case  3 :
return G__4230__4232.call(this,tsym4199,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4230;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4206 = this;
var new_array__4207 = cljs.core.aclone.call(null,this__4206.array);

new_array__4207.push(o);
return (new cljs.core.Vector(this__4206.meta,new_array__4207));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4234 = null;
var G__4234__4235 = (function (v,f){
var this__4208 = this;
return cljs.core.ci_reduce.call(null,this__4208.array,f);
});
var G__4234__4236 = (function (v,f,start){
var this__4209 = this;
return cljs.core.ci_reduce.call(null,this__4209.array,f,start);
});
G__4234 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4234__4235.call(this,v,f);
case  3 :
return G__4234__4236.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4234;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4210 = this;
if(cljs.core.truth_((this__4210.array.length > 0)))
{var vector_seq__4211 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4210.array.length)))
{return cljs.core.cons.call(null,(this__4210.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4211.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4212 = this;
return this__4212.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4213 = this;
var count__4214 = this__4213.array.length;

if(cljs.core.truth_((count__4214 > 0)))
{return (this__4213.array[(count__4214 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4215 = this;
if(cljs.core.truth_((this__4215.array.length > 0)))
{var new_array__4216 = cljs.core.aclone.call(null,this__4215.array);

new_array__4216.pop();
return (new cljs.core.Vector(this__4215.meta,new_array__4216));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4217 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4218 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4219 = this;
return (new cljs.core.Vector(meta,this__4219.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4220 = this;
return this__4220.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4238 = null;
var G__4238__4239 = (function (coll,n){
var this__4221 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4222 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4222))
{return (n < this__4221.array.length);
} else
{return and__3546__auto____4222;
}
})()))
{return (this__4221.array[n]);
} else
{return null;
}
});
var G__4238__4240 = (function (coll,n,not_found){
var this__4223 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4224 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4224))
{return (n < this__4223.array.length);
} else
{return and__3546__auto____4224;
}
})()))
{return (this__4223.array[n]);
} else
{return not_found;
}
});
G__4238 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4238__4239.call(this,coll,n);
case  3 :
return G__4238__4240.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4238;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4225 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4225.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__4242 = pv.cnt;

if(cljs.core.truth_((cnt__4242 < 32)))
{return 0;
} else
{return (((cnt__4242 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__4243 = level;
var ret__4244 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__4243)))
{return ret__4244;
} else
{var embed__4245 = ret__4244;
var r__4246 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___4247 = (r__4246[0] = embed__4245);

{
var G__4248 = (ll__4243 - 5);
var G__4249 = r__4246;
ll__4243 = G__4248;
ret__4244 = G__4249;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__4250 = cljs.core.aclone.call(null,parent);
var subidx__4251 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__4250[subidx__4251] = tailnode);
return ret__4250;
} else
{var temp__3695__auto____4252 = (parent[subidx__4251]);

if(cljs.core.truth_(temp__3695__auto____4252))
{var child__4253 = temp__3695__auto____4252;

var node_to_insert__4254 = push_tail.call(null,pv,(level - 5),child__4253,tailnode);
var ___4255 = (ret__4250[subidx__4251] = node_to_insert__4254);

return ret__4250;
} else
{var node_to_insert__4256 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___4257 = (ret__4250[subidx__4251] = node_to_insert__4256);

return ret__4250;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____4258 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____4258))
{return (i < pv.cnt);
} else
{return and__3546__auto____4258;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__4259 = pv.root;
var level__4260 = pv.shift;

while(true){
if(cljs.core.truth_((level__4260 > 0)))
{{
var G__4261 = (node__4259[((i >> level__4260) & 31)]);
var G__4262 = (level__4260 - 5);
node__4259 = G__4261;
level__4260 = G__4262;
continue;
}
} else
{return node__4259;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__4263 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__4263[(i & 31)] = val);
return ret__4263;
} else
{var subidx__4264 = ((i >> level) & 31);
var ___4265 = (ret__4263[subidx__4264] = do_assoc.call(null,pv,(level - 5),(node[subidx__4264]),i,val));

return ret__4263;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__4266 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__4267 = pop_tail.call(null,pv,(level - 5),(node[subidx__4266]));

if(cljs.core.truth_((function (){var and__3546__auto____4268 = (new_child__4267 === null);

if(cljs.core.truth_(and__3546__auto____4268))
{return (subidx__4266 === 0);
} else
{return and__3546__auto____4268;
}
})()))
{return null;
} else
{var ret__4269 = cljs.core.aclone.call(null,node);
var ___4270 = (ret__4269[subidx__4266] = new_child__4267);

return ret__4269;
}
} else
{if(cljs.core.truth_((subidx__4266 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__4271 = cljs.core.aclone.call(null,node);
var ___4272 = (ret__4271[subidx__4266] = null);

return ret__4271;
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
var this__4273 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4313 = null;
var G__4313__4314 = (function (coll,k){
var this__4274 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4313__4315 = (function (coll,k,not_found){
var this__4275 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4313 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4313__4314.call(this,coll,k);
case  3 :
return G__4313__4315.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4313;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4276 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4277 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____4277))
{return (k < this__4276.cnt);
} else
{return and__3546__auto____4277;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__4278 = cljs.core.aclone.call(null,this__4276.tail);

(new_tail__4278[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__4276.meta,this__4276.cnt,this__4276.shift,this__4276.root,new_tail__4278));
} else
{return (new cljs.core.PersistentVector(this__4276.meta,this__4276.cnt,this__4276.shift,cljs.core.do_assoc.call(null,coll,this__4276.shift,this__4276.root,k,v),this__4276.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__4276.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__4276.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__4317 = null;
var G__4317__4318 = (function (tsym4279,k){
var this__4281 = this;
var tsym4279__4282 = this;

var coll__4283 = tsym4279__4282;

return cljs.core._lookup.call(null,coll__4283,k);
});
var G__4317__4319 = (function (tsym4280,k,not_found){
var this__4284 = this;
var tsym4280__4285 = this;

var coll__4286 = tsym4280__4285;

return cljs.core._lookup.call(null,coll__4286,k,not_found);
});
G__4317 = function(tsym4280,k,not_found){
switch(arguments.length){
case  2 :
return G__4317__4318.call(this,tsym4280,k);
case  3 :
return G__4317__4319.call(this,tsym4280,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4317;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4287 = this;
if(cljs.core.truth_(((this__4287.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__4288 = cljs.core.aclone.call(null,this__4287.tail);

new_tail__4288.push(o);
return (new cljs.core.PersistentVector(this__4287.meta,(this__4287.cnt + 1),this__4287.shift,this__4287.root,new_tail__4288));
} else
{var root_overflow_QMARK___4289 = ((this__4287.cnt >> 5) > (1 << this__4287.shift));
var new_shift__4290 = (cljs.core.truth_(root_overflow_QMARK___4289)?(this__4287.shift + 5):this__4287.shift);
var new_root__4292 = (cljs.core.truth_(root_overflow_QMARK___4289)?(function (){var n_r__4291 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__4291[0] = this__4287.root);
(n_r__4291[1] = cljs.core.new_path.call(null,this__4287.shift,this__4287.tail));
return n_r__4291;
})():cljs.core.push_tail.call(null,coll,this__4287.shift,this__4287.root,this__4287.tail));

return (new cljs.core.PersistentVector(this__4287.meta,(this__4287.cnt + 1),new_shift__4290,new_root__4292,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4321 = null;
var G__4321__4322 = (function (v,f){
var this__4293 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__4321__4323 = (function (v,f,start){
var this__4294 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__4321 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4321__4322.call(this,v,f);
case  3 :
return G__4321__4323.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4321;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4295 = this;
if(cljs.core.truth_((this__4295.cnt > 0)))
{var vector_seq__4296 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4295.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4296.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4297 = this;
return this__4297.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4298 = this;
if(cljs.core.truth_((this__4298.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__4298.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4299 = this;
if(cljs.core.truth_((this__4299.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__4299.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__4299.meta);
} else
{if(cljs.core.truth_((1 < (this__4299.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__4299.meta,(this__4299.cnt - 1),this__4299.shift,this__4299.root,cljs.core.aclone.call(null,this__4299.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__4300 = cljs.core.array_for.call(null,coll,(this__4299.cnt - 2));
var nr__4301 = cljs.core.pop_tail.call(null,this__4299.shift,this__4299.root);
var new_root__4302 = (cljs.core.truth_((nr__4301 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__4301);
var cnt_1__4303 = (this__4299.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____4304 = (5 < this__4299.shift);

if(cljs.core.truth_(and__3546__auto____4304))
{return ((new_root__4302[1]) === null);
} else
{return and__3546__auto____4304;
}
})()))
{return (new cljs.core.PersistentVector(this__4299.meta,cnt_1__4303,(this__4299.shift - 5),(new_root__4302[0]),new_tail__4300));
} else
{return (new cljs.core.PersistentVector(this__4299.meta,cnt_1__4303,this__4299.shift,new_root__4302,new_tail__4300));
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
var this__4305 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4306 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4307 = this;
return (new cljs.core.PersistentVector(meta,this__4307.cnt,this__4307.shift,this__4307.root,this__4307.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4308 = this;
return this__4308.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4325 = null;
var G__4325__4326 = (function (coll,n){
var this__4309 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__4325__4327 = (function (coll,n,not_found){
var this__4310 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4311 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4311))
{return (n < this__4310.cnt);
} else
{return and__3546__auto____4311;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__4325 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4325__4326.call(this,coll,n);
case  3 :
return G__4325__4327.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4325;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4312 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__4312.meta);
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
vector.cljs$lang$applyTo = (function (arglist__4329){
var args = cljs.core.seq( arglist__4329 );;
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
var this__4330 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4358 = null;
var G__4358__4359 = (function (coll,k){
var this__4331 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4358__4360 = (function (coll,k,not_found){
var this__4332 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4358 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4358__4359.call(this,coll,k);
case  3 :
return G__4358__4360.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4358;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4333 = this;
var v_pos__4334 = (this__4333.start + key);

return (new cljs.core.Subvec(this__4333.meta,cljs.core._assoc.call(null,this__4333.v,v_pos__4334,val),this__4333.start,((this__4333.end > (v_pos__4334 + 1)) ? this__4333.end : (v_pos__4334 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4362 = null;
var G__4362__4363 = (function (tsym4335,k){
var this__4337 = this;
var tsym4335__4338 = this;

var coll__4339 = tsym4335__4338;

return cljs.core._lookup.call(null,coll__4339,k);
});
var G__4362__4364 = (function (tsym4336,k,not_found){
var this__4340 = this;
var tsym4336__4341 = this;

var coll__4342 = tsym4336__4341;

return cljs.core._lookup.call(null,coll__4342,k,not_found);
});
G__4362 = function(tsym4336,k,not_found){
switch(arguments.length){
case  2 :
return G__4362__4363.call(this,tsym4336,k);
case  3 :
return G__4362__4364.call(this,tsym4336,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4362;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4343 = this;
return (new cljs.core.Subvec(this__4343.meta,cljs.core._assoc_n.call(null,this__4343.v,this__4343.end,o),this__4343.start,(this__4343.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4366 = null;
var G__4366__4367 = (function (coll,f){
var this__4344 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4366__4368 = (function (coll,f,start){
var this__4345 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4366 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4366__4367.call(this,coll,f);
case  3 :
return G__4366__4368.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4366;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4346 = this;
var subvec_seq__4347 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4346.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4346.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4347.call(null,this__4346.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4348 = this;
return (this__4348.end - this__4348.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4349 = this;
return cljs.core._nth.call(null,this__4349.v,(this__4349.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4350 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4350.start,this__4350.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4350.meta,this__4350.v,this__4350.start,(this__4350.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4351 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4352 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4353 = this;
return (new cljs.core.Subvec(meta,this__4353.v,this__4353.start,this__4353.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4354 = this;
return this__4354.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4370 = null;
var G__4370__4371 = (function (coll,n){
var this__4355 = this;
return cljs.core._nth.call(null,this__4355.v,(this__4355.start + n));
});
var G__4370__4372 = (function (coll,n,not_found){
var this__4356 = this;
return cljs.core._nth.call(null,this__4356.v,(this__4356.start + n),not_found);
});
G__4370 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4370__4371.call(this,coll,n);
case  3 :
return G__4370__4372.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4370;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4357 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4357.meta);
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
var subvec__4374 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4375 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4374.call(this,v,start);
case  3 :
return subvec__4375.call(this,v,start,end);
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
var this__4377 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4378 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4379 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4380 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4380.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4381 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4382 = this;
return cljs.core._first.call(null,this__4382.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4383 = this;
var temp__3695__auto____4384 = cljs.core.next.call(null,this__4383.front);

if(cljs.core.truth_(temp__3695__auto____4384))
{var f1__4385 = temp__3695__auto____4384;

return (new cljs.core.PersistentQueueSeq(this__4383.meta,f1__4385,this__4383.rear));
} else
{if(cljs.core.truth_((this__4383.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4383.meta,this__4383.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4386 = this;
return this__4386.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4387 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4387.front,this__4387.rear));
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
var this__4388 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4389 = this;
if(cljs.core.truth_(this__4389.front))
{return (new cljs.core.PersistentQueue(this__4389.meta,(this__4389.count + 1),this__4389.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4390 = this__4389.rear;

if(cljs.core.truth_(or__3548__auto____4390))
{return or__3548__auto____4390;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4389.meta,(this__4389.count + 1),cljs.core.conj.call(null,this__4389.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4391 = this;
var rear__4392 = cljs.core.seq.call(null,this__4391.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4393 = this__4391.front;

if(cljs.core.truth_(or__3548__auto____4393))
{return or__3548__auto____4393;
} else
{return rear__4392;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4391.front,cljs.core.seq.call(null,rear__4392)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4394 = this;
return this__4394.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4395 = this;
return cljs.core._first.call(null,this__4395.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4396 = this;
if(cljs.core.truth_(this__4396.front))
{var temp__3695__auto____4397 = cljs.core.next.call(null,this__4396.front);

if(cljs.core.truth_(temp__3695__auto____4397))
{var f1__4398 = temp__3695__auto____4397;

return (new cljs.core.PersistentQueue(this__4396.meta,(this__4396.count - 1),f1__4398,this__4396.rear));
} else
{return (new cljs.core.PersistentQueue(this__4396.meta,(this__4396.count - 1),cljs.core.seq.call(null,this__4396.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4399 = this;
return cljs.core.first.call(null,this__4399.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4400 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4401 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4402 = this;
return (new cljs.core.PersistentQueue(meta,this__4402.count,this__4402.front,this__4402.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4403 = this;
return this__4403.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4404 = this;
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
var this__4405 = this;
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
var len__4406 = array.length;

var i__4407 = 0;

while(true){
if(cljs.core.truth_((i__4407 < len__4406)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4407]))))
{return i__4407;
} else
{{
var G__4408 = (i__4407 + incr);
i__4407 = G__4408;
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
var obj_map_contains_key_QMARK___4410 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4411 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4409 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4409))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4409;
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
return obj_map_contains_key_QMARK___4410.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4411.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__4414 = cljs.core.hash.call(null,a);
var b__4415 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__4414 < b__4415)))
{return -1;
} else
{if(cljs.core.truth_((a__4414 > b__4415)))
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
var this__4416 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4443 = null;
var G__4443__4444 = (function (coll,k){
var this__4417 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4443__4445 = (function (coll,k,not_found){
var this__4418 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4418.strobj,(this__4418.strobj[k]),not_found);
});
G__4443 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4443__4444.call(this,coll,k);
case  3 :
return G__4443__4445.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4443;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4419 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4420 = goog.object.clone.call(null,this__4419.strobj);
var overwrite_QMARK___4421 = new_strobj__4420.hasOwnProperty(k);

(new_strobj__4420[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4421))
{return (new cljs.core.ObjMap(this__4419.meta,this__4419.keys,new_strobj__4420));
} else
{var new_keys__4422 = cljs.core.aclone.call(null,this__4419.keys);

new_keys__4422.push(k);
return (new cljs.core.ObjMap(this__4419.meta,new_keys__4422,new_strobj__4420));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4419.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4423 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4423.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4447 = null;
var G__4447__4448 = (function (tsym4424,k){
var this__4426 = this;
var tsym4424__4427 = this;

var coll__4428 = tsym4424__4427;

return cljs.core._lookup.call(null,coll__4428,k);
});
var G__4447__4449 = (function (tsym4425,k,not_found){
var this__4429 = this;
var tsym4425__4430 = this;

var coll__4431 = tsym4425__4430;

return cljs.core._lookup.call(null,coll__4431,k,not_found);
});
G__4447 = function(tsym4425,k,not_found){
switch(arguments.length){
case  2 :
return G__4447__4448.call(this,tsym4425,k);
case  3 :
return G__4447__4449.call(this,tsym4425,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4447;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4432 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4433 = this;
if(cljs.core.truth_((this__4433.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4413_SHARP_){
return cljs.core.vector.call(null,p1__4413_SHARP_,(this__4433.strobj[p1__4413_SHARP_]));
}),this__4433.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4434 = this;
return this__4434.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4435 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4436 = this;
return (new cljs.core.ObjMap(meta,this__4436.keys,this__4436.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4437 = this;
return this__4437.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4438 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4438.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4439 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4440 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4440))
{return this__4439.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4440;
}
})()))
{var new_keys__4441 = cljs.core.aclone.call(null,this__4439.keys);
var new_strobj__4442 = goog.object.clone.call(null,this__4439.strobj);

new_keys__4441.splice(cljs.core.scan_array.call(null,1,k,new_keys__4441),1);
cljs.core.js_delete.call(null,new_strobj__4442,k);
return (new cljs.core.ObjMap(this__4439.meta,new_keys__4441,new_strobj__4442));
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
var this__4452 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4490 = null;
var G__4490__4491 = (function (coll,k){
var this__4453 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4490__4492 = (function (coll,k,not_found){
var this__4454 = this;
var bucket__4455 = (this__4454.hashobj[cljs.core.hash.call(null,k)]);
var i__4456 = (cljs.core.truth_(bucket__4455)?cljs.core.scan_array.call(null,2,k,bucket__4455):null);

if(cljs.core.truth_(i__4456))
{return (bucket__4455[(i__4456 + 1)]);
} else
{return not_found;
}
});
G__4490 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4490__4491.call(this,coll,k);
case  3 :
return G__4490__4492.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4490;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4457 = this;
var h__4458 = cljs.core.hash.call(null,k);
var bucket__4459 = (this__4457.hashobj[h__4458]);

if(cljs.core.truth_(bucket__4459))
{var new_bucket__4460 = cljs.core.aclone.call(null,bucket__4459);
var new_hashobj__4461 = goog.object.clone.call(null,this__4457.hashobj);

(new_hashobj__4461[h__4458] = new_bucket__4460);
var temp__3695__auto____4462 = cljs.core.scan_array.call(null,2,k,new_bucket__4460);

if(cljs.core.truth_(temp__3695__auto____4462))
{var i__4463 = temp__3695__auto____4462;

(new_bucket__4460[(i__4463 + 1)] = v);
return (new cljs.core.HashMap(this__4457.meta,this__4457.count,new_hashobj__4461));
} else
{new_bucket__4460.push(k,v);
return (new cljs.core.HashMap(this__4457.meta,(this__4457.count + 1),new_hashobj__4461));
}
} else
{var new_hashobj__4464 = goog.object.clone.call(null,this__4457.hashobj);

(new_hashobj__4464[h__4458] = [k,v]);
return (new cljs.core.HashMap(this__4457.meta,(this__4457.count + 1),new_hashobj__4464));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4465 = this;
var bucket__4466 = (this__4465.hashobj[cljs.core.hash.call(null,k)]);
var i__4467 = (cljs.core.truth_(bucket__4466)?cljs.core.scan_array.call(null,2,k,bucket__4466):null);

if(cljs.core.truth_(i__4467))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4494 = null;
var G__4494__4495 = (function (tsym4468,k){
var this__4470 = this;
var tsym4468__4471 = this;

var coll__4472 = tsym4468__4471;

return cljs.core._lookup.call(null,coll__4472,k);
});
var G__4494__4496 = (function (tsym4469,k,not_found){
var this__4473 = this;
var tsym4469__4474 = this;

var coll__4475 = tsym4469__4474;

return cljs.core._lookup.call(null,coll__4475,k,not_found);
});
G__4494 = function(tsym4469,k,not_found){
switch(arguments.length){
case  2 :
return G__4494__4495.call(this,tsym4469,k);
case  3 :
return G__4494__4496.call(this,tsym4469,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4494;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4476 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4477 = this;
if(cljs.core.truth_((this__4477.count > 0)))
{var hashes__4478 = cljs.core.js_keys.call(null,this__4477.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4451_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4477.hashobj[p1__4451_SHARP_])));
}),hashes__4478);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4479 = this;
return this__4479.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4480 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4481 = this;
return (new cljs.core.HashMap(meta,this__4481.count,this__4481.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4482 = this;
return this__4482.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4483 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4483.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4484 = this;
var h__4485 = cljs.core.hash.call(null,k);
var bucket__4486 = (this__4484.hashobj[h__4485]);
var i__4487 = (cljs.core.truth_(bucket__4486)?cljs.core.scan_array.call(null,2,k,bucket__4486):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4487)))
{return coll;
} else
{var new_hashobj__4488 = goog.object.clone.call(null,this__4484.hashobj);

if(cljs.core.truth_((3 > bucket__4486.length)))
{cljs.core.js_delete.call(null,new_hashobj__4488,h__4485);
} else
{var new_bucket__4489 = cljs.core.aclone.call(null,bucket__4486);

new_bucket__4489.splice(i__4487,2);
(new_hashobj__4488[h__4485] = new_bucket__4489);
}
return (new cljs.core.HashMap(this__4484.meta,(this__4484.count - 1),new_hashobj__4488));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4498 = ks.length;

var i__4499 = 0;
var out__4500 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4499 < len__4498)))
{{
var G__4501 = (i__4499 + 1);
var G__4502 = cljs.core.assoc.call(null,out__4500,(ks[i__4499]),(vs[i__4499]));
i__4499 = G__4501;
out__4500 = G__4502;
continue;
}
} else
{return out__4500;
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
var in$__4503 = cljs.core.seq.call(null,keyvals);
var out__4504 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4503))
{{
var G__4505 = cljs.core.nnext.call(null,in$__4503);
var G__4506 = cljs.core.assoc.call(null,out__4504,cljs.core.first.call(null,in$__4503),cljs.core.second.call(null,in$__4503));
in$__4503 = G__4505;
out__4504 = G__4506;
continue;
}
} else
{return out__4504;
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
hash_map.cljs$lang$applyTo = (function (arglist__4507){
var keyvals = cljs.core.seq( arglist__4507 );;
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
{return cljs.core.reduce.call(null,(function (p1__4508_SHARP_,p2__4509_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4510 = p1__4508_SHARP_;

if(cljs.core.truth_(or__3548__auto____4510))
{return or__3548__auto____4510;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4509_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__4511){
var maps = cljs.core.seq( arglist__4511 );;
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
{var merge_entry__4514 = (function (m,e){
var k__4512 = cljs.core.first.call(null,e);
var v__4513 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4512)))
{return cljs.core.assoc.call(null,m,k__4512,f.call(null,cljs.core.get.call(null,m,k__4512),v__4513));
} else
{return cljs.core.assoc.call(null,m,k__4512,v__4513);
}
});
var merge2__4516 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4514,(function (){var or__3548__auto____4515 = m1;

if(cljs.core.truth_(or__3548__auto____4515))
{return or__3548__auto____4515;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4516,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__4517){
var f = cljs.core.first(arglist__4517);
var maps = cljs.core.rest(arglist__4517);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4519 = cljs.core.ObjMap.fromObject([],{});
var keys__4520 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4520))
{var key__4521 = cljs.core.first.call(null,keys__4520);
var entry__4522 = cljs.core.get.call(null,map,key__4521,"\uFDD0'user/not-found");

{
var G__4523 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4522,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__4519,key__4521,entry__4522):ret__4519);
var G__4524 = cljs.core.next.call(null,keys__4520);
ret__4519 = G__4523;
keys__4520 = G__4524;
continue;
}
} else
{return ret__4519;
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
var this__4525 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4546 = null;
var G__4546__4547 = (function (coll,v){
var this__4526 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4546__4548 = (function (coll,v,not_found){
var this__4527 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4527.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4546 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4546__4547.call(this,coll,v);
case  3 :
return G__4546__4548.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4546;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4550 = null;
var G__4550__4551 = (function (tsym4528,k){
var this__4530 = this;
var tsym4528__4531 = this;

var coll__4532 = tsym4528__4531;

return cljs.core._lookup.call(null,coll__4532,k);
});
var G__4550__4552 = (function (tsym4529,k,not_found){
var this__4533 = this;
var tsym4529__4534 = this;

var coll__4535 = tsym4529__4534;

return cljs.core._lookup.call(null,coll__4535,k,not_found);
});
G__4550 = function(tsym4529,k,not_found){
switch(arguments.length){
case  2 :
return G__4550__4551.call(this,tsym4529,k);
case  3 :
return G__4550__4552.call(this,tsym4529,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4550;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4536 = this;
return (new cljs.core.Set(this__4536.meta,cljs.core.assoc.call(null,this__4536.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4537 = this;
return cljs.core.keys.call(null,this__4537.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4538 = this;
return (new cljs.core.Set(this__4538.meta,cljs.core.dissoc.call(null,this__4538.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4539 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4540 = this;
var and__3546__auto____4541 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4541))
{var and__3546__auto____4542 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4542))
{return cljs.core.every_QMARK_.call(null,(function (p1__4518_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4518_SHARP_);
}),other);
} else
{return and__3546__auto____4542;
}
} else
{return and__3546__auto____4541;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4543 = this;
return (new cljs.core.Set(meta,this__4543.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4544 = this;
return this__4544.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4545 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4545.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4555 = cljs.core.seq.call(null,coll);
var out__4556 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4555))))
{{
var G__4557 = cljs.core.rest.call(null,in$__4555);
var G__4558 = cljs.core.conj.call(null,out__4556,cljs.core.first.call(null,in$__4555));
in$__4555 = G__4557;
out__4556 = G__4558;
continue;
}
} else
{return out__4556;
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
{var n__4559 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4560 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4560))
{var e__4561 = temp__3695__auto____4560;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4561));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4559,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4554_SHARP_){
var temp__3695__auto____4562 = cljs.core.find.call(null,smap,p1__4554_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4562))
{var e__4563 = temp__3695__auto____4562;

return cljs.core.second.call(null,e__4563);
} else
{return p1__4554_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4571 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4564,seen){
while(true){
var vec__4565__4566 = p__4564;
var f__4567 = cljs.core.nth.call(null,vec__4565__4566,0,null);
var xs__4568 = vec__4565__4566;

var temp__3698__auto____4569 = cljs.core.seq.call(null,xs__4568);

if(cljs.core.truth_(temp__3698__auto____4569))
{var s__4570 = temp__3698__auto____4569;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4567)))
{{
var G__4572 = cljs.core.rest.call(null,s__4570);
var G__4573 = seen;
p__4564 = G__4572;
seen = G__4573;
continue;
}
} else
{return cljs.core.cons.call(null,f__4567,step.call(null,cljs.core.rest.call(null,s__4570),cljs.core.conj.call(null,seen,f__4567)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4571.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4574 = cljs.core.PersistentVector.fromArray([]);
var s__4575 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4575)))
{{
var G__4576 = cljs.core.conj.call(null,ret__4574,cljs.core.first.call(null,s__4575));
var G__4577 = cljs.core.next.call(null,s__4575);
ret__4574 = G__4576;
s__4575 = G__4577;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4574);
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
{if(cljs.core.truth_((function (){var or__3548__auto____4578 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4578))
{return or__3548__auto____4578;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4579 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4579 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4579 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____4580 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4580))
{return or__3548__auto____4580;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4581 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4581 > -1)))
{return cljs.core.subs.call(null,x,2,i__4581);
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
var map__4584 = cljs.core.ObjMap.fromObject([],{});
var ks__4585 = cljs.core.seq.call(null,keys);
var vs__4586 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4587 = ks__4585;

if(cljs.core.truth_(and__3546__auto____4587))
{return vs__4586;
} else
{return and__3546__auto____4587;
}
})()))
{{
var G__4588 = cljs.core.assoc.call(null,map__4584,cljs.core.first.call(null,ks__4585),cljs.core.first.call(null,vs__4586));
var G__4589 = cljs.core.next.call(null,ks__4585);
var G__4590 = cljs.core.next.call(null,vs__4586);
map__4584 = G__4588;
ks__4585 = G__4589;
vs__4586 = G__4590;
continue;
}
} else
{return map__4584;
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
var max_key__4593 = (function (k,x){
return x;
});
var max_key__4594 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4595 = (function() { 
var G__4597__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4582_SHARP_,p2__4583_SHARP_){
return max_key.call(null,k,p1__4582_SHARP_,p2__4583_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4597 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4597__delegate.call(this, k, x, y, more);
};
G__4597.cljs$lang$maxFixedArity = 3;
G__4597.cljs$lang$applyTo = (function (arglist__4598){
var k = cljs.core.first(arglist__4598);
var x = cljs.core.first(cljs.core.next(arglist__4598));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4598)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4598)));
return G__4597__delegate.call(this, k, x, y, more);
});
return G__4597;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4593.call(this,k,x);
case  3 :
return max_key__4594.call(this,k,x,y);
default:
return max_key__4595.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4595.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4599 = (function (k,x){
return x;
});
var min_key__4600 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4601 = (function() { 
var G__4603__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4591_SHARP_,p2__4592_SHARP_){
return min_key.call(null,k,p1__4591_SHARP_,p2__4592_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4603 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4603__delegate.call(this, k, x, y, more);
};
G__4603.cljs$lang$maxFixedArity = 3;
G__4603.cljs$lang$applyTo = (function (arglist__4604){
var k = cljs.core.first(arglist__4604);
var x = cljs.core.first(cljs.core.next(arglist__4604));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4604)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4604)));
return G__4603__delegate.call(this, k, x, y, more);
});
return G__4603;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4599.call(this,k,x);
case  3 :
return min_key__4600.call(this,k,x,y);
default:
return min_key__4601.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4601.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4607 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4608 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4605 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4605))
{var s__4606 = temp__3698__auto____4605;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4606),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4606)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4607.call(this,n,step);
case  3 :
return partition_all__4608.call(this,n,step,coll);
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
var temp__3698__auto____4610 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4610))
{var s__4611 = temp__3698__auto____4610;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4611))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4611),take_while.call(null,pred,cljs.core.rest.call(null,s__4611)));
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
var this__4612 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4613 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4629 = null;
var G__4629__4630 = (function (rng,f){
var this__4614 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4629__4631 = (function (rng,f,s){
var this__4615 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4629 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4629__4630.call(this,rng,f);
case  3 :
return G__4629__4631.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4629;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4616 = this;
var comp__4617 = (cljs.core.truth_((this__4616.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4617.call(null,this__4616.start,this__4616.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4618 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4618.end - this__4618.start) / this__4618.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4619 = this;
return this__4619.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4620 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4620.meta,(this__4620.start + this__4620.step),this__4620.end,this__4620.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4621 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4622 = this;
return (new cljs.core.Range(meta,this__4622.start,this__4622.end,this__4622.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4623 = this;
return this__4623.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4633 = null;
var G__4633__4634 = (function (rng,n){
var this__4624 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4624.start + (n * this__4624.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4625 = (this__4624.start > this__4624.end);

if(cljs.core.truth_(and__3546__auto____4625))
{return cljs.core._EQ_.call(null,this__4624.step,0);
} else
{return and__3546__auto____4625;
}
})()))
{return this__4624.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4633__4635 = (function (rng,n,not_found){
var this__4626 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4626.start + (n * this__4626.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4627 = (this__4626.start > this__4626.end);

if(cljs.core.truth_(and__3546__auto____4627))
{return cljs.core._EQ_.call(null,this__4626.step,0);
} else
{return and__3546__auto____4627;
}
})()))
{return this__4626.start;
} else
{return not_found;
}
}
});
G__4633 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4633__4634.call(this,rng,n);
case  3 :
return G__4633__4635.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4633;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4628 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4628.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4637 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4638 = (function (end){
return range.call(null,0,end,1);
});
var range__4639 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4640 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4637.call(this);
case  1 :
return range__4638.call(this,start);
case  2 :
return range__4639.call(this,start,end);
case  3 :
return range__4640.call(this,start,end,step);
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
var temp__3698__auto____4642 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4642))
{var s__4643 = temp__3698__auto____4642;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4643),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4643)));
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
var temp__3698__auto____4645 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4645))
{var s__4646 = temp__3698__auto____4645;

var fst__4647 = cljs.core.first.call(null,s__4646);
var fv__4648 = f.call(null,fst__4647);
var run__4649 = cljs.core.cons.call(null,fst__4647,cljs.core.take_while.call(null,(function (p1__4644_SHARP_){
return cljs.core._EQ_.call(null,fv__4648,f.call(null,p1__4644_SHARP_));
}),cljs.core.next.call(null,s__4646)));

return cljs.core.cons.call(null,run__4649,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4649),s__4646))));
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
var reductions__4664 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4660 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4660))
{var s__4661 = temp__3695__auto____4660;

return reductions.call(null,f,cljs.core.first.call(null,s__4661),cljs.core.rest.call(null,s__4661));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4665 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4662 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4662))
{var s__4663 = temp__3698__auto____4662;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4663)),cljs.core.rest.call(null,s__4663));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4664.call(this,f,init);
case  3 :
return reductions__4665.call(this,f,init,coll);
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
var juxt__4668 = (function (f){
return (function() {
var G__4673 = null;
var G__4673__4674 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4673__4675 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4673__4676 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4673__4677 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4673__4678 = (function() { 
var G__4680__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4680 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4680__delegate.call(this, x, y, z, args);
};
G__4680.cljs$lang$maxFixedArity = 3;
G__4680.cljs$lang$applyTo = (function (arglist__4681){
var x = cljs.core.first(arglist__4681);
var y = cljs.core.first(cljs.core.next(arglist__4681));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4681)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4681)));
return G__4680__delegate.call(this, x, y, z, args);
});
return G__4680;
})()
;
G__4673 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4673__4674.call(this);
case  1 :
return G__4673__4675.call(this,x);
case  2 :
return G__4673__4676.call(this,x,y);
case  3 :
return G__4673__4677.call(this,x,y,z);
default:
return G__4673__4678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4673.cljs$lang$maxFixedArity = 3;
G__4673.cljs$lang$applyTo = G__4673__4678.cljs$lang$applyTo;
return G__4673;
})()
});
var juxt__4669 = (function (f,g){
return (function() {
var G__4682 = null;
var G__4682__4683 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4682__4684 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4682__4685 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4682__4686 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4682__4687 = (function() { 
var G__4689__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4689 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4689__delegate.call(this, x, y, z, args);
};
G__4689.cljs$lang$maxFixedArity = 3;
G__4689.cljs$lang$applyTo = (function (arglist__4690){
var x = cljs.core.first(arglist__4690);
var y = cljs.core.first(cljs.core.next(arglist__4690));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4690)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4690)));
return G__4689__delegate.call(this, x, y, z, args);
});
return G__4689;
})()
;
G__4682 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4682__4683.call(this);
case  1 :
return G__4682__4684.call(this,x);
case  2 :
return G__4682__4685.call(this,x,y);
case  3 :
return G__4682__4686.call(this,x,y,z);
default:
return G__4682__4687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4682.cljs$lang$maxFixedArity = 3;
G__4682.cljs$lang$applyTo = G__4682__4687.cljs$lang$applyTo;
return G__4682;
})()
});
var juxt__4670 = (function (f,g,h){
return (function() {
var G__4691 = null;
var G__4691__4692 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4691__4693 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4691__4694 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4691__4695 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4691__4696 = (function() { 
var G__4698__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4698 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4698__delegate.call(this, x, y, z, args);
};
G__4698.cljs$lang$maxFixedArity = 3;
G__4698.cljs$lang$applyTo = (function (arglist__4699){
var x = cljs.core.first(arglist__4699);
var y = cljs.core.first(cljs.core.next(arglist__4699));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4699)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4699)));
return G__4698__delegate.call(this, x, y, z, args);
});
return G__4698;
})()
;
G__4691 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4691__4692.call(this);
case  1 :
return G__4691__4693.call(this,x);
case  2 :
return G__4691__4694.call(this,x,y);
case  3 :
return G__4691__4695.call(this,x,y,z);
default:
return G__4691__4696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4691.cljs$lang$maxFixedArity = 3;
G__4691.cljs$lang$applyTo = G__4691__4696.cljs$lang$applyTo;
return G__4691;
})()
});
var juxt__4671 = (function() { 
var G__4700__delegate = function (f,g,h,fs){
var fs__4667 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4701 = null;
var G__4701__4702 = (function (){
return cljs.core.reduce.call(null,(function (p1__4650_SHARP_,p2__4651_SHARP_){
return cljs.core.conj.call(null,p1__4650_SHARP_,p2__4651_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__4667);
});
var G__4701__4703 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4652_SHARP_,p2__4653_SHARP_){
return cljs.core.conj.call(null,p1__4652_SHARP_,p2__4653_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__4667);
});
var G__4701__4704 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4654_SHARP_,p2__4655_SHARP_){
return cljs.core.conj.call(null,p1__4654_SHARP_,p2__4655_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__4667);
});
var G__4701__4705 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4656_SHARP_,p2__4657_SHARP_){
return cljs.core.conj.call(null,p1__4656_SHARP_,p2__4657_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__4667);
});
var G__4701__4706 = (function() { 
var G__4708__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4658_SHARP_,p2__4659_SHARP_){
return cljs.core.conj.call(null,p1__4658_SHARP_,cljs.core.apply.call(null,p2__4659_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__4667);
};
var G__4708 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4708__delegate.call(this, x, y, z, args);
};
G__4708.cljs$lang$maxFixedArity = 3;
G__4708.cljs$lang$applyTo = (function (arglist__4709){
var x = cljs.core.first(arglist__4709);
var y = cljs.core.first(cljs.core.next(arglist__4709));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4709)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4709)));
return G__4708__delegate.call(this, x, y, z, args);
});
return G__4708;
})()
;
G__4701 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4701__4702.call(this);
case  1 :
return G__4701__4703.call(this,x);
case  2 :
return G__4701__4704.call(this,x,y);
case  3 :
return G__4701__4705.call(this,x,y,z);
default:
return G__4701__4706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4701.cljs$lang$maxFixedArity = 3;
G__4701.cljs$lang$applyTo = G__4701__4706.cljs$lang$applyTo;
return G__4701;
})()
};
var G__4700 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4700__delegate.call(this, f, g, h, fs);
};
G__4700.cljs$lang$maxFixedArity = 3;
G__4700.cljs$lang$applyTo = (function (arglist__4710){
var f = cljs.core.first(arglist__4710);
var g = cljs.core.first(cljs.core.next(arglist__4710));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4710)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4710)));
return G__4700__delegate.call(this, f, g, h, fs);
});
return G__4700;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4668.call(this,f);
case  2 :
return juxt__4669.call(this,f,g);
case  3 :
return juxt__4670.call(this,f,g,h);
default:
return juxt__4671.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4671.cljs$lang$applyTo;
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
var dorun__4712 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4715 = cljs.core.next.call(null,coll);
coll = G__4715;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4713 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4711 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4711))
{return (n > 0);
} else
{return and__3546__auto____4711;
}
})()))
{{
var G__4716 = (n - 1);
var G__4717 = cljs.core.next.call(null,coll);
n = G__4716;
coll = G__4717;
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
return dorun__4712.call(this,n);
case  2 :
return dorun__4713.call(this,n,coll);
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
var doall__4718 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4719 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4718.call(this,n);
case  2 :
return doall__4719.call(this,n,coll);
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
var matches__4721 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4721),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4721),1)))
{return cljs.core.first.call(null,matches__4721);
} else
{return cljs.core.vec.call(null,matches__4721);
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
var matches__4722 = re.exec(s);

if(cljs.core.truth_((matches__4722 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4722),1)))
{return cljs.core.first.call(null,matches__4722);
} else
{return cljs.core.vec.call(null,matches__4722);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4723 = cljs.core.re_find.call(null,re,s);
var match_idx__4724 = s.search(re);
var match_str__4725 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4723))?cljs.core.first.call(null,match_data__4723):match_data__4723);
var post_match__4726 = cljs.core.subs.call(null,s,(match_idx__4724 + cljs.core.count.call(null,match_str__4725)));

if(cljs.core.truth_(match_data__4723))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4723,re_seq.call(null,re,post_match__4726));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__4728__4729 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___4730 = cljs.core.nth.call(null,vec__4728__4729,0,null);
var flags__4731 = cljs.core.nth.call(null,vec__4728__4729,1,null);
var pattern__4732 = cljs.core.nth.call(null,vec__4728__4729,2,null);

return (new RegExp(pattern__4732,flags__4731));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4727_SHARP_){
return print_one.call(null,p1__4727_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4733 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____4733))
{var and__3546__auto____4737 = (function (){var x__451__auto____4734 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4735 = x__451__auto____4734;

if(cljs.core.truth_(and__3546__auto____4735))
{var and__3546__auto____4736 = x__451__auto____4734.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4736))
{return cljs.core.not.call(null,x__451__auto____4734.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4736;
}
} else
{return and__3546__auto____4735;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____4734);
}
})();

if(cljs.core.truth_(and__3546__auto____4737))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4737;
}
} else
{return and__3546__auto____4733;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____4738 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4739 = x__451__auto____4738;

if(cljs.core.truth_(and__3546__auto____4739))
{var and__3546__auto____4740 = x__451__auto____4738.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4740))
{return cljs.core.not.call(null,x__451__auto____4738.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4740;
}
} else
{return and__3546__auto____4739;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____4738);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__4741 = cljs.core.first.call(null,objs);
var sb__4742 = (new goog.string.StringBuffer());

var G__4743__4744 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4743__4744))
{var obj__4745 = cljs.core.first.call(null,G__4743__4744);
var G__4743__4746 = G__4743__4744;

while(true){
if(cljs.core.truth_((obj__4745 === first_obj__4741)))
{} else
{sb__4742.append(" ");
}
var G__4747__4748 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4745,opts));

if(cljs.core.truth_(G__4747__4748))
{var string__4749 = cljs.core.first.call(null,G__4747__4748);
var G__4747__4750 = G__4747__4748;

while(true){
sb__4742.append(string__4749);
var temp__3698__auto____4751 = cljs.core.next.call(null,G__4747__4750);

if(cljs.core.truth_(temp__3698__auto____4751))
{var G__4747__4752 = temp__3698__auto____4751;

{
var G__4755 = cljs.core.first.call(null,G__4747__4752);
var G__4756 = G__4747__4752;
string__4749 = G__4755;
G__4747__4750 = G__4756;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4753 = cljs.core.next.call(null,G__4743__4746);

if(cljs.core.truth_(temp__3698__auto____4753))
{var G__4743__4754 = temp__3698__auto____4753;

{
var G__4757 = cljs.core.first.call(null,G__4743__4754);
var G__4758 = G__4743__4754;
obj__4745 = G__4757;
G__4743__4746 = G__4758;
continue;
}
} else
{}
break;
}
} else
{}
return sb__4742;
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
var sb__4759 = cljs.core.pr_sb.call(null,objs,opts);

sb__4759.append("\n");
return cljs.core.str.call(null,sb__4759);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4760 = cljs.core.first.call(null,objs);

var G__4761__4762 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4761__4762))
{var obj__4763 = cljs.core.first.call(null,G__4761__4762);
var G__4761__4764 = G__4761__4762;

while(true){
if(cljs.core.truth_((obj__4763 === first_obj__4760)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4765__4766 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4763,opts));

if(cljs.core.truth_(G__4765__4766))
{var string__4767 = cljs.core.first.call(null,G__4765__4766);
var G__4765__4768 = G__4765__4766;

while(true){
cljs.core.string_print.call(null,string__4767);
var temp__3698__auto____4769 = cljs.core.next.call(null,G__4765__4768);

if(cljs.core.truth_(temp__3698__auto____4769))
{var G__4765__4770 = temp__3698__auto____4769;

{
var G__4773 = cljs.core.first.call(null,G__4765__4770);
var G__4774 = G__4765__4770;
string__4767 = G__4773;
G__4765__4768 = G__4774;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4771 = cljs.core.next.call(null,G__4761__4764);

if(cljs.core.truth_(temp__3698__auto____4771))
{var G__4761__4772 = temp__3698__auto____4771;

{
var G__4775 = cljs.core.first.call(null,G__4761__4772);
var G__4776 = G__4761__4772;
obj__4763 = G__4775;
G__4761__4764 = G__4776;
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
pr_str.cljs$lang$applyTo = (function (arglist__4777){
var objs = cljs.core.seq( arglist__4777 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__4778){
var objs = cljs.core.seq( arglist__4778 );;
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
pr.cljs$lang$applyTo = (function (arglist__4779){
var objs = cljs.core.seq( arglist__4779 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__4780){
var objs = cljs.core.seq( arglist__4780 );;
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
print_str.cljs$lang$applyTo = (function (arglist__4781){
var objs = cljs.core.seq( arglist__4781 );;
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
println.cljs$lang$applyTo = (function (arglist__4782){
var objs = cljs.core.seq( arglist__4782 );;
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
println_str.cljs$lang$applyTo = (function (arglist__4783){
var objs = cljs.core.seq( arglist__4783 );;
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
prn.cljs$lang$applyTo = (function (arglist__4784){
var objs = cljs.core.seq( arglist__4784 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4785 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4785,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4786 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4786))
{var nspc__4787 = temp__3698__auto____4786;

return cljs.core.str.call(null,nspc__4787,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4788 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4788))
{var nspc__4789 = temp__3698__auto____4788;

return cljs.core.str.call(null,nspc__4789,"/");
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
var pr_pair__4790 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4790,"{",", ","}",opts,coll);
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
var this__4791 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4792 = this;
var G__4793__4794 = cljs.core.seq.call(null,this__4792.watches);

if(cljs.core.truth_(G__4793__4794))
{var G__4796__4798 = cljs.core.first.call(null,G__4793__4794);
var vec__4797__4799 = G__4796__4798;
var key__4800 = cljs.core.nth.call(null,vec__4797__4799,0,null);
var f__4801 = cljs.core.nth.call(null,vec__4797__4799,1,null);
var G__4793__4802 = G__4793__4794;

var G__4796__4803 = G__4796__4798;
var G__4793__4804 = G__4793__4802;

while(true){
var vec__4805__4806 = G__4796__4803;
var key__4807 = cljs.core.nth.call(null,vec__4805__4806,0,null);
var f__4808 = cljs.core.nth.call(null,vec__4805__4806,1,null);
var G__4793__4809 = G__4793__4804;

f__4808.call(null,key__4807,this$,oldval,newval);
var temp__3698__auto____4810 = cljs.core.next.call(null,G__4793__4809);

if(cljs.core.truth_(temp__3698__auto____4810))
{var G__4793__4811 = temp__3698__auto____4810;

{
var G__4818 = cljs.core.first.call(null,G__4793__4811);
var G__4819 = G__4793__4811;
G__4796__4803 = G__4818;
G__4793__4804 = G__4819;
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
var this__4812 = this;
return this$.watches = cljs.core.assoc.call(null,this__4812.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4813 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4813.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4814 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4814.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4815 = this;
return this__4815.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4816 = this;
return this__4816.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4817 = this;
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
var atom__4826 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4827 = (function() { 
var G__4829__delegate = function (x,p__4820){
var map__4821__4822 = p__4820;
var map__4821__4823 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4821__4822))?cljs.core.apply.call(null,cljs.core.hash_map,map__4821__4822):map__4821__4822);
var validator__4824 = cljs.core.get.call(null,map__4821__4823,"\uFDD0'validator");
var meta__4825 = cljs.core.get.call(null,map__4821__4823,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__4825,validator__4824,null));
};
var G__4829 = function (x,var_args){
var p__4820 = null;
if (goog.isDef(var_args)) {
  p__4820 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4829__delegate.call(this, x, p__4820);
};
G__4829.cljs$lang$maxFixedArity = 1;
G__4829.cljs$lang$applyTo = (function (arglist__4830){
var x = cljs.core.first(arglist__4830);
var p__4820 = cljs.core.rest(arglist__4830);
return G__4829__delegate.call(this, x, p__4820);
});
return G__4829;
})()
;
atom = function(x,var_args){
var p__4820 = var_args;
switch(arguments.length){
case  1 :
return atom__4826.call(this,x);
default:
return atom__4827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4827.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4831 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4831))
{var validate__4832 = temp__3698__auto____4831;

if(cljs.core.truth_(validate__4832.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__4833 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4833,new_value);
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
var swap_BANG___4834 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4835 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4836 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4837 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4838 = (function() { 
var G__4840__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4840 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4840__delegate.call(this, a, f, x, y, z, more);
};
G__4840.cljs$lang$maxFixedArity = 5;
G__4840.cljs$lang$applyTo = (function (arglist__4841){
var a = cljs.core.first(arglist__4841);
var f = cljs.core.first(cljs.core.next(arglist__4841));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4841)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4841))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4841)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4841)))));
return G__4840__delegate.call(this, a, f, x, y, z, more);
});
return G__4840;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4834.call(this,a,f);
case  3 :
return swap_BANG___4835.call(this,a,f,x);
case  4 :
return swap_BANG___4836.call(this,a,f,x,y);
case  5 :
return swap_BANG___4837.call(this,a,f,x,y,z);
default:
return swap_BANG___4838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4838.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4842){
var iref = cljs.core.first(arglist__4842);
var f = cljs.core.first(cljs.core.next(arglist__4842));
var args = cljs.core.rest(cljs.core.next(arglist__4842));
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
var gensym__4843 = (function (){
return gensym.call(null,"G__");
});
var gensym__4844 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4843.call(this);
case  1 :
return gensym__4844.call(this,prefix_string);
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
var this__4846 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__4846.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4847 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__4847.state,(function (p__4848){
var curr_state__4849 = p__4848;
var curr_state__4850 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__4849))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__4849):curr_state__4849);
var done__4851 = cljs.core.get.call(null,curr_state__4850,"\uFDD0'done");

if(cljs.core.truth_(done__4851))
{return curr_state__4850;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__4847.f.call(null)});
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
var map__4852__4853 = options;
var map__4852__4854 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4852__4853))?cljs.core.apply.call(null,cljs.core.hash_map,map__4852__4853):map__4852__4853);
var keywordize_keys__4855 = cljs.core.get.call(null,map__4852__4854,"\uFDD0'keywordize-keys");
var keyfn__4856 = (cljs.core.truth_(keywordize_keys__4855)?cljs.core.keyword:cljs.core.str);
var f__4862 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____4861 = (function iter__4857(s__4858){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4858__4859 = s__4858;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4858__4859)))
{var k__4860 = cljs.core.first.call(null,s__4858__4859);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__4856.call(null,k__4860),thisfn.call(null,(x[k__4860]))]),iter__4857.call(null,cljs.core.rest.call(null,s__4858__4859)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____4861.call(null,cljs.core.js_keys.call(null,x));
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

return f__4862.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4863){
var x = cljs.core.first(arglist__4863);
var options = cljs.core.rest(arglist__4863);
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
var mem__4864 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4868__delegate = function (args){
var temp__3695__auto____4865 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4864),args);

if(cljs.core.truth_(temp__3695__auto____4865))
{var v__4866 = temp__3695__auto____4865;

return v__4866;
} else
{var ret__4867 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4864,cljs.core.assoc,args,ret__4867);
return ret__4867;
}
};
var G__4868 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4868__delegate.call(this, args);
};
G__4868.cljs$lang$maxFixedArity = 0;
G__4868.cljs$lang$applyTo = (function (arglist__4869){
var args = cljs.core.seq( arglist__4869 );;
return G__4868__delegate.call(this, args);
});
return G__4868;
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
var trampoline__4871 = (function (f){
while(true){
var ret__4870 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4870)))
{{
var G__4874 = ret__4870;
f = G__4874;
continue;
}
} else
{return ret__4870;
}
break;
}
});
var trampoline__4872 = (function() { 
var G__4875__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4875 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4875__delegate.call(this, f, args);
};
G__4875.cljs$lang$maxFixedArity = 1;
G__4875.cljs$lang$applyTo = (function (arglist__4876){
var f = cljs.core.first(arglist__4876);
var args = cljs.core.rest(arglist__4876);
return G__4875__delegate.call(this, f, args);
});
return G__4875;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4871.call(this,f);
default:
return trampoline__4872.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4872.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4877 = (function (){
return rand.call(null,1);
});
var rand__4878 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4877.call(this);
case  1 :
return rand__4878.call(this,n);
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
var k__4880 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4880,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4880,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___4889 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4890 = (function (h,child,parent){
var or__3548__auto____4881 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4881))
{return or__3548__auto____4881;
} else
{var or__3548__auto____4882 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4882))
{return or__3548__auto____4882;
} else
{var and__3546__auto____4883 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4883))
{var and__3546__auto____4884 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4884))
{var and__3546__auto____4885 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4885))
{var ret__4886 = true;
var i__4887 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4888 = cljs.core.not.call(null,ret__4886);

if(cljs.core.truth_(or__3548__auto____4888))
{return or__3548__auto____4888;
} else
{return cljs.core._EQ_.call(null,i__4887,cljs.core.count.call(null,parent));
}
})()))
{return ret__4886;
} else
{{
var G__4892 = isa_QMARK_.call(null,h,child.call(null,i__4887),parent.call(null,i__4887));
var G__4893 = (i__4887 + 1);
ret__4886 = G__4892;
i__4887 = G__4893;
continue;
}
}
break;
}
} else
{return and__3546__auto____4885;
}
} else
{return and__3546__auto____4884;
}
} else
{return and__3546__auto____4883;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4889.call(this,h,child);
case  3 :
return isa_QMARK___4890.call(this,h,child,parent);
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
var parents__4894 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4895 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4894.call(this,h);
case  2 :
return parents__4895.call(this,h,tag);
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
var ancestors__4897 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4898 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4897.call(this,h);
case  2 :
return ancestors__4898.call(this,h,tag);
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
var descendants__4900 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4901 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4900.call(this,h);
case  2 :
return descendants__4901.call(this,h,tag);
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
var derive__4911 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4912 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__4906 = "\uFDD0'parents".call(null,h);
var td__4907 = "\uFDD0'descendants".call(null,h);
var ta__4908 = "\uFDD0'ancestors".call(null,h);
var tf__4909 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4910 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4906.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4908.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4908.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4906,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__4909.call(null,"\uFDD0'ancestors".call(null,h),tag,td__4907,parent,ta__4908),"\uFDD0'descendants":tf__4909.call(null,"\uFDD0'descendants".call(null,h),parent,ta__4908,tag,td__4907)});
})());

if(cljs.core.truth_(or__3548__auto____4910))
{return or__3548__auto____4910;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4911.call(this,h,tag);
case  3 :
return derive__4912.call(this,h,tag,parent);
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
var underive__4918 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4919 = (function (h,tag,parent){
var parentMap__4914 = "\uFDD0'parents".call(null,h);
var childsParents__4915 = (cljs.core.truth_(parentMap__4914.call(null,tag))?cljs.core.disj.call(null,parentMap__4914.call(null,tag),parent):cljs.core.set([]));
var newParents__4916 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4915))?cljs.core.assoc.call(null,parentMap__4914,tag,childsParents__4915):cljs.core.dissoc.call(null,parentMap__4914,tag));
var deriv_seq__4917 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4903_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4903_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4903_SHARP_),cljs.core.second.call(null,p1__4903_SHARP_)));
}),cljs.core.seq.call(null,newParents__4916)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4914.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4904_SHARP_,p2__4905_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4904_SHARP_,p2__4905_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4917));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4918.call(this,h,tag);
case  3 :
return underive__4919.call(this,h,tag,parent);
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
var xprefs__4921 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4923 = (cljs.core.truth_((function (){var and__3546__auto____4922 = xprefs__4921;

if(cljs.core.truth_(and__3546__auto____4922))
{return xprefs__4921.call(null,y);
} else
{return and__3546__auto____4922;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4923))
{return or__3548__auto____4923;
} else
{var or__3548__auto____4925 = (function (){var ps__4924 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4924) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4924),prefer_table)))
{} else
{}
{
var G__4928 = cljs.core.rest.call(null,ps__4924);
ps__4924 = G__4928;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4925))
{return or__3548__auto____4925;
} else
{var or__3548__auto____4927 = (function (){var ps__4926 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4926) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4926),y,prefer_table)))
{} else
{}
{
var G__4929 = cljs.core.rest.call(null,ps__4926);
ps__4926 = G__4929;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4927))
{return or__3548__auto____4927;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4930 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4930))
{return or__3548__auto____4930;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4939 = cljs.core.reduce.call(null,(function (be,p__4931){
var vec__4932__4933 = p__4931;
var k__4934 = cljs.core.nth.call(null,vec__4932__4933,0,null);
var ___4935 = cljs.core.nth.call(null,vec__4932__4933,1,null);
var e__4936 = vec__4932__4933;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4934)))
{var be2__4938 = (cljs.core.truth_((function (){var or__3548__auto____4937 = (be === null);

if(cljs.core.truth_(or__3548__auto____4937))
{return or__3548__auto____4937;
} else
{return cljs.core.dominates.call(null,k__4934,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4936:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4938),k__4934,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4934," and ",cljs.core.first.call(null,be2__4938),", and neither is preferred")));
}
return be2__4938;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4939))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4939));
return cljs.core.second.call(null,best_entry__4939);
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
if(cljs.core.truth_((function (){var and__3546__auto____4940 = mf;

if(cljs.core.truth_(and__3546__auto____4940))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4940;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4941 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4941))
{return or__3548__auto____4941;
} else
{var or__3548__auto____4942 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4942))
{return or__3548__auto____4942;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4943 = mf;

if(cljs.core.truth_(and__3546__auto____4943))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4943;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4944 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4944))
{return or__3548__auto____4944;
} else
{var or__3548__auto____4945 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4945))
{return or__3548__auto____4945;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4946 = mf;

if(cljs.core.truth_(and__3546__auto____4946))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4946;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4947 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4947))
{return or__3548__auto____4947;
} else
{var or__3548__auto____4948 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4948))
{return or__3548__auto____4948;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4949 = mf;

if(cljs.core.truth_(and__3546__auto____4949))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4949;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4950 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4950))
{return or__3548__auto____4950;
} else
{var or__3548__auto____4951 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4951))
{return or__3548__auto____4951;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4952 = mf;

if(cljs.core.truth_(and__3546__auto____4952))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4952;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4953 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4953))
{return or__3548__auto____4953;
} else
{var or__3548__auto____4954 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4954))
{return or__3548__auto____4954;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4955 = mf;

if(cljs.core.truth_(and__3546__auto____4955))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4955;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4956 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4956))
{return or__3548__auto____4956;
} else
{var or__3548__auto____4957 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4957))
{return or__3548__auto____4957;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4958 = mf;

if(cljs.core.truth_(and__3546__auto____4958))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4958;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4959 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4959))
{return or__3548__auto____4959;
} else
{var or__3548__auto____4960 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4960))
{return or__3548__auto____4960;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4961 = mf;

if(cljs.core.truth_(and__3546__auto____4961))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4961;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4962 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4962))
{return or__3548__auto____4962;
} else
{var or__3548__auto____4963 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4963))
{return or__3548__auto____4963;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4964 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4965 = cljs.core._get_method.call(null,mf,dispatch_val__4964);

if(cljs.core.truth_(target_fn__4965))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4964)));
}
return cljs.core.apply.call(null,target_fn__4965,args);
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
var this__4966 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4967 = this;
cljs.core.swap_BANG_.call(null,this__4967.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4967.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4967.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4967.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4968 = this;
cljs.core.swap_BANG_.call(null,this__4968.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4968.method_cache,this__4968.method_table,this__4968.cached_hierarchy,this__4968.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4969 = this;
cljs.core.swap_BANG_.call(null,this__4969.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4969.method_cache,this__4969.method_table,this__4969.cached_hierarchy,this__4969.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4970 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4970.cached_hierarchy),cljs.core.deref.call(null,this__4970.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4970.method_cache,this__4970.method_table,this__4970.cached_hierarchy,this__4970.hierarchy);
}
var temp__3695__auto____4971 = cljs.core.deref.call(null,this__4970.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4971))
{var target_fn__4972 = temp__3695__auto____4971;

return target_fn__4972;
} else
{var temp__3695__auto____4973 = cljs.core.find_and_cache_best_method.call(null,this__4970.name,dispatch_val,this__4970.hierarchy,this__4970.method_table,this__4970.prefer_table,this__4970.method_cache,this__4970.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4973))
{var target_fn__4974 = temp__3695__auto____4973;

return target_fn__4974;
} else
{return cljs.core.deref.call(null,this__4970.method_table).call(null,this__4970.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4975 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4975.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4975.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4975.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4975.method_cache,this__4975.method_table,this__4975.cached_hierarchy,this__4975.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4976 = this;
return cljs.core.deref.call(null,this__4976.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4977 = this;
return cljs.core.deref.call(null,this__4977.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4978 = this;
return cljs.core.do_dispatch.call(null,mf,this__4978.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4979__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4979 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4979__delegate.call(this, _, args);
};
G__4979.cljs$lang$maxFixedArity = 1;
G__4979.cljs$lang$applyTo = (function (arglist__4980){
var _ = cljs.core.first(arglist__4980);
var args = cljs.core.rest(arglist__4980);
return G__4979__delegate.call(this, _, args);
});
return G__4979;
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
