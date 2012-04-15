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
var or__3548__auto____3242 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____3242))
{return or__3548__auto____3242;
} else
{var or__3548__auto____3243 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____3243))
{return or__3548__auto____3243;
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
var _invoke__3307 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3244 = this$;

if(cljs.core.truth_(and__3546__auto____3244))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3244;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____3245 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3245))
{return or__3548__auto____3245;
} else
{var or__3548__auto____3246 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3246))
{return or__3548__auto____3246;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__3308 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____3247 = this$;

if(cljs.core.truth_(and__3546__auto____3247))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3247;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____3248 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3248))
{return or__3548__auto____3248;
} else
{var or__3548__auto____3249 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3249))
{return or__3548__auto____3249;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3309 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____3250 = this$;

if(cljs.core.truth_(and__3546__auto____3250))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3250;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____3251 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3251))
{return or__3548__auto____3251;
} else
{var or__3548__auto____3252 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3252))
{return or__3548__auto____3252;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__3310 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____3253 = this$;

if(cljs.core.truth_(and__3546__auto____3253))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3253;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____3254 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3254))
{return or__3548__auto____3254;
} else
{var or__3548__auto____3255 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3255))
{return or__3548__auto____3255;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__3311 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____3256 = this$;

if(cljs.core.truth_(and__3546__auto____3256))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3256;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____3257 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3257))
{return or__3548__auto____3257;
} else
{var or__3548__auto____3258 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3258))
{return or__3548__auto____3258;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__3312 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____3259 = this$;

if(cljs.core.truth_(and__3546__auto____3259))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3259;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____3260 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3260))
{return or__3548__auto____3260;
} else
{var or__3548__auto____3261 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3261))
{return or__3548__auto____3261;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__3313 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____3262 = this$;

if(cljs.core.truth_(and__3546__auto____3262))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3262;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____3263 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3263))
{return or__3548__auto____3263;
} else
{var or__3548__auto____3264 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3264))
{return or__3548__auto____3264;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__3314 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____3265 = this$;

if(cljs.core.truth_(and__3546__auto____3265))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3265;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____3266 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3266))
{return or__3548__auto____3266;
} else
{var or__3548__auto____3267 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3267))
{return or__3548__auto____3267;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__3315 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____3268 = this$;

if(cljs.core.truth_(and__3546__auto____3268))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3268;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____3269 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3269))
{return or__3548__auto____3269;
} else
{var or__3548__auto____3270 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3270))
{return or__3548__auto____3270;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__3316 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____3271 = this$;

if(cljs.core.truth_(and__3546__auto____3271))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3271;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____3272 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3272))
{return or__3548__auto____3272;
} else
{var or__3548__auto____3273 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3273))
{return or__3548__auto____3273;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__3317 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____3274 = this$;

if(cljs.core.truth_(and__3546__auto____3274))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3274;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____3275 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3275))
{return or__3548__auto____3275;
} else
{var or__3548__auto____3276 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3276))
{return or__3548__auto____3276;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__3318 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____3277 = this$;

if(cljs.core.truth_(and__3546__auto____3277))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3277;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____3278 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3278))
{return or__3548__auto____3278;
} else
{var or__3548__auto____3279 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3279))
{return or__3548__auto____3279;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__3319 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____3280 = this$;

if(cljs.core.truth_(and__3546__auto____3280))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3280;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____3281 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3281))
{return or__3548__auto____3281;
} else
{var or__3548__auto____3282 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3282))
{return or__3548__auto____3282;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__3320 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____3283 = this$;

if(cljs.core.truth_(and__3546__auto____3283))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3283;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____3284 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3284))
{return or__3548__auto____3284;
} else
{var or__3548__auto____3285 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3285))
{return or__3548__auto____3285;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__3321 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____3286 = this$;

if(cljs.core.truth_(and__3546__auto____3286))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3286;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____3287 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3287))
{return or__3548__auto____3287;
} else
{var or__3548__auto____3288 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3288))
{return or__3548__auto____3288;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__3322 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____3289 = this$;

if(cljs.core.truth_(and__3546__auto____3289))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3289;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____3290 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3290))
{return or__3548__auto____3290;
} else
{var or__3548__auto____3291 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3291))
{return or__3548__auto____3291;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__3323 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____3292 = this$;

if(cljs.core.truth_(and__3546__auto____3292))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3292;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____3293 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3293))
{return or__3548__auto____3293;
} else
{var or__3548__auto____3294 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3294))
{return or__3548__auto____3294;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__3324 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____3295 = this$;

if(cljs.core.truth_(and__3546__auto____3295))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3295;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____3296 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3296))
{return or__3548__auto____3296;
} else
{var or__3548__auto____3297 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3297))
{return or__3548__auto____3297;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__3325 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____3298 = this$;

if(cljs.core.truth_(and__3546__auto____3298))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3298;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____3299 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3299))
{return or__3548__auto____3299;
} else
{var or__3548__auto____3300 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3300))
{return or__3548__auto____3300;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__3326 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____3301 = this$;

if(cljs.core.truth_(and__3546__auto____3301))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3301;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____3302 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3302))
{return or__3548__auto____3302;
} else
{var or__3548__auto____3303 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3303))
{return or__3548__auto____3303;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__3327 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____3304 = this$;

if(cljs.core.truth_(and__3546__auto____3304))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3304;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____3305 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3305))
{return or__3548__auto____3305;
} else
{var or__3548__auto____3306 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3306))
{return or__3548__auto____3306;
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
return _invoke__3307.call(this,this$);
case  2 :
return _invoke__3308.call(this,this$,a);
case  3 :
return _invoke__3309.call(this,this$,a,b);
case  4 :
return _invoke__3310.call(this,this$,a,b,c);
case  5 :
return _invoke__3311.call(this,this$,a,b,c,d);
case  6 :
return _invoke__3312.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__3313.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__3314.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__3315.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__3316.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__3317.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__3318.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__3319.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__3320.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__3321.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__3322.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__3323.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__3324.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__3325.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__3326.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__3327.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3329 = coll;

if(cljs.core.truth_(and__3546__auto____3329))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3329;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3330 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3330))
{return or__3548__auto____3330;
} else
{var or__3548__auto____3331 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3331))
{return or__3548__auto____3331;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3332 = coll;

if(cljs.core.truth_(and__3546__auto____3332))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3332;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3333 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3333))
{return or__3548__auto____3333;
} else
{var or__3548__auto____3334 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3334))
{return or__3548__auto____3334;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3335 = coll;

if(cljs.core.truth_(and__3546__auto____3335))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3335;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3336 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3336))
{return or__3548__auto____3336;
} else
{var or__3548__auto____3337 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3337))
{return or__3548__auto____3337;
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
var _nth__3344 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3338 = coll;

if(cljs.core.truth_(and__3546__auto____3338))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3338;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3339 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3339))
{return or__3548__auto____3339;
} else
{var or__3548__auto____3340 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3340))
{return or__3548__auto____3340;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3345 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3341 = coll;

if(cljs.core.truth_(and__3546__auto____3341))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3341;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3342 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3342))
{return or__3548__auto____3342;
} else
{var or__3548__auto____3343 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3343))
{return or__3548__auto____3343;
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
return _nth__3344.call(this,coll,n);
case  3 :
return _nth__3345.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3347 = coll;

if(cljs.core.truth_(and__3546__auto____3347))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3347;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3348 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3348))
{return or__3548__auto____3348;
} else
{var or__3548__auto____3349 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3349))
{return or__3548__auto____3349;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3350 = coll;

if(cljs.core.truth_(and__3546__auto____3350))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3350;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3351 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3351))
{return or__3548__auto____3351;
} else
{var or__3548__auto____3352 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3352))
{return or__3548__auto____3352;
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
var _lookup__3359 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3353 = o;

if(cljs.core.truth_(and__3546__auto____3353))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3353;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3354 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3354))
{return or__3548__auto____3354;
} else
{var or__3548__auto____3355 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3355))
{return or__3548__auto____3355;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3360 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3356 = o;

if(cljs.core.truth_(and__3546__auto____3356))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3356;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3357 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3357))
{return or__3548__auto____3357;
} else
{var or__3548__auto____3358 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3358))
{return or__3548__auto____3358;
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
return _lookup__3359.call(this,o,k);
case  3 :
return _lookup__3360.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3362 = coll;

if(cljs.core.truth_(and__3546__auto____3362))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3362;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3363 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3363))
{return or__3548__auto____3363;
} else
{var or__3548__auto____3364 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3364))
{return or__3548__auto____3364;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3365 = coll;

if(cljs.core.truth_(and__3546__auto____3365))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3365;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3366 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3366))
{return or__3548__auto____3366;
} else
{var or__3548__auto____3367 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3367))
{return or__3548__auto____3367;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3368 = coll;

if(cljs.core.truth_(and__3546__auto____3368))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3368;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3369 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3369))
{return or__3548__auto____3369;
} else
{var or__3548__auto____3370 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3370))
{return or__3548__auto____3370;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3371 = coll;

if(cljs.core.truth_(and__3546__auto____3371))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3371;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3372 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3372))
{return or__3548__auto____3372;
} else
{var or__3548__auto____3373 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3373))
{return or__3548__auto____3373;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3374 = coll;

if(cljs.core.truth_(and__3546__auto____3374))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3374;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3375 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3375))
{return or__3548__auto____3375;
} else
{var or__3548__auto____3376 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3376))
{return or__3548__auto____3376;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3377 = coll;

if(cljs.core.truth_(and__3546__auto____3377))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3377;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3378 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3378))
{return or__3548__auto____3378;
} else
{var or__3548__auto____3379 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3379))
{return or__3548__auto____3379;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3380 = coll;

if(cljs.core.truth_(and__3546__auto____3380))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3380;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3381 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3381))
{return or__3548__auto____3381;
} else
{var or__3548__auto____3382 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3382))
{return or__3548__auto____3382;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3383 = o;

if(cljs.core.truth_(and__3546__auto____3383))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3383;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3384 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3384))
{return or__3548__auto____3384;
} else
{var or__3548__auto____3385 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3385))
{return or__3548__auto____3385;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3386 = o;

if(cljs.core.truth_(and__3546__auto____3386))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3386;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3387 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3387))
{return or__3548__auto____3387;
} else
{var or__3548__auto____3388 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3388))
{return or__3548__auto____3388;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3389 = o;

if(cljs.core.truth_(and__3546__auto____3389))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3389;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3390 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3390))
{return or__3548__auto____3390;
} else
{var or__3548__auto____3391 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3391))
{return or__3548__auto____3391;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3392 = o;

if(cljs.core.truth_(and__3546__auto____3392))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3392;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3393 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3393))
{return or__3548__auto____3393;
} else
{var or__3548__auto____3394 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3394))
{return or__3548__auto____3394;
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
var _reduce__3401 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3395 = coll;

if(cljs.core.truth_(and__3546__auto____3395))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3395;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3396 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3396))
{return or__3548__auto____3396;
} else
{var or__3548__auto____3397 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3397))
{return or__3548__auto____3397;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3402 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3398 = coll;

if(cljs.core.truth_(and__3546__auto____3398))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3398;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3399 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3399))
{return or__3548__auto____3399;
} else
{var or__3548__auto____3400 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3400))
{return or__3548__auto____3400;
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
return _reduce__3401.call(this,coll,f);
case  3 :
return _reduce__3402.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3404 = o;

if(cljs.core.truth_(and__3546__auto____3404))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3404;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3405 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3405))
{return or__3548__auto____3405;
} else
{var or__3548__auto____3406 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3406))
{return or__3548__auto____3406;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3407 = o;

if(cljs.core.truth_(and__3546__auto____3407))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3407;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3408 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3408))
{return or__3548__auto____3408;
} else
{var or__3548__auto____3409 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3409))
{return or__3548__auto____3409;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3410 = o;

if(cljs.core.truth_(and__3546__auto____3410))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3410;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3411 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3411))
{return or__3548__auto____3411;
} else
{var or__3548__auto____3412 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3412))
{return or__3548__auto____3412;
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
if(cljs.core.truth_((function (){var and__3546__auto____3413 = o;

if(cljs.core.truth_(and__3546__auto____3413))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3413;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3414 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3414))
{return or__3548__auto____3414;
} else
{var or__3548__auto____3415 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3415))
{return or__3548__auto____3415;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3416 = d;

if(cljs.core.truth_(and__3546__auto____3416))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3416;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3417 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3417))
{return or__3548__auto____3417;
} else
{var or__3548__auto____3418 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3418))
{return or__3548__auto____3418;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3419 = this$;

if(cljs.core.truth_(and__3546__auto____3419))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3419;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3420 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3420))
{return or__3548__auto____3420;
} else
{var or__3548__auto____3421 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3421))
{return or__3548__auto____3421;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3422 = this$;

if(cljs.core.truth_(and__3546__auto____3422))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3422;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3423 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3423))
{return or__3548__auto____3423;
} else
{var or__3548__auto____3424 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3424))
{return or__3548__auto____3424;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3425 = this$;

if(cljs.core.truth_(and__3546__auto____3425))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3425;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3426 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3426))
{return or__3548__auto____3426;
} else
{var or__3548__auto____3427 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3427))
{return or__3548__auto____3427;
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
var G__3428 = null;
var G__3428__3429 = (function (o,k){
return null;
});
var G__3428__3430 = (function (o,k,not_found){
return not_found;
});
G__3428 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3428__3429.call(this,o,k);
case  3 :
return G__3428__3430.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3428;
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
var G__3432 = null;
var G__3432__3433 = (function (_,f){
return f.call(null);
});
var G__3432__3434 = (function (_,f,start){
return start;
});
G__3432 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3432__3433.call(this,_,f);
case  3 :
return G__3432__3434.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3432;
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
var G__3436 = null;
var G__3436__3437 = (function (_,n){
return null;
});
var G__3436__3438 = (function (_,n,not_found){
return not_found;
});
G__3436 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3436__3437.call(this,_,n);
case  3 :
return G__3436__3438.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3436;
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
var ci_reduce__3446 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3440 = cljs.core._nth.call(null,cicoll,0);
var n__3441 = 1;

while(true){
if(cljs.core.truth_((n__3441 < cljs.core._count.call(null,cicoll))))
{{
var G__3450 = f.call(null,val__3440,cljs.core._nth.call(null,cicoll,n__3441));
var G__3451 = (n__3441 + 1);
val__3440 = G__3450;
n__3441 = G__3451;
continue;
}
} else
{return val__3440;
}
break;
}
}
});
var ci_reduce__3447 = (function (cicoll,f,val){
var val__3442 = val;
var n__3443 = 0;

while(true){
if(cljs.core.truth_((n__3443 < cljs.core._count.call(null,cicoll))))
{{
var G__3452 = f.call(null,val__3442,cljs.core._nth.call(null,cicoll,n__3443));
var G__3453 = (n__3443 + 1);
val__3442 = G__3452;
n__3443 = G__3453;
continue;
}
} else
{return val__3442;
}
break;
}
});
var ci_reduce__3448 = (function (cicoll,f,val,idx){
var val__3444 = val;
var n__3445 = idx;

while(true){
if(cljs.core.truth_((n__3445 < cljs.core._count.call(null,cicoll))))
{{
var G__3454 = f.call(null,val__3444,cljs.core._nth.call(null,cicoll,n__3445));
var G__3455 = (n__3445 + 1);
val__3444 = G__3454;
n__3445 = G__3455;
continue;
}
} else
{return val__3444;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3446.call(this,cicoll,f);
case  3 :
return ci_reduce__3447.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3448.call(this,cicoll,f,val,idx);
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
var this__3456 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3469 = null;
var G__3469__3470 = (function (_,f){
var this__3457 = this;
return cljs.core.ci_reduce.call(null,this__3457.a,f,(this__3457.a[this__3457.i]),(this__3457.i + 1));
});
var G__3469__3471 = (function (_,f,start){
var this__3458 = this;
return cljs.core.ci_reduce.call(null,this__3458.a,f,start,this__3458.i);
});
G__3469 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3469__3470.call(this,_,f);
case  3 :
return G__3469__3471.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3469;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3459 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3460 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3473 = null;
var G__3473__3474 = (function (coll,n){
var this__3461 = this;
var i__3462 = (n + this__3461.i);

if(cljs.core.truth_((i__3462 < this__3461.a.length)))
{return (this__3461.a[i__3462]);
} else
{return null;
}
});
var G__3473__3475 = (function (coll,n,not_found){
var this__3463 = this;
var i__3464 = (n + this__3463.i);

if(cljs.core.truth_((i__3464 < this__3463.a.length)))
{return (this__3463.a[i__3464]);
} else
{return not_found;
}
});
G__3473 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3473__3474.call(this,coll,n);
case  3 :
return G__3473__3475.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3473;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3465 = this;
return (this__3465.a.length - this__3465.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3466 = this;
return (this__3466.a[this__3466.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3467 = this;
if(cljs.core.truth_(((this__3467.i + 1) < this__3467.a.length)))
{return (new cljs.core.IndexedSeq(this__3467.a,(this__3467.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3468 = this;
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
var G__3477 = null;
var G__3477__3478 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3477__3479 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3477 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3477__3478.call(this,array,f);
case  3 :
return G__3477__3479.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3477;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3481 = null;
var G__3481__3482 = (function (array,k){
return (array[k]);
});
var G__3481__3483 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3481 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3481__3482.call(this,array,k);
case  3 :
return G__3481__3483.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3481;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3485 = null;
var G__3485__3486 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3485__3487 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3485 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3485__3486.call(this,array,n);
case  3 :
return G__3485__3487.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3485;
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
var temp__3698__auto____3489 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3489))
{var s__3490 = temp__3698__auto____3489;

return cljs.core._first.call(null,s__3490);
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
var G__3491 = cljs.core.next.call(null,s);
s = G__3491;
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
var s__3492 = cljs.core.seq.call(null,x);
var n__3493 = 0;

while(true){
if(cljs.core.truth_(s__3492))
{{
var G__3494 = cljs.core.next.call(null,s__3492);
var G__3495 = (n__3493 + 1);
s__3492 = G__3494;
n__3493 = G__3495;
continue;
}
} else
{return n__3493;
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
var conj__3496 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3497 = (function() { 
var G__3499__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3500 = conj.call(null,coll,x);
var G__3501 = cljs.core.first.call(null,xs);
var G__3502 = cljs.core.next.call(null,xs);
coll = G__3500;
x = G__3501;
xs = G__3502;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3499 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3499__delegate.call(this, coll, x, xs);
};
G__3499.cljs$lang$maxFixedArity = 2;
G__3499.cljs$lang$applyTo = (function (arglist__3503){
var coll = cljs.core.first(arglist__3503);
var x = cljs.core.first(cljs.core.next(arglist__3503));
var xs = cljs.core.rest(cljs.core.next(arglist__3503));
return G__3499__delegate.call(this, coll, x, xs);
});
return G__3499;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3496.call(this,coll,x);
default:
return conj__3497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3497.cljs$lang$applyTo;
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
var nth__3504 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3505 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3504.call(this,coll,n);
case  3 :
return nth__3505.call(this,coll,n,not_found);
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
var get__3507 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3508 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3507.call(this,o,k);
case  3 :
return get__3508.call(this,o,k,not_found);
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
var assoc__3511 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3512 = (function() { 
var G__3514__delegate = function (coll,k,v,kvs){
while(true){
var ret__3510 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3515 = ret__3510;
var G__3516 = cljs.core.first.call(null,kvs);
var G__3517 = cljs.core.second.call(null,kvs);
var G__3518 = cljs.core.nnext.call(null,kvs);
coll = G__3515;
k = G__3516;
v = G__3517;
kvs = G__3518;
continue;
}
} else
{return ret__3510;
}
break;
}
};
var G__3514 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3514__delegate.call(this, coll, k, v, kvs);
};
G__3514.cljs$lang$maxFixedArity = 3;
G__3514.cljs$lang$applyTo = (function (arglist__3519){
var coll = cljs.core.first(arglist__3519);
var k = cljs.core.first(cljs.core.next(arglist__3519));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3519)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3519)));
return G__3514__delegate.call(this, coll, k, v, kvs);
});
return G__3514;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3511.call(this,coll,k,v);
default:
return assoc__3512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3512.cljs$lang$applyTo;
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
var dissoc__3521 = (function (coll){
return coll;
});
var dissoc__3522 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3523 = (function() { 
var G__3525__delegate = function (coll,k,ks){
while(true){
var ret__3520 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3526 = ret__3520;
var G__3527 = cljs.core.first.call(null,ks);
var G__3528 = cljs.core.next.call(null,ks);
coll = G__3526;
k = G__3527;
ks = G__3528;
continue;
}
} else
{return ret__3520;
}
break;
}
};
var G__3525 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3525__delegate.call(this, coll, k, ks);
};
G__3525.cljs$lang$maxFixedArity = 2;
G__3525.cljs$lang$applyTo = (function (arglist__3529){
var coll = cljs.core.first(arglist__3529);
var k = cljs.core.first(cljs.core.next(arglist__3529));
var ks = cljs.core.rest(cljs.core.next(arglist__3529));
return G__3525__delegate.call(this, coll, k, ks);
});
return G__3525;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3521.call(this,coll);
case  2 :
return dissoc__3522.call(this,coll,k);
default:
return dissoc__3523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3523.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____3530 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3531 = x__451__auto____3530;

if(cljs.core.truth_(and__3546__auto____3531))
{var and__3546__auto____3532 = x__451__auto____3530.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3532))
{return cljs.core.not.call(null,x__451__auto____3530.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3532;
}
} else
{return and__3546__auto____3531;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____3530);
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
var disj__3534 = (function (coll){
return coll;
});
var disj__3535 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3536 = (function() { 
var G__3538__delegate = function (coll,k,ks){
while(true){
var ret__3533 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3539 = ret__3533;
var G__3540 = cljs.core.first.call(null,ks);
var G__3541 = cljs.core.next.call(null,ks);
coll = G__3539;
k = G__3540;
ks = G__3541;
continue;
}
} else
{return ret__3533;
}
break;
}
};
var G__3538 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3538__delegate.call(this, coll, k, ks);
};
G__3538.cljs$lang$maxFixedArity = 2;
G__3538.cljs$lang$applyTo = (function (arglist__3542){
var coll = cljs.core.first(arglist__3542);
var k = cljs.core.first(cljs.core.next(arglist__3542));
var ks = cljs.core.rest(cljs.core.next(arglist__3542));
return G__3538__delegate.call(this, coll, k, ks);
});
return G__3538;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3534.call(this,coll);
case  2 :
return disj__3535.call(this,coll,k);
default:
return disj__3536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3536.cljs$lang$applyTo;
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
{var x__451__auto____3543 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3544 = x__451__auto____3543;

if(cljs.core.truth_(and__3546__auto____3544))
{var and__3546__auto____3545 = x__451__auto____3543.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3545))
{return cljs.core.not.call(null,x__451__auto____3543.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3545;
}
} else
{return and__3546__auto____3544;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____3543);
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
{var x__451__auto____3546 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3547 = x__451__auto____3546;

if(cljs.core.truth_(and__3546__auto____3547))
{var and__3546__auto____3548 = x__451__auto____3546.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3548))
{return cljs.core.not.call(null,x__451__auto____3546.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3548;
}
} else
{return and__3546__auto____3547;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____3546);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____3549 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3550 = x__451__auto____3549;

if(cljs.core.truth_(and__3546__auto____3550))
{var and__3546__auto____3551 = x__451__auto____3549.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3551))
{return cljs.core.not.call(null,x__451__auto____3549.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3551;
}
} else
{return and__3546__auto____3550;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____3549);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____3552 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3553 = x__451__auto____3552;

if(cljs.core.truth_(and__3546__auto____3553))
{var and__3546__auto____3554 = x__451__auto____3552.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3554))
{return cljs.core.not.call(null,x__451__auto____3552.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3554;
}
} else
{return and__3546__auto____3553;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____3552);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____3555 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3556 = x__451__auto____3555;

if(cljs.core.truth_(and__3546__auto____3556))
{var and__3546__auto____3557 = x__451__auto____3555.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3557))
{return cljs.core.not.call(null,x__451__auto____3555.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3557;
}
} else
{return and__3546__auto____3556;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____3555);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____3558 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3559 = x__451__auto____3558;

if(cljs.core.truth_(and__3546__auto____3559))
{var and__3546__auto____3560 = x__451__auto____3558.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3560))
{return cljs.core.not.call(null,x__451__auto____3558.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3560;
}
} else
{return and__3546__auto____3559;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____3558);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____3561 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3562 = x__451__auto____3561;

if(cljs.core.truth_(and__3546__auto____3562))
{var and__3546__auto____3563 = x__451__auto____3561.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3563))
{return cljs.core.not.call(null,x__451__auto____3561.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3563;
}
} else
{return and__3546__auto____3562;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____3561);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3564 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3564.push(key);
}));
return keys__3564;
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
{var x__451__auto____3565 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3566 = x__451__auto____3565;

if(cljs.core.truth_(and__3546__auto____3566))
{var and__3546__auto____3567 = x__451__auto____3565.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3567))
{return cljs.core.not.call(null,x__451__auto____3565.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3567;
}
} else
{return and__3546__auto____3566;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____3565);
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
var and__3546__auto____3568 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3568))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3569 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____3569))
{return or__3548__auto____3569;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____3568;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3570 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3570))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____3570;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3571 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3571))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____3571;
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
var and__3546__auto____3572 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3572))
{return (n == n.toFixed());
} else
{return and__3546__auto____3572;
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
if(cljs.core.truth_((function (){var and__3546__auto____3573 = coll;

if(cljs.core.truth_(and__3546__auto____3573))
{var and__3546__auto____3574 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3574))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3574;
}
} else
{return and__3546__auto____3573;
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
var distinct_QMARK___3579 = (function (x){
return true;
});
var distinct_QMARK___3580 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3581 = (function() { 
var G__3583__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3575 = cljs.core.set([y,x]);
var xs__3576 = more;

while(true){
var x__3577 = cljs.core.first.call(null,xs__3576);
var etc__3578 = cljs.core.next.call(null,xs__3576);

if(cljs.core.truth_(xs__3576))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3575,x__3577)))
{return false;
} else
{{
var G__3584 = cljs.core.conj.call(null,s__3575,x__3577);
var G__3585 = etc__3578;
s__3575 = G__3584;
xs__3576 = G__3585;
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
var G__3583 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3583__delegate.call(this, x, y, more);
};
G__3583.cljs$lang$maxFixedArity = 2;
G__3583.cljs$lang$applyTo = (function (arglist__3586){
var x = cljs.core.first(arglist__3586);
var y = cljs.core.first(cljs.core.next(arglist__3586));
var more = cljs.core.rest(cljs.core.next(arglist__3586));
return G__3583__delegate.call(this, x, y, more);
});
return G__3583;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3579.call(this,x);
case  2 :
return distinct_QMARK___3580.call(this,x,y);
default:
return distinct_QMARK___3581.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3581.cljs$lang$applyTo;
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
var r__3587 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3587)))
{return r__3587;
} else
{if(cljs.core.truth_(r__3587))
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
var sort__3589 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3590 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3588 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3588,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3588);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3589.call(this,comp);
case  2 :
return sort__3590.call(this,comp,coll);
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
var sort_by__3592 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3593 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3592.call(this,keyfn,comp);
case  3 :
return sort_by__3593.call(this,keyfn,comp,coll);
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
var reduce__3595 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3596 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3595.call(this,f,val);
case  3 :
return reduce__3596.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3602 = (function (f,coll){
var temp__3695__auto____3598 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3598))
{var s__3599 = temp__3695__auto____3598;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3599),cljs.core.next.call(null,s__3599));
} else
{return f.call(null);
}
});
var seq_reduce__3603 = (function (f,val,coll){
var val__3600 = val;
var coll__3601 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3601))
{{
var G__3605 = f.call(null,val__3600,cljs.core.first.call(null,coll__3601));
var G__3606 = cljs.core.next.call(null,coll__3601);
val__3600 = G__3605;
coll__3601 = G__3606;
continue;
}
} else
{return val__3600;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3602.call(this,f,val);
case  3 :
return seq_reduce__3603.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3607 = null;
var G__3607__3608 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3607__3609 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3607 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3607__3608.call(this,coll,f);
case  3 :
return G__3607__3609.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3607;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3611 = (function (){
return 0;
});
var _PLUS___3612 = (function (x){
return x;
});
var _PLUS___3613 = (function (x,y){
return (x + y);
});
var _PLUS___3614 = (function() { 
var G__3616__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3616 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3616__delegate.call(this, x, y, more);
};
G__3616.cljs$lang$maxFixedArity = 2;
G__3616.cljs$lang$applyTo = (function (arglist__3617){
var x = cljs.core.first(arglist__3617);
var y = cljs.core.first(cljs.core.next(arglist__3617));
var more = cljs.core.rest(cljs.core.next(arglist__3617));
return G__3616__delegate.call(this, x, y, more);
});
return G__3616;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3611.call(this);
case  1 :
return _PLUS___3612.call(this,x);
case  2 :
return _PLUS___3613.call(this,x,y);
default:
return _PLUS___3614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3614.cljs$lang$applyTo;
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
var ___3618 = (function (x){
return (- x);
});
var ___3619 = (function (x,y){
return (x - y);
});
var ___3620 = (function() { 
var G__3622__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3622 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3622__delegate.call(this, x, y, more);
};
G__3622.cljs$lang$maxFixedArity = 2;
G__3622.cljs$lang$applyTo = (function (arglist__3623){
var x = cljs.core.first(arglist__3623);
var y = cljs.core.first(cljs.core.next(arglist__3623));
var more = cljs.core.rest(cljs.core.next(arglist__3623));
return G__3622__delegate.call(this, x, y, more);
});
return G__3622;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3618.call(this,x);
case  2 :
return ___3619.call(this,x,y);
default:
return ___3620.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3620.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3624 = (function (){
return 1;
});
var _STAR___3625 = (function (x){
return x;
});
var _STAR___3626 = (function (x,y){
return (x * y);
});
var _STAR___3627 = (function() { 
var G__3629__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3629 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3629__delegate.call(this, x, y, more);
};
G__3629.cljs$lang$maxFixedArity = 2;
G__3629.cljs$lang$applyTo = (function (arglist__3630){
var x = cljs.core.first(arglist__3630);
var y = cljs.core.first(cljs.core.next(arglist__3630));
var more = cljs.core.rest(cljs.core.next(arglist__3630));
return G__3629__delegate.call(this, x, y, more);
});
return G__3629;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3624.call(this);
case  1 :
return _STAR___3625.call(this,x);
case  2 :
return _STAR___3626.call(this,x,y);
default:
return _STAR___3627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3627.cljs$lang$applyTo;
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
var _SLASH___3631 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3632 = (function (x,y){
return (x / y);
});
var _SLASH___3633 = (function() { 
var G__3635__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3635 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3635__delegate.call(this, x, y, more);
};
G__3635.cljs$lang$maxFixedArity = 2;
G__3635.cljs$lang$applyTo = (function (arglist__3636){
var x = cljs.core.first(arglist__3636);
var y = cljs.core.first(cljs.core.next(arglist__3636));
var more = cljs.core.rest(cljs.core.next(arglist__3636));
return G__3635__delegate.call(this, x, y, more);
});
return G__3635;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3631.call(this,x);
case  2 :
return _SLASH___3632.call(this,x,y);
default:
return _SLASH___3633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3633.cljs$lang$applyTo;
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
var _LT___3637 = (function (x){
return true;
});
var _LT___3638 = (function (x,y){
return (x < y);
});
var _LT___3639 = (function() { 
var G__3641__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3642 = y;
var G__3643 = cljs.core.first.call(null,more);
var G__3644 = cljs.core.next.call(null,more);
x = G__3642;
y = G__3643;
more = G__3644;
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
var G__3641 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3641__delegate.call(this, x, y, more);
};
G__3641.cljs$lang$maxFixedArity = 2;
G__3641.cljs$lang$applyTo = (function (arglist__3645){
var x = cljs.core.first(arglist__3645);
var y = cljs.core.first(cljs.core.next(arglist__3645));
var more = cljs.core.rest(cljs.core.next(arglist__3645));
return G__3641__delegate.call(this, x, y, more);
});
return G__3641;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3637.call(this,x);
case  2 :
return _LT___3638.call(this,x,y);
default:
return _LT___3639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3639.cljs$lang$applyTo;
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
var _LT__EQ___3646 = (function (x){
return true;
});
var _LT__EQ___3647 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3648 = (function() { 
var G__3650__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3651 = y;
var G__3652 = cljs.core.first.call(null,more);
var G__3653 = cljs.core.next.call(null,more);
x = G__3651;
y = G__3652;
more = G__3653;
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
var G__3650 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3650__delegate.call(this, x, y, more);
};
G__3650.cljs$lang$maxFixedArity = 2;
G__3650.cljs$lang$applyTo = (function (arglist__3654){
var x = cljs.core.first(arglist__3654);
var y = cljs.core.first(cljs.core.next(arglist__3654));
var more = cljs.core.rest(cljs.core.next(arglist__3654));
return G__3650__delegate.call(this, x, y, more);
});
return G__3650;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3646.call(this,x);
case  2 :
return _LT__EQ___3647.call(this,x,y);
default:
return _LT__EQ___3648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3648.cljs$lang$applyTo;
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
var _GT___3655 = (function (x){
return true;
});
var _GT___3656 = (function (x,y){
return (x > y);
});
var _GT___3657 = (function() { 
var G__3659__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3660 = y;
var G__3661 = cljs.core.first.call(null,more);
var G__3662 = cljs.core.next.call(null,more);
x = G__3660;
y = G__3661;
more = G__3662;
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
var G__3659 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3659__delegate.call(this, x, y, more);
};
G__3659.cljs$lang$maxFixedArity = 2;
G__3659.cljs$lang$applyTo = (function (arglist__3663){
var x = cljs.core.first(arglist__3663);
var y = cljs.core.first(cljs.core.next(arglist__3663));
var more = cljs.core.rest(cljs.core.next(arglist__3663));
return G__3659__delegate.call(this, x, y, more);
});
return G__3659;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3655.call(this,x);
case  2 :
return _GT___3656.call(this,x,y);
default:
return _GT___3657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3657.cljs$lang$applyTo;
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
var _GT__EQ___3664 = (function (x){
return true;
});
var _GT__EQ___3665 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3666 = (function() { 
var G__3668__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3669 = y;
var G__3670 = cljs.core.first.call(null,more);
var G__3671 = cljs.core.next.call(null,more);
x = G__3669;
y = G__3670;
more = G__3671;
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
var G__3668 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3668__delegate.call(this, x, y, more);
};
G__3668.cljs$lang$maxFixedArity = 2;
G__3668.cljs$lang$applyTo = (function (arglist__3672){
var x = cljs.core.first(arglist__3672);
var y = cljs.core.first(cljs.core.next(arglist__3672));
var more = cljs.core.rest(cljs.core.next(arglist__3672));
return G__3668__delegate.call(this, x, y, more);
});
return G__3668;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3664.call(this,x);
case  2 :
return _GT__EQ___3665.call(this,x,y);
default:
return _GT__EQ___3666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3666.cljs$lang$applyTo;
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
var max__3673 = (function (x){
return x;
});
var max__3674 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3675 = (function() { 
var G__3677__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3677 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3677__delegate.call(this, x, y, more);
};
G__3677.cljs$lang$maxFixedArity = 2;
G__3677.cljs$lang$applyTo = (function (arglist__3678){
var x = cljs.core.first(arglist__3678);
var y = cljs.core.first(cljs.core.next(arglist__3678));
var more = cljs.core.rest(cljs.core.next(arglist__3678));
return G__3677__delegate.call(this, x, y, more);
});
return G__3677;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3673.call(this,x);
case  2 :
return max__3674.call(this,x,y);
default:
return max__3675.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3675.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3679 = (function (x){
return x;
});
var min__3680 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3681 = (function() { 
var G__3683__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3683 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3683__delegate.call(this, x, y, more);
};
G__3683.cljs$lang$maxFixedArity = 2;
G__3683.cljs$lang$applyTo = (function (arglist__3684){
var x = cljs.core.first(arglist__3684);
var y = cljs.core.first(cljs.core.next(arglist__3684));
var more = cljs.core.rest(cljs.core.next(arglist__3684));
return G__3683__delegate.call(this, x, y, more);
});
return G__3683;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3679.call(this,x);
case  2 :
return min__3680.call(this,x,y);
default:
return min__3681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3681.cljs$lang$applyTo;
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
var rem__3685 = (n % d);

return cljs.core.fix.call(null,((n - rem__3685) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3686 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3686));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3687 = (function (){
return Math.random.call(null);
});
var rand__3688 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3687.call(this);
case  1 :
return rand__3688.call(this,n);
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
var _EQ__EQ___3690 = (function (x){
return true;
});
var _EQ__EQ___3691 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3692 = (function() { 
var G__3694__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3695 = y;
var G__3696 = cljs.core.first.call(null,more);
var G__3697 = cljs.core.next.call(null,more);
x = G__3695;
y = G__3696;
more = G__3697;
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
var G__3694 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3694__delegate.call(this, x, y, more);
};
G__3694.cljs$lang$maxFixedArity = 2;
G__3694.cljs$lang$applyTo = (function (arglist__3698){
var x = cljs.core.first(arglist__3698);
var y = cljs.core.first(cljs.core.next(arglist__3698));
var more = cljs.core.rest(cljs.core.next(arglist__3698));
return G__3694__delegate.call(this, x, y, more);
});
return G__3694;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3690.call(this,x);
case  2 :
return _EQ__EQ___3691.call(this,x,y);
default:
return _EQ__EQ___3692.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3692.cljs$lang$applyTo;
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
var n__3699 = n;
var xs__3700 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3701 = xs__3700;

if(cljs.core.truth_(and__3546__auto____3701))
{return (n__3699 > 0);
} else
{return and__3546__auto____3701;
}
})()))
{{
var G__3702 = (n__3699 - 1);
var G__3703 = cljs.core.next.call(null,xs__3700);
n__3699 = G__3702;
xs__3700 = G__3703;
continue;
}
} else
{return xs__3700;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3708 = null;
var G__3708__3709 = (function (coll,n){
var temp__3695__auto____3704 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3704))
{var xs__3705 = temp__3695__auto____3704;

return cljs.core.first.call(null,xs__3705);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3708__3710 = (function (coll,n,not_found){
var temp__3695__auto____3706 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3706))
{var xs__3707 = temp__3695__auto____3706;

return cljs.core.first.call(null,xs__3707);
} else
{return not_found;
}
});
G__3708 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3708__3709.call(this,coll,n);
case  3 :
return G__3708__3710.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3708;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3712 = (function (){
return "";
});
var str_STAR___3713 = (function (x){
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
var str_STAR___3714 = (function() { 
var G__3716__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3717 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3718 = cljs.core.next.call(null,more);
sb = G__3717;
more = G__3718;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3716 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3716__delegate.call(this, x, ys);
};
G__3716.cljs$lang$maxFixedArity = 1;
G__3716.cljs$lang$applyTo = (function (arglist__3719){
var x = cljs.core.first(arglist__3719);
var ys = cljs.core.rest(arglist__3719);
return G__3716__delegate.call(this, x, ys);
});
return G__3716;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3712.call(this);
case  1 :
return str_STAR___3713.call(this,x);
default:
return str_STAR___3714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3714.cljs$lang$applyTo;
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
var str__3720 = (function (){
return "";
});
var str__3721 = (function (x){
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
var str__3722 = (function() { 
var G__3724__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3725 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__3726 = cljs.core.next.call(null,more);
sb = G__3725;
more = G__3726;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__3724 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3724__delegate.call(this, x, ys);
};
G__3724.cljs$lang$maxFixedArity = 1;
G__3724.cljs$lang$applyTo = (function (arglist__3727){
var x = cljs.core.first(arglist__3727);
var ys = cljs.core.rest(arglist__3727);
return G__3724__delegate.call(this, x, ys);
});
return G__3724;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3720.call(this);
case  1 :
return str__3721.call(this,x);
default:
return str__3722.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3722.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3728 = (function (s,start){
return s.substring(start);
});
var subs__3729 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3728.call(this,s,start);
case  3 :
return subs__3729.call(this,s,start,end);
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
var symbol__3731 = (function (name){
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
var symbol__3732 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3731.call(this,ns);
case  2 :
return symbol__3732.call(this,ns,name);
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
var keyword__3734 = (function (name){
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
var keyword__3735 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3734.call(this,ns);
case  2 :
return keyword__3735.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3737 = cljs.core.seq.call(null,x);
var ys__3738 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__3737 === null)))
{return (ys__3738 === null);
} else
{if(cljs.core.truth_((ys__3738 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3737),cljs.core.first.call(null,ys__3738))))
{{
var G__3739 = cljs.core.next.call(null,xs__3737);
var G__3740 = cljs.core.next.call(null,ys__3738);
xs__3737 = G__3739;
ys__3738 = G__3740;
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
return cljs.core.reduce.call(null,(function (p1__3741_SHARP_,p2__3742_SHARP_){
return cljs.core.hash_combine.call(null,p1__3741_SHARP_,cljs.core.hash.call(null,p2__3742_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3743__3744 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3743__3744))
{var G__3746__3748 = cljs.core.first.call(null,G__3743__3744);
var vec__3747__3749 = G__3746__3748;
var key_name__3750 = cljs.core.nth.call(null,vec__3747__3749,0,null);
var f__3751 = cljs.core.nth.call(null,vec__3747__3749,1,null);
var G__3743__3752 = G__3743__3744;

var G__3746__3753 = G__3746__3748;
var G__3743__3754 = G__3743__3752;

while(true){
var vec__3755__3756 = G__3746__3753;
var key_name__3757 = cljs.core.nth.call(null,vec__3755__3756,0,null);
var f__3758 = cljs.core.nth.call(null,vec__3755__3756,1,null);
var G__3743__3759 = G__3743__3754;

var str_name__3760 = cljs.core.name.call(null,key_name__3757);

obj[str_name__3760] = f__3758;
var temp__3698__auto____3761 = cljs.core.next.call(null,G__3743__3759);

if(cljs.core.truth_(temp__3698__auto____3761))
{var G__3743__3762 = temp__3698__auto____3761;

{
var G__3763 = cljs.core.first.call(null,G__3743__3762);
var G__3764 = G__3743__3762;
G__3746__3753 = G__3763;
G__3743__3754 = G__3764;
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
var this__3765 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3766 = this;
return (new cljs.core.List(this__3766.meta,o,coll,(this__3766.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3767 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3768 = this;
return this__3768.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3769 = this;
return this__3769.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3770 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3771 = this;
return this__3771.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3772 = this;
return this__3772.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3773 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3774 = this;
return (new cljs.core.List(meta,this__3774.first,this__3774.rest,this__3774.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3775 = this;
return this__3775.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3776 = this;
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
var this__3777 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3778 = this;
return (new cljs.core.List(this__3778.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3779 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3780 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3781 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3782 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3783 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3784 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3785 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3786 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3787 = this;
return this__3787.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3788 = this;
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
list.cljs$lang$applyTo = (function (arglist__3789){
var items = cljs.core.seq( arglist__3789 );;
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
var this__3790 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3791 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3792 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3793 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3793.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3794 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3795 = this;
return this__3795.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3796 = this;
if(cljs.core.truth_((this__3796.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__3796.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3797 = this;
return this__3797.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3798 = this;
return (new cljs.core.Cons(meta,this__3798.first,this__3798.rest));
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
var G__3799 = null;
var G__3799__3800 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3799__3801 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3799 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3799__3800.call(this,string,f);
case  3 :
return G__3799__3801.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3799;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3803 = null;
var G__3803__3804 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3803__3805 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3803 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3803__3804.call(this,string,k);
case  3 :
return G__3803__3805.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3803;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3807 = null;
var G__3807__3808 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3807__3809 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3807 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3807__3808.call(this,string,n);
case  3 :
return G__3807__3809.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3807;
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
var G__3817 = null;
var G__3817__3818 = (function (tsym3811,coll){
var tsym3811__3813 = this;

var this$__3814 = tsym3811__3813;

return cljs.core.get.call(null,coll,this$__3814.toString());
});
var G__3817__3819 = (function (tsym3812,coll,not_found){
var tsym3812__3815 = this;

var this$__3816 = tsym3812__3815;

return cljs.core.get.call(null,coll,this$__3816.toString(),not_found);
});
G__3817 = function(tsym3812,coll,not_found){
switch(arguments.length){
case  2 :
return G__3817__3818.call(this,tsym3812,coll);
case  3 :
return G__3817__3819.call(this,tsym3812,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3817;
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
var x__3821 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3821;
} else
{lazy_seq.x = x__3821.call(null);
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
var this__3822 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3823 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3824 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3825 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3825.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3826 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3827 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3828 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3829 = this;
return this__3829.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3830 = this;
return (new cljs.core.LazySeq(meta,this__3830.realized,this__3830.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3831 = [];

var s__3832 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3832)))
{ary__3831.push(cljs.core.first.call(null,s__3832));
{
var G__3833 = cljs.core.next.call(null,s__3832);
s__3832 = G__3833;
continue;
}
} else
{return ary__3831;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3834 = s;
var i__3835 = n;
var sum__3836 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3837 = (i__3835 > 0);

if(cljs.core.truth_(and__3546__auto____3837))
{return cljs.core.seq.call(null,s__3834);
} else
{return and__3546__auto____3837;
}
})()))
{{
var G__3838 = cljs.core.next.call(null,s__3834);
var G__3839 = (i__3835 - 1);
var G__3840 = (sum__3836 + 1);
s__3834 = G__3838;
i__3835 = G__3839;
sum__3836 = G__3840;
continue;
}
} else
{return sum__3836;
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
var concat__3844 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3845 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3846 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3841 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3841))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3841),concat.call(null,cljs.core.rest.call(null,s__3841),y));
} else
{return y;
}
})));
});
var concat__3847 = (function() { 
var G__3849__delegate = function (x,y,zs){
var cat__3843 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3842 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3842))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3842),cat.call(null,cljs.core.rest.call(null,xys__3842),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3843.call(null,concat.call(null,x,y),zs);
};
var G__3849 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3849__delegate.call(this, x, y, zs);
};
G__3849.cljs$lang$maxFixedArity = 2;
G__3849.cljs$lang$applyTo = (function (arglist__3850){
var x = cljs.core.first(arglist__3850);
var y = cljs.core.first(cljs.core.next(arglist__3850));
var zs = cljs.core.rest(cljs.core.next(arglist__3850));
return G__3849__delegate.call(this, x, y, zs);
});
return G__3849;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3844.call(this);
case  1 :
return concat__3845.call(this,x);
case  2 :
return concat__3846.call(this,x,y);
default:
return concat__3847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3847.cljs$lang$applyTo;
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
var list_STAR___3851 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3852 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3853 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3854 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3855 = (function() { 
var G__3857__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3857 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3857__delegate.call(this, a, b, c, d, more);
};
G__3857.cljs$lang$maxFixedArity = 4;
G__3857.cljs$lang$applyTo = (function (arglist__3858){
var a = cljs.core.first(arglist__3858);
var b = cljs.core.first(cljs.core.next(arglist__3858));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3858)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3858))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3858))));
return G__3857__delegate.call(this, a, b, c, d, more);
});
return G__3857;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3851.call(this,a);
case  2 :
return list_STAR___3852.call(this,a,b);
case  3 :
return list_STAR___3853.call(this,a,b,c);
case  4 :
return list_STAR___3854.call(this,a,b,c,d);
default:
return list_STAR___3855.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3855.cljs$lang$applyTo;
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
var apply__3868 = (function (f,args){
var fixed_arity__3859 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3859 + 1)) <= fixed_arity__3859)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3869 = (function (f,x,args){
var arglist__3860 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3861 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3860,fixed_arity__3861) <= fixed_arity__3861)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3860));
} else
{return f.cljs$lang$applyTo(arglist__3860);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3860));
}
});
var apply__3870 = (function (f,x,y,args){
var arglist__3862 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3863 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3862,fixed_arity__3863) <= fixed_arity__3863)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3862));
} else
{return f.cljs$lang$applyTo(arglist__3862);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3862));
}
});
var apply__3871 = (function (f,x,y,z,args){
var arglist__3864 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3865 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3864,fixed_arity__3865) <= fixed_arity__3865)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3864));
} else
{return f.cljs$lang$applyTo(arglist__3864);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3864));
}
});
var apply__3872 = (function() { 
var G__3874__delegate = function (f,a,b,c,d,args){
var arglist__3866 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3867 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3866,fixed_arity__3867) <= fixed_arity__3867)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3866));
} else
{return f.cljs$lang$applyTo(arglist__3866);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3866));
}
};
var G__3874 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3874__delegate.call(this, f, a, b, c, d, args);
};
G__3874.cljs$lang$maxFixedArity = 5;
G__3874.cljs$lang$applyTo = (function (arglist__3875){
var f = cljs.core.first(arglist__3875);
var a = cljs.core.first(cljs.core.next(arglist__3875));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3875)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3875))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3875)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3875)))));
return G__3874__delegate.call(this, f, a, b, c, d, args);
});
return G__3874;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3868.call(this,f,a);
case  3 :
return apply__3869.call(this,f,a,b);
case  4 :
return apply__3870.call(this,f,a,b,c);
case  5 :
return apply__3871.call(this,f,a,b,c,d);
default:
return apply__3872.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3872.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3876){
var obj = cljs.core.first(arglist__3876);
var f = cljs.core.first(cljs.core.next(arglist__3876));
var args = cljs.core.rest(cljs.core.next(arglist__3876));
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
var not_EQ___3877 = (function (x){
return false;
});
var not_EQ___3878 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3879 = (function() { 
var G__3881__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3881 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3881__delegate.call(this, x, y, more);
};
G__3881.cljs$lang$maxFixedArity = 2;
G__3881.cljs$lang$applyTo = (function (arglist__3882){
var x = cljs.core.first(arglist__3882);
var y = cljs.core.first(cljs.core.next(arglist__3882));
var more = cljs.core.rest(cljs.core.next(arglist__3882));
return G__3881__delegate.call(this, x, y, more);
});
return G__3881;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3877.call(this,x);
case  2 :
return not_EQ___3878.call(this,x,y);
default:
return not_EQ___3879.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3879.cljs$lang$applyTo;
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
var G__3883 = pred;
var G__3884 = cljs.core.next.call(null,coll);
pred = G__3883;
coll = G__3884;
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
{var or__3548__auto____3885 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3885))
{return or__3548__auto____3885;
} else
{{
var G__3886 = pred;
var G__3887 = cljs.core.next.call(null,coll);
pred = G__3886;
coll = G__3887;
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
var G__3888 = null;
var G__3888__3889 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3888__3890 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3888__3891 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3888__3892 = (function() { 
var G__3894__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3894 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3894__delegate.call(this, x, y, zs);
};
G__3894.cljs$lang$maxFixedArity = 2;
G__3894.cljs$lang$applyTo = (function (arglist__3895){
var x = cljs.core.first(arglist__3895);
var y = cljs.core.first(cljs.core.next(arglist__3895));
var zs = cljs.core.rest(cljs.core.next(arglist__3895));
return G__3894__delegate.call(this, x, y, zs);
});
return G__3894;
})()
;
G__3888 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3888__3889.call(this);
case  1 :
return G__3888__3890.call(this,x);
case  2 :
return G__3888__3891.call(this,x,y);
default:
return G__3888__3892.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3888.cljs$lang$maxFixedArity = 2;
G__3888.cljs$lang$applyTo = G__3888__3892.cljs$lang$applyTo;
return G__3888;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3896__delegate = function (args){
return x;
};
var G__3896 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3896__delegate.call(this, args);
};
G__3896.cljs$lang$maxFixedArity = 0;
G__3896.cljs$lang$applyTo = (function (arglist__3897){
var args = cljs.core.seq( arglist__3897 );;
return G__3896__delegate.call(this, args);
});
return G__3896;
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
var comp__3901 = (function (){
return cljs.core.identity;
});
var comp__3902 = (function (f){
return f;
});
var comp__3903 = (function (f,g){
return (function() {
var G__3907 = null;
var G__3907__3908 = (function (){
return f.call(null,g.call(null));
});
var G__3907__3909 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3907__3910 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3907__3911 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3907__3912 = (function() { 
var G__3914__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3914 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3914__delegate.call(this, x, y, z, args);
};
G__3914.cljs$lang$maxFixedArity = 3;
G__3914.cljs$lang$applyTo = (function (arglist__3915){
var x = cljs.core.first(arglist__3915);
var y = cljs.core.first(cljs.core.next(arglist__3915));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3915)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3915)));
return G__3914__delegate.call(this, x, y, z, args);
});
return G__3914;
})()
;
G__3907 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3907__3908.call(this);
case  1 :
return G__3907__3909.call(this,x);
case  2 :
return G__3907__3910.call(this,x,y);
case  3 :
return G__3907__3911.call(this,x,y,z);
default:
return G__3907__3912.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3907.cljs$lang$maxFixedArity = 3;
G__3907.cljs$lang$applyTo = G__3907__3912.cljs$lang$applyTo;
return G__3907;
})()
});
var comp__3904 = (function (f,g,h){
return (function() {
var G__3916 = null;
var G__3916__3917 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3916__3918 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3916__3919 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3916__3920 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3916__3921 = (function() { 
var G__3923__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3923 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3923__delegate.call(this, x, y, z, args);
};
G__3923.cljs$lang$maxFixedArity = 3;
G__3923.cljs$lang$applyTo = (function (arglist__3924){
var x = cljs.core.first(arglist__3924);
var y = cljs.core.first(cljs.core.next(arglist__3924));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3924)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3924)));
return G__3923__delegate.call(this, x, y, z, args);
});
return G__3923;
})()
;
G__3916 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3916__3917.call(this);
case  1 :
return G__3916__3918.call(this,x);
case  2 :
return G__3916__3919.call(this,x,y);
case  3 :
return G__3916__3920.call(this,x,y,z);
default:
return G__3916__3921.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3916.cljs$lang$maxFixedArity = 3;
G__3916.cljs$lang$applyTo = G__3916__3921.cljs$lang$applyTo;
return G__3916;
})()
});
var comp__3905 = (function() { 
var G__3925__delegate = function (f1,f2,f3,fs){
var fs__3898 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3926__delegate = function (args){
var ret__3899 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3898),args);
var fs__3900 = cljs.core.next.call(null,fs__3898);

while(true){
if(cljs.core.truth_(fs__3900))
{{
var G__3927 = cljs.core.first.call(null,fs__3900).call(null,ret__3899);
var G__3928 = cljs.core.next.call(null,fs__3900);
ret__3899 = G__3927;
fs__3900 = G__3928;
continue;
}
} else
{return ret__3899;
}
break;
}
};
var G__3926 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3926__delegate.call(this, args);
};
G__3926.cljs$lang$maxFixedArity = 0;
G__3926.cljs$lang$applyTo = (function (arglist__3929){
var args = cljs.core.seq( arglist__3929 );;
return G__3926__delegate.call(this, args);
});
return G__3926;
})()
;
};
var G__3925 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3925__delegate.call(this, f1, f2, f3, fs);
};
G__3925.cljs$lang$maxFixedArity = 3;
G__3925.cljs$lang$applyTo = (function (arglist__3930){
var f1 = cljs.core.first(arglist__3930);
var f2 = cljs.core.first(cljs.core.next(arglist__3930));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3930)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3930)));
return G__3925__delegate.call(this, f1, f2, f3, fs);
});
return G__3925;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3901.call(this);
case  1 :
return comp__3902.call(this,f1);
case  2 :
return comp__3903.call(this,f1,f2);
case  3 :
return comp__3904.call(this,f1,f2,f3);
default:
return comp__3905.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3905.cljs$lang$applyTo;
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
var partial__3931 = (function (f,arg1){
return (function() { 
var G__3936__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3936 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3936__delegate.call(this, args);
};
G__3936.cljs$lang$maxFixedArity = 0;
G__3936.cljs$lang$applyTo = (function (arglist__3937){
var args = cljs.core.seq( arglist__3937 );;
return G__3936__delegate.call(this, args);
});
return G__3936;
})()
;
});
var partial__3932 = (function (f,arg1,arg2){
return (function() { 
var G__3938__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3938 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3938__delegate.call(this, args);
};
G__3938.cljs$lang$maxFixedArity = 0;
G__3938.cljs$lang$applyTo = (function (arglist__3939){
var args = cljs.core.seq( arglist__3939 );;
return G__3938__delegate.call(this, args);
});
return G__3938;
})()
;
});
var partial__3933 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3940__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3940 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3940__delegate.call(this, args);
};
G__3940.cljs$lang$maxFixedArity = 0;
G__3940.cljs$lang$applyTo = (function (arglist__3941){
var args = cljs.core.seq( arglist__3941 );;
return G__3940__delegate.call(this, args);
});
return G__3940;
})()
;
});
var partial__3934 = (function() { 
var G__3942__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3943__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3943 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3943__delegate.call(this, args);
};
G__3943.cljs$lang$maxFixedArity = 0;
G__3943.cljs$lang$applyTo = (function (arglist__3944){
var args = cljs.core.seq( arglist__3944 );;
return G__3943__delegate.call(this, args);
});
return G__3943;
})()
;
};
var G__3942 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3942__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3942.cljs$lang$maxFixedArity = 4;
G__3942.cljs$lang$applyTo = (function (arglist__3945){
var f = cljs.core.first(arglist__3945);
var arg1 = cljs.core.first(cljs.core.next(arglist__3945));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3945)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3945))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3945))));
return G__3942__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3942;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3931.call(this,f,arg1);
case  3 :
return partial__3932.call(this,f,arg1,arg2);
case  4 :
return partial__3933.call(this,f,arg1,arg2,arg3);
default:
return partial__3934.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3934.cljs$lang$applyTo;
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
var fnil__3946 = (function (f,x){
return (function() {
var G__3950 = null;
var G__3950__3951 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__3950__3952 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__3950__3953 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__3950__3954 = (function() { 
var G__3956__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__3956 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3956__delegate.call(this, a, b, c, ds);
};
G__3956.cljs$lang$maxFixedArity = 3;
G__3956.cljs$lang$applyTo = (function (arglist__3957){
var a = cljs.core.first(arglist__3957);
var b = cljs.core.first(cljs.core.next(arglist__3957));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3957)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3957)));
return G__3956__delegate.call(this, a, b, c, ds);
});
return G__3956;
})()
;
G__3950 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3950__3951.call(this,a);
case  2 :
return G__3950__3952.call(this,a,b);
case  3 :
return G__3950__3953.call(this,a,b,c);
default:
return G__3950__3954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3950.cljs$lang$maxFixedArity = 3;
G__3950.cljs$lang$applyTo = G__3950__3954.cljs$lang$applyTo;
return G__3950;
})()
});
var fnil__3947 = (function (f,x,y){
return (function() {
var G__3958 = null;
var G__3958__3959 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3958__3960 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__3958__3961 = (function() { 
var G__3963__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__3963 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3963__delegate.call(this, a, b, c, ds);
};
G__3963.cljs$lang$maxFixedArity = 3;
G__3963.cljs$lang$applyTo = (function (arglist__3964){
var a = cljs.core.first(arglist__3964);
var b = cljs.core.first(cljs.core.next(arglist__3964));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3964)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3964)));
return G__3963__delegate.call(this, a, b, c, ds);
});
return G__3963;
})()
;
G__3958 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3958__3959.call(this,a,b);
case  3 :
return G__3958__3960.call(this,a,b,c);
default:
return G__3958__3961.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3958.cljs$lang$maxFixedArity = 3;
G__3958.cljs$lang$applyTo = G__3958__3961.cljs$lang$applyTo;
return G__3958;
})()
});
var fnil__3948 = (function (f,x,y,z){
return (function() {
var G__3965 = null;
var G__3965__3966 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3965__3967 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__3965__3968 = (function() { 
var G__3970__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__3970 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3970__delegate.call(this, a, b, c, ds);
};
G__3970.cljs$lang$maxFixedArity = 3;
G__3970.cljs$lang$applyTo = (function (arglist__3971){
var a = cljs.core.first(arglist__3971);
var b = cljs.core.first(cljs.core.next(arglist__3971));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3971)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3971)));
return G__3970__delegate.call(this, a, b, c, ds);
});
return G__3970;
})()
;
G__3965 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3965__3966.call(this,a,b);
case  3 :
return G__3965__3967.call(this,a,b,c);
default:
return G__3965__3968.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3965.cljs$lang$maxFixedArity = 3;
G__3965.cljs$lang$applyTo = G__3965__3968.cljs$lang$applyTo;
return G__3965;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3946.call(this,f,x);
case  3 :
return fnil__3947.call(this,f,x,y);
case  4 :
return fnil__3948.call(this,f,x,y,z);
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
var mapi__3974 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3972 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3972))
{var s__3973 = temp__3698__auto____3972;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3973)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3973)));
} else
{return null;
}
})));
});

return mapi__3974.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3975 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3975))
{var s__3976 = temp__3698__auto____3975;

var x__3977 = f.call(null,cljs.core.first.call(null,s__3976));

if(cljs.core.truth_((x__3977 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3976));
} else
{return cljs.core.cons.call(null,x__3977,keep.call(null,f,cljs.core.rest.call(null,s__3976)));
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
var keepi__3987 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3984 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3984))
{var s__3985 = temp__3698__auto____3984;

var x__3986 = f.call(null,idx,cljs.core.first.call(null,s__3985));

if(cljs.core.truth_((x__3986 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3985));
} else
{return cljs.core.cons.call(null,x__3986,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3985)));
}
} else
{return null;
}
})));
});

return keepi__3987.call(null,0,coll);
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
var every_pred__4032 = (function (p){
return (function() {
var ep1 = null;
var ep1__4037 = (function (){
return true;
});
var ep1__4038 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__4039 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3994 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3994))
{return p.call(null,y);
} else
{return and__3546__auto____3994;
}
})());
});
var ep1__4040 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3995 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3995))
{var and__3546__auto____3996 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3996))
{return p.call(null,z);
} else
{return and__3546__auto____3996;
}
} else
{return and__3546__auto____3995;
}
})());
});
var ep1__4041 = (function() { 
var G__4043__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3997 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3997))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3997;
}
})());
};
var G__4043 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4043__delegate.call(this, x, y, z, args);
};
G__4043.cljs$lang$maxFixedArity = 3;
G__4043.cljs$lang$applyTo = (function (arglist__4044){
var x = cljs.core.first(arglist__4044);
var y = cljs.core.first(cljs.core.next(arglist__4044));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4044)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4044)));
return G__4043__delegate.call(this, x, y, z, args);
});
return G__4043;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__4037.call(this);
case  1 :
return ep1__4038.call(this,x);
case  2 :
return ep1__4039.call(this,x,y);
case  3 :
return ep1__4040.call(this,x,y,z);
default:
return ep1__4041.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4041.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__4033 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__4045 = (function (){
return true;
});
var ep2__4046 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3998 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3998))
{return p2.call(null,x);
} else
{return and__3546__auto____3998;
}
})());
});
var ep2__4047 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3999 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3999))
{var and__3546__auto____4000 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____4000))
{var and__3546__auto____4001 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4001))
{return p2.call(null,y);
} else
{return and__3546__auto____4001;
}
} else
{return and__3546__auto____4000;
}
} else
{return and__3546__auto____3999;
}
})());
});
var ep2__4048 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4002 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4002))
{var and__3546__auto____4003 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____4003))
{var and__3546__auto____4004 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____4004))
{var and__3546__auto____4005 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4005))
{var and__3546__auto____4006 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____4006))
{return p2.call(null,z);
} else
{return and__3546__auto____4006;
}
} else
{return and__3546__auto____4005;
}
} else
{return and__3546__auto____4004;
}
} else
{return and__3546__auto____4003;
}
} else
{return and__3546__auto____4002;
}
})());
});
var ep2__4049 = (function() { 
var G__4051__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4007 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____4007))
{return cljs.core.every_QMARK_.call(null,(function (p1__3978_SHARP_){
var and__3546__auto____4008 = p1.call(null,p1__3978_SHARP_);

if(cljs.core.truth_(and__3546__auto____4008))
{return p2.call(null,p1__3978_SHARP_);
} else
{return and__3546__auto____4008;
}
}),args);
} else
{return and__3546__auto____4007;
}
})());
};
var G__4051 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4051__delegate.call(this, x, y, z, args);
};
G__4051.cljs$lang$maxFixedArity = 3;
G__4051.cljs$lang$applyTo = (function (arglist__4052){
var x = cljs.core.first(arglist__4052);
var y = cljs.core.first(cljs.core.next(arglist__4052));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4052)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4052)));
return G__4051__delegate.call(this, x, y, z, args);
});
return G__4051;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__4045.call(this);
case  1 :
return ep2__4046.call(this,x);
case  2 :
return ep2__4047.call(this,x,y);
case  3 :
return ep2__4048.call(this,x,y,z);
default:
return ep2__4049.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4049.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__4034 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__4053 = (function (){
return true;
});
var ep3__4054 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4009 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4009))
{var and__3546__auto____4010 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4010))
{return p3.call(null,x);
} else
{return and__3546__auto____4010;
}
} else
{return and__3546__auto____4009;
}
})());
});
var ep3__4055 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4011 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4011))
{var and__3546__auto____4012 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4012))
{var and__3546__auto____4013 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____4013))
{var and__3546__auto____4014 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____4014))
{var and__3546__auto____4015 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____4015))
{return p3.call(null,y);
} else
{return and__3546__auto____4015;
}
} else
{return and__3546__auto____4014;
}
} else
{return and__3546__auto____4013;
}
} else
{return and__3546__auto____4012;
}
} else
{return and__3546__auto____4011;
}
})());
});
var ep3__4056 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4016 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4016))
{var and__3546__auto____4017 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4017))
{var and__3546__auto____4018 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____4018))
{var and__3546__auto____4019 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____4019))
{var and__3546__auto____4020 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____4020))
{var and__3546__auto____4021 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____4021))
{var and__3546__auto____4022 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____4022))
{var and__3546__auto____4023 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____4023))
{return p3.call(null,z);
} else
{return and__3546__auto____4023;
}
} else
{return and__3546__auto____4022;
}
} else
{return and__3546__auto____4021;
}
} else
{return and__3546__auto____4020;
}
} else
{return and__3546__auto____4019;
}
} else
{return and__3546__auto____4018;
}
} else
{return and__3546__auto____4017;
}
} else
{return and__3546__auto____4016;
}
})());
});
var ep3__4057 = (function() { 
var G__4059__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4024 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____4024))
{return cljs.core.every_QMARK_.call(null,(function (p1__3979_SHARP_){
var and__3546__auto____4025 = p1.call(null,p1__3979_SHARP_);

if(cljs.core.truth_(and__3546__auto____4025))
{var and__3546__auto____4026 = p2.call(null,p1__3979_SHARP_);

if(cljs.core.truth_(and__3546__auto____4026))
{return p3.call(null,p1__3979_SHARP_);
} else
{return and__3546__auto____4026;
}
} else
{return and__3546__auto____4025;
}
}),args);
} else
{return and__3546__auto____4024;
}
})());
};
var G__4059 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4059__delegate.call(this, x, y, z, args);
};
G__4059.cljs$lang$maxFixedArity = 3;
G__4059.cljs$lang$applyTo = (function (arglist__4060){
var x = cljs.core.first(arglist__4060);
var y = cljs.core.first(cljs.core.next(arglist__4060));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4060)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4060)));
return G__4059__delegate.call(this, x, y, z, args);
});
return G__4059;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__4053.call(this);
case  1 :
return ep3__4054.call(this,x);
case  2 :
return ep3__4055.call(this,x,y);
case  3 :
return ep3__4056.call(this,x,y,z);
default:
return ep3__4057.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4057.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__4035 = (function() { 
var G__4061__delegate = function (p1,p2,p3,ps){
var ps__4027 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__4062 = (function (){
return true;
});
var epn__4063 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3980_SHARP_){
return p1__3980_SHARP_.call(null,x);
}),ps__4027);
});
var epn__4064 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3981_SHARP_){
var and__3546__auto____4028 = p1__3981_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____4028))
{return p1__3981_SHARP_.call(null,y);
} else
{return and__3546__auto____4028;
}
}),ps__4027);
});
var epn__4065 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3982_SHARP_){
var and__3546__auto____4029 = p1__3982_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____4029))
{var and__3546__auto____4030 = p1__3982_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____4030))
{return p1__3982_SHARP_.call(null,z);
} else
{return and__3546__auto____4030;
}
} else
{return and__3546__auto____4029;
}
}),ps__4027);
});
var epn__4066 = (function() { 
var G__4068__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4031 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____4031))
{return cljs.core.every_QMARK_.call(null,(function (p1__3983_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3983_SHARP_,args);
}),ps__4027);
} else
{return and__3546__auto____4031;
}
})());
};
var G__4068 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4068__delegate.call(this, x, y, z, args);
};
G__4068.cljs$lang$maxFixedArity = 3;
G__4068.cljs$lang$applyTo = (function (arglist__4069){
var x = cljs.core.first(arglist__4069);
var y = cljs.core.first(cljs.core.next(arglist__4069));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4069)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4069)));
return G__4068__delegate.call(this, x, y, z, args);
});
return G__4068;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__4062.call(this);
case  1 :
return epn__4063.call(this,x);
case  2 :
return epn__4064.call(this,x,y);
case  3 :
return epn__4065.call(this,x,y,z);
default:
return epn__4066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4066.cljs$lang$applyTo;
return epn;
})()
};
var G__4061 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4061__delegate.call(this, p1, p2, p3, ps);
};
G__4061.cljs$lang$maxFixedArity = 3;
G__4061.cljs$lang$applyTo = (function (arglist__4070){
var p1 = cljs.core.first(arglist__4070);
var p2 = cljs.core.first(cljs.core.next(arglist__4070));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4070)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4070)));
return G__4061__delegate.call(this, p1, p2, p3, ps);
});
return G__4061;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__4032.call(this,p1);
case  2 :
return every_pred__4033.call(this,p1,p2);
case  3 :
return every_pred__4034.call(this,p1,p2,p3);
default:
return every_pred__4035.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4035.cljs$lang$applyTo;
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
var some_fn__4110 = (function (p){
return (function() {
var sp1 = null;
var sp1__4115 = (function (){
return null;
});
var sp1__4116 = (function (x){
return p.call(null,x);
});
var sp1__4117 = (function (x,y){
var or__3548__auto____4072 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____4072))
{return or__3548__auto____4072;
} else
{return p.call(null,y);
}
});
var sp1__4118 = (function (x,y,z){
var or__3548__auto____4073 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____4073))
{return or__3548__auto____4073;
} else
{var or__3548__auto____4074 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____4074))
{return or__3548__auto____4074;
} else
{return p.call(null,z);
}
}
});
var sp1__4119 = (function() { 
var G__4121__delegate = function (x,y,z,args){
var or__3548__auto____4075 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4075))
{return or__3548__auto____4075;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__4121 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4121__delegate.call(this, x, y, z, args);
};
G__4121.cljs$lang$maxFixedArity = 3;
G__4121.cljs$lang$applyTo = (function (arglist__4122){
var x = cljs.core.first(arglist__4122);
var y = cljs.core.first(cljs.core.next(arglist__4122));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4122)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4122)));
return G__4121__delegate.call(this, x, y, z, args);
});
return G__4121;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__4115.call(this);
case  1 :
return sp1__4116.call(this,x);
case  2 :
return sp1__4117.call(this,x,y);
case  3 :
return sp1__4118.call(this,x,y,z);
default:
return sp1__4119.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4119.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__4111 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__4123 = (function (){
return null;
});
var sp2__4124 = (function (x){
var or__3548__auto____4076 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4076))
{return or__3548__auto____4076;
} else
{return p2.call(null,x);
}
});
var sp2__4125 = (function (x,y){
var or__3548__auto____4077 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4077))
{return or__3548__auto____4077;
} else
{var or__3548__auto____4078 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4078))
{return or__3548__auto____4078;
} else
{var or__3548__auto____4079 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4079))
{return or__3548__auto____4079;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__4126 = (function (x,y,z){
var or__3548__auto____4080 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4080))
{return or__3548__auto____4080;
} else
{var or__3548__auto____4081 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4081))
{return or__3548__auto____4081;
} else
{var or__3548__auto____4082 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____4082))
{return or__3548__auto____4082;
} else
{var or__3548__auto____4083 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4083))
{return or__3548__auto____4083;
} else
{var or__3548__auto____4084 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4084))
{return or__3548__auto____4084;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4127 = (function() { 
var G__4129__delegate = function (x,y,z,args){
var or__3548__auto____4085 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4085))
{return or__3548__auto____4085;
} else
{return cljs.core.some.call(null,(function (p1__3988_SHARP_){
var or__3548__auto____4086 = p1.call(null,p1__3988_SHARP_);

if(cljs.core.truth_(or__3548__auto____4086))
{return or__3548__auto____4086;
} else
{return p2.call(null,p1__3988_SHARP_);
}
}),args);
}
};
var G__4129 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4129__delegate.call(this, x, y, z, args);
};
G__4129.cljs$lang$maxFixedArity = 3;
G__4129.cljs$lang$applyTo = (function (arglist__4130){
var x = cljs.core.first(arglist__4130);
var y = cljs.core.first(cljs.core.next(arglist__4130));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4130)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4130)));
return G__4129__delegate.call(this, x, y, z, args);
});
return G__4129;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__4123.call(this);
case  1 :
return sp2__4124.call(this,x);
case  2 :
return sp2__4125.call(this,x,y);
case  3 :
return sp2__4126.call(this,x,y,z);
default:
return sp2__4127.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4127.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__4112 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__4131 = (function (){
return null;
});
var sp3__4132 = (function (x){
var or__3548__auto____4087 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4087))
{return or__3548__auto____4087;
} else
{var or__3548__auto____4088 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4088))
{return or__3548__auto____4088;
} else
{return p3.call(null,x);
}
}
});
var sp3__4133 = (function (x,y){
var or__3548__auto____4089 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4089))
{return or__3548__auto____4089;
} else
{var or__3548__auto____4090 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4090))
{return or__3548__auto____4090;
} else
{var or__3548__auto____4091 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____4091))
{return or__3548__auto____4091;
} else
{var or__3548__auto____4092 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4092))
{return or__3548__auto____4092;
} else
{var or__3548__auto____4093 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4093))
{return or__3548__auto____4093;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__4134 = (function (x,y,z){
var or__3548__auto____4094 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4094))
{return or__3548__auto____4094;
} else
{var or__3548__auto____4095 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4095))
{return or__3548__auto____4095;
} else
{var or__3548__auto____4096 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____4096))
{return or__3548__auto____4096;
} else
{var or__3548__auto____4097 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4097))
{return or__3548__auto____4097;
} else
{var or__3548__auto____4098 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4098))
{return or__3548__auto____4098;
} else
{var or__3548__auto____4099 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____4099))
{return or__3548__auto____4099;
} else
{var or__3548__auto____4100 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____4100))
{return or__3548__auto____4100;
} else
{var or__3548__auto____4101 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____4101))
{return or__3548__auto____4101;
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
var sp3__4135 = (function() { 
var G__4137__delegate = function (x,y,z,args){
var or__3548__auto____4102 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4102))
{return or__3548__auto____4102;
} else
{return cljs.core.some.call(null,(function (p1__3989_SHARP_){
var or__3548__auto____4103 = p1.call(null,p1__3989_SHARP_);

if(cljs.core.truth_(or__3548__auto____4103))
{return or__3548__auto____4103;
} else
{var or__3548__auto____4104 = p2.call(null,p1__3989_SHARP_);

if(cljs.core.truth_(or__3548__auto____4104))
{return or__3548__auto____4104;
} else
{return p3.call(null,p1__3989_SHARP_);
}
}
}),args);
}
};
var G__4137 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4137__delegate.call(this, x, y, z, args);
};
G__4137.cljs$lang$maxFixedArity = 3;
G__4137.cljs$lang$applyTo = (function (arglist__4138){
var x = cljs.core.first(arglist__4138);
var y = cljs.core.first(cljs.core.next(arglist__4138));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4138)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4138)));
return G__4137__delegate.call(this, x, y, z, args);
});
return G__4137;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__4131.call(this);
case  1 :
return sp3__4132.call(this,x);
case  2 :
return sp3__4133.call(this,x,y);
case  3 :
return sp3__4134.call(this,x,y,z);
default:
return sp3__4135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4135.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__4113 = (function() { 
var G__4139__delegate = function (p1,p2,p3,ps){
var ps__4105 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__4140 = (function (){
return null;
});
var spn__4141 = (function (x){
return cljs.core.some.call(null,(function (p1__3990_SHARP_){
return p1__3990_SHARP_.call(null,x);
}),ps__4105);
});
var spn__4142 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3991_SHARP_){
var or__3548__auto____4106 = p1__3991_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4106))
{return or__3548__auto____4106;
} else
{return p1__3991_SHARP_.call(null,y);
}
}),ps__4105);
});
var spn__4143 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3992_SHARP_){
var or__3548__auto____4107 = p1__3992_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4107))
{return or__3548__auto____4107;
} else
{var or__3548__auto____4108 = p1__3992_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____4108))
{return or__3548__auto____4108;
} else
{return p1__3992_SHARP_.call(null,z);
}
}
}),ps__4105);
});
var spn__4144 = (function() { 
var G__4146__delegate = function (x,y,z,args){
var or__3548__auto____4109 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4109))
{return or__3548__auto____4109;
} else
{return cljs.core.some.call(null,(function (p1__3993_SHARP_){
return cljs.core.some.call(null,p1__3993_SHARP_,args);
}),ps__4105);
}
};
var G__4146 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4146__delegate.call(this, x, y, z, args);
};
G__4146.cljs$lang$maxFixedArity = 3;
G__4146.cljs$lang$applyTo = (function (arglist__4147){
var x = cljs.core.first(arglist__4147);
var y = cljs.core.first(cljs.core.next(arglist__4147));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4147)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4147)));
return G__4146__delegate.call(this, x, y, z, args);
});
return G__4146;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__4140.call(this);
case  1 :
return spn__4141.call(this,x);
case  2 :
return spn__4142.call(this,x,y);
case  3 :
return spn__4143.call(this,x,y,z);
default:
return spn__4144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4144.cljs$lang$applyTo;
return spn;
})()
};
var G__4139 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4139__delegate.call(this, p1, p2, p3, ps);
};
G__4139.cljs$lang$maxFixedArity = 3;
G__4139.cljs$lang$applyTo = (function (arglist__4148){
var p1 = cljs.core.first(arglist__4148);
var p2 = cljs.core.first(cljs.core.next(arglist__4148));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4148)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4148)));
return G__4139__delegate.call(this, p1, p2, p3, ps);
});
return G__4139;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__4110.call(this,p1);
case  2 :
return some_fn__4111.call(this,p1,p2);
case  3 :
return some_fn__4112.call(this,p1,p2,p3);
default:
return some_fn__4113.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4113.cljs$lang$applyTo;
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
var map__4161 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4149 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4149))
{var s__4150 = temp__3698__auto____4149;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__4150)),map.call(null,f,cljs.core.rest.call(null,s__4150)));
} else
{return null;
}
})));
});
var map__4162 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4151 = cljs.core.seq.call(null,c1);
var s2__4152 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4153 = s1__4151;

if(cljs.core.truth_(and__3546__auto____4153))
{return s2__4152;
} else
{return and__3546__auto____4153;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4151),cljs.core.first.call(null,s2__4152)),map.call(null,f,cljs.core.rest.call(null,s1__4151),cljs.core.rest.call(null,s2__4152)));
} else
{return null;
}
})));
});
var map__4163 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4154 = cljs.core.seq.call(null,c1);
var s2__4155 = cljs.core.seq.call(null,c2);
var s3__4156 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____4157 = s1__4154;

if(cljs.core.truth_(and__3546__auto____4157))
{var and__3546__auto____4158 = s2__4155;

if(cljs.core.truth_(and__3546__auto____4158))
{return s3__4156;
} else
{return and__3546__auto____4158;
}
} else
{return and__3546__auto____4157;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4154),cljs.core.first.call(null,s2__4155),cljs.core.first.call(null,s3__4156)),map.call(null,f,cljs.core.rest.call(null,s1__4154),cljs.core.rest.call(null,s2__4155),cljs.core.rest.call(null,s3__4156)));
} else
{return null;
}
})));
});
var map__4164 = (function() { 
var G__4166__delegate = function (f,c1,c2,c3,colls){
var step__4160 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4159 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4159)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__4159),step.call(null,map.call(null,cljs.core.rest,ss__4159)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__4071_SHARP_){
return cljs.core.apply.call(null,f,p1__4071_SHARP_);
}),step__4160.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4166 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4166__delegate.call(this, f, c1, c2, c3, colls);
};
G__4166.cljs$lang$maxFixedArity = 4;
G__4166.cljs$lang$applyTo = (function (arglist__4167){
var f = cljs.core.first(arglist__4167);
var c1 = cljs.core.first(cljs.core.next(arglist__4167));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4167)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4167))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4167))));
return G__4166__delegate.call(this, f, c1, c2, c3, colls);
});
return G__4166;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__4161.call(this,f,c1);
case  3 :
return map__4162.call(this,f,c1,c2);
case  4 :
return map__4163.call(this,f,c1,c2,c3);
default:
return map__4164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__4164.cljs$lang$applyTo;
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
{var temp__3698__auto____4168 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4168))
{var s__4169 = temp__3698__auto____4168;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4169),take.call(null,(n - 1),cljs.core.rest.call(null,s__4169)));
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
var step__4172 = (function (n,coll){
while(true){
var s__4170 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4171 = (n > 0);

if(cljs.core.truth_(and__3546__auto____4171))
{return s__4170;
} else
{return and__3546__auto____4171;
}
})()))
{{
var G__4173 = (n - 1);
var G__4174 = cljs.core.rest.call(null,s__4170);
n = G__4173;
coll = G__4174;
continue;
}
} else
{return s__4170;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4172.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__4175 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__4176 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__4175.call(this,n);
case  2 :
return drop_last__4176.call(this,n,s);
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
var s__4178 = cljs.core.seq.call(null,coll);
var lead__4179 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__4179))
{{
var G__4180 = cljs.core.next.call(null,s__4178);
var G__4181 = cljs.core.next.call(null,lead__4179);
s__4178 = G__4180;
lead__4179 = G__4181;
continue;
}
} else
{return s__4178;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4184 = (function (pred,coll){
while(true){
var s__4182 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4183 = s__4182;

if(cljs.core.truth_(and__3546__auto____4183))
{return pred.call(null,cljs.core.first.call(null,s__4182));
} else
{return and__3546__auto____4183;
}
})()))
{{
var G__4185 = pred;
var G__4186 = cljs.core.rest.call(null,s__4182);
pred = G__4185;
coll = G__4186;
continue;
}
} else
{return s__4182;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4184.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4187 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4187))
{var s__4188 = temp__3698__auto____4187;

return cljs.core.concat.call(null,s__4188,cycle.call(null,s__4188));
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
var repeat__4189 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__4190 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__4189.call(this,n);
case  2 :
return repeat__4190.call(this,n,x);
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
var repeatedly__4192 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__4193 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__4192.call(this,n);
case  2 :
return repeatedly__4193.call(this,n,f);
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
var interleave__4199 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4195 = cljs.core.seq.call(null,c1);
var s2__4196 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4197 = s1__4195;

if(cljs.core.truth_(and__3546__auto____4197))
{return s2__4196;
} else
{return and__3546__auto____4197;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4195),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4196),interleave.call(null,cljs.core.rest.call(null,s1__4195),cljs.core.rest.call(null,s2__4196))));
} else
{return null;
}
})));
});
var interleave__4200 = (function() { 
var G__4202__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4198 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4198)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4198),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4198)));
} else
{return null;
}
})));
};
var G__4202 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4202__delegate.call(this, c1, c2, colls);
};
G__4202.cljs$lang$maxFixedArity = 2;
G__4202.cljs$lang$applyTo = (function (arglist__4203){
var c1 = cljs.core.first(arglist__4203);
var c2 = cljs.core.first(cljs.core.next(arglist__4203));
var colls = cljs.core.rest(cljs.core.next(arglist__4203));
return G__4202__delegate.call(this, c1, c2, colls);
});
return G__4202;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__4199.call(this,c1,c2);
default:
return interleave__4200.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__4200.cljs$lang$applyTo;
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
var cat__4206 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4204 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4204))
{var coll__4205 = temp__3695__auto____4204;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4205),cat.call(null,cljs.core.rest.call(null,coll__4205),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__4206.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__4207 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__4208 = (function() { 
var G__4210__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4210 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4210__delegate.call(this, f, coll, colls);
};
G__4210.cljs$lang$maxFixedArity = 2;
G__4210.cljs$lang$applyTo = (function (arglist__4211){
var f = cljs.core.first(arglist__4211);
var coll = cljs.core.first(cljs.core.next(arglist__4211));
var colls = cljs.core.rest(cljs.core.next(arglist__4211));
return G__4210__delegate.call(this, f, coll, colls);
});
return G__4210;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__4207.call(this,f,coll);
default:
return mapcat__4208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__4208.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4212 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4212))
{var s__4213 = temp__3698__auto____4212;

var f__4214 = cljs.core.first.call(null,s__4213);
var r__4215 = cljs.core.rest.call(null,s__4213);

if(cljs.core.truth_(pred.call(null,f__4214)))
{return cljs.core.cons.call(null,f__4214,filter.call(null,pred,r__4215));
} else
{return filter.call(null,pred,r__4215);
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
var walk__4217 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__4217.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4216_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4216_SHARP_));
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
var partition__4224 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4225 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4218 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4218))
{var s__4219 = temp__3698__auto____4218;

var p__4220 = cljs.core.take.call(null,n,s__4219);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4220))))
{return cljs.core.cons.call(null,p__4220,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4219)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4226 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4221 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4221))
{var s__4222 = temp__3698__auto____4221;

var p__4223 = cljs.core.take.call(null,n,s__4222);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4223))))
{return cljs.core.cons.call(null,p__4223,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4222)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4223,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4224.call(this,n,step);
case  3 :
return partition__4225.call(this,n,step,pad);
case  4 :
return partition__4226.call(this,n,step,pad,coll);
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
var get_in__4232 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4233 = (function (m,ks,not_found){
var sentinel__4228 = cljs.core.lookup_sentinel;
var m__4229 = m;
var ks__4230 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4230))
{var m__4231 = cljs.core.get.call(null,m__4229,cljs.core.first.call(null,ks__4230),sentinel__4228);

if(cljs.core.truth_((sentinel__4228 === m__4231)))
{return not_found;
} else
{{
var G__4235 = sentinel__4228;
var G__4236 = m__4231;
var G__4237 = cljs.core.next.call(null,ks__4230);
sentinel__4228 = G__4235;
m__4229 = G__4236;
ks__4230 = G__4237;
continue;
}
}
} else
{return m__4229;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4232.call(this,m,ks);
case  3 :
return get_in__4233.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__4238,v){
var vec__4239__4240 = p__4238;
var k__4241 = cljs.core.nth.call(null,vec__4239__4240,0,null);
var ks__4242 = cljs.core.nthnext.call(null,vec__4239__4240,1);

if(cljs.core.truth_(ks__4242))
{return cljs.core.assoc.call(null,m,k__4241,assoc_in.call(null,cljs.core.get.call(null,m,k__4241),ks__4242,v));
} else
{return cljs.core.assoc.call(null,m,k__4241,v);
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
var update_in__delegate = function (m,p__4243,f,args){
var vec__4244__4245 = p__4243;
var k__4246 = cljs.core.nth.call(null,vec__4244__4245,0,null);
var ks__4247 = cljs.core.nthnext.call(null,vec__4244__4245,1);

if(cljs.core.truth_(ks__4247))
{return cljs.core.assoc.call(null,m,k__4246,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4246),ks__4247,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4246,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4246),args));
}
};
var update_in = function (m,p__4243,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4243, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4248){
var m = cljs.core.first(arglist__4248);
var p__4243 = cljs.core.first(cljs.core.next(arglist__4248));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4248)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4248)));
return update_in__delegate.call(this, m, p__4243, f, args);
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
var this__4249 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4282 = null;
var G__4282__4283 = (function (coll,k){
var this__4250 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4282__4284 = (function (coll,k,not_found){
var this__4251 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4282 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4282__4283.call(this,coll,k);
case  3 :
return G__4282__4284.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4282;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4252 = this;
var new_array__4253 = cljs.core.aclone.call(null,this__4252.array);

(new_array__4253[k] = v);
return (new cljs.core.Vector(this__4252.meta,new_array__4253));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__4286 = null;
var G__4286__4287 = (function (tsym4254,k){
var this__4256 = this;
var tsym4254__4257 = this;

var coll__4258 = tsym4254__4257;

return cljs.core._lookup.call(null,coll__4258,k);
});
var G__4286__4288 = (function (tsym4255,k,not_found){
var this__4259 = this;
var tsym4255__4260 = this;

var coll__4261 = tsym4255__4260;

return cljs.core._lookup.call(null,coll__4261,k,not_found);
});
G__4286 = function(tsym4255,k,not_found){
switch(arguments.length){
case  2 :
return G__4286__4287.call(this,tsym4255,k);
case  3 :
return G__4286__4288.call(this,tsym4255,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4286;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4262 = this;
var new_array__4263 = cljs.core.aclone.call(null,this__4262.array);

new_array__4263.push(o);
return (new cljs.core.Vector(this__4262.meta,new_array__4263));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4290 = null;
var G__4290__4291 = (function (v,f){
var this__4264 = this;
return cljs.core.ci_reduce.call(null,this__4264.array,f);
});
var G__4290__4292 = (function (v,f,start){
var this__4265 = this;
return cljs.core.ci_reduce.call(null,this__4265.array,f,start);
});
G__4290 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4290__4291.call(this,v,f);
case  3 :
return G__4290__4292.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4290;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4266 = this;
if(cljs.core.truth_((this__4266.array.length > 0)))
{var vector_seq__4267 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4266.array.length)))
{return cljs.core.cons.call(null,(this__4266.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4267.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4268 = this;
return this__4268.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4269 = this;
var count__4270 = this__4269.array.length;

if(cljs.core.truth_((count__4270 > 0)))
{return (this__4269.array[(count__4270 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4271 = this;
if(cljs.core.truth_((this__4271.array.length > 0)))
{var new_array__4272 = cljs.core.aclone.call(null,this__4271.array);

new_array__4272.pop();
return (new cljs.core.Vector(this__4271.meta,new_array__4272));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4273 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4274 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4275 = this;
return (new cljs.core.Vector(meta,this__4275.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4276 = this;
return this__4276.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4294 = null;
var G__4294__4295 = (function (coll,n){
var this__4277 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4278 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4278))
{return (n < this__4277.array.length);
} else
{return and__3546__auto____4278;
}
})()))
{return (this__4277.array[n]);
} else
{return null;
}
});
var G__4294__4296 = (function (coll,n,not_found){
var this__4279 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4280 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4280))
{return (n < this__4279.array.length);
} else
{return and__3546__auto____4280;
}
})()))
{return (this__4279.array[n]);
} else
{return not_found;
}
});
G__4294 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4294__4295.call(this,coll,n);
case  3 :
return G__4294__4296.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4294;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4281 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4281.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__4298 = pv.cnt;

if(cljs.core.truth_((cnt__4298 < 32)))
{return 0;
} else
{return (((cnt__4298 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__4299 = level;
var ret__4300 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__4299)))
{return ret__4300;
} else
{var embed__4301 = ret__4300;
var r__4302 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___4303 = (r__4302[0] = embed__4301);

{
var G__4304 = (ll__4299 - 5);
var G__4305 = r__4302;
ll__4299 = G__4304;
ret__4300 = G__4305;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__4306 = cljs.core.aclone.call(null,parent);
var subidx__4307 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__4306[subidx__4307] = tailnode);
return ret__4306;
} else
{var temp__3695__auto____4308 = (parent[subidx__4307]);

if(cljs.core.truth_(temp__3695__auto____4308))
{var child__4309 = temp__3695__auto____4308;

var node_to_insert__4310 = push_tail.call(null,pv,(level - 5),child__4309,tailnode);
var ___4311 = (ret__4306[subidx__4307] = node_to_insert__4310);

return ret__4306;
} else
{var node_to_insert__4312 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___4313 = (ret__4306[subidx__4307] = node_to_insert__4312);

return ret__4306;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____4314 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____4314))
{return (i < pv.cnt);
} else
{return and__3546__auto____4314;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__4315 = pv.root;
var level__4316 = pv.shift;

while(true){
if(cljs.core.truth_((level__4316 > 0)))
{{
var G__4317 = (node__4315[((i >> level__4316) & 31)]);
var G__4318 = (level__4316 - 5);
node__4315 = G__4317;
level__4316 = G__4318;
continue;
}
} else
{return node__4315;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__4319 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__4319[(i & 31)] = val);
return ret__4319;
} else
{var subidx__4320 = ((i >> level) & 31);
var ___4321 = (ret__4319[subidx__4320] = do_assoc.call(null,pv,(level - 5),(node[subidx__4320]),i,val));

return ret__4319;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__4322 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__4323 = pop_tail.call(null,pv,(level - 5),(node[subidx__4322]));

if(cljs.core.truth_((function (){var and__3546__auto____4324 = (new_child__4323 === null);

if(cljs.core.truth_(and__3546__auto____4324))
{return (subidx__4322 === 0);
} else
{return and__3546__auto____4324;
}
})()))
{return null;
} else
{var ret__4325 = cljs.core.aclone.call(null,node);
var ___4326 = (ret__4325[subidx__4322] = new_child__4323);

return ret__4325;
}
} else
{if(cljs.core.truth_((subidx__4322 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__4327 = cljs.core.aclone.call(null,node);
var ___4328 = (ret__4327[subidx__4322] = null);

return ret__4327;
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
var this__4329 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4369 = null;
var G__4369__4370 = (function (coll,k){
var this__4330 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4369__4371 = (function (coll,k,not_found){
var this__4331 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4369 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4369__4370.call(this,coll,k);
case  3 :
return G__4369__4371.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4369;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4332 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4333 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____4333))
{return (k < this__4332.cnt);
} else
{return and__3546__auto____4333;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__4334 = cljs.core.aclone.call(null,this__4332.tail);

(new_tail__4334[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__4332.meta,this__4332.cnt,this__4332.shift,this__4332.root,new_tail__4334));
} else
{return (new cljs.core.PersistentVector(this__4332.meta,this__4332.cnt,this__4332.shift,cljs.core.do_assoc.call(null,coll,this__4332.shift,this__4332.root,k,v),this__4332.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__4332.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__4332.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__4373 = null;
var G__4373__4374 = (function (tsym4335,k){
var this__4337 = this;
var tsym4335__4338 = this;

var coll__4339 = tsym4335__4338;

return cljs.core._lookup.call(null,coll__4339,k);
});
var G__4373__4375 = (function (tsym4336,k,not_found){
var this__4340 = this;
var tsym4336__4341 = this;

var coll__4342 = tsym4336__4341;

return cljs.core._lookup.call(null,coll__4342,k,not_found);
});
G__4373 = function(tsym4336,k,not_found){
switch(arguments.length){
case  2 :
return G__4373__4374.call(this,tsym4336,k);
case  3 :
return G__4373__4375.call(this,tsym4336,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4373;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4343 = this;
if(cljs.core.truth_(((this__4343.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__4344 = cljs.core.aclone.call(null,this__4343.tail);

new_tail__4344.push(o);
return (new cljs.core.PersistentVector(this__4343.meta,(this__4343.cnt + 1),this__4343.shift,this__4343.root,new_tail__4344));
} else
{var root_overflow_QMARK___4345 = ((this__4343.cnt >> 5) > (1 << this__4343.shift));
var new_shift__4346 = (cljs.core.truth_(root_overflow_QMARK___4345)?(this__4343.shift + 5):this__4343.shift);
var new_root__4348 = (cljs.core.truth_(root_overflow_QMARK___4345)?(function (){var n_r__4347 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__4347[0] = this__4343.root);
(n_r__4347[1] = cljs.core.new_path.call(null,this__4343.shift,this__4343.tail));
return n_r__4347;
})():cljs.core.push_tail.call(null,coll,this__4343.shift,this__4343.root,this__4343.tail));

return (new cljs.core.PersistentVector(this__4343.meta,(this__4343.cnt + 1),new_shift__4346,new_root__4348,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4377 = null;
var G__4377__4378 = (function (v,f){
var this__4349 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__4377__4379 = (function (v,f,start){
var this__4350 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__4377 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4377__4378.call(this,v,f);
case  3 :
return G__4377__4379.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4377;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4351 = this;
if(cljs.core.truth_((this__4351.cnt > 0)))
{var vector_seq__4352 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4351.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4352.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4353 = this;
return this__4353.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4354 = this;
if(cljs.core.truth_((this__4354.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__4354.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4355 = this;
if(cljs.core.truth_((this__4355.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__4355.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__4355.meta);
} else
{if(cljs.core.truth_((1 < (this__4355.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__4355.meta,(this__4355.cnt - 1),this__4355.shift,this__4355.root,cljs.core.aclone.call(null,this__4355.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__4356 = cljs.core.array_for.call(null,coll,(this__4355.cnt - 2));
var nr__4357 = cljs.core.pop_tail.call(null,this__4355.shift,this__4355.root);
var new_root__4358 = (cljs.core.truth_((nr__4357 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__4357);
var cnt_1__4359 = (this__4355.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____4360 = (5 < this__4355.shift);

if(cljs.core.truth_(and__3546__auto____4360))
{return ((new_root__4358[1]) === null);
} else
{return and__3546__auto____4360;
}
})()))
{return (new cljs.core.PersistentVector(this__4355.meta,cnt_1__4359,(this__4355.shift - 5),(new_root__4358[0]),new_tail__4356));
} else
{return (new cljs.core.PersistentVector(this__4355.meta,cnt_1__4359,this__4355.shift,new_root__4358,new_tail__4356));
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
var this__4361 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4362 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4363 = this;
return (new cljs.core.PersistentVector(meta,this__4363.cnt,this__4363.shift,this__4363.root,this__4363.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4364 = this;
return this__4364.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4381 = null;
var G__4381__4382 = (function (coll,n){
var this__4365 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__4381__4383 = (function (coll,n,not_found){
var this__4366 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4367 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4367))
{return (n < this__4366.cnt);
} else
{return and__3546__auto____4367;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__4381 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4381__4382.call(this,coll,n);
case  3 :
return G__4381__4383.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4381;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4368 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__4368.meta);
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
vector.cljs$lang$applyTo = (function (arglist__4385){
var args = cljs.core.seq( arglist__4385 );;
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
var this__4386 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4414 = null;
var G__4414__4415 = (function (coll,k){
var this__4387 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4414__4416 = (function (coll,k,not_found){
var this__4388 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4414 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4414__4415.call(this,coll,k);
case  3 :
return G__4414__4416.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4414;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4389 = this;
var v_pos__4390 = (this__4389.start + key);

return (new cljs.core.Subvec(this__4389.meta,cljs.core._assoc.call(null,this__4389.v,v_pos__4390,val),this__4389.start,((this__4389.end > (v_pos__4390 + 1)) ? this__4389.end : (v_pos__4390 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4418 = null;
var G__4418__4419 = (function (tsym4391,k){
var this__4393 = this;
var tsym4391__4394 = this;

var coll__4395 = tsym4391__4394;

return cljs.core._lookup.call(null,coll__4395,k);
});
var G__4418__4420 = (function (tsym4392,k,not_found){
var this__4396 = this;
var tsym4392__4397 = this;

var coll__4398 = tsym4392__4397;

return cljs.core._lookup.call(null,coll__4398,k,not_found);
});
G__4418 = function(tsym4392,k,not_found){
switch(arguments.length){
case  2 :
return G__4418__4419.call(this,tsym4392,k);
case  3 :
return G__4418__4420.call(this,tsym4392,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4418;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4399 = this;
return (new cljs.core.Subvec(this__4399.meta,cljs.core._assoc_n.call(null,this__4399.v,this__4399.end,o),this__4399.start,(this__4399.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4422 = null;
var G__4422__4423 = (function (coll,f){
var this__4400 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4422__4424 = (function (coll,f,start){
var this__4401 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4422 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4422__4423.call(this,coll,f);
case  3 :
return G__4422__4424.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4422;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4402 = this;
var subvec_seq__4403 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4402.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4402.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4403.call(null,this__4402.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4404 = this;
return (this__4404.end - this__4404.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4405 = this;
return cljs.core._nth.call(null,this__4405.v,(this__4405.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4406 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4406.start,this__4406.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4406.meta,this__4406.v,this__4406.start,(this__4406.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4407 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4408 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4409 = this;
return (new cljs.core.Subvec(meta,this__4409.v,this__4409.start,this__4409.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4410 = this;
return this__4410.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4426 = null;
var G__4426__4427 = (function (coll,n){
var this__4411 = this;
return cljs.core._nth.call(null,this__4411.v,(this__4411.start + n));
});
var G__4426__4428 = (function (coll,n,not_found){
var this__4412 = this;
return cljs.core._nth.call(null,this__4412.v,(this__4412.start + n),not_found);
});
G__4426 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4426__4427.call(this,coll,n);
case  3 :
return G__4426__4428.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4426;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4413 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4413.meta);
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
var subvec__4430 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4431 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4430.call(this,v,start);
case  3 :
return subvec__4431.call(this,v,start,end);
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
var this__4433 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4434 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4435 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4436 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4436.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4437 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4438 = this;
return cljs.core._first.call(null,this__4438.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4439 = this;
var temp__3695__auto____4440 = cljs.core.next.call(null,this__4439.front);

if(cljs.core.truth_(temp__3695__auto____4440))
{var f1__4441 = temp__3695__auto____4440;

return (new cljs.core.PersistentQueueSeq(this__4439.meta,f1__4441,this__4439.rear));
} else
{if(cljs.core.truth_((this__4439.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4439.meta,this__4439.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4442 = this;
return this__4442.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4443 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4443.front,this__4443.rear));
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
var this__4444 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4445 = this;
if(cljs.core.truth_(this__4445.front))
{return (new cljs.core.PersistentQueue(this__4445.meta,(this__4445.count + 1),this__4445.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4446 = this__4445.rear;

if(cljs.core.truth_(or__3548__auto____4446))
{return or__3548__auto____4446;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4445.meta,(this__4445.count + 1),cljs.core.conj.call(null,this__4445.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4447 = this;
var rear__4448 = cljs.core.seq.call(null,this__4447.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4449 = this__4447.front;

if(cljs.core.truth_(or__3548__auto____4449))
{return or__3548__auto____4449;
} else
{return rear__4448;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4447.front,cljs.core.seq.call(null,rear__4448)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4450 = this;
return this__4450.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4451 = this;
return cljs.core._first.call(null,this__4451.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4452 = this;
if(cljs.core.truth_(this__4452.front))
{var temp__3695__auto____4453 = cljs.core.next.call(null,this__4452.front);

if(cljs.core.truth_(temp__3695__auto____4453))
{var f1__4454 = temp__3695__auto____4453;

return (new cljs.core.PersistentQueue(this__4452.meta,(this__4452.count - 1),f1__4454,this__4452.rear));
} else
{return (new cljs.core.PersistentQueue(this__4452.meta,(this__4452.count - 1),cljs.core.seq.call(null,this__4452.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4455 = this;
return cljs.core.first.call(null,this__4455.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4456 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4457 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4458 = this;
return (new cljs.core.PersistentQueue(meta,this__4458.count,this__4458.front,this__4458.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4459 = this;
return this__4459.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4460 = this;
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
var this__4461 = this;
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
var len__4462 = array.length;

var i__4463 = 0;

while(true){
if(cljs.core.truth_((i__4463 < len__4462)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4463]))))
{return i__4463;
} else
{{
var G__4464 = (i__4463 + incr);
i__4463 = G__4464;
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
var obj_map_contains_key_QMARK___4466 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4467 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4465 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4465))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4465;
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
return obj_map_contains_key_QMARK___4466.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4467.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__4470 = cljs.core.hash.call(null,a);
var b__4471 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__4470 < b__4471)))
{return -1;
} else
{if(cljs.core.truth_((a__4470 > b__4471)))
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
var this__4472 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4499 = null;
var G__4499__4500 = (function (coll,k){
var this__4473 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4499__4501 = (function (coll,k,not_found){
var this__4474 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4474.strobj,(this__4474.strobj[k]),not_found);
});
G__4499 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4499__4500.call(this,coll,k);
case  3 :
return G__4499__4501.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4499;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4475 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4476 = goog.object.clone.call(null,this__4475.strobj);
var overwrite_QMARK___4477 = new_strobj__4476.hasOwnProperty(k);

(new_strobj__4476[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4477))
{return (new cljs.core.ObjMap(this__4475.meta,this__4475.keys,new_strobj__4476));
} else
{var new_keys__4478 = cljs.core.aclone.call(null,this__4475.keys);

new_keys__4478.push(k);
return (new cljs.core.ObjMap(this__4475.meta,new_keys__4478,new_strobj__4476));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4475.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4479 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4479.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4503 = null;
var G__4503__4504 = (function (tsym4480,k){
var this__4482 = this;
var tsym4480__4483 = this;

var coll__4484 = tsym4480__4483;

return cljs.core._lookup.call(null,coll__4484,k);
});
var G__4503__4505 = (function (tsym4481,k,not_found){
var this__4485 = this;
var tsym4481__4486 = this;

var coll__4487 = tsym4481__4486;

return cljs.core._lookup.call(null,coll__4487,k,not_found);
});
G__4503 = function(tsym4481,k,not_found){
switch(arguments.length){
case  2 :
return G__4503__4504.call(this,tsym4481,k);
case  3 :
return G__4503__4505.call(this,tsym4481,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4503;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4488 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4489 = this;
if(cljs.core.truth_((this__4489.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4469_SHARP_){
return cljs.core.vector.call(null,p1__4469_SHARP_,(this__4489.strobj[p1__4469_SHARP_]));
}),this__4489.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4490 = this;
return this__4490.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4491 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4492 = this;
return (new cljs.core.ObjMap(meta,this__4492.keys,this__4492.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4493 = this;
return this__4493.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4494 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4494.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4495 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4496 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4496))
{return this__4495.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4496;
}
})()))
{var new_keys__4497 = cljs.core.aclone.call(null,this__4495.keys);
var new_strobj__4498 = goog.object.clone.call(null,this__4495.strobj);

new_keys__4497.splice(cljs.core.scan_array.call(null,1,k,new_keys__4497),1);
cljs.core.js_delete.call(null,new_strobj__4498,k);
return (new cljs.core.ObjMap(this__4495.meta,new_keys__4497,new_strobj__4498));
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
var this__4508 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4546 = null;
var G__4546__4547 = (function (coll,k){
var this__4509 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4546__4548 = (function (coll,k,not_found){
var this__4510 = this;
var bucket__4511 = (this__4510.hashobj[cljs.core.hash.call(null,k)]);
var i__4512 = (cljs.core.truth_(bucket__4511)?cljs.core.scan_array.call(null,2,k,bucket__4511):null);

if(cljs.core.truth_(i__4512))
{return (bucket__4511[(i__4512 + 1)]);
} else
{return not_found;
}
});
G__4546 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4546__4547.call(this,coll,k);
case  3 :
return G__4546__4548.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4546;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4513 = this;
var h__4514 = cljs.core.hash.call(null,k);
var bucket__4515 = (this__4513.hashobj[h__4514]);

if(cljs.core.truth_(bucket__4515))
{var new_bucket__4516 = cljs.core.aclone.call(null,bucket__4515);
var new_hashobj__4517 = goog.object.clone.call(null,this__4513.hashobj);

(new_hashobj__4517[h__4514] = new_bucket__4516);
var temp__3695__auto____4518 = cljs.core.scan_array.call(null,2,k,new_bucket__4516);

if(cljs.core.truth_(temp__3695__auto____4518))
{var i__4519 = temp__3695__auto____4518;

(new_bucket__4516[(i__4519 + 1)] = v);
return (new cljs.core.HashMap(this__4513.meta,this__4513.count,new_hashobj__4517));
} else
{new_bucket__4516.push(k,v);
return (new cljs.core.HashMap(this__4513.meta,(this__4513.count + 1),new_hashobj__4517));
}
} else
{var new_hashobj__4520 = goog.object.clone.call(null,this__4513.hashobj);

(new_hashobj__4520[h__4514] = [k,v]);
return (new cljs.core.HashMap(this__4513.meta,(this__4513.count + 1),new_hashobj__4520));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4521 = this;
var bucket__4522 = (this__4521.hashobj[cljs.core.hash.call(null,k)]);
var i__4523 = (cljs.core.truth_(bucket__4522)?cljs.core.scan_array.call(null,2,k,bucket__4522):null);

if(cljs.core.truth_(i__4523))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4550 = null;
var G__4550__4551 = (function (tsym4524,k){
var this__4526 = this;
var tsym4524__4527 = this;

var coll__4528 = tsym4524__4527;

return cljs.core._lookup.call(null,coll__4528,k);
});
var G__4550__4552 = (function (tsym4525,k,not_found){
var this__4529 = this;
var tsym4525__4530 = this;

var coll__4531 = tsym4525__4530;

return cljs.core._lookup.call(null,coll__4531,k,not_found);
});
G__4550 = function(tsym4525,k,not_found){
switch(arguments.length){
case  2 :
return G__4550__4551.call(this,tsym4525,k);
case  3 :
return G__4550__4552.call(this,tsym4525,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4550;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4532 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4533 = this;
if(cljs.core.truth_((this__4533.count > 0)))
{var hashes__4534 = cljs.core.js_keys.call(null,this__4533.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4507_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4533.hashobj[p1__4507_SHARP_])));
}),hashes__4534);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4535 = this;
return this__4535.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4536 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4537 = this;
return (new cljs.core.HashMap(meta,this__4537.count,this__4537.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4538 = this;
return this__4538.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4539 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4539.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4540 = this;
var h__4541 = cljs.core.hash.call(null,k);
var bucket__4542 = (this__4540.hashobj[h__4541]);
var i__4543 = (cljs.core.truth_(bucket__4542)?cljs.core.scan_array.call(null,2,k,bucket__4542):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4543)))
{return coll;
} else
{var new_hashobj__4544 = goog.object.clone.call(null,this__4540.hashobj);

if(cljs.core.truth_((3 > bucket__4542.length)))
{cljs.core.js_delete.call(null,new_hashobj__4544,h__4541);
} else
{var new_bucket__4545 = cljs.core.aclone.call(null,bucket__4542);

new_bucket__4545.splice(i__4543,2);
(new_hashobj__4544[h__4541] = new_bucket__4545);
}
return (new cljs.core.HashMap(this__4540.meta,(this__4540.count - 1),new_hashobj__4544));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4554 = ks.length;

var i__4555 = 0;
var out__4556 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4555 < len__4554)))
{{
var G__4557 = (i__4555 + 1);
var G__4558 = cljs.core.assoc.call(null,out__4556,(ks[i__4555]),(vs[i__4555]));
i__4555 = G__4557;
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
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__4559 = cljs.core.seq.call(null,keyvals);
var out__4560 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4559))
{{
var G__4561 = cljs.core.nnext.call(null,in$__4559);
var G__4562 = cljs.core.assoc.call(null,out__4560,cljs.core.first.call(null,in$__4559),cljs.core.second.call(null,in$__4559));
in$__4559 = G__4561;
out__4560 = G__4562;
continue;
}
} else
{return out__4560;
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
hash_map.cljs$lang$applyTo = (function (arglist__4563){
var keyvals = cljs.core.seq( arglist__4563 );;
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
{return cljs.core.reduce.call(null,(function (p1__4564_SHARP_,p2__4565_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4566 = p1__4564_SHARP_;

if(cljs.core.truth_(or__3548__auto____4566))
{return or__3548__auto____4566;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4565_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__4567){
var maps = cljs.core.seq( arglist__4567 );;
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
{var merge_entry__4570 = (function (m,e){
var k__4568 = cljs.core.first.call(null,e);
var v__4569 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4568)))
{return cljs.core.assoc.call(null,m,k__4568,f.call(null,cljs.core.get.call(null,m,k__4568),v__4569));
} else
{return cljs.core.assoc.call(null,m,k__4568,v__4569);
}
});
var merge2__4572 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4570,(function (){var or__3548__auto____4571 = m1;

if(cljs.core.truth_(or__3548__auto____4571))
{return or__3548__auto____4571;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4572,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__4573){
var f = cljs.core.first(arglist__4573);
var maps = cljs.core.rest(arglist__4573);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4575 = cljs.core.ObjMap.fromObject([],{});
var keys__4576 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4576))
{var key__4577 = cljs.core.first.call(null,keys__4576);
var entry__4578 = cljs.core.get.call(null,map,key__4577,"\uFDD0'user/not-found");

{
var G__4579 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4578,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__4575,key__4577,entry__4578):ret__4575);
var G__4580 = cljs.core.next.call(null,keys__4576);
ret__4575 = G__4579;
keys__4576 = G__4580;
continue;
}
} else
{return ret__4575;
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
var this__4581 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4602 = null;
var G__4602__4603 = (function (coll,v){
var this__4582 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4602__4604 = (function (coll,v,not_found){
var this__4583 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4583.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4602 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4602__4603.call(this,coll,v);
case  3 :
return G__4602__4604.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4602;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4606 = null;
var G__4606__4607 = (function (tsym4584,k){
var this__4586 = this;
var tsym4584__4587 = this;

var coll__4588 = tsym4584__4587;

return cljs.core._lookup.call(null,coll__4588,k);
});
var G__4606__4608 = (function (tsym4585,k,not_found){
var this__4589 = this;
var tsym4585__4590 = this;

var coll__4591 = tsym4585__4590;

return cljs.core._lookup.call(null,coll__4591,k,not_found);
});
G__4606 = function(tsym4585,k,not_found){
switch(arguments.length){
case  2 :
return G__4606__4607.call(this,tsym4585,k);
case  3 :
return G__4606__4608.call(this,tsym4585,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4606;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4592 = this;
return (new cljs.core.Set(this__4592.meta,cljs.core.assoc.call(null,this__4592.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4593 = this;
return cljs.core.keys.call(null,this__4593.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4594 = this;
return (new cljs.core.Set(this__4594.meta,cljs.core.dissoc.call(null,this__4594.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4595 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4596 = this;
var and__3546__auto____4597 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4597))
{var and__3546__auto____4598 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4598))
{return cljs.core.every_QMARK_.call(null,(function (p1__4574_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4574_SHARP_);
}),other);
} else
{return and__3546__auto____4598;
}
} else
{return and__3546__auto____4597;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4599 = this;
return (new cljs.core.Set(meta,this__4599.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4600 = this;
return this__4600.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4601 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4601.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4611 = cljs.core.seq.call(null,coll);
var out__4612 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4611))))
{{
var G__4613 = cljs.core.rest.call(null,in$__4611);
var G__4614 = cljs.core.conj.call(null,out__4612,cljs.core.first.call(null,in$__4611));
in$__4611 = G__4613;
out__4612 = G__4614;
continue;
}
} else
{return out__4612;
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
{var n__4615 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4616 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4616))
{var e__4617 = temp__3695__auto____4616;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4617));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4615,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4610_SHARP_){
var temp__3695__auto____4618 = cljs.core.find.call(null,smap,p1__4610_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4618))
{var e__4619 = temp__3695__auto____4618;

return cljs.core.second.call(null,e__4619);
} else
{return p1__4610_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4627 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4620,seen){
while(true){
var vec__4621__4622 = p__4620;
var f__4623 = cljs.core.nth.call(null,vec__4621__4622,0,null);
var xs__4624 = vec__4621__4622;

var temp__3698__auto____4625 = cljs.core.seq.call(null,xs__4624);

if(cljs.core.truth_(temp__3698__auto____4625))
{var s__4626 = temp__3698__auto____4625;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4623)))
{{
var G__4628 = cljs.core.rest.call(null,s__4626);
var G__4629 = seen;
p__4620 = G__4628;
seen = G__4629;
continue;
}
} else
{return cljs.core.cons.call(null,f__4623,step.call(null,cljs.core.rest.call(null,s__4626),cljs.core.conj.call(null,seen,f__4623)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4627.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4630 = cljs.core.PersistentVector.fromArray([]);
var s__4631 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4631)))
{{
var G__4632 = cljs.core.conj.call(null,ret__4630,cljs.core.first.call(null,s__4631));
var G__4633 = cljs.core.next.call(null,s__4631);
ret__4630 = G__4632;
s__4631 = G__4633;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4630);
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
{if(cljs.core.truth_((function (){var or__3548__auto____4634 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4634))
{return or__3548__auto____4634;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4635 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4635 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4635 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____4636 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4636))
{return or__3548__auto____4636;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4637 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4637 > -1)))
{return cljs.core.subs.call(null,x,2,i__4637);
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
var map__4640 = cljs.core.ObjMap.fromObject([],{});
var ks__4641 = cljs.core.seq.call(null,keys);
var vs__4642 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4643 = ks__4641;

if(cljs.core.truth_(and__3546__auto____4643))
{return vs__4642;
} else
{return and__3546__auto____4643;
}
})()))
{{
var G__4644 = cljs.core.assoc.call(null,map__4640,cljs.core.first.call(null,ks__4641),cljs.core.first.call(null,vs__4642));
var G__4645 = cljs.core.next.call(null,ks__4641);
var G__4646 = cljs.core.next.call(null,vs__4642);
map__4640 = G__4644;
ks__4641 = G__4645;
vs__4642 = G__4646;
continue;
}
} else
{return map__4640;
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
var max_key__4649 = (function (k,x){
return x;
});
var max_key__4650 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4651 = (function() { 
var G__4653__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4638_SHARP_,p2__4639_SHARP_){
return max_key.call(null,k,p1__4638_SHARP_,p2__4639_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4653 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4653__delegate.call(this, k, x, y, more);
};
G__4653.cljs$lang$maxFixedArity = 3;
G__4653.cljs$lang$applyTo = (function (arglist__4654){
var k = cljs.core.first(arglist__4654);
var x = cljs.core.first(cljs.core.next(arglist__4654));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4654)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4654)));
return G__4653__delegate.call(this, k, x, y, more);
});
return G__4653;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4649.call(this,k,x);
case  3 :
return max_key__4650.call(this,k,x,y);
default:
return max_key__4651.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4651.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4655 = (function (k,x){
return x;
});
var min_key__4656 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4657 = (function() { 
var G__4659__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4647_SHARP_,p2__4648_SHARP_){
return min_key.call(null,k,p1__4647_SHARP_,p2__4648_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4659 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4659__delegate.call(this, k, x, y, more);
};
G__4659.cljs$lang$maxFixedArity = 3;
G__4659.cljs$lang$applyTo = (function (arglist__4660){
var k = cljs.core.first(arglist__4660);
var x = cljs.core.first(cljs.core.next(arglist__4660));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4660)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4660)));
return G__4659__delegate.call(this, k, x, y, more);
});
return G__4659;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4655.call(this,k,x);
case  3 :
return min_key__4656.call(this,k,x,y);
default:
return min_key__4657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4657.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4663 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4664 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4661 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4661))
{var s__4662 = temp__3698__auto____4661;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4662),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4662)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4663.call(this,n,step);
case  3 :
return partition_all__4664.call(this,n,step,coll);
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
var temp__3698__auto____4666 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4666))
{var s__4667 = temp__3698__auto____4666;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4667))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4667),take_while.call(null,pred,cljs.core.rest.call(null,s__4667)));
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
var this__4668 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4669 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4685 = null;
var G__4685__4686 = (function (rng,f){
var this__4670 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4685__4687 = (function (rng,f,s){
var this__4671 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4685 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4685__4686.call(this,rng,f);
case  3 :
return G__4685__4687.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4685;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4672 = this;
var comp__4673 = (cljs.core.truth_((this__4672.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4673.call(null,this__4672.start,this__4672.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4674 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4674.end - this__4674.start) / this__4674.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4675 = this;
return this__4675.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4676 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4676.meta,(this__4676.start + this__4676.step),this__4676.end,this__4676.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4677 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4678 = this;
return (new cljs.core.Range(meta,this__4678.start,this__4678.end,this__4678.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4679 = this;
return this__4679.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4689 = null;
var G__4689__4690 = (function (rng,n){
var this__4680 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4680.start + (n * this__4680.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4681 = (this__4680.start > this__4680.end);

if(cljs.core.truth_(and__3546__auto____4681))
{return cljs.core._EQ_.call(null,this__4680.step,0);
} else
{return and__3546__auto____4681;
}
})()))
{return this__4680.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4689__4691 = (function (rng,n,not_found){
var this__4682 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4682.start + (n * this__4682.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4683 = (this__4682.start > this__4682.end);

if(cljs.core.truth_(and__3546__auto____4683))
{return cljs.core._EQ_.call(null,this__4682.step,0);
} else
{return and__3546__auto____4683;
}
})()))
{return this__4682.start;
} else
{return not_found;
}
}
});
G__4689 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4689__4690.call(this,rng,n);
case  3 :
return G__4689__4691.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4689;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4684 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4684.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4693 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4694 = (function (end){
return range.call(null,0,end,1);
});
var range__4695 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4696 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4693.call(this);
case  1 :
return range__4694.call(this,start);
case  2 :
return range__4695.call(this,start,end);
case  3 :
return range__4696.call(this,start,end,step);
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
var temp__3698__auto____4698 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4698))
{var s__4699 = temp__3698__auto____4698;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4699),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4699)));
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
var temp__3698__auto____4701 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4701))
{var s__4702 = temp__3698__auto____4701;

var fst__4703 = cljs.core.first.call(null,s__4702);
var fv__4704 = f.call(null,fst__4703);
var run__4705 = cljs.core.cons.call(null,fst__4703,cljs.core.take_while.call(null,(function (p1__4700_SHARP_){
return cljs.core._EQ_.call(null,fv__4704,f.call(null,p1__4700_SHARP_));
}),cljs.core.next.call(null,s__4702)));

return cljs.core.cons.call(null,run__4705,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4705),s__4702))));
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
var reductions__4720 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4716 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4716))
{var s__4717 = temp__3695__auto____4716;

return reductions.call(null,f,cljs.core.first.call(null,s__4717),cljs.core.rest.call(null,s__4717));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4721 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4718 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4718))
{var s__4719 = temp__3698__auto____4718;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4719)),cljs.core.rest.call(null,s__4719));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4720.call(this,f,init);
case  3 :
return reductions__4721.call(this,f,init,coll);
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
var juxt__4724 = (function (f){
return (function() {
var G__4729 = null;
var G__4729__4730 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4729__4731 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4729__4732 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4729__4733 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4729__4734 = (function() { 
var G__4736__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4736 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4736__delegate.call(this, x, y, z, args);
};
G__4736.cljs$lang$maxFixedArity = 3;
G__4736.cljs$lang$applyTo = (function (arglist__4737){
var x = cljs.core.first(arglist__4737);
var y = cljs.core.first(cljs.core.next(arglist__4737));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4737)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4737)));
return G__4736__delegate.call(this, x, y, z, args);
});
return G__4736;
})()
;
G__4729 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4729__4730.call(this);
case  1 :
return G__4729__4731.call(this,x);
case  2 :
return G__4729__4732.call(this,x,y);
case  3 :
return G__4729__4733.call(this,x,y,z);
default:
return G__4729__4734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4729.cljs$lang$maxFixedArity = 3;
G__4729.cljs$lang$applyTo = G__4729__4734.cljs$lang$applyTo;
return G__4729;
})()
});
var juxt__4725 = (function (f,g){
return (function() {
var G__4738 = null;
var G__4738__4739 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4738__4740 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4738__4741 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4738__4742 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4738__4743 = (function() { 
var G__4745__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4745 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4745__delegate.call(this, x, y, z, args);
};
G__4745.cljs$lang$maxFixedArity = 3;
G__4745.cljs$lang$applyTo = (function (arglist__4746){
var x = cljs.core.first(arglist__4746);
var y = cljs.core.first(cljs.core.next(arglist__4746));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4746)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4746)));
return G__4745__delegate.call(this, x, y, z, args);
});
return G__4745;
})()
;
G__4738 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4738__4739.call(this);
case  1 :
return G__4738__4740.call(this,x);
case  2 :
return G__4738__4741.call(this,x,y);
case  3 :
return G__4738__4742.call(this,x,y,z);
default:
return G__4738__4743.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4738.cljs$lang$maxFixedArity = 3;
G__4738.cljs$lang$applyTo = G__4738__4743.cljs$lang$applyTo;
return G__4738;
})()
});
var juxt__4726 = (function (f,g,h){
return (function() {
var G__4747 = null;
var G__4747__4748 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4747__4749 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4747__4750 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4747__4751 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4747__4752 = (function() { 
var G__4754__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4754 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4754__delegate.call(this, x, y, z, args);
};
G__4754.cljs$lang$maxFixedArity = 3;
G__4754.cljs$lang$applyTo = (function (arglist__4755){
var x = cljs.core.first(arglist__4755);
var y = cljs.core.first(cljs.core.next(arglist__4755));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4755)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4755)));
return G__4754__delegate.call(this, x, y, z, args);
});
return G__4754;
})()
;
G__4747 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4747__4748.call(this);
case  1 :
return G__4747__4749.call(this,x);
case  2 :
return G__4747__4750.call(this,x,y);
case  3 :
return G__4747__4751.call(this,x,y,z);
default:
return G__4747__4752.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4747.cljs$lang$maxFixedArity = 3;
G__4747.cljs$lang$applyTo = G__4747__4752.cljs$lang$applyTo;
return G__4747;
})()
});
var juxt__4727 = (function() { 
var G__4756__delegate = function (f,g,h,fs){
var fs__4723 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4757 = null;
var G__4757__4758 = (function (){
return cljs.core.reduce.call(null,(function (p1__4706_SHARP_,p2__4707_SHARP_){
return cljs.core.conj.call(null,p1__4706_SHARP_,p2__4707_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__4723);
});
var G__4757__4759 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4708_SHARP_,p2__4709_SHARP_){
return cljs.core.conj.call(null,p1__4708_SHARP_,p2__4709_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__4723);
});
var G__4757__4760 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4710_SHARP_,p2__4711_SHARP_){
return cljs.core.conj.call(null,p1__4710_SHARP_,p2__4711_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__4723);
});
var G__4757__4761 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4712_SHARP_,p2__4713_SHARP_){
return cljs.core.conj.call(null,p1__4712_SHARP_,p2__4713_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__4723);
});
var G__4757__4762 = (function() { 
var G__4764__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4714_SHARP_,p2__4715_SHARP_){
return cljs.core.conj.call(null,p1__4714_SHARP_,cljs.core.apply.call(null,p2__4715_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__4723);
};
var G__4764 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4764__delegate.call(this, x, y, z, args);
};
G__4764.cljs$lang$maxFixedArity = 3;
G__4764.cljs$lang$applyTo = (function (arglist__4765){
var x = cljs.core.first(arglist__4765);
var y = cljs.core.first(cljs.core.next(arglist__4765));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4765)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4765)));
return G__4764__delegate.call(this, x, y, z, args);
});
return G__4764;
})()
;
G__4757 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4757__4758.call(this);
case  1 :
return G__4757__4759.call(this,x);
case  2 :
return G__4757__4760.call(this,x,y);
case  3 :
return G__4757__4761.call(this,x,y,z);
default:
return G__4757__4762.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4757.cljs$lang$maxFixedArity = 3;
G__4757.cljs$lang$applyTo = G__4757__4762.cljs$lang$applyTo;
return G__4757;
})()
};
var G__4756 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4756__delegate.call(this, f, g, h, fs);
};
G__4756.cljs$lang$maxFixedArity = 3;
G__4756.cljs$lang$applyTo = (function (arglist__4766){
var f = cljs.core.first(arglist__4766);
var g = cljs.core.first(cljs.core.next(arglist__4766));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4766)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4766)));
return G__4756__delegate.call(this, f, g, h, fs);
});
return G__4756;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4724.call(this,f);
case  2 :
return juxt__4725.call(this,f,g);
case  3 :
return juxt__4726.call(this,f,g,h);
default:
return juxt__4727.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4727.cljs$lang$applyTo;
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
var dorun__4768 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4771 = cljs.core.next.call(null,coll);
coll = G__4771;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4769 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4767 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4767))
{return (n > 0);
} else
{return and__3546__auto____4767;
}
})()))
{{
var G__4772 = (n - 1);
var G__4773 = cljs.core.next.call(null,coll);
n = G__4772;
coll = G__4773;
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
return dorun__4768.call(this,n);
case  2 :
return dorun__4769.call(this,n,coll);
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
var doall__4774 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4775 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4774.call(this,n);
case  2 :
return doall__4775.call(this,n,coll);
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
var matches__4777 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4777),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4777),1)))
{return cljs.core.first.call(null,matches__4777);
} else
{return cljs.core.vec.call(null,matches__4777);
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
var matches__4778 = re.exec(s);

if(cljs.core.truth_((matches__4778 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4778),1)))
{return cljs.core.first.call(null,matches__4778);
} else
{return cljs.core.vec.call(null,matches__4778);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4779 = cljs.core.re_find.call(null,re,s);
var match_idx__4780 = s.search(re);
var match_str__4781 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4779))?cljs.core.first.call(null,match_data__4779):match_data__4779);
var post_match__4782 = cljs.core.subs.call(null,s,(match_idx__4780 + cljs.core.count.call(null,match_str__4781)));

if(cljs.core.truth_(match_data__4779))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4779,re_seq.call(null,re,post_match__4782));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__4784__4785 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___4786 = cljs.core.nth.call(null,vec__4784__4785,0,null);
var flags__4787 = cljs.core.nth.call(null,vec__4784__4785,1,null);
var pattern__4788 = cljs.core.nth.call(null,vec__4784__4785,2,null);

return (new RegExp(pattern__4788,flags__4787));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4783_SHARP_){
return print_one.call(null,p1__4783_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4789 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____4789))
{var and__3546__auto____4793 = (function (){var x__451__auto____4790 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4791 = x__451__auto____4790;

if(cljs.core.truth_(and__3546__auto____4791))
{var and__3546__auto____4792 = x__451__auto____4790.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4792))
{return cljs.core.not.call(null,x__451__auto____4790.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4792;
}
} else
{return and__3546__auto____4791;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____4790);
}
})();

if(cljs.core.truth_(and__3546__auto____4793))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4793;
}
} else
{return and__3546__auto____4789;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____4794 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4795 = x__451__auto____4794;

if(cljs.core.truth_(and__3546__auto____4795))
{var and__3546__auto____4796 = x__451__auto____4794.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4796))
{return cljs.core.not.call(null,x__451__auto____4794.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4796;
}
} else
{return and__3546__auto____4795;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____4794);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__4797 = cljs.core.first.call(null,objs);
var sb__4798 = (new goog.string.StringBuffer());

var G__4799__4800 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4799__4800))
{var obj__4801 = cljs.core.first.call(null,G__4799__4800);
var G__4799__4802 = G__4799__4800;

while(true){
if(cljs.core.truth_((obj__4801 === first_obj__4797)))
{} else
{sb__4798.append(" ");
}
var G__4803__4804 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4801,opts));

if(cljs.core.truth_(G__4803__4804))
{var string__4805 = cljs.core.first.call(null,G__4803__4804);
var G__4803__4806 = G__4803__4804;

while(true){
sb__4798.append(string__4805);
var temp__3698__auto____4807 = cljs.core.next.call(null,G__4803__4806);

if(cljs.core.truth_(temp__3698__auto____4807))
{var G__4803__4808 = temp__3698__auto____4807;

{
var G__4811 = cljs.core.first.call(null,G__4803__4808);
var G__4812 = G__4803__4808;
string__4805 = G__4811;
G__4803__4806 = G__4812;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4809 = cljs.core.next.call(null,G__4799__4802);

if(cljs.core.truth_(temp__3698__auto____4809))
{var G__4799__4810 = temp__3698__auto____4809;

{
var G__4813 = cljs.core.first.call(null,G__4799__4810);
var G__4814 = G__4799__4810;
obj__4801 = G__4813;
G__4799__4802 = G__4814;
continue;
}
} else
{}
break;
}
} else
{}
return sb__4798;
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
var sb__4815 = cljs.core.pr_sb.call(null,objs,opts);

sb__4815.append("\n");
return cljs.core.str.call(null,sb__4815);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4816 = cljs.core.first.call(null,objs);

var G__4817__4818 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4817__4818))
{var obj__4819 = cljs.core.first.call(null,G__4817__4818);
var G__4817__4820 = G__4817__4818;

while(true){
if(cljs.core.truth_((obj__4819 === first_obj__4816)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4821__4822 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4819,opts));

if(cljs.core.truth_(G__4821__4822))
{var string__4823 = cljs.core.first.call(null,G__4821__4822);
var G__4821__4824 = G__4821__4822;

while(true){
cljs.core.string_print.call(null,string__4823);
var temp__3698__auto____4825 = cljs.core.next.call(null,G__4821__4824);

if(cljs.core.truth_(temp__3698__auto____4825))
{var G__4821__4826 = temp__3698__auto____4825;

{
var G__4829 = cljs.core.first.call(null,G__4821__4826);
var G__4830 = G__4821__4826;
string__4823 = G__4829;
G__4821__4824 = G__4830;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4827 = cljs.core.next.call(null,G__4817__4820);

if(cljs.core.truth_(temp__3698__auto____4827))
{var G__4817__4828 = temp__3698__auto____4827;

{
var G__4831 = cljs.core.first.call(null,G__4817__4828);
var G__4832 = G__4817__4828;
obj__4819 = G__4831;
G__4817__4820 = G__4832;
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
pr_str.cljs$lang$applyTo = (function (arglist__4833){
var objs = cljs.core.seq( arglist__4833 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__4834){
var objs = cljs.core.seq( arglist__4834 );;
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
pr.cljs$lang$applyTo = (function (arglist__4835){
var objs = cljs.core.seq( arglist__4835 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__4836){
var objs = cljs.core.seq( arglist__4836 );;
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
print_str.cljs$lang$applyTo = (function (arglist__4837){
var objs = cljs.core.seq( arglist__4837 );;
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
println.cljs$lang$applyTo = (function (arglist__4838){
var objs = cljs.core.seq( arglist__4838 );;
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
println_str.cljs$lang$applyTo = (function (arglist__4839){
var objs = cljs.core.seq( arglist__4839 );;
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
prn.cljs$lang$applyTo = (function (arglist__4840){
var objs = cljs.core.seq( arglist__4840 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4841 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4841,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4842 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4842))
{var nspc__4843 = temp__3698__auto____4842;

return cljs.core.str.call(null,nspc__4843,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4844 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4844))
{var nspc__4845 = temp__3698__auto____4844;

return cljs.core.str.call(null,nspc__4845,"/");
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
var pr_pair__4846 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4846,"{",", ","}",opts,coll);
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
var this__4847 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4848 = this;
var G__4849__4850 = cljs.core.seq.call(null,this__4848.watches);

if(cljs.core.truth_(G__4849__4850))
{var G__4852__4854 = cljs.core.first.call(null,G__4849__4850);
var vec__4853__4855 = G__4852__4854;
var key__4856 = cljs.core.nth.call(null,vec__4853__4855,0,null);
var f__4857 = cljs.core.nth.call(null,vec__4853__4855,1,null);
var G__4849__4858 = G__4849__4850;

var G__4852__4859 = G__4852__4854;
var G__4849__4860 = G__4849__4858;

while(true){
var vec__4861__4862 = G__4852__4859;
var key__4863 = cljs.core.nth.call(null,vec__4861__4862,0,null);
var f__4864 = cljs.core.nth.call(null,vec__4861__4862,1,null);
var G__4849__4865 = G__4849__4860;

f__4864.call(null,key__4863,this$,oldval,newval);
var temp__3698__auto____4866 = cljs.core.next.call(null,G__4849__4865);

if(cljs.core.truth_(temp__3698__auto____4866))
{var G__4849__4867 = temp__3698__auto____4866;

{
var G__4874 = cljs.core.first.call(null,G__4849__4867);
var G__4875 = G__4849__4867;
G__4852__4859 = G__4874;
G__4849__4860 = G__4875;
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
var this__4868 = this;
return this$.watches = cljs.core.assoc.call(null,this__4868.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4869 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4869.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4870 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4870.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4871 = this;
return this__4871.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4872 = this;
return this__4872.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4873 = this;
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
var atom__4882 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4883 = (function() { 
var G__4885__delegate = function (x,p__4876){
var map__4877__4878 = p__4876;
var map__4877__4879 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4877__4878))?cljs.core.apply.call(null,cljs.core.hash_map,map__4877__4878):map__4877__4878);
var validator__4880 = cljs.core.get.call(null,map__4877__4879,"\uFDD0'validator");
var meta__4881 = cljs.core.get.call(null,map__4877__4879,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__4881,validator__4880,null));
};
var G__4885 = function (x,var_args){
var p__4876 = null;
if (goog.isDef(var_args)) {
  p__4876 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4885__delegate.call(this, x, p__4876);
};
G__4885.cljs$lang$maxFixedArity = 1;
G__4885.cljs$lang$applyTo = (function (arglist__4886){
var x = cljs.core.first(arglist__4886);
var p__4876 = cljs.core.rest(arglist__4886);
return G__4885__delegate.call(this, x, p__4876);
});
return G__4885;
})()
;
atom = function(x,var_args){
var p__4876 = var_args;
switch(arguments.length){
case  1 :
return atom__4882.call(this,x);
default:
return atom__4883.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4883.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4887 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4887))
{var validate__4888 = temp__3698__auto____4887;

if(cljs.core.truth_(validate__4888.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__4889 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4889,new_value);
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
var swap_BANG___4890 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4891 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4892 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4893 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4894 = (function() { 
var G__4896__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4896 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4896__delegate.call(this, a, f, x, y, z, more);
};
G__4896.cljs$lang$maxFixedArity = 5;
G__4896.cljs$lang$applyTo = (function (arglist__4897){
var a = cljs.core.first(arglist__4897);
var f = cljs.core.first(cljs.core.next(arglist__4897));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4897)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4897))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4897)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4897)))));
return G__4896__delegate.call(this, a, f, x, y, z, more);
});
return G__4896;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4890.call(this,a,f);
case  3 :
return swap_BANG___4891.call(this,a,f,x);
case  4 :
return swap_BANG___4892.call(this,a,f,x,y);
case  5 :
return swap_BANG___4893.call(this,a,f,x,y,z);
default:
return swap_BANG___4894.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4894.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4898){
var iref = cljs.core.first(arglist__4898);
var f = cljs.core.first(cljs.core.next(arglist__4898));
var args = cljs.core.rest(cljs.core.next(arglist__4898));
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
var gensym__4899 = (function (){
return gensym.call(null,"G__");
});
var gensym__4900 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4899.call(this);
case  1 :
return gensym__4900.call(this,prefix_string);
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
var this__4902 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__4902.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4903 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__4903.state,(function (p__4904){
var curr_state__4905 = p__4904;
var curr_state__4906 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__4905))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__4905):curr_state__4905);
var done__4907 = cljs.core.get.call(null,curr_state__4906,"\uFDD0'done");

if(cljs.core.truth_(done__4907))
{return curr_state__4906;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__4903.f.call(null)});
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
var map__4908__4909 = options;
var map__4908__4910 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4908__4909))?cljs.core.apply.call(null,cljs.core.hash_map,map__4908__4909):map__4908__4909);
var keywordize_keys__4911 = cljs.core.get.call(null,map__4908__4910,"\uFDD0'keywordize-keys");
var keyfn__4912 = (cljs.core.truth_(keywordize_keys__4911)?cljs.core.keyword:cljs.core.str);
var f__4918 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____4917 = (function iter__4913(s__4914){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4914__4915 = s__4914;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4914__4915)))
{var k__4916 = cljs.core.first.call(null,s__4914__4915);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__4912.call(null,k__4916),thisfn.call(null,(x[k__4916]))]),iter__4913.call(null,cljs.core.rest.call(null,s__4914__4915)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____4917.call(null,cljs.core.js_keys.call(null,x));
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

return f__4918.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4919){
var x = cljs.core.first(arglist__4919);
var options = cljs.core.rest(arglist__4919);
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
var mem__4920 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4924__delegate = function (args){
var temp__3695__auto____4921 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4920),args);

if(cljs.core.truth_(temp__3695__auto____4921))
{var v__4922 = temp__3695__auto____4921;

return v__4922;
} else
{var ret__4923 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4920,cljs.core.assoc,args,ret__4923);
return ret__4923;
}
};
var G__4924 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4924__delegate.call(this, args);
};
G__4924.cljs$lang$maxFixedArity = 0;
G__4924.cljs$lang$applyTo = (function (arglist__4925){
var args = cljs.core.seq( arglist__4925 );;
return G__4924__delegate.call(this, args);
});
return G__4924;
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
var trampoline__4927 = (function (f){
while(true){
var ret__4926 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4926)))
{{
var G__4930 = ret__4926;
f = G__4930;
continue;
}
} else
{return ret__4926;
}
break;
}
});
var trampoline__4928 = (function() { 
var G__4931__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4931 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4931__delegate.call(this, f, args);
};
G__4931.cljs$lang$maxFixedArity = 1;
G__4931.cljs$lang$applyTo = (function (arglist__4932){
var f = cljs.core.first(arglist__4932);
var args = cljs.core.rest(arglist__4932);
return G__4931__delegate.call(this, f, args);
});
return G__4931;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4927.call(this,f);
default:
return trampoline__4928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4928.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4933 = (function (){
return rand.call(null,1);
});
var rand__4934 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4933.call(this);
case  1 :
return rand__4934.call(this,n);
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
var k__4936 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4936,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4936,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___4945 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4946 = (function (h,child,parent){
var or__3548__auto____4937 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4937))
{return or__3548__auto____4937;
} else
{var or__3548__auto____4938 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4938))
{return or__3548__auto____4938;
} else
{var and__3546__auto____4939 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4939))
{var and__3546__auto____4940 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4940))
{var and__3546__auto____4941 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4941))
{var ret__4942 = true;
var i__4943 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4944 = cljs.core.not.call(null,ret__4942);

if(cljs.core.truth_(or__3548__auto____4944))
{return or__3548__auto____4944;
} else
{return cljs.core._EQ_.call(null,i__4943,cljs.core.count.call(null,parent));
}
})()))
{return ret__4942;
} else
{{
var G__4948 = isa_QMARK_.call(null,h,child.call(null,i__4943),parent.call(null,i__4943));
var G__4949 = (i__4943 + 1);
ret__4942 = G__4948;
i__4943 = G__4949;
continue;
}
}
break;
}
} else
{return and__3546__auto____4941;
}
} else
{return and__3546__auto____4940;
}
} else
{return and__3546__auto____4939;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4945.call(this,h,child);
case  3 :
return isa_QMARK___4946.call(this,h,child,parent);
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
var parents__4950 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4951 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4950.call(this,h);
case  2 :
return parents__4951.call(this,h,tag);
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
var ancestors__4953 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4954 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4953.call(this,h);
case  2 :
return ancestors__4954.call(this,h,tag);
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
var descendants__4956 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4957 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4956.call(this,h);
case  2 :
return descendants__4957.call(this,h,tag);
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
var derive__4967 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4968 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__4962 = "\uFDD0'parents".call(null,h);
var td__4963 = "\uFDD0'descendants".call(null,h);
var ta__4964 = "\uFDD0'ancestors".call(null,h);
var tf__4965 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4966 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4962.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4964.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4964.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4962,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__4965.call(null,"\uFDD0'ancestors".call(null,h),tag,td__4963,parent,ta__4964),"\uFDD0'descendants":tf__4965.call(null,"\uFDD0'descendants".call(null,h),parent,ta__4964,tag,td__4963)});
})());

if(cljs.core.truth_(or__3548__auto____4966))
{return or__3548__auto____4966;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4967.call(this,h,tag);
case  3 :
return derive__4968.call(this,h,tag,parent);
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
var underive__4974 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4975 = (function (h,tag,parent){
var parentMap__4970 = "\uFDD0'parents".call(null,h);
var childsParents__4971 = (cljs.core.truth_(parentMap__4970.call(null,tag))?cljs.core.disj.call(null,parentMap__4970.call(null,tag),parent):cljs.core.set([]));
var newParents__4972 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4971))?cljs.core.assoc.call(null,parentMap__4970,tag,childsParents__4971):cljs.core.dissoc.call(null,parentMap__4970,tag));
var deriv_seq__4973 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4959_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4959_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4959_SHARP_),cljs.core.second.call(null,p1__4959_SHARP_)));
}),cljs.core.seq.call(null,newParents__4972)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4970.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4960_SHARP_,p2__4961_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4960_SHARP_,p2__4961_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4973));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4974.call(this,h,tag);
case  3 :
return underive__4975.call(this,h,tag,parent);
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
var xprefs__4977 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4979 = (cljs.core.truth_((function (){var and__3546__auto____4978 = xprefs__4977;

if(cljs.core.truth_(and__3546__auto____4978))
{return xprefs__4977.call(null,y);
} else
{return and__3546__auto____4978;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4979))
{return or__3548__auto____4979;
} else
{var or__3548__auto____4981 = (function (){var ps__4980 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4980) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4980),prefer_table)))
{} else
{}
{
var G__4984 = cljs.core.rest.call(null,ps__4980);
ps__4980 = G__4984;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4981))
{return or__3548__auto____4981;
} else
{var or__3548__auto____4983 = (function (){var ps__4982 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4982) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4982),y,prefer_table)))
{} else
{}
{
var G__4985 = cljs.core.rest.call(null,ps__4982);
ps__4982 = G__4985;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4983))
{return or__3548__auto____4983;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4986 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4986))
{return or__3548__auto____4986;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4995 = cljs.core.reduce.call(null,(function (be,p__4987){
var vec__4988__4989 = p__4987;
var k__4990 = cljs.core.nth.call(null,vec__4988__4989,0,null);
var ___4991 = cljs.core.nth.call(null,vec__4988__4989,1,null);
var e__4992 = vec__4988__4989;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4990)))
{var be2__4994 = (cljs.core.truth_((function (){var or__3548__auto____4993 = (be === null);

if(cljs.core.truth_(or__3548__auto____4993))
{return or__3548__auto____4993;
} else
{return cljs.core.dominates.call(null,k__4990,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4992:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4994),k__4990,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4990," and ",cljs.core.first.call(null,be2__4994),", and neither is preferred")));
}
return be2__4994;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4995))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4995));
return cljs.core.second.call(null,best_entry__4995);
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
if(cljs.core.truth_((function (){var and__3546__auto____4996 = mf;

if(cljs.core.truth_(and__3546__auto____4996))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4996;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4997 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4997))
{return or__3548__auto____4997;
} else
{var or__3548__auto____4998 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4998))
{return or__3548__auto____4998;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4999 = mf;

if(cljs.core.truth_(and__3546__auto____4999))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4999;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____5000 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5000))
{return or__3548__auto____5000;
} else
{var or__3548__auto____5001 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____5001))
{return or__3548__auto____5001;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____5002 = mf;

if(cljs.core.truth_(and__3546__auto____5002))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____5002;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____5003 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5003))
{return or__3548__auto____5003;
} else
{var or__3548__auto____5004 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____5004))
{return or__3548__auto____5004;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____5005 = mf;

if(cljs.core.truth_(and__3546__auto____5005))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____5005;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____5006 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5006))
{return or__3548__auto____5006;
} else
{var or__3548__auto____5007 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____5007))
{return or__3548__auto____5007;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____5008 = mf;

if(cljs.core.truth_(and__3546__auto____5008))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____5008;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____5009 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5009))
{return or__3548__auto____5009;
} else
{var or__3548__auto____5010 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____5010))
{return or__3548__auto____5010;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____5011 = mf;

if(cljs.core.truth_(and__3546__auto____5011))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____5011;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____5012 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5012))
{return or__3548__auto____5012;
} else
{var or__3548__auto____5013 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____5013))
{return or__3548__auto____5013;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____5014 = mf;

if(cljs.core.truth_(and__3546__auto____5014))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____5014;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____5015 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5015))
{return or__3548__auto____5015;
} else
{var or__3548__auto____5016 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____5016))
{return or__3548__auto____5016;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____5017 = mf;

if(cljs.core.truth_(and__3546__auto____5017))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____5017;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____5018 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5018))
{return or__3548__auto____5018;
} else
{var or__3548__auto____5019 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____5019))
{return or__3548__auto____5019;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__5020 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__5021 = cljs.core._get_method.call(null,mf,dispatch_val__5020);

if(cljs.core.truth_(target_fn__5021))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__5020)));
}
return cljs.core.apply.call(null,target_fn__5021,args);
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
var this__5022 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__5023 = this;
cljs.core.swap_BANG_.call(null,this__5023.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5023.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5023.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5023.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__5024 = this;
cljs.core.swap_BANG_.call(null,this__5024.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__5024.method_cache,this__5024.method_table,this__5024.cached_hierarchy,this__5024.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__5025 = this;
cljs.core.swap_BANG_.call(null,this__5025.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__5025.method_cache,this__5025.method_table,this__5025.cached_hierarchy,this__5025.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__5026 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__5026.cached_hierarchy),cljs.core.deref.call(null,this__5026.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__5026.method_cache,this__5026.method_table,this__5026.cached_hierarchy,this__5026.hierarchy);
}
var temp__3695__auto____5027 = cljs.core.deref.call(null,this__5026.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____5027))
{var target_fn__5028 = temp__3695__auto____5027;

return target_fn__5028;
} else
{var temp__3695__auto____5029 = cljs.core.find_and_cache_best_method.call(null,this__5026.name,dispatch_val,this__5026.hierarchy,this__5026.method_table,this__5026.prefer_table,this__5026.method_cache,this__5026.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____5029))
{var target_fn__5030 = temp__3695__auto____5029;

return target_fn__5030;
} else
{return cljs.core.deref.call(null,this__5026.method_table).call(null,this__5026.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__5031 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__5031.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__5031.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__5031.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__5031.method_cache,this__5031.method_table,this__5031.cached_hierarchy,this__5031.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__5032 = this;
return cljs.core.deref.call(null,this__5032.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__5033 = this;
return cljs.core.deref.call(null,this__5033.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__5034 = this;
return cljs.core.do_dispatch.call(null,mf,this__5034.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__5035__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__5035 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5035__delegate.call(this, _, args);
};
G__5035.cljs$lang$maxFixedArity = 1;
G__5035.cljs$lang$applyTo = (function (arglist__5036){
var _ = cljs.core.first(arglist__5036);
var args = cljs.core.rest(arglist__5036);
return G__5035__delegate.call(this, _, args);
});
return G__5035;
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
