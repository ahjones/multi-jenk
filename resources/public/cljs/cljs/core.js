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
var or__3548__auto____173319 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____173319))
{return or__3548__auto____173319;
} else
{var or__3548__auto____173320 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____173320))
{return or__3548__auto____173320;
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
var _invoke__173384 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____173321 = this$;

if(cljs.core.truth_(and__3546__auto____173321))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173321;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____173322 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173322))
{return or__3548__auto____173322;
} else
{var or__3548__auto____173323 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173323))
{return or__3548__auto____173323;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__173385 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____173324 = this$;

if(cljs.core.truth_(and__3546__auto____173324))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173324;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____173325 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173325))
{return or__3548__auto____173325;
} else
{var or__3548__auto____173326 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173326))
{return or__3548__auto____173326;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__173386 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____173327 = this$;

if(cljs.core.truth_(and__3546__auto____173327))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173327;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____173328 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173328))
{return or__3548__auto____173328;
} else
{var or__3548__auto____173329 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173329))
{return or__3548__auto____173329;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__173387 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____173330 = this$;

if(cljs.core.truth_(and__3546__auto____173330))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173330;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____173331 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173331))
{return or__3548__auto____173331;
} else
{var or__3548__auto____173332 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173332))
{return or__3548__auto____173332;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__173388 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____173333 = this$;

if(cljs.core.truth_(and__3546__auto____173333))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173333;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____173334 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173334))
{return or__3548__auto____173334;
} else
{var or__3548__auto____173335 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173335))
{return or__3548__auto____173335;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__173389 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____173336 = this$;

if(cljs.core.truth_(and__3546__auto____173336))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173336;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____173337 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173337))
{return or__3548__auto____173337;
} else
{var or__3548__auto____173338 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173338))
{return or__3548__auto____173338;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__173390 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____173339 = this$;

if(cljs.core.truth_(and__3546__auto____173339))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173339;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____173340 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173340))
{return or__3548__auto____173340;
} else
{var or__3548__auto____173341 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173341))
{return or__3548__auto____173341;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__173391 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____173342 = this$;

if(cljs.core.truth_(and__3546__auto____173342))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173342;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____173343 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173343))
{return or__3548__auto____173343;
} else
{var or__3548__auto____173344 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173344))
{return or__3548__auto____173344;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__173392 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____173345 = this$;

if(cljs.core.truth_(and__3546__auto____173345))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173345;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____173346 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173346))
{return or__3548__auto____173346;
} else
{var or__3548__auto____173347 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173347))
{return or__3548__auto____173347;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__173393 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____173348 = this$;

if(cljs.core.truth_(and__3546__auto____173348))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173348;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____173349 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173349))
{return or__3548__auto____173349;
} else
{var or__3548__auto____173350 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173350))
{return or__3548__auto____173350;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__173394 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____173351 = this$;

if(cljs.core.truth_(and__3546__auto____173351))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173351;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____173352 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173352))
{return or__3548__auto____173352;
} else
{var or__3548__auto____173353 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173353))
{return or__3548__auto____173353;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__173395 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____173354 = this$;

if(cljs.core.truth_(and__3546__auto____173354))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173354;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____173355 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173355))
{return or__3548__auto____173355;
} else
{var or__3548__auto____173356 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173356))
{return or__3548__auto____173356;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__173396 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____173357 = this$;

if(cljs.core.truth_(and__3546__auto____173357))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173357;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____173358 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173358))
{return or__3548__auto____173358;
} else
{var or__3548__auto____173359 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173359))
{return or__3548__auto____173359;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__173397 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____173360 = this$;

if(cljs.core.truth_(and__3546__auto____173360))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173360;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____173361 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173361))
{return or__3548__auto____173361;
} else
{var or__3548__auto____173362 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173362))
{return or__3548__auto____173362;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__173398 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____173363 = this$;

if(cljs.core.truth_(and__3546__auto____173363))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173363;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____173364 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173364))
{return or__3548__auto____173364;
} else
{var or__3548__auto____173365 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173365))
{return or__3548__auto____173365;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__173399 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____173366 = this$;

if(cljs.core.truth_(and__3546__auto____173366))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173366;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____173367 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173367))
{return or__3548__auto____173367;
} else
{var or__3548__auto____173368 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173368))
{return or__3548__auto____173368;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__173400 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____173369 = this$;

if(cljs.core.truth_(and__3546__auto____173369))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173369;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____173370 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173370))
{return or__3548__auto____173370;
} else
{var or__3548__auto____173371 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173371))
{return or__3548__auto____173371;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__173401 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____173372 = this$;

if(cljs.core.truth_(and__3546__auto____173372))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173372;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____173373 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173373))
{return or__3548__auto____173373;
} else
{var or__3548__auto____173374 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173374))
{return or__3548__auto____173374;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__173402 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____173375 = this$;

if(cljs.core.truth_(and__3546__auto____173375))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173375;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____173376 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173376))
{return or__3548__auto____173376;
} else
{var or__3548__auto____173377 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173377))
{return or__3548__auto____173377;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__173403 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____173378 = this$;

if(cljs.core.truth_(and__3546__auto____173378))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173378;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____173379 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173379))
{return or__3548__auto____173379;
} else
{var or__3548__auto____173380 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173380))
{return or__3548__auto____173380;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__173404 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____173381 = this$;

if(cljs.core.truth_(and__3546__auto____173381))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____173381;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____173382 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173382))
{return or__3548__auto____173382;
} else
{var or__3548__auto____173383 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____173383))
{return or__3548__auto____173383;
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
return _invoke__173384.call(this,this$);
case  2 :
return _invoke__173385.call(this,this$,a);
case  3 :
return _invoke__173386.call(this,this$,a,b);
case  4 :
return _invoke__173387.call(this,this$,a,b,c);
case  5 :
return _invoke__173388.call(this,this$,a,b,c,d);
case  6 :
return _invoke__173389.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__173390.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__173391.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__173392.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__173393.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__173394.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__173395.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__173396.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__173397.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__173398.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__173399.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__173400.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__173401.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__173402.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__173403.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__173404.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____173406 = coll;

if(cljs.core.truth_(and__3546__auto____173406))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____173406;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____173407 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173407))
{return or__3548__auto____173407;
} else
{var or__3548__auto____173408 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____173408))
{return or__3548__auto____173408;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____173409 = coll;

if(cljs.core.truth_(and__3546__auto____173409))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____173409;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____173410 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173410))
{return or__3548__auto____173410;
} else
{var or__3548__auto____173411 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____173411))
{return or__3548__auto____173411;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____173412 = coll;

if(cljs.core.truth_(and__3546__auto____173412))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____173412;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____173413 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173413))
{return or__3548__auto____173413;
} else
{var or__3548__auto____173414 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____173414))
{return or__3548__auto____173414;
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
var _nth__173421 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____173415 = coll;

if(cljs.core.truth_(and__3546__auto____173415))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____173415;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____173416 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173416))
{return or__3548__auto____173416;
} else
{var or__3548__auto____173417 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____173417))
{return or__3548__auto____173417;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__173422 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____173418 = coll;

if(cljs.core.truth_(and__3546__auto____173418))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____173418;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____173419 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173419))
{return or__3548__auto____173419;
} else
{var or__3548__auto____173420 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____173420))
{return or__3548__auto____173420;
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
return _nth__173421.call(this,coll,n);
case  3 :
return _nth__173422.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____173424 = coll;

if(cljs.core.truth_(and__3546__auto____173424))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____173424;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____173425 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173425))
{return or__3548__auto____173425;
} else
{var or__3548__auto____173426 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____173426))
{return or__3548__auto____173426;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____173427 = coll;

if(cljs.core.truth_(and__3546__auto____173427))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____173427;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____173428 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173428))
{return or__3548__auto____173428;
} else
{var or__3548__auto____173429 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____173429))
{return or__3548__auto____173429;
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
var _lookup__173436 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____173430 = o;

if(cljs.core.truth_(and__3546__auto____173430))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____173430;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____173431 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____173431))
{return or__3548__auto____173431;
} else
{var or__3548__auto____173432 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____173432))
{return or__3548__auto____173432;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__173437 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____173433 = o;

if(cljs.core.truth_(and__3546__auto____173433))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____173433;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____173434 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____173434))
{return or__3548__auto____173434;
} else
{var or__3548__auto____173435 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____173435))
{return or__3548__auto____173435;
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
return _lookup__173436.call(this,o,k);
case  3 :
return _lookup__173437.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____173439 = coll;

if(cljs.core.truth_(and__3546__auto____173439))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____173439;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____173440 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173440))
{return or__3548__auto____173440;
} else
{var or__3548__auto____173441 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____173441))
{return or__3548__auto____173441;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____173442 = coll;

if(cljs.core.truth_(and__3546__auto____173442))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____173442;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____173443 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173443))
{return or__3548__auto____173443;
} else
{var or__3548__auto____173444 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____173444))
{return or__3548__auto____173444;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____173445 = coll;

if(cljs.core.truth_(and__3546__auto____173445))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____173445;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____173446 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173446))
{return or__3548__auto____173446;
} else
{var or__3548__auto____173447 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____173447))
{return or__3548__auto____173447;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____173448 = coll;

if(cljs.core.truth_(and__3546__auto____173448))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____173448;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____173449 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173449))
{return or__3548__auto____173449;
} else
{var or__3548__auto____173450 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____173450))
{return or__3548__auto____173450;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____173451 = coll;

if(cljs.core.truth_(and__3546__auto____173451))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____173451;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____173452 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173452))
{return or__3548__auto____173452;
} else
{var or__3548__auto____173453 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____173453))
{return or__3548__auto____173453;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____173454 = coll;

if(cljs.core.truth_(and__3546__auto____173454))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____173454;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____173455 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173455))
{return or__3548__auto____173455;
} else
{var or__3548__auto____173456 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____173456))
{return or__3548__auto____173456;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____173457 = coll;

if(cljs.core.truth_(and__3546__auto____173457))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____173457;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____173458 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173458))
{return or__3548__auto____173458;
} else
{var or__3548__auto____173459 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____173459))
{return or__3548__auto____173459;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____173460 = o;

if(cljs.core.truth_(and__3546__auto____173460))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____173460;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____173461 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____173461))
{return or__3548__auto____173461;
} else
{var or__3548__auto____173462 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____173462))
{return or__3548__auto____173462;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____173463 = o;

if(cljs.core.truth_(and__3546__auto____173463))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____173463;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____173464 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____173464))
{return or__3548__auto____173464;
} else
{var or__3548__auto____173465 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____173465))
{return or__3548__auto____173465;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____173466 = o;

if(cljs.core.truth_(and__3546__auto____173466))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____173466;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____173467 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____173467))
{return or__3548__auto____173467;
} else
{var or__3548__auto____173468 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____173468))
{return or__3548__auto____173468;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____173469 = o;

if(cljs.core.truth_(and__3546__auto____173469))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____173469;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____173470 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____173470))
{return or__3548__auto____173470;
} else
{var or__3548__auto____173471 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____173471))
{return or__3548__auto____173471;
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
var _reduce__173478 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____173472 = coll;

if(cljs.core.truth_(and__3546__auto____173472))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____173472;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____173473 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173473))
{return or__3548__auto____173473;
} else
{var or__3548__auto____173474 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____173474))
{return or__3548__auto____173474;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__173479 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____173475 = coll;

if(cljs.core.truth_(and__3546__auto____173475))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____173475;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____173476 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____173476))
{return or__3548__auto____173476;
} else
{var or__3548__auto____173477 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____173477))
{return or__3548__auto____173477;
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
return _reduce__173478.call(this,coll,f);
case  3 :
return _reduce__173479.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____173481 = o;

if(cljs.core.truth_(and__3546__auto____173481))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____173481;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____173482 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____173482))
{return or__3548__auto____173482;
} else
{var or__3548__auto____173483 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____173483))
{return or__3548__auto____173483;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____173484 = o;

if(cljs.core.truth_(and__3546__auto____173484))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____173484;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____173485 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____173485))
{return or__3548__auto____173485;
} else
{var or__3548__auto____173486 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____173486))
{return or__3548__auto____173486;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____173487 = o;

if(cljs.core.truth_(and__3546__auto____173487))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____173487;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____173488 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____173488))
{return or__3548__auto____173488;
} else
{var or__3548__auto____173489 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____173489))
{return or__3548__auto____173489;
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
if(cljs.core.truth_((function (){var and__3546__auto____173490 = o;

if(cljs.core.truth_(and__3546__auto____173490))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____173490;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____173491 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____173491))
{return or__3548__auto____173491;
} else
{var or__3548__auto____173492 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____173492))
{return or__3548__auto____173492;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____173493 = d;

if(cljs.core.truth_(and__3546__auto____173493))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____173493;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____173494 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____173494))
{return or__3548__auto____173494;
} else
{var or__3548__auto____173495 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____173495))
{return or__3548__auto____173495;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____173496 = this$;

if(cljs.core.truth_(and__3546__auto____173496))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____173496;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____173497 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173497))
{return or__3548__auto____173497;
} else
{var or__3548__auto____173498 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____173498))
{return or__3548__auto____173498;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____173499 = this$;

if(cljs.core.truth_(and__3546__auto____173499))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____173499;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____173500 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173500))
{return or__3548__auto____173500;
} else
{var or__3548__auto____173501 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____173501))
{return or__3548__auto____173501;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____173502 = this$;

if(cljs.core.truth_(and__3546__auto____173502))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____173502;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____173503 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____173503))
{return or__3548__auto____173503;
} else
{var or__3548__auto____173504 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____173504))
{return or__3548__auto____173504;
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
var G__173505 = null;
var G__173505__173506 = (function (o,k){
return null;
});
var G__173505__173507 = (function (o,k,not_found){
return not_found;
});
G__173505 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__173505__173506.call(this,o,k);
case  3 :
return G__173505__173507.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173505;
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
var G__173509 = null;
var G__173509__173510 = (function (_,f){
return f.call(null);
});
var G__173509__173511 = (function (_,f,start){
return start;
});
G__173509 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__173509__173510.call(this,_,f);
case  3 :
return G__173509__173511.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173509;
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
var G__173513 = null;
var G__173513__173514 = (function (_,n){
return null;
});
var G__173513__173515 = (function (_,n,not_found){
return not_found;
});
G__173513 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__173513__173514.call(this,_,n);
case  3 :
return G__173513__173515.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173513;
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
var ci_reduce__173523 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__173517 = cljs.core._nth.call(null,cicoll,0);
var n__173518 = 1;

while(true){
if(cljs.core.truth_((n__173518 < cljs.core._count.call(null,cicoll))))
{{
var G__173527 = f.call(null,val__173517,cljs.core._nth.call(null,cicoll,n__173518));
var G__173528 = (n__173518 + 1);
val__173517 = G__173527;
n__173518 = G__173528;
continue;
}
} else
{return val__173517;
}
break;
}
}
});
var ci_reduce__173524 = (function (cicoll,f,val){
var val__173519 = val;
var n__173520 = 0;

while(true){
if(cljs.core.truth_((n__173520 < cljs.core._count.call(null,cicoll))))
{{
var G__173529 = f.call(null,val__173519,cljs.core._nth.call(null,cicoll,n__173520));
var G__173530 = (n__173520 + 1);
val__173519 = G__173529;
n__173520 = G__173530;
continue;
}
} else
{return val__173519;
}
break;
}
});
var ci_reduce__173525 = (function (cicoll,f,val,idx){
var val__173521 = val;
var n__173522 = idx;

while(true){
if(cljs.core.truth_((n__173522 < cljs.core._count.call(null,cicoll))))
{{
var G__173531 = f.call(null,val__173521,cljs.core._nth.call(null,cicoll,n__173522));
var G__173532 = (n__173522 + 1);
val__173521 = G__173531;
n__173522 = G__173532;
continue;
}
} else
{return val__173521;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__173523.call(this,cicoll,f);
case  3 :
return ci_reduce__173524.call(this,cicoll,f,val);
case  4 :
return ci_reduce__173525.call(this,cicoll,f,val,idx);
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
var this__173533 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__173546 = null;
var G__173546__173547 = (function (_,f){
var this__173534 = this;
return cljs.core.ci_reduce.call(null,this__173534.a,f,(this__173534.a[this__173534.i]),(this__173534.i + 1));
});
var G__173546__173548 = (function (_,f,start){
var this__173535 = this;
return cljs.core.ci_reduce.call(null,this__173535.a,f,start,this__173535.i);
});
G__173546 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__173546__173547.call(this,_,f);
case  3 :
return G__173546__173548.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173546;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__173536 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__173537 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__173550 = null;
var G__173550__173551 = (function (coll,n){
var this__173538 = this;
var i__173539 = (n + this__173538.i);

if(cljs.core.truth_((i__173539 < this__173538.a.length)))
{return (this__173538.a[i__173539]);
} else
{return null;
}
});
var G__173550__173552 = (function (coll,n,not_found){
var this__173540 = this;
var i__173541 = (n + this__173540.i);

if(cljs.core.truth_((i__173541 < this__173540.a.length)))
{return (this__173540.a[i__173541]);
} else
{return not_found;
}
});
G__173550 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__173550__173551.call(this,coll,n);
case  3 :
return G__173550__173552.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173550;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__173542 = this;
return (this__173542.a.length - this__173542.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__173543 = this;
return (this__173543.a[this__173543.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__173544 = this;
if(cljs.core.truth_(((this__173544.i + 1) < this__173544.a.length)))
{return (new cljs.core.IndexedSeq(this__173544.a,(this__173544.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__173545 = this;
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
var G__173554 = null;
var G__173554__173555 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__173554__173556 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__173554 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__173554__173555.call(this,array,f);
case  3 :
return G__173554__173556.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173554;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__173558 = null;
var G__173558__173559 = (function (array,k){
return (array[k]);
});
var G__173558__173560 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__173558 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__173558__173559.call(this,array,k);
case  3 :
return G__173558__173560.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173558;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__173562 = null;
var G__173562__173563 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__173562__173564 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__173562 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__173562__173563.call(this,array,n);
case  3 :
return G__173562__173564.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173562;
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
var temp__3698__auto____173566 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____173566))
{var s__173567 = temp__3698__auto____173566;

return cljs.core._first.call(null,s__173567);
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
var G__173568 = cljs.core.next.call(null,s);
s = G__173568;
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
var s__173569 = cljs.core.seq.call(null,x);
var n__173570 = 0;

while(true){
if(cljs.core.truth_(s__173569))
{{
var G__173571 = cljs.core.next.call(null,s__173569);
var G__173572 = (n__173570 + 1);
s__173569 = G__173571;
n__173570 = G__173572;
continue;
}
} else
{return n__173570;
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
var conj__173573 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__173574 = (function() { 
var G__173576__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__173577 = conj.call(null,coll,x);
var G__173578 = cljs.core.first.call(null,xs);
var G__173579 = cljs.core.next.call(null,xs);
coll = G__173577;
x = G__173578;
xs = G__173579;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__173576 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173576__delegate.call(this, coll, x, xs);
};
G__173576.cljs$lang$maxFixedArity = 2;
G__173576.cljs$lang$applyTo = (function (arglist__173580){
var coll = cljs.core.first(arglist__173580);
var x = cljs.core.first(cljs.core.next(arglist__173580));
var xs = cljs.core.rest(cljs.core.next(arglist__173580));
return G__173576__delegate.call(this, coll, x, xs);
});
return G__173576;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__173573.call(this,coll,x);
default:
return conj__173574.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__173574.cljs$lang$applyTo;
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
var nth__173581 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__173582 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__173581.call(this,coll,n);
case  3 :
return nth__173582.call(this,coll,n,not_found);
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
var get__173584 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__173585 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__173584.call(this,o,k);
case  3 :
return get__173585.call(this,o,k,not_found);
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
var assoc__173588 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__173589 = (function() { 
var G__173591__delegate = function (coll,k,v,kvs){
while(true){
var ret__173587 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__173592 = ret__173587;
var G__173593 = cljs.core.first.call(null,kvs);
var G__173594 = cljs.core.second.call(null,kvs);
var G__173595 = cljs.core.nnext.call(null,kvs);
coll = G__173592;
k = G__173593;
v = G__173594;
kvs = G__173595;
continue;
}
} else
{return ret__173587;
}
break;
}
};
var G__173591 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__173591__delegate.call(this, coll, k, v, kvs);
};
G__173591.cljs$lang$maxFixedArity = 3;
G__173591.cljs$lang$applyTo = (function (arglist__173596){
var coll = cljs.core.first(arglist__173596);
var k = cljs.core.first(cljs.core.next(arglist__173596));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__173596)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__173596)));
return G__173591__delegate.call(this, coll, k, v, kvs);
});
return G__173591;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__173588.call(this,coll,k,v);
default:
return assoc__173589.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__173589.cljs$lang$applyTo;
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
var dissoc__173598 = (function (coll){
return coll;
});
var dissoc__173599 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__173600 = (function() { 
var G__173602__delegate = function (coll,k,ks){
while(true){
var ret__173597 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__173603 = ret__173597;
var G__173604 = cljs.core.first.call(null,ks);
var G__173605 = cljs.core.next.call(null,ks);
coll = G__173603;
k = G__173604;
ks = G__173605;
continue;
}
} else
{return ret__173597;
}
break;
}
};
var G__173602 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173602__delegate.call(this, coll, k, ks);
};
G__173602.cljs$lang$maxFixedArity = 2;
G__173602.cljs$lang$applyTo = (function (arglist__173606){
var coll = cljs.core.first(arglist__173606);
var k = cljs.core.first(cljs.core.next(arglist__173606));
var ks = cljs.core.rest(cljs.core.next(arglist__173606));
return G__173602__delegate.call(this, coll, k, ks);
});
return G__173602;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__173598.call(this,coll);
case  2 :
return dissoc__173599.call(this,coll,k);
default:
return dissoc__173600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__173600.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____173607 = o;

if(cljs.core.truth_((function (){var and__3546__auto____173608 = x__451__auto____173607;

if(cljs.core.truth_(and__3546__auto____173608))
{var and__3546__auto____173609 = x__451__auto____173607.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____173609))
{return cljs.core.not.call(null,x__451__auto____173607.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____173609;
}
} else
{return and__3546__auto____173608;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____173607);
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
var disj__173611 = (function (coll){
return coll;
});
var disj__173612 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__173613 = (function() { 
var G__173615__delegate = function (coll,k,ks){
while(true){
var ret__173610 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__173616 = ret__173610;
var G__173617 = cljs.core.first.call(null,ks);
var G__173618 = cljs.core.next.call(null,ks);
coll = G__173616;
k = G__173617;
ks = G__173618;
continue;
}
} else
{return ret__173610;
}
break;
}
};
var G__173615 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173615__delegate.call(this, coll, k, ks);
};
G__173615.cljs$lang$maxFixedArity = 2;
G__173615.cljs$lang$applyTo = (function (arglist__173619){
var coll = cljs.core.first(arglist__173619);
var k = cljs.core.first(cljs.core.next(arglist__173619));
var ks = cljs.core.rest(cljs.core.next(arglist__173619));
return G__173615__delegate.call(this, coll, k, ks);
});
return G__173615;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__173611.call(this,coll);
case  2 :
return disj__173612.call(this,coll,k);
default:
return disj__173613.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__173613.cljs$lang$applyTo;
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
{var x__451__auto____173620 = x;

if(cljs.core.truth_((function (){var and__3546__auto____173621 = x__451__auto____173620;

if(cljs.core.truth_(and__3546__auto____173621))
{var and__3546__auto____173622 = x__451__auto____173620.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____173622))
{return cljs.core.not.call(null,x__451__auto____173620.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____173622;
}
} else
{return and__3546__auto____173621;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____173620);
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
{var x__451__auto____173623 = x;

if(cljs.core.truth_((function (){var and__3546__auto____173624 = x__451__auto____173623;

if(cljs.core.truth_(and__3546__auto____173624))
{var and__3546__auto____173625 = x__451__auto____173623.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____173625))
{return cljs.core.not.call(null,x__451__auto____173623.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____173625;
}
} else
{return and__3546__auto____173624;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____173623);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____173626 = x;

if(cljs.core.truth_((function (){var and__3546__auto____173627 = x__451__auto____173626;

if(cljs.core.truth_(and__3546__auto____173627))
{var and__3546__auto____173628 = x__451__auto____173626.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____173628))
{return cljs.core.not.call(null,x__451__auto____173626.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____173628;
}
} else
{return and__3546__auto____173627;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____173626);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____173629 = x;

if(cljs.core.truth_((function (){var and__3546__auto____173630 = x__451__auto____173629;

if(cljs.core.truth_(and__3546__auto____173630))
{var and__3546__auto____173631 = x__451__auto____173629.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____173631))
{return cljs.core.not.call(null,x__451__auto____173629.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____173631;
}
} else
{return and__3546__auto____173630;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____173629);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____173632 = x;

if(cljs.core.truth_((function (){var and__3546__auto____173633 = x__451__auto____173632;

if(cljs.core.truth_(and__3546__auto____173633))
{var and__3546__auto____173634 = x__451__auto____173632.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____173634))
{return cljs.core.not.call(null,x__451__auto____173632.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____173634;
}
} else
{return and__3546__auto____173633;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____173632);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____173635 = x;

if(cljs.core.truth_((function (){var and__3546__auto____173636 = x__451__auto____173635;

if(cljs.core.truth_(and__3546__auto____173636))
{var and__3546__auto____173637 = x__451__auto____173635.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____173637))
{return cljs.core.not.call(null,x__451__auto____173635.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____173637;
}
} else
{return and__3546__auto____173636;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____173635);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____173638 = x;

if(cljs.core.truth_((function (){var and__3546__auto____173639 = x__451__auto____173638;

if(cljs.core.truth_(and__3546__auto____173639))
{var and__3546__auto____173640 = x__451__auto____173638.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____173640))
{return cljs.core.not.call(null,x__451__auto____173638.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____173640;
}
} else
{return and__3546__auto____173639;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____173638);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__173641 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__173641.push(key);
}));
return keys__173641;
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
{var x__451__auto____173642 = s;

if(cljs.core.truth_((function (){var and__3546__auto____173643 = x__451__auto____173642;

if(cljs.core.truth_(and__3546__auto____173643))
{var and__3546__auto____173644 = x__451__auto____173642.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____173644))
{return cljs.core.not.call(null,x__451__auto____173642.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____173644;
}
} else
{return and__3546__auto____173643;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____173642);
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
var and__3546__auto____173645 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____173645))
{return cljs.core.not.call(null,(function (){var or__3548__auto____173646 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____173646))
{return or__3548__auto____173646;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____173645;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____173647 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____173647))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____173647;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____173648 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____173648))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____173648;
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
var and__3546__auto____173649 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____173649))
{return (n == n.toFixed());
} else
{return and__3546__auto____173649;
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
if(cljs.core.truth_((function (){var and__3546__auto____173650 = coll;

if(cljs.core.truth_(and__3546__auto____173650))
{var and__3546__auto____173651 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____173651))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____173651;
}
} else
{return and__3546__auto____173650;
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
var distinct_QMARK___173656 = (function (x){
return true;
});
var distinct_QMARK___173657 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___173658 = (function() { 
var G__173660__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__173652 = cljs.core.set([y,x]);
var xs__173653 = more;

while(true){
var x__173654 = cljs.core.first.call(null,xs__173653);
var etc__173655 = cljs.core.next.call(null,xs__173653);

if(cljs.core.truth_(xs__173653))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__173652,x__173654)))
{return false;
} else
{{
var G__173661 = cljs.core.conj.call(null,s__173652,x__173654);
var G__173662 = etc__173655;
s__173652 = G__173661;
xs__173653 = G__173662;
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
var G__173660 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173660__delegate.call(this, x, y, more);
};
G__173660.cljs$lang$maxFixedArity = 2;
G__173660.cljs$lang$applyTo = (function (arglist__173663){
var x = cljs.core.first(arglist__173663);
var y = cljs.core.first(cljs.core.next(arglist__173663));
var more = cljs.core.rest(cljs.core.next(arglist__173663));
return G__173660__delegate.call(this, x, y, more);
});
return G__173660;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___173656.call(this,x);
case  2 :
return distinct_QMARK___173657.call(this,x,y);
default:
return distinct_QMARK___173658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___173658.cljs$lang$applyTo;
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
var r__173664 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__173664)))
{return r__173664;
} else
{if(cljs.core.truth_(r__173664))
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
var sort__173666 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__173667 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__173665 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__173665,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__173665);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__173666.call(this,comp);
case  2 :
return sort__173667.call(this,comp,coll);
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
var sort_by__173669 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__173670 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__173669.call(this,keyfn,comp);
case  3 :
return sort_by__173670.call(this,keyfn,comp,coll);
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
var reduce__173672 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__173673 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__173672.call(this,f,val);
case  3 :
return reduce__173673.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__173679 = (function (f,coll){
var temp__3695__auto____173675 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____173675))
{var s__173676 = temp__3695__auto____173675;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__173676),cljs.core.next.call(null,s__173676));
} else
{return f.call(null);
}
});
var seq_reduce__173680 = (function (f,val,coll){
var val__173677 = val;
var coll__173678 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__173678))
{{
var G__173682 = f.call(null,val__173677,cljs.core.first.call(null,coll__173678));
var G__173683 = cljs.core.next.call(null,coll__173678);
val__173677 = G__173682;
coll__173678 = G__173683;
continue;
}
} else
{return val__173677;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__173679.call(this,f,val);
case  3 :
return seq_reduce__173680.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__173684 = null;
var G__173684__173685 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__173684__173686 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__173684 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__173684__173685.call(this,coll,f);
case  3 :
return G__173684__173686.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173684;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___173688 = (function (){
return 0;
});
var _PLUS___173689 = (function (x){
return x;
});
var _PLUS___173690 = (function (x,y){
return (x + y);
});
var _PLUS___173691 = (function() { 
var G__173693__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__173693 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173693__delegate.call(this, x, y, more);
};
G__173693.cljs$lang$maxFixedArity = 2;
G__173693.cljs$lang$applyTo = (function (arglist__173694){
var x = cljs.core.first(arglist__173694);
var y = cljs.core.first(cljs.core.next(arglist__173694));
var more = cljs.core.rest(cljs.core.next(arglist__173694));
return G__173693__delegate.call(this, x, y, more);
});
return G__173693;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___173688.call(this);
case  1 :
return _PLUS___173689.call(this,x);
case  2 :
return _PLUS___173690.call(this,x,y);
default:
return _PLUS___173691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___173691.cljs$lang$applyTo;
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
var ___173695 = (function (x){
return (- x);
});
var ___173696 = (function (x,y){
return (x - y);
});
var ___173697 = (function() { 
var G__173699__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__173699 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173699__delegate.call(this, x, y, more);
};
G__173699.cljs$lang$maxFixedArity = 2;
G__173699.cljs$lang$applyTo = (function (arglist__173700){
var x = cljs.core.first(arglist__173700);
var y = cljs.core.first(cljs.core.next(arglist__173700));
var more = cljs.core.rest(cljs.core.next(arglist__173700));
return G__173699__delegate.call(this, x, y, more);
});
return G__173699;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___173695.call(this,x);
case  2 :
return ___173696.call(this,x,y);
default:
return ___173697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___173697.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___173701 = (function (){
return 1;
});
var _STAR___173702 = (function (x){
return x;
});
var _STAR___173703 = (function (x,y){
return (x * y);
});
var _STAR___173704 = (function() { 
var G__173706__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__173706 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173706__delegate.call(this, x, y, more);
};
G__173706.cljs$lang$maxFixedArity = 2;
G__173706.cljs$lang$applyTo = (function (arglist__173707){
var x = cljs.core.first(arglist__173707);
var y = cljs.core.first(cljs.core.next(arglist__173707));
var more = cljs.core.rest(cljs.core.next(arglist__173707));
return G__173706__delegate.call(this, x, y, more);
});
return G__173706;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___173701.call(this);
case  1 :
return _STAR___173702.call(this,x);
case  2 :
return _STAR___173703.call(this,x,y);
default:
return _STAR___173704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___173704.cljs$lang$applyTo;
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
var _SLASH___173708 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___173709 = (function (x,y){
return (x / y);
});
var _SLASH___173710 = (function() { 
var G__173712__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__173712 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173712__delegate.call(this, x, y, more);
};
G__173712.cljs$lang$maxFixedArity = 2;
G__173712.cljs$lang$applyTo = (function (arglist__173713){
var x = cljs.core.first(arglist__173713);
var y = cljs.core.first(cljs.core.next(arglist__173713));
var more = cljs.core.rest(cljs.core.next(arglist__173713));
return G__173712__delegate.call(this, x, y, more);
});
return G__173712;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___173708.call(this,x);
case  2 :
return _SLASH___173709.call(this,x,y);
default:
return _SLASH___173710.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___173710.cljs$lang$applyTo;
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
var _LT___173714 = (function (x){
return true;
});
var _LT___173715 = (function (x,y){
return (x < y);
});
var _LT___173716 = (function() { 
var G__173718__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__173719 = y;
var G__173720 = cljs.core.first.call(null,more);
var G__173721 = cljs.core.next.call(null,more);
x = G__173719;
y = G__173720;
more = G__173721;
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
var G__173718 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173718__delegate.call(this, x, y, more);
};
G__173718.cljs$lang$maxFixedArity = 2;
G__173718.cljs$lang$applyTo = (function (arglist__173722){
var x = cljs.core.first(arglist__173722);
var y = cljs.core.first(cljs.core.next(arglist__173722));
var more = cljs.core.rest(cljs.core.next(arglist__173722));
return G__173718__delegate.call(this, x, y, more);
});
return G__173718;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___173714.call(this,x);
case  2 :
return _LT___173715.call(this,x,y);
default:
return _LT___173716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___173716.cljs$lang$applyTo;
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
var _LT__EQ___173723 = (function (x){
return true;
});
var _LT__EQ___173724 = (function (x,y){
return (x <= y);
});
var _LT__EQ___173725 = (function() { 
var G__173727__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__173728 = y;
var G__173729 = cljs.core.first.call(null,more);
var G__173730 = cljs.core.next.call(null,more);
x = G__173728;
y = G__173729;
more = G__173730;
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
var G__173727 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173727__delegate.call(this, x, y, more);
};
G__173727.cljs$lang$maxFixedArity = 2;
G__173727.cljs$lang$applyTo = (function (arglist__173731){
var x = cljs.core.first(arglist__173731);
var y = cljs.core.first(cljs.core.next(arglist__173731));
var more = cljs.core.rest(cljs.core.next(arglist__173731));
return G__173727__delegate.call(this, x, y, more);
});
return G__173727;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___173723.call(this,x);
case  2 :
return _LT__EQ___173724.call(this,x,y);
default:
return _LT__EQ___173725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___173725.cljs$lang$applyTo;
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
var _GT___173732 = (function (x){
return true;
});
var _GT___173733 = (function (x,y){
return (x > y);
});
var _GT___173734 = (function() { 
var G__173736__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__173737 = y;
var G__173738 = cljs.core.first.call(null,more);
var G__173739 = cljs.core.next.call(null,more);
x = G__173737;
y = G__173738;
more = G__173739;
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
var G__173736 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173736__delegate.call(this, x, y, more);
};
G__173736.cljs$lang$maxFixedArity = 2;
G__173736.cljs$lang$applyTo = (function (arglist__173740){
var x = cljs.core.first(arglist__173740);
var y = cljs.core.first(cljs.core.next(arglist__173740));
var more = cljs.core.rest(cljs.core.next(arglist__173740));
return G__173736__delegate.call(this, x, y, more);
});
return G__173736;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___173732.call(this,x);
case  2 :
return _GT___173733.call(this,x,y);
default:
return _GT___173734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___173734.cljs$lang$applyTo;
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
var _GT__EQ___173741 = (function (x){
return true;
});
var _GT__EQ___173742 = (function (x,y){
return (x >= y);
});
var _GT__EQ___173743 = (function() { 
var G__173745__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__173746 = y;
var G__173747 = cljs.core.first.call(null,more);
var G__173748 = cljs.core.next.call(null,more);
x = G__173746;
y = G__173747;
more = G__173748;
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
var G__173745 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173745__delegate.call(this, x, y, more);
};
G__173745.cljs$lang$maxFixedArity = 2;
G__173745.cljs$lang$applyTo = (function (arglist__173749){
var x = cljs.core.first(arglist__173749);
var y = cljs.core.first(cljs.core.next(arglist__173749));
var more = cljs.core.rest(cljs.core.next(arglist__173749));
return G__173745__delegate.call(this, x, y, more);
});
return G__173745;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___173741.call(this,x);
case  2 :
return _GT__EQ___173742.call(this,x,y);
default:
return _GT__EQ___173743.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___173743.cljs$lang$applyTo;
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
var max__173750 = (function (x){
return x;
});
var max__173751 = (function (x,y){
return ((x > y) ? x : y);
});
var max__173752 = (function() { 
var G__173754__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__173754 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173754__delegate.call(this, x, y, more);
};
G__173754.cljs$lang$maxFixedArity = 2;
G__173754.cljs$lang$applyTo = (function (arglist__173755){
var x = cljs.core.first(arglist__173755);
var y = cljs.core.first(cljs.core.next(arglist__173755));
var more = cljs.core.rest(cljs.core.next(arglist__173755));
return G__173754__delegate.call(this, x, y, more);
});
return G__173754;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__173750.call(this,x);
case  2 :
return max__173751.call(this,x,y);
default:
return max__173752.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__173752.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__173756 = (function (x){
return x;
});
var min__173757 = (function (x,y){
return ((x < y) ? x : y);
});
var min__173758 = (function() { 
var G__173760__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__173760 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173760__delegate.call(this, x, y, more);
};
G__173760.cljs$lang$maxFixedArity = 2;
G__173760.cljs$lang$applyTo = (function (arglist__173761){
var x = cljs.core.first(arglist__173761);
var y = cljs.core.first(cljs.core.next(arglist__173761));
var more = cljs.core.rest(cljs.core.next(arglist__173761));
return G__173760__delegate.call(this, x, y, more);
});
return G__173760;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__173756.call(this,x);
case  2 :
return min__173757.call(this,x,y);
default:
return min__173758.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__173758.cljs$lang$applyTo;
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
var rem__173762 = (n % d);

return cljs.core.fix.call(null,((n - rem__173762) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__173763 = cljs.core.quot.call(null,n,d);

return (n - (d * q__173763));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__173764 = (function (){
return Math.random.call(null);
});
var rand__173765 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__173764.call(this);
case  1 :
return rand__173765.call(this,n);
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
var _EQ__EQ___173767 = (function (x){
return true;
});
var _EQ__EQ___173768 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___173769 = (function() { 
var G__173771__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__173772 = y;
var G__173773 = cljs.core.first.call(null,more);
var G__173774 = cljs.core.next.call(null,more);
x = G__173772;
y = G__173773;
more = G__173774;
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
var G__173771 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173771__delegate.call(this, x, y, more);
};
G__173771.cljs$lang$maxFixedArity = 2;
G__173771.cljs$lang$applyTo = (function (arglist__173775){
var x = cljs.core.first(arglist__173775);
var y = cljs.core.first(cljs.core.next(arglist__173775));
var more = cljs.core.rest(cljs.core.next(arglist__173775));
return G__173771__delegate.call(this, x, y, more);
});
return G__173771;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___173767.call(this,x);
case  2 :
return _EQ__EQ___173768.call(this,x,y);
default:
return _EQ__EQ___173769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___173769.cljs$lang$applyTo;
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
var n__173776 = n;
var xs__173777 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____173778 = xs__173777;

if(cljs.core.truth_(and__3546__auto____173778))
{return (n__173776 > 0);
} else
{return and__3546__auto____173778;
}
})()))
{{
var G__173779 = (n__173776 - 1);
var G__173780 = cljs.core.next.call(null,xs__173777);
n__173776 = G__173779;
xs__173777 = G__173780;
continue;
}
} else
{return xs__173777;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__173785 = null;
var G__173785__173786 = (function (coll,n){
var temp__3695__auto____173781 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____173781))
{var xs__173782 = temp__3695__auto____173781;

return cljs.core.first.call(null,xs__173782);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__173785__173787 = (function (coll,n,not_found){
var temp__3695__auto____173783 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____173783))
{var xs__173784 = temp__3695__auto____173783;

return cljs.core.first.call(null,xs__173784);
} else
{return not_found;
}
});
G__173785 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__173785__173786.call(this,coll,n);
case  3 :
return G__173785__173787.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173785;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___173789 = (function (){
return "";
});
var str_STAR___173790 = (function (x){
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
var str_STAR___173791 = (function() { 
var G__173793__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__173794 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__173795 = cljs.core.next.call(null,more);
sb = G__173794;
more = G__173795;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__173793 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__173793__delegate.call(this, x, ys);
};
G__173793.cljs$lang$maxFixedArity = 1;
G__173793.cljs$lang$applyTo = (function (arglist__173796){
var x = cljs.core.first(arglist__173796);
var ys = cljs.core.rest(arglist__173796);
return G__173793__delegate.call(this, x, ys);
});
return G__173793;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___173789.call(this);
case  1 :
return str_STAR___173790.call(this,x);
default:
return str_STAR___173791.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___173791.cljs$lang$applyTo;
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
var str__173797 = (function (){
return "";
});
var str__173798 = (function (x){
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
var str__173799 = (function() { 
var G__173801__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__173802 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__173803 = cljs.core.next.call(null,more);
sb = G__173802;
more = G__173803;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__173801 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__173801__delegate.call(this, x, ys);
};
G__173801.cljs$lang$maxFixedArity = 1;
G__173801.cljs$lang$applyTo = (function (arglist__173804){
var x = cljs.core.first(arglist__173804);
var ys = cljs.core.rest(arglist__173804);
return G__173801__delegate.call(this, x, ys);
});
return G__173801;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__173797.call(this);
case  1 :
return str__173798.call(this,x);
default:
return str__173799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__173799.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__173805 = (function (s,start){
return s.substring(start);
});
var subs__173806 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__173805.call(this,s,start);
case  3 :
return subs__173806.call(this,s,start,end);
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
var symbol__173808 = (function (name){
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
var symbol__173809 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__173808.call(this,ns);
case  2 :
return symbol__173809.call(this,ns,name);
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
var keyword__173811 = (function (name){
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
var keyword__173812 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__173811.call(this,ns);
case  2 :
return keyword__173812.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__173814 = cljs.core.seq.call(null,x);
var ys__173815 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__173814 === null)))
{return (ys__173815 === null);
} else
{if(cljs.core.truth_((ys__173815 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__173814),cljs.core.first.call(null,ys__173815))))
{{
var G__173816 = cljs.core.next.call(null,xs__173814);
var G__173817 = cljs.core.next.call(null,ys__173815);
xs__173814 = G__173816;
ys__173815 = G__173817;
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
return cljs.core.reduce.call(null,(function (p1__173818_SHARP_,p2__173819_SHARP_){
return cljs.core.hash_combine.call(null,p1__173818_SHARP_,cljs.core.hash.call(null,p2__173819_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__173820__173821 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__173820__173821))
{var G__173823__173825 = cljs.core.first.call(null,G__173820__173821);
var vec__173824__173826 = G__173823__173825;
var key_name__173827 = cljs.core.nth.call(null,vec__173824__173826,0,null);
var f__173828 = cljs.core.nth.call(null,vec__173824__173826,1,null);
var G__173820__173829 = G__173820__173821;

var G__173823__173830 = G__173823__173825;
var G__173820__173831 = G__173820__173829;

while(true){
var vec__173832__173833 = G__173823__173830;
var key_name__173834 = cljs.core.nth.call(null,vec__173832__173833,0,null);
var f__173835 = cljs.core.nth.call(null,vec__173832__173833,1,null);
var G__173820__173836 = G__173820__173831;

var str_name__173837 = cljs.core.name.call(null,key_name__173834);

obj[str_name__173837] = f__173835;
var temp__3698__auto____173838 = cljs.core.next.call(null,G__173820__173836);

if(cljs.core.truth_(temp__3698__auto____173838))
{var G__173820__173839 = temp__3698__auto____173838;

{
var G__173840 = cljs.core.first.call(null,G__173820__173839);
var G__173841 = G__173820__173839;
G__173823__173830 = G__173840;
G__173820__173831 = G__173841;
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
var this__173842 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__173843 = this;
return (new cljs.core.List(this__173843.meta,o,coll,(this__173843.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__173844 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__173845 = this;
return this__173845.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__173846 = this;
return this__173846.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__173847 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__173848 = this;
return this__173848.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__173849 = this;
return this__173849.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__173850 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__173851 = this;
return (new cljs.core.List(meta,this__173851.first,this__173851.rest,this__173851.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__173852 = this;
return this__173852.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__173853 = this;
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
var this__173854 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__173855 = this;
return (new cljs.core.List(this__173855.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__173856 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__173857 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__173858 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__173859 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__173860 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__173861 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__173862 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__173863 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__173864 = this;
return this__173864.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__173865 = this;
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
list.cljs$lang$applyTo = (function (arglist__173866){
var items = cljs.core.seq( arglist__173866 );;
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
var this__173867 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__173868 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__173869 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__173870 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__173870.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__173871 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__173872 = this;
return this__173872.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__173873 = this;
if(cljs.core.truth_((this__173873.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__173873.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__173874 = this;
return this__173874.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__173875 = this;
return (new cljs.core.Cons(meta,this__173875.first,this__173875.rest));
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
var G__173876 = null;
var G__173876__173877 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__173876__173878 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__173876 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__173876__173877.call(this,string,f);
case  3 :
return G__173876__173878.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173876;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__173880 = null;
var G__173880__173881 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__173880__173882 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__173880 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__173880__173881.call(this,string,k);
case  3 :
return G__173880__173882.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173880;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__173884 = null;
var G__173884__173885 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__173884__173886 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__173884 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__173884__173885.call(this,string,n);
case  3 :
return G__173884__173886.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173884;
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
var G__173894 = null;
var G__173894__173895 = (function (tsym173888,coll){
var tsym173888__173890 = this;

var this$__173891 = tsym173888__173890;

return cljs.core.get.call(null,coll,this$__173891.toString());
});
var G__173894__173896 = (function (tsym173889,coll,not_found){
var tsym173889__173892 = this;

var this$__173893 = tsym173889__173892;

return cljs.core.get.call(null,coll,this$__173893.toString(),not_found);
});
G__173894 = function(tsym173889,coll,not_found){
switch(arguments.length){
case  2 :
return G__173894__173895.call(this,tsym173889,coll);
case  3 :
return G__173894__173896.call(this,tsym173889,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__173894;
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
var x__173898 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__173898;
} else
{lazy_seq.x = x__173898.call(null);
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
var this__173899 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__173900 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__173901 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__173902 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__173902.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__173903 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__173904 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__173905 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__173906 = this;
return this__173906.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__173907 = this;
return (new cljs.core.LazySeq(meta,this__173907.realized,this__173907.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__173908 = [];

var s__173909 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__173909)))
{ary__173908.push(cljs.core.first.call(null,s__173909));
{
var G__173910 = cljs.core.next.call(null,s__173909);
s__173909 = G__173910;
continue;
}
} else
{return ary__173908;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__173911 = s;
var i__173912 = n;
var sum__173913 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____173914 = (i__173912 > 0);

if(cljs.core.truth_(and__3546__auto____173914))
{return cljs.core.seq.call(null,s__173911);
} else
{return and__3546__auto____173914;
}
})()))
{{
var G__173915 = cljs.core.next.call(null,s__173911);
var G__173916 = (i__173912 - 1);
var G__173917 = (sum__173913 + 1);
s__173911 = G__173915;
i__173912 = G__173916;
sum__173913 = G__173917;
continue;
}
} else
{return sum__173913;
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
var concat__173921 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__173922 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__173923 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__173918 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__173918))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__173918),concat.call(null,cljs.core.rest.call(null,s__173918),y));
} else
{return y;
}
})));
});
var concat__173924 = (function() { 
var G__173926__delegate = function (x,y,zs){
var cat__173920 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__173919 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__173919))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__173919),cat.call(null,cljs.core.rest.call(null,xys__173919),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__173920.call(null,concat.call(null,x,y),zs);
};
var G__173926 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173926__delegate.call(this, x, y, zs);
};
G__173926.cljs$lang$maxFixedArity = 2;
G__173926.cljs$lang$applyTo = (function (arglist__173927){
var x = cljs.core.first(arglist__173927);
var y = cljs.core.first(cljs.core.next(arglist__173927));
var zs = cljs.core.rest(cljs.core.next(arglist__173927));
return G__173926__delegate.call(this, x, y, zs);
});
return G__173926;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__173921.call(this);
case  1 :
return concat__173922.call(this,x);
case  2 :
return concat__173923.call(this,x,y);
default:
return concat__173924.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__173924.cljs$lang$applyTo;
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
var list_STAR___173928 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___173929 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___173930 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___173931 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___173932 = (function() { 
var G__173934__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__173934 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__173934__delegate.call(this, a, b, c, d, more);
};
G__173934.cljs$lang$maxFixedArity = 4;
G__173934.cljs$lang$applyTo = (function (arglist__173935){
var a = cljs.core.first(arglist__173935);
var b = cljs.core.first(cljs.core.next(arglist__173935));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__173935)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__173935))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__173935))));
return G__173934__delegate.call(this, a, b, c, d, more);
});
return G__173934;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___173928.call(this,a);
case  2 :
return list_STAR___173929.call(this,a,b);
case  3 :
return list_STAR___173930.call(this,a,b,c);
case  4 :
return list_STAR___173931.call(this,a,b,c,d);
default:
return list_STAR___173932.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___173932.cljs$lang$applyTo;
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
var apply__173945 = (function (f,args){
var fixed_arity__173936 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__173936 + 1)) <= fixed_arity__173936)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__173946 = (function (f,x,args){
var arglist__173937 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__173938 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__173937,fixed_arity__173938) <= fixed_arity__173938)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__173937));
} else
{return f.cljs$lang$applyTo(arglist__173937);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__173937));
}
});
var apply__173947 = (function (f,x,y,args){
var arglist__173939 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__173940 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__173939,fixed_arity__173940) <= fixed_arity__173940)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__173939));
} else
{return f.cljs$lang$applyTo(arglist__173939);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__173939));
}
});
var apply__173948 = (function (f,x,y,z,args){
var arglist__173941 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__173942 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__173941,fixed_arity__173942) <= fixed_arity__173942)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__173941));
} else
{return f.cljs$lang$applyTo(arglist__173941);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__173941));
}
});
var apply__173949 = (function() { 
var G__173951__delegate = function (f,a,b,c,d,args){
var arglist__173943 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__173944 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__173943,fixed_arity__173944) <= fixed_arity__173944)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__173943));
} else
{return f.cljs$lang$applyTo(arglist__173943);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__173943));
}
};
var G__173951 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__173951__delegate.call(this, f, a, b, c, d, args);
};
G__173951.cljs$lang$maxFixedArity = 5;
G__173951.cljs$lang$applyTo = (function (arglist__173952){
var f = cljs.core.first(arglist__173952);
var a = cljs.core.first(cljs.core.next(arglist__173952));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__173952)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__173952))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__173952)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__173952)))));
return G__173951__delegate.call(this, f, a, b, c, d, args);
});
return G__173951;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__173945.call(this,f,a);
case  3 :
return apply__173946.call(this,f,a,b);
case  4 :
return apply__173947.call(this,f,a,b,c);
case  5 :
return apply__173948.call(this,f,a,b,c,d);
default:
return apply__173949.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__173949.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__173953){
var obj = cljs.core.first(arglist__173953);
var f = cljs.core.first(cljs.core.next(arglist__173953));
var args = cljs.core.rest(cljs.core.next(arglist__173953));
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
var not_EQ___173954 = (function (x){
return false;
});
var not_EQ___173955 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___173956 = (function() { 
var G__173958__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__173958 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173958__delegate.call(this, x, y, more);
};
G__173958.cljs$lang$maxFixedArity = 2;
G__173958.cljs$lang$applyTo = (function (arglist__173959){
var x = cljs.core.first(arglist__173959);
var y = cljs.core.first(cljs.core.next(arglist__173959));
var more = cljs.core.rest(cljs.core.next(arglist__173959));
return G__173958__delegate.call(this, x, y, more);
});
return G__173958;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___173954.call(this,x);
case  2 :
return not_EQ___173955.call(this,x,y);
default:
return not_EQ___173956.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___173956.cljs$lang$applyTo;
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
var G__173960 = pred;
var G__173961 = cljs.core.next.call(null,coll);
pred = G__173960;
coll = G__173961;
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
{var or__3548__auto____173962 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____173962))
{return or__3548__auto____173962;
} else
{{
var G__173963 = pred;
var G__173964 = cljs.core.next.call(null,coll);
pred = G__173963;
coll = G__173964;
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
var G__173965 = null;
var G__173965__173966 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__173965__173967 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__173965__173968 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__173965__173969 = (function() { 
var G__173971__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__173971 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__173971__delegate.call(this, x, y, zs);
};
G__173971.cljs$lang$maxFixedArity = 2;
G__173971.cljs$lang$applyTo = (function (arglist__173972){
var x = cljs.core.first(arglist__173972);
var y = cljs.core.first(cljs.core.next(arglist__173972));
var zs = cljs.core.rest(cljs.core.next(arglist__173972));
return G__173971__delegate.call(this, x, y, zs);
});
return G__173971;
})()
;
G__173965 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__173965__173966.call(this);
case  1 :
return G__173965__173967.call(this,x);
case  2 :
return G__173965__173968.call(this,x,y);
default:
return G__173965__173969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__173965.cljs$lang$maxFixedArity = 2;
G__173965.cljs$lang$applyTo = G__173965__173969.cljs$lang$applyTo;
return G__173965;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__173973__delegate = function (args){
return x;
};
var G__173973 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__173973__delegate.call(this, args);
};
G__173973.cljs$lang$maxFixedArity = 0;
G__173973.cljs$lang$applyTo = (function (arglist__173974){
var args = cljs.core.seq( arglist__173974 );;
return G__173973__delegate.call(this, args);
});
return G__173973;
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
var comp__173978 = (function (){
return cljs.core.identity;
});
var comp__173979 = (function (f){
return f;
});
var comp__173980 = (function (f,g){
return (function() {
var G__173984 = null;
var G__173984__173985 = (function (){
return f.call(null,g.call(null));
});
var G__173984__173986 = (function (x){
return f.call(null,g.call(null,x));
});
var G__173984__173987 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__173984__173988 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__173984__173989 = (function() { 
var G__173991__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__173991 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__173991__delegate.call(this, x, y, z, args);
};
G__173991.cljs$lang$maxFixedArity = 3;
G__173991.cljs$lang$applyTo = (function (arglist__173992){
var x = cljs.core.first(arglist__173992);
var y = cljs.core.first(cljs.core.next(arglist__173992));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__173992)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__173992)));
return G__173991__delegate.call(this, x, y, z, args);
});
return G__173991;
})()
;
G__173984 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__173984__173985.call(this);
case  1 :
return G__173984__173986.call(this,x);
case  2 :
return G__173984__173987.call(this,x,y);
case  3 :
return G__173984__173988.call(this,x,y,z);
default:
return G__173984__173989.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__173984.cljs$lang$maxFixedArity = 3;
G__173984.cljs$lang$applyTo = G__173984__173989.cljs$lang$applyTo;
return G__173984;
})()
});
var comp__173981 = (function (f,g,h){
return (function() {
var G__173993 = null;
var G__173993__173994 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__173993__173995 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__173993__173996 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__173993__173997 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__173993__173998 = (function() { 
var G__174000__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__174000 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174000__delegate.call(this, x, y, z, args);
};
G__174000.cljs$lang$maxFixedArity = 3;
G__174000.cljs$lang$applyTo = (function (arglist__174001){
var x = cljs.core.first(arglist__174001);
var y = cljs.core.first(cljs.core.next(arglist__174001));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174001)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174001)));
return G__174000__delegate.call(this, x, y, z, args);
});
return G__174000;
})()
;
G__173993 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__173993__173994.call(this);
case  1 :
return G__173993__173995.call(this,x);
case  2 :
return G__173993__173996.call(this,x,y);
case  3 :
return G__173993__173997.call(this,x,y,z);
default:
return G__173993__173998.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__173993.cljs$lang$maxFixedArity = 3;
G__173993.cljs$lang$applyTo = G__173993__173998.cljs$lang$applyTo;
return G__173993;
})()
});
var comp__173982 = (function() { 
var G__174002__delegate = function (f1,f2,f3,fs){
var fs__173975 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__174003__delegate = function (args){
var ret__173976 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__173975),args);
var fs__173977 = cljs.core.next.call(null,fs__173975);

while(true){
if(cljs.core.truth_(fs__173977))
{{
var G__174004 = cljs.core.first.call(null,fs__173977).call(null,ret__173976);
var G__174005 = cljs.core.next.call(null,fs__173977);
ret__173976 = G__174004;
fs__173977 = G__174005;
continue;
}
} else
{return ret__173976;
}
break;
}
};
var G__174003 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__174003__delegate.call(this, args);
};
G__174003.cljs$lang$maxFixedArity = 0;
G__174003.cljs$lang$applyTo = (function (arglist__174006){
var args = cljs.core.seq( arglist__174006 );;
return G__174003__delegate.call(this, args);
});
return G__174003;
})()
;
};
var G__174002 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174002__delegate.call(this, f1, f2, f3, fs);
};
G__174002.cljs$lang$maxFixedArity = 3;
G__174002.cljs$lang$applyTo = (function (arglist__174007){
var f1 = cljs.core.first(arglist__174007);
var f2 = cljs.core.first(cljs.core.next(arglist__174007));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174007)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174007)));
return G__174002__delegate.call(this, f1, f2, f3, fs);
});
return G__174002;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__173978.call(this);
case  1 :
return comp__173979.call(this,f1);
case  2 :
return comp__173980.call(this,f1,f2);
case  3 :
return comp__173981.call(this,f1,f2,f3);
default:
return comp__173982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__173982.cljs$lang$applyTo;
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
var partial__174008 = (function (f,arg1){
return (function() { 
var G__174013__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__174013 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__174013__delegate.call(this, args);
};
G__174013.cljs$lang$maxFixedArity = 0;
G__174013.cljs$lang$applyTo = (function (arglist__174014){
var args = cljs.core.seq( arglist__174014 );;
return G__174013__delegate.call(this, args);
});
return G__174013;
})()
;
});
var partial__174009 = (function (f,arg1,arg2){
return (function() { 
var G__174015__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__174015 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__174015__delegate.call(this, args);
};
G__174015.cljs$lang$maxFixedArity = 0;
G__174015.cljs$lang$applyTo = (function (arglist__174016){
var args = cljs.core.seq( arglist__174016 );;
return G__174015__delegate.call(this, args);
});
return G__174015;
})()
;
});
var partial__174010 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__174017__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__174017 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__174017__delegate.call(this, args);
};
G__174017.cljs$lang$maxFixedArity = 0;
G__174017.cljs$lang$applyTo = (function (arglist__174018){
var args = cljs.core.seq( arglist__174018 );;
return G__174017__delegate.call(this, args);
});
return G__174017;
})()
;
});
var partial__174011 = (function() { 
var G__174019__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__174020__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__174020 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__174020__delegate.call(this, args);
};
G__174020.cljs$lang$maxFixedArity = 0;
G__174020.cljs$lang$applyTo = (function (arglist__174021){
var args = cljs.core.seq( arglist__174021 );;
return G__174020__delegate.call(this, args);
});
return G__174020;
})()
;
};
var G__174019 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__174019__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__174019.cljs$lang$maxFixedArity = 4;
G__174019.cljs$lang$applyTo = (function (arglist__174022){
var f = cljs.core.first(arglist__174022);
var arg1 = cljs.core.first(cljs.core.next(arglist__174022));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174022)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__174022))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__174022))));
return G__174019__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__174019;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__174008.call(this,f,arg1);
case  3 :
return partial__174009.call(this,f,arg1,arg2);
case  4 :
return partial__174010.call(this,f,arg1,arg2,arg3);
default:
return partial__174011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__174011.cljs$lang$applyTo;
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
var fnil__174023 = (function (f,x){
return (function() {
var G__174027 = null;
var G__174027__174028 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__174027__174029 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__174027__174030 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__174027__174031 = (function() { 
var G__174033__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__174033 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174033__delegate.call(this, a, b, c, ds);
};
G__174033.cljs$lang$maxFixedArity = 3;
G__174033.cljs$lang$applyTo = (function (arglist__174034){
var a = cljs.core.first(arglist__174034);
var b = cljs.core.first(cljs.core.next(arglist__174034));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174034)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174034)));
return G__174033__delegate.call(this, a, b, c, ds);
});
return G__174033;
})()
;
G__174027 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__174027__174028.call(this,a);
case  2 :
return G__174027__174029.call(this,a,b);
case  3 :
return G__174027__174030.call(this,a,b,c);
default:
return G__174027__174031.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__174027.cljs$lang$maxFixedArity = 3;
G__174027.cljs$lang$applyTo = G__174027__174031.cljs$lang$applyTo;
return G__174027;
})()
});
var fnil__174024 = (function (f,x,y){
return (function() {
var G__174035 = null;
var G__174035__174036 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__174035__174037 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__174035__174038 = (function() { 
var G__174040__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__174040 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174040__delegate.call(this, a, b, c, ds);
};
G__174040.cljs$lang$maxFixedArity = 3;
G__174040.cljs$lang$applyTo = (function (arglist__174041){
var a = cljs.core.first(arglist__174041);
var b = cljs.core.first(cljs.core.next(arglist__174041));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174041)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174041)));
return G__174040__delegate.call(this, a, b, c, ds);
});
return G__174040;
})()
;
G__174035 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__174035__174036.call(this,a,b);
case  3 :
return G__174035__174037.call(this,a,b,c);
default:
return G__174035__174038.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__174035.cljs$lang$maxFixedArity = 3;
G__174035.cljs$lang$applyTo = G__174035__174038.cljs$lang$applyTo;
return G__174035;
})()
});
var fnil__174025 = (function (f,x,y,z){
return (function() {
var G__174042 = null;
var G__174042__174043 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__174042__174044 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__174042__174045 = (function() { 
var G__174047__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__174047 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174047__delegate.call(this, a, b, c, ds);
};
G__174047.cljs$lang$maxFixedArity = 3;
G__174047.cljs$lang$applyTo = (function (arglist__174048){
var a = cljs.core.first(arglist__174048);
var b = cljs.core.first(cljs.core.next(arglist__174048));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174048)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174048)));
return G__174047__delegate.call(this, a, b, c, ds);
});
return G__174047;
})()
;
G__174042 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__174042__174043.call(this,a,b);
case  3 :
return G__174042__174044.call(this,a,b,c);
default:
return G__174042__174045.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__174042.cljs$lang$maxFixedArity = 3;
G__174042.cljs$lang$applyTo = G__174042__174045.cljs$lang$applyTo;
return G__174042;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__174023.call(this,f,x);
case  3 :
return fnil__174024.call(this,f,x,y);
case  4 :
return fnil__174025.call(this,f,x,y,z);
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
var mapi__174051 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____174049 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174049))
{var s__174050 = temp__3698__auto____174049;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__174050)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__174050)));
} else
{return null;
}
})));
});

return mapi__174051.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____174052 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174052))
{var s__174053 = temp__3698__auto____174052;

var x__174054 = f.call(null,cljs.core.first.call(null,s__174053));

if(cljs.core.truth_((x__174054 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__174053));
} else
{return cljs.core.cons.call(null,x__174054,keep.call(null,f,cljs.core.rest.call(null,s__174053)));
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
var keepi__174064 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____174061 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174061))
{var s__174062 = temp__3698__auto____174061;

var x__174063 = f.call(null,idx,cljs.core.first.call(null,s__174062));

if(cljs.core.truth_((x__174063 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__174062));
} else
{return cljs.core.cons.call(null,x__174063,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__174062)));
}
} else
{return null;
}
})));
});

return keepi__174064.call(null,0,coll);
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
var every_pred__174109 = (function (p){
return (function() {
var ep1 = null;
var ep1__174114 = (function (){
return true;
});
var ep1__174115 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__174116 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____174071 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____174071))
{return p.call(null,y);
} else
{return and__3546__auto____174071;
}
})());
});
var ep1__174117 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____174072 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____174072))
{var and__3546__auto____174073 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____174073))
{return p.call(null,z);
} else
{return and__3546__auto____174073;
}
} else
{return and__3546__auto____174072;
}
})());
});
var ep1__174118 = (function() { 
var G__174120__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____174074 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____174074))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____174074;
}
})());
};
var G__174120 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174120__delegate.call(this, x, y, z, args);
};
G__174120.cljs$lang$maxFixedArity = 3;
G__174120.cljs$lang$applyTo = (function (arglist__174121){
var x = cljs.core.first(arglist__174121);
var y = cljs.core.first(cljs.core.next(arglist__174121));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174121)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174121)));
return G__174120__delegate.call(this, x, y, z, args);
});
return G__174120;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__174114.call(this);
case  1 :
return ep1__174115.call(this,x);
case  2 :
return ep1__174116.call(this,x,y);
case  3 :
return ep1__174117.call(this,x,y,z);
default:
return ep1__174118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__174118.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__174110 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__174122 = (function (){
return true;
});
var ep2__174123 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____174075 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____174075))
{return p2.call(null,x);
} else
{return and__3546__auto____174075;
}
})());
});
var ep2__174124 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____174076 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____174076))
{var and__3546__auto____174077 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____174077))
{var and__3546__auto____174078 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____174078))
{return p2.call(null,y);
} else
{return and__3546__auto____174078;
}
} else
{return and__3546__auto____174077;
}
} else
{return and__3546__auto____174076;
}
})());
});
var ep2__174125 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____174079 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____174079))
{var and__3546__auto____174080 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____174080))
{var and__3546__auto____174081 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____174081))
{var and__3546__auto____174082 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____174082))
{var and__3546__auto____174083 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____174083))
{return p2.call(null,z);
} else
{return and__3546__auto____174083;
}
} else
{return and__3546__auto____174082;
}
} else
{return and__3546__auto____174081;
}
} else
{return and__3546__auto____174080;
}
} else
{return and__3546__auto____174079;
}
})());
});
var ep2__174126 = (function() { 
var G__174128__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____174084 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____174084))
{return cljs.core.every_QMARK_.call(null,(function (p1__174055_SHARP_){
var and__3546__auto____174085 = p1.call(null,p1__174055_SHARP_);

if(cljs.core.truth_(and__3546__auto____174085))
{return p2.call(null,p1__174055_SHARP_);
} else
{return and__3546__auto____174085;
}
}),args);
} else
{return and__3546__auto____174084;
}
})());
};
var G__174128 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174128__delegate.call(this, x, y, z, args);
};
G__174128.cljs$lang$maxFixedArity = 3;
G__174128.cljs$lang$applyTo = (function (arglist__174129){
var x = cljs.core.first(arglist__174129);
var y = cljs.core.first(cljs.core.next(arglist__174129));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174129)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174129)));
return G__174128__delegate.call(this, x, y, z, args);
});
return G__174128;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__174122.call(this);
case  1 :
return ep2__174123.call(this,x);
case  2 :
return ep2__174124.call(this,x,y);
case  3 :
return ep2__174125.call(this,x,y,z);
default:
return ep2__174126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__174126.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__174111 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__174130 = (function (){
return true;
});
var ep3__174131 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____174086 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____174086))
{var and__3546__auto____174087 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____174087))
{return p3.call(null,x);
} else
{return and__3546__auto____174087;
}
} else
{return and__3546__auto____174086;
}
})());
});
var ep3__174132 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____174088 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____174088))
{var and__3546__auto____174089 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____174089))
{var and__3546__auto____174090 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____174090))
{var and__3546__auto____174091 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____174091))
{var and__3546__auto____174092 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____174092))
{return p3.call(null,y);
} else
{return and__3546__auto____174092;
}
} else
{return and__3546__auto____174091;
}
} else
{return and__3546__auto____174090;
}
} else
{return and__3546__auto____174089;
}
} else
{return and__3546__auto____174088;
}
})());
});
var ep3__174133 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____174093 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____174093))
{var and__3546__auto____174094 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____174094))
{var and__3546__auto____174095 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____174095))
{var and__3546__auto____174096 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____174096))
{var and__3546__auto____174097 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____174097))
{var and__3546__auto____174098 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____174098))
{var and__3546__auto____174099 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____174099))
{var and__3546__auto____174100 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____174100))
{return p3.call(null,z);
} else
{return and__3546__auto____174100;
}
} else
{return and__3546__auto____174099;
}
} else
{return and__3546__auto____174098;
}
} else
{return and__3546__auto____174097;
}
} else
{return and__3546__auto____174096;
}
} else
{return and__3546__auto____174095;
}
} else
{return and__3546__auto____174094;
}
} else
{return and__3546__auto____174093;
}
})());
});
var ep3__174134 = (function() { 
var G__174136__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____174101 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____174101))
{return cljs.core.every_QMARK_.call(null,(function (p1__174056_SHARP_){
var and__3546__auto____174102 = p1.call(null,p1__174056_SHARP_);

if(cljs.core.truth_(and__3546__auto____174102))
{var and__3546__auto____174103 = p2.call(null,p1__174056_SHARP_);

if(cljs.core.truth_(and__3546__auto____174103))
{return p3.call(null,p1__174056_SHARP_);
} else
{return and__3546__auto____174103;
}
} else
{return and__3546__auto____174102;
}
}),args);
} else
{return and__3546__auto____174101;
}
})());
};
var G__174136 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174136__delegate.call(this, x, y, z, args);
};
G__174136.cljs$lang$maxFixedArity = 3;
G__174136.cljs$lang$applyTo = (function (arglist__174137){
var x = cljs.core.first(arglist__174137);
var y = cljs.core.first(cljs.core.next(arglist__174137));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174137)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174137)));
return G__174136__delegate.call(this, x, y, z, args);
});
return G__174136;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__174130.call(this);
case  1 :
return ep3__174131.call(this,x);
case  2 :
return ep3__174132.call(this,x,y);
case  3 :
return ep3__174133.call(this,x,y,z);
default:
return ep3__174134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__174134.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__174112 = (function() { 
var G__174138__delegate = function (p1,p2,p3,ps){
var ps__174104 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__174139 = (function (){
return true;
});
var epn__174140 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__174057_SHARP_){
return p1__174057_SHARP_.call(null,x);
}),ps__174104);
});
var epn__174141 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__174058_SHARP_){
var and__3546__auto____174105 = p1__174058_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____174105))
{return p1__174058_SHARP_.call(null,y);
} else
{return and__3546__auto____174105;
}
}),ps__174104);
});
var epn__174142 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__174059_SHARP_){
var and__3546__auto____174106 = p1__174059_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____174106))
{var and__3546__auto____174107 = p1__174059_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____174107))
{return p1__174059_SHARP_.call(null,z);
} else
{return and__3546__auto____174107;
}
} else
{return and__3546__auto____174106;
}
}),ps__174104);
});
var epn__174143 = (function() { 
var G__174145__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____174108 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____174108))
{return cljs.core.every_QMARK_.call(null,(function (p1__174060_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__174060_SHARP_,args);
}),ps__174104);
} else
{return and__3546__auto____174108;
}
})());
};
var G__174145 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174145__delegate.call(this, x, y, z, args);
};
G__174145.cljs$lang$maxFixedArity = 3;
G__174145.cljs$lang$applyTo = (function (arglist__174146){
var x = cljs.core.first(arglist__174146);
var y = cljs.core.first(cljs.core.next(arglist__174146));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174146)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174146)));
return G__174145__delegate.call(this, x, y, z, args);
});
return G__174145;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__174139.call(this);
case  1 :
return epn__174140.call(this,x);
case  2 :
return epn__174141.call(this,x,y);
case  3 :
return epn__174142.call(this,x,y,z);
default:
return epn__174143.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__174143.cljs$lang$applyTo;
return epn;
})()
};
var G__174138 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174138__delegate.call(this, p1, p2, p3, ps);
};
G__174138.cljs$lang$maxFixedArity = 3;
G__174138.cljs$lang$applyTo = (function (arglist__174147){
var p1 = cljs.core.first(arglist__174147);
var p2 = cljs.core.first(cljs.core.next(arglist__174147));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174147)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174147)));
return G__174138__delegate.call(this, p1, p2, p3, ps);
});
return G__174138;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__174109.call(this,p1);
case  2 :
return every_pred__174110.call(this,p1,p2);
case  3 :
return every_pred__174111.call(this,p1,p2,p3);
default:
return every_pred__174112.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__174112.cljs$lang$applyTo;
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
var some_fn__174187 = (function (p){
return (function() {
var sp1 = null;
var sp1__174192 = (function (){
return null;
});
var sp1__174193 = (function (x){
return p.call(null,x);
});
var sp1__174194 = (function (x,y){
var or__3548__auto____174149 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____174149))
{return or__3548__auto____174149;
} else
{return p.call(null,y);
}
});
var sp1__174195 = (function (x,y,z){
var or__3548__auto____174150 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____174150))
{return or__3548__auto____174150;
} else
{var or__3548__auto____174151 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____174151))
{return or__3548__auto____174151;
} else
{return p.call(null,z);
}
}
});
var sp1__174196 = (function() { 
var G__174198__delegate = function (x,y,z,args){
var or__3548__auto____174152 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____174152))
{return or__3548__auto____174152;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__174198 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174198__delegate.call(this, x, y, z, args);
};
G__174198.cljs$lang$maxFixedArity = 3;
G__174198.cljs$lang$applyTo = (function (arglist__174199){
var x = cljs.core.first(arglist__174199);
var y = cljs.core.first(cljs.core.next(arglist__174199));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174199)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174199)));
return G__174198__delegate.call(this, x, y, z, args);
});
return G__174198;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__174192.call(this);
case  1 :
return sp1__174193.call(this,x);
case  2 :
return sp1__174194.call(this,x,y);
case  3 :
return sp1__174195.call(this,x,y,z);
default:
return sp1__174196.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__174196.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__174188 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__174200 = (function (){
return null;
});
var sp2__174201 = (function (x){
var or__3548__auto____174153 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____174153))
{return or__3548__auto____174153;
} else
{return p2.call(null,x);
}
});
var sp2__174202 = (function (x,y){
var or__3548__auto____174154 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____174154))
{return or__3548__auto____174154;
} else
{var or__3548__auto____174155 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____174155))
{return or__3548__auto____174155;
} else
{var or__3548__auto____174156 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____174156))
{return or__3548__auto____174156;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__174203 = (function (x,y,z){
var or__3548__auto____174157 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____174157))
{return or__3548__auto____174157;
} else
{var or__3548__auto____174158 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____174158))
{return or__3548__auto____174158;
} else
{var or__3548__auto____174159 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____174159))
{return or__3548__auto____174159;
} else
{var or__3548__auto____174160 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____174160))
{return or__3548__auto____174160;
} else
{var or__3548__auto____174161 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____174161))
{return or__3548__auto____174161;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__174204 = (function() { 
var G__174206__delegate = function (x,y,z,args){
var or__3548__auto____174162 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____174162))
{return or__3548__auto____174162;
} else
{return cljs.core.some.call(null,(function (p1__174065_SHARP_){
var or__3548__auto____174163 = p1.call(null,p1__174065_SHARP_);

if(cljs.core.truth_(or__3548__auto____174163))
{return or__3548__auto____174163;
} else
{return p2.call(null,p1__174065_SHARP_);
}
}),args);
}
};
var G__174206 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174206__delegate.call(this, x, y, z, args);
};
G__174206.cljs$lang$maxFixedArity = 3;
G__174206.cljs$lang$applyTo = (function (arglist__174207){
var x = cljs.core.first(arglist__174207);
var y = cljs.core.first(cljs.core.next(arglist__174207));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174207)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174207)));
return G__174206__delegate.call(this, x, y, z, args);
});
return G__174206;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__174200.call(this);
case  1 :
return sp2__174201.call(this,x);
case  2 :
return sp2__174202.call(this,x,y);
case  3 :
return sp2__174203.call(this,x,y,z);
default:
return sp2__174204.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__174204.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__174189 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__174208 = (function (){
return null;
});
var sp3__174209 = (function (x){
var or__3548__auto____174164 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____174164))
{return or__3548__auto____174164;
} else
{var or__3548__auto____174165 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____174165))
{return or__3548__auto____174165;
} else
{return p3.call(null,x);
}
}
});
var sp3__174210 = (function (x,y){
var or__3548__auto____174166 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____174166))
{return or__3548__auto____174166;
} else
{var or__3548__auto____174167 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____174167))
{return or__3548__auto____174167;
} else
{var or__3548__auto____174168 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____174168))
{return or__3548__auto____174168;
} else
{var or__3548__auto____174169 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____174169))
{return or__3548__auto____174169;
} else
{var or__3548__auto____174170 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____174170))
{return or__3548__auto____174170;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__174211 = (function (x,y,z){
var or__3548__auto____174171 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____174171))
{return or__3548__auto____174171;
} else
{var or__3548__auto____174172 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____174172))
{return or__3548__auto____174172;
} else
{var or__3548__auto____174173 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____174173))
{return or__3548__auto____174173;
} else
{var or__3548__auto____174174 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____174174))
{return or__3548__auto____174174;
} else
{var or__3548__auto____174175 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____174175))
{return or__3548__auto____174175;
} else
{var or__3548__auto____174176 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____174176))
{return or__3548__auto____174176;
} else
{var or__3548__auto____174177 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____174177))
{return or__3548__auto____174177;
} else
{var or__3548__auto____174178 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____174178))
{return or__3548__auto____174178;
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
var sp3__174212 = (function() { 
var G__174214__delegate = function (x,y,z,args){
var or__3548__auto____174179 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____174179))
{return or__3548__auto____174179;
} else
{return cljs.core.some.call(null,(function (p1__174066_SHARP_){
var or__3548__auto____174180 = p1.call(null,p1__174066_SHARP_);

if(cljs.core.truth_(or__3548__auto____174180))
{return or__3548__auto____174180;
} else
{var or__3548__auto____174181 = p2.call(null,p1__174066_SHARP_);

if(cljs.core.truth_(or__3548__auto____174181))
{return or__3548__auto____174181;
} else
{return p3.call(null,p1__174066_SHARP_);
}
}
}),args);
}
};
var G__174214 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174214__delegate.call(this, x, y, z, args);
};
G__174214.cljs$lang$maxFixedArity = 3;
G__174214.cljs$lang$applyTo = (function (arglist__174215){
var x = cljs.core.first(arglist__174215);
var y = cljs.core.first(cljs.core.next(arglist__174215));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174215)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174215)));
return G__174214__delegate.call(this, x, y, z, args);
});
return G__174214;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__174208.call(this);
case  1 :
return sp3__174209.call(this,x);
case  2 :
return sp3__174210.call(this,x,y);
case  3 :
return sp3__174211.call(this,x,y,z);
default:
return sp3__174212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__174212.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__174190 = (function() { 
var G__174216__delegate = function (p1,p2,p3,ps){
var ps__174182 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__174217 = (function (){
return null;
});
var spn__174218 = (function (x){
return cljs.core.some.call(null,(function (p1__174067_SHARP_){
return p1__174067_SHARP_.call(null,x);
}),ps__174182);
});
var spn__174219 = (function (x,y){
return cljs.core.some.call(null,(function (p1__174068_SHARP_){
var or__3548__auto____174183 = p1__174068_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____174183))
{return or__3548__auto____174183;
} else
{return p1__174068_SHARP_.call(null,y);
}
}),ps__174182);
});
var spn__174220 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__174069_SHARP_){
var or__3548__auto____174184 = p1__174069_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____174184))
{return or__3548__auto____174184;
} else
{var or__3548__auto____174185 = p1__174069_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____174185))
{return or__3548__auto____174185;
} else
{return p1__174069_SHARP_.call(null,z);
}
}
}),ps__174182);
});
var spn__174221 = (function() { 
var G__174223__delegate = function (x,y,z,args){
var or__3548__auto____174186 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____174186))
{return or__3548__auto____174186;
} else
{return cljs.core.some.call(null,(function (p1__174070_SHARP_){
return cljs.core.some.call(null,p1__174070_SHARP_,args);
}),ps__174182);
}
};
var G__174223 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174223__delegate.call(this, x, y, z, args);
};
G__174223.cljs$lang$maxFixedArity = 3;
G__174223.cljs$lang$applyTo = (function (arglist__174224){
var x = cljs.core.first(arglist__174224);
var y = cljs.core.first(cljs.core.next(arglist__174224));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174224)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174224)));
return G__174223__delegate.call(this, x, y, z, args);
});
return G__174223;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__174217.call(this);
case  1 :
return spn__174218.call(this,x);
case  2 :
return spn__174219.call(this,x,y);
case  3 :
return spn__174220.call(this,x,y,z);
default:
return spn__174221.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__174221.cljs$lang$applyTo;
return spn;
})()
};
var G__174216 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174216__delegate.call(this, p1, p2, p3, ps);
};
G__174216.cljs$lang$maxFixedArity = 3;
G__174216.cljs$lang$applyTo = (function (arglist__174225){
var p1 = cljs.core.first(arglist__174225);
var p2 = cljs.core.first(cljs.core.next(arglist__174225));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174225)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174225)));
return G__174216__delegate.call(this, p1, p2, p3, ps);
});
return G__174216;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__174187.call(this,p1);
case  2 :
return some_fn__174188.call(this,p1,p2);
case  3 :
return some_fn__174189.call(this,p1,p2,p3);
default:
return some_fn__174190.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__174190.cljs$lang$applyTo;
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
var map__174238 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____174226 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174226))
{var s__174227 = temp__3698__auto____174226;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__174227)),map.call(null,f,cljs.core.rest.call(null,s__174227)));
} else
{return null;
}
})));
});
var map__174239 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__174228 = cljs.core.seq.call(null,c1);
var s2__174229 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____174230 = s1__174228;

if(cljs.core.truth_(and__3546__auto____174230))
{return s2__174229;
} else
{return and__3546__auto____174230;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__174228),cljs.core.first.call(null,s2__174229)),map.call(null,f,cljs.core.rest.call(null,s1__174228),cljs.core.rest.call(null,s2__174229)));
} else
{return null;
}
})));
});
var map__174240 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__174231 = cljs.core.seq.call(null,c1);
var s2__174232 = cljs.core.seq.call(null,c2);
var s3__174233 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____174234 = s1__174231;

if(cljs.core.truth_(and__3546__auto____174234))
{var and__3546__auto____174235 = s2__174232;

if(cljs.core.truth_(and__3546__auto____174235))
{return s3__174233;
} else
{return and__3546__auto____174235;
}
} else
{return and__3546__auto____174234;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__174231),cljs.core.first.call(null,s2__174232),cljs.core.first.call(null,s3__174233)),map.call(null,f,cljs.core.rest.call(null,s1__174231),cljs.core.rest.call(null,s2__174232),cljs.core.rest.call(null,s3__174233)));
} else
{return null;
}
})));
});
var map__174241 = (function() { 
var G__174243__delegate = function (f,c1,c2,c3,colls){
var step__174237 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__174236 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__174236)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__174236),step.call(null,map.call(null,cljs.core.rest,ss__174236)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__174148_SHARP_){
return cljs.core.apply.call(null,f,p1__174148_SHARP_);
}),step__174237.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__174243 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__174243__delegate.call(this, f, c1, c2, c3, colls);
};
G__174243.cljs$lang$maxFixedArity = 4;
G__174243.cljs$lang$applyTo = (function (arglist__174244){
var f = cljs.core.first(arglist__174244);
var c1 = cljs.core.first(cljs.core.next(arglist__174244));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174244)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__174244))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__174244))));
return G__174243__delegate.call(this, f, c1, c2, c3, colls);
});
return G__174243;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__174238.call(this,f,c1);
case  3 :
return map__174239.call(this,f,c1,c2);
case  4 :
return map__174240.call(this,f,c1,c2,c3);
default:
return map__174241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__174241.cljs$lang$applyTo;
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
{var temp__3698__auto____174245 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174245))
{var s__174246 = temp__3698__auto____174245;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__174246),take.call(null,(n - 1),cljs.core.rest.call(null,s__174246)));
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
var step__174249 = (function (n,coll){
while(true){
var s__174247 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____174248 = (n > 0);

if(cljs.core.truth_(and__3546__auto____174248))
{return s__174247;
} else
{return and__3546__auto____174248;
}
})()))
{{
var G__174250 = (n - 1);
var G__174251 = cljs.core.rest.call(null,s__174247);
n = G__174250;
coll = G__174251;
continue;
}
} else
{return s__174247;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__174249.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__174252 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__174253 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__174252.call(this,n);
case  2 :
return drop_last__174253.call(this,n,s);
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
var s__174255 = cljs.core.seq.call(null,coll);
var lead__174256 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__174256))
{{
var G__174257 = cljs.core.next.call(null,s__174255);
var G__174258 = cljs.core.next.call(null,lead__174256);
s__174255 = G__174257;
lead__174256 = G__174258;
continue;
}
} else
{return s__174255;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__174261 = (function (pred,coll){
while(true){
var s__174259 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____174260 = s__174259;

if(cljs.core.truth_(and__3546__auto____174260))
{return pred.call(null,cljs.core.first.call(null,s__174259));
} else
{return and__3546__auto____174260;
}
})()))
{{
var G__174262 = pred;
var G__174263 = cljs.core.rest.call(null,s__174259);
pred = G__174262;
coll = G__174263;
continue;
}
} else
{return s__174259;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__174261.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____174264 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174264))
{var s__174265 = temp__3698__auto____174264;

return cljs.core.concat.call(null,s__174265,cycle.call(null,s__174265));
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
var repeat__174266 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__174267 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__174266.call(this,n);
case  2 :
return repeat__174267.call(this,n,x);
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
var repeatedly__174269 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__174270 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__174269.call(this,n);
case  2 :
return repeatedly__174270.call(this,n,f);
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
var interleave__174276 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__174272 = cljs.core.seq.call(null,c1);
var s2__174273 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____174274 = s1__174272;

if(cljs.core.truth_(and__3546__auto____174274))
{return s2__174273;
} else
{return and__3546__auto____174274;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__174272),cljs.core.cons.call(null,cljs.core.first.call(null,s2__174273),interleave.call(null,cljs.core.rest.call(null,s1__174272),cljs.core.rest.call(null,s2__174273))));
} else
{return null;
}
})));
});
var interleave__174277 = (function() { 
var G__174279__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__174275 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__174275)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__174275),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__174275)));
} else
{return null;
}
})));
};
var G__174279 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__174279__delegate.call(this, c1, c2, colls);
};
G__174279.cljs$lang$maxFixedArity = 2;
G__174279.cljs$lang$applyTo = (function (arglist__174280){
var c1 = cljs.core.first(arglist__174280);
var c2 = cljs.core.first(cljs.core.next(arglist__174280));
var colls = cljs.core.rest(cljs.core.next(arglist__174280));
return G__174279__delegate.call(this, c1, c2, colls);
});
return G__174279;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__174276.call(this,c1,c2);
default:
return interleave__174277.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__174277.cljs$lang$applyTo;
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
var cat__174283 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____174281 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____174281))
{var coll__174282 = temp__3695__auto____174281;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__174282),cat.call(null,cljs.core.rest.call(null,coll__174282),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__174283.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__174284 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__174285 = (function() { 
var G__174287__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__174287 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__174287__delegate.call(this, f, coll, colls);
};
G__174287.cljs$lang$maxFixedArity = 2;
G__174287.cljs$lang$applyTo = (function (arglist__174288){
var f = cljs.core.first(arglist__174288);
var coll = cljs.core.first(cljs.core.next(arglist__174288));
var colls = cljs.core.rest(cljs.core.next(arglist__174288));
return G__174287__delegate.call(this, f, coll, colls);
});
return G__174287;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__174284.call(this,f,coll);
default:
return mapcat__174285.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__174285.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____174289 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174289))
{var s__174290 = temp__3698__auto____174289;

var f__174291 = cljs.core.first.call(null,s__174290);
var r__174292 = cljs.core.rest.call(null,s__174290);

if(cljs.core.truth_(pred.call(null,f__174291)))
{return cljs.core.cons.call(null,f__174291,filter.call(null,pred,r__174292));
} else
{return filter.call(null,pred,r__174292);
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
var walk__174294 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__174294.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__174293_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__174293_SHARP_));
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
var partition__174301 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__174302 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____174295 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174295))
{var s__174296 = temp__3698__auto____174295;

var p__174297 = cljs.core.take.call(null,n,s__174296);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__174297))))
{return cljs.core.cons.call(null,p__174297,partition.call(null,n,step,cljs.core.drop.call(null,step,s__174296)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__174303 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____174298 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174298))
{var s__174299 = temp__3698__auto____174298;

var p__174300 = cljs.core.take.call(null,n,s__174299);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__174300))))
{return cljs.core.cons.call(null,p__174300,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__174299)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__174300,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__174301.call(this,n,step);
case  3 :
return partition__174302.call(this,n,step,pad);
case  4 :
return partition__174303.call(this,n,step,pad,coll);
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
var get_in__174309 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__174310 = (function (m,ks,not_found){
var sentinel__174305 = cljs.core.lookup_sentinel;
var m__174306 = m;
var ks__174307 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__174307))
{var m__174308 = cljs.core.get.call(null,m__174306,cljs.core.first.call(null,ks__174307),sentinel__174305);

if(cljs.core.truth_((sentinel__174305 === m__174308)))
{return not_found;
} else
{{
var G__174312 = sentinel__174305;
var G__174313 = m__174308;
var G__174314 = cljs.core.next.call(null,ks__174307);
sentinel__174305 = G__174312;
m__174306 = G__174313;
ks__174307 = G__174314;
continue;
}
}
} else
{return m__174306;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__174309.call(this,m,ks);
case  3 :
return get_in__174310.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__174315,v){
var vec__174316__174317 = p__174315;
var k__174318 = cljs.core.nth.call(null,vec__174316__174317,0,null);
var ks__174319 = cljs.core.nthnext.call(null,vec__174316__174317,1);

if(cljs.core.truth_(ks__174319))
{return cljs.core.assoc.call(null,m,k__174318,assoc_in.call(null,cljs.core.get.call(null,m,k__174318),ks__174319,v));
} else
{return cljs.core.assoc.call(null,m,k__174318,v);
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
var update_in__delegate = function (m,p__174320,f,args){
var vec__174321__174322 = p__174320;
var k__174323 = cljs.core.nth.call(null,vec__174321__174322,0,null);
var ks__174324 = cljs.core.nthnext.call(null,vec__174321__174322,1);

if(cljs.core.truth_(ks__174324))
{return cljs.core.assoc.call(null,m,k__174323,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__174323),ks__174324,f,args));
} else
{return cljs.core.assoc.call(null,m,k__174323,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__174323),args));
}
};
var update_in = function (m,p__174320,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__174320, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__174325){
var m = cljs.core.first(arglist__174325);
var p__174320 = cljs.core.first(cljs.core.next(arglist__174325));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174325)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174325)));
return update_in__delegate.call(this, m, p__174320, f, args);
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
var this__174326 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__174359 = null;
var G__174359__174360 = (function (coll,k){
var this__174327 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__174359__174361 = (function (coll,k,not_found){
var this__174328 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__174359 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__174359__174360.call(this,coll,k);
case  3 :
return G__174359__174361.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174359;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__174329 = this;
var new_array__174330 = cljs.core.aclone.call(null,this__174329.array);

(new_array__174330[k] = v);
return (new cljs.core.Vector(this__174329.meta,new_array__174330));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__174363 = null;
var G__174363__174364 = (function (tsym174331,k){
var this__174333 = this;
var tsym174331__174334 = this;

var coll__174335 = tsym174331__174334;

return cljs.core._lookup.call(null,coll__174335,k);
});
var G__174363__174365 = (function (tsym174332,k,not_found){
var this__174336 = this;
var tsym174332__174337 = this;

var coll__174338 = tsym174332__174337;

return cljs.core._lookup.call(null,coll__174338,k,not_found);
});
G__174363 = function(tsym174332,k,not_found){
switch(arguments.length){
case  2 :
return G__174363__174364.call(this,tsym174332,k);
case  3 :
return G__174363__174365.call(this,tsym174332,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174363;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__174339 = this;
var new_array__174340 = cljs.core.aclone.call(null,this__174339.array);

new_array__174340.push(o);
return (new cljs.core.Vector(this__174339.meta,new_array__174340));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__174367 = null;
var G__174367__174368 = (function (v,f){
var this__174341 = this;
return cljs.core.ci_reduce.call(null,this__174341.array,f);
});
var G__174367__174369 = (function (v,f,start){
var this__174342 = this;
return cljs.core.ci_reduce.call(null,this__174342.array,f,start);
});
G__174367 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__174367__174368.call(this,v,f);
case  3 :
return G__174367__174369.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174367;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__174343 = this;
if(cljs.core.truth_((this__174343.array.length > 0)))
{var vector_seq__174344 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__174343.array.length)))
{return cljs.core.cons.call(null,(this__174343.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__174344.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__174345 = this;
return this__174345.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__174346 = this;
var count__174347 = this__174346.array.length;

if(cljs.core.truth_((count__174347 > 0)))
{return (this__174346.array[(count__174347 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__174348 = this;
if(cljs.core.truth_((this__174348.array.length > 0)))
{var new_array__174349 = cljs.core.aclone.call(null,this__174348.array);

new_array__174349.pop();
return (new cljs.core.Vector(this__174348.meta,new_array__174349));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__174350 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__174351 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__174352 = this;
return (new cljs.core.Vector(meta,this__174352.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__174353 = this;
return this__174353.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__174371 = null;
var G__174371__174372 = (function (coll,n){
var this__174354 = this;
if(cljs.core.truth_((function (){var and__3546__auto____174355 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____174355))
{return (n < this__174354.array.length);
} else
{return and__3546__auto____174355;
}
})()))
{return (this__174354.array[n]);
} else
{return null;
}
});
var G__174371__174373 = (function (coll,n,not_found){
var this__174356 = this;
if(cljs.core.truth_((function (){var and__3546__auto____174357 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____174357))
{return (n < this__174356.array.length);
} else
{return and__3546__auto____174357;
}
})()))
{return (this__174356.array[n]);
} else
{return not_found;
}
});
G__174371 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__174371__174372.call(this,coll,n);
case  3 :
return G__174371__174373.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174371;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__174358 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__174358.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__174375 = pv.cnt;

if(cljs.core.truth_((cnt__174375 < 32)))
{return 0;
} else
{return (((cnt__174375 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__174376 = level;
var ret__174377 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__174376)))
{return ret__174377;
} else
{var embed__174378 = ret__174377;
var r__174379 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___174380 = (r__174379[0] = embed__174378);

{
var G__174381 = (ll__174376 - 5);
var G__174382 = r__174379;
ll__174376 = G__174381;
ret__174377 = G__174382;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__174383 = cljs.core.aclone.call(null,parent);
var subidx__174384 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__174383[subidx__174384] = tailnode);
return ret__174383;
} else
{var temp__3695__auto____174385 = (parent[subidx__174384]);

if(cljs.core.truth_(temp__3695__auto____174385))
{var child__174386 = temp__3695__auto____174385;

var node_to_insert__174387 = push_tail.call(null,pv,(level - 5),child__174386,tailnode);
var ___174388 = (ret__174383[subidx__174384] = node_to_insert__174387);

return ret__174383;
} else
{var node_to_insert__174389 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___174390 = (ret__174383[subidx__174384] = node_to_insert__174389);

return ret__174383;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____174391 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____174391))
{return (i < pv.cnt);
} else
{return and__3546__auto____174391;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__174392 = pv.root;
var level__174393 = pv.shift;

while(true){
if(cljs.core.truth_((level__174393 > 0)))
{{
var G__174394 = (node__174392[((i >> level__174393) & 31)]);
var G__174395 = (level__174393 - 5);
node__174392 = G__174394;
level__174393 = G__174395;
continue;
}
} else
{return node__174392;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__174396 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__174396[(i & 31)] = val);
return ret__174396;
} else
{var subidx__174397 = ((i >> level) & 31);
var ___174398 = (ret__174396[subidx__174397] = do_assoc.call(null,pv,(level - 5),(node[subidx__174397]),i,val));

return ret__174396;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__174399 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__174400 = pop_tail.call(null,pv,(level - 5),(node[subidx__174399]));

if(cljs.core.truth_((function (){var and__3546__auto____174401 = (new_child__174400 === null);

if(cljs.core.truth_(and__3546__auto____174401))
{return (subidx__174399 === 0);
} else
{return and__3546__auto____174401;
}
})()))
{return null;
} else
{var ret__174402 = cljs.core.aclone.call(null,node);
var ___174403 = (ret__174402[subidx__174399] = new_child__174400);

return ret__174402;
}
} else
{if(cljs.core.truth_((subidx__174399 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__174404 = cljs.core.aclone.call(null,node);
var ___174405 = (ret__174404[subidx__174399] = null);

return ret__174404;
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
var this__174406 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__174446 = null;
var G__174446__174447 = (function (coll,k){
var this__174407 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__174446__174448 = (function (coll,k,not_found){
var this__174408 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__174446 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__174446__174447.call(this,coll,k);
case  3 :
return G__174446__174448.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174446;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__174409 = this;
if(cljs.core.truth_((function (){var and__3546__auto____174410 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____174410))
{return (k < this__174409.cnt);
} else
{return and__3546__auto____174410;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__174411 = cljs.core.aclone.call(null,this__174409.tail);

(new_tail__174411[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__174409.meta,this__174409.cnt,this__174409.shift,this__174409.root,new_tail__174411));
} else
{return (new cljs.core.PersistentVector(this__174409.meta,this__174409.cnt,this__174409.shift,cljs.core.do_assoc.call(null,coll,this__174409.shift,this__174409.root,k,v),this__174409.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__174409.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__174409.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__174450 = null;
var G__174450__174451 = (function (tsym174412,k){
var this__174414 = this;
var tsym174412__174415 = this;

var coll__174416 = tsym174412__174415;

return cljs.core._lookup.call(null,coll__174416,k);
});
var G__174450__174452 = (function (tsym174413,k,not_found){
var this__174417 = this;
var tsym174413__174418 = this;

var coll__174419 = tsym174413__174418;

return cljs.core._lookup.call(null,coll__174419,k,not_found);
});
G__174450 = function(tsym174413,k,not_found){
switch(arguments.length){
case  2 :
return G__174450__174451.call(this,tsym174413,k);
case  3 :
return G__174450__174452.call(this,tsym174413,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174450;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__174420 = this;
if(cljs.core.truth_(((this__174420.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__174421 = cljs.core.aclone.call(null,this__174420.tail);

new_tail__174421.push(o);
return (new cljs.core.PersistentVector(this__174420.meta,(this__174420.cnt + 1),this__174420.shift,this__174420.root,new_tail__174421));
} else
{var root_overflow_QMARK___174422 = ((this__174420.cnt >> 5) > (1 << this__174420.shift));
var new_shift__174423 = (cljs.core.truth_(root_overflow_QMARK___174422)?(this__174420.shift + 5):this__174420.shift);
var new_root__174425 = (cljs.core.truth_(root_overflow_QMARK___174422)?(function (){var n_r__174424 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__174424[0] = this__174420.root);
(n_r__174424[1] = cljs.core.new_path.call(null,this__174420.shift,this__174420.tail));
return n_r__174424;
})():cljs.core.push_tail.call(null,coll,this__174420.shift,this__174420.root,this__174420.tail));

return (new cljs.core.PersistentVector(this__174420.meta,(this__174420.cnt + 1),new_shift__174423,new_root__174425,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__174454 = null;
var G__174454__174455 = (function (v,f){
var this__174426 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__174454__174456 = (function (v,f,start){
var this__174427 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__174454 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__174454__174455.call(this,v,f);
case  3 :
return G__174454__174456.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174454;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__174428 = this;
if(cljs.core.truth_((this__174428.cnt > 0)))
{var vector_seq__174429 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__174428.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__174429.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__174430 = this;
return this__174430.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__174431 = this;
if(cljs.core.truth_((this__174431.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__174431.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__174432 = this;
if(cljs.core.truth_((this__174432.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__174432.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__174432.meta);
} else
{if(cljs.core.truth_((1 < (this__174432.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__174432.meta,(this__174432.cnt - 1),this__174432.shift,this__174432.root,cljs.core.aclone.call(null,this__174432.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__174433 = cljs.core.array_for.call(null,coll,(this__174432.cnt - 2));
var nr__174434 = cljs.core.pop_tail.call(null,this__174432.shift,this__174432.root);
var new_root__174435 = (cljs.core.truth_((nr__174434 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__174434);
var cnt_1__174436 = (this__174432.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____174437 = (5 < this__174432.shift);

if(cljs.core.truth_(and__3546__auto____174437))
{return ((new_root__174435[1]) === null);
} else
{return and__3546__auto____174437;
}
})()))
{return (new cljs.core.PersistentVector(this__174432.meta,cnt_1__174436,(this__174432.shift - 5),(new_root__174435[0]),new_tail__174433));
} else
{return (new cljs.core.PersistentVector(this__174432.meta,cnt_1__174436,this__174432.shift,new_root__174435,new_tail__174433));
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
var this__174438 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__174439 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__174440 = this;
return (new cljs.core.PersistentVector(meta,this__174440.cnt,this__174440.shift,this__174440.root,this__174440.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__174441 = this;
return this__174441.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__174458 = null;
var G__174458__174459 = (function (coll,n){
var this__174442 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__174458__174460 = (function (coll,n,not_found){
var this__174443 = this;
if(cljs.core.truth_((function (){var and__3546__auto____174444 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____174444))
{return (n < this__174443.cnt);
} else
{return and__3546__auto____174444;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__174458 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__174458__174459.call(this,coll,n);
case  3 :
return G__174458__174460.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174458;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__174445 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__174445.meta);
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
vector.cljs$lang$applyTo = (function (arglist__174462){
var args = cljs.core.seq( arglist__174462 );;
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
var this__174463 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__174491 = null;
var G__174491__174492 = (function (coll,k){
var this__174464 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__174491__174493 = (function (coll,k,not_found){
var this__174465 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__174491 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__174491__174492.call(this,coll,k);
case  3 :
return G__174491__174493.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174491;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__174466 = this;
var v_pos__174467 = (this__174466.start + key);

return (new cljs.core.Subvec(this__174466.meta,cljs.core._assoc.call(null,this__174466.v,v_pos__174467,val),this__174466.start,((this__174466.end > (v_pos__174467 + 1)) ? this__174466.end : (v_pos__174467 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__174495 = null;
var G__174495__174496 = (function (tsym174468,k){
var this__174470 = this;
var tsym174468__174471 = this;

var coll__174472 = tsym174468__174471;

return cljs.core._lookup.call(null,coll__174472,k);
});
var G__174495__174497 = (function (tsym174469,k,not_found){
var this__174473 = this;
var tsym174469__174474 = this;

var coll__174475 = tsym174469__174474;

return cljs.core._lookup.call(null,coll__174475,k,not_found);
});
G__174495 = function(tsym174469,k,not_found){
switch(arguments.length){
case  2 :
return G__174495__174496.call(this,tsym174469,k);
case  3 :
return G__174495__174497.call(this,tsym174469,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174495;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__174476 = this;
return (new cljs.core.Subvec(this__174476.meta,cljs.core._assoc_n.call(null,this__174476.v,this__174476.end,o),this__174476.start,(this__174476.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__174499 = null;
var G__174499__174500 = (function (coll,f){
var this__174477 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__174499__174501 = (function (coll,f,start){
var this__174478 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__174499 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__174499__174500.call(this,coll,f);
case  3 :
return G__174499__174501.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174499;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__174479 = this;
var subvec_seq__174480 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__174479.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__174479.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__174480.call(null,this__174479.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__174481 = this;
return (this__174481.end - this__174481.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__174482 = this;
return cljs.core._nth.call(null,this__174482.v,(this__174482.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__174483 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__174483.start,this__174483.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__174483.meta,this__174483.v,this__174483.start,(this__174483.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__174484 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__174485 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__174486 = this;
return (new cljs.core.Subvec(meta,this__174486.v,this__174486.start,this__174486.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__174487 = this;
return this__174487.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__174503 = null;
var G__174503__174504 = (function (coll,n){
var this__174488 = this;
return cljs.core._nth.call(null,this__174488.v,(this__174488.start + n));
});
var G__174503__174505 = (function (coll,n,not_found){
var this__174489 = this;
return cljs.core._nth.call(null,this__174489.v,(this__174489.start + n),not_found);
});
G__174503 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__174503__174504.call(this,coll,n);
case  3 :
return G__174503__174505.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174503;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__174490 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__174490.meta);
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
var subvec__174507 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__174508 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__174507.call(this,v,start);
case  3 :
return subvec__174508.call(this,v,start,end);
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
var this__174510 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__174511 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__174512 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__174513 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__174513.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__174514 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__174515 = this;
return cljs.core._first.call(null,this__174515.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__174516 = this;
var temp__3695__auto____174517 = cljs.core.next.call(null,this__174516.front);

if(cljs.core.truth_(temp__3695__auto____174517))
{var f1__174518 = temp__3695__auto____174517;

return (new cljs.core.PersistentQueueSeq(this__174516.meta,f1__174518,this__174516.rear));
} else
{if(cljs.core.truth_((this__174516.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__174516.meta,this__174516.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__174519 = this;
return this__174519.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__174520 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__174520.front,this__174520.rear));
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
var this__174521 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__174522 = this;
if(cljs.core.truth_(this__174522.front))
{return (new cljs.core.PersistentQueue(this__174522.meta,(this__174522.count + 1),this__174522.front,cljs.core.conj.call(null,(function (){var or__3548__auto____174523 = this__174522.rear;

if(cljs.core.truth_(or__3548__auto____174523))
{return or__3548__auto____174523;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__174522.meta,(this__174522.count + 1),cljs.core.conj.call(null,this__174522.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__174524 = this;
var rear__174525 = cljs.core.seq.call(null,this__174524.rear);

if(cljs.core.truth_((function (){var or__3548__auto____174526 = this__174524.front;

if(cljs.core.truth_(or__3548__auto____174526))
{return or__3548__auto____174526;
} else
{return rear__174525;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__174524.front,cljs.core.seq.call(null,rear__174525)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__174527 = this;
return this__174527.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__174528 = this;
return cljs.core._first.call(null,this__174528.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__174529 = this;
if(cljs.core.truth_(this__174529.front))
{var temp__3695__auto____174530 = cljs.core.next.call(null,this__174529.front);

if(cljs.core.truth_(temp__3695__auto____174530))
{var f1__174531 = temp__3695__auto____174530;

return (new cljs.core.PersistentQueue(this__174529.meta,(this__174529.count - 1),f1__174531,this__174529.rear));
} else
{return (new cljs.core.PersistentQueue(this__174529.meta,(this__174529.count - 1),cljs.core.seq.call(null,this__174529.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__174532 = this;
return cljs.core.first.call(null,this__174532.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__174533 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__174534 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__174535 = this;
return (new cljs.core.PersistentQueue(meta,this__174535.count,this__174535.front,this__174535.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__174536 = this;
return this__174536.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__174537 = this;
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
var this__174538 = this;
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
var len__174539 = array.length;

var i__174540 = 0;

while(true){
if(cljs.core.truth_((i__174540 < len__174539)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__174540]))))
{return i__174540;
} else
{{
var G__174541 = (i__174540 + incr);
i__174540 = G__174541;
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
var obj_map_contains_key_QMARK___174543 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___174544 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____174542 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____174542))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____174542;
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
return obj_map_contains_key_QMARK___174543.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___174544.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__174547 = cljs.core.hash.call(null,a);
var b__174548 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__174547 < b__174548)))
{return -1;
} else
{if(cljs.core.truth_((a__174547 > b__174548)))
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
var this__174549 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__174576 = null;
var G__174576__174577 = (function (coll,k){
var this__174550 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__174576__174578 = (function (coll,k,not_found){
var this__174551 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__174551.strobj,(this__174551.strobj[k]),not_found);
});
G__174576 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__174576__174577.call(this,coll,k);
case  3 :
return G__174576__174578.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174576;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__174552 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__174553 = goog.object.clone.call(null,this__174552.strobj);
var overwrite_QMARK___174554 = new_strobj__174553.hasOwnProperty(k);

(new_strobj__174553[k] = v);
if(cljs.core.truth_(overwrite_QMARK___174554))
{return (new cljs.core.ObjMap(this__174552.meta,this__174552.keys,new_strobj__174553));
} else
{var new_keys__174555 = cljs.core.aclone.call(null,this__174552.keys);

new_keys__174555.push(k);
return (new cljs.core.ObjMap(this__174552.meta,new_keys__174555,new_strobj__174553));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__174552.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__174556 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__174556.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__174580 = null;
var G__174580__174581 = (function (tsym174557,k){
var this__174559 = this;
var tsym174557__174560 = this;

var coll__174561 = tsym174557__174560;

return cljs.core._lookup.call(null,coll__174561,k);
});
var G__174580__174582 = (function (tsym174558,k,not_found){
var this__174562 = this;
var tsym174558__174563 = this;

var coll__174564 = tsym174558__174563;

return cljs.core._lookup.call(null,coll__174564,k,not_found);
});
G__174580 = function(tsym174558,k,not_found){
switch(arguments.length){
case  2 :
return G__174580__174581.call(this,tsym174558,k);
case  3 :
return G__174580__174582.call(this,tsym174558,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174580;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__174565 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__174566 = this;
if(cljs.core.truth_((this__174566.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__174546_SHARP_){
return cljs.core.vector.call(null,p1__174546_SHARP_,(this__174566.strobj[p1__174546_SHARP_]));
}),this__174566.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__174567 = this;
return this__174567.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__174568 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__174569 = this;
return (new cljs.core.ObjMap(meta,this__174569.keys,this__174569.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__174570 = this;
return this__174570.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__174571 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__174571.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__174572 = this;
if(cljs.core.truth_((function (){var and__3546__auto____174573 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____174573))
{return this__174572.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____174573;
}
})()))
{var new_keys__174574 = cljs.core.aclone.call(null,this__174572.keys);
var new_strobj__174575 = goog.object.clone.call(null,this__174572.strobj);

new_keys__174574.splice(cljs.core.scan_array.call(null,1,k,new_keys__174574),1);
cljs.core.js_delete.call(null,new_strobj__174575,k);
return (new cljs.core.ObjMap(this__174572.meta,new_keys__174574,new_strobj__174575));
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
var this__174585 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__174623 = null;
var G__174623__174624 = (function (coll,k){
var this__174586 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__174623__174625 = (function (coll,k,not_found){
var this__174587 = this;
var bucket__174588 = (this__174587.hashobj[cljs.core.hash.call(null,k)]);
var i__174589 = (cljs.core.truth_(bucket__174588)?cljs.core.scan_array.call(null,2,k,bucket__174588):null);

if(cljs.core.truth_(i__174589))
{return (bucket__174588[(i__174589 + 1)]);
} else
{return not_found;
}
});
G__174623 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__174623__174624.call(this,coll,k);
case  3 :
return G__174623__174625.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174623;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__174590 = this;
var h__174591 = cljs.core.hash.call(null,k);
var bucket__174592 = (this__174590.hashobj[h__174591]);

if(cljs.core.truth_(bucket__174592))
{var new_bucket__174593 = cljs.core.aclone.call(null,bucket__174592);
var new_hashobj__174594 = goog.object.clone.call(null,this__174590.hashobj);

(new_hashobj__174594[h__174591] = new_bucket__174593);
var temp__3695__auto____174595 = cljs.core.scan_array.call(null,2,k,new_bucket__174593);

if(cljs.core.truth_(temp__3695__auto____174595))
{var i__174596 = temp__3695__auto____174595;

(new_bucket__174593[(i__174596 + 1)] = v);
return (new cljs.core.HashMap(this__174590.meta,this__174590.count,new_hashobj__174594));
} else
{new_bucket__174593.push(k,v);
return (new cljs.core.HashMap(this__174590.meta,(this__174590.count + 1),new_hashobj__174594));
}
} else
{var new_hashobj__174597 = goog.object.clone.call(null,this__174590.hashobj);

(new_hashobj__174597[h__174591] = [k,v]);
return (new cljs.core.HashMap(this__174590.meta,(this__174590.count + 1),new_hashobj__174597));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__174598 = this;
var bucket__174599 = (this__174598.hashobj[cljs.core.hash.call(null,k)]);
var i__174600 = (cljs.core.truth_(bucket__174599)?cljs.core.scan_array.call(null,2,k,bucket__174599):null);

if(cljs.core.truth_(i__174600))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__174627 = null;
var G__174627__174628 = (function (tsym174601,k){
var this__174603 = this;
var tsym174601__174604 = this;

var coll__174605 = tsym174601__174604;

return cljs.core._lookup.call(null,coll__174605,k);
});
var G__174627__174629 = (function (tsym174602,k,not_found){
var this__174606 = this;
var tsym174602__174607 = this;

var coll__174608 = tsym174602__174607;

return cljs.core._lookup.call(null,coll__174608,k,not_found);
});
G__174627 = function(tsym174602,k,not_found){
switch(arguments.length){
case  2 :
return G__174627__174628.call(this,tsym174602,k);
case  3 :
return G__174627__174629.call(this,tsym174602,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174627;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__174609 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__174610 = this;
if(cljs.core.truth_((this__174610.count > 0)))
{var hashes__174611 = cljs.core.js_keys.call(null,this__174610.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__174584_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__174610.hashobj[p1__174584_SHARP_])));
}),hashes__174611);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__174612 = this;
return this__174612.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__174613 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__174614 = this;
return (new cljs.core.HashMap(meta,this__174614.count,this__174614.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__174615 = this;
return this__174615.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__174616 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__174616.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__174617 = this;
var h__174618 = cljs.core.hash.call(null,k);
var bucket__174619 = (this__174617.hashobj[h__174618]);
var i__174620 = (cljs.core.truth_(bucket__174619)?cljs.core.scan_array.call(null,2,k,bucket__174619):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__174620)))
{return coll;
} else
{var new_hashobj__174621 = goog.object.clone.call(null,this__174617.hashobj);

if(cljs.core.truth_((3 > bucket__174619.length)))
{cljs.core.js_delete.call(null,new_hashobj__174621,h__174618);
} else
{var new_bucket__174622 = cljs.core.aclone.call(null,bucket__174619);

new_bucket__174622.splice(i__174620,2);
(new_hashobj__174621[h__174618] = new_bucket__174622);
}
return (new cljs.core.HashMap(this__174617.meta,(this__174617.count - 1),new_hashobj__174621));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__174631 = ks.length;

var i__174632 = 0;
var out__174633 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__174632 < len__174631)))
{{
var G__174634 = (i__174632 + 1);
var G__174635 = cljs.core.assoc.call(null,out__174633,(ks[i__174632]),(vs[i__174632]));
i__174632 = G__174634;
out__174633 = G__174635;
continue;
}
} else
{return out__174633;
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
var in$__174636 = cljs.core.seq.call(null,keyvals);
var out__174637 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__174636))
{{
var G__174638 = cljs.core.nnext.call(null,in$__174636);
var G__174639 = cljs.core.assoc.call(null,out__174637,cljs.core.first.call(null,in$__174636),cljs.core.second.call(null,in$__174636));
in$__174636 = G__174638;
out__174637 = G__174639;
continue;
}
} else
{return out__174637;
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
hash_map.cljs$lang$applyTo = (function (arglist__174640){
var keyvals = cljs.core.seq( arglist__174640 );;
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
{return cljs.core.reduce.call(null,(function (p1__174641_SHARP_,p2__174642_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____174643 = p1__174641_SHARP_;

if(cljs.core.truth_(or__3548__auto____174643))
{return or__3548__auto____174643;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__174642_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__174644){
var maps = cljs.core.seq( arglist__174644 );;
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
{var merge_entry__174647 = (function (m,e){
var k__174645 = cljs.core.first.call(null,e);
var v__174646 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__174645)))
{return cljs.core.assoc.call(null,m,k__174645,f.call(null,cljs.core.get.call(null,m,k__174645),v__174646));
} else
{return cljs.core.assoc.call(null,m,k__174645,v__174646);
}
});
var merge2__174649 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__174647,(function (){var or__3548__auto____174648 = m1;

if(cljs.core.truth_(or__3548__auto____174648))
{return or__3548__auto____174648;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__174649,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__174650){
var f = cljs.core.first(arglist__174650);
var maps = cljs.core.rest(arglist__174650);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__174652 = cljs.core.ObjMap.fromObject([],{});
var keys__174653 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__174653))
{var key__174654 = cljs.core.first.call(null,keys__174653);
var entry__174655 = cljs.core.get.call(null,map,key__174654,"\uFDD0'user/not-found");

{
var G__174656 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__174655,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__174652,key__174654,entry__174655):ret__174652);
var G__174657 = cljs.core.next.call(null,keys__174653);
ret__174652 = G__174656;
keys__174653 = G__174657;
continue;
}
} else
{return ret__174652;
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
var this__174658 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__174679 = null;
var G__174679__174680 = (function (coll,v){
var this__174659 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__174679__174681 = (function (coll,v,not_found){
var this__174660 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__174660.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__174679 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__174679__174680.call(this,coll,v);
case  3 :
return G__174679__174681.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174679;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__174683 = null;
var G__174683__174684 = (function (tsym174661,k){
var this__174663 = this;
var tsym174661__174664 = this;

var coll__174665 = tsym174661__174664;

return cljs.core._lookup.call(null,coll__174665,k);
});
var G__174683__174685 = (function (tsym174662,k,not_found){
var this__174666 = this;
var tsym174662__174667 = this;

var coll__174668 = tsym174662__174667;

return cljs.core._lookup.call(null,coll__174668,k,not_found);
});
G__174683 = function(tsym174662,k,not_found){
switch(arguments.length){
case  2 :
return G__174683__174684.call(this,tsym174662,k);
case  3 :
return G__174683__174685.call(this,tsym174662,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174683;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__174669 = this;
return (new cljs.core.Set(this__174669.meta,cljs.core.assoc.call(null,this__174669.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__174670 = this;
return cljs.core.keys.call(null,this__174670.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__174671 = this;
return (new cljs.core.Set(this__174671.meta,cljs.core.dissoc.call(null,this__174671.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__174672 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__174673 = this;
var and__3546__auto____174674 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____174674))
{var and__3546__auto____174675 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____174675))
{return cljs.core.every_QMARK_.call(null,(function (p1__174651_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__174651_SHARP_);
}),other);
} else
{return and__3546__auto____174675;
}
} else
{return and__3546__auto____174674;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__174676 = this;
return (new cljs.core.Set(meta,this__174676.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__174677 = this;
return this__174677.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__174678 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__174678.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__174688 = cljs.core.seq.call(null,coll);
var out__174689 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__174688))))
{{
var G__174690 = cljs.core.rest.call(null,in$__174688);
var G__174691 = cljs.core.conj.call(null,out__174689,cljs.core.first.call(null,in$__174688));
in$__174688 = G__174690;
out__174689 = G__174691;
continue;
}
} else
{return out__174689;
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
{var n__174692 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____174693 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____174693))
{var e__174694 = temp__3695__auto____174693;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__174694));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__174692,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__174687_SHARP_){
var temp__3695__auto____174695 = cljs.core.find.call(null,smap,p1__174687_SHARP_);

if(cljs.core.truth_(temp__3695__auto____174695))
{var e__174696 = temp__3695__auto____174695;

return cljs.core.second.call(null,e__174696);
} else
{return p1__174687_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__174704 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__174697,seen){
while(true){
var vec__174698__174699 = p__174697;
var f__174700 = cljs.core.nth.call(null,vec__174698__174699,0,null);
var xs__174701 = vec__174698__174699;

var temp__3698__auto____174702 = cljs.core.seq.call(null,xs__174701);

if(cljs.core.truth_(temp__3698__auto____174702))
{var s__174703 = temp__3698__auto____174702;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__174700)))
{{
var G__174705 = cljs.core.rest.call(null,s__174703);
var G__174706 = seen;
p__174697 = G__174705;
seen = G__174706;
continue;
}
} else
{return cljs.core.cons.call(null,f__174700,step.call(null,cljs.core.rest.call(null,s__174703),cljs.core.conj.call(null,seen,f__174700)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__174704.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__174707 = cljs.core.PersistentVector.fromArray([]);
var s__174708 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__174708)))
{{
var G__174709 = cljs.core.conj.call(null,ret__174707,cljs.core.first.call(null,s__174708));
var G__174710 = cljs.core.next.call(null,s__174708);
ret__174707 = G__174709;
s__174708 = G__174710;
continue;
}
} else
{return cljs.core.seq.call(null,ret__174707);
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
{if(cljs.core.truth_((function (){var or__3548__auto____174711 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____174711))
{return or__3548__auto____174711;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__174712 = x.lastIndexOf("/");

if(cljs.core.truth_((i__174712 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__174712 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____174713 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____174713))
{return or__3548__auto____174713;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__174714 = x.lastIndexOf("/");

if(cljs.core.truth_((i__174714 > -1)))
{return cljs.core.subs.call(null,x,2,i__174714);
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
var map__174717 = cljs.core.ObjMap.fromObject([],{});
var ks__174718 = cljs.core.seq.call(null,keys);
var vs__174719 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____174720 = ks__174718;

if(cljs.core.truth_(and__3546__auto____174720))
{return vs__174719;
} else
{return and__3546__auto____174720;
}
})()))
{{
var G__174721 = cljs.core.assoc.call(null,map__174717,cljs.core.first.call(null,ks__174718),cljs.core.first.call(null,vs__174719));
var G__174722 = cljs.core.next.call(null,ks__174718);
var G__174723 = cljs.core.next.call(null,vs__174719);
map__174717 = G__174721;
ks__174718 = G__174722;
vs__174719 = G__174723;
continue;
}
} else
{return map__174717;
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
var max_key__174726 = (function (k,x){
return x;
});
var max_key__174727 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__174728 = (function() { 
var G__174730__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__174715_SHARP_,p2__174716_SHARP_){
return max_key.call(null,k,p1__174715_SHARP_,p2__174716_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__174730 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174730__delegate.call(this, k, x, y, more);
};
G__174730.cljs$lang$maxFixedArity = 3;
G__174730.cljs$lang$applyTo = (function (arglist__174731){
var k = cljs.core.first(arglist__174731);
var x = cljs.core.first(cljs.core.next(arglist__174731));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174731)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174731)));
return G__174730__delegate.call(this, k, x, y, more);
});
return G__174730;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__174726.call(this,k,x);
case  3 :
return max_key__174727.call(this,k,x,y);
default:
return max_key__174728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__174728.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__174732 = (function (k,x){
return x;
});
var min_key__174733 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__174734 = (function() { 
var G__174736__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__174724_SHARP_,p2__174725_SHARP_){
return min_key.call(null,k,p1__174724_SHARP_,p2__174725_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__174736 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174736__delegate.call(this, k, x, y, more);
};
G__174736.cljs$lang$maxFixedArity = 3;
G__174736.cljs$lang$applyTo = (function (arglist__174737){
var k = cljs.core.first(arglist__174737);
var x = cljs.core.first(cljs.core.next(arglist__174737));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174737)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174737)));
return G__174736__delegate.call(this, k, x, y, more);
});
return G__174736;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__174732.call(this,k,x);
case  3 :
return min_key__174733.call(this,k,x,y);
default:
return min_key__174734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__174734.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__174740 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__174741 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____174738 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174738))
{var s__174739 = temp__3698__auto____174738;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__174739),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__174739)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__174740.call(this,n,step);
case  3 :
return partition_all__174741.call(this,n,step,coll);
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
var temp__3698__auto____174743 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174743))
{var s__174744 = temp__3698__auto____174743;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__174744))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__174744),take_while.call(null,pred,cljs.core.rest.call(null,s__174744)));
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
var this__174745 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__174746 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__174762 = null;
var G__174762__174763 = (function (rng,f){
var this__174747 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__174762__174764 = (function (rng,f,s){
var this__174748 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__174762 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__174762__174763.call(this,rng,f);
case  3 :
return G__174762__174764.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174762;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__174749 = this;
var comp__174750 = (cljs.core.truth_((this__174749.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__174750.call(null,this__174749.start,this__174749.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__174751 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__174751.end - this__174751.start) / this__174751.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__174752 = this;
return this__174752.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__174753 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__174753.meta,(this__174753.start + this__174753.step),this__174753.end,this__174753.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__174754 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__174755 = this;
return (new cljs.core.Range(meta,this__174755.start,this__174755.end,this__174755.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__174756 = this;
return this__174756.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__174766 = null;
var G__174766__174767 = (function (rng,n){
var this__174757 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__174757.start + (n * this__174757.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____174758 = (this__174757.start > this__174757.end);

if(cljs.core.truth_(and__3546__auto____174758))
{return cljs.core._EQ_.call(null,this__174757.step,0);
} else
{return and__3546__auto____174758;
}
})()))
{return this__174757.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__174766__174768 = (function (rng,n,not_found){
var this__174759 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__174759.start + (n * this__174759.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____174760 = (this__174759.start > this__174759.end);

if(cljs.core.truth_(and__3546__auto____174760))
{return cljs.core._EQ_.call(null,this__174759.step,0);
} else
{return and__3546__auto____174760;
}
})()))
{return this__174759.start;
} else
{return not_found;
}
}
});
G__174766 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__174766__174767.call(this,rng,n);
case  3 :
return G__174766__174768.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__174766;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__174761 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__174761.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__174770 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__174771 = (function (end){
return range.call(null,0,end,1);
});
var range__174772 = (function (start,end){
return range.call(null,start,end,1);
});
var range__174773 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__174770.call(this);
case  1 :
return range__174771.call(this,start);
case  2 :
return range__174772.call(this,start,end);
case  3 :
return range__174773.call(this,start,end,step);
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
var temp__3698__auto____174775 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174775))
{var s__174776 = temp__3698__auto____174775;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__174776),take_nth.call(null,n,cljs.core.drop.call(null,n,s__174776)));
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
var temp__3698__auto____174778 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174778))
{var s__174779 = temp__3698__auto____174778;

var fst__174780 = cljs.core.first.call(null,s__174779);
var fv__174781 = f.call(null,fst__174780);
var run__174782 = cljs.core.cons.call(null,fst__174780,cljs.core.take_while.call(null,(function (p1__174777_SHARP_){
return cljs.core._EQ_.call(null,fv__174781,f.call(null,p1__174777_SHARP_));
}),cljs.core.next.call(null,s__174779)));

return cljs.core.cons.call(null,run__174782,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__174782),s__174779))));
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
var reductions__174797 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____174793 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____174793))
{var s__174794 = temp__3695__auto____174793;

return reductions.call(null,f,cljs.core.first.call(null,s__174794),cljs.core.rest.call(null,s__174794));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__174798 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____174795 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____174795))
{var s__174796 = temp__3698__auto____174795;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__174796)),cljs.core.rest.call(null,s__174796));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__174797.call(this,f,init);
case  3 :
return reductions__174798.call(this,f,init,coll);
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
var juxt__174801 = (function (f){
return (function() {
var G__174806 = null;
var G__174806__174807 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__174806__174808 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__174806__174809 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__174806__174810 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__174806__174811 = (function() { 
var G__174813__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__174813 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174813__delegate.call(this, x, y, z, args);
};
G__174813.cljs$lang$maxFixedArity = 3;
G__174813.cljs$lang$applyTo = (function (arglist__174814){
var x = cljs.core.first(arglist__174814);
var y = cljs.core.first(cljs.core.next(arglist__174814));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174814)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174814)));
return G__174813__delegate.call(this, x, y, z, args);
});
return G__174813;
})()
;
G__174806 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__174806__174807.call(this);
case  1 :
return G__174806__174808.call(this,x);
case  2 :
return G__174806__174809.call(this,x,y);
case  3 :
return G__174806__174810.call(this,x,y,z);
default:
return G__174806__174811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__174806.cljs$lang$maxFixedArity = 3;
G__174806.cljs$lang$applyTo = G__174806__174811.cljs$lang$applyTo;
return G__174806;
})()
});
var juxt__174802 = (function (f,g){
return (function() {
var G__174815 = null;
var G__174815__174816 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__174815__174817 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__174815__174818 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__174815__174819 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__174815__174820 = (function() { 
var G__174822__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__174822 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174822__delegate.call(this, x, y, z, args);
};
G__174822.cljs$lang$maxFixedArity = 3;
G__174822.cljs$lang$applyTo = (function (arglist__174823){
var x = cljs.core.first(arglist__174823);
var y = cljs.core.first(cljs.core.next(arglist__174823));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174823)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174823)));
return G__174822__delegate.call(this, x, y, z, args);
});
return G__174822;
})()
;
G__174815 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__174815__174816.call(this);
case  1 :
return G__174815__174817.call(this,x);
case  2 :
return G__174815__174818.call(this,x,y);
case  3 :
return G__174815__174819.call(this,x,y,z);
default:
return G__174815__174820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__174815.cljs$lang$maxFixedArity = 3;
G__174815.cljs$lang$applyTo = G__174815__174820.cljs$lang$applyTo;
return G__174815;
})()
});
var juxt__174803 = (function (f,g,h){
return (function() {
var G__174824 = null;
var G__174824__174825 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__174824__174826 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__174824__174827 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__174824__174828 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__174824__174829 = (function() { 
var G__174831__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__174831 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174831__delegate.call(this, x, y, z, args);
};
G__174831.cljs$lang$maxFixedArity = 3;
G__174831.cljs$lang$applyTo = (function (arglist__174832){
var x = cljs.core.first(arglist__174832);
var y = cljs.core.first(cljs.core.next(arglist__174832));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174832)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174832)));
return G__174831__delegate.call(this, x, y, z, args);
});
return G__174831;
})()
;
G__174824 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__174824__174825.call(this);
case  1 :
return G__174824__174826.call(this,x);
case  2 :
return G__174824__174827.call(this,x,y);
case  3 :
return G__174824__174828.call(this,x,y,z);
default:
return G__174824__174829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__174824.cljs$lang$maxFixedArity = 3;
G__174824.cljs$lang$applyTo = G__174824__174829.cljs$lang$applyTo;
return G__174824;
})()
});
var juxt__174804 = (function() { 
var G__174833__delegate = function (f,g,h,fs){
var fs__174800 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__174834 = null;
var G__174834__174835 = (function (){
return cljs.core.reduce.call(null,(function (p1__174783_SHARP_,p2__174784_SHARP_){
return cljs.core.conj.call(null,p1__174783_SHARP_,p2__174784_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__174800);
});
var G__174834__174836 = (function (x){
return cljs.core.reduce.call(null,(function (p1__174785_SHARP_,p2__174786_SHARP_){
return cljs.core.conj.call(null,p1__174785_SHARP_,p2__174786_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__174800);
});
var G__174834__174837 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__174787_SHARP_,p2__174788_SHARP_){
return cljs.core.conj.call(null,p1__174787_SHARP_,p2__174788_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__174800);
});
var G__174834__174838 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__174789_SHARP_,p2__174790_SHARP_){
return cljs.core.conj.call(null,p1__174789_SHARP_,p2__174790_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__174800);
});
var G__174834__174839 = (function() { 
var G__174841__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__174791_SHARP_,p2__174792_SHARP_){
return cljs.core.conj.call(null,p1__174791_SHARP_,cljs.core.apply.call(null,p2__174792_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__174800);
};
var G__174841 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174841__delegate.call(this, x, y, z, args);
};
G__174841.cljs$lang$maxFixedArity = 3;
G__174841.cljs$lang$applyTo = (function (arglist__174842){
var x = cljs.core.first(arglist__174842);
var y = cljs.core.first(cljs.core.next(arglist__174842));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174842)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174842)));
return G__174841__delegate.call(this, x, y, z, args);
});
return G__174841;
})()
;
G__174834 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__174834__174835.call(this);
case  1 :
return G__174834__174836.call(this,x);
case  2 :
return G__174834__174837.call(this,x,y);
case  3 :
return G__174834__174838.call(this,x,y,z);
default:
return G__174834__174839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__174834.cljs$lang$maxFixedArity = 3;
G__174834.cljs$lang$applyTo = G__174834__174839.cljs$lang$applyTo;
return G__174834;
})()
};
var G__174833 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__174833__delegate.call(this, f, g, h, fs);
};
G__174833.cljs$lang$maxFixedArity = 3;
G__174833.cljs$lang$applyTo = (function (arglist__174843){
var f = cljs.core.first(arglist__174843);
var g = cljs.core.first(cljs.core.next(arglist__174843));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174843)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__174843)));
return G__174833__delegate.call(this, f, g, h, fs);
});
return G__174833;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__174801.call(this,f);
case  2 :
return juxt__174802.call(this,f,g);
case  3 :
return juxt__174803.call(this,f,g,h);
default:
return juxt__174804.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__174804.cljs$lang$applyTo;
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
var dorun__174845 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__174848 = cljs.core.next.call(null,coll);
coll = G__174848;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__174846 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____174844 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____174844))
{return (n > 0);
} else
{return and__3546__auto____174844;
}
})()))
{{
var G__174849 = (n - 1);
var G__174850 = cljs.core.next.call(null,coll);
n = G__174849;
coll = G__174850;
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
return dorun__174845.call(this,n);
case  2 :
return dorun__174846.call(this,n,coll);
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
var doall__174851 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__174852 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__174851.call(this,n);
case  2 :
return doall__174852.call(this,n,coll);
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
var matches__174854 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__174854),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__174854),1)))
{return cljs.core.first.call(null,matches__174854);
} else
{return cljs.core.vec.call(null,matches__174854);
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
var matches__174855 = re.exec(s);

if(cljs.core.truth_((matches__174855 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__174855),1)))
{return cljs.core.first.call(null,matches__174855);
} else
{return cljs.core.vec.call(null,matches__174855);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__174856 = cljs.core.re_find.call(null,re,s);
var match_idx__174857 = s.search(re);
var match_str__174858 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__174856))?cljs.core.first.call(null,match_data__174856):match_data__174856);
var post_match__174859 = cljs.core.subs.call(null,s,(match_idx__174857 + cljs.core.count.call(null,match_str__174858)));

if(cljs.core.truth_(match_data__174856))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__174856,re_seq.call(null,re,post_match__174859));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__174861__174862 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___174863 = cljs.core.nth.call(null,vec__174861__174862,0,null);
var flags__174864 = cljs.core.nth.call(null,vec__174861__174862,1,null);
var pattern__174865 = cljs.core.nth.call(null,vec__174861__174862,2,null);

return (new RegExp(pattern__174865,flags__174864));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__174860_SHARP_){
return print_one.call(null,p1__174860_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____174866 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____174866))
{var and__3546__auto____174870 = (function (){var x__451__auto____174867 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____174868 = x__451__auto____174867;

if(cljs.core.truth_(and__3546__auto____174868))
{var and__3546__auto____174869 = x__451__auto____174867.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____174869))
{return cljs.core.not.call(null,x__451__auto____174867.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____174869;
}
} else
{return and__3546__auto____174868;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____174867);
}
})();

if(cljs.core.truth_(and__3546__auto____174870))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____174870;
}
} else
{return and__3546__auto____174866;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____174871 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____174872 = x__451__auto____174871;

if(cljs.core.truth_(and__3546__auto____174872))
{var and__3546__auto____174873 = x__451__auto____174871.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____174873))
{return cljs.core.not.call(null,x__451__auto____174871.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____174873;
}
} else
{return and__3546__auto____174872;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____174871);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__174874 = cljs.core.first.call(null,objs);
var sb__174875 = (new goog.string.StringBuffer());

var G__174876__174877 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__174876__174877))
{var obj__174878 = cljs.core.first.call(null,G__174876__174877);
var G__174876__174879 = G__174876__174877;

while(true){
if(cljs.core.truth_((obj__174878 === first_obj__174874)))
{} else
{sb__174875.append(" ");
}
var G__174880__174881 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__174878,opts));

if(cljs.core.truth_(G__174880__174881))
{var string__174882 = cljs.core.first.call(null,G__174880__174881);
var G__174880__174883 = G__174880__174881;

while(true){
sb__174875.append(string__174882);
var temp__3698__auto____174884 = cljs.core.next.call(null,G__174880__174883);

if(cljs.core.truth_(temp__3698__auto____174884))
{var G__174880__174885 = temp__3698__auto____174884;

{
var G__174888 = cljs.core.first.call(null,G__174880__174885);
var G__174889 = G__174880__174885;
string__174882 = G__174888;
G__174880__174883 = G__174889;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____174886 = cljs.core.next.call(null,G__174876__174879);

if(cljs.core.truth_(temp__3698__auto____174886))
{var G__174876__174887 = temp__3698__auto____174886;

{
var G__174890 = cljs.core.first.call(null,G__174876__174887);
var G__174891 = G__174876__174887;
obj__174878 = G__174890;
G__174876__174879 = G__174891;
continue;
}
} else
{}
break;
}
} else
{}
return sb__174875;
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
var sb__174892 = cljs.core.pr_sb.call(null,objs,opts);

sb__174892.append("\n");
return cljs.core.str.call(null,sb__174892);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__174893 = cljs.core.first.call(null,objs);

var G__174894__174895 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__174894__174895))
{var obj__174896 = cljs.core.first.call(null,G__174894__174895);
var G__174894__174897 = G__174894__174895;

while(true){
if(cljs.core.truth_((obj__174896 === first_obj__174893)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__174898__174899 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__174896,opts));

if(cljs.core.truth_(G__174898__174899))
{var string__174900 = cljs.core.first.call(null,G__174898__174899);
var G__174898__174901 = G__174898__174899;

while(true){
cljs.core.string_print.call(null,string__174900);
var temp__3698__auto____174902 = cljs.core.next.call(null,G__174898__174901);

if(cljs.core.truth_(temp__3698__auto____174902))
{var G__174898__174903 = temp__3698__auto____174902;

{
var G__174906 = cljs.core.first.call(null,G__174898__174903);
var G__174907 = G__174898__174903;
string__174900 = G__174906;
G__174898__174901 = G__174907;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____174904 = cljs.core.next.call(null,G__174894__174897);

if(cljs.core.truth_(temp__3698__auto____174904))
{var G__174894__174905 = temp__3698__auto____174904;

{
var G__174908 = cljs.core.first.call(null,G__174894__174905);
var G__174909 = G__174894__174905;
obj__174896 = G__174908;
G__174894__174897 = G__174909;
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
pr_str.cljs$lang$applyTo = (function (arglist__174910){
var objs = cljs.core.seq( arglist__174910 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__174911){
var objs = cljs.core.seq( arglist__174911 );;
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
pr.cljs$lang$applyTo = (function (arglist__174912){
var objs = cljs.core.seq( arglist__174912 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__174913){
var objs = cljs.core.seq( arglist__174913 );;
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
print_str.cljs$lang$applyTo = (function (arglist__174914){
var objs = cljs.core.seq( arglist__174914 );;
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
println.cljs$lang$applyTo = (function (arglist__174915){
var objs = cljs.core.seq( arglist__174915 );;
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
println_str.cljs$lang$applyTo = (function (arglist__174916){
var objs = cljs.core.seq( arglist__174916 );;
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
prn.cljs$lang$applyTo = (function (arglist__174917){
var objs = cljs.core.seq( arglist__174917 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__174918 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__174918,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____174919 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____174919))
{var nspc__174920 = temp__3698__auto____174919;

return cljs.core.str.call(null,nspc__174920,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____174921 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____174921))
{var nspc__174922 = temp__3698__auto____174921;

return cljs.core.str.call(null,nspc__174922,"/");
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
var pr_pair__174923 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__174923,"{",", ","}",opts,coll);
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
var this__174924 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__174925 = this;
var G__174926__174927 = cljs.core.seq.call(null,this__174925.watches);

if(cljs.core.truth_(G__174926__174927))
{var G__174929__174931 = cljs.core.first.call(null,G__174926__174927);
var vec__174930__174932 = G__174929__174931;
var key__174933 = cljs.core.nth.call(null,vec__174930__174932,0,null);
var f__174934 = cljs.core.nth.call(null,vec__174930__174932,1,null);
var G__174926__174935 = G__174926__174927;

var G__174929__174936 = G__174929__174931;
var G__174926__174937 = G__174926__174935;

while(true){
var vec__174938__174939 = G__174929__174936;
var key__174940 = cljs.core.nth.call(null,vec__174938__174939,0,null);
var f__174941 = cljs.core.nth.call(null,vec__174938__174939,1,null);
var G__174926__174942 = G__174926__174937;

f__174941.call(null,key__174940,this$,oldval,newval);
var temp__3698__auto____174943 = cljs.core.next.call(null,G__174926__174942);

if(cljs.core.truth_(temp__3698__auto____174943))
{var G__174926__174944 = temp__3698__auto____174943;

{
var G__174951 = cljs.core.first.call(null,G__174926__174944);
var G__174952 = G__174926__174944;
G__174929__174936 = G__174951;
G__174926__174937 = G__174952;
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
var this__174945 = this;
return this$.watches = cljs.core.assoc.call(null,this__174945.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__174946 = this;
return this$.watches = cljs.core.dissoc.call(null,this__174946.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__174947 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__174947.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__174948 = this;
return this__174948.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__174949 = this;
return this__174949.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__174950 = this;
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
var atom__174959 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__174960 = (function() { 
var G__174962__delegate = function (x,p__174953){
var map__174954__174955 = p__174953;
var map__174954__174956 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__174954__174955))?cljs.core.apply.call(null,cljs.core.hash_map,map__174954__174955):map__174954__174955);
var validator__174957 = cljs.core.get.call(null,map__174954__174956,"\uFDD0'validator");
var meta__174958 = cljs.core.get.call(null,map__174954__174956,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__174958,validator__174957,null));
};
var G__174962 = function (x,var_args){
var p__174953 = null;
if (goog.isDef(var_args)) {
  p__174953 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__174962__delegate.call(this, x, p__174953);
};
G__174962.cljs$lang$maxFixedArity = 1;
G__174962.cljs$lang$applyTo = (function (arglist__174963){
var x = cljs.core.first(arglist__174963);
var p__174953 = cljs.core.rest(arglist__174963);
return G__174962__delegate.call(this, x, p__174953);
});
return G__174962;
})()
;
atom = function(x,var_args){
var p__174953 = var_args;
switch(arguments.length){
case  1 :
return atom__174959.call(this,x);
default:
return atom__174960.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__174960.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____174964 = a.validator;

if(cljs.core.truth_(temp__3698__auto____174964))
{var validate__174965 = temp__3698__auto____174964;

if(cljs.core.truth_(validate__174965.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__174966 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__174966,new_value);
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
var swap_BANG___174967 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___174968 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___174969 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___174970 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___174971 = (function() { 
var G__174973__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__174973 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__174973__delegate.call(this, a, f, x, y, z, more);
};
G__174973.cljs$lang$maxFixedArity = 5;
G__174973.cljs$lang$applyTo = (function (arglist__174974){
var a = cljs.core.first(arglist__174974);
var f = cljs.core.first(cljs.core.next(arglist__174974));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__174974)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__174974))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__174974)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__174974)))));
return G__174973__delegate.call(this, a, f, x, y, z, more);
});
return G__174973;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___174967.call(this,a,f);
case  3 :
return swap_BANG___174968.call(this,a,f,x);
case  4 :
return swap_BANG___174969.call(this,a,f,x,y);
case  5 :
return swap_BANG___174970.call(this,a,f,x,y,z);
default:
return swap_BANG___174971.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___174971.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__174975){
var iref = cljs.core.first(arglist__174975);
var f = cljs.core.first(cljs.core.next(arglist__174975));
var args = cljs.core.rest(cljs.core.next(arglist__174975));
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
var gensym__174976 = (function (){
return gensym.call(null,"G__");
});
var gensym__174977 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__174976.call(this);
case  1 :
return gensym__174977.call(this,prefix_string);
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
var this__174979 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__174979.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__174980 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__174980.state,(function (p__174981){
var curr_state__174982 = p__174981;
var curr_state__174983 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__174982))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__174982):curr_state__174982);
var done__174984 = cljs.core.get.call(null,curr_state__174983,"\uFDD0'done");

if(cljs.core.truth_(done__174984))
{return curr_state__174983;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__174980.f.call(null)});
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
var map__174985__174986 = options;
var map__174985__174987 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__174985__174986))?cljs.core.apply.call(null,cljs.core.hash_map,map__174985__174986):map__174985__174986);
var keywordize_keys__174988 = cljs.core.get.call(null,map__174985__174987,"\uFDD0'keywordize-keys");
var keyfn__174989 = (cljs.core.truth_(keywordize_keys__174988)?cljs.core.keyword:cljs.core.str);
var f__174995 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____174994 = (function iter__174990(s__174991){
return (new cljs.core.LazySeq(null,false,(function (){
var s__174991__174992 = s__174991;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__174991__174992)))
{var k__174993 = cljs.core.first.call(null,s__174991__174992);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__174989.call(null,k__174993),thisfn.call(null,(x[k__174993]))]),iter__174990.call(null,cljs.core.rest.call(null,s__174991__174992)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____174994.call(null,cljs.core.js_keys.call(null,x));
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

return f__174995.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__174996){
var x = cljs.core.first(arglist__174996);
var options = cljs.core.rest(arglist__174996);
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
var mem__174997 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__175001__delegate = function (args){
var temp__3695__auto____174998 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__174997),args);

if(cljs.core.truth_(temp__3695__auto____174998))
{var v__174999 = temp__3695__auto____174998;

return v__174999;
} else
{var ret__175000 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__174997,cljs.core.assoc,args,ret__175000);
return ret__175000;
}
};
var G__175001 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__175001__delegate.call(this, args);
};
G__175001.cljs$lang$maxFixedArity = 0;
G__175001.cljs$lang$applyTo = (function (arglist__175002){
var args = cljs.core.seq( arglist__175002 );;
return G__175001__delegate.call(this, args);
});
return G__175001;
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
var trampoline__175004 = (function (f){
while(true){
var ret__175003 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__175003)))
{{
var G__175007 = ret__175003;
f = G__175007;
continue;
}
} else
{return ret__175003;
}
break;
}
});
var trampoline__175005 = (function() { 
var G__175008__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__175008 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__175008__delegate.call(this, f, args);
};
G__175008.cljs$lang$maxFixedArity = 1;
G__175008.cljs$lang$applyTo = (function (arglist__175009){
var f = cljs.core.first(arglist__175009);
var args = cljs.core.rest(arglist__175009);
return G__175008__delegate.call(this, f, args);
});
return G__175008;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__175004.call(this,f);
default:
return trampoline__175005.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__175005.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__175010 = (function (){
return rand.call(null,1);
});
var rand__175011 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__175010.call(this);
case  1 :
return rand__175011.call(this,n);
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
var k__175013 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__175013,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__175013,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___175022 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___175023 = (function (h,child,parent){
var or__3548__auto____175014 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____175014))
{return or__3548__auto____175014;
} else
{var or__3548__auto____175015 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____175015))
{return or__3548__auto____175015;
} else
{var and__3546__auto____175016 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____175016))
{var and__3546__auto____175017 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____175017))
{var and__3546__auto____175018 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____175018))
{var ret__175019 = true;
var i__175020 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____175021 = cljs.core.not.call(null,ret__175019);

if(cljs.core.truth_(or__3548__auto____175021))
{return or__3548__auto____175021;
} else
{return cljs.core._EQ_.call(null,i__175020,cljs.core.count.call(null,parent));
}
})()))
{return ret__175019;
} else
{{
var G__175025 = isa_QMARK_.call(null,h,child.call(null,i__175020),parent.call(null,i__175020));
var G__175026 = (i__175020 + 1);
ret__175019 = G__175025;
i__175020 = G__175026;
continue;
}
}
break;
}
} else
{return and__3546__auto____175018;
}
} else
{return and__3546__auto____175017;
}
} else
{return and__3546__auto____175016;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___175022.call(this,h,child);
case  3 :
return isa_QMARK___175023.call(this,h,child,parent);
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
var parents__175027 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__175028 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__175027.call(this,h);
case  2 :
return parents__175028.call(this,h,tag);
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
var ancestors__175030 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__175031 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__175030.call(this,h);
case  2 :
return ancestors__175031.call(this,h,tag);
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
var descendants__175033 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__175034 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__175033.call(this,h);
case  2 :
return descendants__175034.call(this,h,tag);
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
var derive__175044 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__175045 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__175039 = "\uFDD0'parents".call(null,h);
var td__175040 = "\uFDD0'descendants".call(null,h);
var ta__175041 = "\uFDD0'ancestors".call(null,h);
var tf__175042 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____175043 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__175039.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__175041.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__175041.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__175039,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__175042.call(null,"\uFDD0'ancestors".call(null,h),tag,td__175040,parent,ta__175041),"\uFDD0'descendants":tf__175042.call(null,"\uFDD0'descendants".call(null,h),parent,ta__175041,tag,td__175040)});
})());

if(cljs.core.truth_(or__3548__auto____175043))
{return or__3548__auto____175043;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__175044.call(this,h,tag);
case  3 :
return derive__175045.call(this,h,tag,parent);
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
var underive__175051 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__175052 = (function (h,tag,parent){
var parentMap__175047 = "\uFDD0'parents".call(null,h);
var childsParents__175048 = (cljs.core.truth_(parentMap__175047.call(null,tag))?cljs.core.disj.call(null,parentMap__175047.call(null,tag),parent):cljs.core.set([]));
var newParents__175049 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__175048))?cljs.core.assoc.call(null,parentMap__175047,tag,childsParents__175048):cljs.core.dissoc.call(null,parentMap__175047,tag));
var deriv_seq__175050 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__175036_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__175036_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__175036_SHARP_),cljs.core.second.call(null,p1__175036_SHARP_)));
}),cljs.core.seq.call(null,newParents__175049)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__175047.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__175037_SHARP_,p2__175038_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__175037_SHARP_,p2__175038_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__175050));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__175051.call(this,h,tag);
case  3 :
return underive__175052.call(this,h,tag,parent);
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
var xprefs__175054 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____175056 = (cljs.core.truth_((function (){var and__3546__auto____175055 = xprefs__175054;

if(cljs.core.truth_(and__3546__auto____175055))
{return xprefs__175054.call(null,y);
} else
{return and__3546__auto____175055;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____175056))
{return or__3548__auto____175056;
} else
{var or__3548__auto____175058 = (function (){var ps__175057 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__175057) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__175057),prefer_table)))
{} else
{}
{
var G__175061 = cljs.core.rest.call(null,ps__175057);
ps__175057 = G__175061;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____175058))
{return or__3548__auto____175058;
} else
{var or__3548__auto____175060 = (function (){var ps__175059 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__175059) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__175059),y,prefer_table)))
{} else
{}
{
var G__175062 = cljs.core.rest.call(null,ps__175059);
ps__175059 = G__175062;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____175060))
{return or__3548__auto____175060;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____175063 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____175063))
{return or__3548__auto____175063;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__175072 = cljs.core.reduce.call(null,(function (be,p__175064){
var vec__175065__175066 = p__175064;
var k__175067 = cljs.core.nth.call(null,vec__175065__175066,0,null);
var ___175068 = cljs.core.nth.call(null,vec__175065__175066,1,null);
var e__175069 = vec__175065__175066;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__175067)))
{var be2__175071 = (cljs.core.truth_((function (){var or__3548__auto____175070 = (be === null);

if(cljs.core.truth_(or__3548__auto____175070))
{return or__3548__auto____175070;
} else
{return cljs.core.dominates.call(null,k__175067,cljs.core.first.call(null,be),prefer_table);
}
})())?e__175069:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__175071),k__175067,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__175067," and ",cljs.core.first.call(null,be2__175071),", and neither is preferred")));
}
return be2__175071;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__175072))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__175072));
return cljs.core.second.call(null,best_entry__175072);
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
if(cljs.core.truth_((function (){var and__3546__auto____175073 = mf;

if(cljs.core.truth_(and__3546__auto____175073))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____175073;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____175074 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____175074))
{return or__3548__auto____175074;
} else
{var or__3548__auto____175075 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____175075))
{return or__3548__auto____175075;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____175076 = mf;

if(cljs.core.truth_(and__3546__auto____175076))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____175076;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____175077 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____175077))
{return or__3548__auto____175077;
} else
{var or__3548__auto____175078 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____175078))
{return or__3548__auto____175078;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____175079 = mf;

if(cljs.core.truth_(and__3546__auto____175079))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____175079;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____175080 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____175080))
{return or__3548__auto____175080;
} else
{var or__3548__auto____175081 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____175081))
{return or__3548__auto____175081;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____175082 = mf;

if(cljs.core.truth_(and__3546__auto____175082))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____175082;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____175083 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____175083))
{return or__3548__auto____175083;
} else
{var or__3548__auto____175084 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____175084))
{return or__3548__auto____175084;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____175085 = mf;

if(cljs.core.truth_(and__3546__auto____175085))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____175085;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____175086 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____175086))
{return or__3548__auto____175086;
} else
{var or__3548__auto____175087 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____175087))
{return or__3548__auto____175087;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____175088 = mf;

if(cljs.core.truth_(and__3546__auto____175088))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____175088;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____175089 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____175089))
{return or__3548__auto____175089;
} else
{var or__3548__auto____175090 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____175090))
{return or__3548__auto____175090;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____175091 = mf;

if(cljs.core.truth_(and__3546__auto____175091))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____175091;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____175092 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____175092))
{return or__3548__auto____175092;
} else
{var or__3548__auto____175093 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____175093))
{return or__3548__auto____175093;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____175094 = mf;

if(cljs.core.truth_(and__3546__auto____175094))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____175094;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____175095 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____175095))
{return or__3548__auto____175095;
} else
{var or__3548__auto____175096 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____175096))
{return or__3548__auto____175096;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__175097 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__175098 = cljs.core._get_method.call(null,mf,dispatch_val__175097);

if(cljs.core.truth_(target_fn__175098))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__175097)));
}
return cljs.core.apply.call(null,target_fn__175098,args);
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
var this__175099 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__175100 = this;
cljs.core.swap_BANG_.call(null,this__175100.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__175100.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__175100.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__175100.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__175101 = this;
cljs.core.swap_BANG_.call(null,this__175101.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__175101.method_cache,this__175101.method_table,this__175101.cached_hierarchy,this__175101.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__175102 = this;
cljs.core.swap_BANG_.call(null,this__175102.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__175102.method_cache,this__175102.method_table,this__175102.cached_hierarchy,this__175102.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__175103 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__175103.cached_hierarchy),cljs.core.deref.call(null,this__175103.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__175103.method_cache,this__175103.method_table,this__175103.cached_hierarchy,this__175103.hierarchy);
}
var temp__3695__auto____175104 = cljs.core.deref.call(null,this__175103.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____175104))
{var target_fn__175105 = temp__3695__auto____175104;

return target_fn__175105;
} else
{var temp__3695__auto____175106 = cljs.core.find_and_cache_best_method.call(null,this__175103.name,dispatch_val,this__175103.hierarchy,this__175103.method_table,this__175103.prefer_table,this__175103.method_cache,this__175103.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____175106))
{var target_fn__175107 = temp__3695__auto____175106;

return target_fn__175107;
} else
{return cljs.core.deref.call(null,this__175103.method_table).call(null,this__175103.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__175108 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__175108.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__175108.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__175108.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__175108.method_cache,this__175108.method_table,this__175108.cached_hierarchy,this__175108.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__175109 = this;
return cljs.core.deref.call(null,this__175109.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__175110 = this;
return cljs.core.deref.call(null,this__175110.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__175111 = this;
return cljs.core.do_dispatch.call(null,mf,this__175111.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__175112__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__175112 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__175112__delegate.call(this, _, args);
};
G__175112.cljs$lang$maxFixedArity = 1;
G__175112.cljs$lang$applyTo = (function (arglist__175113){
var _ = cljs.core.first(arglist__175113);
var args = cljs.core.rest(arglist__175113);
return G__175112__delegate.call(this, _, args);
});
return G__175112;
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
