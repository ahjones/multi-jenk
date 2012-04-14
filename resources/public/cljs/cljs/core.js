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
var or__3548__auto____319744 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____319744))
{return or__3548__auto____319744;
} else
{var or__3548__auto____319745 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____319745))
{return or__3548__auto____319745;
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
var _invoke__319809 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____319746 = this$;

if(cljs.core.truth_(and__3546__auto____319746))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319746;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____319747 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319747))
{return or__3548__auto____319747;
} else
{var or__3548__auto____319748 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319748))
{return or__3548__auto____319748;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__319810 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____319749 = this$;

if(cljs.core.truth_(and__3546__auto____319749))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319749;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____319750 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319750))
{return or__3548__auto____319750;
} else
{var or__3548__auto____319751 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319751))
{return or__3548__auto____319751;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__319811 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____319752 = this$;

if(cljs.core.truth_(and__3546__auto____319752))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319752;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____319753 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319753))
{return or__3548__auto____319753;
} else
{var or__3548__auto____319754 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319754))
{return or__3548__auto____319754;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__319812 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____319755 = this$;

if(cljs.core.truth_(and__3546__auto____319755))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319755;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____319756 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319756))
{return or__3548__auto____319756;
} else
{var or__3548__auto____319757 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319757))
{return or__3548__auto____319757;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__319813 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____319758 = this$;

if(cljs.core.truth_(and__3546__auto____319758))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319758;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____319759 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319759))
{return or__3548__auto____319759;
} else
{var or__3548__auto____319760 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319760))
{return or__3548__auto____319760;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__319814 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____319761 = this$;

if(cljs.core.truth_(and__3546__auto____319761))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319761;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____319762 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319762))
{return or__3548__auto____319762;
} else
{var or__3548__auto____319763 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319763))
{return or__3548__auto____319763;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__319815 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____319764 = this$;

if(cljs.core.truth_(and__3546__auto____319764))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319764;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____319765 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319765))
{return or__3548__auto____319765;
} else
{var or__3548__auto____319766 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319766))
{return or__3548__auto____319766;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__319816 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____319767 = this$;

if(cljs.core.truth_(and__3546__auto____319767))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319767;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____319768 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319768))
{return or__3548__auto____319768;
} else
{var or__3548__auto____319769 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319769))
{return or__3548__auto____319769;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__319817 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____319770 = this$;

if(cljs.core.truth_(and__3546__auto____319770))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319770;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____319771 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319771))
{return or__3548__auto____319771;
} else
{var or__3548__auto____319772 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319772))
{return or__3548__auto____319772;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__319818 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____319773 = this$;

if(cljs.core.truth_(and__3546__auto____319773))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319773;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____319774 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319774))
{return or__3548__auto____319774;
} else
{var or__3548__auto____319775 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319775))
{return or__3548__auto____319775;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__319819 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____319776 = this$;

if(cljs.core.truth_(and__3546__auto____319776))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319776;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____319777 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319777))
{return or__3548__auto____319777;
} else
{var or__3548__auto____319778 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319778))
{return or__3548__auto____319778;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__319820 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____319779 = this$;

if(cljs.core.truth_(and__3546__auto____319779))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319779;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____319780 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319780))
{return or__3548__auto____319780;
} else
{var or__3548__auto____319781 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319781))
{return or__3548__auto____319781;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__319821 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____319782 = this$;

if(cljs.core.truth_(and__3546__auto____319782))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319782;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____319783 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319783))
{return or__3548__auto____319783;
} else
{var or__3548__auto____319784 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319784))
{return or__3548__auto____319784;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__319822 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____319785 = this$;

if(cljs.core.truth_(and__3546__auto____319785))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319785;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____319786 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319786))
{return or__3548__auto____319786;
} else
{var or__3548__auto____319787 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319787))
{return or__3548__auto____319787;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__319823 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____319788 = this$;

if(cljs.core.truth_(and__3546__auto____319788))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319788;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____319789 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319789))
{return or__3548__auto____319789;
} else
{var or__3548__auto____319790 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319790))
{return or__3548__auto____319790;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__319824 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____319791 = this$;

if(cljs.core.truth_(and__3546__auto____319791))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319791;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____319792 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319792))
{return or__3548__auto____319792;
} else
{var or__3548__auto____319793 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319793))
{return or__3548__auto____319793;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__319825 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____319794 = this$;

if(cljs.core.truth_(and__3546__auto____319794))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319794;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____319795 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319795))
{return or__3548__auto____319795;
} else
{var or__3548__auto____319796 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319796))
{return or__3548__auto____319796;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__319826 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____319797 = this$;

if(cljs.core.truth_(and__3546__auto____319797))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319797;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____319798 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319798))
{return or__3548__auto____319798;
} else
{var or__3548__auto____319799 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319799))
{return or__3548__auto____319799;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__319827 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____319800 = this$;

if(cljs.core.truth_(and__3546__auto____319800))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319800;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____319801 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319801))
{return or__3548__auto____319801;
} else
{var or__3548__auto____319802 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319802))
{return or__3548__auto____319802;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__319828 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____319803 = this$;

if(cljs.core.truth_(and__3546__auto____319803))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319803;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____319804 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319804))
{return or__3548__auto____319804;
} else
{var or__3548__auto____319805 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319805))
{return or__3548__auto____319805;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__319829 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____319806 = this$;

if(cljs.core.truth_(and__3546__auto____319806))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____319806;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____319807 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319807))
{return or__3548__auto____319807;
} else
{var or__3548__auto____319808 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____319808))
{return or__3548__auto____319808;
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
return _invoke__319809.call(this,this$);
case  2 :
return _invoke__319810.call(this,this$,a);
case  3 :
return _invoke__319811.call(this,this$,a,b);
case  4 :
return _invoke__319812.call(this,this$,a,b,c);
case  5 :
return _invoke__319813.call(this,this$,a,b,c,d);
case  6 :
return _invoke__319814.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__319815.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__319816.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__319817.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__319818.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__319819.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__319820.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__319821.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__319822.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__319823.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__319824.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__319825.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__319826.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__319827.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__319828.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__319829.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____319831 = coll;

if(cljs.core.truth_(and__3546__auto____319831))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____319831;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____319832 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319832))
{return or__3548__auto____319832;
} else
{var or__3548__auto____319833 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____319833))
{return or__3548__auto____319833;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____319834 = coll;

if(cljs.core.truth_(and__3546__auto____319834))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____319834;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____319835 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319835))
{return or__3548__auto____319835;
} else
{var or__3548__auto____319836 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____319836))
{return or__3548__auto____319836;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____319837 = coll;

if(cljs.core.truth_(and__3546__auto____319837))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____319837;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____319838 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319838))
{return or__3548__auto____319838;
} else
{var or__3548__auto____319839 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____319839))
{return or__3548__auto____319839;
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
var _nth__319846 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____319840 = coll;

if(cljs.core.truth_(and__3546__auto____319840))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____319840;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____319841 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319841))
{return or__3548__auto____319841;
} else
{var or__3548__auto____319842 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____319842))
{return or__3548__auto____319842;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__319847 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____319843 = coll;

if(cljs.core.truth_(and__3546__auto____319843))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____319843;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____319844 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319844))
{return or__3548__auto____319844;
} else
{var or__3548__auto____319845 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____319845))
{return or__3548__auto____319845;
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
return _nth__319846.call(this,coll,n);
case  3 :
return _nth__319847.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____319849 = coll;

if(cljs.core.truth_(and__3546__auto____319849))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____319849;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____319850 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319850))
{return or__3548__auto____319850;
} else
{var or__3548__auto____319851 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____319851))
{return or__3548__auto____319851;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____319852 = coll;

if(cljs.core.truth_(and__3546__auto____319852))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____319852;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____319853 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319853))
{return or__3548__auto____319853;
} else
{var or__3548__auto____319854 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____319854))
{return or__3548__auto____319854;
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
var _lookup__319861 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____319855 = o;

if(cljs.core.truth_(and__3546__auto____319855))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____319855;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____319856 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____319856))
{return or__3548__auto____319856;
} else
{var or__3548__auto____319857 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____319857))
{return or__3548__auto____319857;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__319862 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____319858 = o;

if(cljs.core.truth_(and__3546__auto____319858))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____319858;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____319859 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____319859))
{return or__3548__auto____319859;
} else
{var or__3548__auto____319860 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____319860))
{return or__3548__auto____319860;
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
return _lookup__319861.call(this,o,k);
case  3 :
return _lookup__319862.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____319864 = coll;

if(cljs.core.truth_(and__3546__auto____319864))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____319864;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____319865 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319865))
{return or__3548__auto____319865;
} else
{var or__3548__auto____319866 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____319866))
{return or__3548__auto____319866;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____319867 = coll;

if(cljs.core.truth_(and__3546__auto____319867))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____319867;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____319868 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319868))
{return or__3548__auto____319868;
} else
{var or__3548__auto____319869 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____319869))
{return or__3548__auto____319869;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____319870 = coll;

if(cljs.core.truth_(and__3546__auto____319870))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____319870;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____319871 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319871))
{return or__3548__auto____319871;
} else
{var or__3548__auto____319872 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____319872))
{return or__3548__auto____319872;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____319873 = coll;

if(cljs.core.truth_(and__3546__auto____319873))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____319873;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____319874 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319874))
{return or__3548__auto____319874;
} else
{var or__3548__auto____319875 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____319875))
{return or__3548__auto____319875;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____319876 = coll;

if(cljs.core.truth_(and__3546__auto____319876))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____319876;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____319877 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319877))
{return or__3548__auto____319877;
} else
{var or__3548__auto____319878 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____319878))
{return or__3548__auto____319878;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____319879 = coll;

if(cljs.core.truth_(and__3546__auto____319879))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____319879;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____319880 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319880))
{return or__3548__auto____319880;
} else
{var or__3548__auto____319881 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____319881))
{return or__3548__auto____319881;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____319882 = coll;

if(cljs.core.truth_(and__3546__auto____319882))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____319882;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____319883 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319883))
{return or__3548__auto____319883;
} else
{var or__3548__auto____319884 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____319884))
{return or__3548__auto____319884;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____319885 = o;

if(cljs.core.truth_(and__3546__auto____319885))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____319885;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____319886 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____319886))
{return or__3548__auto____319886;
} else
{var or__3548__auto____319887 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____319887))
{return or__3548__auto____319887;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____319888 = o;

if(cljs.core.truth_(and__3546__auto____319888))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____319888;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____319889 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____319889))
{return or__3548__auto____319889;
} else
{var or__3548__auto____319890 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____319890))
{return or__3548__auto____319890;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____319891 = o;

if(cljs.core.truth_(and__3546__auto____319891))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____319891;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____319892 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____319892))
{return or__3548__auto____319892;
} else
{var or__3548__auto____319893 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____319893))
{return or__3548__auto____319893;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____319894 = o;

if(cljs.core.truth_(and__3546__auto____319894))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____319894;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____319895 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____319895))
{return or__3548__auto____319895;
} else
{var or__3548__auto____319896 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____319896))
{return or__3548__auto____319896;
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
var _reduce__319903 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____319897 = coll;

if(cljs.core.truth_(and__3546__auto____319897))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____319897;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____319898 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319898))
{return or__3548__auto____319898;
} else
{var or__3548__auto____319899 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____319899))
{return or__3548__auto____319899;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__319904 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____319900 = coll;

if(cljs.core.truth_(and__3546__auto____319900))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____319900;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____319901 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____319901))
{return or__3548__auto____319901;
} else
{var or__3548__auto____319902 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____319902))
{return or__3548__auto____319902;
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
return _reduce__319903.call(this,coll,f);
case  3 :
return _reduce__319904.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____319906 = o;

if(cljs.core.truth_(and__3546__auto____319906))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____319906;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____319907 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____319907))
{return or__3548__auto____319907;
} else
{var or__3548__auto____319908 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____319908))
{return or__3548__auto____319908;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____319909 = o;

if(cljs.core.truth_(and__3546__auto____319909))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____319909;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____319910 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____319910))
{return or__3548__auto____319910;
} else
{var or__3548__auto____319911 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____319911))
{return or__3548__auto____319911;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____319912 = o;

if(cljs.core.truth_(and__3546__auto____319912))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____319912;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____319913 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____319913))
{return or__3548__auto____319913;
} else
{var or__3548__auto____319914 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____319914))
{return or__3548__auto____319914;
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
if(cljs.core.truth_((function (){var and__3546__auto____319915 = o;

if(cljs.core.truth_(and__3546__auto____319915))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____319915;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____319916 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____319916))
{return or__3548__auto____319916;
} else
{var or__3548__auto____319917 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____319917))
{return or__3548__auto____319917;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____319918 = d;

if(cljs.core.truth_(and__3546__auto____319918))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____319918;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____319919 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____319919))
{return or__3548__auto____319919;
} else
{var or__3548__auto____319920 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____319920))
{return or__3548__auto____319920;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____319921 = this$;

if(cljs.core.truth_(and__3546__auto____319921))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____319921;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____319922 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319922))
{return or__3548__auto____319922;
} else
{var or__3548__auto____319923 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____319923))
{return or__3548__auto____319923;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____319924 = this$;

if(cljs.core.truth_(and__3546__auto____319924))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____319924;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____319925 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319925))
{return or__3548__auto____319925;
} else
{var or__3548__auto____319926 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____319926))
{return or__3548__auto____319926;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____319927 = this$;

if(cljs.core.truth_(and__3546__auto____319927))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____319927;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____319928 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____319928))
{return or__3548__auto____319928;
} else
{var or__3548__auto____319929 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____319929))
{return or__3548__auto____319929;
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
var G__319930 = null;
var G__319930__319931 = (function (o,k){
return null;
});
var G__319930__319932 = (function (o,k,not_found){
return not_found;
});
G__319930 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__319930__319931.call(this,o,k);
case  3 :
return G__319930__319932.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__319930;
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
var G__319934 = null;
var G__319934__319935 = (function (_,f){
return f.call(null);
});
var G__319934__319936 = (function (_,f,start){
return start;
});
G__319934 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__319934__319935.call(this,_,f);
case  3 :
return G__319934__319936.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__319934;
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
var G__319938 = null;
var G__319938__319939 = (function (_,n){
return null;
});
var G__319938__319940 = (function (_,n,not_found){
return not_found;
});
G__319938 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__319938__319939.call(this,_,n);
case  3 :
return G__319938__319940.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__319938;
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
var ci_reduce__319948 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__319942 = cljs.core._nth.call(null,cicoll,0);
var n__319943 = 1;

while(true){
if(cljs.core.truth_((n__319943 < cljs.core._count.call(null,cicoll))))
{{
var G__319952 = f.call(null,val__319942,cljs.core._nth.call(null,cicoll,n__319943));
var G__319953 = (n__319943 + 1);
val__319942 = G__319952;
n__319943 = G__319953;
continue;
}
} else
{return val__319942;
}
break;
}
}
});
var ci_reduce__319949 = (function (cicoll,f,val){
var val__319944 = val;
var n__319945 = 0;

while(true){
if(cljs.core.truth_((n__319945 < cljs.core._count.call(null,cicoll))))
{{
var G__319954 = f.call(null,val__319944,cljs.core._nth.call(null,cicoll,n__319945));
var G__319955 = (n__319945 + 1);
val__319944 = G__319954;
n__319945 = G__319955;
continue;
}
} else
{return val__319944;
}
break;
}
});
var ci_reduce__319950 = (function (cicoll,f,val,idx){
var val__319946 = val;
var n__319947 = idx;

while(true){
if(cljs.core.truth_((n__319947 < cljs.core._count.call(null,cicoll))))
{{
var G__319956 = f.call(null,val__319946,cljs.core._nth.call(null,cicoll,n__319947));
var G__319957 = (n__319947 + 1);
val__319946 = G__319956;
n__319947 = G__319957;
continue;
}
} else
{return val__319946;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__319948.call(this,cicoll,f);
case  3 :
return ci_reduce__319949.call(this,cicoll,f,val);
case  4 :
return ci_reduce__319950.call(this,cicoll,f,val,idx);
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
var this__319958 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__319971 = null;
var G__319971__319972 = (function (_,f){
var this__319959 = this;
return cljs.core.ci_reduce.call(null,this__319959.a,f,(this__319959.a[this__319959.i]),(this__319959.i + 1));
});
var G__319971__319973 = (function (_,f,start){
var this__319960 = this;
return cljs.core.ci_reduce.call(null,this__319960.a,f,start,this__319960.i);
});
G__319971 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__319971__319972.call(this,_,f);
case  3 :
return G__319971__319973.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__319971;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__319961 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__319962 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__319975 = null;
var G__319975__319976 = (function (coll,n){
var this__319963 = this;
var i__319964 = (n + this__319963.i);

if(cljs.core.truth_((i__319964 < this__319963.a.length)))
{return (this__319963.a[i__319964]);
} else
{return null;
}
});
var G__319975__319977 = (function (coll,n,not_found){
var this__319965 = this;
var i__319966 = (n + this__319965.i);

if(cljs.core.truth_((i__319966 < this__319965.a.length)))
{return (this__319965.a[i__319966]);
} else
{return not_found;
}
});
G__319975 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__319975__319976.call(this,coll,n);
case  3 :
return G__319975__319977.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__319975;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__319967 = this;
return (this__319967.a.length - this__319967.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__319968 = this;
return (this__319968.a[this__319968.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__319969 = this;
if(cljs.core.truth_(((this__319969.i + 1) < this__319969.a.length)))
{return (new cljs.core.IndexedSeq(this__319969.a,(this__319969.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__319970 = this;
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
var G__319979 = null;
var G__319979__319980 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__319979__319981 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__319979 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__319979__319980.call(this,array,f);
case  3 :
return G__319979__319981.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__319979;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__319983 = null;
var G__319983__319984 = (function (array,k){
return (array[k]);
});
var G__319983__319985 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__319983 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__319983__319984.call(this,array,k);
case  3 :
return G__319983__319985.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__319983;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__319987 = null;
var G__319987__319988 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__319987__319989 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__319987 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__319987__319988.call(this,array,n);
case  3 :
return G__319987__319989.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__319987;
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
var temp__3698__auto____319991 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____319991))
{var s__319992 = temp__3698__auto____319991;

return cljs.core._first.call(null,s__319992);
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
var G__319993 = cljs.core.next.call(null,s);
s = G__319993;
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
var s__319994 = cljs.core.seq.call(null,x);
var n__319995 = 0;

while(true){
if(cljs.core.truth_(s__319994))
{{
var G__319996 = cljs.core.next.call(null,s__319994);
var G__319997 = (n__319995 + 1);
s__319994 = G__319996;
n__319995 = G__319997;
continue;
}
} else
{return n__319995;
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
var conj__319998 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__319999 = (function() { 
var G__320001__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__320002 = conj.call(null,coll,x);
var G__320003 = cljs.core.first.call(null,xs);
var G__320004 = cljs.core.next.call(null,xs);
coll = G__320002;
x = G__320003;
xs = G__320004;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__320001 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320001__delegate.call(this, coll, x, xs);
};
G__320001.cljs$lang$maxFixedArity = 2;
G__320001.cljs$lang$applyTo = (function (arglist__320005){
var coll = cljs.core.first(arglist__320005);
var x = cljs.core.first(cljs.core.next(arglist__320005));
var xs = cljs.core.rest(cljs.core.next(arglist__320005));
return G__320001__delegate.call(this, coll, x, xs);
});
return G__320001;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__319998.call(this,coll,x);
default:
return conj__319999.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__319999.cljs$lang$applyTo;
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
var nth__320006 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__320007 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__320006.call(this,coll,n);
case  3 :
return nth__320007.call(this,coll,n,not_found);
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
var get__320009 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__320010 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__320009.call(this,o,k);
case  3 :
return get__320010.call(this,o,k,not_found);
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
var assoc__320013 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__320014 = (function() { 
var G__320016__delegate = function (coll,k,v,kvs){
while(true){
var ret__320012 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__320017 = ret__320012;
var G__320018 = cljs.core.first.call(null,kvs);
var G__320019 = cljs.core.second.call(null,kvs);
var G__320020 = cljs.core.nnext.call(null,kvs);
coll = G__320017;
k = G__320018;
v = G__320019;
kvs = G__320020;
continue;
}
} else
{return ret__320012;
}
break;
}
};
var G__320016 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320016__delegate.call(this, coll, k, v, kvs);
};
G__320016.cljs$lang$maxFixedArity = 3;
G__320016.cljs$lang$applyTo = (function (arglist__320021){
var coll = cljs.core.first(arglist__320021);
var k = cljs.core.first(cljs.core.next(arglist__320021));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320021)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320021)));
return G__320016__delegate.call(this, coll, k, v, kvs);
});
return G__320016;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__320013.call(this,coll,k,v);
default:
return assoc__320014.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__320014.cljs$lang$applyTo;
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
var dissoc__320023 = (function (coll){
return coll;
});
var dissoc__320024 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__320025 = (function() { 
var G__320027__delegate = function (coll,k,ks){
while(true){
var ret__320022 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__320028 = ret__320022;
var G__320029 = cljs.core.first.call(null,ks);
var G__320030 = cljs.core.next.call(null,ks);
coll = G__320028;
k = G__320029;
ks = G__320030;
continue;
}
} else
{return ret__320022;
}
break;
}
};
var G__320027 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320027__delegate.call(this, coll, k, ks);
};
G__320027.cljs$lang$maxFixedArity = 2;
G__320027.cljs$lang$applyTo = (function (arglist__320031){
var coll = cljs.core.first(arglist__320031);
var k = cljs.core.first(cljs.core.next(arglist__320031));
var ks = cljs.core.rest(cljs.core.next(arglist__320031));
return G__320027__delegate.call(this, coll, k, ks);
});
return G__320027;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__320023.call(this,coll);
case  2 :
return dissoc__320024.call(this,coll,k);
default:
return dissoc__320025.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__320025.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____320032 = o;

if(cljs.core.truth_((function (){var and__3546__auto____320033 = x__451__auto____320032;

if(cljs.core.truth_(and__3546__auto____320033))
{var and__3546__auto____320034 = x__451__auto____320032.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____320034))
{return cljs.core.not.call(null,x__451__auto____320032.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____320034;
}
} else
{return and__3546__auto____320033;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____320032);
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
var disj__320036 = (function (coll){
return coll;
});
var disj__320037 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__320038 = (function() { 
var G__320040__delegate = function (coll,k,ks){
while(true){
var ret__320035 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__320041 = ret__320035;
var G__320042 = cljs.core.first.call(null,ks);
var G__320043 = cljs.core.next.call(null,ks);
coll = G__320041;
k = G__320042;
ks = G__320043;
continue;
}
} else
{return ret__320035;
}
break;
}
};
var G__320040 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320040__delegate.call(this, coll, k, ks);
};
G__320040.cljs$lang$maxFixedArity = 2;
G__320040.cljs$lang$applyTo = (function (arglist__320044){
var coll = cljs.core.first(arglist__320044);
var k = cljs.core.first(cljs.core.next(arglist__320044));
var ks = cljs.core.rest(cljs.core.next(arglist__320044));
return G__320040__delegate.call(this, coll, k, ks);
});
return G__320040;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__320036.call(this,coll);
case  2 :
return disj__320037.call(this,coll,k);
default:
return disj__320038.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__320038.cljs$lang$applyTo;
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
{var x__451__auto____320045 = x;

if(cljs.core.truth_((function (){var and__3546__auto____320046 = x__451__auto____320045;

if(cljs.core.truth_(and__3546__auto____320046))
{var and__3546__auto____320047 = x__451__auto____320045.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____320047))
{return cljs.core.not.call(null,x__451__auto____320045.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____320047;
}
} else
{return and__3546__auto____320046;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____320045);
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
{var x__451__auto____320048 = x;

if(cljs.core.truth_((function (){var and__3546__auto____320049 = x__451__auto____320048;

if(cljs.core.truth_(and__3546__auto____320049))
{var and__3546__auto____320050 = x__451__auto____320048.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____320050))
{return cljs.core.not.call(null,x__451__auto____320048.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____320050;
}
} else
{return and__3546__auto____320049;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____320048);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____320051 = x;

if(cljs.core.truth_((function (){var and__3546__auto____320052 = x__451__auto____320051;

if(cljs.core.truth_(and__3546__auto____320052))
{var and__3546__auto____320053 = x__451__auto____320051.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____320053))
{return cljs.core.not.call(null,x__451__auto____320051.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____320053;
}
} else
{return and__3546__auto____320052;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____320051);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____320054 = x;

if(cljs.core.truth_((function (){var and__3546__auto____320055 = x__451__auto____320054;

if(cljs.core.truth_(and__3546__auto____320055))
{var and__3546__auto____320056 = x__451__auto____320054.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____320056))
{return cljs.core.not.call(null,x__451__auto____320054.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____320056;
}
} else
{return and__3546__auto____320055;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____320054);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____320057 = x;

if(cljs.core.truth_((function (){var and__3546__auto____320058 = x__451__auto____320057;

if(cljs.core.truth_(and__3546__auto____320058))
{var and__3546__auto____320059 = x__451__auto____320057.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____320059))
{return cljs.core.not.call(null,x__451__auto____320057.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____320059;
}
} else
{return and__3546__auto____320058;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____320057);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____320060 = x;

if(cljs.core.truth_((function (){var and__3546__auto____320061 = x__451__auto____320060;

if(cljs.core.truth_(and__3546__auto____320061))
{var and__3546__auto____320062 = x__451__auto____320060.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____320062))
{return cljs.core.not.call(null,x__451__auto____320060.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____320062;
}
} else
{return and__3546__auto____320061;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____320060);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____320063 = x;

if(cljs.core.truth_((function (){var and__3546__auto____320064 = x__451__auto____320063;

if(cljs.core.truth_(and__3546__auto____320064))
{var and__3546__auto____320065 = x__451__auto____320063.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____320065))
{return cljs.core.not.call(null,x__451__auto____320063.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____320065;
}
} else
{return and__3546__auto____320064;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____320063);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__320066 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__320066.push(key);
}));
return keys__320066;
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
{var x__451__auto____320067 = s;

if(cljs.core.truth_((function (){var and__3546__auto____320068 = x__451__auto____320067;

if(cljs.core.truth_(and__3546__auto____320068))
{var and__3546__auto____320069 = x__451__auto____320067.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____320069))
{return cljs.core.not.call(null,x__451__auto____320067.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____320069;
}
} else
{return and__3546__auto____320068;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____320067);
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
var and__3546__auto____320070 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____320070))
{return cljs.core.not.call(null,(function (){var or__3548__auto____320071 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____320071))
{return or__3548__auto____320071;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____320070;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____320072 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____320072))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____320072;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____320073 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____320073))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____320073;
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
var and__3546__auto____320074 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____320074))
{return (n == n.toFixed());
} else
{return and__3546__auto____320074;
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
if(cljs.core.truth_((function (){var and__3546__auto____320075 = coll;

if(cljs.core.truth_(and__3546__auto____320075))
{var and__3546__auto____320076 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____320076))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____320076;
}
} else
{return and__3546__auto____320075;
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
var distinct_QMARK___320081 = (function (x){
return true;
});
var distinct_QMARK___320082 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___320083 = (function() { 
var G__320085__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__320077 = cljs.core.set([y,x]);
var xs__320078 = more;

while(true){
var x__320079 = cljs.core.first.call(null,xs__320078);
var etc__320080 = cljs.core.next.call(null,xs__320078);

if(cljs.core.truth_(xs__320078))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__320077,x__320079)))
{return false;
} else
{{
var G__320086 = cljs.core.conj.call(null,s__320077,x__320079);
var G__320087 = etc__320080;
s__320077 = G__320086;
xs__320078 = G__320087;
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
var G__320085 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320085__delegate.call(this, x, y, more);
};
G__320085.cljs$lang$maxFixedArity = 2;
G__320085.cljs$lang$applyTo = (function (arglist__320088){
var x = cljs.core.first(arglist__320088);
var y = cljs.core.first(cljs.core.next(arglist__320088));
var more = cljs.core.rest(cljs.core.next(arglist__320088));
return G__320085__delegate.call(this, x, y, more);
});
return G__320085;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___320081.call(this,x);
case  2 :
return distinct_QMARK___320082.call(this,x,y);
default:
return distinct_QMARK___320083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___320083.cljs$lang$applyTo;
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
var r__320089 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__320089)))
{return r__320089;
} else
{if(cljs.core.truth_(r__320089))
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
var sort__320091 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__320092 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__320090 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__320090,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__320090);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__320091.call(this,comp);
case  2 :
return sort__320092.call(this,comp,coll);
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
var sort_by__320094 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__320095 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__320094.call(this,keyfn,comp);
case  3 :
return sort_by__320095.call(this,keyfn,comp,coll);
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
var reduce__320097 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__320098 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__320097.call(this,f,val);
case  3 :
return reduce__320098.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__320104 = (function (f,coll){
var temp__3695__auto____320100 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____320100))
{var s__320101 = temp__3695__auto____320100;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__320101),cljs.core.next.call(null,s__320101));
} else
{return f.call(null);
}
});
var seq_reduce__320105 = (function (f,val,coll){
var val__320102 = val;
var coll__320103 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__320103))
{{
var G__320107 = f.call(null,val__320102,cljs.core.first.call(null,coll__320103));
var G__320108 = cljs.core.next.call(null,coll__320103);
val__320102 = G__320107;
coll__320103 = G__320108;
continue;
}
} else
{return val__320102;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__320104.call(this,f,val);
case  3 :
return seq_reduce__320105.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__320109 = null;
var G__320109__320110 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__320109__320111 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__320109 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__320109__320110.call(this,coll,f);
case  3 :
return G__320109__320111.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320109;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___320113 = (function (){
return 0;
});
var _PLUS___320114 = (function (x){
return x;
});
var _PLUS___320115 = (function (x,y){
return (x + y);
});
var _PLUS___320116 = (function() { 
var G__320118__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__320118 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320118__delegate.call(this, x, y, more);
};
G__320118.cljs$lang$maxFixedArity = 2;
G__320118.cljs$lang$applyTo = (function (arglist__320119){
var x = cljs.core.first(arglist__320119);
var y = cljs.core.first(cljs.core.next(arglist__320119));
var more = cljs.core.rest(cljs.core.next(arglist__320119));
return G__320118__delegate.call(this, x, y, more);
});
return G__320118;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___320113.call(this);
case  1 :
return _PLUS___320114.call(this,x);
case  2 :
return _PLUS___320115.call(this,x,y);
default:
return _PLUS___320116.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___320116.cljs$lang$applyTo;
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
var ___320120 = (function (x){
return (- x);
});
var ___320121 = (function (x,y){
return (x - y);
});
var ___320122 = (function() { 
var G__320124__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__320124 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320124__delegate.call(this, x, y, more);
};
G__320124.cljs$lang$maxFixedArity = 2;
G__320124.cljs$lang$applyTo = (function (arglist__320125){
var x = cljs.core.first(arglist__320125);
var y = cljs.core.first(cljs.core.next(arglist__320125));
var more = cljs.core.rest(cljs.core.next(arglist__320125));
return G__320124__delegate.call(this, x, y, more);
});
return G__320124;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___320120.call(this,x);
case  2 :
return ___320121.call(this,x,y);
default:
return ___320122.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___320122.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___320126 = (function (){
return 1;
});
var _STAR___320127 = (function (x){
return x;
});
var _STAR___320128 = (function (x,y){
return (x * y);
});
var _STAR___320129 = (function() { 
var G__320131__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__320131 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320131__delegate.call(this, x, y, more);
};
G__320131.cljs$lang$maxFixedArity = 2;
G__320131.cljs$lang$applyTo = (function (arglist__320132){
var x = cljs.core.first(arglist__320132);
var y = cljs.core.first(cljs.core.next(arglist__320132));
var more = cljs.core.rest(cljs.core.next(arglist__320132));
return G__320131__delegate.call(this, x, y, more);
});
return G__320131;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___320126.call(this);
case  1 :
return _STAR___320127.call(this,x);
case  2 :
return _STAR___320128.call(this,x,y);
default:
return _STAR___320129.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___320129.cljs$lang$applyTo;
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
var _SLASH___320133 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___320134 = (function (x,y){
return (x / y);
});
var _SLASH___320135 = (function() { 
var G__320137__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__320137 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320137__delegate.call(this, x, y, more);
};
G__320137.cljs$lang$maxFixedArity = 2;
G__320137.cljs$lang$applyTo = (function (arglist__320138){
var x = cljs.core.first(arglist__320138);
var y = cljs.core.first(cljs.core.next(arglist__320138));
var more = cljs.core.rest(cljs.core.next(arglist__320138));
return G__320137__delegate.call(this, x, y, more);
});
return G__320137;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___320133.call(this,x);
case  2 :
return _SLASH___320134.call(this,x,y);
default:
return _SLASH___320135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___320135.cljs$lang$applyTo;
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
var _LT___320139 = (function (x){
return true;
});
var _LT___320140 = (function (x,y){
return (x < y);
});
var _LT___320141 = (function() { 
var G__320143__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__320144 = y;
var G__320145 = cljs.core.first.call(null,more);
var G__320146 = cljs.core.next.call(null,more);
x = G__320144;
y = G__320145;
more = G__320146;
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
var G__320143 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320143__delegate.call(this, x, y, more);
};
G__320143.cljs$lang$maxFixedArity = 2;
G__320143.cljs$lang$applyTo = (function (arglist__320147){
var x = cljs.core.first(arglist__320147);
var y = cljs.core.first(cljs.core.next(arglist__320147));
var more = cljs.core.rest(cljs.core.next(arglist__320147));
return G__320143__delegate.call(this, x, y, more);
});
return G__320143;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___320139.call(this,x);
case  2 :
return _LT___320140.call(this,x,y);
default:
return _LT___320141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___320141.cljs$lang$applyTo;
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
var _LT__EQ___320148 = (function (x){
return true;
});
var _LT__EQ___320149 = (function (x,y){
return (x <= y);
});
var _LT__EQ___320150 = (function() { 
var G__320152__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__320153 = y;
var G__320154 = cljs.core.first.call(null,more);
var G__320155 = cljs.core.next.call(null,more);
x = G__320153;
y = G__320154;
more = G__320155;
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
var G__320152 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320152__delegate.call(this, x, y, more);
};
G__320152.cljs$lang$maxFixedArity = 2;
G__320152.cljs$lang$applyTo = (function (arglist__320156){
var x = cljs.core.first(arglist__320156);
var y = cljs.core.first(cljs.core.next(arglist__320156));
var more = cljs.core.rest(cljs.core.next(arglist__320156));
return G__320152__delegate.call(this, x, y, more);
});
return G__320152;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___320148.call(this,x);
case  2 :
return _LT__EQ___320149.call(this,x,y);
default:
return _LT__EQ___320150.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___320150.cljs$lang$applyTo;
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
var _GT___320157 = (function (x){
return true;
});
var _GT___320158 = (function (x,y){
return (x > y);
});
var _GT___320159 = (function() { 
var G__320161__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__320162 = y;
var G__320163 = cljs.core.first.call(null,more);
var G__320164 = cljs.core.next.call(null,more);
x = G__320162;
y = G__320163;
more = G__320164;
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
var G__320161 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320161__delegate.call(this, x, y, more);
};
G__320161.cljs$lang$maxFixedArity = 2;
G__320161.cljs$lang$applyTo = (function (arglist__320165){
var x = cljs.core.first(arglist__320165);
var y = cljs.core.first(cljs.core.next(arglist__320165));
var more = cljs.core.rest(cljs.core.next(arglist__320165));
return G__320161__delegate.call(this, x, y, more);
});
return G__320161;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___320157.call(this,x);
case  2 :
return _GT___320158.call(this,x,y);
default:
return _GT___320159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___320159.cljs$lang$applyTo;
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
var _GT__EQ___320166 = (function (x){
return true;
});
var _GT__EQ___320167 = (function (x,y){
return (x >= y);
});
var _GT__EQ___320168 = (function() { 
var G__320170__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__320171 = y;
var G__320172 = cljs.core.first.call(null,more);
var G__320173 = cljs.core.next.call(null,more);
x = G__320171;
y = G__320172;
more = G__320173;
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
var G__320170 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320170__delegate.call(this, x, y, more);
};
G__320170.cljs$lang$maxFixedArity = 2;
G__320170.cljs$lang$applyTo = (function (arglist__320174){
var x = cljs.core.first(arglist__320174);
var y = cljs.core.first(cljs.core.next(arglist__320174));
var more = cljs.core.rest(cljs.core.next(arglist__320174));
return G__320170__delegate.call(this, x, y, more);
});
return G__320170;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___320166.call(this,x);
case  2 :
return _GT__EQ___320167.call(this,x,y);
default:
return _GT__EQ___320168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___320168.cljs$lang$applyTo;
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
var max__320175 = (function (x){
return x;
});
var max__320176 = (function (x,y){
return ((x > y) ? x : y);
});
var max__320177 = (function() { 
var G__320179__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__320179 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320179__delegate.call(this, x, y, more);
};
G__320179.cljs$lang$maxFixedArity = 2;
G__320179.cljs$lang$applyTo = (function (arglist__320180){
var x = cljs.core.first(arglist__320180);
var y = cljs.core.first(cljs.core.next(arglist__320180));
var more = cljs.core.rest(cljs.core.next(arglist__320180));
return G__320179__delegate.call(this, x, y, more);
});
return G__320179;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__320175.call(this,x);
case  2 :
return max__320176.call(this,x,y);
default:
return max__320177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__320177.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__320181 = (function (x){
return x;
});
var min__320182 = (function (x,y){
return ((x < y) ? x : y);
});
var min__320183 = (function() { 
var G__320185__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__320185 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320185__delegate.call(this, x, y, more);
};
G__320185.cljs$lang$maxFixedArity = 2;
G__320185.cljs$lang$applyTo = (function (arglist__320186){
var x = cljs.core.first(arglist__320186);
var y = cljs.core.first(cljs.core.next(arglist__320186));
var more = cljs.core.rest(cljs.core.next(arglist__320186));
return G__320185__delegate.call(this, x, y, more);
});
return G__320185;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__320181.call(this,x);
case  2 :
return min__320182.call(this,x,y);
default:
return min__320183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__320183.cljs$lang$applyTo;
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
var rem__320187 = (n % d);

return cljs.core.fix.call(null,((n - rem__320187) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__320188 = cljs.core.quot.call(null,n,d);

return (n - (d * q__320188));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__320189 = (function (){
return Math.random.call(null);
});
var rand__320190 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__320189.call(this);
case  1 :
return rand__320190.call(this,n);
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
var _EQ__EQ___320192 = (function (x){
return true;
});
var _EQ__EQ___320193 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___320194 = (function() { 
var G__320196__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__320197 = y;
var G__320198 = cljs.core.first.call(null,more);
var G__320199 = cljs.core.next.call(null,more);
x = G__320197;
y = G__320198;
more = G__320199;
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
var G__320196 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320196__delegate.call(this, x, y, more);
};
G__320196.cljs$lang$maxFixedArity = 2;
G__320196.cljs$lang$applyTo = (function (arglist__320200){
var x = cljs.core.first(arglist__320200);
var y = cljs.core.first(cljs.core.next(arglist__320200));
var more = cljs.core.rest(cljs.core.next(arglist__320200));
return G__320196__delegate.call(this, x, y, more);
});
return G__320196;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___320192.call(this,x);
case  2 :
return _EQ__EQ___320193.call(this,x,y);
default:
return _EQ__EQ___320194.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___320194.cljs$lang$applyTo;
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
var n__320201 = n;
var xs__320202 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____320203 = xs__320202;

if(cljs.core.truth_(and__3546__auto____320203))
{return (n__320201 > 0);
} else
{return and__3546__auto____320203;
}
})()))
{{
var G__320204 = (n__320201 - 1);
var G__320205 = cljs.core.next.call(null,xs__320202);
n__320201 = G__320204;
xs__320202 = G__320205;
continue;
}
} else
{return xs__320202;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__320210 = null;
var G__320210__320211 = (function (coll,n){
var temp__3695__auto____320206 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____320206))
{var xs__320207 = temp__3695__auto____320206;

return cljs.core.first.call(null,xs__320207);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__320210__320212 = (function (coll,n,not_found){
var temp__3695__auto____320208 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____320208))
{var xs__320209 = temp__3695__auto____320208;

return cljs.core.first.call(null,xs__320209);
} else
{return not_found;
}
});
G__320210 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__320210__320211.call(this,coll,n);
case  3 :
return G__320210__320212.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320210;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___320214 = (function (){
return "";
});
var str_STAR___320215 = (function (x){
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
var str_STAR___320216 = (function() { 
var G__320218__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__320219 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__320220 = cljs.core.next.call(null,more);
sb = G__320219;
more = G__320220;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__320218 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__320218__delegate.call(this, x, ys);
};
G__320218.cljs$lang$maxFixedArity = 1;
G__320218.cljs$lang$applyTo = (function (arglist__320221){
var x = cljs.core.first(arglist__320221);
var ys = cljs.core.rest(arglist__320221);
return G__320218__delegate.call(this, x, ys);
});
return G__320218;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___320214.call(this);
case  1 :
return str_STAR___320215.call(this,x);
default:
return str_STAR___320216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___320216.cljs$lang$applyTo;
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
var str__320222 = (function (){
return "";
});
var str__320223 = (function (x){
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
var str__320224 = (function() { 
var G__320226__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__320227 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__320228 = cljs.core.next.call(null,more);
sb = G__320227;
more = G__320228;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__320226 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__320226__delegate.call(this, x, ys);
};
G__320226.cljs$lang$maxFixedArity = 1;
G__320226.cljs$lang$applyTo = (function (arglist__320229){
var x = cljs.core.first(arglist__320229);
var ys = cljs.core.rest(arglist__320229);
return G__320226__delegate.call(this, x, ys);
});
return G__320226;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__320222.call(this);
case  1 :
return str__320223.call(this,x);
default:
return str__320224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__320224.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__320230 = (function (s,start){
return s.substring(start);
});
var subs__320231 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__320230.call(this,s,start);
case  3 :
return subs__320231.call(this,s,start,end);
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
var symbol__320233 = (function (name){
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
var symbol__320234 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__320233.call(this,ns);
case  2 :
return symbol__320234.call(this,ns,name);
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
var keyword__320236 = (function (name){
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
var keyword__320237 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__320236.call(this,ns);
case  2 :
return keyword__320237.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__320239 = cljs.core.seq.call(null,x);
var ys__320240 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__320239 === null)))
{return (ys__320240 === null);
} else
{if(cljs.core.truth_((ys__320240 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__320239),cljs.core.first.call(null,ys__320240))))
{{
var G__320241 = cljs.core.next.call(null,xs__320239);
var G__320242 = cljs.core.next.call(null,ys__320240);
xs__320239 = G__320241;
ys__320240 = G__320242;
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
return cljs.core.reduce.call(null,(function (p1__320243_SHARP_,p2__320244_SHARP_){
return cljs.core.hash_combine.call(null,p1__320243_SHARP_,cljs.core.hash.call(null,p2__320244_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__320245__320246 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__320245__320246))
{var G__320248__320250 = cljs.core.first.call(null,G__320245__320246);
var vec__320249__320251 = G__320248__320250;
var key_name__320252 = cljs.core.nth.call(null,vec__320249__320251,0,null);
var f__320253 = cljs.core.nth.call(null,vec__320249__320251,1,null);
var G__320245__320254 = G__320245__320246;

var G__320248__320255 = G__320248__320250;
var G__320245__320256 = G__320245__320254;

while(true){
var vec__320257__320258 = G__320248__320255;
var key_name__320259 = cljs.core.nth.call(null,vec__320257__320258,0,null);
var f__320260 = cljs.core.nth.call(null,vec__320257__320258,1,null);
var G__320245__320261 = G__320245__320256;

var str_name__320262 = cljs.core.name.call(null,key_name__320259);

obj[str_name__320262] = f__320260;
var temp__3698__auto____320263 = cljs.core.next.call(null,G__320245__320261);

if(cljs.core.truth_(temp__3698__auto____320263))
{var G__320245__320264 = temp__3698__auto____320263;

{
var G__320265 = cljs.core.first.call(null,G__320245__320264);
var G__320266 = G__320245__320264;
G__320248__320255 = G__320265;
G__320245__320256 = G__320266;
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
var this__320267 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__320268 = this;
return (new cljs.core.List(this__320268.meta,o,coll,(this__320268.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__320269 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__320270 = this;
return this__320270.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__320271 = this;
return this__320271.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__320272 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__320273 = this;
return this__320273.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__320274 = this;
return this__320274.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__320275 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__320276 = this;
return (new cljs.core.List(meta,this__320276.first,this__320276.rest,this__320276.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__320277 = this;
return this__320277.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__320278 = this;
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
var this__320279 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__320280 = this;
return (new cljs.core.List(this__320280.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__320281 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__320282 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__320283 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__320284 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__320285 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__320286 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__320287 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__320288 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__320289 = this;
return this__320289.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__320290 = this;
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
list.cljs$lang$applyTo = (function (arglist__320291){
var items = cljs.core.seq( arglist__320291 );;
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
var this__320292 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__320293 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__320294 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__320295 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__320295.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__320296 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__320297 = this;
return this__320297.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__320298 = this;
if(cljs.core.truth_((this__320298.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__320298.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__320299 = this;
return this__320299.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__320300 = this;
return (new cljs.core.Cons(meta,this__320300.first,this__320300.rest));
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
var G__320301 = null;
var G__320301__320302 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__320301__320303 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__320301 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__320301__320302.call(this,string,f);
case  3 :
return G__320301__320303.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320301;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__320305 = null;
var G__320305__320306 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__320305__320307 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__320305 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__320305__320306.call(this,string,k);
case  3 :
return G__320305__320307.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320305;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__320309 = null;
var G__320309__320310 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__320309__320311 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__320309 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__320309__320310.call(this,string,n);
case  3 :
return G__320309__320311.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320309;
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
var G__320319 = null;
var G__320319__320320 = (function (tsym320313,coll){
var tsym320313__320315 = this;

var this$__320316 = tsym320313__320315;

return cljs.core.get.call(null,coll,this$__320316.toString());
});
var G__320319__320321 = (function (tsym320314,coll,not_found){
var tsym320314__320317 = this;

var this$__320318 = tsym320314__320317;

return cljs.core.get.call(null,coll,this$__320318.toString(),not_found);
});
G__320319 = function(tsym320314,coll,not_found){
switch(arguments.length){
case  2 :
return G__320319__320320.call(this,tsym320314,coll);
case  3 :
return G__320319__320321.call(this,tsym320314,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320319;
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
var x__320323 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__320323;
} else
{lazy_seq.x = x__320323.call(null);
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
var this__320324 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__320325 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__320326 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__320327 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__320327.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__320328 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__320329 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__320330 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__320331 = this;
return this__320331.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__320332 = this;
return (new cljs.core.LazySeq(meta,this__320332.realized,this__320332.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__320333 = [];

var s__320334 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__320334)))
{ary__320333.push(cljs.core.first.call(null,s__320334));
{
var G__320335 = cljs.core.next.call(null,s__320334);
s__320334 = G__320335;
continue;
}
} else
{return ary__320333;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__320336 = s;
var i__320337 = n;
var sum__320338 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____320339 = (i__320337 > 0);

if(cljs.core.truth_(and__3546__auto____320339))
{return cljs.core.seq.call(null,s__320336);
} else
{return and__3546__auto____320339;
}
})()))
{{
var G__320340 = cljs.core.next.call(null,s__320336);
var G__320341 = (i__320337 - 1);
var G__320342 = (sum__320338 + 1);
s__320336 = G__320340;
i__320337 = G__320341;
sum__320338 = G__320342;
continue;
}
} else
{return sum__320338;
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
var concat__320346 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__320347 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__320348 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__320343 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__320343))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__320343),concat.call(null,cljs.core.rest.call(null,s__320343),y));
} else
{return y;
}
})));
});
var concat__320349 = (function() { 
var G__320351__delegate = function (x,y,zs){
var cat__320345 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__320344 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__320344))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__320344),cat.call(null,cljs.core.rest.call(null,xys__320344),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__320345.call(null,concat.call(null,x,y),zs);
};
var G__320351 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320351__delegate.call(this, x, y, zs);
};
G__320351.cljs$lang$maxFixedArity = 2;
G__320351.cljs$lang$applyTo = (function (arglist__320352){
var x = cljs.core.first(arglist__320352);
var y = cljs.core.first(cljs.core.next(arglist__320352));
var zs = cljs.core.rest(cljs.core.next(arglist__320352));
return G__320351__delegate.call(this, x, y, zs);
});
return G__320351;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__320346.call(this);
case  1 :
return concat__320347.call(this,x);
case  2 :
return concat__320348.call(this,x,y);
default:
return concat__320349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__320349.cljs$lang$applyTo;
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
var list_STAR___320353 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___320354 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___320355 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___320356 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___320357 = (function() { 
var G__320359__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__320359 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__320359__delegate.call(this, a, b, c, d, more);
};
G__320359.cljs$lang$maxFixedArity = 4;
G__320359.cljs$lang$applyTo = (function (arglist__320360){
var a = cljs.core.first(arglist__320360);
var b = cljs.core.first(cljs.core.next(arglist__320360));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320360)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__320360))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__320360))));
return G__320359__delegate.call(this, a, b, c, d, more);
});
return G__320359;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___320353.call(this,a);
case  2 :
return list_STAR___320354.call(this,a,b);
case  3 :
return list_STAR___320355.call(this,a,b,c);
case  4 :
return list_STAR___320356.call(this,a,b,c,d);
default:
return list_STAR___320357.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___320357.cljs$lang$applyTo;
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
var apply__320370 = (function (f,args){
var fixed_arity__320361 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__320361 + 1)) <= fixed_arity__320361)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__320371 = (function (f,x,args){
var arglist__320362 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__320363 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__320362,fixed_arity__320363) <= fixed_arity__320363)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__320362));
} else
{return f.cljs$lang$applyTo(arglist__320362);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__320362));
}
});
var apply__320372 = (function (f,x,y,args){
var arglist__320364 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__320365 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__320364,fixed_arity__320365) <= fixed_arity__320365)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__320364));
} else
{return f.cljs$lang$applyTo(arglist__320364);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__320364));
}
});
var apply__320373 = (function (f,x,y,z,args){
var arglist__320366 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__320367 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__320366,fixed_arity__320367) <= fixed_arity__320367)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__320366));
} else
{return f.cljs$lang$applyTo(arglist__320366);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__320366));
}
});
var apply__320374 = (function() { 
var G__320376__delegate = function (f,a,b,c,d,args){
var arglist__320368 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__320369 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__320368,fixed_arity__320369) <= fixed_arity__320369)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__320368));
} else
{return f.cljs$lang$applyTo(arglist__320368);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__320368));
}
};
var G__320376 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__320376__delegate.call(this, f, a, b, c, d, args);
};
G__320376.cljs$lang$maxFixedArity = 5;
G__320376.cljs$lang$applyTo = (function (arglist__320377){
var f = cljs.core.first(arglist__320377);
var a = cljs.core.first(cljs.core.next(arglist__320377));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320377)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__320377))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__320377)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__320377)))));
return G__320376__delegate.call(this, f, a, b, c, d, args);
});
return G__320376;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__320370.call(this,f,a);
case  3 :
return apply__320371.call(this,f,a,b);
case  4 :
return apply__320372.call(this,f,a,b,c);
case  5 :
return apply__320373.call(this,f,a,b,c,d);
default:
return apply__320374.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__320374.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__320378){
var obj = cljs.core.first(arglist__320378);
var f = cljs.core.first(cljs.core.next(arglist__320378));
var args = cljs.core.rest(cljs.core.next(arglist__320378));
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
var not_EQ___320379 = (function (x){
return false;
});
var not_EQ___320380 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___320381 = (function() { 
var G__320383__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__320383 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320383__delegate.call(this, x, y, more);
};
G__320383.cljs$lang$maxFixedArity = 2;
G__320383.cljs$lang$applyTo = (function (arglist__320384){
var x = cljs.core.first(arglist__320384);
var y = cljs.core.first(cljs.core.next(arglist__320384));
var more = cljs.core.rest(cljs.core.next(arglist__320384));
return G__320383__delegate.call(this, x, y, more);
});
return G__320383;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___320379.call(this,x);
case  2 :
return not_EQ___320380.call(this,x,y);
default:
return not_EQ___320381.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___320381.cljs$lang$applyTo;
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
var G__320385 = pred;
var G__320386 = cljs.core.next.call(null,coll);
pred = G__320385;
coll = G__320386;
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
{var or__3548__auto____320387 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____320387))
{return or__3548__auto____320387;
} else
{{
var G__320388 = pred;
var G__320389 = cljs.core.next.call(null,coll);
pred = G__320388;
coll = G__320389;
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
var G__320390 = null;
var G__320390__320391 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__320390__320392 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__320390__320393 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__320390__320394 = (function() { 
var G__320396__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__320396 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320396__delegate.call(this, x, y, zs);
};
G__320396.cljs$lang$maxFixedArity = 2;
G__320396.cljs$lang$applyTo = (function (arglist__320397){
var x = cljs.core.first(arglist__320397);
var y = cljs.core.first(cljs.core.next(arglist__320397));
var zs = cljs.core.rest(cljs.core.next(arglist__320397));
return G__320396__delegate.call(this, x, y, zs);
});
return G__320396;
})()
;
G__320390 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__320390__320391.call(this);
case  1 :
return G__320390__320392.call(this,x);
case  2 :
return G__320390__320393.call(this,x,y);
default:
return G__320390__320394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__320390.cljs$lang$maxFixedArity = 2;
G__320390.cljs$lang$applyTo = G__320390__320394.cljs$lang$applyTo;
return G__320390;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__320398__delegate = function (args){
return x;
};
var G__320398 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__320398__delegate.call(this, args);
};
G__320398.cljs$lang$maxFixedArity = 0;
G__320398.cljs$lang$applyTo = (function (arglist__320399){
var args = cljs.core.seq( arglist__320399 );;
return G__320398__delegate.call(this, args);
});
return G__320398;
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
var comp__320403 = (function (){
return cljs.core.identity;
});
var comp__320404 = (function (f){
return f;
});
var comp__320405 = (function (f,g){
return (function() {
var G__320409 = null;
var G__320409__320410 = (function (){
return f.call(null,g.call(null));
});
var G__320409__320411 = (function (x){
return f.call(null,g.call(null,x));
});
var G__320409__320412 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__320409__320413 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__320409__320414 = (function() { 
var G__320416__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__320416 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320416__delegate.call(this, x, y, z, args);
};
G__320416.cljs$lang$maxFixedArity = 3;
G__320416.cljs$lang$applyTo = (function (arglist__320417){
var x = cljs.core.first(arglist__320417);
var y = cljs.core.first(cljs.core.next(arglist__320417));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320417)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320417)));
return G__320416__delegate.call(this, x, y, z, args);
});
return G__320416;
})()
;
G__320409 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__320409__320410.call(this);
case  1 :
return G__320409__320411.call(this,x);
case  2 :
return G__320409__320412.call(this,x,y);
case  3 :
return G__320409__320413.call(this,x,y,z);
default:
return G__320409__320414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__320409.cljs$lang$maxFixedArity = 3;
G__320409.cljs$lang$applyTo = G__320409__320414.cljs$lang$applyTo;
return G__320409;
})()
});
var comp__320406 = (function (f,g,h){
return (function() {
var G__320418 = null;
var G__320418__320419 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__320418__320420 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__320418__320421 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__320418__320422 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__320418__320423 = (function() { 
var G__320425__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__320425 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320425__delegate.call(this, x, y, z, args);
};
G__320425.cljs$lang$maxFixedArity = 3;
G__320425.cljs$lang$applyTo = (function (arglist__320426){
var x = cljs.core.first(arglist__320426);
var y = cljs.core.first(cljs.core.next(arglist__320426));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320426)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320426)));
return G__320425__delegate.call(this, x, y, z, args);
});
return G__320425;
})()
;
G__320418 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__320418__320419.call(this);
case  1 :
return G__320418__320420.call(this,x);
case  2 :
return G__320418__320421.call(this,x,y);
case  3 :
return G__320418__320422.call(this,x,y,z);
default:
return G__320418__320423.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__320418.cljs$lang$maxFixedArity = 3;
G__320418.cljs$lang$applyTo = G__320418__320423.cljs$lang$applyTo;
return G__320418;
})()
});
var comp__320407 = (function() { 
var G__320427__delegate = function (f1,f2,f3,fs){
var fs__320400 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__320428__delegate = function (args){
var ret__320401 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__320400),args);
var fs__320402 = cljs.core.next.call(null,fs__320400);

while(true){
if(cljs.core.truth_(fs__320402))
{{
var G__320429 = cljs.core.first.call(null,fs__320402).call(null,ret__320401);
var G__320430 = cljs.core.next.call(null,fs__320402);
ret__320401 = G__320429;
fs__320402 = G__320430;
continue;
}
} else
{return ret__320401;
}
break;
}
};
var G__320428 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__320428__delegate.call(this, args);
};
G__320428.cljs$lang$maxFixedArity = 0;
G__320428.cljs$lang$applyTo = (function (arglist__320431){
var args = cljs.core.seq( arglist__320431 );;
return G__320428__delegate.call(this, args);
});
return G__320428;
})()
;
};
var G__320427 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320427__delegate.call(this, f1, f2, f3, fs);
};
G__320427.cljs$lang$maxFixedArity = 3;
G__320427.cljs$lang$applyTo = (function (arglist__320432){
var f1 = cljs.core.first(arglist__320432);
var f2 = cljs.core.first(cljs.core.next(arglist__320432));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320432)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320432)));
return G__320427__delegate.call(this, f1, f2, f3, fs);
});
return G__320427;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__320403.call(this);
case  1 :
return comp__320404.call(this,f1);
case  2 :
return comp__320405.call(this,f1,f2);
case  3 :
return comp__320406.call(this,f1,f2,f3);
default:
return comp__320407.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__320407.cljs$lang$applyTo;
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
var partial__320433 = (function (f,arg1){
return (function() { 
var G__320438__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__320438 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__320438__delegate.call(this, args);
};
G__320438.cljs$lang$maxFixedArity = 0;
G__320438.cljs$lang$applyTo = (function (arglist__320439){
var args = cljs.core.seq( arglist__320439 );;
return G__320438__delegate.call(this, args);
});
return G__320438;
})()
;
});
var partial__320434 = (function (f,arg1,arg2){
return (function() { 
var G__320440__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__320440 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__320440__delegate.call(this, args);
};
G__320440.cljs$lang$maxFixedArity = 0;
G__320440.cljs$lang$applyTo = (function (arglist__320441){
var args = cljs.core.seq( arglist__320441 );;
return G__320440__delegate.call(this, args);
});
return G__320440;
})()
;
});
var partial__320435 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__320442__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__320442 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__320442__delegate.call(this, args);
};
G__320442.cljs$lang$maxFixedArity = 0;
G__320442.cljs$lang$applyTo = (function (arglist__320443){
var args = cljs.core.seq( arglist__320443 );;
return G__320442__delegate.call(this, args);
});
return G__320442;
})()
;
});
var partial__320436 = (function() { 
var G__320444__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__320445__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__320445 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__320445__delegate.call(this, args);
};
G__320445.cljs$lang$maxFixedArity = 0;
G__320445.cljs$lang$applyTo = (function (arglist__320446){
var args = cljs.core.seq( arglist__320446 );;
return G__320445__delegate.call(this, args);
});
return G__320445;
})()
;
};
var G__320444 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__320444__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__320444.cljs$lang$maxFixedArity = 4;
G__320444.cljs$lang$applyTo = (function (arglist__320447){
var f = cljs.core.first(arglist__320447);
var arg1 = cljs.core.first(cljs.core.next(arglist__320447));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320447)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__320447))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__320447))));
return G__320444__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__320444;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__320433.call(this,f,arg1);
case  3 :
return partial__320434.call(this,f,arg1,arg2);
case  4 :
return partial__320435.call(this,f,arg1,arg2,arg3);
default:
return partial__320436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__320436.cljs$lang$applyTo;
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
var fnil__320448 = (function (f,x){
return (function() {
var G__320452 = null;
var G__320452__320453 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__320452__320454 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__320452__320455 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__320452__320456 = (function() { 
var G__320458__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__320458 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320458__delegate.call(this, a, b, c, ds);
};
G__320458.cljs$lang$maxFixedArity = 3;
G__320458.cljs$lang$applyTo = (function (arglist__320459){
var a = cljs.core.first(arglist__320459);
var b = cljs.core.first(cljs.core.next(arglist__320459));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320459)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320459)));
return G__320458__delegate.call(this, a, b, c, ds);
});
return G__320458;
})()
;
G__320452 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__320452__320453.call(this,a);
case  2 :
return G__320452__320454.call(this,a,b);
case  3 :
return G__320452__320455.call(this,a,b,c);
default:
return G__320452__320456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__320452.cljs$lang$maxFixedArity = 3;
G__320452.cljs$lang$applyTo = G__320452__320456.cljs$lang$applyTo;
return G__320452;
})()
});
var fnil__320449 = (function (f,x,y){
return (function() {
var G__320460 = null;
var G__320460__320461 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__320460__320462 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__320460__320463 = (function() { 
var G__320465__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__320465 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320465__delegate.call(this, a, b, c, ds);
};
G__320465.cljs$lang$maxFixedArity = 3;
G__320465.cljs$lang$applyTo = (function (arglist__320466){
var a = cljs.core.first(arglist__320466);
var b = cljs.core.first(cljs.core.next(arglist__320466));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320466)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320466)));
return G__320465__delegate.call(this, a, b, c, ds);
});
return G__320465;
})()
;
G__320460 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__320460__320461.call(this,a,b);
case  3 :
return G__320460__320462.call(this,a,b,c);
default:
return G__320460__320463.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__320460.cljs$lang$maxFixedArity = 3;
G__320460.cljs$lang$applyTo = G__320460__320463.cljs$lang$applyTo;
return G__320460;
})()
});
var fnil__320450 = (function (f,x,y,z){
return (function() {
var G__320467 = null;
var G__320467__320468 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__320467__320469 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__320467__320470 = (function() { 
var G__320472__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__320472 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320472__delegate.call(this, a, b, c, ds);
};
G__320472.cljs$lang$maxFixedArity = 3;
G__320472.cljs$lang$applyTo = (function (arglist__320473){
var a = cljs.core.first(arglist__320473);
var b = cljs.core.first(cljs.core.next(arglist__320473));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320473)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320473)));
return G__320472__delegate.call(this, a, b, c, ds);
});
return G__320472;
})()
;
G__320467 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__320467__320468.call(this,a,b);
case  3 :
return G__320467__320469.call(this,a,b,c);
default:
return G__320467__320470.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__320467.cljs$lang$maxFixedArity = 3;
G__320467.cljs$lang$applyTo = G__320467__320470.cljs$lang$applyTo;
return G__320467;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__320448.call(this,f,x);
case  3 :
return fnil__320449.call(this,f,x,y);
case  4 :
return fnil__320450.call(this,f,x,y,z);
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
var mapi__320476 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____320474 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____320474))
{var s__320475 = temp__3698__auto____320474;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__320475)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__320475)));
} else
{return null;
}
})));
});

return mapi__320476.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____320477 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____320477))
{var s__320478 = temp__3698__auto____320477;

var x__320479 = f.call(null,cljs.core.first.call(null,s__320478));

if(cljs.core.truth_((x__320479 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__320478));
} else
{return cljs.core.cons.call(null,x__320479,keep.call(null,f,cljs.core.rest.call(null,s__320478)));
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
var keepi__320489 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____320486 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____320486))
{var s__320487 = temp__3698__auto____320486;

var x__320488 = f.call(null,idx,cljs.core.first.call(null,s__320487));

if(cljs.core.truth_((x__320488 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__320487));
} else
{return cljs.core.cons.call(null,x__320488,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__320487)));
}
} else
{return null;
}
})));
});

return keepi__320489.call(null,0,coll);
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
var every_pred__320534 = (function (p){
return (function() {
var ep1 = null;
var ep1__320539 = (function (){
return true;
});
var ep1__320540 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__320541 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____320496 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____320496))
{return p.call(null,y);
} else
{return and__3546__auto____320496;
}
})());
});
var ep1__320542 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____320497 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____320497))
{var and__3546__auto____320498 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____320498))
{return p.call(null,z);
} else
{return and__3546__auto____320498;
}
} else
{return and__3546__auto____320497;
}
})());
});
var ep1__320543 = (function() { 
var G__320545__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____320499 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____320499))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____320499;
}
})());
};
var G__320545 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320545__delegate.call(this, x, y, z, args);
};
G__320545.cljs$lang$maxFixedArity = 3;
G__320545.cljs$lang$applyTo = (function (arglist__320546){
var x = cljs.core.first(arglist__320546);
var y = cljs.core.first(cljs.core.next(arglist__320546));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320546)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320546)));
return G__320545__delegate.call(this, x, y, z, args);
});
return G__320545;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__320539.call(this);
case  1 :
return ep1__320540.call(this,x);
case  2 :
return ep1__320541.call(this,x,y);
case  3 :
return ep1__320542.call(this,x,y,z);
default:
return ep1__320543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__320543.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__320535 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__320547 = (function (){
return true;
});
var ep2__320548 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____320500 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____320500))
{return p2.call(null,x);
} else
{return and__3546__auto____320500;
}
})());
});
var ep2__320549 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____320501 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____320501))
{var and__3546__auto____320502 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____320502))
{var and__3546__auto____320503 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____320503))
{return p2.call(null,y);
} else
{return and__3546__auto____320503;
}
} else
{return and__3546__auto____320502;
}
} else
{return and__3546__auto____320501;
}
})());
});
var ep2__320550 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____320504 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____320504))
{var and__3546__auto____320505 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____320505))
{var and__3546__auto____320506 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____320506))
{var and__3546__auto____320507 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____320507))
{var and__3546__auto____320508 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____320508))
{return p2.call(null,z);
} else
{return and__3546__auto____320508;
}
} else
{return and__3546__auto____320507;
}
} else
{return and__3546__auto____320506;
}
} else
{return and__3546__auto____320505;
}
} else
{return and__3546__auto____320504;
}
})());
});
var ep2__320551 = (function() { 
var G__320553__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____320509 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____320509))
{return cljs.core.every_QMARK_.call(null,(function (p1__320480_SHARP_){
var and__3546__auto____320510 = p1.call(null,p1__320480_SHARP_);

if(cljs.core.truth_(and__3546__auto____320510))
{return p2.call(null,p1__320480_SHARP_);
} else
{return and__3546__auto____320510;
}
}),args);
} else
{return and__3546__auto____320509;
}
})());
};
var G__320553 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320553__delegate.call(this, x, y, z, args);
};
G__320553.cljs$lang$maxFixedArity = 3;
G__320553.cljs$lang$applyTo = (function (arglist__320554){
var x = cljs.core.first(arglist__320554);
var y = cljs.core.first(cljs.core.next(arglist__320554));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320554)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320554)));
return G__320553__delegate.call(this, x, y, z, args);
});
return G__320553;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__320547.call(this);
case  1 :
return ep2__320548.call(this,x);
case  2 :
return ep2__320549.call(this,x,y);
case  3 :
return ep2__320550.call(this,x,y,z);
default:
return ep2__320551.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__320551.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__320536 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__320555 = (function (){
return true;
});
var ep3__320556 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____320511 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____320511))
{var and__3546__auto____320512 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____320512))
{return p3.call(null,x);
} else
{return and__3546__auto____320512;
}
} else
{return and__3546__auto____320511;
}
})());
});
var ep3__320557 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____320513 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____320513))
{var and__3546__auto____320514 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____320514))
{var and__3546__auto____320515 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____320515))
{var and__3546__auto____320516 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____320516))
{var and__3546__auto____320517 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____320517))
{return p3.call(null,y);
} else
{return and__3546__auto____320517;
}
} else
{return and__3546__auto____320516;
}
} else
{return and__3546__auto____320515;
}
} else
{return and__3546__auto____320514;
}
} else
{return and__3546__auto____320513;
}
})());
});
var ep3__320558 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____320518 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____320518))
{var and__3546__auto____320519 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____320519))
{var and__3546__auto____320520 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____320520))
{var and__3546__auto____320521 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____320521))
{var and__3546__auto____320522 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____320522))
{var and__3546__auto____320523 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____320523))
{var and__3546__auto____320524 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____320524))
{var and__3546__auto____320525 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____320525))
{return p3.call(null,z);
} else
{return and__3546__auto____320525;
}
} else
{return and__3546__auto____320524;
}
} else
{return and__3546__auto____320523;
}
} else
{return and__3546__auto____320522;
}
} else
{return and__3546__auto____320521;
}
} else
{return and__3546__auto____320520;
}
} else
{return and__3546__auto____320519;
}
} else
{return and__3546__auto____320518;
}
})());
});
var ep3__320559 = (function() { 
var G__320561__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____320526 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____320526))
{return cljs.core.every_QMARK_.call(null,(function (p1__320481_SHARP_){
var and__3546__auto____320527 = p1.call(null,p1__320481_SHARP_);

if(cljs.core.truth_(and__3546__auto____320527))
{var and__3546__auto____320528 = p2.call(null,p1__320481_SHARP_);

if(cljs.core.truth_(and__3546__auto____320528))
{return p3.call(null,p1__320481_SHARP_);
} else
{return and__3546__auto____320528;
}
} else
{return and__3546__auto____320527;
}
}),args);
} else
{return and__3546__auto____320526;
}
})());
};
var G__320561 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320561__delegate.call(this, x, y, z, args);
};
G__320561.cljs$lang$maxFixedArity = 3;
G__320561.cljs$lang$applyTo = (function (arglist__320562){
var x = cljs.core.first(arglist__320562);
var y = cljs.core.first(cljs.core.next(arglist__320562));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320562)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320562)));
return G__320561__delegate.call(this, x, y, z, args);
});
return G__320561;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__320555.call(this);
case  1 :
return ep3__320556.call(this,x);
case  2 :
return ep3__320557.call(this,x,y);
case  3 :
return ep3__320558.call(this,x,y,z);
default:
return ep3__320559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__320559.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__320537 = (function() { 
var G__320563__delegate = function (p1,p2,p3,ps){
var ps__320529 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__320564 = (function (){
return true;
});
var epn__320565 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__320482_SHARP_){
return p1__320482_SHARP_.call(null,x);
}),ps__320529);
});
var epn__320566 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__320483_SHARP_){
var and__3546__auto____320530 = p1__320483_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____320530))
{return p1__320483_SHARP_.call(null,y);
} else
{return and__3546__auto____320530;
}
}),ps__320529);
});
var epn__320567 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__320484_SHARP_){
var and__3546__auto____320531 = p1__320484_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____320531))
{var and__3546__auto____320532 = p1__320484_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____320532))
{return p1__320484_SHARP_.call(null,z);
} else
{return and__3546__auto____320532;
}
} else
{return and__3546__auto____320531;
}
}),ps__320529);
});
var epn__320568 = (function() { 
var G__320570__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____320533 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____320533))
{return cljs.core.every_QMARK_.call(null,(function (p1__320485_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__320485_SHARP_,args);
}),ps__320529);
} else
{return and__3546__auto____320533;
}
})());
};
var G__320570 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320570__delegate.call(this, x, y, z, args);
};
G__320570.cljs$lang$maxFixedArity = 3;
G__320570.cljs$lang$applyTo = (function (arglist__320571){
var x = cljs.core.first(arglist__320571);
var y = cljs.core.first(cljs.core.next(arglist__320571));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320571)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320571)));
return G__320570__delegate.call(this, x, y, z, args);
});
return G__320570;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__320564.call(this);
case  1 :
return epn__320565.call(this,x);
case  2 :
return epn__320566.call(this,x,y);
case  3 :
return epn__320567.call(this,x,y,z);
default:
return epn__320568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__320568.cljs$lang$applyTo;
return epn;
})()
};
var G__320563 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320563__delegate.call(this, p1, p2, p3, ps);
};
G__320563.cljs$lang$maxFixedArity = 3;
G__320563.cljs$lang$applyTo = (function (arglist__320572){
var p1 = cljs.core.first(arglist__320572);
var p2 = cljs.core.first(cljs.core.next(arglist__320572));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320572)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320572)));
return G__320563__delegate.call(this, p1, p2, p3, ps);
});
return G__320563;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__320534.call(this,p1);
case  2 :
return every_pred__320535.call(this,p1,p2);
case  3 :
return every_pred__320536.call(this,p1,p2,p3);
default:
return every_pred__320537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__320537.cljs$lang$applyTo;
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
var some_fn__320612 = (function (p){
return (function() {
var sp1 = null;
var sp1__320617 = (function (){
return null;
});
var sp1__320618 = (function (x){
return p.call(null,x);
});
var sp1__320619 = (function (x,y){
var or__3548__auto____320574 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____320574))
{return or__3548__auto____320574;
} else
{return p.call(null,y);
}
});
var sp1__320620 = (function (x,y,z){
var or__3548__auto____320575 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____320575))
{return or__3548__auto____320575;
} else
{var or__3548__auto____320576 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____320576))
{return or__3548__auto____320576;
} else
{return p.call(null,z);
}
}
});
var sp1__320621 = (function() { 
var G__320623__delegate = function (x,y,z,args){
var or__3548__auto____320577 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____320577))
{return or__3548__auto____320577;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__320623 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320623__delegate.call(this, x, y, z, args);
};
G__320623.cljs$lang$maxFixedArity = 3;
G__320623.cljs$lang$applyTo = (function (arglist__320624){
var x = cljs.core.first(arglist__320624);
var y = cljs.core.first(cljs.core.next(arglist__320624));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320624)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320624)));
return G__320623__delegate.call(this, x, y, z, args);
});
return G__320623;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__320617.call(this);
case  1 :
return sp1__320618.call(this,x);
case  2 :
return sp1__320619.call(this,x,y);
case  3 :
return sp1__320620.call(this,x,y,z);
default:
return sp1__320621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__320621.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__320613 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__320625 = (function (){
return null;
});
var sp2__320626 = (function (x){
var or__3548__auto____320578 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____320578))
{return or__3548__auto____320578;
} else
{return p2.call(null,x);
}
});
var sp2__320627 = (function (x,y){
var or__3548__auto____320579 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____320579))
{return or__3548__auto____320579;
} else
{var or__3548__auto____320580 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____320580))
{return or__3548__auto____320580;
} else
{var or__3548__auto____320581 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____320581))
{return or__3548__auto____320581;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__320628 = (function (x,y,z){
var or__3548__auto____320582 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____320582))
{return or__3548__auto____320582;
} else
{var or__3548__auto____320583 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____320583))
{return or__3548__auto____320583;
} else
{var or__3548__auto____320584 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____320584))
{return or__3548__auto____320584;
} else
{var or__3548__auto____320585 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____320585))
{return or__3548__auto____320585;
} else
{var or__3548__auto____320586 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____320586))
{return or__3548__auto____320586;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__320629 = (function() { 
var G__320631__delegate = function (x,y,z,args){
var or__3548__auto____320587 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____320587))
{return or__3548__auto____320587;
} else
{return cljs.core.some.call(null,(function (p1__320490_SHARP_){
var or__3548__auto____320588 = p1.call(null,p1__320490_SHARP_);

if(cljs.core.truth_(or__3548__auto____320588))
{return or__3548__auto____320588;
} else
{return p2.call(null,p1__320490_SHARP_);
}
}),args);
}
};
var G__320631 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320631__delegate.call(this, x, y, z, args);
};
G__320631.cljs$lang$maxFixedArity = 3;
G__320631.cljs$lang$applyTo = (function (arglist__320632){
var x = cljs.core.first(arglist__320632);
var y = cljs.core.first(cljs.core.next(arglist__320632));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320632)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320632)));
return G__320631__delegate.call(this, x, y, z, args);
});
return G__320631;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__320625.call(this);
case  1 :
return sp2__320626.call(this,x);
case  2 :
return sp2__320627.call(this,x,y);
case  3 :
return sp2__320628.call(this,x,y,z);
default:
return sp2__320629.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__320629.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__320614 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__320633 = (function (){
return null;
});
var sp3__320634 = (function (x){
var or__3548__auto____320589 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____320589))
{return or__3548__auto____320589;
} else
{var or__3548__auto____320590 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____320590))
{return or__3548__auto____320590;
} else
{return p3.call(null,x);
}
}
});
var sp3__320635 = (function (x,y){
var or__3548__auto____320591 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____320591))
{return or__3548__auto____320591;
} else
{var or__3548__auto____320592 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____320592))
{return or__3548__auto____320592;
} else
{var or__3548__auto____320593 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____320593))
{return or__3548__auto____320593;
} else
{var or__3548__auto____320594 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____320594))
{return or__3548__auto____320594;
} else
{var or__3548__auto____320595 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____320595))
{return or__3548__auto____320595;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__320636 = (function (x,y,z){
var or__3548__auto____320596 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____320596))
{return or__3548__auto____320596;
} else
{var or__3548__auto____320597 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____320597))
{return or__3548__auto____320597;
} else
{var or__3548__auto____320598 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____320598))
{return or__3548__auto____320598;
} else
{var or__3548__auto____320599 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____320599))
{return or__3548__auto____320599;
} else
{var or__3548__auto____320600 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____320600))
{return or__3548__auto____320600;
} else
{var or__3548__auto____320601 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____320601))
{return or__3548__auto____320601;
} else
{var or__3548__auto____320602 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____320602))
{return or__3548__auto____320602;
} else
{var or__3548__auto____320603 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____320603))
{return or__3548__auto____320603;
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
var sp3__320637 = (function() { 
var G__320639__delegate = function (x,y,z,args){
var or__3548__auto____320604 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____320604))
{return or__3548__auto____320604;
} else
{return cljs.core.some.call(null,(function (p1__320491_SHARP_){
var or__3548__auto____320605 = p1.call(null,p1__320491_SHARP_);

if(cljs.core.truth_(or__3548__auto____320605))
{return or__3548__auto____320605;
} else
{var or__3548__auto____320606 = p2.call(null,p1__320491_SHARP_);

if(cljs.core.truth_(or__3548__auto____320606))
{return or__3548__auto____320606;
} else
{return p3.call(null,p1__320491_SHARP_);
}
}
}),args);
}
};
var G__320639 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320639__delegate.call(this, x, y, z, args);
};
G__320639.cljs$lang$maxFixedArity = 3;
G__320639.cljs$lang$applyTo = (function (arglist__320640){
var x = cljs.core.first(arglist__320640);
var y = cljs.core.first(cljs.core.next(arglist__320640));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320640)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320640)));
return G__320639__delegate.call(this, x, y, z, args);
});
return G__320639;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__320633.call(this);
case  1 :
return sp3__320634.call(this,x);
case  2 :
return sp3__320635.call(this,x,y);
case  3 :
return sp3__320636.call(this,x,y,z);
default:
return sp3__320637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__320637.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__320615 = (function() { 
var G__320641__delegate = function (p1,p2,p3,ps){
var ps__320607 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__320642 = (function (){
return null;
});
var spn__320643 = (function (x){
return cljs.core.some.call(null,(function (p1__320492_SHARP_){
return p1__320492_SHARP_.call(null,x);
}),ps__320607);
});
var spn__320644 = (function (x,y){
return cljs.core.some.call(null,(function (p1__320493_SHARP_){
var or__3548__auto____320608 = p1__320493_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____320608))
{return or__3548__auto____320608;
} else
{return p1__320493_SHARP_.call(null,y);
}
}),ps__320607);
});
var spn__320645 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__320494_SHARP_){
var or__3548__auto____320609 = p1__320494_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____320609))
{return or__3548__auto____320609;
} else
{var or__3548__auto____320610 = p1__320494_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____320610))
{return or__3548__auto____320610;
} else
{return p1__320494_SHARP_.call(null,z);
}
}
}),ps__320607);
});
var spn__320646 = (function() { 
var G__320648__delegate = function (x,y,z,args){
var or__3548__auto____320611 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____320611))
{return or__3548__auto____320611;
} else
{return cljs.core.some.call(null,(function (p1__320495_SHARP_){
return cljs.core.some.call(null,p1__320495_SHARP_,args);
}),ps__320607);
}
};
var G__320648 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320648__delegate.call(this, x, y, z, args);
};
G__320648.cljs$lang$maxFixedArity = 3;
G__320648.cljs$lang$applyTo = (function (arglist__320649){
var x = cljs.core.first(arglist__320649);
var y = cljs.core.first(cljs.core.next(arglist__320649));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320649)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320649)));
return G__320648__delegate.call(this, x, y, z, args);
});
return G__320648;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__320642.call(this);
case  1 :
return spn__320643.call(this,x);
case  2 :
return spn__320644.call(this,x,y);
case  3 :
return spn__320645.call(this,x,y,z);
default:
return spn__320646.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__320646.cljs$lang$applyTo;
return spn;
})()
};
var G__320641 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__320641__delegate.call(this, p1, p2, p3, ps);
};
G__320641.cljs$lang$maxFixedArity = 3;
G__320641.cljs$lang$applyTo = (function (arglist__320650){
var p1 = cljs.core.first(arglist__320650);
var p2 = cljs.core.first(cljs.core.next(arglist__320650));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320650)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320650)));
return G__320641__delegate.call(this, p1, p2, p3, ps);
});
return G__320641;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__320612.call(this,p1);
case  2 :
return some_fn__320613.call(this,p1,p2);
case  3 :
return some_fn__320614.call(this,p1,p2,p3);
default:
return some_fn__320615.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__320615.cljs$lang$applyTo;
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
var map__320663 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____320651 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____320651))
{var s__320652 = temp__3698__auto____320651;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__320652)),map.call(null,f,cljs.core.rest.call(null,s__320652)));
} else
{return null;
}
})));
});
var map__320664 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__320653 = cljs.core.seq.call(null,c1);
var s2__320654 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____320655 = s1__320653;

if(cljs.core.truth_(and__3546__auto____320655))
{return s2__320654;
} else
{return and__3546__auto____320655;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__320653),cljs.core.first.call(null,s2__320654)),map.call(null,f,cljs.core.rest.call(null,s1__320653),cljs.core.rest.call(null,s2__320654)));
} else
{return null;
}
})));
});
var map__320665 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__320656 = cljs.core.seq.call(null,c1);
var s2__320657 = cljs.core.seq.call(null,c2);
var s3__320658 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____320659 = s1__320656;

if(cljs.core.truth_(and__3546__auto____320659))
{var and__3546__auto____320660 = s2__320657;

if(cljs.core.truth_(and__3546__auto____320660))
{return s3__320658;
} else
{return and__3546__auto____320660;
}
} else
{return and__3546__auto____320659;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__320656),cljs.core.first.call(null,s2__320657),cljs.core.first.call(null,s3__320658)),map.call(null,f,cljs.core.rest.call(null,s1__320656),cljs.core.rest.call(null,s2__320657),cljs.core.rest.call(null,s3__320658)));
} else
{return null;
}
})));
});
var map__320666 = (function() { 
var G__320668__delegate = function (f,c1,c2,c3,colls){
var step__320662 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__320661 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__320661)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__320661),step.call(null,map.call(null,cljs.core.rest,ss__320661)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__320573_SHARP_){
return cljs.core.apply.call(null,f,p1__320573_SHARP_);
}),step__320662.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__320668 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__320668__delegate.call(this, f, c1, c2, c3, colls);
};
G__320668.cljs$lang$maxFixedArity = 4;
G__320668.cljs$lang$applyTo = (function (arglist__320669){
var f = cljs.core.first(arglist__320669);
var c1 = cljs.core.first(cljs.core.next(arglist__320669));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320669)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__320669))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__320669))));
return G__320668__delegate.call(this, f, c1, c2, c3, colls);
});
return G__320668;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__320663.call(this,f,c1);
case  3 :
return map__320664.call(this,f,c1,c2);
case  4 :
return map__320665.call(this,f,c1,c2,c3);
default:
return map__320666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__320666.cljs$lang$applyTo;
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
{var temp__3698__auto____320670 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____320670))
{var s__320671 = temp__3698__auto____320670;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__320671),take.call(null,(n - 1),cljs.core.rest.call(null,s__320671)));
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
var step__320674 = (function (n,coll){
while(true){
var s__320672 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____320673 = (n > 0);

if(cljs.core.truth_(and__3546__auto____320673))
{return s__320672;
} else
{return and__3546__auto____320673;
}
})()))
{{
var G__320675 = (n - 1);
var G__320676 = cljs.core.rest.call(null,s__320672);
n = G__320675;
coll = G__320676;
continue;
}
} else
{return s__320672;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__320674.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__320677 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__320678 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__320677.call(this,n);
case  2 :
return drop_last__320678.call(this,n,s);
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
var s__320680 = cljs.core.seq.call(null,coll);
var lead__320681 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__320681))
{{
var G__320682 = cljs.core.next.call(null,s__320680);
var G__320683 = cljs.core.next.call(null,lead__320681);
s__320680 = G__320682;
lead__320681 = G__320683;
continue;
}
} else
{return s__320680;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__320686 = (function (pred,coll){
while(true){
var s__320684 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____320685 = s__320684;

if(cljs.core.truth_(and__3546__auto____320685))
{return pred.call(null,cljs.core.first.call(null,s__320684));
} else
{return and__3546__auto____320685;
}
})()))
{{
var G__320687 = pred;
var G__320688 = cljs.core.rest.call(null,s__320684);
pred = G__320687;
coll = G__320688;
continue;
}
} else
{return s__320684;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__320686.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____320689 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____320689))
{var s__320690 = temp__3698__auto____320689;

return cljs.core.concat.call(null,s__320690,cycle.call(null,s__320690));
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
var repeat__320691 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__320692 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__320691.call(this,n);
case  2 :
return repeat__320692.call(this,n,x);
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
var repeatedly__320694 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__320695 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__320694.call(this,n);
case  2 :
return repeatedly__320695.call(this,n,f);
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
var interleave__320701 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__320697 = cljs.core.seq.call(null,c1);
var s2__320698 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____320699 = s1__320697;

if(cljs.core.truth_(and__3546__auto____320699))
{return s2__320698;
} else
{return and__3546__auto____320699;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__320697),cljs.core.cons.call(null,cljs.core.first.call(null,s2__320698),interleave.call(null,cljs.core.rest.call(null,s1__320697),cljs.core.rest.call(null,s2__320698))));
} else
{return null;
}
})));
});
var interleave__320702 = (function() { 
var G__320704__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__320700 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__320700)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__320700),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__320700)));
} else
{return null;
}
})));
};
var G__320704 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320704__delegate.call(this, c1, c2, colls);
};
G__320704.cljs$lang$maxFixedArity = 2;
G__320704.cljs$lang$applyTo = (function (arglist__320705){
var c1 = cljs.core.first(arglist__320705);
var c2 = cljs.core.first(cljs.core.next(arglist__320705));
var colls = cljs.core.rest(cljs.core.next(arglist__320705));
return G__320704__delegate.call(this, c1, c2, colls);
});
return G__320704;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__320701.call(this,c1,c2);
default:
return interleave__320702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__320702.cljs$lang$applyTo;
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
var cat__320708 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____320706 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____320706))
{var coll__320707 = temp__3695__auto____320706;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__320707),cat.call(null,cljs.core.rest.call(null,coll__320707),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__320708.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__320709 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__320710 = (function() { 
var G__320712__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__320712 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__320712__delegate.call(this, f, coll, colls);
};
G__320712.cljs$lang$maxFixedArity = 2;
G__320712.cljs$lang$applyTo = (function (arglist__320713){
var f = cljs.core.first(arglist__320713);
var coll = cljs.core.first(cljs.core.next(arglist__320713));
var colls = cljs.core.rest(cljs.core.next(arglist__320713));
return G__320712__delegate.call(this, f, coll, colls);
});
return G__320712;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__320709.call(this,f,coll);
default:
return mapcat__320710.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__320710.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____320714 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____320714))
{var s__320715 = temp__3698__auto____320714;

var f__320716 = cljs.core.first.call(null,s__320715);
var r__320717 = cljs.core.rest.call(null,s__320715);

if(cljs.core.truth_(pred.call(null,f__320716)))
{return cljs.core.cons.call(null,f__320716,filter.call(null,pred,r__320717));
} else
{return filter.call(null,pred,r__320717);
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
var walk__320719 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__320719.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__320718_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__320718_SHARP_));
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
var partition__320726 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__320727 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____320720 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____320720))
{var s__320721 = temp__3698__auto____320720;

var p__320722 = cljs.core.take.call(null,n,s__320721);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__320722))))
{return cljs.core.cons.call(null,p__320722,partition.call(null,n,step,cljs.core.drop.call(null,step,s__320721)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__320728 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____320723 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____320723))
{var s__320724 = temp__3698__auto____320723;

var p__320725 = cljs.core.take.call(null,n,s__320724);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__320725))))
{return cljs.core.cons.call(null,p__320725,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__320724)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__320725,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__320726.call(this,n,step);
case  3 :
return partition__320727.call(this,n,step,pad);
case  4 :
return partition__320728.call(this,n,step,pad,coll);
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
var get_in__320734 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__320735 = (function (m,ks,not_found){
var sentinel__320730 = cljs.core.lookup_sentinel;
var m__320731 = m;
var ks__320732 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__320732))
{var m__320733 = cljs.core.get.call(null,m__320731,cljs.core.first.call(null,ks__320732),sentinel__320730);

if(cljs.core.truth_((sentinel__320730 === m__320733)))
{return not_found;
} else
{{
var G__320737 = sentinel__320730;
var G__320738 = m__320733;
var G__320739 = cljs.core.next.call(null,ks__320732);
sentinel__320730 = G__320737;
m__320731 = G__320738;
ks__320732 = G__320739;
continue;
}
}
} else
{return m__320731;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__320734.call(this,m,ks);
case  3 :
return get_in__320735.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__320740,v){
var vec__320741__320742 = p__320740;
var k__320743 = cljs.core.nth.call(null,vec__320741__320742,0,null);
var ks__320744 = cljs.core.nthnext.call(null,vec__320741__320742,1);

if(cljs.core.truth_(ks__320744))
{return cljs.core.assoc.call(null,m,k__320743,assoc_in.call(null,cljs.core.get.call(null,m,k__320743),ks__320744,v));
} else
{return cljs.core.assoc.call(null,m,k__320743,v);
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
var update_in__delegate = function (m,p__320745,f,args){
var vec__320746__320747 = p__320745;
var k__320748 = cljs.core.nth.call(null,vec__320746__320747,0,null);
var ks__320749 = cljs.core.nthnext.call(null,vec__320746__320747,1);

if(cljs.core.truth_(ks__320749))
{return cljs.core.assoc.call(null,m,k__320748,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__320748),ks__320749,f,args));
} else
{return cljs.core.assoc.call(null,m,k__320748,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__320748),args));
}
};
var update_in = function (m,p__320745,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__320745, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__320750){
var m = cljs.core.first(arglist__320750);
var p__320745 = cljs.core.first(cljs.core.next(arglist__320750));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__320750)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__320750)));
return update_in__delegate.call(this, m, p__320745, f, args);
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
var this__320751 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__320784 = null;
var G__320784__320785 = (function (coll,k){
var this__320752 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__320784__320786 = (function (coll,k,not_found){
var this__320753 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__320784 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__320784__320785.call(this,coll,k);
case  3 :
return G__320784__320786.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320784;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__320754 = this;
var new_array__320755 = cljs.core.aclone.call(null,this__320754.array);

(new_array__320755[k] = v);
return (new cljs.core.Vector(this__320754.meta,new_array__320755));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__320788 = null;
var G__320788__320789 = (function (tsym320756,k){
var this__320758 = this;
var tsym320756__320759 = this;

var coll__320760 = tsym320756__320759;

return cljs.core._lookup.call(null,coll__320760,k);
});
var G__320788__320790 = (function (tsym320757,k,not_found){
var this__320761 = this;
var tsym320757__320762 = this;

var coll__320763 = tsym320757__320762;

return cljs.core._lookup.call(null,coll__320763,k,not_found);
});
G__320788 = function(tsym320757,k,not_found){
switch(arguments.length){
case  2 :
return G__320788__320789.call(this,tsym320757,k);
case  3 :
return G__320788__320790.call(this,tsym320757,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320788;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__320764 = this;
var new_array__320765 = cljs.core.aclone.call(null,this__320764.array);

new_array__320765.push(o);
return (new cljs.core.Vector(this__320764.meta,new_array__320765));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__320792 = null;
var G__320792__320793 = (function (v,f){
var this__320766 = this;
return cljs.core.ci_reduce.call(null,this__320766.array,f);
});
var G__320792__320794 = (function (v,f,start){
var this__320767 = this;
return cljs.core.ci_reduce.call(null,this__320767.array,f,start);
});
G__320792 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__320792__320793.call(this,v,f);
case  3 :
return G__320792__320794.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320792;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__320768 = this;
if(cljs.core.truth_((this__320768.array.length > 0)))
{var vector_seq__320769 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__320768.array.length)))
{return cljs.core.cons.call(null,(this__320768.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__320769.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__320770 = this;
return this__320770.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__320771 = this;
var count__320772 = this__320771.array.length;

if(cljs.core.truth_((count__320772 > 0)))
{return (this__320771.array[(count__320772 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__320773 = this;
if(cljs.core.truth_((this__320773.array.length > 0)))
{var new_array__320774 = cljs.core.aclone.call(null,this__320773.array);

new_array__320774.pop();
return (new cljs.core.Vector(this__320773.meta,new_array__320774));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__320775 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__320776 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__320777 = this;
return (new cljs.core.Vector(meta,this__320777.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__320778 = this;
return this__320778.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__320796 = null;
var G__320796__320797 = (function (coll,n){
var this__320779 = this;
if(cljs.core.truth_((function (){var and__3546__auto____320780 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____320780))
{return (n < this__320779.array.length);
} else
{return and__3546__auto____320780;
}
})()))
{return (this__320779.array[n]);
} else
{return null;
}
});
var G__320796__320798 = (function (coll,n,not_found){
var this__320781 = this;
if(cljs.core.truth_((function (){var and__3546__auto____320782 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____320782))
{return (n < this__320781.array.length);
} else
{return and__3546__auto____320782;
}
})()))
{return (this__320781.array[n]);
} else
{return not_found;
}
});
G__320796 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__320796__320797.call(this,coll,n);
case  3 :
return G__320796__320798.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320796;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__320783 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__320783.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__320800 = pv.cnt;

if(cljs.core.truth_((cnt__320800 < 32)))
{return 0;
} else
{return (((cnt__320800 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__320801 = level;
var ret__320802 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__320801)))
{return ret__320802;
} else
{var embed__320803 = ret__320802;
var r__320804 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___320805 = (r__320804[0] = embed__320803);

{
var G__320806 = (ll__320801 - 5);
var G__320807 = r__320804;
ll__320801 = G__320806;
ret__320802 = G__320807;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__320808 = cljs.core.aclone.call(null,parent);
var subidx__320809 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__320808[subidx__320809] = tailnode);
return ret__320808;
} else
{var temp__3695__auto____320810 = (parent[subidx__320809]);

if(cljs.core.truth_(temp__3695__auto____320810))
{var child__320811 = temp__3695__auto____320810;

var node_to_insert__320812 = push_tail.call(null,pv,(level - 5),child__320811,tailnode);
var ___320813 = (ret__320808[subidx__320809] = node_to_insert__320812);

return ret__320808;
} else
{var node_to_insert__320814 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___320815 = (ret__320808[subidx__320809] = node_to_insert__320814);

return ret__320808;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____320816 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____320816))
{return (i < pv.cnt);
} else
{return and__3546__auto____320816;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__320817 = pv.root;
var level__320818 = pv.shift;

while(true){
if(cljs.core.truth_((level__320818 > 0)))
{{
var G__320819 = (node__320817[((i >> level__320818) & 31)]);
var G__320820 = (level__320818 - 5);
node__320817 = G__320819;
level__320818 = G__320820;
continue;
}
} else
{return node__320817;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__320821 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__320821[(i & 31)] = val);
return ret__320821;
} else
{var subidx__320822 = ((i >> level) & 31);
var ___320823 = (ret__320821[subidx__320822] = do_assoc.call(null,pv,(level - 5),(node[subidx__320822]),i,val));

return ret__320821;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__320824 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__320825 = pop_tail.call(null,pv,(level - 5),(node[subidx__320824]));

if(cljs.core.truth_((function (){var and__3546__auto____320826 = (new_child__320825 === null);

if(cljs.core.truth_(and__3546__auto____320826))
{return (subidx__320824 === 0);
} else
{return and__3546__auto____320826;
}
})()))
{return null;
} else
{var ret__320827 = cljs.core.aclone.call(null,node);
var ___320828 = (ret__320827[subidx__320824] = new_child__320825);

return ret__320827;
}
} else
{if(cljs.core.truth_((subidx__320824 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__320829 = cljs.core.aclone.call(null,node);
var ___320830 = (ret__320829[subidx__320824] = null);

return ret__320829;
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
var this__320831 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__320871 = null;
var G__320871__320872 = (function (coll,k){
var this__320832 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__320871__320873 = (function (coll,k,not_found){
var this__320833 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__320871 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__320871__320872.call(this,coll,k);
case  3 :
return G__320871__320873.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320871;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__320834 = this;
if(cljs.core.truth_((function (){var and__3546__auto____320835 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____320835))
{return (k < this__320834.cnt);
} else
{return and__3546__auto____320835;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__320836 = cljs.core.aclone.call(null,this__320834.tail);

(new_tail__320836[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__320834.meta,this__320834.cnt,this__320834.shift,this__320834.root,new_tail__320836));
} else
{return (new cljs.core.PersistentVector(this__320834.meta,this__320834.cnt,this__320834.shift,cljs.core.do_assoc.call(null,coll,this__320834.shift,this__320834.root,k,v),this__320834.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__320834.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__320834.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__320875 = null;
var G__320875__320876 = (function (tsym320837,k){
var this__320839 = this;
var tsym320837__320840 = this;

var coll__320841 = tsym320837__320840;

return cljs.core._lookup.call(null,coll__320841,k);
});
var G__320875__320877 = (function (tsym320838,k,not_found){
var this__320842 = this;
var tsym320838__320843 = this;

var coll__320844 = tsym320838__320843;

return cljs.core._lookup.call(null,coll__320844,k,not_found);
});
G__320875 = function(tsym320838,k,not_found){
switch(arguments.length){
case  2 :
return G__320875__320876.call(this,tsym320838,k);
case  3 :
return G__320875__320877.call(this,tsym320838,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320875;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__320845 = this;
if(cljs.core.truth_(((this__320845.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__320846 = cljs.core.aclone.call(null,this__320845.tail);

new_tail__320846.push(o);
return (new cljs.core.PersistentVector(this__320845.meta,(this__320845.cnt + 1),this__320845.shift,this__320845.root,new_tail__320846));
} else
{var root_overflow_QMARK___320847 = ((this__320845.cnt >> 5) > (1 << this__320845.shift));
var new_shift__320848 = (cljs.core.truth_(root_overflow_QMARK___320847)?(this__320845.shift + 5):this__320845.shift);
var new_root__320850 = (cljs.core.truth_(root_overflow_QMARK___320847)?(function (){var n_r__320849 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__320849[0] = this__320845.root);
(n_r__320849[1] = cljs.core.new_path.call(null,this__320845.shift,this__320845.tail));
return n_r__320849;
})():cljs.core.push_tail.call(null,coll,this__320845.shift,this__320845.root,this__320845.tail));

return (new cljs.core.PersistentVector(this__320845.meta,(this__320845.cnt + 1),new_shift__320848,new_root__320850,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__320879 = null;
var G__320879__320880 = (function (v,f){
var this__320851 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__320879__320881 = (function (v,f,start){
var this__320852 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__320879 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__320879__320880.call(this,v,f);
case  3 :
return G__320879__320881.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320879;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__320853 = this;
if(cljs.core.truth_((this__320853.cnt > 0)))
{var vector_seq__320854 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__320853.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__320854.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__320855 = this;
return this__320855.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__320856 = this;
if(cljs.core.truth_((this__320856.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__320856.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__320857 = this;
if(cljs.core.truth_((this__320857.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__320857.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__320857.meta);
} else
{if(cljs.core.truth_((1 < (this__320857.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__320857.meta,(this__320857.cnt - 1),this__320857.shift,this__320857.root,cljs.core.aclone.call(null,this__320857.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__320858 = cljs.core.array_for.call(null,coll,(this__320857.cnt - 2));
var nr__320859 = cljs.core.pop_tail.call(null,this__320857.shift,this__320857.root);
var new_root__320860 = (cljs.core.truth_((nr__320859 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__320859);
var cnt_1__320861 = (this__320857.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____320862 = (5 < this__320857.shift);

if(cljs.core.truth_(and__3546__auto____320862))
{return ((new_root__320860[1]) === null);
} else
{return and__3546__auto____320862;
}
})()))
{return (new cljs.core.PersistentVector(this__320857.meta,cnt_1__320861,(this__320857.shift - 5),(new_root__320860[0]),new_tail__320858));
} else
{return (new cljs.core.PersistentVector(this__320857.meta,cnt_1__320861,this__320857.shift,new_root__320860,new_tail__320858));
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
var this__320863 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__320864 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__320865 = this;
return (new cljs.core.PersistentVector(meta,this__320865.cnt,this__320865.shift,this__320865.root,this__320865.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__320866 = this;
return this__320866.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__320883 = null;
var G__320883__320884 = (function (coll,n){
var this__320867 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__320883__320885 = (function (coll,n,not_found){
var this__320868 = this;
if(cljs.core.truth_((function (){var and__3546__auto____320869 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____320869))
{return (n < this__320868.cnt);
} else
{return and__3546__auto____320869;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__320883 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__320883__320884.call(this,coll,n);
case  3 :
return G__320883__320885.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320883;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__320870 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__320870.meta);
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
vector.cljs$lang$applyTo = (function (arglist__320887){
var args = cljs.core.seq( arglist__320887 );;
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
var this__320888 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__320916 = null;
var G__320916__320917 = (function (coll,k){
var this__320889 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__320916__320918 = (function (coll,k,not_found){
var this__320890 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__320916 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__320916__320917.call(this,coll,k);
case  3 :
return G__320916__320918.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320916;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__320891 = this;
var v_pos__320892 = (this__320891.start + key);

return (new cljs.core.Subvec(this__320891.meta,cljs.core._assoc.call(null,this__320891.v,v_pos__320892,val),this__320891.start,((this__320891.end > (v_pos__320892 + 1)) ? this__320891.end : (v_pos__320892 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__320920 = null;
var G__320920__320921 = (function (tsym320893,k){
var this__320895 = this;
var tsym320893__320896 = this;

var coll__320897 = tsym320893__320896;

return cljs.core._lookup.call(null,coll__320897,k);
});
var G__320920__320922 = (function (tsym320894,k,not_found){
var this__320898 = this;
var tsym320894__320899 = this;

var coll__320900 = tsym320894__320899;

return cljs.core._lookup.call(null,coll__320900,k,not_found);
});
G__320920 = function(tsym320894,k,not_found){
switch(arguments.length){
case  2 :
return G__320920__320921.call(this,tsym320894,k);
case  3 :
return G__320920__320922.call(this,tsym320894,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320920;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__320901 = this;
return (new cljs.core.Subvec(this__320901.meta,cljs.core._assoc_n.call(null,this__320901.v,this__320901.end,o),this__320901.start,(this__320901.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__320924 = null;
var G__320924__320925 = (function (coll,f){
var this__320902 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__320924__320926 = (function (coll,f,start){
var this__320903 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__320924 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__320924__320925.call(this,coll,f);
case  3 :
return G__320924__320926.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320924;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__320904 = this;
var subvec_seq__320905 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__320904.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__320904.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__320905.call(null,this__320904.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__320906 = this;
return (this__320906.end - this__320906.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__320907 = this;
return cljs.core._nth.call(null,this__320907.v,(this__320907.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__320908 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__320908.start,this__320908.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__320908.meta,this__320908.v,this__320908.start,(this__320908.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__320909 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__320910 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__320911 = this;
return (new cljs.core.Subvec(meta,this__320911.v,this__320911.start,this__320911.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__320912 = this;
return this__320912.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__320928 = null;
var G__320928__320929 = (function (coll,n){
var this__320913 = this;
return cljs.core._nth.call(null,this__320913.v,(this__320913.start + n));
});
var G__320928__320930 = (function (coll,n,not_found){
var this__320914 = this;
return cljs.core._nth.call(null,this__320914.v,(this__320914.start + n),not_found);
});
G__320928 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__320928__320929.call(this,coll,n);
case  3 :
return G__320928__320930.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__320928;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__320915 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__320915.meta);
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
var subvec__320932 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__320933 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__320932.call(this,v,start);
case  3 :
return subvec__320933.call(this,v,start,end);
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
var this__320935 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__320936 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__320937 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__320938 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__320938.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__320939 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__320940 = this;
return cljs.core._first.call(null,this__320940.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__320941 = this;
var temp__3695__auto____320942 = cljs.core.next.call(null,this__320941.front);

if(cljs.core.truth_(temp__3695__auto____320942))
{var f1__320943 = temp__3695__auto____320942;

return (new cljs.core.PersistentQueueSeq(this__320941.meta,f1__320943,this__320941.rear));
} else
{if(cljs.core.truth_((this__320941.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__320941.meta,this__320941.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__320944 = this;
return this__320944.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__320945 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__320945.front,this__320945.rear));
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
var this__320946 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__320947 = this;
if(cljs.core.truth_(this__320947.front))
{return (new cljs.core.PersistentQueue(this__320947.meta,(this__320947.count + 1),this__320947.front,cljs.core.conj.call(null,(function (){var or__3548__auto____320948 = this__320947.rear;

if(cljs.core.truth_(or__3548__auto____320948))
{return or__3548__auto____320948;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__320947.meta,(this__320947.count + 1),cljs.core.conj.call(null,this__320947.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__320949 = this;
var rear__320950 = cljs.core.seq.call(null,this__320949.rear);

if(cljs.core.truth_((function (){var or__3548__auto____320951 = this__320949.front;

if(cljs.core.truth_(or__3548__auto____320951))
{return or__3548__auto____320951;
} else
{return rear__320950;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__320949.front,cljs.core.seq.call(null,rear__320950)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__320952 = this;
return this__320952.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__320953 = this;
return cljs.core._first.call(null,this__320953.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__320954 = this;
if(cljs.core.truth_(this__320954.front))
{var temp__3695__auto____320955 = cljs.core.next.call(null,this__320954.front);

if(cljs.core.truth_(temp__3695__auto____320955))
{var f1__320956 = temp__3695__auto____320955;

return (new cljs.core.PersistentQueue(this__320954.meta,(this__320954.count - 1),f1__320956,this__320954.rear));
} else
{return (new cljs.core.PersistentQueue(this__320954.meta,(this__320954.count - 1),cljs.core.seq.call(null,this__320954.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__320957 = this;
return cljs.core.first.call(null,this__320957.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__320958 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__320959 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__320960 = this;
return (new cljs.core.PersistentQueue(meta,this__320960.count,this__320960.front,this__320960.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__320961 = this;
return this__320961.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__320962 = this;
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
var this__320963 = this;
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
var len__320964 = array.length;

var i__320965 = 0;

while(true){
if(cljs.core.truth_((i__320965 < len__320964)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__320965]))))
{return i__320965;
} else
{{
var G__320966 = (i__320965 + incr);
i__320965 = G__320966;
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
var obj_map_contains_key_QMARK___320968 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___320969 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____320967 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____320967))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____320967;
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
return obj_map_contains_key_QMARK___320968.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___320969.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__320972 = cljs.core.hash.call(null,a);
var b__320973 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__320972 < b__320973)))
{return -1;
} else
{if(cljs.core.truth_((a__320972 > b__320973)))
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
var this__320974 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__321001 = null;
var G__321001__321002 = (function (coll,k){
var this__320975 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__321001__321003 = (function (coll,k,not_found){
var this__320976 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__320976.strobj,(this__320976.strobj[k]),not_found);
});
G__321001 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__321001__321002.call(this,coll,k);
case  3 :
return G__321001__321003.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__321001;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__320977 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__320978 = goog.object.clone.call(null,this__320977.strobj);
var overwrite_QMARK___320979 = new_strobj__320978.hasOwnProperty(k);

(new_strobj__320978[k] = v);
if(cljs.core.truth_(overwrite_QMARK___320979))
{return (new cljs.core.ObjMap(this__320977.meta,this__320977.keys,new_strobj__320978));
} else
{var new_keys__320980 = cljs.core.aclone.call(null,this__320977.keys);

new_keys__320980.push(k);
return (new cljs.core.ObjMap(this__320977.meta,new_keys__320980,new_strobj__320978));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__320977.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__320981 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__320981.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__321005 = null;
var G__321005__321006 = (function (tsym320982,k){
var this__320984 = this;
var tsym320982__320985 = this;

var coll__320986 = tsym320982__320985;

return cljs.core._lookup.call(null,coll__320986,k);
});
var G__321005__321007 = (function (tsym320983,k,not_found){
var this__320987 = this;
var tsym320983__320988 = this;

var coll__320989 = tsym320983__320988;

return cljs.core._lookup.call(null,coll__320989,k,not_found);
});
G__321005 = function(tsym320983,k,not_found){
switch(arguments.length){
case  2 :
return G__321005__321006.call(this,tsym320983,k);
case  3 :
return G__321005__321007.call(this,tsym320983,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__321005;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__320990 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__320991 = this;
if(cljs.core.truth_((this__320991.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__320971_SHARP_){
return cljs.core.vector.call(null,p1__320971_SHARP_,(this__320991.strobj[p1__320971_SHARP_]));
}),this__320991.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__320992 = this;
return this__320992.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__320993 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__320994 = this;
return (new cljs.core.ObjMap(meta,this__320994.keys,this__320994.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__320995 = this;
return this__320995.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__320996 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__320996.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__320997 = this;
if(cljs.core.truth_((function (){var and__3546__auto____320998 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____320998))
{return this__320997.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____320998;
}
})()))
{var new_keys__320999 = cljs.core.aclone.call(null,this__320997.keys);
var new_strobj__321000 = goog.object.clone.call(null,this__320997.strobj);

new_keys__320999.splice(cljs.core.scan_array.call(null,1,k,new_keys__320999),1);
cljs.core.js_delete.call(null,new_strobj__321000,k);
return (new cljs.core.ObjMap(this__320997.meta,new_keys__320999,new_strobj__321000));
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
var this__321010 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__321048 = null;
var G__321048__321049 = (function (coll,k){
var this__321011 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__321048__321050 = (function (coll,k,not_found){
var this__321012 = this;
var bucket__321013 = (this__321012.hashobj[cljs.core.hash.call(null,k)]);
var i__321014 = (cljs.core.truth_(bucket__321013)?cljs.core.scan_array.call(null,2,k,bucket__321013):null);

if(cljs.core.truth_(i__321014))
{return (bucket__321013[(i__321014 + 1)]);
} else
{return not_found;
}
});
G__321048 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__321048__321049.call(this,coll,k);
case  3 :
return G__321048__321050.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__321048;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__321015 = this;
var h__321016 = cljs.core.hash.call(null,k);
var bucket__321017 = (this__321015.hashobj[h__321016]);

if(cljs.core.truth_(bucket__321017))
{var new_bucket__321018 = cljs.core.aclone.call(null,bucket__321017);
var new_hashobj__321019 = goog.object.clone.call(null,this__321015.hashobj);

(new_hashobj__321019[h__321016] = new_bucket__321018);
var temp__3695__auto____321020 = cljs.core.scan_array.call(null,2,k,new_bucket__321018);

if(cljs.core.truth_(temp__3695__auto____321020))
{var i__321021 = temp__3695__auto____321020;

(new_bucket__321018[(i__321021 + 1)] = v);
return (new cljs.core.HashMap(this__321015.meta,this__321015.count,new_hashobj__321019));
} else
{new_bucket__321018.push(k,v);
return (new cljs.core.HashMap(this__321015.meta,(this__321015.count + 1),new_hashobj__321019));
}
} else
{var new_hashobj__321022 = goog.object.clone.call(null,this__321015.hashobj);

(new_hashobj__321022[h__321016] = [k,v]);
return (new cljs.core.HashMap(this__321015.meta,(this__321015.count + 1),new_hashobj__321022));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__321023 = this;
var bucket__321024 = (this__321023.hashobj[cljs.core.hash.call(null,k)]);
var i__321025 = (cljs.core.truth_(bucket__321024)?cljs.core.scan_array.call(null,2,k,bucket__321024):null);

if(cljs.core.truth_(i__321025))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__321052 = null;
var G__321052__321053 = (function (tsym321026,k){
var this__321028 = this;
var tsym321026__321029 = this;

var coll__321030 = tsym321026__321029;

return cljs.core._lookup.call(null,coll__321030,k);
});
var G__321052__321054 = (function (tsym321027,k,not_found){
var this__321031 = this;
var tsym321027__321032 = this;

var coll__321033 = tsym321027__321032;

return cljs.core._lookup.call(null,coll__321033,k,not_found);
});
G__321052 = function(tsym321027,k,not_found){
switch(arguments.length){
case  2 :
return G__321052__321053.call(this,tsym321027,k);
case  3 :
return G__321052__321054.call(this,tsym321027,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__321052;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__321034 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__321035 = this;
if(cljs.core.truth_((this__321035.count > 0)))
{var hashes__321036 = cljs.core.js_keys.call(null,this__321035.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__321009_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__321035.hashobj[p1__321009_SHARP_])));
}),hashes__321036);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__321037 = this;
return this__321037.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__321038 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__321039 = this;
return (new cljs.core.HashMap(meta,this__321039.count,this__321039.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__321040 = this;
return this__321040.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__321041 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__321041.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__321042 = this;
var h__321043 = cljs.core.hash.call(null,k);
var bucket__321044 = (this__321042.hashobj[h__321043]);
var i__321045 = (cljs.core.truth_(bucket__321044)?cljs.core.scan_array.call(null,2,k,bucket__321044):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__321045)))
{return coll;
} else
{var new_hashobj__321046 = goog.object.clone.call(null,this__321042.hashobj);

if(cljs.core.truth_((3 > bucket__321044.length)))
{cljs.core.js_delete.call(null,new_hashobj__321046,h__321043);
} else
{var new_bucket__321047 = cljs.core.aclone.call(null,bucket__321044);

new_bucket__321047.splice(i__321045,2);
(new_hashobj__321046[h__321043] = new_bucket__321047);
}
return (new cljs.core.HashMap(this__321042.meta,(this__321042.count - 1),new_hashobj__321046));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__321056 = ks.length;

var i__321057 = 0;
var out__321058 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__321057 < len__321056)))
{{
var G__321059 = (i__321057 + 1);
var G__321060 = cljs.core.assoc.call(null,out__321058,(ks[i__321057]),(vs[i__321057]));
i__321057 = G__321059;
out__321058 = G__321060;
continue;
}
} else
{return out__321058;
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
var in$__321061 = cljs.core.seq.call(null,keyvals);
var out__321062 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__321061))
{{
var G__321063 = cljs.core.nnext.call(null,in$__321061);
var G__321064 = cljs.core.assoc.call(null,out__321062,cljs.core.first.call(null,in$__321061),cljs.core.second.call(null,in$__321061));
in$__321061 = G__321063;
out__321062 = G__321064;
continue;
}
} else
{return out__321062;
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
hash_map.cljs$lang$applyTo = (function (arglist__321065){
var keyvals = cljs.core.seq( arglist__321065 );;
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
{return cljs.core.reduce.call(null,(function (p1__321066_SHARP_,p2__321067_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____321068 = p1__321066_SHARP_;

if(cljs.core.truth_(or__3548__auto____321068))
{return or__3548__auto____321068;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__321067_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__321069){
var maps = cljs.core.seq( arglist__321069 );;
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
{var merge_entry__321072 = (function (m,e){
var k__321070 = cljs.core.first.call(null,e);
var v__321071 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__321070)))
{return cljs.core.assoc.call(null,m,k__321070,f.call(null,cljs.core.get.call(null,m,k__321070),v__321071));
} else
{return cljs.core.assoc.call(null,m,k__321070,v__321071);
}
});
var merge2__321074 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__321072,(function (){var or__3548__auto____321073 = m1;

if(cljs.core.truth_(or__3548__auto____321073))
{return or__3548__auto____321073;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__321074,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__321075){
var f = cljs.core.first(arglist__321075);
var maps = cljs.core.rest(arglist__321075);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__321077 = cljs.core.ObjMap.fromObject([],{});
var keys__321078 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__321078))
{var key__321079 = cljs.core.first.call(null,keys__321078);
var entry__321080 = cljs.core.get.call(null,map,key__321079,"\uFDD0'user/not-found");

{
var G__321081 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__321080,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__321077,key__321079,entry__321080):ret__321077);
var G__321082 = cljs.core.next.call(null,keys__321078);
ret__321077 = G__321081;
keys__321078 = G__321082;
continue;
}
} else
{return ret__321077;
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
var this__321083 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__321104 = null;
var G__321104__321105 = (function (coll,v){
var this__321084 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__321104__321106 = (function (coll,v,not_found){
var this__321085 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__321085.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__321104 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__321104__321105.call(this,coll,v);
case  3 :
return G__321104__321106.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__321104;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__321108 = null;
var G__321108__321109 = (function (tsym321086,k){
var this__321088 = this;
var tsym321086__321089 = this;

var coll__321090 = tsym321086__321089;

return cljs.core._lookup.call(null,coll__321090,k);
});
var G__321108__321110 = (function (tsym321087,k,not_found){
var this__321091 = this;
var tsym321087__321092 = this;

var coll__321093 = tsym321087__321092;

return cljs.core._lookup.call(null,coll__321093,k,not_found);
});
G__321108 = function(tsym321087,k,not_found){
switch(arguments.length){
case  2 :
return G__321108__321109.call(this,tsym321087,k);
case  3 :
return G__321108__321110.call(this,tsym321087,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__321108;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__321094 = this;
return (new cljs.core.Set(this__321094.meta,cljs.core.assoc.call(null,this__321094.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__321095 = this;
return cljs.core.keys.call(null,this__321095.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__321096 = this;
return (new cljs.core.Set(this__321096.meta,cljs.core.dissoc.call(null,this__321096.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__321097 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__321098 = this;
var and__3546__auto____321099 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____321099))
{var and__3546__auto____321100 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____321100))
{return cljs.core.every_QMARK_.call(null,(function (p1__321076_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__321076_SHARP_);
}),other);
} else
{return and__3546__auto____321100;
}
} else
{return and__3546__auto____321099;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__321101 = this;
return (new cljs.core.Set(meta,this__321101.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__321102 = this;
return this__321102.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__321103 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__321103.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__321113 = cljs.core.seq.call(null,coll);
var out__321114 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__321113))))
{{
var G__321115 = cljs.core.rest.call(null,in$__321113);
var G__321116 = cljs.core.conj.call(null,out__321114,cljs.core.first.call(null,in$__321113));
in$__321113 = G__321115;
out__321114 = G__321116;
continue;
}
} else
{return out__321114;
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
{var n__321117 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____321118 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____321118))
{var e__321119 = temp__3695__auto____321118;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__321119));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__321117,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__321112_SHARP_){
var temp__3695__auto____321120 = cljs.core.find.call(null,smap,p1__321112_SHARP_);

if(cljs.core.truth_(temp__3695__auto____321120))
{var e__321121 = temp__3695__auto____321120;

return cljs.core.second.call(null,e__321121);
} else
{return p1__321112_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__321129 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__321122,seen){
while(true){
var vec__321123__321124 = p__321122;
var f__321125 = cljs.core.nth.call(null,vec__321123__321124,0,null);
var xs__321126 = vec__321123__321124;

var temp__3698__auto____321127 = cljs.core.seq.call(null,xs__321126);

if(cljs.core.truth_(temp__3698__auto____321127))
{var s__321128 = temp__3698__auto____321127;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__321125)))
{{
var G__321130 = cljs.core.rest.call(null,s__321128);
var G__321131 = seen;
p__321122 = G__321130;
seen = G__321131;
continue;
}
} else
{return cljs.core.cons.call(null,f__321125,step.call(null,cljs.core.rest.call(null,s__321128),cljs.core.conj.call(null,seen,f__321125)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__321129.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__321132 = cljs.core.PersistentVector.fromArray([]);
var s__321133 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__321133)))
{{
var G__321134 = cljs.core.conj.call(null,ret__321132,cljs.core.first.call(null,s__321133));
var G__321135 = cljs.core.next.call(null,s__321133);
ret__321132 = G__321134;
s__321133 = G__321135;
continue;
}
} else
{return cljs.core.seq.call(null,ret__321132);
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
{if(cljs.core.truth_((function (){var or__3548__auto____321136 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____321136))
{return or__3548__auto____321136;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__321137 = x.lastIndexOf("/");

if(cljs.core.truth_((i__321137 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__321137 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____321138 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____321138))
{return or__3548__auto____321138;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__321139 = x.lastIndexOf("/");

if(cljs.core.truth_((i__321139 > -1)))
{return cljs.core.subs.call(null,x,2,i__321139);
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
var map__321142 = cljs.core.ObjMap.fromObject([],{});
var ks__321143 = cljs.core.seq.call(null,keys);
var vs__321144 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____321145 = ks__321143;

if(cljs.core.truth_(and__3546__auto____321145))
{return vs__321144;
} else
{return and__3546__auto____321145;
}
})()))
{{
var G__321146 = cljs.core.assoc.call(null,map__321142,cljs.core.first.call(null,ks__321143),cljs.core.first.call(null,vs__321144));
var G__321147 = cljs.core.next.call(null,ks__321143);
var G__321148 = cljs.core.next.call(null,vs__321144);
map__321142 = G__321146;
ks__321143 = G__321147;
vs__321144 = G__321148;
continue;
}
} else
{return map__321142;
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
var max_key__321151 = (function (k,x){
return x;
});
var max_key__321152 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__321153 = (function() { 
var G__321155__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__321140_SHARP_,p2__321141_SHARP_){
return max_key.call(null,k,p1__321140_SHARP_,p2__321141_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__321155 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__321155__delegate.call(this, k, x, y, more);
};
G__321155.cljs$lang$maxFixedArity = 3;
G__321155.cljs$lang$applyTo = (function (arglist__321156){
var k = cljs.core.first(arglist__321156);
var x = cljs.core.first(cljs.core.next(arglist__321156));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__321156)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__321156)));
return G__321155__delegate.call(this, k, x, y, more);
});
return G__321155;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__321151.call(this,k,x);
case  3 :
return max_key__321152.call(this,k,x,y);
default:
return max_key__321153.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__321153.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__321157 = (function (k,x){
return x;
});
var min_key__321158 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__321159 = (function() { 
var G__321161__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__321149_SHARP_,p2__321150_SHARP_){
return min_key.call(null,k,p1__321149_SHARP_,p2__321150_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__321161 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__321161__delegate.call(this, k, x, y, more);
};
G__321161.cljs$lang$maxFixedArity = 3;
G__321161.cljs$lang$applyTo = (function (arglist__321162){
var k = cljs.core.first(arglist__321162);
var x = cljs.core.first(cljs.core.next(arglist__321162));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__321162)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__321162)));
return G__321161__delegate.call(this, k, x, y, more);
});
return G__321161;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__321157.call(this,k,x);
case  3 :
return min_key__321158.call(this,k,x,y);
default:
return min_key__321159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__321159.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__321165 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__321166 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____321163 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____321163))
{var s__321164 = temp__3698__auto____321163;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__321164),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__321164)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__321165.call(this,n,step);
case  3 :
return partition_all__321166.call(this,n,step,coll);
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
var temp__3698__auto____321168 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____321168))
{var s__321169 = temp__3698__auto____321168;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__321169))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__321169),take_while.call(null,pred,cljs.core.rest.call(null,s__321169)));
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
var this__321170 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__321171 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__321187 = null;
var G__321187__321188 = (function (rng,f){
var this__321172 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__321187__321189 = (function (rng,f,s){
var this__321173 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__321187 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__321187__321188.call(this,rng,f);
case  3 :
return G__321187__321189.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__321187;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__321174 = this;
var comp__321175 = (cljs.core.truth_((this__321174.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__321175.call(null,this__321174.start,this__321174.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__321176 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__321176.end - this__321176.start) / this__321176.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__321177 = this;
return this__321177.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__321178 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__321178.meta,(this__321178.start + this__321178.step),this__321178.end,this__321178.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__321179 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__321180 = this;
return (new cljs.core.Range(meta,this__321180.start,this__321180.end,this__321180.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__321181 = this;
return this__321181.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__321191 = null;
var G__321191__321192 = (function (rng,n){
var this__321182 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__321182.start + (n * this__321182.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____321183 = (this__321182.start > this__321182.end);

if(cljs.core.truth_(and__3546__auto____321183))
{return cljs.core._EQ_.call(null,this__321182.step,0);
} else
{return and__3546__auto____321183;
}
})()))
{return this__321182.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__321191__321193 = (function (rng,n,not_found){
var this__321184 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__321184.start + (n * this__321184.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____321185 = (this__321184.start > this__321184.end);

if(cljs.core.truth_(and__3546__auto____321185))
{return cljs.core._EQ_.call(null,this__321184.step,0);
} else
{return and__3546__auto____321185;
}
})()))
{return this__321184.start;
} else
{return not_found;
}
}
});
G__321191 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__321191__321192.call(this,rng,n);
case  3 :
return G__321191__321193.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__321191;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__321186 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__321186.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__321195 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__321196 = (function (end){
return range.call(null,0,end,1);
});
var range__321197 = (function (start,end){
return range.call(null,start,end,1);
});
var range__321198 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__321195.call(this);
case  1 :
return range__321196.call(this,start);
case  2 :
return range__321197.call(this,start,end);
case  3 :
return range__321198.call(this,start,end,step);
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
var temp__3698__auto____321200 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____321200))
{var s__321201 = temp__3698__auto____321200;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__321201),take_nth.call(null,n,cljs.core.drop.call(null,n,s__321201)));
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
var temp__3698__auto____321203 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____321203))
{var s__321204 = temp__3698__auto____321203;

var fst__321205 = cljs.core.first.call(null,s__321204);
var fv__321206 = f.call(null,fst__321205);
var run__321207 = cljs.core.cons.call(null,fst__321205,cljs.core.take_while.call(null,(function (p1__321202_SHARP_){
return cljs.core._EQ_.call(null,fv__321206,f.call(null,p1__321202_SHARP_));
}),cljs.core.next.call(null,s__321204)));

return cljs.core.cons.call(null,run__321207,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__321207),s__321204))));
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
var reductions__321222 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____321218 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____321218))
{var s__321219 = temp__3695__auto____321218;

return reductions.call(null,f,cljs.core.first.call(null,s__321219),cljs.core.rest.call(null,s__321219));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__321223 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____321220 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____321220))
{var s__321221 = temp__3698__auto____321220;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__321221)),cljs.core.rest.call(null,s__321221));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__321222.call(this,f,init);
case  3 :
return reductions__321223.call(this,f,init,coll);
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
var juxt__321226 = (function (f){
return (function() {
var G__321231 = null;
var G__321231__321232 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__321231__321233 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__321231__321234 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__321231__321235 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__321231__321236 = (function() { 
var G__321238__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__321238 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__321238__delegate.call(this, x, y, z, args);
};
G__321238.cljs$lang$maxFixedArity = 3;
G__321238.cljs$lang$applyTo = (function (arglist__321239){
var x = cljs.core.first(arglist__321239);
var y = cljs.core.first(cljs.core.next(arglist__321239));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__321239)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__321239)));
return G__321238__delegate.call(this, x, y, z, args);
});
return G__321238;
})()
;
G__321231 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__321231__321232.call(this);
case  1 :
return G__321231__321233.call(this,x);
case  2 :
return G__321231__321234.call(this,x,y);
case  3 :
return G__321231__321235.call(this,x,y,z);
default:
return G__321231__321236.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__321231.cljs$lang$maxFixedArity = 3;
G__321231.cljs$lang$applyTo = G__321231__321236.cljs$lang$applyTo;
return G__321231;
})()
});
var juxt__321227 = (function (f,g){
return (function() {
var G__321240 = null;
var G__321240__321241 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__321240__321242 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__321240__321243 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__321240__321244 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__321240__321245 = (function() { 
var G__321247__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__321247 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__321247__delegate.call(this, x, y, z, args);
};
G__321247.cljs$lang$maxFixedArity = 3;
G__321247.cljs$lang$applyTo = (function (arglist__321248){
var x = cljs.core.first(arglist__321248);
var y = cljs.core.first(cljs.core.next(arglist__321248));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__321248)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__321248)));
return G__321247__delegate.call(this, x, y, z, args);
});
return G__321247;
})()
;
G__321240 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__321240__321241.call(this);
case  1 :
return G__321240__321242.call(this,x);
case  2 :
return G__321240__321243.call(this,x,y);
case  3 :
return G__321240__321244.call(this,x,y,z);
default:
return G__321240__321245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__321240.cljs$lang$maxFixedArity = 3;
G__321240.cljs$lang$applyTo = G__321240__321245.cljs$lang$applyTo;
return G__321240;
})()
});
var juxt__321228 = (function (f,g,h){
return (function() {
var G__321249 = null;
var G__321249__321250 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__321249__321251 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__321249__321252 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__321249__321253 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__321249__321254 = (function() { 
var G__321256__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__321256 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__321256__delegate.call(this, x, y, z, args);
};
G__321256.cljs$lang$maxFixedArity = 3;
G__321256.cljs$lang$applyTo = (function (arglist__321257){
var x = cljs.core.first(arglist__321257);
var y = cljs.core.first(cljs.core.next(arglist__321257));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__321257)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__321257)));
return G__321256__delegate.call(this, x, y, z, args);
});
return G__321256;
})()
;
G__321249 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__321249__321250.call(this);
case  1 :
return G__321249__321251.call(this,x);
case  2 :
return G__321249__321252.call(this,x,y);
case  3 :
return G__321249__321253.call(this,x,y,z);
default:
return G__321249__321254.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__321249.cljs$lang$maxFixedArity = 3;
G__321249.cljs$lang$applyTo = G__321249__321254.cljs$lang$applyTo;
return G__321249;
})()
});
var juxt__321229 = (function() { 
var G__321258__delegate = function (f,g,h,fs){
var fs__321225 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__321259 = null;
var G__321259__321260 = (function (){
return cljs.core.reduce.call(null,(function (p1__321208_SHARP_,p2__321209_SHARP_){
return cljs.core.conj.call(null,p1__321208_SHARP_,p2__321209_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__321225);
});
var G__321259__321261 = (function (x){
return cljs.core.reduce.call(null,(function (p1__321210_SHARP_,p2__321211_SHARP_){
return cljs.core.conj.call(null,p1__321210_SHARP_,p2__321211_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__321225);
});
var G__321259__321262 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__321212_SHARP_,p2__321213_SHARP_){
return cljs.core.conj.call(null,p1__321212_SHARP_,p2__321213_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__321225);
});
var G__321259__321263 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__321214_SHARP_,p2__321215_SHARP_){
return cljs.core.conj.call(null,p1__321214_SHARP_,p2__321215_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__321225);
});
var G__321259__321264 = (function() { 
var G__321266__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__321216_SHARP_,p2__321217_SHARP_){
return cljs.core.conj.call(null,p1__321216_SHARP_,cljs.core.apply.call(null,p2__321217_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__321225);
};
var G__321266 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__321266__delegate.call(this, x, y, z, args);
};
G__321266.cljs$lang$maxFixedArity = 3;
G__321266.cljs$lang$applyTo = (function (arglist__321267){
var x = cljs.core.first(arglist__321267);
var y = cljs.core.first(cljs.core.next(arglist__321267));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__321267)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__321267)));
return G__321266__delegate.call(this, x, y, z, args);
});
return G__321266;
})()
;
G__321259 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__321259__321260.call(this);
case  1 :
return G__321259__321261.call(this,x);
case  2 :
return G__321259__321262.call(this,x,y);
case  3 :
return G__321259__321263.call(this,x,y,z);
default:
return G__321259__321264.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__321259.cljs$lang$maxFixedArity = 3;
G__321259.cljs$lang$applyTo = G__321259__321264.cljs$lang$applyTo;
return G__321259;
})()
};
var G__321258 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__321258__delegate.call(this, f, g, h, fs);
};
G__321258.cljs$lang$maxFixedArity = 3;
G__321258.cljs$lang$applyTo = (function (arglist__321268){
var f = cljs.core.first(arglist__321268);
var g = cljs.core.first(cljs.core.next(arglist__321268));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__321268)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__321268)));
return G__321258__delegate.call(this, f, g, h, fs);
});
return G__321258;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__321226.call(this,f);
case  2 :
return juxt__321227.call(this,f,g);
case  3 :
return juxt__321228.call(this,f,g,h);
default:
return juxt__321229.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__321229.cljs$lang$applyTo;
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
var dorun__321270 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__321273 = cljs.core.next.call(null,coll);
coll = G__321273;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__321271 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____321269 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____321269))
{return (n > 0);
} else
{return and__3546__auto____321269;
}
})()))
{{
var G__321274 = (n - 1);
var G__321275 = cljs.core.next.call(null,coll);
n = G__321274;
coll = G__321275;
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
return dorun__321270.call(this,n);
case  2 :
return dorun__321271.call(this,n,coll);
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
var doall__321276 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__321277 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__321276.call(this,n);
case  2 :
return doall__321277.call(this,n,coll);
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
var matches__321279 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__321279),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__321279),1)))
{return cljs.core.first.call(null,matches__321279);
} else
{return cljs.core.vec.call(null,matches__321279);
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
var matches__321280 = re.exec(s);

if(cljs.core.truth_((matches__321280 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__321280),1)))
{return cljs.core.first.call(null,matches__321280);
} else
{return cljs.core.vec.call(null,matches__321280);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__321281 = cljs.core.re_find.call(null,re,s);
var match_idx__321282 = s.search(re);
var match_str__321283 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__321281))?cljs.core.first.call(null,match_data__321281):match_data__321281);
var post_match__321284 = cljs.core.subs.call(null,s,(match_idx__321282 + cljs.core.count.call(null,match_str__321283)));

if(cljs.core.truth_(match_data__321281))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__321281,re_seq.call(null,re,post_match__321284));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__321286__321287 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___321288 = cljs.core.nth.call(null,vec__321286__321287,0,null);
var flags__321289 = cljs.core.nth.call(null,vec__321286__321287,1,null);
var pattern__321290 = cljs.core.nth.call(null,vec__321286__321287,2,null);

return (new RegExp(pattern__321290,flags__321289));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__321285_SHARP_){
return print_one.call(null,p1__321285_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____321291 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____321291))
{var and__3546__auto____321295 = (function (){var x__451__auto____321292 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____321293 = x__451__auto____321292;

if(cljs.core.truth_(and__3546__auto____321293))
{var and__3546__auto____321294 = x__451__auto____321292.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____321294))
{return cljs.core.not.call(null,x__451__auto____321292.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____321294;
}
} else
{return and__3546__auto____321293;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____321292);
}
})();

if(cljs.core.truth_(and__3546__auto____321295))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____321295;
}
} else
{return and__3546__auto____321291;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____321296 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____321297 = x__451__auto____321296;

if(cljs.core.truth_(and__3546__auto____321297))
{var and__3546__auto____321298 = x__451__auto____321296.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____321298))
{return cljs.core.not.call(null,x__451__auto____321296.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____321298;
}
} else
{return and__3546__auto____321297;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____321296);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__321299 = cljs.core.first.call(null,objs);
var sb__321300 = (new goog.string.StringBuffer());

var G__321301__321302 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__321301__321302))
{var obj__321303 = cljs.core.first.call(null,G__321301__321302);
var G__321301__321304 = G__321301__321302;

while(true){
if(cljs.core.truth_((obj__321303 === first_obj__321299)))
{} else
{sb__321300.append(" ");
}
var G__321305__321306 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__321303,opts));

if(cljs.core.truth_(G__321305__321306))
{var string__321307 = cljs.core.first.call(null,G__321305__321306);
var G__321305__321308 = G__321305__321306;

while(true){
sb__321300.append(string__321307);
var temp__3698__auto____321309 = cljs.core.next.call(null,G__321305__321308);

if(cljs.core.truth_(temp__3698__auto____321309))
{var G__321305__321310 = temp__3698__auto____321309;

{
var G__321313 = cljs.core.first.call(null,G__321305__321310);
var G__321314 = G__321305__321310;
string__321307 = G__321313;
G__321305__321308 = G__321314;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____321311 = cljs.core.next.call(null,G__321301__321304);

if(cljs.core.truth_(temp__3698__auto____321311))
{var G__321301__321312 = temp__3698__auto____321311;

{
var G__321315 = cljs.core.first.call(null,G__321301__321312);
var G__321316 = G__321301__321312;
obj__321303 = G__321315;
G__321301__321304 = G__321316;
continue;
}
} else
{}
break;
}
} else
{}
return sb__321300;
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
var sb__321317 = cljs.core.pr_sb.call(null,objs,opts);

sb__321317.append("\n");
return cljs.core.str.call(null,sb__321317);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__321318 = cljs.core.first.call(null,objs);

var G__321319__321320 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__321319__321320))
{var obj__321321 = cljs.core.first.call(null,G__321319__321320);
var G__321319__321322 = G__321319__321320;

while(true){
if(cljs.core.truth_((obj__321321 === first_obj__321318)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__321323__321324 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__321321,opts));

if(cljs.core.truth_(G__321323__321324))
{var string__321325 = cljs.core.first.call(null,G__321323__321324);
var G__321323__321326 = G__321323__321324;

while(true){
cljs.core.string_print.call(null,string__321325);
var temp__3698__auto____321327 = cljs.core.next.call(null,G__321323__321326);

if(cljs.core.truth_(temp__3698__auto____321327))
{var G__321323__321328 = temp__3698__auto____321327;

{
var G__321331 = cljs.core.first.call(null,G__321323__321328);
var G__321332 = G__321323__321328;
string__321325 = G__321331;
G__321323__321326 = G__321332;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____321329 = cljs.core.next.call(null,G__321319__321322);

if(cljs.core.truth_(temp__3698__auto____321329))
{var G__321319__321330 = temp__3698__auto____321329;

{
var G__321333 = cljs.core.first.call(null,G__321319__321330);
var G__321334 = G__321319__321330;
obj__321321 = G__321333;
G__321319__321322 = G__321334;
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
pr_str.cljs$lang$applyTo = (function (arglist__321335){
var objs = cljs.core.seq( arglist__321335 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__321336){
var objs = cljs.core.seq( arglist__321336 );;
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
pr.cljs$lang$applyTo = (function (arglist__321337){
var objs = cljs.core.seq( arglist__321337 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__321338){
var objs = cljs.core.seq( arglist__321338 );;
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
print_str.cljs$lang$applyTo = (function (arglist__321339){
var objs = cljs.core.seq( arglist__321339 );;
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
println.cljs$lang$applyTo = (function (arglist__321340){
var objs = cljs.core.seq( arglist__321340 );;
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
println_str.cljs$lang$applyTo = (function (arglist__321341){
var objs = cljs.core.seq( arglist__321341 );;
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
prn.cljs$lang$applyTo = (function (arglist__321342){
var objs = cljs.core.seq( arglist__321342 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__321343 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__321343,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____321344 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____321344))
{var nspc__321345 = temp__3698__auto____321344;

return cljs.core.str.call(null,nspc__321345,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____321346 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____321346))
{var nspc__321347 = temp__3698__auto____321346;

return cljs.core.str.call(null,nspc__321347,"/");
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
var pr_pair__321348 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__321348,"{",", ","}",opts,coll);
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
var this__321349 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__321350 = this;
var G__321351__321352 = cljs.core.seq.call(null,this__321350.watches);

if(cljs.core.truth_(G__321351__321352))
{var G__321354__321356 = cljs.core.first.call(null,G__321351__321352);
var vec__321355__321357 = G__321354__321356;
var key__321358 = cljs.core.nth.call(null,vec__321355__321357,0,null);
var f__321359 = cljs.core.nth.call(null,vec__321355__321357,1,null);
var G__321351__321360 = G__321351__321352;

var G__321354__321361 = G__321354__321356;
var G__321351__321362 = G__321351__321360;

while(true){
var vec__321363__321364 = G__321354__321361;
var key__321365 = cljs.core.nth.call(null,vec__321363__321364,0,null);
var f__321366 = cljs.core.nth.call(null,vec__321363__321364,1,null);
var G__321351__321367 = G__321351__321362;

f__321366.call(null,key__321365,this$,oldval,newval);
var temp__3698__auto____321368 = cljs.core.next.call(null,G__321351__321367);

if(cljs.core.truth_(temp__3698__auto____321368))
{var G__321351__321369 = temp__3698__auto____321368;

{
var G__321376 = cljs.core.first.call(null,G__321351__321369);
var G__321377 = G__321351__321369;
G__321354__321361 = G__321376;
G__321351__321362 = G__321377;
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
var this__321370 = this;
return this$.watches = cljs.core.assoc.call(null,this__321370.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__321371 = this;
return this$.watches = cljs.core.dissoc.call(null,this__321371.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__321372 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__321372.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__321373 = this;
return this__321373.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__321374 = this;
return this__321374.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__321375 = this;
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
var atom__321384 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__321385 = (function() { 
var G__321387__delegate = function (x,p__321378){
var map__321379__321380 = p__321378;
var map__321379__321381 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__321379__321380))?cljs.core.apply.call(null,cljs.core.hash_map,map__321379__321380):map__321379__321380);
var validator__321382 = cljs.core.get.call(null,map__321379__321381,"\uFDD0'validator");
var meta__321383 = cljs.core.get.call(null,map__321379__321381,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__321383,validator__321382,null));
};
var G__321387 = function (x,var_args){
var p__321378 = null;
if (goog.isDef(var_args)) {
  p__321378 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__321387__delegate.call(this, x, p__321378);
};
G__321387.cljs$lang$maxFixedArity = 1;
G__321387.cljs$lang$applyTo = (function (arglist__321388){
var x = cljs.core.first(arglist__321388);
var p__321378 = cljs.core.rest(arglist__321388);
return G__321387__delegate.call(this, x, p__321378);
});
return G__321387;
})()
;
atom = function(x,var_args){
var p__321378 = var_args;
switch(arguments.length){
case  1 :
return atom__321384.call(this,x);
default:
return atom__321385.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__321385.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____321389 = a.validator;

if(cljs.core.truth_(temp__3698__auto____321389))
{var validate__321390 = temp__3698__auto____321389;

if(cljs.core.truth_(validate__321390.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__321391 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__321391,new_value);
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
var swap_BANG___321392 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___321393 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___321394 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___321395 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___321396 = (function() { 
var G__321398__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__321398 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__321398__delegate.call(this, a, f, x, y, z, more);
};
G__321398.cljs$lang$maxFixedArity = 5;
G__321398.cljs$lang$applyTo = (function (arglist__321399){
var a = cljs.core.first(arglist__321399);
var f = cljs.core.first(cljs.core.next(arglist__321399));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__321399)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__321399))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__321399)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__321399)))));
return G__321398__delegate.call(this, a, f, x, y, z, more);
});
return G__321398;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___321392.call(this,a,f);
case  3 :
return swap_BANG___321393.call(this,a,f,x);
case  4 :
return swap_BANG___321394.call(this,a,f,x,y);
case  5 :
return swap_BANG___321395.call(this,a,f,x,y,z);
default:
return swap_BANG___321396.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___321396.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__321400){
var iref = cljs.core.first(arglist__321400);
var f = cljs.core.first(cljs.core.next(arglist__321400));
var args = cljs.core.rest(cljs.core.next(arglist__321400));
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
var gensym__321401 = (function (){
return gensym.call(null,"G__");
});
var gensym__321402 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__321401.call(this);
case  1 :
return gensym__321402.call(this,prefix_string);
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
var this__321404 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__321404.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__321405 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__321405.state,(function (p__321406){
var curr_state__321407 = p__321406;
var curr_state__321408 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__321407))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__321407):curr_state__321407);
var done__321409 = cljs.core.get.call(null,curr_state__321408,"\uFDD0'done");

if(cljs.core.truth_(done__321409))
{return curr_state__321408;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__321405.f.call(null)});
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
var map__321410__321411 = options;
var map__321410__321412 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__321410__321411))?cljs.core.apply.call(null,cljs.core.hash_map,map__321410__321411):map__321410__321411);
var keywordize_keys__321413 = cljs.core.get.call(null,map__321410__321412,"\uFDD0'keywordize-keys");
var keyfn__321414 = (cljs.core.truth_(keywordize_keys__321413)?cljs.core.keyword:cljs.core.str);
var f__321420 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____321419 = (function iter__321415(s__321416){
return (new cljs.core.LazySeq(null,false,(function (){
var s__321416__321417 = s__321416;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__321416__321417)))
{var k__321418 = cljs.core.first.call(null,s__321416__321417);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__321414.call(null,k__321418),thisfn.call(null,(x[k__321418]))]),iter__321415.call(null,cljs.core.rest.call(null,s__321416__321417)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____321419.call(null,cljs.core.js_keys.call(null,x));
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

return f__321420.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__321421){
var x = cljs.core.first(arglist__321421);
var options = cljs.core.rest(arglist__321421);
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
var mem__321422 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__321426__delegate = function (args){
var temp__3695__auto____321423 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__321422),args);

if(cljs.core.truth_(temp__3695__auto____321423))
{var v__321424 = temp__3695__auto____321423;

return v__321424;
} else
{var ret__321425 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__321422,cljs.core.assoc,args,ret__321425);
return ret__321425;
}
};
var G__321426 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__321426__delegate.call(this, args);
};
G__321426.cljs$lang$maxFixedArity = 0;
G__321426.cljs$lang$applyTo = (function (arglist__321427){
var args = cljs.core.seq( arglist__321427 );;
return G__321426__delegate.call(this, args);
});
return G__321426;
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
var trampoline__321429 = (function (f){
while(true){
var ret__321428 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__321428)))
{{
var G__321432 = ret__321428;
f = G__321432;
continue;
}
} else
{return ret__321428;
}
break;
}
});
var trampoline__321430 = (function() { 
var G__321433__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__321433 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__321433__delegate.call(this, f, args);
};
G__321433.cljs$lang$maxFixedArity = 1;
G__321433.cljs$lang$applyTo = (function (arglist__321434){
var f = cljs.core.first(arglist__321434);
var args = cljs.core.rest(arglist__321434);
return G__321433__delegate.call(this, f, args);
});
return G__321433;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__321429.call(this,f);
default:
return trampoline__321430.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__321430.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__321435 = (function (){
return rand.call(null,1);
});
var rand__321436 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__321435.call(this);
case  1 :
return rand__321436.call(this,n);
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
var k__321438 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__321438,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__321438,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___321447 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___321448 = (function (h,child,parent){
var or__3548__auto____321439 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____321439))
{return or__3548__auto____321439;
} else
{var or__3548__auto____321440 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____321440))
{return or__3548__auto____321440;
} else
{var and__3546__auto____321441 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____321441))
{var and__3546__auto____321442 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____321442))
{var and__3546__auto____321443 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____321443))
{var ret__321444 = true;
var i__321445 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____321446 = cljs.core.not.call(null,ret__321444);

if(cljs.core.truth_(or__3548__auto____321446))
{return or__3548__auto____321446;
} else
{return cljs.core._EQ_.call(null,i__321445,cljs.core.count.call(null,parent));
}
})()))
{return ret__321444;
} else
{{
var G__321450 = isa_QMARK_.call(null,h,child.call(null,i__321445),parent.call(null,i__321445));
var G__321451 = (i__321445 + 1);
ret__321444 = G__321450;
i__321445 = G__321451;
continue;
}
}
break;
}
} else
{return and__3546__auto____321443;
}
} else
{return and__3546__auto____321442;
}
} else
{return and__3546__auto____321441;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___321447.call(this,h,child);
case  3 :
return isa_QMARK___321448.call(this,h,child,parent);
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
var parents__321452 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__321453 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__321452.call(this,h);
case  2 :
return parents__321453.call(this,h,tag);
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
var ancestors__321455 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__321456 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__321455.call(this,h);
case  2 :
return ancestors__321456.call(this,h,tag);
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
var descendants__321458 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__321459 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__321458.call(this,h);
case  2 :
return descendants__321459.call(this,h,tag);
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
var derive__321469 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__321470 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__321464 = "\uFDD0'parents".call(null,h);
var td__321465 = "\uFDD0'descendants".call(null,h);
var ta__321466 = "\uFDD0'ancestors".call(null,h);
var tf__321467 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____321468 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__321464.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__321466.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__321466.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__321464,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__321467.call(null,"\uFDD0'ancestors".call(null,h),tag,td__321465,parent,ta__321466),"\uFDD0'descendants":tf__321467.call(null,"\uFDD0'descendants".call(null,h),parent,ta__321466,tag,td__321465)});
})());

if(cljs.core.truth_(or__3548__auto____321468))
{return or__3548__auto____321468;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__321469.call(this,h,tag);
case  3 :
return derive__321470.call(this,h,tag,parent);
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
var underive__321476 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__321477 = (function (h,tag,parent){
var parentMap__321472 = "\uFDD0'parents".call(null,h);
var childsParents__321473 = (cljs.core.truth_(parentMap__321472.call(null,tag))?cljs.core.disj.call(null,parentMap__321472.call(null,tag),parent):cljs.core.set([]));
var newParents__321474 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__321473))?cljs.core.assoc.call(null,parentMap__321472,tag,childsParents__321473):cljs.core.dissoc.call(null,parentMap__321472,tag));
var deriv_seq__321475 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__321461_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__321461_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__321461_SHARP_),cljs.core.second.call(null,p1__321461_SHARP_)));
}),cljs.core.seq.call(null,newParents__321474)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__321472.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__321462_SHARP_,p2__321463_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__321462_SHARP_,p2__321463_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__321475));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__321476.call(this,h,tag);
case  3 :
return underive__321477.call(this,h,tag,parent);
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
var xprefs__321479 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____321481 = (cljs.core.truth_((function (){var and__3546__auto____321480 = xprefs__321479;

if(cljs.core.truth_(and__3546__auto____321480))
{return xprefs__321479.call(null,y);
} else
{return and__3546__auto____321480;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____321481))
{return or__3548__auto____321481;
} else
{var or__3548__auto____321483 = (function (){var ps__321482 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__321482) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__321482),prefer_table)))
{} else
{}
{
var G__321486 = cljs.core.rest.call(null,ps__321482);
ps__321482 = G__321486;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____321483))
{return or__3548__auto____321483;
} else
{var or__3548__auto____321485 = (function (){var ps__321484 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__321484) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__321484),y,prefer_table)))
{} else
{}
{
var G__321487 = cljs.core.rest.call(null,ps__321484);
ps__321484 = G__321487;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____321485))
{return or__3548__auto____321485;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____321488 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____321488))
{return or__3548__auto____321488;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__321497 = cljs.core.reduce.call(null,(function (be,p__321489){
var vec__321490__321491 = p__321489;
var k__321492 = cljs.core.nth.call(null,vec__321490__321491,0,null);
var ___321493 = cljs.core.nth.call(null,vec__321490__321491,1,null);
var e__321494 = vec__321490__321491;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__321492)))
{var be2__321496 = (cljs.core.truth_((function (){var or__3548__auto____321495 = (be === null);

if(cljs.core.truth_(or__3548__auto____321495))
{return or__3548__auto____321495;
} else
{return cljs.core.dominates.call(null,k__321492,cljs.core.first.call(null,be),prefer_table);
}
})())?e__321494:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__321496),k__321492,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__321492," and ",cljs.core.first.call(null,be2__321496),", and neither is preferred")));
}
return be2__321496;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__321497))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__321497));
return cljs.core.second.call(null,best_entry__321497);
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
if(cljs.core.truth_((function (){var and__3546__auto____321498 = mf;

if(cljs.core.truth_(and__3546__auto____321498))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____321498;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____321499 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____321499))
{return or__3548__auto____321499;
} else
{var or__3548__auto____321500 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____321500))
{return or__3548__auto____321500;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____321501 = mf;

if(cljs.core.truth_(and__3546__auto____321501))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____321501;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____321502 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____321502))
{return or__3548__auto____321502;
} else
{var or__3548__auto____321503 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____321503))
{return or__3548__auto____321503;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____321504 = mf;

if(cljs.core.truth_(and__3546__auto____321504))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____321504;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____321505 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____321505))
{return or__3548__auto____321505;
} else
{var or__3548__auto____321506 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____321506))
{return or__3548__auto____321506;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____321507 = mf;

if(cljs.core.truth_(and__3546__auto____321507))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____321507;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____321508 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____321508))
{return or__3548__auto____321508;
} else
{var or__3548__auto____321509 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____321509))
{return or__3548__auto____321509;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____321510 = mf;

if(cljs.core.truth_(and__3546__auto____321510))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____321510;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____321511 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____321511))
{return or__3548__auto____321511;
} else
{var or__3548__auto____321512 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____321512))
{return or__3548__auto____321512;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____321513 = mf;

if(cljs.core.truth_(and__3546__auto____321513))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____321513;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____321514 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____321514))
{return or__3548__auto____321514;
} else
{var or__3548__auto____321515 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____321515))
{return or__3548__auto____321515;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____321516 = mf;

if(cljs.core.truth_(and__3546__auto____321516))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____321516;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____321517 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____321517))
{return or__3548__auto____321517;
} else
{var or__3548__auto____321518 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____321518))
{return or__3548__auto____321518;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____321519 = mf;

if(cljs.core.truth_(and__3546__auto____321519))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____321519;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____321520 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____321520))
{return or__3548__auto____321520;
} else
{var or__3548__auto____321521 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____321521))
{return or__3548__auto____321521;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__321522 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__321523 = cljs.core._get_method.call(null,mf,dispatch_val__321522);

if(cljs.core.truth_(target_fn__321523))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__321522)));
}
return cljs.core.apply.call(null,target_fn__321523,args);
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
var this__321524 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__321525 = this;
cljs.core.swap_BANG_.call(null,this__321525.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__321525.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__321525.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__321525.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__321526 = this;
cljs.core.swap_BANG_.call(null,this__321526.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__321526.method_cache,this__321526.method_table,this__321526.cached_hierarchy,this__321526.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__321527 = this;
cljs.core.swap_BANG_.call(null,this__321527.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__321527.method_cache,this__321527.method_table,this__321527.cached_hierarchy,this__321527.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__321528 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__321528.cached_hierarchy),cljs.core.deref.call(null,this__321528.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__321528.method_cache,this__321528.method_table,this__321528.cached_hierarchy,this__321528.hierarchy);
}
var temp__3695__auto____321529 = cljs.core.deref.call(null,this__321528.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____321529))
{var target_fn__321530 = temp__3695__auto____321529;

return target_fn__321530;
} else
{var temp__3695__auto____321531 = cljs.core.find_and_cache_best_method.call(null,this__321528.name,dispatch_val,this__321528.hierarchy,this__321528.method_table,this__321528.prefer_table,this__321528.method_cache,this__321528.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____321531))
{var target_fn__321532 = temp__3695__auto____321531;

return target_fn__321532;
} else
{return cljs.core.deref.call(null,this__321528.method_table).call(null,this__321528.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__321533 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__321533.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__321533.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__321533.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__321533.method_cache,this__321533.method_table,this__321533.cached_hierarchy,this__321533.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__321534 = this;
return cljs.core.deref.call(null,this__321534.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__321535 = this;
return cljs.core.deref.call(null,this__321535.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__321536 = this;
return cljs.core.do_dispatch.call(null,mf,this__321536.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__321537__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__321537 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__321537__delegate.call(this, _, args);
};
G__321537.cljs$lang$maxFixedArity = 1;
G__321537.cljs$lang$applyTo = (function (arglist__321538){
var _ = cljs.core.first(arglist__321538);
var args = cljs.core.rest(arglist__321538);
return G__321537__delegate.call(this, _, args);
});
return G__321537;
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
