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
var or__3548__auto____79441 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____79441))
{return or__3548__auto____79441;
} else
{var or__3548__auto____79442 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____79442))
{return or__3548__auto____79442;
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
var _invoke__79506 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____79443 = this$;

if(cljs.core.truth_(and__3546__auto____79443))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79443;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____79444 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79444))
{return or__3548__auto____79444;
} else
{var or__3548__auto____79445 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79445))
{return or__3548__auto____79445;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__79507 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____79446 = this$;

if(cljs.core.truth_(and__3546__auto____79446))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79446;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____79447 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79447))
{return or__3548__auto____79447;
} else
{var or__3548__auto____79448 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79448))
{return or__3548__auto____79448;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__79508 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____79449 = this$;

if(cljs.core.truth_(and__3546__auto____79449))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79449;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____79450 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79450))
{return or__3548__auto____79450;
} else
{var or__3548__auto____79451 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79451))
{return or__3548__auto____79451;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__79509 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____79452 = this$;

if(cljs.core.truth_(and__3546__auto____79452))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79452;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____79453 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79453))
{return or__3548__auto____79453;
} else
{var or__3548__auto____79454 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79454))
{return or__3548__auto____79454;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__79510 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____79455 = this$;

if(cljs.core.truth_(and__3546__auto____79455))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79455;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____79456 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79456))
{return or__3548__auto____79456;
} else
{var or__3548__auto____79457 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79457))
{return or__3548__auto____79457;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__79511 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____79458 = this$;

if(cljs.core.truth_(and__3546__auto____79458))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79458;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____79459 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79459))
{return or__3548__auto____79459;
} else
{var or__3548__auto____79460 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79460))
{return or__3548__auto____79460;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__79512 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____79461 = this$;

if(cljs.core.truth_(and__3546__auto____79461))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79461;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____79462 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79462))
{return or__3548__auto____79462;
} else
{var or__3548__auto____79463 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79463))
{return or__3548__auto____79463;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__79513 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____79464 = this$;

if(cljs.core.truth_(and__3546__auto____79464))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79464;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____79465 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79465))
{return or__3548__auto____79465;
} else
{var or__3548__auto____79466 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79466))
{return or__3548__auto____79466;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__79514 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____79467 = this$;

if(cljs.core.truth_(and__3546__auto____79467))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79467;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____79468 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79468))
{return or__3548__auto____79468;
} else
{var or__3548__auto____79469 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79469))
{return or__3548__auto____79469;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__79515 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____79470 = this$;

if(cljs.core.truth_(and__3546__auto____79470))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79470;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____79471 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79471))
{return or__3548__auto____79471;
} else
{var or__3548__auto____79472 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79472))
{return or__3548__auto____79472;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__79516 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____79473 = this$;

if(cljs.core.truth_(and__3546__auto____79473))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79473;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____79474 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79474))
{return or__3548__auto____79474;
} else
{var or__3548__auto____79475 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79475))
{return or__3548__auto____79475;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__79517 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____79476 = this$;

if(cljs.core.truth_(and__3546__auto____79476))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79476;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____79477 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79477))
{return or__3548__auto____79477;
} else
{var or__3548__auto____79478 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79478))
{return or__3548__auto____79478;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__79518 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____79479 = this$;

if(cljs.core.truth_(and__3546__auto____79479))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79479;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____79480 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79480))
{return or__3548__auto____79480;
} else
{var or__3548__auto____79481 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79481))
{return or__3548__auto____79481;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__79519 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____79482 = this$;

if(cljs.core.truth_(and__3546__auto____79482))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79482;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____79483 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79483))
{return or__3548__auto____79483;
} else
{var or__3548__auto____79484 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79484))
{return or__3548__auto____79484;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__79520 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____79485 = this$;

if(cljs.core.truth_(and__3546__auto____79485))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79485;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____79486 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79486))
{return or__3548__auto____79486;
} else
{var or__3548__auto____79487 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79487))
{return or__3548__auto____79487;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__79521 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____79488 = this$;

if(cljs.core.truth_(and__3546__auto____79488))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79488;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____79489 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79489))
{return or__3548__auto____79489;
} else
{var or__3548__auto____79490 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79490))
{return or__3548__auto____79490;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__79522 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____79491 = this$;

if(cljs.core.truth_(and__3546__auto____79491))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79491;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____79492 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79492))
{return or__3548__auto____79492;
} else
{var or__3548__auto____79493 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79493))
{return or__3548__auto____79493;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__79523 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____79494 = this$;

if(cljs.core.truth_(and__3546__auto____79494))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79494;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____79495 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79495))
{return or__3548__auto____79495;
} else
{var or__3548__auto____79496 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79496))
{return or__3548__auto____79496;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__79524 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____79497 = this$;

if(cljs.core.truth_(and__3546__auto____79497))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79497;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____79498 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79498))
{return or__3548__auto____79498;
} else
{var or__3548__auto____79499 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79499))
{return or__3548__auto____79499;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__79525 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____79500 = this$;

if(cljs.core.truth_(and__3546__auto____79500))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79500;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____79501 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79501))
{return or__3548__auto____79501;
} else
{var or__3548__auto____79502 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79502))
{return or__3548__auto____79502;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__79526 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____79503 = this$;

if(cljs.core.truth_(and__3546__auto____79503))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____79503;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____79504 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79504))
{return or__3548__auto____79504;
} else
{var or__3548__auto____79505 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____79505))
{return or__3548__auto____79505;
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
return _invoke__79506.call(this,this$);
case  2 :
return _invoke__79507.call(this,this$,a);
case  3 :
return _invoke__79508.call(this,this$,a,b);
case  4 :
return _invoke__79509.call(this,this$,a,b,c);
case  5 :
return _invoke__79510.call(this,this$,a,b,c,d);
case  6 :
return _invoke__79511.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__79512.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__79513.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__79514.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__79515.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__79516.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__79517.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__79518.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__79519.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__79520.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__79521.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__79522.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__79523.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__79524.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__79525.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__79526.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____79528 = coll;

if(cljs.core.truth_(and__3546__auto____79528))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____79528;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____79529 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79529))
{return or__3548__auto____79529;
} else
{var or__3548__auto____79530 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____79530))
{return or__3548__auto____79530;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____79531 = coll;

if(cljs.core.truth_(and__3546__auto____79531))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____79531;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____79532 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79532))
{return or__3548__auto____79532;
} else
{var or__3548__auto____79533 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____79533))
{return or__3548__auto____79533;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____79534 = coll;

if(cljs.core.truth_(and__3546__auto____79534))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____79534;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____79535 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79535))
{return or__3548__auto____79535;
} else
{var or__3548__auto____79536 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____79536))
{return or__3548__auto____79536;
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
var _nth__79543 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____79537 = coll;

if(cljs.core.truth_(and__3546__auto____79537))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____79537;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____79538 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79538))
{return or__3548__auto____79538;
} else
{var or__3548__auto____79539 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____79539))
{return or__3548__auto____79539;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__79544 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____79540 = coll;

if(cljs.core.truth_(and__3546__auto____79540))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____79540;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____79541 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79541))
{return or__3548__auto____79541;
} else
{var or__3548__auto____79542 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____79542))
{return or__3548__auto____79542;
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
return _nth__79543.call(this,coll,n);
case  3 :
return _nth__79544.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____79546 = coll;

if(cljs.core.truth_(and__3546__auto____79546))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____79546;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____79547 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79547))
{return or__3548__auto____79547;
} else
{var or__3548__auto____79548 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____79548))
{return or__3548__auto____79548;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____79549 = coll;

if(cljs.core.truth_(and__3546__auto____79549))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____79549;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____79550 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79550))
{return or__3548__auto____79550;
} else
{var or__3548__auto____79551 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____79551))
{return or__3548__auto____79551;
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
var _lookup__79558 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____79552 = o;

if(cljs.core.truth_(and__3546__auto____79552))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____79552;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____79553 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____79553))
{return or__3548__auto____79553;
} else
{var or__3548__auto____79554 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____79554))
{return or__3548__auto____79554;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__79559 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____79555 = o;

if(cljs.core.truth_(and__3546__auto____79555))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____79555;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____79556 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____79556))
{return or__3548__auto____79556;
} else
{var or__3548__auto____79557 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____79557))
{return or__3548__auto____79557;
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
return _lookup__79558.call(this,o,k);
case  3 :
return _lookup__79559.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____79561 = coll;

if(cljs.core.truth_(and__3546__auto____79561))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____79561;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____79562 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79562))
{return or__3548__auto____79562;
} else
{var or__3548__auto____79563 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____79563))
{return or__3548__auto____79563;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____79564 = coll;

if(cljs.core.truth_(and__3546__auto____79564))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____79564;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____79565 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79565))
{return or__3548__auto____79565;
} else
{var or__3548__auto____79566 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____79566))
{return or__3548__auto____79566;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____79567 = coll;

if(cljs.core.truth_(and__3546__auto____79567))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____79567;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____79568 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79568))
{return or__3548__auto____79568;
} else
{var or__3548__auto____79569 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____79569))
{return or__3548__auto____79569;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____79570 = coll;

if(cljs.core.truth_(and__3546__auto____79570))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____79570;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____79571 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79571))
{return or__3548__auto____79571;
} else
{var or__3548__auto____79572 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____79572))
{return or__3548__auto____79572;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____79573 = coll;

if(cljs.core.truth_(and__3546__auto____79573))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____79573;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____79574 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79574))
{return or__3548__auto____79574;
} else
{var or__3548__auto____79575 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____79575))
{return or__3548__auto____79575;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____79576 = coll;

if(cljs.core.truth_(and__3546__auto____79576))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____79576;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____79577 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79577))
{return or__3548__auto____79577;
} else
{var or__3548__auto____79578 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____79578))
{return or__3548__auto____79578;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____79579 = coll;

if(cljs.core.truth_(and__3546__auto____79579))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____79579;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____79580 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79580))
{return or__3548__auto____79580;
} else
{var or__3548__auto____79581 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____79581))
{return or__3548__auto____79581;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____79582 = o;

if(cljs.core.truth_(and__3546__auto____79582))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____79582;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____79583 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____79583))
{return or__3548__auto____79583;
} else
{var or__3548__auto____79584 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____79584))
{return or__3548__auto____79584;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____79585 = o;

if(cljs.core.truth_(and__3546__auto____79585))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____79585;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____79586 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____79586))
{return or__3548__auto____79586;
} else
{var or__3548__auto____79587 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____79587))
{return or__3548__auto____79587;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____79588 = o;

if(cljs.core.truth_(and__3546__auto____79588))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____79588;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____79589 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____79589))
{return or__3548__auto____79589;
} else
{var or__3548__auto____79590 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____79590))
{return or__3548__auto____79590;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____79591 = o;

if(cljs.core.truth_(and__3546__auto____79591))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____79591;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____79592 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____79592))
{return or__3548__auto____79592;
} else
{var or__3548__auto____79593 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____79593))
{return or__3548__auto____79593;
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
var _reduce__79600 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____79594 = coll;

if(cljs.core.truth_(and__3546__auto____79594))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____79594;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____79595 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79595))
{return or__3548__auto____79595;
} else
{var or__3548__auto____79596 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____79596))
{return or__3548__auto____79596;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__79601 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____79597 = coll;

if(cljs.core.truth_(and__3546__auto____79597))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____79597;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____79598 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____79598))
{return or__3548__auto____79598;
} else
{var or__3548__auto____79599 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____79599))
{return or__3548__auto____79599;
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
return _reduce__79600.call(this,coll,f);
case  3 :
return _reduce__79601.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____79603 = o;

if(cljs.core.truth_(and__3546__auto____79603))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____79603;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____79604 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____79604))
{return or__3548__auto____79604;
} else
{var or__3548__auto____79605 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____79605))
{return or__3548__auto____79605;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____79606 = o;

if(cljs.core.truth_(and__3546__auto____79606))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____79606;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____79607 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____79607))
{return or__3548__auto____79607;
} else
{var or__3548__auto____79608 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____79608))
{return or__3548__auto____79608;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____79609 = o;

if(cljs.core.truth_(and__3546__auto____79609))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____79609;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____79610 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____79610))
{return or__3548__auto____79610;
} else
{var or__3548__auto____79611 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____79611))
{return or__3548__auto____79611;
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
if(cljs.core.truth_((function (){var and__3546__auto____79612 = o;

if(cljs.core.truth_(and__3546__auto____79612))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____79612;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____79613 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____79613))
{return or__3548__auto____79613;
} else
{var or__3548__auto____79614 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____79614))
{return or__3548__auto____79614;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____79615 = d;

if(cljs.core.truth_(and__3546__auto____79615))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____79615;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____79616 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____79616))
{return or__3548__auto____79616;
} else
{var or__3548__auto____79617 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____79617))
{return or__3548__auto____79617;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____79618 = this$;

if(cljs.core.truth_(and__3546__auto____79618))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____79618;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____79619 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79619))
{return or__3548__auto____79619;
} else
{var or__3548__auto____79620 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____79620))
{return or__3548__auto____79620;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____79621 = this$;

if(cljs.core.truth_(and__3546__auto____79621))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____79621;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____79622 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79622))
{return or__3548__auto____79622;
} else
{var or__3548__auto____79623 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____79623))
{return or__3548__auto____79623;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____79624 = this$;

if(cljs.core.truth_(and__3546__auto____79624))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____79624;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____79625 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____79625))
{return or__3548__auto____79625;
} else
{var or__3548__auto____79626 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____79626))
{return or__3548__auto____79626;
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
var G__79627 = null;
var G__79627__79628 = (function (o,k){
return null;
});
var G__79627__79629 = (function (o,k,not_found){
return not_found;
});
G__79627 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__79627__79628.call(this,o,k);
case  3 :
return G__79627__79629.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__79627;
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
var G__79631 = null;
var G__79631__79632 = (function (_,f){
return f.call(null);
});
var G__79631__79633 = (function (_,f,start){
return start;
});
G__79631 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__79631__79632.call(this,_,f);
case  3 :
return G__79631__79633.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__79631;
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
var G__79635 = null;
var G__79635__79636 = (function (_,n){
return null;
});
var G__79635__79637 = (function (_,n,not_found){
return not_found;
});
G__79635 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__79635__79636.call(this,_,n);
case  3 :
return G__79635__79637.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__79635;
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
var ci_reduce__79645 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__79639 = cljs.core._nth.call(null,cicoll,0);
var n__79640 = 1;

while(true){
if(cljs.core.truth_((n__79640 < cljs.core._count.call(null,cicoll))))
{{
var G__79649 = f.call(null,val__79639,cljs.core._nth.call(null,cicoll,n__79640));
var G__79650 = (n__79640 + 1);
val__79639 = G__79649;
n__79640 = G__79650;
continue;
}
} else
{return val__79639;
}
break;
}
}
});
var ci_reduce__79646 = (function (cicoll,f,val){
var val__79641 = val;
var n__79642 = 0;

while(true){
if(cljs.core.truth_((n__79642 < cljs.core._count.call(null,cicoll))))
{{
var G__79651 = f.call(null,val__79641,cljs.core._nth.call(null,cicoll,n__79642));
var G__79652 = (n__79642 + 1);
val__79641 = G__79651;
n__79642 = G__79652;
continue;
}
} else
{return val__79641;
}
break;
}
});
var ci_reduce__79647 = (function (cicoll,f,val,idx){
var val__79643 = val;
var n__79644 = idx;

while(true){
if(cljs.core.truth_((n__79644 < cljs.core._count.call(null,cicoll))))
{{
var G__79653 = f.call(null,val__79643,cljs.core._nth.call(null,cicoll,n__79644));
var G__79654 = (n__79644 + 1);
val__79643 = G__79653;
n__79644 = G__79654;
continue;
}
} else
{return val__79643;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__79645.call(this,cicoll,f);
case  3 :
return ci_reduce__79646.call(this,cicoll,f,val);
case  4 :
return ci_reduce__79647.call(this,cicoll,f,val,idx);
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
var this__79655 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__79668 = null;
var G__79668__79669 = (function (_,f){
var this__79656 = this;
return cljs.core.ci_reduce.call(null,this__79656.a,f,(this__79656.a[this__79656.i]),(this__79656.i + 1));
});
var G__79668__79670 = (function (_,f,start){
var this__79657 = this;
return cljs.core.ci_reduce.call(null,this__79657.a,f,start,this__79657.i);
});
G__79668 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__79668__79669.call(this,_,f);
case  3 :
return G__79668__79670.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__79668;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__79658 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__79659 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__79672 = null;
var G__79672__79673 = (function (coll,n){
var this__79660 = this;
var i__79661 = (n + this__79660.i);

if(cljs.core.truth_((i__79661 < this__79660.a.length)))
{return (this__79660.a[i__79661]);
} else
{return null;
}
});
var G__79672__79674 = (function (coll,n,not_found){
var this__79662 = this;
var i__79663 = (n + this__79662.i);

if(cljs.core.truth_((i__79663 < this__79662.a.length)))
{return (this__79662.a[i__79663]);
} else
{return not_found;
}
});
G__79672 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__79672__79673.call(this,coll,n);
case  3 :
return G__79672__79674.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__79672;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__79664 = this;
return (this__79664.a.length - this__79664.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__79665 = this;
return (this__79665.a[this__79665.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__79666 = this;
if(cljs.core.truth_(((this__79666.i + 1) < this__79666.a.length)))
{return (new cljs.core.IndexedSeq(this__79666.a,(this__79666.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__79667 = this;
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
var G__79676 = null;
var G__79676__79677 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__79676__79678 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__79676 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__79676__79677.call(this,array,f);
case  3 :
return G__79676__79678.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__79676;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__79680 = null;
var G__79680__79681 = (function (array,k){
return (array[k]);
});
var G__79680__79682 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__79680 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__79680__79681.call(this,array,k);
case  3 :
return G__79680__79682.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__79680;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__79684 = null;
var G__79684__79685 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__79684__79686 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__79684 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__79684__79685.call(this,array,n);
case  3 :
return G__79684__79686.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__79684;
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
var temp__3698__auto____79688 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____79688))
{var s__79689 = temp__3698__auto____79688;

return cljs.core._first.call(null,s__79689);
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
var G__79690 = cljs.core.next.call(null,s);
s = G__79690;
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
var s__79691 = cljs.core.seq.call(null,x);
var n__79692 = 0;

while(true){
if(cljs.core.truth_(s__79691))
{{
var G__79693 = cljs.core.next.call(null,s__79691);
var G__79694 = (n__79692 + 1);
s__79691 = G__79693;
n__79692 = G__79694;
continue;
}
} else
{return n__79692;
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
var conj__79695 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__79696 = (function() { 
var G__79698__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__79699 = conj.call(null,coll,x);
var G__79700 = cljs.core.first.call(null,xs);
var G__79701 = cljs.core.next.call(null,xs);
coll = G__79699;
x = G__79700;
xs = G__79701;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__79698 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79698__delegate.call(this, coll, x, xs);
};
G__79698.cljs$lang$maxFixedArity = 2;
G__79698.cljs$lang$applyTo = (function (arglist__79702){
var coll = cljs.core.first(arglist__79702);
var x = cljs.core.first(cljs.core.next(arglist__79702));
var xs = cljs.core.rest(cljs.core.next(arglist__79702));
return G__79698__delegate.call(this, coll, x, xs);
});
return G__79698;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__79695.call(this,coll,x);
default:
return conj__79696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__79696.cljs$lang$applyTo;
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
var nth__79703 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__79704 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__79703.call(this,coll,n);
case  3 :
return nth__79704.call(this,coll,n,not_found);
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
var get__79706 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__79707 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__79706.call(this,o,k);
case  3 :
return get__79707.call(this,o,k,not_found);
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
var assoc__79710 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__79711 = (function() { 
var G__79713__delegate = function (coll,k,v,kvs){
while(true){
var ret__79709 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__79714 = ret__79709;
var G__79715 = cljs.core.first.call(null,kvs);
var G__79716 = cljs.core.second.call(null,kvs);
var G__79717 = cljs.core.nnext.call(null,kvs);
coll = G__79714;
k = G__79715;
v = G__79716;
kvs = G__79717;
continue;
}
} else
{return ret__79709;
}
break;
}
};
var G__79713 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__79713__delegate.call(this, coll, k, v, kvs);
};
G__79713.cljs$lang$maxFixedArity = 3;
G__79713.cljs$lang$applyTo = (function (arglist__79718){
var coll = cljs.core.first(arglist__79718);
var k = cljs.core.first(cljs.core.next(arglist__79718));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__79718)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__79718)));
return G__79713__delegate.call(this, coll, k, v, kvs);
});
return G__79713;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__79710.call(this,coll,k,v);
default:
return assoc__79711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__79711.cljs$lang$applyTo;
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
var dissoc__79720 = (function (coll){
return coll;
});
var dissoc__79721 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__79722 = (function() { 
var G__79724__delegate = function (coll,k,ks){
while(true){
var ret__79719 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__79725 = ret__79719;
var G__79726 = cljs.core.first.call(null,ks);
var G__79727 = cljs.core.next.call(null,ks);
coll = G__79725;
k = G__79726;
ks = G__79727;
continue;
}
} else
{return ret__79719;
}
break;
}
};
var G__79724 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79724__delegate.call(this, coll, k, ks);
};
G__79724.cljs$lang$maxFixedArity = 2;
G__79724.cljs$lang$applyTo = (function (arglist__79728){
var coll = cljs.core.first(arglist__79728);
var k = cljs.core.first(cljs.core.next(arglist__79728));
var ks = cljs.core.rest(cljs.core.next(arglist__79728));
return G__79724__delegate.call(this, coll, k, ks);
});
return G__79724;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__79720.call(this,coll);
case  2 :
return dissoc__79721.call(this,coll,k);
default:
return dissoc__79722.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__79722.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____79729 = o;

if(cljs.core.truth_((function (){var and__3546__auto____79730 = x__451__auto____79729;

if(cljs.core.truth_(and__3546__auto____79730))
{var and__3546__auto____79731 = x__451__auto____79729.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____79731))
{return cljs.core.not.call(null,x__451__auto____79729.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____79731;
}
} else
{return and__3546__auto____79730;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____79729);
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
var disj__79733 = (function (coll){
return coll;
});
var disj__79734 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__79735 = (function() { 
var G__79737__delegate = function (coll,k,ks){
while(true){
var ret__79732 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__79738 = ret__79732;
var G__79739 = cljs.core.first.call(null,ks);
var G__79740 = cljs.core.next.call(null,ks);
coll = G__79738;
k = G__79739;
ks = G__79740;
continue;
}
} else
{return ret__79732;
}
break;
}
};
var G__79737 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79737__delegate.call(this, coll, k, ks);
};
G__79737.cljs$lang$maxFixedArity = 2;
G__79737.cljs$lang$applyTo = (function (arglist__79741){
var coll = cljs.core.first(arglist__79741);
var k = cljs.core.first(cljs.core.next(arglist__79741));
var ks = cljs.core.rest(cljs.core.next(arglist__79741));
return G__79737__delegate.call(this, coll, k, ks);
});
return G__79737;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__79733.call(this,coll);
case  2 :
return disj__79734.call(this,coll,k);
default:
return disj__79735.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__79735.cljs$lang$applyTo;
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
{var x__451__auto____79742 = x;

if(cljs.core.truth_((function (){var and__3546__auto____79743 = x__451__auto____79742;

if(cljs.core.truth_(and__3546__auto____79743))
{var and__3546__auto____79744 = x__451__auto____79742.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____79744))
{return cljs.core.not.call(null,x__451__auto____79742.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____79744;
}
} else
{return and__3546__auto____79743;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____79742);
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
{var x__451__auto____79745 = x;

if(cljs.core.truth_((function (){var and__3546__auto____79746 = x__451__auto____79745;

if(cljs.core.truth_(and__3546__auto____79746))
{var and__3546__auto____79747 = x__451__auto____79745.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____79747))
{return cljs.core.not.call(null,x__451__auto____79745.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____79747;
}
} else
{return and__3546__auto____79746;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____79745);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____79748 = x;

if(cljs.core.truth_((function (){var and__3546__auto____79749 = x__451__auto____79748;

if(cljs.core.truth_(and__3546__auto____79749))
{var and__3546__auto____79750 = x__451__auto____79748.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____79750))
{return cljs.core.not.call(null,x__451__auto____79748.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____79750;
}
} else
{return and__3546__auto____79749;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____79748);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____79751 = x;

if(cljs.core.truth_((function (){var and__3546__auto____79752 = x__451__auto____79751;

if(cljs.core.truth_(and__3546__auto____79752))
{var and__3546__auto____79753 = x__451__auto____79751.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____79753))
{return cljs.core.not.call(null,x__451__auto____79751.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____79753;
}
} else
{return and__3546__auto____79752;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____79751);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____79754 = x;

if(cljs.core.truth_((function (){var and__3546__auto____79755 = x__451__auto____79754;

if(cljs.core.truth_(and__3546__auto____79755))
{var and__3546__auto____79756 = x__451__auto____79754.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____79756))
{return cljs.core.not.call(null,x__451__auto____79754.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____79756;
}
} else
{return and__3546__auto____79755;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____79754);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____79757 = x;

if(cljs.core.truth_((function (){var and__3546__auto____79758 = x__451__auto____79757;

if(cljs.core.truth_(and__3546__auto____79758))
{var and__3546__auto____79759 = x__451__auto____79757.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____79759))
{return cljs.core.not.call(null,x__451__auto____79757.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____79759;
}
} else
{return and__3546__auto____79758;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____79757);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____79760 = x;

if(cljs.core.truth_((function (){var and__3546__auto____79761 = x__451__auto____79760;

if(cljs.core.truth_(and__3546__auto____79761))
{var and__3546__auto____79762 = x__451__auto____79760.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____79762))
{return cljs.core.not.call(null,x__451__auto____79760.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____79762;
}
} else
{return and__3546__auto____79761;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____79760);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__79763 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__79763.push(key);
}));
return keys__79763;
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
{var x__451__auto____79764 = s;

if(cljs.core.truth_((function (){var and__3546__auto____79765 = x__451__auto____79764;

if(cljs.core.truth_(and__3546__auto____79765))
{var and__3546__auto____79766 = x__451__auto____79764.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____79766))
{return cljs.core.not.call(null,x__451__auto____79764.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____79766;
}
} else
{return and__3546__auto____79765;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____79764);
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
var and__3546__auto____79767 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____79767))
{return cljs.core.not.call(null,(function (){var or__3548__auto____79768 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____79768))
{return or__3548__auto____79768;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____79767;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____79769 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____79769))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____79769;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____79770 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____79770))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____79770;
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
var and__3546__auto____79771 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____79771))
{return (n == n.toFixed());
} else
{return and__3546__auto____79771;
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
if(cljs.core.truth_((function (){var and__3546__auto____79772 = coll;

if(cljs.core.truth_(and__3546__auto____79772))
{var and__3546__auto____79773 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____79773))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____79773;
}
} else
{return and__3546__auto____79772;
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
var distinct_QMARK___79778 = (function (x){
return true;
});
var distinct_QMARK___79779 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___79780 = (function() { 
var G__79782__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__79774 = cljs.core.set([y,x]);
var xs__79775 = more;

while(true){
var x__79776 = cljs.core.first.call(null,xs__79775);
var etc__79777 = cljs.core.next.call(null,xs__79775);

if(cljs.core.truth_(xs__79775))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__79774,x__79776)))
{return false;
} else
{{
var G__79783 = cljs.core.conj.call(null,s__79774,x__79776);
var G__79784 = etc__79777;
s__79774 = G__79783;
xs__79775 = G__79784;
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
var G__79782 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79782__delegate.call(this, x, y, more);
};
G__79782.cljs$lang$maxFixedArity = 2;
G__79782.cljs$lang$applyTo = (function (arglist__79785){
var x = cljs.core.first(arglist__79785);
var y = cljs.core.first(cljs.core.next(arglist__79785));
var more = cljs.core.rest(cljs.core.next(arglist__79785));
return G__79782__delegate.call(this, x, y, more);
});
return G__79782;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___79778.call(this,x);
case  2 :
return distinct_QMARK___79779.call(this,x,y);
default:
return distinct_QMARK___79780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___79780.cljs$lang$applyTo;
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
var r__79786 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__79786)))
{return r__79786;
} else
{if(cljs.core.truth_(r__79786))
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
var sort__79788 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__79789 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__79787 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__79787,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__79787);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__79788.call(this,comp);
case  2 :
return sort__79789.call(this,comp,coll);
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
var sort_by__79791 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__79792 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__79791.call(this,keyfn,comp);
case  3 :
return sort_by__79792.call(this,keyfn,comp,coll);
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
var reduce__79794 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__79795 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__79794.call(this,f,val);
case  3 :
return reduce__79795.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__79801 = (function (f,coll){
var temp__3695__auto____79797 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____79797))
{var s__79798 = temp__3695__auto____79797;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__79798),cljs.core.next.call(null,s__79798));
} else
{return f.call(null);
}
});
var seq_reduce__79802 = (function (f,val,coll){
var val__79799 = val;
var coll__79800 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__79800))
{{
var G__79804 = f.call(null,val__79799,cljs.core.first.call(null,coll__79800));
var G__79805 = cljs.core.next.call(null,coll__79800);
val__79799 = G__79804;
coll__79800 = G__79805;
continue;
}
} else
{return val__79799;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__79801.call(this,f,val);
case  3 :
return seq_reduce__79802.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__79806 = null;
var G__79806__79807 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__79806__79808 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__79806 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__79806__79807.call(this,coll,f);
case  3 :
return G__79806__79808.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__79806;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___79810 = (function (){
return 0;
});
var _PLUS___79811 = (function (x){
return x;
});
var _PLUS___79812 = (function (x,y){
return (x + y);
});
var _PLUS___79813 = (function() { 
var G__79815__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__79815 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79815__delegate.call(this, x, y, more);
};
G__79815.cljs$lang$maxFixedArity = 2;
G__79815.cljs$lang$applyTo = (function (arglist__79816){
var x = cljs.core.first(arglist__79816);
var y = cljs.core.first(cljs.core.next(arglist__79816));
var more = cljs.core.rest(cljs.core.next(arglist__79816));
return G__79815__delegate.call(this, x, y, more);
});
return G__79815;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___79810.call(this);
case  1 :
return _PLUS___79811.call(this,x);
case  2 :
return _PLUS___79812.call(this,x,y);
default:
return _PLUS___79813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___79813.cljs$lang$applyTo;
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
var ___79817 = (function (x){
return (- x);
});
var ___79818 = (function (x,y){
return (x - y);
});
var ___79819 = (function() { 
var G__79821__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__79821 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79821__delegate.call(this, x, y, more);
};
G__79821.cljs$lang$maxFixedArity = 2;
G__79821.cljs$lang$applyTo = (function (arglist__79822){
var x = cljs.core.first(arglist__79822);
var y = cljs.core.first(cljs.core.next(arglist__79822));
var more = cljs.core.rest(cljs.core.next(arglist__79822));
return G__79821__delegate.call(this, x, y, more);
});
return G__79821;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___79817.call(this,x);
case  2 :
return ___79818.call(this,x,y);
default:
return ___79819.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___79819.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___79823 = (function (){
return 1;
});
var _STAR___79824 = (function (x){
return x;
});
var _STAR___79825 = (function (x,y){
return (x * y);
});
var _STAR___79826 = (function() { 
var G__79828__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__79828 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79828__delegate.call(this, x, y, more);
};
G__79828.cljs$lang$maxFixedArity = 2;
G__79828.cljs$lang$applyTo = (function (arglist__79829){
var x = cljs.core.first(arglist__79829);
var y = cljs.core.first(cljs.core.next(arglist__79829));
var more = cljs.core.rest(cljs.core.next(arglist__79829));
return G__79828__delegate.call(this, x, y, more);
});
return G__79828;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___79823.call(this);
case  1 :
return _STAR___79824.call(this,x);
case  2 :
return _STAR___79825.call(this,x,y);
default:
return _STAR___79826.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___79826.cljs$lang$applyTo;
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
var _SLASH___79830 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___79831 = (function (x,y){
return (x / y);
});
var _SLASH___79832 = (function() { 
var G__79834__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__79834 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79834__delegate.call(this, x, y, more);
};
G__79834.cljs$lang$maxFixedArity = 2;
G__79834.cljs$lang$applyTo = (function (arglist__79835){
var x = cljs.core.first(arglist__79835);
var y = cljs.core.first(cljs.core.next(arglist__79835));
var more = cljs.core.rest(cljs.core.next(arglist__79835));
return G__79834__delegate.call(this, x, y, more);
});
return G__79834;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___79830.call(this,x);
case  2 :
return _SLASH___79831.call(this,x,y);
default:
return _SLASH___79832.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___79832.cljs$lang$applyTo;
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
var _LT___79836 = (function (x){
return true;
});
var _LT___79837 = (function (x,y){
return (x < y);
});
var _LT___79838 = (function() { 
var G__79840__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__79841 = y;
var G__79842 = cljs.core.first.call(null,more);
var G__79843 = cljs.core.next.call(null,more);
x = G__79841;
y = G__79842;
more = G__79843;
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
var G__79840 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79840__delegate.call(this, x, y, more);
};
G__79840.cljs$lang$maxFixedArity = 2;
G__79840.cljs$lang$applyTo = (function (arglist__79844){
var x = cljs.core.first(arglist__79844);
var y = cljs.core.first(cljs.core.next(arglist__79844));
var more = cljs.core.rest(cljs.core.next(arglist__79844));
return G__79840__delegate.call(this, x, y, more);
});
return G__79840;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___79836.call(this,x);
case  2 :
return _LT___79837.call(this,x,y);
default:
return _LT___79838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___79838.cljs$lang$applyTo;
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
var _LT__EQ___79845 = (function (x){
return true;
});
var _LT__EQ___79846 = (function (x,y){
return (x <= y);
});
var _LT__EQ___79847 = (function() { 
var G__79849__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__79850 = y;
var G__79851 = cljs.core.first.call(null,more);
var G__79852 = cljs.core.next.call(null,more);
x = G__79850;
y = G__79851;
more = G__79852;
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
var G__79849 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79849__delegate.call(this, x, y, more);
};
G__79849.cljs$lang$maxFixedArity = 2;
G__79849.cljs$lang$applyTo = (function (arglist__79853){
var x = cljs.core.first(arglist__79853);
var y = cljs.core.first(cljs.core.next(arglist__79853));
var more = cljs.core.rest(cljs.core.next(arglist__79853));
return G__79849__delegate.call(this, x, y, more);
});
return G__79849;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___79845.call(this,x);
case  2 :
return _LT__EQ___79846.call(this,x,y);
default:
return _LT__EQ___79847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___79847.cljs$lang$applyTo;
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
var _GT___79854 = (function (x){
return true;
});
var _GT___79855 = (function (x,y){
return (x > y);
});
var _GT___79856 = (function() { 
var G__79858__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__79859 = y;
var G__79860 = cljs.core.first.call(null,more);
var G__79861 = cljs.core.next.call(null,more);
x = G__79859;
y = G__79860;
more = G__79861;
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
var G__79858 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79858__delegate.call(this, x, y, more);
};
G__79858.cljs$lang$maxFixedArity = 2;
G__79858.cljs$lang$applyTo = (function (arglist__79862){
var x = cljs.core.first(arglist__79862);
var y = cljs.core.first(cljs.core.next(arglist__79862));
var more = cljs.core.rest(cljs.core.next(arglist__79862));
return G__79858__delegate.call(this, x, y, more);
});
return G__79858;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___79854.call(this,x);
case  2 :
return _GT___79855.call(this,x,y);
default:
return _GT___79856.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___79856.cljs$lang$applyTo;
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
var _GT__EQ___79863 = (function (x){
return true;
});
var _GT__EQ___79864 = (function (x,y){
return (x >= y);
});
var _GT__EQ___79865 = (function() { 
var G__79867__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__79868 = y;
var G__79869 = cljs.core.first.call(null,more);
var G__79870 = cljs.core.next.call(null,more);
x = G__79868;
y = G__79869;
more = G__79870;
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
var G__79867 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79867__delegate.call(this, x, y, more);
};
G__79867.cljs$lang$maxFixedArity = 2;
G__79867.cljs$lang$applyTo = (function (arglist__79871){
var x = cljs.core.first(arglist__79871);
var y = cljs.core.first(cljs.core.next(arglist__79871));
var more = cljs.core.rest(cljs.core.next(arglist__79871));
return G__79867__delegate.call(this, x, y, more);
});
return G__79867;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___79863.call(this,x);
case  2 :
return _GT__EQ___79864.call(this,x,y);
default:
return _GT__EQ___79865.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___79865.cljs$lang$applyTo;
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
var max__79872 = (function (x){
return x;
});
var max__79873 = (function (x,y){
return ((x > y) ? x : y);
});
var max__79874 = (function() { 
var G__79876__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__79876 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79876__delegate.call(this, x, y, more);
};
G__79876.cljs$lang$maxFixedArity = 2;
G__79876.cljs$lang$applyTo = (function (arglist__79877){
var x = cljs.core.first(arglist__79877);
var y = cljs.core.first(cljs.core.next(arglist__79877));
var more = cljs.core.rest(cljs.core.next(arglist__79877));
return G__79876__delegate.call(this, x, y, more);
});
return G__79876;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__79872.call(this,x);
case  2 :
return max__79873.call(this,x,y);
default:
return max__79874.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__79874.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__79878 = (function (x){
return x;
});
var min__79879 = (function (x,y){
return ((x < y) ? x : y);
});
var min__79880 = (function() { 
var G__79882__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__79882 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79882__delegate.call(this, x, y, more);
};
G__79882.cljs$lang$maxFixedArity = 2;
G__79882.cljs$lang$applyTo = (function (arglist__79883){
var x = cljs.core.first(arglist__79883);
var y = cljs.core.first(cljs.core.next(arglist__79883));
var more = cljs.core.rest(cljs.core.next(arglist__79883));
return G__79882__delegate.call(this, x, y, more);
});
return G__79882;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__79878.call(this,x);
case  2 :
return min__79879.call(this,x,y);
default:
return min__79880.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__79880.cljs$lang$applyTo;
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
var rem__79884 = (n % d);

return cljs.core.fix.call(null,((n - rem__79884) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__79885 = cljs.core.quot.call(null,n,d);

return (n - (d * q__79885));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__79886 = (function (){
return Math.random.call(null);
});
var rand__79887 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__79886.call(this);
case  1 :
return rand__79887.call(this,n);
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
var _EQ__EQ___79889 = (function (x){
return true;
});
var _EQ__EQ___79890 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___79891 = (function() { 
var G__79893__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__79894 = y;
var G__79895 = cljs.core.first.call(null,more);
var G__79896 = cljs.core.next.call(null,more);
x = G__79894;
y = G__79895;
more = G__79896;
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
var G__79893 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__79893__delegate.call(this, x, y, more);
};
G__79893.cljs$lang$maxFixedArity = 2;
G__79893.cljs$lang$applyTo = (function (arglist__79897){
var x = cljs.core.first(arglist__79897);
var y = cljs.core.first(cljs.core.next(arglist__79897));
var more = cljs.core.rest(cljs.core.next(arglist__79897));
return G__79893__delegate.call(this, x, y, more);
});
return G__79893;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___79889.call(this,x);
case  2 :
return _EQ__EQ___79890.call(this,x,y);
default:
return _EQ__EQ___79891.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___79891.cljs$lang$applyTo;
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
var n__79898 = n;
var xs__79899 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____79900 = xs__79899;

if(cljs.core.truth_(and__3546__auto____79900))
{return (n__79898 > 0);
} else
{return and__3546__auto____79900;
}
})()))
{{
var G__79901 = (n__79898 - 1);
var G__79902 = cljs.core.next.call(null,xs__79899);
n__79898 = G__79901;
xs__79899 = G__79902;
continue;
}
} else
{return xs__79899;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__79907 = null;
var G__79907__79908 = (function (coll,n){
var temp__3695__auto____79903 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____79903))
{var xs__79904 = temp__3695__auto____79903;

return cljs.core.first.call(null,xs__79904);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__79907__79909 = (function (coll,n,not_found){
var temp__3695__auto____79905 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____79905))
{var xs__79906 = temp__3695__auto____79905;

return cljs.core.first.call(null,xs__79906);
} else
{return not_found;
}
});
G__79907 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__79907__79908.call(this,coll,n);
case  3 :
return G__79907__79909.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__79907;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___79911 = (function (){
return "";
});
var str_STAR___79912 = (function (x){
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
var str_STAR___79913 = (function() { 
var G__79915__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__79916 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__79917 = cljs.core.next.call(null,more);
sb = G__79916;
more = G__79917;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__79915 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__79915__delegate.call(this, x, ys);
};
G__79915.cljs$lang$maxFixedArity = 1;
G__79915.cljs$lang$applyTo = (function (arglist__79918){
var x = cljs.core.first(arglist__79918);
var ys = cljs.core.rest(arglist__79918);
return G__79915__delegate.call(this, x, ys);
});
return G__79915;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___79911.call(this);
case  1 :
return str_STAR___79912.call(this,x);
default:
return str_STAR___79913.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___79913.cljs$lang$applyTo;
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
var str__79919 = (function (){
return "";
});
var str__79920 = (function (x){
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
var str__79921 = (function() { 
var G__79923__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__79924 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__79925 = cljs.core.next.call(null,more);
sb = G__79924;
more = G__79925;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__79923 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__79923__delegate.call(this, x, ys);
};
G__79923.cljs$lang$maxFixedArity = 1;
G__79923.cljs$lang$applyTo = (function (arglist__79926){
var x = cljs.core.first(arglist__79926);
var ys = cljs.core.rest(arglist__79926);
return G__79923__delegate.call(this, x, ys);
});
return G__79923;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__79919.call(this);
case  1 :
return str__79920.call(this,x);
default:
return str__79921.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__79921.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__79927 = (function (s,start){
return s.substring(start);
});
var subs__79928 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__79927.call(this,s,start);
case  3 :
return subs__79928.call(this,s,start,end);
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
var symbol__79930 = (function (name){
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
var symbol__79931 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__79930.call(this,ns);
case  2 :
return symbol__79931.call(this,ns,name);
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
var keyword__79933 = (function (name){
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
var keyword__79934 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__79933.call(this,ns);
case  2 :
return keyword__79934.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__79936 = cljs.core.seq.call(null,x);
var ys__79937 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__79936 === null)))
{return (ys__79937 === null);
} else
{if(cljs.core.truth_((ys__79937 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__79936),cljs.core.first.call(null,ys__79937))))
{{
var G__79938 = cljs.core.next.call(null,xs__79936);
var G__79939 = cljs.core.next.call(null,ys__79937);
xs__79936 = G__79938;
ys__79937 = G__79939;
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
return cljs.core.reduce.call(null,(function (p1__79940_SHARP_,p2__79941_SHARP_){
return cljs.core.hash_combine.call(null,p1__79940_SHARP_,cljs.core.hash.call(null,p2__79941_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__79942__79943 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__79942__79943))
{var G__79945__79947 = cljs.core.first.call(null,G__79942__79943);
var vec__79946__79948 = G__79945__79947;
var key_name__79949 = cljs.core.nth.call(null,vec__79946__79948,0,null);
var f__79950 = cljs.core.nth.call(null,vec__79946__79948,1,null);
var G__79942__79951 = G__79942__79943;

var G__79945__79952 = G__79945__79947;
var G__79942__79953 = G__79942__79951;

while(true){
var vec__79954__79955 = G__79945__79952;
var key_name__79956 = cljs.core.nth.call(null,vec__79954__79955,0,null);
var f__79957 = cljs.core.nth.call(null,vec__79954__79955,1,null);
var G__79942__79958 = G__79942__79953;

var str_name__79959 = cljs.core.name.call(null,key_name__79956);

obj[str_name__79959] = f__79957;
var temp__3698__auto____79960 = cljs.core.next.call(null,G__79942__79958);

if(cljs.core.truth_(temp__3698__auto____79960))
{var G__79942__79961 = temp__3698__auto____79960;

{
var G__79962 = cljs.core.first.call(null,G__79942__79961);
var G__79963 = G__79942__79961;
G__79945__79952 = G__79962;
G__79942__79953 = G__79963;
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
var this__79964 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__79965 = this;
return (new cljs.core.List(this__79965.meta,o,coll,(this__79965.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__79966 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__79967 = this;
return this__79967.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__79968 = this;
return this__79968.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__79969 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__79970 = this;
return this__79970.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__79971 = this;
return this__79971.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__79972 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__79973 = this;
return (new cljs.core.List(meta,this__79973.first,this__79973.rest,this__79973.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__79974 = this;
return this__79974.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__79975 = this;
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
var this__79976 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__79977 = this;
return (new cljs.core.List(this__79977.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__79978 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__79979 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__79980 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__79981 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__79982 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__79983 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__79984 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__79985 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__79986 = this;
return this__79986.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__79987 = this;
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
list.cljs$lang$applyTo = (function (arglist__79988){
var items = cljs.core.seq( arglist__79988 );;
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
var this__79989 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__79990 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__79991 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__79992 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__79992.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__79993 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__79994 = this;
return this__79994.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__79995 = this;
if(cljs.core.truth_((this__79995.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__79995.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__79996 = this;
return this__79996.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__79997 = this;
return (new cljs.core.Cons(meta,this__79997.first,this__79997.rest));
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
var G__79998 = null;
var G__79998__79999 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__79998__80000 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__79998 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__79998__79999.call(this,string,f);
case  3 :
return G__79998__80000.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__79998;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__80002 = null;
var G__80002__80003 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__80002__80004 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__80002 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__80002__80003.call(this,string,k);
case  3 :
return G__80002__80004.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80002;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__80006 = null;
var G__80006__80007 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__80006__80008 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__80006 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__80006__80007.call(this,string,n);
case  3 :
return G__80006__80008.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80006;
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
var G__80016 = null;
var G__80016__80017 = (function (tsym80010,coll){
var tsym80010__80012 = this;

var this$__80013 = tsym80010__80012;

return cljs.core.get.call(null,coll,this$__80013.toString());
});
var G__80016__80018 = (function (tsym80011,coll,not_found){
var tsym80011__80014 = this;

var this$__80015 = tsym80011__80014;

return cljs.core.get.call(null,coll,this$__80015.toString(),not_found);
});
G__80016 = function(tsym80011,coll,not_found){
switch(arguments.length){
case  2 :
return G__80016__80017.call(this,tsym80011,coll);
case  3 :
return G__80016__80018.call(this,tsym80011,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80016;
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
var x__80020 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__80020;
} else
{lazy_seq.x = x__80020.call(null);
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
var this__80021 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__80022 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__80023 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__80024 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__80024.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__80025 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__80026 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__80027 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__80028 = this;
return this__80028.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__80029 = this;
return (new cljs.core.LazySeq(meta,this__80029.realized,this__80029.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__80030 = [];

var s__80031 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__80031)))
{ary__80030.push(cljs.core.first.call(null,s__80031));
{
var G__80032 = cljs.core.next.call(null,s__80031);
s__80031 = G__80032;
continue;
}
} else
{return ary__80030;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__80033 = s;
var i__80034 = n;
var sum__80035 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____80036 = (i__80034 > 0);

if(cljs.core.truth_(and__3546__auto____80036))
{return cljs.core.seq.call(null,s__80033);
} else
{return and__3546__auto____80036;
}
})()))
{{
var G__80037 = cljs.core.next.call(null,s__80033);
var G__80038 = (i__80034 - 1);
var G__80039 = (sum__80035 + 1);
s__80033 = G__80037;
i__80034 = G__80038;
sum__80035 = G__80039;
continue;
}
} else
{return sum__80035;
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
var concat__80043 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__80044 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__80045 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__80040 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__80040))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__80040),concat.call(null,cljs.core.rest.call(null,s__80040),y));
} else
{return y;
}
})));
});
var concat__80046 = (function() { 
var G__80048__delegate = function (x,y,zs){
var cat__80042 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__80041 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__80041))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__80041),cat.call(null,cljs.core.rest.call(null,xys__80041),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__80042.call(null,concat.call(null,x,y),zs);
};
var G__80048 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__80048__delegate.call(this, x, y, zs);
};
G__80048.cljs$lang$maxFixedArity = 2;
G__80048.cljs$lang$applyTo = (function (arglist__80049){
var x = cljs.core.first(arglist__80049);
var y = cljs.core.first(cljs.core.next(arglist__80049));
var zs = cljs.core.rest(cljs.core.next(arglist__80049));
return G__80048__delegate.call(this, x, y, zs);
});
return G__80048;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__80043.call(this);
case  1 :
return concat__80044.call(this,x);
case  2 :
return concat__80045.call(this,x,y);
default:
return concat__80046.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__80046.cljs$lang$applyTo;
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
var list_STAR___80050 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___80051 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___80052 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___80053 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___80054 = (function() { 
var G__80056__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__80056 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__80056__delegate.call(this, a, b, c, d, more);
};
G__80056.cljs$lang$maxFixedArity = 4;
G__80056.cljs$lang$applyTo = (function (arglist__80057){
var a = cljs.core.first(arglist__80057);
var b = cljs.core.first(cljs.core.next(arglist__80057));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80057)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__80057))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__80057))));
return G__80056__delegate.call(this, a, b, c, d, more);
});
return G__80056;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___80050.call(this,a);
case  2 :
return list_STAR___80051.call(this,a,b);
case  3 :
return list_STAR___80052.call(this,a,b,c);
case  4 :
return list_STAR___80053.call(this,a,b,c,d);
default:
return list_STAR___80054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___80054.cljs$lang$applyTo;
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
var apply__80067 = (function (f,args){
var fixed_arity__80058 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__80058 + 1)) <= fixed_arity__80058)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__80068 = (function (f,x,args){
var arglist__80059 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__80060 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__80059,fixed_arity__80060) <= fixed_arity__80060)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__80059));
} else
{return f.cljs$lang$applyTo(arglist__80059);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__80059));
}
});
var apply__80069 = (function (f,x,y,args){
var arglist__80061 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__80062 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__80061,fixed_arity__80062) <= fixed_arity__80062)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__80061));
} else
{return f.cljs$lang$applyTo(arglist__80061);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__80061));
}
});
var apply__80070 = (function (f,x,y,z,args){
var arglist__80063 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__80064 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__80063,fixed_arity__80064) <= fixed_arity__80064)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__80063));
} else
{return f.cljs$lang$applyTo(arglist__80063);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__80063));
}
});
var apply__80071 = (function() { 
var G__80073__delegate = function (f,a,b,c,d,args){
var arglist__80065 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__80066 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__80065,fixed_arity__80066) <= fixed_arity__80066)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__80065));
} else
{return f.cljs$lang$applyTo(arglist__80065);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__80065));
}
};
var G__80073 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__80073__delegate.call(this, f, a, b, c, d, args);
};
G__80073.cljs$lang$maxFixedArity = 5;
G__80073.cljs$lang$applyTo = (function (arglist__80074){
var f = cljs.core.first(arglist__80074);
var a = cljs.core.first(cljs.core.next(arglist__80074));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80074)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__80074))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__80074)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__80074)))));
return G__80073__delegate.call(this, f, a, b, c, d, args);
});
return G__80073;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__80067.call(this,f,a);
case  3 :
return apply__80068.call(this,f,a,b);
case  4 :
return apply__80069.call(this,f,a,b,c);
case  5 :
return apply__80070.call(this,f,a,b,c,d);
default:
return apply__80071.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__80071.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__80075){
var obj = cljs.core.first(arglist__80075);
var f = cljs.core.first(cljs.core.next(arglist__80075));
var args = cljs.core.rest(cljs.core.next(arglist__80075));
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
var not_EQ___80076 = (function (x){
return false;
});
var not_EQ___80077 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___80078 = (function() { 
var G__80080__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__80080 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__80080__delegate.call(this, x, y, more);
};
G__80080.cljs$lang$maxFixedArity = 2;
G__80080.cljs$lang$applyTo = (function (arglist__80081){
var x = cljs.core.first(arglist__80081);
var y = cljs.core.first(cljs.core.next(arglist__80081));
var more = cljs.core.rest(cljs.core.next(arglist__80081));
return G__80080__delegate.call(this, x, y, more);
});
return G__80080;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___80076.call(this,x);
case  2 :
return not_EQ___80077.call(this,x,y);
default:
return not_EQ___80078.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___80078.cljs$lang$applyTo;
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
var G__80082 = pred;
var G__80083 = cljs.core.next.call(null,coll);
pred = G__80082;
coll = G__80083;
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
{var or__3548__auto____80084 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____80084))
{return or__3548__auto____80084;
} else
{{
var G__80085 = pred;
var G__80086 = cljs.core.next.call(null,coll);
pred = G__80085;
coll = G__80086;
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
var G__80087 = null;
var G__80087__80088 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__80087__80089 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__80087__80090 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__80087__80091 = (function() { 
var G__80093__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__80093 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__80093__delegate.call(this, x, y, zs);
};
G__80093.cljs$lang$maxFixedArity = 2;
G__80093.cljs$lang$applyTo = (function (arglist__80094){
var x = cljs.core.first(arglist__80094);
var y = cljs.core.first(cljs.core.next(arglist__80094));
var zs = cljs.core.rest(cljs.core.next(arglist__80094));
return G__80093__delegate.call(this, x, y, zs);
});
return G__80093;
})()
;
G__80087 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__80087__80088.call(this);
case  1 :
return G__80087__80089.call(this,x);
case  2 :
return G__80087__80090.call(this,x,y);
default:
return G__80087__80091.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__80087.cljs$lang$maxFixedArity = 2;
G__80087.cljs$lang$applyTo = G__80087__80091.cljs$lang$applyTo;
return G__80087;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__80095__delegate = function (args){
return x;
};
var G__80095 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__80095__delegate.call(this, args);
};
G__80095.cljs$lang$maxFixedArity = 0;
G__80095.cljs$lang$applyTo = (function (arglist__80096){
var args = cljs.core.seq( arglist__80096 );;
return G__80095__delegate.call(this, args);
});
return G__80095;
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
var comp__80100 = (function (){
return cljs.core.identity;
});
var comp__80101 = (function (f){
return f;
});
var comp__80102 = (function (f,g){
return (function() {
var G__80106 = null;
var G__80106__80107 = (function (){
return f.call(null,g.call(null));
});
var G__80106__80108 = (function (x){
return f.call(null,g.call(null,x));
});
var G__80106__80109 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__80106__80110 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__80106__80111 = (function() { 
var G__80113__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__80113 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80113__delegate.call(this, x, y, z, args);
};
G__80113.cljs$lang$maxFixedArity = 3;
G__80113.cljs$lang$applyTo = (function (arglist__80114){
var x = cljs.core.first(arglist__80114);
var y = cljs.core.first(cljs.core.next(arglist__80114));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80114)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80114)));
return G__80113__delegate.call(this, x, y, z, args);
});
return G__80113;
})()
;
G__80106 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__80106__80107.call(this);
case  1 :
return G__80106__80108.call(this,x);
case  2 :
return G__80106__80109.call(this,x,y);
case  3 :
return G__80106__80110.call(this,x,y,z);
default:
return G__80106__80111.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__80106.cljs$lang$maxFixedArity = 3;
G__80106.cljs$lang$applyTo = G__80106__80111.cljs$lang$applyTo;
return G__80106;
})()
});
var comp__80103 = (function (f,g,h){
return (function() {
var G__80115 = null;
var G__80115__80116 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__80115__80117 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__80115__80118 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__80115__80119 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__80115__80120 = (function() { 
var G__80122__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__80122 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80122__delegate.call(this, x, y, z, args);
};
G__80122.cljs$lang$maxFixedArity = 3;
G__80122.cljs$lang$applyTo = (function (arglist__80123){
var x = cljs.core.first(arglist__80123);
var y = cljs.core.first(cljs.core.next(arglist__80123));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80123)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80123)));
return G__80122__delegate.call(this, x, y, z, args);
});
return G__80122;
})()
;
G__80115 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__80115__80116.call(this);
case  1 :
return G__80115__80117.call(this,x);
case  2 :
return G__80115__80118.call(this,x,y);
case  3 :
return G__80115__80119.call(this,x,y,z);
default:
return G__80115__80120.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__80115.cljs$lang$maxFixedArity = 3;
G__80115.cljs$lang$applyTo = G__80115__80120.cljs$lang$applyTo;
return G__80115;
})()
});
var comp__80104 = (function() { 
var G__80124__delegate = function (f1,f2,f3,fs){
var fs__80097 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__80125__delegate = function (args){
var ret__80098 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__80097),args);
var fs__80099 = cljs.core.next.call(null,fs__80097);

while(true){
if(cljs.core.truth_(fs__80099))
{{
var G__80126 = cljs.core.first.call(null,fs__80099).call(null,ret__80098);
var G__80127 = cljs.core.next.call(null,fs__80099);
ret__80098 = G__80126;
fs__80099 = G__80127;
continue;
}
} else
{return ret__80098;
}
break;
}
};
var G__80125 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__80125__delegate.call(this, args);
};
G__80125.cljs$lang$maxFixedArity = 0;
G__80125.cljs$lang$applyTo = (function (arglist__80128){
var args = cljs.core.seq( arglist__80128 );;
return G__80125__delegate.call(this, args);
});
return G__80125;
})()
;
};
var G__80124 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80124__delegate.call(this, f1, f2, f3, fs);
};
G__80124.cljs$lang$maxFixedArity = 3;
G__80124.cljs$lang$applyTo = (function (arglist__80129){
var f1 = cljs.core.first(arglist__80129);
var f2 = cljs.core.first(cljs.core.next(arglist__80129));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80129)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80129)));
return G__80124__delegate.call(this, f1, f2, f3, fs);
});
return G__80124;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__80100.call(this);
case  1 :
return comp__80101.call(this,f1);
case  2 :
return comp__80102.call(this,f1,f2);
case  3 :
return comp__80103.call(this,f1,f2,f3);
default:
return comp__80104.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__80104.cljs$lang$applyTo;
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
var partial__80130 = (function (f,arg1){
return (function() { 
var G__80135__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__80135 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__80135__delegate.call(this, args);
};
G__80135.cljs$lang$maxFixedArity = 0;
G__80135.cljs$lang$applyTo = (function (arglist__80136){
var args = cljs.core.seq( arglist__80136 );;
return G__80135__delegate.call(this, args);
});
return G__80135;
})()
;
});
var partial__80131 = (function (f,arg1,arg2){
return (function() { 
var G__80137__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__80137 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__80137__delegate.call(this, args);
};
G__80137.cljs$lang$maxFixedArity = 0;
G__80137.cljs$lang$applyTo = (function (arglist__80138){
var args = cljs.core.seq( arglist__80138 );;
return G__80137__delegate.call(this, args);
});
return G__80137;
})()
;
});
var partial__80132 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__80139__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__80139 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__80139__delegate.call(this, args);
};
G__80139.cljs$lang$maxFixedArity = 0;
G__80139.cljs$lang$applyTo = (function (arglist__80140){
var args = cljs.core.seq( arglist__80140 );;
return G__80139__delegate.call(this, args);
});
return G__80139;
})()
;
});
var partial__80133 = (function() { 
var G__80141__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__80142__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__80142 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__80142__delegate.call(this, args);
};
G__80142.cljs$lang$maxFixedArity = 0;
G__80142.cljs$lang$applyTo = (function (arglist__80143){
var args = cljs.core.seq( arglist__80143 );;
return G__80142__delegate.call(this, args);
});
return G__80142;
})()
;
};
var G__80141 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__80141__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__80141.cljs$lang$maxFixedArity = 4;
G__80141.cljs$lang$applyTo = (function (arglist__80144){
var f = cljs.core.first(arglist__80144);
var arg1 = cljs.core.first(cljs.core.next(arglist__80144));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80144)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__80144))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__80144))));
return G__80141__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__80141;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__80130.call(this,f,arg1);
case  3 :
return partial__80131.call(this,f,arg1,arg2);
case  4 :
return partial__80132.call(this,f,arg1,arg2,arg3);
default:
return partial__80133.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__80133.cljs$lang$applyTo;
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
var fnil__80145 = (function (f,x){
return (function() {
var G__80149 = null;
var G__80149__80150 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__80149__80151 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__80149__80152 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__80149__80153 = (function() { 
var G__80155__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__80155 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80155__delegate.call(this, a, b, c, ds);
};
G__80155.cljs$lang$maxFixedArity = 3;
G__80155.cljs$lang$applyTo = (function (arglist__80156){
var a = cljs.core.first(arglist__80156);
var b = cljs.core.first(cljs.core.next(arglist__80156));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80156)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80156)));
return G__80155__delegate.call(this, a, b, c, ds);
});
return G__80155;
})()
;
G__80149 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__80149__80150.call(this,a);
case  2 :
return G__80149__80151.call(this,a,b);
case  3 :
return G__80149__80152.call(this,a,b,c);
default:
return G__80149__80153.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__80149.cljs$lang$maxFixedArity = 3;
G__80149.cljs$lang$applyTo = G__80149__80153.cljs$lang$applyTo;
return G__80149;
})()
});
var fnil__80146 = (function (f,x,y){
return (function() {
var G__80157 = null;
var G__80157__80158 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__80157__80159 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__80157__80160 = (function() { 
var G__80162__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__80162 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80162__delegate.call(this, a, b, c, ds);
};
G__80162.cljs$lang$maxFixedArity = 3;
G__80162.cljs$lang$applyTo = (function (arglist__80163){
var a = cljs.core.first(arglist__80163);
var b = cljs.core.first(cljs.core.next(arglist__80163));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80163)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80163)));
return G__80162__delegate.call(this, a, b, c, ds);
});
return G__80162;
})()
;
G__80157 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__80157__80158.call(this,a,b);
case  3 :
return G__80157__80159.call(this,a,b,c);
default:
return G__80157__80160.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__80157.cljs$lang$maxFixedArity = 3;
G__80157.cljs$lang$applyTo = G__80157__80160.cljs$lang$applyTo;
return G__80157;
})()
});
var fnil__80147 = (function (f,x,y,z){
return (function() {
var G__80164 = null;
var G__80164__80165 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__80164__80166 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__80164__80167 = (function() { 
var G__80169__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__80169 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80169__delegate.call(this, a, b, c, ds);
};
G__80169.cljs$lang$maxFixedArity = 3;
G__80169.cljs$lang$applyTo = (function (arglist__80170){
var a = cljs.core.first(arglist__80170);
var b = cljs.core.first(cljs.core.next(arglist__80170));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80170)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80170)));
return G__80169__delegate.call(this, a, b, c, ds);
});
return G__80169;
})()
;
G__80164 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__80164__80165.call(this,a,b);
case  3 :
return G__80164__80166.call(this,a,b,c);
default:
return G__80164__80167.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__80164.cljs$lang$maxFixedArity = 3;
G__80164.cljs$lang$applyTo = G__80164__80167.cljs$lang$applyTo;
return G__80164;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__80145.call(this,f,x);
case  3 :
return fnil__80146.call(this,f,x,y);
case  4 :
return fnil__80147.call(this,f,x,y,z);
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
var mapi__80173 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____80171 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80171))
{var s__80172 = temp__3698__auto____80171;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__80172)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__80172)));
} else
{return null;
}
})));
});

return mapi__80173.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____80174 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80174))
{var s__80175 = temp__3698__auto____80174;

var x__80176 = f.call(null,cljs.core.first.call(null,s__80175));

if(cljs.core.truth_((x__80176 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__80175));
} else
{return cljs.core.cons.call(null,x__80176,keep.call(null,f,cljs.core.rest.call(null,s__80175)));
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
var keepi__80186 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____80183 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80183))
{var s__80184 = temp__3698__auto____80183;

var x__80185 = f.call(null,idx,cljs.core.first.call(null,s__80184));

if(cljs.core.truth_((x__80185 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__80184));
} else
{return cljs.core.cons.call(null,x__80185,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__80184)));
}
} else
{return null;
}
})));
});

return keepi__80186.call(null,0,coll);
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
var every_pred__80231 = (function (p){
return (function() {
var ep1 = null;
var ep1__80236 = (function (){
return true;
});
var ep1__80237 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__80238 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____80193 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____80193))
{return p.call(null,y);
} else
{return and__3546__auto____80193;
}
})());
});
var ep1__80239 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____80194 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____80194))
{var and__3546__auto____80195 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____80195))
{return p.call(null,z);
} else
{return and__3546__auto____80195;
}
} else
{return and__3546__auto____80194;
}
})());
});
var ep1__80240 = (function() { 
var G__80242__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____80196 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____80196))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____80196;
}
})());
};
var G__80242 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80242__delegate.call(this, x, y, z, args);
};
G__80242.cljs$lang$maxFixedArity = 3;
G__80242.cljs$lang$applyTo = (function (arglist__80243){
var x = cljs.core.first(arglist__80243);
var y = cljs.core.first(cljs.core.next(arglist__80243));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80243)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80243)));
return G__80242__delegate.call(this, x, y, z, args);
});
return G__80242;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__80236.call(this);
case  1 :
return ep1__80237.call(this,x);
case  2 :
return ep1__80238.call(this,x,y);
case  3 :
return ep1__80239.call(this,x,y,z);
default:
return ep1__80240.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__80240.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__80232 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__80244 = (function (){
return true;
});
var ep2__80245 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____80197 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____80197))
{return p2.call(null,x);
} else
{return and__3546__auto____80197;
}
})());
});
var ep2__80246 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____80198 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____80198))
{var and__3546__auto____80199 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____80199))
{var and__3546__auto____80200 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____80200))
{return p2.call(null,y);
} else
{return and__3546__auto____80200;
}
} else
{return and__3546__auto____80199;
}
} else
{return and__3546__auto____80198;
}
})());
});
var ep2__80247 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____80201 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____80201))
{var and__3546__auto____80202 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____80202))
{var and__3546__auto____80203 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____80203))
{var and__3546__auto____80204 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____80204))
{var and__3546__auto____80205 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____80205))
{return p2.call(null,z);
} else
{return and__3546__auto____80205;
}
} else
{return and__3546__auto____80204;
}
} else
{return and__3546__auto____80203;
}
} else
{return and__3546__auto____80202;
}
} else
{return and__3546__auto____80201;
}
})());
});
var ep2__80248 = (function() { 
var G__80250__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____80206 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____80206))
{return cljs.core.every_QMARK_.call(null,(function (p1__80177_SHARP_){
var and__3546__auto____80207 = p1.call(null,p1__80177_SHARP_);

if(cljs.core.truth_(and__3546__auto____80207))
{return p2.call(null,p1__80177_SHARP_);
} else
{return and__3546__auto____80207;
}
}),args);
} else
{return and__3546__auto____80206;
}
})());
};
var G__80250 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80250__delegate.call(this, x, y, z, args);
};
G__80250.cljs$lang$maxFixedArity = 3;
G__80250.cljs$lang$applyTo = (function (arglist__80251){
var x = cljs.core.first(arglist__80251);
var y = cljs.core.first(cljs.core.next(arglist__80251));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80251)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80251)));
return G__80250__delegate.call(this, x, y, z, args);
});
return G__80250;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__80244.call(this);
case  1 :
return ep2__80245.call(this,x);
case  2 :
return ep2__80246.call(this,x,y);
case  3 :
return ep2__80247.call(this,x,y,z);
default:
return ep2__80248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__80248.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__80233 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__80252 = (function (){
return true;
});
var ep3__80253 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____80208 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____80208))
{var and__3546__auto____80209 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____80209))
{return p3.call(null,x);
} else
{return and__3546__auto____80209;
}
} else
{return and__3546__auto____80208;
}
})());
});
var ep3__80254 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____80210 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____80210))
{var and__3546__auto____80211 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____80211))
{var and__3546__auto____80212 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____80212))
{var and__3546__auto____80213 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____80213))
{var and__3546__auto____80214 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____80214))
{return p3.call(null,y);
} else
{return and__3546__auto____80214;
}
} else
{return and__3546__auto____80213;
}
} else
{return and__3546__auto____80212;
}
} else
{return and__3546__auto____80211;
}
} else
{return and__3546__auto____80210;
}
})());
});
var ep3__80255 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____80215 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____80215))
{var and__3546__auto____80216 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____80216))
{var and__3546__auto____80217 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____80217))
{var and__3546__auto____80218 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____80218))
{var and__3546__auto____80219 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____80219))
{var and__3546__auto____80220 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____80220))
{var and__3546__auto____80221 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____80221))
{var and__3546__auto____80222 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____80222))
{return p3.call(null,z);
} else
{return and__3546__auto____80222;
}
} else
{return and__3546__auto____80221;
}
} else
{return and__3546__auto____80220;
}
} else
{return and__3546__auto____80219;
}
} else
{return and__3546__auto____80218;
}
} else
{return and__3546__auto____80217;
}
} else
{return and__3546__auto____80216;
}
} else
{return and__3546__auto____80215;
}
})());
});
var ep3__80256 = (function() { 
var G__80258__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____80223 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____80223))
{return cljs.core.every_QMARK_.call(null,(function (p1__80178_SHARP_){
var and__3546__auto____80224 = p1.call(null,p1__80178_SHARP_);

if(cljs.core.truth_(and__3546__auto____80224))
{var and__3546__auto____80225 = p2.call(null,p1__80178_SHARP_);

if(cljs.core.truth_(and__3546__auto____80225))
{return p3.call(null,p1__80178_SHARP_);
} else
{return and__3546__auto____80225;
}
} else
{return and__3546__auto____80224;
}
}),args);
} else
{return and__3546__auto____80223;
}
})());
};
var G__80258 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80258__delegate.call(this, x, y, z, args);
};
G__80258.cljs$lang$maxFixedArity = 3;
G__80258.cljs$lang$applyTo = (function (arglist__80259){
var x = cljs.core.first(arglist__80259);
var y = cljs.core.first(cljs.core.next(arglist__80259));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80259)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80259)));
return G__80258__delegate.call(this, x, y, z, args);
});
return G__80258;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__80252.call(this);
case  1 :
return ep3__80253.call(this,x);
case  2 :
return ep3__80254.call(this,x,y);
case  3 :
return ep3__80255.call(this,x,y,z);
default:
return ep3__80256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__80256.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__80234 = (function() { 
var G__80260__delegate = function (p1,p2,p3,ps){
var ps__80226 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__80261 = (function (){
return true;
});
var epn__80262 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__80179_SHARP_){
return p1__80179_SHARP_.call(null,x);
}),ps__80226);
});
var epn__80263 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__80180_SHARP_){
var and__3546__auto____80227 = p1__80180_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____80227))
{return p1__80180_SHARP_.call(null,y);
} else
{return and__3546__auto____80227;
}
}),ps__80226);
});
var epn__80264 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__80181_SHARP_){
var and__3546__auto____80228 = p1__80181_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____80228))
{var and__3546__auto____80229 = p1__80181_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____80229))
{return p1__80181_SHARP_.call(null,z);
} else
{return and__3546__auto____80229;
}
} else
{return and__3546__auto____80228;
}
}),ps__80226);
});
var epn__80265 = (function() { 
var G__80267__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____80230 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____80230))
{return cljs.core.every_QMARK_.call(null,(function (p1__80182_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__80182_SHARP_,args);
}),ps__80226);
} else
{return and__3546__auto____80230;
}
})());
};
var G__80267 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80267__delegate.call(this, x, y, z, args);
};
G__80267.cljs$lang$maxFixedArity = 3;
G__80267.cljs$lang$applyTo = (function (arglist__80268){
var x = cljs.core.first(arglist__80268);
var y = cljs.core.first(cljs.core.next(arglist__80268));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80268)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80268)));
return G__80267__delegate.call(this, x, y, z, args);
});
return G__80267;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__80261.call(this);
case  1 :
return epn__80262.call(this,x);
case  2 :
return epn__80263.call(this,x,y);
case  3 :
return epn__80264.call(this,x,y,z);
default:
return epn__80265.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__80265.cljs$lang$applyTo;
return epn;
})()
};
var G__80260 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80260__delegate.call(this, p1, p2, p3, ps);
};
G__80260.cljs$lang$maxFixedArity = 3;
G__80260.cljs$lang$applyTo = (function (arglist__80269){
var p1 = cljs.core.first(arglist__80269);
var p2 = cljs.core.first(cljs.core.next(arglist__80269));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80269)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80269)));
return G__80260__delegate.call(this, p1, p2, p3, ps);
});
return G__80260;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__80231.call(this,p1);
case  2 :
return every_pred__80232.call(this,p1,p2);
case  3 :
return every_pred__80233.call(this,p1,p2,p3);
default:
return every_pred__80234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__80234.cljs$lang$applyTo;
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
var some_fn__80309 = (function (p){
return (function() {
var sp1 = null;
var sp1__80314 = (function (){
return null;
});
var sp1__80315 = (function (x){
return p.call(null,x);
});
var sp1__80316 = (function (x,y){
var or__3548__auto____80271 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____80271))
{return or__3548__auto____80271;
} else
{return p.call(null,y);
}
});
var sp1__80317 = (function (x,y,z){
var or__3548__auto____80272 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____80272))
{return or__3548__auto____80272;
} else
{var or__3548__auto____80273 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____80273))
{return or__3548__auto____80273;
} else
{return p.call(null,z);
}
}
});
var sp1__80318 = (function() { 
var G__80320__delegate = function (x,y,z,args){
var or__3548__auto____80274 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____80274))
{return or__3548__auto____80274;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__80320 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80320__delegate.call(this, x, y, z, args);
};
G__80320.cljs$lang$maxFixedArity = 3;
G__80320.cljs$lang$applyTo = (function (arglist__80321){
var x = cljs.core.first(arglist__80321);
var y = cljs.core.first(cljs.core.next(arglist__80321));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80321)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80321)));
return G__80320__delegate.call(this, x, y, z, args);
});
return G__80320;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__80314.call(this);
case  1 :
return sp1__80315.call(this,x);
case  2 :
return sp1__80316.call(this,x,y);
case  3 :
return sp1__80317.call(this,x,y,z);
default:
return sp1__80318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__80318.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__80310 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__80322 = (function (){
return null;
});
var sp2__80323 = (function (x){
var or__3548__auto____80275 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____80275))
{return or__3548__auto____80275;
} else
{return p2.call(null,x);
}
});
var sp2__80324 = (function (x,y){
var or__3548__auto____80276 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____80276))
{return or__3548__auto____80276;
} else
{var or__3548__auto____80277 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____80277))
{return or__3548__auto____80277;
} else
{var or__3548__auto____80278 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____80278))
{return or__3548__auto____80278;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__80325 = (function (x,y,z){
var or__3548__auto____80279 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____80279))
{return or__3548__auto____80279;
} else
{var or__3548__auto____80280 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____80280))
{return or__3548__auto____80280;
} else
{var or__3548__auto____80281 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____80281))
{return or__3548__auto____80281;
} else
{var or__3548__auto____80282 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____80282))
{return or__3548__auto____80282;
} else
{var or__3548__auto____80283 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____80283))
{return or__3548__auto____80283;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__80326 = (function() { 
var G__80328__delegate = function (x,y,z,args){
var or__3548__auto____80284 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____80284))
{return or__3548__auto____80284;
} else
{return cljs.core.some.call(null,(function (p1__80187_SHARP_){
var or__3548__auto____80285 = p1.call(null,p1__80187_SHARP_);

if(cljs.core.truth_(or__3548__auto____80285))
{return or__3548__auto____80285;
} else
{return p2.call(null,p1__80187_SHARP_);
}
}),args);
}
};
var G__80328 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80328__delegate.call(this, x, y, z, args);
};
G__80328.cljs$lang$maxFixedArity = 3;
G__80328.cljs$lang$applyTo = (function (arglist__80329){
var x = cljs.core.first(arglist__80329);
var y = cljs.core.first(cljs.core.next(arglist__80329));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80329)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80329)));
return G__80328__delegate.call(this, x, y, z, args);
});
return G__80328;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__80322.call(this);
case  1 :
return sp2__80323.call(this,x);
case  2 :
return sp2__80324.call(this,x,y);
case  3 :
return sp2__80325.call(this,x,y,z);
default:
return sp2__80326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__80326.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__80311 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__80330 = (function (){
return null;
});
var sp3__80331 = (function (x){
var or__3548__auto____80286 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____80286))
{return or__3548__auto____80286;
} else
{var or__3548__auto____80287 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____80287))
{return or__3548__auto____80287;
} else
{return p3.call(null,x);
}
}
});
var sp3__80332 = (function (x,y){
var or__3548__auto____80288 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____80288))
{return or__3548__auto____80288;
} else
{var or__3548__auto____80289 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____80289))
{return or__3548__auto____80289;
} else
{var or__3548__auto____80290 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____80290))
{return or__3548__auto____80290;
} else
{var or__3548__auto____80291 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____80291))
{return or__3548__auto____80291;
} else
{var or__3548__auto____80292 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____80292))
{return or__3548__auto____80292;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__80333 = (function (x,y,z){
var or__3548__auto____80293 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____80293))
{return or__3548__auto____80293;
} else
{var or__3548__auto____80294 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____80294))
{return or__3548__auto____80294;
} else
{var or__3548__auto____80295 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____80295))
{return or__3548__auto____80295;
} else
{var or__3548__auto____80296 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____80296))
{return or__3548__auto____80296;
} else
{var or__3548__auto____80297 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____80297))
{return or__3548__auto____80297;
} else
{var or__3548__auto____80298 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____80298))
{return or__3548__auto____80298;
} else
{var or__3548__auto____80299 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____80299))
{return or__3548__auto____80299;
} else
{var or__3548__auto____80300 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____80300))
{return or__3548__auto____80300;
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
var sp3__80334 = (function() { 
var G__80336__delegate = function (x,y,z,args){
var or__3548__auto____80301 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____80301))
{return or__3548__auto____80301;
} else
{return cljs.core.some.call(null,(function (p1__80188_SHARP_){
var or__3548__auto____80302 = p1.call(null,p1__80188_SHARP_);

if(cljs.core.truth_(or__3548__auto____80302))
{return or__3548__auto____80302;
} else
{var or__3548__auto____80303 = p2.call(null,p1__80188_SHARP_);

if(cljs.core.truth_(or__3548__auto____80303))
{return or__3548__auto____80303;
} else
{return p3.call(null,p1__80188_SHARP_);
}
}
}),args);
}
};
var G__80336 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80336__delegate.call(this, x, y, z, args);
};
G__80336.cljs$lang$maxFixedArity = 3;
G__80336.cljs$lang$applyTo = (function (arglist__80337){
var x = cljs.core.first(arglist__80337);
var y = cljs.core.first(cljs.core.next(arglist__80337));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80337)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80337)));
return G__80336__delegate.call(this, x, y, z, args);
});
return G__80336;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__80330.call(this);
case  1 :
return sp3__80331.call(this,x);
case  2 :
return sp3__80332.call(this,x,y);
case  3 :
return sp3__80333.call(this,x,y,z);
default:
return sp3__80334.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__80334.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__80312 = (function() { 
var G__80338__delegate = function (p1,p2,p3,ps){
var ps__80304 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__80339 = (function (){
return null;
});
var spn__80340 = (function (x){
return cljs.core.some.call(null,(function (p1__80189_SHARP_){
return p1__80189_SHARP_.call(null,x);
}),ps__80304);
});
var spn__80341 = (function (x,y){
return cljs.core.some.call(null,(function (p1__80190_SHARP_){
var or__3548__auto____80305 = p1__80190_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____80305))
{return or__3548__auto____80305;
} else
{return p1__80190_SHARP_.call(null,y);
}
}),ps__80304);
});
var spn__80342 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__80191_SHARP_){
var or__3548__auto____80306 = p1__80191_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____80306))
{return or__3548__auto____80306;
} else
{var or__3548__auto____80307 = p1__80191_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____80307))
{return or__3548__auto____80307;
} else
{return p1__80191_SHARP_.call(null,z);
}
}
}),ps__80304);
});
var spn__80343 = (function() { 
var G__80345__delegate = function (x,y,z,args){
var or__3548__auto____80308 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____80308))
{return or__3548__auto____80308;
} else
{return cljs.core.some.call(null,(function (p1__80192_SHARP_){
return cljs.core.some.call(null,p1__80192_SHARP_,args);
}),ps__80304);
}
};
var G__80345 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80345__delegate.call(this, x, y, z, args);
};
G__80345.cljs$lang$maxFixedArity = 3;
G__80345.cljs$lang$applyTo = (function (arglist__80346){
var x = cljs.core.first(arglist__80346);
var y = cljs.core.first(cljs.core.next(arglist__80346));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80346)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80346)));
return G__80345__delegate.call(this, x, y, z, args);
});
return G__80345;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__80339.call(this);
case  1 :
return spn__80340.call(this,x);
case  2 :
return spn__80341.call(this,x,y);
case  3 :
return spn__80342.call(this,x,y,z);
default:
return spn__80343.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__80343.cljs$lang$applyTo;
return spn;
})()
};
var G__80338 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80338__delegate.call(this, p1, p2, p3, ps);
};
G__80338.cljs$lang$maxFixedArity = 3;
G__80338.cljs$lang$applyTo = (function (arglist__80347){
var p1 = cljs.core.first(arglist__80347);
var p2 = cljs.core.first(cljs.core.next(arglist__80347));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80347)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80347)));
return G__80338__delegate.call(this, p1, p2, p3, ps);
});
return G__80338;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__80309.call(this,p1);
case  2 :
return some_fn__80310.call(this,p1,p2);
case  3 :
return some_fn__80311.call(this,p1,p2,p3);
default:
return some_fn__80312.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__80312.cljs$lang$applyTo;
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
var map__80360 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____80348 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80348))
{var s__80349 = temp__3698__auto____80348;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__80349)),map.call(null,f,cljs.core.rest.call(null,s__80349)));
} else
{return null;
}
})));
});
var map__80361 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__80350 = cljs.core.seq.call(null,c1);
var s2__80351 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____80352 = s1__80350;

if(cljs.core.truth_(and__3546__auto____80352))
{return s2__80351;
} else
{return and__3546__auto____80352;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__80350),cljs.core.first.call(null,s2__80351)),map.call(null,f,cljs.core.rest.call(null,s1__80350),cljs.core.rest.call(null,s2__80351)));
} else
{return null;
}
})));
});
var map__80362 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__80353 = cljs.core.seq.call(null,c1);
var s2__80354 = cljs.core.seq.call(null,c2);
var s3__80355 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____80356 = s1__80353;

if(cljs.core.truth_(and__3546__auto____80356))
{var and__3546__auto____80357 = s2__80354;

if(cljs.core.truth_(and__3546__auto____80357))
{return s3__80355;
} else
{return and__3546__auto____80357;
}
} else
{return and__3546__auto____80356;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__80353),cljs.core.first.call(null,s2__80354),cljs.core.first.call(null,s3__80355)),map.call(null,f,cljs.core.rest.call(null,s1__80353),cljs.core.rest.call(null,s2__80354),cljs.core.rest.call(null,s3__80355)));
} else
{return null;
}
})));
});
var map__80363 = (function() { 
var G__80365__delegate = function (f,c1,c2,c3,colls){
var step__80359 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__80358 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__80358)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__80358),step.call(null,map.call(null,cljs.core.rest,ss__80358)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__80270_SHARP_){
return cljs.core.apply.call(null,f,p1__80270_SHARP_);
}),step__80359.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__80365 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__80365__delegate.call(this, f, c1, c2, c3, colls);
};
G__80365.cljs$lang$maxFixedArity = 4;
G__80365.cljs$lang$applyTo = (function (arglist__80366){
var f = cljs.core.first(arglist__80366);
var c1 = cljs.core.first(cljs.core.next(arglist__80366));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80366)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__80366))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__80366))));
return G__80365__delegate.call(this, f, c1, c2, c3, colls);
});
return G__80365;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__80360.call(this,f,c1);
case  3 :
return map__80361.call(this,f,c1,c2);
case  4 :
return map__80362.call(this,f,c1,c2,c3);
default:
return map__80363.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__80363.cljs$lang$applyTo;
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
{var temp__3698__auto____80367 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80367))
{var s__80368 = temp__3698__auto____80367;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__80368),take.call(null,(n - 1),cljs.core.rest.call(null,s__80368)));
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
var step__80371 = (function (n,coll){
while(true){
var s__80369 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____80370 = (n > 0);

if(cljs.core.truth_(and__3546__auto____80370))
{return s__80369;
} else
{return and__3546__auto____80370;
}
})()))
{{
var G__80372 = (n - 1);
var G__80373 = cljs.core.rest.call(null,s__80369);
n = G__80372;
coll = G__80373;
continue;
}
} else
{return s__80369;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__80371.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__80374 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__80375 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__80374.call(this,n);
case  2 :
return drop_last__80375.call(this,n,s);
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
var s__80377 = cljs.core.seq.call(null,coll);
var lead__80378 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__80378))
{{
var G__80379 = cljs.core.next.call(null,s__80377);
var G__80380 = cljs.core.next.call(null,lead__80378);
s__80377 = G__80379;
lead__80378 = G__80380;
continue;
}
} else
{return s__80377;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__80383 = (function (pred,coll){
while(true){
var s__80381 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____80382 = s__80381;

if(cljs.core.truth_(and__3546__auto____80382))
{return pred.call(null,cljs.core.first.call(null,s__80381));
} else
{return and__3546__auto____80382;
}
})()))
{{
var G__80384 = pred;
var G__80385 = cljs.core.rest.call(null,s__80381);
pred = G__80384;
coll = G__80385;
continue;
}
} else
{return s__80381;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__80383.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____80386 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80386))
{var s__80387 = temp__3698__auto____80386;

return cljs.core.concat.call(null,s__80387,cycle.call(null,s__80387));
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
var repeat__80388 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__80389 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__80388.call(this,n);
case  2 :
return repeat__80389.call(this,n,x);
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
var repeatedly__80391 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__80392 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__80391.call(this,n);
case  2 :
return repeatedly__80392.call(this,n,f);
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
var interleave__80398 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__80394 = cljs.core.seq.call(null,c1);
var s2__80395 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____80396 = s1__80394;

if(cljs.core.truth_(and__3546__auto____80396))
{return s2__80395;
} else
{return and__3546__auto____80396;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__80394),cljs.core.cons.call(null,cljs.core.first.call(null,s2__80395),interleave.call(null,cljs.core.rest.call(null,s1__80394),cljs.core.rest.call(null,s2__80395))));
} else
{return null;
}
})));
});
var interleave__80399 = (function() { 
var G__80401__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__80397 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__80397)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__80397),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__80397)));
} else
{return null;
}
})));
};
var G__80401 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__80401__delegate.call(this, c1, c2, colls);
};
G__80401.cljs$lang$maxFixedArity = 2;
G__80401.cljs$lang$applyTo = (function (arglist__80402){
var c1 = cljs.core.first(arglist__80402);
var c2 = cljs.core.first(cljs.core.next(arglist__80402));
var colls = cljs.core.rest(cljs.core.next(arglist__80402));
return G__80401__delegate.call(this, c1, c2, colls);
});
return G__80401;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__80398.call(this,c1,c2);
default:
return interleave__80399.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__80399.cljs$lang$applyTo;
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
var cat__80405 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____80403 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____80403))
{var coll__80404 = temp__3695__auto____80403;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__80404),cat.call(null,cljs.core.rest.call(null,coll__80404),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__80405.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__80406 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__80407 = (function() { 
var G__80409__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__80409 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__80409__delegate.call(this, f, coll, colls);
};
G__80409.cljs$lang$maxFixedArity = 2;
G__80409.cljs$lang$applyTo = (function (arglist__80410){
var f = cljs.core.first(arglist__80410);
var coll = cljs.core.first(cljs.core.next(arglist__80410));
var colls = cljs.core.rest(cljs.core.next(arglist__80410));
return G__80409__delegate.call(this, f, coll, colls);
});
return G__80409;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__80406.call(this,f,coll);
default:
return mapcat__80407.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__80407.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____80411 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80411))
{var s__80412 = temp__3698__auto____80411;

var f__80413 = cljs.core.first.call(null,s__80412);
var r__80414 = cljs.core.rest.call(null,s__80412);

if(cljs.core.truth_(pred.call(null,f__80413)))
{return cljs.core.cons.call(null,f__80413,filter.call(null,pred,r__80414));
} else
{return filter.call(null,pred,r__80414);
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
var walk__80416 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__80416.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__80415_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__80415_SHARP_));
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
var partition__80423 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__80424 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____80417 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80417))
{var s__80418 = temp__3698__auto____80417;

var p__80419 = cljs.core.take.call(null,n,s__80418);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__80419))))
{return cljs.core.cons.call(null,p__80419,partition.call(null,n,step,cljs.core.drop.call(null,step,s__80418)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__80425 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____80420 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80420))
{var s__80421 = temp__3698__auto____80420;

var p__80422 = cljs.core.take.call(null,n,s__80421);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__80422))))
{return cljs.core.cons.call(null,p__80422,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__80421)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__80422,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__80423.call(this,n,step);
case  3 :
return partition__80424.call(this,n,step,pad);
case  4 :
return partition__80425.call(this,n,step,pad,coll);
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
var get_in__80431 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__80432 = (function (m,ks,not_found){
var sentinel__80427 = cljs.core.lookup_sentinel;
var m__80428 = m;
var ks__80429 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__80429))
{var m__80430 = cljs.core.get.call(null,m__80428,cljs.core.first.call(null,ks__80429),sentinel__80427);

if(cljs.core.truth_((sentinel__80427 === m__80430)))
{return not_found;
} else
{{
var G__80434 = sentinel__80427;
var G__80435 = m__80430;
var G__80436 = cljs.core.next.call(null,ks__80429);
sentinel__80427 = G__80434;
m__80428 = G__80435;
ks__80429 = G__80436;
continue;
}
}
} else
{return m__80428;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__80431.call(this,m,ks);
case  3 :
return get_in__80432.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__80437,v){
var vec__80438__80439 = p__80437;
var k__80440 = cljs.core.nth.call(null,vec__80438__80439,0,null);
var ks__80441 = cljs.core.nthnext.call(null,vec__80438__80439,1);

if(cljs.core.truth_(ks__80441))
{return cljs.core.assoc.call(null,m,k__80440,assoc_in.call(null,cljs.core.get.call(null,m,k__80440),ks__80441,v));
} else
{return cljs.core.assoc.call(null,m,k__80440,v);
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
var update_in__delegate = function (m,p__80442,f,args){
var vec__80443__80444 = p__80442;
var k__80445 = cljs.core.nth.call(null,vec__80443__80444,0,null);
var ks__80446 = cljs.core.nthnext.call(null,vec__80443__80444,1);

if(cljs.core.truth_(ks__80446))
{return cljs.core.assoc.call(null,m,k__80445,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__80445),ks__80446,f,args));
} else
{return cljs.core.assoc.call(null,m,k__80445,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__80445),args));
}
};
var update_in = function (m,p__80442,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__80442, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__80447){
var m = cljs.core.first(arglist__80447);
var p__80442 = cljs.core.first(cljs.core.next(arglist__80447));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80447)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80447)));
return update_in__delegate.call(this, m, p__80442, f, args);
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
var this__80448 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__80481 = null;
var G__80481__80482 = (function (coll,k){
var this__80449 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__80481__80483 = (function (coll,k,not_found){
var this__80450 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__80481 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__80481__80482.call(this,coll,k);
case  3 :
return G__80481__80483.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80481;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__80451 = this;
var new_array__80452 = cljs.core.aclone.call(null,this__80451.array);

(new_array__80452[k] = v);
return (new cljs.core.Vector(this__80451.meta,new_array__80452));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__80485 = null;
var G__80485__80486 = (function (tsym80453,k){
var this__80455 = this;
var tsym80453__80456 = this;

var coll__80457 = tsym80453__80456;

return cljs.core._lookup.call(null,coll__80457,k);
});
var G__80485__80487 = (function (tsym80454,k,not_found){
var this__80458 = this;
var tsym80454__80459 = this;

var coll__80460 = tsym80454__80459;

return cljs.core._lookup.call(null,coll__80460,k,not_found);
});
G__80485 = function(tsym80454,k,not_found){
switch(arguments.length){
case  2 :
return G__80485__80486.call(this,tsym80454,k);
case  3 :
return G__80485__80487.call(this,tsym80454,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80485;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__80461 = this;
var new_array__80462 = cljs.core.aclone.call(null,this__80461.array);

new_array__80462.push(o);
return (new cljs.core.Vector(this__80461.meta,new_array__80462));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__80489 = null;
var G__80489__80490 = (function (v,f){
var this__80463 = this;
return cljs.core.ci_reduce.call(null,this__80463.array,f);
});
var G__80489__80491 = (function (v,f,start){
var this__80464 = this;
return cljs.core.ci_reduce.call(null,this__80464.array,f,start);
});
G__80489 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__80489__80490.call(this,v,f);
case  3 :
return G__80489__80491.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80489;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__80465 = this;
if(cljs.core.truth_((this__80465.array.length > 0)))
{var vector_seq__80466 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__80465.array.length)))
{return cljs.core.cons.call(null,(this__80465.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__80466.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__80467 = this;
return this__80467.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__80468 = this;
var count__80469 = this__80468.array.length;

if(cljs.core.truth_((count__80469 > 0)))
{return (this__80468.array[(count__80469 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__80470 = this;
if(cljs.core.truth_((this__80470.array.length > 0)))
{var new_array__80471 = cljs.core.aclone.call(null,this__80470.array);

new_array__80471.pop();
return (new cljs.core.Vector(this__80470.meta,new_array__80471));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__80472 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__80473 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__80474 = this;
return (new cljs.core.Vector(meta,this__80474.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__80475 = this;
return this__80475.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__80493 = null;
var G__80493__80494 = (function (coll,n){
var this__80476 = this;
if(cljs.core.truth_((function (){var and__3546__auto____80477 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____80477))
{return (n < this__80476.array.length);
} else
{return and__3546__auto____80477;
}
})()))
{return (this__80476.array[n]);
} else
{return null;
}
});
var G__80493__80495 = (function (coll,n,not_found){
var this__80478 = this;
if(cljs.core.truth_((function (){var and__3546__auto____80479 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____80479))
{return (n < this__80478.array.length);
} else
{return and__3546__auto____80479;
}
})()))
{return (this__80478.array[n]);
} else
{return not_found;
}
});
G__80493 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__80493__80494.call(this,coll,n);
case  3 :
return G__80493__80495.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80493;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__80480 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__80480.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__80497 = pv.cnt;

if(cljs.core.truth_((cnt__80497 < 32)))
{return 0;
} else
{return (((cnt__80497 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__80498 = level;
var ret__80499 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__80498)))
{return ret__80499;
} else
{var embed__80500 = ret__80499;
var r__80501 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___80502 = (r__80501[0] = embed__80500);

{
var G__80503 = (ll__80498 - 5);
var G__80504 = r__80501;
ll__80498 = G__80503;
ret__80499 = G__80504;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__80505 = cljs.core.aclone.call(null,parent);
var subidx__80506 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__80505[subidx__80506] = tailnode);
return ret__80505;
} else
{var temp__3695__auto____80507 = (parent[subidx__80506]);

if(cljs.core.truth_(temp__3695__auto____80507))
{var child__80508 = temp__3695__auto____80507;

var node_to_insert__80509 = push_tail.call(null,pv,(level - 5),child__80508,tailnode);
var ___80510 = (ret__80505[subidx__80506] = node_to_insert__80509);

return ret__80505;
} else
{var node_to_insert__80511 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___80512 = (ret__80505[subidx__80506] = node_to_insert__80511);

return ret__80505;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____80513 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____80513))
{return (i < pv.cnt);
} else
{return and__3546__auto____80513;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__80514 = pv.root;
var level__80515 = pv.shift;

while(true){
if(cljs.core.truth_((level__80515 > 0)))
{{
var G__80516 = (node__80514[((i >> level__80515) & 31)]);
var G__80517 = (level__80515 - 5);
node__80514 = G__80516;
level__80515 = G__80517;
continue;
}
} else
{return node__80514;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__80518 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__80518[(i & 31)] = val);
return ret__80518;
} else
{var subidx__80519 = ((i >> level) & 31);
var ___80520 = (ret__80518[subidx__80519] = do_assoc.call(null,pv,(level - 5),(node[subidx__80519]),i,val));

return ret__80518;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__80521 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__80522 = pop_tail.call(null,pv,(level - 5),(node[subidx__80521]));

if(cljs.core.truth_((function (){var and__3546__auto____80523 = (new_child__80522 === null);

if(cljs.core.truth_(and__3546__auto____80523))
{return (subidx__80521 === 0);
} else
{return and__3546__auto____80523;
}
})()))
{return null;
} else
{var ret__80524 = cljs.core.aclone.call(null,node);
var ___80525 = (ret__80524[subidx__80521] = new_child__80522);

return ret__80524;
}
} else
{if(cljs.core.truth_((subidx__80521 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__80526 = cljs.core.aclone.call(null,node);
var ___80527 = (ret__80526[subidx__80521] = null);

return ret__80526;
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
var this__80528 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__80568 = null;
var G__80568__80569 = (function (coll,k){
var this__80529 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__80568__80570 = (function (coll,k,not_found){
var this__80530 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__80568 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__80568__80569.call(this,coll,k);
case  3 :
return G__80568__80570.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80568;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__80531 = this;
if(cljs.core.truth_((function (){var and__3546__auto____80532 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____80532))
{return (k < this__80531.cnt);
} else
{return and__3546__auto____80532;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__80533 = cljs.core.aclone.call(null,this__80531.tail);

(new_tail__80533[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__80531.meta,this__80531.cnt,this__80531.shift,this__80531.root,new_tail__80533));
} else
{return (new cljs.core.PersistentVector(this__80531.meta,this__80531.cnt,this__80531.shift,cljs.core.do_assoc.call(null,coll,this__80531.shift,this__80531.root,k,v),this__80531.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__80531.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__80531.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__80572 = null;
var G__80572__80573 = (function (tsym80534,k){
var this__80536 = this;
var tsym80534__80537 = this;

var coll__80538 = tsym80534__80537;

return cljs.core._lookup.call(null,coll__80538,k);
});
var G__80572__80574 = (function (tsym80535,k,not_found){
var this__80539 = this;
var tsym80535__80540 = this;

var coll__80541 = tsym80535__80540;

return cljs.core._lookup.call(null,coll__80541,k,not_found);
});
G__80572 = function(tsym80535,k,not_found){
switch(arguments.length){
case  2 :
return G__80572__80573.call(this,tsym80535,k);
case  3 :
return G__80572__80574.call(this,tsym80535,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80572;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__80542 = this;
if(cljs.core.truth_(((this__80542.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__80543 = cljs.core.aclone.call(null,this__80542.tail);

new_tail__80543.push(o);
return (new cljs.core.PersistentVector(this__80542.meta,(this__80542.cnt + 1),this__80542.shift,this__80542.root,new_tail__80543));
} else
{var root_overflow_QMARK___80544 = ((this__80542.cnt >> 5) > (1 << this__80542.shift));
var new_shift__80545 = (cljs.core.truth_(root_overflow_QMARK___80544)?(this__80542.shift + 5):this__80542.shift);
var new_root__80547 = (cljs.core.truth_(root_overflow_QMARK___80544)?(function (){var n_r__80546 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__80546[0] = this__80542.root);
(n_r__80546[1] = cljs.core.new_path.call(null,this__80542.shift,this__80542.tail));
return n_r__80546;
})():cljs.core.push_tail.call(null,coll,this__80542.shift,this__80542.root,this__80542.tail));

return (new cljs.core.PersistentVector(this__80542.meta,(this__80542.cnt + 1),new_shift__80545,new_root__80547,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__80576 = null;
var G__80576__80577 = (function (v,f){
var this__80548 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__80576__80578 = (function (v,f,start){
var this__80549 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__80576 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__80576__80577.call(this,v,f);
case  3 :
return G__80576__80578.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80576;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__80550 = this;
if(cljs.core.truth_((this__80550.cnt > 0)))
{var vector_seq__80551 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__80550.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__80551.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__80552 = this;
return this__80552.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__80553 = this;
if(cljs.core.truth_((this__80553.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__80553.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__80554 = this;
if(cljs.core.truth_((this__80554.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__80554.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__80554.meta);
} else
{if(cljs.core.truth_((1 < (this__80554.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__80554.meta,(this__80554.cnt - 1),this__80554.shift,this__80554.root,cljs.core.aclone.call(null,this__80554.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__80555 = cljs.core.array_for.call(null,coll,(this__80554.cnt - 2));
var nr__80556 = cljs.core.pop_tail.call(null,this__80554.shift,this__80554.root);
var new_root__80557 = (cljs.core.truth_((nr__80556 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__80556);
var cnt_1__80558 = (this__80554.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____80559 = (5 < this__80554.shift);

if(cljs.core.truth_(and__3546__auto____80559))
{return ((new_root__80557[1]) === null);
} else
{return and__3546__auto____80559;
}
})()))
{return (new cljs.core.PersistentVector(this__80554.meta,cnt_1__80558,(this__80554.shift - 5),(new_root__80557[0]),new_tail__80555));
} else
{return (new cljs.core.PersistentVector(this__80554.meta,cnt_1__80558,this__80554.shift,new_root__80557,new_tail__80555));
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
var this__80560 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__80561 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__80562 = this;
return (new cljs.core.PersistentVector(meta,this__80562.cnt,this__80562.shift,this__80562.root,this__80562.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__80563 = this;
return this__80563.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__80580 = null;
var G__80580__80581 = (function (coll,n){
var this__80564 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__80580__80582 = (function (coll,n,not_found){
var this__80565 = this;
if(cljs.core.truth_((function (){var and__3546__auto____80566 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____80566))
{return (n < this__80565.cnt);
} else
{return and__3546__auto____80566;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__80580 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__80580__80581.call(this,coll,n);
case  3 :
return G__80580__80582.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80580;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__80567 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__80567.meta);
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
vector.cljs$lang$applyTo = (function (arglist__80584){
var args = cljs.core.seq( arglist__80584 );;
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
var this__80585 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__80613 = null;
var G__80613__80614 = (function (coll,k){
var this__80586 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__80613__80615 = (function (coll,k,not_found){
var this__80587 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__80613 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__80613__80614.call(this,coll,k);
case  3 :
return G__80613__80615.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80613;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__80588 = this;
var v_pos__80589 = (this__80588.start + key);

return (new cljs.core.Subvec(this__80588.meta,cljs.core._assoc.call(null,this__80588.v,v_pos__80589,val),this__80588.start,((this__80588.end > (v_pos__80589 + 1)) ? this__80588.end : (v_pos__80589 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__80617 = null;
var G__80617__80618 = (function (tsym80590,k){
var this__80592 = this;
var tsym80590__80593 = this;

var coll__80594 = tsym80590__80593;

return cljs.core._lookup.call(null,coll__80594,k);
});
var G__80617__80619 = (function (tsym80591,k,not_found){
var this__80595 = this;
var tsym80591__80596 = this;

var coll__80597 = tsym80591__80596;

return cljs.core._lookup.call(null,coll__80597,k,not_found);
});
G__80617 = function(tsym80591,k,not_found){
switch(arguments.length){
case  2 :
return G__80617__80618.call(this,tsym80591,k);
case  3 :
return G__80617__80619.call(this,tsym80591,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80617;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__80598 = this;
return (new cljs.core.Subvec(this__80598.meta,cljs.core._assoc_n.call(null,this__80598.v,this__80598.end,o),this__80598.start,(this__80598.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__80621 = null;
var G__80621__80622 = (function (coll,f){
var this__80599 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__80621__80623 = (function (coll,f,start){
var this__80600 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__80621 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__80621__80622.call(this,coll,f);
case  3 :
return G__80621__80623.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80621;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__80601 = this;
var subvec_seq__80602 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__80601.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__80601.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__80602.call(null,this__80601.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__80603 = this;
return (this__80603.end - this__80603.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__80604 = this;
return cljs.core._nth.call(null,this__80604.v,(this__80604.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__80605 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__80605.start,this__80605.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__80605.meta,this__80605.v,this__80605.start,(this__80605.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__80606 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__80607 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__80608 = this;
return (new cljs.core.Subvec(meta,this__80608.v,this__80608.start,this__80608.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__80609 = this;
return this__80609.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__80625 = null;
var G__80625__80626 = (function (coll,n){
var this__80610 = this;
return cljs.core._nth.call(null,this__80610.v,(this__80610.start + n));
});
var G__80625__80627 = (function (coll,n,not_found){
var this__80611 = this;
return cljs.core._nth.call(null,this__80611.v,(this__80611.start + n),not_found);
});
G__80625 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__80625__80626.call(this,coll,n);
case  3 :
return G__80625__80627.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80625;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__80612 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__80612.meta);
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
var subvec__80629 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__80630 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__80629.call(this,v,start);
case  3 :
return subvec__80630.call(this,v,start,end);
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
var this__80632 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__80633 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__80634 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__80635 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__80635.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__80636 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__80637 = this;
return cljs.core._first.call(null,this__80637.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__80638 = this;
var temp__3695__auto____80639 = cljs.core.next.call(null,this__80638.front);

if(cljs.core.truth_(temp__3695__auto____80639))
{var f1__80640 = temp__3695__auto____80639;

return (new cljs.core.PersistentQueueSeq(this__80638.meta,f1__80640,this__80638.rear));
} else
{if(cljs.core.truth_((this__80638.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__80638.meta,this__80638.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__80641 = this;
return this__80641.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__80642 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__80642.front,this__80642.rear));
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
var this__80643 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__80644 = this;
if(cljs.core.truth_(this__80644.front))
{return (new cljs.core.PersistentQueue(this__80644.meta,(this__80644.count + 1),this__80644.front,cljs.core.conj.call(null,(function (){var or__3548__auto____80645 = this__80644.rear;

if(cljs.core.truth_(or__3548__auto____80645))
{return or__3548__auto____80645;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__80644.meta,(this__80644.count + 1),cljs.core.conj.call(null,this__80644.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__80646 = this;
var rear__80647 = cljs.core.seq.call(null,this__80646.rear);

if(cljs.core.truth_((function (){var or__3548__auto____80648 = this__80646.front;

if(cljs.core.truth_(or__3548__auto____80648))
{return or__3548__auto____80648;
} else
{return rear__80647;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__80646.front,cljs.core.seq.call(null,rear__80647)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__80649 = this;
return this__80649.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__80650 = this;
return cljs.core._first.call(null,this__80650.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__80651 = this;
if(cljs.core.truth_(this__80651.front))
{var temp__3695__auto____80652 = cljs.core.next.call(null,this__80651.front);

if(cljs.core.truth_(temp__3695__auto____80652))
{var f1__80653 = temp__3695__auto____80652;

return (new cljs.core.PersistentQueue(this__80651.meta,(this__80651.count - 1),f1__80653,this__80651.rear));
} else
{return (new cljs.core.PersistentQueue(this__80651.meta,(this__80651.count - 1),cljs.core.seq.call(null,this__80651.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__80654 = this;
return cljs.core.first.call(null,this__80654.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__80655 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__80656 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__80657 = this;
return (new cljs.core.PersistentQueue(meta,this__80657.count,this__80657.front,this__80657.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__80658 = this;
return this__80658.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__80659 = this;
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
var this__80660 = this;
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
var len__80661 = array.length;

var i__80662 = 0;

while(true){
if(cljs.core.truth_((i__80662 < len__80661)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__80662]))))
{return i__80662;
} else
{{
var G__80663 = (i__80662 + incr);
i__80662 = G__80663;
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
var obj_map_contains_key_QMARK___80665 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___80666 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____80664 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____80664))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____80664;
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
return obj_map_contains_key_QMARK___80665.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___80666.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__80669 = cljs.core.hash.call(null,a);
var b__80670 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__80669 < b__80670)))
{return -1;
} else
{if(cljs.core.truth_((a__80669 > b__80670)))
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
var this__80671 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__80698 = null;
var G__80698__80699 = (function (coll,k){
var this__80672 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__80698__80700 = (function (coll,k,not_found){
var this__80673 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__80673.strobj,(this__80673.strobj[k]),not_found);
});
G__80698 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__80698__80699.call(this,coll,k);
case  3 :
return G__80698__80700.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80698;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__80674 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__80675 = goog.object.clone.call(null,this__80674.strobj);
var overwrite_QMARK___80676 = new_strobj__80675.hasOwnProperty(k);

(new_strobj__80675[k] = v);
if(cljs.core.truth_(overwrite_QMARK___80676))
{return (new cljs.core.ObjMap(this__80674.meta,this__80674.keys,new_strobj__80675));
} else
{var new_keys__80677 = cljs.core.aclone.call(null,this__80674.keys);

new_keys__80677.push(k);
return (new cljs.core.ObjMap(this__80674.meta,new_keys__80677,new_strobj__80675));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__80674.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__80678 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__80678.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__80702 = null;
var G__80702__80703 = (function (tsym80679,k){
var this__80681 = this;
var tsym80679__80682 = this;

var coll__80683 = tsym80679__80682;

return cljs.core._lookup.call(null,coll__80683,k);
});
var G__80702__80704 = (function (tsym80680,k,not_found){
var this__80684 = this;
var tsym80680__80685 = this;

var coll__80686 = tsym80680__80685;

return cljs.core._lookup.call(null,coll__80686,k,not_found);
});
G__80702 = function(tsym80680,k,not_found){
switch(arguments.length){
case  2 :
return G__80702__80703.call(this,tsym80680,k);
case  3 :
return G__80702__80704.call(this,tsym80680,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80702;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__80687 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__80688 = this;
if(cljs.core.truth_((this__80688.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__80668_SHARP_){
return cljs.core.vector.call(null,p1__80668_SHARP_,(this__80688.strobj[p1__80668_SHARP_]));
}),this__80688.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__80689 = this;
return this__80689.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__80690 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__80691 = this;
return (new cljs.core.ObjMap(meta,this__80691.keys,this__80691.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__80692 = this;
return this__80692.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__80693 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__80693.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__80694 = this;
if(cljs.core.truth_((function (){var and__3546__auto____80695 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____80695))
{return this__80694.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____80695;
}
})()))
{var new_keys__80696 = cljs.core.aclone.call(null,this__80694.keys);
var new_strobj__80697 = goog.object.clone.call(null,this__80694.strobj);

new_keys__80696.splice(cljs.core.scan_array.call(null,1,k,new_keys__80696),1);
cljs.core.js_delete.call(null,new_strobj__80697,k);
return (new cljs.core.ObjMap(this__80694.meta,new_keys__80696,new_strobj__80697));
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
var this__80707 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__80745 = null;
var G__80745__80746 = (function (coll,k){
var this__80708 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__80745__80747 = (function (coll,k,not_found){
var this__80709 = this;
var bucket__80710 = (this__80709.hashobj[cljs.core.hash.call(null,k)]);
var i__80711 = (cljs.core.truth_(bucket__80710)?cljs.core.scan_array.call(null,2,k,bucket__80710):null);

if(cljs.core.truth_(i__80711))
{return (bucket__80710[(i__80711 + 1)]);
} else
{return not_found;
}
});
G__80745 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__80745__80746.call(this,coll,k);
case  3 :
return G__80745__80747.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80745;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__80712 = this;
var h__80713 = cljs.core.hash.call(null,k);
var bucket__80714 = (this__80712.hashobj[h__80713]);

if(cljs.core.truth_(bucket__80714))
{var new_bucket__80715 = cljs.core.aclone.call(null,bucket__80714);
var new_hashobj__80716 = goog.object.clone.call(null,this__80712.hashobj);

(new_hashobj__80716[h__80713] = new_bucket__80715);
var temp__3695__auto____80717 = cljs.core.scan_array.call(null,2,k,new_bucket__80715);

if(cljs.core.truth_(temp__3695__auto____80717))
{var i__80718 = temp__3695__auto____80717;

(new_bucket__80715[(i__80718 + 1)] = v);
return (new cljs.core.HashMap(this__80712.meta,this__80712.count,new_hashobj__80716));
} else
{new_bucket__80715.push(k,v);
return (new cljs.core.HashMap(this__80712.meta,(this__80712.count + 1),new_hashobj__80716));
}
} else
{var new_hashobj__80719 = goog.object.clone.call(null,this__80712.hashobj);

(new_hashobj__80719[h__80713] = [k,v]);
return (new cljs.core.HashMap(this__80712.meta,(this__80712.count + 1),new_hashobj__80719));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__80720 = this;
var bucket__80721 = (this__80720.hashobj[cljs.core.hash.call(null,k)]);
var i__80722 = (cljs.core.truth_(bucket__80721)?cljs.core.scan_array.call(null,2,k,bucket__80721):null);

if(cljs.core.truth_(i__80722))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__80749 = null;
var G__80749__80750 = (function (tsym80723,k){
var this__80725 = this;
var tsym80723__80726 = this;

var coll__80727 = tsym80723__80726;

return cljs.core._lookup.call(null,coll__80727,k);
});
var G__80749__80751 = (function (tsym80724,k,not_found){
var this__80728 = this;
var tsym80724__80729 = this;

var coll__80730 = tsym80724__80729;

return cljs.core._lookup.call(null,coll__80730,k,not_found);
});
G__80749 = function(tsym80724,k,not_found){
switch(arguments.length){
case  2 :
return G__80749__80750.call(this,tsym80724,k);
case  3 :
return G__80749__80751.call(this,tsym80724,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80749;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__80731 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__80732 = this;
if(cljs.core.truth_((this__80732.count > 0)))
{var hashes__80733 = cljs.core.js_keys.call(null,this__80732.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__80706_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__80732.hashobj[p1__80706_SHARP_])));
}),hashes__80733);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__80734 = this;
return this__80734.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__80735 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__80736 = this;
return (new cljs.core.HashMap(meta,this__80736.count,this__80736.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__80737 = this;
return this__80737.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__80738 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__80738.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__80739 = this;
var h__80740 = cljs.core.hash.call(null,k);
var bucket__80741 = (this__80739.hashobj[h__80740]);
var i__80742 = (cljs.core.truth_(bucket__80741)?cljs.core.scan_array.call(null,2,k,bucket__80741):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__80742)))
{return coll;
} else
{var new_hashobj__80743 = goog.object.clone.call(null,this__80739.hashobj);

if(cljs.core.truth_((3 > bucket__80741.length)))
{cljs.core.js_delete.call(null,new_hashobj__80743,h__80740);
} else
{var new_bucket__80744 = cljs.core.aclone.call(null,bucket__80741);

new_bucket__80744.splice(i__80742,2);
(new_hashobj__80743[h__80740] = new_bucket__80744);
}
return (new cljs.core.HashMap(this__80739.meta,(this__80739.count - 1),new_hashobj__80743));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__80753 = ks.length;

var i__80754 = 0;
var out__80755 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__80754 < len__80753)))
{{
var G__80756 = (i__80754 + 1);
var G__80757 = cljs.core.assoc.call(null,out__80755,(ks[i__80754]),(vs[i__80754]));
i__80754 = G__80756;
out__80755 = G__80757;
continue;
}
} else
{return out__80755;
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
var in$__80758 = cljs.core.seq.call(null,keyvals);
var out__80759 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__80758))
{{
var G__80760 = cljs.core.nnext.call(null,in$__80758);
var G__80761 = cljs.core.assoc.call(null,out__80759,cljs.core.first.call(null,in$__80758),cljs.core.second.call(null,in$__80758));
in$__80758 = G__80760;
out__80759 = G__80761;
continue;
}
} else
{return out__80759;
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
hash_map.cljs$lang$applyTo = (function (arglist__80762){
var keyvals = cljs.core.seq( arglist__80762 );;
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
{return cljs.core.reduce.call(null,(function (p1__80763_SHARP_,p2__80764_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____80765 = p1__80763_SHARP_;

if(cljs.core.truth_(or__3548__auto____80765))
{return or__3548__auto____80765;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__80764_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__80766){
var maps = cljs.core.seq( arglist__80766 );;
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
{var merge_entry__80769 = (function (m,e){
var k__80767 = cljs.core.first.call(null,e);
var v__80768 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__80767)))
{return cljs.core.assoc.call(null,m,k__80767,f.call(null,cljs.core.get.call(null,m,k__80767),v__80768));
} else
{return cljs.core.assoc.call(null,m,k__80767,v__80768);
}
});
var merge2__80771 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__80769,(function (){var or__3548__auto____80770 = m1;

if(cljs.core.truth_(or__3548__auto____80770))
{return or__3548__auto____80770;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__80771,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__80772){
var f = cljs.core.first(arglist__80772);
var maps = cljs.core.rest(arglist__80772);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__80774 = cljs.core.ObjMap.fromObject([],{});
var keys__80775 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__80775))
{var key__80776 = cljs.core.first.call(null,keys__80775);
var entry__80777 = cljs.core.get.call(null,map,key__80776,"\uFDD0'user/not-found");

{
var G__80778 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__80777,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__80774,key__80776,entry__80777):ret__80774);
var G__80779 = cljs.core.next.call(null,keys__80775);
ret__80774 = G__80778;
keys__80775 = G__80779;
continue;
}
} else
{return ret__80774;
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
var this__80780 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__80801 = null;
var G__80801__80802 = (function (coll,v){
var this__80781 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__80801__80803 = (function (coll,v,not_found){
var this__80782 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__80782.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__80801 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__80801__80802.call(this,coll,v);
case  3 :
return G__80801__80803.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80801;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__80805 = null;
var G__80805__80806 = (function (tsym80783,k){
var this__80785 = this;
var tsym80783__80786 = this;

var coll__80787 = tsym80783__80786;

return cljs.core._lookup.call(null,coll__80787,k);
});
var G__80805__80807 = (function (tsym80784,k,not_found){
var this__80788 = this;
var tsym80784__80789 = this;

var coll__80790 = tsym80784__80789;

return cljs.core._lookup.call(null,coll__80790,k,not_found);
});
G__80805 = function(tsym80784,k,not_found){
switch(arguments.length){
case  2 :
return G__80805__80806.call(this,tsym80784,k);
case  3 :
return G__80805__80807.call(this,tsym80784,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80805;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__80791 = this;
return (new cljs.core.Set(this__80791.meta,cljs.core.assoc.call(null,this__80791.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__80792 = this;
return cljs.core.keys.call(null,this__80792.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__80793 = this;
return (new cljs.core.Set(this__80793.meta,cljs.core.dissoc.call(null,this__80793.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__80794 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__80795 = this;
var and__3546__auto____80796 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____80796))
{var and__3546__auto____80797 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____80797))
{return cljs.core.every_QMARK_.call(null,(function (p1__80773_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__80773_SHARP_);
}),other);
} else
{return and__3546__auto____80797;
}
} else
{return and__3546__auto____80796;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__80798 = this;
return (new cljs.core.Set(meta,this__80798.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__80799 = this;
return this__80799.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__80800 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__80800.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__80810 = cljs.core.seq.call(null,coll);
var out__80811 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__80810))))
{{
var G__80812 = cljs.core.rest.call(null,in$__80810);
var G__80813 = cljs.core.conj.call(null,out__80811,cljs.core.first.call(null,in$__80810));
in$__80810 = G__80812;
out__80811 = G__80813;
continue;
}
} else
{return out__80811;
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
{var n__80814 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____80815 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____80815))
{var e__80816 = temp__3695__auto____80815;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__80816));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__80814,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__80809_SHARP_){
var temp__3695__auto____80817 = cljs.core.find.call(null,smap,p1__80809_SHARP_);

if(cljs.core.truth_(temp__3695__auto____80817))
{var e__80818 = temp__3695__auto____80817;

return cljs.core.second.call(null,e__80818);
} else
{return p1__80809_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__80826 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__80819,seen){
while(true){
var vec__80820__80821 = p__80819;
var f__80822 = cljs.core.nth.call(null,vec__80820__80821,0,null);
var xs__80823 = vec__80820__80821;

var temp__3698__auto____80824 = cljs.core.seq.call(null,xs__80823);

if(cljs.core.truth_(temp__3698__auto____80824))
{var s__80825 = temp__3698__auto____80824;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__80822)))
{{
var G__80827 = cljs.core.rest.call(null,s__80825);
var G__80828 = seen;
p__80819 = G__80827;
seen = G__80828;
continue;
}
} else
{return cljs.core.cons.call(null,f__80822,step.call(null,cljs.core.rest.call(null,s__80825),cljs.core.conj.call(null,seen,f__80822)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__80826.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__80829 = cljs.core.PersistentVector.fromArray([]);
var s__80830 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__80830)))
{{
var G__80831 = cljs.core.conj.call(null,ret__80829,cljs.core.first.call(null,s__80830));
var G__80832 = cljs.core.next.call(null,s__80830);
ret__80829 = G__80831;
s__80830 = G__80832;
continue;
}
} else
{return cljs.core.seq.call(null,ret__80829);
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
{if(cljs.core.truth_((function (){var or__3548__auto____80833 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____80833))
{return or__3548__auto____80833;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__80834 = x.lastIndexOf("/");

if(cljs.core.truth_((i__80834 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__80834 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____80835 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____80835))
{return or__3548__auto____80835;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__80836 = x.lastIndexOf("/");

if(cljs.core.truth_((i__80836 > -1)))
{return cljs.core.subs.call(null,x,2,i__80836);
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
var map__80839 = cljs.core.ObjMap.fromObject([],{});
var ks__80840 = cljs.core.seq.call(null,keys);
var vs__80841 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____80842 = ks__80840;

if(cljs.core.truth_(and__3546__auto____80842))
{return vs__80841;
} else
{return and__3546__auto____80842;
}
})()))
{{
var G__80843 = cljs.core.assoc.call(null,map__80839,cljs.core.first.call(null,ks__80840),cljs.core.first.call(null,vs__80841));
var G__80844 = cljs.core.next.call(null,ks__80840);
var G__80845 = cljs.core.next.call(null,vs__80841);
map__80839 = G__80843;
ks__80840 = G__80844;
vs__80841 = G__80845;
continue;
}
} else
{return map__80839;
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
var max_key__80848 = (function (k,x){
return x;
});
var max_key__80849 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__80850 = (function() { 
var G__80852__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__80837_SHARP_,p2__80838_SHARP_){
return max_key.call(null,k,p1__80837_SHARP_,p2__80838_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__80852 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80852__delegate.call(this, k, x, y, more);
};
G__80852.cljs$lang$maxFixedArity = 3;
G__80852.cljs$lang$applyTo = (function (arglist__80853){
var k = cljs.core.first(arglist__80853);
var x = cljs.core.first(cljs.core.next(arglist__80853));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80853)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80853)));
return G__80852__delegate.call(this, k, x, y, more);
});
return G__80852;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__80848.call(this,k,x);
case  3 :
return max_key__80849.call(this,k,x,y);
default:
return max_key__80850.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__80850.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__80854 = (function (k,x){
return x;
});
var min_key__80855 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__80856 = (function() { 
var G__80858__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__80846_SHARP_,p2__80847_SHARP_){
return min_key.call(null,k,p1__80846_SHARP_,p2__80847_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__80858 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80858__delegate.call(this, k, x, y, more);
};
G__80858.cljs$lang$maxFixedArity = 3;
G__80858.cljs$lang$applyTo = (function (arglist__80859){
var k = cljs.core.first(arglist__80859);
var x = cljs.core.first(cljs.core.next(arglist__80859));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80859)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80859)));
return G__80858__delegate.call(this, k, x, y, more);
});
return G__80858;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__80854.call(this,k,x);
case  3 :
return min_key__80855.call(this,k,x,y);
default:
return min_key__80856.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__80856.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__80862 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__80863 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____80860 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80860))
{var s__80861 = temp__3698__auto____80860;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__80861),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__80861)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__80862.call(this,n,step);
case  3 :
return partition_all__80863.call(this,n,step,coll);
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
var temp__3698__auto____80865 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80865))
{var s__80866 = temp__3698__auto____80865;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__80866))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__80866),take_while.call(null,pred,cljs.core.rest.call(null,s__80866)));
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
var this__80867 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__80868 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__80884 = null;
var G__80884__80885 = (function (rng,f){
var this__80869 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__80884__80886 = (function (rng,f,s){
var this__80870 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__80884 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__80884__80885.call(this,rng,f);
case  3 :
return G__80884__80886.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80884;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__80871 = this;
var comp__80872 = (cljs.core.truth_((this__80871.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__80872.call(null,this__80871.start,this__80871.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__80873 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__80873.end - this__80873.start) / this__80873.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__80874 = this;
return this__80874.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__80875 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__80875.meta,(this__80875.start + this__80875.step),this__80875.end,this__80875.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__80876 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__80877 = this;
return (new cljs.core.Range(meta,this__80877.start,this__80877.end,this__80877.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__80878 = this;
return this__80878.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__80888 = null;
var G__80888__80889 = (function (rng,n){
var this__80879 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__80879.start + (n * this__80879.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____80880 = (this__80879.start > this__80879.end);

if(cljs.core.truth_(and__3546__auto____80880))
{return cljs.core._EQ_.call(null,this__80879.step,0);
} else
{return and__3546__auto____80880;
}
})()))
{return this__80879.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__80888__80890 = (function (rng,n,not_found){
var this__80881 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__80881.start + (n * this__80881.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____80882 = (this__80881.start > this__80881.end);

if(cljs.core.truth_(and__3546__auto____80882))
{return cljs.core._EQ_.call(null,this__80881.step,0);
} else
{return and__3546__auto____80882;
}
})()))
{return this__80881.start;
} else
{return not_found;
}
}
});
G__80888 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__80888__80889.call(this,rng,n);
case  3 :
return G__80888__80890.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__80888;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__80883 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__80883.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__80892 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__80893 = (function (end){
return range.call(null,0,end,1);
});
var range__80894 = (function (start,end){
return range.call(null,start,end,1);
});
var range__80895 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__80892.call(this);
case  1 :
return range__80893.call(this,start);
case  2 :
return range__80894.call(this,start,end);
case  3 :
return range__80895.call(this,start,end,step);
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
var temp__3698__auto____80897 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80897))
{var s__80898 = temp__3698__auto____80897;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__80898),take_nth.call(null,n,cljs.core.drop.call(null,n,s__80898)));
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
var temp__3698__auto____80900 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80900))
{var s__80901 = temp__3698__auto____80900;

var fst__80902 = cljs.core.first.call(null,s__80901);
var fv__80903 = f.call(null,fst__80902);
var run__80904 = cljs.core.cons.call(null,fst__80902,cljs.core.take_while.call(null,(function (p1__80899_SHARP_){
return cljs.core._EQ_.call(null,fv__80903,f.call(null,p1__80899_SHARP_));
}),cljs.core.next.call(null,s__80901)));

return cljs.core.cons.call(null,run__80904,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__80904),s__80901))));
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
var reductions__80919 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____80915 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____80915))
{var s__80916 = temp__3695__auto____80915;

return reductions.call(null,f,cljs.core.first.call(null,s__80916),cljs.core.rest.call(null,s__80916));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__80920 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____80917 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____80917))
{var s__80918 = temp__3698__auto____80917;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__80918)),cljs.core.rest.call(null,s__80918));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__80919.call(this,f,init);
case  3 :
return reductions__80920.call(this,f,init,coll);
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
var juxt__80923 = (function (f){
return (function() {
var G__80928 = null;
var G__80928__80929 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__80928__80930 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__80928__80931 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__80928__80932 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__80928__80933 = (function() { 
var G__80935__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__80935 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80935__delegate.call(this, x, y, z, args);
};
G__80935.cljs$lang$maxFixedArity = 3;
G__80935.cljs$lang$applyTo = (function (arglist__80936){
var x = cljs.core.first(arglist__80936);
var y = cljs.core.first(cljs.core.next(arglist__80936));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80936)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80936)));
return G__80935__delegate.call(this, x, y, z, args);
});
return G__80935;
})()
;
G__80928 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__80928__80929.call(this);
case  1 :
return G__80928__80930.call(this,x);
case  2 :
return G__80928__80931.call(this,x,y);
case  3 :
return G__80928__80932.call(this,x,y,z);
default:
return G__80928__80933.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__80928.cljs$lang$maxFixedArity = 3;
G__80928.cljs$lang$applyTo = G__80928__80933.cljs$lang$applyTo;
return G__80928;
})()
});
var juxt__80924 = (function (f,g){
return (function() {
var G__80937 = null;
var G__80937__80938 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__80937__80939 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__80937__80940 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__80937__80941 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__80937__80942 = (function() { 
var G__80944__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__80944 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80944__delegate.call(this, x, y, z, args);
};
G__80944.cljs$lang$maxFixedArity = 3;
G__80944.cljs$lang$applyTo = (function (arglist__80945){
var x = cljs.core.first(arglist__80945);
var y = cljs.core.first(cljs.core.next(arglist__80945));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80945)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80945)));
return G__80944__delegate.call(this, x, y, z, args);
});
return G__80944;
})()
;
G__80937 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__80937__80938.call(this);
case  1 :
return G__80937__80939.call(this,x);
case  2 :
return G__80937__80940.call(this,x,y);
case  3 :
return G__80937__80941.call(this,x,y,z);
default:
return G__80937__80942.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__80937.cljs$lang$maxFixedArity = 3;
G__80937.cljs$lang$applyTo = G__80937__80942.cljs$lang$applyTo;
return G__80937;
})()
});
var juxt__80925 = (function (f,g,h){
return (function() {
var G__80946 = null;
var G__80946__80947 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__80946__80948 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__80946__80949 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__80946__80950 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__80946__80951 = (function() { 
var G__80953__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__80953 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80953__delegate.call(this, x, y, z, args);
};
G__80953.cljs$lang$maxFixedArity = 3;
G__80953.cljs$lang$applyTo = (function (arglist__80954){
var x = cljs.core.first(arglist__80954);
var y = cljs.core.first(cljs.core.next(arglist__80954));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80954)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80954)));
return G__80953__delegate.call(this, x, y, z, args);
});
return G__80953;
})()
;
G__80946 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__80946__80947.call(this);
case  1 :
return G__80946__80948.call(this,x);
case  2 :
return G__80946__80949.call(this,x,y);
case  3 :
return G__80946__80950.call(this,x,y,z);
default:
return G__80946__80951.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__80946.cljs$lang$maxFixedArity = 3;
G__80946.cljs$lang$applyTo = G__80946__80951.cljs$lang$applyTo;
return G__80946;
})()
});
var juxt__80926 = (function() { 
var G__80955__delegate = function (f,g,h,fs){
var fs__80922 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__80956 = null;
var G__80956__80957 = (function (){
return cljs.core.reduce.call(null,(function (p1__80905_SHARP_,p2__80906_SHARP_){
return cljs.core.conj.call(null,p1__80905_SHARP_,p2__80906_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__80922);
});
var G__80956__80958 = (function (x){
return cljs.core.reduce.call(null,(function (p1__80907_SHARP_,p2__80908_SHARP_){
return cljs.core.conj.call(null,p1__80907_SHARP_,p2__80908_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__80922);
});
var G__80956__80959 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__80909_SHARP_,p2__80910_SHARP_){
return cljs.core.conj.call(null,p1__80909_SHARP_,p2__80910_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__80922);
});
var G__80956__80960 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__80911_SHARP_,p2__80912_SHARP_){
return cljs.core.conj.call(null,p1__80911_SHARP_,p2__80912_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__80922);
});
var G__80956__80961 = (function() { 
var G__80963__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__80913_SHARP_,p2__80914_SHARP_){
return cljs.core.conj.call(null,p1__80913_SHARP_,cljs.core.apply.call(null,p2__80914_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__80922);
};
var G__80963 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80963__delegate.call(this, x, y, z, args);
};
G__80963.cljs$lang$maxFixedArity = 3;
G__80963.cljs$lang$applyTo = (function (arglist__80964){
var x = cljs.core.first(arglist__80964);
var y = cljs.core.first(cljs.core.next(arglist__80964));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80964)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80964)));
return G__80963__delegate.call(this, x, y, z, args);
});
return G__80963;
})()
;
G__80956 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__80956__80957.call(this);
case  1 :
return G__80956__80958.call(this,x);
case  2 :
return G__80956__80959.call(this,x,y);
case  3 :
return G__80956__80960.call(this,x,y,z);
default:
return G__80956__80961.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__80956.cljs$lang$maxFixedArity = 3;
G__80956.cljs$lang$applyTo = G__80956__80961.cljs$lang$applyTo;
return G__80956;
})()
};
var G__80955 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__80955__delegate.call(this, f, g, h, fs);
};
G__80955.cljs$lang$maxFixedArity = 3;
G__80955.cljs$lang$applyTo = (function (arglist__80965){
var f = cljs.core.first(arglist__80965);
var g = cljs.core.first(cljs.core.next(arglist__80965));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__80965)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__80965)));
return G__80955__delegate.call(this, f, g, h, fs);
});
return G__80955;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__80923.call(this,f);
case  2 :
return juxt__80924.call(this,f,g);
case  3 :
return juxt__80925.call(this,f,g,h);
default:
return juxt__80926.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__80926.cljs$lang$applyTo;
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
var dorun__80967 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__80970 = cljs.core.next.call(null,coll);
coll = G__80970;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__80968 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____80966 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____80966))
{return (n > 0);
} else
{return and__3546__auto____80966;
}
})()))
{{
var G__80971 = (n - 1);
var G__80972 = cljs.core.next.call(null,coll);
n = G__80971;
coll = G__80972;
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
return dorun__80967.call(this,n);
case  2 :
return dorun__80968.call(this,n,coll);
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
var doall__80973 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__80974 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__80973.call(this,n);
case  2 :
return doall__80974.call(this,n,coll);
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
var matches__80976 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__80976),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__80976),1)))
{return cljs.core.first.call(null,matches__80976);
} else
{return cljs.core.vec.call(null,matches__80976);
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
var matches__80977 = re.exec(s);

if(cljs.core.truth_((matches__80977 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__80977),1)))
{return cljs.core.first.call(null,matches__80977);
} else
{return cljs.core.vec.call(null,matches__80977);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__80978 = cljs.core.re_find.call(null,re,s);
var match_idx__80979 = s.search(re);
var match_str__80980 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__80978))?cljs.core.first.call(null,match_data__80978):match_data__80978);
var post_match__80981 = cljs.core.subs.call(null,s,(match_idx__80979 + cljs.core.count.call(null,match_str__80980)));

if(cljs.core.truth_(match_data__80978))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__80978,re_seq.call(null,re,post_match__80981));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__80983__80984 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___80985 = cljs.core.nth.call(null,vec__80983__80984,0,null);
var flags__80986 = cljs.core.nth.call(null,vec__80983__80984,1,null);
var pattern__80987 = cljs.core.nth.call(null,vec__80983__80984,2,null);

return (new RegExp(pattern__80987,flags__80986));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__80982_SHARP_){
return print_one.call(null,p1__80982_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____80988 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____80988))
{var and__3546__auto____80992 = (function (){var x__451__auto____80989 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____80990 = x__451__auto____80989;

if(cljs.core.truth_(and__3546__auto____80990))
{var and__3546__auto____80991 = x__451__auto____80989.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____80991))
{return cljs.core.not.call(null,x__451__auto____80989.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____80991;
}
} else
{return and__3546__auto____80990;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____80989);
}
})();

if(cljs.core.truth_(and__3546__auto____80992))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____80992;
}
} else
{return and__3546__auto____80988;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____80993 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____80994 = x__451__auto____80993;

if(cljs.core.truth_(and__3546__auto____80994))
{var and__3546__auto____80995 = x__451__auto____80993.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____80995))
{return cljs.core.not.call(null,x__451__auto____80993.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____80995;
}
} else
{return and__3546__auto____80994;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____80993);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__80996 = cljs.core.first.call(null,objs);
var sb__80997 = (new goog.string.StringBuffer());

var G__80998__80999 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__80998__80999))
{var obj__81000 = cljs.core.first.call(null,G__80998__80999);
var G__80998__81001 = G__80998__80999;

while(true){
if(cljs.core.truth_((obj__81000 === first_obj__80996)))
{} else
{sb__80997.append(" ");
}
var G__81002__81003 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__81000,opts));

if(cljs.core.truth_(G__81002__81003))
{var string__81004 = cljs.core.first.call(null,G__81002__81003);
var G__81002__81005 = G__81002__81003;

while(true){
sb__80997.append(string__81004);
var temp__3698__auto____81006 = cljs.core.next.call(null,G__81002__81005);

if(cljs.core.truth_(temp__3698__auto____81006))
{var G__81002__81007 = temp__3698__auto____81006;

{
var G__81010 = cljs.core.first.call(null,G__81002__81007);
var G__81011 = G__81002__81007;
string__81004 = G__81010;
G__81002__81005 = G__81011;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____81008 = cljs.core.next.call(null,G__80998__81001);

if(cljs.core.truth_(temp__3698__auto____81008))
{var G__80998__81009 = temp__3698__auto____81008;

{
var G__81012 = cljs.core.first.call(null,G__80998__81009);
var G__81013 = G__80998__81009;
obj__81000 = G__81012;
G__80998__81001 = G__81013;
continue;
}
} else
{}
break;
}
} else
{}
return sb__80997;
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
var sb__81014 = cljs.core.pr_sb.call(null,objs,opts);

sb__81014.append("\n");
return cljs.core.str.call(null,sb__81014);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__81015 = cljs.core.first.call(null,objs);

var G__81016__81017 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__81016__81017))
{var obj__81018 = cljs.core.first.call(null,G__81016__81017);
var G__81016__81019 = G__81016__81017;

while(true){
if(cljs.core.truth_((obj__81018 === first_obj__81015)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__81020__81021 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__81018,opts));

if(cljs.core.truth_(G__81020__81021))
{var string__81022 = cljs.core.first.call(null,G__81020__81021);
var G__81020__81023 = G__81020__81021;

while(true){
cljs.core.string_print.call(null,string__81022);
var temp__3698__auto____81024 = cljs.core.next.call(null,G__81020__81023);

if(cljs.core.truth_(temp__3698__auto____81024))
{var G__81020__81025 = temp__3698__auto____81024;

{
var G__81028 = cljs.core.first.call(null,G__81020__81025);
var G__81029 = G__81020__81025;
string__81022 = G__81028;
G__81020__81023 = G__81029;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____81026 = cljs.core.next.call(null,G__81016__81019);

if(cljs.core.truth_(temp__3698__auto____81026))
{var G__81016__81027 = temp__3698__auto____81026;

{
var G__81030 = cljs.core.first.call(null,G__81016__81027);
var G__81031 = G__81016__81027;
obj__81018 = G__81030;
G__81016__81019 = G__81031;
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
pr_str.cljs$lang$applyTo = (function (arglist__81032){
var objs = cljs.core.seq( arglist__81032 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__81033){
var objs = cljs.core.seq( arglist__81033 );;
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
pr.cljs$lang$applyTo = (function (arglist__81034){
var objs = cljs.core.seq( arglist__81034 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__81035){
var objs = cljs.core.seq( arglist__81035 );;
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
print_str.cljs$lang$applyTo = (function (arglist__81036){
var objs = cljs.core.seq( arglist__81036 );;
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
println.cljs$lang$applyTo = (function (arglist__81037){
var objs = cljs.core.seq( arglist__81037 );;
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
println_str.cljs$lang$applyTo = (function (arglist__81038){
var objs = cljs.core.seq( arglist__81038 );;
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
prn.cljs$lang$applyTo = (function (arglist__81039){
var objs = cljs.core.seq( arglist__81039 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__81040 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__81040,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____81041 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____81041))
{var nspc__81042 = temp__3698__auto____81041;

return cljs.core.str.call(null,nspc__81042,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____81043 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____81043))
{var nspc__81044 = temp__3698__auto____81043;

return cljs.core.str.call(null,nspc__81044,"/");
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
var pr_pair__81045 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__81045,"{",", ","}",opts,coll);
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
var this__81046 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__81047 = this;
var G__81048__81049 = cljs.core.seq.call(null,this__81047.watches);

if(cljs.core.truth_(G__81048__81049))
{var G__81051__81053 = cljs.core.first.call(null,G__81048__81049);
var vec__81052__81054 = G__81051__81053;
var key__81055 = cljs.core.nth.call(null,vec__81052__81054,0,null);
var f__81056 = cljs.core.nth.call(null,vec__81052__81054,1,null);
var G__81048__81057 = G__81048__81049;

var G__81051__81058 = G__81051__81053;
var G__81048__81059 = G__81048__81057;

while(true){
var vec__81060__81061 = G__81051__81058;
var key__81062 = cljs.core.nth.call(null,vec__81060__81061,0,null);
var f__81063 = cljs.core.nth.call(null,vec__81060__81061,1,null);
var G__81048__81064 = G__81048__81059;

f__81063.call(null,key__81062,this$,oldval,newval);
var temp__3698__auto____81065 = cljs.core.next.call(null,G__81048__81064);

if(cljs.core.truth_(temp__3698__auto____81065))
{var G__81048__81066 = temp__3698__auto____81065;

{
var G__81073 = cljs.core.first.call(null,G__81048__81066);
var G__81074 = G__81048__81066;
G__81051__81058 = G__81073;
G__81048__81059 = G__81074;
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
var this__81067 = this;
return this$.watches = cljs.core.assoc.call(null,this__81067.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__81068 = this;
return this$.watches = cljs.core.dissoc.call(null,this__81068.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__81069 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__81069.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__81070 = this;
return this__81070.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__81071 = this;
return this__81071.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__81072 = this;
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
var atom__81081 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__81082 = (function() { 
var G__81084__delegate = function (x,p__81075){
var map__81076__81077 = p__81075;
var map__81076__81078 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__81076__81077))?cljs.core.apply.call(null,cljs.core.hash_map,map__81076__81077):map__81076__81077);
var validator__81079 = cljs.core.get.call(null,map__81076__81078,"\uFDD0'validator");
var meta__81080 = cljs.core.get.call(null,map__81076__81078,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__81080,validator__81079,null));
};
var G__81084 = function (x,var_args){
var p__81075 = null;
if (goog.isDef(var_args)) {
  p__81075 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__81084__delegate.call(this, x, p__81075);
};
G__81084.cljs$lang$maxFixedArity = 1;
G__81084.cljs$lang$applyTo = (function (arglist__81085){
var x = cljs.core.first(arglist__81085);
var p__81075 = cljs.core.rest(arglist__81085);
return G__81084__delegate.call(this, x, p__81075);
});
return G__81084;
})()
;
atom = function(x,var_args){
var p__81075 = var_args;
switch(arguments.length){
case  1 :
return atom__81081.call(this,x);
default:
return atom__81082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__81082.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____81086 = a.validator;

if(cljs.core.truth_(temp__3698__auto____81086))
{var validate__81087 = temp__3698__auto____81086;

if(cljs.core.truth_(validate__81087.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__81088 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__81088,new_value);
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
var swap_BANG___81089 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___81090 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___81091 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___81092 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___81093 = (function() { 
var G__81095__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__81095 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__81095__delegate.call(this, a, f, x, y, z, more);
};
G__81095.cljs$lang$maxFixedArity = 5;
G__81095.cljs$lang$applyTo = (function (arglist__81096){
var a = cljs.core.first(arglist__81096);
var f = cljs.core.first(cljs.core.next(arglist__81096));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__81096)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__81096))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__81096)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__81096)))));
return G__81095__delegate.call(this, a, f, x, y, z, more);
});
return G__81095;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___81089.call(this,a,f);
case  3 :
return swap_BANG___81090.call(this,a,f,x);
case  4 :
return swap_BANG___81091.call(this,a,f,x,y);
case  5 :
return swap_BANG___81092.call(this,a,f,x,y,z);
default:
return swap_BANG___81093.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___81093.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__81097){
var iref = cljs.core.first(arglist__81097);
var f = cljs.core.first(cljs.core.next(arglist__81097));
var args = cljs.core.rest(cljs.core.next(arglist__81097));
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
var gensym__81098 = (function (){
return gensym.call(null,"G__");
});
var gensym__81099 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__81098.call(this);
case  1 :
return gensym__81099.call(this,prefix_string);
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
var this__81101 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__81101.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__81102 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__81102.state,(function (p__81103){
var curr_state__81104 = p__81103;
var curr_state__81105 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__81104))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__81104):curr_state__81104);
var done__81106 = cljs.core.get.call(null,curr_state__81105,"\uFDD0'done");

if(cljs.core.truth_(done__81106))
{return curr_state__81105;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__81102.f.call(null)});
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
var map__81107__81108 = options;
var map__81107__81109 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__81107__81108))?cljs.core.apply.call(null,cljs.core.hash_map,map__81107__81108):map__81107__81108);
var keywordize_keys__81110 = cljs.core.get.call(null,map__81107__81109,"\uFDD0'keywordize-keys");
var keyfn__81111 = (cljs.core.truth_(keywordize_keys__81110)?cljs.core.keyword:cljs.core.str);
var f__81117 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____81116 = (function iter__81112(s__81113){
return (new cljs.core.LazySeq(null,false,(function (){
var s__81113__81114 = s__81113;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__81113__81114)))
{var k__81115 = cljs.core.first.call(null,s__81113__81114);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__81111.call(null,k__81115),thisfn.call(null,(x[k__81115]))]),iter__81112.call(null,cljs.core.rest.call(null,s__81113__81114)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____81116.call(null,cljs.core.js_keys.call(null,x));
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

return f__81117.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__81118){
var x = cljs.core.first(arglist__81118);
var options = cljs.core.rest(arglist__81118);
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
var mem__81119 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__81123__delegate = function (args){
var temp__3695__auto____81120 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__81119),args);

if(cljs.core.truth_(temp__3695__auto____81120))
{var v__81121 = temp__3695__auto____81120;

return v__81121;
} else
{var ret__81122 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__81119,cljs.core.assoc,args,ret__81122);
return ret__81122;
}
};
var G__81123 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__81123__delegate.call(this, args);
};
G__81123.cljs$lang$maxFixedArity = 0;
G__81123.cljs$lang$applyTo = (function (arglist__81124){
var args = cljs.core.seq( arglist__81124 );;
return G__81123__delegate.call(this, args);
});
return G__81123;
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
var trampoline__81126 = (function (f){
while(true){
var ret__81125 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__81125)))
{{
var G__81129 = ret__81125;
f = G__81129;
continue;
}
} else
{return ret__81125;
}
break;
}
});
var trampoline__81127 = (function() { 
var G__81130__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__81130 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__81130__delegate.call(this, f, args);
};
G__81130.cljs$lang$maxFixedArity = 1;
G__81130.cljs$lang$applyTo = (function (arglist__81131){
var f = cljs.core.first(arglist__81131);
var args = cljs.core.rest(arglist__81131);
return G__81130__delegate.call(this, f, args);
});
return G__81130;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__81126.call(this,f);
default:
return trampoline__81127.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__81127.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__81132 = (function (){
return rand.call(null,1);
});
var rand__81133 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__81132.call(this);
case  1 :
return rand__81133.call(this,n);
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
var k__81135 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__81135,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__81135,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___81144 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___81145 = (function (h,child,parent){
var or__3548__auto____81136 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____81136))
{return or__3548__auto____81136;
} else
{var or__3548__auto____81137 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____81137))
{return or__3548__auto____81137;
} else
{var and__3546__auto____81138 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____81138))
{var and__3546__auto____81139 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____81139))
{var and__3546__auto____81140 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____81140))
{var ret__81141 = true;
var i__81142 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____81143 = cljs.core.not.call(null,ret__81141);

if(cljs.core.truth_(or__3548__auto____81143))
{return or__3548__auto____81143;
} else
{return cljs.core._EQ_.call(null,i__81142,cljs.core.count.call(null,parent));
}
})()))
{return ret__81141;
} else
{{
var G__81147 = isa_QMARK_.call(null,h,child.call(null,i__81142),parent.call(null,i__81142));
var G__81148 = (i__81142 + 1);
ret__81141 = G__81147;
i__81142 = G__81148;
continue;
}
}
break;
}
} else
{return and__3546__auto____81140;
}
} else
{return and__3546__auto____81139;
}
} else
{return and__3546__auto____81138;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___81144.call(this,h,child);
case  3 :
return isa_QMARK___81145.call(this,h,child,parent);
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
var parents__81149 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__81150 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__81149.call(this,h);
case  2 :
return parents__81150.call(this,h,tag);
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
var ancestors__81152 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__81153 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__81152.call(this,h);
case  2 :
return ancestors__81153.call(this,h,tag);
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
var descendants__81155 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__81156 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__81155.call(this,h);
case  2 :
return descendants__81156.call(this,h,tag);
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
var derive__81166 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__81167 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__81161 = "\uFDD0'parents".call(null,h);
var td__81162 = "\uFDD0'descendants".call(null,h);
var ta__81163 = "\uFDD0'ancestors".call(null,h);
var tf__81164 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____81165 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__81161.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__81163.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__81163.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__81161,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__81164.call(null,"\uFDD0'ancestors".call(null,h),tag,td__81162,parent,ta__81163),"\uFDD0'descendants":tf__81164.call(null,"\uFDD0'descendants".call(null,h),parent,ta__81163,tag,td__81162)});
})());

if(cljs.core.truth_(or__3548__auto____81165))
{return or__3548__auto____81165;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__81166.call(this,h,tag);
case  3 :
return derive__81167.call(this,h,tag,parent);
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
var underive__81173 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__81174 = (function (h,tag,parent){
var parentMap__81169 = "\uFDD0'parents".call(null,h);
var childsParents__81170 = (cljs.core.truth_(parentMap__81169.call(null,tag))?cljs.core.disj.call(null,parentMap__81169.call(null,tag),parent):cljs.core.set([]));
var newParents__81171 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__81170))?cljs.core.assoc.call(null,parentMap__81169,tag,childsParents__81170):cljs.core.dissoc.call(null,parentMap__81169,tag));
var deriv_seq__81172 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__81158_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__81158_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__81158_SHARP_),cljs.core.second.call(null,p1__81158_SHARP_)));
}),cljs.core.seq.call(null,newParents__81171)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__81169.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__81159_SHARP_,p2__81160_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__81159_SHARP_,p2__81160_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__81172));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__81173.call(this,h,tag);
case  3 :
return underive__81174.call(this,h,tag,parent);
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
var xprefs__81176 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____81178 = (cljs.core.truth_((function (){var and__3546__auto____81177 = xprefs__81176;

if(cljs.core.truth_(and__3546__auto____81177))
{return xprefs__81176.call(null,y);
} else
{return and__3546__auto____81177;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____81178))
{return or__3548__auto____81178;
} else
{var or__3548__auto____81180 = (function (){var ps__81179 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__81179) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__81179),prefer_table)))
{} else
{}
{
var G__81183 = cljs.core.rest.call(null,ps__81179);
ps__81179 = G__81183;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____81180))
{return or__3548__auto____81180;
} else
{var or__3548__auto____81182 = (function (){var ps__81181 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__81181) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__81181),y,prefer_table)))
{} else
{}
{
var G__81184 = cljs.core.rest.call(null,ps__81181);
ps__81181 = G__81184;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____81182))
{return or__3548__auto____81182;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____81185 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____81185))
{return or__3548__auto____81185;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__81194 = cljs.core.reduce.call(null,(function (be,p__81186){
var vec__81187__81188 = p__81186;
var k__81189 = cljs.core.nth.call(null,vec__81187__81188,0,null);
var ___81190 = cljs.core.nth.call(null,vec__81187__81188,1,null);
var e__81191 = vec__81187__81188;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__81189)))
{var be2__81193 = (cljs.core.truth_((function (){var or__3548__auto____81192 = (be === null);

if(cljs.core.truth_(or__3548__auto____81192))
{return or__3548__auto____81192;
} else
{return cljs.core.dominates.call(null,k__81189,cljs.core.first.call(null,be),prefer_table);
}
})())?e__81191:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__81193),k__81189,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__81189," and ",cljs.core.first.call(null,be2__81193),", and neither is preferred")));
}
return be2__81193;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__81194))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__81194));
return cljs.core.second.call(null,best_entry__81194);
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
if(cljs.core.truth_((function (){var and__3546__auto____81195 = mf;

if(cljs.core.truth_(and__3546__auto____81195))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____81195;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____81196 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____81196))
{return or__3548__auto____81196;
} else
{var or__3548__auto____81197 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____81197))
{return or__3548__auto____81197;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____81198 = mf;

if(cljs.core.truth_(and__3546__auto____81198))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____81198;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____81199 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____81199))
{return or__3548__auto____81199;
} else
{var or__3548__auto____81200 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____81200))
{return or__3548__auto____81200;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____81201 = mf;

if(cljs.core.truth_(and__3546__auto____81201))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____81201;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____81202 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____81202))
{return or__3548__auto____81202;
} else
{var or__3548__auto____81203 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____81203))
{return or__3548__auto____81203;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____81204 = mf;

if(cljs.core.truth_(and__3546__auto____81204))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____81204;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____81205 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____81205))
{return or__3548__auto____81205;
} else
{var or__3548__auto____81206 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____81206))
{return or__3548__auto____81206;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____81207 = mf;

if(cljs.core.truth_(and__3546__auto____81207))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____81207;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____81208 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____81208))
{return or__3548__auto____81208;
} else
{var or__3548__auto____81209 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____81209))
{return or__3548__auto____81209;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____81210 = mf;

if(cljs.core.truth_(and__3546__auto____81210))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____81210;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____81211 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____81211))
{return or__3548__auto____81211;
} else
{var or__3548__auto____81212 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____81212))
{return or__3548__auto____81212;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____81213 = mf;

if(cljs.core.truth_(and__3546__auto____81213))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____81213;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____81214 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____81214))
{return or__3548__auto____81214;
} else
{var or__3548__auto____81215 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____81215))
{return or__3548__auto____81215;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____81216 = mf;

if(cljs.core.truth_(and__3546__auto____81216))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____81216;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____81217 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____81217))
{return or__3548__auto____81217;
} else
{var or__3548__auto____81218 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____81218))
{return or__3548__auto____81218;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__81219 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__81220 = cljs.core._get_method.call(null,mf,dispatch_val__81219);

if(cljs.core.truth_(target_fn__81220))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__81219)));
}
return cljs.core.apply.call(null,target_fn__81220,args);
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
var this__81221 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__81222 = this;
cljs.core.swap_BANG_.call(null,this__81222.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__81222.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__81222.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__81222.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__81223 = this;
cljs.core.swap_BANG_.call(null,this__81223.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__81223.method_cache,this__81223.method_table,this__81223.cached_hierarchy,this__81223.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__81224 = this;
cljs.core.swap_BANG_.call(null,this__81224.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__81224.method_cache,this__81224.method_table,this__81224.cached_hierarchy,this__81224.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__81225 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__81225.cached_hierarchy),cljs.core.deref.call(null,this__81225.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__81225.method_cache,this__81225.method_table,this__81225.cached_hierarchy,this__81225.hierarchy);
}
var temp__3695__auto____81226 = cljs.core.deref.call(null,this__81225.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____81226))
{var target_fn__81227 = temp__3695__auto____81226;

return target_fn__81227;
} else
{var temp__3695__auto____81228 = cljs.core.find_and_cache_best_method.call(null,this__81225.name,dispatch_val,this__81225.hierarchy,this__81225.method_table,this__81225.prefer_table,this__81225.method_cache,this__81225.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____81228))
{var target_fn__81229 = temp__3695__auto____81228;

return target_fn__81229;
} else
{return cljs.core.deref.call(null,this__81225.method_table).call(null,this__81225.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__81230 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__81230.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__81230.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__81230.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__81230.method_cache,this__81230.method_table,this__81230.cached_hierarchy,this__81230.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__81231 = this;
return cljs.core.deref.call(null,this__81231.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__81232 = this;
return cljs.core.deref.call(null,this__81232.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__81233 = this;
return cljs.core.do_dispatch.call(null,mf,this__81233.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__81234__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__81234 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__81234__delegate.call(this, _, args);
};
G__81234.cljs$lang$maxFixedArity = 1;
G__81234.cljs$lang$applyTo = (function (arglist__81235){
var _ = cljs.core.first(arglist__81235);
var args = cljs.core.rest(arglist__81235);
return G__81234__delegate.call(this, _, args);
});
return G__81234;
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
