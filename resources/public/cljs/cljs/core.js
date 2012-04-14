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
var or__3548__auto____162654 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____162654))
{return or__3548__auto____162654;
} else
{var or__3548__auto____162655 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____162655))
{return or__3548__auto____162655;
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
var _invoke__162719 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____162656 = this$;

if(cljs.core.truth_(and__3546__auto____162656))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162656;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____162657 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162657))
{return or__3548__auto____162657;
} else
{var or__3548__auto____162658 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162658))
{return or__3548__auto____162658;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__162720 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____162659 = this$;

if(cljs.core.truth_(and__3546__auto____162659))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162659;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____162660 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162660))
{return or__3548__auto____162660;
} else
{var or__3548__auto____162661 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162661))
{return or__3548__auto____162661;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__162721 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____162662 = this$;

if(cljs.core.truth_(and__3546__auto____162662))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162662;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____162663 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162663))
{return or__3548__auto____162663;
} else
{var or__3548__auto____162664 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162664))
{return or__3548__auto____162664;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__162722 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____162665 = this$;

if(cljs.core.truth_(and__3546__auto____162665))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162665;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____162666 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162666))
{return or__3548__auto____162666;
} else
{var or__3548__auto____162667 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162667))
{return or__3548__auto____162667;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__162723 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____162668 = this$;

if(cljs.core.truth_(and__3546__auto____162668))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162668;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____162669 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162669))
{return or__3548__auto____162669;
} else
{var or__3548__auto____162670 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162670))
{return or__3548__auto____162670;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__162724 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____162671 = this$;

if(cljs.core.truth_(and__3546__auto____162671))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162671;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____162672 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162672))
{return or__3548__auto____162672;
} else
{var or__3548__auto____162673 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162673))
{return or__3548__auto____162673;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__162725 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____162674 = this$;

if(cljs.core.truth_(and__3546__auto____162674))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162674;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____162675 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162675))
{return or__3548__auto____162675;
} else
{var or__3548__auto____162676 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162676))
{return or__3548__auto____162676;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__162726 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____162677 = this$;

if(cljs.core.truth_(and__3546__auto____162677))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162677;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____162678 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162678))
{return or__3548__auto____162678;
} else
{var or__3548__auto____162679 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162679))
{return or__3548__auto____162679;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__162727 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____162680 = this$;

if(cljs.core.truth_(and__3546__auto____162680))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162680;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____162681 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162681))
{return or__3548__auto____162681;
} else
{var or__3548__auto____162682 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162682))
{return or__3548__auto____162682;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__162728 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____162683 = this$;

if(cljs.core.truth_(and__3546__auto____162683))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162683;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____162684 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162684))
{return or__3548__auto____162684;
} else
{var or__3548__auto____162685 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162685))
{return or__3548__auto____162685;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__162729 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____162686 = this$;

if(cljs.core.truth_(and__3546__auto____162686))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162686;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____162687 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162687))
{return or__3548__auto____162687;
} else
{var or__3548__auto____162688 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162688))
{return or__3548__auto____162688;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__162730 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____162689 = this$;

if(cljs.core.truth_(and__3546__auto____162689))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162689;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____162690 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162690))
{return or__3548__auto____162690;
} else
{var or__3548__auto____162691 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162691))
{return or__3548__auto____162691;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__162731 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____162692 = this$;

if(cljs.core.truth_(and__3546__auto____162692))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162692;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____162693 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162693))
{return or__3548__auto____162693;
} else
{var or__3548__auto____162694 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162694))
{return or__3548__auto____162694;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__162732 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____162695 = this$;

if(cljs.core.truth_(and__3546__auto____162695))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162695;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____162696 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162696))
{return or__3548__auto____162696;
} else
{var or__3548__auto____162697 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162697))
{return or__3548__auto____162697;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__162733 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____162698 = this$;

if(cljs.core.truth_(and__3546__auto____162698))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162698;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____162699 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162699))
{return or__3548__auto____162699;
} else
{var or__3548__auto____162700 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162700))
{return or__3548__auto____162700;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__162734 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____162701 = this$;

if(cljs.core.truth_(and__3546__auto____162701))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162701;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____162702 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162702))
{return or__3548__auto____162702;
} else
{var or__3548__auto____162703 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162703))
{return or__3548__auto____162703;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__162735 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____162704 = this$;

if(cljs.core.truth_(and__3546__auto____162704))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162704;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____162705 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162705))
{return or__3548__auto____162705;
} else
{var or__3548__auto____162706 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162706))
{return or__3548__auto____162706;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__162736 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____162707 = this$;

if(cljs.core.truth_(and__3546__auto____162707))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162707;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____162708 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162708))
{return or__3548__auto____162708;
} else
{var or__3548__auto____162709 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162709))
{return or__3548__auto____162709;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__162737 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____162710 = this$;

if(cljs.core.truth_(and__3546__auto____162710))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162710;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____162711 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162711))
{return or__3548__auto____162711;
} else
{var or__3548__auto____162712 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162712))
{return or__3548__auto____162712;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__162738 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____162713 = this$;

if(cljs.core.truth_(and__3546__auto____162713))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162713;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____162714 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162714))
{return or__3548__auto____162714;
} else
{var or__3548__auto____162715 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162715))
{return or__3548__auto____162715;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__162739 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____162716 = this$;

if(cljs.core.truth_(and__3546__auto____162716))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____162716;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____162717 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162717))
{return or__3548__auto____162717;
} else
{var or__3548__auto____162718 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____162718))
{return or__3548__auto____162718;
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
return _invoke__162719.call(this,this$);
case  2 :
return _invoke__162720.call(this,this$,a);
case  3 :
return _invoke__162721.call(this,this$,a,b);
case  4 :
return _invoke__162722.call(this,this$,a,b,c);
case  5 :
return _invoke__162723.call(this,this$,a,b,c,d);
case  6 :
return _invoke__162724.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__162725.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__162726.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__162727.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__162728.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__162729.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__162730.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__162731.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__162732.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__162733.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__162734.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__162735.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__162736.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__162737.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__162738.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__162739.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____162741 = coll;

if(cljs.core.truth_(and__3546__auto____162741))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____162741;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____162742 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162742))
{return or__3548__auto____162742;
} else
{var or__3548__auto____162743 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____162743))
{return or__3548__auto____162743;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____162744 = coll;

if(cljs.core.truth_(and__3546__auto____162744))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____162744;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____162745 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162745))
{return or__3548__auto____162745;
} else
{var or__3548__auto____162746 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____162746))
{return or__3548__auto____162746;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____162747 = coll;

if(cljs.core.truth_(and__3546__auto____162747))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____162747;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____162748 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162748))
{return or__3548__auto____162748;
} else
{var or__3548__auto____162749 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____162749))
{return or__3548__auto____162749;
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
var _nth__162756 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____162750 = coll;

if(cljs.core.truth_(and__3546__auto____162750))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____162750;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____162751 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162751))
{return or__3548__auto____162751;
} else
{var or__3548__auto____162752 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____162752))
{return or__3548__auto____162752;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__162757 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____162753 = coll;

if(cljs.core.truth_(and__3546__auto____162753))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____162753;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____162754 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162754))
{return or__3548__auto____162754;
} else
{var or__3548__auto____162755 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____162755))
{return or__3548__auto____162755;
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
return _nth__162756.call(this,coll,n);
case  3 :
return _nth__162757.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____162759 = coll;

if(cljs.core.truth_(and__3546__auto____162759))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____162759;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____162760 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162760))
{return or__3548__auto____162760;
} else
{var or__3548__auto____162761 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____162761))
{return or__3548__auto____162761;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____162762 = coll;

if(cljs.core.truth_(and__3546__auto____162762))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____162762;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____162763 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162763))
{return or__3548__auto____162763;
} else
{var or__3548__auto____162764 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____162764))
{return or__3548__auto____162764;
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
var _lookup__162771 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____162765 = o;

if(cljs.core.truth_(and__3546__auto____162765))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____162765;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____162766 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____162766))
{return or__3548__auto____162766;
} else
{var or__3548__auto____162767 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____162767))
{return or__3548__auto____162767;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__162772 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____162768 = o;

if(cljs.core.truth_(and__3546__auto____162768))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____162768;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____162769 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____162769))
{return or__3548__auto____162769;
} else
{var or__3548__auto____162770 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____162770))
{return or__3548__auto____162770;
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
return _lookup__162771.call(this,o,k);
case  3 :
return _lookup__162772.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____162774 = coll;

if(cljs.core.truth_(and__3546__auto____162774))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____162774;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____162775 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162775))
{return or__3548__auto____162775;
} else
{var or__3548__auto____162776 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____162776))
{return or__3548__auto____162776;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____162777 = coll;

if(cljs.core.truth_(and__3546__auto____162777))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____162777;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____162778 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162778))
{return or__3548__auto____162778;
} else
{var or__3548__auto____162779 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____162779))
{return or__3548__auto____162779;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____162780 = coll;

if(cljs.core.truth_(and__3546__auto____162780))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____162780;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____162781 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162781))
{return or__3548__auto____162781;
} else
{var or__3548__auto____162782 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____162782))
{return or__3548__auto____162782;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____162783 = coll;

if(cljs.core.truth_(and__3546__auto____162783))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____162783;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____162784 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162784))
{return or__3548__auto____162784;
} else
{var or__3548__auto____162785 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____162785))
{return or__3548__auto____162785;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____162786 = coll;

if(cljs.core.truth_(and__3546__auto____162786))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____162786;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____162787 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162787))
{return or__3548__auto____162787;
} else
{var or__3548__auto____162788 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____162788))
{return or__3548__auto____162788;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____162789 = coll;

if(cljs.core.truth_(and__3546__auto____162789))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____162789;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____162790 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162790))
{return or__3548__auto____162790;
} else
{var or__3548__auto____162791 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____162791))
{return or__3548__auto____162791;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____162792 = coll;

if(cljs.core.truth_(and__3546__auto____162792))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____162792;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____162793 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162793))
{return or__3548__auto____162793;
} else
{var or__3548__auto____162794 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____162794))
{return or__3548__auto____162794;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____162795 = o;

if(cljs.core.truth_(and__3546__auto____162795))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____162795;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____162796 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____162796))
{return or__3548__auto____162796;
} else
{var or__3548__auto____162797 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____162797))
{return or__3548__auto____162797;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____162798 = o;

if(cljs.core.truth_(and__3546__auto____162798))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____162798;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____162799 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____162799))
{return or__3548__auto____162799;
} else
{var or__3548__auto____162800 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____162800))
{return or__3548__auto____162800;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____162801 = o;

if(cljs.core.truth_(and__3546__auto____162801))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____162801;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____162802 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____162802))
{return or__3548__auto____162802;
} else
{var or__3548__auto____162803 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____162803))
{return or__3548__auto____162803;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____162804 = o;

if(cljs.core.truth_(and__3546__auto____162804))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____162804;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____162805 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____162805))
{return or__3548__auto____162805;
} else
{var or__3548__auto____162806 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____162806))
{return or__3548__auto____162806;
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
var _reduce__162813 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____162807 = coll;

if(cljs.core.truth_(and__3546__auto____162807))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____162807;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____162808 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162808))
{return or__3548__auto____162808;
} else
{var or__3548__auto____162809 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____162809))
{return or__3548__auto____162809;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__162814 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____162810 = coll;

if(cljs.core.truth_(and__3546__auto____162810))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____162810;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____162811 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____162811))
{return or__3548__auto____162811;
} else
{var or__3548__auto____162812 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____162812))
{return or__3548__auto____162812;
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
return _reduce__162813.call(this,coll,f);
case  3 :
return _reduce__162814.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____162816 = o;

if(cljs.core.truth_(and__3546__auto____162816))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____162816;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____162817 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____162817))
{return or__3548__auto____162817;
} else
{var or__3548__auto____162818 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____162818))
{return or__3548__auto____162818;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____162819 = o;

if(cljs.core.truth_(and__3546__auto____162819))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____162819;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____162820 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____162820))
{return or__3548__auto____162820;
} else
{var or__3548__auto____162821 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____162821))
{return or__3548__auto____162821;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____162822 = o;

if(cljs.core.truth_(and__3546__auto____162822))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____162822;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____162823 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____162823))
{return or__3548__auto____162823;
} else
{var or__3548__auto____162824 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____162824))
{return or__3548__auto____162824;
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
if(cljs.core.truth_((function (){var and__3546__auto____162825 = o;

if(cljs.core.truth_(and__3546__auto____162825))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____162825;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____162826 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____162826))
{return or__3548__auto____162826;
} else
{var or__3548__auto____162827 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____162827))
{return or__3548__auto____162827;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____162828 = d;

if(cljs.core.truth_(and__3546__auto____162828))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____162828;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____162829 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____162829))
{return or__3548__auto____162829;
} else
{var or__3548__auto____162830 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____162830))
{return or__3548__auto____162830;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____162831 = this$;

if(cljs.core.truth_(and__3546__auto____162831))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____162831;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____162832 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162832))
{return or__3548__auto____162832;
} else
{var or__3548__auto____162833 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____162833))
{return or__3548__auto____162833;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____162834 = this$;

if(cljs.core.truth_(and__3546__auto____162834))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____162834;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____162835 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162835))
{return or__3548__auto____162835;
} else
{var or__3548__auto____162836 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____162836))
{return or__3548__auto____162836;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____162837 = this$;

if(cljs.core.truth_(and__3546__auto____162837))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____162837;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____162838 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____162838))
{return or__3548__auto____162838;
} else
{var or__3548__auto____162839 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____162839))
{return or__3548__auto____162839;
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
var G__162840 = null;
var G__162840__162841 = (function (o,k){
return null;
});
var G__162840__162842 = (function (o,k,not_found){
return not_found;
});
G__162840 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__162840__162841.call(this,o,k);
case  3 :
return G__162840__162842.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__162840;
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
var G__162844 = null;
var G__162844__162845 = (function (_,f){
return f.call(null);
});
var G__162844__162846 = (function (_,f,start){
return start;
});
G__162844 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__162844__162845.call(this,_,f);
case  3 :
return G__162844__162846.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__162844;
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
var G__162848 = null;
var G__162848__162849 = (function (_,n){
return null;
});
var G__162848__162850 = (function (_,n,not_found){
return not_found;
});
G__162848 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__162848__162849.call(this,_,n);
case  3 :
return G__162848__162850.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__162848;
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
var ci_reduce__162858 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__162852 = cljs.core._nth.call(null,cicoll,0);
var n__162853 = 1;

while(true){
if(cljs.core.truth_((n__162853 < cljs.core._count.call(null,cicoll))))
{{
var G__162862 = f.call(null,val__162852,cljs.core._nth.call(null,cicoll,n__162853));
var G__162863 = (n__162853 + 1);
val__162852 = G__162862;
n__162853 = G__162863;
continue;
}
} else
{return val__162852;
}
break;
}
}
});
var ci_reduce__162859 = (function (cicoll,f,val){
var val__162854 = val;
var n__162855 = 0;

while(true){
if(cljs.core.truth_((n__162855 < cljs.core._count.call(null,cicoll))))
{{
var G__162864 = f.call(null,val__162854,cljs.core._nth.call(null,cicoll,n__162855));
var G__162865 = (n__162855 + 1);
val__162854 = G__162864;
n__162855 = G__162865;
continue;
}
} else
{return val__162854;
}
break;
}
});
var ci_reduce__162860 = (function (cicoll,f,val,idx){
var val__162856 = val;
var n__162857 = idx;

while(true){
if(cljs.core.truth_((n__162857 < cljs.core._count.call(null,cicoll))))
{{
var G__162866 = f.call(null,val__162856,cljs.core._nth.call(null,cicoll,n__162857));
var G__162867 = (n__162857 + 1);
val__162856 = G__162866;
n__162857 = G__162867;
continue;
}
} else
{return val__162856;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__162858.call(this,cicoll,f);
case  3 :
return ci_reduce__162859.call(this,cicoll,f,val);
case  4 :
return ci_reduce__162860.call(this,cicoll,f,val,idx);
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
var this__162868 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__162881 = null;
var G__162881__162882 = (function (_,f){
var this__162869 = this;
return cljs.core.ci_reduce.call(null,this__162869.a,f,(this__162869.a[this__162869.i]),(this__162869.i + 1));
});
var G__162881__162883 = (function (_,f,start){
var this__162870 = this;
return cljs.core.ci_reduce.call(null,this__162870.a,f,start,this__162870.i);
});
G__162881 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__162881__162882.call(this,_,f);
case  3 :
return G__162881__162883.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__162881;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__162871 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__162872 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__162885 = null;
var G__162885__162886 = (function (coll,n){
var this__162873 = this;
var i__162874 = (n + this__162873.i);

if(cljs.core.truth_((i__162874 < this__162873.a.length)))
{return (this__162873.a[i__162874]);
} else
{return null;
}
});
var G__162885__162887 = (function (coll,n,not_found){
var this__162875 = this;
var i__162876 = (n + this__162875.i);

if(cljs.core.truth_((i__162876 < this__162875.a.length)))
{return (this__162875.a[i__162876]);
} else
{return not_found;
}
});
G__162885 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__162885__162886.call(this,coll,n);
case  3 :
return G__162885__162887.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__162885;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__162877 = this;
return (this__162877.a.length - this__162877.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__162878 = this;
return (this__162878.a[this__162878.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__162879 = this;
if(cljs.core.truth_(((this__162879.i + 1) < this__162879.a.length)))
{return (new cljs.core.IndexedSeq(this__162879.a,(this__162879.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__162880 = this;
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
var G__162889 = null;
var G__162889__162890 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__162889__162891 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__162889 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__162889__162890.call(this,array,f);
case  3 :
return G__162889__162891.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__162889;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__162893 = null;
var G__162893__162894 = (function (array,k){
return (array[k]);
});
var G__162893__162895 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__162893 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__162893__162894.call(this,array,k);
case  3 :
return G__162893__162895.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__162893;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__162897 = null;
var G__162897__162898 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__162897__162899 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__162897 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__162897__162898.call(this,array,n);
case  3 :
return G__162897__162899.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__162897;
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
var temp__3698__auto____162901 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____162901))
{var s__162902 = temp__3698__auto____162901;

return cljs.core._first.call(null,s__162902);
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
var G__162903 = cljs.core.next.call(null,s);
s = G__162903;
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
var s__162904 = cljs.core.seq.call(null,x);
var n__162905 = 0;

while(true){
if(cljs.core.truth_(s__162904))
{{
var G__162906 = cljs.core.next.call(null,s__162904);
var G__162907 = (n__162905 + 1);
s__162904 = G__162906;
n__162905 = G__162907;
continue;
}
} else
{return n__162905;
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
var conj__162908 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__162909 = (function() { 
var G__162911__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__162912 = conj.call(null,coll,x);
var G__162913 = cljs.core.first.call(null,xs);
var G__162914 = cljs.core.next.call(null,xs);
coll = G__162912;
x = G__162913;
xs = G__162914;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__162911 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__162911__delegate.call(this, coll, x, xs);
};
G__162911.cljs$lang$maxFixedArity = 2;
G__162911.cljs$lang$applyTo = (function (arglist__162915){
var coll = cljs.core.first(arglist__162915);
var x = cljs.core.first(cljs.core.next(arglist__162915));
var xs = cljs.core.rest(cljs.core.next(arglist__162915));
return G__162911__delegate.call(this, coll, x, xs);
});
return G__162911;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__162908.call(this,coll,x);
default:
return conj__162909.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__162909.cljs$lang$applyTo;
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
var nth__162916 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__162917 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__162916.call(this,coll,n);
case  3 :
return nth__162917.call(this,coll,n,not_found);
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
var get__162919 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__162920 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__162919.call(this,o,k);
case  3 :
return get__162920.call(this,o,k,not_found);
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
var assoc__162923 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__162924 = (function() { 
var G__162926__delegate = function (coll,k,v,kvs){
while(true){
var ret__162922 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__162927 = ret__162922;
var G__162928 = cljs.core.first.call(null,kvs);
var G__162929 = cljs.core.second.call(null,kvs);
var G__162930 = cljs.core.nnext.call(null,kvs);
coll = G__162927;
k = G__162928;
v = G__162929;
kvs = G__162930;
continue;
}
} else
{return ret__162922;
}
break;
}
};
var G__162926 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__162926__delegate.call(this, coll, k, v, kvs);
};
G__162926.cljs$lang$maxFixedArity = 3;
G__162926.cljs$lang$applyTo = (function (arglist__162931){
var coll = cljs.core.first(arglist__162931);
var k = cljs.core.first(cljs.core.next(arglist__162931));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__162931)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__162931)));
return G__162926__delegate.call(this, coll, k, v, kvs);
});
return G__162926;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__162923.call(this,coll,k,v);
default:
return assoc__162924.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__162924.cljs$lang$applyTo;
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
var dissoc__162933 = (function (coll){
return coll;
});
var dissoc__162934 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__162935 = (function() { 
var G__162937__delegate = function (coll,k,ks){
while(true){
var ret__162932 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__162938 = ret__162932;
var G__162939 = cljs.core.first.call(null,ks);
var G__162940 = cljs.core.next.call(null,ks);
coll = G__162938;
k = G__162939;
ks = G__162940;
continue;
}
} else
{return ret__162932;
}
break;
}
};
var G__162937 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__162937__delegate.call(this, coll, k, ks);
};
G__162937.cljs$lang$maxFixedArity = 2;
G__162937.cljs$lang$applyTo = (function (arglist__162941){
var coll = cljs.core.first(arglist__162941);
var k = cljs.core.first(cljs.core.next(arglist__162941));
var ks = cljs.core.rest(cljs.core.next(arglist__162941));
return G__162937__delegate.call(this, coll, k, ks);
});
return G__162937;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__162933.call(this,coll);
case  2 :
return dissoc__162934.call(this,coll,k);
default:
return dissoc__162935.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__162935.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____162942 = o;

if(cljs.core.truth_((function (){var and__3546__auto____162943 = x__451__auto____162942;

if(cljs.core.truth_(and__3546__auto____162943))
{var and__3546__auto____162944 = x__451__auto____162942.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____162944))
{return cljs.core.not.call(null,x__451__auto____162942.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____162944;
}
} else
{return and__3546__auto____162943;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____162942);
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
var disj__162946 = (function (coll){
return coll;
});
var disj__162947 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__162948 = (function() { 
var G__162950__delegate = function (coll,k,ks){
while(true){
var ret__162945 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__162951 = ret__162945;
var G__162952 = cljs.core.first.call(null,ks);
var G__162953 = cljs.core.next.call(null,ks);
coll = G__162951;
k = G__162952;
ks = G__162953;
continue;
}
} else
{return ret__162945;
}
break;
}
};
var G__162950 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__162950__delegate.call(this, coll, k, ks);
};
G__162950.cljs$lang$maxFixedArity = 2;
G__162950.cljs$lang$applyTo = (function (arglist__162954){
var coll = cljs.core.first(arglist__162954);
var k = cljs.core.first(cljs.core.next(arglist__162954));
var ks = cljs.core.rest(cljs.core.next(arglist__162954));
return G__162950__delegate.call(this, coll, k, ks);
});
return G__162950;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__162946.call(this,coll);
case  2 :
return disj__162947.call(this,coll,k);
default:
return disj__162948.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__162948.cljs$lang$applyTo;
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
{var x__451__auto____162955 = x;

if(cljs.core.truth_((function (){var and__3546__auto____162956 = x__451__auto____162955;

if(cljs.core.truth_(and__3546__auto____162956))
{var and__3546__auto____162957 = x__451__auto____162955.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____162957))
{return cljs.core.not.call(null,x__451__auto____162955.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____162957;
}
} else
{return and__3546__auto____162956;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____162955);
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
{var x__451__auto____162958 = x;

if(cljs.core.truth_((function (){var and__3546__auto____162959 = x__451__auto____162958;

if(cljs.core.truth_(and__3546__auto____162959))
{var and__3546__auto____162960 = x__451__auto____162958.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____162960))
{return cljs.core.not.call(null,x__451__auto____162958.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____162960;
}
} else
{return and__3546__auto____162959;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____162958);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____162961 = x;

if(cljs.core.truth_((function (){var and__3546__auto____162962 = x__451__auto____162961;

if(cljs.core.truth_(and__3546__auto____162962))
{var and__3546__auto____162963 = x__451__auto____162961.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____162963))
{return cljs.core.not.call(null,x__451__auto____162961.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____162963;
}
} else
{return and__3546__auto____162962;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____162961);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____162964 = x;

if(cljs.core.truth_((function (){var and__3546__auto____162965 = x__451__auto____162964;

if(cljs.core.truth_(and__3546__auto____162965))
{var and__3546__auto____162966 = x__451__auto____162964.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____162966))
{return cljs.core.not.call(null,x__451__auto____162964.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____162966;
}
} else
{return and__3546__auto____162965;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____162964);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____162967 = x;

if(cljs.core.truth_((function (){var and__3546__auto____162968 = x__451__auto____162967;

if(cljs.core.truth_(and__3546__auto____162968))
{var and__3546__auto____162969 = x__451__auto____162967.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____162969))
{return cljs.core.not.call(null,x__451__auto____162967.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____162969;
}
} else
{return and__3546__auto____162968;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____162967);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____162970 = x;

if(cljs.core.truth_((function (){var and__3546__auto____162971 = x__451__auto____162970;

if(cljs.core.truth_(and__3546__auto____162971))
{var and__3546__auto____162972 = x__451__auto____162970.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____162972))
{return cljs.core.not.call(null,x__451__auto____162970.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____162972;
}
} else
{return and__3546__auto____162971;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____162970);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____162973 = x;

if(cljs.core.truth_((function (){var and__3546__auto____162974 = x__451__auto____162973;

if(cljs.core.truth_(and__3546__auto____162974))
{var and__3546__auto____162975 = x__451__auto____162973.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____162975))
{return cljs.core.not.call(null,x__451__auto____162973.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____162975;
}
} else
{return and__3546__auto____162974;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____162973);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__162976 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__162976.push(key);
}));
return keys__162976;
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
{var x__451__auto____162977 = s;

if(cljs.core.truth_((function (){var and__3546__auto____162978 = x__451__auto____162977;

if(cljs.core.truth_(and__3546__auto____162978))
{var and__3546__auto____162979 = x__451__auto____162977.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____162979))
{return cljs.core.not.call(null,x__451__auto____162977.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____162979;
}
} else
{return and__3546__auto____162978;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____162977);
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
var and__3546__auto____162980 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____162980))
{return cljs.core.not.call(null,(function (){var or__3548__auto____162981 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____162981))
{return or__3548__auto____162981;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____162980;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____162982 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____162982))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____162982;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____162983 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____162983))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____162983;
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
var and__3546__auto____162984 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____162984))
{return (n == n.toFixed());
} else
{return and__3546__auto____162984;
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
if(cljs.core.truth_((function (){var and__3546__auto____162985 = coll;

if(cljs.core.truth_(and__3546__auto____162985))
{var and__3546__auto____162986 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____162986))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____162986;
}
} else
{return and__3546__auto____162985;
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
var distinct_QMARK___162991 = (function (x){
return true;
});
var distinct_QMARK___162992 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___162993 = (function() { 
var G__162995__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__162987 = cljs.core.set([y,x]);
var xs__162988 = more;

while(true){
var x__162989 = cljs.core.first.call(null,xs__162988);
var etc__162990 = cljs.core.next.call(null,xs__162988);

if(cljs.core.truth_(xs__162988))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__162987,x__162989)))
{return false;
} else
{{
var G__162996 = cljs.core.conj.call(null,s__162987,x__162989);
var G__162997 = etc__162990;
s__162987 = G__162996;
xs__162988 = G__162997;
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
var G__162995 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__162995__delegate.call(this, x, y, more);
};
G__162995.cljs$lang$maxFixedArity = 2;
G__162995.cljs$lang$applyTo = (function (arglist__162998){
var x = cljs.core.first(arglist__162998);
var y = cljs.core.first(cljs.core.next(arglist__162998));
var more = cljs.core.rest(cljs.core.next(arglist__162998));
return G__162995__delegate.call(this, x, y, more);
});
return G__162995;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___162991.call(this,x);
case  2 :
return distinct_QMARK___162992.call(this,x,y);
default:
return distinct_QMARK___162993.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___162993.cljs$lang$applyTo;
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
var r__162999 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__162999)))
{return r__162999;
} else
{if(cljs.core.truth_(r__162999))
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
var sort__163001 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__163002 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__163000 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__163000,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__163000);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__163001.call(this,comp);
case  2 :
return sort__163002.call(this,comp,coll);
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
var sort_by__163004 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__163005 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__163004.call(this,keyfn,comp);
case  3 :
return sort_by__163005.call(this,keyfn,comp,coll);
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
var reduce__163007 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__163008 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__163007.call(this,f,val);
case  3 :
return reduce__163008.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__163014 = (function (f,coll){
var temp__3695__auto____163010 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____163010))
{var s__163011 = temp__3695__auto____163010;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__163011),cljs.core.next.call(null,s__163011));
} else
{return f.call(null);
}
});
var seq_reduce__163015 = (function (f,val,coll){
var val__163012 = val;
var coll__163013 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__163013))
{{
var G__163017 = f.call(null,val__163012,cljs.core.first.call(null,coll__163013));
var G__163018 = cljs.core.next.call(null,coll__163013);
val__163012 = G__163017;
coll__163013 = G__163018;
continue;
}
} else
{return val__163012;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__163014.call(this,f,val);
case  3 :
return seq_reduce__163015.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__163019 = null;
var G__163019__163020 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__163019__163021 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__163019 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__163019__163020.call(this,coll,f);
case  3 :
return G__163019__163021.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163019;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___163023 = (function (){
return 0;
});
var _PLUS___163024 = (function (x){
return x;
});
var _PLUS___163025 = (function (x,y){
return (x + y);
});
var _PLUS___163026 = (function() { 
var G__163028__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__163028 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163028__delegate.call(this, x, y, more);
};
G__163028.cljs$lang$maxFixedArity = 2;
G__163028.cljs$lang$applyTo = (function (arglist__163029){
var x = cljs.core.first(arglist__163029);
var y = cljs.core.first(cljs.core.next(arglist__163029));
var more = cljs.core.rest(cljs.core.next(arglist__163029));
return G__163028__delegate.call(this, x, y, more);
});
return G__163028;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___163023.call(this);
case  1 :
return _PLUS___163024.call(this,x);
case  2 :
return _PLUS___163025.call(this,x,y);
default:
return _PLUS___163026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___163026.cljs$lang$applyTo;
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
var ___163030 = (function (x){
return (- x);
});
var ___163031 = (function (x,y){
return (x - y);
});
var ___163032 = (function() { 
var G__163034__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__163034 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163034__delegate.call(this, x, y, more);
};
G__163034.cljs$lang$maxFixedArity = 2;
G__163034.cljs$lang$applyTo = (function (arglist__163035){
var x = cljs.core.first(arglist__163035);
var y = cljs.core.first(cljs.core.next(arglist__163035));
var more = cljs.core.rest(cljs.core.next(arglist__163035));
return G__163034__delegate.call(this, x, y, more);
});
return G__163034;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___163030.call(this,x);
case  2 :
return ___163031.call(this,x,y);
default:
return ___163032.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___163032.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___163036 = (function (){
return 1;
});
var _STAR___163037 = (function (x){
return x;
});
var _STAR___163038 = (function (x,y){
return (x * y);
});
var _STAR___163039 = (function() { 
var G__163041__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__163041 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163041__delegate.call(this, x, y, more);
};
G__163041.cljs$lang$maxFixedArity = 2;
G__163041.cljs$lang$applyTo = (function (arglist__163042){
var x = cljs.core.first(arglist__163042);
var y = cljs.core.first(cljs.core.next(arglist__163042));
var more = cljs.core.rest(cljs.core.next(arglist__163042));
return G__163041__delegate.call(this, x, y, more);
});
return G__163041;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___163036.call(this);
case  1 :
return _STAR___163037.call(this,x);
case  2 :
return _STAR___163038.call(this,x,y);
default:
return _STAR___163039.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___163039.cljs$lang$applyTo;
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
var _SLASH___163043 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___163044 = (function (x,y){
return (x / y);
});
var _SLASH___163045 = (function() { 
var G__163047__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__163047 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163047__delegate.call(this, x, y, more);
};
G__163047.cljs$lang$maxFixedArity = 2;
G__163047.cljs$lang$applyTo = (function (arglist__163048){
var x = cljs.core.first(arglist__163048);
var y = cljs.core.first(cljs.core.next(arglist__163048));
var more = cljs.core.rest(cljs.core.next(arglist__163048));
return G__163047__delegate.call(this, x, y, more);
});
return G__163047;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___163043.call(this,x);
case  2 :
return _SLASH___163044.call(this,x,y);
default:
return _SLASH___163045.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___163045.cljs$lang$applyTo;
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
var _LT___163049 = (function (x){
return true;
});
var _LT___163050 = (function (x,y){
return (x < y);
});
var _LT___163051 = (function() { 
var G__163053__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__163054 = y;
var G__163055 = cljs.core.first.call(null,more);
var G__163056 = cljs.core.next.call(null,more);
x = G__163054;
y = G__163055;
more = G__163056;
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
var G__163053 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163053__delegate.call(this, x, y, more);
};
G__163053.cljs$lang$maxFixedArity = 2;
G__163053.cljs$lang$applyTo = (function (arglist__163057){
var x = cljs.core.first(arglist__163057);
var y = cljs.core.first(cljs.core.next(arglist__163057));
var more = cljs.core.rest(cljs.core.next(arglist__163057));
return G__163053__delegate.call(this, x, y, more);
});
return G__163053;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___163049.call(this,x);
case  2 :
return _LT___163050.call(this,x,y);
default:
return _LT___163051.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___163051.cljs$lang$applyTo;
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
var _LT__EQ___163058 = (function (x){
return true;
});
var _LT__EQ___163059 = (function (x,y){
return (x <= y);
});
var _LT__EQ___163060 = (function() { 
var G__163062__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__163063 = y;
var G__163064 = cljs.core.first.call(null,more);
var G__163065 = cljs.core.next.call(null,more);
x = G__163063;
y = G__163064;
more = G__163065;
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
var G__163062 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163062__delegate.call(this, x, y, more);
};
G__163062.cljs$lang$maxFixedArity = 2;
G__163062.cljs$lang$applyTo = (function (arglist__163066){
var x = cljs.core.first(arglist__163066);
var y = cljs.core.first(cljs.core.next(arglist__163066));
var more = cljs.core.rest(cljs.core.next(arglist__163066));
return G__163062__delegate.call(this, x, y, more);
});
return G__163062;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___163058.call(this,x);
case  2 :
return _LT__EQ___163059.call(this,x,y);
default:
return _LT__EQ___163060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___163060.cljs$lang$applyTo;
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
var _GT___163067 = (function (x){
return true;
});
var _GT___163068 = (function (x,y){
return (x > y);
});
var _GT___163069 = (function() { 
var G__163071__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__163072 = y;
var G__163073 = cljs.core.first.call(null,more);
var G__163074 = cljs.core.next.call(null,more);
x = G__163072;
y = G__163073;
more = G__163074;
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
var G__163071 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163071__delegate.call(this, x, y, more);
};
G__163071.cljs$lang$maxFixedArity = 2;
G__163071.cljs$lang$applyTo = (function (arglist__163075){
var x = cljs.core.first(arglist__163075);
var y = cljs.core.first(cljs.core.next(arglist__163075));
var more = cljs.core.rest(cljs.core.next(arglist__163075));
return G__163071__delegate.call(this, x, y, more);
});
return G__163071;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___163067.call(this,x);
case  2 :
return _GT___163068.call(this,x,y);
default:
return _GT___163069.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___163069.cljs$lang$applyTo;
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
var _GT__EQ___163076 = (function (x){
return true;
});
var _GT__EQ___163077 = (function (x,y){
return (x >= y);
});
var _GT__EQ___163078 = (function() { 
var G__163080__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__163081 = y;
var G__163082 = cljs.core.first.call(null,more);
var G__163083 = cljs.core.next.call(null,more);
x = G__163081;
y = G__163082;
more = G__163083;
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
var G__163080 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163080__delegate.call(this, x, y, more);
};
G__163080.cljs$lang$maxFixedArity = 2;
G__163080.cljs$lang$applyTo = (function (arglist__163084){
var x = cljs.core.first(arglist__163084);
var y = cljs.core.first(cljs.core.next(arglist__163084));
var more = cljs.core.rest(cljs.core.next(arglist__163084));
return G__163080__delegate.call(this, x, y, more);
});
return G__163080;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___163076.call(this,x);
case  2 :
return _GT__EQ___163077.call(this,x,y);
default:
return _GT__EQ___163078.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___163078.cljs$lang$applyTo;
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
var max__163085 = (function (x){
return x;
});
var max__163086 = (function (x,y){
return ((x > y) ? x : y);
});
var max__163087 = (function() { 
var G__163089__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__163089 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163089__delegate.call(this, x, y, more);
};
G__163089.cljs$lang$maxFixedArity = 2;
G__163089.cljs$lang$applyTo = (function (arglist__163090){
var x = cljs.core.first(arglist__163090);
var y = cljs.core.first(cljs.core.next(arglist__163090));
var more = cljs.core.rest(cljs.core.next(arglist__163090));
return G__163089__delegate.call(this, x, y, more);
});
return G__163089;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__163085.call(this,x);
case  2 :
return max__163086.call(this,x,y);
default:
return max__163087.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__163087.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__163091 = (function (x){
return x;
});
var min__163092 = (function (x,y){
return ((x < y) ? x : y);
});
var min__163093 = (function() { 
var G__163095__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__163095 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163095__delegate.call(this, x, y, more);
};
G__163095.cljs$lang$maxFixedArity = 2;
G__163095.cljs$lang$applyTo = (function (arglist__163096){
var x = cljs.core.first(arglist__163096);
var y = cljs.core.first(cljs.core.next(arglist__163096));
var more = cljs.core.rest(cljs.core.next(arglist__163096));
return G__163095__delegate.call(this, x, y, more);
});
return G__163095;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__163091.call(this,x);
case  2 :
return min__163092.call(this,x,y);
default:
return min__163093.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__163093.cljs$lang$applyTo;
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
var rem__163097 = (n % d);

return cljs.core.fix.call(null,((n - rem__163097) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__163098 = cljs.core.quot.call(null,n,d);

return (n - (d * q__163098));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__163099 = (function (){
return Math.random.call(null);
});
var rand__163100 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__163099.call(this);
case  1 :
return rand__163100.call(this,n);
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
var _EQ__EQ___163102 = (function (x){
return true;
});
var _EQ__EQ___163103 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___163104 = (function() { 
var G__163106__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__163107 = y;
var G__163108 = cljs.core.first.call(null,more);
var G__163109 = cljs.core.next.call(null,more);
x = G__163107;
y = G__163108;
more = G__163109;
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
var G__163106 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163106__delegate.call(this, x, y, more);
};
G__163106.cljs$lang$maxFixedArity = 2;
G__163106.cljs$lang$applyTo = (function (arglist__163110){
var x = cljs.core.first(arglist__163110);
var y = cljs.core.first(cljs.core.next(arglist__163110));
var more = cljs.core.rest(cljs.core.next(arglist__163110));
return G__163106__delegate.call(this, x, y, more);
});
return G__163106;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___163102.call(this,x);
case  2 :
return _EQ__EQ___163103.call(this,x,y);
default:
return _EQ__EQ___163104.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___163104.cljs$lang$applyTo;
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
var n__163111 = n;
var xs__163112 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____163113 = xs__163112;

if(cljs.core.truth_(and__3546__auto____163113))
{return (n__163111 > 0);
} else
{return and__3546__auto____163113;
}
})()))
{{
var G__163114 = (n__163111 - 1);
var G__163115 = cljs.core.next.call(null,xs__163112);
n__163111 = G__163114;
xs__163112 = G__163115;
continue;
}
} else
{return xs__163112;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__163120 = null;
var G__163120__163121 = (function (coll,n){
var temp__3695__auto____163116 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____163116))
{var xs__163117 = temp__3695__auto____163116;

return cljs.core.first.call(null,xs__163117);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__163120__163122 = (function (coll,n,not_found){
var temp__3695__auto____163118 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____163118))
{var xs__163119 = temp__3695__auto____163118;

return cljs.core.first.call(null,xs__163119);
} else
{return not_found;
}
});
G__163120 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__163120__163121.call(this,coll,n);
case  3 :
return G__163120__163122.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163120;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___163124 = (function (){
return "";
});
var str_STAR___163125 = (function (x){
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
var str_STAR___163126 = (function() { 
var G__163128__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__163129 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__163130 = cljs.core.next.call(null,more);
sb = G__163129;
more = G__163130;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__163128 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__163128__delegate.call(this, x, ys);
};
G__163128.cljs$lang$maxFixedArity = 1;
G__163128.cljs$lang$applyTo = (function (arglist__163131){
var x = cljs.core.first(arglist__163131);
var ys = cljs.core.rest(arglist__163131);
return G__163128__delegate.call(this, x, ys);
});
return G__163128;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___163124.call(this);
case  1 :
return str_STAR___163125.call(this,x);
default:
return str_STAR___163126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___163126.cljs$lang$applyTo;
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
var str__163132 = (function (){
return "";
});
var str__163133 = (function (x){
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
var str__163134 = (function() { 
var G__163136__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__163137 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__163138 = cljs.core.next.call(null,more);
sb = G__163137;
more = G__163138;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__163136 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__163136__delegate.call(this, x, ys);
};
G__163136.cljs$lang$maxFixedArity = 1;
G__163136.cljs$lang$applyTo = (function (arglist__163139){
var x = cljs.core.first(arglist__163139);
var ys = cljs.core.rest(arglist__163139);
return G__163136__delegate.call(this, x, ys);
});
return G__163136;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__163132.call(this);
case  1 :
return str__163133.call(this,x);
default:
return str__163134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__163134.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__163140 = (function (s,start){
return s.substring(start);
});
var subs__163141 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__163140.call(this,s,start);
case  3 :
return subs__163141.call(this,s,start,end);
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
var symbol__163143 = (function (name){
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
var symbol__163144 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__163143.call(this,ns);
case  2 :
return symbol__163144.call(this,ns,name);
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
var keyword__163146 = (function (name){
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
var keyword__163147 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__163146.call(this,ns);
case  2 :
return keyword__163147.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__163149 = cljs.core.seq.call(null,x);
var ys__163150 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__163149 === null)))
{return (ys__163150 === null);
} else
{if(cljs.core.truth_((ys__163150 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__163149),cljs.core.first.call(null,ys__163150))))
{{
var G__163151 = cljs.core.next.call(null,xs__163149);
var G__163152 = cljs.core.next.call(null,ys__163150);
xs__163149 = G__163151;
ys__163150 = G__163152;
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
return cljs.core.reduce.call(null,(function (p1__163153_SHARP_,p2__163154_SHARP_){
return cljs.core.hash_combine.call(null,p1__163153_SHARP_,cljs.core.hash.call(null,p2__163154_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__163155__163156 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__163155__163156))
{var G__163158__163160 = cljs.core.first.call(null,G__163155__163156);
var vec__163159__163161 = G__163158__163160;
var key_name__163162 = cljs.core.nth.call(null,vec__163159__163161,0,null);
var f__163163 = cljs.core.nth.call(null,vec__163159__163161,1,null);
var G__163155__163164 = G__163155__163156;

var G__163158__163165 = G__163158__163160;
var G__163155__163166 = G__163155__163164;

while(true){
var vec__163167__163168 = G__163158__163165;
var key_name__163169 = cljs.core.nth.call(null,vec__163167__163168,0,null);
var f__163170 = cljs.core.nth.call(null,vec__163167__163168,1,null);
var G__163155__163171 = G__163155__163166;

var str_name__163172 = cljs.core.name.call(null,key_name__163169);

obj[str_name__163172] = f__163170;
var temp__3698__auto____163173 = cljs.core.next.call(null,G__163155__163171);

if(cljs.core.truth_(temp__3698__auto____163173))
{var G__163155__163174 = temp__3698__auto____163173;

{
var G__163175 = cljs.core.first.call(null,G__163155__163174);
var G__163176 = G__163155__163174;
G__163158__163165 = G__163175;
G__163155__163166 = G__163176;
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
var this__163177 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__163178 = this;
return (new cljs.core.List(this__163178.meta,o,coll,(this__163178.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__163179 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__163180 = this;
return this__163180.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__163181 = this;
return this__163181.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__163182 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__163183 = this;
return this__163183.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__163184 = this;
return this__163184.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__163185 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__163186 = this;
return (new cljs.core.List(meta,this__163186.first,this__163186.rest,this__163186.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__163187 = this;
return this__163187.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__163188 = this;
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
var this__163189 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__163190 = this;
return (new cljs.core.List(this__163190.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__163191 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__163192 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__163193 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__163194 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__163195 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__163196 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__163197 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__163198 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__163199 = this;
return this__163199.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__163200 = this;
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
list.cljs$lang$applyTo = (function (arglist__163201){
var items = cljs.core.seq( arglist__163201 );;
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
var this__163202 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__163203 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__163204 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__163205 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__163205.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__163206 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__163207 = this;
return this__163207.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__163208 = this;
if(cljs.core.truth_((this__163208.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__163208.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__163209 = this;
return this__163209.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__163210 = this;
return (new cljs.core.Cons(meta,this__163210.first,this__163210.rest));
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
var G__163211 = null;
var G__163211__163212 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__163211__163213 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__163211 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__163211__163212.call(this,string,f);
case  3 :
return G__163211__163213.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163211;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__163215 = null;
var G__163215__163216 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__163215__163217 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__163215 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__163215__163216.call(this,string,k);
case  3 :
return G__163215__163217.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163215;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__163219 = null;
var G__163219__163220 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__163219__163221 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__163219 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__163219__163220.call(this,string,n);
case  3 :
return G__163219__163221.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163219;
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
var G__163229 = null;
var G__163229__163230 = (function (tsym163223,coll){
var tsym163223__163225 = this;

var this$__163226 = tsym163223__163225;

return cljs.core.get.call(null,coll,this$__163226.toString());
});
var G__163229__163231 = (function (tsym163224,coll,not_found){
var tsym163224__163227 = this;

var this$__163228 = tsym163224__163227;

return cljs.core.get.call(null,coll,this$__163228.toString(),not_found);
});
G__163229 = function(tsym163224,coll,not_found){
switch(arguments.length){
case  2 :
return G__163229__163230.call(this,tsym163224,coll);
case  3 :
return G__163229__163231.call(this,tsym163224,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163229;
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
var x__163233 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__163233;
} else
{lazy_seq.x = x__163233.call(null);
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
var this__163234 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__163235 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__163236 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__163237 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__163237.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__163238 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__163239 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__163240 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__163241 = this;
return this__163241.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__163242 = this;
return (new cljs.core.LazySeq(meta,this__163242.realized,this__163242.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__163243 = [];

var s__163244 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__163244)))
{ary__163243.push(cljs.core.first.call(null,s__163244));
{
var G__163245 = cljs.core.next.call(null,s__163244);
s__163244 = G__163245;
continue;
}
} else
{return ary__163243;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__163246 = s;
var i__163247 = n;
var sum__163248 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____163249 = (i__163247 > 0);

if(cljs.core.truth_(and__3546__auto____163249))
{return cljs.core.seq.call(null,s__163246);
} else
{return and__3546__auto____163249;
}
})()))
{{
var G__163250 = cljs.core.next.call(null,s__163246);
var G__163251 = (i__163247 - 1);
var G__163252 = (sum__163248 + 1);
s__163246 = G__163250;
i__163247 = G__163251;
sum__163248 = G__163252;
continue;
}
} else
{return sum__163248;
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
var concat__163256 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__163257 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__163258 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__163253 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__163253))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__163253),concat.call(null,cljs.core.rest.call(null,s__163253),y));
} else
{return y;
}
})));
});
var concat__163259 = (function() { 
var G__163261__delegate = function (x,y,zs){
var cat__163255 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__163254 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__163254))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__163254),cat.call(null,cljs.core.rest.call(null,xys__163254),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__163255.call(null,concat.call(null,x,y),zs);
};
var G__163261 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163261__delegate.call(this, x, y, zs);
};
G__163261.cljs$lang$maxFixedArity = 2;
G__163261.cljs$lang$applyTo = (function (arglist__163262){
var x = cljs.core.first(arglist__163262);
var y = cljs.core.first(cljs.core.next(arglist__163262));
var zs = cljs.core.rest(cljs.core.next(arglist__163262));
return G__163261__delegate.call(this, x, y, zs);
});
return G__163261;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__163256.call(this);
case  1 :
return concat__163257.call(this,x);
case  2 :
return concat__163258.call(this,x,y);
default:
return concat__163259.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__163259.cljs$lang$applyTo;
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
var list_STAR___163263 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___163264 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___163265 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___163266 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___163267 = (function() { 
var G__163269__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__163269 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__163269__delegate.call(this, a, b, c, d, more);
};
G__163269.cljs$lang$maxFixedArity = 4;
G__163269.cljs$lang$applyTo = (function (arglist__163270){
var a = cljs.core.first(arglist__163270);
var b = cljs.core.first(cljs.core.next(arglist__163270));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163270)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__163270))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__163270))));
return G__163269__delegate.call(this, a, b, c, d, more);
});
return G__163269;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___163263.call(this,a);
case  2 :
return list_STAR___163264.call(this,a,b);
case  3 :
return list_STAR___163265.call(this,a,b,c);
case  4 :
return list_STAR___163266.call(this,a,b,c,d);
default:
return list_STAR___163267.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___163267.cljs$lang$applyTo;
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
var apply__163280 = (function (f,args){
var fixed_arity__163271 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__163271 + 1)) <= fixed_arity__163271)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__163281 = (function (f,x,args){
var arglist__163272 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__163273 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__163272,fixed_arity__163273) <= fixed_arity__163273)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__163272));
} else
{return f.cljs$lang$applyTo(arglist__163272);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__163272));
}
});
var apply__163282 = (function (f,x,y,args){
var arglist__163274 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__163275 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__163274,fixed_arity__163275) <= fixed_arity__163275)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__163274));
} else
{return f.cljs$lang$applyTo(arglist__163274);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__163274));
}
});
var apply__163283 = (function (f,x,y,z,args){
var arglist__163276 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__163277 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__163276,fixed_arity__163277) <= fixed_arity__163277)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__163276));
} else
{return f.cljs$lang$applyTo(arglist__163276);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__163276));
}
});
var apply__163284 = (function() { 
var G__163286__delegate = function (f,a,b,c,d,args){
var arglist__163278 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__163279 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__163278,fixed_arity__163279) <= fixed_arity__163279)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__163278));
} else
{return f.cljs$lang$applyTo(arglist__163278);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__163278));
}
};
var G__163286 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__163286__delegate.call(this, f, a, b, c, d, args);
};
G__163286.cljs$lang$maxFixedArity = 5;
G__163286.cljs$lang$applyTo = (function (arglist__163287){
var f = cljs.core.first(arglist__163287);
var a = cljs.core.first(cljs.core.next(arglist__163287));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163287)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__163287))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__163287)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__163287)))));
return G__163286__delegate.call(this, f, a, b, c, d, args);
});
return G__163286;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__163280.call(this,f,a);
case  3 :
return apply__163281.call(this,f,a,b);
case  4 :
return apply__163282.call(this,f,a,b,c);
case  5 :
return apply__163283.call(this,f,a,b,c,d);
default:
return apply__163284.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__163284.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__163288){
var obj = cljs.core.first(arglist__163288);
var f = cljs.core.first(cljs.core.next(arglist__163288));
var args = cljs.core.rest(cljs.core.next(arglist__163288));
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
var not_EQ___163289 = (function (x){
return false;
});
var not_EQ___163290 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___163291 = (function() { 
var G__163293__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__163293 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163293__delegate.call(this, x, y, more);
};
G__163293.cljs$lang$maxFixedArity = 2;
G__163293.cljs$lang$applyTo = (function (arglist__163294){
var x = cljs.core.first(arglist__163294);
var y = cljs.core.first(cljs.core.next(arglist__163294));
var more = cljs.core.rest(cljs.core.next(arglist__163294));
return G__163293__delegate.call(this, x, y, more);
});
return G__163293;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___163289.call(this,x);
case  2 :
return not_EQ___163290.call(this,x,y);
default:
return not_EQ___163291.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___163291.cljs$lang$applyTo;
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
var G__163295 = pred;
var G__163296 = cljs.core.next.call(null,coll);
pred = G__163295;
coll = G__163296;
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
{var or__3548__auto____163297 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____163297))
{return or__3548__auto____163297;
} else
{{
var G__163298 = pred;
var G__163299 = cljs.core.next.call(null,coll);
pred = G__163298;
coll = G__163299;
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
var G__163300 = null;
var G__163300__163301 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__163300__163302 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__163300__163303 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__163300__163304 = (function() { 
var G__163306__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__163306 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163306__delegate.call(this, x, y, zs);
};
G__163306.cljs$lang$maxFixedArity = 2;
G__163306.cljs$lang$applyTo = (function (arglist__163307){
var x = cljs.core.first(arglist__163307);
var y = cljs.core.first(cljs.core.next(arglist__163307));
var zs = cljs.core.rest(cljs.core.next(arglist__163307));
return G__163306__delegate.call(this, x, y, zs);
});
return G__163306;
})()
;
G__163300 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__163300__163301.call(this);
case  1 :
return G__163300__163302.call(this,x);
case  2 :
return G__163300__163303.call(this,x,y);
default:
return G__163300__163304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__163300.cljs$lang$maxFixedArity = 2;
G__163300.cljs$lang$applyTo = G__163300__163304.cljs$lang$applyTo;
return G__163300;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__163308__delegate = function (args){
return x;
};
var G__163308 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__163308__delegate.call(this, args);
};
G__163308.cljs$lang$maxFixedArity = 0;
G__163308.cljs$lang$applyTo = (function (arglist__163309){
var args = cljs.core.seq( arglist__163309 );;
return G__163308__delegate.call(this, args);
});
return G__163308;
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
var comp__163313 = (function (){
return cljs.core.identity;
});
var comp__163314 = (function (f){
return f;
});
var comp__163315 = (function (f,g){
return (function() {
var G__163319 = null;
var G__163319__163320 = (function (){
return f.call(null,g.call(null));
});
var G__163319__163321 = (function (x){
return f.call(null,g.call(null,x));
});
var G__163319__163322 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__163319__163323 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__163319__163324 = (function() { 
var G__163326__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__163326 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163326__delegate.call(this, x, y, z, args);
};
G__163326.cljs$lang$maxFixedArity = 3;
G__163326.cljs$lang$applyTo = (function (arglist__163327){
var x = cljs.core.first(arglist__163327);
var y = cljs.core.first(cljs.core.next(arglist__163327));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163327)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163327)));
return G__163326__delegate.call(this, x, y, z, args);
});
return G__163326;
})()
;
G__163319 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__163319__163320.call(this);
case  1 :
return G__163319__163321.call(this,x);
case  2 :
return G__163319__163322.call(this,x,y);
case  3 :
return G__163319__163323.call(this,x,y,z);
default:
return G__163319__163324.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__163319.cljs$lang$maxFixedArity = 3;
G__163319.cljs$lang$applyTo = G__163319__163324.cljs$lang$applyTo;
return G__163319;
})()
});
var comp__163316 = (function (f,g,h){
return (function() {
var G__163328 = null;
var G__163328__163329 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__163328__163330 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__163328__163331 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__163328__163332 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__163328__163333 = (function() { 
var G__163335__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__163335 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163335__delegate.call(this, x, y, z, args);
};
G__163335.cljs$lang$maxFixedArity = 3;
G__163335.cljs$lang$applyTo = (function (arglist__163336){
var x = cljs.core.first(arglist__163336);
var y = cljs.core.first(cljs.core.next(arglist__163336));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163336)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163336)));
return G__163335__delegate.call(this, x, y, z, args);
});
return G__163335;
})()
;
G__163328 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__163328__163329.call(this);
case  1 :
return G__163328__163330.call(this,x);
case  2 :
return G__163328__163331.call(this,x,y);
case  3 :
return G__163328__163332.call(this,x,y,z);
default:
return G__163328__163333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__163328.cljs$lang$maxFixedArity = 3;
G__163328.cljs$lang$applyTo = G__163328__163333.cljs$lang$applyTo;
return G__163328;
})()
});
var comp__163317 = (function() { 
var G__163337__delegate = function (f1,f2,f3,fs){
var fs__163310 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__163338__delegate = function (args){
var ret__163311 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__163310),args);
var fs__163312 = cljs.core.next.call(null,fs__163310);

while(true){
if(cljs.core.truth_(fs__163312))
{{
var G__163339 = cljs.core.first.call(null,fs__163312).call(null,ret__163311);
var G__163340 = cljs.core.next.call(null,fs__163312);
ret__163311 = G__163339;
fs__163312 = G__163340;
continue;
}
} else
{return ret__163311;
}
break;
}
};
var G__163338 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__163338__delegate.call(this, args);
};
G__163338.cljs$lang$maxFixedArity = 0;
G__163338.cljs$lang$applyTo = (function (arglist__163341){
var args = cljs.core.seq( arglist__163341 );;
return G__163338__delegate.call(this, args);
});
return G__163338;
})()
;
};
var G__163337 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163337__delegate.call(this, f1, f2, f3, fs);
};
G__163337.cljs$lang$maxFixedArity = 3;
G__163337.cljs$lang$applyTo = (function (arglist__163342){
var f1 = cljs.core.first(arglist__163342);
var f2 = cljs.core.first(cljs.core.next(arglist__163342));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163342)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163342)));
return G__163337__delegate.call(this, f1, f2, f3, fs);
});
return G__163337;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__163313.call(this);
case  1 :
return comp__163314.call(this,f1);
case  2 :
return comp__163315.call(this,f1,f2);
case  3 :
return comp__163316.call(this,f1,f2,f3);
default:
return comp__163317.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__163317.cljs$lang$applyTo;
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
var partial__163343 = (function (f,arg1){
return (function() { 
var G__163348__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__163348 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__163348__delegate.call(this, args);
};
G__163348.cljs$lang$maxFixedArity = 0;
G__163348.cljs$lang$applyTo = (function (arglist__163349){
var args = cljs.core.seq( arglist__163349 );;
return G__163348__delegate.call(this, args);
});
return G__163348;
})()
;
});
var partial__163344 = (function (f,arg1,arg2){
return (function() { 
var G__163350__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__163350 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__163350__delegate.call(this, args);
};
G__163350.cljs$lang$maxFixedArity = 0;
G__163350.cljs$lang$applyTo = (function (arglist__163351){
var args = cljs.core.seq( arglist__163351 );;
return G__163350__delegate.call(this, args);
});
return G__163350;
})()
;
});
var partial__163345 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__163352__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__163352 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__163352__delegate.call(this, args);
};
G__163352.cljs$lang$maxFixedArity = 0;
G__163352.cljs$lang$applyTo = (function (arglist__163353){
var args = cljs.core.seq( arglist__163353 );;
return G__163352__delegate.call(this, args);
});
return G__163352;
})()
;
});
var partial__163346 = (function() { 
var G__163354__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__163355__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__163355 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__163355__delegate.call(this, args);
};
G__163355.cljs$lang$maxFixedArity = 0;
G__163355.cljs$lang$applyTo = (function (arglist__163356){
var args = cljs.core.seq( arglist__163356 );;
return G__163355__delegate.call(this, args);
});
return G__163355;
})()
;
};
var G__163354 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__163354__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__163354.cljs$lang$maxFixedArity = 4;
G__163354.cljs$lang$applyTo = (function (arglist__163357){
var f = cljs.core.first(arglist__163357);
var arg1 = cljs.core.first(cljs.core.next(arglist__163357));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163357)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__163357))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__163357))));
return G__163354__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__163354;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__163343.call(this,f,arg1);
case  3 :
return partial__163344.call(this,f,arg1,arg2);
case  4 :
return partial__163345.call(this,f,arg1,arg2,arg3);
default:
return partial__163346.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__163346.cljs$lang$applyTo;
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
var fnil__163358 = (function (f,x){
return (function() {
var G__163362 = null;
var G__163362__163363 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__163362__163364 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__163362__163365 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__163362__163366 = (function() { 
var G__163368__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__163368 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163368__delegate.call(this, a, b, c, ds);
};
G__163368.cljs$lang$maxFixedArity = 3;
G__163368.cljs$lang$applyTo = (function (arglist__163369){
var a = cljs.core.first(arglist__163369);
var b = cljs.core.first(cljs.core.next(arglist__163369));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163369)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163369)));
return G__163368__delegate.call(this, a, b, c, ds);
});
return G__163368;
})()
;
G__163362 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__163362__163363.call(this,a);
case  2 :
return G__163362__163364.call(this,a,b);
case  3 :
return G__163362__163365.call(this,a,b,c);
default:
return G__163362__163366.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__163362.cljs$lang$maxFixedArity = 3;
G__163362.cljs$lang$applyTo = G__163362__163366.cljs$lang$applyTo;
return G__163362;
})()
});
var fnil__163359 = (function (f,x,y){
return (function() {
var G__163370 = null;
var G__163370__163371 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__163370__163372 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__163370__163373 = (function() { 
var G__163375__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__163375 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163375__delegate.call(this, a, b, c, ds);
};
G__163375.cljs$lang$maxFixedArity = 3;
G__163375.cljs$lang$applyTo = (function (arglist__163376){
var a = cljs.core.first(arglist__163376);
var b = cljs.core.first(cljs.core.next(arglist__163376));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163376)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163376)));
return G__163375__delegate.call(this, a, b, c, ds);
});
return G__163375;
})()
;
G__163370 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__163370__163371.call(this,a,b);
case  3 :
return G__163370__163372.call(this,a,b,c);
default:
return G__163370__163373.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__163370.cljs$lang$maxFixedArity = 3;
G__163370.cljs$lang$applyTo = G__163370__163373.cljs$lang$applyTo;
return G__163370;
})()
});
var fnil__163360 = (function (f,x,y,z){
return (function() {
var G__163377 = null;
var G__163377__163378 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__163377__163379 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__163377__163380 = (function() { 
var G__163382__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__163382 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163382__delegate.call(this, a, b, c, ds);
};
G__163382.cljs$lang$maxFixedArity = 3;
G__163382.cljs$lang$applyTo = (function (arglist__163383){
var a = cljs.core.first(arglist__163383);
var b = cljs.core.first(cljs.core.next(arglist__163383));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163383)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163383)));
return G__163382__delegate.call(this, a, b, c, ds);
});
return G__163382;
})()
;
G__163377 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__163377__163378.call(this,a,b);
case  3 :
return G__163377__163379.call(this,a,b,c);
default:
return G__163377__163380.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__163377.cljs$lang$maxFixedArity = 3;
G__163377.cljs$lang$applyTo = G__163377__163380.cljs$lang$applyTo;
return G__163377;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__163358.call(this,f,x);
case  3 :
return fnil__163359.call(this,f,x,y);
case  4 :
return fnil__163360.call(this,f,x,y,z);
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
var mapi__163386 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____163384 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____163384))
{var s__163385 = temp__3698__auto____163384;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__163385)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__163385)));
} else
{return null;
}
})));
});

return mapi__163386.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____163387 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____163387))
{var s__163388 = temp__3698__auto____163387;

var x__163389 = f.call(null,cljs.core.first.call(null,s__163388));

if(cljs.core.truth_((x__163389 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__163388));
} else
{return cljs.core.cons.call(null,x__163389,keep.call(null,f,cljs.core.rest.call(null,s__163388)));
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
var keepi__163399 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____163396 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____163396))
{var s__163397 = temp__3698__auto____163396;

var x__163398 = f.call(null,idx,cljs.core.first.call(null,s__163397));

if(cljs.core.truth_((x__163398 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__163397));
} else
{return cljs.core.cons.call(null,x__163398,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__163397)));
}
} else
{return null;
}
})));
});

return keepi__163399.call(null,0,coll);
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
var every_pred__163444 = (function (p){
return (function() {
var ep1 = null;
var ep1__163449 = (function (){
return true;
});
var ep1__163450 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__163451 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____163406 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____163406))
{return p.call(null,y);
} else
{return and__3546__auto____163406;
}
})());
});
var ep1__163452 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____163407 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____163407))
{var and__3546__auto____163408 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____163408))
{return p.call(null,z);
} else
{return and__3546__auto____163408;
}
} else
{return and__3546__auto____163407;
}
})());
});
var ep1__163453 = (function() { 
var G__163455__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____163409 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____163409))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____163409;
}
})());
};
var G__163455 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163455__delegate.call(this, x, y, z, args);
};
G__163455.cljs$lang$maxFixedArity = 3;
G__163455.cljs$lang$applyTo = (function (arglist__163456){
var x = cljs.core.first(arglist__163456);
var y = cljs.core.first(cljs.core.next(arglist__163456));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163456)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163456)));
return G__163455__delegate.call(this, x, y, z, args);
});
return G__163455;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__163449.call(this);
case  1 :
return ep1__163450.call(this,x);
case  2 :
return ep1__163451.call(this,x,y);
case  3 :
return ep1__163452.call(this,x,y,z);
default:
return ep1__163453.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__163453.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__163445 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__163457 = (function (){
return true;
});
var ep2__163458 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____163410 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____163410))
{return p2.call(null,x);
} else
{return and__3546__auto____163410;
}
})());
});
var ep2__163459 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____163411 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____163411))
{var and__3546__auto____163412 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____163412))
{var and__3546__auto____163413 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____163413))
{return p2.call(null,y);
} else
{return and__3546__auto____163413;
}
} else
{return and__3546__auto____163412;
}
} else
{return and__3546__auto____163411;
}
})());
});
var ep2__163460 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____163414 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____163414))
{var and__3546__auto____163415 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____163415))
{var and__3546__auto____163416 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____163416))
{var and__3546__auto____163417 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____163417))
{var and__3546__auto____163418 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____163418))
{return p2.call(null,z);
} else
{return and__3546__auto____163418;
}
} else
{return and__3546__auto____163417;
}
} else
{return and__3546__auto____163416;
}
} else
{return and__3546__auto____163415;
}
} else
{return and__3546__auto____163414;
}
})());
});
var ep2__163461 = (function() { 
var G__163463__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____163419 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____163419))
{return cljs.core.every_QMARK_.call(null,(function (p1__163390_SHARP_){
var and__3546__auto____163420 = p1.call(null,p1__163390_SHARP_);

if(cljs.core.truth_(and__3546__auto____163420))
{return p2.call(null,p1__163390_SHARP_);
} else
{return and__3546__auto____163420;
}
}),args);
} else
{return and__3546__auto____163419;
}
})());
};
var G__163463 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163463__delegate.call(this, x, y, z, args);
};
G__163463.cljs$lang$maxFixedArity = 3;
G__163463.cljs$lang$applyTo = (function (arglist__163464){
var x = cljs.core.first(arglist__163464);
var y = cljs.core.first(cljs.core.next(arglist__163464));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163464)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163464)));
return G__163463__delegate.call(this, x, y, z, args);
});
return G__163463;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__163457.call(this);
case  1 :
return ep2__163458.call(this,x);
case  2 :
return ep2__163459.call(this,x,y);
case  3 :
return ep2__163460.call(this,x,y,z);
default:
return ep2__163461.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__163461.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__163446 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__163465 = (function (){
return true;
});
var ep3__163466 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____163421 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____163421))
{var and__3546__auto____163422 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____163422))
{return p3.call(null,x);
} else
{return and__3546__auto____163422;
}
} else
{return and__3546__auto____163421;
}
})());
});
var ep3__163467 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____163423 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____163423))
{var and__3546__auto____163424 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____163424))
{var and__3546__auto____163425 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____163425))
{var and__3546__auto____163426 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____163426))
{var and__3546__auto____163427 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____163427))
{return p3.call(null,y);
} else
{return and__3546__auto____163427;
}
} else
{return and__3546__auto____163426;
}
} else
{return and__3546__auto____163425;
}
} else
{return and__3546__auto____163424;
}
} else
{return and__3546__auto____163423;
}
})());
});
var ep3__163468 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____163428 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____163428))
{var and__3546__auto____163429 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____163429))
{var and__3546__auto____163430 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____163430))
{var and__3546__auto____163431 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____163431))
{var and__3546__auto____163432 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____163432))
{var and__3546__auto____163433 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____163433))
{var and__3546__auto____163434 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____163434))
{var and__3546__auto____163435 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____163435))
{return p3.call(null,z);
} else
{return and__3546__auto____163435;
}
} else
{return and__3546__auto____163434;
}
} else
{return and__3546__auto____163433;
}
} else
{return and__3546__auto____163432;
}
} else
{return and__3546__auto____163431;
}
} else
{return and__3546__auto____163430;
}
} else
{return and__3546__auto____163429;
}
} else
{return and__3546__auto____163428;
}
})());
});
var ep3__163469 = (function() { 
var G__163471__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____163436 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____163436))
{return cljs.core.every_QMARK_.call(null,(function (p1__163391_SHARP_){
var and__3546__auto____163437 = p1.call(null,p1__163391_SHARP_);

if(cljs.core.truth_(and__3546__auto____163437))
{var and__3546__auto____163438 = p2.call(null,p1__163391_SHARP_);

if(cljs.core.truth_(and__3546__auto____163438))
{return p3.call(null,p1__163391_SHARP_);
} else
{return and__3546__auto____163438;
}
} else
{return and__3546__auto____163437;
}
}),args);
} else
{return and__3546__auto____163436;
}
})());
};
var G__163471 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163471__delegate.call(this, x, y, z, args);
};
G__163471.cljs$lang$maxFixedArity = 3;
G__163471.cljs$lang$applyTo = (function (arglist__163472){
var x = cljs.core.first(arglist__163472);
var y = cljs.core.first(cljs.core.next(arglist__163472));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163472)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163472)));
return G__163471__delegate.call(this, x, y, z, args);
});
return G__163471;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__163465.call(this);
case  1 :
return ep3__163466.call(this,x);
case  2 :
return ep3__163467.call(this,x,y);
case  3 :
return ep3__163468.call(this,x,y,z);
default:
return ep3__163469.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__163469.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__163447 = (function() { 
var G__163473__delegate = function (p1,p2,p3,ps){
var ps__163439 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__163474 = (function (){
return true;
});
var epn__163475 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__163392_SHARP_){
return p1__163392_SHARP_.call(null,x);
}),ps__163439);
});
var epn__163476 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__163393_SHARP_){
var and__3546__auto____163440 = p1__163393_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____163440))
{return p1__163393_SHARP_.call(null,y);
} else
{return and__3546__auto____163440;
}
}),ps__163439);
});
var epn__163477 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__163394_SHARP_){
var and__3546__auto____163441 = p1__163394_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____163441))
{var and__3546__auto____163442 = p1__163394_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____163442))
{return p1__163394_SHARP_.call(null,z);
} else
{return and__3546__auto____163442;
}
} else
{return and__3546__auto____163441;
}
}),ps__163439);
});
var epn__163478 = (function() { 
var G__163480__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____163443 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____163443))
{return cljs.core.every_QMARK_.call(null,(function (p1__163395_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__163395_SHARP_,args);
}),ps__163439);
} else
{return and__3546__auto____163443;
}
})());
};
var G__163480 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163480__delegate.call(this, x, y, z, args);
};
G__163480.cljs$lang$maxFixedArity = 3;
G__163480.cljs$lang$applyTo = (function (arglist__163481){
var x = cljs.core.first(arglist__163481);
var y = cljs.core.first(cljs.core.next(arglist__163481));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163481)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163481)));
return G__163480__delegate.call(this, x, y, z, args);
});
return G__163480;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__163474.call(this);
case  1 :
return epn__163475.call(this,x);
case  2 :
return epn__163476.call(this,x,y);
case  3 :
return epn__163477.call(this,x,y,z);
default:
return epn__163478.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__163478.cljs$lang$applyTo;
return epn;
})()
};
var G__163473 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163473__delegate.call(this, p1, p2, p3, ps);
};
G__163473.cljs$lang$maxFixedArity = 3;
G__163473.cljs$lang$applyTo = (function (arglist__163482){
var p1 = cljs.core.first(arglist__163482);
var p2 = cljs.core.first(cljs.core.next(arglist__163482));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163482)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163482)));
return G__163473__delegate.call(this, p1, p2, p3, ps);
});
return G__163473;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__163444.call(this,p1);
case  2 :
return every_pred__163445.call(this,p1,p2);
case  3 :
return every_pred__163446.call(this,p1,p2,p3);
default:
return every_pred__163447.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__163447.cljs$lang$applyTo;
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
var some_fn__163522 = (function (p){
return (function() {
var sp1 = null;
var sp1__163527 = (function (){
return null;
});
var sp1__163528 = (function (x){
return p.call(null,x);
});
var sp1__163529 = (function (x,y){
var or__3548__auto____163484 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____163484))
{return or__3548__auto____163484;
} else
{return p.call(null,y);
}
});
var sp1__163530 = (function (x,y,z){
var or__3548__auto____163485 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____163485))
{return or__3548__auto____163485;
} else
{var or__3548__auto____163486 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____163486))
{return or__3548__auto____163486;
} else
{return p.call(null,z);
}
}
});
var sp1__163531 = (function() { 
var G__163533__delegate = function (x,y,z,args){
var or__3548__auto____163487 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____163487))
{return or__3548__auto____163487;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__163533 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163533__delegate.call(this, x, y, z, args);
};
G__163533.cljs$lang$maxFixedArity = 3;
G__163533.cljs$lang$applyTo = (function (arglist__163534){
var x = cljs.core.first(arglist__163534);
var y = cljs.core.first(cljs.core.next(arglist__163534));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163534)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163534)));
return G__163533__delegate.call(this, x, y, z, args);
});
return G__163533;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__163527.call(this);
case  1 :
return sp1__163528.call(this,x);
case  2 :
return sp1__163529.call(this,x,y);
case  3 :
return sp1__163530.call(this,x,y,z);
default:
return sp1__163531.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__163531.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__163523 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__163535 = (function (){
return null;
});
var sp2__163536 = (function (x){
var or__3548__auto____163488 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____163488))
{return or__3548__auto____163488;
} else
{return p2.call(null,x);
}
});
var sp2__163537 = (function (x,y){
var or__3548__auto____163489 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____163489))
{return or__3548__auto____163489;
} else
{var or__3548__auto____163490 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____163490))
{return or__3548__auto____163490;
} else
{var or__3548__auto____163491 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____163491))
{return or__3548__auto____163491;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__163538 = (function (x,y,z){
var or__3548__auto____163492 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____163492))
{return or__3548__auto____163492;
} else
{var or__3548__auto____163493 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____163493))
{return or__3548__auto____163493;
} else
{var or__3548__auto____163494 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____163494))
{return or__3548__auto____163494;
} else
{var or__3548__auto____163495 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____163495))
{return or__3548__auto____163495;
} else
{var or__3548__auto____163496 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____163496))
{return or__3548__auto____163496;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__163539 = (function() { 
var G__163541__delegate = function (x,y,z,args){
var or__3548__auto____163497 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____163497))
{return or__3548__auto____163497;
} else
{return cljs.core.some.call(null,(function (p1__163400_SHARP_){
var or__3548__auto____163498 = p1.call(null,p1__163400_SHARP_);

if(cljs.core.truth_(or__3548__auto____163498))
{return or__3548__auto____163498;
} else
{return p2.call(null,p1__163400_SHARP_);
}
}),args);
}
};
var G__163541 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163541__delegate.call(this, x, y, z, args);
};
G__163541.cljs$lang$maxFixedArity = 3;
G__163541.cljs$lang$applyTo = (function (arglist__163542){
var x = cljs.core.first(arglist__163542);
var y = cljs.core.first(cljs.core.next(arglist__163542));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163542)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163542)));
return G__163541__delegate.call(this, x, y, z, args);
});
return G__163541;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__163535.call(this);
case  1 :
return sp2__163536.call(this,x);
case  2 :
return sp2__163537.call(this,x,y);
case  3 :
return sp2__163538.call(this,x,y,z);
default:
return sp2__163539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__163539.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__163524 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__163543 = (function (){
return null;
});
var sp3__163544 = (function (x){
var or__3548__auto____163499 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____163499))
{return or__3548__auto____163499;
} else
{var or__3548__auto____163500 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____163500))
{return or__3548__auto____163500;
} else
{return p3.call(null,x);
}
}
});
var sp3__163545 = (function (x,y){
var or__3548__auto____163501 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____163501))
{return or__3548__auto____163501;
} else
{var or__3548__auto____163502 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____163502))
{return or__3548__auto____163502;
} else
{var or__3548__auto____163503 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____163503))
{return or__3548__auto____163503;
} else
{var or__3548__auto____163504 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____163504))
{return or__3548__auto____163504;
} else
{var or__3548__auto____163505 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____163505))
{return or__3548__auto____163505;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__163546 = (function (x,y,z){
var or__3548__auto____163506 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____163506))
{return or__3548__auto____163506;
} else
{var or__3548__auto____163507 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____163507))
{return or__3548__auto____163507;
} else
{var or__3548__auto____163508 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____163508))
{return or__3548__auto____163508;
} else
{var or__3548__auto____163509 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____163509))
{return or__3548__auto____163509;
} else
{var or__3548__auto____163510 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____163510))
{return or__3548__auto____163510;
} else
{var or__3548__auto____163511 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____163511))
{return or__3548__auto____163511;
} else
{var or__3548__auto____163512 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____163512))
{return or__3548__auto____163512;
} else
{var or__3548__auto____163513 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____163513))
{return or__3548__auto____163513;
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
var sp3__163547 = (function() { 
var G__163549__delegate = function (x,y,z,args){
var or__3548__auto____163514 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____163514))
{return or__3548__auto____163514;
} else
{return cljs.core.some.call(null,(function (p1__163401_SHARP_){
var or__3548__auto____163515 = p1.call(null,p1__163401_SHARP_);

if(cljs.core.truth_(or__3548__auto____163515))
{return or__3548__auto____163515;
} else
{var or__3548__auto____163516 = p2.call(null,p1__163401_SHARP_);

if(cljs.core.truth_(or__3548__auto____163516))
{return or__3548__auto____163516;
} else
{return p3.call(null,p1__163401_SHARP_);
}
}
}),args);
}
};
var G__163549 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163549__delegate.call(this, x, y, z, args);
};
G__163549.cljs$lang$maxFixedArity = 3;
G__163549.cljs$lang$applyTo = (function (arglist__163550){
var x = cljs.core.first(arglist__163550);
var y = cljs.core.first(cljs.core.next(arglist__163550));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163550)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163550)));
return G__163549__delegate.call(this, x, y, z, args);
});
return G__163549;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__163543.call(this);
case  1 :
return sp3__163544.call(this,x);
case  2 :
return sp3__163545.call(this,x,y);
case  3 :
return sp3__163546.call(this,x,y,z);
default:
return sp3__163547.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__163547.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__163525 = (function() { 
var G__163551__delegate = function (p1,p2,p3,ps){
var ps__163517 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__163552 = (function (){
return null;
});
var spn__163553 = (function (x){
return cljs.core.some.call(null,(function (p1__163402_SHARP_){
return p1__163402_SHARP_.call(null,x);
}),ps__163517);
});
var spn__163554 = (function (x,y){
return cljs.core.some.call(null,(function (p1__163403_SHARP_){
var or__3548__auto____163518 = p1__163403_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____163518))
{return or__3548__auto____163518;
} else
{return p1__163403_SHARP_.call(null,y);
}
}),ps__163517);
});
var spn__163555 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__163404_SHARP_){
var or__3548__auto____163519 = p1__163404_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____163519))
{return or__3548__auto____163519;
} else
{var or__3548__auto____163520 = p1__163404_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____163520))
{return or__3548__auto____163520;
} else
{return p1__163404_SHARP_.call(null,z);
}
}
}),ps__163517);
});
var spn__163556 = (function() { 
var G__163558__delegate = function (x,y,z,args){
var or__3548__auto____163521 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____163521))
{return or__3548__auto____163521;
} else
{return cljs.core.some.call(null,(function (p1__163405_SHARP_){
return cljs.core.some.call(null,p1__163405_SHARP_,args);
}),ps__163517);
}
};
var G__163558 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163558__delegate.call(this, x, y, z, args);
};
G__163558.cljs$lang$maxFixedArity = 3;
G__163558.cljs$lang$applyTo = (function (arglist__163559){
var x = cljs.core.first(arglist__163559);
var y = cljs.core.first(cljs.core.next(arglist__163559));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163559)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163559)));
return G__163558__delegate.call(this, x, y, z, args);
});
return G__163558;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__163552.call(this);
case  1 :
return spn__163553.call(this,x);
case  2 :
return spn__163554.call(this,x,y);
case  3 :
return spn__163555.call(this,x,y,z);
default:
return spn__163556.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__163556.cljs$lang$applyTo;
return spn;
})()
};
var G__163551 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__163551__delegate.call(this, p1, p2, p3, ps);
};
G__163551.cljs$lang$maxFixedArity = 3;
G__163551.cljs$lang$applyTo = (function (arglist__163560){
var p1 = cljs.core.first(arglist__163560);
var p2 = cljs.core.first(cljs.core.next(arglist__163560));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163560)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163560)));
return G__163551__delegate.call(this, p1, p2, p3, ps);
});
return G__163551;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__163522.call(this,p1);
case  2 :
return some_fn__163523.call(this,p1,p2);
case  3 :
return some_fn__163524.call(this,p1,p2,p3);
default:
return some_fn__163525.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__163525.cljs$lang$applyTo;
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
var map__163573 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____163561 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____163561))
{var s__163562 = temp__3698__auto____163561;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__163562)),map.call(null,f,cljs.core.rest.call(null,s__163562)));
} else
{return null;
}
})));
});
var map__163574 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__163563 = cljs.core.seq.call(null,c1);
var s2__163564 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____163565 = s1__163563;

if(cljs.core.truth_(and__3546__auto____163565))
{return s2__163564;
} else
{return and__3546__auto____163565;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__163563),cljs.core.first.call(null,s2__163564)),map.call(null,f,cljs.core.rest.call(null,s1__163563),cljs.core.rest.call(null,s2__163564)));
} else
{return null;
}
})));
});
var map__163575 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__163566 = cljs.core.seq.call(null,c1);
var s2__163567 = cljs.core.seq.call(null,c2);
var s3__163568 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____163569 = s1__163566;

if(cljs.core.truth_(and__3546__auto____163569))
{var and__3546__auto____163570 = s2__163567;

if(cljs.core.truth_(and__3546__auto____163570))
{return s3__163568;
} else
{return and__3546__auto____163570;
}
} else
{return and__3546__auto____163569;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__163566),cljs.core.first.call(null,s2__163567),cljs.core.first.call(null,s3__163568)),map.call(null,f,cljs.core.rest.call(null,s1__163566),cljs.core.rest.call(null,s2__163567),cljs.core.rest.call(null,s3__163568)));
} else
{return null;
}
})));
});
var map__163576 = (function() { 
var G__163578__delegate = function (f,c1,c2,c3,colls){
var step__163572 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__163571 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__163571)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__163571),step.call(null,map.call(null,cljs.core.rest,ss__163571)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__163483_SHARP_){
return cljs.core.apply.call(null,f,p1__163483_SHARP_);
}),step__163572.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__163578 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__163578__delegate.call(this, f, c1, c2, c3, colls);
};
G__163578.cljs$lang$maxFixedArity = 4;
G__163578.cljs$lang$applyTo = (function (arglist__163579){
var f = cljs.core.first(arglist__163579);
var c1 = cljs.core.first(cljs.core.next(arglist__163579));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163579)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__163579))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__163579))));
return G__163578__delegate.call(this, f, c1, c2, c3, colls);
});
return G__163578;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__163573.call(this,f,c1);
case  3 :
return map__163574.call(this,f,c1,c2);
case  4 :
return map__163575.call(this,f,c1,c2,c3);
default:
return map__163576.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__163576.cljs$lang$applyTo;
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
{var temp__3698__auto____163580 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____163580))
{var s__163581 = temp__3698__auto____163580;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__163581),take.call(null,(n - 1),cljs.core.rest.call(null,s__163581)));
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
var step__163584 = (function (n,coll){
while(true){
var s__163582 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____163583 = (n > 0);

if(cljs.core.truth_(and__3546__auto____163583))
{return s__163582;
} else
{return and__3546__auto____163583;
}
})()))
{{
var G__163585 = (n - 1);
var G__163586 = cljs.core.rest.call(null,s__163582);
n = G__163585;
coll = G__163586;
continue;
}
} else
{return s__163582;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__163584.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__163587 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__163588 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__163587.call(this,n);
case  2 :
return drop_last__163588.call(this,n,s);
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
var s__163590 = cljs.core.seq.call(null,coll);
var lead__163591 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__163591))
{{
var G__163592 = cljs.core.next.call(null,s__163590);
var G__163593 = cljs.core.next.call(null,lead__163591);
s__163590 = G__163592;
lead__163591 = G__163593;
continue;
}
} else
{return s__163590;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__163596 = (function (pred,coll){
while(true){
var s__163594 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____163595 = s__163594;

if(cljs.core.truth_(and__3546__auto____163595))
{return pred.call(null,cljs.core.first.call(null,s__163594));
} else
{return and__3546__auto____163595;
}
})()))
{{
var G__163597 = pred;
var G__163598 = cljs.core.rest.call(null,s__163594);
pred = G__163597;
coll = G__163598;
continue;
}
} else
{return s__163594;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__163596.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____163599 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____163599))
{var s__163600 = temp__3698__auto____163599;

return cljs.core.concat.call(null,s__163600,cycle.call(null,s__163600));
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
var repeat__163601 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__163602 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__163601.call(this,n);
case  2 :
return repeat__163602.call(this,n,x);
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
var repeatedly__163604 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__163605 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__163604.call(this,n);
case  2 :
return repeatedly__163605.call(this,n,f);
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
var interleave__163611 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__163607 = cljs.core.seq.call(null,c1);
var s2__163608 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____163609 = s1__163607;

if(cljs.core.truth_(and__3546__auto____163609))
{return s2__163608;
} else
{return and__3546__auto____163609;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__163607),cljs.core.cons.call(null,cljs.core.first.call(null,s2__163608),interleave.call(null,cljs.core.rest.call(null,s1__163607),cljs.core.rest.call(null,s2__163608))));
} else
{return null;
}
})));
});
var interleave__163612 = (function() { 
var G__163614__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__163610 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__163610)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__163610),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__163610)));
} else
{return null;
}
})));
};
var G__163614 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163614__delegate.call(this, c1, c2, colls);
};
G__163614.cljs$lang$maxFixedArity = 2;
G__163614.cljs$lang$applyTo = (function (arglist__163615){
var c1 = cljs.core.first(arglist__163615);
var c2 = cljs.core.first(cljs.core.next(arglist__163615));
var colls = cljs.core.rest(cljs.core.next(arglist__163615));
return G__163614__delegate.call(this, c1, c2, colls);
});
return G__163614;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__163611.call(this,c1,c2);
default:
return interleave__163612.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__163612.cljs$lang$applyTo;
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
var cat__163618 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____163616 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____163616))
{var coll__163617 = temp__3695__auto____163616;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__163617),cat.call(null,cljs.core.rest.call(null,coll__163617),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__163618.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__163619 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__163620 = (function() { 
var G__163622__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__163622 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__163622__delegate.call(this, f, coll, colls);
};
G__163622.cljs$lang$maxFixedArity = 2;
G__163622.cljs$lang$applyTo = (function (arglist__163623){
var f = cljs.core.first(arglist__163623);
var coll = cljs.core.first(cljs.core.next(arglist__163623));
var colls = cljs.core.rest(cljs.core.next(arglist__163623));
return G__163622__delegate.call(this, f, coll, colls);
});
return G__163622;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__163619.call(this,f,coll);
default:
return mapcat__163620.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__163620.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____163624 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____163624))
{var s__163625 = temp__3698__auto____163624;

var f__163626 = cljs.core.first.call(null,s__163625);
var r__163627 = cljs.core.rest.call(null,s__163625);

if(cljs.core.truth_(pred.call(null,f__163626)))
{return cljs.core.cons.call(null,f__163626,filter.call(null,pred,r__163627));
} else
{return filter.call(null,pred,r__163627);
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
var walk__163629 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__163629.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__163628_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__163628_SHARP_));
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
var partition__163636 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__163637 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____163630 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____163630))
{var s__163631 = temp__3698__auto____163630;

var p__163632 = cljs.core.take.call(null,n,s__163631);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__163632))))
{return cljs.core.cons.call(null,p__163632,partition.call(null,n,step,cljs.core.drop.call(null,step,s__163631)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__163638 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____163633 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____163633))
{var s__163634 = temp__3698__auto____163633;

var p__163635 = cljs.core.take.call(null,n,s__163634);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__163635))))
{return cljs.core.cons.call(null,p__163635,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__163634)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__163635,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__163636.call(this,n,step);
case  3 :
return partition__163637.call(this,n,step,pad);
case  4 :
return partition__163638.call(this,n,step,pad,coll);
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
var get_in__163644 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__163645 = (function (m,ks,not_found){
var sentinel__163640 = cljs.core.lookup_sentinel;
var m__163641 = m;
var ks__163642 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__163642))
{var m__163643 = cljs.core.get.call(null,m__163641,cljs.core.first.call(null,ks__163642),sentinel__163640);

if(cljs.core.truth_((sentinel__163640 === m__163643)))
{return not_found;
} else
{{
var G__163647 = sentinel__163640;
var G__163648 = m__163643;
var G__163649 = cljs.core.next.call(null,ks__163642);
sentinel__163640 = G__163647;
m__163641 = G__163648;
ks__163642 = G__163649;
continue;
}
}
} else
{return m__163641;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__163644.call(this,m,ks);
case  3 :
return get_in__163645.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__163650,v){
var vec__163651__163652 = p__163650;
var k__163653 = cljs.core.nth.call(null,vec__163651__163652,0,null);
var ks__163654 = cljs.core.nthnext.call(null,vec__163651__163652,1);

if(cljs.core.truth_(ks__163654))
{return cljs.core.assoc.call(null,m,k__163653,assoc_in.call(null,cljs.core.get.call(null,m,k__163653),ks__163654,v));
} else
{return cljs.core.assoc.call(null,m,k__163653,v);
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
var update_in__delegate = function (m,p__163655,f,args){
var vec__163656__163657 = p__163655;
var k__163658 = cljs.core.nth.call(null,vec__163656__163657,0,null);
var ks__163659 = cljs.core.nthnext.call(null,vec__163656__163657,1);

if(cljs.core.truth_(ks__163659))
{return cljs.core.assoc.call(null,m,k__163658,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__163658),ks__163659,f,args));
} else
{return cljs.core.assoc.call(null,m,k__163658,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__163658),args));
}
};
var update_in = function (m,p__163655,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__163655, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__163660){
var m = cljs.core.first(arglist__163660);
var p__163655 = cljs.core.first(cljs.core.next(arglist__163660));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__163660)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__163660)));
return update_in__delegate.call(this, m, p__163655, f, args);
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
var this__163661 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__163694 = null;
var G__163694__163695 = (function (coll,k){
var this__163662 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__163694__163696 = (function (coll,k,not_found){
var this__163663 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__163694 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__163694__163695.call(this,coll,k);
case  3 :
return G__163694__163696.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163694;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__163664 = this;
var new_array__163665 = cljs.core.aclone.call(null,this__163664.array);

(new_array__163665[k] = v);
return (new cljs.core.Vector(this__163664.meta,new_array__163665));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__163698 = null;
var G__163698__163699 = (function (tsym163666,k){
var this__163668 = this;
var tsym163666__163669 = this;

var coll__163670 = tsym163666__163669;

return cljs.core._lookup.call(null,coll__163670,k);
});
var G__163698__163700 = (function (tsym163667,k,not_found){
var this__163671 = this;
var tsym163667__163672 = this;

var coll__163673 = tsym163667__163672;

return cljs.core._lookup.call(null,coll__163673,k,not_found);
});
G__163698 = function(tsym163667,k,not_found){
switch(arguments.length){
case  2 :
return G__163698__163699.call(this,tsym163667,k);
case  3 :
return G__163698__163700.call(this,tsym163667,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163698;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__163674 = this;
var new_array__163675 = cljs.core.aclone.call(null,this__163674.array);

new_array__163675.push(o);
return (new cljs.core.Vector(this__163674.meta,new_array__163675));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__163702 = null;
var G__163702__163703 = (function (v,f){
var this__163676 = this;
return cljs.core.ci_reduce.call(null,this__163676.array,f);
});
var G__163702__163704 = (function (v,f,start){
var this__163677 = this;
return cljs.core.ci_reduce.call(null,this__163677.array,f,start);
});
G__163702 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__163702__163703.call(this,v,f);
case  3 :
return G__163702__163704.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163702;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__163678 = this;
if(cljs.core.truth_((this__163678.array.length > 0)))
{var vector_seq__163679 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__163678.array.length)))
{return cljs.core.cons.call(null,(this__163678.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__163679.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__163680 = this;
return this__163680.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__163681 = this;
var count__163682 = this__163681.array.length;

if(cljs.core.truth_((count__163682 > 0)))
{return (this__163681.array[(count__163682 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__163683 = this;
if(cljs.core.truth_((this__163683.array.length > 0)))
{var new_array__163684 = cljs.core.aclone.call(null,this__163683.array);

new_array__163684.pop();
return (new cljs.core.Vector(this__163683.meta,new_array__163684));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__163685 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__163686 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__163687 = this;
return (new cljs.core.Vector(meta,this__163687.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__163688 = this;
return this__163688.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__163706 = null;
var G__163706__163707 = (function (coll,n){
var this__163689 = this;
if(cljs.core.truth_((function (){var and__3546__auto____163690 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____163690))
{return (n < this__163689.array.length);
} else
{return and__3546__auto____163690;
}
})()))
{return (this__163689.array[n]);
} else
{return null;
}
});
var G__163706__163708 = (function (coll,n,not_found){
var this__163691 = this;
if(cljs.core.truth_((function (){var and__3546__auto____163692 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____163692))
{return (n < this__163691.array.length);
} else
{return and__3546__auto____163692;
}
})()))
{return (this__163691.array[n]);
} else
{return not_found;
}
});
G__163706 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__163706__163707.call(this,coll,n);
case  3 :
return G__163706__163708.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163706;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__163693 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__163693.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__163710 = pv.cnt;

if(cljs.core.truth_((cnt__163710 < 32)))
{return 0;
} else
{return (((cnt__163710 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__163711 = level;
var ret__163712 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__163711)))
{return ret__163712;
} else
{var embed__163713 = ret__163712;
var r__163714 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___163715 = (r__163714[0] = embed__163713);

{
var G__163716 = (ll__163711 - 5);
var G__163717 = r__163714;
ll__163711 = G__163716;
ret__163712 = G__163717;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__163718 = cljs.core.aclone.call(null,parent);
var subidx__163719 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__163718[subidx__163719] = tailnode);
return ret__163718;
} else
{var temp__3695__auto____163720 = (parent[subidx__163719]);

if(cljs.core.truth_(temp__3695__auto____163720))
{var child__163721 = temp__3695__auto____163720;

var node_to_insert__163722 = push_tail.call(null,pv,(level - 5),child__163721,tailnode);
var ___163723 = (ret__163718[subidx__163719] = node_to_insert__163722);

return ret__163718;
} else
{var node_to_insert__163724 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___163725 = (ret__163718[subidx__163719] = node_to_insert__163724);

return ret__163718;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____163726 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____163726))
{return (i < pv.cnt);
} else
{return and__3546__auto____163726;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__163727 = pv.root;
var level__163728 = pv.shift;

while(true){
if(cljs.core.truth_((level__163728 > 0)))
{{
var G__163729 = (node__163727[((i >> level__163728) & 31)]);
var G__163730 = (level__163728 - 5);
node__163727 = G__163729;
level__163728 = G__163730;
continue;
}
} else
{return node__163727;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__163731 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__163731[(i & 31)] = val);
return ret__163731;
} else
{var subidx__163732 = ((i >> level) & 31);
var ___163733 = (ret__163731[subidx__163732] = do_assoc.call(null,pv,(level - 5),(node[subidx__163732]),i,val));

return ret__163731;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__163734 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__163735 = pop_tail.call(null,pv,(level - 5),(node[subidx__163734]));

if(cljs.core.truth_((function (){var and__3546__auto____163736 = (new_child__163735 === null);

if(cljs.core.truth_(and__3546__auto____163736))
{return (subidx__163734 === 0);
} else
{return and__3546__auto____163736;
}
})()))
{return null;
} else
{var ret__163737 = cljs.core.aclone.call(null,node);
var ___163738 = (ret__163737[subidx__163734] = new_child__163735);

return ret__163737;
}
} else
{if(cljs.core.truth_((subidx__163734 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__163739 = cljs.core.aclone.call(null,node);
var ___163740 = (ret__163739[subidx__163734] = null);

return ret__163739;
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
var this__163741 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__163781 = null;
var G__163781__163782 = (function (coll,k){
var this__163742 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__163781__163783 = (function (coll,k,not_found){
var this__163743 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__163781 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__163781__163782.call(this,coll,k);
case  3 :
return G__163781__163783.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163781;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__163744 = this;
if(cljs.core.truth_((function (){var and__3546__auto____163745 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____163745))
{return (k < this__163744.cnt);
} else
{return and__3546__auto____163745;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__163746 = cljs.core.aclone.call(null,this__163744.tail);

(new_tail__163746[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__163744.meta,this__163744.cnt,this__163744.shift,this__163744.root,new_tail__163746));
} else
{return (new cljs.core.PersistentVector(this__163744.meta,this__163744.cnt,this__163744.shift,cljs.core.do_assoc.call(null,coll,this__163744.shift,this__163744.root,k,v),this__163744.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__163744.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__163744.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__163785 = null;
var G__163785__163786 = (function (tsym163747,k){
var this__163749 = this;
var tsym163747__163750 = this;

var coll__163751 = tsym163747__163750;

return cljs.core._lookup.call(null,coll__163751,k);
});
var G__163785__163787 = (function (tsym163748,k,not_found){
var this__163752 = this;
var tsym163748__163753 = this;

var coll__163754 = tsym163748__163753;

return cljs.core._lookup.call(null,coll__163754,k,not_found);
});
G__163785 = function(tsym163748,k,not_found){
switch(arguments.length){
case  2 :
return G__163785__163786.call(this,tsym163748,k);
case  3 :
return G__163785__163787.call(this,tsym163748,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163785;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__163755 = this;
if(cljs.core.truth_(((this__163755.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__163756 = cljs.core.aclone.call(null,this__163755.tail);

new_tail__163756.push(o);
return (new cljs.core.PersistentVector(this__163755.meta,(this__163755.cnt + 1),this__163755.shift,this__163755.root,new_tail__163756));
} else
{var root_overflow_QMARK___163757 = ((this__163755.cnt >> 5) > (1 << this__163755.shift));
var new_shift__163758 = (cljs.core.truth_(root_overflow_QMARK___163757)?(this__163755.shift + 5):this__163755.shift);
var new_root__163760 = (cljs.core.truth_(root_overflow_QMARK___163757)?(function (){var n_r__163759 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__163759[0] = this__163755.root);
(n_r__163759[1] = cljs.core.new_path.call(null,this__163755.shift,this__163755.tail));
return n_r__163759;
})():cljs.core.push_tail.call(null,coll,this__163755.shift,this__163755.root,this__163755.tail));

return (new cljs.core.PersistentVector(this__163755.meta,(this__163755.cnt + 1),new_shift__163758,new_root__163760,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__163789 = null;
var G__163789__163790 = (function (v,f){
var this__163761 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__163789__163791 = (function (v,f,start){
var this__163762 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__163789 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__163789__163790.call(this,v,f);
case  3 :
return G__163789__163791.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163789;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__163763 = this;
if(cljs.core.truth_((this__163763.cnt > 0)))
{var vector_seq__163764 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__163763.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__163764.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__163765 = this;
return this__163765.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__163766 = this;
if(cljs.core.truth_((this__163766.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__163766.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__163767 = this;
if(cljs.core.truth_((this__163767.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__163767.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__163767.meta);
} else
{if(cljs.core.truth_((1 < (this__163767.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__163767.meta,(this__163767.cnt - 1),this__163767.shift,this__163767.root,cljs.core.aclone.call(null,this__163767.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__163768 = cljs.core.array_for.call(null,coll,(this__163767.cnt - 2));
var nr__163769 = cljs.core.pop_tail.call(null,this__163767.shift,this__163767.root);
var new_root__163770 = (cljs.core.truth_((nr__163769 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__163769);
var cnt_1__163771 = (this__163767.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____163772 = (5 < this__163767.shift);

if(cljs.core.truth_(and__3546__auto____163772))
{return ((new_root__163770[1]) === null);
} else
{return and__3546__auto____163772;
}
})()))
{return (new cljs.core.PersistentVector(this__163767.meta,cnt_1__163771,(this__163767.shift - 5),(new_root__163770[0]),new_tail__163768));
} else
{return (new cljs.core.PersistentVector(this__163767.meta,cnt_1__163771,this__163767.shift,new_root__163770,new_tail__163768));
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
var this__163773 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__163774 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__163775 = this;
return (new cljs.core.PersistentVector(meta,this__163775.cnt,this__163775.shift,this__163775.root,this__163775.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__163776 = this;
return this__163776.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__163793 = null;
var G__163793__163794 = (function (coll,n){
var this__163777 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__163793__163795 = (function (coll,n,not_found){
var this__163778 = this;
if(cljs.core.truth_((function (){var and__3546__auto____163779 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____163779))
{return (n < this__163778.cnt);
} else
{return and__3546__auto____163779;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__163793 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__163793__163794.call(this,coll,n);
case  3 :
return G__163793__163795.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163793;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__163780 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__163780.meta);
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
vector.cljs$lang$applyTo = (function (arglist__163797){
var args = cljs.core.seq( arglist__163797 );;
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
var this__163798 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__163826 = null;
var G__163826__163827 = (function (coll,k){
var this__163799 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__163826__163828 = (function (coll,k,not_found){
var this__163800 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__163826 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__163826__163827.call(this,coll,k);
case  3 :
return G__163826__163828.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163826;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__163801 = this;
var v_pos__163802 = (this__163801.start + key);

return (new cljs.core.Subvec(this__163801.meta,cljs.core._assoc.call(null,this__163801.v,v_pos__163802,val),this__163801.start,((this__163801.end > (v_pos__163802 + 1)) ? this__163801.end : (v_pos__163802 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__163830 = null;
var G__163830__163831 = (function (tsym163803,k){
var this__163805 = this;
var tsym163803__163806 = this;

var coll__163807 = tsym163803__163806;

return cljs.core._lookup.call(null,coll__163807,k);
});
var G__163830__163832 = (function (tsym163804,k,not_found){
var this__163808 = this;
var tsym163804__163809 = this;

var coll__163810 = tsym163804__163809;

return cljs.core._lookup.call(null,coll__163810,k,not_found);
});
G__163830 = function(tsym163804,k,not_found){
switch(arguments.length){
case  2 :
return G__163830__163831.call(this,tsym163804,k);
case  3 :
return G__163830__163832.call(this,tsym163804,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163830;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__163811 = this;
return (new cljs.core.Subvec(this__163811.meta,cljs.core._assoc_n.call(null,this__163811.v,this__163811.end,o),this__163811.start,(this__163811.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__163834 = null;
var G__163834__163835 = (function (coll,f){
var this__163812 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__163834__163836 = (function (coll,f,start){
var this__163813 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__163834 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__163834__163835.call(this,coll,f);
case  3 :
return G__163834__163836.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163834;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__163814 = this;
var subvec_seq__163815 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__163814.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__163814.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__163815.call(null,this__163814.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__163816 = this;
return (this__163816.end - this__163816.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__163817 = this;
return cljs.core._nth.call(null,this__163817.v,(this__163817.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__163818 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__163818.start,this__163818.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__163818.meta,this__163818.v,this__163818.start,(this__163818.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__163819 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__163820 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__163821 = this;
return (new cljs.core.Subvec(meta,this__163821.v,this__163821.start,this__163821.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__163822 = this;
return this__163822.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__163838 = null;
var G__163838__163839 = (function (coll,n){
var this__163823 = this;
return cljs.core._nth.call(null,this__163823.v,(this__163823.start + n));
});
var G__163838__163840 = (function (coll,n,not_found){
var this__163824 = this;
return cljs.core._nth.call(null,this__163824.v,(this__163824.start + n),not_found);
});
G__163838 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__163838__163839.call(this,coll,n);
case  3 :
return G__163838__163840.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163838;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__163825 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__163825.meta);
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
var subvec__163842 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__163843 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__163842.call(this,v,start);
case  3 :
return subvec__163843.call(this,v,start,end);
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
var this__163845 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__163846 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__163847 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__163848 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__163848.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__163849 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__163850 = this;
return cljs.core._first.call(null,this__163850.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__163851 = this;
var temp__3695__auto____163852 = cljs.core.next.call(null,this__163851.front);

if(cljs.core.truth_(temp__3695__auto____163852))
{var f1__163853 = temp__3695__auto____163852;

return (new cljs.core.PersistentQueueSeq(this__163851.meta,f1__163853,this__163851.rear));
} else
{if(cljs.core.truth_((this__163851.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__163851.meta,this__163851.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__163854 = this;
return this__163854.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__163855 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__163855.front,this__163855.rear));
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
var this__163856 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__163857 = this;
if(cljs.core.truth_(this__163857.front))
{return (new cljs.core.PersistentQueue(this__163857.meta,(this__163857.count + 1),this__163857.front,cljs.core.conj.call(null,(function (){var or__3548__auto____163858 = this__163857.rear;

if(cljs.core.truth_(or__3548__auto____163858))
{return or__3548__auto____163858;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__163857.meta,(this__163857.count + 1),cljs.core.conj.call(null,this__163857.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__163859 = this;
var rear__163860 = cljs.core.seq.call(null,this__163859.rear);

if(cljs.core.truth_((function (){var or__3548__auto____163861 = this__163859.front;

if(cljs.core.truth_(or__3548__auto____163861))
{return or__3548__auto____163861;
} else
{return rear__163860;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__163859.front,cljs.core.seq.call(null,rear__163860)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__163862 = this;
return this__163862.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__163863 = this;
return cljs.core._first.call(null,this__163863.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__163864 = this;
if(cljs.core.truth_(this__163864.front))
{var temp__3695__auto____163865 = cljs.core.next.call(null,this__163864.front);

if(cljs.core.truth_(temp__3695__auto____163865))
{var f1__163866 = temp__3695__auto____163865;

return (new cljs.core.PersistentQueue(this__163864.meta,(this__163864.count - 1),f1__163866,this__163864.rear));
} else
{return (new cljs.core.PersistentQueue(this__163864.meta,(this__163864.count - 1),cljs.core.seq.call(null,this__163864.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__163867 = this;
return cljs.core.first.call(null,this__163867.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__163868 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__163869 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__163870 = this;
return (new cljs.core.PersistentQueue(meta,this__163870.count,this__163870.front,this__163870.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__163871 = this;
return this__163871.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__163872 = this;
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
var this__163873 = this;
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
var len__163874 = array.length;

var i__163875 = 0;

while(true){
if(cljs.core.truth_((i__163875 < len__163874)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__163875]))))
{return i__163875;
} else
{{
var G__163876 = (i__163875 + incr);
i__163875 = G__163876;
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
var obj_map_contains_key_QMARK___163878 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___163879 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____163877 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____163877))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____163877;
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
return obj_map_contains_key_QMARK___163878.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___163879.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__163882 = cljs.core.hash.call(null,a);
var b__163883 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__163882 < b__163883)))
{return -1;
} else
{if(cljs.core.truth_((a__163882 > b__163883)))
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
var this__163884 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__163911 = null;
var G__163911__163912 = (function (coll,k){
var this__163885 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__163911__163913 = (function (coll,k,not_found){
var this__163886 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__163886.strobj,(this__163886.strobj[k]),not_found);
});
G__163911 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__163911__163912.call(this,coll,k);
case  3 :
return G__163911__163913.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163911;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__163887 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__163888 = goog.object.clone.call(null,this__163887.strobj);
var overwrite_QMARK___163889 = new_strobj__163888.hasOwnProperty(k);

(new_strobj__163888[k] = v);
if(cljs.core.truth_(overwrite_QMARK___163889))
{return (new cljs.core.ObjMap(this__163887.meta,this__163887.keys,new_strobj__163888));
} else
{var new_keys__163890 = cljs.core.aclone.call(null,this__163887.keys);

new_keys__163890.push(k);
return (new cljs.core.ObjMap(this__163887.meta,new_keys__163890,new_strobj__163888));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__163887.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__163891 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__163891.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__163915 = null;
var G__163915__163916 = (function (tsym163892,k){
var this__163894 = this;
var tsym163892__163895 = this;

var coll__163896 = tsym163892__163895;

return cljs.core._lookup.call(null,coll__163896,k);
});
var G__163915__163917 = (function (tsym163893,k,not_found){
var this__163897 = this;
var tsym163893__163898 = this;

var coll__163899 = tsym163893__163898;

return cljs.core._lookup.call(null,coll__163899,k,not_found);
});
G__163915 = function(tsym163893,k,not_found){
switch(arguments.length){
case  2 :
return G__163915__163916.call(this,tsym163893,k);
case  3 :
return G__163915__163917.call(this,tsym163893,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163915;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__163900 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__163901 = this;
if(cljs.core.truth_((this__163901.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__163881_SHARP_){
return cljs.core.vector.call(null,p1__163881_SHARP_,(this__163901.strobj[p1__163881_SHARP_]));
}),this__163901.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__163902 = this;
return this__163902.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__163903 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__163904 = this;
return (new cljs.core.ObjMap(meta,this__163904.keys,this__163904.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__163905 = this;
return this__163905.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__163906 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__163906.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__163907 = this;
if(cljs.core.truth_((function (){var and__3546__auto____163908 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____163908))
{return this__163907.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____163908;
}
})()))
{var new_keys__163909 = cljs.core.aclone.call(null,this__163907.keys);
var new_strobj__163910 = goog.object.clone.call(null,this__163907.strobj);

new_keys__163909.splice(cljs.core.scan_array.call(null,1,k,new_keys__163909),1);
cljs.core.js_delete.call(null,new_strobj__163910,k);
return (new cljs.core.ObjMap(this__163907.meta,new_keys__163909,new_strobj__163910));
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
var this__163920 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__163958 = null;
var G__163958__163959 = (function (coll,k){
var this__163921 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__163958__163960 = (function (coll,k,not_found){
var this__163922 = this;
var bucket__163923 = (this__163922.hashobj[cljs.core.hash.call(null,k)]);
var i__163924 = (cljs.core.truth_(bucket__163923)?cljs.core.scan_array.call(null,2,k,bucket__163923):null);

if(cljs.core.truth_(i__163924))
{return (bucket__163923[(i__163924 + 1)]);
} else
{return not_found;
}
});
G__163958 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__163958__163959.call(this,coll,k);
case  3 :
return G__163958__163960.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163958;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__163925 = this;
var h__163926 = cljs.core.hash.call(null,k);
var bucket__163927 = (this__163925.hashobj[h__163926]);

if(cljs.core.truth_(bucket__163927))
{var new_bucket__163928 = cljs.core.aclone.call(null,bucket__163927);
var new_hashobj__163929 = goog.object.clone.call(null,this__163925.hashobj);

(new_hashobj__163929[h__163926] = new_bucket__163928);
var temp__3695__auto____163930 = cljs.core.scan_array.call(null,2,k,new_bucket__163928);

if(cljs.core.truth_(temp__3695__auto____163930))
{var i__163931 = temp__3695__auto____163930;

(new_bucket__163928[(i__163931 + 1)] = v);
return (new cljs.core.HashMap(this__163925.meta,this__163925.count,new_hashobj__163929));
} else
{new_bucket__163928.push(k,v);
return (new cljs.core.HashMap(this__163925.meta,(this__163925.count + 1),new_hashobj__163929));
}
} else
{var new_hashobj__163932 = goog.object.clone.call(null,this__163925.hashobj);

(new_hashobj__163932[h__163926] = [k,v]);
return (new cljs.core.HashMap(this__163925.meta,(this__163925.count + 1),new_hashobj__163932));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__163933 = this;
var bucket__163934 = (this__163933.hashobj[cljs.core.hash.call(null,k)]);
var i__163935 = (cljs.core.truth_(bucket__163934)?cljs.core.scan_array.call(null,2,k,bucket__163934):null);

if(cljs.core.truth_(i__163935))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__163962 = null;
var G__163962__163963 = (function (tsym163936,k){
var this__163938 = this;
var tsym163936__163939 = this;

var coll__163940 = tsym163936__163939;

return cljs.core._lookup.call(null,coll__163940,k);
});
var G__163962__163964 = (function (tsym163937,k,not_found){
var this__163941 = this;
var tsym163937__163942 = this;

var coll__163943 = tsym163937__163942;

return cljs.core._lookup.call(null,coll__163943,k,not_found);
});
G__163962 = function(tsym163937,k,not_found){
switch(arguments.length){
case  2 :
return G__163962__163963.call(this,tsym163937,k);
case  3 :
return G__163962__163964.call(this,tsym163937,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__163962;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__163944 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__163945 = this;
if(cljs.core.truth_((this__163945.count > 0)))
{var hashes__163946 = cljs.core.js_keys.call(null,this__163945.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__163919_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__163945.hashobj[p1__163919_SHARP_])));
}),hashes__163946);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__163947 = this;
return this__163947.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__163948 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__163949 = this;
return (new cljs.core.HashMap(meta,this__163949.count,this__163949.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__163950 = this;
return this__163950.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__163951 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__163951.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__163952 = this;
var h__163953 = cljs.core.hash.call(null,k);
var bucket__163954 = (this__163952.hashobj[h__163953]);
var i__163955 = (cljs.core.truth_(bucket__163954)?cljs.core.scan_array.call(null,2,k,bucket__163954):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__163955)))
{return coll;
} else
{var new_hashobj__163956 = goog.object.clone.call(null,this__163952.hashobj);

if(cljs.core.truth_((3 > bucket__163954.length)))
{cljs.core.js_delete.call(null,new_hashobj__163956,h__163953);
} else
{var new_bucket__163957 = cljs.core.aclone.call(null,bucket__163954);

new_bucket__163957.splice(i__163955,2);
(new_hashobj__163956[h__163953] = new_bucket__163957);
}
return (new cljs.core.HashMap(this__163952.meta,(this__163952.count - 1),new_hashobj__163956));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__163966 = ks.length;

var i__163967 = 0;
var out__163968 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__163967 < len__163966)))
{{
var G__163969 = (i__163967 + 1);
var G__163970 = cljs.core.assoc.call(null,out__163968,(ks[i__163967]),(vs[i__163967]));
i__163967 = G__163969;
out__163968 = G__163970;
continue;
}
} else
{return out__163968;
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
var in$__163971 = cljs.core.seq.call(null,keyvals);
var out__163972 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__163971))
{{
var G__163973 = cljs.core.nnext.call(null,in$__163971);
var G__163974 = cljs.core.assoc.call(null,out__163972,cljs.core.first.call(null,in$__163971),cljs.core.second.call(null,in$__163971));
in$__163971 = G__163973;
out__163972 = G__163974;
continue;
}
} else
{return out__163972;
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
hash_map.cljs$lang$applyTo = (function (arglist__163975){
var keyvals = cljs.core.seq( arglist__163975 );;
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
{return cljs.core.reduce.call(null,(function (p1__163976_SHARP_,p2__163977_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____163978 = p1__163976_SHARP_;

if(cljs.core.truth_(or__3548__auto____163978))
{return or__3548__auto____163978;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__163977_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__163979){
var maps = cljs.core.seq( arglist__163979 );;
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
{var merge_entry__163982 = (function (m,e){
var k__163980 = cljs.core.first.call(null,e);
var v__163981 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__163980)))
{return cljs.core.assoc.call(null,m,k__163980,f.call(null,cljs.core.get.call(null,m,k__163980),v__163981));
} else
{return cljs.core.assoc.call(null,m,k__163980,v__163981);
}
});
var merge2__163984 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__163982,(function (){var or__3548__auto____163983 = m1;

if(cljs.core.truth_(or__3548__auto____163983))
{return or__3548__auto____163983;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__163984,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__163985){
var f = cljs.core.first(arglist__163985);
var maps = cljs.core.rest(arglist__163985);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__163987 = cljs.core.ObjMap.fromObject([],{});
var keys__163988 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__163988))
{var key__163989 = cljs.core.first.call(null,keys__163988);
var entry__163990 = cljs.core.get.call(null,map,key__163989,"\uFDD0'user/not-found");

{
var G__163991 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__163990,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__163987,key__163989,entry__163990):ret__163987);
var G__163992 = cljs.core.next.call(null,keys__163988);
ret__163987 = G__163991;
keys__163988 = G__163992;
continue;
}
} else
{return ret__163987;
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
var this__163993 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__164014 = null;
var G__164014__164015 = (function (coll,v){
var this__163994 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__164014__164016 = (function (coll,v,not_found){
var this__163995 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__163995.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__164014 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__164014__164015.call(this,coll,v);
case  3 :
return G__164014__164016.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__164014;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__164018 = null;
var G__164018__164019 = (function (tsym163996,k){
var this__163998 = this;
var tsym163996__163999 = this;

var coll__164000 = tsym163996__163999;

return cljs.core._lookup.call(null,coll__164000,k);
});
var G__164018__164020 = (function (tsym163997,k,not_found){
var this__164001 = this;
var tsym163997__164002 = this;

var coll__164003 = tsym163997__164002;

return cljs.core._lookup.call(null,coll__164003,k,not_found);
});
G__164018 = function(tsym163997,k,not_found){
switch(arguments.length){
case  2 :
return G__164018__164019.call(this,tsym163997,k);
case  3 :
return G__164018__164020.call(this,tsym163997,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__164018;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__164004 = this;
return (new cljs.core.Set(this__164004.meta,cljs.core.assoc.call(null,this__164004.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__164005 = this;
return cljs.core.keys.call(null,this__164005.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__164006 = this;
return (new cljs.core.Set(this__164006.meta,cljs.core.dissoc.call(null,this__164006.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__164007 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__164008 = this;
var and__3546__auto____164009 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____164009))
{var and__3546__auto____164010 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____164010))
{return cljs.core.every_QMARK_.call(null,(function (p1__163986_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__163986_SHARP_);
}),other);
} else
{return and__3546__auto____164010;
}
} else
{return and__3546__auto____164009;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__164011 = this;
return (new cljs.core.Set(meta,this__164011.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__164012 = this;
return this__164012.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__164013 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__164013.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__164023 = cljs.core.seq.call(null,coll);
var out__164024 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__164023))))
{{
var G__164025 = cljs.core.rest.call(null,in$__164023);
var G__164026 = cljs.core.conj.call(null,out__164024,cljs.core.first.call(null,in$__164023));
in$__164023 = G__164025;
out__164024 = G__164026;
continue;
}
} else
{return out__164024;
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
{var n__164027 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____164028 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____164028))
{var e__164029 = temp__3695__auto____164028;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__164029));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__164027,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__164022_SHARP_){
var temp__3695__auto____164030 = cljs.core.find.call(null,smap,p1__164022_SHARP_);

if(cljs.core.truth_(temp__3695__auto____164030))
{var e__164031 = temp__3695__auto____164030;

return cljs.core.second.call(null,e__164031);
} else
{return p1__164022_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__164039 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__164032,seen){
while(true){
var vec__164033__164034 = p__164032;
var f__164035 = cljs.core.nth.call(null,vec__164033__164034,0,null);
var xs__164036 = vec__164033__164034;

var temp__3698__auto____164037 = cljs.core.seq.call(null,xs__164036);

if(cljs.core.truth_(temp__3698__auto____164037))
{var s__164038 = temp__3698__auto____164037;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__164035)))
{{
var G__164040 = cljs.core.rest.call(null,s__164038);
var G__164041 = seen;
p__164032 = G__164040;
seen = G__164041;
continue;
}
} else
{return cljs.core.cons.call(null,f__164035,step.call(null,cljs.core.rest.call(null,s__164038),cljs.core.conj.call(null,seen,f__164035)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__164039.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__164042 = cljs.core.PersistentVector.fromArray([]);
var s__164043 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__164043)))
{{
var G__164044 = cljs.core.conj.call(null,ret__164042,cljs.core.first.call(null,s__164043));
var G__164045 = cljs.core.next.call(null,s__164043);
ret__164042 = G__164044;
s__164043 = G__164045;
continue;
}
} else
{return cljs.core.seq.call(null,ret__164042);
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
{if(cljs.core.truth_((function (){var or__3548__auto____164046 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____164046))
{return or__3548__auto____164046;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__164047 = x.lastIndexOf("/");

if(cljs.core.truth_((i__164047 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__164047 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____164048 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____164048))
{return or__3548__auto____164048;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__164049 = x.lastIndexOf("/");

if(cljs.core.truth_((i__164049 > -1)))
{return cljs.core.subs.call(null,x,2,i__164049);
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
var map__164052 = cljs.core.ObjMap.fromObject([],{});
var ks__164053 = cljs.core.seq.call(null,keys);
var vs__164054 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____164055 = ks__164053;

if(cljs.core.truth_(and__3546__auto____164055))
{return vs__164054;
} else
{return and__3546__auto____164055;
}
})()))
{{
var G__164056 = cljs.core.assoc.call(null,map__164052,cljs.core.first.call(null,ks__164053),cljs.core.first.call(null,vs__164054));
var G__164057 = cljs.core.next.call(null,ks__164053);
var G__164058 = cljs.core.next.call(null,vs__164054);
map__164052 = G__164056;
ks__164053 = G__164057;
vs__164054 = G__164058;
continue;
}
} else
{return map__164052;
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
var max_key__164061 = (function (k,x){
return x;
});
var max_key__164062 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__164063 = (function() { 
var G__164065__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__164050_SHARP_,p2__164051_SHARP_){
return max_key.call(null,k,p1__164050_SHARP_,p2__164051_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__164065 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__164065__delegate.call(this, k, x, y, more);
};
G__164065.cljs$lang$maxFixedArity = 3;
G__164065.cljs$lang$applyTo = (function (arglist__164066){
var k = cljs.core.first(arglist__164066);
var x = cljs.core.first(cljs.core.next(arglist__164066));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__164066)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__164066)));
return G__164065__delegate.call(this, k, x, y, more);
});
return G__164065;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__164061.call(this,k,x);
case  3 :
return max_key__164062.call(this,k,x,y);
default:
return max_key__164063.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__164063.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__164067 = (function (k,x){
return x;
});
var min_key__164068 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__164069 = (function() { 
var G__164071__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__164059_SHARP_,p2__164060_SHARP_){
return min_key.call(null,k,p1__164059_SHARP_,p2__164060_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__164071 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__164071__delegate.call(this, k, x, y, more);
};
G__164071.cljs$lang$maxFixedArity = 3;
G__164071.cljs$lang$applyTo = (function (arglist__164072){
var k = cljs.core.first(arglist__164072);
var x = cljs.core.first(cljs.core.next(arglist__164072));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__164072)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__164072)));
return G__164071__delegate.call(this, k, x, y, more);
});
return G__164071;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__164067.call(this,k,x);
case  3 :
return min_key__164068.call(this,k,x,y);
default:
return min_key__164069.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__164069.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__164075 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__164076 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____164073 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____164073))
{var s__164074 = temp__3698__auto____164073;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__164074),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__164074)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__164075.call(this,n,step);
case  3 :
return partition_all__164076.call(this,n,step,coll);
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
var temp__3698__auto____164078 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____164078))
{var s__164079 = temp__3698__auto____164078;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__164079))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__164079),take_while.call(null,pred,cljs.core.rest.call(null,s__164079)));
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
var this__164080 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__164081 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__164097 = null;
var G__164097__164098 = (function (rng,f){
var this__164082 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__164097__164099 = (function (rng,f,s){
var this__164083 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__164097 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__164097__164098.call(this,rng,f);
case  3 :
return G__164097__164099.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__164097;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__164084 = this;
var comp__164085 = (cljs.core.truth_((this__164084.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__164085.call(null,this__164084.start,this__164084.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__164086 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__164086.end - this__164086.start) / this__164086.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__164087 = this;
return this__164087.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__164088 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__164088.meta,(this__164088.start + this__164088.step),this__164088.end,this__164088.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__164089 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__164090 = this;
return (new cljs.core.Range(meta,this__164090.start,this__164090.end,this__164090.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__164091 = this;
return this__164091.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__164101 = null;
var G__164101__164102 = (function (rng,n){
var this__164092 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__164092.start + (n * this__164092.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____164093 = (this__164092.start > this__164092.end);

if(cljs.core.truth_(and__3546__auto____164093))
{return cljs.core._EQ_.call(null,this__164092.step,0);
} else
{return and__3546__auto____164093;
}
})()))
{return this__164092.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__164101__164103 = (function (rng,n,not_found){
var this__164094 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__164094.start + (n * this__164094.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____164095 = (this__164094.start > this__164094.end);

if(cljs.core.truth_(and__3546__auto____164095))
{return cljs.core._EQ_.call(null,this__164094.step,0);
} else
{return and__3546__auto____164095;
}
})()))
{return this__164094.start;
} else
{return not_found;
}
}
});
G__164101 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__164101__164102.call(this,rng,n);
case  3 :
return G__164101__164103.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__164101;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__164096 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__164096.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__164105 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__164106 = (function (end){
return range.call(null,0,end,1);
});
var range__164107 = (function (start,end){
return range.call(null,start,end,1);
});
var range__164108 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__164105.call(this);
case  1 :
return range__164106.call(this,start);
case  2 :
return range__164107.call(this,start,end);
case  3 :
return range__164108.call(this,start,end,step);
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
var temp__3698__auto____164110 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____164110))
{var s__164111 = temp__3698__auto____164110;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__164111),take_nth.call(null,n,cljs.core.drop.call(null,n,s__164111)));
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
var temp__3698__auto____164113 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____164113))
{var s__164114 = temp__3698__auto____164113;

var fst__164115 = cljs.core.first.call(null,s__164114);
var fv__164116 = f.call(null,fst__164115);
var run__164117 = cljs.core.cons.call(null,fst__164115,cljs.core.take_while.call(null,(function (p1__164112_SHARP_){
return cljs.core._EQ_.call(null,fv__164116,f.call(null,p1__164112_SHARP_));
}),cljs.core.next.call(null,s__164114)));

return cljs.core.cons.call(null,run__164117,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__164117),s__164114))));
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
var reductions__164132 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____164128 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____164128))
{var s__164129 = temp__3695__auto____164128;

return reductions.call(null,f,cljs.core.first.call(null,s__164129),cljs.core.rest.call(null,s__164129));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__164133 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____164130 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____164130))
{var s__164131 = temp__3698__auto____164130;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__164131)),cljs.core.rest.call(null,s__164131));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__164132.call(this,f,init);
case  3 :
return reductions__164133.call(this,f,init,coll);
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
var juxt__164136 = (function (f){
return (function() {
var G__164141 = null;
var G__164141__164142 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__164141__164143 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__164141__164144 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__164141__164145 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__164141__164146 = (function() { 
var G__164148__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__164148 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__164148__delegate.call(this, x, y, z, args);
};
G__164148.cljs$lang$maxFixedArity = 3;
G__164148.cljs$lang$applyTo = (function (arglist__164149){
var x = cljs.core.first(arglist__164149);
var y = cljs.core.first(cljs.core.next(arglist__164149));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__164149)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__164149)));
return G__164148__delegate.call(this, x, y, z, args);
});
return G__164148;
})()
;
G__164141 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__164141__164142.call(this);
case  1 :
return G__164141__164143.call(this,x);
case  2 :
return G__164141__164144.call(this,x,y);
case  3 :
return G__164141__164145.call(this,x,y,z);
default:
return G__164141__164146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__164141.cljs$lang$maxFixedArity = 3;
G__164141.cljs$lang$applyTo = G__164141__164146.cljs$lang$applyTo;
return G__164141;
})()
});
var juxt__164137 = (function (f,g){
return (function() {
var G__164150 = null;
var G__164150__164151 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__164150__164152 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__164150__164153 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__164150__164154 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__164150__164155 = (function() { 
var G__164157__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__164157 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__164157__delegate.call(this, x, y, z, args);
};
G__164157.cljs$lang$maxFixedArity = 3;
G__164157.cljs$lang$applyTo = (function (arglist__164158){
var x = cljs.core.first(arglist__164158);
var y = cljs.core.first(cljs.core.next(arglist__164158));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__164158)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__164158)));
return G__164157__delegate.call(this, x, y, z, args);
});
return G__164157;
})()
;
G__164150 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__164150__164151.call(this);
case  1 :
return G__164150__164152.call(this,x);
case  2 :
return G__164150__164153.call(this,x,y);
case  3 :
return G__164150__164154.call(this,x,y,z);
default:
return G__164150__164155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__164150.cljs$lang$maxFixedArity = 3;
G__164150.cljs$lang$applyTo = G__164150__164155.cljs$lang$applyTo;
return G__164150;
})()
});
var juxt__164138 = (function (f,g,h){
return (function() {
var G__164159 = null;
var G__164159__164160 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__164159__164161 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__164159__164162 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__164159__164163 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__164159__164164 = (function() { 
var G__164166__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__164166 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__164166__delegate.call(this, x, y, z, args);
};
G__164166.cljs$lang$maxFixedArity = 3;
G__164166.cljs$lang$applyTo = (function (arglist__164167){
var x = cljs.core.first(arglist__164167);
var y = cljs.core.first(cljs.core.next(arglist__164167));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__164167)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__164167)));
return G__164166__delegate.call(this, x, y, z, args);
});
return G__164166;
})()
;
G__164159 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__164159__164160.call(this);
case  1 :
return G__164159__164161.call(this,x);
case  2 :
return G__164159__164162.call(this,x,y);
case  3 :
return G__164159__164163.call(this,x,y,z);
default:
return G__164159__164164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__164159.cljs$lang$maxFixedArity = 3;
G__164159.cljs$lang$applyTo = G__164159__164164.cljs$lang$applyTo;
return G__164159;
})()
});
var juxt__164139 = (function() { 
var G__164168__delegate = function (f,g,h,fs){
var fs__164135 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__164169 = null;
var G__164169__164170 = (function (){
return cljs.core.reduce.call(null,(function (p1__164118_SHARP_,p2__164119_SHARP_){
return cljs.core.conj.call(null,p1__164118_SHARP_,p2__164119_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__164135);
});
var G__164169__164171 = (function (x){
return cljs.core.reduce.call(null,(function (p1__164120_SHARP_,p2__164121_SHARP_){
return cljs.core.conj.call(null,p1__164120_SHARP_,p2__164121_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__164135);
});
var G__164169__164172 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__164122_SHARP_,p2__164123_SHARP_){
return cljs.core.conj.call(null,p1__164122_SHARP_,p2__164123_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__164135);
});
var G__164169__164173 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__164124_SHARP_,p2__164125_SHARP_){
return cljs.core.conj.call(null,p1__164124_SHARP_,p2__164125_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__164135);
});
var G__164169__164174 = (function() { 
var G__164176__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__164126_SHARP_,p2__164127_SHARP_){
return cljs.core.conj.call(null,p1__164126_SHARP_,cljs.core.apply.call(null,p2__164127_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__164135);
};
var G__164176 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__164176__delegate.call(this, x, y, z, args);
};
G__164176.cljs$lang$maxFixedArity = 3;
G__164176.cljs$lang$applyTo = (function (arglist__164177){
var x = cljs.core.first(arglist__164177);
var y = cljs.core.first(cljs.core.next(arglist__164177));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__164177)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__164177)));
return G__164176__delegate.call(this, x, y, z, args);
});
return G__164176;
})()
;
G__164169 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__164169__164170.call(this);
case  1 :
return G__164169__164171.call(this,x);
case  2 :
return G__164169__164172.call(this,x,y);
case  3 :
return G__164169__164173.call(this,x,y,z);
default:
return G__164169__164174.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__164169.cljs$lang$maxFixedArity = 3;
G__164169.cljs$lang$applyTo = G__164169__164174.cljs$lang$applyTo;
return G__164169;
})()
};
var G__164168 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__164168__delegate.call(this, f, g, h, fs);
};
G__164168.cljs$lang$maxFixedArity = 3;
G__164168.cljs$lang$applyTo = (function (arglist__164178){
var f = cljs.core.first(arglist__164178);
var g = cljs.core.first(cljs.core.next(arglist__164178));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__164178)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__164178)));
return G__164168__delegate.call(this, f, g, h, fs);
});
return G__164168;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__164136.call(this,f);
case  2 :
return juxt__164137.call(this,f,g);
case  3 :
return juxt__164138.call(this,f,g,h);
default:
return juxt__164139.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__164139.cljs$lang$applyTo;
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
var dorun__164180 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__164183 = cljs.core.next.call(null,coll);
coll = G__164183;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__164181 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____164179 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____164179))
{return (n > 0);
} else
{return and__3546__auto____164179;
}
})()))
{{
var G__164184 = (n - 1);
var G__164185 = cljs.core.next.call(null,coll);
n = G__164184;
coll = G__164185;
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
return dorun__164180.call(this,n);
case  2 :
return dorun__164181.call(this,n,coll);
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
var doall__164186 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__164187 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__164186.call(this,n);
case  2 :
return doall__164187.call(this,n,coll);
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
var matches__164189 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__164189),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__164189),1)))
{return cljs.core.first.call(null,matches__164189);
} else
{return cljs.core.vec.call(null,matches__164189);
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
var matches__164190 = re.exec(s);

if(cljs.core.truth_((matches__164190 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__164190),1)))
{return cljs.core.first.call(null,matches__164190);
} else
{return cljs.core.vec.call(null,matches__164190);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__164191 = cljs.core.re_find.call(null,re,s);
var match_idx__164192 = s.search(re);
var match_str__164193 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__164191))?cljs.core.first.call(null,match_data__164191):match_data__164191);
var post_match__164194 = cljs.core.subs.call(null,s,(match_idx__164192 + cljs.core.count.call(null,match_str__164193)));

if(cljs.core.truth_(match_data__164191))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__164191,re_seq.call(null,re,post_match__164194));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__164196__164197 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___164198 = cljs.core.nth.call(null,vec__164196__164197,0,null);
var flags__164199 = cljs.core.nth.call(null,vec__164196__164197,1,null);
var pattern__164200 = cljs.core.nth.call(null,vec__164196__164197,2,null);

return (new RegExp(pattern__164200,flags__164199));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__164195_SHARP_){
return print_one.call(null,p1__164195_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____164201 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____164201))
{var and__3546__auto____164205 = (function (){var x__451__auto____164202 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____164203 = x__451__auto____164202;

if(cljs.core.truth_(and__3546__auto____164203))
{var and__3546__auto____164204 = x__451__auto____164202.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____164204))
{return cljs.core.not.call(null,x__451__auto____164202.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____164204;
}
} else
{return and__3546__auto____164203;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____164202);
}
})();

if(cljs.core.truth_(and__3546__auto____164205))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____164205;
}
} else
{return and__3546__auto____164201;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____164206 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____164207 = x__451__auto____164206;

if(cljs.core.truth_(and__3546__auto____164207))
{var and__3546__auto____164208 = x__451__auto____164206.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____164208))
{return cljs.core.not.call(null,x__451__auto____164206.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____164208;
}
} else
{return and__3546__auto____164207;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____164206);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__164209 = cljs.core.first.call(null,objs);
var sb__164210 = (new goog.string.StringBuffer());

var G__164211__164212 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__164211__164212))
{var obj__164213 = cljs.core.first.call(null,G__164211__164212);
var G__164211__164214 = G__164211__164212;

while(true){
if(cljs.core.truth_((obj__164213 === first_obj__164209)))
{} else
{sb__164210.append(" ");
}
var G__164215__164216 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__164213,opts));

if(cljs.core.truth_(G__164215__164216))
{var string__164217 = cljs.core.first.call(null,G__164215__164216);
var G__164215__164218 = G__164215__164216;

while(true){
sb__164210.append(string__164217);
var temp__3698__auto____164219 = cljs.core.next.call(null,G__164215__164218);

if(cljs.core.truth_(temp__3698__auto____164219))
{var G__164215__164220 = temp__3698__auto____164219;

{
var G__164223 = cljs.core.first.call(null,G__164215__164220);
var G__164224 = G__164215__164220;
string__164217 = G__164223;
G__164215__164218 = G__164224;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____164221 = cljs.core.next.call(null,G__164211__164214);

if(cljs.core.truth_(temp__3698__auto____164221))
{var G__164211__164222 = temp__3698__auto____164221;

{
var G__164225 = cljs.core.first.call(null,G__164211__164222);
var G__164226 = G__164211__164222;
obj__164213 = G__164225;
G__164211__164214 = G__164226;
continue;
}
} else
{}
break;
}
} else
{}
return sb__164210;
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
var sb__164227 = cljs.core.pr_sb.call(null,objs,opts);

sb__164227.append("\n");
return cljs.core.str.call(null,sb__164227);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__164228 = cljs.core.first.call(null,objs);

var G__164229__164230 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__164229__164230))
{var obj__164231 = cljs.core.first.call(null,G__164229__164230);
var G__164229__164232 = G__164229__164230;

while(true){
if(cljs.core.truth_((obj__164231 === first_obj__164228)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__164233__164234 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__164231,opts));

if(cljs.core.truth_(G__164233__164234))
{var string__164235 = cljs.core.first.call(null,G__164233__164234);
var G__164233__164236 = G__164233__164234;

while(true){
cljs.core.string_print.call(null,string__164235);
var temp__3698__auto____164237 = cljs.core.next.call(null,G__164233__164236);

if(cljs.core.truth_(temp__3698__auto____164237))
{var G__164233__164238 = temp__3698__auto____164237;

{
var G__164241 = cljs.core.first.call(null,G__164233__164238);
var G__164242 = G__164233__164238;
string__164235 = G__164241;
G__164233__164236 = G__164242;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____164239 = cljs.core.next.call(null,G__164229__164232);

if(cljs.core.truth_(temp__3698__auto____164239))
{var G__164229__164240 = temp__3698__auto____164239;

{
var G__164243 = cljs.core.first.call(null,G__164229__164240);
var G__164244 = G__164229__164240;
obj__164231 = G__164243;
G__164229__164232 = G__164244;
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
pr_str.cljs$lang$applyTo = (function (arglist__164245){
var objs = cljs.core.seq( arglist__164245 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__164246){
var objs = cljs.core.seq( arglist__164246 );;
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
pr.cljs$lang$applyTo = (function (arglist__164247){
var objs = cljs.core.seq( arglist__164247 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__164248){
var objs = cljs.core.seq( arglist__164248 );;
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
print_str.cljs$lang$applyTo = (function (arglist__164249){
var objs = cljs.core.seq( arglist__164249 );;
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
println.cljs$lang$applyTo = (function (arglist__164250){
var objs = cljs.core.seq( arglist__164250 );;
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
println_str.cljs$lang$applyTo = (function (arglist__164251){
var objs = cljs.core.seq( arglist__164251 );;
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
prn.cljs$lang$applyTo = (function (arglist__164252){
var objs = cljs.core.seq( arglist__164252 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__164253 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__164253,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____164254 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____164254))
{var nspc__164255 = temp__3698__auto____164254;

return cljs.core.str.call(null,nspc__164255,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____164256 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____164256))
{var nspc__164257 = temp__3698__auto____164256;

return cljs.core.str.call(null,nspc__164257,"/");
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
var pr_pair__164258 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__164258,"{",", ","}",opts,coll);
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
var this__164259 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__164260 = this;
var G__164261__164262 = cljs.core.seq.call(null,this__164260.watches);

if(cljs.core.truth_(G__164261__164262))
{var G__164264__164266 = cljs.core.first.call(null,G__164261__164262);
var vec__164265__164267 = G__164264__164266;
var key__164268 = cljs.core.nth.call(null,vec__164265__164267,0,null);
var f__164269 = cljs.core.nth.call(null,vec__164265__164267,1,null);
var G__164261__164270 = G__164261__164262;

var G__164264__164271 = G__164264__164266;
var G__164261__164272 = G__164261__164270;

while(true){
var vec__164273__164274 = G__164264__164271;
var key__164275 = cljs.core.nth.call(null,vec__164273__164274,0,null);
var f__164276 = cljs.core.nth.call(null,vec__164273__164274,1,null);
var G__164261__164277 = G__164261__164272;

f__164276.call(null,key__164275,this$,oldval,newval);
var temp__3698__auto____164278 = cljs.core.next.call(null,G__164261__164277);

if(cljs.core.truth_(temp__3698__auto____164278))
{var G__164261__164279 = temp__3698__auto____164278;

{
var G__164286 = cljs.core.first.call(null,G__164261__164279);
var G__164287 = G__164261__164279;
G__164264__164271 = G__164286;
G__164261__164272 = G__164287;
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
var this__164280 = this;
return this$.watches = cljs.core.assoc.call(null,this__164280.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__164281 = this;
return this$.watches = cljs.core.dissoc.call(null,this__164281.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__164282 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__164282.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__164283 = this;
return this__164283.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__164284 = this;
return this__164284.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__164285 = this;
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
var atom__164294 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__164295 = (function() { 
var G__164297__delegate = function (x,p__164288){
var map__164289__164290 = p__164288;
var map__164289__164291 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__164289__164290))?cljs.core.apply.call(null,cljs.core.hash_map,map__164289__164290):map__164289__164290);
var validator__164292 = cljs.core.get.call(null,map__164289__164291,"\uFDD0'validator");
var meta__164293 = cljs.core.get.call(null,map__164289__164291,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__164293,validator__164292,null));
};
var G__164297 = function (x,var_args){
var p__164288 = null;
if (goog.isDef(var_args)) {
  p__164288 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__164297__delegate.call(this, x, p__164288);
};
G__164297.cljs$lang$maxFixedArity = 1;
G__164297.cljs$lang$applyTo = (function (arglist__164298){
var x = cljs.core.first(arglist__164298);
var p__164288 = cljs.core.rest(arglist__164298);
return G__164297__delegate.call(this, x, p__164288);
});
return G__164297;
})()
;
atom = function(x,var_args){
var p__164288 = var_args;
switch(arguments.length){
case  1 :
return atom__164294.call(this,x);
default:
return atom__164295.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__164295.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____164299 = a.validator;

if(cljs.core.truth_(temp__3698__auto____164299))
{var validate__164300 = temp__3698__auto____164299;

if(cljs.core.truth_(validate__164300.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__164301 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__164301,new_value);
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
var swap_BANG___164302 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___164303 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___164304 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___164305 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___164306 = (function() { 
var G__164308__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__164308 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__164308__delegate.call(this, a, f, x, y, z, more);
};
G__164308.cljs$lang$maxFixedArity = 5;
G__164308.cljs$lang$applyTo = (function (arglist__164309){
var a = cljs.core.first(arglist__164309);
var f = cljs.core.first(cljs.core.next(arglist__164309));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__164309)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__164309))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__164309)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__164309)))));
return G__164308__delegate.call(this, a, f, x, y, z, more);
});
return G__164308;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___164302.call(this,a,f);
case  3 :
return swap_BANG___164303.call(this,a,f,x);
case  4 :
return swap_BANG___164304.call(this,a,f,x,y);
case  5 :
return swap_BANG___164305.call(this,a,f,x,y,z);
default:
return swap_BANG___164306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___164306.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__164310){
var iref = cljs.core.first(arglist__164310);
var f = cljs.core.first(cljs.core.next(arglist__164310));
var args = cljs.core.rest(cljs.core.next(arglist__164310));
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
var gensym__164311 = (function (){
return gensym.call(null,"G__");
});
var gensym__164312 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__164311.call(this);
case  1 :
return gensym__164312.call(this,prefix_string);
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
var this__164314 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__164314.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__164315 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__164315.state,(function (p__164316){
var curr_state__164317 = p__164316;
var curr_state__164318 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__164317))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__164317):curr_state__164317);
var done__164319 = cljs.core.get.call(null,curr_state__164318,"\uFDD0'done");

if(cljs.core.truth_(done__164319))
{return curr_state__164318;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__164315.f.call(null)});
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
var map__164320__164321 = options;
var map__164320__164322 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__164320__164321))?cljs.core.apply.call(null,cljs.core.hash_map,map__164320__164321):map__164320__164321);
var keywordize_keys__164323 = cljs.core.get.call(null,map__164320__164322,"\uFDD0'keywordize-keys");
var keyfn__164324 = (cljs.core.truth_(keywordize_keys__164323)?cljs.core.keyword:cljs.core.str);
var f__164330 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____164329 = (function iter__164325(s__164326){
return (new cljs.core.LazySeq(null,false,(function (){
var s__164326__164327 = s__164326;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__164326__164327)))
{var k__164328 = cljs.core.first.call(null,s__164326__164327);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__164324.call(null,k__164328),thisfn.call(null,(x[k__164328]))]),iter__164325.call(null,cljs.core.rest.call(null,s__164326__164327)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____164329.call(null,cljs.core.js_keys.call(null,x));
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

return f__164330.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__164331){
var x = cljs.core.first(arglist__164331);
var options = cljs.core.rest(arglist__164331);
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
var mem__164332 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__164336__delegate = function (args){
var temp__3695__auto____164333 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__164332),args);

if(cljs.core.truth_(temp__3695__auto____164333))
{var v__164334 = temp__3695__auto____164333;

return v__164334;
} else
{var ret__164335 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__164332,cljs.core.assoc,args,ret__164335);
return ret__164335;
}
};
var G__164336 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__164336__delegate.call(this, args);
};
G__164336.cljs$lang$maxFixedArity = 0;
G__164336.cljs$lang$applyTo = (function (arglist__164337){
var args = cljs.core.seq( arglist__164337 );;
return G__164336__delegate.call(this, args);
});
return G__164336;
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
var trampoline__164339 = (function (f){
while(true){
var ret__164338 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__164338)))
{{
var G__164342 = ret__164338;
f = G__164342;
continue;
}
} else
{return ret__164338;
}
break;
}
});
var trampoline__164340 = (function() { 
var G__164343__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__164343 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__164343__delegate.call(this, f, args);
};
G__164343.cljs$lang$maxFixedArity = 1;
G__164343.cljs$lang$applyTo = (function (arglist__164344){
var f = cljs.core.first(arglist__164344);
var args = cljs.core.rest(arglist__164344);
return G__164343__delegate.call(this, f, args);
});
return G__164343;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__164339.call(this,f);
default:
return trampoline__164340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__164340.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__164345 = (function (){
return rand.call(null,1);
});
var rand__164346 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__164345.call(this);
case  1 :
return rand__164346.call(this,n);
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
var k__164348 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__164348,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__164348,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___164357 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___164358 = (function (h,child,parent){
var or__3548__auto____164349 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____164349))
{return or__3548__auto____164349;
} else
{var or__3548__auto____164350 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____164350))
{return or__3548__auto____164350;
} else
{var and__3546__auto____164351 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____164351))
{var and__3546__auto____164352 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____164352))
{var and__3546__auto____164353 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____164353))
{var ret__164354 = true;
var i__164355 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____164356 = cljs.core.not.call(null,ret__164354);

if(cljs.core.truth_(or__3548__auto____164356))
{return or__3548__auto____164356;
} else
{return cljs.core._EQ_.call(null,i__164355,cljs.core.count.call(null,parent));
}
})()))
{return ret__164354;
} else
{{
var G__164360 = isa_QMARK_.call(null,h,child.call(null,i__164355),parent.call(null,i__164355));
var G__164361 = (i__164355 + 1);
ret__164354 = G__164360;
i__164355 = G__164361;
continue;
}
}
break;
}
} else
{return and__3546__auto____164353;
}
} else
{return and__3546__auto____164352;
}
} else
{return and__3546__auto____164351;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___164357.call(this,h,child);
case  3 :
return isa_QMARK___164358.call(this,h,child,parent);
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
var parents__164362 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__164363 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__164362.call(this,h);
case  2 :
return parents__164363.call(this,h,tag);
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
var ancestors__164365 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__164366 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__164365.call(this,h);
case  2 :
return ancestors__164366.call(this,h,tag);
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
var descendants__164368 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__164369 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__164368.call(this,h);
case  2 :
return descendants__164369.call(this,h,tag);
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
var derive__164379 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__164380 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__164374 = "\uFDD0'parents".call(null,h);
var td__164375 = "\uFDD0'descendants".call(null,h);
var ta__164376 = "\uFDD0'ancestors".call(null,h);
var tf__164377 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____164378 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__164374.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__164376.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__164376.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__164374,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__164377.call(null,"\uFDD0'ancestors".call(null,h),tag,td__164375,parent,ta__164376),"\uFDD0'descendants":tf__164377.call(null,"\uFDD0'descendants".call(null,h),parent,ta__164376,tag,td__164375)});
})());

if(cljs.core.truth_(or__3548__auto____164378))
{return or__3548__auto____164378;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__164379.call(this,h,tag);
case  3 :
return derive__164380.call(this,h,tag,parent);
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
var underive__164386 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__164387 = (function (h,tag,parent){
var parentMap__164382 = "\uFDD0'parents".call(null,h);
var childsParents__164383 = (cljs.core.truth_(parentMap__164382.call(null,tag))?cljs.core.disj.call(null,parentMap__164382.call(null,tag),parent):cljs.core.set([]));
var newParents__164384 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__164383))?cljs.core.assoc.call(null,parentMap__164382,tag,childsParents__164383):cljs.core.dissoc.call(null,parentMap__164382,tag));
var deriv_seq__164385 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__164371_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__164371_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__164371_SHARP_),cljs.core.second.call(null,p1__164371_SHARP_)));
}),cljs.core.seq.call(null,newParents__164384)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__164382.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__164372_SHARP_,p2__164373_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__164372_SHARP_,p2__164373_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__164385));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__164386.call(this,h,tag);
case  3 :
return underive__164387.call(this,h,tag,parent);
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
var xprefs__164389 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____164391 = (cljs.core.truth_((function (){var and__3546__auto____164390 = xprefs__164389;

if(cljs.core.truth_(and__3546__auto____164390))
{return xprefs__164389.call(null,y);
} else
{return and__3546__auto____164390;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____164391))
{return or__3548__auto____164391;
} else
{var or__3548__auto____164393 = (function (){var ps__164392 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__164392) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__164392),prefer_table)))
{} else
{}
{
var G__164396 = cljs.core.rest.call(null,ps__164392);
ps__164392 = G__164396;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____164393))
{return or__3548__auto____164393;
} else
{var or__3548__auto____164395 = (function (){var ps__164394 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__164394) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__164394),y,prefer_table)))
{} else
{}
{
var G__164397 = cljs.core.rest.call(null,ps__164394);
ps__164394 = G__164397;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____164395))
{return or__3548__auto____164395;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____164398 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____164398))
{return or__3548__auto____164398;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__164407 = cljs.core.reduce.call(null,(function (be,p__164399){
var vec__164400__164401 = p__164399;
var k__164402 = cljs.core.nth.call(null,vec__164400__164401,0,null);
var ___164403 = cljs.core.nth.call(null,vec__164400__164401,1,null);
var e__164404 = vec__164400__164401;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__164402)))
{var be2__164406 = (cljs.core.truth_((function (){var or__3548__auto____164405 = (be === null);

if(cljs.core.truth_(or__3548__auto____164405))
{return or__3548__auto____164405;
} else
{return cljs.core.dominates.call(null,k__164402,cljs.core.first.call(null,be),prefer_table);
}
})())?e__164404:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__164406),k__164402,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__164402," and ",cljs.core.first.call(null,be2__164406),", and neither is preferred")));
}
return be2__164406;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__164407))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__164407));
return cljs.core.second.call(null,best_entry__164407);
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
if(cljs.core.truth_((function (){var and__3546__auto____164408 = mf;

if(cljs.core.truth_(and__3546__auto____164408))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____164408;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____164409 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____164409))
{return or__3548__auto____164409;
} else
{var or__3548__auto____164410 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____164410))
{return or__3548__auto____164410;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____164411 = mf;

if(cljs.core.truth_(and__3546__auto____164411))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____164411;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____164412 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____164412))
{return or__3548__auto____164412;
} else
{var or__3548__auto____164413 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____164413))
{return or__3548__auto____164413;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____164414 = mf;

if(cljs.core.truth_(and__3546__auto____164414))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____164414;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____164415 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____164415))
{return or__3548__auto____164415;
} else
{var or__3548__auto____164416 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____164416))
{return or__3548__auto____164416;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____164417 = mf;

if(cljs.core.truth_(and__3546__auto____164417))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____164417;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____164418 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____164418))
{return or__3548__auto____164418;
} else
{var or__3548__auto____164419 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____164419))
{return or__3548__auto____164419;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____164420 = mf;

if(cljs.core.truth_(and__3546__auto____164420))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____164420;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____164421 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____164421))
{return or__3548__auto____164421;
} else
{var or__3548__auto____164422 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____164422))
{return or__3548__auto____164422;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____164423 = mf;

if(cljs.core.truth_(and__3546__auto____164423))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____164423;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____164424 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____164424))
{return or__3548__auto____164424;
} else
{var or__3548__auto____164425 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____164425))
{return or__3548__auto____164425;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____164426 = mf;

if(cljs.core.truth_(and__3546__auto____164426))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____164426;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____164427 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____164427))
{return or__3548__auto____164427;
} else
{var or__3548__auto____164428 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____164428))
{return or__3548__auto____164428;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____164429 = mf;

if(cljs.core.truth_(and__3546__auto____164429))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____164429;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____164430 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____164430))
{return or__3548__auto____164430;
} else
{var or__3548__auto____164431 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____164431))
{return or__3548__auto____164431;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__164432 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__164433 = cljs.core._get_method.call(null,mf,dispatch_val__164432);

if(cljs.core.truth_(target_fn__164433))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__164432)));
}
return cljs.core.apply.call(null,target_fn__164433,args);
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
var this__164434 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__164435 = this;
cljs.core.swap_BANG_.call(null,this__164435.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__164435.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__164435.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__164435.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__164436 = this;
cljs.core.swap_BANG_.call(null,this__164436.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__164436.method_cache,this__164436.method_table,this__164436.cached_hierarchy,this__164436.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__164437 = this;
cljs.core.swap_BANG_.call(null,this__164437.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__164437.method_cache,this__164437.method_table,this__164437.cached_hierarchy,this__164437.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__164438 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__164438.cached_hierarchy),cljs.core.deref.call(null,this__164438.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__164438.method_cache,this__164438.method_table,this__164438.cached_hierarchy,this__164438.hierarchy);
}
var temp__3695__auto____164439 = cljs.core.deref.call(null,this__164438.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____164439))
{var target_fn__164440 = temp__3695__auto____164439;

return target_fn__164440;
} else
{var temp__3695__auto____164441 = cljs.core.find_and_cache_best_method.call(null,this__164438.name,dispatch_val,this__164438.hierarchy,this__164438.method_table,this__164438.prefer_table,this__164438.method_cache,this__164438.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____164441))
{var target_fn__164442 = temp__3695__auto____164441;

return target_fn__164442;
} else
{return cljs.core.deref.call(null,this__164438.method_table).call(null,this__164438.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__164443 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__164443.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__164443.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__164443.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__164443.method_cache,this__164443.method_table,this__164443.cached_hierarchy,this__164443.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__164444 = this;
return cljs.core.deref.call(null,this__164444.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__164445 = this;
return cljs.core.deref.call(null,this__164445.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__164446 = this;
return cljs.core.do_dispatch.call(null,mf,this__164446.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__164447__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__164447 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__164447__delegate.call(this, _, args);
};
G__164447.cljs$lang$maxFixedArity = 1;
G__164447.cljs$lang$applyTo = (function (arglist__164448){
var _ = cljs.core.first(arglist__164448);
var args = cljs.core.rest(arglist__164448);
return G__164447__delegate.call(this, _, args);
});
return G__164447;
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
