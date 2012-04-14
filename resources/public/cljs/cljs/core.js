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
var or__3548__auto____164787 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____164787))
{return or__3548__auto____164787;
} else
{var or__3548__auto____164788 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____164788))
{return or__3548__auto____164788;
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
var _invoke__164852 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____164789 = this$;

if(cljs.core.truth_(and__3546__auto____164789))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164789;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____164790 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164790))
{return or__3548__auto____164790;
} else
{var or__3548__auto____164791 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164791))
{return or__3548__auto____164791;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__164853 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____164792 = this$;

if(cljs.core.truth_(and__3546__auto____164792))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164792;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____164793 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164793))
{return or__3548__auto____164793;
} else
{var or__3548__auto____164794 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164794))
{return or__3548__auto____164794;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__164854 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____164795 = this$;

if(cljs.core.truth_(and__3546__auto____164795))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164795;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____164796 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164796))
{return or__3548__auto____164796;
} else
{var or__3548__auto____164797 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164797))
{return or__3548__auto____164797;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__164855 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____164798 = this$;

if(cljs.core.truth_(and__3546__auto____164798))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164798;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____164799 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164799))
{return or__3548__auto____164799;
} else
{var or__3548__auto____164800 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164800))
{return or__3548__auto____164800;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__164856 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____164801 = this$;

if(cljs.core.truth_(and__3546__auto____164801))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164801;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____164802 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164802))
{return or__3548__auto____164802;
} else
{var or__3548__auto____164803 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164803))
{return or__3548__auto____164803;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__164857 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____164804 = this$;

if(cljs.core.truth_(and__3546__auto____164804))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164804;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____164805 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164805))
{return or__3548__auto____164805;
} else
{var or__3548__auto____164806 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164806))
{return or__3548__auto____164806;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__164858 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____164807 = this$;

if(cljs.core.truth_(and__3546__auto____164807))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164807;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____164808 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164808))
{return or__3548__auto____164808;
} else
{var or__3548__auto____164809 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164809))
{return or__3548__auto____164809;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__164859 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____164810 = this$;

if(cljs.core.truth_(and__3546__auto____164810))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164810;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____164811 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164811))
{return or__3548__auto____164811;
} else
{var or__3548__auto____164812 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164812))
{return or__3548__auto____164812;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__164860 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____164813 = this$;

if(cljs.core.truth_(and__3546__auto____164813))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164813;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____164814 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164814))
{return or__3548__auto____164814;
} else
{var or__3548__auto____164815 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164815))
{return or__3548__auto____164815;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__164861 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____164816 = this$;

if(cljs.core.truth_(and__3546__auto____164816))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164816;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____164817 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164817))
{return or__3548__auto____164817;
} else
{var or__3548__auto____164818 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164818))
{return or__3548__auto____164818;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__164862 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____164819 = this$;

if(cljs.core.truth_(and__3546__auto____164819))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164819;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____164820 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164820))
{return or__3548__auto____164820;
} else
{var or__3548__auto____164821 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164821))
{return or__3548__auto____164821;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__164863 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____164822 = this$;

if(cljs.core.truth_(and__3546__auto____164822))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164822;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____164823 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164823))
{return or__3548__auto____164823;
} else
{var or__3548__auto____164824 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164824))
{return or__3548__auto____164824;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__164864 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____164825 = this$;

if(cljs.core.truth_(and__3546__auto____164825))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164825;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____164826 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164826))
{return or__3548__auto____164826;
} else
{var or__3548__auto____164827 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164827))
{return or__3548__auto____164827;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__164865 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____164828 = this$;

if(cljs.core.truth_(and__3546__auto____164828))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164828;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____164829 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164829))
{return or__3548__auto____164829;
} else
{var or__3548__auto____164830 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164830))
{return or__3548__auto____164830;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__164866 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____164831 = this$;

if(cljs.core.truth_(and__3546__auto____164831))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164831;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____164832 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164832))
{return or__3548__auto____164832;
} else
{var or__3548__auto____164833 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164833))
{return or__3548__auto____164833;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__164867 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____164834 = this$;

if(cljs.core.truth_(and__3546__auto____164834))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164834;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____164835 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164835))
{return or__3548__auto____164835;
} else
{var or__3548__auto____164836 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164836))
{return or__3548__auto____164836;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__164868 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____164837 = this$;

if(cljs.core.truth_(and__3546__auto____164837))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164837;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____164838 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164838))
{return or__3548__auto____164838;
} else
{var or__3548__auto____164839 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164839))
{return or__3548__auto____164839;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__164869 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____164840 = this$;

if(cljs.core.truth_(and__3546__auto____164840))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164840;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____164841 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164841))
{return or__3548__auto____164841;
} else
{var or__3548__auto____164842 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164842))
{return or__3548__auto____164842;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__164870 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____164843 = this$;

if(cljs.core.truth_(and__3546__auto____164843))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164843;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____164844 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164844))
{return or__3548__auto____164844;
} else
{var or__3548__auto____164845 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164845))
{return or__3548__auto____164845;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__164871 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____164846 = this$;

if(cljs.core.truth_(and__3546__auto____164846))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164846;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____164847 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164847))
{return or__3548__auto____164847;
} else
{var or__3548__auto____164848 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164848))
{return or__3548__auto____164848;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__164872 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____164849 = this$;

if(cljs.core.truth_(and__3546__auto____164849))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____164849;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____164850 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164850))
{return or__3548__auto____164850;
} else
{var or__3548__auto____164851 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____164851))
{return or__3548__auto____164851;
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
return _invoke__164852.call(this,this$);
case  2 :
return _invoke__164853.call(this,this$,a);
case  3 :
return _invoke__164854.call(this,this$,a,b);
case  4 :
return _invoke__164855.call(this,this$,a,b,c);
case  5 :
return _invoke__164856.call(this,this$,a,b,c,d);
case  6 :
return _invoke__164857.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__164858.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__164859.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__164860.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__164861.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__164862.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__164863.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__164864.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__164865.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__164866.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__164867.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__164868.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__164869.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__164870.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__164871.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__164872.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____164874 = coll;

if(cljs.core.truth_(and__3546__auto____164874))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____164874;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____164875 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164875))
{return or__3548__auto____164875;
} else
{var or__3548__auto____164876 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____164876))
{return or__3548__auto____164876;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____164877 = coll;

if(cljs.core.truth_(and__3546__auto____164877))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____164877;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____164878 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164878))
{return or__3548__auto____164878;
} else
{var or__3548__auto____164879 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____164879))
{return or__3548__auto____164879;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____164880 = coll;

if(cljs.core.truth_(and__3546__auto____164880))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____164880;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____164881 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164881))
{return or__3548__auto____164881;
} else
{var or__3548__auto____164882 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____164882))
{return or__3548__auto____164882;
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
var _nth__164889 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____164883 = coll;

if(cljs.core.truth_(and__3546__auto____164883))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____164883;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____164884 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164884))
{return or__3548__auto____164884;
} else
{var or__3548__auto____164885 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____164885))
{return or__3548__auto____164885;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__164890 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____164886 = coll;

if(cljs.core.truth_(and__3546__auto____164886))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____164886;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____164887 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164887))
{return or__3548__auto____164887;
} else
{var or__3548__auto____164888 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____164888))
{return or__3548__auto____164888;
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
return _nth__164889.call(this,coll,n);
case  3 :
return _nth__164890.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____164892 = coll;

if(cljs.core.truth_(and__3546__auto____164892))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____164892;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____164893 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164893))
{return or__3548__auto____164893;
} else
{var or__3548__auto____164894 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____164894))
{return or__3548__auto____164894;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____164895 = coll;

if(cljs.core.truth_(and__3546__auto____164895))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____164895;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____164896 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164896))
{return or__3548__auto____164896;
} else
{var or__3548__auto____164897 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____164897))
{return or__3548__auto____164897;
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
var _lookup__164904 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____164898 = o;

if(cljs.core.truth_(and__3546__auto____164898))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____164898;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____164899 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____164899))
{return or__3548__auto____164899;
} else
{var or__3548__auto____164900 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____164900))
{return or__3548__auto____164900;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__164905 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____164901 = o;

if(cljs.core.truth_(and__3546__auto____164901))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____164901;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____164902 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____164902))
{return or__3548__auto____164902;
} else
{var or__3548__auto____164903 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____164903))
{return or__3548__auto____164903;
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
return _lookup__164904.call(this,o,k);
case  3 :
return _lookup__164905.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____164907 = coll;

if(cljs.core.truth_(and__3546__auto____164907))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____164907;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____164908 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164908))
{return or__3548__auto____164908;
} else
{var or__3548__auto____164909 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____164909))
{return or__3548__auto____164909;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____164910 = coll;

if(cljs.core.truth_(and__3546__auto____164910))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____164910;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____164911 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164911))
{return or__3548__auto____164911;
} else
{var or__3548__auto____164912 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____164912))
{return or__3548__auto____164912;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____164913 = coll;

if(cljs.core.truth_(and__3546__auto____164913))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____164913;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____164914 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164914))
{return or__3548__auto____164914;
} else
{var or__3548__auto____164915 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____164915))
{return or__3548__auto____164915;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____164916 = coll;

if(cljs.core.truth_(and__3546__auto____164916))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____164916;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____164917 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164917))
{return or__3548__auto____164917;
} else
{var or__3548__auto____164918 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____164918))
{return or__3548__auto____164918;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____164919 = coll;

if(cljs.core.truth_(and__3546__auto____164919))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____164919;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____164920 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164920))
{return or__3548__auto____164920;
} else
{var or__3548__auto____164921 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____164921))
{return or__3548__auto____164921;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____164922 = coll;

if(cljs.core.truth_(and__3546__auto____164922))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____164922;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____164923 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164923))
{return or__3548__auto____164923;
} else
{var or__3548__auto____164924 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____164924))
{return or__3548__auto____164924;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____164925 = coll;

if(cljs.core.truth_(and__3546__auto____164925))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____164925;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____164926 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164926))
{return or__3548__auto____164926;
} else
{var or__3548__auto____164927 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____164927))
{return or__3548__auto____164927;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____164928 = o;

if(cljs.core.truth_(and__3546__auto____164928))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____164928;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____164929 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____164929))
{return or__3548__auto____164929;
} else
{var or__3548__auto____164930 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____164930))
{return or__3548__auto____164930;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____164931 = o;

if(cljs.core.truth_(and__3546__auto____164931))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____164931;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____164932 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____164932))
{return or__3548__auto____164932;
} else
{var or__3548__auto____164933 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____164933))
{return or__3548__auto____164933;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____164934 = o;

if(cljs.core.truth_(and__3546__auto____164934))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____164934;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____164935 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____164935))
{return or__3548__auto____164935;
} else
{var or__3548__auto____164936 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____164936))
{return or__3548__auto____164936;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____164937 = o;

if(cljs.core.truth_(and__3546__auto____164937))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____164937;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____164938 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____164938))
{return or__3548__auto____164938;
} else
{var or__3548__auto____164939 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____164939))
{return or__3548__auto____164939;
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
var _reduce__164946 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____164940 = coll;

if(cljs.core.truth_(and__3546__auto____164940))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____164940;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____164941 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164941))
{return or__3548__auto____164941;
} else
{var or__3548__auto____164942 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____164942))
{return or__3548__auto____164942;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__164947 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____164943 = coll;

if(cljs.core.truth_(and__3546__auto____164943))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____164943;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____164944 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____164944))
{return or__3548__auto____164944;
} else
{var or__3548__auto____164945 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____164945))
{return or__3548__auto____164945;
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
return _reduce__164946.call(this,coll,f);
case  3 :
return _reduce__164947.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____164949 = o;

if(cljs.core.truth_(and__3546__auto____164949))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____164949;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____164950 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____164950))
{return or__3548__auto____164950;
} else
{var or__3548__auto____164951 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____164951))
{return or__3548__auto____164951;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____164952 = o;

if(cljs.core.truth_(and__3546__auto____164952))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____164952;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____164953 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____164953))
{return or__3548__auto____164953;
} else
{var or__3548__auto____164954 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____164954))
{return or__3548__auto____164954;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____164955 = o;

if(cljs.core.truth_(and__3546__auto____164955))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____164955;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____164956 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____164956))
{return or__3548__auto____164956;
} else
{var or__3548__auto____164957 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____164957))
{return or__3548__auto____164957;
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
if(cljs.core.truth_((function (){var and__3546__auto____164958 = o;

if(cljs.core.truth_(and__3546__auto____164958))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____164958;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____164959 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____164959))
{return or__3548__auto____164959;
} else
{var or__3548__auto____164960 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____164960))
{return or__3548__auto____164960;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____164961 = d;

if(cljs.core.truth_(and__3546__auto____164961))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____164961;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____164962 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____164962))
{return or__3548__auto____164962;
} else
{var or__3548__auto____164963 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____164963))
{return or__3548__auto____164963;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____164964 = this$;

if(cljs.core.truth_(and__3546__auto____164964))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____164964;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____164965 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164965))
{return or__3548__auto____164965;
} else
{var or__3548__auto____164966 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____164966))
{return or__3548__auto____164966;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____164967 = this$;

if(cljs.core.truth_(and__3546__auto____164967))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____164967;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____164968 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164968))
{return or__3548__auto____164968;
} else
{var or__3548__auto____164969 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____164969))
{return or__3548__auto____164969;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____164970 = this$;

if(cljs.core.truth_(and__3546__auto____164970))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____164970;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____164971 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____164971))
{return or__3548__auto____164971;
} else
{var or__3548__auto____164972 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____164972))
{return or__3548__auto____164972;
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
var G__164973 = null;
var G__164973__164974 = (function (o,k){
return null;
});
var G__164973__164975 = (function (o,k,not_found){
return not_found;
});
G__164973 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__164973__164974.call(this,o,k);
case  3 :
return G__164973__164975.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__164973;
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
var G__164977 = null;
var G__164977__164978 = (function (_,f){
return f.call(null);
});
var G__164977__164979 = (function (_,f,start){
return start;
});
G__164977 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__164977__164978.call(this,_,f);
case  3 :
return G__164977__164979.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__164977;
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
var G__164981 = null;
var G__164981__164982 = (function (_,n){
return null;
});
var G__164981__164983 = (function (_,n,not_found){
return not_found;
});
G__164981 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__164981__164982.call(this,_,n);
case  3 :
return G__164981__164983.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__164981;
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
var ci_reduce__164991 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__164985 = cljs.core._nth.call(null,cicoll,0);
var n__164986 = 1;

while(true){
if(cljs.core.truth_((n__164986 < cljs.core._count.call(null,cicoll))))
{{
var G__164995 = f.call(null,val__164985,cljs.core._nth.call(null,cicoll,n__164986));
var G__164996 = (n__164986 + 1);
val__164985 = G__164995;
n__164986 = G__164996;
continue;
}
} else
{return val__164985;
}
break;
}
}
});
var ci_reduce__164992 = (function (cicoll,f,val){
var val__164987 = val;
var n__164988 = 0;

while(true){
if(cljs.core.truth_((n__164988 < cljs.core._count.call(null,cicoll))))
{{
var G__164997 = f.call(null,val__164987,cljs.core._nth.call(null,cicoll,n__164988));
var G__164998 = (n__164988 + 1);
val__164987 = G__164997;
n__164988 = G__164998;
continue;
}
} else
{return val__164987;
}
break;
}
});
var ci_reduce__164993 = (function (cicoll,f,val,idx){
var val__164989 = val;
var n__164990 = idx;

while(true){
if(cljs.core.truth_((n__164990 < cljs.core._count.call(null,cicoll))))
{{
var G__164999 = f.call(null,val__164989,cljs.core._nth.call(null,cicoll,n__164990));
var G__165000 = (n__164990 + 1);
val__164989 = G__164999;
n__164990 = G__165000;
continue;
}
} else
{return val__164989;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__164991.call(this,cicoll,f);
case  3 :
return ci_reduce__164992.call(this,cicoll,f,val);
case  4 :
return ci_reduce__164993.call(this,cicoll,f,val,idx);
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
var this__165001 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__165014 = null;
var G__165014__165015 = (function (_,f){
var this__165002 = this;
return cljs.core.ci_reduce.call(null,this__165002.a,f,(this__165002.a[this__165002.i]),(this__165002.i + 1));
});
var G__165014__165016 = (function (_,f,start){
var this__165003 = this;
return cljs.core.ci_reduce.call(null,this__165003.a,f,start,this__165003.i);
});
G__165014 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__165014__165015.call(this,_,f);
case  3 :
return G__165014__165016.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165014;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__165004 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__165005 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__165018 = null;
var G__165018__165019 = (function (coll,n){
var this__165006 = this;
var i__165007 = (n + this__165006.i);

if(cljs.core.truth_((i__165007 < this__165006.a.length)))
{return (this__165006.a[i__165007]);
} else
{return null;
}
});
var G__165018__165020 = (function (coll,n,not_found){
var this__165008 = this;
var i__165009 = (n + this__165008.i);

if(cljs.core.truth_((i__165009 < this__165008.a.length)))
{return (this__165008.a[i__165009]);
} else
{return not_found;
}
});
G__165018 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__165018__165019.call(this,coll,n);
case  3 :
return G__165018__165020.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165018;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__165010 = this;
return (this__165010.a.length - this__165010.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__165011 = this;
return (this__165011.a[this__165011.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__165012 = this;
if(cljs.core.truth_(((this__165012.i + 1) < this__165012.a.length)))
{return (new cljs.core.IndexedSeq(this__165012.a,(this__165012.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__165013 = this;
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
var G__165022 = null;
var G__165022__165023 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__165022__165024 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__165022 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__165022__165023.call(this,array,f);
case  3 :
return G__165022__165024.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165022;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__165026 = null;
var G__165026__165027 = (function (array,k){
return (array[k]);
});
var G__165026__165028 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__165026 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__165026__165027.call(this,array,k);
case  3 :
return G__165026__165028.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165026;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__165030 = null;
var G__165030__165031 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__165030__165032 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__165030 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__165030__165031.call(this,array,n);
case  3 :
return G__165030__165032.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165030;
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
var temp__3698__auto____165034 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____165034))
{var s__165035 = temp__3698__auto____165034;

return cljs.core._first.call(null,s__165035);
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
var G__165036 = cljs.core.next.call(null,s);
s = G__165036;
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
var s__165037 = cljs.core.seq.call(null,x);
var n__165038 = 0;

while(true){
if(cljs.core.truth_(s__165037))
{{
var G__165039 = cljs.core.next.call(null,s__165037);
var G__165040 = (n__165038 + 1);
s__165037 = G__165039;
n__165038 = G__165040;
continue;
}
} else
{return n__165038;
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
var conj__165041 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__165042 = (function() { 
var G__165044__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__165045 = conj.call(null,coll,x);
var G__165046 = cljs.core.first.call(null,xs);
var G__165047 = cljs.core.next.call(null,xs);
coll = G__165045;
x = G__165046;
xs = G__165047;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__165044 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165044__delegate.call(this, coll, x, xs);
};
G__165044.cljs$lang$maxFixedArity = 2;
G__165044.cljs$lang$applyTo = (function (arglist__165048){
var coll = cljs.core.first(arglist__165048);
var x = cljs.core.first(cljs.core.next(arglist__165048));
var xs = cljs.core.rest(cljs.core.next(arglist__165048));
return G__165044__delegate.call(this, coll, x, xs);
});
return G__165044;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__165041.call(this,coll,x);
default:
return conj__165042.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__165042.cljs$lang$applyTo;
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
var nth__165049 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__165050 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__165049.call(this,coll,n);
case  3 :
return nth__165050.call(this,coll,n,not_found);
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
var get__165052 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__165053 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__165052.call(this,o,k);
case  3 :
return get__165053.call(this,o,k,not_found);
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
var assoc__165056 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__165057 = (function() { 
var G__165059__delegate = function (coll,k,v,kvs){
while(true){
var ret__165055 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__165060 = ret__165055;
var G__165061 = cljs.core.first.call(null,kvs);
var G__165062 = cljs.core.second.call(null,kvs);
var G__165063 = cljs.core.nnext.call(null,kvs);
coll = G__165060;
k = G__165061;
v = G__165062;
kvs = G__165063;
continue;
}
} else
{return ret__165055;
}
break;
}
};
var G__165059 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165059__delegate.call(this, coll, k, v, kvs);
};
G__165059.cljs$lang$maxFixedArity = 3;
G__165059.cljs$lang$applyTo = (function (arglist__165064){
var coll = cljs.core.first(arglist__165064);
var k = cljs.core.first(cljs.core.next(arglist__165064));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165064)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165064)));
return G__165059__delegate.call(this, coll, k, v, kvs);
});
return G__165059;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__165056.call(this,coll,k,v);
default:
return assoc__165057.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__165057.cljs$lang$applyTo;
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
var dissoc__165066 = (function (coll){
return coll;
});
var dissoc__165067 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__165068 = (function() { 
var G__165070__delegate = function (coll,k,ks){
while(true){
var ret__165065 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__165071 = ret__165065;
var G__165072 = cljs.core.first.call(null,ks);
var G__165073 = cljs.core.next.call(null,ks);
coll = G__165071;
k = G__165072;
ks = G__165073;
continue;
}
} else
{return ret__165065;
}
break;
}
};
var G__165070 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165070__delegate.call(this, coll, k, ks);
};
G__165070.cljs$lang$maxFixedArity = 2;
G__165070.cljs$lang$applyTo = (function (arglist__165074){
var coll = cljs.core.first(arglist__165074);
var k = cljs.core.first(cljs.core.next(arglist__165074));
var ks = cljs.core.rest(cljs.core.next(arglist__165074));
return G__165070__delegate.call(this, coll, k, ks);
});
return G__165070;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__165066.call(this,coll);
case  2 :
return dissoc__165067.call(this,coll,k);
default:
return dissoc__165068.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__165068.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____165075 = o;

if(cljs.core.truth_((function (){var and__3546__auto____165076 = x__451__auto____165075;

if(cljs.core.truth_(and__3546__auto____165076))
{var and__3546__auto____165077 = x__451__auto____165075.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____165077))
{return cljs.core.not.call(null,x__451__auto____165075.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____165077;
}
} else
{return and__3546__auto____165076;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____165075);
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
var disj__165079 = (function (coll){
return coll;
});
var disj__165080 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__165081 = (function() { 
var G__165083__delegate = function (coll,k,ks){
while(true){
var ret__165078 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__165084 = ret__165078;
var G__165085 = cljs.core.first.call(null,ks);
var G__165086 = cljs.core.next.call(null,ks);
coll = G__165084;
k = G__165085;
ks = G__165086;
continue;
}
} else
{return ret__165078;
}
break;
}
};
var G__165083 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165083__delegate.call(this, coll, k, ks);
};
G__165083.cljs$lang$maxFixedArity = 2;
G__165083.cljs$lang$applyTo = (function (arglist__165087){
var coll = cljs.core.first(arglist__165087);
var k = cljs.core.first(cljs.core.next(arglist__165087));
var ks = cljs.core.rest(cljs.core.next(arglist__165087));
return G__165083__delegate.call(this, coll, k, ks);
});
return G__165083;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__165079.call(this,coll);
case  2 :
return disj__165080.call(this,coll,k);
default:
return disj__165081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__165081.cljs$lang$applyTo;
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
{var x__451__auto____165088 = x;

if(cljs.core.truth_((function (){var and__3546__auto____165089 = x__451__auto____165088;

if(cljs.core.truth_(and__3546__auto____165089))
{var and__3546__auto____165090 = x__451__auto____165088.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____165090))
{return cljs.core.not.call(null,x__451__auto____165088.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____165090;
}
} else
{return and__3546__auto____165089;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____165088);
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
{var x__451__auto____165091 = x;

if(cljs.core.truth_((function (){var and__3546__auto____165092 = x__451__auto____165091;

if(cljs.core.truth_(and__3546__auto____165092))
{var and__3546__auto____165093 = x__451__auto____165091.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____165093))
{return cljs.core.not.call(null,x__451__auto____165091.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____165093;
}
} else
{return and__3546__auto____165092;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____165091);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____165094 = x;

if(cljs.core.truth_((function (){var and__3546__auto____165095 = x__451__auto____165094;

if(cljs.core.truth_(and__3546__auto____165095))
{var and__3546__auto____165096 = x__451__auto____165094.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____165096))
{return cljs.core.not.call(null,x__451__auto____165094.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____165096;
}
} else
{return and__3546__auto____165095;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____165094);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____165097 = x;

if(cljs.core.truth_((function (){var and__3546__auto____165098 = x__451__auto____165097;

if(cljs.core.truth_(and__3546__auto____165098))
{var and__3546__auto____165099 = x__451__auto____165097.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____165099))
{return cljs.core.not.call(null,x__451__auto____165097.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____165099;
}
} else
{return and__3546__auto____165098;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____165097);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____165100 = x;

if(cljs.core.truth_((function (){var and__3546__auto____165101 = x__451__auto____165100;

if(cljs.core.truth_(and__3546__auto____165101))
{var and__3546__auto____165102 = x__451__auto____165100.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____165102))
{return cljs.core.not.call(null,x__451__auto____165100.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____165102;
}
} else
{return and__3546__auto____165101;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____165100);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____165103 = x;

if(cljs.core.truth_((function (){var and__3546__auto____165104 = x__451__auto____165103;

if(cljs.core.truth_(and__3546__auto____165104))
{var and__3546__auto____165105 = x__451__auto____165103.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____165105))
{return cljs.core.not.call(null,x__451__auto____165103.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____165105;
}
} else
{return and__3546__auto____165104;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____165103);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____165106 = x;

if(cljs.core.truth_((function (){var and__3546__auto____165107 = x__451__auto____165106;

if(cljs.core.truth_(and__3546__auto____165107))
{var and__3546__auto____165108 = x__451__auto____165106.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____165108))
{return cljs.core.not.call(null,x__451__auto____165106.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____165108;
}
} else
{return and__3546__auto____165107;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____165106);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__165109 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__165109.push(key);
}));
return keys__165109;
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
{var x__451__auto____165110 = s;

if(cljs.core.truth_((function (){var and__3546__auto____165111 = x__451__auto____165110;

if(cljs.core.truth_(and__3546__auto____165111))
{var and__3546__auto____165112 = x__451__auto____165110.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____165112))
{return cljs.core.not.call(null,x__451__auto____165110.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____165112;
}
} else
{return and__3546__auto____165111;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____165110);
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
var and__3546__auto____165113 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____165113))
{return cljs.core.not.call(null,(function (){var or__3548__auto____165114 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____165114))
{return or__3548__auto____165114;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____165113;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____165115 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____165115))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____165115;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____165116 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____165116))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____165116;
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
var and__3546__auto____165117 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____165117))
{return (n == n.toFixed());
} else
{return and__3546__auto____165117;
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
if(cljs.core.truth_((function (){var and__3546__auto____165118 = coll;

if(cljs.core.truth_(and__3546__auto____165118))
{var and__3546__auto____165119 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____165119))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____165119;
}
} else
{return and__3546__auto____165118;
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
var distinct_QMARK___165124 = (function (x){
return true;
});
var distinct_QMARK___165125 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___165126 = (function() { 
var G__165128__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__165120 = cljs.core.set([y,x]);
var xs__165121 = more;

while(true){
var x__165122 = cljs.core.first.call(null,xs__165121);
var etc__165123 = cljs.core.next.call(null,xs__165121);

if(cljs.core.truth_(xs__165121))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__165120,x__165122)))
{return false;
} else
{{
var G__165129 = cljs.core.conj.call(null,s__165120,x__165122);
var G__165130 = etc__165123;
s__165120 = G__165129;
xs__165121 = G__165130;
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
var G__165128 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165128__delegate.call(this, x, y, more);
};
G__165128.cljs$lang$maxFixedArity = 2;
G__165128.cljs$lang$applyTo = (function (arglist__165131){
var x = cljs.core.first(arglist__165131);
var y = cljs.core.first(cljs.core.next(arglist__165131));
var more = cljs.core.rest(cljs.core.next(arglist__165131));
return G__165128__delegate.call(this, x, y, more);
});
return G__165128;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___165124.call(this,x);
case  2 :
return distinct_QMARK___165125.call(this,x,y);
default:
return distinct_QMARK___165126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___165126.cljs$lang$applyTo;
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
var r__165132 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__165132)))
{return r__165132;
} else
{if(cljs.core.truth_(r__165132))
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
var sort__165134 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__165135 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__165133 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__165133,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__165133);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__165134.call(this,comp);
case  2 :
return sort__165135.call(this,comp,coll);
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
var sort_by__165137 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__165138 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__165137.call(this,keyfn,comp);
case  3 :
return sort_by__165138.call(this,keyfn,comp,coll);
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
var reduce__165140 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__165141 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__165140.call(this,f,val);
case  3 :
return reduce__165141.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__165147 = (function (f,coll){
var temp__3695__auto____165143 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____165143))
{var s__165144 = temp__3695__auto____165143;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__165144),cljs.core.next.call(null,s__165144));
} else
{return f.call(null);
}
});
var seq_reduce__165148 = (function (f,val,coll){
var val__165145 = val;
var coll__165146 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__165146))
{{
var G__165150 = f.call(null,val__165145,cljs.core.first.call(null,coll__165146));
var G__165151 = cljs.core.next.call(null,coll__165146);
val__165145 = G__165150;
coll__165146 = G__165151;
continue;
}
} else
{return val__165145;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__165147.call(this,f,val);
case  3 :
return seq_reduce__165148.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__165152 = null;
var G__165152__165153 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__165152__165154 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__165152 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__165152__165153.call(this,coll,f);
case  3 :
return G__165152__165154.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165152;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___165156 = (function (){
return 0;
});
var _PLUS___165157 = (function (x){
return x;
});
var _PLUS___165158 = (function (x,y){
return (x + y);
});
var _PLUS___165159 = (function() { 
var G__165161__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__165161 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165161__delegate.call(this, x, y, more);
};
G__165161.cljs$lang$maxFixedArity = 2;
G__165161.cljs$lang$applyTo = (function (arglist__165162){
var x = cljs.core.first(arglist__165162);
var y = cljs.core.first(cljs.core.next(arglist__165162));
var more = cljs.core.rest(cljs.core.next(arglist__165162));
return G__165161__delegate.call(this, x, y, more);
});
return G__165161;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___165156.call(this);
case  1 :
return _PLUS___165157.call(this,x);
case  2 :
return _PLUS___165158.call(this,x,y);
default:
return _PLUS___165159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___165159.cljs$lang$applyTo;
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
var ___165163 = (function (x){
return (- x);
});
var ___165164 = (function (x,y){
return (x - y);
});
var ___165165 = (function() { 
var G__165167__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__165167 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165167__delegate.call(this, x, y, more);
};
G__165167.cljs$lang$maxFixedArity = 2;
G__165167.cljs$lang$applyTo = (function (arglist__165168){
var x = cljs.core.first(arglist__165168);
var y = cljs.core.first(cljs.core.next(arglist__165168));
var more = cljs.core.rest(cljs.core.next(arglist__165168));
return G__165167__delegate.call(this, x, y, more);
});
return G__165167;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___165163.call(this,x);
case  2 :
return ___165164.call(this,x,y);
default:
return ___165165.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___165165.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___165169 = (function (){
return 1;
});
var _STAR___165170 = (function (x){
return x;
});
var _STAR___165171 = (function (x,y){
return (x * y);
});
var _STAR___165172 = (function() { 
var G__165174__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__165174 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165174__delegate.call(this, x, y, more);
};
G__165174.cljs$lang$maxFixedArity = 2;
G__165174.cljs$lang$applyTo = (function (arglist__165175){
var x = cljs.core.first(arglist__165175);
var y = cljs.core.first(cljs.core.next(arglist__165175));
var more = cljs.core.rest(cljs.core.next(arglist__165175));
return G__165174__delegate.call(this, x, y, more);
});
return G__165174;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___165169.call(this);
case  1 :
return _STAR___165170.call(this,x);
case  2 :
return _STAR___165171.call(this,x,y);
default:
return _STAR___165172.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___165172.cljs$lang$applyTo;
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
var _SLASH___165176 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___165177 = (function (x,y){
return (x / y);
});
var _SLASH___165178 = (function() { 
var G__165180__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__165180 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165180__delegate.call(this, x, y, more);
};
G__165180.cljs$lang$maxFixedArity = 2;
G__165180.cljs$lang$applyTo = (function (arglist__165181){
var x = cljs.core.first(arglist__165181);
var y = cljs.core.first(cljs.core.next(arglist__165181));
var more = cljs.core.rest(cljs.core.next(arglist__165181));
return G__165180__delegate.call(this, x, y, more);
});
return G__165180;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___165176.call(this,x);
case  2 :
return _SLASH___165177.call(this,x,y);
default:
return _SLASH___165178.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___165178.cljs$lang$applyTo;
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
var _LT___165182 = (function (x){
return true;
});
var _LT___165183 = (function (x,y){
return (x < y);
});
var _LT___165184 = (function() { 
var G__165186__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__165187 = y;
var G__165188 = cljs.core.first.call(null,more);
var G__165189 = cljs.core.next.call(null,more);
x = G__165187;
y = G__165188;
more = G__165189;
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
var G__165186 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165186__delegate.call(this, x, y, more);
};
G__165186.cljs$lang$maxFixedArity = 2;
G__165186.cljs$lang$applyTo = (function (arglist__165190){
var x = cljs.core.first(arglist__165190);
var y = cljs.core.first(cljs.core.next(arglist__165190));
var more = cljs.core.rest(cljs.core.next(arglist__165190));
return G__165186__delegate.call(this, x, y, more);
});
return G__165186;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___165182.call(this,x);
case  2 :
return _LT___165183.call(this,x,y);
default:
return _LT___165184.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___165184.cljs$lang$applyTo;
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
var _LT__EQ___165191 = (function (x){
return true;
});
var _LT__EQ___165192 = (function (x,y){
return (x <= y);
});
var _LT__EQ___165193 = (function() { 
var G__165195__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__165196 = y;
var G__165197 = cljs.core.first.call(null,more);
var G__165198 = cljs.core.next.call(null,more);
x = G__165196;
y = G__165197;
more = G__165198;
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
var G__165195 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165195__delegate.call(this, x, y, more);
};
G__165195.cljs$lang$maxFixedArity = 2;
G__165195.cljs$lang$applyTo = (function (arglist__165199){
var x = cljs.core.first(arglist__165199);
var y = cljs.core.first(cljs.core.next(arglist__165199));
var more = cljs.core.rest(cljs.core.next(arglist__165199));
return G__165195__delegate.call(this, x, y, more);
});
return G__165195;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___165191.call(this,x);
case  2 :
return _LT__EQ___165192.call(this,x,y);
default:
return _LT__EQ___165193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___165193.cljs$lang$applyTo;
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
var _GT___165200 = (function (x){
return true;
});
var _GT___165201 = (function (x,y){
return (x > y);
});
var _GT___165202 = (function() { 
var G__165204__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__165205 = y;
var G__165206 = cljs.core.first.call(null,more);
var G__165207 = cljs.core.next.call(null,more);
x = G__165205;
y = G__165206;
more = G__165207;
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
var G__165204 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165204__delegate.call(this, x, y, more);
};
G__165204.cljs$lang$maxFixedArity = 2;
G__165204.cljs$lang$applyTo = (function (arglist__165208){
var x = cljs.core.first(arglist__165208);
var y = cljs.core.first(cljs.core.next(arglist__165208));
var more = cljs.core.rest(cljs.core.next(arglist__165208));
return G__165204__delegate.call(this, x, y, more);
});
return G__165204;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___165200.call(this,x);
case  2 :
return _GT___165201.call(this,x,y);
default:
return _GT___165202.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___165202.cljs$lang$applyTo;
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
var _GT__EQ___165209 = (function (x){
return true;
});
var _GT__EQ___165210 = (function (x,y){
return (x >= y);
});
var _GT__EQ___165211 = (function() { 
var G__165213__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__165214 = y;
var G__165215 = cljs.core.first.call(null,more);
var G__165216 = cljs.core.next.call(null,more);
x = G__165214;
y = G__165215;
more = G__165216;
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
var G__165213 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165213__delegate.call(this, x, y, more);
};
G__165213.cljs$lang$maxFixedArity = 2;
G__165213.cljs$lang$applyTo = (function (arglist__165217){
var x = cljs.core.first(arglist__165217);
var y = cljs.core.first(cljs.core.next(arglist__165217));
var more = cljs.core.rest(cljs.core.next(arglist__165217));
return G__165213__delegate.call(this, x, y, more);
});
return G__165213;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___165209.call(this,x);
case  2 :
return _GT__EQ___165210.call(this,x,y);
default:
return _GT__EQ___165211.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___165211.cljs$lang$applyTo;
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
var max__165218 = (function (x){
return x;
});
var max__165219 = (function (x,y){
return ((x > y) ? x : y);
});
var max__165220 = (function() { 
var G__165222__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__165222 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165222__delegate.call(this, x, y, more);
};
G__165222.cljs$lang$maxFixedArity = 2;
G__165222.cljs$lang$applyTo = (function (arglist__165223){
var x = cljs.core.first(arglist__165223);
var y = cljs.core.first(cljs.core.next(arglist__165223));
var more = cljs.core.rest(cljs.core.next(arglist__165223));
return G__165222__delegate.call(this, x, y, more);
});
return G__165222;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__165218.call(this,x);
case  2 :
return max__165219.call(this,x,y);
default:
return max__165220.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__165220.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__165224 = (function (x){
return x;
});
var min__165225 = (function (x,y){
return ((x < y) ? x : y);
});
var min__165226 = (function() { 
var G__165228__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__165228 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165228__delegate.call(this, x, y, more);
};
G__165228.cljs$lang$maxFixedArity = 2;
G__165228.cljs$lang$applyTo = (function (arglist__165229){
var x = cljs.core.first(arglist__165229);
var y = cljs.core.first(cljs.core.next(arglist__165229));
var more = cljs.core.rest(cljs.core.next(arglist__165229));
return G__165228__delegate.call(this, x, y, more);
});
return G__165228;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__165224.call(this,x);
case  2 :
return min__165225.call(this,x,y);
default:
return min__165226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__165226.cljs$lang$applyTo;
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
var rem__165230 = (n % d);

return cljs.core.fix.call(null,((n - rem__165230) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__165231 = cljs.core.quot.call(null,n,d);

return (n - (d * q__165231));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__165232 = (function (){
return Math.random.call(null);
});
var rand__165233 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__165232.call(this);
case  1 :
return rand__165233.call(this,n);
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
var _EQ__EQ___165235 = (function (x){
return true;
});
var _EQ__EQ___165236 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___165237 = (function() { 
var G__165239__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__165240 = y;
var G__165241 = cljs.core.first.call(null,more);
var G__165242 = cljs.core.next.call(null,more);
x = G__165240;
y = G__165241;
more = G__165242;
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
var G__165239 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165239__delegate.call(this, x, y, more);
};
G__165239.cljs$lang$maxFixedArity = 2;
G__165239.cljs$lang$applyTo = (function (arglist__165243){
var x = cljs.core.first(arglist__165243);
var y = cljs.core.first(cljs.core.next(arglist__165243));
var more = cljs.core.rest(cljs.core.next(arglist__165243));
return G__165239__delegate.call(this, x, y, more);
});
return G__165239;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___165235.call(this,x);
case  2 :
return _EQ__EQ___165236.call(this,x,y);
default:
return _EQ__EQ___165237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___165237.cljs$lang$applyTo;
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
var n__165244 = n;
var xs__165245 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____165246 = xs__165245;

if(cljs.core.truth_(and__3546__auto____165246))
{return (n__165244 > 0);
} else
{return and__3546__auto____165246;
}
})()))
{{
var G__165247 = (n__165244 - 1);
var G__165248 = cljs.core.next.call(null,xs__165245);
n__165244 = G__165247;
xs__165245 = G__165248;
continue;
}
} else
{return xs__165245;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__165253 = null;
var G__165253__165254 = (function (coll,n){
var temp__3695__auto____165249 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____165249))
{var xs__165250 = temp__3695__auto____165249;

return cljs.core.first.call(null,xs__165250);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__165253__165255 = (function (coll,n,not_found){
var temp__3695__auto____165251 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____165251))
{var xs__165252 = temp__3695__auto____165251;

return cljs.core.first.call(null,xs__165252);
} else
{return not_found;
}
});
G__165253 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__165253__165254.call(this,coll,n);
case  3 :
return G__165253__165255.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165253;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___165257 = (function (){
return "";
});
var str_STAR___165258 = (function (x){
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
var str_STAR___165259 = (function() { 
var G__165261__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__165262 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__165263 = cljs.core.next.call(null,more);
sb = G__165262;
more = G__165263;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__165261 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__165261__delegate.call(this, x, ys);
};
G__165261.cljs$lang$maxFixedArity = 1;
G__165261.cljs$lang$applyTo = (function (arglist__165264){
var x = cljs.core.first(arglist__165264);
var ys = cljs.core.rest(arglist__165264);
return G__165261__delegate.call(this, x, ys);
});
return G__165261;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___165257.call(this);
case  1 :
return str_STAR___165258.call(this,x);
default:
return str_STAR___165259.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___165259.cljs$lang$applyTo;
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
var str__165265 = (function (){
return "";
});
var str__165266 = (function (x){
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
var str__165267 = (function() { 
var G__165269__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__165270 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__165271 = cljs.core.next.call(null,more);
sb = G__165270;
more = G__165271;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__165269 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__165269__delegate.call(this, x, ys);
};
G__165269.cljs$lang$maxFixedArity = 1;
G__165269.cljs$lang$applyTo = (function (arglist__165272){
var x = cljs.core.first(arglist__165272);
var ys = cljs.core.rest(arglist__165272);
return G__165269__delegate.call(this, x, ys);
});
return G__165269;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__165265.call(this);
case  1 :
return str__165266.call(this,x);
default:
return str__165267.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__165267.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__165273 = (function (s,start){
return s.substring(start);
});
var subs__165274 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__165273.call(this,s,start);
case  3 :
return subs__165274.call(this,s,start,end);
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
var symbol__165276 = (function (name){
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
var symbol__165277 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__165276.call(this,ns);
case  2 :
return symbol__165277.call(this,ns,name);
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
var keyword__165279 = (function (name){
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
var keyword__165280 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__165279.call(this,ns);
case  2 :
return keyword__165280.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__165282 = cljs.core.seq.call(null,x);
var ys__165283 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__165282 === null)))
{return (ys__165283 === null);
} else
{if(cljs.core.truth_((ys__165283 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__165282),cljs.core.first.call(null,ys__165283))))
{{
var G__165284 = cljs.core.next.call(null,xs__165282);
var G__165285 = cljs.core.next.call(null,ys__165283);
xs__165282 = G__165284;
ys__165283 = G__165285;
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
return cljs.core.reduce.call(null,(function (p1__165286_SHARP_,p2__165287_SHARP_){
return cljs.core.hash_combine.call(null,p1__165286_SHARP_,cljs.core.hash.call(null,p2__165287_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__165288__165289 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__165288__165289))
{var G__165291__165293 = cljs.core.first.call(null,G__165288__165289);
var vec__165292__165294 = G__165291__165293;
var key_name__165295 = cljs.core.nth.call(null,vec__165292__165294,0,null);
var f__165296 = cljs.core.nth.call(null,vec__165292__165294,1,null);
var G__165288__165297 = G__165288__165289;

var G__165291__165298 = G__165291__165293;
var G__165288__165299 = G__165288__165297;

while(true){
var vec__165300__165301 = G__165291__165298;
var key_name__165302 = cljs.core.nth.call(null,vec__165300__165301,0,null);
var f__165303 = cljs.core.nth.call(null,vec__165300__165301,1,null);
var G__165288__165304 = G__165288__165299;

var str_name__165305 = cljs.core.name.call(null,key_name__165302);

obj[str_name__165305] = f__165303;
var temp__3698__auto____165306 = cljs.core.next.call(null,G__165288__165304);

if(cljs.core.truth_(temp__3698__auto____165306))
{var G__165288__165307 = temp__3698__auto____165306;

{
var G__165308 = cljs.core.first.call(null,G__165288__165307);
var G__165309 = G__165288__165307;
G__165291__165298 = G__165308;
G__165288__165299 = G__165309;
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
var this__165310 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__165311 = this;
return (new cljs.core.List(this__165311.meta,o,coll,(this__165311.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__165312 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__165313 = this;
return this__165313.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__165314 = this;
return this__165314.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__165315 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__165316 = this;
return this__165316.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__165317 = this;
return this__165317.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__165318 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__165319 = this;
return (new cljs.core.List(meta,this__165319.first,this__165319.rest,this__165319.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__165320 = this;
return this__165320.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__165321 = this;
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
var this__165322 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__165323 = this;
return (new cljs.core.List(this__165323.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__165324 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__165325 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__165326 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__165327 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__165328 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__165329 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__165330 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__165331 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__165332 = this;
return this__165332.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__165333 = this;
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
list.cljs$lang$applyTo = (function (arglist__165334){
var items = cljs.core.seq( arglist__165334 );;
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
var this__165335 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__165336 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__165337 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__165338 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__165338.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__165339 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__165340 = this;
return this__165340.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__165341 = this;
if(cljs.core.truth_((this__165341.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__165341.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__165342 = this;
return this__165342.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__165343 = this;
return (new cljs.core.Cons(meta,this__165343.first,this__165343.rest));
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
var G__165344 = null;
var G__165344__165345 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__165344__165346 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__165344 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__165344__165345.call(this,string,f);
case  3 :
return G__165344__165346.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165344;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__165348 = null;
var G__165348__165349 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__165348__165350 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__165348 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__165348__165349.call(this,string,k);
case  3 :
return G__165348__165350.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165348;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__165352 = null;
var G__165352__165353 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__165352__165354 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__165352 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__165352__165353.call(this,string,n);
case  3 :
return G__165352__165354.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165352;
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
var G__165362 = null;
var G__165362__165363 = (function (tsym165356,coll){
var tsym165356__165358 = this;

var this$__165359 = tsym165356__165358;

return cljs.core.get.call(null,coll,this$__165359.toString());
});
var G__165362__165364 = (function (tsym165357,coll,not_found){
var tsym165357__165360 = this;

var this$__165361 = tsym165357__165360;

return cljs.core.get.call(null,coll,this$__165361.toString(),not_found);
});
G__165362 = function(tsym165357,coll,not_found){
switch(arguments.length){
case  2 :
return G__165362__165363.call(this,tsym165357,coll);
case  3 :
return G__165362__165364.call(this,tsym165357,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165362;
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
var x__165366 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__165366;
} else
{lazy_seq.x = x__165366.call(null);
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
var this__165367 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__165368 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__165369 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__165370 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__165370.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__165371 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__165372 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__165373 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__165374 = this;
return this__165374.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__165375 = this;
return (new cljs.core.LazySeq(meta,this__165375.realized,this__165375.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__165376 = [];

var s__165377 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__165377)))
{ary__165376.push(cljs.core.first.call(null,s__165377));
{
var G__165378 = cljs.core.next.call(null,s__165377);
s__165377 = G__165378;
continue;
}
} else
{return ary__165376;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__165379 = s;
var i__165380 = n;
var sum__165381 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____165382 = (i__165380 > 0);

if(cljs.core.truth_(and__3546__auto____165382))
{return cljs.core.seq.call(null,s__165379);
} else
{return and__3546__auto____165382;
}
})()))
{{
var G__165383 = cljs.core.next.call(null,s__165379);
var G__165384 = (i__165380 - 1);
var G__165385 = (sum__165381 + 1);
s__165379 = G__165383;
i__165380 = G__165384;
sum__165381 = G__165385;
continue;
}
} else
{return sum__165381;
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
var concat__165389 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__165390 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__165391 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__165386 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__165386))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__165386),concat.call(null,cljs.core.rest.call(null,s__165386),y));
} else
{return y;
}
})));
});
var concat__165392 = (function() { 
var G__165394__delegate = function (x,y,zs){
var cat__165388 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__165387 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__165387))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__165387),cat.call(null,cljs.core.rest.call(null,xys__165387),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__165388.call(null,concat.call(null,x,y),zs);
};
var G__165394 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165394__delegate.call(this, x, y, zs);
};
G__165394.cljs$lang$maxFixedArity = 2;
G__165394.cljs$lang$applyTo = (function (arglist__165395){
var x = cljs.core.first(arglist__165395);
var y = cljs.core.first(cljs.core.next(arglist__165395));
var zs = cljs.core.rest(cljs.core.next(arglist__165395));
return G__165394__delegate.call(this, x, y, zs);
});
return G__165394;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__165389.call(this);
case  1 :
return concat__165390.call(this,x);
case  2 :
return concat__165391.call(this,x,y);
default:
return concat__165392.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__165392.cljs$lang$applyTo;
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
var list_STAR___165396 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___165397 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___165398 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___165399 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___165400 = (function() { 
var G__165402__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__165402 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__165402__delegate.call(this, a, b, c, d, more);
};
G__165402.cljs$lang$maxFixedArity = 4;
G__165402.cljs$lang$applyTo = (function (arglist__165403){
var a = cljs.core.first(arglist__165403);
var b = cljs.core.first(cljs.core.next(arglist__165403));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165403)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__165403))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__165403))));
return G__165402__delegate.call(this, a, b, c, d, more);
});
return G__165402;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___165396.call(this,a);
case  2 :
return list_STAR___165397.call(this,a,b);
case  3 :
return list_STAR___165398.call(this,a,b,c);
case  4 :
return list_STAR___165399.call(this,a,b,c,d);
default:
return list_STAR___165400.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___165400.cljs$lang$applyTo;
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
var apply__165413 = (function (f,args){
var fixed_arity__165404 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__165404 + 1)) <= fixed_arity__165404)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__165414 = (function (f,x,args){
var arglist__165405 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__165406 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__165405,fixed_arity__165406) <= fixed_arity__165406)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__165405));
} else
{return f.cljs$lang$applyTo(arglist__165405);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__165405));
}
});
var apply__165415 = (function (f,x,y,args){
var arglist__165407 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__165408 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__165407,fixed_arity__165408) <= fixed_arity__165408)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__165407));
} else
{return f.cljs$lang$applyTo(arglist__165407);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__165407));
}
});
var apply__165416 = (function (f,x,y,z,args){
var arglist__165409 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__165410 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__165409,fixed_arity__165410) <= fixed_arity__165410)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__165409));
} else
{return f.cljs$lang$applyTo(arglist__165409);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__165409));
}
});
var apply__165417 = (function() { 
var G__165419__delegate = function (f,a,b,c,d,args){
var arglist__165411 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__165412 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__165411,fixed_arity__165412) <= fixed_arity__165412)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__165411));
} else
{return f.cljs$lang$applyTo(arglist__165411);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__165411));
}
};
var G__165419 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__165419__delegate.call(this, f, a, b, c, d, args);
};
G__165419.cljs$lang$maxFixedArity = 5;
G__165419.cljs$lang$applyTo = (function (arglist__165420){
var f = cljs.core.first(arglist__165420);
var a = cljs.core.first(cljs.core.next(arglist__165420));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165420)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__165420))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__165420)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__165420)))));
return G__165419__delegate.call(this, f, a, b, c, d, args);
});
return G__165419;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__165413.call(this,f,a);
case  3 :
return apply__165414.call(this,f,a,b);
case  4 :
return apply__165415.call(this,f,a,b,c);
case  5 :
return apply__165416.call(this,f,a,b,c,d);
default:
return apply__165417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__165417.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__165421){
var obj = cljs.core.first(arglist__165421);
var f = cljs.core.first(cljs.core.next(arglist__165421));
var args = cljs.core.rest(cljs.core.next(arglist__165421));
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
var not_EQ___165422 = (function (x){
return false;
});
var not_EQ___165423 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___165424 = (function() { 
var G__165426__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__165426 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165426__delegate.call(this, x, y, more);
};
G__165426.cljs$lang$maxFixedArity = 2;
G__165426.cljs$lang$applyTo = (function (arglist__165427){
var x = cljs.core.first(arglist__165427);
var y = cljs.core.first(cljs.core.next(arglist__165427));
var more = cljs.core.rest(cljs.core.next(arglist__165427));
return G__165426__delegate.call(this, x, y, more);
});
return G__165426;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___165422.call(this,x);
case  2 :
return not_EQ___165423.call(this,x,y);
default:
return not_EQ___165424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___165424.cljs$lang$applyTo;
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
var G__165428 = pred;
var G__165429 = cljs.core.next.call(null,coll);
pred = G__165428;
coll = G__165429;
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
{var or__3548__auto____165430 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____165430))
{return or__3548__auto____165430;
} else
{{
var G__165431 = pred;
var G__165432 = cljs.core.next.call(null,coll);
pred = G__165431;
coll = G__165432;
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
var G__165433 = null;
var G__165433__165434 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__165433__165435 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__165433__165436 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__165433__165437 = (function() { 
var G__165439__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__165439 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165439__delegate.call(this, x, y, zs);
};
G__165439.cljs$lang$maxFixedArity = 2;
G__165439.cljs$lang$applyTo = (function (arglist__165440){
var x = cljs.core.first(arglist__165440);
var y = cljs.core.first(cljs.core.next(arglist__165440));
var zs = cljs.core.rest(cljs.core.next(arglist__165440));
return G__165439__delegate.call(this, x, y, zs);
});
return G__165439;
})()
;
G__165433 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__165433__165434.call(this);
case  1 :
return G__165433__165435.call(this,x);
case  2 :
return G__165433__165436.call(this,x,y);
default:
return G__165433__165437.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__165433.cljs$lang$maxFixedArity = 2;
G__165433.cljs$lang$applyTo = G__165433__165437.cljs$lang$applyTo;
return G__165433;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__165441__delegate = function (args){
return x;
};
var G__165441 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__165441__delegate.call(this, args);
};
G__165441.cljs$lang$maxFixedArity = 0;
G__165441.cljs$lang$applyTo = (function (arglist__165442){
var args = cljs.core.seq( arglist__165442 );;
return G__165441__delegate.call(this, args);
});
return G__165441;
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
var comp__165446 = (function (){
return cljs.core.identity;
});
var comp__165447 = (function (f){
return f;
});
var comp__165448 = (function (f,g){
return (function() {
var G__165452 = null;
var G__165452__165453 = (function (){
return f.call(null,g.call(null));
});
var G__165452__165454 = (function (x){
return f.call(null,g.call(null,x));
});
var G__165452__165455 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__165452__165456 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__165452__165457 = (function() { 
var G__165459__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__165459 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165459__delegate.call(this, x, y, z, args);
};
G__165459.cljs$lang$maxFixedArity = 3;
G__165459.cljs$lang$applyTo = (function (arglist__165460){
var x = cljs.core.first(arglist__165460);
var y = cljs.core.first(cljs.core.next(arglist__165460));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165460)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165460)));
return G__165459__delegate.call(this, x, y, z, args);
});
return G__165459;
})()
;
G__165452 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__165452__165453.call(this);
case  1 :
return G__165452__165454.call(this,x);
case  2 :
return G__165452__165455.call(this,x,y);
case  3 :
return G__165452__165456.call(this,x,y,z);
default:
return G__165452__165457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__165452.cljs$lang$maxFixedArity = 3;
G__165452.cljs$lang$applyTo = G__165452__165457.cljs$lang$applyTo;
return G__165452;
})()
});
var comp__165449 = (function (f,g,h){
return (function() {
var G__165461 = null;
var G__165461__165462 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__165461__165463 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__165461__165464 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__165461__165465 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__165461__165466 = (function() { 
var G__165468__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__165468 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165468__delegate.call(this, x, y, z, args);
};
G__165468.cljs$lang$maxFixedArity = 3;
G__165468.cljs$lang$applyTo = (function (arglist__165469){
var x = cljs.core.first(arglist__165469);
var y = cljs.core.first(cljs.core.next(arglist__165469));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165469)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165469)));
return G__165468__delegate.call(this, x, y, z, args);
});
return G__165468;
})()
;
G__165461 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__165461__165462.call(this);
case  1 :
return G__165461__165463.call(this,x);
case  2 :
return G__165461__165464.call(this,x,y);
case  3 :
return G__165461__165465.call(this,x,y,z);
default:
return G__165461__165466.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__165461.cljs$lang$maxFixedArity = 3;
G__165461.cljs$lang$applyTo = G__165461__165466.cljs$lang$applyTo;
return G__165461;
})()
});
var comp__165450 = (function() { 
var G__165470__delegate = function (f1,f2,f3,fs){
var fs__165443 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__165471__delegate = function (args){
var ret__165444 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__165443),args);
var fs__165445 = cljs.core.next.call(null,fs__165443);

while(true){
if(cljs.core.truth_(fs__165445))
{{
var G__165472 = cljs.core.first.call(null,fs__165445).call(null,ret__165444);
var G__165473 = cljs.core.next.call(null,fs__165445);
ret__165444 = G__165472;
fs__165445 = G__165473;
continue;
}
} else
{return ret__165444;
}
break;
}
};
var G__165471 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__165471__delegate.call(this, args);
};
G__165471.cljs$lang$maxFixedArity = 0;
G__165471.cljs$lang$applyTo = (function (arglist__165474){
var args = cljs.core.seq( arglist__165474 );;
return G__165471__delegate.call(this, args);
});
return G__165471;
})()
;
};
var G__165470 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165470__delegate.call(this, f1, f2, f3, fs);
};
G__165470.cljs$lang$maxFixedArity = 3;
G__165470.cljs$lang$applyTo = (function (arglist__165475){
var f1 = cljs.core.first(arglist__165475);
var f2 = cljs.core.first(cljs.core.next(arglist__165475));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165475)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165475)));
return G__165470__delegate.call(this, f1, f2, f3, fs);
});
return G__165470;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__165446.call(this);
case  1 :
return comp__165447.call(this,f1);
case  2 :
return comp__165448.call(this,f1,f2);
case  3 :
return comp__165449.call(this,f1,f2,f3);
default:
return comp__165450.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__165450.cljs$lang$applyTo;
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
var partial__165476 = (function (f,arg1){
return (function() { 
var G__165481__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__165481 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__165481__delegate.call(this, args);
};
G__165481.cljs$lang$maxFixedArity = 0;
G__165481.cljs$lang$applyTo = (function (arglist__165482){
var args = cljs.core.seq( arglist__165482 );;
return G__165481__delegate.call(this, args);
});
return G__165481;
})()
;
});
var partial__165477 = (function (f,arg1,arg2){
return (function() { 
var G__165483__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__165483 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__165483__delegate.call(this, args);
};
G__165483.cljs$lang$maxFixedArity = 0;
G__165483.cljs$lang$applyTo = (function (arglist__165484){
var args = cljs.core.seq( arglist__165484 );;
return G__165483__delegate.call(this, args);
});
return G__165483;
})()
;
});
var partial__165478 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__165485__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__165485 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__165485__delegate.call(this, args);
};
G__165485.cljs$lang$maxFixedArity = 0;
G__165485.cljs$lang$applyTo = (function (arglist__165486){
var args = cljs.core.seq( arglist__165486 );;
return G__165485__delegate.call(this, args);
});
return G__165485;
})()
;
});
var partial__165479 = (function() { 
var G__165487__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__165488__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__165488 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__165488__delegate.call(this, args);
};
G__165488.cljs$lang$maxFixedArity = 0;
G__165488.cljs$lang$applyTo = (function (arglist__165489){
var args = cljs.core.seq( arglist__165489 );;
return G__165488__delegate.call(this, args);
});
return G__165488;
})()
;
};
var G__165487 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__165487__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__165487.cljs$lang$maxFixedArity = 4;
G__165487.cljs$lang$applyTo = (function (arglist__165490){
var f = cljs.core.first(arglist__165490);
var arg1 = cljs.core.first(cljs.core.next(arglist__165490));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165490)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__165490))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__165490))));
return G__165487__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__165487;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__165476.call(this,f,arg1);
case  3 :
return partial__165477.call(this,f,arg1,arg2);
case  4 :
return partial__165478.call(this,f,arg1,arg2,arg3);
default:
return partial__165479.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__165479.cljs$lang$applyTo;
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
var fnil__165491 = (function (f,x){
return (function() {
var G__165495 = null;
var G__165495__165496 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__165495__165497 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__165495__165498 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__165495__165499 = (function() { 
var G__165501__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__165501 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165501__delegate.call(this, a, b, c, ds);
};
G__165501.cljs$lang$maxFixedArity = 3;
G__165501.cljs$lang$applyTo = (function (arglist__165502){
var a = cljs.core.first(arglist__165502);
var b = cljs.core.first(cljs.core.next(arglist__165502));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165502)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165502)));
return G__165501__delegate.call(this, a, b, c, ds);
});
return G__165501;
})()
;
G__165495 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__165495__165496.call(this,a);
case  2 :
return G__165495__165497.call(this,a,b);
case  3 :
return G__165495__165498.call(this,a,b,c);
default:
return G__165495__165499.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__165495.cljs$lang$maxFixedArity = 3;
G__165495.cljs$lang$applyTo = G__165495__165499.cljs$lang$applyTo;
return G__165495;
})()
});
var fnil__165492 = (function (f,x,y){
return (function() {
var G__165503 = null;
var G__165503__165504 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__165503__165505 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__165503__165506 = (function() { 
var G__165508__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__165508 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165508__delegate.call(this, a, b, c, ds);
};
G__165508.cljs$lang$maxFixedArity = 3;
G__165508.cljs$lang$applyTo = (function (arglist__165509){
var a = cljs.core.first(arglist__165509);
var b = cljs.core.first(cljs.core.next(arglist__165509));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165509)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165509)));
return G__165508__delegate.call(this, a, b, c, ds);
});
return G__165508;
})()
;
G__165503 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__165503__165504.call(this,a,b);
case  3 :
return G__165503__165505.call(this,a,b,c);
default:
return G__165503__165506.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__165503.cljs$lang$maxFixedArity = 3;
G__165503.cljs$lang$applyTo = G__165503__165506.cljs$lang$applyTo;
return G__165503;
})()
});
var fnil__165493 = (function (f,x,y,z){
return (function() {
var G__165510 = null;
var G__165510__165511 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__165510__165512 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__165510__165513 = (function() { 
var G__165515__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__165515 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165515__delegate.call(this, a, b, c, ds);
};
G__165515.cljs$lang$maxFixedArity = 3;
G__165515.cljs$lang$applyTo = (function (arglist__165516){
var a = cljs.core.first(arglist__165516);
var b = cljs.core.first(cljs.core.next(arglist__165516));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165516)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165516)));
return G__165515__delegate.call(this, a, b, c, ds);
});
return G__165515;
})()
;
G__165510 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__165510__165511.call(this,a,b);
case  3 :
return G__165510__165512.call(this,a,b,c);
default:
return G__165510__165513.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__165510.cljs$lang$maxFixedArity = 3;
G__165510.cljs$lang$applyTo = G__165510__165513.cljs$lang$applyTo;
return G__165510;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__165491.call(this,f,x);
case  3 :
return fnil__165492.call(this,f,x,y);
case  4 :
return fnil__165493.call(this,f,x,y,z);
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
var mapi__165519 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____165517 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____165517))
{var s__165518 = temp__3698__auto____165517;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__165518)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__165518)));
} else
{return null;
}
})));
});

return mapi__165519.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____165520 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____165520))
{var s__165521 = temp__3698__auto____165520;

var x__165522 = f.call(null,cljs.core.first.call(null,s__165521));

if(cljs.core.truth_((x__165522 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__165521));
} else
{return cljs.core.cons.call(null,x__165522,keep.call(null,f,cljs.core.rest.call(null,s__165521)));
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
var keepi__165532 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____165529 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____165529))
{var s__165530 = temp__3698__auto____165529;

var x__165531 = f.call(null,idx,cljs.core.first.call(null,s__165530));

if(cljs.core.truth_((x__165531 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__165530));
} else
{return cljs.core.cons.call(null,x__165531,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__165530)));
}
} else
{return null;
}
})));
});

return keepi__165532.call(null,0,coll);
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
var every_pred__165577 = (function (p){
return (function() {
var ep1 = null;
var ep1__165582 = (function (){
return true;
});
var ep1__165583 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__165584 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____165539 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____165539))
{return p.call(null,y);
} else
{return and__3546__auto____165539;
}
})());
});
var ep1__165585 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____165540 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____165540))
{var and__3546__auto____165541 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____165541))
{return p.call(null,z);
} else
{return and__3546__auto____165541;
}
} else
{return and__3546__auto____165540;
}
})());
});
var ep1__165586 = (function() { 
var G__165588__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____165542 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____165542))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____165542;
}
})());
};
var G__165588 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165588__delegate.call(this, x, y, z, args);
};
G__165588.cljs$lang$maxFixedArity = 3;
G__165588.cljs$lang$applyTo = (function (arglist__165589){
var x = cljs.core.first(arglist__165589);
var y = cljs.core.first(cljs.core.next(arglist__165589));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165589)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165589)));
return G__165588__delegate.call(this, x, y, z, args);
});
return G__165588;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__165582.call(this);
case  1 :
return ep1__165583.call(this,x);
case  2 :
return ep1__165584.call(this,x,y);
case  3 :
return ep1__165585.call(this,x,y,z);
default:
return ep1__165586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__165586.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__165578 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__165590 = (function (){
return true;
});
var ep2__165591 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____165543 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____165543))
{return p2.call(null,x);
} else
{return and__3546__auto____165543;
}
})());
});
var ep2__165592 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____165544 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____165544))
{var and__3546__auto____165545 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____165545))
{var and__3546__auto____165546 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____165546))
{return p2.call(null,y);
} else
{return and__3546__auto____165546;
}
} else
{return and__3546__auto____165545;
}
} else
{return and__3546__auto____165544;
}
})());
});
var ep2__165593 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____165547 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____165547))
{var and__3546__auto____165548 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____165548))
{var and__3546__auto____165549 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____165549))
{var and__3546__auto____165550 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____165550))
{var and__3546__auto____165551 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____165551))
{return p2.call(null,z);
} else
{return and__3546__auto____165551;
}
} else
{return and__3546__auto____165550;
}
} else
{return and__3546__auto____165549;
}
} else
{return and__3546__auto____165548;
}
} else
{return and__3546__auto____165547;
}
})());
});
var ep2__165594 = (function() { 
var G__165596__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____165552 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____165552))
{return cljs.core.every_QMARK_.call(null,(function (p1__165523_SHARP_){
var and__3546__auto____165553 = p1.call(null,p1__165523_SHARP_);

if(cljs.core.truth_(and__3546__auto____165553))
{return p2.call(null,p1__165523_SHARP_);
} else
{return and__3546__auto____165553;
}
}),args);
} else
{return and__3546__auto____165552;
}
})());
};
var G__165596 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165596__delegate.call(this, x, y, z, args);
};
G__165596.cljs$lang$maxFixedArity = 3;
G__165596.cljs$lang$applyTo = (function (arglist__165597){
var x = cljs.core.first(arglist__165597);
var y = cljs.core.first(cljs.core.next(arglist__165597));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165597)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165597)));
return G__165596__delegate.call(this, x, y, z, args);
});
return G__165596;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__165590.call(this);
case  1 :
return ep2__165591.call(this,x);
case  2 :
return ep2__165592.call(this,x,y);
case  3 :
return ep2__165593.call(this,x,y,z);
default:
return ep2__165594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__165594.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__165579 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__165598 = (function (){
return true;
});
var ep3__165599 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____165554 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____165554))
{var and__3546__auto____165555 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____165555))
{return p3.call(null,x);
} else
{return and__3546__auto____165555;
}
} else
{return and__3546__auto____165554;
}
})());
});
var ep3__165600 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____165556 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____165556))
{var and__3546__auto____165557 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____165557))
{var and__3546__auto____165558 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____165558))
{var and__3546__auto____165559 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____165559))
{var and__3546__auto____165560 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____165560))
{return p3.call(null,y);
} else
{return and__3546__auto____165560;
}
} else
{return and__3546__auto____165559;
}
} else
{return and__3546__auto____165558;
}
} else
{return and__3546__auto____165557;
}
} else
{return and__3546__auto____165556;
}
})());
});
var ep3__165601 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____165561 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____165561))
{var and__3546__auto____165562 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____165562))
{var and__3546__auto____165563 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____165563))
{var and__3546__auto____165564 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____165564))
{var and__3546__auto____165565 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____165565))
{var and__3546__auto____165566 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____165566))
{var and__3546__auto____165567 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____165567))
{var and__3546__auto____165568 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____165568))
{return p3.call(null,z);
} else
{return and__3546__auto____165568;
}
} else
{return and__3546__auto____165567;
}
} else
{return and__3546__auto____165566;
}
} else
{return and__3546__auto____165565;
}
} else
{return and__3546__auto____165564;
}
} else
{return and__3546__auto____165563;
}
} else
{return and__3546__auto____165562;
}
} else
{return and__3546__auto____165561;
}
})());
});
var ep3__165602 = (function() { 
var G__165604__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____165569 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____165569))
{return cljs.core.every_QMARK_.call(null,(function (p1__165524_SHARP_){
var and__3546__auto____165570 = p1.call(null,p1__165524_SHARP_);

if(cljs.core.truth_(and__3546__auto____165570))
{var and__3546__auto____165571 = p2.call(null,p1__165524_SHARP_);

if(cljs.core.truth_(and__3546__auto____165571))
{return p3.call(null,p1__165524_SHARP_);
} else
{return and__3546__auto____165571;
}
} else
{return and__3546__auto____165570;
}
}),args);
} else
{return and__3546__auto____165569;
}
})());
};
var G__165604 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165604__delegate.call(this, x, y, z, args);
};
G__165604.cljs$lang$maxFixedArity = 3;
G__165604.cljs$lang$applyTo = (function (arglist__165605){
var x = cljs.core.first(arglist__165605);
var y = cljs.core.first(cljs.core.next(arglist__165605));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165605)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165605)));
return G__165604__delegate.call(this, x, y, z, args);
});
return G__165604;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__165598.call(this);
case  1 :
return ep3__165599.call(this,x);
case  2 :
return ep3__165600.call(this,x,y);
case  3 :
return ep3__165601.call(this,x,y,z);
default:
return ep3__165602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__165602.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__165580 = (function() { 
var G__165606__delegate = function (p1,p2,p3,ps){
var ps__165572 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__165607 = (function (){
return true;
});
var epn__165608 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__165525_SHARP_){
return p1__165525_SHARP_.call(null,x);
}),ps__165572);
});
var epn__165609 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__165526_SHARP_){
var and__3546__auto____165573 = p1__165526_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____165573))
{return p1__165526_SHARP_.call(null,y);
} else
{return and__3546__auto____165573;
}
}),ps__165572);
});
var epn__165610 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__165527_SHARP_){
var and__3546__auto____165574 = p1__165527_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____165574))
{var and__3546__auto____165575 = p1__165527_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____165575))
{return p1__165527_SHARP_.call(null,z);
} else
{return and__3546__auto____165575;
}
} else
{return and__3546__auto____165574;
}
}),ps__165572);
});
var epn__165611 = (function() { 
var G__165613__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____165576 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____165576))
{return cljs.core.every_QMARK_.call(null,(function (p1__165528_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__165528_SHARP_,args);
}),ps__165572);
} else
{return and__3546__auto____165576;
}
})());
};
var G__165613 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165613__delegate.call(this, x, y, z, args);
};
G__165613.cljs$lang$maxFixedArity = 3;
G__165613.cljs$lang$applyTo = (function (arglist__165614){
var x = cljs.core.first(arglist__165614);
var y = cljs.core.first(cljs.core.next(arglist__165614));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165614)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165614)));
return G__165613__delegate.call(this, x, y, z, args);
});
return G__165613;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__165607.call(this);
case  1 :
return epn__165608.call(this,x);
case  2 :
return epn__165609.call(this,x,y);
case  3 :
return epn__165610.call(this,x,y,z);
default:
return epn__165611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__165611.cljs$lang$applyTo;
return epn;
})()
};
var G__165606 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165606__delegate.call(this, p1, p2, p3, ps);
};
G__165606.cljs$lang$maxFixedArity = 3;
G__165606.cljs$lang$applyTo = (function (arglist__165615){
var p1 = cljs.core.first(arglist__165615);
var p2 = cljs.core.first(cljs.core.next(arglist__165615));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165615)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165615)));
return G__165606__delegate.call(this, p1, p2, p3, ps);
});
return G__165606;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__165577.call(this,p1);
case  2 :
return every_pred__165578.call(this,p1,p2);
case  3 :
return every_pred__165579.call(this,p1,p2,p3);
default:
return every_pred__165580.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__165580.cljs$lang$applyTo;
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
var some_fn__165655 = (function (p){
return (function() {
var sp1 = null;
var sp1__165660 = (function (){
return null;
});
var sp1__165661 = (function (x){
return p.call(null,x);
});
var sp1__165662 = (function (x,y){
var or__3548__auto____165617 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____165617))
{return or__3548__auto____165617;
} else
{return p.call(null,y);
}
});
var sp1__165663 = (function (x,y,z){
var or__3548__auto____165618 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____165618))
{return or__3548__auto____165618;
} else
{var or__3548__auto____165619 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____165619))
{return or__3548__auto____165619;
} else
{return p.call(null,z);
}
}
});
var sp1__165664 = (function() { 
var G__165666__delegate = function (x,y,z,args){
var or__3548__auto____165620 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____165620))
{return or__3548__auto____165620;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__165666 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165666__delegate.call(this, x, y, z, args);
};
G__165666.cljs$lang$maxFixedArity = 3;
G__165666.cljs$lang$applyTo = (function (arglist__165667){
var x = cljs.core.first(arglist__165667);
var y = cljs.core.first(cljs.core.next(arglist__165667));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165667)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165667)));
return G__165666__delegate.call(this, x, y, z, args);
});
return G__165666;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__165660.call(this);
case  1 :
return sp1__165661.call(this,x);
case  2 :
return sp1__165662.call(this,x,y);
case  3 :
return sp1__165663.call(this,x,y,z);
default:
return sp1__165664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__165664.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__165656 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__165668 = (function (){
return null;
});
var sp2__165669 = (function (x){
var or__3548__auto____165621 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____165621))
{return or__3548__auto____165621;
} else
{return p2.call(null,x);
}
});
var sp2__165670 = (function (x,y){
var or__3548__auto____165622 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____165622))
{return or__3548__auto____165622;
} else
{var or__3548__auto____165623 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____165623))
{return or__3548__auto____165623;
} else
{var or__3548__auto____165624 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____165624))
{return or__3548__auto____165624;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__165671 = (function (x,y,z){
var or__3548__auto____165625 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____165625))
{return or__3548__auto____165625;
} else
{var or__3548__auto____165626 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____165626))
{return or__3548__auto____165626;
} else
{var or__3548__auto____165627 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____165627))
{return or__3548__auto____165627;
} else
{var or__3548__auto____165628 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____165628))
{return or__3548__auto____165628;
} else
{var or__3548__auto____165629 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____165629))
{return or__3548__auto____165629;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__165672 = (function() { 
var G__165674__delegate = function (x,y,z,args){
var or__3548__auto____165630 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____165630))
{return or__3548__auto____165630;
} else
{return cljs.core.some.call(null,(function (p1__165533_SHARP_){
var or__3548__auto____165631 = p1.call(null,p1__165533_SHARP_);

if(cljs.core.truth_(or__3548__auto____165631))
{return or__3548__auto____165631;
} else
{return p2.call(null,p1__165533_SHARP_);
}
}),args);
}
};
var G__165674 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165674__delegate.call(this, x, y, z, args);
};
G__165674.cljs$lang$maxFixedArity = 3;
G__165674.cljs$lang$applyTo = (function (arglist__165675){
var x = cljs.core.first(arglist__165675);
var y = cljs.core.first(cljs.core.next(arglist__165675));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165675)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165675)));
return G__165674__delegate.call(this, x, y, z, args);
});
return G__165674;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__165668.call(this);
case  1 :
return sp2__165669.call(this,x);
case  2 :
return sp2__165670.call(this,x,y);
case  3 :
return sp2__165671.call(this,x,y,z);
default:
return sp2__165672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__165672.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__165657 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__165676 = (function (){
return null;
});
var sp3__165677 = (function (x){
var or__3548__auto____165632 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____165632))
{return or__3548__auto____165632;
} else
{var or__3548__auto____165633 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____165633))
{return or__3548__auto____165633;
} else
{return p3.call(null,x);
}
}
});
var sp3__165678 = (function (x,y){
var or__3548__auto____165634 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____165634))
{return or__3548__auto____165634;
} else
{var or__3548__auto____165635 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____165635))
{return or__3548__auto____165635;
} else
{var or__3548__auto____165636 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____165636))
{return or__3548__auto____165636;
} else
{var or__3548__auto____165637 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____165637))
{return or__3548__auto____165637;
} else
{var or__3548__auto____165638 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____165638))
{return or__3548__auto____165638;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__165679 = (function (x,y,z){
var or__3548__auto____165639 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____165639))
{return or__3548__auto____165639;
} else
{var or__3548__auto____165640 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____165640))
{return or__3548__auto____165640;
} else
{var or__3548__auto____165641 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____165641))
{return or__3548__auto____165641;
} else
{var or__3548__auto____165642 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____165642))
{return or__3548__auto____165642;
} else
{var or__3548__auto____165643 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____165643))
{return or__3548__auto____165643;
} else
{var or__3548__auto____165644 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____165644))
{return or__3548__auto____165644;
} else
{var or__3548__auto____165645 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____165645))
{return or__3548__auto____165645;
} else
{var or__3548__auto____165646 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____165646))
{return or__3548__auto____165646;
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
var sp3__165680 = (function() { 
var G__165682__delegate = function (x,y,z,args){
var or__3548__auto____165647 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____165647))
{return or__3548__auto____165647;
} else
{return cljs.core.some.call(null,(function (p1__165534_SHARP_){
var or__3548__auto____165648 = p1.call(null,p1__165534_SHARP_);

if(cljs.core.truth_(or__3548__auto____165648))
{return or__3548__auto____165648;
} else
{var or__3548__auto____165649 = p2.call(null,p1__165534_SHARP_);

if(cljs.core.truth_(or__3548__auto____165649))
{return or__3548__auto____165649;
} else
{return p3.call(null,p1__165534_SHARP_);
}
}
}),args);
}
};
var G__165682 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165682__delegate.call(this, x, y, z, args);
};
G__165682.cljs$lang$maxFixedArity = 3;
G__165682.cljs$lang$applyTo = (function (arglist__165683){
var x = cljs.core.first(arglist__165683);
var y = cljs.core.first(cljs.core.next(arglist__165683));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165683)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165683)));
return G__165682__delegate.call(this, x, y, z, args);
});
return G__165682;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__165676.call(this);
case  1 :
return sp3__165677.call(this,x);
case  2 :
return sp3__165678.call(this,x,y);
case  3 :
return sp3__165679.call(this,x,y,z);
default:
return sp3__165680.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__165680.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__165658 = (function() { 
var G__165684__delegate = function (p1,p2,p3,ps){
var ps__165650 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__165685 = (function (){
return null;
});
var spn__165686 = (function (x){
return cljs.core.some.call(null,(function (p1__165535_SHARP_){
return p1__165535_SHARP_.call(null,x);
}),ps__165650);
});
var spn__165687 = (function (x,y){
return cljs.core.some.call(null,(function (p1__165536_SHARP_){
var or__3548__auto____165651 = p1__165536_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____165651))
{return or__3548__auto____165651;
} else
{return p1__165536_SHARP_.call(null,y);
}
}),ps__165650);
});
var spn__165688 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__165537_SHARP_){
var or__3548__auto____165652 = p1__165537_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____165652))
{return or__3548__auto____165652;
} else
{var or__3548__auto____165653 = p1__165537_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____165653))
{return or__3548__auto____165653;
} else
{return p1__165537_SHARP_.call(null,z);
}
}
}),ps__165650);
});
var spn__165689 = (function() { 
var G__165691__delegate = function (x,y,z,args){
var or__3548__auto____165654 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____165654))
{return or__3548__auto____165654;
} else
{return cljs.core.some.call(null,(function (p1__165538_SHARP_){
return cljs.core.some.call(null,p1__165538_SHARP_,args);
}),ps__165650);
}
};
var G__165691 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165691__delegate.call(this, x, y, z, args);
};
G__165691.cljs$lang$maxFixedArity = 3;
G__165691.cljs$lang$applyTo = (function (arglist__165692){
var x = cljs.core.first(arglist__165692);
var y = cljs.core.first(cljs.core.next(arglist__165692));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165692)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165692)));
return G__165691__delegate.call(this, x, y, z, args);
});
return G__165691;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__165685.call(this);
case  1 :
return spn__165686.call(this,x);
case  2 :
return spn__165687.call(this,x,y);
case  3 :
return spn__165688.call(this,x,y,z);
default:
return spn__165689.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__165689.cljs$lang$applyTo;
return spn;
})()
};
var G__165684 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__165684__delegate.call(this, p1, p2, p3, ps);
};
G__165684.cljs$lang$maxFixedArity = 3;
G__165684.cljs$lang$applyTo = (function (arglist__165693){
var p1 = cljs.core.first(arglist__165693);
var p2 = cljs.core.first(cljs.core.next(arglist__165693));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165693)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165693)));
return G__165684__delegate.call(this, p1, p2, p3, ps);
});
return G__165684;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__165655.call(this,p1);
case  2 :
return some_fn__165656.call(this,p1,p2);
case  3 :
return some_fn__165657.call(this,p1,p2,p3);
default:
return some_fn__165658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__165658.cljs$lang$applyTo;
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
var map__165706 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____165694 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____165694))
{var s__165695 = temp__3698__auto____165694;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__165695)),map.call(null,f,cljs.core.rest.call(null,s__165695)));
} else
{return null;
}
})));
});
var map__165707 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__165696 = cljs.core.seq.call(null,c1);
var s2__165697 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____165698 = s1__165696;

if(cljs.core.truth_(and__3546__auto____165698))
{return s2__165697;
} else
{return and__3546__auto____165698;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__165696),cljs.core.first.call(null,s2__165697)),map.call(null,f,cljs.core.rest.call(null,s1__165696),cljs.core.rest.call(null,s2__165697)));
} else
{return null;
}
})));
});
var map__165708 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__165699 = cljs.core.seq.call(null,c1);
var s2__165700 = cljs.core.seq.call(null,c2);
var s3__165701 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____165702 = s1__165699;

if(cljs.core.truth_(and__3546__auto____165702))
{var and__3546__auto____165703 = s2__165700;

if(cljs.core.truth_(and__3546__auto____165703))
{return s3__165701;
} else
{return and__3546__auto____165703;
}
} else
{return and__3546__auto____165702;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__165699),cljs.core.first.call(null,s2__165700),cljs.core.first.call(null,s3__165701)),map.call(null,f,cljs.core.rest.call(null,s1__165699),cljs.core.rest.call(null,s2__165700),cljs.core.rest.call(null,s3__165701)));
} else
{return null;
}
})));
});
var map__165709 = (function() { 
var G__165711__delegate = function (f,c1,c2,c3,colls){
var step__165705 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__165704 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__165704)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__165704),step.call(null,map.call(null,cljs.core.rest,ss__165704)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__165616_SHARP_){
return cljs.core.apply.call(null,f,p1__165616_SHARP_);
}),step__165705.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__165711 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__165711__delegate.call(this, f, c1, c2, c3, colls);
};
G__165711.cljs$lang$maxFixedArity = 4;
G__165711.cljs$lang$applyTo = (function (arglist__165712){
var f = cljs.core.first(arglist__165712);
var c1 = cljs.core.first(cljs.core.next(arglist__165712));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165712)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__165712))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__165712))));
return G__165711__delegate.call(this, f, c1, c2, c3, colls);
});
return G__165711;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__165706.call(this,f,c1);
case  3 :
return map__165707.call(this,f,c1,c2);
case  4 :
return map__165708.call(this,f,c1,c2,c3);
default:
return map__165709.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__165709.cljs$lang$applyTo;
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
{var temp__3698__auto____165713 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____165713))
{var s__165714 = temp__3698__auto____165713;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__165714),take.call(null,(n - 1),cljs.core.rest.call(null,s__165714)));
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
var step__165717 = (function (n,coll){
while(true){
var s__165715 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____165716 = (n > 0);

if(cljs.core.truth_(and__3546__auto____165716))
{return s__165715;
} else
{return and__3546__auto____165716;
}
})()))
{{
var G__165718 = (n - 1);
var G__165719 = cljs.core.rest.call(null,s__165715);
n = G__165718;
coll = G__165719;
continue;
}
} else
{return s__165715;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__165717.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__165720 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__165721 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__165720.call(this,n);
case  2 :
return drop_last__165721.call(this,n,s);
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
var s__165723 = cljs.core.seq.call(null,coll);
var lead__165724 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__165724))
{{
var G__165725 = cljs.core.next.call(null,s__165723);
var G__165726 = cljs.core.next.call(null,lead__165724);
s__165723 = G__165725;
lead__165724 = G__165726;
continue;
}
} else
{return s__165723;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__165729 = (function (pred,coll){
while(true){
var s__165727 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____165728 = s__165727;

if(cljs.core.truth_(and__3546__auto____165728))
{return pred.call(null,cljs.core.first.call(null,s__165727));
} else
{return and__3546__auto____165728;
}
})()))
{{
var G__165730 = pred;
var G__165731 = cljs.core.rest.call(null,s__165727);
pred = G__165730;
coll = G__165731;
continue;
}
} else
{return s__165727;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__165729.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____165732 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____165732))
{var s__165733 = temp__3698__auto____165732;

return cljs.core.concat.call(null,s__165733,cycle.call(null,s__165733));
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
var repeat__165734 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__165735 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__165734.call(this,n);
case  2 :
return repeat__165735.call(this,n,x);
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
var repeatedly__165737 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__165738 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__165737.call(this,n);
case  2 :
return repeatedly__165738.call(this,n,f);
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
var interleave__165744 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__165740 = cljs.core.seq.call(null,c1);
var s2__165741 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____165742 = s1__165740;

if(cljs.core.truth_(and__3546__auto____165742))
{return s2__165741;
} else
{return and__3546__auto____165742;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__165740),cljs.core.cons.call(null,cljs.core.first.call(null,s2__165741),interleave.call(null,cljs.core.rest.call(null,s1__165740),cljs.core.rest.call(null,s2__165741))));
} else
{return null;
}
})));
});
var interleave__165745 = (function() { 
var G__165747__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__165743 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__165743)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__165743),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__165743)));
} else
{return null;
}
})));
};
var G__165747 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165747__delegate.call(this, c1, c2, colls);
};
G__165747.cljs$lang$maxFixedArity = 2;
G__165747.cljs$lang$applyTo = (function (arglist__165748){
var c1 = cljs.core.first(arglist__165748);
var c2 = cljs.core.first(cljs.core.next(arglist__165748));
var colls = cljs.core.rest(cljs.core.next(arglist__165748));
return G__165747__delegate.call(this, c1, c2, colls);
});
return G__165747;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__165744.call(this,c1,c2);
default:
return interleave__165745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__165745.cljs$lang$applyTo;
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
var cat__165751 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____165749 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____165749))
{var coll__165750 = temp__3695__auto____165749;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__165750),cat.call(null,cljs.core.rest.call(null,coll__165750),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__165751.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__165752 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__165753 = (function() { 
var G__165755__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__165755 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__165755__delegate.call(this, f, coll, colls);
};
G__165755.cljs$lang$maxFixedArity = 2;
G__165755.cljs$lang$applyTo = (function (arglist__165756){
var f = cljs.core.first(arglist__165756);
var coll = cljs.core.first(cljs.core.next(arglist__165756));
var colls = cljs.core.rest(cljs.core.next(arglist__165756));
return G__165755__delegate.call(this, f, coll, colls);
});
return G__165755;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__165752.call(this,f,coll);
default:
return mapcat__165753.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__165753.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____165757 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____165757))
{var s__165758 = temp__3698__auto____165757;

var f__165759 = cljs.core.first.call(null,s__165758);
var r__165760 = cljs.core.rest.call(null,s__165758);

if(cljs.core.truth_(pred.call(null,f__165759)))
{return cljs.core.cons.call(null,f__165759,filter.call(null,pred,r__165760));
} else
{return filter.call(null,pred,r__165760);
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
var walk__165762 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__165762.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__165761_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__165761_SHARP_));
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
var partition__165769 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__165770 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____165763 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____165763))
{var s__165764 = temp__3698__auto____165763;

var p__165765 = cljs.core.take.call(null,n,s__165764);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__165765))))
{return cljs.core.cons.call(null,p__165765,partition.call(null,n,step,cljs.core.drop.call(null,step,s__165764)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__165771 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____165766 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____165766))
{var s__165767 = temp__3698__auto____165766;

var p__165768 = cljs.core.take.call(null,n,s__165767);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__165768))))
{return cljs.core.cons.call(null,p__165768,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__165767)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__165768,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__165769.call(this,n,step);
case  3 :
return partition__165770.call(this,n,step,pad);
case  4 :
return partition__165771.call(this,n,step,pad,coll);
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
var get_in__165777 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__165778 = (function (m,ks,not_found){
var sentinel__165773 = cljs.core.lookup_sentinel;
var m__165774 = m;
var ks__165775 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__165775))
{var m__165776 = cljs.core.get.call(null,m__165774,cljs.core.first.call(null,ks__165775),sentinel__165773);

if(cljs.core.truth_((sentinel__165773 === m__165776)))
{return not_found;
} else
{{
var G__165780 = sentinel__165773;
var G__165781 = m__165776;
var G__165782 = cljs.core.next.call(null,ks__165775);
sentinel__165773 = G__165780;
m__165774 = G__165781;
ks__165775 = G__165782;
continue;
}
}
} else
{return m__165774;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__165777.call(this,m,ks);
case  3 :
return get_in__165778.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__165783,v){
var vec__165784__165785 = p__165783;
var k__165786 = cljs.core.nth.call(null,vec__165784__165785,0,null);
var ks__165787 = cljs.core.nthnext.call(null,vec__165784__165785,1);

if(cljs.core.truth_(ks__165787))
{return cljs.core.assoc.call(null,m,k__165786,assoc_in.call(null,cljs.core.get.call(null,m,k__165786),ks__165787,v));
} else
{return cljs.core.assoc.call(null,m,k__165786,v);
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
var update_in__delegate = function (m,p__165788,f,args){
var vec__165789__165790 = p__165788;
var k__165791 = cljs.core.nth.call(null,vec__165789__165790,0,null);
var ks__165792 = cljs.core.nthnext.call(null,vec__165789__165790,1);

if(cljs.core.truth_(ks__165792))
{return cljs.core.assoc.call(null,m,k__165791,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__165791),ks__165792,f,args));
} else
{return cljs.core.assoc.call(null,m,k__165791,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__165791),args));
}
};
var update_in = function (m,p__165788,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__165788, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__165793){
var m = cljs.core.first(arglist__165793);
var p__165788 = cljs.core.first(cljs.core.next(arglist__165793));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__165793)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__165793)));
return update_in__delegate.call(this, m, p__165788, f, args);
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
var this__165794 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__165827 = null;
var G__165827__165828 = (function (coll,k){
var this__165795 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__165827__165829 = (function (coll,k,not_found){
var this__165796 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__165827 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__165827__165828.call(this,coll,k);
case  3 :
return G__165827__165829.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165827;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__165797 = this;
var new_array__165798 = cljs.core.aclone.call(null,this__165797.array);

(new_array__165798[k] = v);
return (new cljs.core.Vector(this__165797.meta,new_array__165798));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__165831 = null;
var G__165831__165832 = (function (tsym165799,k){
var this__165801 = this;
var tsym165799__165802 = this;

var coll__165803 = tsym165799__165802;

return cljs.core._lookup.call(null,coll__165803,k);
});
var G__165831__165833 = (function (tsym165800,k,not_found){
var this__165804 = this;
var tsym165800__165805 = this;

var coll__165806 = tsym165800__165805;

return cljs.core._lookup.call(null,coll__165806,k,not_found);
});
G__165831 = function(tsym165800,k,not_found){
switch(arguments.length){
case  2 :
return G__165831__165832.call(this,tsym165800,k);
case  3 :
return G__165831__165833.call(this,tsym165800,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165831;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__165807 = this;
var new_array__165808 = cljs.core.aclone.call(null,this__165807.array);

new_array__165808.push(o);
return (new cljs.core.Vector(this__165807.meta,new_array__165808));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__165835 = null;
var G__165835__165836 = (function (v,f){
var this__165809 = this;
return cljs.core.ci_reduce.call(null,this__165809.array,f);
});
var G__165835__165837 = (function (v,f,start){
var this__165810 = this;
return cljs.core.ci_reduce.call(null,this__165810.array,f,start);
});
G__165835 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__165835__165836.call(this,v,f);
case  3 :
return G__165835__165837.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165835;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__165811 = this;
if(cljs.core.truth_((this__165811.array.length > 0)))
{var vector_seq__165812 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__165811.array.length)))
{return cljs.core.cons.call(null,(this__165811.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__165812.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__165813 = this;
return this__165813.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__165814 = this;
var count__165815 = this__165814.array.length;

if(cljs.core.truth_((count__165815 > 0)))
{return (this__165814.array[(count__165815 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__165816 = this;
if(cljs.core.truth_((this__165816.array.length > 0)))
{var new_array__165817 = cljs.core.aclone.call(null,this__165816.array);

new_array__165817.pop();
return (new cljs.core.Vector(this__165816.meta,new_array__165817));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__165818 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__165819 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__165820 = this;
return (new cljs.core.Vector(meta,this__165820.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__165821 = this;
return this__165821.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__165839 = null;
var G__165839__165840 = (function (coll,n){
var this__165822 = this;
if(cljs.core.truth_((function (){var and__3546__auto____165823 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____165823))
{return (n < this__165822.array.length);
} else
{return and__3546__auto____165823;
}
})()))
{return (this__165822.array[n]);
} else
{return null;
}
});
var G__165839__165841 = (function (coll,n,not_found){
var this__165824 = this;
if(cljs.core.truth_((function (){var and__3546__auto____165825 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____165825))
{return (n < this__165824.array.length);
} else
{return and__3546__auto____165825;
}
})()))
{return (this__165824.array[n]);
} else
{return not_found;
}
});
G__165839 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__165839__165840.call(this,coll,n);
case  3 :
return G__165839__165841.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165839;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__165826 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__165826.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__165843 = pv.cnt;

if(cljs.core.truth_((cnt__165843 < 32)))
{return 0;
} else
{return (((cnt__165843 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__165844 = level;
var ret__165845 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__165844)))
{return ret__165845;
} else
{var embed__165846 = ret__165845;
var r__165847 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___165848 = (r__165847[0] = embed__165846);

{
var G__165849 = (ll__165844 - 5);
var G__165850 = r__165847;
ll__165844 = G__165849;
ret__165845 = G__165850;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__165851 = cljs.core.aclone.call(null,parent);
var subidx__165852 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__165851[subidx__165852] = tailnode);
return ret__165851;
} else
{var temp__3695__auto____165853 = (parent[subidx__165852]);

if(cljs.core.truth_(temp__3695__auto____165853))
{var child__165854 = temp__3695__auto____165853;

var node_to_insert__165855 = push_tail.call(null,pv,(level - 5),child__165854,tailnode);
var ___165856 = (ret__165851[subidx__165852] = node_to_insert__165855);

return ret__165851;
} else
{var node_to_insert__165857 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___165858 = (ret__165851[subidx__165852] = node_to_insert__165857);

return ret__165851;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____165859 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____165859))
{return (i < pv.cnt);
} else
{return and__3546__auto____165859;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__165860 = pv.root;
var level__165861 = pv.shift;

while(true){
if(cljs.core.truth_((level__165861 > 0)))
{{
var G__165862 = (node__165860[((i >> level__165861) & 31)]);
var G__165863 = (level__165861 - 5);
node__165860 = G__165862;
level__165861 = G__165863;
continue;
}
} else
{return node__165860;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__165864 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__165864[(i & 31)] = val);
return ret__165864;
} else
{var subidx__165865 = ((i >> level) & 31);
var ___165866 = (ret__165864[subidx__165865] = do_assoc.call(null,pv,(level - 5),(node[subidx__165865]),i,val));

return ret__165864;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__165867 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__165868 = pop_tail.call(null,pv,(level - 5),(node[subidx__165867]));

if(cljs.core.truth_((function (){var and__3546__auto____165869 = (new_child__165868 === null);

if(cljs.core.truth_(and__3546__auto____165869))
{return (subidx__165867 === 0);
} else
{return and__3546__auto____165869;
}
})()))
{return null;
} else
{var ret__165870 = cljs.core.aclone.call(null,node);
var ___165871 = (ret__165870[subidx__165867] = new_child__165868);

return ret__165870;
}
} else
{if(cljs.core.truth_((subidx__165867 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__165872 = cljs.core.aclone.call(null,node);
var ___165873 = (ret__165872[subidx__165867] = null);

return ret__165872;
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
var this__165874 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__165914 = null;
var G__165914__165915 = (function (coll,k){
var this__165875 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__165914__165916 = (function (coll,k,not_found){
var this__165876 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__165914 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__165914__165915.call(this,coll,k);
case  3 :
return G__165914__165916.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165914;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__165877 = this;
if(cljs.core.truth_((function (){var and__3546__auto____165878 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____165878))
{return (k < this__165877.cnt);
} else
{return and__3546__auto____165878;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__165879 = cljs.core.aclone.call(null,this__165877.tail);

(new_tail__165879[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__165877.meta,this__165877.cnt,this__165877.shift,this__165877.root,new_tail__165879));
} else
{return (new cljs.core.PersistentVector(this__165877.meta,this__165877.cnt,this__165877.shift,cljs.core.do_assoc.call(null,coll,this__165877.shift,this__165877.root,k,v),this__165877.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__165877.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__165877.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__165918 = null;
var G__165918__165919 = (function (tsym165880,k){
var this__165882 = this;
var tsym165880__165883 = this;

var coll__165884 = tsym165880__165883;

return cljs.core._lookup.call(null,coll__165884,k);
});
var G__165918__165920 = (function (tsym165881,k,not_found){
var this__165885 = this;
var tsym165881__165886 = this;

var coll__165887 = tsym165881__165886;

return cljs.core._lookup.call(null,coll__165887,k,not_found);
});
G__165918 = function(tsym165881,k,not_found){
switch(arguments.length){
case  2 :
return G__165918__165919.call(this,tsym165881,k);
case  3 :
return G__165918__165920.call(this,tsym165881,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165918;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__165888 = this;
if(cljs.core.truth_(((this__165888.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__165889 = cljs.core.aclone.call(null,this__165888.tail);

new_tail__165889.push(o);
return (new cljs.core.PersistentVector(this__165888.meta,(this__165888.cnt + 1),this__165888.shift,this__165888.root,new_tail__165889));
} else
{var root_overflow_QMARK___165890 = ((this__165888.cnt >> 5) > (1 << this__165888.shift));
var new_shift__165891 = (cljs.core.truth_(root_overflow_QMARK___165890)?(this__165888.shift + 5):this__165888.shift);
var new_root__165893 = (cljs.core.truth_(root_overflow_QMARK___165890)?(function (){var n_r__165892 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__165892[0] = this__165888.root);
(n_r__165892[1] = cljs.core.new_path.call(null,this__165888.shift,this__165888.tail));
return n_r__165892;
})():cljs.core.push_tail.call(null,coll,this__165888.shift,this__165888.root,this__165888.tail));

return (new cljs.core.PersistentVector(this__165888.meta,(this__165888.cnt + 1),new_shift__165891,new_root__165893,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__165922 = null;
var G__165922__165923 = (function (v,f){
var this__165894 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__165922__165924 = (function (v,f,start){
var this__165895 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__165922 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__165922__165923.call(this,v,f);
case  3 :
return G__165922__165924.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165922;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__165896 = this;
if(cljs.core.truth_((this__165896.cnt > 0)))
{var vector_seq__165897 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__165896.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__165897.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__165898 = this;
return this__165898.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__165899 = this;
if(cljs.core.truth_((this__165899.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__165899.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__165900 = this;
if(cljs.core.truth_((this__165900.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__165900.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__165900.meta);
} else
{if(cljs.core.truth_((1 < (this__165900.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__165900.meta,(this__165900.cnt - 1),this__165900.shift,this__165900.root,cljs.core.aclone.call(null,this__165900.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__165901 = cljs.core.array_for.call(null,coll,(this__165900.cnt - 2));
var nr__165902 = cljs.core.pop_tail.call(null,this__165900.shift,this__165900.root);
var new_root__165903 = (cljs.core.truth_((nr__165902 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__165902);
var cnt_1__165904 = (this__165900.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____165905 = (5 < this__165900.shift);

if(cljs.core.truth_(and__3546__auto____165905))
{return ((new_root__165903[1]) === null);
} else
{return and__3546__auto____165905;
}
})()))
{return (new cljs.core.PersistentVector(this__165900.meta,cnt_1__165904,(this__165900.shift - 5),(new_root__165903[0]),new_tail__165901));
} else
{return (new cljs.core.PersistentVector(this__165900.meta,cnt_1__165904,this__165900.shift,new_root__165903,new_tail__165901));
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
var this__165906 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__165907 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__165908 = this;
return (new cljs.core.PersistentVector(meta,this__165908.cnt,this__165908.shift,this__165908.root,this__165908.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__165909 = this;
return this__165909.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__165926 = null;
var G__165926__165927 = (function (coll,n){
var this__165910 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__165926__165928 = (function (coll,n,not_found){
var this__165911 = this;
if(cljs.core.truth_((function (){var and__3546__auto____165912 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____165912))
{return (n < this__165911.cnt);
} else
{return and__3546__auto____165912;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__165926 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__165926__165927.call(this,coll,n);
case  3 :
return G__165926__165928.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165926;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__165913 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__165913.meta);
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
vector.cljs$lang$applyTo = (function (arglist__165930){
var args = cljs.core.seq( arglist__165930 );;
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
var this__165931 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__165959 = null;
var G__165959__165960 = (function (coll,k){
var this__165932 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__165959__165961 = (function (coll,k,not_found){
var this__165933 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__165959 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__165959__165960.call(this,coll,k);
case  3 :
return G__165959__165961.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165959;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__165934 = this;
var v_pos__165935 = (this__165934.start + key);

return (new cljs.core.Subvec(this__165934.meta,cljs.core._assoc.call(null,this__165934.v,v_pos__165935,val),this__165934.start,((this__165934.end > (v_pos__165935 + 1)) ? this__165934.end : (v_pos__165935 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__165963 = null;
var G__165963__165964 = (function (tsym165936,k){
var this__165938 = this;
var tsym165936__165939 = this;

var coll__165940 = tsym165936__165939;

return cljs.core._lookup.call(null,coll__165940,k);
});
var G__165963__165965 = (function (tsym165937,k,not_found){
var this__165941 = this;
var tsym165937__165942 = this;

var coll__165943 = tsym165937__165942;

return cljs.core._lookup.call(null,coll__165943,k,not_found);
});
G__165963 = function(tsym165937,k,not_found){
switch(arguments.length){
case  2 :
return G__165963__165964.call(this,tsym165937,k);
case  3 :
return G__165963__165965.call(this,tsym165937,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165963;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__165944 = this;
return (new cljs.core.Subvec(this__165944.meta,cljs.core._assoc_n.call(null,this__165944.v,this__165944.end,o),this__165944.start,(this__165944.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__165967 = null;
var G__165967__165968 = (function (coll,f){
var this__165945 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__165967__165969 = (function (coll,f,start){
var this__165946 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__165967 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__165967__165968.call(this,coll,f);
case  3 :
return G__165967__165969.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165967;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__165947 = this;
var subvec_seq__165948 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__165947.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__165947.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__165948.call(null,this__165947.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__165949 = this;
return (this__165949.end - this__165949.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__165950 = this;
return cljs.core._nth.call(null,this__165950.v,(this__165950.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__165951 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__165951.start,this__165951.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__165951.meta,this__165951.v,this__165951.start,(this__165951.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__165952 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__165953 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__165954 = this;
return (new cljs.core.Subvec(meta,this__165954.v,this__165954.start,this__165954.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__165955 = this;
return this__165955.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__165971 = null;
var G__165971__165972 = (function (coll,n){
var this__165956 = this;
return cljs.core._nth.call(null,this__165956.v,(this__165956.start + n));
});
var G__165971__165973 = (function (coll,n,not_found){
var this__165957 = this;
return cljs.core._nth.call(null,this__165957.v,(this__165957.start + n),not_found);
});
G__165971 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__165971__165972.call(this,coll,n);
case  3 :
return G__165971__165973.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__165971;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__165958 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__165958.meta);
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
var subvec__165975 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__165976 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__165975.call(this,v,start);
case  3 :
return subvec__165976.call(this,v,start,end);
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
var this__165978 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__165979 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__165980 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__165981 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__165981.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__165982 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__165983 = this;
return cljs.core._first.call(null,this__165983.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__165984 = this;
var temp__3695__auto____165985 = cljs.core.next.call(null,this__165984.front);

if(cljs.core.truth_(temp__3695__auto____165985))
{var f1__165986 = temp__3695__auto____165985;

return (new cljs.core.PersistentQueueSeq(this__165984.meta,f1__165986,this__165984.rear));
} else
{if(cljs.core.truth_((this__165984.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__165984.meta,this__165984.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__165987 = this;
return this__165987.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__165988 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__165988.front,this__165988.rear));
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
var this__165989 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__165990 = this;
if(cljs.core.truth_(this__165990.front))
{return (new cljs.core.PersistentQueue(this__165990.meta,(this__165990.count + 1),this__165990.front,cljs.core.conj.call(null,(function (){var or__3548__auto____165991 = this__165990.rear;

if(cljs.core.truth_(or__3548__auto____165991))
{return or__3548__auto____165991;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__165990.meta,(this__165990.count + 1),cljs.core.conj.call(null,this__165990.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__165992 = this;
var rear__165993 = cljs.core.seq.call(null,this__165992.rear);

if(cljs.core.truth_((function (){var or__3548__auto____165994 = this__165992.front;

if(cljs.core.truth_(or__3548__auto____165994))
{return or__3548__auto____165994;
} else
{return rear__165993;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__165992.front,cljs.core.seq.call(null,rear__165993)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__165995 = this;
return this__165995.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__165996 = this;
return cljs.core._first.call(null,this__165996.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__165997 = this;
if(cljs.core.truth_(this__165997.front))
{var temp__3695__auto____165998 = cljs.core.next.call(null,this__165997.front);

if(cljs.core.truth_(temp__3695__auto____165998))
{var f1__165999 = temp__3695__auto____165998;

return (new cljs.core.PersistentQueue(this__165997.meta,(this__165997.count - 1),f1__165999,this__165997.rear));
} else
{return (new cljs.core.PersistentQueue(this__165997.meta,(this__165997.count - 1),cljs.core.seq.call(null,this__165997.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__166000 = this;
return cljs.core.first.call(null,this__166000.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__166001 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__166002 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__166003 = this;
return (new cljs.core.PersistentQueue(meta,this__166003.count,this__166003.front,this__166003.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__166004 = this;
return this__166004.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__166005 = this;
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
var this__166006 = this;
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
var len__166007 = array.length;

var i__166008 = 0;

while(true){
if(cljs.core.truth_((i__166008 < len__166007)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__166008]))))
{return i__166008;
} else
{{
var G__166009 = (i__166008 + incr);
i__166008 = G__166009;
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
var obj_map_contains_key_QMARK___166011 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___166012 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____166010 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____166010))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____166010;
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
return obj_map_contains_key_QMARK___166011.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___166012.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__166015 = cljs.core.hash.call(null,a);
var b__166016 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__166015 < b__166016)))
{return -1;
} else
{if(cljs.core.truth_((a__166015 > b__166016)))
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
var this__166017 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__166044 = null;
var G__166044__166045 = (function (coll,k){
var this__166018 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__166044__166046 = (function (coll,k,not_found){
var this__166019 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__166019.strobj,(this__166019.strobj[k]),not_found);
});
G__166044 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__166044__166045.call(this,coll,k);
case  3 :
return G__166044__166046.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__166044;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__166020 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__166021 = goog.object.clone.call(null,this__166020.strobj);
var overwrite_QMARK___166022 = new_strobj__166021.hasOwnProperty(k);

(new_strobj__166021[k] = v);
if(cljs.core.truth_(overwrite_QMARK___166022))
{return (new cljs.core.ObjMap(this__166020.meta,this__166020.keys,new_strobj__166021));
} else
{var new_keys__166023 = cljs.core.aclone.call(null,this__166020.keys);

new_keys__166023.push(k);
return (new cljs.core.ObjMap(this__166020.meta,new_keys__166023,new_strobj__166021));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__166020.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__166024 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__166024.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__166048 = null;
var G__166048__166049 = (function (tsym166025,k){
var this__166027 = this;
var tsym166025__166028 = this;

var coll__166029 = tsym166025__166028;

return cljs.core._lookup.call(null,coll__166029,k);
});
var G__166048__166050 = (function (tsym166026,k,not_found){
var this__166030 = this;
var tsym166026__166031 = this;

var coll__166032 = tsym166026__166031;

return cljs.core._lookup.call(null,coll__166032,k,not_found);
});
G__166048 = function(tsym166026,k,not_found){
switch(arguments.length){
case  2 :
return G__166048__166049.call(this,tsym166026,k);
case  3 :
return G__166048__166050.call(this,tsym166026,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__166048;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__166033 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__166034 = this;
if(cljs.core.truth_((this__166034.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__166014_SHARP_){
return cljs.core.vector.call(null,p1__166014_SHARP_,(this__166034.strobj[p1__166014_SHARP_]));
}),this__166034.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__166035 = this;
return this__166035.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__166036 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__166037 = this;
return (new cljs.core.ObjMap(meta,this__166037.keys,this__166037.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__166038 = this;
return this__166038.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__166039 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__166039.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__166040 = this;
if(cljs.core.truth_((function (){var and__3546__auto____166041 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____166041))
{return this__166040.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____166041;
}
})()))
{var new_keys__166042 = cljs.core.aclone.call(null,this__166040.keys);
var new_strobj__166043 = goog.object.clone.call(null,this__166040.strobj);

new_keys__166042.splice(cljs.core.scan_array.call(null,1,k,new_keys__166042),1);
cljs.core.js_delete.call(null,new_strobj__166043,k);
return (new cljs.core.ObjMap(this__166040.meta,new_keys__166042,new_strobj__166043));
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
var this__166053 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__166091 = null;
var G__166091__166092 = (function (coll,k){
var this__166054 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__166091__166093 = (function (coll,k,not_found){
var this__166055 = this;
var bucket__166056 = (this__166055.hashobj[cljs.core.hash.call(null,k)]);
var i__166057 = (cljs.core.truth_(bucket__166056)?cljs.core.scan_array.call(null,2,k,bucket__166056):null);

if(cljs.core.truth_(i__166057))
{return (bucket__166056[(i__166057 + 1)]);
} else
{return not_found;
}
});
G__166091 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__166091__166092.call(this,coll,k);
case  3 :
return G__166091__166093.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__166091;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__166058 = this;
var h__166059 = cljs.core.hash.call(null,k);
var bucket__166060 = (this__166058.hashobj[h__166059]);

if(cljs.core.truth_(bucket__166060))
{var new_bucket__166061 = cljs.core.aclone.call(null,bucket__166060);
var new_hashobj__166062 = goog.object.clone.call(null,this__166058.hashobj);

(new_hashobj__166062[h__166059] = new_bucket__166061);
var temp__3695__auto____166063 = cljs.core.scan_array.call(null,2,k,new_bucket__166061);

if(cljs.core.truth_(temp__3695__auto____166063))
{var i__166064 = temp__3695__auto____166063;

(new_bucket__166061[(i__166064 + 1)] = v);
return (new cljs.core.HashMap(this__166058.meta,this__166058.count,new_hashobj__166062));
} else
{new_bucket__166061.push(k,v);
return (new cljs.core.HashMap(this__166058.meta,(this__166058.count + 1),new_hashobj__166062));
}
} else
{var new_hashobj__166065 = goog.object.clone.call(null,this__166058.hashobj);

(new_hashobj__166065[h__166059] = [k,v]);
return (new cljs.core.HashMap(this__166058.meta,(this__166058.count + 1),new_hashobj__166065));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__166066 = this;
var bucket__166067 = (this__166066.hashobj[cljs.core.hash.call(null,k)]);
var i__166068 = (cljs.core.truth_(bucket__166067)?cljs.core.scan_array.call(null,2,k,bucket__166067):null);

if(cljs.core.truth_(i__166068))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__166095 = null;
var G__166095__166096 = (function (tsym166069,k){
var this__166071 = this;
var tsym166069__166072 = this;

var coll__166073 = tsym166069__166072;

return cljs.core._lookup.call(null,coll__166073,k);
});
var G__166095__166097 = (function (tsym166070,k,not_found){
var this__166074 = this;
var tsym166070__166075 = this;

var coll__166076 = tsym166070__166075;

return cljs.core._lookup.call(null,coll__166076,k,not_found);
});
G__166095 = function(tsym166070,k,not_found){
switch(arguments.length){
case  2 :
return G__166095__166096.call(this,tsym166070,k);
case  3 :
return G__166095__166097.call(this,tsym166070,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__166095;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__166077 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__166078 = this;
if(cljs.core.truth_((this__166078.count > 0)))
{var hashes__166079 = cljs.core.js_keys.call(null,this__166078.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__166052_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__166078.hashobj[p1__166052_SHARP_])));
}),hashes__166079);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__166080 = this;
return this__166080.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__166081 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__166082 = this;
return (new cljs.core.HashMap(meta,this__166082.count,this__166082.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__166083 = this;
return this__166083.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__166084 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__166084.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__166085 = this;
var h__166086 = cljs.core.hash.call(null,k);
var bucket__166087 = (this__166085.hashobj[h__166086]);
var i__166088 = (cljs.core.truth_(bucket__166087)?cljs.core.scan_array.call(null,2,k,bucket__166087):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__166088)))
{return coll;
} else
{var new_hashobj__166089 = goog.object.clone.call(null,this__166085.hashobj);

if(cljs.core.truth_((3 > bucket__166087.length)))
{cljs.core.js_delete.call(null,new_hashobj__166089,h__166086);
} else
{var new_bucket__166090 = cljs.core.aclone.call(null,bucket__166087);

new_bucket__166090.splice(i__166088,2);
(new_hashobj__166089[h__166086] = new_bucket__166090);
}
return (new cljs.core.HashMap(this__166085.meta,(this__166085.count - 1),new_hashobj__166089));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__166099 = ks.length;

var i__166100 = 0;
var out__166101 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__166100 < len__166099)))
{{
var G__166102 = (i__166100 + 1);
var G__166103 = cljs.core.assoc.call(null,out__166101,(ks[i__166100]),(vs[i__166100]));
i__166100 = G__166102;
out__166101 = G__166103;
continue;
}
} else
{return out__166101;
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
var in$__166104 = cljs.core.seq.call(null,keyvals);
var out__166105 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__166104))
{{
var G__166106 = cljs.core.nnext.call(null,in$__166104);
var G__166107 = cljs.core.assoc.call(null,out__166105,cljs.core.first.call(null,in$__166104),cljs.core.second.call(null,in$__166104));
in$__166104 = G__166106;
out__166105 = G__166107;
continue;
}
} else
{return out__166105;
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
hash_map.cljs$lang$applyTo = (function (arglist__166108){
var keyvals = cljs.core.seq( arglist__166108 );;
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
{return cljs.core.reduce.call(null,(function (p1__166109_SHARP_,p2__166110_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____166111 = p1__166109_SHARP_;

if(cljs.core.truth_(or__3548__auto____166111))
{return or__3548__auto____166111;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__166110_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__166112){
var maps = cljs.core.seq( arglist__166112 );;
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
{var merge_entry__166115 = (function (m,e){
var k__166113 = cljs.core.first.call(null,e);
var v__166114 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__166113)))
{return cljs.core.assoc.call(null,m,k__166113,f.call(null,cljs.core.get.call(null,m,k__166113),v__166114));
} else
{return cljs.core.assoc.call(null,m,k__166113,v__166114);
}
});
var merge2__166117 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__166115,(function (){var or__3548__auto____166116 = m1;

if(cljs.core.truth_(or__3548__auto____166116))
{return or__3548__auto____166116;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__166117,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__166118){
var f = cljs.core.first(arglist__166118);
var maps = cljs.core.rest(arglist__166118);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__166120 = cljs.core.ObjMap.fromObject([],{});
var keys__166121 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__166121))
{var key__166122 = cljs.core.first.call(null,keys__166121);
var entry__166123 = cljs.core.get.call(null,map,key__166122,"\uFDD0'user/not-found");

{
var G__166124 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__166123,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__166120,key__166122,entry__166123):ret__166120);
var G__166125 = cljs.core.next.call(null,keys__166121);
ret__166120 = G__166124;
keys__166121 = G__166125;
continue;
}
} else
{return ret__166120;
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
var this__166126 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__166147 = null;
var G__166147__166148 = (function (coll,v){
var this__166127 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__166147__166149 = (function (coll,v,not_found){
var this__166128 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__166128.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__166147 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__166147__166148.call(this,coll,v);
case  3 :
return G__166147__166149.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__166147;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__166151 = null;
var G__166151__166152 = (function (tsym166129,k){
var this__166131 = this;
var tsym166129__166132 = this;

var coll__166133 = tsym166129__166132;

return cljs.core._lookup.call(null,coll__166133,k);
});
var G__166151__166153 = (function (tsym166130,k,not_found){
var this__166134 = this;
var tsym166130__166135 = this;

var coll__166136 = tsym166130__166135;

return cljs.core._lookup.call(null,coll__166136,k,not_found);
});
G__166151 = function(tsym166130,k,not_found){
switch(arguments.length){
case  2 :
return G__166151__166152.call(this,tsym166130,k);
case  3 :
return G__166151__166153.call(this,tsym166130,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__166151;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__166137 = this;
return (new cljs.core.Set(this__166137.meta,cljs.core.assoc.call(null,this__166137.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__166138 = this;
return cljs.core.keys.call(null,this__166138.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__166139 = this;
return (new cljs.core.Set(this__166139.meta,cljs.core.dissoc.call(null,this__166139.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__166140 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__166141 = this;
var and__3546__auto____166142 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____166142))
{var and__3546__auto____166143 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____166143))
{return cljs.core.every_QMARK_.call(null,(function (p1__166119_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__166119_SHARP_);
}),other);
} else
{return and__3546__auto____166143;
}
} else
{return and__3546__auto____166142;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__166144 = this;
return (new cljs.core.Set(meta,this__166144.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__166145 = this;
return this__166145.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__166146 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__166146.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__166156 = cljs.core.seq.call(null,coll);
var out__166157 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__166156))))
{{
var G__166158 = cljs.core.rest.call(null,in$__166156);
var G__166159 = cljs.core.conj.call(null,out__166157,cljs.core.first.call(null,in$__166156));
in$__166156 = G__166158;
out__166157 = G__166159;
continue;
}
} else
{return out__166157;
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
{var n__166160 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____166161 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____166161))
{var e__166162 = temp__3695__auto____166161;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__166162));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__166160,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__166155_SHARP_){
var temp__3695__auto____166163 = cljs.core.find.call(null,smap,p1__166155_SHARP_);

if(cljs.core.truth_(temp__3695__auto____166163))
{var e__166164 = temp__3695__auto____166163;

return cljs.core.second.call(null,e__166164);
} else
{return p1__166155_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__166172 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__166165,seen){
while(true){
var vec__166166__166167 = p__166165;
var f__166168 = cljs.core.nth.call(null,vec__166166__166167,0,null);
var xs__166169 = vec__166166__166167;

var temp__3698__auto____166170 = cljs.core.seq.call(null,xs__166169);

if(cljs.core.truth_(temp__3698__auto____166170))
{var s__166171 = temp__3698__auto____166170;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__166168)))
{{
var G__166173 = cljs.core.rest.call(null,s__166171);
var G__166174 = seen;
p__166165 = G__166173;
seen = G__166174;
continue;
}
} else
{return cljs.core.cons.call(null,f__166168,step.call(null,cljs.core.rest.call(null,s__166171),cljs.core.conj.call(null,seen,f__166168)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__166172.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__166175 = cljs.core.PersistentVector.fromArray([]);
var s__166176 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__166176)))
{{
var G__166177 = cljs.core.conj.call(null,ret__166175,cljs.core.first.call(null,s__166176));
var G__166178 = cljs.core.next.call(null,s__166176);
ret__166175 = G__166177;
s__166176 = G__166178;
continue;
}
} else
{return cljs.core.seq.call(null,ret__166175);
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
{if(cljs.core.truth_((function (){var or__3548__auto____166179 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____166179))
{return or__3548__auto____166179;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__166180 = x.lastIndexOf("/");

if(cljs.core.truth_((i__166180 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__166180 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____166181 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____166181))
{return or__3548__auto____166181;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__166182 = x.lastIndexOf("/");

if(cljs.core.truth_((i__166182 > -1)))
{return cljs.core.subs.call(null,x,2,i__166182);
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
var map__166185 = cljs.core.ObjMap.fromObject([],{});
var ks__166186 = cljs.core.seq.call(null,keys);
var vs__166187 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____166188 = ks__166186;

if(cljs.core.truth_(and__3546__auto____166188))
{return vs__166187;
} else
{return and__3546__auto____166188;
}
})()))
{{
var G__166189 = cljs.core.assoc.call(null,map__166185,cljs.core.first.call(null,ks__166186),cljs.core.first.call(null,vs__166187));
var G__166190 = cljs.core.next.call(null,ks__166186);
var G__166191 = cljs.core.next.call(null,vs__166187);
map__166185 = G__166189;
ks__166186 = G__166190;
vs__166187 = G__166191;
continue;
}
} else
{return map__166185;
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
var max_key__166194 = (function (k,x){
return x;
});
var max_key__166195 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__166196 = (function() { 
var G__166198__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__166183_SHARP_,p2__166184_SHARP_){
return max_key.call(null,k,p1__166183_SHARP_,p2__166184_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__166198 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__166198__delegate.call(this, k, x, y, more);
};
G__166198.cljs$lang$maxFixedArity = 3;
G__166198.cljs$lang$applyTo = (function (arglist__166199){
var k = cljs.core.first(arglist__166199);
var x = cljs.core.first(cljs.core.next(arglist__166199));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__166199)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__166199)));
return G__166198__delegate.call(this, k, x, y, more);
});
return G__166198;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__166194.call(this,k,x);
case  3 :
return max_key__166195.call(this,k,x,y);
default:
return max_key__166196.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__166196.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__166200 = (function (k,x){
return x;
});
var min_key__166201 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__166202 = (function() { 
var G__166204__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__166192_SHARP_,p2__166193_SHARP_){
return min_key.call(null,k,p1__166192_SHARP_,p2__166193_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__166204 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__166204__delegate.call(this, k, x, y, more);
};
G__166204.cljs$lang$maxFixedArity = 3;
G__166204.cljs$lang$applyTo = (function (arglist__166205){
var k = cljs.core.first(arglist__166205);
var x = cljs.core.first(cljs.core.next(arglist__166205));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__166205)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__166205)));
return G__166204__delegate.call(this, k, x, y, more);
});
return G__166204;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__166200.call(this,k,x);
case  3 :
return min_key__166201.call(this,k,x,y);
default:
return min_key__166202.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__166202.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__166208 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__166209 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____166206 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____166206))
{var s__166207 = temp__3698__auto____166206;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__166207),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__166207)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__166208.call(this,n,step);
case  3 :
return partition_all__166209.call(this,n,step,coll);
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
var temp__3698__auto____166211 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____166211))
{var s__166212 = temp__3698__auto____166211;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__166212))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__166212),take_while.call(null,pred,cljs.core.rest.call(null,s__166212)));
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
var this__166213 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__166214 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__166230 = null;
var G__166230__166231 = (function (rng,f){
var this__166215 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__166230__166232 = (function (rng,f,s){
var this__166216 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__166230 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__166230__166231.call(this,rng,f);
case  3 :
return G__166230__166232.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__166230;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__166217 = this;
var comp__166218 = (cljs.core.truth_((this__166217.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__166218.call(null,this__166217.start,this__166217.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__166219 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__166219.end - this__166219.start) / this__166219.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__166220 = this;
return this__166220.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__166221 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__166221.meta,(this__166221.start + this__166221.step),this__166221.end,this__166221.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__166222 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__166223 = this;
return (new cljs.core.Range(meta,this__166223.start,this__166223.end,this__166223.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__166224 = this;
return this__166224.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__166234 = null;
var G__166234__166235 = (function (rng,n){
var this__166225 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__166225.start + (n * this__166225.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____166226 = (this__166225.start > this__166225.end);

if(cljs.core.truth_(and__3546__auto____166226))
{return cljs.core._EQ_.call(null,this__166225.step,0);
} else
{return and__3546__auto____166226;
}
})()))
{return this__166225.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__166234__166236 = (function (rng,n,not_found){
var this__166227 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__166227.start + (n * this__166227.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____166228 = (this__166227.start > this__166227.end);

if(cljs.core.truth_(and__3546__auto____166228))
{return cljs.core._EQ_.call(null,this__166227.step,0);
} else
{return and__3546__auto____166228;
}
})()))
{return this__166227.start;
} else
{return not_found;
}
}
});
G__166234 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__166234__166235.call(this,rng,n);
case  3 :
return G__166234__166236.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__166234;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__166229 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__166229.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__166238 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__166239 = (function (end){
return range.call(null,0,end,1);
});
var range__166240 = (function (start,end){
return range.call(null,start,end,1);
});
var range__166241 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__166238.call(this);
case  1 :
return range__166239.call(this,start);
case  2 :
return range__166240.call(this,start,end);
case  3 :
return range__166241.call(this,start,end,step);
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
var temp__3698__auto____166243 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____166243))
{var s__166244 = temp__3698__auto____166243;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__166244),take_nth.call(null,n,cljs.core.drop.call(null,n,s__166244)));
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
var temp__3698__auto____166246 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____166246))
{var s__166247 = temp__3698__auto____166246;

var fst__166248 = cljs.core.first.call(null,s__166247);
var fv__166249 = f.call(null,fst__166248);
var run__166250 = cljs.core.cons.call(null,fst__166248,cljs.core.take_while.call(null,(function (p1__166245_SHARP_){
return cljs.core._EQ_.call(null,fv__166249,f.call(null,p1__166245_SHARP_));
}),cljs.core.next.call(null,s__166247)));

return cljs.core.cons.call(null,run__166250,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__166250),s__166247))));
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
var reductions__166265 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____166261 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____166261))
{var s__166262 = temp__3695__auto____166261;

return reductions.call(null,f,cljs.core.first.call(null,s__166262),cljs.core.rest.call(null,s__166262));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__166266 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____166263 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____166263))
{var s__166264 = temp__3698__auto____166263;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__166264)),cljs.core.rest.call(null,s__166264));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__166265.call(this,f,init);
case  3 :
return reductions__166266.call(this,f,init,coll);
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
var juxt__166269 = (function (f){
return (function() {
var G__166274 = null;
var G__166274__166275 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__166274__166276 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__166274__166277 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__166274__166278 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__166274__166279 = (function() { 
var G__166281__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__166281 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__166281__delegate.call(this, x, y, z, args);
};
G__166281.cljs$lang$maxFixedArity = 3;
G__166281.cljs$lang$applyTo = (function (arglist__166282){
var x = cljs.core.first(arglist__166282);
var y = cljs.core.first(cljs.core.next(arglist__166282));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__166282)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__166282)));
return G__166281__delegate.call(this, x, y, z, args);
});
return G__166281;
})()
;
G__166274 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__166274__166275.call(this);
case  1 :
return G__166274__166276.call(this,x);
case  2 :
return G__166274__166277.call(this,x,y);
case  3 :
return G__166274__166278.call(this,x,y,z);
default:
return G__166274__166279.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__166274.cljs$lang$maxFixedArity = 3;
G__166274.cljs$lang$applyTo = G__166274__166279.cljs$lang$applyTo;
return G__166274;
})()
});
var juxt__166270 = (function (f,g){
return (function() {
var G__166283 = null;
var G__166283__166284 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__166283__166285 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__166283__166286 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__166283__166287 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__166283__166288 = (function() { 
var G__166290__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__166290 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__166290__delegate.call(this, x, y, z, args);
};
G__166290.cljs$lang$maxFixedArity = 3;
G__166290.cljs$lang$applyTo = (function (arglist__166291){
var x = cljs.core.first(arglist__166291);
var y = cljs.core.first(cljs.core.next(arglist__166291));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__166291)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__166291)));
return G__166290__delegate.call(this, x, y, z, args);
});
return G__166290;
})()
;
G__166283 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__166283__166284.call(this);
case  1 :
return G__166283__166285.call(this,x);
case  2 :
return G__166283__166286.call(this,x,y);
case  3 :
return G__166283__166287.call(this,x,y,z);
default:
return G__166283__166288.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__166283.cljs$lang$maxFixedArity = 3;
G__166283.cljs$lang$applyTo = G__166283__166288.cljs$lang$applyTo;
return G__166283;
})()
});
var juxt__166271 = (function (f,g,h){
return (function() {
var G__166292 = null;
var G__166292__166293 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__166292__166294 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__166292__166295 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__166292__166296 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__166292__166297 = (function() { 
var G__166299__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__166299 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__166299__delegate.call(this, x, y, z, args);
};
G__166299.cljs$lang$maxFixedArity = 3;
G__166299.cljs$lang$applyTo = (function (arglist__166300){
var x = cljs.core.first(arglist__166300);
var y = cljs.core.first(cljs.core.next(arglist__166300));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__166300)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__166300)));
return G__166299__delegate.call(this, x, y, z, args);
});
return G__166299;
})()
;
G__166292 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__166292__166293.call(this);
case  1 :
return G__166292__166294.call(this,x);
case  2 :
return G__166292__166295.call(this,x,y);
case  3 :
return G__166292__166296.call(this,x,y,z);
default:
return G__166292__166297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__166292.cljs$lang$maxFixedArity = 3;
G__166292.cljs$lang$applyTo = G__166292__166297.cljs$lang$applyTo;
return G__166292;
})()
});
var juxt__166272 = (function() { 
var G__166301__delegate = function (f,g,h,fs){
var fs__166268 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__166302 = null;
var G__166302__166303 = (function (){
return cljs.core.reduce.call(null,(function (p1__166251_SHARP_,p2__166252_SHARP_){
return cljs.core.conj.call(null,p1__166251_SHARP_,p2__166252_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__166268);
});
var G__166302__166304 = (function (x){
return cljs.core.reduce.call(null,(function (p1__166253_SHARP_,p2__166254_SHARP_){
return cljs.core.conj.call(null,p1__166253_SHARP_,p2__166254_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__166268);
});
var G__166302__166305 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__166255_SHARP_,p2__166256_SHARP_){
return cljs.core.conj.call(null,p1__166255_SHARP_,p2__166256_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__166268);
});
var G__166302__166306 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__166257_SHARP_,p2__166258_SHARP_){
return cljs.core.conj.call(null,p1__166257_SHARP_,p2__166258_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__166268);
});
var G__166302__166307 = (function() { 
var G__166309__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__166259_SHARP_,p2__166260_SHARP_){
return cljs.core.conj.call(null,p1__166259_SHARP_,cljs.core.apply.call(null,p2__166260_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__166268);
};
var G__166309 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__166309__delegate.call(this, x, y, z, args);
};
G__166309.cljs$lang$maxFixedArity = 3;
G__166309.cljs$lang$applyTo = (function (arglist__166310){
var x = cljs.core.first(arglist__166310);
var y = cljs.core.first(cljs.core.next(arglist__166310));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__166310)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__166310)));
return G__166309__delegate.call(this, x, y, z, args);
});
return G__166309;
})()
;
G__166302 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__166302__166303.call(this);
case  1 :
return G__166302__166304.call(this,x);
case  2 :
return G__166302__166305.call(this,x,y);
case  3 :
return G__166302__166306.call(this,x,y,z);
default:
return G__166302__166307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__166302.cljs$lang$maxFixedArity = 3;
G__166302.cljs$lang$applyTo = G__166302__166307.cljs$lang$applyTo;
return G__166302;
})()
};
var G__166301 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__166301__delegate.call(this, f, g, h, fs);
};
G__166301.cljs$lang$maxFixedArity = 3;
G__166301.cljs$lang$applyTo = (function (arglist__166311){
var f = cljs.core.first(arglist__166311);
var g = cljs.core.first(cljs.core.next(arglist__166311));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__166311)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__166311)));
return G__166301__delegate.call(this, f, g, h, fs);
});
return G__166301;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__166269.call(this,f);
case  2 :
return juxt__166270.call(this,f,g);
case  3 :
return juxt__166271.call(this,f,g,h);
default:
return juxt__166272.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__166272.cljs$lang$applyTo;
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
var dorun__166313 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__166316 = cljs.core.next.call(null,coll);
coll = G__166316;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__166314 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____166312 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____166312))
{return (n > 0);
} else
{return and__3546__auto____166312;
}
})()))
{{
var G__166317 = (n - 1);
var G__166318 = cljs.core.next.call(null,coll);
n = G__166317;
coll = G__166318;
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
return dorun__166313.call(this,n);
case  2 :
return dorun__166314.call(this,n,coll);
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
var doall__166319 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__166320 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__166319.call(this,n);
case  2 :
return doall__166320.call(this,n,coll);
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
var matches__166322 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__166322),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__166322),1)))
{return cljs.core.first.call(null,matches__166322);
} else
{return cljs.core.vec.call(null,matches__166322);
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
var matches__166323 = re.exec(s);

if(cljs.core.truth_((matches__166323 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__166323),1)))
{return cljs.core.first.call(null,matches__166323);
} else
{return cljs.core.vec.call(null,matches__166323);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__166324 = cljs.core.re_find.call(null,re,s);
var match_idx__166325 = s.search(re);
var match_str__166326 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__166324))?cljs.core.first.call(null,match_data__166324):match_data__166324);
var post_match__166327 = cljs.core.subs.call(null,s,(match_idx__166325 + cljs.core.count.call(null,match_str__166326)));

if(cljs.core.truth_(match_data__166324))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__166324,re_seq.call(null,re,post_match__166327));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__166329__166330 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___166331 = cljs.core.nth.call(null,vec__166329__166330,0,null);
var flags__166332 = cljs.core.nth.call(null,vec__166329__166330,1,null);
var pattern__166333 = cljs.core.nth.call(null,vec__166329__166330,2,null);

return (new RegExp(pattern__166333,flags__166332));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__166328_SHARP_){
return print_one.call(null,p1__166328_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____166334 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____166334))
{var and__3546__auto____166338 = (function (){var x__451__auto____166335 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____166336 = x__451__auto____166335;

if(cljs.core.truth_(and__3546__auto____166336))
{var and__3546__auto____166337 = x__451__auto____166335.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____166337))
{return cljs.core.not.call(null,x__451__auto____166335.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____166337;
}
} else
{return and__3546__auto____166336;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____166335);
}
})();

if(cljs.core.truth_(and__3546__auto____166338))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____166338;
}
} else
{return and__3546__auto____166334;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____166339 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____166340 = x__451__auto____166339;

if(cljs.core.truth_(and__3546__auto____166340))
{var and__3546__auto____166341 = x__451__auto____166339.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____166341))
{return cljs.core.not.call(null,x__451__auto____166339.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____166341;
}
} else
{return and__3546__auto____166340;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____166339);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__166342 = cljs.core.first.call(null,objs);
var sb__166343 = (new goog.string.StringBuffer());

var G__166344__166345 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__166344__166345))
{var obj__166346 = cljs.core.first.call(null,G__166344__166345);
var G__166344__166347 = G__166344__166345;

while(true){
if(cljs.core.truth_((obj__166346 === first_obj__166342)))
{} else
{sb__166343.append(" ");
}
var G__166348__166349 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__166346,opts));

if(cljs.core.truth_(G__166348__166349))
{var string__166350 = cljs.core.first.call(null,G__166348__166349);
var G__166348__166351 = G__166348__166349;

while(true){
sb__166343.append(string__166350);
var temp__3698__auto____166352 = cljs.core.next.call(null,G__166348__166351);

if(cljs.core.truth_(temp__3698__auto____166352))
{var G__166348__166353 = temp__3698__auto____166352;

{
var G__166356 = cljs.core.first.call(null,G__166348__166353);
var G__166357 = G__166348__166353;
string__166350 = G__166356;
G__166348__166351 = G__166357;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____166354 = cljs.core.next.call(null,G__166344__166347);

if(cljs.core.truth_(temp__3698__auto____166354))
{var G__166344__166355 = temp__3698__auto____166354;

{
var G__166358 = cljs.core.first.call(null,G__166344__166355);
var G__166359 = G__166344__166355;
obj__166346 = G__166358;
G__166344__166347 = G__166359;
continue;
}
} else
{}
break;
}
} else
{}
return sb__166343;
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
var sb__166360 = cljs.core.pr_sb.call(null,objs,opts);

sb__166360.append("\n");
return cljs.core.str.call(null,sb__166360);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__166361 = cljs.core.first.call(null,objs);

var G__166362__166363 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__166362__166363))
{var obj__166364 = cljs.core.first.call(null,G__166362__166363);
var G__166362__166365 = G__166362__166363;

while(true){
if(cljs.core.truth_((obj__166364 === first_obj__166361)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__166366__166367 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__166364,opts));

if(cljs.core.truth_(G__166366__166367))
{var string__166368 = cljs.core.first.call(null,G__166366__166367);
var G__166366__166369 = G__166366__166367;

while(true){
cljs.core.string_print.call(null,string__166368);
var temp__3698__auto____166370 = cljs.core.next.call(null,G__166366__166369);

if(cljs.core.truth_(temp__3698__auto____166370))
{var G__166366__166371 = temp__3698__auto____166370;

{
var G__166374 = cljs.core.first.call(null,G__166366__166371);
var G__166375 = G__166366__166371;
string__166368 = G__166374;
G__166366__166369 = G__166375;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____166372 = cljs.core.next.call(null,G__166362__166365);

if(cljs.core.truth_(temp__3698__auto____166372))
{var G__166362__166373 = temp__3698__auto____166372;

{
var G__166376 = cljs.core.first.call(null,G__166362__166373);
var G__166377 = G__166362__166373;
obj__166364 = G__166376;
G__166362__166365 = G__166377;
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
pr_str.cljs$lang$applyTo = (function (arglist__166378){
var objs = cljs.core.seq( arglist__166378 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__166379){
var objs = cljs.core.seq( arglist__166379 );;
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
pr.cljs$lang$applyTo = (function (arglist__166380){
var objs = cljs.core.seq( arglist__166380 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__166381){
var objs = cljs.core.seq( arglist__166381 );;
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
print_str.cljs$lang$applyTo = (function (arglist__166382){
var objs = cljs.core.seq( arglist__166382 );;
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
println.cljs$lang$applyTo = (function (arglist__166383){
var objs = cljs.core.seq( arglist__166383 );;
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
println_str.cljs$lang$applyTo = (function (arglist__166384){
var objs = cljs.core.seq( arglist__166384 );;
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
prn.cljs$lang$applyTo = (function (arglist__166385){
var objs = cljs.core.seq( arglist__166385 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__166386 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__166386,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____166387 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____166387))
{var nspc__166388 = temp__3698__auto____166387;

return cljs.core.str.call(null,nspc__166388,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____166389 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____166389))
{var nspc__166390 = temp__3698__auto____166389;

return cljs.core.str.call(null,nspc__166390,"/");
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
var pr_pair__166391 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__166391,"{",", ","}",opts,coll);
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
var this__166392 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__166393 = this;
var G__166394__166395 = cljs.core.seq.call(null,this__166393.watches);

if(cljs.core.truth_(G__166394__166395))
{var G__166397__166399 = cljs.core.first.call(null,G__166394__166395);
var vec__166398__166400 = G__166397__166399;
var key__166401 = cljs.core.nth.call(null,vec__166398__166400,0,null);
var f__166402 = cljs.core.nth.call(null,vec__166398__166400,1,null);
var G__166394__166403 = G__166394__166395;

var G__166397__166404 = G__166397__166399;
var G__166394__166405 = G__166394__166403;

while(true){
var vec__166406__166407 = G__166397__166404;
var key__166408 = cljs.core.nth.call(null,vec__166406__166407,0,null);
var f__166409 = cljs.core.nth.call(null,vec__166406__166407,1,null);
var G__166394__166410 = G__166394__166405;

f__166409.call(null,key__166408,this$,oldval,newval);
var temp__3698__auto____166411 = cljs.core.next.call(null,G__166394__166410);

if(cljs.core.truth_(temp__3698__auto____166411))
{var G__166394__166412 = temp__3698__auto____166411;

{
var G__166419 = cljs.core.first.call(null,G__166394__166412);
var G__166420 = G__166394__166412;
G__166397__166404 = G__166419;
G__166394__166405 = G__166420;
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
var this__166413 = this;
return this$.watches = cljs.core.assoc.call(null,this__166413.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__166414 = this;
return this$.watches = cljs.core.dissoc.call(null,this__166414.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__166415 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__166415.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__166416 = this;
return this__166416.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__166417 = this;
return this__166417.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__166418 = this;
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
var atom__166427 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__166428 = (function() { 
var G__166430__delegate = function (x,p__166421){
var map__166422__166423 = p__166421;
var map__166422__166424 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__166422__166423))?cljs.core.apply.call(null,cljs.core.hash_map,map__166422__166423):map__166422__166423);
var validator__166425 = cljs.core.get.call(null,map__166422__166424,"\uFDD0'validator");
var meta__166426 = cljs.core.get.call(null,map__166422__166424,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__166426,validator__166425,null));
};
var G__166430 = function (x,var_args){
var p__166421 = null;
if (goog.isDef(var_args)) {
  p__166421 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__166430__delegate.call(this, x, p__166421);
};
G__166430.cljs$lang$maxFixedArity = 1;
G__166430.cljs$lang$applyTo = (function (arglist__166431){
var x = cljs.core.first(arglist__166431);
var p__166421 = cljs.core.rest(arglist__166431);
return G__166430__delegate.call(this, x, p__166421);
});
return G__166430;
})()
;
atom = function(x,var_args){
var p__166421 = var_args;
switch(arguments.length){
case  1 :
return atom__166427.call(this,x);
default:
return atom__166428.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__166428.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____166432 = a.validator;

if(cljs.core.truth_(temp__3698__auto____166432))
{var validate__166433 = temp__3698__auto____166432;

if(cljs.core.truth_(validate__166433.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__166434 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__166434,new_value);
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
var swap_BANG___166435 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___166436 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___166437 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___166438 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___166439 = (function() { 
var G__166441__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__166441 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__166441__delegate.call(this, a, f, x, y, z, more);
};
G__166441.cljs$lang$maxFixedArity = 5;
G__166441.cljs$lang$applyTo = (function (arglist__166442){
var a = cljs.core.first(arglist__166442);
var f = cljs.core.first(cljs.core.next(arglist__166442));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__166442)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__166442))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__166442)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__166442)))));
return G__166441__delegate.call(this, a, f, x, y, z, more);
});
return G__166441;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___166435.call(this,a,f);
case  3 :
return swap_BANG___166436.call(this,a,f,x);
case  4 :
return swap_BANG___166437.call(this,a,f,x,y);
case  5 :
return swap_BANG___166438.call(this,a,f,x,y,z);
default:
return swap_BANG___166439.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___166439.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__166443){
var iref = cljs.core.first(arglist__166443);
var f = cljs.core.first(cljs.core.next(arglist__166443));
var args = cljs.core.rest(cljs.core.next(arglist__166443));
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
var gensym__166444 = (function (){
return gensym.call(null,"G__");
});
var gensym__166445 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__166444.call(this);
case  1 :
return gensym__166445.call(this,prefix_string);
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
var this__166447 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__166447.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__166448 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__166448.state,(function (p__166449){
var curr_state__166450 = p__166449;
var curr_state__166451 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__166450))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__166450):curr_state__166450);
var done__166452 = cljs.core.get.call(null,curr_state__166451,"\uFDD0'done");

if(cljs.core.truth_(done__166452))
{return curr_state__166451;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__166448.f.call(null)});
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
var map__166453__166454 = options;
var map__166453__166455 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__166453__166454))?cljs.core.apply.call(null,cljs.core.hash_map,map__166453__166454):map__166453__166454);
var keywordize_keys__166456 = cljs.core.get.call(null,map__166453__166455,"\uFDD0'keywordize-keys");
var keyfn__166457 = (cljs.core.truth_(keywordize_keys__166456)?cljs.core.keyword:cljs.core.str);
var f__166463 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____166462 = (function iter__166458(s__166459){
return (new cljs.core.LazySeq(null,false,(function (){
var s__166459__166460 = s__166459;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__166459__166460)))
{var k__166461 = cljs.core.first.call(null,s__166459__166460);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__166457.call(null,k__166461),thisfn.call(null,(x[k__166461]))]),iter__166458.call(null,cljs.core.rest.call(null,s__166459__166460)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____166462.call(null,cljs.core.js_keys.call(null,x));
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

return f__166463.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__166464){
var x = cljs.core.first(arglist__166464);
var options = cljs.core.rest(arglist__166464);
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
var mem__166465 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__166469__delegate = function (args){
var temp__3695__auto____166466 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__166465),args);

if(cljs.core.truth_(temp__3695__auto____166466))
{var v__166467 = temp__3695__auto____166466;

return v__166467;
} else
{var ret__166468 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__166465,cljs.core.assoc,args,ret__166468);
return ret__166468;
}
};
var G__166469 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__166469__delegate.call(this, args);
};
G__166469.cljs$lang$maxFixedArity = 0;
G__166469.cljs$lang$applyTo = (function (arglist__166470){
var args = cljs.core.seq( arglist__166470 );;
return G__166469__delegate.call(this, args);
});
return G__166469;
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
var trampoline__166472 = (function (f){
while(true){
var ret__166471 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__166471)))
{{
var G__166475 = ret__166471;
f = G__166475;
continue;
}
} else
{return ret__166471;
}
break;
}
});
var trampoline__166473 = (function() { 
var G__166476__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__166476 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__166476__delegate.call(this, f, args);
};
G__166476.cljs$lang$maxFixedArity = 1;
G__166476.cljs$lang$applyTo = (function (arglist__166477){
var f = cljs.core.first(arglist__166477);
var args = cljs.core.rest(arglist__166477);
return G__166476__delegate.call(this, f, args);
});
return G__166476;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__166472.call(this,f);
default:
return trampoline__166473.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__166473.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__166478 = (function (){
return rand.call(null,1);
});
var rand__166479 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__166478.call(this);
case  1 :
return rand__166479.call(this,n);
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
var k__166481 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__166481,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__166481,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___166490 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___166491 = (function (h,child,parent){
var or__3548__auto____166482 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____166482))
{return or__3548__auto____166482;
} else
{var or__3548__auto____166483 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____166483))
{return or__3548__auto____166483;
} else
{var and__3546__auto____166484 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____166484))
{var and__3546__auto____166485 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____166485))
{var and__3546__auto____166486 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____166486))
{var ret__166487 = true;
var i__166488 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____166489 = cljs.core.not.call(null,ret__166487);

if(cljs.core.truth_(or__3548__auto____166489))
{return or__3548__auto____166489;
} else
{return cljs.core._EQ_.call(null,i__166488,cljs.core.count.call(null,parent));
}
})()))
{return ret__166487;
} else
{{
var G__166493 = isa_QMARK_.call(null,h,child.call(null,i__166488),parent.call(null,i__166488));
var G__166494 = (i__166488 + 1);
ret__166487 = G__166493;
i__166488 = G__166494;
continue;
}
}
break;
}
} else
{return and__3546__auto____166486;
}
} else
{return and__3546__auto____166485;
}
} else
{return and__3546__auto____166484;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___166490.call(this,h,child);
case  3 :
return isa_QMARK___166491.call(this,h,child,parent);
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
var parents__166495 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__166496 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__166495.call(this,h);
case  2 :
return parents__166496.call(this,h,tag);
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
var ancestors__166498 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__166499 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__166498.call(this,h);
case  2 :
return ancestors__166499.call(this,h,tag);
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
var descendants__166501 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__166502 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__166501.call(this,h);
case  2 :
return descendants__166502.call(this,h,tag);
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
var derive__166512 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__166513 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__166507 = "\uFDD0'parents".call(null,h);
var td__166508 = "\uFDD0'descendants".call(null,h);
var ta__166509 = "\uFDD0'ancestors".call(null,h);
var tf__166510 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____166511 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__166507.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__166509.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__166509.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__166507,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__166510.call(null,"\uFDD0'ancestors".call(null,h),tag,td__166508,parent,ta__166509),"\uFDD0'descendants":tf__166510.call(null,"\uFDD0'descendants".call(null,h),parent,ta__166509,tag,td__166508)});
})());

if(cljs.core.truth_(or__3548__auto____166511))
{return or__3548__auto____166511;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__166512.call(this,h,tag);
case  3 :
return derive__166513.call(this,h,tag,parent);
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
var underive__166519 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__166520 = (function (h,tag,parent){
var parentMap__166515 = "\uFDD0'parents".call(null,h);
var childsParents__166516 = (cljs.core.truth_(parentMap__166515.call(null,tag))?cljs.core.disj.call(null,parentMap__166515.call(null,tag),parent):cljs.core.set([]));
var newParents__166517 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__166516))?cljs.core.assoc.call(null,parentMap__166515,tag,childsParents__166516):cljs.core.dissoc.call(null,parentMap__166515,tag));
var deriv_seq__166518 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__166504_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__166504_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__166504_SHARP_),cljs.core.second.call(null,p1__166504_SHARP_)));
}),cljs.core.seq.call(null,newParents__166517)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__166515.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__166505_SHARP_,p2__166506_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__166505_SHARP_,p2__166506_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__166518));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__166519.call(this,h,tag);
case  3 :
return underive__166520.call(this,h,tag,parent);
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
var xprefs__166522 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____166524 = (cljs.core.truth_((function (){var and__3546__auto____166523 = xprefs__166522;

if(cljs.core.truth_(and__3546__auto____166523))
{return xprefs__166522.call(null,y);
} else
{return and__3546__auto____166523;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____166524))
{return or__3548__auto____166524;
} else
{var or__3548__auto____166526 = (function (){var ps__166525 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__166525) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__166525),prefer_table)))
{} else
{}
{
var G__166529 = cljs.core.rest.call(null,ps__166525);
ps__166525 = G__166529;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____166526))
{return or__3548__auto____166526;
} else
{var or__3548__auto____166528 = (function (){var ps__166527 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__166527) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__166527),y,prefer_table)))
{} else
{}
{
var G__166530 = cljs.core.rest.call(null,ps__166527);
ps__166527 = G__166530;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____166528))
{return or__3548__auto____166528;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____166531 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____166531))
{return or__3548__auto____166531;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__166540 = cljs.core.reduce.call(null,(function (be,p__166532){
var vec__166533__166534 = p__166532;
var k__166535 = cljs.core.nth.call(null,vec__166533__166534,0,null);
var ___166536 = cljs.core.nth.call(null,vec__166533__166534,1,null);
var e__166537 = vec__166533__166534;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__166535)))
{var be2__166539 = (cljs.core.truth_((function (){var or__3548__auto____166538 = (be === null);

if(cljs.core.truth_(or__3548__auto____166538))
{return or__3548__auto____166538;
} else
{return cljs.core.dominates.call(null,k__166535,cljs.core.first.call(null,be),prefer_table);
}
})())?e__166537:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__166539),k__166535,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__166535," and ",cljs.core.first.call(null,be2__166539),", and neither is preferred")));
}
return be2__166539;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__166540))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__166540));
return cljs.core.second.call(null,best_entry__166540);
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
if(cljs.core.truth_((function (){var and__3546__auto____166541 = mf;

if(cljs.core.truth_(and__3546__auto____166541))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____166541;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____166542 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____166542))
{return or__3548__auto____166542;
} else
{var or__3548__auto____166543 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____166543))
{return or__3548__auto____166543;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____166544 = mf;

if(cljs.core.truth_(and__3546__auto____166544))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____166544;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____166545 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____166545))
{return or__3548__auto____166545;
} else
{var or__3548__auto____166546 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____166546))
{return or__3548__auto____166546;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____166547 = mf;

if(cljs.core.truth_(and__3546__auto____166547))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____166547;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____166548 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____166548))
{return or__3548__auto____166548;
} else
{var or__3548__auto____166549 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____166549))
{return or__3548__auto____166549;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____166550 = mf;

if(cljs.core.truth_(and__3546__auto____166550))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____166550;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____166551 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____166551))
{return or__3548__auto____166551;
} else
{var or__3548__auto____166552 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____166552))
{return or__3548__auto____166552;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____166553 = mf;

if(cljs.core.truth_(and__3546__auto____166553))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____166553;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____166554 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____166554))
{return or__3548__auto____166554;
} else
{var or__3548__auto____166555 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____166555))
{return or__3548__auto____166555;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____166556 = mf;

if(cljs.core.truth_(and__3546__auto____166556))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____166556;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____166557 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____166557))
{return or__3548__auto____166557;
} else
{var or__3548__auto____166558 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____166558))
{return or__3548__auto____166558;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____166559 = mf;

if(cljs.core.truth_(and__3546__auto____166559))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____166559;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____166560 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____166560))
{return or__3548__auto____166560;
} else
{var or__3548__auto____166561 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____166561))
{return or__3548__auto____166561;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____166562 = mf;

if(cljs.core.truth_(and__3546__auto____166562))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____166562;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____166563 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____166563))
{return or__3548__auto____166563;
} else
{var or__3548__auto____166564 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____166564))
{return or__3548__auto____166564;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__166565 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__166566 = cljs.core._get_method.call(null,mf,dispatch_val__166565);

if(cljs.core.truth_(target_fn__166566))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__166565)));
}
return cljs.core.apply.call(null,target_fn__166566,args);
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
var this__166567 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__166568 = this;
cljs.core.swap_BANG_.call(null,this__166568.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__166568.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__166568.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__166568.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__166569 = this;
cljs.core.swap_BANG_.call(null,this__166569.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__166569.method_cache,this__166569.method_table,this__166569.cached_hierarchy,this__166569.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__166570 = this;
cljs.core.swap_BANG_.call(null,this__166570.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__166570.method_cache,this__166570.method_table,this__166570.cached_hierarchy,this__166570.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__166571 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__166571.cached_hierarchy),cljs.core.deref.call(null,this__166571.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__166571.method_cache,this__166571.method_table,this__166571.cached_hierarchy,this__166571.hierarchy);
}
var temp__3695__auto____166572 = cljs.core.deref.call(null,this__166571.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____166572))
{var target_fn__166573 = temp__3695__auto____166572;

return target_fn__166573;
} else
{var temp__3695__auto____166574 = cljs.core.find_and_cache_best_method.call(null,this__166571.name,dispatch_val,this__166571.hierarchy,this__166571.method_table,this__166571.prefer_table,this__166571.method_cache,this__166571.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____166574))
{var target_fn__166575 = temp__3695__auto____166574;

return target_fn__166575;
} else
{return cljs.core.deref.call(null,this__166571.method_table).call(null,this__166571.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__166576 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__166576.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__166576.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__166576.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__166576.method_cache,this__166576.method_table,this__166576.cached_hierarchy,this__166576.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__166577 = this;
return cljs.core.deref.call(null,this__166577.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__166578 = this;
return cljs.core.deref.call(null,this__166578.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__166579 = this;
return cljs.core.do_dispatch.call(null,mf,this__166579.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__166580__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__166580 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__166580__delegate.call(this, _, args);
};
G__166580.cljs$lang$maxFixedArity = 1;
G__166580.cljs$lang$applyTo = (function (arglist__166581){
var _ = cljs.core.first(arglist__166581);
var args = cljs.core.rest(arglist__166581);
return G__166580__delegate.call(this, _, args);
});
return G__166580;
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
