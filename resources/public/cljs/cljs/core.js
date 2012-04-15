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
var or__3548__auto____7556 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7556))
{return or__3548__auto____7556;
} else
{var or__3548__auto____7557 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7557))
{return or__3548__auto____7557;
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
var _invoke__7621 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7558 = this$;

if(cljs.core.truth_(and__3546__auto____7558))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7558;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7559 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7559))
{return or__3548__auto____7559;
} else
{var or__3548__auto____7560 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7560))
{return or__3548__auto____7560;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7622 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7561 = this$;

if(cljs.core.truth_(and__3546__auto____7561))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7561;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7562 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7562))
{return or__3548__auto____7562;
} else
{var or__3548__auto____7563 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7563))
{return or__3548__auto____7563;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7623 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7564 = this$;

if(cljs.core.truth_(and__3546__auto____7564))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7564;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7565 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7565))
{return or__3548__auto____7565;
} else
{var or__3548__auto____7566 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7566))
{return or__3548__auto____7566;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7624 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7567 = this$;

if(cljs.core.truth_(and__3546__auto____7567))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7567;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7568 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7568))
{return or__3548__auto____7568;
} else
{var or__3548__auto____7569 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7569))
{return or__3548__auto____7569;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7625 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7570 = this$;

if(cljs.core.truth_(and__3546__auto____7570))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7570;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7571 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7571))
{return or__3548__auto____7571;
} else
{var or__3548__auto____7572 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7572))
{return or__3548__auto____7572;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7626 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7573 = this$;

if(cljs.core.truth_(and__3546__auto____7573))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7573;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7574 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7574))
{return or__3548__auto____7574;
} else
{var or__3548__auto____7575 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7575))
{return or__3548__auto____7575;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7627 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7576 = this$;

if(cljs.core.truth_(and__3546__auto____7576))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7576;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7577 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7577))
{return or__3548__auto____7577;
} else
{var or__3548__auto____7578 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7578))
{return or__3548__auto____7578;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7628 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7579 = this$;

if(cljs.core.truth_(and__3546__auto____7579))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7579;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7580 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7580))
{return or__3548__auto____7580;
} else
{var or__3548__auto____7581 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7581))
{return or__3548__auto____7581;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7629 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7582 = this$;

if(cljs.core.truth_(and__3546__auto____7582))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7582;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7583 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7583))
{return or__3548__auto____7583;
} else
{var or__3548__auto____7584 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7584))
{return or__3548__auto____7584;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7630 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7585 = this$;

if(cljs.core.truth_(and__3546__auto____7585))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7585;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7586 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7586))
{return or__3548__auto____7586;
} else
{var or__3548__auto____7587 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7587))
{return or__3548__auto____7587;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7631 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7588 = this$;

if(cljs.core.truth_(and__3546__auto____7588))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7588;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7589 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7589))
{return or__3548__auto____7589;
} else
{var or__3548__auto____7590 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7590))
{return or__3548__auto____7590;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7632 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7591 = this$;

if(cljs.core.truth_(and__3546__auto____7591))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7591;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7592 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7592))
{return or__3548__auto____7592;
} else
{var or__3548__auto____7593 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7593))
{return or__3548__auto____7593;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7594 = this$;

if(cljs.core.truth_(and__3546__auto____7594))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7594;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7595 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7595))
{return or__3548__auto____7595;
} else
{var or__3548__auto____7596 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7596))
{return or__3548__auto____7596;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7597 = this$;

if(cljs.core.truth_(and__3546__auto____7597))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7597;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7598 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7598))
{return or__3548__auto____7598;
} else
{var or__3548__auto____7599 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7599))
{return or__3548__auto____7599;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7600 = this$;

if(cljs.core.truth_(and__3546__auto____7600))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7600;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7601 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7601))
{return or__3548__auto____7601;
} else
{var or__3548__auto____7602 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7602))
{return or__3548__auto____7602;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7603 = this$;

if(cljs.core.truth_(and__3546__auto____7603))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7603;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7604 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7604))
{return or__3548__auto____7604;
} else
{var or__3548__auto____7605 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7605))
{return or__3548__auto____7605;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7606 = this$;

if(cljs.core.truth_(and__3546__auto____7606))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7606;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7607 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7607))
{return or__3548__auto____7607;
} else
{var or__3548__auto____7608 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7608))
{return or__3548__auto____7608;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7609 = this$;

if(cljs.core.truth_(and__3546__auto____7609))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7609;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7610 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7610))
{return or__3548__auto____7610;
} else
{var or__3548__auto____7611 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7611))
{return or__3548__auto____7611;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7612 = this$;

if(cljs.core.truth_(and__3546__auto____7612))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7612;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7613 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7613))
{return or__3548__auto____7613;
} else
{var or__3548__auto____7614 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7614))
{return or__3548__auto____7614;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7615 = this$;

if(cljs.core.truth_(and__3546__auto____7615))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7615;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7616 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7616))
{return or__3548__auto____7616;
} else
{var or__3548__auto____7617 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7617))
{return or__3548__auto____7617;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7618 = this$;

if(cljs.core.truth_(and__3546__auto____7618))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7618;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7619 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7619))
{return or__3548__auto____7619;
} else
{var or__3548__auto____7620 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7620))
{return or__3548__auto____7620;
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
return _invoke__7621.call(this,this$);
case  2 :
return _invoke__7622.call(this,this$,a);
case  3 :
return _invoke__7623.call(this,this$,a,b);
case  4 :
return _invoke__7624.call(this,this$,a,b,c);
case  5 :
return _invoke__7625.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7626.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7627.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7628.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7629.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7630.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7631.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7632.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7633.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7634.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7635.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7636.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7638.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7643 = coll;

if(cljs.core.truth_(and__3546__auto____7643))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7643;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7644 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7644))
{return or__3548__auto____7644;
} else
{var or__3548__auto____7645 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7645))
{return or__3548__auto____7645;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7646 = coll;

if(cljs.core.truth_(and__3546__auto____7646))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7646;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7647 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7647))
{return or__3548__auto____7647;
} else
{var or__3548__auto____7648 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7648))
{return or__3548__auto____7648;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7649 = coll;

if(cljs.core.truth_(and__3546__auto____7649))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7649;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7650 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7650))
{return or__3548__auto____7650;
} else
{var or__3548__auto____7651 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7651))
{return or__3548__auto____7651;
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
var _nth__7658 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7652 = coll;

if(cljs.core.truth_(and__3546__auto____7652))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7652;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7653 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7653))
{return or__3548__auto____7653;
} else
{var or__3548__auto____7654 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7654))
{return or__3548__auto____7654;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7659 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7655 = coll;

if(cljs.core.truth_(and__3546__auto____7655))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7655;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7656 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7656))
{return or__3548__auto____7656;
} else
{var or__3548__auto____7657 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7657))
{return or__3548__auto____7657;
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
return _nth__7658.call(this,coll,n);
case  3 :
return _nth__7659.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7661 = coll;

if(cljs.core.truth_(and__3546__auto____7661))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7661;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7662 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7662))
{return or__3548__auto____7662;
} else
{var or__3548__auto____7663 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7663))
{return or__3548__auto____7663;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7664 = coll;

if(cljs.core.truth_(and__3546__auto____7664))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7664;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7665 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7665))
{return or__3548__auto____7665;
} else
{var or__3548__auto____7666 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7666))
{return or__3548__auto____7666;
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
var _lookup__7673 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7667 = o;

if(cljs.core.truth_(and__3546__auto____7667))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7667;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7668 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7668))
{return or__3548__auto____7668;
} else
{var or__3548__auto____7669 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7669))
{return or__3548__auto____7669;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7674 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7670 = o;

if(cljs.core.truth_(and__3546__auto____7670))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7670;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7671 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7671))
{return or__3548__auto____7671;
} else
{var or__3548__auto____7672 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7672))
{return or__3548__auto____7672;
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
return _lookup__7673.call(this,o,k);
case  3 :
return _lookup__7674.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7676 = coll;

if(cljs.core.truth_(and__3546__auto____7676))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7676;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7677 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7677))
{return or__3548__auto____7677;
} else
{var or__3548__auto____7678 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7678))
{return or__3548__auto____7678;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7679 = coll;

if(cljs.core.truth_(and__3546__auto____7679))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7679;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7680 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7680))
{return or__3548__auto____7680;
} else
{var or__3548__auto____7681 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7681))
{return or__3548__auto____7681;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7682 = coll;

if(cljs.core.truth_(and__3546__auto____7682))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7682;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7683 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7683))
{return or__3548__auto____7683;
} else
{var or__3548__auto____7684 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7684))
{return or__3548__auto____7684;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7685 = coll;

if(cljs.core.truth_(and__3546__auto____7685))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7685;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7686 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7686))
{return or__3548__auto____7686;
} else
{var or__3548__auto____7687 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7687))
{return or__3548__auto____7687;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7688 = coll;

if(cljs.core.truth_(and__3546__auto____7688))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7688;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7689 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7689))
{return or__3548__auto____7689;
} else
{var or__3548__auto____7690 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7690))
{return or__3548__auto____7690;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7691 = coll;

if(cljs.core.truth_(and__3546__auto____7691))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7691;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7692 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7692))
{return or__3548__auto____7692;
} else
{var or__3548__auto____7693 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7693))
{return or__3548__auto____7693;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7694 = coll;

if(cljs.core.truth_(and__3546__auto____7694))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7694;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7695 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7695))
{return or__3548__auto____7695;
} else
{var or__3548__auto____7696 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7696))
{return or__3548__auto____7696;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7697 = o;

if(cljs.core.truth_(and__3546__auto____7697))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7697;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7698 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7698))
{return or__3548__auto____7698;
} else
{var or__3548__auto____7699 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7699))
{return or__3548__auto____7699;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7700 = o;

if(cljs.core.truth_(and__3546__auto____7700))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7700;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7701 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7701))
{return or__3548__auto____7701;
} else
{var or__3548__auto____7702 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7702))
{return or__3548__auto____7702;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7703 = o;

if(cljs.core.truth_(and__3546__auto____7703))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7703;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7704 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7704))
{return or__3548__auto____7704;
} else
{var or__3548__auto____7705 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7705))
{return or__3548__auto____7705;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7706 = o;

if(cljs.core.truth_(and__3546__auto____7706))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7706;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7707 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7707))
{return or__3548__auto____7707;
} else
{var or__3548__auto____7708 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7708))
{return or__3548__auto____7708;
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
var _reduce__7715 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7709 = coll;

if(cljs.core.truth_(and__3546__auto____7709))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7709;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7710 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7710))
{return or__3548__auto____7710;
} else
{var or__3548__auto____7711 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7711))
{return or__3548__auto____7711;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7716 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7712 = coll;

if(cljs.core.truth_(and__3546__auto____7712))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7712;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7713 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7713))
{return or__3548__auto____7713;
} else
{var or__3548__auto____7714 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7714))
{return or__3548__auto____7714;
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
return _reduce__7715.call(this,coll,f);
case  3 :
return _reduce__7716.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7718 = o;

if(cljs.core.truth_(and__3546__auto____7718))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7718;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7719 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
} else
{var or__3548__auto____7720 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7720))
{return or__3548__auto____7720;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7721 = o;

if(cljs.core.truth_(and__3546__auto____7721))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7721;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7722 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7722))
{return or__3548__auto____7722;
} else
{var or__3548__auto____7723 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7723))
{return or__3548__auto____7723;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7724 = o;

if(cljs.core.truth_(and__3546__auto____7724))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7724;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7725 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7725))
{return or__3548__auto____7725;
} else
{var or__3548__auto____7726 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7726))
{return or__3548__auto____7726;
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
if(cljs.core.truth_((function (){var and__3546__auto____7727 = o;

if(cljs.core.truth_(and__3546__auto____7727))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7727;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7728 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7728))
{return or__3548__auto____7728;
} else
{var or__3548__auto____7729 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7729))
{return or__3548__auto____7729;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7730 = d;

if(cljs.core.truth_(and__3546__auto____7730))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7730;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7731 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7731))
{return or__3548__auto____7731;
} else
{var or__3548__auto____7732 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7733 = this$;

if(cljs.core.truth_(and__3546__auto____7733))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7733;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7734 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7734))
{return or__3548__auto____7734;
} else
{var or__3548__auto____7735 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7735))
{return or__3548__auto____7735;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7736 = this$;

if(cljs.core.truth_(and__3546__auto____7736))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7736;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7737 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7737))
{return or__3548__auto____7737;
} else
{var or__3548__auto____7738 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7738))
{return or__3548__auto____7738;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7739 = this$;

if(cljs.core.truth_(and__3546__auto____7739))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7739;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7740 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7740))
{return or__3548__auto____7740;
} else
{var or__3548__auto____7741 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7741))
{return or__3548__auto____7741;
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
var G__7742 = null;
var G__7742__7743 = (function (o,k){
return null;
});
var G__7742__7744 = (function (o,k,not_found){
return not_found;
});
G__7742 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7742__7743.call(this,o,k);
case  3 :
return G__7742__7744.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7742;
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
var G__7746 = null;
var G__7746__7747 = (function (_,f){
return f.call(null);
});
var G__7746__7748 = (function (_,f,start){
return start;
});
G__7746 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7746__7747.call(this,_,f);
case  3 :
return G__7746__7748.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7746;
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
var G__7750 = null;
var G__7750__7751 = (function (_,n){
return null;
});
var G__7750__7752 = (function (_,n,not_found){
return not_found;
});
G__7750 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7750__7751.call(this,_,n);
case  3 :
return G__7750__7752.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7750;
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
var ci_reduce__7760 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7754 = cljs.core._nth.call(null,cicoll,0);
var n__7755 = 1;

while(true){
if(cljs.core.truth_((n__7755 < cljs.core._count.call(null,cicoll))))
{{
var G__7764 = f.call(null,val__7754,cljs.core._nth.call(null,cicoll,n__7755));
var G__7765 = (n__7755 + 1);
val__7754 = G__7764;
n__7755 = G__7765;
continue;
}
} else
{return val__7754;
}
break;
}
}
});
var ci_reduce__7761 = (function (cicoll,f,val){
var val__7756 = val;
var n__7757 = 0;

while(true){
if(cljs.core.truth_((n__7757 < cljs.core._count.call(null,cicoll))))
{{
var G__7766 = f.call(null,val__7756,cljs.core._nth.call(null,cicoll,n__7757));
var G__7767 = (n__7757 + 1);
val__7756 = G__7766;
n__7757 = G__7767;
continue;
}
} else
{return val__7756;
}
break;
}
});
var ci_reduce__7762 = (function (cicoll,f,val,idx){
var val__7758 = val;
var n__7759 = idx;

while(true){
if(cljs.core.truth_((n__7759 < cljs.core._count.call(null,cicoll))))
{{
var G__7768 = f.call(null,val__7758,cljs.core._nth.call(null,cicoll,n__7759));
var G__7769 = (n__7759 + 1);
val__7758 = G__7768;
n__7759 = G__7769;
continue;
}
} else
{return val__7758;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7760.call(this,cicoll,f);
case  3 :
return ci_reduce__7761.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7762.call(this,cicoll,f,val,idx);
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
var this__7770 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7783 = null;
var G__7783__7784 = (function (_,f){
var this__7771 = this;
return cljs.core.ci_reduce.call(null,this__7771.a,f,(this__7771.a[this__7771.i]),(this__7771.i + 1));
});
var G__7783__7785 = (function (_,f,start){
var this__7772 = this;
return cljs.core.ci_reduce.call(null,this__7772.a,f,start,this__7772.i);
});
G__7783 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7783__7784.call(this,_,f);
case  3 :
return G__7783__7785.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7783;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7773 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7774 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7787 = null;
var G__7787__7788 = (function (coll,n){
var this__7775 = this;
var i__7776 = (n + this__7775.i);

if(cljs.core.truth_((i__7776 < this__7775.a.length)))
{return (this__7775.a[i__7776]);
} else
{return null;
}
});
var G__7787__7789 = (function (coll,n,not_found){
var this__7777 = this;
var i__7778 = (n + this__7777.i);

if(cljs.core.truth_((i__7778 < this__7777.a.length)))
{return (this__7777.a[i__7778]);
} else
{return not_found;
}
});
G__7787 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7787__7788.call(this,coll,n);
case  3 :
return G__7787__7789.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7787;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7779 = this;
return (this__7779.a.length - this__7779.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7780 = this;
return (this__7780.a[this__7780.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7781 = this;
if(cljs.core.truth_(((this__7781.i + 1) < this__7781.a.length)))
{return (new cljs.core.IndexedSeq(this__7781.a,(this__7781.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7782 = this;
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
var G__7791 = null;
var G__7791__7792 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7791__7793 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7791 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7791__7792.call(this,array,f);
case  3 :
return G__7791__7793.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7791;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7795 = null;
var G__7795__7796 = (function (array,k){
return (array[k]);
});
var G__7795__7797 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7795 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7795__7796.call(this,array,k);
case  3 :
return G__7795__7797.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7795;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7799 = null;
var G__7799__7800 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7799__7801 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7799 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7799__7800.call(this,array,n);
case  3 :
return G__7799__7801.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7799;
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
var temp__3698__auto____7803 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7803))
{var s__7804 = temp__3698__auto____7803;

return cljs.core._first.call(null,s__7804);
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
var G__7805 = cljs.core.next.call(null,s);
s = G__7805;
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
var s__7806 = cljs.core.seq.call(null,x);
var n__7807 = 0;

while(true){
if(cljs.core.truth_(s__7806))
{{
var G__7808 = cljs.core.next.call(null,s__7806);
var G__7809 = (n__7807 + 1);
s__7806 = G__7808;
n__7807 = G__7809;
continue;
}
} else
{return n__7807;
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
var conj__7810 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7811 = (function() { 
var G__7813__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7814 = conj.call(null,coll,x);
var G__7815 = cljs.core.first.call(null,xs);
var G__7816 = cljs.core.next.call(null,xs);
coll = G__7814;
x = G__7815;
xs = G__7816;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7813 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7813__delegate.call(this, coll, x, xs);
};
G__7813.cljs$lang$maxFixedArity = 2;
G__7813.cljs$lang$applyTo = (function (arglist__7817){
var coll = cljs.core.first(arglist__7817);
var x = cljs.core.first(cljs.core.next(arglist__7817));
var xs = cljs.core.rest(cljs.core.next(arglist__7817));
return G__7813__delegate.call(this, coll, x, xs);
});
return G__7813;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7810.call(this,coll,x);
default:
return conj__7811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7811.cljs$lang$applyTo;
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
var nth__7818 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7819 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7818.call(this,coll,n);
case  3 :
return nth__7819.call(this,coll,n,not_found);
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
var get__7821 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7822 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7821.call(this,o,k);
case  3 :
return get__7822.call(this,o,k,not_found);
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
var assoc__7825 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7826 = (function() { 
var G__7828__delegate = function (coll,k,v,kvs){
while(true){
var ret__7824 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7829 = ret__7824;
var G__7830 = cljs.core.first.call(null,kvs);
var G__7831 = cljs.core.second.call(null,kvs);
var G__7832 = cljs.core.nnext.call(null,kvs);
coll = G__7829;
k = G__7830;
v = G__7831;
kvs = G__7832;
continue;
}
} else
{return ret__7824;
}
break;
}
};
var G__7828 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7828__delegate.call(this, coll, k, v, kvs);
};
G__7828.cljs$lang$maxFixedArity = 3;
G__7828.cljs$lang$applyTo = (function (arglist__7833){
var coll = cljs.core.first(arglist__7833);
var k = cljs.core.first(cljs.core.next(arglist__7833));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7833)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7833)));
return G__7828__delegate.call(this, coll, k, v, kvs);
});
return G__7828;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7825.call(this,coll,k,v);
default:
return assoc__7826.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7826.cljs$lang$applyTo;
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
var dissoc__7835 = (function (coll){
return coll;
});
var dissoc__7836 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7837 = (function() { 
var G__7839__delegate = function (coll,k,ks){
while(true){
var ret__7834 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7840 = ret__7834;
var G__7841 = cljs.core.first.call(null,ks);
var G__7842 = cljs.core.next.call(null,ks);
coll = G__7840;
k = G__7841;
ks = G__7842;
continue;
}
} else
{return ret__7834;
}
break;
}
};
var G__7839 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7839__delegate.call(this, coll, k, ks);
};
G__7839.cljs$lang$maxFixedArity = 2;
G__7839.cljs$lang$applyTo = (function (arglist__7843){
var coll = cljs.core.first(arglist__7843);
var k = cljs.core.first(cljs.core.next(arglist__7843));
var ks = cljs.core.rest(cljs.core.next(arglist__7843));
return G__7839__delegate.call(this, coll, k, ks);
});
return G__7839;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7835.call(this,coll);
case  2 :
return dissoc__7836.call(this,coll,k);
default:
return dissoc__7837.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7837.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____7844 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7845 = x__451__auto____7844;

if(cljs.core.truth_(and__3546__auto____7845))
{var and__3546__auto____7846 = x__451__auto____7844.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7846))
{return cljs.core.not.call(null,x__451__auto____7844.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7846;
}
} else
{return and__3546__auto____7845;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____7844);
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
var disj__7848 = (function (coll){
return coll;
});
var disj__7849 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7850 = (function() { 
var G__7852__delegate = function (coll,k,ks){
while(true){
var ret__7847 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7853 = ret__7847;
var G__7854 = cljs.core.first.call(null,ks);
var G__7855 = cljs.core.next.call(null,ks);
coll = G__7853;
k = G__7854;
ks = G__7855;
continue;
}
} else
{return ret__7847;
}
break;
}
};
var G__7852 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7852__delegate.call(this, coll, k, ks);
};
G__7852.cljs$lang$maxFixedArity = 2;
G__7852.cljs$lang$applyTo = (function (arglist__7856){
var coll = cljs.core.first(arglist__7856);
var k = cljs.core.first(cljs.core.next(arglist__7856));
var ks = cljs.core.rest(cljs.core.next(arglist__7856));
return G__7852__delegate.call(this, coll, k, ks);
});
return G__7852;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7848.call(this,coll);
case  2 :
return disj__7849.call(this,coll,k);
default:
return disj__7850.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7850.cljs$lang$applyTo;
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
{var x__451__auto____7857 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7858 = x__451__auto____7857;

if(cljs.core.truth_(and__3546__auto____7858))
{var and__3546__auto____7859 = x__451__auto____7857.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7859))
{return cljs.core.not.call(null,x__451__auto____7857.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7859;
}
} else
{return and__3546__auto____7858;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____7857);
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
{var x__451__auto____7860 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7861 = x__451__auto____7860;

if(cljs.core.truth_(and__3546__auto____7861))
{var and__3546__auto____7862 = x__451__auto____7860.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7862))
{return cljs.core.not.call(null,x__451__auto____7860.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7862;
}
} else
{return and__3546__auto____7861;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____7860);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____7863 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7864 = x__451__auto____7863;

if(cljs.core.truth_(and__3546__auto____7864))
{var and__3546__auto____7865 = x__451__auto____7863.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7865))
{return cljs.core.not.call(null,x__451__auto____7863.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7865;
}
} else
{return and__3546__auto____7864;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____7863);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____7866 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7867 = x__451__auto____7866;

if(cljs.core.truth_(and__3546__auto____7867))
{var and__3546__auto____7868 = x__451__auto____7866.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7868))
{return cljs.core.not.call(null,x__451__auto____7866.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7868;
}
} else
{return and__3546__auto____7867;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____7866);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____7869 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7870 = x__451__auto____7869;

if(cljs.core.truth_(and__3546__auto____7870))
{var and__3546__auto____7871 = x__451__auto____7869.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7871))
{return cljs.core.not.call(null,x__451__auto____7869.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____7871;
}
} else
{return and__3546__auto____7870;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____7869);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____7872 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7873 = x__451__auto____7872;

if(cljs.core.truth_(and__3546__auto____7873))
{var and__3546__auto____7874 = x__451__auto____7872.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____7874))
{return cljs.core.not.call(null,x__451__auto____7872.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____7874;
}
} else
{return and__3546__auto____7873;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____7872);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____7875 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7876 = x__451__auto____7875;

if(cljs.core.truth_(and__3546__auto____7876))
{var and__3546__auto____7877 = x__451__auto____7875.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____7877))
{return cljs.core.not.call(null,x__451__auto____7875.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____7877;
}
} else
{return and__3546__auto____7876;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____7875);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__7878 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7878.push(key);
}));
return keys__7878;
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
{var x__451__auto____7879 = s;

if(cljs.core.truth_((function (){var and__3546__auto____7880 = x__451__auto____7879;

if(cljs.core.truth_(and__3546__auto____7880))
{var and__3546__auto____7881 = x__451__auto____7879.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____7881))
{return cljs.core.not.call(null,x__451__auto____7879.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____7881;
}
} else
{return and__3546__auto____7880;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____7879);
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
var and__3546__auto____7882 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7882))
{return cljs.core.not.call(null,(function (){var or__3548__auto____7883 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____7883))
{return or__3548__auto____7883;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____7882;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____7884 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7884))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____7884;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____7885 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7885))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____7885;
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
var and__3546__auto____7886 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____7886))
{return (n == n.toFixed());
} else
{return and__3546__auto____7886;
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
if(cljs.core.truth_((function (){var and__3546__auto____7887 = coll;

if(cljs.core.truth_(and__3546__auto____7887))
{var and__3546__auto____7888 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7888))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7888;
}
} else
{return and__3546__auto____7887;
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
var distinct_QMARK___7893 = (function (x){
return true;
});
var distinct_QMARK___7894 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___7895 = (function() { 
var G__7897__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__7889 = cljs.core.set([y,x]);
var xs__7890 = more;

while(true){
var x__7891 = cljs.core.first.call(null,xs__7890);
var etc__7892 = cljs.core.next.call(null,xs__7890);

if(cljs.core.truth_(xs__7890))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__7889,x__7891)))
{return false;
} else
{{
var G__7898 = cljs.core.conj.call(null,s__7889,x__7891);
var G__7899 = etc__7892;
s__7889 = G__7898;
xs__7890 = G__7899;
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
var G__7897 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7897__delegate.call(this, x, y, more);
};
G__7897.cljs$lang$maxFixedArity = 2;
G__7897.cljs$lang$applyTo = (function (arglist__7900){
var x = cljs.core.first(arglist__7900);
var y = cljs.core.first(cljs.core.next(arglist__7900));
var more = cljs.core.rest(cljs.core.next(arglist__7900));
return G__7897__delegate.call(this, x, y, more);
});
return G__7897;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___7893.call(this,x);
case  2 :
return distinct_QMARK___7894.call(this,x,y);
default:
return distinct_QMARK___7895.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___7895.cljs$lang$applyTo;
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
var r__7901 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__7901)))
{return r__7901;
} else
{if(cljs.core.truth_(r__7901))
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
var sort__7903 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__7904 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7902 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__7902,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7902);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__7903.call(this,comp);
case  2 :
return sort__7904.call(this,comp,coll);
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
var sort_by__7906 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__7907 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__7906.call(this,keyfn,comp);
case  3 :
return sort_by__7907.call(this,keyfn,comp,coll);
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
var reduce__7909 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__7910 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__7909.call(this,f,val);
case  3 :
return reduce__7910.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__7916 = (function (f,coll){
var temp__3695__auto____7912 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7912))
{var s__7913 = temp__3695__auto____7912;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7913),cljs.core.next.call(null,s__7913));
} else
{return f.call(null);
}
});
var seq_reduce__7917 = (function (f,val,coll){
var val__7914 = val;
var coll__7915 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__7915))
{{
var G__7919 = f.call(null,val__7914,cljs.core.first.call(null,coll__7915));
var G__7920 = cljs.core.next.call(null,coll__7915);
val__7914 = G__7919;
coll__7915 = G__7920;
continue;
}
} else
{return val__7914;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__7916.call(this,f,val);
case  3 :
return seq_reduce__7917.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__7921 = null;
var G__7921__7922 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__7921__7923 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__7921 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7921__7922.call(this,coll,f);
case  3 :
return G__7921__7923.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7921;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___7925 = (function (){
return 0;
});
var _PLUS___7926 = (function (x){
return x;
});
var _PLUS___7927 = (function (x,y){
return (x + y);
});
var _PLUS___7928 = (function() { 
var G__7930__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7930 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7930__delegate.call(this, x, y, more);
};
G__7930.cljs$lang$maxFixedArity = 2;
G__7930.cljs$lang$applyTo = (function (arglist__7931){
var x = cljs.core.first(arglist__7931);
var y = cljs.core.first(cljs.core.next(arglist__7931));
var more = cljs.core.rest(cljs.core.next(arglist__7931));
return G__7930__delegate.call(this, x, y, more);
});
return G__7930;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___7925.call(this);
case  1 :
return _PLUS___7926.call(this,x);
case  2 :
return _PLUS___7927.call(this,x,y);
default:
return _PLUS___7928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___7928.cljs$lang$applyTo;
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
var ___7932 = (function (x){
return (- x);
});
var ___7933 = (function (x,y){
return (x - y);
});
var ___7934 = (function() { 
var G__7936__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7936 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7936__delegate.call(this, x, y, more);
};
G__7936.cljs$lang$maxFixedArity = 2;
G__7936.cljs$lang$applyTo = (function (arglist__7937){
var x = cljs.core.first(arglist__7937);
var y = cljs.core.first(cljs.core.next(arglist__7937));
var more = cljs.core.rest(cljs.core.next(arglist__7937));
return G__7936__delegate.call(this, x, y, more);
});
return G__7936;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___7932.call(this,x);
case  2 :
return ___7933.call(this,x,y);
default:
return ___7934.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___7934.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___7938 = (function (){
return 1;
});
var _STAR___7939 = (function (x){
return x;
});
var _STAR___7940 = (function (x,y){
return (x * y);
});
var _STAR___7941 = (function() { 
var G__7943__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7943 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7943__delegate.call(this, x, y, more);
};
G__7943.cljs$lang$maxFixedArity = 2;
G__7943.cljs$lang$applyTo = (function (arglist__7944){
var x = cljs.core.first(arglist__7944);
var y = cljs.core.first(cljs.core.next(arglist__7944));
var more = cljs.core.rest(cljs.core.next(arglist__7944));
return G__7943__delegate.call(this, x, y, more);
});
return G__7943;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___7938.call(this);
case  1 :
return _STAR___7939.call(this,x);
case  2 :
return _STAR___7940.call(this,x,y);
default:
return _STAR___7941.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___7941.cljs$lang$applyTo;
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
var _SLASH___7945 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___7946 = (function (x,y){
return (x / y);
});
var _SLASH___7947 = (function() { 
var G__7949__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7949 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7949__delegate.call(this, x, y, more);
};
G__7949.cljs$lang$maxFixedArity = 2;
G__7949.cljs$lang$applyTo = (function (arglist__7950){
var x = cljs.core.first(arglist__7950);
var y = cljs.core.first(cljs.core.next(arglist__7950));
var more = cljs.core.rest(cljs.core.next(arglist__7950));
return G__7949__delegate.call(this, x, y, more);
});
return G__7949;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___7945.call(this,x);
case  2 :
return _SLASH___7946.call(this,x,y);
default:
return _SLASH___7947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___7947.cljs$lang$applyTo;
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
var _LT___7951 = (function (x){
return true;
});
var _LT___7952 = (function (x,y){
return (x < y);
});
var _LT___7953 = (function() { 
var G__7955__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7956 = y;
var G__7957 = cljs.core.first.call(null,more);
var G__7958 = cljs.core.next.call(null,more);
x = G__7956;
y = G__7957;
more = G__7958;
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
var G__7955 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7955__delegate.call(this, x, y, more);
};
G__7955.cljs$lang$maxFixedArity = 2;
G__7955.cljs$lang$applyTo = (function (arglist__7959){
var x = cljs.core.first(arglist__7959);
var y = cljs.core.first(cljs.core.next(arglist__7959));
var more = cljs.core.rest(cljs.core.next(arglist__7959));
return G__7955__delegate.call(this, x, y, more);
});
return G__7955;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___7951.call(this,x);
case  2 :
return _LT___7952.call(this,x,y);
default:
return _LT___7953.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___7953.cljs$lang$applyTo;
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
var _LT__EQ___7960 = (function (x){
return true;
});
var _LT__EQ___7961 = (function (x,y){
return (x <= y);
});
var _LT__EQ___7962 = (function() { 
var G__7964__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7965 = y;
var G__7966 = cljs.core.first.call(null,more);
var G__7967 = cljs.core.next.call(null,more);
x = G__7965;
y = G__7966;
more = G__7967;
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
var G__7964 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7964__delegate.call(this, x, y, more);
};
G__7964.cljs$lang$maxFixedArity = 2;
G__7964.cljs$lang$applyTo = (function (arglist__7968){
var x = cljs.core.first(arglist__7968);
var y = cljs.core.first(cljs.core.next(arglist__7968));
var more = cljs.core.rest(cljs.core.next(arglist__7968));
return G__7964__delegate.call(this, x, y, more);
});
return G__7964;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___7960.call(this,x);
case  2 :
return _LT__EQ___7961.call(this,x,y);
default:
return _LT__EQ___7962.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___7962.cljs$lang$applyTo;
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
var _GT___7969 = (function (x){
return true;
});
var _GT___7970 = (function (x,y){
return (x > y);
});
var _GT___7971 = (function() { 
var G__7973__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7974 = y;
var G__7975 = cljs.core.first.call(null,more);
var G__7976 = cljs.core.next.call(null,more);
x = G__7974;
y = G__7975;
more = G__7976;
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
var G__7973 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7973__delegate.call(this, x, y, more);
};
G__7973.cljs$lang$maxFixedArity = 2;
G__7973.cljs$lang$applyTo = (function (arglist__7977){
var x = cljs.core.first(arglist__7977);
var y = cljs.core.first(cljs.core.next(arglist__7977));
var more = cljs.core.rest(cljs.core.next(arglist__7977));
return G__7973__delegate.call(this, x, y, more);
});
return G__7973;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___7969.call(this,x);
case  2 :
return _GT___7970.call(this,x,y);
default:
return _GT___7971.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___7971.cljs$lang$applyTo;
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
var _GT__EQ___7978 = (function (x){
return true;
});
var _GT__EQ___7979 = (function (x,y){
return (x >= y);
});
var _GT__EQ___7980 = (function() { 
var G__7982__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7983 = y;
var G__7984 = cljs.core.first.call(null,more);
var G__7985 = cljs.core.next.call(null,more);
x = G__7983;
y = G__7984;
more = G__7985;
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
var G__7982 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7982__delegate.call(this, x, y, more);
};
G__7982.cljs$lang$maxFixedArity = 2;
G__7982.cljs$lang$applyTo = (function (arglist__7986){
var x = cljs.core.first(arglist__7986);
var y = cljs.core.first(cljs.core.next(arglist__7986));
var more = cljs.core.rest(cljs.core.next(arglist__7986));
return G__7982__delegate.call(this, x, y, more);
});
return G__7982;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___7978.call(this,x);
case  2 :
return _GT__EQ___7979.call(this,x,y);
default:
return _GT__EQ___7980.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___7980.cljs$lang$applyTo;
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
var max__7987 = (function (x){
return x;
});
var max__7988 = (function (x,y){
return ((x > y) ? x : y);
});
var max__7989 = (function() { 
var G__7991__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7991 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7991__delegate.call(this, x, y, more);
};
G__7991.cljs$lang$maxFixedArity = 2;
G__7991.cljs$lang$applyTo = (function (arglist__7992){
var x = cljs.core.first(arglist__7992);
var y = cljs.core.first(cljs.core.next(arglist__7992));
var more = cljs.core.rest(cljs.core.next(arglist__7992));
return G__7991__delegate.call(this, x, y, more);
});
return G__7991;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__7987.call(this,x);
case  2 :
return max__7988.call(this,x,y);
default:
return max__7989.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__7989.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__7993 = (function (x){
return x;
});
var min__7994 = (function (x,y){
return ((x < y) ? x : y);
});
var min__7995 = (function() { 
var G__7997__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7997 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7997__delegate.call(this, x, y, more);
};
G__7997.cljs$lang$maxFixedArity = 2;
G__7997.cljs$lang$applyTo = (function (arglist__7998){
var x = cljs.core.first(arglist__7998);
var y = cljs.core.first(cljs.core.next(arglist__7998));
var more = cljs.core.rest(cljs.core.next(arglist__7998));
return G__7997__delegate.call(this, x, y, more);
});
return G__7997;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__7993.call(this,x);
case  2 :
return min__7994.call(this,x,y);
default:
return min__7995.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__7995.cljs$lang$applyTo;
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
var rem__7999 = (n % d);

return cljs.core.fix.call(null,((n - rem__7999) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8000 = cljs.core.quot.call(null,n,d);

return (n - (d * q__8000));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8001 = (function (){
return Math.random.call(null);
});
var rand__8002 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8001.call(this);
case  1 :
return rand__8002.call(this,n);
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
var _EQ__EQ___8004 = (function (x){
return true;
});
var _EQ__EQ___8005 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___8006 = (function() { 
var G__8008__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8009 = y;
var G__8010 = cljs.core.first.call(null,more);
var G__8011 = cljs.core.next.call(null,more);
x = G__8009;
y = G__8010;
more = G__8011;
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
var G__8008 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8008__delegate.call(this, x, y, more);
};
G__8008.cljs$lang$maxFixedArity = 2;
G__8008.cljs$lang$applyTo = (function (arglist__8012){
var x = cljs.core.first(arglist__8012);
var y = cljs.core.first(cljs.core.next(arglist__8012));
var more = cljs.core.rest(cljs.core.next(arglist__8012));
return G__8008__delegate.call(this, x, y, more);
});
return G__8008;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___8004.call(this,x);
case  2 :
return _EQ__EQ___8005.call(this,x,y);
default:
return _EQ__EQ___8006.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8006.cljs$lang$applyTo;
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
var n__8013 = n;
var xs__8014 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8015 = xs__8014;

if(cljs.core.truth_(and__3546__auto____8015))
{return (n__8013 > 0);
} else
{return and__3546__auto____8015;
}
})()))
{{
var G__8016 = (n__8013 - 1);
var G__8017 = cljs.core.next.call(null,xs__8014);
n__8013 = G__8016;
xs__8014 = G__8017;
continue;
}
} else
{return xs__8014;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__8022 = null;
var G__8022__8023 = (function (coll,n){
var temp__3695__auto____8018 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8018))
{var xs__8019 = temp__3695__auto____8018;

return cljs.core.first.call(null,xs__8019);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__8022__8024 = (function (coll,n,not_found){
var temp__3695__auto____8020 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8020))
{var xs__8021 = temp__3695__auto____8020;

return cljs.core.first.call(null,xs__8021);
} else
{return not_found;
}
});
G__8022 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8022__8023.call(this,coll,n);
case  3 :
return G__8022__8024.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8022;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___8026 = (function (){
return "";
});
var str_STAR___8027 = (function (x){
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
var str_STAR___8028 = (function() { 
var G__8030__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8031 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8032 = cljs.core.next.call(null,more);
sb = G__8031;
more = G__8032;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8030 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8030__delegate.call(this, x, ys);
};
G__8030.cljs$lang$maxFixedArity = 1;
G__8030.cljs$lang$applyTo = (function (arglist__8033){
var x = cljs.core.first(arglist__8033);
var ys = cljs.core.rest(arglist__8033);
return G__8030__delegate.call(this, x, ys);
});
return G__8030;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___8026.call(this);
case  1 :
return str_STAR___8027.call(this,x);
default:
return str_STAR___8028.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___8028.cljs$lang$applyTo;
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
var str__8034 = (function (){
return "";
});
var str__8035 = (function (x){
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
var str__8036 = (function() { 
var G__8038__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8039 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8040 = cljs.core.next.call(null,more);
sb = G__8039;
more = G__8040;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8038 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8038__delegate.call(this, x, ys);
};
G__8038.cljs$lang$maxFixedArity = 1;
G__8038.cljs$lang$applyTo = (function (arglist__8041){
var x = cljs.core.first(arglist__8041);
var ys = cljs.core.rest(arglist__8041);
return G__8038__delegate.call(this, x, ys);
});
return G__8038;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__8034.call(this);
case  1 :
return str__8035.call(this,x);
default:
return str__8036.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__8036.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__8042 = (function (s,start){
return s.substring(start);
});
var subs__8043 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__8042.call(this,s,start);
case  3 :
return subs__8043.call(this,s,start,end);
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
var symbol__8045 = (function (name){
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
var symbol__8046 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__8045.call(this,ns);
case  2 :
return symbol__8046.call(this,ns,name);
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
var keyword__8048 = (function (name){
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
var keyword__8049 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__8048.call(this,ns);
case  2 :
return keyword__8049.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8051 = cljs.core.seq.call(null,x);
var ys__8052 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__8051 === null)))
{return (ys__8052 === null);
} else
{if(cljs.core.truth_((ys__8052 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8051),cljs.core.first.call(null,ys__8052))))
{{
var G__8053 = cljs.core.next.call(null,xs__8051);
var G__8054 = cljs.core.next.call(null,ys__8052);
xs__8051 = G__8053;
ys__8052 = G__8054;
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
return cljs.core.reduce.call(null,(function (p1__8055_SHARP_,p2__8056_SHARP_){
return cljs.core.hash_combine.call(null,p1__8055_SHARP_,cljs.core.hash.call(null,p2__8056_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8057__8058 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__8057__8058))
{var G__8060__8062 = cljs.core.first.call(null,G__8057__8058);
var vec__8061__8063 = G__8060__8062;
var key_name__8064 = cljs.core.nth.call(null,vec__8061__8063,0,null);
var f__8065 = cljs.core.nth.call(null,vec__8061__8063,1,null);
var G__8057__8066 = G__8057__8058;

var G__8060__8067 = G__8060__8062;
var G__8057__8068 = G__8057__8066;

while(true){
var vec__8069__8070 = G__8060__8067;
var key_name__8071 = cljs.core.nth.call(null,vec__8069__8070,0,null);
var f__8072 = cljs.core.nth.call(null,vec__8069__8070,1,null);
var G__8057__8073 = G__8057__8068;

var str_name__8074 = cljs.core.name.call(null,key_name__8071);

obj[str_name__8074] = f__8072;
var temp__3698__auto____8075 = cljs.core.next.call(null,G__8057__8073);

if(cljs.core.truth_(temp__3698__auto____8075))
{var G__8057__8076 = temp__3698__auto____8075;

{
var G__8077 = cljs.core.first.call(null,G__8057__8076);
var G__8078 = G__8057__8076;
G__8060__8067 = G__8077;
G__8057__8068 = G__8078;
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
var this__8079 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8080 = this;
return (new cljs.core.List(this__8080.meta,o,coll,(this__8080.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8081 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8082 = this;
return this__8082.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8083 = this;
return this__8083.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8084 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8085 = this;
return this__8085.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8086 = this;
return this__8086.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8087 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8088 = this;
return (new cljs.core.List(meta,this__8088.first,this__8088.rest,this__8088.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8089 = this;
return this__8089.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8090 = this;
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
var this__8091 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8092 = this;
return (new cljs.core.List(this__8092.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8093 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8094 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8095 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8096 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8097 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8098 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8099 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8100 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8101 = this;
return this__8101.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8102 = this;
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
list.cljs$lang$applyTo = (function (arglist__8103){
var items = cljs.core.seq( arglist__8103 );;
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
var this__8104 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8105 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8106 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8107 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8107.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8108 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8109 = this;
return this__8109.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8110 = this;
if(cljs.core.truth_((this__8110.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__8110.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8111 = this;
return this__8111.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8112 = this;
return (new cljs.core.Cons(meta,this__8112.first,this__8112.rest));
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
var G__8113 = null;
var G__8113__8114 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8113__8115 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8113 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__8113__8114.call(this,string,f);
case  3 :
return G__8113__8115.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8113;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8117 = null;
var G__8117__8118 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8117__8119 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8117 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__8117__8118.call(this,string,k);
case  3 :
return G__8117__8119.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8117;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8121 = null;
var G__8121__8122 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__8121__8123 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8121 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__8121__8122.call(this,string,n);
case  3 :
return G__8121__8123.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8121;
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
var G__8131 = null;
var G__8131__8132 = (function (tsym8125,coll){
var tsym8125__8127 = this;

var this$__8128 = tsym8125__8127;

return cljs.core.get.call(null,coll,this$__8128.toString());
});
var G__8131__8133 = (function (tsym8126,coll,not_found){
var tsym8126__8129 = this;

var this$__8130 = tsym8126__8129;

return cljs.core.get.call(null,coll,this$__8130.toString(),not_found);
});
G__8131 = function(tsym8126,coll,not_found){
switch(arguments.length){
case  2 :
return G__8131__8132.call(this,tsym8126,coll);
case  3 :
return G__8131__8133.call(this,tsym8126,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8131;
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
var x__8135 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__8135;
} else
{lazy_seq.x = x__8135.call(null);
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
var this__8136 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8137 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8138 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8139 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8139.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8140 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8141 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8142 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8143 = this;
return this__8143.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8144 = this;
return (new cljs.core.LazySeq(meta,this__8144.realized,this__8144.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8145 = [];

var s__8146 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8146)))
{ary__8145.push(cljs.core.first.call(null,s__8146));
{
var G__8147 = cljs.core.next.call(null,s__8146);
s__8146 = G__8147;
continue;
}
} else
{return ary__8145;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__8148 = s;
var i__8149 = n;
var sum__8150 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8151 = (i__8149 > 0);

if(cljs.core.truth_(and__3546__auto____8151))
{return cljs.core.seq.call(null,s__8148);
} else
{return and__3546__auto____8151;
}
})()))
{{
var G__8152 = cljs.core.next.call(null,s__8148);
var G__8153 = (i__8149 - 1);
var G__8154 = (sum__8150 + 1);
s__8148 = G__8152;
i__8149 = G__8153;
sum__8150 = G__8154;
continue;
}
} else
{return sum__8150;
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
var concat__8158 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__8159 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__8160 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8155 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__8155))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8155),concat.call(null,cljs.core.rest.call(null,s__8155),y));
} else
{return y;
}
})));
});
var concat__8161 = (function() { 
var G__8163__delegate = function (x,y,zs){
var cat__8157 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8156 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__8156))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8156),cat.call(null,cljs.core.rest.call(null,xys__8156),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__8157.call(null,concat.call(null,x,y),zs);
};
var G__8163 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8163__delegate.call(this, x, y, zs);
};
G__8163.cljs$lang$maxFixedArity = 2;
G__8163.cljs$lang$applyTo = (function (arglist__8164){
var x = cljs.core.first(arglist__8164);
var y = cljs.core.first(cljs.core.next(arglist__8164));
var zs = cljs.core.rest(cljs.core.next(arglist__8164));
return G__8163__delegate.call(this, x, y, zs);
});
return G__8163;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__8158.call(this);
case  1 :
return concat__8159.call(this,x);
case  2 :
return concat__8160.call(this,x,y);
default:
return concat__8161.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__8161.cljs$lang$applyTo;
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
var list_STAR___8165 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___8166 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___8167 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___8168 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___8169 = (function() { 
var G__8171__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8171 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8171__delegate.call(this, a, b, c, d, more);
};
G__8171.cljs$lang$maxFixedArity = 4;
G__8171.cljs$lang$applyTo = (function (arglist__8172){
var a = cljs.core.first(arglist__8172);
var b = cljs.core.first(cljs.core.next(arglist__8172));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8172)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8172))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8172))));
return G__8171__delegate.call(this, a, b, c, d, more);
});
return G__8171;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___8165.call(this,a);
case  2 :
return list_STAR___8166.call(this,a,b);
case  3 :
return list_STAR___8167.call(this,a,b,c);
case  4 :
return list_STAR___8168.call(this,a,b,c,d);
default:
return list_STAR___8169.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___8169.cljs$lang$applyTo;
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
var apply__8182 = (function (f,args){
var fixed_arity__8173 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__8173 + 1)) <= fixed_arity__8173)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__8183 = (function (f,x,args){
var arglist__8174 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8175 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8174,fixed_arity__8175) <= fixed_arity__8175)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8174));
} else
{return f.cljs$lang$applyTo(arglist__8174);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8174));
}
});
var apply__8184 = (function (f,x,y,args){
var arglist__8176 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8177 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8176,fixed_arity__8177) <= fixed_arity__8177)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8176));
} else
{return f.cljs$lang$applyTo(arglist__8176);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8176));
}
});
var apply__8185 = (function (f,x,y,z,args){
var arglist__8178 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8179 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8178,fixed_arity__8179) <= fixed_arity__8179)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8178));
} else
{return f.cljs$lang$applyTo(arglist__8178);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8178));
}
});
var apply__8186 = (function() { 
var G__8188__delegate = function (f,a,b,c,d,args){
var arglist__8180 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8181 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8180,fixed_arity__8181) <= fixed_arity__8181)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8180));
} else
{return f.cljs$lang$applyTo(arglist__8180);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8180));
}
};
var G__8188 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8188__delegate.call(this, f, a, b, c, d, args);
};
G__8188.cljs$lang$maxFixedArity = 5;
G__8188.cljs$lang$applyTo = (function (arglist__8189){
var f = cljs.core.first(arglist__8189);
var a = cljs.core.first(cljs.core.next(arglist__8189));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8189)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8189))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8189)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8189)))));
return G__8188__delegate.call(this, f, a, b, c, d, args);
});
return G__8188;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__8182.call(this,f,a);
case  3 :
return apply__8183.call(this,f,a,b);
case  4 :
return apply__8184.call(this,f,a,b,c);
case  5 :
return apply__8185.call(this,f,a,b,c,d);
default:
return apply__8186.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__8186.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__8190){
var obj = cljs.core.first(arglist__8190);
var f = cljs.core.first(cljs.core.next(arglist__8190));
var args = cljs.core.rest(cljs.core.next(arglist__8190));
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
var not_EQ___8191 = (function (x){
return false;
});
var not_EQ___8192 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___8193 = (function() { 
var G__8195__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8195 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8195__delegate.call(this, x, y, more);
};
G__8195.cljs$lang$maxFixedArity = 2;
G__8195.cljs$lang$applyTo = (function (arglist__8196){
var x = cljs.core.first(arglist__8196);
var y = cljs.core.first(cljs.core.next(arglist__8196));
var more = cljs.core.rest(cljs.core.next(arglist__8196));
return G__8195__delegate.call(this, x, y, more);
});
return G__8195;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___8191.call(this,x);
case  2 :
return not_EQ___8192.call(this,x,y);
default:
return not_EQ___8193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___8193.cljs$lang$applyTo;
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
var G__8197 = pred;
var G__8198 = cljs.core.next.call(null,coll);
pred = G__8197;
coll = G__8198;
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
{var or__3548__auto____8199 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____8199))
{return or__3548__auto____8199;
} else
{{
var G__8200 = pred;
var G__8201 = cljs.core.next.call(null,coll);
pred = G__8200;
coll = G__8201;
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
var G__8202 = null;
var G__8202__8203 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8202__8204 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8202__8205 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8202__8206 = (function() { 
var G__8208__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8208 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8208__delegate.call(this, x, y, zs);
};
G__8208.cljs$lang$maxFixedArity = 2;
G__8208.cljs$lang$applyTo = (function (arglist__8209){
var x = cljs.core.first(arglist__8209);
var y = cljs.core.first(cljs.core.next(arglist__8209));
var zs = cljs.core.rest(cljs.core.next(arglist__8209));
return G__8208__delegate.call(this, x, y, zs);
});
return G__8208;
})()
;
G__8202 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__8202__8203.call(this);
case  1 :
return G__8202__8204.call(this,x);
case  2 :
return G__8202__8205.call(this,x,y);
default:
return G__8202__8206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8202.cljs$lang$maxFixedArity = 2;
G__8202.cljs$lang$applyTo = G__8202__8206.cljs$lang$applyTo;
return G__8202;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8210__delegate = function (args){
return x;
};
var G__8210 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8210__delegate.call(this, args);
};
G__8210.cljs$lang$maxFixedArity = 0;
G__8210.cljs$lang$applyTo = (function (arglist__8211){
var args = cljs.core.seq( arglist__8211 );;
return G__8210__delegate.call(this, args);
});
return G__8210;
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
var comp__8215 = (function (){
return cljs.core.identity;
});
var comp__8216 = (function (f){
return f;
});
var comp__8217 = (function (f,g){
return (function() {
var G__8221 = null;
var G__8221__8222 = (function (){
return f.call(null,g.call(null));
});
var G__8221__8223 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8221__8224 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8221__8225 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8221__8226 = (function() { 
var G__8228__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8228 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8228__delegate.call(this, x, y, z, args);
};
G__8228.cljs$lang$maxFixedArity = 3;
G__8228.cljs$lang$applyTo = (function (arglist__8229){
var x = cljs.core.first(arglist__8229);
var y = cljs.core.first(cljs.core.next(arglist__8229));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8229)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8229)));
return G__8228__delegate.call(this, x, y, z, args);
});
return G__8228;
})()
;
G__8221 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8221__8222.call(this);
case  1 :
return G__8221__8223.call(this,x);
case  2 :
return G__8221__8224.call(this,x,y);
case  3 :
return G__8221__8225.call(this,x,y,z);
default:
return G__8221__8226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8221.cljs$lang$maxFixedArity = 3;
G__8221.cljs$lang$applyTo = G__8221__8226.cljs$lang$applyTo;
return G__8221;
})()
});
var comp__8218 = (function (f,g,h){
return (function() {
var G__8230 = null;
var G__8230__8231 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8230__8232 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8230__8233 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8230__8234 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8230__8235 = (function() { 
var G__8237__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8237 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8237__delegate.call(this, x, y, z, args);
};
G__8237.cljs$lang$maxFixedArity = 3;
G__8237.cljs$lang$applyTo = (function (arglist__8238){
var x = cljs.core.first(arglist__8238);
var y = cljs.core.first(cljs.core.next(arglist__8238));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8238)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8238)));
return G__8237__delegate.call(this, x, y, z, args);
});
return G__8237;
})()
;
G__8230 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8230__8231.call(this);
case  1 :
return G__8230__8232.call(this,x);
case  2 :
return G__8230__8233.call(this,x,y);
case  3 :
return G__8230__8234.call(this,x,y,z);
default:
return G__8230__8235.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8230.cljs$lang$maxFixedArity = 3;
G__8230.cljs$lang$applyTo = G__8230__8235.cljs$lang$applyTo;
return G__8230;
})()
});
var comp__8219 = (function() { 
var G__8239__delegate = function (f1,f2,f3,fs){
var fs__8212 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__8240__delegate = function (args){
var ret__8213 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8212),args);
var fs__8214 = cljs.core.next.call(null,fs__8212);

while(true){
if(cljs.core.truth_(fs__8214))
{{
var G__8241 = cljs.core.first.call(null,fs__8214).call(null,ret__8213);
var G__8242 = cljs.core.next.call(null,fs__8214);
ret__8213 = G__8241;
fs__8214 = G__8242;
continue;
}
} else
{return ret__8213;
}
break;
}
};
var G__8240 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8240__delegate.call(this, args);
};
G__8240.cljs$lang$maxFixedArity = 0;
G__8240.cljs$lang$applyTo = (function (arglist__8243){
var args = cljs.core.seq( arglist__8243 );;
return G__8240__delegate.call(this, args);
});
return G__8240;
})()
;
};
var G__8239 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8239__delegate.call(this, f1, f2, f3, fs);
};
G__8239.cljs$lang$maxFixedArity = 3;
G__8239.cljs$lang$applyTo = (function (arglist__8244){
var f1 = cljs.core.first(arglist__8244);
var f2 = cljs.core.first(cljs.core.next(arglist__8244));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8244)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8244)));
return G__8239__delegate.call(this, f1, f2, f3, fs);
});
return G__8239;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__8215.call(this);
case  1 :
return comp__8216.call(this,f1);
case  2 :
return comp__8217.call(this,f1,f2);
case  3 :
return comp__8218.call(this,f1,f2,f3);
default:
return comp__8219.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__8219.cljs$lang$applyTo;
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
var partial__8245 = (function (f,arg1){
return (function() { 
var G__8250__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8250 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8250__delegate.call(this, args);
};
G__8250.cljs$lang$maxFixedArity = 0;
G__8250.cljs$lang$applyTo = (function (arglist__8251){
var args = cljs.core.seq( arglist__8251 );;
return G__8250__delegate.call(this, args);
});
return G__8250;
})()
;
});
var partial__8246 = (function (f,arg1,arg2){
return (function() { 
var G__8252__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8252 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8252__delegate.call(this, args);
};
G__8252.cljs$lang$maxFixedArity = 0;
G__8252.cljs$lang$applyTo = (function (arglist__8253){
var args = cljs.core.seq( arglist__8253 );;
return G__8252__delegate.call(this, args);
});
return G__8252;
})()
;
});
var partial__8247 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8254__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8254 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8254__delegate.call(this, args);
};
G__8254.cljs$lang$maxFixedArity = 0;
G__8254.cljs$lang$applyTo = (function (arglist__8255){
var args = cljs.core.seq( arglist__8255 );;
return G__8254__delegate.call(this, args);
});
return G__8254;
})()
;
});
var partial__8248 = (function() { 
var G__8256__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8257__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8257 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8257__delegate.call(this, args);
};
G__8257.cljs$lang$maxFixedArity = 0;
G__8257.cljs$lang$applyTo = (function (arglist__8258){
var args = cljs.core.seq( arglist__8258 );;
return G__8257__delegate.call(this, args);
});
return G__8257;
})()
;
};
var G__8256 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8256__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8256.cljs$lang$maxFixedArity = 4;
G__8256.cljs$lang$applyTo = (function (arglist__8259){
var f = cljs.core.first(arglist__8259);
var arg1 = cljs.core.first(cljs.core.next(arglist__8259));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8259)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8259))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8259))));
return G__8256__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__8256;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__8245.call(this,f,arg1);
case  3 :
return partial__8246.call(this,f,arg1,arg2);
case  4 :
return partial__8247.call(this,f,arg1,arg2,arg3);
default:
return partial__8248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__8248.cljs$lang$applyTo;
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
var fnil__8260 = (function (f,x){
return (function() {
var G__8264 = null;
var G__8264__8265 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__8264__8266 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__8264__8267 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__8264__8268 = (function() { 
var G__8270__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__8270 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8270__delegate.call(this, a, b, c, ds);
};
G__8270.cljs$lang$maxFixedArity = 3;
G__8270.cljs$lang$applyTo = (function (arglist__8271){
var a = cljs.core.first(arglist__8271);
var b = cljs.core.first(cljs.core.next(arglist__8271));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8271)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8271)));
return G__8270__delegate.call(this, a, b, c, ds);
});
return G__8270;
})()
;
G__8264 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__8264__8265.call(this,a);
case  2 :
return G__8264__8266.call(this,a,b);
case  3 :
return G__8264__8267.call(this,a,b,c);
default:
return G__8264__8268.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8264.cljs$lang$maxFixedArity = 3;
G__8264.cljs$lang$applyTo = G__8264__8268.cljs$lang$applyTo;
return G__8264;
})()
});
var fnil__8261 = (function (f,x,y){
return (function() {
var G__8272 = null;
var G__8272__8273 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__8272__8274 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__8272__8275 = (function() { 
var G__8277__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__8277 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8277__delegate.call(this, a, b, c, ds);
};
G__8277.cljs$lang$maxFixedArity = 3;
G__8277.cljs$lang$applyTo = (function (arglist__8278){
var a = cljs.core.first(arglist__8278);
var b = cljs.core.first(cljs.core.next(arglist__8278));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8278)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8278)));
return G__8277__delegate.call(this, a, b, c, ds);
});
return G__8277;
})()
;
G__8272 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8272__8273.call(this,a,b);
case  3 :
return G__8272__8274.call(this,a,b,c);
default:
return G__8272__8275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8272.cljs$lang$maxFixedArity = 3;
G__8272.cljs$lang$applyTo = G__8272__8275.cljs$lang$applyTo;
return G__8272;
})()
});
var fnil__8262 = (function (f,x,y,z){
return (function() {
var G__8279 = null;
var G__8279__8280 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__8279__8281 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__8279__8282 = (function() { 
var G__8284__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__8284 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8284__delegate.call(this, a, b, c, ds);
};
G__8284.cljs$lang$maxFixedArity = 3;
G__8284.cljs$lang$applyTo = (function (arglist__8285){
var a = cljs.core.first(arglist__8285);
var b = cljs.core.first(cljs.core.next(arglist__8285));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8285)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8285)));
return G__8284__delegate.call(this, a, b, c, ds);
});
return G__8284;
})()
;
G__8279 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8279__8280.call(this,a,b);
case  3 :
return G__8279__8281.call(this,a,b,c);
default:
return G__8279__8282.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8279.cljs$lang$maxFixedArity = 3;
G__8279.cljs$lang$applyTo = G__8279__8282.cljs$lang$applyTo;
return G__8279;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__8260.call(this,f,x);
case  3 :
return fnil__8261.call(this,f,x,y);
case  4 :
return fnil__8262.call(this,f,x,y,z);
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
var mapi__8288 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8286 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8286))
{var s__8287 = temp__3698__auto____8286;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8287)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8287)));
} else
{return null;
}
})));
});

return mapi__8288.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8289 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8289))
{var s__8290 = temp__3698__auto____8289;

var x__8291 = f.call(null,cljs.core.first.call(null,s__8290));

if(cljs.core.truth_((x__8291 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__8290));
} else
{return cljs.core.cons.call(null,x__8291,keep.call(null,f,cljs.core.rest.call(null,s__8290)));
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
var keepi__8301 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8298 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8298))
{var s__8299 = temp__3698__auto____8298;

var x__8300 = f.call(null,idx,cljs.core.first.call(null,s__8299));

if(cljs.core.truth_((x__8300 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8299));
} else
{return cljs.core.cons.call(null,x__8300,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8299)));
}
} else
{return null;
}
})));
});

return keepi__8301.call(null,0,coll);
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
var every_pred__8346 = (function (p){
return (function() {
var ep1 = null;
var ep1__8351 = (function (){
return true;
});
var ep1__8352 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__8353 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8308 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8308))
{return p.call(null,y);
} else
{return and__3546__auto____8308;
}
})());
});
var ep1__8354 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8309 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8309))
{var and__3546__auto____8310 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____8310))
{return p.call(null,z);
} else
{return and__3546__auto____8310;
}
} else
{return and__3546__auto____8309;
}
})());
});
var ep1__8355 = (function() { 
var G__8357__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8311 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8311))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____8311;
}
})());
};
var G__8357 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8357__delegate.call(this, x, y, z, args);
};
G__8357.cljs$lang$maxFixedArity = 3;
G__8357.cljs$lang$applyTo = (function (arglist__8358){
var x = cljs.core.first(arglist__8358);
var y = cljs.core.first(cljs.core.next(arglist__8358));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8358)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8358)));
return G__8357__delegate.call(this, x, y, z, args);
});
return G__8357;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__8351.call(this);
case  1 :
return ep1__8352.call(this,x);
case  2 :
return ep1__8353.call(this,x,y);
case  3 :
return ep1__8354.call(this,x,y,z);
default:
return ep1__8355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__8355.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__8347 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__8359 = (function (){
return true;
});
var ep2__8360 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8312 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8312))
{return p2.call(null,x);
} else
{return and__3546__auto____8312;
}
})());
});
var ep2__8361 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8313 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8313))
{var and__3546__auto____8314 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8314))
{var and__3546__auto____8315 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8315))
{return p2.call(null,y);
} else
{return and__3546__auto____8315;
}
} else
{return and__3546__auto____8314;
}
} else
{return and__3546__auto____8313;
}
})());
});
var ep2__8362 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8316 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8316))
{var and__3546__auto____8317 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8317))
{var and__3546__auto____8318 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8318))
{var and__3546__auto____8319 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8319))
{var and__3546__auto____8320 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8320))
{return p2.call(null,z);
} else
{return and__3546__auto____8320;
}
} else
{return and__3546__auto____8319;
}
} else
{return and__3546__auto____8318;
}
} else
{return and__3546__auto____8317;
}
} else
{return and__3546__auto____8316;
}
})());
});
var ep2__8363 = (function() { 
var G__8365__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8321 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8321))
{return cljs.core.every_QMARK_.call(null,(function (p1__8292_SHARP_){
var and__3546__auto____8322 = p1.call(null,p1__8292_SHARP_);

if(cljs.core.truth_(and__3546__auto____8322))
{return p2.call(null,p1__8292_SHARP_);
} else
{return and__3546__auto____8322;
}
}),args);
} else
{return and__3546__auto____8321;
}
})());
};
var G__8365 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8365__delegate.call(this, x, y, z, args);
};
G__8365.cljs$lang$maxFixedArity = 3;
G__8365.cljs$lang$applyTo = (function (arglist__8366){
var x = cljs.core.first(arglist__8366);
var y = cljs.core.first(cljs.core.next(arglist__8366));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8366)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8366)));
return G__8365__delegate.call(this, x, y, z, args);
});
return G__8365;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__8359.call(this);
case  1 :
return ep2__8360.call(this,x);
case  2 :
return ep2__8361.call(this,x,y);
case  3 :
return ep2__8362.call(this,x,y,z);
default:
return ep2__8363.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__8363.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__8348 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__8367 = (function (){
return true;
});
var ep3__8368 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8323 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8323))
{var and__3546__auto____8324 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8324))
{return p3.call(null,x);
} else
{return and__3546__auto____8324;
}
} else
{return and__3546__auto____8323;
}
})());
});
var ep3__8369 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8325 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8325))
{var and__3546__auto____8326 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8326))
{var and__3546__auto____8327 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8327))
{var and__3546__auto____8328 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8328))
{var and__3546__auto____8329 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8329))
{return p3.call(null,y);
} else
{return and__3546__auto____8329;
}
} else
{return and__3546__auto____8328;
}
} else
{return and__3546__auto____8327;
}
} else
{return and__3546__auto____8326;
}
} else
{return and__3546__auto____8325;
}
})());
});
var ep3__8370 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8330 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8330))
{var and__3546__auto____8331 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8331))
{var and__3546__auto____8332 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8332))
{var and__3546__auto____8333 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8333))
{var and__3546__auto____8334 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8334))
{var and__3546__auto____8335 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____8335))
{var and__3546__auto____8336 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8336))
{var and__3546__auto____8337 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____8337))
{return p3.call(null,z);
} else
{return and__3546__auto____8337;
}
} else
{return and__3546__auto____8336;
}
} else
{return and__3546__auto____8335;
}
} else
{return and__3546__auto____8334;
}
} else
{return and__3546__auto____8333;
}
} else
{return and__3546__auto____8332;
}
} else
{return and__3546__auto____8331;
}
} else
{return and__3546__auto____8330;
}
})());
});
var ep3__8371 = (function() { 
var G__8373__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8338 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8338))
{return cljs.core.every_QMARK_.call(null,(function (p1__8293_SHARP_){
var and__3546__auto____8339 = p1.call(null,p1__8293_SHARP_);

if(cljs.core.truth_(and__3546__auto____8339))
{var and__3546__auto____8340 = p2.call(null,p1__8293_SHARP_);

if(cljs.core.truth_(and__3546__auto____8340))
{return p3.call(null,p1__8293_SHARP_);
} else
{return and__3546__auto____8340;
}
} else
{return and__3546__auto____8339;
}
}),args);
} else
{return and__3546__auto____8338;
}
})());
};
var G__8373 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8373__delegate.call(this, x, y, z, args);
};
G__8373.cljs$lang$maxFixedArity = 3;
G__8373.cljs$lang$applyTo = (function (arglist__8374){
var x = cljs.core.first(arglist__8374);
var y = cljs.core.first(cljs.core.next(arglist__8374));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8374)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8374)));
return G__8373__delegate.call(this, x, y, z, args);
});
return G__8373;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__8367.call(this);
case  1 :
return ep3__8368.call(this,x);
case  2 :
return ep3__8369.call(this,x,y);
case  3 :
return ep3__8370.call(this,x,y,z);
default:
return ep3__8371.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__8371.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__8349 = (function() { 
var G__8375__delegate = function (p1,p2,p3,ps){
var ps__8341 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__8376 = (function (){
return true;
});
var epn__8377 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8294_SHARP_){
return p1__8294_SHARP_.call(null,x);
}),ps__8341);
});
var epn__8378 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8295_SHARP_){
var and__3546__auto____8342 = p1__8295_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8342))
{return p1__8295_SHARP_.call(null,y);
} else
{return and__3546__auto____8342;
}
}),ps__8341);
});
var epn__8379 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8296_SHARP_){
var and__3546__auto____8343 = p1__8296_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8343))
{var and__3546__auto____8344 = p1__8296_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____8344))
{return p1__8296_SHARP_.call(null,z);
} else
{return and__3546__auto____8344;
}
} else
{return and__3546__auto____8343;
}
}),ps__8341);
});
var epn__8380 = (function() { 
var G__8382__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8345 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8345))
{return cljs.core.every_QMARK_.call(null,(function (p1__8297_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8297_SHARP_,args);
}),ps__8341);
} else
{return and__3546__auto____8345;
}
})());
};
var G__8382 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8382__delegate.call(this, x, y, z, args);
};
G__8382.cljs$lang$maxFixedArity = 3;
G__8382.cljs$lang$applyTo = (function (arglist__8383){
var x = cljs.core.first(arglist__8383);
var y = cljs.core.first(cljs.core.next(arglist__8383));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8383)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8383)));
return G__8382__delegate.call(this, x, y, z, args);
});
return G__8382;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__8376.call(this);
case  1 :
return epn__8377.call(this,x);
case  2 :
return epn__8378.call(this,x,y);
case  3 :
return epn__8379.call(this,x,y,z);
default:
return epn__8380.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__8380.cljs$lang$applyTo;
return epn;
})()
};
var G__8375 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8375__delegate.call(this, p1, p2, p3, ps);
};
G__8375.cljs$lang$maxFixedArity = 3;
G__8375.cljs$lang$applyTo = (function (arglist__8384){
var p1 = cljs.core.first(arglist__8384);
var p2 = cljs.core.first(cljs.core.next(arglist__8384));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8384)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8384)));
return G__8375__delegate.call(this, p1, p2, p3, ps);
});
return G__8375;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__8346.call(this,p1);
case  2 :
return every_pred__8347.call(this,p1,p2);
case  3 :
return every_pred__8348.call(this,p1,p2,p3);
default:
return every_pred__8349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__8349.cljs$lang$applyTo;
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
var some_fn__8424 = (function (p){
return (function() {
var sp1 = null;
var sp1__8429 = (function (){
return null;
});
var sp1__8430 = (function (x){
return p.call(null,x);
});
var sp1__8431 = (function (x,y){
var or__3548__auto____8386 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8386))
{return or__3548__auto____8386;
} else
{return p.call(null,y);
}
});
var sp1__8432 = (function (x,y,z){
var or__3548__auto____8387 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8387))
{return or__3548__auto____8387;
} else
{var or__3548__auto____8388 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____8388))
{return or__3548__auto____8388;
} else
{return p.call(null,z);
}
}
});
var sp1__8433 = (function() { 
var G__8435__delegate = function (x,y,z,args){
var or__3548__auto____8389 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8389))
{return or__3548__auto____8389;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8435 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8435__delegate.call(this, x, y, z, args);
};
G__8435.cljs$lang$maxFixedArity = 3;
G__8435.cljs$lang$applyTo = (function (arglist__8436){
var x = cljs.core.first(arglist__8436);
var y = cljs.core.first(cljs.core.next(arglist__8436));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8436)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8436)));
return G__8435__delegate.call(this, x, y, z, args);
});
return G__8435;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__8429.call(this);
case  1 :
return sp1__8430.call(this,x);
case  2 :
return sp1__8431.call(this,x,y);
case  3 :
return sp1__8432.call(this,x,y,z);
default:
return sp1__8433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__8433.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__8425 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__8437 = (function (){
return null;
});
var sp2__8438 = (function (x){
var or__3548__auto____8390 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8390))
{return or__3548__auto____8390;
} else
{return p2.call(null,x);
}
});
var sp2__8439 = (function (x,y){
var or__3548__auto____8391 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8391))
{return or__3548__auto____8391;
} else
{var or__3548__auto____8392 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8392))
{return or__3548__auto____8392;
} else
{var or__3548__auto____8393 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8393))
{return or__3548__auto____8393;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__8440 = (function (x,y,z){
var or__3548__auto____8394 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8394))
{return or__3548__auto____8394;
} else
{var or__3548__auto____8395 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8395))
{return or__3548__auto____8395;
} else
{var or__3548__auto____8396 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8396))
{return or__3548__auto____8396;
} else
{var or__3548__auto____8397 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8397))
{return or__3548__auto____8397;
} else
{var or__3548__auto____8398 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8398))
{return or__3548__auto____8398;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__8441 = (function() { 
var G__8443__delegate = function (x,y,z,args){
var or__3548__auto____8399 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8399))
{return or__3548__auto____8399;
} else
{return cljs.core.some.call(null,(function (p1__8302_SHARP_){
var or__3548__auto____8400 = p1.call(null,p1__8302_SHARP_);

if(cljs.core.truth_(or__3548__auto____8400))
{return or__3548__auto____8400;
} else
{return p2.call(null,p1__8302_SHARP_);
}
}),args);
}
};
var G__8443 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8443__delegate.call(this, x, y, z, args);
};
G__8443.cljs$lang$maxFixedArity = 3;
G__8443.cljs$lang$applyTo = (function (arglist__8444){
var x = cljs.core.first(arglist__8444);
var y = cljs.core.first(cljs.core.next(arglist__8444));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8444)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8444)));
return G__8443__delegate.call(this, x, y, z, args);
});
return G__8443;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__8437.call(this);
case  1 :
return sp2__8438.call(this,x);
case  2 :
return sp2__8439.call(this,x,y);
case  3 :
return sp2__8440.call(this,x,y,z);
default:
return sp2__8441.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__8441.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__8426 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__8445 = (function (){
return null;
});
var sp3__8446 = (function (x){
var or__3548__auto____8401 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8401))
{return or__3548__auto____8401;
} else
{var or__3548__auto____8402 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8402))
{return or__3548__auto____8402;
} else
{return p3.call(null,x);
}
}
});
var sp3__8447 = (function (x,y){
var or__3548__auto____8403 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8403))
{return or__3548__auto____8403;
} else
{var or__3548__auto____8404 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8404))
{return or__3548__auto____8404;
} else
{var or__3548__auto____8405 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8405))
{return or__3548__auto____8405;
} else
{var or__3548__auto____8406 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8406))
{return or__3548__auto____8406;
} else
{var or__3548__auto____8407 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8407))
{return or__3548__auto____8407;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__8448 = (function (x,y,z){
var or__3548__auto____8408 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8408))
{return or__3548__auto____8408;
} else
{var or__3548__auto____8409 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8409))
{return or__3548__auto____8409;
} else
{var or__3548__auto____8410 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8410))
{return or__3548__auto____8410;
} else
{var or__3548__auto____8411 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8411))
{return or__3548__auto____8411;
} else
{var or__3548__auto____8412 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8412))
{return or__3548__auto____8412;
} else
{var or__3548__auto____8413 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____8413))
{return or__3548__auto____8413;
} else
{var or__3548__auto____8414 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8414))
{return or__3548__auto____8414;
} else
{var or__3548__auto____8415 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____8415))
{return or__3548__auto____8415;
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
var sp3__8449 = (function() { 
var G__8451__delegate = function (x,y,z,args){
var or__3548__auto____8416 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8416))
{return or__3548__auto____8416;
} else
{return cljs.core.some.call(null,(function (p1__8303_SHARP_){
var or__3548__auto____8417 = p1.call(null,p1__8303_SHARP_);

if(cljs.core.truth_(or__3548__auto____8417))
{return or__3548__auto____8417;
} else
{var or__3548__auto____8418 = p2.call(null,p1__8303_SHARP_);

if(cljs.core.truth_(or__3548__auto____8418))
{return or__3548__auto____8418;
} else
{return p3.call(null,p1__8303_SHARP_);
}
}
}),args);
}
};
var G__8451 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8451__delegate.call(this, x, y, z, args);
};
G__8451.cljs$lang$maxFixedArity = 3;
G__8451.cljs$lang$applyTo = (function (arglist__8452){
var x = cljs.core.first(arglist__8452);
var y = cljs.core.first(cljs.core.next(arglist__8452));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8452)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8452)));
return G__8451__delegate.call(this, x, y, z, args);
});
return G__8451;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__8445.call(this);
case  1 :
return sp3__8446.call(this,x);
case  2 :
return sp3__8447.call(this,x,y);
case  3 :
return sp3__8448.call(this,x,y,z);
default:
return sp3__8449.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__8449.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__8427 = (function() { 
var G__8453__delegate = function (p1,p2,p3,ps){
var ps__8419 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__8454 = (function (){
return null;
});
var spn__8455 = (function (x){
return cljs.core.some.call(null,(function (p1__8304_SHARP_){
return p1__8304_SHARP_.call(null,x);
}),ps__8419);
});
var spn__8456 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8305_SHARP_){
var or__3548__auto____8420 = p1__8305_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8420))
{return or__3548__auto____8420;
} else
{return p1__8305_SHARP_.call(null,y);
}
}),ps__8419);
});
var spn__8457 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8306_SHARP_){
var or__3548__auto____8421 = p1__8306_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8421))
{return or__3548__auto____8421;
} else
{var or__3548__auto____8422 = p1__8306_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____8422))
{return or__3548__auto____8422;
} else
{return p1__8306_SHARP_.call(null,z);
}
}
}),ps__8419);
});
var spn__8458 = (function() { 
var G__8460__delegate = function (x,y,z,args){
var or__3548__auto____8423 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8423))
{return or__3548__auto____8423;
} else
{return cljs.core.some.call(null,(function (p1__8307_SHARP_){
return cljs.core.some.call(null,p1__8307_SHARP_,args);
}),ps__8419);
}
};
var G__8460 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8460__delegate.call(this, x, y, z, args);
};
G__8460.cljs$lang$maxFixedArity = 3;
G__8460.cljs$lang$applyTo = (function (arglist__8461){
var x = cljs.core.first(arglist__8461);
var y = cljs.core.first(cljs.core.next(arglist__8461));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8461)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8461)));
return G__8460__delegate.call(this, x, y, z, args);
});
return G__8460;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__8454.call(this);
case  1 :
return spn__8455.call(this,x);
case  2 :
return spn__8456.call(this,x,y);
case  3 :
return spn__8457.call(this,x,y,z);
default:
return spn__8458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__8458.cljs$lang$applyTo;
return spn;
})()
};
var G__8453 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8453__delegate.call(this, p1, p2, p3, ps);
};
G__8453.cljs$lang$maxFixedArity = 3;
G__8453.cljs$lang$applyTo = (function (arglist__8462){
var p1 = cljs.core.first(arglist__8462);
var p2 = cljs.core.first(cljs.core.next(arglist__8462));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8462)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8462)));
return G__8453__delegate.call(this, p1, p2, p3, ps);
});
return G__8453;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__8424.call(this,p1);
case  2 :
return some_fn__8425.call(this,p1,p2);
case  3 :
return some_fn__8426.call(this,p1,p2,p3);
default:
return some_fn__8427.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__8427.cljs$lang$applyTo;
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
var map__8475 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8463 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8463))
{var s__8464 = temp__3698__auto____8463;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8464)),map.call(null,f,cljs.core.rest.call(null,s__8464)));
} else
{return null;
}
})));
});
var map__8476 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8465 = cljs.core.seq.call(null,c1);
var s2__8466 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8467 = s1__8465;

if(cljs.core.truth_(and__3546__auto____8467))
{return s2__8466;
} else
{return and__3546__auto____8467;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8465),cljs.core.first.call(null,s2__8466)),map.call(null,f,cljs.core.rest.call(null,s1__8465),cljs.core.rest.call(null,s2__8466)));
} else
{return null;
}
})));
});
var map__8477 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8468 = cljs.core.seq.call(null,c1);
var s2__8469 = cljs.core.seq.call(null,c2);
var s3__8470 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____8471 = s1__8468;

if(cljs.core.truth_(and__3546__auto____8471))
{var and__3546__auto____8472 = s2__8469;

if(cljs.core.truth_(and__3546__auto____8472))
{return s3__8470;
} else
{return and__3546__auto____8472;
}
} else
{return and__3546__auto____8471;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8468),cljs.core.first.call(null,s2__8469),cljs.core.first.call(null,s3__8470)),map.call(null,f,cljs.core.rest.call(null,s1__8468),cljs.core.rest.call(null,s2__8469),cljs.core.rest.call(null,s3__8470)));
} else
{return null;
}
})));
});
var map__8478 = (function() { 
var G__8480__delegate = function (f,c1,c2,c3,colls){
var step__8474 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8473 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8473)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8473),step.call(null,map.call(null,cljs.core.rest,ss__8473)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__8385_SHARP_){
return cljs.core.apply.call(null,f,p1__8385_SHARP_);
}),step__8474.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8480 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8480__delegate.call(this, f, c1, c2, c3, colls);
};
G__8480.cljs$lang$maxFixedArity = 4;
G__8480.cljs$lang$applyTo = (function (arglist__8481){
var f = cljs.core.first(arglist__8481);
var c1 = cljs.core.first(cljs.core.next(arglist__8481));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8481)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8481))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8481))));
return G__8480__delegate.call(this, f, c1, c2, c3, colls);
});
return G__8480;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__8475.call(this,f,c1);
case  3 :
return map__8476.call(this,f,c1,c2);
case  4 :
return map__8477.call(this,f,c1,c2,c3);
default:
return map__8478.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__8478.cljs$lang$applyTo;
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
{var temp__3698__auto____8482 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8482))
{var s__8483 = temp__3698__auto____8482;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8483),take.call(null,(n - 1),cljs.core.rest.call(null,s__8483)));
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
var step__8486 = (function (n,coll){
while(true){
var s__8484 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8485 = (n > 0);

if(cljs.core.truth_(and__3546__auto____8485))
{return s__8484;
} else
{return and__3546__auto____8485;
}
})()))
{{
var G__8487 = (n - 1);
var G__8488 = cljs.core.rest.call(null,s__8484);
n = G__8487;
coll = G__8488;
continue;
}
} else
{return s__8484;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8486.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__8489 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__8490 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__8489.call(this,n);
case  2 :
return drop_last__8490.call(this,n,s);
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
var s__8492 = cljs.core.seq.call(null,coll);
var lead__8493 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__8493))
{{
var G__8494 = cljs.core.next.call(null,s__8492);
var G__8495 = cljs.core.next.call(null,lead__8493);
s__8492 = G__8494;
lead__8493 = G__8495;
continue;
}
} else
{return s__8492;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8498 = (function (pred,coll){
while(true){
var s__8496 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8497 = s__8496;

if(cljs.core.truth_(and__3546__auto____8497))
{return pred.call(null,cljs.core.first.call(null,s__8496));
} else
{return and__3546__auto____8497;
}
})()))
{{
var G__8499 = pred;
var G__8500 = cljs.core.rest.call(null,s__8496);
pred = G__8499;
coll = G__8500;
continue;
}
} else
{return s__8496;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8498.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8501 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8501))
{var s__8502 = temp__3698__auto____8501;

return cljs.core.concat.call(null,s__8502,cycle.call(null,s__8502));
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
var repeat__8503 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__8504 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__8503.call(this,n);
case  2 :
return repeat__8504.call(this,n,x);
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
var repeatedly__8506 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__8507 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__8506.call(this,n);
case  2 :
return repeatedly__8507.call(this,n,f);
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
var interleave__8513 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8509 = cljs.core.seq.call(null,c1);
var s2__8510 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8511 = s1__8509;

if(cljs.core.truth_(and__3546__auto____8511))
{return s2__8510;
} else
{return and__3546__auto____8511;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8509),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8510),interleave.call(null,cljs.core.rest.call(null,s1__8509),cljs.core.rest.call(null,s2__8510))));
} else
{return null;
}
})));
});
var interleave__8514 = (function() { 
var G__8516__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8512 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8512)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8512),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8512)));
} else
{return null;
}
})));
};
var G__8516 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8516__delegate.call(this, c1, c2, colls);
};
G__8516.cljs$lang$maxFixedArity = 2;
G__8516.cljs$lang$applyTo = (function (arglist__8517){
var c1 = cljs.core.first(arglist__8517);
var c2 = cljs.core.first(cljs.core.next(arglist__8517));
var colls = cljs.core.rest(cljs.core.next(arglist__8517));
return G__8516__delegate.call(this, c1, c2, colls);
});
return G__8516;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__8513.call(this,c1,c2);
default:
return interleave__8514.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__8514.cljs$lang$applyTo;
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
var cat__8520 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8518 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8518))
{var coll__8519 = temp__3695__auto____8518;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8519),cat.call(null,cljs.core.rest.call(null,coll__8519),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__8520.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__8521 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__8522 = (function() { 
var G__8524__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8524 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8524__delegate.call(this, f, coll, colls);
};
G__8524.cljs$lang$maxFixedArity = 2;
G__8524.cljs$lang$applyTo = (function (arglist__8525){
var f = cljs.core.first(arglist__8525);
var coll = cljs.core.first(cljs.core.next(arglist__8525));
var colls = cljs.core.rest(cljs.core.next(arglist__8525));
return G__8524__delegate.call(this, f, coll, colls);
});
return G__8524;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__8521.call(this,f,coll);
default:
return mapcat__8522.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__8522.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8526 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8526))
{var s__8527 = temp__3698__auto____8526;

var f__8528 = cljs.core.first.call(null,s__8527);
var r__8529 = cljs.core.rest.call(null,s__8527);

if(cljs.core.truth_(pred.call(null,f__8528)))
{return cljs.core.cons.call(null,f__8528,filter.call(null,pred,r__8529));
} else
{return filter.call(null,pred,r__8529);
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
var walk__8531 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__8531.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8530_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__8530_SHARP_));
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
var partition__8538 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__8539 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8532 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8532))
{var s__8533 = temp__3698__auto____8532;

var p__8534 = cljs.core.take.call(null,n,s__8533);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8534))))
{return cljs.core.cons.call(null,p__8534,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8533)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__8540 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8535 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8535))
{var s__8536 = temp__3698__auto____8535;

var p__8537 = cljs.core.take.call(null,n,s__8536);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8537))))
{return cljs.core.cons.call(null,p__8537,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8536)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8537,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__8538.call(this,n,step);
case  3 :
return partition__8539.call(this,n,step,pad);
case  4 :
return partition__8540.call(this,n,step,pad,coll);
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
var get_in__8546 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__8547 = (function (m,ks,not_found){
var sentinel__8542 = cljs.core.lookup_sentinel;
var m__8543 = m;
var ks__8544 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__8544))
{var m__8545 = cljs.core.get.call(null,m__8543,cljs.core.first.call(null,ks__8544),sentinel__8542);

if(cljs.core.truth_((sentinel__8542 === m__8545)))
{return not_found;
} else
{{
var G__8549 = sentinel__8542;
var G__8550 = m__8545;
var G__8551 = cljs.core.next.call(null,ks__8544);
sentinel__8542 = G__8549;
m__8543 = G__8550;
ks__8544 = G__8551;
continue;
}
}
} else
{return m__8543;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__8546.call(this,m,ks);
case  3 :
return get_in__8547.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__8552,v){
var vec__8553__8554 = p__8552;
var k__8555 = cljs.core.nth.call(null,vec__8553__8554,0,null);
var ks__8556 = cljs.core.nthnext.call(null,vec__8553__8554,1);

if(cljs.core.truth_(ks__8556))
{return cljs.core.assoc.call(null,m,k__8555,assoc_in.call(null,cljs.core.get.call(null,m,k__8555),ks__8556,v));
} else
{return cljs.core.assoc.call(null,m,k__8555,v);
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
var update_in__delegate = function (m,p__8557,f,args){
var vec__8558__8559 = p__8557;
var k__8560 = cljs.core.nth.call(null,vec__8558__8559,0,null);
var ks__8561 = cljs.core.nthnext.call(null,vec__8558__8559,1);

if(cljs.core.truth_(ks__8561))
{return cljs.core.assoc.call(null,m,k__8560,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__8560),ks__8561,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8560,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__8560),args));
}
};
var update_in = function (m,p__8557,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8557, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8562){
var m = cljs.core.first(arglist__8562);
var p__8557 = cljs.core.first(cljs.core.next(arglist__8562));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8562)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8562)));
return update_in__delegate.call(this, m, p__8557, f, args);
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
var this__8563 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8596 = null;
var G__8596__8597 = (function (coll,k){
var this__8564 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8596__8598 = (function (coll,k,not_found){
var this__8565 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8596 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8596__8597.call(this,coll,k);
case  3 :
return G__8596__8598.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8596;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8566 = this;
var new_array__8567 = cljs.core.aclone.call(null,this__8566.array);

(new_array__8567[k] = v);
return (new cljs.core.Vector(this__8566.meta,new_array__8567));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__8600 = null;
var G__8600__8601 = (function (tsym8568,k){
var this__8570 = this;
var tsym8568__8571 = this;

var coll__8572 = tsym8568__8571;

return cljs.core._lookup.call(null,coll__8572,k);
});
var G__8600__8602 = (function (tsym8569,k,not_found){
var this__8573 = this;
var tsym8569__8574 = this;

var coll__8575 = tsym8569__8574;

return cljs.core._lookup.call(null,coll__8575,k,not_found);
});
G__8600 = function(tsym8569,k,not_found){
switch(arguments.length){
case  2 :
return G__8600__8601.call(this,tsym8569,k);
case  3 :
return G__8600__8602.call(this,tsym8569,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8600;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8576 = this;
var new_array__8577 = cljs.core.aclone.call(null,this__8576.array);

new_array__8577.push(o);
return (new cljs.core.Vector(this__8576.meta,new_array__8577));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8604 = null;
var G__8604__8605 = (function (v,f){
var this__8578 = this;
return cljs.core.ci_reduce.call(null,this__8578.array,f);
});
var G__8604__8606 = (function (v,f,start){
var this__8579 = this;
return cljs.core.ci_reduce.call(null,this__8579.array,f,start);
});
G__8604 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8604__8605.call(this,v,f);
case  3 :
return G__8604__8606.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8604;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8580 = this;
if(cljs.core.truth_((this__8580.array.length > 0)))
{var vector_seq__8581 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8580.array.length)))
{return cljs.core.cons.call(null,(this__8580.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8581.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8582 = this;
return this__8582.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8583 = this;
var count__8584 = this__8583.array.length;

if(cljs.core.truth_((count__8584 > 0)))
{return (this__8583.array[(count__8584 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8585 = this;
if(cljs.core.truth_((this__8585.array.length > 0)))
{var new_array__8586 = cljs.core.aclone.call(null,this__8585.array);

new_array__8586.pop();
return (new cljs.core.Vector(this__8585.meta,new_array__8586));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8587 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8588 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8589 = this;
return (new cljs.core.Vector(meta,this__8589.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8590 = this;
return this__8590.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8608 = null;
var G__8608__8609 = (function (coll,n){
var this__8591 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8592 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8592))
{return (n < this__8591.array.length);
} else
{return and__3546__auto____8592;
}
})()))
{return (this__8591.array[n]);
} else
{return null;
}
});
var G__8608__8610 = (function (coll,n,not_found){
var this__8593 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8594 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8594))
{return (n < this__8593.array.length);
} else
{return and__3546__auto____8594;
}
})()))
{return (this__8593.array[n]);
} else
{return not_found;
}
});
G__8608 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8608__8609.call(this,coll,n);
case  3 :
return G__8608__8610.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8608;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8595 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8595.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8612 = pv.cnt;

if(cljs.core.truth_((cnt__8612 < 32)))
{return 0;
} else
{return (((cnt__8612 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__8613 = level;
var ret__8614 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__8613)))
{return ret__8614;
} else
{var embed__8615 = ret__8614;
var r__8616 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___8617 = (r__8616[0] = embed__8615);

{
var G__8618 = (ll__8613 - 5);
var G__8619 = r__8616;
ll__8613 = G__8618;
ret__8614 = G__8619;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8620 = cljs.core.aclone.call(null,parent);
var subidx__8621 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__8620[subidx__8621] = tailnode);
return ret__8620;
} else
{var temp__3695__auto____8622 = (parent[subidx__8621]);

if(cljs.core.truth_(temp__3695__auto____8622))
{var child__8623 = temp__3695__auto____8622;

var node_to_insert__8624 = push_tail.call(null,pv,(level - 5),child__8623,tailnode);
var ___8625 = (ret__8620[subidx__8621] = node_to_insert__8624);

return ret__8620;
} else
{var node_to_insert__8626 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___8627 = (ret__8620[subidx__8621] = node_to_insert__8626);

return ret__8620;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____8628 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____8628))
{return (i < pv.cnt);
} else
{return and__3546__auto____8628;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__8629 = pv.root;
var level__8630 = pv.shift;

while(true){
if(cljs.core.truth_((level__8630 > 0)))
{{
var G__8631 = (node__8629[((i >> level__8630) & 31)]);
var G__8632 = (level__8630 - 5);
node__8629 = G__8631;
level__8630 = G__8632;
continue;
}
} else
{return node__8629;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8633 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__8633[(i & 31)] = val);
return ret__8633;
} else
{var subidx__8634 = ((i >> level) & 31);
var ___8635 = (ret__8633[subidx__8634] = do_assoc.call(null,pv,(level - 5),(node[subidx__8634]),i,val));

return ret__8633;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8636 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__8637 = pop_tail.call(null,pv,(level - 5),(node[subidx__8636]));

if(cljs.core.truth_((function (){var and__3546__auto____8638 = (new_child__8637 === null);

if(cljs.core.truth_(and__3546__auto____8638))
{return (subidx__8636 === 0);
} else
{return and__3546__auto____8638;
}
})()))
{return null;
} else
{var ret__8639 = cljs.core.aclone.call(null,node);
var ___8640 = (ret__8639[subidx__8636] = new_child__8637);

return ret__8639;
}
} else
{if(cljs.core.truth_((subidx__8636 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__8641 = cljs.core.aclone.call(null,node);
var ___8642 = (ret__8641[subidx__8636] = null);

return ret__8641;
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
var this__8643 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8683 = null;
var G__8683__8684 = (function (coll,k){
var this__8644 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8683__8685 = (function (coll,k,not_found){
var this__8645 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8683 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8683__8684.call(this,coll,k);
case  3 :
return G__8683__8685.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8683;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8646 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8647 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____8647))
{return (k < this__8646.cnt);
} else
{return and__3546__auto____8647;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__8648 = cljs.core.aclone.call(null,this__8646.tail);

(new_tail__8648[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8646.meta,this__8646.cnt,this__8646.shift,this__8646.root,new_tail__8648));
} else
{return (new cljs.core.PersistentVector(this__8646.meta,this__8646.cnt,this__8646.shift,cljs.core.do_assoc.call(null,coll,this__8646.shift,this__8646.root,k,v),this__8646.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__8646.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__8646.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__8687 = null;
var G__8687__8688 = (function (tsym8649,k){
var this__8651 = this;
var tsym8649__8652 = this;

var coll__8653 = tsym8649__8652;

return cljs.core._lookup.call(null,coll__8653,k);
});
var G__8687__8689 = (function (tsym8650,k,not_found){
var this__8654 = this;
var tsym8650__8655 = this;

var coll__8656 = tsym8650__8655;

return cljs.core._lookup.call(null,coll__8656,k,not_found);
});
G__8687 = function(tsym8650,k,not_found){
switch(arguments.length){
case  2 :
return G__8687__8688.call(this,tsym8650,k);
case  3 :
return G__8687__8689.call(this,tsym8650,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8687;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8657 = this;
if(cljs.core.truth_(((this__8657.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__8658 = cljs.core.aclone.call(null,this__8657.tail);

new_tail__8658.push(o);
return (new cljs.core.PersistentVector(this__8657.meta,(this__8657.cnt + 1),this__8657.shift,this__8657.root,new_tail__8658));
} else
{var root_overflow_QMARK___8659 = ((this__8657.cnt >> 5) > (1 << this__8657.shift));
var new_shift__8660 = (cljs.core.truth_(root_overflow_QMARK___8659)?(this__8657.shift + 5):this__8657.shift);
var new_root__8662 = (cljs.core.truth_(root_overflow_QMARK___8659)?(function (){var n_r__8661 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__8661[0] = this__8657.root);
(n_r__8661[1] = cljs.core.new_path.call(null,this__8657.shift,this__8657.tail));
return n_r__8661;
})():cljs.core.push_tail.call(null,coll,this__8657.shift,this__8657.root,this__8657.tail));

return (new cljs.core.PersistentVector(this__8657.meta,(this__8657.cnt + 1),new_shift__8660,new_root__8662,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8691 = null;
var G__8691__8692 = (function (v,f){
var this__8663 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__8691__8693 = (function (v,f,start){
var this__8664 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__8691 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8691__8692.call(this,v,f);
case  3 :
return G__8691__8693.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8691;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8665 = this;
if(cljs.core.truth_((this__8665.cnt > 0)))
{var vector_seq__8666 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8665.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8666.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8667 = this;
return this__8667.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8668 = this;
if(cljs.core.truth_((this__8668.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__8668.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8669 = this;
if(cljs.core.truth_((this__8669.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__8669.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8669.meta);
} else
{if(cljs.core.truth_((1 < (this__8669.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__8669.meta,(this__8669.cnt - 1),this__8669.shift,this__8669.root,cljs.core.aclone.call(null,this__8669.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__8670 = cljs.core.array_for.call(null,coll,(this__8669.cnt - 2));
var nr__8671 = cljs.core.pop_tail.call(null,this__8669.shift,this__8669.root);
var new_root__8672 = (cljs.core.truth_((nr__8671 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8671);
var cnt_1__8673 = (this__8669.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____8674 = (5 < this__8669.shift);

if(cljs.core.truth_(and__3546__auto____8674))
{return ((new_root__8672[1]) === null);
} else
{return and__3546__auto____8674;
}
})()))
{return (new cljs.core.PersistentVector(this__8669.meta,cnt_1__8673,(this__8669.shift - 5),(new_root__8672[0]),new_tail__8670));
} else
{return (new cljs.core.PersistentVector(this__8669.meta,cnt_1__8673,this__8669.shift,new_root__8672,new_tail__8670));
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
var this__8675 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8676 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8677 = this;
return (new cljs.core.PersistentVector(meta,this__8677.cnt,this__8677.shift,this__8677.root,this__8677.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8678 = this;
return this__8678.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8695 = null;
var G__8695__8696 = (function (coll,n){
var this__8679 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__8695__8697 = (function (coll,n,not_found){
var this__8680 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8681 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8681))
{return (n < this__8680.cnt);
} else
{return and__3546__auto____8681;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__8695 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8695__8696.call(this,coll,n);
case  3 :
return G__8695__8697.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8695;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8682 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8682.meta);
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
vector.cljs$lang$applyTo = (function (arglist__8699){
var args = cljs.core.seq( arglist__8699 );;
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
var this__8700 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8728 = null;
var G__8728__8729 = (function (coll,k){
var this__8701 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8728__8730 = (function (coll,k,not_found){
var this__8702 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8728 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8728__8729.call(this,coll,k);
case  3 :
return G__8728__8730.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8728;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__8703 = this;
var v_pos__8704 = (this__8703.start + key);

return (new cljs.core.Subvec(this__8703.meta,cljs.core._assoc.call(null,this__8703.v,v_pos__8704,val),this__8703.start,((this__8703.end > (v_pos__8704 + 1)) ? this__8703.end : (v_pos__8704 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__8732 = null;
var G__8732__8733 = (function (tsym8705,k){
var this__8707 = this;
var tsym8705__8708 = this;

var coll__8709 = tsym8705__8708;

return cljs.core._lookup.call(null,coll__8709,k);
});
var G__8732__8734 = (function (tsym8706,k,not_found){
var this__8710 = this;
var tsym8706__8711 = this;

var coll__8712 = tsym8706__8711;

return cljs.core._lookup.call(null,coll__8712,k,not_found);
});
G__8732 = function(tsym8706,k,not_found){
switch(arguments.length){
case  2 :
return G__8732__8733.call(this,tsym8706,k);
case  3 :
return G__8732__8734.call(this,tsym8706,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8732;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8713 = this;
return (new cljs.core.Subvec(this__8713.meta,cljs.core._assoc_n.call(null,this__8713.v,this__8713.end,o),this__8713.start,(this__8713.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8736 = null;
var G__8736__8737 = (function (coll,f){
var this__8714 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__8736__8738 = (function (coll,f,start){
var this__8715 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__8736 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8736__8737.call(this,coll,f);
case  3 :
return G__8736__8738.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8736;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8716 = this;
var subvec_seq__8717 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__8716.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8716.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__8717.call(null,this__8716.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8718 = this;
return (this__8718.end - this__8718.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8719 = this;
return cljs.core._nth.call(null,this__8719.v,(this__8719.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8720 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__8720.start,this__8720.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8720.meta,this__8720.v,this__8720.start,(this__8720.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8721 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8722 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8723 = this;
return (new cljs.core.Subvec(meta,this__8723.v,this__8723.start,this__8723.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8724 = this;
return this__8724.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8740 = null;
var G__8740__8741 = (function (coll,n){
var this__8725 = this;
return cljs.core._nth.call(null,this__8725.v,(this__8725.start + n));
});
var G__8740__8742 = (function (coll,n,not_found){
var this__8726 = this;
return cljs.core._nth.call(null,this__8726.v,(this__8726.start + n),not_found);
});
G__8740 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8740__8741.call(this,coll,n);
case  3 :
return G__8740__8742.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8740;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8727 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8727.meta);
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
var subvec__8744 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__8745 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__8744.call(this,v,start);
case  3 :
return subvec__8745.call(this,v,start,end);
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
var this__8747 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8748 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8749 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8750 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8750.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8751 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8752 = this;
return cljs.core._first.call(null,this__8752.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8753 = this;
var temp__3695__auto____8754 = cljs.core.next.call(null,this__8753.front);

if(cljs.core.truth_(temp__3695__auto____8754))
{var f1__8755 = temp__3695__auto____8754;

return (new cljs.core.PersistentQueueSeq(this__8753.meta,f1__8755,this__8753.rear));
} else
{if(cljs.core.truth_((this__8753.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8753.meta,this__8753.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8756 = this;
return this__8756.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8757 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8757.front,this__8757.rear));
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
var this__8758 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8759 = this;
if(cljs.core.truth_(this__8759.front))
{return (new cljs.core.PersistentQueue(this__8759.meta,(this__8759.count + 1),this__8759.front,cljs.core.conj.call(null,(function (){var or__3548__auto____8760 = this__8759.rear;

if(cljs.core.truth_(or__3548__auto____8760))
{return or__3548__auto____8760;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__8759.meta,(this__8759.count + 1),cljs.core.conj.call(null,this__8759.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8761 = this;
var rear__8762 = cljs.core.seq.call(null,this__8761.rear);

if(cljs.core.truth_((function (){var or__3548__auto____8763 = this__8761.front;

if(cljs.core.truth_(or__3548__auto____8763))
{return or__3548__auto____8763;
} else
{return rear__8762;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8761.front,cljs.core.seq.call(null,rear__8762)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8764 = this;
return this__8764.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8765 = this;
return cljs.core._first.call(null,this__8765.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8766 = this;
if(cljs.core.truth_(this__8766.front))
{var temp__3695__auto____8767 = cljs.core.next.call(null,this__8766.front);

if(cljs.core.truth_(temp__3695__auto____8767))
{var f1__8768 = temp__3695__auto____8767;

return (new cljs.core.PersistentQueue(this__8766.meta,(this__8766.count - 1),f1__8768,this__8766.rear));
} else
{return (new cljs.core.PersistentQueue(this__8766.meta,(this__8766.count - 1),cljs.core.seq.call(null,this__8766.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8769 = this;
return cljs.core.first.call(null,this__8769.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8770 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8771 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8772 = this;
return (new cljs.core.PersistentQueue(meta,this__8772.count,this__8772.front,this__8772.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8773 = this;
return this__8773.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8774 = this;
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
var this__8775 = this;
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
var len__8776 = array.length;

var i__8777 = 0;

while(true){
if(cljs.core.truth_((i__8777 < len__8776)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__8777]))))
{return i__8777;
} else
{{
var G__8778 = (i__8777 + incr);
i__8777 = G__8778;
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
var obj_map_contains_key_QMARK___8780 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___8781 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____8779 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8779))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8779;
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
return obj_map_contains_key_QMARK___8780.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___8781.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8784 = cljs.core.hash.call(null,a);
var b__8785 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__8784 < b__8785)))
{return -1;
} else
{if(cljs.core.truth_((a__8784 > b__8785)))
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
var this__8786 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8813 = null;
var G__8813__8814 = (function (coll,k){
var this__8787 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8813__8815 = (function (coll,k,not_found){
var this__8788 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8788.strobj,(this__8788.strobj[k]),not_found);
});
G__8813 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8813__8814.call(this,coll,k);
case  3 :
return G__8813__8815.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8813;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8789 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__8790 = goog.object.clone.call(null,this__8789.strobj);
var overwrite_QMARK___8791 = new_strobj__8790.hasOwnProperty(k);

(new_strobj__8790[k] = v);
if(cljs.core.truth_(overwrite_QMARK___8791))
{return (new cljs.core.ObjMap(this__8789.meta,this__8789.keys,new_strobj__8790));
} else
{var new_keys__8792 = cljs.core.aclone.call(null,this__8789.keys);

new_keys__8792.push(k);
return (new cljs.core.ObjMap(this__8789.meta,new_keys__8792,new_strobj__8790));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__8789.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8793 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8793.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__8817 = null;
var G__8817__8818 = (function (tsym8794,k){
var this__8796 = this;
var tsym8794__8797 = this;

var coll__8798 = tsym8794__8797;

return cljs.core._lookup.call(null,coll__8798,k);
});
var G__8817__8819 = (function (tsym8795,k,not_found){
var this__8799 = this;
var tsym8795__8800 = this;

var coll__8801 = tsym8795__8800;

return cljs.core._lookup.call(null,coll__8801,k,not_found);
});
G__8817 = function(tsym8795,k,not_found){
switch(arguments.length){
case  2 :
return G__8817__8818.call(this,tsym8795,k);
case  3 :
return G__8817__8819.call(this,tsym8795,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8817;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8802 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8803 = this;
if(cljs.core.truth_((this__8803.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__8783_SHARP_){
return cljs.core.vector.call(null,p1__8783_SHARP_,(this__8803.strobj[p1__8783_SHARP_]));
}),this__8803.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8804 = this;
return this__8804.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8805 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8806 = this;
return (new cljs.core.ObjMap(meta,this__8806.keys,this__8806.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8807 = this;
return this__8807.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8808 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8808.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8809 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8810 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8810))
{return this__8809.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8810;
}
})()))
{var new_keys__8811 = cljs.core.aclone.call(null,this__8809.keys);
var new_strobj__8812 = goog.object.clone.call(null,this__8809.strobj);

new_keys__8811.splice(cljs.core.scan_array.call(null,1,k,new_keys__8811),1);
cljs.core.js_delete.call(null,new_strobj__8812,k);
return (new cljs.core.ObjMap(this__8809.meta,new_keys__8811,new_strobj__8812));
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
var this__8822 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8860 = null;
var G__8860__8861 = (function (coll,k){
var this__8823 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8860__8862 = (function (coll,k,not_found){
var this__8824 = this;
var bucket__8825 = (this__8824.hashobj[cljs.core.hash.call(null,k)]);
var i__8826 = (cljs.core.truth_(bucket__8825)?cljs.core.scan_array.call(null,2,k,bucket__8825):null);

if(cljs.core.truth_(i__8826))
{return (bucket__8825[(i__8826 + 1)]);
} else
{return not_found;
}
});
G__8860 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8860__8861.call(this,coll,k);
case  3 :
return G__8860__8862.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8860;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8827 = this;
var h__8828 = cljs.core.hash.call(null,k);
var bucket__8829 = (this__8827.hashobj[h__8828]);

if(cljs.core.truth_(bucket__8829))
{var new_bucket__8830 = cljs.core.aclone.call(null,bucket__8829);
var new_hashobj__8831 = goog.object.clone.call(null,this__8827.hashobj);

(new_hashobj__8831[h__8828] = new_bucket__8830);
var temp__3695__auto____8832 = cljs.core.scan_array.call(null,2,k,new_bucket__8830);

if(cljs.core.truth_(temp__3695__auto____8832))
{var i__8833 = temp__3695__auto____8832;

(new_bucket__8830[(i__8833 + 1)] = v);
return (new cljs.core.HashMap(this__8827.meta,this__8827.count,new_hashobj__8831));
} else
{new_bucket__8830.push(k,v);
return (new cljs.core.HashMap(this__8827.meta,(this__8827.count + 1),new_hashobj__8831));
}
} else
{var new_hashobj__8834 = goog.object.clone.call(null,this__8827.hashobj);

(new_hashobj__8834[h__8828] = [k,v]);
return (new cljs.core.HashMap(this__8827.meta,(this__8827.count + 1),new_hashobj__8834));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8835 = this;
var bucket__8836 = (this__8835.hashobj[cljs.core.hash.call(null,k)]);
var i__8837 = (cljs.core.truth_(bucket__8836)?cljs.core.scan_array.call(null,2,k,bucket__8836):null);

if(cljs.core.truth_(i__8837))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__8864 = null;
var G__8864__8865 = (function (tsym8838,k){
var this__8840 = this;
var tsym8838__8841 = this;

var coll__8842 = tsym8838__8841;

return cljs.core._lookup.call(null,coll__8842,k);
});
var G__8864__8866 = (function (tsym8839,k,not_found){
var this__8843 = this;
var tsym8839__8844 = this;

var coll__8845 = tsym8839__8844;

return cljs.core._lookup.call(null,coll__8845,k,not_found);
});
G__8864 = function(tsym8839,k,not_found){
switch(arguments.length){
case  2 :
return G__8864__8865.call(this,tsym8839,k);
case  3 :
return G__8864__8866.call(this,tsym8839,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8864;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8846 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8847 = this;
if(cljs.core.truth_((this__8847.count > 0)))
{var hashes__8848 = cljs.core.js_keys.call(null,this__8847.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__8821_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8847.hashobj[p1__8821_SHARP_])));
}),hashes__8848);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8849 = this;
return this__8849.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8850 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8851 = this;
return (new cljs.core.HashMap(meta,this__8851.count,this__8851.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8852 = this;
return this__8852.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8853 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8853.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8854 = this;
var h__8855 = cljs.core.hash.call(null,k);
var bucket__8856 = (this__8854.hashobj[h__8855]);
var i__8857 = (cljs.core.truth_(bucket__8856)?cljs.core.scan_array.call(null,2,k,bucket__8856):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__8857)))
{return coll;
} else
{var new_hashobj__8858 = goog.object.clone.call(null,this__8854.hashobj);

if(cljs.core.truth_((3 > bucket__8856.length)))
{cljs.core.js_delete.call(null,new_hashobj__8858,h__8855);
} else
{var new_bucket__8859 = cljs.core.aclone.call(null,bucket__8856);

new_bucket__8859.splice(i__8857,2);
(new_hashobj__8858[h__8855] = new_bucket__8859);
}
return (new cljs.core.HashMap(this__8854.meta,(this__8854.count - 1),new_hashobj__8858));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8868 = ks.length;

var i__8869 = 0;
var out__8870 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__8869 < len__8868)))
{{
var G__8871 = (i__8869 + 1);
var G__8872 = cljs.core.assoc.call(null,out__8870,(ks[i__8869]),(vs[i__8869]));
i__8869 = G__8871;
out__8870 = G__8872;
continue;
}
} else
{return out__8870;
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
var in$__8873 = cljs.core.seq.call(null,keyvals);
var out__8874 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__8873))
{{
var G__8875 = cljs.core.nnext.call(null,in$__8873);
var G__8876 = cljs.core.assoc.call(null,out__8874,cljs.core.first.call(null,in$__8873),cljs.core.second.call(null,in$__8873));
in$__8873 = G__8875;
out__8874 = G__8876;
continue;
}
} else
{return out__8874;
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
hash_map.cljs$lang$applyTo = (function (arglist__8877){
var keyvals = cljs.core.seq( arglist__8877 );;
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
{return cljs.core.reduce.call(null,(function (p1__8878_SHARP_,p2__8879_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____8880 = p1__8878_SHARP_;

if(cljs.core.truth_(or__3548__auto____8880))
{return or__3548__auto____8880;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__8879_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__8881){
var maps = cljs.core.seq( arglist__8881 );;
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
{var merge_entry__8884 = (function (m,e){
var k__8882 = cljs.core.first.call(null,e);
var v__8883 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__8882)))
{return cljs.core.assoc.call(null,m,k__8882,f.call(null,cljs.core.get.call(null,m,k__8882),v__8883));
} else
{return cljs.core.assoc.call(null,m,k__8882,v__8883);
}
});
var merge2__8886 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8884,(function (){var or__3548__auto____8885 = m1;

if(cljs.core.truth_(or__3548__auto____8885))
{return or__3548__auto____8885;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__8886,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__8887){
var f = cljs.core.first(arglist__8887);
var maps = cljs.core.rest(arglist__8887);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8889 = cljs.core.ObjMap.fromObject([],{});
var keys__8890 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__8890))
{var key__8891 = cljs.core.first.call(null,keys__8890);
var entry__8892 = cljs.core.get.call(null,map,key__8891,"\uFDD0'user/not-found");

{
var G__8893 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__8892,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__8889,key__8891,entry__8892):ret__8889);
var G__8894 = cljs.core.next.call(null,keys__8890);
ret__8889 = G__8893;
keys__8890 = G__8894;
continue;
}
} else
{return ret__8889;
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
var this__8895 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8916 = null;
var G__8916__8917 = (function (coll,v){
var this__8896 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__8916__8918 = (function (coll,v,not_found){
var this__8897 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8897.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__8916 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__8916__8917.call(this,coll,v);
case  3 :
return G__8916__8918.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8916;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__8920 = null;
var G__8920__8921 = (function (tsym8898,k){
var this__8900 = this;
var tsym8898__8901 = this;

var coll__8902 = tsym8898__8901;

return cljs.core._lookup.call(null,coll__8902,k);
});
var G__8920__8922 = (function (tsym8899,k,not_found){
var this__8903 = this;
var tsym8899__8904 = this;

var coll__8905 = tsym8899__8904;

return cljs.core._lookup.call(null,coll__8905,k,not_found);
});
G__8920 = function(tsym8899,k,not_found){
switch(arguments.length){
case  2 :
return G__8920__8921.call(this,tsym8899,k);
case  3 :
return G__8920__8922.call(this,tsym8899,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8920;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8906 = this;
return (new cljs.core.Set(this__8906.meta,cljs.core.assoc.call(null,this__8906.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8907 = this;
return cljs.core.keys.call(null,this__8907.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__8908 = this;
return (new cljs.core.Set(this__8908.meta,cljs.core.dissoc.call(null,this__8908.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8909 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8910 = this;
var and__3546__auto____8911 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____8911))
{var and__3546__auto____8912 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____8912))
{return cljs.core.every_QMARK_.call(null,(function (p1__8888_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8888_SHARP_);
}),other);
} else
{return and__3546__auto____8912;
}
} else
{return and__3546__auto____8911;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8913 = this;
return (new cljs.core.Set(meta,this__8913.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8914 = this;
return this__8914.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8915 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__8915.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__8925 = cljs.core.seq.call(null,coll);
var out__8926 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__8925))))
{{
var G__8927 = cljs.core.rest.call(null,in$__8925);
var G__8928 = cljs.core.conj.call(null,out__8926,cljs.core.first.call(null,in$__8925));
in$__8925 = G__8927;
out__8926 = G__8928;
continue;
}
} else
{return out__8926;
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
{var n__8929 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____8930 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____8930))
{var e__8931 = temp__3695__auto____8930;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__8931));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__8929,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__8924_SHARP_){
var temp__3695__auto____8932 = cljs.core.find.call(null,smap,p1__8924_SHARP_);

if(cljs.core.truth_(temp__3695__auto____8932))
{var e__8933 = temp__3695__auto____8932;

return cljs.core.second.call(null,e__8933);
} else
{return p1__8924_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__8941 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__8934,seen){
while(true){
var vec__8935__8936 = p__8934;
var f__8937 = cljs.core.nth.call(null,vec__8935__8936,0,null);
var xs__8938 = vec__8935__8936;

var temp__3698__auto____8939 = cljs.core.seq.call(null,xs__8938);

if(cljs.core.truth_(temp__3698__auto____8939))
{var s__8940 = temp__3698__auto____8939;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__8937)))
{{
var G__8942 = cljs.core.rest.call(null,s__8940);
var G__8943 = seen;
p__8934 = G__8942;
seen = G__8943;
continue;
}
} else
{return cljs.core.cons.call(null,f__8937,step.call(null,cljs.core.rest.call(null,s__8940),cljs.core.conj.call(null,seen,f__8937)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__8941.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__8944 = cljs.core.PersistentVector.fromArray([]);
var s__8945 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__8945)))
{{
var G__8946 = cljs.core.conj.call(null,ret__8944,cljs.core.first.call(null,s__8945));
var G__8947 = cljs.core.next.call(null,s__8945);
ret__8944 = G__8946;
s__8945 = G__8947;
continue;
}
} else
{return cljs.core.seq.call(null,ret__8944);
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
{if(cljs.core.truth_((function (){var or__3548__auto____8948 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8948))
{return or__3548__auto____8948;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8949 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8949 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__8949 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____8950 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8950))
{return or__3548__auto____8950;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8951 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8951 > -1)))
{return cljs.core.subs.call(null,x,2,i__8951);
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
var map__8954 = cljs.core.ObjMap.fromObject([],{});
var ks__8955 = cljs.core.seq.call(null,keys);
var vs__8956 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8957 = ks__8955;

if(cljs.core.truth_(and__3546__auto____8957))
{return vs__8956;
} else
{return and__3546__auto____8957;
}
})()))
{{
var G__8958 = cljs.core.assoc.call(null,map__8954,cljs.core.first.call(null,ks__8955),cljs.core.first.call(null,vs__8956));
var G__8959 = cljs.core.next.call(null,ks__8955);
var G__8960 = cljs.core.next.call(null,vs__8956);
map__8954 = G__8958;
ks__8955 = G__8959;
vs__8956 = G__8960;
continue;
}
} else
{return map__8954;
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
var max_key__8963 = (function (k,x){
return x;
});
var max_key__8964 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__8965 = (function() { 
var G__8967__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8952_SHARP_,p2__8953_SHARP_){
return max_key.call(null,k,p1__8952_SHARP_,p2__8953_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__8967 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8967__delegate.call(this, k, x, y, more);
};
G__8967.cljs$lang$maxFixedArity = 3;
G__8967.cljs$lang$applyTo = (function (arglist__8968){
var k = cljs.core.first(arglist__8968);
var x = cljs.core.first(cljs.core.next(arglist__8968));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8968)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8968)));
return G__8967__delegate.call(this, k, x, y, more);
});
return G__8967;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__8963.call(this,k,x);
case  3 :
return max_key__8964.call(this,k,x,y);
default:
return max_key__8965.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__8965.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__8969 = (function (k,x){
return x;
});
var min_key__8970 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__8971 = (function() { 
var G__8973__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8961_SHARP_,p2__8962_SHARP_){
return min_key.call(null,k,p1__8961_SHARP_,p2__8962_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__8973 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8973__delegate.call(this, k, x, y, more);
};
G__8973.cljs$lang$maxFixedArity = 3;
G__8973.cljs$lang$applyTo = (function (arglist__8974){
var k = cljs.core.first(arglist__8974);
var x = cljs.core.first(cljs.core.next(arglist__8974));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8974)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8974)));
return G__8973__delegate.call(this, k, x, y, more);
});
return G__8973;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__8969.call(this,k,x);
case  3 :
return min_key__8970.call(this,k,x,y);
default:
return min_key__8971.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__8971.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__8977 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__8978 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8975 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8975))
{var s__8976 = temp__3698__auto____8975;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__8976),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__8976)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__8977.call(this,n,step);
case  3 :
return partition_all__8978.call(this,n,step,coll);
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
var temp__3698__auto____8980 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8980))
{var s__8981 = temp__3698__auto____8980;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__8981))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8981),take_while.call(null,pred,cljs.core.rest.call(null,s__8981)));
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
var this__8982 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__8983 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8999 = null;
var G__8999__9000 = (function (rng,f){
var this__8984 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__8999__9001 = (function (rng,f,s){
var this__8985 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__8999 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__8999__9000.call(this,rng,f);
case  3 :
return G__8999__9001.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8999;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__8986 = this;
var comp__8987 = (cljs.core.truth_((this__8986.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__8987.call(null,this__8986.start,this__8986.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__8988 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__8988.end - this__8988.start) / this__8988.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__8989 = this;
return this__8989.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__8990 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__8990.meta,(this__8990.start + this__8990.step),this__8990.end,this__8990.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__8991 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__8992 = this;
return (new cljs.core.Range(meta,this__8992.start,this__8992.end,this__8992.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__8993 = this;
return this__8993.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9003 = null;
var G__9003__9004 = (function (rng,n){
var this__8994 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8994.start + (n * this__8994.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8995 = (this__8994.start > this__8994.end);

if(cljs.core.truth_(and__3546__auto____8995))
{return cljs.core._EQ_.call(null,this__8994.step,0);
} else
{return and__3546__auto____8995;
}
})()))
{return this__8994.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__9003__9005 = (function (rng,n,not_found){
var this__8996 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8996.start + (n * this__8996.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8997 = (this__8996.start > this__8996.end);

if(cljs.core.truth_(and__3546__auto____8997))
{return cljs.core._EQ_.call(null,this__8996.step,0);
} else
{return and__3546__auto____8997;
}
})()))
{return this__8996.start;
} else
{return not_found;
}
}
});
G__9003 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__9003__9004.call(this,rng,n);
case  3 :
return G__9003__9005.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9003;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__8998 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8998.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__9007 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__9008 = (function (end){
return range.call(null,0,end,1);
});
var range__9009 = (function (start,end){
return range.call(null,start,end,1);
});
var range__9010 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__9007.call(this);
case  1 :
return range__9008.call(this,start);
case  2 :
return range__9009.call(this,start,end);
case  3 :
return range__9010.call(this,start,end,step);
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
var temp__3698__auto____9012 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9012))
{var s__9013 = temp__3698__auto____9012;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__9013),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9013)));
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
var temp__3698__auto____9015 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9015))
{var s__9016 = temp__3698__auto____9015;

var fst__9017 = cljs.core.first.call(null,s__9016);
var fv__9018 = f.call(null,fst__9017);
var run__9019 = cljs.core.cons.call(null,fst__9017,cljs.core.take_while.call(null,(function (p1__9014_SHARP_){
return cljs.core._EQ_.call(null,fv__9018,f.call(null,p1__9014_SHARP_));
}),cljs.core.next.call(null,s__9016)));

return cljs.core.cons.call(null,run__9019,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9019),s__9016))));
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
var reductions__9034 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____9030 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9030))
{var s__9031 = temp__3695__auto____9030;

return reductions.call(null,f,cljs.core.first.call(null,s__9031),cljs.core.rest.call(null,s__9031));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__9035 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9032 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9032))
{var s__9033 = temp__3698__auto____9032;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9033)),cljs.core.rest.call(null,s__9033));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__9034.call(this,f,init);
case  3 :
return reductions__9035.call(this,f,init,coll);
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
var juxt__9038 = (function (f){
return (function() {
var G__9043 = null;
var G__9043__9044 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9043__9045 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9043__9046 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9043__9047 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9043__9048 = (function() { 
var G__9050__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9050 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9050__delegate.call(this, x, y, z, args);
};
G__9050.cljs$lang$maxFixedArity = 3;
G__9050.cljs$lang$applyTo = (function (arglist__9051){
var x = cljs.core.first(arglist__9051);
var y = cljs.core.first(cljs.core.next(arglist__9051));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9051)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9051)));
return G__9050__delegate.call(this, x, y, z, args);
});
return G__9050;
})()
;
G__9043 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9043__9044.call(this);
case  1 :
return G__9043__9045.call(this,x);
case  2 :
return G__9043__9046.call(this,x,y);
case  3 :
return G__9043__9047.call(this,x,y,z);
default:
return G__9043__9048.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9043.cljs$lang$maxFixedArity = 3;
G__9043.cljs$lang$applyTo = G__9043__9048.cljs$lang$applyTo;
return G__9043;
})()
});
var juxt__9039 = (function (f,g){
return (function() {
var G__9052 = null;
var G__9052__9053 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9052__9054 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9052__9055 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9052__9056 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9052__9057 = (function() { 
var G__9059__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9059 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9059__delegate.call(this, x, y, z, args);
};
G__9059.cljs$lang$maxFixedArity = 3;
G__9059.cljs$lang$applyTo = (function (arglist__9060){
var x = cljs.core.first(arglist__9060);
var y = cljs.core.first(cljs.core.next(arglist__9060));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9060)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9060)));
return G__9059__delegate.call(this, x, y, z, args);
});
return G__9059;
})()
;
G__9052 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9052__9053.call(this);
case  1 :
return G__9052__9054.call(this,x);
case  2 :
return G__9052__9055.call(this,x,y);
case  3 :
return G__9052__9056.call(this,x,y,z);
default:
return G__9052__9057.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9052.cljs$lang$maxFixedArity = 3;
G__9052.cljs$lang$applyTo = G__9052__9057.cljs$lang$applyTo;
return G__9052;
})()
});
var juxt__9040 = (function (f,g,h){
return (function() {
var G__9061 = null;
var G__9061__9062 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9061__9063 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9061__9064 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9061__9065 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9061__9066 = (function() { 
var G__9068__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9068 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9068__delegate.call(this, x, y, z, args);
};
G__9068.cljs$lang$maxFixedArity = 3;
G__9068.cljs$lang$applyTo = (function (arglist__9069){
var x = cljs.core.first(arglist__9069);
var y = cljs.core.first(cljs.core.next(arglist__9069));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9069)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9069)));
return G__9068__delegate.call(this, x, y, z, args);
});
return G__9068;
})()
;
G__9061 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9061__9062.call(this);
case  1 :
return G__9061__9063.call(this,x);
case  2 :
return G__9061__9064.call(this,x,y);
case  3 :
return G__9061__9065.call(this,x,y,z);
default:
return G__9061__9066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9061.cljs$lang$maxFixedArity = 3;
G__9061.cljs$lang$applyTo = G__9061__9066.cljs$lang$applyTo;
return G__9061;
})()
});
var juxt__9041 = (function() { 
var G__9070__delegate = function (f,g,h,fs){
var fs__9037 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__9071 = null;
var G__9071__9072 = (function (){
return cljs.core.reduce.call(null,(function (p1__9020_SHARP_,p2__9021_SHARP_){
return cljs.core.conj.call(null,p1__9020_SHARP_,p2__9021_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__9037);
});
var G__9071__9073 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9022_SHARP_,p2__9023_SHARP_){
return cljs.core.conj.call(null,p1__9022_SHARP_,p2__9023_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__9037);
});
var G__9071__9074 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9024_SHARP_,p2__9025_SHARP_){
return cljs.core.conj.call(null,p1__9024_SHARP_,p2__9025_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__9037);
});
var G__9071__9075 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9026_SHARP_,p2__9027_SHARP_){
return cljs.core.conj.call(null,p1__9026_SHARP_,p2__9027_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__9037);
});
var G__9071__9076 = (function() { 
var G__9078__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9028_SHARP_,p2__9029_SHARP_){
return cljs.core.conj.call(null,p1__9028_SHARP_,cljs.core.apply.call(null,p2__9029_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__9037);
};
var G__9078 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9078__delegate.call(this, x, y, z, args);
};
G__9078.cljs$lang$maxFixedArity = 3;
G__9078.cljs$lang$applyTo = (function (arglist__9079){
var x = cljs.core.first(arglist__9079);
var y = cljs.core.first(cljs.core.next(arglist__9079));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9079)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9079)));
return G__9078__delegate.call(this, x, y, z, args);
});
return G__9078;
})()
;
G__9071 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9071__9072.call(this);
case  1 :
return G__9071__9073.call(this,x);
case  2 :
return G__9071__9074.call(this,x,y);
case  3 :
return G__9071__9075.call(this,x,y,z);
default:
return G__9071__9076.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9071.cljs$lang$maxFixedArity = 3;
G__9071.cljs$lang$applyTo = G__9071__9076.cljs$lang$applyTo;
return G__9071;
})()
};
var G__9070 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9070__delegate.call(this, f, g, h, fs);
};
G__9070.cljs$lang$maxFixedArity = 3;
G__9070.cljs$lang$applyTo = (function (arglist__9080){
var f = cljs.core.first(arglist__9080);
var g = cljs.core.first(cljs.core.next(arglist__9080));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9080)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9080)));
return G__9070__delegate.call(this, f, g, h, fs);
});
return G__9070;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__9038.call(this,f);
case  2 :
return juxt__9039.call(this,f,g);
case  3 :
return juxt__9040.call(this,f,g,h);
default:
return juxt__9041.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__9041.cljs$lang$applyTo;
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
var dorun__9082 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__9085 = cljs.core.next.call(null,coll);
coll = G__9085;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__9083 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9081 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9081))
{return (n > 0);
} else
{return and__3546__auto____9081;
}
})()))
{{
var G__9086 = (n - 1);
var G__9087 = cljs.core.next.call(null,coll);
n = G__9086;
coll = G__9087;
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
return dorun__9082.call(this,n);
case  2 :
return dorun__9083.call(this,n,coll);
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
var doall__9088 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__9089 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__9088.call(this,n);
case  2 :
return doall__9089.call(this,n,coll);
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
var matches__9091 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9091),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__9091),1)))
{return cljs.core.first.call(null,matches__9091);
} else
{return cljs.core.vec.call(null,matches__9091);
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
var matches__9092 = re.exec(s);

if(cljs.core.truth_((matches__9092 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__9092),1)))
{return cljs.core.first.call(null,matches__9092);
} else
{return cljs.core.vec.call(null,matches__9092);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9093 = cljs.core.re_find.call(null,re,s);
var match_idx__9094 = s.search(re);
var match_str__9095 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__9093))?cljs.core.first.call(null,match_data__9093):match_data__9093);
var post_match__9096 = cljs.core.subs.call(null,s,(match_idx__9094 + cljs.core.count.call(null,match_str__9095)));

if(cljs.core.truth_(match_data__9093))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9093,re_seq.call(null,re,post_match__9096));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9098__9099 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9100 = cljs.core.nth.call(null,vec__9098__9099,0,null);
var flags__9101 = cljs.core.nth.call(null,vec__9098__9099,1,null);
var pattern__9102 = cljs.core.nth.call(null,vec__9098__9099,2,null);

return (new RegExp(pattern__9102,flags__9101));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__9097_SHARP_){
return print_one.call(null,p1__9097_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____9103 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____9103))
{var and__3546__auto____9107 = (function (){var x__451__auto____9104 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____9105 = x__451__auto____9104;

if(cljs.core.truth_(and__3546__auto____9105))
{var and__3546__auto____9106 = x__451__auto____9104.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____9106))
{return cljs.core.not.call(null,x__451__auto____9104.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____9106;
}
} else
{return and__3546__auto____9105;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____9104);
}
})();

if(cljs.core.truth_(and__3546__auto____9107))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____9107;
}
} else
{return and__3546__auto____9103;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____9108 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____9109 = x__451__auto____9108;

if(cljs.core.truth_(and__3546__auto____9109))
{var and__3546__auto____9110 = x__451__auto____9108.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____9110))
{return cljs.core.not.call(null,x__451__auto____9108.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____9110;
}
} else
{return and__3546__auto____9109;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____9108);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9111 = cljs.core.first.call(null,objs);
var sb__9112 = (new goog.string.StringBuffer());

var G__9113__9114 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__9113__9114))
{var obj__9115 = cljs.core.first.call(null,G__9113__9114);
var G__9113__9116 = G__9113__9114;

while(true){
if(cljs.core.truth_((obj__9115 === first_obj__9111)))
{} else
{sb__9112.append(" ");
}
var G__9117__9118 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9115,opts));

if(cljs.core.truth_(G__9117__9118))
{var string__9119 = cljs.core.first.call(null,G__9117__9118);
var G__9117__9120 = G__9117__9118;

while(true){
sb__9112.append(string__9119);
var temp__3698__auto____9121 = cljs.core.next.call(null,G__9117__9120);

if(cljs.core.truth_(temp__3698__auto____9121))
{var G__9117__9122 = temp__3698__auto____9121;

{
var G__9125 = cljs.core.first.call(null,G__9117__9122);
var G__9126 = G__9117__9122;
string__9119 = G__9125;
G__9117__9120 = G__9126;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9123 = cljs.core.next.call(null,G__9113__9116);

if(cljs.core.truth_(temp__3698__auto____9123))
{var G__9113__9124 = temp__3698__auto____9123;

{
var G__9127 = cljs.core.first.call(null,G__9113__9124);
var G__9128 = G__9113__9124;
obj__9115 = G__9127;
G__9113__9116 = G__9128;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9112;
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
var sb__9129 = cljs.core.pr_sb.call(null,objs,opts);

sb__9129.append("\n");
return cljs.core.str.call(null,sb__9129);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9130 = cljs.core.first.call(null,objs);

var G__9131__9132 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__9131__9132))
{var obj__9133 = cljs.core.first.call(null,G__9131__9132);
var G__9131__9134 = G__9131__9132;

while(true){
if(cljs.core.truth_((obj__9133 === first_obj__9130)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9135__9136 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9133,opts));

if(cljs.core.truth_(G__9135__9136))
{var string__9137 = cljs.core.first.call(null,G__9135__9136);
var G__9135__9138 = G__9135__9136;

while(true){
cljs.core.string_print.call(null,string__9137);
var temp__3698__auto____9139 = cljs.core.next.call(null,G__9135__9138);

if(cljs.core.truth_(temp__3698__auto____9139))
{var G__9135__9140 = temp__3698__auto____9139;

{
var G__9143 = cljs.core.first.call(null,G__9135__9140);
var G__9144 = G__9135__9140;
string__9137 = G__9143;
G__9135__9138 = G__9144;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9141 = cljs.core.next.call(null,G__9131__9134);

if(cljs.core.truth_(temp__3698__auto____9141))
{var G__9131__9142 = temp__3698__auto____9141;

{
var G__9145 = cljs.core.first.call(null,G__9131__9142);
var G__9146 = G__9131__9142;
obj__9133 = G__9145;
G__9131__9134 = G__9146;
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
pr_str.cljs$lang$applyTo = (function (arglist__9147){
var objs = cljs.core.seq( arglist__9147 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__9148){
var objs = cljs.core.seq( arglist__9148 );;
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
pr.cljs$lang$applyTo = (function (arglist__9149){
var objs = cljs.core.seq( arglist__9149 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__9150){
var objs = cljs.core.seq( arglist__9150 );;
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
print_str.cljs$lang$applyTo = (function (arglist__9151){
var objs = cljs.core.seq( arglist__9151 );;
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
println.cljs$lang$applyTo = (function (arglist__9152){
var objs = cljs.core.seq( arglist__9152 );;
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
println_str.cljs$lang$applyTo = (function (arglist__9153){
var objs = cljs.core.seq( arglist__9153 );;
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
prn.cljs$lang$applyTo = (function (arglist__9154){
var objs = cljs.core.seq( arglist__9154 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__9155 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9155,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____9156 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____9156))
{var nspc__9157 = temp__3698__auto____9156;

return cljs.core.str.call(null,nspc__9157,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____9158 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____9158))
{var nspc__9159 = temp__3698__auto____9158;

return cljs.core.str.call(null,nspc__9159,"/");
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
var pr_pair__9160 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9160,"{",", ","}",opts,coll);
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
var this__9161 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__9162 = this;
var G__9163__9164 = cljs.core.seq.call(null,this__9162.watches);

if(cljs.core.truth_(G__9163__9164))
{var G__9166__9168 = cljs.core.first.call(null,G__9163__9164);
var vec__9167__9169 = G__9166__9168;
var key__9170 = cljs.core.nth.call(null,vec__9167__9169,0,null);
var f__9171 = cljs.core.nth.call(null,vec__9167__9169,1,null);
var G__9163__9172 = G__9163__9164;

var G__9166__9173 = G__9166__9168;
var G__9163__9174 = G__9163__9172;

while(true){
var vec__9175__9176 = G__9166__9173;
var key__9177 = cljs.core.nth.call(null,vec__9175__9176,0,null);
var f__9178 = cljs.core.nth.call(null,vec__9175__9176,1,null);
var G__9163__9179 = G__9163__9174;

f__9178.call(null,key__9177,this$,oldval,newval);
var temp__3698__auto____9180 = cljs.core.next.call(null,G__9163__9179);

if(cljs.core.truth_(temp__3698__auto____9180))
{var G__9163__9181 = temp__3698__auto____9180;

{
var G__9188 = cljs.core.first.call(null,G__9163__9181);
var G__9189 = G__9163__9181;
G__9166__9173 = G__9188;
G__9163__9174 = G__9189;
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
var this__9182 = this;
return this$.watches = cljs.core.assoc.call(null,this__9182.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__9183 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9183.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__9184 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__9184.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__9185 = this;
return this__9185.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9186 = this;
return this__9186.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__9187 = this;
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
var atom__9196 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__9197 = (function() { 
var G__9199__delegate = function (x,p__9190){
var map__9191__9192 = p__9190;
var map__9191__9193 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9191__9192))?cljs.core.apply.call(null,cljs.core.hash_map,map__9191__9192):map__9191__9192);
var validator__9194 = cljs.core.get.call(null,map__9191__9193,"\uFDD0'validator");
var meta__9195 = cljs.core.get.call(null,map__9191__9193,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__9195,validator__9194,null));
};
var G__9199 = function (x,var_args){
var p__9190 = null;
if (goog.isDef(var_args)) {
  p__9190 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9199__delegate.call(this, x, p__9190);
};
G__9199.cljs$lang$maxFixedArity = 1;
G__9199.cljs$lang$applyTo = (function (arglist__9200){
var x = cljs.core.first(arglist__9200);
var p__9190 = cljs.core.rest(arglist__9200);
return G__9199__delegate.call(this, x, p__9190);
});
return G__9199;
})()
;
atom = function(x,var_args){
var p__9190 = var_args;
switch(arguments.length){
case  1 :
return atom__9196.call(this,x);
default:
return atom__9197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__9197.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____9201 = a.validator;

if(cljs.core.truth_(temp__3698__auto____9201))
{var validate__9202 = temp__3698__auto____9201;

if(cljs.core.truth_(validate__9202.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__9203 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9203,new_value);
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
var swap_BANG___9204 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___9205 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___9206 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___9207 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___9208 = (function() { 
var G__9210__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9210 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9210__delegate.call(this, a, f, x, y, z, more);
};
G__9210.cljs$lang$maxFixedArity = 5;
G__9210.cljs$lang$applyTo = (function (arglist__9211){
var a = cljs.core.first(arglist__9211);
var f = cljs.core.first(cljs.core.next(arglist__9211));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9211)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9211))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9211)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9211)))));
return G__9210__delegate.call(this, a, f, x, y, z, more);
});
return G__9210;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___9204.call(this,a,f);
case  3 :
return swap_BANG___9205.call(this,a,f,x);
case  4 :
return swap_BANG___9206.call(this,a,f,x,y);
case  5 :
return swap_BANG___9207.call(this,a,f,x,y,z);
default:
return swap_BANG___9208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___9208.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9212){
var iref = cljs.core.first(arglist__9212);
var f = cljs.core.first(cljs.core.next(arglist__9212));
var args = cljs.core.rest(cljs.core.next(arglist__9212));
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
var gensym__9213 = (function (){
return gensym.call(null,"G__");
});
var gensym__9214 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__9213.call(this);
case  1 :
return gensym__9214.call(this,prefix_string);
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
var this__9216 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__9216.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9217 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__9217.state,(function (p__9218){
var curr_state__9219 = p__9218;
var curr_state__9220 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__9219))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9219):curr_state__9219);
var done__9221 = cljs.core.get.call(null,curr_state__9220,"\uFDD0'done");

if(cljs.core.truth_(done__9221))
{return curr_state__9220;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9217.f.call(null)});
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
var map__9222__9223 = options;
var map__9222__9224 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9222__9223))?cljs.core.apply.call(null,cljs.core.hash_map,map__9222__9223):map__9222__9223);
var keywordize_keys__9225 = cljs.core.get.call(null,map__9222__9224,"\uFDD0'keywordize-keys");
var keyfn__9226 = (cljs.core.truth_(keywordize_keys__9225)?cljs.core.keyword:cljs.core.str);
var f__9232 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____9231 = (function iter__9227(s__9228){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9228__9229 = s__9228;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9228__9229)))
{var k__9230 = cljs.core.first.call(null,s__9228__9229);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9226.call(null,k__9230),thisfn.call(null,(x[k__9230]))]),iter__9227.call(null,cljs.core.rest.call(null,s__9228__9229)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____9231.call(null,cljs.core.js_keys.call(null,x));
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

return f__9232.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9233){
var x = cljs.core.first(arglist__9233);
var options = cljs.core.rest(arglist__9233);
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
var mem__9234 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__9238__delegate = function (args){
var temp__3695__auto____9235 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__9234),args);

if(cljs.core.truth_(temp__3695__auto____9235))
{var v__9236 = temp__3695__auto____9235;

return v__9236;
} else
{var ret__9237 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__9234,cljs.core.assoc,args,ret__9237);
return ret__9237;
}
};
var G__9238 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9238__delegate.call(this, args);
};
G__9238.cljs$lang$maxFixedArity = 0;
G__9238.cljs$lang$applyTo = (function (arglist__9239){
var args = cljs.core.seq( arglist__9239 );;
return G__9238__delegate.call(this, args);
});
return G__9238;
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
var trampoline__9241 = (function (f){
while(true){
var ret__9240 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__9240)))
{{
var G__9244 = ret__9240;
f = G__9244;
continue;
}
} else
{return ret__9240;
}
break;
}
});
var trampoline__9242 = (function() { 
var G__9245__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9245 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9245__delegate.call(this, f, args);
};
G__9245.cljs$lang$maxFixedArity = 1;
G__9245.cljs$lang$applyTo = (function (arglist__9246){
var f = cljs.core.first(arglist__9246);
var args = cljs.core.rest(arglist__9246);
return G__9245__delegate.call(this, f, args);
});
return G__9245;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__9241.call(this,f);
default:
return trampoline__9242.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__9242.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9247 = (function (){
return rand.call(null,1);
});
var rand__9248 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9247.call(this);
case  1 :
return rand__9248.call(this,n);
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
var k__9250 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__9250,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__9250,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___9259 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___9260 = (function (h,child,parent){
var or__3548__auto____9251 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____9251))
{return or__3548__auto____9251;
} else
{var or__3548__auto____9252 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____9252))
{return or__3548__auto____9252;
} else
{var and__3546__auto____9253 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____9253))
{var and__3546__auto____9254 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____9254))
{var and__3546__auto____9255 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____9255))
{var ret__9256 = true;
var i__9257 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9258 = cljs.core.not.call(null,ret__9256);

if(cljs.core.truth_(or__3548__auto____9258))
{return or__3548__auto____9258;
} else
{return cljs.core._EQ_.call(null,i__9257,cljs.core.count.call(null,parent));
}
})()))
{return ret__9256;
} else
{{
var G__9262 = isa_QMARK_.call(null,h,child.call(null,i__9257),parent.call(null,i__9257));
var G__9263 = (i__9257 + 1);
ret__9256 = G__9262;
i__9257 = G__9263;
continue;
}
}
break;
}
} else
{return and__3546__auto____9255;
}
} else
{return and__3546__auto____9254;
}
} else
{return and__3546__auto____9253;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___9259.call(this,h,child);
case  3 :
return isa_QMARK___9260.call(this,h,child,parent);
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
var parents__9264 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__9265 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__9264.call(this,h);
case  2 :
return parents__9265.call(this,h,tag);
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
var ancestors__9267 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__9268 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__9267.call(this,h);
case  2 :
return ancestors__9268.call(this,h,tag);
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
var descendants__9270 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__9271 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__9270.call(this,h);
case  2 :
return descendants__9271.call(this,h,tag);
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
var derive__9281 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__9282 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__9276 = "\uFDD0'parents".call(null,h);
var td__9277 = "\uFDD0'descendants".call(null,h);
var ta__9278 = "\uFDD0'ancestors".call(null,h);
var tf__9279 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____9280 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__9276.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9278.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9278.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__9276,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9279.call(null,"\uFDD0'ancestors".call(null,h),tag,td__9277,parent,ta__9278),"\uFDD0'descendants":tf__9279.call(null,"\uFDD0'descendants".call(null,h),parent,ta__9278,tag,td__9277)});
})());

if(cljs.core.truth_(or__3548__auto____9280))
{return or__3548__auto____9280;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__9281.call(this,h,tag);
case  3 :
return derive__9282.call(this,h,tag,parent);
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
var underive__9288 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__9289 = (function (h,tag,parent){
var parentMap__9284 = "\uFDD0'parents".call(null,h);
var childsParents__9285 = (cljs.core.truth_(parentMap__9284.call(null,tag))?cljs.core.disj.call(null,parentMap__9284.call(null,tag),parent):cljs.core.set([]));
var newParents__9286 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9285))?cljs.core.assoc.call(null,parentMap__9284,tag,childsParents__9285):cljs.core.dissoc.call(null,parentMap__9284,tag));
var deriv_seq__9287 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9273_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9273_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9273_SHARP_),cljs.core.second.call(null,p1__9273_SHARP_)));
}),cljs.core.seq.call(null,newParents__9286)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__9284.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__9274_SHARP_,p2__9275_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9274_SHARP_,p2__9275_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9287));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__9288.call(this,h,tag);
case  3 :
return underive__9289.call(this,h,tag,parent);
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
var xprefs__9291 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____9293 = (cljs.core.truth_((function (){var and__3546__auto____9292 = xprefs__9291;

if(cljs.core.truth_(and__3546__auto____9292))
{return xprefs__9291.call(null,y);
} else
{return and__3546__auto____9292;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____9293))
{return or__3548__auto____9293;
} else
{var or__3548__auto____9295 = (function (){var ps__9294 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9294) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9294),prefer_table)))
{} else
{}
{
var G__9298 = cljs.core.rest.call(null,ps__9294);
ps__9294 = G__9298;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____9295))
{return or__3548__auto____9295;
} else
{var or__3548__auto____9297 = (function (){var ps__9296 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9296) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9296),y,prefer_table)))
{} else
{}
{
var G__9299 = cljs.core.rest.call(null,ps__9296);
ps__9296 = G__9299;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____9297))
{return or__3548__auto____9297;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____9300 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____9300))
{return or__3548__auto____9300;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9309 = cljs.core.reduce.call(null,(function (be,p__9301){
var vec__9302__9303 = p__9301;
var k__9304 = cljs.core.nth.call(null,vec__9302__9303,0,null);
var ___9305 = cljs.core.nth.call(null,vec__9302__9303,1,null);
var e__9306 = vec__9302__9303;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9304)))
{var be2__9308 = (cljs.core.truth_((function (){var or__3548__auto____9307 = (be === null);

if(cljs.core.truth_(or__3548__auto____9307))
{return or__3548__auto____9307;
} else
{return cljs.core.dominates.call(null,k__9304,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9306:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9308),k__9304,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__9304," and ",cljs.core.first.call(null,be2__9308),", and neither is preferred")));
}
return be2__9308;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__9309))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9309));
return cljs.core.second.call(null,best_entry__9309);
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
if(cljs.core.truth_((function (){var and__3546__auto____9310 = mf;

if(cljs.core.truth_(and__3546__auto____9310))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____9310;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____9311 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9311))
{return or__3548__auto____9311;
} else
{var or__3548__auto____9312 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____9312))
{return or__3548__auto____9312;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____9313 = mf;

if(cljs.core.truth_(and__3546__auto____9313))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____9313;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____9314 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9314))
{return or__3548__auto____9314;
} else
{var or__3548__auto____9315 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____9315))
{return or__3548__auto____9315;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____9316 = mf;

if(cljs.core.truth_(and__3546__auto____9316))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____9316;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9317 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9317))
{return or__3548__auto____9317;
} else
{var or__3548__auto____9318 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____9318))
{return or__3548__auto____9318;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____9319 = mf;

if(cljs.core.truth_(and__3546__auto____9319))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____9319;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____9320 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9320))
{return or__3548__auto____9320;
} else
{var or__3548__auto____9321 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____9321))
{return or__3548__auto____9321;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____9322 = mf;

if(cljs.core.truth_(and__3546__auto____9322))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____9322;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9323 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9323))
{return or__3548__auto____9323;
} else
{var or__3548__auto____9324 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____9324))
{return or__3548__auto____9324;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____9325 = mf;

if(cljs.core.truth_(and__3546__auto____9325))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____9325;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____9326 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9326))
{return or__3548__auto____9326;
} else
{var or__3548__auto____9327 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____9327))
{return or__3548__auto____9327;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____9328 = mf;

if(cljs.core.truth_(and__3546__auto____9328))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____9328;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____9329 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9329))
{return or__3548__auto____9329;
} else
{var or__3548__auto____9330 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____9330))
{return or__3548__auto____9330;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____9331 = mf;

if(cljs.core.truth_(and__3546__auto____9331))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____9331;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____9332 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9332))
{return or__3548__auto____9332;
} else
{var or__3548__auto____9333 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____9333))
{return or__3548__auto____9333;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9334 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9335 = cljs.core._get_method.call(null,mf,dispatch_val__9334);

if(cljs.core.truth_(target_fn__9335))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__9334)));
}
return cljs.core.apply.call(null,target_fn__9335,args);
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
var this__9336 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__9337 = this;
cljs.core.swap_BANG_.call(null,this__9337.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9337.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9337.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9337.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__9338 = this;
cljs.core.swap_BANG_.call(null,this__9338.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9338.method_cache,this__9338.method_table,this__9338.cached_hierarchy,this__9338.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__9339 = this;
cljs.core.swap_BANG_.call(null,this__9339.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9339.method_cache,this__9339.method_table,this__9339.cached_hierarchy,this__9339.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__9340 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9340.cached_hierarchy),cljs.core.deref.call(null,this__9340.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__9340.method_cache,this__9340.method_table,this__9340.cached_hierarchy,this__9340.hierarchy);
}
var temp__3695__auto____9341 = cljs.core.deref.call(null,this__9340.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____9341))
{var target_fn__9342 = temp__3695__auto____9341;

return target_fn__9342;
} else
{var temp__3695__auto____9343 = cljs.core.find_and_cache_best_method.call(null,this__9340.name,dispatch_val,this__9340.hierarchy,this__9340.method_table,this__9340.prefer_table,this__9340.method_cache,this__9340.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____9343))
{var target_fn__9344 = temp__3695__auto____9343;

return target_fn__9344;
} else
{return cljs.core.deref.call(null,this__9340.method_table).call(null,this__9340.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9345 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9345.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__9345.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__9345.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9345.method_cache,this__9345.method_table,this__9345.cached_hierarchy,this__9345.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__9346 = this;
return cljs.core.deref.call(null,this__9346.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__9347 = this;
return cljs.core.deref.call(null,this__9347.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__9348 = this;
return cljs.core.do_dispatch.call(null,mf,this__9348.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9349__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__9349 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9349__delegate.call(this, _, args);
};
G__9349.cljs$lang$maxFixedArity = 1;
G__9349.cljs$lang$applyTo = (function (arglist__9350){
var _ = cljs.core.first(arglist__9350);
var args = cljs.core.rest(arglist__9350);
return G__9349__delegate.call(this, _, args);
});
return G__9349;
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
