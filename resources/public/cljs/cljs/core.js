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
var or__3548__auto____115529 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____115529))
{return or__3548__auto____115529;
} else
{var or__3548__auto____115530 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____115530))
{return or__3548__auto____115530;
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
var _invoke__115594 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____115531 = this$;

if(cljs.core.truth_(and__3546__auto____115531))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115531;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____115532 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115532))
{return or__3548__auto____115532;
} else
{var or__3548__auto____115533 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115533))
{return or__3548__auto____115533;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__115595 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____115534 = this$;

if(cljs.core.truth_(and__3546__auto____115534))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115534;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____115535 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115535))
{return or__3548__auto____115535;
} else
{var or__3548__auto____115536 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115536))
{return or__3548__auto____115536;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__115596 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____115537 = this$;

if(cljs.core.truth_(and__3546__auto____115537))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115537;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____115538 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115538))
{return or__3548__auto____115538;
} else
{var or__3548__auto____115539 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115539))
{return or__3548__auto____115539;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__115597 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____115540 = this$;

if(cljs.core.truth_(and__3546__auto____115540))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115540;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____115541 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115541))
{return or__3548__auto____115541;
} else
{var or__3548__auto____115542 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115542))
{return or__3548__auto____115542;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__115598 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____115543 = this$;

if(cljs.core.truth_(and__3546__auto____115543))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115543;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____115544 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115544))
{return or__3548__auto____115544;
} else
{var or__3548__auto____115545 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115545))
{return or__3548__auto____115545;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__115599 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____115546 = this$;

if(cljs.core.truth_(and__3546__auto____115546))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115546;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____115547 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115547))
{return or__3548__auto____115547;
} else
{var or__3548__auto____115548 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115548))
{return or__3548__auto____115548;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__115600 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____115549 = this$;

if(cljs.core.truth_(and__3546__auto____115549))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115549;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____115550 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115550))
{return or__3548__auto____115550;
} else
{var or__3548__auto____115551 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115551))
{return or__3548__auto____115551;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__115601 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____115552 = this$;

if(cljs.core.truth_(and__3546__auto____115552))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115552;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____115553 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115553))
{return or__3548__auto____115553;
} else
{var or__3548__auto____115554 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115554))
{return or__3548__auto____115554;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__115602 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____115555 = this$;

if(cljs.core.truth_(and__3546__auto____115555))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115555;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____115556 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115556))
{return or__3548__auto____115556;
} else
{var or__3548__auto____115557 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115557))
{return or__3548__auto____115557;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__115603 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____115558 = this$;

if(cljs.core.truth_(and__3546__auto____115558))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115558;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____115559 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115559))
{return or__3548__auto____115559;
} else
{var or__3548__auto____115560 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115560))
{return or__3548__auto____115560;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__115604 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____115561 = this$;

if(cljs.core.truth_(and__3546__auto____115561))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115561;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____115562 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115562))
{return or__3548__auto____115562;
} else
{var or__3548__auto____115563 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115563))
{return or__3548__auto____115563;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__115605 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____115564 = this$;

if(cljs.core.truth_(and__3546__auto____115564))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115564;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____115565 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115565))
{return or__3548__auto____115565;
} else
{var or__3548__auto____115566 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115566))
{return or__3548__auto____115566;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__115606 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____115567 = this$;

if(cljs.core.truth_(and__3546__auto____115567))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115567;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____115568 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115568))
{return or__3548__auto____115568;
} else
{var or__3548__auto____115569 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115569))
{return or__3548__auto____115569;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__115607 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____115570 = this$;

if(cljs.core.truth_(and__3546__auto____115570))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115570;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____115571 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115571))
{return or__3548__auto____115571;
} else
{var or__3548__auto____115572 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115572))
{return or__3548__auto____115572;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__115608 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____115573 = this$;

if(cljs.core.truth_(and__3546__auto____115573))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115573;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____115574 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115574))
{return or__3548__auto____115574;
} else
{var or__3548__auto____115575 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115575))
{return or__3548__auto____115575;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__115609 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____115576 = this$;

if(cljs.core.truth_(and__3546__auto____115576))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115576;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____115577 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115577))
{return or__3548__auto____115577;
} else
{var or__3548__auto____115578 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115578))
{return or__3548__auto____115578;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__115610 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____115579 = this$;

if(cljs.core.truth_(and__3546__auto____115579))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115579;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____115580 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115580))
{return or__3548__auto____115580;
} else
{var or__3548__auto____115581 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115581))
{return or__3548__auto____115581;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__115611 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____115582 = this$;

if(cljs.core.truth_(and__3546__auto____115582))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115582;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____115583 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115583))
{return or__3548__auto____115583;
} else
{var or__3548__auto____115584 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115584))
{return or__3548__auto____115584;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__115612 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____115585 = this$;

if(cljs.core.truth_(and__3546__auto____115585))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115585;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____115586 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115586))
{return or__3548__auto____115586;
} else
{var or__3548__auto____115587 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115587))
{return or__3548__auto____115587;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__115613 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____115588 = this$;

if(cljs.core.truth_(and__3546__auto____115588))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115588;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____115589 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115589))
{return or__3548__auto____115589;
} else
{var or__3548__auto____115590 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115590))
{return or__3548__auto____115590;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__115614 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____115591 = this$;

if(cljs.core.truth_(and__3546__auto____115591))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____115591;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____115592 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115592))
{return or__3548__auto____115592;
} else
{var or__3548__auto____115593 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____115593))
{return or__3548__auto____115593;
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
return _invoke__115594.call(this,this$);
case  2 :
return _invoke__115595.call(this,this$,a);
case  3 :
return _invoke__115596.call(this,this$,a,b);
case  4 :
return _invoke__115597.call(this,this$,a,b,c);
case  5 :
return _invoke__115598.call(this,this$,a,b,c,d);
case  6 :
return _invoke__115599.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__115600.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__115601.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__115602.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__115603.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__115604.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__115605.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__115606.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__115607.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__115608.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__115609.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__115610.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__115611.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__115612.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__115613.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__115614.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____115616 = coll;

if(cljs.core.truth_(and__3546__auto____115616))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____115616;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____115617 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115617))
{return or__3548__auto____115617;
} else
{var or__3548__auto____115618 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____115618))
{return or__3548__auto____115618;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____115619 = coll;

if(cljs.core.truth_(and__3546__auto____115619))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____115619;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____115620 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115620))
{return or__3548__auto____115620;
} else
{var or__3548__auto____115621 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____115621))
{return or__3548__auto____115621;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____115622 = coll;

if(cljs.core.truth_(and__3546__auto____115622))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____115622;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____115623 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115623))
{return or__3548__auto____115623;
} else
{var or__3548__auto____115624 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____115624))
{return or__3548__auto____115624;
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
var _nth__115631 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____115625 = coll;

if(cljs.core.truth_(and__3546__auto____115625))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____115625;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____115626 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115626))
{return or__3548__auto____115626;
} else
{var or__3548__auto____115627 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____115627))
{return or__3548__auto____115627;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__115632 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____115628 = coll;

if(cljs.core.truth_(and__3546__auto____115628))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____115628;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____115629 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115629))
{return or__3548__auto____115629;
} else
{var or__3548__auto____115630 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____115630))
{return or__3548__auto____115630;
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
return _nth__115631.call(this,coll,n);
case  3 :
return _nth__115632.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____115634 = coll;

if(cljs.core.truth_(and__3546__auto____115634))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____115634;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____115635 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115635))
{return or__3548__auto____115635;
} else
{var or__3548__auto____115636 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____115636))
{return or__3548__auto____115636;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____115637 = coll;

if(cljs.core.truth_(and__3546__auto____115637))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____115637;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____115638 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115638))
{return or__3548__auto____115638;
} else
{var or__3548__auto____115639 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____115639))
{return or__3548__auto____115639;
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
var _lookup__115646 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____115640 = o;

if(cljs.core.truth_(and__3546__auto____115640))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____115640;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____115641 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____115641))
{return or__3548__auto____115641;
} else
{var or__3548__auto____115642 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____115642))
{return or__3548__auto____115642;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__115647 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____115643 = o;

if(cljs.core.truth_(and__3546__auto____115643))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____115643;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____115644 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____115644))
{return or__3548__auto____115644;
} else
{var or__3548__auto____115645 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____115645))
{return or__3548__auto____115645;
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
return _lookup__115646.call(this,o,k);
case  3 :
return _lookup__115647.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____115649 = coll;

if(cljs.core.truth_(and__3546__auto____115649))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____115649;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____115650 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115650))
{return or__3548__auto____115650;
} else
{var or__3548__auto____115651 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____115651))
{return or__3548__auto____115651;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____115652 = coll;

if(cljs.core.truth_(and__3546__auto____115652))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____115652;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____115653 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115653))
{return or__3548__auto____115653;
} else
{var or__3548__auto____115654 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____115654))
{return or__3548__auto____115654;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____115655 = coll;

if(cljs.core.truth_(and__3546__auto____115655))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____115655;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____115656 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115656))
{return or__3548__auto____115656;
} else
{var or__3548__auto____115657 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____115657))
{return or__3548__auto____115657;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____115658 = coll;

if(cljs.core.truth_(and__3546__auto____115658))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____115658;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____115659 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115659))
{return or__3548__auto____115659;
} else
{var or__3548__auto____115660 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____115660))
{return or__3548__auto____115660;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____115661 = coll;

if(cljs.core.truth_(and__3546__auto____115661))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____115661;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____115662 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115662))
{return or__3548__auto____115662;
} else
{var or__3548__auto____115663 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____115663))
{return or__3548__auto____115663;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____115664 = coll;

if(cljs.core.truth_(and__3546__auto____115664))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____115664;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____115665 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115665))
{return or__3548__auto____115665;
} else
{var or__3548__auto____115666 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____115666))
{return or__3548__auto____115666;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____115667 = coll;

if(cljs.core.truth_(and__3546__auto____115667))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____115667;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____115668 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115668))
{return or__3548__auto____115668;
} else
{var or__3548__auto____115669 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____115669))
{return or__3548__auto____115669;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____115670 = o;

if(cljs.core.truth_(and__3546__auto____115670))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____115670;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____115671 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____115671))
{return or__3548__auto____115671;
} else
{var or__3548__auto____115672 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____115672))
{return or__3548__auto____115672;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____115673 = o;

if(cljs.core.truth_(and__3546__auto____115673))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____115673;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____115674 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____115674))
{return or__3548__auto____115674;
} else
{var or__3548__auto____115675 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____115675))
{return or__3548__auto____115675;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____115676 = o;

if(cljs.core.truth_(and__3546__auto____115676))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____115676;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____115677 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____115677))
{return or__3548__auto____115677;
} else
{var or__3548__auto____115678 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____115678))
{return or__3548__auto____115678;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____115679 = o;

if(cljs.core.truth_(and__3546__auto____115679))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____115679;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____115680 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____115680))
{return or__3548__auto____115680;
} else
{var or__3548__auto____115681 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____115681))
{return or__3548__auto____115681;
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
var _reduce__115688 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____115682 = coll;

if(cljs.core.truth_(and__3546__auto____115682))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____115682;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____115683 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115683))
{return or__3548__auto____115683;
} else
{var or__3548__auto____115684 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____115684))
{return or__3548__auto____115684;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__115689 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____115685 = coll;

if(cljs.core.truth_(and__3546__auto____115685))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____115685;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____115686 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____115686))
{return or__3548__auto____115686;
} else
{var or__3548__auto____115687 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____115687))
{return or__3548__auto____115687;
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
return _reduce__115688.call(this,coll,f);
case  3 :
return _reduce__115689.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____115691 = o;

if(cljs.core.truth_(and__3546__auto____115691))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____115691;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____115692 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____115692))
{return or__3548__auto____115692;
} else
{var or__3548__auto____115693 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____115693))
{return or__3548__auto____115693;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____115694 = o;

if(cljs.core.truth_(and__3546__auto____115694))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____115694;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____115695 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____115695))
{return or__3548__auto____115695;
} else
{var or__3548__auto____115696 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____115696))
{return or__3548__auto____115696;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____115697 = o;

if(cljs.core.truth_(and__3546__auto____115697))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____115697;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____115698 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____115698))
{return or__3548__auto____115698;
} else
{var or__3548__auto____115699 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____115699))
{return or__3548__auto____115699;
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
if(cljs.core.truth_((function (){var and__3546__auto____115700 = o;

if(cljs.core.truth_(and__3546__auto____115700))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____115700;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____115701 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____115701))
{return or__3548__auto____115701;
} else
{var or__3548__auto____115702 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____115702))
{return or__3548__auto____115702;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____115703 = d;

if(cljs.core.truth_(and__3546__auto____115703))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____115703;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____115704 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____115704))
{return or__3548__auto____115704;
} else
{var or__3548__auto____115705 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____115705))
{return or__3548__auto____115705;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____115706 = this$;

if(cljs.core.truth_(and__3546__auto____115706))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____115706;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____115707 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115707))
{return or__3548__auto____115707;
} else
{var or__3548__auto____115708 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____115708))
{return or__3548__auto____115708;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____115709 = this$;

if(cljs.core.truth_(and__3546__auto____115709))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____115709;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____115710 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115710))
{return or__3548__auto____115710;
} else
{var or__3548__auto____115711 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____115711))
{return or__3548__auto____115711;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____115712 = this$;

if(cljs.core.truth_(and__3546__auto____115712))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____115712;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____115713 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115713))
{return or__3548__auto____115713;
} else
{var or__3548__auto____115714 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____115714))
{return or__3548__auto____115714;
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
var G__115715 = null;
var G__115715__115716 = (function (o,k){
return null;
});
var G__115715__115717 = (function (o,k,not_found){
return not_found;
});
G__115715 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__115715__115716.call(this,o,k);
case  3 :
return G__115715__115717.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115715;
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
var G__115719 = null;
var G__115719__115720 = (function (_,f){
return f.call(null);
});
var G__115719__115721 = (function (_,f,start){
return start;
});
G__115719 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__115719__115720.call(this,_,f);
case  3 :
return G__115719__115721.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115719;
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
var G__115723 = null;
var G__115723__115724 = (function (_,n){
return null;
});
var G__115723__115725 = (function (_,n,not_found){
return not_found;
});
G__115723 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__115723__115724.call(this,_,n);
case  3 :
return G__115723__115725.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115723;
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
var ci_reduce__115733 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__115727 = cljs.core._nth.call(null,cicoll,0);
var n__115728 = 1;

while(true){
if(cljs.core.truth_((n__115728 < cljs.core._count.call(null,cicoll))))
{{
var G__115737 = f.call(null,val__115727,cljs.core._nth.call(null,cicoll,n__115728));
var G__115738 = (n__115728 + 1);
val__115727 = G__115737;
n__115728 = G__115738;
continue;
}
} else
{return val__115727;
}
break;
}
}
});
var ci_reduce__115734 = (function (cicoll,f,val){
var val__115729 = val;
var n__115730 = 0;

while(true){
if(cljs.core.truth_((n__115730 < cljs.core._count.call(null,cicoll))))
{{
var G__115739 = f.call(null,val__115729,cljs.core._nth.call(null,cicoll,n__115730));
var G__115740 = (n__115730 + 1);
val__115729 = G__115739;
n__115730 = G__115740;
continue;
}
} else
{return val__115729;
}
break;
}
});
var ci_reduce__115735 = (function (cicoll,f,val,idx){
var val__115731 = val;
var n__115732 = idx;

while(true){
if(cljs.core.truth_((n__115732 < cljs.core._count.call(null,cicoll))))
{{
var G__115741 = f.call(null,val__115731,cljs.core._nth.call(null,cicoll,n__115732));
var G__115742 = (n__115732 + 1);
val__115731 = G__115741;
n__115732 = G__115742;
continue;
}
} else
{return val__115731;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__115733.call(this,cicoll,f);
case  3 :
return ci_reduce__115734.call(this,cicoll,f,val);
case  4 :
return ci_reduce__115735.call(this,cicoll,f,val,idx);
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
var this__115743 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__115756 = null;
var G__115756__115757 = (function (_,f){
var this__115744 = this;
return cljs.core.ci_reduce.call(null,this__115744.a,f,(this__115744.a[this__115744.i]),(this__115744.i + 1));
});
var G__115756__115758 = (function (_,f,start){
var this__115745 = this;
return cljs.core.ci_reduce.call(null,this__115745.a,f,start,this__115745.i);
});
G__115756 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__115756__115757.call(this,_,f);
case  3 :
return G__115756__115758.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115756;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__115746 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__115747 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__115760 = null;
var G__115760__115761 = (function (coll,n){
var this__115748 = this;
var i__115749 = (n + this__115748.i);

if(cljs.core.truth_((i__115749 < this__115748.a.length)))
{return (this__115748.a[i__115749]);
} else
{return null;
}
});
var G__115760__115762 = (function (coll,n,not_found){
var this__115750 = this;
var i__115751 = (n + this__115750.i);

if(cljs.core.truth_((i__115751 < this__115750.a.length)))
{return (this__115750.a[i__115751]);
} else
{return not_found;
}
});
G__115760 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__115760__115761.call(this,coll,n);
case  3 :
return G__115760__115762.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115760;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__115752 = this;
return (this__115752.a.length - this__115752.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__115753 = this;
return (this__115753.a[this__115753.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__115754 = this;
if(cljs.core.truth_(((this__115754.i + 1) < this__115754.a.length)))
{return (new cljs.core.IndexedSeq(this__115754.a,(this__115754.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__115755 = this;
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
var G__115764 = null;
var G__115764__115765 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__115764__115766 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__115764 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__115764__115765.call(this,array,f);
case  3 :
return G__115764__115766.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115764;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__115768 = null;
var G__115768__115769 = (function (array,k){
return (array[k]);
});
var G__115768__115770 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__115768 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__115768__115769.call(this,array,k);
case  3 :
return G__115768__115770.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115768;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__115772 = null;
var G__115772__115773 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__115772__115774 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__115772 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__115772__115773.call(this,array,n);
case  3 :
return G__115772__115774.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115772;
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
var temp__3698__auto____115776 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____115776))
{var s__115777 = temp__3698__auto____115776;

return cljs.core._first.call(null,s__115777);
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
var G__115778 = cljs.core.next.call(null,s);
s = G__115778;
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
var s__115779 = cljs.core.seq.call(null,x);
var n__115780 = 0;

while(true){
if(cljs.core.truth_(s__115779))
{{
var G__115781 = cljs.core.next.call(null,s__115779);
var G__115782 = (n__115780 + 1);
s__115779 = G__115781;
n__115780 = G__115782;
continue;
}
} else
{return n__115780;
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
var conj__115783 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__115784 = (function() { 
var G__115786__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__115787 = conj.call(null,coll,x);
var G__115788 = cljs.core.first.call(null,xs);
var G__115789 = cljs.core.next.call(null,xs);
coll = G__115787;
x = G__115788;
xs = G__115789;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__115786 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115786__delegate.call(this, coll, x, xs);
};
G__115786.cljs$lang$maxFixedArity = 2;
G__115786.cljs$lang$applyTo = (function (arglist__115790){
var coll = cljs.core.first(arglist__115790);
var x = cljs.core.first(cljs.core.next(arglist__115790));
var xs = cljs.core.rest(cljs.core.next(arglist__115790));
return G__115786__delegate.call(this, coll, x, xs);
});
return G__115786;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__115783.call(this,coll,x);
default:
return conj__115784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__115784.cljs$lang$applyTo;
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
var nth__115791 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__115792 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__115791.call(this,coll,n);
case  3 :
return nth__115792.call(this,coll,n,not_found);
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
var get__115794 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__115795 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__115794.call(this,o,k);
case  3 :
return get__115795.call(this,o,k,not_found);
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
var assoc__115798 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__115799 = (function() { 
var G__115801__delegate = function (coll,k,v,kvs){
while(true){
var ret__115797 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__115802 = ret__115797;
var G__115803 = cljs.core.first.call(null,kvs);
var G__115804 = cljs.core.second.call(null,kvs);
var G__115805 = cljs.core.nnext.call(null,kvs);
coll = G__115802;
k = G__115803;
v = G__115804;
kvs = G__115805;
continue;
}
} else
{return ret__115797;
}
break;
}
};
var G__115801 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__115801__delegate.call(this, coll, k, v, kvs);
};
G__115801.cljs$lang$maxFixedArity = 3;
G__115801.cljs$lang$applyTo = (function (arglist__115806){
var coll = cljs.core.first(arglist__115806);
var k = cljs.core.first(cljs.core.next(arglist__115806));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__115806)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__115806)));
return G__115801__delegate.call(this, coll, k, v, kvs);
});
return G__115801;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__115798.call(this,coll,k,v);
default:
return assoc__115799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__115799.cljs$lang$applyTo;
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
var dissoc__115808 = (function (coll){
return coll;
});
var dissoc__115809 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__115810 = (function() { 
var G__115812__delegate = function (coll,k,ks){
while(true){
var ret__115807 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__115813 = ret__115807;
var G__115814 = cljs.core.first.call(null,ks);
var G__115815 = cljs.core.next.call(null,ks);
coll = G__115813;
k = G__115814;
ks = G__115815;
continue;
}
} else
{return ret__115807;
}
break;
}
};
var G__115812 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115812__delegate.call(this, coll, k, ks);
};
G__115812.cljs$lang$maxFixedArity = 2;
G__115812.cljs$lang$applyTo = (function (arglist__115816){
var coll = cljs.core.first(arglist__115816);
var k = cljs.core.first(cljs.core.next(arglist__115816));
var ks = cljs.core.rest(cljs.core.next(arglist__115816));
return G__115812__delegate.call(this, coll, k, ks);
});
return G__115812;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__115808.call(this,coll);
case  2 :
return dissoc__115809.call(this,coll,k);
default:
return dissoc__115810.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__115810.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____115817 = o;

if(cljs.core.truth_((function (){var and__3546__auto____115818 = x__451__auto____115817;

if(cljs.core.truth_(and__3546__auto____115818))
{var and__3546__auto____115819 = x__451__auto____115817.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____115819))
{return cljs.core.not.call(null,x__451__auto____115817.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____115819;
}
} else
{return and__3546__auto____115818;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____115817);
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
var disj__115821 = (function (coll){
return coll;
});
var disj__115822 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__115823 = (function() { 
var G__115825__delegate = function (coll,k,ks){
while(true){
var ret__115820 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__115826 = ret__115820;
var G__115827 = cljs.core.first.call(null,ks);
var G__115828 = cljs.core.next.call(null,ks);
coll = G__115826;
k = G__115827;
ks = G__115828;
continue;
}
} else
{return ret__115820;
}
break;
}
};
var G__115825 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115825__delegate.call(this, coll, k, ks);
};
G__115825.cljs$lang$maxFixedArity = 2;
G__115825.cljs$lang$applyTo = (function (arglist__115829){
var coll = cljs.core.first(arglist__115829);
var k = cljs.core.first(cljs.core.next(arglist__115829));
var ks = cljs.core.rest(cljs.core.next(arglist__115829));
return G__115825__delegate.call(this, coll, k, ks);
});
return G__115825;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__115821.call(this,coll);
case  2 :
return disj__115822.call(this,coll,k);
default:
return disj__115823.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__115823.cljs$lang$applyTo;
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
{var x__451__auto____115830 = x;

if(cljs.core.truth_((function (){var and__3546__auto____115831 = x__451__auto____115830;

if(cljs.core.truth_(and__3546__auto____115831))
{var and__3546__auto____115832 = x__451__auto____115830.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____115832))
{return cljs.core.not.call(null,x__451__auto____115830.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____115832;
}
} else
{return and__3546__auto____115831;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____115830);
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
{var x__451__auto____115833 = x;

if(cljs.core.truth_((function (){var and__3546__auto____115834 = x__451__auto____115833;

if(cljs.core.truth_(and__3546__auto____115834))
{var and__3546__auto____115835 = x__451__auto____115833.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____115835))
{return cljs.core.not.call(null,x__451__auto____115833.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____115835;
}
} else
{return and__3546__auto____115834;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____115833);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____115836 = x;

if(cljs.core.truth_((function (){var and__3546__auto____115837 = x__451__auto____115836;

if(cljs.core.truth_(and__3546__auto____115837))
{var and__3546__auto____115838 = x__451__auto____115836.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____115838))
{return cljs.core.not.call(null,x__451__auto____115836.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____115838;
}
} else
{return and__3546__auto____115837;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____115836);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____115839 = x;

if(cljs.core.truth_((function (){var and__3546__auto____115840 = x__451__auto____115839;

if(cljs.core.truth_(and__3546__auto____115840))
{var and__3546__auto____115841 = x__451__auto____115839.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____115841))
{return cljs.core.not.call(null,x__451__auto____115839.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____115841;
}
} else
{return and__3546__auto____115840;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____115839);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____115842 = x;

if(cljs.core.truth_((function (){var and__3546__auto____115843 = x__451__auto____115842;

if(cljs.core.truth_(and__3546__auto____115843))
{var and__3546__auto____115844 = x__451__auto____115842.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____115844))
{return cljs.core.not.call(null,x__451__auto____115842.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____115844;
}
} else
{return and__3546__auto____115843;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____115842);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____115845 = x;

if(cljs.core.truth_((function (){var and__3546__auto____115846 = x__451__auto____115845;

if(cljs.core.truth_(and__3546__auto____115846))
{var and__3546__auto____115847 = x__451__auto____115845.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____115847))
{return cljs.core.not.call(null,x__451__auto____115845.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____115847;
}
} else
{return and__3546__auto____115846;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____115845);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____115848 = x;

if(cljs.core.truth_((function (){var and__3546__auto____115849 = x__451__auto____115848;

if(cljs.core.truth_(and__3546__auto____115849))
{var and__3546__auto____115850 = x__451__auto____115848.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____115850))
{return cljs.core.not.call(null,x__451__auto____115848.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____115850;
}
} else
{return and__3546__auto____115849;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____115848);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__115851 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__115851.push(key);
}));
return keys__115851;
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
{var x__451__auto____115852 = s;

if(cljs.core.truth_((function (){var and__3546__auto____115853 = x__451__auto____115852;

if(cljs.core.truth_(and__3546__auto____115853))
{var and__3546__auto____115854 = x__451__auto____115852.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____115854))
{return cljs.core.not.call(null,x__451__auto____115852.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____115854;
}
} else
{return and__3546__auto____115853;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____115852);
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
var and__3546__auto____115855 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____115855))
{return cljs.core.not.call(null,(function (){var or__3548__auto____115856 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____115856))
{return or__3548__auto____115856;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____115855;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____115857 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____115857))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____115857;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____115858 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____115858))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____115858;
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
var and__3546__auto____115859 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____115859))
{return (n == n.toFixed());
} else
{return and__3546__auto____115859;
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
if(cljs.core.truth_((function (){var and__3546__auto____115860 = coll;

if(cljs.core.truth_(and__3546__auto____115860))
{var and__3546__auto____115861 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____115861))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____115861;
}
} else
{return and__3546__auto____115860;
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
var distinct_QMARK___115866 = (function (x){
return true;
});
var distinct_QMARK___115867 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___115868 = (function() { 
var G__115870__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__115862 = cljs.core.set([y,x]);
var xs__115863 = more;

while(true){
var x__115864 = cljs.core.first.call(null,xs__115863);
var etc__115865 = cljs.core.next.call(null,xs__115863);

if(cljs.core.truth_(xs__115863))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__115862,x__115864)))
{return false;
} else
{{
var G__115871 = cljs.core.conj.call(null,s__115862,x__115864);
var G__115872 = etc__115865;
s__115862 = G__115871;
xs__115863 = G__115872;
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
var G__115870 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115870__delegate.call(this, x, y, more);
};
G__115870.cljs$lang$maxFixedArity = 2;
G__115870.cljs$lang$applyTo = (function (arglist__115873){
var x = cljs.core.first(arglist__115873);
var y = cljs.core.first(cljs.core.next(arglist__115873));
var more = cljs.core.rest(cljs.core.next(arglist__115873));
return G__115870__delegate.call(this, x, y, more);
});
return G__115870;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___115866.call(this,x);
case  2 :
return distinct_QMARK___115867.call(this,x,y);
default:
return distinct_QMARK___115868.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___115868.cljs$lang$applyTo;
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
var r__115874 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__115874)))
{return r__115874;
} else
{if(cljs.core.truth_(r__115874))
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
var sort__115876 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__115877 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__115875 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__115875,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__115875);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__115876.call(this,comp);
case  2 :
return sort__115877.call(this,comp,coll);
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
var sort_by__115879 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__115880 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__115879.call(this,keyfn,comp);
case  3 :
return sort_by__115880.call(this,keyfn,comp,coll);
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
var reduce__115882 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__115883 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__115882.call(this,f,val);
case  3 :
return reduce__115883.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__115889 = (function (f,coll){
var temp__3695__auto____115885 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____115885))
{var s__115886 = temp__3695__auto____115885;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__115886),cljs.core.next.call(null,s__115886));
} else
{return f.call(null);
}
});
var seq_reduce__115890 = (function (f,val,coll){
var val__115887 = val;
var coll__115888 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__115888))
{{
var G__115892 = f.call(null,val__115887,cljs.core.first.call(null,coll__115888));
var G__115893 = cljs.core.next.call(null,coll__115888);
val__115887 = G__115892;
coll__115888 = G__115893;
continue;
}
} else
{return val__115887;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__115889.call(this,f,val);
case  3 :
return seq_reduce__115890.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__115894 = null;
var G__115894__115895 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__115894__115896 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__115894 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__115894__115895.call(this,coll,f);
case  3 :
return G__115894__115896.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115894;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___115898 = (function (){
return 0;
});
var _PLUS___115899 = (function (x){
return x;
});
var _PLUS___115900 = (function (x,y){
return (x + y);
});
var _PLUS___115901 = (function() { 
var G__115903__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__115903 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115903__delegate.call(this, x, y, more);
};
G__115903.cljs$lang$maxFixedArity = 2;
G__115903.cljs$lang$applyTo = (function (arglist__115904){
var x = cljs.core.first(arglist__115904);
var y = cljs.core.first(cljs.core.next(arglist__115904));
var more = cljs.core.rest(cljs.core.next(arglist__115904));
return G__115903__delegate.call(this, x, y, more);
});
return G__115903;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___115898.call(this);
case  1 :
return _PLUS___115899.call(this,x);
case  2 :
return _PLUS___115900.call(this,x,y);
default:
return _PLUS___115901.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___115901.cljs$lang$applyTo;
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
var ___115905 = (function (x){
return (- x);
});
var ___115906 = (function (x,y){
return (x - y);
});
var ___115907 = (function() { 
var G__115909__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__115909 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115909__delegate.call(this, x, y, more);
};
G__115909.cljs$lang$maxFixedArity = 2;
G__115909.cljs$lang$applyTo = (function (arglist__115910){
var x = cljs.core.first(arglist__115910);
var y = cljs.core.first(cljs.core.next(arglist__115910));
var more = cljs.core.rest(cljs.core.next(arglist__115910));
return G__115909__delegate.call(this, x, y, more);
});
return G__115909;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___115905.call(this,x);
case  2 :
return ___115906.call(this,x,y);
default:
return ___115907.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___115907.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___115911 = (function (){
return 1;
});
var _STAR___115912 = (function (x){
return x;
});
var _STAR___115913 = (function (x,y){
return (x * y);
});
var _STAR___115914 = (function() { 
var G__115916__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__115916 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115916__delegate.call(this, x, y, more);
};
G__115916.cljs$lang$maxFixedArity = 2;
G__115916.cljs$lang$applyTo = (function (arglist__115917){
var x = cljs.core.first(arglist__115917);
var y = cljs.core.first(cljs.core.next(arglist__115917));
var more = cljs.core.rest(cljs.core.next(arglist__115917));
return G__115916__delegate.call(this, x, y, more);
});
return G__115916;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___115911.call(this);
case  1 :
return _STAR___115912.call(this,x);
case  2 :
return _STAR___115913.call(this,x,y);
default:
return _STAR___115914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___115914.cljs$lang$applyTo;
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
var _SLASH___115918 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___115919 = (function (x,y){
return (x / y);
});
var _SLASH___115920 = (function() { 
var G__115922__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__115922 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115922__delegate.call(this, x, y, more);
};
G__115922.cljs$lang$maxFixedArity = 2;
G__115922.cljs$lang$applyTo = (function (arglist__115923){
var x = cljs.core.first(arglist__115923);
var y = cljs.core.first(cljs.core.next(arglist__115923));
var more = cljs.core.rest(cljs.core.next(arglist__115923));
return G__115922__delegate.call(this, x, y, more);
});
return G__115922;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___115918.call(this,x);
case  2 :
return _SLASH___115919.call(this,x,y);
default:
return _SLASH___115920.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___115920.cljs$lang$applyTo;
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
var _LT___115924 = (function (x){
return true;
});
var _LT___115925 = (function (x,y){
return (x < y);
});
var _LT___115926 = (function() { 
var G__115928__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__115929 = y;
var G__115930 = cljs.core.first.call(null,more);
var G__115931 = cljs.core.next.call(null,more);
x = G__115929;
y = G__115930;
more = G__115931;
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
var G__115928 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115928__delegate.call(this, x, y, more);
};
G__115928.cljs$lang$maxFixedArity = 2;
G__115928.cljs$lang$applyTo = (function (arglist__115932){
var x = cljs.core.first(arglist__115932);
var y = cljs.core.first(cljs.core.next(arglist__115932));
var more = cljs.core.rest(cljs.core.next(arglist__115932));
return G__115928__delegate.call(this, x, y, more);
});
return G__115928;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___115924.call(this,x);
case  2 :
return _LT___115925.call(this,x,y);
default:
return _LT___115926.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___115926.cljs$lang$applyTo;
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
var _LT__EQ___115933 = (function (x){
return true;
});
var _LT__EQ___115934 = (function (x,y){
return (x <= y);
});
var _LT__EQ___115935 = (function() { 
var G__115937__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__115938 = y;
var G__115939 = cljs.core.first.call(null,more);
var G__115940 = cljs.core.next.call(null,more);
x = G__115938;
y = G__115939;
more = G__115940;
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
var G__115937 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115937__delegate.call(this, x, y, more);
};
G__115937.cljs$lang$maxFixedArity = 2;
G__115937.cljs$lang$applyTo = (function (arglist__115941){
var x = cljs.core.first(arglist__115941);
var y = cljs.core.first(cljs.core.next(arglist__115941));
var more = cljs.core.rest(cljs.core.next(arglist__115941));
return G__115937__delegate.call(this, x, y, more);
});
return G__115937;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___115933.call(this,x);
case  2 :
return _LT__EQ___115934.call(this,x,y);
default:
return _LT__EQ___115935.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___115935.cljs$lang$applyTo;
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
var _GT___115942 = (function (x){
return true;
});
var _GT___115943 = (function (x,y){
return (x > y);
});
var _GT___115944 = (function() { 
var G__115946__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__115947 = y;
var G__115948 = cljs.core.first.call(null,more);
var G__115949 = cljs.core.next.call(null,more);
x = G__115947;
y = G__115948;
more = G__115949;
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
var G__115946 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115946__delegate.call(this, x, y, more);
};
G__115946.cljs$lang$maxFixedArity = 2;
G__115946.cljs$lang$applyTo = (function (arglist__115950){
var x = cljs.core.first(arglist__115950);
var y = cljs.core.first(cljs.core.next(arglist__115950));
var more = cljs.core.rest(cljs.core.next(arglist__115950));
return G__115946__delegate.call(this, x, y, more);
});
return G__115946;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___115942.call(this,x);
case  2 :
return _GT___115943.call(this,x,y);
default:
return _GT___115944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___115944.cljs$lang$applyTo;
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
var _GT__EQ___115951 = (function (x){
return true;
});
var _GT__EQ___115952 = (function (x,y){
return (x >= y);
});
var _GT__EQ___115953 = (function() { 
var G__115955__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__115956 = y;
var G__115957 = cljs.core.first.call(null,more);
var G__115958 = cljs.core.next.call(null,more);
x = G__115956;
y = G__115957;
more = G__115958;
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
var G__115955 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115955__delegate.call(this, x, y, more);
};
G__115955.cljs$lang$maxFixedArity = 2;
G__115955.cljs$lang$applyTo = (function (arglist__115959){
var x = cljs.core.first(arglist__115959);
var y = cljs.core.first(cljs.core.next(arglist__115959));
var more = cljs.core.rest(cljs.core.next(arglist__115959));
return G__115955__delegate.call(this, x, y, more);
});
return G__115955;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___115951.call(this,x);
case  2 :
return _GT__EQ___115952.call(this,x,y);
default:
return _GT__EQ___115953.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___115953.cljs$lang$applyTo;
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
var max__115960 = (function (x){
return x;
});
var max__115961 = (function (x,y){
return ((x > y) ? x : y);
});
var max__115962 = (function() { 
var G__115964__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__115964 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115964__delegate.call(this, x, y, more);
};
G__115964.cljs$lang$maxFixedArity = 2;
G__115964.cljs$lang$applyTo = (function (arglist__115965){
var x = cljs.core.first(arglist__115965);
var y = cljs.core.first(cljs.core.next(arglist__115965));
var more = cljs.core.rest(cljs.core.next(arglist__115965));
return G__115964__delegate.call(this, x, y, more);
});
return G__115964;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__115960.call(this,x);
case  2 :
return max__115961.call(this,x,y);
default:
return max__115962.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__115962.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__115966 = (function (x){
return x;
});
var min__115967 = (function (x,y){
return ((x < y) ? x : y);
});
var min__115968 = (function() { 
var G__115970__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__115970 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115970__delegate.call(this, x, y, more);
};
G__115970.cljs$lang$maxFixedArity = 2;
G__115970.cljs$lang$applyTo = (function (arglist__115971){
var x = cljs.core.first(arglist__115971);
var y = cljs.core.first(cljs.core.next(arglist__115971));
var more = cljs.core.rest(cljs.core.next(arglist__115971));
return G__115970__delegate.call(this, x, y, more);
});
return G__115970;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__115966.call(this,x);
case  2 :
return min__115967.call(this,x,y);
default:
return min__115968.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__115968.cljs$lang$applyTo;
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
var rem__115972 = (n % d);

return cljs.core.fix.call(null,((n - rem__115972) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__115973 = cljs.core.quot.call(null,n,d);

return (n - (d * q__115973));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__115974 = (function (){
return Math.random.call(null);
});
var rand__115975 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__115974.call(this);
case  1 :
return rand__115975.call(this,n);
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
var _EQ__EQ___115977 = (function (x){
return true;
});
var _EQ__EQ___115978 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___115979 = (function() { 
var G__115981__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__115982 = y;
var G__115983 = cljs.core.first.call(null,more);
var G__115984 = cljs.core.next.call(null,more);
x = G__115982;
y = G__115983;
more = G__115984;
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
var G__115981 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__115981__delegate.call(this, x, y, more);
};
G__115981.cljs$lang$maxFixedArity = 2;
G__115981.cljs$lang$applyTo = (function (arglist__115985){
var x = cljs.core.first(arglist__115985);
var y = cljs.core.first(cljs.core.next(arglist__115985));
var more = cljs.core.rest(cljs.core.next(arglist__115985));
return G__115981__delegate.call(this, x, y, more);
});
return G__115981;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___115977.call(this,x);
case  2 :
return _EQ__EQ___115978.call(this,x,y);
default:
return _EQ__EQ___115979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___115979.cljs$lang$applyTo;
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
var n__115986 = n;
var xs__115987 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____115988 = xs__115987;

if(cljs.core.truth_(and__3546__auto____115988))
{return (n__115986 > 0);
} else
{return and__3546__auto____115988;
}
})()))
{{
var G__115989 = (n__115986 - 1);
var G__115990 = cljs.core.next.call(null,xs__115987);
n__115986 = G__115989;
xs__115987 = G__115990;
continue;
}
} else
{return xs__115987;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__115995 = null;
var G__115995__115996 = (function (coll,n){
var temp__3695__auto____115991 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____115991))
{var xs__115992 = temp__3695__auto____115991;

return cljs.core.first.call(null,xs__115992);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__115995__115997 = (function (coll,n,not_found){
var temp__3695__auto____115993 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____115993))
{var xs__115994 = temp__3695__auto____115993;

return cljs.core.first.call(null,xs__115994);
} else
{return not_found;
}
});
G__115995 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__115995__115996.call(this,coll,n);
case  3 :
return G__115995__115997.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115995;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___115999 = (function (){
return "";
});
var str_STAR___116000 = (function (x){
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
var str_STAR___116001 = (function() { 
var G__116003__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__116004 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__116005 = cljs.core.next.call(null,more);
sb = G__116004;
more = G__116005;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__116003 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__116003__delegate.call(this, x, ys);
};
G__116003.cljs$lang$maxFixedArity = 1;
G__116003.cljs$lang$applyTo = (function (arglist__116006){
var x = cljs.core.first(arglist__116006);
var ys = cljs.core.rest(arglist__116006);
return G__116003__delegate.call(this, x, ys);
});
return G__116003;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___115999.call(this);
case  1 :
return str_STAR___116000.call(this,x);
default:
return str_STAR___116001.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___116001.cljs$lang$applyTo;
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
var str__116007 = (function (){
return "";
});
var str__116008 = (function (x){
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
var str__116009 = (function() { 
var G__116011__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__116012 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__116013 = cljs.core.next.call(null,more);
sb = G__116012;
more = G__116013;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__116011 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__116011__delegate.call(this, x, ys);
};
G__116011.cljs$lang$maxFixedArity = 1;
G__116011.cljs$lang$applyTo = (function (arglist__116014){
var x = cljs.core.first(arglist__116014);
var ys = cljs.core.rest(arglist__116014);
return G__116011__delegate.call(this, x, ys);
});
return G__116011;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__116007.call(this);
case  1 :
return str__116008.call(this,x);
default:
return str__116009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__116009.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__116015 = (function (s,start){
return s.substring(start);
});
var subs__116016 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__116015.call(this,s,start);
case  3 :
return subs__116016.call(this,s,start,end);
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
var symbol__116018 = (function (name){
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
var symbol__116019 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__116018.call(this,ns);
case  2 :
return symbol__116019.call(this,ns,name);
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
var keyword__116021 = (function (name){
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
var keyword__116022 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__116021.call(this,ns);
case  2 :
return keyword__116022.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__116024 = cljs.core.seq.call(null,x);
var ys__116025 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__116024 === null)))
{return (ys__116025 === null);
} else
{if(cljs.core.truth_((ys__116025 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__116024),cljs.core.first.call(null,ys__116025))))
{{
var G__116026 = cljs.core.next.call(null,xs__116024);
var G__116027 = cljs.core.next.call(null,ys__116025);
xs__116024 = G__116026;
ys__116025 = G__116027;
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
return cljs.core.reduce.call(null,(function (p1__116028_SHARP_,p2__116029_SHARP_){
return cljs.core.hash_combine.call(null,p1__116028_SHARP_,cljs.core.hash.call(null,p2__116029_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__116030__116031 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__116030__116031))
{var G__116033__116035 = cljs.core.first.call(null,G__116030__116031);
var vec__116034__116036 = G__116033__116035;
var key_name__116037 = cljs.core.nth.call(null,vec__116034__116036,0,null);
var f__116038 = cljs.core.nth.call(null,vec__116034__116036,1,null);
var G__116030__116039 = G__116030__116031;

var G__116033__116040 = G__116033__116035;
var G__116030__116041 = G__116030__116039;

while(true){
var vec__116042__116043 = G__116033__116040;
var key_name__116044 = cljs.core.nth.call(null,vec__116042__116043,0,null);
var f__116045 = cljs.core.nth.call(null,vec__116042__116043,1,null);
var G__116030__116046 = G__116030__116041;

var str_name__116047 = cljs.core.name.call(null,key_name__116044);

obj[str_name__116047] = f__116045;
var temp__3698__auto____116048 = cljs.core.next.call(null,G__116030__116046);

if(cljs.core.truth_(temp__3698__auto____116048))
{var G__116030__116049 = temp__3698__auto____116048;

{
var G__116050 = cljs.core.first.call(null,G__116030__116049);
var G__116051 = G__116030__116049;
G__116033__116040 = G__116050;
G__116030__116041 = G__116051;
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
var this__116052 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__116053 = this;
return (new cljs.core.List(this__116053.meta,o,coll,(this__116053.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__116054 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__116055 = this;
return this__116055.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__116056 = this;
return this__116056.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__116057 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__116058 = this;
return this__116058.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__116059 = this;
return this__116059.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__116060 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__116061 = this;
return (new cljs.core.List(meta,this__116061.first,this__116061.rest,this__116061.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__116062 = this;
return this__116062.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__116063 = this;
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
var this__116064 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__116065 = this;
return (new cljs.core.List(this__116065.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__116066 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__116067 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__116068 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__116069 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__116070 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__116071 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__116072 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__116073 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__116074 = this;
return this__116074.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__116075 = this;
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
list.cljs$lang$applyTo = (function (arglist__116076){
var items = cljs.core.seq( arglist__116076 );;
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
var this__116077 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__116078 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__116079 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__116080 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__116080.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__116081 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__116082 = this;
return this__116082.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__116083 = this;
if(cljs.core.truth_((this__116083.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__116083.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__116084 = this;
return this__116084.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__116085 = this;
return (new cljs.core.Cons(meta,this__116085.first,this__116085.rest));
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
var G__116086 = null;
var G__116086__116087 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__116086__116088 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__116086 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__116086__116087.call(this,string,f);
case  3 :
return G__116086__116088.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116086;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__116090 = null;
var G__116090__116091 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__116090__116092 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__116090 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__116090__116091.call(this,string,k);
case  3 :
return G__116090__116092.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116090;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__116094 = null;
var G__116094__116095 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__116094__116096 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__116094 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__116094__116095.call(this,string,n);
case  3 :
return G__116094__116096.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116094;
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
var G__116104 = null;
var G__116104__116105 = (function (tsym116098,coll){
var tsym116098__116100 = this;

var this$__116101 = tsym116098__116100;

return cljs.core.get.call(null,coll,this$__116101.toString());
});
var G__116104__116106 = (function (tsym116099,coll,not_found){
var tsym116099__116102 = this;

var this$__116103 = tsym116099__116102;

return cljs.core.get.call(null,coll,this$__116103.toString(),not_found);
});
G__116104 = function(tsym116099,coll,not_found){
switch(arguments.length){
case  2 :
return G__116104__116105.call(this,tsym116099,coll);
case  3 :
return G__116104__116106.call(this,tsym116099,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116104;
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
var x__116108 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__116108;
} else
{lazy_seq.x = x__116108.call(null);
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
var this__116109 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__116110 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__116111 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__116112 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__116112.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__116113 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__116114 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__116115 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__116116 = this;
return this__116116.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__116117 = this;
return (new cljs.core.LazySeq(meta,this__116117.realized,this__116117.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__116118 = [];

var s__116119 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__116119)))
{ary__116118.push(cljs.core.first.call(null,s__116119));
{
var G__116120 = cljs.core.next.call(null,s__116119);
s__116119 = G__116120;
continue;
}
} else
{return ary__116118;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__116121 = s;
var i__116122 = n;
var sum__116123 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____116124 = (i__116122 > 0);

if(cljs.core.truth_(and__3546__auto____116124))
{return cljs.core.seq.call(null,s__116121);
} else
{return and__3546__auto____116124;
}
})()))
{{
var G__116125 = cljs.core.next.call(null,s__116121);
var G__116126 = (i__116122 - 1);
var G__116127 = (sum__116123 + 1);
s__116121 = G__116125;
i__116122 = G__116126;
sum__116123 = G__116127;
continue;
}
} else
{return sum__116123;
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
var concat__116131 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__116132 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__116133 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__116128 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__116128))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__116128),concat.call(null,cljs.core.rest.call(null,s__116128),y));
} else
{return y;
}
})));
});
var concat__116134 = (function() { 
var G__116136__delegate = function (x,y,zs){
var cat__116130 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__116129 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__116129))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__116129),cat.call(null,cljs.core.rest.call(null,xys__116129),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__116130.call(null,concat.call(null,x,y),zs);
};
var G__116136 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__116136__delegate.call(this, x, y, zs);
};
G__116136.cljs$lang$maxFixedArity = 2;
G__116136.cljs$lang$applyTo = (function (arglist__116137){
var x = cljs.core.first(arglist__116137);
var y = cljs.core.first(cljs.core.next(arglist__116137));
var zs = cljs.core.rest(cljs.core.next(arglist__116137));
return G__116136__delegate.call(this, x, y, zs);
});
return G__116136;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__116131.call(this);
case  1 :
return concat__116132.call(this,x);
case  2 :
return concat__116133.call(this,x,y);
default:
return concat__116134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__116134.cljs$lang$applyTo;
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
var list_STAR___116138 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___116139 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___116140 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___116141 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___116142 = (function() { 
var G__116144__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__116144 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__116144__delegate.call(this, a, b, c, d, more);
};
G__116144.cljs$lang$maxFixedArity = 4;
G__116144.cljs$lang$applyTo = (function (arglist__116145){
var a = cljs.core.first(arglist__116145);
var b = cljs.core.first(cljs.core.next(arglist__116145));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116145)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__116145))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__116145))));
return G__116144__delegate.call(this, a, b, c, d, more);
});
return G__116144;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___116138.call(this,a);
case  2 :
return list_STAR___116139.call(this,a,b);
case  3 :
return list_STAR___116140.call(this,a,b,c);
case  4 :
return list_STAR___116141.call(this,a,b,c,d);
default:
return list_STAR___116142.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___116142.cljs$lang$applyTo;
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
var apply__116155 = (function (f,args){
var fixed_arity__116146 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__116146 + 1)) <= fixed_arity__116146)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__116156 = (function (f,x,args){
var arglist__116147 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__116148 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__116147,fixed_arity__116148) <= fixed_arity__116148)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__116147));
} else
{return f.cljs$lang$applyTo(arglist__116147);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__116147));
}
});
var apply__116157 = (function (f,x,y,args){
var arglist__116149 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__116150 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__116149,fixed_arity__116150) <= fixed_arity__116150)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__116149));
} else
{return f.cljs$lang$applyTo(arglist__116149);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__116149));
}
});
var apply__116158 = (function (f,x,y,z,args){
var arglist__116151 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__116152 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__116151,fixed_arity__116152) <= fixed_arity__116152)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__116151));
} else
{return f.cljs$lang$applyTo(arglist__116151);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__116151));
}
});
var apply__116159 = (function() { 
var G__116161__delegate = function (f,a,b,c,d,args){
var arglist__116153 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__116154 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__116153,fixed_arity__116154) <= fixed_arity__116154)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__116153));
} else
{return f.cljs$lang$applyTo(arglist__116153);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__116153));
}
};
var G__116161 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__116161__delegate.call(this, f, a, b, c, d, args);
};
G__116161.cljs$lang$maxFixedArity = 5;
G__116161.cljs$lang$applyTo = (function (arglist__116162){
var f = cljs.core.first(arglist__116162);
var a = cljs.core.first(cljs.core.next(arglist__116162));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116162)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__116162))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__116162)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__116162)))));
return G__116161__delegate.call(this, f, a, b, c, d, args);
});
return G__116161;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__116155.call(this,f,a);
case  3 :
return apply__116156.call(this,f,a,b);
case  4 :
return apply__116157.call(this,f,a,b,c);
case  5 :
return apply__116158.call(this,f,a,b,c,d);
default:
return apply__116159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__116159.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__116163){
var obj = cljs.core.first(arglist__116163);
var f = cljs.core.first(cljs.core.next(arglist__116163));
var args = cljs.core.rest(cljs.core.next(arglist__116163));
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
var not_EQ___116164 = (function (x){
return false;
});
var not_EQ___116165 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___116166 = (function() { 
var G__116168__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__116168 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__116168__delegate.call(this, x, y, more);
};
G__116168.cljs$lang$maxFixedArity = 2;
G__116168.cljs$lang$applyTo = (function (arglist__116169){
var x = cljs.core.first(arglist__116169);
var y = cljs.core.first(cljs.core.next(arglist__116169));
var more = cljs.core.rest(cljs.core.next(arglist__116169));
return G__116168__delegate.call(this, x, y, more);
});
return G__116168;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___116164.call(this,x);
case  2 :
return not_EQ___116165.call(this,x,y);
default:
return not_EQ___116166.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___116166.cljs$lang$applyTo;
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
var G__116170 = pred;
var G__116171 = cljs.core.next.call(null,coll);
pred = G__116170;
coll = G__116171;
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
{var or__3548__auto____116172 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____116172))
{return or__3548__auto____116172;
} else
{{
var G__116173 = pred;
var G__116174 = cljs.core.next.call(null,coll);
pred = G__116173;
coll = G__116174;
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
var G__116175 = null;
var G__116175__116176 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__116175__116177 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__116175__116178 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__116175__116179 = (function() { 
var G__116181__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__116181 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__116181__delegate.call(this, x, y, zs);
};
G__116181.cljs$lang$maxFixedArity = 2;
G__116181.cljs$lang$applyTo = (function (arglist__116182){
var x = cljs.core.first(arglist__116182);
var y = cljs.core.first(cljs.core.next(arglist__116182));
var zs = cljs.core.rest(cljs.core.next(arglist__116182));
return G__116181__delegate.call(this, x, y, zs);
});
return G__116181;
})()
;
G__116175 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__116175__116176.call(this);
case  1 :
return G__116175__116177.call(this,x);
case  2 :
return G__116175__116178.call(this,x,y);
default:
return G__116175__116179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__116175.cljs$lang$maxFixedArity = 2;
G__116175.cljs$lang$applyTo = G__116175__116179.cljs$lang$applyTo;
return G__116175;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__116183__delegate = function (args){
return x;
};
var G__116183 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__116183__delegate.call(this, args);
};
G__116183.cljs$lang$maxFixedArity = 0;
G__116183.cljs$lang$applyTo = (function (arglist__116184){
var args = cljs.core.seq( arglist__116184 );;
return G__116183__delegate.call(this, args);
});
return G__116183;
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
var comp__116188 = (function (){
return cljs.core.identity;
});
var comp__116189 = (function (f){
return f;
});
var comp__116190 = (function (f,g){
return (function() {
var G__116194 = null;
var G__116194__116195 = (function (){
return f.call(null,g.call(null));
});
var G__116194__116196 = (function (x){
return f.call(null,g.call(null,x));
});
var G__116194__116197 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__116194__116198 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__116194__116199 = (function() { 
var G__116201__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__116201 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116201__delegate.call(this, x, y, z, args);
};
G__116201.cljs$lang$maxFixedArity = 3;
G__116201.cljs$lang$applyTo = (function (arglist__116202){
var x = cljs.core.first(arglist__116202);
var y = cljs.core.first(cljs.core.next(arglist__116202));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116202)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116202)));
return G__116201__delegate.call(this, x, y, z, args);
});
return G__116201;
})()
;
G__116194 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__116194__116195.call(this);
case  1 :
return G__116194__116196.call(this,x);
case  2 :
return G__116194__116197.call(this,x,y);
case  3 :
return G__116194__116198.call(this,x,y,z);
default:
return G__116194__116199.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__116194.cljs$lang$maxFixedArity = 3;
G__116194.cljs$lang$applyTo = G__116194__116199.cljs$lang$applyTo;
return G__116194;
})()
});
var comp__116191 = (function (f,g,h){
return (function() {
var G__116203 = null;
var G__116203__116204 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__116203__116205 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__116203__116206 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__116203__116207 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__116203__116208 = (function() { 
var G__116210__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__116210 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116210__delegate.call(this, x, y, z, args);
};
G__116210.cljs$lang$maxFixedArity = 3;
G__116210.cljs$lang$applyTo = (function (arglist__116211){
var x = cljs.core.first(arglist__116211);
var y = cljs.core.first(cljs.core.next(arglist__116211));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116211)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116211)));
return G__116210__delegate.call(this, x, y, z, args);
});
return G__116210;
})()
;
G__116203 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__116203__116204.call(this);
case  1 :
return G__116203__116205.call(this,x);
case  2 :
return G__116203__116206.call(this,x,y);
case  3 :
return G__116203__116207.call(this,x,y,z);
default:
return G__116203__116208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__116203.cljs$lang$maxFixedArity = 3;
G__116203.cljs$lang$applyTo = G__116203__116208.cljs$lang$applyTo;
return G__116203;
})()
});
var comp__116192 = (function() { 
var G__116212__delegate = function (f1,f2,f3,fs){
var fs__116185 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__116213__delegate = function (args){
var ret__116186 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__116185),args);
var fs__116187 = cljs.core.next.call(null,fs__116185);

while(true){
if(cljs.core.truth_(fs__116187))
{{
var G__116214 = cljs.core.first.call(null,fs__116187).call(null,ret__116186);
var G__116215 = cljs.core.next.call(null,fs__116187);
ret__116186 = G__116214;
fs__116187 = G__116215;
continue;
}
} else
{return ret__116186;
}
break;
}
};
var G__116213 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__116213__delegate.call(this, args);
};
G__116213.cljs$lang$maxFixedArity = 0;
G__116213.cljs$lang$applyTo = (function (arglist__116216){
var args = cljs.core.seq( arglist__116216 );;
return G__116213__delegate.call(this, args);
});
return G__116213;
})()
;
};
var G__116212 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116212__delegate.call(this, f1, f2, f3, fs);
};
G__116212.cljs$lang$maxFixedArity = 3;
G__116212.cljs$lang$applyTo = (function (arglist__116217){
var f1 = cljs.core.first(arglist__116217);
var f2 = cljs.core.first(cljs.core.next(arglist__116217));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116217)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116217)));
return G__116212__delegate.call(this, f1, f2, f3, fs);
});
return G__116212;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__116188.call(this);
case  1 :
return comp__116189.call(this,f1);
case  2 :
return comp__116190.call(this,f1,f2);
case  3 :
return comp__116191.call(this,f1,f2,f3);
default:
return comp__116192.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__116192.cljs$lang$applyTo;
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
var partial__116218 = (function (f,arg1){
return (function() { 
var G__116223__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__116223 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__116223__delegate.call(this, args);
};
G__116223.cljs$lang$maxFixedArity = 0;
G__116223.cljs$lang$applyTo = (function (arglist__116224){
var args = cljs.core.seq( arglist__116224 );;
return G__116223__delegate.call(this, args);
});
return G__116223;
})()
;
});
var partial__116219 = (function (f,arg1,arg2){
return (function() { 
var G__116225__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__116225 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__116225__delegate.call(this, args);
};
G__116225.cljs$lang$maxFixedArity = 0;
G__116225.cljs$lang$applyTo = (function (arglist__116226){
var args = cljs.core.seq( arglist__116226 );;
return G__116225__delegate.call(this, args);
});
return G__116225;
})()
;
});
var partial__116220 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__116227__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__116227 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__116227__delegate.call(this, args);
};
G__116227.cljs$lang$maxFixedArity = 0;
G__116227.cljs$lang$applyTo = (function (arglist__116228){
var args = cljs.core.seq( arglist__116228 );;
return G__116227__delegate.call(this, args);
});
return G__116227;
})()
;
});
var partial__116221 = (function() { 
var G__116229__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__116230__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__116230 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__116230__delegate.call(this, args);
};
G__116230.cljs$lang$maxFixedArity = 0;
G__116230.cljs$lang$applyTo = (function (arglist__116231){
var args = cljs.core.seq( arglist__116231 );;
return G__116230__delegate.call(this, args);
});
return G__116230;
})()
;
};
var G__116229 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__116229__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__116229.cljs$lang$maxFixedArity = 4;
G__116229.cljs$lang$applyTo = (function (arglist__116232){
var f = cljs.core.first(arglist__116232);
var arg1 = cljs.core.first(cljs.core.next(arglist__116232));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116232)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__116232))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__116232))));
return G__116229__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__116229;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__116218.call(this,f,arg1);
case  3 :
return partial__116219.call(this,f,arg1,arg2);
case  4 :
return partial__116220.call(this,f,arg1,arg2,arg3);
default:
return partial__116221.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__116221.cljs$lang$applyTo;
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
var fnil__116233 = (function (f,x){
return (function() {
var G__116237 = null;
var G__116237__116238 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__116237__116239 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__116237__116240 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__116237__116241 = (function() { 
var G__116243__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__116243 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116243__delegate.call(this, a, b, c, ds);
};
G__116243.cljs$lang$maxFixedArity = 3;
G__116243.cljs$lang$applyTo = (function (arglist__116244){
var a = cljs.core.first(arglist__116244);
var b = cljs.core.first(cljs.core.next(arglist__116244));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116244)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116244)));
return G__116243__delegate.call(this, a, b, c, ds);
});
return G__116243;
})()
;
G__116237 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__116237__116238.call(this,a);
case  2 :
return G__116237__116239.call(this,a,b);
case  3 :
return G__116237__116240.call(this,a,b,c);
default:
return G__116237__116241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__116237.cljs$lang$maxFixedArity = 3;
G__116237.cljs$lang$applyTo = G__116237__116241.cljs$lang$applyTo;
return G__116237;
})()
});
var fnil__116234 = (function (f,x,y){
return (function() {
var G__116245 = null;
var G__116245__116246 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__116245__116247 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__116245__116248 = (function() { 
var G__116250__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__116250 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116250__delegate.call(this, a, b, c, ds);
};
G__116250.cljs$lang$maxFixedArity = 3;
G__116250.cljs$lang$applyTo = (function (arglist__116251){
var a = cljs.core.first(arglist__116251);
var b = cljs.core.first(cljs.core.next(arglist__116251));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116251)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116251)));
return G__116250__delegate.call(this, a, b, c, ds);
});
return G__116250;
})()
;
G__116245 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__116245__116246.call(this,a,b);
case  3 :
return G__116245__116247.call(this,a,b,c);
default:
return G__116245__116248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__116245.cljs$lang$maxFixedArity = 3;
G__116245.cljs$lang$applyTo = G__116245__116248.cljs$lang$applyTo;
return G__116245;
})()
});
var fnil__116235 = (function (f,x,y,z){
return (function() {
var G__116252 = null;
var G__116252__116253 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__116252__116254 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__116252__116255 = (function() { 
var G__116257__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__116257 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116257__delegate.call(this, a, b, c, ds);
};
G__116257.cljs$lang$maxFixedArity = 3;
G__116257.cljs$lang$applyTo = (function (arglist__116258){
var a = cljs.core.first(arglist__116258);
var b = cljs.core.first(cljs.core.next(arglist__116258));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116258)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116258)));
return G__116257__delegate.call(this, a, b, c, ds);
});
return G__116257;
})()
;
G__116252 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__116252__116253.call(this,a,b);
case  3 :
return G__116252__116254.call(this,a,b,c);
default:
return G__116252__116255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__116252.cljs$lang$maxFixedArity = 3;
G__116252.cljs$lang$applyTo = G__116252__116255.cljs$lang$applyTo;
return G__116252;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__116233.call(this,f,x);
case  3 :
return fnil__116234.call(this,f,x,y);
case  4 :
return fnil__116235.call(this,f,x,y,z);
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
var mapi__116261 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____116259 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____116259))
{var s__116260 = temp__3698__auto____116259;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__116260)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__116260)));
} else
{return null;
}
})));
});

return mapi__116261.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____116262 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____116262))
{var s__116263 = temp__3698__auto____116262;

var x__116264 = f.call(null,cljs.core.first.call(null,s__116263));

if(cljs.core.truth_((x__116264 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__116263));
} else
{return cljs.core.cons.call(null,x__116264,keep.call(null,f,cljs.core.rest.call(null,s__116263)));
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
var keepi__116274 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____116271 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____116271))
{var s__116272 = temp__3698__auto____116271;

var x__116273 = f.call(null,idx,cljs.core.first.call(null,s__116272));

if(cljs.core.truth_((x__116273 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__116272));
} else
{return cljs.core.cons.call(null,x__116273,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__116272)));
}
} else
{return null;
}
})));
});

return keepi__116274.call(null,0,coll);
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
var every_pred__116319 = (function (p){
return (function() {
var ep1 = null;
var ep1__116324 = (function (){
return true;
});
var ep1__116325 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__116326 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____116281 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____116281))
{return p.call(null,y);
} else
{return and__3546__auto____116281;
}
})());
});
var ep1__116327 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____116282 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____116282))
{var and__3546__auto____116283 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____116283))
{return p.call(null,z);
} else
{return and__3546__auto____116283;
}
} else
{return and__3546__auto____116282;
}
})());
});
var ep1__116328 = (function() { 
var G__116330__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____116284 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____116284))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____116284;
}
})());
};
var G__116330 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116330__delegate.call(this, x, y, z, args);
};
G__116330.cljs$lang$maxFixedArity = 3;
G__116330.cljs$lang$applyTo = (function (arglist__116331){
var x = cljs.core.first(arglist__116331);
var y = cljs.core.first(cljs.core.next(arglist__116331));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116331)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116331)));
return G__116330__delegate.call(this, x, y, z, args);
});
return G__116330;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__116324.call(this);
case  1 :
return ep1__116325.call(this,x);
case  2 :
return ep1__116326.call(this,x,y);
case  3 :
return ep1__116327.call(this,x,y,z);
default:
return ep1__116328.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__116328.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__116320 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__116332 = (function (){
return true;
});
var ep2__116333 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____116285 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____116285))
{return p2.call(null,x);
} else
{return and__3546__auto____116285;
}
})());
});
var ep2__116334 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____116286 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____116286))
{var and__3546__auto____116287 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____116287))
{var and__3546__auto____116288 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____116288))
{return p2.call(null,y);
} else
{return and__3546__auto____116288;
}
} else
{return and__3546__auto____116287;
}
} else
{return and__3546__auto____116286;
}
})());
});
var ep2__116335 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____116289 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____116289))
{var and__3546__auto____116290 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____116290))
{var and__3546__auto____116291 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____116291))
{var and__3546__auto____116292 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____116292))
{var and__3546__auto____116293 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____116293))
{return p2.call(null,z);
} else
{return and__3546__auto____116293;
}
} else
{return and__3546__auto____116292;
}
} else
{return and__3546__auto____116291;
}
} else
{return and__3546__auto____116290;
}
} else
{return and__3546__auto____116289;
}
})());
});
var ep2__116336 = (function() { 
var G__116338__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____116294 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____116294))
{return cljs.core.every_QMARK_.call(null,(function (p1__116265_SHARP_){
var and__3546__auto____116295 = p1.call(null,p1__116265_SHARP_);

if(cljs.core.truth_(and__3546__auto____116295))
{return p2.call(null,p1__116265_SHARP_);
} else
{return and__3546__auto____116295;
}
}),args);
} else
{return and__3546__auto____116294;
}
})());
};
var G__116338 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116338__delegate.call(this, x, y, z, args);
};
G__116338.cljs$lang$maxFixedArity = 3;
G__116338.cljs$lang$applyTo = (function (arglist__116339){
var x = cljs.core.first(arglist__116339);
var y = cljs.core.first(cljs.core.next(arglist__116339));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116339)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116339)));
return G__116338__delegate.call(this, x, y, z, args);
});
return G__116338;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__116332.call(this);
case  1 :
return ep2__116333.call(this,x);
case  2 :
return ep2__116334.call(this,x,y);
case  3 :
return ep2__116335.call(this,x,y,z);
default:
return ep2__116336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__116336.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__116321 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__116340 = (function (){
return true;
});
var ep3__116341 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____116296 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____116296))
{var and__3546__auto____116297 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____116297))
{return p3.call(null,x);
} else
{return and__3546__auto____116297;
}
} else
{return and__3546__auto____116296;
}
})());
});
var ep3__116342 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____116298 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____116298))
{var and__3546__auto____116299 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____116299))
{var and__3546__auto____116300 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____116300))
{var and__3546__auto____116301 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____116301))
{var and__3546__auto____116302 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____116302))
{return p3.call(null,y);
} else
{return and__3546__auto____116302;
}
} else
{return and__3546__auto____116301;
}
} else
{return and__3546__auto____116300;
}
} else
{return and__3546__auto____116299;
}
} else
{return and__3546__auto____116298;
}
})());
});
var ep3__116343 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____116303 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____116303))
{var and__3546__auto____116304 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____116304))
{var and__3546__auto____116305 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____116305))
{var and__3546__auto____116306 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____116306))
{var and__3546__auto____116307 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____116307))
{var and__3546__auto____116308 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____116308))
{var and__3546__auto____116309 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____116309))
{var and__3546__auto____116310 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____116310))
{return p3.call(null,z);
} else
{return and__3546__auto____116310;
}
} else
{return and__3546__auto____116309;
}
} else
{return and__3546__auto____116308;
}
} else
{return and__3546__auto____116307;
}
} else
{return and__3546__auto____116306;
}
} else
{return and__3546__auto____116305;
}
} else
{return and__3546__auto____116304;
}
} else
{return and__3546__auto____116303;
}
})());
});
var ep3__116344 = (function() { 
var G__116346__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____116311 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____116311))
{return cljs.core.every_QMARK_.call(null,(function (p1__116266_SHARP_){
var and__3546__auto____116312 = p1.call(null,p1__116266_SHARP_);

if(cljs.core.truth_(and__3546__auto____116312))
{var and__3546__auto____116313 = p2.call(null,p1__116266_SHARP_);

if(cljs.core.truth_(and__3546__auto____116313))
{return p3.call(null,p1__116266_SHARP_);
} else
{return and__3546__auto____116313;
}
} else
{return and__3546__auto____116312;
}
}),args);
} else
{return and__3546__auto____116311;
}
})());
};
var G__116346 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116346__delegate.call(this, x, y, z, args);
};
G__116346.cljs$lang$maxFixedArity = 3;
G__116346.cljs$lang$applyTo = (function (arglist__116347){
var x = cljs.core.first(arglist__116347);
var y = cljs.core.first(cljs.core.next(arglist__116347));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116347)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116347)));
return G__116346__delegate.call(this, x, y, z, args);
});
return G__116346;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__116340.call(this);
case  1 :
return ep3__116341.call(this,x);
case  2 :
return ep3__116342.call(this,x,y);
case  3 :
return ep3__116343.call(this,x,y,z);
default:
return ep3__116344.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__116344.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__116322 = (function() { 
var G__116348__delegate = function (p1,p2,p3,ps){
var ps__116314 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__116349 = (function (){
return true;
});
var epn__116350 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__116267_SHARP_){
return p1__116267_SHARP_.call(null,x);
}),ps__116314);
});
var epn__116351 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__116268_SHARP_){
var and__3546__auto____116315 = p1__116268_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____116315))
{return p1__116268_SHARP_.call(null,y);
} else
{return and__3546__auto____116315;
}
}),ps__116314);
});
var epn__116352 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__116269_SHARP_){
var and__3546__auto____116316 = p1__116269_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____116316))
{var and__3546__auto____116317 = p1__116269_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____116317))
{return p1__116269_SHARP_.call(null,z);
} else
{return and__3546__auto____116317;
}
} else
{return and__3546__auto____116316;
}
}),ps__116314);
});
var epn__116353 = (function() { 
var G__116355__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____116318 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____116318))
{return cljs.core.every_QMARK_.call(null,(function (p1__116270_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__116270_SHARP_,args);
}),ps__116314);
} else
{return and__3546__auto____116318;
}
})());
};
var G__116355 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116355__delegate.call(this, x, y, z, args);
};
G__116355.cljs$lang$maxFixedArity = 3;
G__116355.cljs$lang$applyTo = (function (arglist__116356){
var x = cljs.core.first(arglist__116356);
var y = cljs.core.first(cljs.core.next(arglist__116356));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116356)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116356)));
return G__116355__delegate.call(this, x, y, z, args);
});
return G__116355;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__116349.call(this);
case  1 :
return epn__116350.call(this,x);
case  2 :
return epn__116351.call(this,x,y);
case  3 :
return epn__116352.call(this,x,y,z);
default:
return epn__116353.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__116353.cljs$lang$applyTo;
return epn;
})()
};
var G__116348 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116348__delegate.call(this, p1, p2, p3, ps);
};
G__116348.cljs$lang$maxFixedArity = 3;
G__116348.cljs$lang$applyTo = (function (arglist__116357){
var p1 = cljs.core.first(arglist__116357);
var p2 = cljs.core.first(cljs.core.next(arglist__116357));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116357)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116357)));
return G__116348__delegate.call(this, p1, p2, p3, ps);
});
return G__116348;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__116319.call(this,p1);
case  2 :
return every_pred__116320.call(this,p1,p2);
case  3 :
return every_pred__116321.call(this,p1,p2,p3);
default:
return every_pred__116322.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__116322.cljs$lang$applyTo;
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
var some_fn__116397 = (function (p){
return (function() {
var sp1 = null;
var sp1__116402 = (function (){
return null;
});
var sp1__116403 = (function (x){
return p.call(null,x);
});
var sp1__116404 = (function (x,y){
var or__3548__auto____116359 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____116359))
{return or__3548__auto____116359;
} else
{return p.call(null,y);
}
});
var sp1__116405 = (function (x,y,z){
var or__3548__auto____116360 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____116360))
{return or__3548__auto____116360;
} else
{var or__3548__auto____116361 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____116361))
{return or__3548__auto____116361;
} else
{return p.call(null,z);
}
}
});
var sp1__116406 = (function() { 
var G__116408__delegate = function (x,y,z,args){
var or__3548__auto____116362 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____116362))
{return or__3548__auto____116362;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__116408 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116408__delegate.call(this, x, y, z, args);
};
G__116408.cljs$lang$maxFixedArity = 3;
G__116408.cljs$lang$applyTo = (function (arglist__116409){
var x = cljs.core.first(arglist__116409);
var y = cljs.core.first(cljs.core.next(arglist__116409));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116409)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116409)));
return G__116408__delegate.call(this, x, y, z, args);
});
return G__116408;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__116402.call(this);
case  1 :
return sp1__116403.call(this,x);
case  2 :
return sp1__116404.call(this,x,y);
case  3 :
return sp1__116405.call(this,x,y,z);
default:
return sp1__116406.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__116406.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__116398 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__116410 = (function (){
return null;
});
var sp2__116411 = (function (x){
var or__3548__auto____116363 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____116363))
{return or__3548__auto____116363;
} else
{return p2.call(null,x);
}
});
var sp2__116412 = (function (x,y){
var or__3548__auto____116364 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____116364))
{return or__3548__auto____116364;
} else
{var or__3548__auto____116365 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____116365))
{return or__3548__auto____116365;
} else
{var or__3548__auto____116366 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____116366))
{return or__3548__auto____116366;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__116413 = (function (x,y,z){
var or__3548__auto____116367 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____116367))
{return or__3548__auto____116367;
} else
{var or__3548__auto____116368 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____116368))
{return or__3548__auto____116368;
} else
{var or__3548__auto____116369 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____116369))
{return or__3548__auto____116369;
} else
{var or__3548__auto____116370 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____116370))
{return or__3548__auto____116370;
} else
{var or__3548__auto____116371 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____116371))
{return or__3548__auto____116371;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__116414 = (function() { 
var G__116416__delegate = function (x,y,z,args){
var or__3548__auto____116372 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____116372))
{return or__3548__auto____116372;
} else
{return cljs.core.some.call(null,(function (p1__116275_SHARP_){
var or__3548__auto____116373 = p1.call(null,p1__116275_SHARP_);

if(cljs.core.truth_(or__3548__auto____116373))
{return or__3548__auto____116373;
} else
{return p2.call(null,p1__116275_SHARP_);
}
}),args);
}
};
var G__116416 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116416__delegate.call(this, x, y, z, args);
};
G__116416.cljs$lang$maxFixedArity = 3;
G__116416.cljs$lang$applyTo = (function (arglist__116417){
var x = cljs.core.first(arglist__116417);
var y = cljs.core.first(cljs.core.next(arglist__116417));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116417)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116417)));
return G__116416__delegate.call(this, x, y, z, args);
});
return G__116416;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__116410.call(this);
case  1 :
return sp2__116411.call(this,x);
case  2 :
return sp2__116412.call(this,x,y);
case  3 :
return sp2__116413.call(this,x,y,z);
default:
return sp2__116414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__116414.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__116399 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__116418 = (function (){
return null;
});
var sp3__116419 = (function (x){
var or__3548__auto____116374 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____116374))
{return or__3548__auto____116374;
} else
{var or__3548__auto____116375 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____116375))
{return or__3548__auto____116375;
} else
{return p3.call(null,x);
}
}
});
var sp3__116420 = (function (x,y){
var or__3548__auto____116376 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____116376))
{return or__3548__auto____116376;
} else
{var or__3548__auto____116377 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____116377))
{return or__3548__auto____116377;
} else
{var or__3548__auto____116378 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____116378))
{return or__3548__auto____116378;
} else
{var or__3548__auto____116379 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____116379))
{return or__3548__auto____116379;
} else
{var or__3548__auto____116380 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____116380))
{return or__3548__auto____116380;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__116421 = (function (x,y,z){
var or__3548__auto____116381 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____116381))
{return or__3548__auto____116381;
} else
{var or__3548__auto____116382 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____116382))
{return or__3548__auto____116382;
} else
{var or__3548__auto____116383 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____116383))
{return or__3548__auto____116383;
} else
{var or__3548__auto____116384 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____116384))
{return or__3548__auto____116384;
} else
{var or__3548__auto____116385 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____116385))
{return or__3548__auto____116385;
} else
{var or__3548__auto____116386 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____116386))
{return or__3548__auto____116386;
} else
{var or__3548__auto____116387 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____116387))
{return or__3548__auto____116387;
} else
{var or__3548__auto____116388 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____116388))
{return or__3548__auto____116388;
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
var sp3__116422 = (function() { 
var G__116424__delegate = function (x,y,z,args){
var or__3548__auto____116389 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____116389))
{return or__3548__auto____116389;
} else
{return cljs.core.some.call(null,(function (p1__116276_SHARP_){
var or__3548__auto____116390 = p1.call(null,p1__116276_SHARP_);

if(cljs.core.truth_(or__3548__auto____116390))
{return or__3548__auto____116390;
} else
{var or__3548__auto____116391 = p2.call(null,p1__116276_SHARP_);

if(cljs.core.truth_(or__3548__auto____116391))
{return or__3548__auto____116391;
} else
{return p3.call(null,p1__116276_SHARP_);
}
}
}),args);
}
};
var G__116424 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116424__delegate.call(this, x, y, z, args);
};
G__116424.cljs$lang$maxFixedArity = 3;
G__116424.cljs$lang$applyTo = (function (arglist__116425){
var x = cljs.core.first(arglist__116425);
var y = cljs.core.first(cljs.core.next(arglist__116425));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116425)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116425)));
return G__116424__delegate.call(this, x, y, z, args);
});
return G__116424;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__116418.call(this);
case  1 :
return sp3__116419.call(this,x);
case  2 :
return sp3__116420.call(this,x,y);
case  3 :
return sp3__116421.call(this,x,y,z);
default:
return sp3__116422.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__116422.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__116400 = (function() { 
var G__116426__delegate = function (p1,p2,p3,ps){
var ps__116392 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__116427 = (function (){
return null;
});
var spn__116428 = (function (x){
return cljs.core.some.call(null,(function (p1__116277_SHARP_){
return p1__116277_SHARP_.call(null,x);
}),ps__116392);
});
var spn__116429 = (function (x,y){
return cljs.core.some.call(null,(function (p1__116278_SHARP_){
var or__3548__auto____116393 = p1__116278_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____116393))
{return or__3548__auto____116393;
} else
{return p1__116278_SHARP_.call(null,y);
}
}),ps__116392);
});
var spn__116430 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__116279_SHARP_){
var or__3548__auto____116394 = p1__116279_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____116394))
{return or__3548__auto____116394;
} else
{var or__3548__auto____116395 = p1__116279_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____116395))
{return or__3548__auto____116395;
} else
{return p1__116279_SHARP_.call(null,z);
}
}
}),ps__116392);
});
var spn__116431 = (function() { 
var G__116433__delegate = function (x,y,z,args){
var or__3548__auto____116396 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____116396))
{return or__3548__auto____116396;
} else
{return cljs.core.some.call(null,(function (p1__116280_SHARP_){
return cljs.core.some.call(null,p1__116280_SHARP_,args);
}),ps__116392);
}
};
var G__116433 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116433__delegate.call(this, x, y, z, args);
};
G__116433.cljs$lang$maxFixedArity = 3;
G__116433.cljs$lang$applyTo = (function (arglist__116434){
var x = cljs.core.first(arglist__116434);
var y = cljs.core.first(cljs.core.next(arglist__116434));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116434)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116434)));
return G__116433__delegate.call(this, x, y, z, args);
});
return G__116433;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__116427.call(this);
case  1 :
return spn__116428.call(this,x);
case  2 :
return spn__116429.call(this,x,y);
case  3 :
return spn__116430.call(this,x,y,z);
default:
return spn__116431.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__116431.cljs$lang$applyTo;
return spn;
})()
};
var G__116426 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116426__delegate.call(this, p1, p2, p3, ps);
};
G__116426.cljs$lang$maxFixedArity = 3;
G__116426.cljs$lang$applyTo = (function (arglist__116435){
var p1 = cljs.core.first(arglist__116435);
var p2 = cljs.core.first(cljs.core.next(arglist__116435));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116435)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116435)));
return G__116426__delegate.call(this, p1, p2, p3, ps);
});
return G__116426;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__116397.call(this,p1);
case  2 :
return some_fn__116398.call(this,p1,p2);
case  3 :
return some_fn__116399.call(this,p1,p2,p3);
default:
return some_fn__116400.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__116400.cljs$lang$applyTo;
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
var map__116448 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____116436 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____116436))
{var s__116437 = temp__3698__auto____116436;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__116437)),map.call(null,f,cljs.core.rest.call(null,s__116437)));
} else
{return null;
}
})));
});
var map__116449 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__116438 = cljs.core.seq.call(null,c1);
var s2__116439 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____116440 = s1__116438;

if(cljs.core.truth_(and__3546__auto____116440))
{return s2__116439;
} else
{return and__3546__auto____116440;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__116438),cljs.core.first.call(null,s2__116439)),map.call(null,f,cljs.core.rest.call(null,s1__116438),cljs.core.rest.call(null,s2__116439)));
} else
{return null;
}
})));
});
var map__116450 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__116441 = cljs.core.seq.call(null,c1);
var s2__116442 = cljs.core.seq.call(null,c2);
var s3__116443 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____116444 = s1__116441;

if(cljs.core.truth_(and__3546__auto____116444))
{var and__3546__auto____116445 = s2__116442;

if(cljs.core.truth_(and__3546__auto____116445))
{return s3__116443;
} else
{return and__3546__auto____116445;
}
} else
{return and__3546__auto____116444;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__116441),cljs.core.first.call(null,s2__116442),cljs.core.first.call(null,s3__116443)),map.call(null,f,cljs.core.rest.call(null,s1__116441),cljs.core.rest.call(null,s2__116442),cljs.core.rest.call(null,s3__116443)));
} else
{return null;
}
})));
});
var map__116451 = (function() { 
var G__116453__delegate = function (f,c1,c2,c3,colls){
var step__116447 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__116446 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__116446)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__116446),step.call(null,map.call(null,cljs.core.rest,ss__116446)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__116358_SHARP_){
return cljs.core.apply.call(null,f,p1__116358_SHARP_);
}),step__116447.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__116453 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__116453__delegate.call(this, f, c1, c2, c3, colls);
};
G__116453.cljs$lang$maxFixedArity = 4;
G__116453.cljs$lang$applyTo = (function (arglist__116454){
var f = cljs.core.first(arglist__116454);
var c1 = cljs.core.first(cljs.core.next(arglist__116454));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116454)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__116454))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__116454))));
return G__116453__delegate.call(this, f, c1, c2, c3, colls);
});
return G__116453;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__116448.call(this,f,c1);
case  3 :
return map__116449.call(this,f,c1,c2);
case  4 :
return map__116450.call(this,f,c1,c2,c3);
default:
return map__116451.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__116451.cljs$lang$applyTo;
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
{var temp__3698__auto____116455 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____116455))
{var s__116456 = temp__3698__auto____116455;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__116456),take.call(null,(n - 1),cljs.core.rest.call(null,s__116456)));
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
var step__116459 = (function (n,coll){
while(true){
var s__116457 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____116458 = (n > 0);

if(cljs.core.truth_(and__3546__auto____116458))
{return s__116457;
} else
{return and__3546__auto____116458;
}
})()))
{{
var G__116460 = (n - 1);
var G__116461 = cljs.core.rest.call(null,s__116457);
n = G__116460;
coll = G__116461;
continue;
}
} else
{return s__116457;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__116459.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__116462 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__116463 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__116462.call(this,n);
case  2 :
return drop_last__116463.call(this,n,s);
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
var s__116465 = cljs.core.seq.call(null,coll);
var lead__116466 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__116466))
{{
var G__116467 = cljs.core.next.call(null,s__116465);
var G__116468 = cljs.core.next.call(null,lead__116466);
s__116465 = G__116467;
lead__116466 = G__116468;
continue;
}
} else
{return s__116465;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__116471 = (function (pred,coll){
while(true){
var s__116469 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____116470 = s__116469;

if(cljs.core.truth_(and__3546__auto____116470))
{return pred.call(null,cljs.core.first.call(null,s__116469));
} else
{return and__3546__auto____116470;
}
})()))
{{
var G__116472 = pred;
var G__116473 = cljs.core.rest.call(null,s__116469);
pred = G__116472;
coll = G__116473;
continue;
}
} else
{return s__116469;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__116471.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____116474 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____116474))
{var s__116475 = temp__3698__auto____116474;

return cljs.core.concat.call(null,s__116475,cycle.call(null,s__116475));
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
var repeat__116476 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__116477 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__116476.call(this,n);
case  2 :
return repeat__116477.call(this,n,x);
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
var repeatedly__116479 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__116480 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__116479.call(this,n);
case  2 :
return repeatedly__116480.call(this,n,f);
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
var interleave__116486 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__116482 = cljs.core.seq.call(null,c1);
var s2__116483 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____116484 = s1__116482;

if(cljs.core.truth_(and__3546__auto____116484))
{return s2__116483;
} else
{return and__3546__auto____116484;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__116482),cljs.core.cons.call(null,cljs.core.first.call(null,s2__116483),interleave.call(null,cljs.core.rest.call(null,s1__116482),cljs.core.rest.call(null,s2__116483))));
} else
{return null;
}
})));
});
var interleave__116487 = (function() { 
var G__116489__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__116485 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__116485)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__116485),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__116485)));
} else
{return null;
}
})));
};
var G__116489 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__116489__delegate.call(this, c1, c2, colls);
};
G__116489.cljs$lang$maxFixedArity = 2;
G__116489.cljs$lang$applyTo = (function (arglist__116490){
var c1 = cljs.core.first(arglist__116490);
var c2 = cljs.core.first(cljs.core.next(arglist__116490));
var colls = cljs.core.rest(cljs.core.next(arglist__116490));
return G__116489__delegate.call(this, c1, c2, colls);
});
return G__116489;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__116486.call(this,c1,c2);
default:
return interleave__116487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__116487.cljs$lang$applyTo;
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
var cat__116493 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____116491 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____116491))
{var coll__116492 = temp__3695__auto____116491;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__116492),cat.call(null,cljs.core.rest.call(null,coll__116492),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__116493.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__116494 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__116495 = (function() { 
var G__116497__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__116497 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__116497__delegate.call(this, f, coll, colls);
};
G__116497.cljs$lang$maxFixedArity = 2;
G__116497.cljs$lang$applyTo = (function (arglist__116498){
var f = cljs.core.first(arglist__116498);
var coll = cljs.core.first(cljs.core.next(arglist__116498));
var colls = cljs.core.rest(cljs.core.next(arglist__116498));
return G__116497__delegate.call(this, f, coll, colls);
});
return G__116497;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__116494.call(this,f,coll);
default:
return mapcat__116495.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__116495.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____116499 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____116499))
{var s__116500 = temp__3698__auto____116499;

var f__116501 = cljs.core.first.call(null,s__116500);
var r__116502 = cljs.core.rest.call(null,s__116500);

if(cljs.core.truth_(pred.call(null,f__116501)))
{return cljs.core.cons.call(null,f__116501,filter.call(null,pred,r__116502));
} else
{return filter.call(null,pred,r__116502);
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
var walk__116504 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__116504.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__116503_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__116503_SHARP_));
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
var partition__116511 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__116512 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____116505 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____116505))
{var s__116506 = temp__3698__auto____116505;

var p__116507 = cljs.core.take.call(null,n,s__116506);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__116507))))
{return cljs.core.cons.call(null,p__116507,partition.call(null,n,step,cljs.core.drop.call(null,step,s__116506)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__116513 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____116508 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____116508))
{var s__116509 = temp__3698__auto____116508;

var p__116510 = cljs.core.take.call(null,n,s__116509);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__116510))))
{return cljs.core.cons.call(null,p__116510,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__116509)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__116510,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__116511.call(this,n,step);
case  3 :
return partition__116512.call(this,n,step,pad);
case  4 :
return partition__116513.call(this,n,step,pad,coll);
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
var get_in__116519 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__116520 = (function (m,ks,not_found){
var sentinel__116515 = cljs.core.lookup_sentinel;
var m__116516 = m;
var ks__116517 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__116517))
{var m__116518 = cljs.core.get.call(null,m__116516,cljs.core.first.call(null,ks__116517),sentinel__116515);

if(cljs.core.truth_((sentinel__116515 === m__116518)))
{return not_found;
} else
{{
var G__116522 = sentinel__116515;
var G__116523 = m__116518;
var G__116524 = cljs.core.next.call(null,ks__116517);
sentinel__116515 = G__116522;
m__116516 = G__116523;
ks__116517 = G__116524;
continue;
}
}
} else
{return m__116516;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__116519.call(this,m,ks);
case  3 :
return get_in__116520.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__116525,v){
var vec__116526__116527 = p__116525;
var k__116528 = cljs.core.nth.call(null,vec__116526__116527,0,null);
var ks__116529 = cljs.core.nthnext.call(null,vec__116526__116527,1);

if(cljs.core.truth_(ks__116529))
{return cljs.core.assoc.call(null,m,k__116528,assoc_in.call(null,cljs.core.get.call(null,m,k__116528),ks__116529,v));
} else
{return cljs.core.assoc.call(null,m,k__116528,v);
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
var update_in__delegate = function (m,p__116530,f,args){
var vec__116531__116532 = p__116530;
var k__116533 = cljs.core.nth.call(null,vec__116531__116532,0,null);
var ks__116534 = cljs.core.nthnext.call(null,vec__116531__116532,1);

if(cljs.core.truth_(ks__116534))
{return cljs.core.assoc.call(null,m,k__116533,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__116533),ks__116534,f,args));
} else
{return cljs.core.assoc.call(null,m,k__116533,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__116533),args));
}
};
var update_in = function (m,p__116530,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__116530, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__116535){
var m = cljs.core.first(arglist__116535);
var p__116530 = cljs.core.first(cljs.core.next(arglist__116535));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116535)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116535)));
return update_in__delegate.call(this, m, p__116530, f, args);
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
var this__116536 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__116569 = null;
var G__116569__116570 = (function (coll,k){
var this__116537 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__116569__116571 = (function (coll,k,not_found){
var this__116538 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__116569 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__116569__116570.call(this,coll,k);
case  3 :
return G__116569__116571.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116569;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__116539 = this;
var new_array__116540 = cljs.core.aclone.call(null,this__116539.array);

(new_array__116540[k] = v);
return (new cljs.core.Vector(this__116539.meta,new_array__116540));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__116573 = null;
var G__116573__116574 = (function (tsym116541,k){
var this__116543 = this;
var tsym116541__116544 = this;

var coll__116545 = tsym116541__116544;

return cljs.core._lookup.call(null,coll__116545,k);
});
var G__116573__116575 = (function (tsym116542,k,not_found){
var this__116546 = this;
var tsym116542__116547 = this;

var coll__116548 = tsym116542__116547;

return cljs.core._lookup.call(null,coll__116548,k,not_found);
});
G__116573 = function(tsym116542,k,not_found){
switch(arguments.length){
case  2 :
return G__116573__116574.call(this,tsym116542,k);
case  3 :
return G__116573__116575.call(this,tsym116542,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116573;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__116549 = this;
var new_array__116550 = cljs.core.aclone.call(null,this__116549.array);

new_array__116550.push(o);
return (new cljs.core.Vector(this__116549.meta,new_array__116550));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__116577 = null;
var G__116577__116578 = (function (v,f){
var this__116551 = this;
return cljs.core.ci_reduce.call(null,this__116551.array,f);
});
var G__116577__116579 = (function (v,f,start){
var this__116552 = this;
return cljs.core.ci_reduce.call(null,this__116552.array,f,start);
});
G__116577 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__116577__116578.call(this,v,f);
case  3 :
return G__116577__116579.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116577;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__116553 = this;
if(cljs.core.truth_((this__116553.array.length > 0)))
{var vector_seq__116554 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__116553.array.length)))
{return cljs.core.cons.call(null,(this__116553.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__116554.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__116555 = this;
return this__116555.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__116556 = this;
var count__116557 = this__116556.array.length;

if(cljs.core.truth_((count__116557 > 0)))
{return (this__116556.array[(count__116557 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__116558 = this;
if(cljs.core.truth_((this__116558.array.length > 0)))
{var new_array__116559 = cljs.core.aclone.call(null,this__116558.array);

new_array__116559.pop();
return (new cljs.core.Vector(this__116558.meta,new_array__116559));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__116560 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__116561 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__116562 = this;
return (new cljs.core.Vector(meta,this__116562.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__116563 = this;
return this__116563.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__116581 = null;
var G__116581__116582 = (function (coll,n){
var this__116564 = this;
if(cljs.core.truth_((function (){var and__3546__auto____116565 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____116565))
{return (n < this__116564.array.length);
} else
{return and__3546__auto____116565;
}
})()))
{return (this__116564.array[n]);
} else
{return null;
}
});
var G__116581__116583 = (function (coll,n,not_found){
var this__116566 = this;
if(cljs.core.truth_((function (){var and__3546__auto____116567 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____116567))
{return (n < this__116566.array.length);
} else
{return and__3546__auto____116567;
}
})()))
{return (this__116566.array[n]);
} else
{return not_found;
}
});
G__116581 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__116581__116582.call(this,coll,n);
case  3 :
return G__116581__116583.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116581;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__116568 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__116568.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__116585 = pv.cnt;

if(cljs.core.truth_((cnt__116585 < 32)))
{return 0;
} else
{return (((cnt__116585 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__116586 = level;
var ret__116587 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__116586)))
{return ret__116587;
} else
{var embed__116588 = ret__116587;
var r__116589 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___116590 = (r__116589[0] = embed__116588);

{
var G__116591 = (ll__116586 - 5);
var G__116592 = r__116589;
ll__116586 = G__116591;
ret__116587 = G__116592;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__116593 = cljs.core.aclone.call(null,parent);
var subidx__116594 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__116593[subidx__116594] = tailnode);
return ret__116593;
} else
{var temp__3695__auto____116595 = (parent[subidx__116594]);

if(cljs.core.truth_(temp__3695__auto____116595))
{var child__116596 = temp__3695__auto____116595;

var node_to_insert__116597 = push_tail.call(null,pv,(level - 5),child__116596,tailnode);
var ___116598 = (ret__116593[subidx__116594] = node_to_insert__116597);

return ret__116593;
} else
{var node_to_insert__116599 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___116600 = (ret__116593[subidx__116594] = node_to_insert__116599);

return ret__116593;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____116601 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____116601))
{return (i < pv.cnt);
} else
{return and__3546__auto____116601;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__116602 = pv.root;
var level__116603 = pv.shift;

while(true){
if(cljs.core.truth_((level__116603 > 0)))
{{
var G__116604 = (node__116602[((i >> level__116603) & 31)]);
var G__116605 = (level__116603 - 5);
node__116602 = G__116604;
level__116603 = G__116605;
continue;
}
} else
{return node__116602;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__116606 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__116606[(i & 31)] = val);
return ret__116606;
} else
{var subidx__116607 = ((i >> level) & 31);
var ___116608 = (ret__116606[subidx__116607] = do_assoc.call(null,pv,(level - 5),(node[subidx__116607]),i,val));

return ret__116606;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__116609 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__116610 = pop_tail.call(null,pv,(level - 5),(node[subidx__116609]));

if(cljs.core.truth_((function (){var and__3546__auto____116611 = (new_child__116610 === null);

if(cljs.core.truth_(and__3546__auto____116611))
{return (subidx__116609 === 0);
} else
{return and__3546__auto____116611;
}
})()))
{return null;
} else
{var ret__116612 = cljs.core.aclone.call(null,node);
var ___116613 = (ret__116612[subidx__116609] = new_child__116610);

return ret__116612;
}
} else
{if(cljs.core.truth_((subidx__116609 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__116614 = cljs.core.aclone.call(null,node);
var ___116615 = (ret__116614[subidx__116609] = null);

return ret__116614;
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
var this__116616 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__116656 = null;
var G__116656__116657 = (function (coll,k){
var this__116617 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__116656__116658 = (function (coll,k,not_found){
var this__116618 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__116656 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__116656__116657.call(this,coll,k);
case  3 :
return G__116656__116658.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116656;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__116619 = this;
if(cljs.core.truth_((function (){var and__3546__auto____116620 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____116620))
{return (k < this__116619.cnt);
} else
{return and__3546__auto____116620;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__116621 = cljs.core.aclone.call(null,this__116619.tail);

(new_tail__116621[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__116619.meta,this__116619.cnt,this__116619.shift,this__116619.root,new_tail__116621));
} else
{return (new cljs.core.PersistentVector(this__116619.meta,this__116619.cnt,this__116619.shift,cljs.core.do_assoc.call(null,coll,this__116619.shift,this__116619.root,k,v),this__116619.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__116619.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__116619.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__116660 = null;
var G__116660__116661 = (function (tsym116622,k){
var this__116624 = this;
var tsym116622__116625 = this;

var coll__116626 = tsym116622__116625;

return cljs.core._lookup.call(null,coll__116626,k);
});
var G__116660__116662 = (function (tsym116623,k,not_found){
var this__116627 = this;
var tsym116623__116628 = this;

var coll__116629 = tsym116623__116628;

return cljs.core._lookup.call(null,coll__116629,k,not_found);
});
G__116660 = function(tsym116623,k,not_found){
switch(arguments.length){
case  2 :
return G__116660__116661.call(this,tsym116623,k);
case  3 :
return G__116660__116662.call(this,tsym116623,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116660;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__116630 = this;
if(cljs.core.truth_(((this__116630.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__116631 = cljs.core.aclone.call(null,this__116630.tail);

new_tail__116631.push(o);
return (new cljs.core.PersistentVector(this__116630.meta,(this__116630.cnt + 1),this__116630.shift,this__116630.root,new_tail__116631));
} else
{var root_overflow_QMARK___116632 = ((this__116630.cnt >> 5) > (1 << this__116630.shift));
var new_shift__116633 = (cljs.core.truth_(root_overflow_QMARK___116632)?(this__116630.shift + 5):this__116630.shift);
var new_root__116635 = (cljs.core.truth_(root_overflow_QMARK___116632)?(function (){var n_r__116634 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__116634[0] = this__116630.root);
(n_r__116634[1] = cljs.core.new_path.call(null,this__116630.shift,this__116630.tail));
return n_r__116634;
})():cljs.core.push_tail.call(null,coll,this__116630.shift,this__116630.root,this__116630.tail));

return (new cljs.core.PersistentVector(this__116630.meta,(this__116630.cnt + 1),new_shift__116633,new_root__116635,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__116664 = null;
var G__116664__116665 = (function (v,f){
var this__116636 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__116664__116666 = (function (v,f,start){
var this__116637 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__116664 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__116664__116665.call(this,v,f);
case  3 :
return G__116664__116666.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116664;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__116638 = this;
if(cljs.core.truth_((this__116638.cnt > 0)))
{var vector_seq__116639 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__116638.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__116639.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__116640 = this;
return this__116640.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__116641 = this;
if(cljs.core.truth_((this__116641.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__116641.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__116642 = this;
if(cljs.core.truth_((this__116642.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__116642.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__116642.meta);
} else
{if(cljs.core.truth_((1 < (this__116642.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__116642.meta,(this__116642.cnt - 1),this__116642.shift,this__116642.root,cljs.core.aclone.call(null,this__116642.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__116643 = cljs.core.array_for.call(null,coll,(this__116642.cnt - 2));
var nr__116644 = cljs.core.pop_tail.call(null,this__116642.shift,this__116642.root);
var new_root__116645 = (cljs.core.truth_((nr__116644 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__116644);
var cnt_1__116646 = (this__116642.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____116647 = (5 < this__116642.shift);

if(cljs.core.truth_(and__3546__auto____116647))
{return ((new_root__116645[1]) === null);
} else
{return and__3546__auto____116647;
}
})()))
{return (new cljs.core.PersistentVector(this__116642.meta,cnt_1__116646,(this__116642.shift - 5),(new_root__116645[0]),new_tail__116643));
} else
{return (new cljs.core.PersistentVector(this__116642.meta,cnt_1__116646,this__116642.shift,new_root__116645,new_tail__116643));
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
var this__116648 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__116649 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__116650 = this;
return (new cljs.core.PersistentVector(meta,this__116650.cnt,this__116650.shift,this__116650.root,this__116650.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__116651 = this;
return this__116651.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__116668 = null;
var G__116668__116669 = (function (coll,n){
var this__116652 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__116668__116670 = (function (coll,n,not_found){
var this__116653 = this;
if(cljs.core.truth_((function (){var and__3546__auto____116654 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____116654))
{return (n < this__116653.cnt);
} else
{return and__3546__auto____116654;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__116668 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__116668__116669.call(this,coll,n);
case  3 :
return G__116668__116670.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116668;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__116655 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__116655.meta);
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
vector.cljs$lang$applyTo = (function (arglist__116672){
var args = cljs.core.seq( arglist__116672 );;
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
var this__116673 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__116701 = null;
var G__116701__116702 = (function (coll,k){
var this__116674 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__116701__116703 = (function (coll,k,not_found){
var this__116675 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__116701 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__116701__116702.call(this,coll,k);
case  3 :
return G__116701__116703.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116701;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__116676 = this;
var v_pos__116677 = (this__116676.start + key);

return (new cljs.core.Subvec(this__116676.meta,cljs.core._assoc.call(null,this__116676.v,v_pos__116677,val),this__116676.start,((this__116676.end > (v_pos__116677 + 1)) ? this__116676.end : (v_pos__116677 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__116705 = null;
var G__116705__116706 = (function (tsym116678,k){
var this__116680 = this;
var tsym116678__116681 = this;

var coll__116682 = tsym116678__116681;

return cljs.core._lookup.call(null,coll__116682,k);
});
var G__116705__116707 = (function (tsym116679,k,not_found){
var this__116683 = this;
var tsym116679__116684 = this;

var coll__116685 = tsym116679__116684;

return cljs.core._lookup.call(null,coll__116685,k,not_found);
});
G__116705 = function(tsym116679,k,not_found){
switch(arguments.length){
case  2 :
return G__116705__116706.call(this,tsym116679,k);
case  3 :
return G__116705__116707.call(this,tsym116679,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116705;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__116686 = this;
return (new cljs.core.Subvec(this__116686.meta,cljs.core._assoc_n.call(null,this__116686.v,this__116686.end,o),this__116686.start,(this__116686.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__116709 = null;
var G__116709__116710 = (function (coll,f){
var this__116687 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__116709__116711 = (function (coll,f,start){
var this__116688 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__116709 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__116709__116710.call(this,coll,f);
case  3 :
return G__116709__116711.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116709;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__116689 = this;
var subvec_seq__116690 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__116689.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__116689.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__116690.call(null,this__116689.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__116691 = this;
return (this__116691.end - this__116691.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__116692 = this;
return cljs.core._nth.call(null,this__116692.v,(this__116692.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__116693 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__116693.start,this__116693.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__116693.meta,this__116693.v,this__116693.start,(this__116693.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__116694 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__116695 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__116696 = this;
return (new cljs.core.Subvec(meta,this__116696.v,this__116696.start,this__116696.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__116697 = this;
return this__116697.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__116713 = null;
var G__116713__116714 = (function (coll,n){
var this__116698 = this;
return cljs.core._nth.call(null,this__116698.v,(this__116698.start + n));
});
var G__116713__116715 = (function (coll,n,not_found){
var this__116699 = this;
return cljs.core._nth.call(null,this__116699.v,(this__116699.start + n),not_found);
});
G__116713 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__116713__116714.call(this,coll,n);
case  3 :
return G__116713__116715.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116713;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__116700 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__116700.meta);
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
var subvec__116717 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__116718 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__116717.call(this,v,start);
case  3 :
return subvec__116718.call(this,v,start,end);
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
var this__116720 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__116721 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__116722 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__116723 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__116723.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__116724 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__116725 = this;
return cljs.core._first.call(null,this__116725.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__116726 = this;
var temp__3695__auto____116727 = cljs.core.next.call(null,this__116726.front);

if(cljs.core.truth_(temp__3695__auto____116727))
{var f1__116728 = temp__3695__auto____116727;

return (new cljs.core.PersistentQueueSeq(this__116726.meta,f1__116728,this__116726.rear));
} else
{if(cljs.core.truth_((this__116726.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__116726.meta,this__116726.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__116729 = this;
return this__116729.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__116730 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__116730.front,this__116730.rear));
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
var this__116731 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__116732 = this;
if(cljs.core.truth_(this__116732.front))
{return (new cljs.core.PersistentQueue(this__116732.meta,(this__116732.count + 1),this__116732.front,cljs.core.conj.call(null,(function (){var or__3548__auto____116733 = this__116732.rear;

if(cljs.core.truth_(or__3548__auto____116733))
{return or__3548__auto____116733;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__116732.meta,(this__116732.count + 1),cljs.core.conj.call(null,this__116732.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__116734 = this;
var rear__116735 = cljs.core.seq.call(null,this__116734.rear);

if(cljs.core.truth_((function (){var or__3548__auto____116736 = this__116734.front;

if(cljs.core.truth_(or__3548__auto____116736))
{return or__3548__auto____116736;
} else
{return rear__116735;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__116734.front,cljs.core.seq.call(null,rear__116735)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__116737 = this;
return this__116737.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__116738 = this;
return cljs.core._first.call(null,this__116738.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__116739 = this;
if(cljs.core.truth_(this__116739.front))
{var temp__3695__auto____116740 = cljs.core.next.call(null,this__116739.front);

if(cljs.core.truth_(temp__3695__auto____116740))
{var f1__116741 = temp__3695__auto____116740;

return (new cljs.core.PersistentQueue(this__116739.meta,(this__116739.count - 1),f1__116741,this__116739.rear));
} else
{return (new cljs.core.PersistentQueue(this__116739.meta,(this__116739.count - 1),cljs.core.seq.call(null,this__116739.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__116742 = this;
return cljs.core.first.call(null,this__116742.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__116743 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__116744 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__116745 = this;
return (new cljs.core.PersistentQueue(meta,this__116745.count,this__116745.front,this__116745.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__116746 = this;
return this__116746.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__116747 = this;
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
var this__116748 = this;
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
var len__116749 = array.length;

var i__116750 = 0;

while(true){
if(cljs.core.truth_((i__116750 < len__116749)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__116750]))))
{return i__116750;
} else
{{
var G__116751 = (i__116750 + incr);
i__116750 = G__116751;
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
var obj_map_contains_key_QMARK___116753 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___116754 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____116752 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____116752))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____116752;
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
return obj_map_contains_key_QMARK___116753.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___116754.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__116757 = cljs.core.hash.call(null,a);
var b__116758 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__116757 < b__116758)))
{return -1;
} else
{if(cljs.core.truth_((a__116757 > b__116758)))
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
var this__116759 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__116786 = null;
var G__116786__116787 = (function (coll,k){
var this__116760 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__116786__116788 = (function (coll,k,not_found){
var this__116761 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__116761.strobj,(this__116761.strobj[k]),not_found);
});
G__116786 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__116786__116787.call(this,coll,k);
case  3 :
return G__116786__116788.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116786;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__116762 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__116763 = goog.object.clone.call(null,this__116762.strobj);
var overwrite_QMARK___116764 = new_strobj__116763.hasOwnProperty(k);

(new_strobj__116763[k] = v);
if(cljs.core.truth_(overwrite_QMARK___116764))
{return (new cljs.core.ObjMap(this__116762.meta,this__116762.keys,new_strobj__116763));
} else
{var new_keys__116765 = cljs.core.aclone.call(null,this__116762.keys);

new_keys__116765.push(k);
return (new cljs.core.ObjMap(this__116762.meta,new_keys__116765,new_strobj__116763));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__116762.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__116766 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__116766.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__116790 = null;
var G__116790__116791 = (function (tsym116767,k){
var this__116769 = this;
var tsym116767__116770 = this;

var coll__116771 = tsym116767__116770;

return cljs.core._lookup.call(null,coll__116771,k);
});
var G__116790__116792 = (function (tsym116768,k,not_found){
var this__116772 = this;
var tsym116768__116773 = this;

var coll__116774 = tsym116768__116773;

return cljs.core._lookup.call(null,coll__116774,k,not_found);
});
G__116790 = function(tsym116768,k,not_found){
switch(arguments.length){
case  2 :
return G__116790__116791.call(this,tsym116768,k);
case  3 :
return G__116790__116792.call(this,tsym116768,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116790;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__116775 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__116776 = this;
if(cljs.core.truth_((this__116776.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__116756_SHARP_){
return cljs.core.vector.call(null,p1__116756_SHARP_,(this__116776.strobj[p1__116756_SHARP_]));
}),this__116776.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__116777 = this;
return this__116777.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__116778 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__116779 = this;
return (new cljs.core.ObjMap(meta,this__116779.keys,this__116779.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__116780 = this;
return this__116780.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__116781 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__116781.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__116782 = this;
if(cljs.core.truth_((function (){var and__3546__auto____116783 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____116783))
{return this__116782.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____116783;
}
})()))
{var new_keys__116784 = cljs.core.aclone.call(null,this__116782.keys);
var new_strobj__116785 = goog.object.clone.call(null,this__116782.strobj);

new_keys__116784.splice(cljs.core.scan_array.call(null,1,k,new_keys__116784),1);
cljs.core.js_delete.call(null,new_strobj__116785,k);
return (new cljs.core.ObjMap(this__116782.meta,new_keys__116784,new_strobj__116785));
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
var this__116795 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__116833 = null;
var G__116833__116834 = (function (coll,k){
var this__116796 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__116833__116835 = (function (coll,k,not_found){
var this__116797 = this;
var bucket__116798 = (this__116797.hashobj[cljs.core.hash.call(null,k)]);
var i__116799 = (cljs.core.truth_(bucket__116798)?cljs.core.scan_array.call(null,2,k,bucket__116798):null);

if(cljs.core.truth_(i__116799))
{return (bucket__116798[(i__116799 + 1)]);
} else
{return not_found;
}
});
G__116833 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__116833__116834.call(this,coll,k);
case  3 :
return G__116833__116835.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116833;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__116800 = this;
var h__116801 = cljs.core.hash.call(null,k);
var bucket__116802 = (this__116800.hashobj[h__116801]);

if(cljs.core.truth_(bucket__116802))
{var new_bucket__116803 = cljs.core.aclone.call(null,bucket__116802);
var new_hashobj__116804 = goog.object.clone.call(null,this__116800.hashobj);

(new_hashobj__116804[h__116801] = new_bucket__116803);
var temp__3695__auto____116805 = cljs.core.scan_array.call(null,2,k,new_bucket__116803);

if(cljs.core.truth_(temp__3695__auto____116805))
{var i__116806 = temp__3695__auto____116805;

(new_bucket__116803[(i__116806 + 1)] = v);
return (new cljs.core.HashMap(this__116800.meta,this__116800.count,new_hashobj__116804));
} else
{new_bucket__116803.push(k,v);
return (new cljs.core.HashMap(this__116800.meta,(this__116800.count + 1),new_hashobj__116804));
}
} else
{var new_hashobj__116807 = goog.object.clone.call(null,this__116800.hashobj);

(new_hashobj__116807[h__116801] = [k,v]);
return (new cljs.core.HashMap(this__116800.meta,(this__116800.count + 1),new_hashobj__116807));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__116808 = this;
var bucket__116809 = (this__116808.hashobj[cljs.core.hash.call(null,k)]);
var i__116810 = (cljs.core.truth_(bucket__116809)?cljs.core.scan_array.call(null,2,k,bucket__116809):null);

if(cljs.core.truth_(i__116810))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__116837 = null;
var G__116837__116838 = (function (tsym116811,k){
var this__116813 = this;
var tsym116811__116814 = this;

var coll__116815 = tsym116811__116814;

return cljs.core._lookup.call(null,coll__116815,k);
});
var G__116837__116839 = (function (tsym116812,k,not_found){
var this__116816 = this;
var tsym116812__116817 = this;

var coll__116818 = tsym116812__116817;

return cljs.core._lookup.call(null,coll__116818,k,not_found);
});
G__116837 = function(tsym116812,k,not_found){
switch(arguments.length){
case  2 :
return G__116837__116838.call(this,tsym116812,k);
case  3 :
return G__116837__116839.call(this,tsym116812,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116837;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__116819 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__116820 = this;
if(cljs.core.truth_((this__116820.count > 0)))
{var hashes__116821 = cljs.core.js_keys.call(null,this__116820.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__116794_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__116820.hashobj[p1__116794_SHARP_])));
}),hashes__116821);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__116822 = this;
return this__116822.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__116823 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__116824 = this;
return (new cljs.core.HashMap(meta,this__116824.count,this__116824.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__116825 = this;
return this__116825.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__116826 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__116826.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__116827 = this;
var h__116828 = cljs.core.hash.call(null,k);
var bucket__116829 = (this__116827.hashobj[h__116828]);
var i__116830 = (cljs.core.truth_(bucket__116829)?cljs.core.scan_array.call(null,2,k,bucket__116829):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__116830)))
{return coll;
} else
{var new_hashobj__116831 = goog.object.clone.call(null,this__116827.hashobj);

if(cljs.core.truth_((3 > bucket__116829.length)))
{cljs.core.js_delete.call(null,new_hashobj__116831,h__116828);
} else
{var new_bucket__116832 = cljs.core.aclone.call(null,bucket__116829);

new_bucket__116832.splice(i__116830,2);
(new_hashobj__116831[h__116828] = new_bucket__116832);
}
return (new cljs.core.HashMap(this__116827.meta,(this__116827.count - 1),new_hashobj__116831));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__116841 = ks.length;

var i__116842 = 0;
var out__116843 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__116842 < len__116841)))
{{
var G__116844 = (i__116842 + 1);
var G__116845 = cljs.core.assoc.call(null,out__116843,(ks[i__116842]),(vs[i__116842]));
i__116842 = G__116844;
out__116843 = G__116845;
continue;
}
} else
{return out__116843;
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
var in$__116846 = cljs.core.seq.call(null,keyvals);
var out__116847 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__116846))
{{
var G__116848 = cljs.core.nnext.call(null,in$__116846);
var G__116849 = cljs.core.assoc.call(null,out__116847,cljs.core.first.call(null,in$__116846),cljs.core.second.call(null,in$__116846));
in$__116846 = G__116848;
out__116847 = G__116849;
continue;
}
} else
{return out__116847;
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
hash_map.cljs$lang$applyTo = (function (arglist__116850){
var keyvals = cljs.core.seq( arglist__116850 );;
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
{return cljs.core.reduce.call(null,(function (p1__116851_SHARP_,p2__116852_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____116853 = p1__116851_SHARP_;

if(cljs.core.truth_(or__3548__auto____116853))
{return or__3548__auto____116853;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__116852_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__116854){
var maps = cljs.core.seq( arglist__116854 );;
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
{var merge_entry__116857 = (function (m,e){
var k__116855 = cljs.core.first.call(null,e);
var v__116856 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__116855)))
{return cljs.core.assoc.call(null,m,k__116855,f.call(null,cljs.core.get.call(null,m,k__116855),v__116856));
} else
{return cljs.core.assoc.call(null,m,k__116855,v__116856);
}
});
var merge2__116859 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__116857,(function (){var or__3548__auto____116858 = m1;

if(cljs.core.truth_(or__3548__auto____116858))
{return or__3548__auto____116858;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__116859,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__116860){
var f = cljs.core.first(arglist__116860);
var maps = cljs.core.rest(arglist__116860);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__116862 = cljs.core.ObjMap.fromObject([],{});
var keys__116863 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__116863))
{var key__116864 = cljs.core.first.call(null,keys__116863);
var entry__116865 = cljs.core.get.call(null,map,key__116864,"\uFDD0'user/not-found");

{
var G__116866 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__116865,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__116862,key__116864,entry__116865):ret__116862);
var G__116867 = cljs.core.next.call(null,keys__116863);
ret__116862 = G__116866;
keys__116863 = G__116867;
continue;
}
} else
{return ret__116862;
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
var this__116868 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__116889 = null;
var G__116889__116890 = (function (coll,v){
var this__116869 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__116889__116891 = (function (coll,v,not_found){
var this__116870 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__116870.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__116889 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__116889__116890.call(this,coll,v);
case  3 :
return G__116889__116891.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116889;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__116893 = null;
var G__116893__116894 = (function (tsym116871,k){
var this__116873 = this;
var tsym116871__116874 = this;

var coll__116875 = tsym116871__116874;

return cljs.core._lookup.call(null,coll__116875,k);
});
var G__116893__116895 = (function (tsym116872,k,not_found){
var this__116876 = this;
var tsym116872__116877 = this;

var coll__116878 = tsym116872__116877;

return cljs.core._lookup.call(null,coll__116878,k,not_found);
});
G__116893 = function(tsym116872,k,not_found){
switch(arguments.length){
case  2 :
return G__116893__116894.call(this,tsym116872,k);
case  3 :
return G__116893__116895.call(this,tsym116872,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116893;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__116879 = this;
return (new cljs.core.Set(this__116879.meta,cljs.core.assoc.call(null,this__116879.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__116880 = this;
return cljs.core.keys.call(null,this__116880.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__116881 = this;
return (new cljs.core.Set(this__116881.meta,cljs.core.dissoc.call(null,this__116881.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__116882 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__116883 = this;
var and__3546__auto____116884 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____116884))
{var and__3546__auto____116885 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____116885))
{return cljs.core.every_QMARK_.call(null,(function (p1__116861_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__116861_SHARP_);
}),other);
} else
{return and__3546__auto____116885;
}
} else
{return and__3546__auto____116884;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__116886 = this;
return (new cljs.core.Set(meta,this__116886.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__116887 = this;
return this__116887.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__116888 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__116888.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__116898 = cljs.core.seq.call(null,coll);
var out__116899 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__116898))))
{{
var G__116900 = cljs.core.rest.call(null,in$__116898);
var G__116901 = cljs.core.conj.call(null,out__116899,cljs.core.first.call(null,in$__116898));
in$__116898 = G__116900;
out__116899 = G__116901;
continue;
}
} else
{return out__116899;
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
{var n__116902 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____116903 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____116903))
{var e__116904 = temp__3695__auto____116903;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__116904));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__116902,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__116897_SHARP_){
var temp__3695__auto____116905 = cljs.core.find.call(null,smap,p1__116897_SHARP_);

if(cljs.core.truth_(temp__3695__auto____116905))
{var e__116906 = temp__3695__auto____116905;

return cljs.core.second.call(null,e__116906);
} else
{return p1__116897_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__116914 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__116907,seen){
while(true){
var vec__116908__116909 = p__116907;
var f__116910 = cljs.core.nth.call(null,vec__116908__116909,0,null);
var xs__116911 = vec__116908__116909;

var temp__3698__auto____116912 = cljs.core.seq.call(null,xs__116911);

if(cljs.core.truth_(temp__3698__auto____116912))
{var s__116913 = temp__3698__auto____116912;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__116910)))
{{
var G__116915 = cljs.core.rest.call(null,s__116913);
var G__116916 = seen;
p__116907 = G__116915;
seen = G__116916;
continue;
}
} else
{return cljs.core.cons.call(null,f__116910,step.call(null,cljs.core.rest.call(null,s__116913),cljs.core.conj.call(null,seen,f__116910)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__116914.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__116917 = cljs.core.PersistentVector.fromArray([]);
var s__116918 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__116918)))
{{
var G__116919 = cljs.core.conj.call(null,ret__116917,cljs.core.first.call(null,s__116918));
var G__116920 = cljs.core.next.call(null,s__116918);
ret__116917 = G__116919;
s__116918 = G__116920;
continue;
}
} else
{return cljs.core.seq.call(null,ret__116917);
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
{if(cljs.core.truth_((function (){var or__3548__auto____116921 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____116921))
{return or__3548__auto____116921;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__116922 = x.lastIndexOf("/");

if(cljs.core.truth_((i__116922 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__116922 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____116923 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____116923))
{return or__3548__auto____116923;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__116924 = x.lastIndexOf("/");

if(cljs.core.truth_((i__116924 > -1)))
{return cljs.core.subs.call(null,x,2,i__116924);
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
var map__116927 = cljs.core.ObjMap.fromObject([],{});
var ks__116928 = cljs.core.seq.call(null,keys);
var vs__116929 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____116930 = ks__116928;

if(cljs.core.truth_(and__3546__auto____116930))
{return vs__116929;
} else
{return and__3546__auto____116930;
}
})()))
{{
var G__116931 = cljs.core.assoc.call(null,map__116927,cljs.core.first.call(null,ks__116928),cljs.core.first.call(null,vs__116929));
var G__116932 = cljs.core.next.call(null,ks__116928);
var G__116933 = cljs.core.next.call(null,vs__116929);
map__116927 = G__116931;
ks__116928 = G__116932;
vs__116929 = G__116933;
continue;
}
} else
{return map__116927;
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
var max_key__116936 = (function (k,x){
return x;
});
var max_key__116937 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__116938 = (function() { 
var G__116940__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__116925_SHARP_,p2__116926_SHARP_){
return max_key.call(null,k,p1__116925_SHARP_,p2__116926_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__116940 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116940__delegate.call(this, k, x, y, more);
};
G__116940.cljs$lang$maxFixedArity = 3;
G__116940.cljs$lang$applyTo = (function (arglist__116941){
var k = cljs.core.first(arglist__116941);
var x = cljs.core.first(cljs.core.next(arglist__116941));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116941)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116941)));
return G__116940__delegate.call(this, k, x, y, more);
});
return G__116940;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__116936.call(this,k,x);
case  3 :
return max_key__116937.call(this,k,x,y);
default:
return max_key__116938.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__116938.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__116942 = (function (k,x){
return x;
});
var min_key__116943 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__116944 = (function() { 
var G__116946__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__116934_SHARP_,p2__116935_SHARP_){
return min_key.call(null,k,p1__116934_SHARP_,p2__116935_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__116946 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__116946__delegate.call(this, k, x, y, more);
};
G__116946.cljs$lang$maxFixedArity = 3;
G__116946.cljs$lang$applyTo = (function (arglist__116947){
var k = cljs.core.first(arglist__116947);
var x = cljs.core.first(cljs.core.next(arglist__116947));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__116947)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__116947)));
return G__116946__delegate.call(this, k, x, y, more);
});
return G__116946;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__116942.call(this,k,x);
case  3 :
return min_key__116943.call(this,k,x,y);
default:
return min_key__116944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__116944.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__116950 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__116951 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____116948 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____116948))
{var s__116949 = temp__3698__auto____116948;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__116949),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__116949)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__116950.call(this,n,step);
case  3 :
return partition_all__116951.call(this,n,step,coll);
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
var temp__3698__auto____116953 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____116953))
{var s__116954 = temp__3698__auto____116953;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__116954))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__116954),take_while.call(null,pred,cljs.core.rest.call(null,s__116954)));
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
var this__116955 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__116956 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__116972 = null;
var G__116972__116973 = (function (rng,f){
var this__116957 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__116972__116974 = (function (rng,f,s){
var this__116958 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__116972 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__116972__116973.call(this,rng,f);
case  3 :
return G__116972__116974.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116972;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__116959 = this;
var comp__116960 = (cljs.core.truth_((this__116959.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__116960.call(null,this__116959.start,this__116959.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__116961 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__116961.end - this__116961.start) / this__116961.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__116962 = this;
return this__116962.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__116963 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__116963.meta,(this__116963.start + this__116963.step),this__116963.end,this__116963.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__116964 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__116965 = this;
return (new cljs.core.Range(meta,this__116965.start,this__116965.end,this__116965.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__116966 = this;
return this__116966.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__116976 = null;
var G__116976__116977 = (function (rng,n){
var this__116967 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__116967.start + (n * this__116967.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____116968 = (this__116967.start > this__116967.end);

if(cljs.core.truth_(and__3546__auto____116968))
{return cljs.core._EQ_.call(null,this__116967.step,0);
} else
{return and__3546__auto____116968;
}
})()))
{return this__116967.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__116976__116978 = (function (rng,n,not_found){
var this__116969 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__116969.start + (n * this__116969.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____116970 = (this__116969.start > this__116969.end);

if(cljs.core.truth_(and__3546__auto____116970))
{return cljs.core._EQ_.call(null,this__116969.step,0);
} else
{return and__3546__auto____116970;
}
})()))
{return this__116969.start;
} else
{return not_found;
}
}
});
G__116976 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__116976__116977.call(this,rng,n);
case  3 :
return G__116976__116978.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__116976;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__116971 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__116971.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__116980 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__116981 = (function (end){
return range.call(null,0,end,1);
});
var range__116982 = (function (start,end){
return range.call(null,start,end,1);
});
var range__116983 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__116980.call(this);
case  1 :
return range__116981.call(this,start);
case  2 :
return range__116982.call(this,start,end);
case  3 :
return range__116983.call(this,start,end,step);
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
var temp__3698__auto____116985 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____116985))
{var s__116986 = temp__3698__auto____116985;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__116986),take_nth.call(null,n,cljs.core.drop.call(null,n,s__116986)));
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
var temp__3698__auto____116988 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____116988))
{var s__116989 = temp__3698__auto____116988;

var fst__116990 = cljs.core.first.call(null,s__116989);
var fv__116991 = f.call(null,fst__116990);
var run__116992 = cljs.core.cons.call(null,fst__116990,cljs.core.take_while.call(null,(function (p1__116987_SHARP_){
return cljs.core._EQ_.call(null,fv__116991,f.call(null,p1__116987_SHARP_));
}),cljs.core.next.call(null,s__116989)));

return cljs.core.cons.call(null,run__116992,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__116992),s__116989))));
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
var reductions__117007 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____117003 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____117003))
{var s__117004 = temp__3695__auto____117003;

return reductions.call(null,f,cljs.core.first.call(null,s__117004),cljs.core.rest.call(null,s__117004));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__117008 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____117005 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____117005))
{var s__117006 = temp__3698__auto____117005;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__117006)),cljs.core.rest.call(null,s__117006));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__117007.call(this,f,init);
case  3 :
return reductions__117008.call(this,f,init,coll);
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
var juxt__117011 = (function (f){
return (function() {
var G__117016 = null;
var G__117016__117017 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__117016__117018 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__117016__117019 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__117016__117020 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__117016__117021 = (function() { 
var G__117023__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__117023 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__117023__delegate.call(this, x, y, z, args);
};
G__117023.cljs$lang$maxFixedArity = 3;
G__117023.cljs$lang$applyTo = (function (arglist__117024){
var x = cljs.core.first(arglist__117024);
var y = cljs.core.first(cljs.core.next(arglist__117024));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__117024)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__117024)));
return G__117023__delegate.call(this, x, y, z, args);
});
return G__117023;
})()
;
G__117016 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__117016__117017.call(this);
case  1 :
return G__117016__117018.call(this,x);
case  2 :
return G__117016__117019.call(this,x,y);
case  3 :
return G__117016__117020.call(this,x,y,z);
default:
return G__117016__117021.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__117016.cljs$lang$maxFixedArity = 3;
G__117016.cljs$lang$applyTo = G__117016__117021.cljs$lang$applyTo;
return G__117016;
})()
});
var juxt__117012 = (function (f,g){
return (function() {
var G__117025 = null;
var G__117025__117026 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__117025__117027 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__117025__117028 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__117025__117029 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__117025__117030 = (function() { 
var G__117032__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__117032 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__117032__delegate.call(this, x, y, z, args);
};
G__117032.cljs$lang$maxFixedArity = 3;
G__117032.cljs$lang$applyTo = (function (arglist__117033){
var x = cljs.core.first(arglist__117033);
var y = cljs.core.first(cljs.core.next(arglist__117033));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__117033)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__117033)));
return G__117032__delegate.call(this, x, y, z, args);
});
return G__117032;
})()
;
G__117025 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__117025__117026.call(this);
case  1 :
return G__117025__117027.call(this,x);
case  2 :
return G__117025__117028.call(this,x,y);
case  3 :
return G__117025__117029.call(this,x,y,z);
default:
return G__117025__117030.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__117025.cljs$lang$maxFixedArity = 3;
G__117025.cljs$lang$applyTo = G__117025__117030.cljs$lang$applyTo;
return G__117025;
})()
});
var juxt__117013 = (function (f,g,h){
return (function() {
var G__117034 = null;
var G__117034__117035 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__117034__117036 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__117034__117037 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__117034__117038 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__117034__117039 = (function() { 
var G__117041__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__117041 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__117041__delegate.call(this, x, y, z, args);
};
G__117041.cljs$lang$maxFixedArity = 3;
G__117041.cljs$lang$applyTo = (function (arglist__117042){
var x = cljs.core.first(arglist__117042);
var y = cljs.core.first(cljs.core.next(arglist__117042));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__117042)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__117042)));
return G__117041__delegate.call(this, x, y, z, args);
});
return G__117041;
})()
;
G__117034 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__117034__117035.call(this);
case  1 :
return G__117034__117036.call(this,x);
case  2 :
return G__117034__117037.call(this,x,y);
case  3 :
return G__117034__117038.call(this,x,y,z);
default:
return G__117034__117039.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__117034.cljs$lang$maxFixedArity = 3;
G__117034.cljs$lang$applyTo = G__117034__117039.cljs$lang$applyTo;
return G__117034;
})()
});
var juxt__117014 = (function() { 
var G__117043__delegate = function (f,g,h,fs){
var fs__117010 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__117044 = null;
var G__117044__117045 = (function (){
return cljs.core.reduce.call(null,(function (p1__116993_SHARP_,p2__116994_SHARP_){
return cljs.core.conj.call(null,p1__116993_SHARP_,p2__116994_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__117010);
});
var G__117044__117046 = (function (x){
return cljs.core.reduce.call(null,(function (p1__116995_SHARP_,p2__116996_SHARP_){
return cljs.core.conj.call(null,p1__116995_SHARP_,p2__116996_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__117010);
});
var G__117044__117047 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__116997_SHARP_,p2__116998_SHARP_){
return cljs.core.conj.call(null,p1__116997_SHARP_,p2__116998_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__117010);
});
var G__117044__117048 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__116999_SHARP_,p2__117000_SHARP_){
return cljs.core.conj.call(null,p1__116999_SHARP_,p2__117000_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__117010);
});
var G__117044__117049 = (function() { 
var G__117051__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__117001_SHARP_,p2__117002_SHARP_){
return cljs.core.conj.call(null,p1__117001_SHARP_,cljs.core.apply.call(null,p2__117002_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__117010);
};
var G__117051 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__117051__delegate.call(this, x, y, z, args);
};
G__117051.cljs$lang$maxFixedArity = 3;
G__117051.cljs$lang$applyTo = (function (arglist__117052){
var x = cljs.core.first(arglist__117052);
var y = cljs.core.first(cljs.core.next(arglist__117052));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__117052)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__117052)));
return G__117051__delegate.call(this, x, y, z, args);
});
return G__117051;
})()
;
G__117044 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__117044__117045.call(this);
case  1 :
return G__117044__117046.call(this,x);
case  2 :
return G__117044__117047.call(this,x,y);
case  3 :
return G__117044__117048.call(this,x,y,z);
default:
return G__117044__117049.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__117044.cljs$lang$maxFixedArity = 3;
G__117044.cljs$lang$applyTo = G__117044__117049.cljs$lang$applyTo;
return G__117044;
})()
};
var G__117043 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__117043__delegate.call(this, f, g, h, fs);
};
G__117043.cljs$lang$maxFixedArity = 3;
G__117043.cljs$lang$applyTo = (function (arglist__117053){
var f = cljs.core.first(arglist__117053);
var g = cljs.core.first(cljs.core.next(arglist__117053));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__117053)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__117053)));
return G__117043__delegate.call(this, f, g, h, fs);
});
return G__117043;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__117011.call(this,f);
case  2 :
return juxt__117012.call(this,f,g);
case  3 :
return juxt__117013.call(this,f,g,h);
default:
return juxt__117014.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__117014.cljs$lang$applyTo;
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
var dorun__117055 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__117058 = cljs.core.next.call(null,coll);
coll = G__117058;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__117056 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____117054 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____117054))
{return (n > 0);
} else
{return and__3546__auto____117054;
}
})()))
{{
var G__117059 = (n - 1);
var G__117060 = cljs.core.next.call(null,coll);
n = G__117059;
coll = G__117060;
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
return dorun__117055.call(this,n);
case  2 :
return dorun__117056.call(this,n,coll);
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
var doall__117061 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__117062 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__117061.call(this,n);
case  2 :
return doall__117062.call(this,n,coll);
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
var matches__117064 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__117064),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__117064),1)))
{return cljs.core.first.call(null,matches__117064);
} else
{return cljs.core.vec.call(null,matches__117064);
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
var matches__117065 = re.exec(s);

if(cljs.core.truth_((matches__117065 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__117065),1)))
{return cljs.core.first.call(null,matches__117065);
} else
{return cljs.core.vec.call(null,matches__117065);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__117066 = cljs.core.re_find.call(null,re,s);
var match_idx__117067 = s.search(re);
var match_str__117068 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__117066))?cljs.core.first.call(null,match_data__117066):match_data__117066);
var post_match__117069 = cljs.core.subs.call(null,s,(match_idx__117067 + cljs.core.count.call(null,match_str__117068)));

if(cljs.core.truth_(match_data__117066))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__117066,re_seq.call(null,re,post_match__117069));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__117071__117072 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___117073 = cljs.core.nth.call(null,vec__117071__117072,0,null);
var flags__117074 = cljs.core.nth.call(null,vec__117071__117072,1,null);
var pattern__117075 = cljs.core.nth.call(null,vec__117071__117072,2,null);

return (new RegExp(pattern__117075,flags__117074));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__117070_SHARP_){
return print_one.call(null,p1__117070_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____117076 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____117076))
{var and__3546__auto____117080 = (function (){var x__451__auto____117077 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____117078 = x__451__auto____117077;

if(cljs.core.truth_(and__3546__auto____117078))
{var and__3546__auto____117079 = x__451__auto____117077.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____117079))
{return cljs.core.not.call(null,x__451__auto____117077.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____117079;
}
} else
{return and__3546__auto____117078;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____117077);
}
})();

if(cljs.core.truth_(and__3546__auto____117080))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____117080;
}
} else
{return and__3546__auto____117076;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____117081 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____117082 = x__451__auto____117081;

if(cljs.core.truth_(and__3546__auto____117082))
{var and__3546__auto____117083 = x__451__auto____117081.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____117083))
{return cljs.core.not.call(null,x__451__auto____117081.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____117083;
}
} else
{return and__3546__auto____117082;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____117081);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__117084 = cljs.core.first.call(null,objs);
var sb__117085 = (new goog.string.StringBuffer());

var G__117086__117087 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__117086__117087))
{var obj__117088 = cljs.core.first.call(null,G__117086__117087);
var G__117086__117089 = G__117086__117087;

while(true){
if(cljs.core.truth_((obj__117088 === first_obj__117084)))
{} else
{sb__117085.append(" ");
}
var G__117090__117091 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__117088,opts));

if(cljs.core.truth_(G__117090__117091))
{var string__117092 = cljs.core.first.call(null,G__117090__117091);
var G__117090__117093 = G__117090__117091;

while(true){
sb__117085.append(string__117092);
var temp__3698__auto____117094 = cljs.core.next.call(null,G__117090__117093);

if(cljs.core.truth_(temp__3698__auto____117094))
{var G__117090__117095 = temp__3698__auto____117094;

{
var G__117098 = cljs.core.first.call(null,G__117090__117095);
var G__117099 = G__117090__117095;
string__117092 = G__117098;
G__117090__117093 = G__117099;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____117096 = cljs.core.next.call(null,G__117086__117089);

if(cljs.core.truth_(temp__3698__auto____117096))
{var G__117086__117097 = temp__3698__auto____117096;

{
var G__117100 = cljs.core.first.call(null,G__117086__117097);
var G__117101 = G__117086__117097;
obj__117088 = G__117100;
G__117086__117089 = G__117101;
continue;
}
} else
{}
break;
}
} else
{}
return sb__117085;
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
var sb__117102 = cljs.core.pr_sb.call(null,objs,opts);

sb__117102.append("\n");
return cljs.core.str.call(null,sb__117102);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__117103 = cljs.core.first.call(null,objs);

var G__117104__117105 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__117104__117105))
{var obj__117106 = cljs.core.first.call(null,G__117104__117105);
var G__117104__117107 = G__117104__117105;

while(true){
if(cljs.core.truth_((obj__117106 === first_obj__117103)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__117108__117109 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__117106,opts));

if(cljs.core.truth_(G__117108__117109))
{var string__117110 = cljs.core.first.call(null,G__117108__117109);
var G__117108__117111 = G__117108__117109;

while(true){
cljs.core.string_print.call(null,string__117110);
var temp__3698__auto____117112 = cljs.core.next.call(null,G__117108__117111);

if(cljs.core.truth_(temp__3698__auto____117112))
{var G__117108__117113 = temp__3698__auto____117112;

{
var G__117116 = cljs.core.first.call(null,G__117108__117113);
var G__117117 = G__117108__117113;
string__117110 = G__117116;
G__117108__117111 = G__117117;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____117114 = cljs.core.next.call(null,G__117104__117107);

if(cljs.core.truth_(temp__3698__auto____117114))
{var G__117104__117115 = temp__3698__auto____117114;

{
var G__117118 = cljs.core.first.call(null,G__117104__117115);
var G__117119 = G__117104__117115;
obj__117106 = G__117118;
G__117104__117107 = G__117119;
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
pr_str.cljs$lang$applyTo = (function (arglist__117120){
var objs = cljs.core.seq( arglist__117120 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__117121){
var objs = cljs.core.seq( arglist__117121 );;
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
pr.cljs$lang$applyTo = (function (arglist__117122){
var objs = cljs.core.seq( arglist__117122 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__117123){
var objs = cljs.core.seq( arglist__117123 );;
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
print_str.cljs$lang$applyTo = (function (arglist__117124){
var objs = cljs.core.seq( arglist__117124 );;
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
println.cljs$lang$applyTo = (function (arglist__117125){
var objs = cljs.core.seq( arglist__117125 );;
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
println_str.cljs$lang$applyTo = (function (arglist__117126){
var objs = cljs.core.seq( arglist__117126 );;
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
prn.cljs$lang$applyTo = (function (arglist__117127){
var objs = cljs.core.seq( arglist__117127 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__117128 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__117128,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____117129 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____117129))
{var nspc__117130 = temp__3698__auto____117129;

return cljs.core.str.call(null,nspc__117130,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____117131 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____117131))
{var nspc__117132 = temp__3698__auto____117131;

return cljs.core.str.call(null,nspc__117132,"/");
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
var pr_pair__117133 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__117133,"{",", ","}",opts,coll);
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
var this__117134 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__117135 = this;
var G__117136__117137 = cljs.core.seq.call(null,this__117135.watches);

if(cljs.core.truth_(G__117136__117137))
{var G__117139__117141 = cljs.core.first.call(null,G__117136__117137);
var vec__117140__117142 = G__117139__117141;
var key__117143 = cljs.core.nth.call(null,vec__117140__117142,0,null);
var f__117144 = cljs.core.nth.call(null,vec__117140__117142,1,null);
var G__117136__117145 = G__117136__117137;

var G__117139__117146 = G__117139__117141;
var G__117136__117147 = G__117136__117145;

while(true){
var vec__117148__117149 = G__117139__117146;
var key__117150 = cljs.core.nth.call(null,vec__117148__117149,0,null);
var f__117151 = cljs.core.nth.call(null,vec__117148__117149,1,null);
var G__117136__117152 = G__117136__117147;

f__117151.call(null,key__117150,this$,oldval,newval);
var temp__3698__auto____117153 = cljs.core.next.call(null,G__117136__117152);

if(cljs.core.truth_(temp__3698__auto____117153))
{var G__117136__117154 = temp__3698__auto____117153;

{
var G__117161 = cljs.core.first.call(null,G__117136__117154);
var G__117162 = G__117136__117154;
G__117139__117146 = G__117161;
G__117136__117147 = G__117162;
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
var this__117155 = this;
return this$.watches = cljs.core.assoc.call(null,this__117155.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__117156 = this;
return this$.watches = cljs.core.dissoc.call(null,this__117156.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__117157 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__117157.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__117158 = this;
return this__117158.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__117159 = this;
return this__117159.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__117160 = this;
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
var atom__117169 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__117170 = (function() { 
var G__117172__delegate = function (x,p__117163){
var map__117164__117165 = p__117163;
var map__117164__117166 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__117164__117165))?cljs.core.apply.call(null,cljs.core.hash_map,map__117164__117165):map__117164__117165);
var validator__117167 = cljs.core.get.call(null,map__117164__117166,"\uFDD0'validator");
var meta__117168 = cljs.core.get.call(null,map__117164__117166,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__117168,validator__117167,null));
};
var G__117172 = function (x,var_args){
var p__117163 = null;
if (goog.isDef(var_args)) {
  p__117163 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__117172__delegate.call(this, x, p__117163);
};
G__117172.cljs$lang$maxFixedArity = 1;
G__117172.cljs$lang$applyTo = (function (arglist__117173){
var x = cljs.core.first(arglist__117173);
var p__117163 = cljs.core.rest(arglist__117173);
return G__117172__delegate.call(this, x, p__117163);
});
return G__117172;
})()
;
atom = function(x,var_args){
var p__117163 = var_args;
switch(arguments.length){
case  1 :
return atom__117169.call(this,x);
default:
return atom__117170.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__117170.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____117174 = a.validator;

if(cljs.core.truth_(temp__3698__auto____117174))
{var validate__117175 = temp__3698__auto____117174;

if(cljs.core.truth_(validate__117175.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__117176 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__117176,new_value);
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
var swap_BANG___117177 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___117178 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___117179 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___117180 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___117181 = (function() { 
var G__117183__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__117183 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__117183__delegate.call(this, a, f, x, y, z, more);
};
G__117183.cljs$lang$maxFixedArity = 5;
G__117183.cljs$lang$applyTo = (function (arglist__117184){
var a = cljs.core.first(arglist__117184);
var f = cljs.core.first(cljs.core.next(arglist__117184));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__117184)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__117184))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__117184)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__117184)))));
return G__117183__delegate.call(this, a, f, x, y, z, more);
});
return G__117183;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___117177.call(this,a,f);
case  3 :
return swap_BANG___117178.call(this,a,f,x);
case  4 :
return swap_BANG___117179.call(this,a,f,x,y);
case  5 :
return swap_BANG___117180.call(this,a,f,x,y,z);
default:
return swap_BANG___117181.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___117181.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__117185){
var iref = cljs.core.first(arglist__117185);
var f = cljs.core.first(cljs.core.next(arglist__117185));
var args = cljs.core.rest(cljs.core.next(arglist__117185));
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
var gensym__117186 = (function (){
return gensym.call(null,"G__");
});
var gensym__117187 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__117186.call(this);
case  1 :
return gensym__117187.call(this,prefix_string);
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
var this__117189 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__117189.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__117190 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__117190.state,(function (p__117191){
var curr_state__117192 = p__117191;
var curr_state__117193 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__117192))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__117192):curr_state__117192);
var done__117194 = cljs.core.get.call(null,curr_state__117193,"\uFDD0'done");

if(cljs.core.truth_(done__117194))
{return curr_state__117193;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__117190.f.call(null)});
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
var map__117195__117196 = options;
var map__117195__117197 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__117195__117196))?cljs.core.apply.call(null,cljs.core.hash_map,map__117195__117196):map__117195__117196);
var keywordize_keys__117198 = cljs.core.get.call(null,map__117195__117197,"\uFDD0'keywordize-keys");
var keyfn__117199 = (cljs.core.truth_(keywordize_keys__117198)?cljs.core.keyword:cljs.core.str);
var f__117205 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____117204 = (function iter__117200(s__117201){
return (new cljs.core.LazySeq(null,false,(function (){
var s__117201__117202 = s__117201;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__117201__117202)))
{var k__117203 = cljs.core.first.call(null,s__117201__117202);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__117199.call(null,k__117203),thisfn.call(null,(x[k__117203]))]),iter__117200.call(null,cljs.core.rest.call(null,s__117201__117202)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____117204.call(null,cljs.core.js_keys.call(null,x));
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

return f__117205.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__117206){
var x = cljs.core.first(arglist__117206);
var options = cljs.core.rest(arglist__117206);
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
var mem__117207 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__117211__delegate = function (args){
var temp__3695__auto____117208 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__117207),args);

if(cljs.core.truth_(temp__3695__auto____117208))
{var v__117209 = temp__3695__auto____117208;

return v__117209;
} else
{var ret__117210 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__117207,cljs.core.assoc,args,ret__117210);
return ret__117210;
}
};
var G__117211 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__117211__delegate.call(this, args);
};
G__117211.cljs$lang$maxFixedArity = 0;
G__117211.cljs$lang$applyTo = (function (arglist__117212){
var args = cljs.core.seq( arglist__117212 );;
return G__117211__delegate.call(this, args);
});
return G__117211;
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
var trampoline__117214 = (function (f){
while(true){
var ret__117213 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__117213)))
{{
var G__117217 = ret__117213;
f = G__117217;
continue;
}
} else
{return ret__117213;
}
break;
}
});
var trampoline__117215 = (function() { 
var G__117218__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__117218 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__117218__delegate.call(this, f, args);
};
G__117218.cljs$lang$maxFixedArity = 1;
G__117218.cljs$lang$applyTo = (function (arglist__117219){
var f = cljs.core.first(arglist__117219);
var args = cljs.core.rest(arglist__117219);
return G__117218__delegate.call(this, f, args);
});
return G__117218;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__117214.call(this,f);
default:
return trampoline__117215.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__117215.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__117220 = (function (){
return rand.call(null,1);
});
var rand__117221 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__117220.call(this);
case  1 :
return rand__117221.call(this,n);
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
var k__117223 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__117223,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__117223,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___117232 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___117233 = (function (h,child,parent){
var or__3548__auto____117224 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____117224))
{return or__3548__auto____117224;
} else
{var or__3548__auto____117225 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____117225))
{return or__3548__auto____117225;
} else
{var and__3546__auto____117226 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____117226))
{var and__3546__auto____117227 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____117227))
{var and__3546__auto____117228 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____117228))
{var ret__117229 = true;
var i__117230 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____117231 = cljs.core.not.call(null,ret__117229);

if(cljs.core.truth_(or__3548__auto____117231))
{return or__3548__auto____117231;
} else
{return cljs.core._EQ_.call(null,i__117230,cljs.core.count.call(null,parent));
}
})()))
{return ret__117229;
} else
{{
var G__117235 = isa_QMARK_.call(null,h,child.call(null,i__117230),parent.call(null,i__117230));
var G__117236 = (i__117230 + 1);
ret__117229 = G__117235;
i__117230 = G__117236;
continue;
}
}
break;
}
} else
{return and__3546__auto____117228;
}
} else
{return and__3546__auto____117227;
}
} else
{return and__3546__auto____117226;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___117232.call(this,h,child);
case  3 :
return isa_QMARK___117233.call(this,h,child,parent);
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
var parents__117237 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__117238 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__117237.call(this,h);
case  2 :
return parents__117238.call(this,h,tag);
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
var ancestors__117240 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__117241 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__117240.call(this,h);
case  2 :
return ancestors__117241.call(this,h,tag);
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
var descendants__117243 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__117244 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__117243.call(this,h);
case  2 :
return descendants__117244.call(this,h,tag);
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
var derive__117254 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__117255 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__117249 = "\uFDD0'parents".call(null,h);
var td__117250 = "\uFDD0'descendants".call(null,h);
var ta__117251 = "\uFDD0'ancestors".call(null,h);
var tf__117252 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____117253 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__117249.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__117251.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__117251.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__117249,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__117252.call(null,"\uFDD0'ancestors".call(null,h),tag,td__117250,parent,ta__117251),"\uFDD0'descendants":tf__117252.call(null,"\uFDD0'descendants".call(null,h),parent,ta__117251,tag,td__117250)});
})());

if(cljs.core.truth_(or__3548__auto____117253))
{return or__3548__auto____117253;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__117254.call(this,h,tag);
case  3 :
return derive__117255.call(this,h,tag,parent);
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
var underive__117261 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__117262 = (function (h,tag,parent){
var parentMap__117257 = "\uFDD0'parents".call(null,h);
var childsParents__117258 = (cljs.core.truth_(parentMap__117257.call(null,tag))?cljs.core.disj.call(null,parentMap__117257.call(null,tag),parent):cljs.core.set([]));
var newParents__117259 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__117258))?cljs.core.assoc.call(null,parentMap__117257,tag,childsParents__117258):cljs.core.dissoc.call(null,parentMap__117257,tag));
var deriv_seq__117260 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__117246_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__117246_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__117246_SHARP_),cljs.core.second.call(null,p1__117246_SHARP_)));
}),cljs.core.seq.call(null,newParents__117259)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__117257.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__117247_SHARP_,p2__117248_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__117247_SHARP_,p2__117248_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__117260));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__117261.call(this,h,tag);
case  3 :
return underive__117262.call(this,h,tag,parent);
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
var xprefs__117264 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____117266 = (cljs.core.truth_((function (){var and__3546__auto____117265 = xprefs__117264;

if(cljs.core.truth_(and__3546__auto____117265))
{return xprefs__117264.call(null,y);
} else
{return and__3546__auto____117265;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____117266))
{return or__3548__auto____117266;
} else
{var or__3548__auto____117268 = (function (){var ps__117267 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__117267) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__117267),prefer_table)))
{} else
{}
{
var G__117271 = cljs.core.rest.call(null,ps__117267);
ps__117267 = G__117271;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____117268))
{return or__3548__auto____117268;
} else
{var or__3548__auto____117270 = (function (){var ps__117269 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__117269) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__117269),y,prefer_table)))
{} else
{}
{
var G__117272 = cljs.core.rest.call(null,ps__117269);
ps__117269 = G__117272;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____117270))
{return or__3548__auto____117270;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____117273 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____117273))
{return or__3548__auto____117273;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__117282 = cljs.core.reduce.call(null,(function (be,p__117274){
var vec__117275__117276 = p__117274;
var k__117277 = cljs.core.nth.call(null,vec__117275__117276,0,null);
var ___117278 = cljs.core.nth.call(null,vec__117275__117276,1,null);
var e__117279 = vec__117275__117276;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__117277)))
{var be2__117281 = (cljs.core.truth_((function (){var or__3548__auto____117280 = (be === null);

if(cljs.core.truth_(or__3548__auto____117280))
{return or__3548__auto____117280;
} else
{return cljs.core.dominates.call(null,k__117277,cljs.core.first.call(null,be),prefer_table);
}
})())?e__117279:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__117281),k__117277,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__117277," and ",cljs.core.first.call(null,be2__117281),", and neither is preferred")));
}
return be2__117281;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__117282))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__117282));
return cljs.core.second.call(null,best_entry__117282);
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
if(cljs.core.truth_((function (){var and__3546__auto____117283 = mf;

if(cljs.core.truth_(and__3546__auto____117283))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____117283;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____117284 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____117284))
{return or__3548__auto____117284;
} else
{var or__3548__auto____117285 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____117285))
{return or__3548__auto____117285;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____117286 = mf;

if(cljs.core.truth_(and__3546__auto____117286))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____117286;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____117287 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____117287))
{return or__3548__auto____117287;
} else
{var or__3548__auto____117288 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____117288))
{return or__3548__auto____117288;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____117289 = mf;

if(cljs.core.truth_(and__3546__auto____117289))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____117289;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____117290 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____117290))
{return or__3548__auto____117290;
} else
{var or__3548__auto____117291 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____117291))
{return or__3548__auto____117291;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____117292 = mf;

if(cljs.core.truth_(and__3546__auto____117292))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____117292;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____117293 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____117293))
{return or__3548__auto____117293;
} else
{var or__3548__auto____117294 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____117294))
{return or__3548__auto____117294;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____117295 = mf;

if(cljs.core.truth_(and__3546__auto____117295))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____117295;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____117296 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____117296))
{return or__3548__auto____117296;
} else
{var or__3548__auto____117297 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____117297))
{return or__3548__auto____117297;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____117298 = mf;

if(cljs.core.truth_(and__3546__auto____117298))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____117298;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____117299 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____117299))
{return or__3548__auto____117299;
} else
{var or__3548__auto____117300 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____117300))
{return or__3548__auto____117300;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____117301 = mf;

if(cljs.core.truth_(and__3546__auto____117301))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____117301;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____117302 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____117302))
{return or__3548__auto____117302;
} else
{var or__3548__auto____117303 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____117303))
{return or__3548__auto____117303;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____117304 = mf;

if(cljs.core.truth_(and__3546__auto____117304))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____117304;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____117305 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____117305))
{return or__3548__auto____117305;
} else
{var or__3548__auto____117306 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____117306))
{return or__3548__auto____117306;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__117307 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__117308 = cljs.core._get_method.call(null,mf,dispatch_val__117307);

if(cljs.core.truth_(target_fn__117308))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__117307)));
}
return cljs.core.apply.call(null,target_fn__117308,args);
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
var this__117309 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__117310 = this;
cljs.core.swap_BANG_.call(null,this__117310.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__117310.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__117310.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__117310.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__117311 = this;
cljs.core.swap_BANG_.call(null,this__117311.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__117311.method_cache,this__117311.method_table,this__117311.cached_hierarchy,this__117311.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__117312 = this;
cljs.core.swap_BANG_.call(null,this__117312.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__117312.method_cache,this__117312.method_table,this__117312.cached_hierarchy,this__117312.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__117313 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__117313.cached_hierarchy),cljs.core.deref.call(null,this__117313.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__117313.method_cache,this__117313.method_table,this__117313.cached_hierarchy,this__117313.hierarchy);
}
var temp__3695__auto____117314 = cljs.core.deref.call(null,this__117313.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____117314))
{var target_fn__117315 = temp__3695__auto____117314;

return target_fn__117315;
} else
{var temp__3695__auto____117316 = cljs.core.find_and_cache_best_method.call(null,this__117313.name,dispatch_val,this__117313.hierarchy,this__117313.method_table,this__117313.prefer_table,this__117313.method_cache,this__117313.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____117316))
{var target_fn__117317 = temp__3695__auto____117316;

return target_fn__117317;
} else
{return cljs.core.deref.call(null,this__117313.method_table).call(null,this__117313.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__117318 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__117318.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__117318.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__117318.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__117318.method_cache,this__117318.method_table,this__117318.cached_hierarchy,this__117318.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__117319 = this;
return cljs.core.deref.call(null,this__117319.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__117320 = this;
return cljs.core.deref.call(null,this__117320.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__117321 = this;
return cljs.core.do_dispatch.call(null,mf,this__117321.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__117322__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__117322 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__117322__delegate.call(this, _, args);
};
G__117322.cljs$lang$maxFixedArity = 1;
G__117322.cljs$lang$applyTo = (function (arglist__117323){
var _ = cljs.core.first(arglist__117323);
var args = cljs.core.rest(arglist__117323);
return G__117322__delegate.call(this, _, args);
});
return G__117322;
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
