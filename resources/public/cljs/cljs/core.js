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
var or__3548__auto____104857 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____104857))
{return or__3548__auto____104857;
} else
{var or__3548__auto____104858 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____104858))
{return or__3548__auto____104858;
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
var _invoke__104922 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____104859 = this$;

if(cljs.core.truth_(and__3546__auto____104859))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104859;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____104860 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104860))
{return or__3548__auto____104860;
} else
{var or__3548__auto____104861 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104861))
{return or__3548__auto____104861;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__104923 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____104862 = this$;

if(cljs.core.truth_(and__3546__auto____104862))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104862;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____104863 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104863))
{return or__3548__auto____104863;
} else
{var or__3548__auto____104864 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104864))
{return or__3548__auto____104864;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__104924 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____104865 = this$;

if(cljs.core.truth_(and__3546__auto____104865))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104865;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____104866 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104866))
{return or__3548__auto____104866;
} else
{var or__3548__auto____104867 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104867))
{return or__3548__auto____104867;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__104925 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____104868 = this$;

if(cljs.core.truth_(and__3546__auto____104868))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104868;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____104869 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104869))
{return or__3548__auto____104869;
} else
{var or__3548__auto____104870 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104870))
{return or__3548__auto____104870;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__104926 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____104871 = this$;

if(cljs.core.truth_(and__3546__auto____104871))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104871;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____104872 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104872))
{return or__3548__auto____104872;
} else
{var or__3548__auto____104873 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104873))
{return or__3548__auto____104873;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__104927 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____104874 = this$;

if(cljs.core.truth_(and__3546__auto____104874))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104874;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____104875 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104875))
{return or__3548__auto____104875;
} else
{var or__3548__auto____104876 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104876))
{return or__3548__auto____104876;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__104928 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____104877 = this$;

if(cljs.core.truth_(and__3546__auto____104877))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104877;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____104878 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104878))
{return or__3548__auto____104878;
} else
{var or__3548__auto____104879 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104879))
{return or__3548__auto____104879;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__104929 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____104880 = this$;

if(cljs.core.truth_(and__3546__auto____104880))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104880;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____104881 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104881))
{return or__3548__auto____104881;
} else
{var or__3548__auto____104882 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104882))
{return or__3548__auto____104882;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__104930 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____104883 = this$;

if(cljs.core.truth_(and__3546__auto____104883))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104883;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____104884 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104884))
{return or__3548__auto____104884;
} else
{var or__3548__auto____104885 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104885))
{return or__3548__auto____104885;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__104931 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____104886 = this$;

if(cljs.core.truth_(and__3546__auto____104886))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104886;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____104887 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104887))
{return or__3548__auto____104887;
} else
{var or__3548__auto____104888 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104888))
{return or__3548__auto____104888;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__104932 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____104889 = this$;

if(cljs.core.truth_(and__3546__auto____104889))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104889;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____104890 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104890))
{return or__3548__auto____104890;
} else
{var or__3548__auto____104891 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104891))
{return or__3548__auto____104891;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__104933 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____104892 = this$;

if(cljs.core.truth_(and__3546__auto____104892))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104892;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____104893 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104893))
{return or__3548__auto____104893;
} else
{var or__3548__auto____104894 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104894))
{return or__3548__auto____104894;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__104934 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____104895 = this$;

if(cljs.core.truth_(and__3546__auto____104895))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104895;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____104896 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104896))
{return or__3548__auto____104896;
} else
{var or__3548__auto____104897 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104897))
{return or__3548__auto____104897;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__104935 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____104898 = this$;

if(cljs.core.truth_(and__3546__auto____104898))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104898;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____104899 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104899))
{return or__3548__auto____104899;
} else
{var or__3548__auto____104900 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104900))
{return or__3548__auto____104900;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__104936 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____104901 = this$;

if(cljs.core.truth_(and__3546__auto____104901))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104901;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____104902 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104902))
{return or__3548__auto____104902;
} else
{var or__3548__auto____104903 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104903))
{return or__3548__auto____104903;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__104937 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____104904 = this$;

if(cljs.core.truth_(and__3546__auto____104904))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104904;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____104905 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104905))
{return or__3548__auto____104905;
} else
{var or__3548__auto____104906 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104906))
{return or__3548__auto____104906;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__104938 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____104907 = this$;

if(cljs.core.truth_(and__3546__auto____104907))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104907;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____104908 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104908))
{return or__3548__auto____104908;
} else
{var or__3548__auto____104909 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104909))
{return or__3548__auto____104909;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__104939 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____104910 = this$;

if(cljs.core.truth_(and__3546__auto____104910))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104910;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____104911 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104911))
{return or__3548__auto____104911;
} else
{var or__3548__auto____104912 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104912))
{return or__3548__auto____104912;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__104940 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____104913 = this$;

if(cljs.core.truth_(and__3546__auto____104913))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104913;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____104914 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104914))
{return or__3548__auto____104914;
} else
{var or__3548__auto____104915 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104915))
{return or__3548__auto____104915;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__104941 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____104916 = this$;

if(cljs.core.truth_(and__3546__auto____104916))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104916;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____104917 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104917))
{return or__3548__auto____104917;
} else
{var or__3548__auto____104918 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104918))
{return or__3548__auto____104918;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__104942 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____104919 = this$;

if(cljs.core.truth_(and__3546__auto____104919))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____104919;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____104920 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____104920))
{return or__3548__auto____104920;
} else
{var or__3548__auto____104921 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____104921))
{return or__3548__auto____104921;
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
return _invoke__104922.call(this,this$);
case  2 :
return _invoke__104923.call(this,this$,a);
case  3 :
return _invoke__104924.call(this,this$,a,b);
case  4 :
return _invoke__104925.call(this,this$,a,b,c);
case  5 :
return _invoke__104926.call(this,this$,a,b,c,d);
case  6 :
return _invoke__104927.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__104928.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__104929.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__104930.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__104931.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__104932.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__104933.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__104934.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__104935.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__104936.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__104937.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__104938.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__104939.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__104940.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__104941.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__104942.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____104944 = coll;

if(cljs.core.truth_(and__3546__auto____104944))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____104944;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____104945 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104945))
{return or__3548__auto____104945;
} else
{var or__3548__auto____104946 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____104946))
{return or__3548__auto____104946;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____104947 = coll;

if(cljs.core.truth_(and__3546__auto____104947))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____104947;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____104948 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104948))
{return or__3548__auto____104948;
} else
{var or__3548__auto____104949 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____104949))
{return or__3548__auto____104949;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____104950 = coll;

if(cljs.core.truth_(and__3546__auto____104950))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____104950;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____104951 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104951))
{return or__3548__auto____104951;
} else
{var or__3548__auto____104952 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____104952))
{return or__3548__auto____104952;
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
var _nth__104959 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____104953 = coll;

if(cljs.core.truth_(and__3546__auto____104953))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____104953;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____104954 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104954))
{return or__3548__auto____104954;
} else
{var or__3548__auto____104955 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____104955))
{return or__3548__auto____104955;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__104960 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____104956 = coll;

if(cljs.core.truth_(and__3546__auto____104956))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____104956;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____104957 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104957))
{return or__3548__auto____104957;
} else
{var or__3548__auto____104958 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____104958))
{return or__3548__auto____104958;
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
return _nth__104959.call(this,coll,n);
case  3 :
return _nth__104960.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____104962 = coll;

if(cljs.core.truth_(and__3546__auto____104962))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____104962;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____104963 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104963))
{return or__3548__auto____104963;
} else
{var or__3548__auto____104964 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____104964))
{return or__3548__auto____104964;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____104965 = coll;

if(cljs.core.truth_(and__3546__auto____104965))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____104965;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____104966 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104966))
{return or__3548__auto____104966;
} else
{var or__3548__auto____104967 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____104967))
{return or__3548__auto____104967;
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
var _lookup__104974 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____104968 = o;

if(cljs.core.truth_(and__3546__auto____104968))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____104968;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____104969 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____104969))
{return or__3548__auto____104969;
} else
{var or__3548__auto____104970 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____104970))
{return or__3548__auto____104970;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__104975 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____104971 = o;

if(cljs.core.truth_(and__3546__auto____104971))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____104971;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____104972 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____104972))
{return or__3548__auto____104972;
} else
{var or__3548__auto____104973 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____104973))
{return or__3548__auto____104973;
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
return _lookup__104974.call(this,o,k);
case  3 :
return _lookup__104975.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____104977 = coll;

if(cljs.core.truth_(and__3546__auto____104977))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____104977;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____104978 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104978))
{return or__3548__auto____104978;
} else
{var or__3548__auto____104979 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____104979))
{return or__3548__auto____104979;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____104980 = coll;

if(cljs.core.truth_(and__3546__auto____104980))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____104980;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____104981 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104981))
{return or__3548__auto____104981;
} else
{var or__3548__auto____104982 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____104982))
{return or__3548__auto____104982;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____104983 = coll;

if(cljs.core.truth_(and__3546__auto____104983))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____104983;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____104984 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104984))
{return or__3548__auto____104984;
} else
{var or__3548__auto____104985 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____104985))
{return or__3548__auto____104985;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____104986 = coll;

if(cljs.core.truth_(and__3546__auto____104986))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____104986;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____104987 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104987))
{return or__3548__auto____104987;
} else
{var or__3548__auto____104988 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____104988))
{return or__3548__auto____104988;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____104989 = coll;

if(cljs.core.truth_(and__3546__auto____104989))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____104989;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____104990 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104990))
{return or__3548__auto____104990;
} else
{var or__3548__auto____104991 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____104991))
{return or__3548__auto____104991;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____104992 = coll;

if(cljs.core.truth_(and__3546__auto____104992))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____104992;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____104993 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104993))
{return or__3548__auto____104993;
} else
{var or__3548__auto____104994 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____104994))
{return or__3548__auto____104994;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____104995 = coll;

if(cljs.core.truth_(and__3546__auto____104995))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____104995;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____104996 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____104996))
{return or__3548__auto____104996;
} else
{var or__3548__auto____104997 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____104997))
{return or__3548__auto____104997;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____104998 = o;

if(cljs.core.truth_(and__3546__auto____104998))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____104998;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____104999 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____104999))
{return or__3548__auto____104999;
} else
{var or__3548__auto____105000 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____105000))
{return or__3548__auto____105000;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____105001 = o;

if(cljs.core.truth_(and__3546__auto____105001))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____105001;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____105002 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____105002))
{return or__3548__auto____105002;
} else
{var or__3548__auto____105003 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____105003))
{return or__3548__auto____105003;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____105004 = o;

if(cljs.core.truth_(and__3546__auto____105004))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____105004;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____105005 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____105005))
{return or__3548__auto____105005;
} else
{var or__3548__auto____105006 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____105006))
{return or__3548__auto____105006;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____105007 = o;

if(cljs.core.truth_(and__3546__auto____105007))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____105007;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____105008 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____105008))
{return or__3548__auto____105008;
} else
{var or__3548__auto____105009 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____105009))
{return or__3548__auto____105009;
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
var _reduce__105016 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____105010 = coll;

if(cljs.core.truth_(and__3546__auto____105010))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____105010;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____105011 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____105011))
{return or__3548__auto____105011;
} else
{var or__3548__auto____105012 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____105012))
{return or__3548__auto____105012;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__105017 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____105013 = coll;

if(cljs.core.truth_(and__3546__auto____105013))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____105013;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____105014 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____105014))
{return or__3548__auto____105014;
} else
{var or__3548__auto____105015 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____105015))
{return or__3548__auto____105015;
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
return _reduce__105016.call(this,coll,f);
case  3 :
return _reduce__105017.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____105019 = o;

if(cljs.core.truth_(and__3546__auto____105019))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____105019;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____105020 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____105020))
{return or__3548__auto____105020;
} else
{var or__3548__auto____105021 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____105021))
{return or__3548__auto____105021;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____105022 = o;

if(cljs.core.truth_(and__3546__auto____105022))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____105022;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____105023 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____105023))
{return or__3548__auto____105023;
} else
{var or__3548__auto____105024 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____105024))
{return or__3548__auto____105024;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____105025 = o;

if(cljs.core.truth_(and__3546__auto____105025))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____105025;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____105026 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____105026))
{return or__3548__auto____105026;
} else
{var or__3548__auto____105027 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____105027))
{return or__3548__auto____105027;
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
if(cljs.core.truth_((function (){var and__3546__auto____105028 = o;

if(cljs.core.truth_(and__3546__auto____105028))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____105028;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____105029 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____105029))
{return or__3548__auto____105029;
} else
{var or__3548__auto____105030 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____105030))
{return or__3548__auto____105030;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____105031 = d;

if(cljs.core.truth_(and__3546__auto____105031))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____105031;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____105032 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____105032))
{return or__3548__auto____105032;
} else
{var or__3548__auto____105033 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____105033))
{return or__3548__auto____105033;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____105034 = this$;

if(cljs.core.truth_(and__3546__auto____105034))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____105034;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____105035 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____105035))
{return or__3548__auto____105035;
} else
{var or__3548__auto____105036 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____105036))
{return or__3548__auto____105036;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____105037 = this$;

if(cljs.core.truth_(and__3546__auto____105037))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____105037;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____105038 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____105038))
{return or__3548__auto____105038;
} else
{var or__3548__auto____105039 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____105039))
{return or__3548__auto____105039;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____105040 = this$;

if(cljs.core.truth_(and__3546__auto____105040))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____105040;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____105041 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____105041))
{return or__3548__auto____105041;
} else
{var or__3548__auto____105042 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____105042))
{return or__3548__auto____105042;
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
var G__105043 = null;
var G__105043__105044 = (function (o,k){
return null;
});
var G__105043__105045 = (function (o,k,not_found){
return not_found;
});
G__105043 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__105043__105044.call(this,o,k);
case  3 :
return G__105043__105045.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105043;
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
var G__105047 = null;
var G__105047__105048 = (function (_,f){
return f.call(null);
});
var G__105047__105049 = (function (_,f,start){
return start;
});
G__105047 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__105047__105048.call(this,_,f);
case  3 :
return G__105047__105049.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105047;
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
var G__105051 = null;
var G__105051__105052 = (function (_,n){
return null;
});
var G__105051__105053 = (function (_,n,not_found){
return not_found;
});
G__105051 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__105051__105052.call(this,_,n);
case  3 :
return G__105051__105053.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105051;
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
var ci_reduce__105061 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__105055 = cljs.core._nth.call(null,cicoll,0);
var n__105056 = 1;

while(true){
if(cljs.core.truth_((n__105056 < cljs.core._count.call(null,cicoll))))
{{
var G__105065 = f.call(null,val__105055,cljs.core._nth.call(null,cicoll,n__105056));
var G__105066 = (n__105056 + 1);
val__105055 = G__105065;
n__105056 = G__105066;
continue;
}
} else
{return val__105055;
}
break;
}
}
});
var ci_reduce__105062 = (function (cicoll,f,val){
var val__105057 = val;
var n__105058 = 0;

while(true){
if(cljs.core.truth_((n__105058 < cljs.core._count.call(null,cicoll))))
{{
var G__105067 = f.call(null,val__105057,cljs.core._nth.call(null,cicoll,n__105058));
var G__105068 = (n__105058 + 1);
val__105057 = G__105067;
n__105058 = G__105068;
continue;
}
} else
{return val__105057;
}
break;
}
});
var ci_reduce__105063 = (function (cicoll,f,val,idx){
var val__105059 = val;
var n__105060 = idx;

while(true){
if(cljs.core.truth_((n__105060 < cljs.core._count.call(null,cicoll))))
{{
var G__105069 = f.call(null,val__105059,cljs.core._nth.call(null,cicoll,n__105060));
var G__105070 = (n__105060 + 1);
val__105059 = G__105069;
n__105060 = G__105070;
continue;
}
} else
{return val__105059;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__105061.call(this,cicoll,f);
case  3 :
return ci_reduce__105062.call(this,cicoll,f,val);
case  4 :
return ci_reduce__105063.call(this,cicoll,f,val,idx);
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
var this__105071 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__105084 = null;
var G__105084__105085 = (function (_,f){
var this__105072 = this;
return cljs.core.ci_reduce.call(null,this__105072.a,f,(this__105072.a[this__105072.i]),(this__105072.i + 1));
});
var G__105084__105086 = (function (_,f,start){
var this__105073 = this;
return cljs.core.ci_reduce.call(null,this__105073.a,f,start,this__105073.i);
});
G__105084 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__105084__105085.call(this,_,f);
case  3 :
return G__105084__105086.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105084;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__105074 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__105075 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__105088 = null;
var G__105088__105089 = (function (coll,n){
var this__105076 = this;
var i__105077 = (n + this__105076.i);

if(cljs.core.truth_((i__105077 < this__105076.a.length)))
{return (this__105076.a[i__105077]);
} else
{return null;
}
});
var G__105088__105090 = (function (coll,n,not_found){
var this__105078 = this;
var i__105079 = (n + this__105078.i);

if(cljs.core.truth_((i__105079 < this__105078.a.length)))
{return (this__105078.a[i__105079]);
} else
{return not_found;
}
});
G__105088 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__105088__105089.call(this,coll,n);
case  3 :
return G__105088__105090.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105088;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__105080 = this;
return (this__105080.a.length - this__105080.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__105081 = this;
return (this__105081.a[this__105081.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__105082 = this;
if(cljs.core.truth_(((this__105082.i + 1) < this__105082.a.length)))
{return (new cljs.core.IndexedSeq(this__105082.a,(this__105082.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__105083 = this;
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
var G__105092 = null;
var G__105092__105093 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__105092__105094 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__105092 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__105092__105093.call(this,array,f);
case  3 :
return G__105092__105094.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105092;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__105096 = null;
var G__105096__105097 = (function (array,k){
return (array[k]);
});
var G__105096__105098 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__105096 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__105096__105097.call(this,array,k);
case  3 :
return G__105096__105098.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105096;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__105100 = null;
var G__105100__105101 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__105100__105102 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__105100 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__105100__105101.call(this,array,n);
case  3 :
return G__105100__105102.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105100;
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
var temp__3698__auto____105104 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____105104))
{var s__105105 = temp__3698__auto____105104;

return cljs.core._first.call(null,s__105105);
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
var G__105106 = cljs.core.next.call(null,s);
s = G__105106;
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
var s__105107 = cljs.core.seq.call(null,x);
var n__105108 = 0;

while(true){
if(cljs.core.truth_(s__105107))
{{
var G__105109 = cljs.core.next.call(null,s__105107);
var G__105110 = (n__105108 + 1);
s__105107 = G__105109;
n__105108 = G__105110;
continue;
}
} else
{return n__105108;
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
var conj__105111 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__105112 = (function() { 
var G__105114__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__105115 = conj.call(null,coll,x);
var G__105116 = cljs.core.first.call(null,xs);
var G__105117 = cljs.core.next.call(null,xs);
coll = G__105115;
x = G__105116;
xs = G__105117;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__105114 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105114__delegate.call(this, coll, x, xs);
};
G__105114.cljs$lang$maxFixedArity = 2;
G__105114.cljs$lang$applyTo = (function (arglist__105118){
var coll = cljs.core.first(arglist__105118);
var x = cljs.core.first(cljs.core.next(arglist__105118));
var xs = cljs.core.rest(cljs.core.next(arglist__105118));
return G__105114__delegate.call(this, coll, x, xs);
});
return G__105114;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__105111.call(this,coll,x);
default:
return conj__105112.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__105112.cljs$lang$applyTo;
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
var nth__105119 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__105120 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__105119.call(this,coll,n);
case  3 :
return nth__105120.call(this,coll,n,not_found);
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
var get__105122 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__105123 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__105122.call(this,o,k);
case  3 :
return get__105123.call(this,o,k,not_found);
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
var assoc__105126 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__105127 = (function() { 
var G__105129__delegate = function (coll,k,v,kvs){
while(true){
var ret__105125 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__105130 = ret__105125;
var G__105131 = cljs.core.first.call(null,kvs);
var G__105132 = cljs.core.second.call(null,kvs);
var G__105133 = cljs.core.nnext.call(null,kvs);
coll = G__105130;
k = G__105131;
v = G__105132;
kvs = G__105133;
continue;
}
} else
{return ret__105125;
}
break;
}
};
var G__105129 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105129__delegate.call(this, coll, k, v, kvs);
};
G__105129.cljs$lang$maxFixedArity = 3;
G__105129.cljs$lang$applyTo = (function (arglist__105134){
var coll = cljs.core.first(arglist__105134);
var k = cljs.core.first(cljs.core.next(arglist__105134));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105134)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105134)));
return G__105129__delegate.call(this, coll, k, v, kvs);
});
return G__105129;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__105126.call(this,coll,k,v);
default:
return assoc__105127.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__105127.cljs$lang$applyTo;
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
var dissoc__105136 = (function (coll){
return coll;
});
var dissoc__105137 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__105138 = (function() { 
var G__105140__delegate = function (coll,k,ks){
while(true){
var ret__105135 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__105141 = ret__105135;
var G__105142 = cljs.core.first.call(null,ks);
var G__105143 = cljs.core.next.call(null,ks);
coll = G__105141;
k = G__105142;
ks = G__105143;
continue;
}
} else
{return ret__105135;
}
break;
}
};
var G__105140 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105140__delegate.call(this, coll, k, ks);
};
G__105140.cljs$lang$maxFixedArity = 2;
G__105140.cljs$lang$applyTo = (function (arglist__105144){
var coll = cljs.core.first(arglist__105144);
var k = cljs.core.first(cljs.core.next(arglist__105144));
var ks = cljs.core.rest(cljs.core.next(arglist__105144));
return G__105140__delegate.call(this, coll, k, ks);
});
return G__105140;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__105136.call(this,coll);
case  2 :
return dissoc__105137.call(this,coll,k);
default:
return dissoc__105138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__105138.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____105145 = o;

if(cljs.core.truth_((function (){var and__3546__auto____105146 = x__451__auto____105145;

if(cljs.core.truth_(and__3546__auto____105146))
{var and__3546__auto____105147 = x__451__auto____105145.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____105147))
{return cljs.core.not.call(null,x__451__auto____105145.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____105147;
}
} else
{return and__3546__auto____105146;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____105145);
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
var disj__105149 = (function (coll){
return coll;
});
var disj__105150 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__105151 = (function() { 
var G__105153__delegate = function (coll,k,ks){
while(true){
var ret__105148 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__105154 = ret__105148;
var G__105155 = cljs.core.first.call(null,ks);
var G__105156 = cljs.core.next.call(null,ks);
coll = G__105154;
k = G__105155;
ks = G__105156;
continue;
}
} else
{return ret__105148;
}
break;
}
};
var G__105153 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105153__delegate.call(this, coll, k, ks);
};
G__105153.cljs$lang$maxFixedArity = 2;
G__105153.cljs$lang$applyTo = (function (arglist__105157){
var coll = cljs.core.first(arglist__105157);
var k = cljs.core.first(cljs.core.next(arglist__105157));
var ks = cljs.core.rest(cljs.core.next(arglist__105157));
return G__105153__delegate.call(this, coll, k, ks);
});
return G__105153;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__105149.call(this,coll);
case  2 :
return disj__105150.call(this,coll,k);
default:
return disj__105151.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__105151.cljs$lang$applyTo;
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
{var x__451__auto____105158 = x;

if(cljs.core.truth_((function (){var and__3546__auto____105159 = x__451__auto____105158;

if(cljs.core.truth_(and__3546__auto____105159))
{var and__3546__auto____105160 = x__451__auto____105158.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____105160))
{return cljs.core.not.call(null,x__451__auto____105158.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____105160;
}
} else
{return and__3546__auto____105159;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____105158);
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
{var x__451__auto____105161 = x;

if(cljs.core.truth_((function (){var and__3546__auto____105162 = x__451__auto____105161;

if(cljs.core.truth_(and__3546__auto____105162))
{var and__3546__auto____105163 = x__451__auto____105161.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____105163))
{return cljs.core.not.call(null,x__451__auto____105161.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____105163;
}
} else
{return and__3546__auto____105162;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____105161);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____105164 = x;

if(cljs.core.truth_((function (){var and__3546__auto____105165 = x__451__auto____105164;

if(cljs.core.truth_(and__3546__auto____105165))
{var and__3546__auto____105166 = x__451__auto____105164.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____105166))
{return cljs.core.not.call(null,x__451__auto____105164.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____105166;
}
} else
{return and__3546__auto____105165;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____105164);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____105167 = x;

if(cljs.core.truth_((function (){var and__3546__auto____105168 = x__451__auto____105167;

if(cljs.core.truth_(and__3546__auto____105168))
{var and__3546__auto____105169 = x__451__auto____105167.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____105169))
{return cljs.core.not.call(null,x__451__auto____105167.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____105169;
}
} else
{return and__3546__auto____105168;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____105167);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____105170 = x;

if(cljs.core.truth_((function (){var and__3546__auto____105171 = x__451__auto____105170;

if(cljs.core.truth_(and__3546__auto____105171))
{var and__3546__auto____105172 = x__451__auto____105170.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____105172))
{return cljs.core.not.call(null,x__451__auto____105170.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____105172;
}
} else
{return and__3546__auto____105171;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____105170);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____105173 = x;

if(cljs.core.truth_((function (){var and__3546__auto____105174 = x__451__auto____105173;

if(cljs.core.truth_(and__3546__auto____105174))
{var and__3546__auto____105175 = x__451__auto____105173.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____105175))
{return cljs.core.not.call(null,x__451__auto____105173.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____105175;
}
} else
{return and__3546__auto____105174;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____105173);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____105176 = x;

if(cljs.core.truth_((function (){var and__3546__auto____105177 = x__451__auto____105176;

if(cljs.core.truth_(and__3546__auto____105177))
{var and__3546__auto____105178 = x__451__auto____105176.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____105178))
{return cljs.core.not.call(null,x__451__auto____105176.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____105178;
}
} else
{return and__3546__auto____105177;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____105176);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__105179 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__105179.push(key);
}));
return keys__105179;
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
{var x__451__auto____105180 = s;

if(cljs.core.truth_((function (){var and__3546__auto____105181 = x__451__auto____105180;

if(cljs.core.truth_(and__3546__auto____105181))
{var and__3546__auto____105182 = x__451__auto____105180.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____105182))
{return cljs.core.not.call(null,x__451__auto____105180.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____105182;
}
} else
{return and__3546__auto____105181;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____105180);
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
var and__3546__auto____105183 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____105183))
{return cljs.core.not.call(null,(function (){var or__3548__auto____105184 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____105184))
{return or__3548__auto____105184;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____105183;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____105185 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____105185))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____105185;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____105186 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____105186))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____105186;
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
var and__3546__auto____105187 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____105187))
{return (n == n.toFixed());
} else
{return and__3546__auto____105187;
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
if(cljs.core.truth_((function (){var and__3546__auto____105188 = coll;

if(cljs.core.truth_(and__3546__auto____105188))
{var and__3546__auto____105189 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____105189))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____105189;
}
} else
{return and__3546__auto____105188;
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
var distinct_QMARK___105194 = (function (x){
return true;
});
var distinct_QMARK___105195 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___105196 = (function() { 
var G__105198__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__105190 = cljs.core.set([y,x]);
var xs__105191 = more;

while(true){
var x__105192 = cljs.core.first.call(null,xs__105191);
var etc__105193 = cljs.core.next.call(null,xs__105191);

if(cljs.core.truth_(xs__105191))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__105190,x__105192)))
{return false;
} else
{{
var G__105199 = cljs.core.conj.call(null,s__105190,x__105192);
var G__105200 = etc__105193;
s__105190 = G__105199;
xs__105191 = G__105200;
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
var G__105198 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105198__delegate.call(this, x, y, more);
};
G__105198.cljs$lang$maxFixedArity = 2;
G__105198.cljs$lang$applyTo = (function (arglist__105201){
var x = cljs.core.first(arglist__105201);
var y = cljs.core.first(cljs.core.next(arglist__105201));
var more = cljs.core.rest(cljs.core.next(arglist__105201));
return G__105198__delegate.call(this, x, y, more);
});
return G__105198;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___105194.call(this,x);
case  2 :
return distinct_QMARK___105195.call(this,x,y);
default:
return distinct_QMARK___105196.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___105196.cljs$lang$applyTo;
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
var r__105202 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__105202)))
{return r__105202;
} else
{if(cljs.core.truth_(r__105202))
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
var sort__105204 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__105205 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__105203 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__105203,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__105203);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__105204.call(this,comp);
case  2 :
return sort__105205.call(this,comp,coll);
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
var sort_by__105207 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__105208 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__105207.call(this,keyfn,comp);
case  3 :
return sort_by__105208.call(this,keyfn,comp,coll);
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
var reduce__105210 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__105211 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__105210.call(this,f,val);
case  3 :
return reduce__105211.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__105217 = (function (f,coll){
var temp__3695__auto____105213 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____105213))
{var s__105214 = temp__3695__auto____105213;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__105214),cljs.core.next.call(null,s__105214));
} else
{return f.call(null);
}
});
var seq_reduce__105218 = (function (f,val,coll){
var val__105215 = val;
var coll__105216 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__105216))
{{
var G__105220 = f.call(null,val__105215,cljs.core.first.call(null,coll__105216));
var G__105221 = cljs.core.next.call(null,coll__105216);
val__105215 = G__105220;
coll__105216 = G__105221;
continue;
}
} else
{return val__105215;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__105217.call(this,f,val);
case  3 :
return seq_reduce__105218.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__105222 = null;
var G__105222__105223 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__105222__105224 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__105222 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__105222__105223.call(this,coll,f);
case  3 :
return G__105222__105224.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105222;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___105226 = (function (){
return 0;
});
var _PLUS___105227 = (function (x){
return x;
});
var _PLUS___105228 = (function (x,y){
return (x + y);
});
var _PLUS___105229 = (function() { 
var G__105231__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__105231 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105231__delegate.call(this, x, y, more);
};
G__105231.cljs$lang$maxFixedArity = 2;
G__105231.cljs$lang$applyTo = (function (arglist__105232){
var x = cljs.core.first(arglist__105232);
var y = cljs.core.first(cljs.core.next(arglist__105232));
var more = cljs.core.rest(cljs.core.next(arglist__105232));
return G__105231__delegate.call(this, x, y, more);
});
return G__105231;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___105226.call(this);
case  1 :
return _PLUS___105227.call(this,x);
case  2 :
return _PLUS___105228.call(this,x,y);
default:
return _PLUS___105229.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___105229.cljs$lang$applyTo;
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
var ___105233 = (function (x){
return (- x);
});
var ___105234 = (function (x,y){
return (x - y);
});
var ___105235 = (function() { 
var G__105237__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__105237 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105237__delegate.call(this, x, y, more);
};
G__105237.cljs$lang$maxFixedArity = 2;
G__105237.cljs$lang$applyTo = (function (arglist__105238){
var x = cljs.core.first(arglist__105238);
var y = cljs.core.first(cljs.core.next(arglist__105238));
var more = cljs.core.rest(cljs.core.next(arglist__105238));
return G__105237__delegate.call(this, x, y, more);
});
return G__105237;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___105233.call(this,x);
case  2 :
return ___105234.call(this,x,y);
default:
return ___105235.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___105235.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___105239 = (function (){
return 1;
});
var _STAR___105240 = (function (x){
return x;
});
var _STAR___105241 = (function (x,y){
return (x * y);
});
var _STAR___105242 = (function() { 
var G__105244__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__105244 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105244__delegate.call(this, x, y, more);
};
G__105244.cljs$lang$maxFixedArity = 2;
G__105244.cljs$lang$applyTo = (function (arglist__105245){
var x = cljs.core.first(arglist__105245);
var y = cljs.core.first(cljs.core.next(arglist__105245));
var more = cljs.core.rest(cljs.core.next(arglist__105245));
return G__105244__delegate.call(this, x, y, more);
});
return G__105244;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___105239.call(this);
case  1 :
return _STAR___105240.call(this,x);
case  2 :
return _STAR___105241.call(this,x,y);
default:
return _STAR___105242.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___105242.cljs$lang$applyTo;
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
var _SLASH___105246 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___105247 = (function (x,y){
return (x / y);
});
var _SLASH___105248 = (function() { 
var G__105250__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__105250 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105250__delegate.call(this, x, y, more);
};
G__105250.cljs$lang$maxFixedArity = 2;
G__105250.cljs$lang$applyTo = (function (arglist__105251){
var x = cljs.core.first(arglist__105251);
var y = cljs.core.first(cljs.core.next(arglist__105251));
var more = cljs.core.rest(cljs.core.next(arglist__105251));
return G__105250__delegate.call(this, x, y, more);
});
return G__105250;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___105246.call(this,x);
case  2 :
return _SLASH___105247.call(this,x,y);
default:
return _SLASH___105248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___105248.cljs$lang$applyTo;
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
var _LT___105252 = (function (x){
return true;
});
var _LT___105253 = (function (x,y){
return (x < y);
});
var _LT___105254 = (function() { 
var G__105256__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__105257 = y;
var G__105258 = cljs.core.first.call(null,more);
var G__105259 = cljs.core.next.call(null,more);
x = G__105257;
y = G__105258;
more = G__105259;
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
var G__105256 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105256__delegate.call(this, x, y, more);
};
G__105256.cljs$lang$maxFixedArity = 2;
G__105256.cljs$lang$applyTo = (function (arglist__105260){
var x = cljs.core.first(arglist__105260);
var y = cljs.core.first(cljs.core.next(arglist__105260));
var more = cljs.core.rest(cljs.core.next(arglist__105260));
return G__105256__delegate.call(this, x, y, more);
});
return G__105256;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___105252.call(this,x);
case  2 :
return _LT___105253.call(this,x,y);
default:
return _LT___105254.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___105254.cljs$lang$applyTo;
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
var _LT__EQ___105261 = (function (x){
return true;
});
var _LT__EQ___105262 = (function (x,y){
return (x <= y);
});
var _LT__EQ___105263 = (function() { 
var G__105265__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__105266 = y;
var G__105267 = cljs.core.first.call(null,more);
var G__105268 = cljs.core.next.call(null,more);
x = G__105266;
y = G__105267;
more = G__105268;
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
var G__105265 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105265__delegate.call(this, x, y, more);
};
G__105265.cljs$lang$maxFixedArity = 2;
G__105265.cljs$lang$applyTo = (function (arglist__105269){
var x = cljs.core.first(arglist__105269);
var y = cljs.core.first(cljs.core.next(arglist__105269));
var more = cljs.core.rest(cljs.core.next(arglist__105269));
return G__105265__delegate.call(this, x, y, more);
});
return G__105265;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___105261.call(this,x);
case  2 :
return _LT__EQ___105262.call(this,x,y);
default:
return _LT__EQ___105263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___105263.cljs$lang$applyTo;
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
var _GT___105270 = (function (x){
return true;
});
var _GT___105271 = (function (x,y){
return (x > y);
});
var _GT___105272 = (function() { 
var G__105274__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__105275 = y;
var G__105276 = cljs.core.first.call(null,more);
var G__105277 = cljs.core.next.call(null,more);
x = G__105275;
y = G__105276;
more = G__105277;
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
var G__105274 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105274__delegate.call(this, x, y, more);
};
G__105274.cljs$lang$maxFixedArity = 2;
G__105274.cljs$lang$applyTo = (function (arglist__105278){
var x = cljs.core.first(arglist__105278);
var y = cljs.core.first(cljs.core.next(arglist__105278));
var more = cljs.core.rest(cljs.core.next(arglist__105278));
return G__105274__delegate.call(this, x, y, more);
});
return G__105274;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___105270.call(this,x);
case  2 :
return _GT___105271.call(this,x,y);
default:
return _GT___105272.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___105272.cljs$lang$applyTo;
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
var _GT__EQ___105279 = (function (x){
return true;
});
var _GT__EQ___105280 = (function (x,y){
return (x >= y);
});
var _GT__EQ___105281 = (function() { 
var G__105283__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__105284 = y;
var G__105285 = cljs.core.first.call(null,more);
var G__105286 = cljs.core.next.call(null,more);
x = G__105284;
y = G__105285;
more = G__105286;
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
var G__105283 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105283__delegate.call(this, x, y, more);
};
G__105283.cljs$lang$maxFixedArity = 2;
G__105283.cljs$lang$applyTo = (function (arglist__105287){
var x = cljs.core.first(arglist__105287);
var y = cljs.core.first(cljs.core.next(arglist__105287));
var more = cljs.core.rest(cljs.core.next(arglist__105287));
return G__105283__delegate.call(this, x, y, more);
});
return G__105283;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___105279.call(this,x);
case  2 :
return _GT__EQ___105280.call(this,x,y);
default:
return _GT__EQ___105281.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___105281.cljs$lang$applyTo;
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
var max__105288 = (function (x){
return x;
});
var max__105289 = (function (x,y){
return ((x > y) ? x : y);
});
var max__105290 = (function() { 
var G__105292__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__105292 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105292__delegate.call(this, x, y, more);
};
G__105292.cljs$lang$maxFixedArity = 2;
G__105292.cljs$lang$applyTo = (function (arglist__105293){
var x = cljs.core.first(arglist__105293);
var y = cljs.core.first(cljs.core.next(arglist__105293));
var more = cljs.core.rest(cljs.core.next(arglist__105293));
return G__105292__delegate.call(this, x, y, more);
});
return G__105292;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__105288.call(this,x);
case  2 :
return max__105289.call(this,x,y);
default:
return max__105290.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__105290.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__105294 = (function (x){
return x;
});
var min__105295 = (function (x,y){
return ((x < y) ? x : y);
});
var min__105296 = (function() { 
var G__105298__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__105298 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105298__delegate.call(this, x, y, more);
};
G__105298.cljs$lang$maxFixedArity = 2;
G__105298.cljs$lang$applyTo = (function (arglist__105299){
var x = cljs.core.first(arglist__105299);
var y = cljs.core.first(cljs.core.next(arglist__105299));
var more = cljs.core.rest(cljs.core.next(arglist__105299));
return G__105298__delegate.call(this, x, y, more);
});
return G__105298;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__105294.call(this,x);
case  2 :
return min__105295.call(this,x,y);
default:
return min__105296.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__105296.cljs$lang$applyTo;
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
var rem__105300 = (n % d);

return cljs.core.fix.call(null,((n - rem__105300) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__105301 = cljs.core.quot.call(null,n,d);

return (n - (d * q__105301));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__105302 = (function (){
return Math.random.call(null);
});
var rand__105303 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__105302.call(this);
case  1 :
return rand__105303.call(this,n);
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
var _EQ__EQ___105305 = (function (x){
return true;
});
var _EQ__EQ___105306 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___105307 = (function() { 
var G__105309__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__105310 = y;
var G__105311 = cljs.core.first.call(null,more);
var G__105312 = cljs.core.next.call(null,more);
x = G__105310;
y = G__105311;
more = G__105312;
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
var G__105309 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105309__delegate.call(this, x, y, more);
};
G__105309.cljs$lang$maxFixedArity = 2;
G__105309.cljs$lang$applyTo = (function (arglist__105313){
var x = cljs.core.first(arglist__105313);
var y = cljs.core.first(cljs.core.next(arglist__105313));
var more = cljs.core.rest(cljs.core.next(arglist__105313));
return G__105309__delegate.call(this, x, y, more);
});
return G__105309;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___105305.call(this,x);
case  2 :
return _EQ__EQ___105306.call(this,x,y);
default:
return _EQ__EQ___105307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___105307.cljs$lang$applyTo;
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
var n__105314 = n;
var xs__105315 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____105316 = xs__105315;

if(cljs.core.truth_(and__3546__auto____105316))
{return (n__105314 > 0);
} else
{return and__3546__auto____105316;
}
})()))
{{
var G__105317 = (n__105314 - 1);
var G__105318 = cljs.core.next.call(null,xs__105315);
n__105314 = G__105317;
xs__105315 = G__105318;
continue;
}
} else
{return xs__105315;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__105323 = null;
var G__105323__105324 = (function (coll,n){
var temp__3695__auto____105319 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____105319))
{var xs__105320 = temp__3695__auto____105319;

return cljs.core.first.call(null,xs__105320);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__105323__105325 = (function (coll,n,not_found){
var temp__3695__auto____105321 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____105321))
{var xs__105322 = temp__3695__auto____105321;

return cljs.core.first.call(null,xs__105322);
} else
{return not_found;
}
});
G__105323 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__105323__105324.call(this,coll,n);
case  3 :
return G__105323__105325.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105323;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___105327 = (function (){
return "";
});
var str_STAR___105328 = (function (x){
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
var str_STAR___105329 = (function() { 
var G__105331__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__105332 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__105333 = cljs.core.next.call(null,more);
sb = G__105332;
more = G__105333;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__105331 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__105331__delegate.call(this, x, ys);
};
G__105331.cljs$lang$maxFixedArity = 1;
G__105331.cljs$lang$applyTo = (function (arglist__105334){
var x = cljs.core.first(arglist__105334);
var ys = cljs.core.rest(arglist__105334);
return G__105331__delegate.call(this, x, ys);
});
return G__105331;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___105327.call(this);
case  1 :
return str_STAR___105328.call(this,x);
default:
return str_STAR___105329.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___105329.cljs$lang$applyTo;
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
var str__105335 = (function (){
return "";
});
var str__105336 = (function (x){
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
var str__105337 = (function() { 
var G__105339__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__105340 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__105341 = cljs.core.next.call(null,more);
sb = G__105340;
more = G__105341;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__105339 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__105339__delegate.call(this, x, ys);
};
G__105339.cljs$lang$maxFixedArity = 1;
G__105339.cljs$lang$applyTo = (function (arglist__105342){
var x = cljs.core.first(arglist__105342);
var ys = cljs.core.rest(arglist__105342);
return G__105339__delegate.call(this, x, ys);
});
return G__105339;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__105335.call(this);
case  1 :
return str__105336.call(this,x);
default:
return str__105337.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__105337.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__105343 = (function (s,start){
return s.substring(start);
});
var subs__105344 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__105343.call(this,s,start);
case  3 :
return subs__105344.call(this,s,start,end);
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
var symbol__105346 = (function (name){
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
var symbol__105347 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__105346.call(this,ns);
case  2 :
return symbol__105347.call(this,ns,name);
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
var keyword__105349 = (function (name){
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
var keyword__105350 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__105349.call(this,ns);
case  2 :
return keyword__105350.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__105352 = cljs.core.seq.call(null,x);
var ys__105353 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__105352 === null)))
{return (ys__105353 === null);
} else
{if(cljs.core.truth_((ys__105353 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__105352),cljs.core.first.call(null,ys__105353))))
{{
var G__105354 = cljs.core.next.call(null,xs__105352);
var G__105355 = cljs.core.next.call(null,ys__105353);
xs__105352 = G__105354;
ys__105353 = G__105355;
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
return cljs.core.reduce.call(null,(function (p1__105356_SHARP_,p2__105357_SHARP_){
return cljs.core.hash_combine.call(null,p1__105356_SHARP_,cljs.core.hash.call(null,p2__105357_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__105358__105359 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__105358__105359))
{var G__105361__105363 = cljs.core.first.call(null,G__105358__105359);
var vec__105362__105364 = G__105361__105363;
var key_name__105365 = cljs.core.nth.call(null,vec__105362__105364,0,null);
var f__105366 = cljs.core.nth.call(null,vec__105362__105364,1,null);
var G__105358__105367 = G__105358__105359;

var G__105361__105368 = G__105361__105363;
var G__105358__105369 = G__105358__105367;

while(true){
var vec__105370__105371 = G__105361__105368;
var key_name__105372 = cljs.core.nth.call(null,vec__105370__105371,0,null);
var f__105373 = cljs.core.nth.call(null,vec__105370__105371,1,null);
var G__105358__105374 = G__105358__105369;

var str_name__105375 = cljs.core.name.call(null,key_name__105372);

obj[str_name__105375] = f__105373;
var temp__3698__auto____105376 = cljs.core.next.call(null,G__105358__105374);

if(cljs.core.truth_(temp__3698__auto____105376))
{var G__105358__105377 = temp__3698__auto____105376;

{
var G__105378 = cljs.core.first.call(null,G__105358__105377);
var G__105379 = G__105358__105377;
G__105361__105368 = G__105378;
G__105358__105369 = G__105379;
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
var this__105380 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__105381 = this;
return (new cljs.core.List(this__105381.meta,o,coll,(this__105381.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__105382 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__105383 = this;
return this__105383.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__105384 = this;
return this__105384.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__105385 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__105386 = this;
return this__105386.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__105387 = this;
return this__105387.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__105388 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__105389 = this;
return (new cljs.core.List(meta,this__105389.first,this__105389.rest,this__105389.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__105390 = this;
return this__105390.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__105391 = this;
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
var this__105392 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__105393 = this;
return (new cljs.core.List(this__105393.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__105394 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__105395 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__105396 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__105397 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__105398 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__105399 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__105400 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__105401 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__105402 = this;
return this__105402.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__105403 = this;
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
list.cljs$lang$applyTo = (function (arglist__105404){
var items = cljs.core.seq( arglist__105404 );;
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
var this__105405 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__105406 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__105407 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__105408 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__105408.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__105409 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__105410 = this;
return this__105410.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__105411 = this;
if(cljs.core.truth_((this__105411.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__105411.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__105412 = this;
return this__105412.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__105413 = this;
return (new cljs.core.Cons(meta,this__105413.first,this__105413.rest));
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
var G__105414 = null;
var G__105414__105415 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__105414__105416 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__105414 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__105414__105415.call(this,string,f);
case  3 :
return G__105414__105416.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105414;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__105418 = null;
var G__105418__105419 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__105418__105420 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__105418 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__105418__105419.call(this,string,k);
case  3 :
return G__105418__105420.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105418;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__105422 = null;
var G__105422__105423 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__105422__105424 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__105422 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__105422__105423.call(this,string,n);
case  3 :
return G__105422__105424.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105422;
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
var G__105432 = null;
var G__105432__105433 = (function (tsym105426,coll){
var tsym105426__105428 = this;

var this$__105429 = tsym105426__105428;

return cljs.core.get.call(null,coll,this$__105429.toString());
});
var G__105432__105434 = (function (tsym105427,coll,not_found){
var tsym105427__105430 = this;

var this$__105431 = tsym105427__105430;

return cljs.core.get.call(null,coll,this$__105431.toString(),not_found);
});
G__105432 = function(tsym105427,coll,not_found){
switch(arguments.length){
case  2 :
return G__105432__105433.call(this,tsym105427,coll);
case  3 :
return G__105432__105434.call(this,tsym105427,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105432;
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
var x__105436 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__105436;
} else
{lazy_seq.x = x__105436.call(null);
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
var this__105437 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__105438 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__105439 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__105440 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__105440.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__105441 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__105442 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__105443 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__105444 = this;
return this__105444.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__105445 = this;
return (new cljs.core.LazySeq(meta,this__105445.realized,this__105445.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__105446 = [];

var s__105447 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__105447)))
{ary__105446.push(cljs.core.first.call(null,s__105447));
{
var G__105448 = cljs.core.next.call(null,s__105447);
s__105447 = G__105448;
continue;
}
} else
{return ary__105446;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__105449 = s;
var i__105450 = n;
var sum__105451 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____105452 = (i__105450 > 0);

if(cljs.core.truth_(and__3546__auto____105452))
{return cljs.core.seq.call(null,s__105449);
} else
{return and__3546__auto____105452;
}
})()))
{{
var G__105453 = cljs.core.next.call(null,s__105449);
var G__105454 = (i__105450 - 1);
var G__105455 = (sum__105451 + 1);
s__105449 = G__105453;
i__105450 = G__105454;
sum__105451 = G__105455;
continue;
}
} else
{return sum__105451;
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
var concat__105459 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__105460 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__105461 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__105456 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__105456))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__105456),concat.call(null,cljs.core.rest.call(null,s__105456),y));
} else
{return y;
}
})));
});
var concat__105462 = (function() { 
var G__105464__delegate = function (x,y,zs){
var cat__105458 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__105457 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__105457))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__105457),cat.call(null,cljs.core.rest.call(null,xys__105457),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__105458.call(null,concat.call(null,x,y),zs);
};
var G__105464 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105464__delegate.call(this, x, y, zs);
};
G__105464.cljs$lang$maxFixedArity = 2;
G__105464.cljs$lang$applyTo = (function (arglist__105465){
var x = cljs.core.first(arglist__105465);
var y = cljs.core.first(cljs.core.next(arglist__105465));
var zs = cljs.core.rest(cljs.core.next(arglist__105465));
return G__105464__delegate.call(this, x, y, zs);
});
return G__105464;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__105459.call(this);
case  1 :
return concat__105460.call(this,x);
case  2 :
return concat__105461.call(this,x,y);
default:
return concat__105462.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__105462.cljs$lang$applyTo;
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
var list_STAR___105466 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___105467 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___105468 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___105469 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___105470 = (function() { 
var G__105472__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__105472 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__105472__delegate.call(this, a, b, c, d, more);
};
G__105472.cljs$lang$maxFixedArity = 4;
G__105472.cljs$lang$applyTo = (function (arglist__105473){
var a = cljs.core.first(arglist__105473);
var b = cljs.core.first(cljs.core.next(arglist__105473));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105473)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__105473))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__105473))));
return G__105472__delegate.call(this, a, b, c, d, more);
});
return G__105472;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___105466.call(this,a);
case  2 :
return list_STAR___105467.call(this,a,b);
case  3 :
return list_STAR___105468.call(this,a,b,c);
case  4 :
return list_STAR___105469.call(this,a,b,c,d);
default:
return list_STAR___105470.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___105470.cljs$lang$applyTo;
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
var apply__105483 = (function (f,args){
var fixed_arity__105474 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__105474 + 1)) <= fixed_arity__105474)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__105484 = (function (f,x,args){
var arglist__105475 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__105476 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__105475,fixed_arity__105476) <= fixed_arity__105476)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__105475));
} else
{return f.cljs$lang$applyTo(arglist__105475);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__105475));
}
});
var apply__105485 = (function (f,x,y,args){
var arglist__105477 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__105478 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__105477,fixed_arity__105478) <= fixed_arity__105478)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__105477));
} else
{return f.cljs$lang$applyTo(arglist__105477);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__105477));
}
});
var apply__105486 = (function (f,x,y,z,args){
var arglist__105479 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__105480 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__105479,fixed_arity__105480) <= fixed_arity__105480)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__105479));
} else
{return f.cljs$lang$applyTo(arglist__105479);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__105479));
}
});
var apply__105487 = (function() { 
var G__105489__delegate = function (f,a,b,c,d,args){
var arglist__105481 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__105482 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__105481,fixed_arity__105482) <= fixed_arity__105482)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__105481));
} else
{return f.cljs$lang$applyTo(arglist__105481);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__105481));
}
};
var G__105489 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__105489__delegate.call(this, f, a, b, c, d, args);
};
G__105489.cljs$lang$maxFixedArity = 5;
G__105489.cljs$lang$applyTo = (function (arglist__105490){
var f = cljs.core.first(arglist__105490);
var a = cljs.core.first(cljs.core.next(arglist__105490));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105490)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__105490))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__105490)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__105490)))));
return G__105489__delegate.call(this, f, a, b, c, d, args);
});
return G__105489;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__105483.call(this,f,a);
case  3 :
return apply__105484.call(this,f,a,b);
case  4 :
return apply__105485.call(this,f,a,b,c);
case  5 :
return apply__105486.call(this,f,a,b,c,d);
default:
return apply__105487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__105487.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__105491){
var obj = cljs.core.first(arglist__105491);
var f = cljs.core.first(cljs.core.next(arglist__105491));
var args = cljs.core.rest(cljs.core.next(arglist__105491));
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
var not_EQ___105492 = (function (x){
return false;
});
var not_EQ___105493 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___105494 = (function() { 
var G__105496__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__105496 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105496__delegate.call(this, x, y, more);
};
G__105496.cljs$lang$maxFixedArity = 2;
G__105496.cljs$lang$applyTo = (function (arglist__105497){
var x = cljs.core.first(arglist__105497);
var y = cljs.core.first(cljs.core.next(arglist__105497));
var more = cljs.core.rest(cljs.core.next(arglist__105497));
return G__105496__delegate.call(this, x, y, more);
});
return G__105496;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___105492.call(this,x);
case  2 :
return not_EQ___105493.call(this,x,y);
default:
return not_EQ___105494.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___105494.cljs$lang$applyTo;
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
var G__105498 = pred;
var G__105499 = cljs.core.next.call(null,coll);
pred = G__105498;
coll = G__105499;
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
{var or__3548__auto____105500 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____105500))
{return or__3548__auto____105500;
} else
{{
var G__105501 = pred;
var G__105502 = cljs.core.next.call(null,coll);
pred = G__105501;
coll = G__105502;
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
var G__105503 = null;
var G__105503__105504 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__105503__105505 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__105503__105506 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__105503__105507 = (function() { 
var G__105509__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__105509 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105509__delegate.call(this, x, y, zs);
};
G__105509.cljs$lang$maxFixedArity = 2;
G__105509.cljs$lang$applyTo = (function (arglist__105510){
var x = cljs.core.first(arglist__105510);
var y = cljs.core.first(cljs.core.next(arglist__105510));
var zs = cljs.core.rest(cljs.core.next(arglist__105510));
return G__105509__delegate.call(this, x, y, zs);
});
return G__105509;
})()
;
G__105503 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__105503__105504.call(this);
case  1 :
return G__105503__105505.call(this,x);
case  2 :
return G__105503__105506.call(this,x,y);
default:
return G__105503__105507.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__105503.cljs$lang$maxFixedArity = 2;
G__105503.cljs$lang$applyTo = G__105503__105507.cljs$lang$applyTo;
return G__105503;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__105511__delegate = function (args){
return x;
};
var G__105511 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__105511__delegate.call(this, args);
};
G__105511.cljs$lang$maxFixedArity = 0;
G__105511.cljs$lang$applyTo = (function (arglist__105512){
var args = cljs.core.seq( arglist__105512 );;
return G__105511__delegate.call(this, args);
});
return G__105511;
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
var comp__105516 = (function (){
return cljs.core.identity;
});
var comp__105517 = (function (f){
return f;
});
var comp__105518 = (function (f,g){
return (function() {
var G__105522 = null;
var G__105522__105523 = (function (){
return f.call(null,g.call(null));
});
var G__105522__105524 = (function (x){
return f.call(null,g.call(null,x));
});
var G__105522__105525 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__105522__105526 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__105522__105527 = (function() { 
var G__105529__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__105529 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105529__delegate.call(this, x, y, z, args);
};
G__105529.cljs$lang$maxFixedArity = 3;
G__105529.cljs$lang$applyTo = (function (arglist__105530){
var x = cljs.core.first(arglist__105530);
var y = cljs.core.first(cljs.core.next(arglist__105530));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105530)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105530)));
return G__105529__delegate.call(this, x, y, z, args);
});
return G__105529;
})()
;
G__105522 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__105522__105523.call(this);
case  1 :
return G__105522__105524.call(this,x);
case  2 :
return G__105522__105525.call(this,x,y);
case  3 :
return G__105522__105526.call(this,x,y,z);
default:
return G__105522__105527.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__105522.cljs$lang$maxFixedArity = 3;
G__105522.cljs$lang$applyTo = G__105522__105527.cljs$lang$applyTo;
return G__105522;
})()
});
var comp__105519 = (function (f,g,h){
return (function() {
var G__105531 = null;
var G__105531__105532 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__105531__105533 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__105531__105534 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__105531__105535 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__105531__105536 = (function() { 
var G__105538__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__105538 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105538__delegate.call(this, x, y, z, args);
};
G__105538.cljs$lang$maxFixedArity = 3;
G__105538.cljs$lang$applyTo = (function (arglist__105539){
var x = cljs.core.first(arglist__105539);
var y = cljs.core.first(cljs.core.next(arglist__105539));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105539)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105539)));
return G__105538__delegate.call(this, x, y, z, args);
});
return G__105538;
})()
;
G__105531 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__105531__105532.call(this);
case  1 :
return G__105531__105533.call(this,x);
case  2 :
return G__105531__105534.call(this,x,y);
case  3 :
return G__105531__105535.call(this,x,y,z);
default:
return G__105531__105536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__105531.cljs$lang$maxFixedArity = 3;
G__105531.cljs$lang$applyTo = G__105531__105536.cljs$lang$applyTo;
return G__105531;
})()
});
var comp__105520 = (function() { 
var G__105540__delegate = function (f1,f2,f3,fs){
var fs__105513 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__105541__delegate = function (args){
var ret__105514 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__105513),args);
var fs__105515 = cljs.core.next.call(null,fs__105513);

while(true){
if(cljs.core.truth_(fs__105515))
{{
var G__105542 = cljs.core.first.call(null,fs__105515).call(null,ret__105514);
var G__105543 = cljs.core.next.call(null,fs__105515);
ret__105514 = G__105542;
fs__105515 = G__105543;
continue;
}
} else
{return ret__105514;
}
break;
}
};
var G__105541 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__105541__delegate.call(this, args);
};
G__105541.cljs$lang$maxFixedArity = 0;
G__105541.cljs$lang$applyTo = (function (arglist__105544){
var args = cljs.core.seq( arglist__105544 );;
return G__105541__delegate.call(this, args);
});
return G__105541;
})()
;
};
var G__105540 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105540__delegate.call(this, f1, f2, f3, fs);
};
G__105540.cljs$lang$maxFixedArity = 3;
G__105540.cljs$lang$applyTo = (function (arglist__105545){
var f1 = cljs.core.first(arglist__105545);
var f2 = cljs.core.first(cljs.core.next(arglist__105545));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105545)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105545)));
return G__105540__delegate.call(this, f1, f2, f3, fs);
});
return G__105540;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__105516.call(this);
case  1 :
return comp__105517.call(this,f1);
case  2 :
return comp__105518.call(this,f1,f2);
case  3 :
return comp__105519.call(this,f1,f2,f3);
default:
return comp__105520.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__105520.cljs$lang$applyTo;
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
var partial__105546 = (function (f,arg1){
return (function() { 
var G__105551__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__105551 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__105551__delegate.call(this, args);
};
G__105551.cljs$lang$maxFixedArity = 0;
G__105551.cljs$lang$applyTo = (function (arglist__105552){
var args = cljs.core.seq( arglist__105552 );;
return G__105551__delegate.call(this, args);
});
return G__105551;
})()
;
});
var partial__105547 = (function (f,arg1,arg2){
return (function() { 
var G__105553__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__105553 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__105553__delegate.call(this, args);
};
G__105553.cljs$lang$maxFixedArity = 0;
G__105553.cljs$lang$applyTo = (function (arglist__105554){
var args = cljs.core.seq( arglist__105554 );;
return G__105553__delegate.call(this, args);
});
return G__105553;
})()
;
});
var partial__105548 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__105555__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__105555 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__105555__delegate.call(this, args);
};
G__105555.cljs$lang$maxFixedArity = 0;
G__105555.cljs$lang$applyTo = (function (arglist__105556){
var args = cljs.core.seq( arglist__105556 );;
return G__105555__delegate.call(this, args);
});
return G__105555;
})()
;
});
var partial__105549 = (function() { 
var G__105557__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__105558__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__105558 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__105558__delegate.call(this, args);
};
G__105558.cljs$lang$maxFixedArity = 0;
G__105558.cljs$lang$applyTo = (function (arglist__105559){
var args = cljs.core.seq( arglist__105559 );;
return G__105558__delegate.call(this, args);
});
return G__105558;
})()
;
};
var G__105557 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__105557__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__105557.cljs$lang$maxFixedArity = 4;
G__105557.cljs$lang$applyTo = (function (arglist__105560){
var f = cljs.core.first(arglist__105560);
var arg1 = cljs.core.first(cljs.core.next(arglist__105560));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105560)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__105560))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__105560))));
return G__105557__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__105557;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__105546.call(this,f,arg1);
case  3 :
return partial__105547.call(this,f,arg1,arg2);
case  4 :
return partial__105548.call(this,f,arg1,arg2,arg3);
default:
return partial__105549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__105549.cljs$lang$applyTo;
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
var fnil__105561 = (function (f,x){
return (function() {
var G__105565 = null;
var G__105565__105566 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__105565__105567 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__105565__105568 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__105565__105569 = (function() { 
var G__105571__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__105571 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105571__delegate.call(this, a, b, c, ds);
};
G__105571.cljs$lang$maxFixedArity = 3;
G__105571.cljs$lang$applyTo = (function (arglist__105572){
var a = cljs.core.first(arglist__105572);
var b = cljs.core.first(cljs.core.next(arglist__105572));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105572)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105572)));
return G__105571__delegate.call(this, a, b, c, ds);
});
return G__105571;
})()
;
G__105565 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__105565__105566.call(this,a);
case  2 :
return G__105565__105567.call(this,a,b);
case  3 :
return G__105565__105568.call(this,a,b,c);
default:
return G__105565__105569.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__105565.cljs$lang$maxFixedArity = 3;
G__105565.cljs$lang$applyTo = G__105565__105569.cljs$lang$applyTo;
return G__105565;
})()
});
var fnil__105562 = (function (f,x,y){
return (function() {
var G__105573 = null;
var G__105573__105574 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__105573__105575 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__105573__105576 = (function() { 
var G__105578__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__105578 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105578__delegate.call(this, a, b, c, ds);
};
G__105578.cljs$lang$maxFixedArity = 3;
G__105578.cljs$lang$applyTo = (function (arglist__105579){
var a = cljs.core.first(arglist__105579);
var b = cljs.core.first(cljs.core.next(arglist__105579));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105579)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105579)));
return G__105578__delegate.call(this, a, b, c, ds);
});
return G__105578;
})()
;
G__105573 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__105573__105574.call(this,a,b);
case  3 :
return G__105573__105575.call(this,a,b,c);
default:
return G__105573__105576.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__105573.cljs$lang$maxFixedArity = 3;
G__105573.cljs$lang$applyTo = G__105573__105576.cljs$lang$applyTo;
return G__105573;
})()
});
var fnil__105563 = (function (f,x,y,z){
return (function() {
var G__105580 = null;
var G__105580__105581 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__105580__105582 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__105580__105583 = (function() { 
var G__105585__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__105585 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105585__delegate.call(this, a, b, c, ds);
};
G__105585.cljs$lang$maxFixedArity = 3;
G__105585.cljs$lang$applyTo = (function (arglist__105586){
var a = cljs.core.first(arglist__105586);
var b = cljs.core.first(cljs.core.next(arglist__105586));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105586)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105586)));
return G__105585__delegate.call(this, a, b, c, ds);
});
return G__105585;
})()
;
G__105580 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__105580__105581.call(this,a,b);
case  3 :
return G__105580__105582.call(this,a,b,c);
default:
return G__105580__105583.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__105580.cljs$lang$maxFixedArity = 3;
G__105580.cljs$lang$applyTo = G__105580__105583.cljs$lang$applyTo;
return G__105580;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__105561.call(this,f,x);
case  3 :
return fnil__105562.call(this,f,x,y);
case  4 :
return fnil__105563.call(this,f,x,y,z);
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
var mapi__105589 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____105587 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____105587))
{var s__105588 = temp__3698__auto____105587;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__105588)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__105588)));
} else
{return null;
}
})));
});

return mapi__105589.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____105590 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____105590))
{var s__105591 = temp__3698__auto____105590;

var x__105592 = f.call(null,cljs.core.first.call(null,s__105591));

if(cljs.core.truth_((x__105592 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__105591));
} else
{return cljs.core.cons.call(null,x__105592,keep.call(null,f,cljs.core.rest.call(null,s__105591)));
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
var keepi__105602 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____105599 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____105599))
{var s__105600 = temp__3698__auto____105599;

var x__105601 = f.call(null,idx,cljs.core.first.call(null,s__105600));

if(cljs.core.truth_((x__105601 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__105600));
} else
{return cljs.core.cons.call(null,x__105601,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__105600)));
}
} else
{return null;
}
})));
});

return keepi__105602.call(null,0,coll);
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
var every_pred__105647 = (function (p){
return (function() {
var ep1 = null;
var ep1__105652 = (function (){
return true;
});
var ep1__105653 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__105654 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____105609 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____105609))
{return p.call(null,y);
} else
{return and__3546__auto____105609;
}
})());
});
var ep1__105655 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____105610 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____105610))
{var and__3546__auto____105611 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____105611))
{return p.call(null,z);
} else
{return and__3546__auto____105611;
}
} else
{return and__3546__auto____105610;
}
})());
});
var ep1__105656 = (function() { 
var G__105658__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____105612 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____105612))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____105612;
}
})());
};
var G__105658 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105658__delegate.call(this, x, y, z, args);
};
G__105658.cljs$lang$maxFixedArity = 3;
G__105658.cljs$lang$applyTo = (function (arglist__105659){
var x = cljs.core.first(arglist__105659);
var y = cljs.core.first(cljs.core.next(arglist__105659));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105659)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105659)));
return G__105658__delegate.call(this, x, y, z, args);
});
return G__105658;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__105652.call(this);
case  1 :
return ep1__105653.call(this,x);
case  2 :
return ep1__105654.call(this,x,y);
case  3 :
return ep1__105655.call(this,x,y,z);
default:
return ep1__105656.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__105656.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__105648 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__105660 = (function (){
return true;
});
var ep2__105661 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____105613 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____105613))
{return p2.call(null,x);
} else
{return and__3546__auto____105613;
}
})());
});
var ep2__105662 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____105614 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____105614))
{var and__3546__auto____105615 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____105615))
{var and__3546__auto____105616 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____105616))
{return p2.call(null,y);
} else
{return and__3546__auto____105616;
}
} else
{return and__3546__auto____105615;
}
} else
{return and__3546__auto____105614;
}
})());
});
var ep2__105663 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____105617 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____105617))
{var and__3546__auto____105618 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____105618))
{var and__3546__auto____105619 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____105619))
{var and__3546__auto____105620 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____105620))
{var and__3546__auto____105621 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____105621))
{return p2.call(null,z);
} else
{return and__3546__auto____105621;
}
} else
{return and__3546__auto____105620;
}
} else
{return and__3546__auto____105619;
}
} else
{return and__3546__auto____105618;
}
} else
{return and__3546__auto____105617;
}
})());
});
var ep2__105664 = (function() { 
var G__105666__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____105622 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____105622))
{return cljs.core.every_QMARK_.call(null,(function (p1__105593_SHARP_){
var and__3546__auto____105623 = p1.call(null,p1__105593_SHARP_);

if(cljs.core.truth_(and__3546__auto____105623))
{return p2.call(null,p1__105593_SHARP_);
} else
{return and__3546__auto____105623;
}
}),args);
} else
{return and__3546__auto____105622;
}
})());
};
var G__105666 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105666__delegate.call(this, x, y, z, args);
};
G__105666.cljs$lang$maxFixedArity = 3;
G__105666.cljs$lang$applyTo = (function (arglist__105667){
var x = cljs.core.first(arglist__105667);
var y = cljs.core.first(cljs.core.next(arglist__105667));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105667)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105667)));
return G__105666__delegate.call(this, x, y, z, args);
});
return G__105666;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__105660.call(this);
case  1 :
return ep2__105661.call(this,x);
case  2 :
return ep2__105662.call(this,x,y);
case  3 :
return ep2__105663.call(this,x,y,z);
default:
return ep2__105664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__105664.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__105649 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__105668 = (function (){
return true;
});
var ep3__105669 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____105624 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____105624))
{var and__3546__auto____105625 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____105625))
{return p3.call(null,x);
} else
{return and__3546__auto____105625;
}
} else
{return and__3546__auto____105624;
}
})());
});
var ep3__105670 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____105626 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____105626))
{var and__3546__auto____105627 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____105627))
{var and__3546__auto____105628 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____105628))
{var and__3546__auto____105629 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____105629))
{var and__3546__auto____105630 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____105630))
{return p3.call(null,y);
} else
{return and__3546__auto____105630;
}
} else
{return and__3546__auto____105629;
}
} else
{return and__3546__auto____105628;
}
} else
{return and__3546__auto____105627;
}
} else
{return and__3546__auto____105626;
}
})());
});
var ep3__105671 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____105631 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____105631))
{var and__3546__auto____105632 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____105632))
{var and__3546__auto____105633 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____105633))
{var and__3546__auto____105634 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____105634))
{var and__3546__auto____105635 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____105635))
{var and__3546__auto____105636 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____105636))
{var and__3546__auto____105637 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____105637))
{var and__3546__auto____105638 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____105638))
{return p3.call(null,z);
} else
{return and__3546__auto____105638;
}
} else
{return and__3546__auto____105637;
}
} else
{return and__3546__auto____105636;
}
} else
{return and__3546__auto____105635;
}
} else
{return and__3546__auto____105634;
}
} else
{return and__3546__auto____105633;
}
} else
{return and__3546__auto____105632;
}
} else
{return and__3546__auto____105631;
}
})());
});
var ep3__105672 = (function() { 
var G__105674__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____105639 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____105639))
{return cljs.core.every_QMARK_.call(null,(function (p1__105594_SHARP_){
var and__3546__auto____105640 = p1.call(null,p1__105594_SHARP_);

if(cljs.core.truth_(and__3546__auto____105640))
{var and__3546__auto____105641 = p2.call(null,p1__105594_SHARP_);

if(cljs.core.truth_(and__3546__auto____105641))
{return p3.call(null,p1__105594_SHARP_);
} else
{return and__3546__auto____105641;
}
} else
{return and__3546__auto____105640;
}
}),args);
} else
{return and__3546__auto____105639;
}
})());
};
var G__105674 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105674__delegate.call(this, x, y, z, args);
};
G__105674.cljs$lang$maxFixedArity = 3;
G__105674.cljs$lang$applyTo = (function (arglist__105675){
var x = cljs.core.first(arglist__105675);
var y = cljs.core.first(cljs.core.next(arglist__105675));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105675)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105675)));
return G__105674__delegate.call(this, x, y, z, args);
});
return G__105674;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__105668.call(this);
case  1 :
return ep3__105669.call(this,x);
case  2 :
return ep3__105670.call(this,x,y);
case  3 :
return ep3__105671.call(this,x,y,z);
default:
return ep3__105672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__105672.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__105650 = (function() { 
var G__105676__delegate = function (p1,p2,p3,ps){
var ps__105642 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__105677 = (function (){
return true;
});
var epn__105678 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__105595_SHARP_){
return p1__105595_SHARP_.call(null,x);
}),ps__105642);
});
var epn__105679 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__105596_SHARP_){
var and__3546__auto____105643 = p1__105596_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____105643))
{return p1__105596_SHARP_.call(null,y);
} else
{return and__3546__auto____105643;
}
}),ps__105642);
});
var epn__105680 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__105597_SHARP_){
var and__3546__auto____105644 = p1__105597_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____105644))
{var and__3546__auto____105645 = p1__105597_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____105645))
{return p1__105597_SHARP_.call(null,z);
} else
{return and__3546__auto____105645;
}
} else
{return and__3546__auto____105644;
}
}),ps__105642);
});
var epn__105681 = (function() { 
var G__105683__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____105646 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____105646))
{return cljs.core.every_QMARK_.call(null,(function (p1__105598_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__105598_SHARP_,args);
}),ps__105642);
} else
{return and__3546__auto____105646;
}
})());
};
var G__105683 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105683__delegate.call(this, x, y, z, args);
};
G__105683.cljs$lang$maxFixedArity = 3;
G__105683.cljs$lang$applyTo = (function (arglist__105684){
var x = cljs.core.first(arglist__105684);
var y = cljs.core.first(cljs.core.next(arglist__105684));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105684)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105684)));
return G__105683__delegate.call(this, x, y, z, args);
});
return G__105683;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__105677.call(this);
case  1 :
return epn__105678.call(this,x);
case  2 :
return epn__105679.call(this,x,y);
case  3 :
return epn__105680.call(this,x,y,z);
default:
return epn__105681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__105681.cljs$lang$applyTo;
return epn;
})()
};
var G__105676 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105676__delegate.call(this, p1, p2, p3, ps);
};
G__105676.cljs$lang$maxFixedArity = 3;
G__105676.cljs$lang$applyTo = (function (arglist__105685){
var p1 = cljs.core.first(arglist__105685);
var p2 = cljs.core.first(cljs.core.next(arglist__105685));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105685)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105685)));
return G__105676__delegate.call(this, p1, p2, p3, ps);
});
return G__105676;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__105647.call(this,p1);
case  2 :
return every_pred__105648.call(this,p1,p2);
case  3 :
return every_pred__105649.call(this,p1,p2,p3);
default:
return every_pred__105650.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__105650.cljs$lang$applyTo;
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
var some_fn__105725 = (function (p){
return (function() {
var sp1 = null;
var sp1__105730 = (function (){
return null;
});
var sp1__105731 = (function (x){
return p.call(null,x);
});
var sp1__105732 = (function (x,y){
var or__3548__auto____105687 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____105687))
{return or__3548__auto____105687;
} else
{return p.call(null,y);
}
});
var sp1__105733 = (function (x,y,z){
var or__3548__auto____105688 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____105688))
{return or__3548__auto____105688;
} else
{var or__3548__auto____105689 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____105689))
{return or__3548__auto____105689;
} else
{return p.call(null,z);
}
}
});
var sp1__105734 = (function() { 
var G__105736__delegate = function (x,y,z,args){
var or__3548__auto____105690 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____105690))
{return or__3548__auto____105690;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__105736 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105736__delegate.call(this, x, y, z, args);
};
G__105736.cljs$lang$maxFixedArity = 3;
G__105736.cljs$lang$applyTo = (function (arglist__105737){
var x = cljs.core.first(arglist__105737);
var y = cljs.core.first(cljs.core.next(arglist__105737));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105737)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105737)));
return G__105736__delegate.call(this, x, y, z, args);
});
return G__105736;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__105730.call(this);
case  1 :
return sp1__105731.call(this,x);
case  2 :
return sp1__105732.call(this,x,y);
case  3 :
return sp1__105733.call(this,x,y,z);
default:
return sp1__105734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__105734.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__105726 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__105738 = (function (){
return null;
});
var sp2__105739 = (function (x){
var or__3548__auto____105691 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____105691))
{return or__3548__auto____105691;
} else
{return p2.call(null,x);
}
});
var sp2__105740 = (function (x,y){
var or__3548__auto____105692 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____105692))
{return or__3548__auto____105692;
} else
{var or__3548__auto____105693 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____105693))
{return or__3548__auto____105693;
} else
{var or__3548__auto____105694 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____105694))
{return or__3548__auto____105694;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__105741 = (function (x,y,z){
var or__3548__auto____105695 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____105695))
{return or__3548__auto____105695;
} else
{var or__3548__auto____105696 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____105696))
{return or__3548__auto____105696;
} else
{var or__3548__auto____105697 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____105697))
{return or__3548__auto____105697;
} else
{var or__3548__auto____105698 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____105698))
{return or__3548__auto____105698;
} else
{var or__3548__auto____105699 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____105699))
{return or__3548__auto____105699;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__105742 = (function() { 
var G__105744__delegate = function (x,y,z,args){
var or__3548__auto____105700 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____105700))
{return or__3548__auto____105700;
} else
{return cljs.core.some.call(null,(function (p1__105603_SHARP_){
var or__3548__auto____105701 = p1.call(null,p1__105603_SHARP_);

if(cljs.core.truth_(or__3548__auto____105701))
{return or__3548__auto____105701;
} else
{return p2.call(null,p1__105603_SHARP_);
}
}),args);
}
};
var G__105744 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105744__delegate.call(this, x, y, z, args);
};
G__105744.cljs$lang$maxFixedArity = 3;
G__105744.cljs$lang$applyTo = (function (arglist__105745){
var x = cljs.core.first(arglist__105745);
var y = cljs.core.first(cljs.core.next(arglist__105745));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105745)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105745)));
return G__105744__delegate.call(this, x, y, z, args);
});
return G__105744;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__105738.call(this);
case  1 :
return sp2__105739.call(this,x);
case  2 :
return sp2__105740.call(this,x,y);
case  3 :
return sp2__105741.call(this,x,y,z);
default:
return sp2__105742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__105742.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__105727 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__105746 = (function (){
return null;
});
var sp3__105747 = (function (x){
var or__3548__auto____105702 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____105702))
{return or__3548__auto____105702;
} else
{var or__3548__auto____105703 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____105703))
{return or__3548__auto____105703;
} else
{return p3.call(null,x);
}
}
});
var sp3__105748 = (function (x,y){
var or__3548__auto____105704 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____105704))
{return or__3548__auto____105704;
} else
{var or__3548__auto____105705 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____105705))
{return or__3548__auto____105705;
} else
{var or__3548__auto____105706 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____105706))
{return or__3548__auto____105706;
} else
{var or__3548__auto____105707 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____105707))
{return or__3548__auto____105707;
} else
{var or__3548__auto____105708 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____105708))
{return or__3548__auto____105708;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__105749 = (function (x,y,z){
var or__3548__auto____105709 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____105709))
{return or__3548__auto____105709;
} else
{var or__3548__auto____105710 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____105710))
{return or__3548__auto____105710;
} else
{var or__3548__auto____105711 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____105711))
{return or__3548__auto____105711;
} else
{var or__3548__auto____105712 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____105712))
{return or__3548__auto____105712;
} else
{var or__3548__auto____105713 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____105713))
{return or__3548__auto____105713;
} else
{var or__3548__auto____105714 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____105714))
{return or__3548__auto____105714;
} else
{var or__3548__auto____105715 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____105715))
{return or__3548__auto____105715;
} else
{var or__3548__auto____105716 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____105716))
{return or__3548__auto____105716;
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
var sp3__105750 = (function() { 
var G__105752__delegate = function (x,y,z,args){
var or__3548__auto____105717 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____105717))
{return or__3548__auto____105717;
} else
{return cljs.core.some.call(null,(function (p1__105604_SHARP_){
var or__3548__auto____105718 = p1.call(null,p1__105604_SHARP_);

if(cljs.core.truth_(or__3548__auto____105718))
{return or__3548__auto____105718;
} else
{var or__3548__auto____105719 = p2.call(null,p1__105604_SHARP_);

if(cljs.core.truth_(or__3548__auto____105719))
{return or__3548__auto____105719;
} else
{return p3.call(null,p1__105604_SHARP_);
}
}
}),args);
}
};
var G__105752 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105752__delegate.call(this, x, y, z, args);
};
G__105752.cljs$lang$maxFixedArity = 3;
G__105752.cljs$lang$applyTo = (function (arglist__105753){
var x = cljs.core.first(arglist__105753);
var y = cljs.core.first(cljs.core.next(arglist__105753));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105753)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105753)));
return G__105752__delegate.call(this, x, y, z, args);
});
return G__105752;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__105746.call(this);
case  1 :
return sp3__105747.call(this,x);
case  2 :
return sp3__105748.call(this,x,y);
case  3 :
return sp3__105749.call(this,x,y,z);
default:
return sp3__105750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__105750.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__105728 = (function() { 
var G__105754__delegate = function (p1,p2,p3,ps){
var ps__105720 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__105755 = (function (){
return null;
});
var spn__105756 = (function (x){
return cljs.core.some.call(null,(function (p1__105605_SHARP_){
return p1__105605_SHARP_.call(null,x);
}),ps__105720);
});
var spn__105757 = (function (x,y){
return cljs.core.some.call(null,(function (p1__105606_SHARP_){
var or__3548__auto____105721 = p1__105606_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____105721))
{return or__3548__auto____105721;
} else
{return p1__105606_SHARP_.call(null,y);
}
}),ps__105720);
});
var spn__105758 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__105607_SHARP_){
var or__3548__auto____105722 = p1__105607_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____105722))
{return or__3548__auto____105722;
} else
{var or__3548__auto____105723 = p1__105607_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____105723))
{return or__3548__auto____105723;
} else
{return p1__105607_SHARP_.call(null,z);
}
}
}),ps__105720);
});
var spn__105759 = (function() { 
var G__105761__delegate = function (x,y,z,args){
var or__3548__auto____105724 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____105724))
{return or__3548__auto____105724;
} else
{return cljs.core.some.call(null,(function (p1__105608_SHARP_){
return cljs.core.some.call(null,p1__105608_SHARP_,args);
}),ps__105720);
}
};
var G__105761 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105761__delegate.call(this, x, y, z, args);
};
G__105761.cljs$lang$maxFixedArity = 3;
G__105761.cljs$lang$applyTo = (function (arglist__105762){
var x = cljs.core.first(arglist__105762);
var y = cljs.core.first(cljs.core.next(arglist__105762));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105762)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105762)));
return G__105761__delegate.call(this, x, y, z, args);
});
return G__105761;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__105755.call(this);
case  1 :
return spn__105756.call(this,x);
case  2 :
return spn__105757.call(this,x,y);
case  3 :
return spn__105758.call(this,x,y,z);
default:
return spn__105759.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__105759.cljs$lang$applyTo;
return spn;
})()
};
var G__105754 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__105754__delegate.call(this, p1, p2, p3, ps);
};
G__105754.cljs$lang$maxFixedArity = 3;
G__105754.cljs$lang$applyTo = (function (arglist__105763){
var p1 = cljs.core.first(arglist__105763);
var p2 = cljs.core.first(cljs.core.next(arglist__105763));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105763)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105763)));
return G__105754__delegate.call(this, p1, p2, p3, ps);
});
return G__105754;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__105725.call(this,p1);
case  2 :
return some_fn__105726.call(this,p1,p2);
case  3 :
return some_fn__105727.call(this,p1,p2,p3);
default:
return some_fn__105728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__105728.cljs$lang$applyTo;
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
var map__105776 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____105764 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____105764))
{var s__105765 = temp__3698__auto____105764;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__105765)),map.call(null,f,cljs.core.rest.call(null,s__105765)));
} else
{return null;
}
})));
});
var map__105777 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__105766 = cljs.core.seq.call(null,c1);
var s2__105767 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____105768 = s1__105766;

if(cljs.core.truth_(and__3546__auto____105768))
{return s2__105767;
} else
{return and__3546__auto____105768;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__105766),cljs.core.first.call(null,s2__105767)),map.call(null,f,cljs.core.rest.call(null,s1__105766),cljs.core.rest.call(null,s2__105767)));
} else
{return null;
}
})));
});
var map__105778 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__105769 = cljs.core.seq.call(null,c1);
var s2__105770 = cljs.core.seq.call(null,c2);
var s3__105771 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____105772 = s1__105769;

if(cljs.core.truth_(and__3546__auto____105772))
{var and__3546__auto____105773 = s2__105770;

if(cljs.core.truth_(and__3546__auto____105773))
{return s3__105771;
} else
{return and__3546__auto____105773;
}
} else
{return and__3546__auto____105772;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__105769),cljs.core.first.call(null,s2__105770),cljs.core.first.call(null,s3__105771)),map.call(null,f,cljs.core.rest.call(null,s1__105769),cljs.core.rest.call(null,s2__105770),cljs.core.rest.call(null,s3__105771)));
} else
{return null;
}
})));
});
var map__105779 = (function() { 
var G__105781__delegate = function (f,c1,c2,c3,colls){
var step__105775 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__105774 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__105774)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__105774),step.call(null,map.call(null,cljs.core.rest,ss__105774)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__105686_SHARP_){
return cljs.core.apply.call(null,f,p1__105686_SHARP_);
}),step__105775.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__105781 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__105781__delegate.call(this, f, c1, c2, c3, colls);
};
G__105781.cljs$lang$maxFixedArity = 4;
G__105781.cljs$lang$applyTo = (function (arglist__105782){
var f = cljs.core.first(arglist__105782);
var c1 = cljs.core.first(cljs.core.next(arglist__105782));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105782)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__105782))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__105782))));
return G__105781__delegate.call(this, f, c1, c2, c3, colls);
});
return G__105781;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__105776.call(this,f,c1);
case  3 :
return map__105777.call(this,f,c1,c2);
case  4 :
return map__105778.call(this,f,c1,c2,c3);
default:
return map__105779.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__105779.cljs$lang$applyTo;
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
{var temp__3698__auto____105783 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____105783))
{var s__105784 = temp__3698__auto____105783;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__105784),take.call(null,(n - 1),cljs.core.rest.call(null,s__105784)));
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
var step__105787 = (function (n,coll){
while(true){
var s__105785 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____105786 = (n > 0);

if(cljs.core.truth_(and__3546__auto____105786))
{return s__105785;
} else
{return and__3546__auto____105786;
}
})()))
{{
var G__105788 = (n - 1);
var G__105789 = cljs.core.rest.call(null,s__105785);
n = G__105788;
coll = G__105789;
continue;
}
} else
{return s__105785;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__105787.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__105790 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__105791 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__105790.call(this,n);
case  2 :
return drop_last__105791.call(this,n,s);
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
var s__105793 = cljs.core.seq.call(null,coll);
var lead__105794 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__105794))
{{
var G__105795 = cljs.core.next.call(null,s__105793);
var G__105796 = cljs.core.next.call(null,lead__105794);
s__105793 = G__105795;
lead__105794 = G__105796;
continue;
}
} else
{return s__105793;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__105799 = (function (pred,coll){
while(true){
var s__105797 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____105798 = s__105797;

if(cljs.core.truth_(and__3546__auto____105798))
{return pred.call(null,cljs.core.first.call(null,s__105797));
} else
{return and__3546__auto____105798;
}
})()))
{{
var G__105800 = pred;
var G__105801 = cljs.core.rest.call(null,s__105797);
pred = G__105800;
coll = G__105801;
continue;
}
} else
{return s__105797;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__105799.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____105802 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____105802))
{var s__105803 = temp__3698__auto____105802;

return cljs.core.concat.call(null,s__105803,cycle.call(null,s__105803));
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
var repeat__105804 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__105805 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__105804.call(this,n);
case  2 :
return repeat__105805.call(this,n,x);
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
var repeatedly__105807 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__105808 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__105807.call(this,n);
case  2 :
return repeatedly__105808.call(this,n,f);
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
var interleave__105814 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__105810 = cljs.core.seq.call(null,c1);
var s2__105811 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____105812 = s1__105810;

if(cljs.core.truth_(and__3546__auto____105812))
{return s2__105811;
} else
{return and__3546__auto____105812;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__105810),cljs.core.cons.call(null,cljs.core.first.call(null,s2__105811),interleave.call(null,cljs.core.rest.call(null,s1__105810),cljs.core.rest.call(null,s2__105811))));
} else
{return null;
}
})));
});
var interleave__105815 = (function() { 
var G__105817__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__105813 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__105813)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__105813),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__105813)));
} else
{return null;
}
})));
};
var G__105817 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105817__delegate.call(this, c1, c2, colls);
};
G__105817.cljs$lang$maxFixedArity = 2;
G__105817.cljs$lang$applyTo = (function (arglist__105818){
var c1 = cljs.core.first(arglist__105818);
var c2 = cljs.core.first(cljs.core.next(arglist__105818));
var colls = cljs.core.rest(cljs.core.next(arglist__105818));
return G__105817__delegate.call(this, c1, c2, colls);
});
return G__105817;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__105814.call(this,c1,c2);
default:
return interleave__105815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__105815.cljs$lang$applyTo;
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
var cat__105821 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____105819 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____105819))
{var coll__105820 = temp__3695__auto____105819;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__105820),cat.call(null,cljs.core.rest.call(null,coll__105820),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__105821.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__105822 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__105823 = (function() { 
var G__105825__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__105825 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105825__delegate.call(this, f, coll, colls);
};
G__105825.cljs$lang$maxFixedArity = 2;
G__105825.cljs$lang$applyTo = (function (arglist__105826){
var f = cljs.core.first(arglist__105826);
var coll = cljs.core.first(cljs.core.next(arglist__105826));
var colls = cljs.core.rest(cljs.core.next(arglist__105826));
return G__105825__delegate.call(this, f, coll, colls);
});
return G__105825;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__105822.call(this,f,coll);
default:
return mapcat__105823.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__105823.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____105827 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____105827))
{var s__105828 = temp__3698__auto____105827;

var f__105829 = cljs.core.first.call(null,s__105828);
var r__105830 = cljs.core.rest.call(null,s__105828);

if(cljs.core.truth_(pred.call(null,f__105829)))
{return cljs.core.cons.call(null,f__105829,filter.call(null,pred,r__105830));
} else
{return filter.call(null,pred,r__105830);
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
var walk__105832 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__105832.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__105831_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__105831_SHARP_));
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
var partition__105839 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__105840 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____105833 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____105833))
{var s__105834 = temp__3698__auto____105833;

var p__105835 = cljs.core.take.call(null,n,s__105834);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__105835))))
{return cljs.core.cons.call(null,p__105835,partition.call(null,n,step,cljs.core.drop.call(null,step,s__105834)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__105841 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____105836 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____105836))
{var s__105837 = temp__3698__auto____105836;

var p__105838 = cljs.core.take.call(null,n,s__105837);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__105838))))
{return cljs.core.cons.call(null,p__105838,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__105837)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__105838,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__105839.call(this,n,step);
case  3 :
return partition__105840.call(this,n,step,pad);
case  4 :
return partition__105841.call(this,n,step,pad,coll);
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
var get_in__105847 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__105848 = (function (m,ks,not_found){
var sentinel__105843 = cljs.core.lookup_sentinel;
var m__105844 = m;
var ks__105845 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__105845))
{var m__105846 = cljs.core.get.call(null,m__105844,cljs.core.first.call(null,ks__105845),sentinel__105843);

if(cljs.core.truth_((sentinel__105843 === m__105846)))
{return not_found;
} else
{{
var G__105850 = sentinel__105843;
var G__105851 = m__105846;
var G__105852 = cljs.core.next.call(null,ks__105845);
sentinel__105843 = G__105850;
m__105844 = G__105851;
ks__105845 = G__105852;
continue;
}
}
} else
{return m__105844;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__105847.call(this,m,ks);
case  3 :
return get_in__105848.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__105853,v){
var vec__105854__105855 = p__105853;
var k__105856 = cljs.core.nth.call(null,vec__105854__105855,0,null);
var ks__105857 = cljs.core.nthnext.call(null,vec__105854__105855,1);

if(cljs.core.truth_(ks__105857))
{return cljs.core.assoc.call(null,m,k__105856,assoc_in.call(null,cljs.core.get.call(null,m,k__105856),ks__105857,v));
} else
{return cljs.core.assoc.call(null,m,k__105856,v);
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
var update_in__delegate = function (m,p__105858,f,args){
var vec__105859__105860 = p__105858;
var k__105861 = cljs.core.nth.call(null,vec__105859__105860,0,null);
var ks__105862 = cljs.core.nthnext.call(null,vec__105859__105860,1);

if(cljs.core.truth_(ks__105862))
{return cljs.core.assoc.call(null,m,k__105861,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__105861),ks__105862,f,args));
} else
{return cljs.core.assoc.call(null,m,k__105861,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__105861),args));
}
};
var update_in = function (m,p__105858,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__105858, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__105863){
var m = cljs.core.first(arglist__105863);
var p__105858 = cljs.core.first(cljs.core.next(arglist__105863));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__105863)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__105863)));
return update_in__delegate.call(this, m, p__105858, f, args);
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
var this__105864 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__105897 = null;
var G__105897__105898 = (function (coll,k){
var this__105865 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__105897__105899 = (function (coll,k,not_found){
var this__105866 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__105897 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__105897__105898.call(this,coll,k);
case  3 :
return G__105897__105899.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105897;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__105867 = this;
var new_array__105868 = cljs.core.aclone.call(null,this__105867.array);

(new_array__105868[k] = v);
return (new cljs.core.Vector(this__105867.meta,new_array__105868));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__105901 = null;
var G__105901__105902 = (function (tsym105869,k){
var this__105871 = this;
var tsym105869__105872 = this;

var coll__105873 = tsym105869__105872;

return cljs.core._lookup.call(null,coll__105873,k);
});
var G__105901__105903 = (function (tsym105870,k,not_found){
var this__105874 = this;
var tsym105870__105875 = this;

var coll__105876 = tsym105870__105875;

return cljs.core._lookup.call(null,coll__105876,k,not_found);
});
G__105901 = function(tsym105870,k,not_found){
switch(arguments.length){
case  2 :
return G__105901__105902.call(this,tsym105870,k);
case  3 :
return G__105901__105903.call(this,tsym105870,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105901;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__105877 = this;
var new_array__105878 = cljs.core.aclone.call(null,this__105877.array);

new_array__105878.push(o);
return (new cljs.core.Vector(this__105877.meta,new_array__105878));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__105905 = null;
var G__105905__105906 = (function (v,f){
var this__105879 = this;
return cljs.core.ci_reduce.call(null,this__105879.array,f);
});
var G__105905__105907 = (function (v,f,start){
var this__105880 = this;
return cljs.core.ci_reduce.call(null,this__105880.array,f,start);
});
G__105905 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__105905__105906.call(this,v,f);
case  3 :
return G__105905__105907.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105905;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__105881 = this;
if(cljs.core.truth_((this__105881.array.length > 0)))
{var vector_seq__105882 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__105881.array.length)))
{return cljs.core.cons.call(null,(this__105881.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__105882.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__105883 = this;
return this__105883.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__105884 = this;
var count__105885 = this__105884.array.length;

if(cljs.core.truth_((count__105885 > 0)))
{return (this__105884.array[(count__105885 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__105886 = this;
if(cljs.core.truth_((this__105886.array.length > 0)))
{var new_array__105887 = cljs.core.aclone.call(null,this__105886.array);

new_array__105887.pop();
return (new cljs.core.Vector(this__105886.meta,new_array__105887));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__105888 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__105889 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__105890 = this;
return (new cljs.core.Vector(meta,this__105890.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__105891 = this;
return this__105891.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__105909 = null;
var G__105909__105910 = (function (coll,n){
var this__105892 = this;
if(cljs.core.truth_((function (){var and__3546__auto____105893 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____105893))
{return (n < this__105892.array.length);
} else
{return and__3546__auto____105893;
}
})()))
{return (this__105892.array[n]);
} else
{return null;
}
});
var G__105909__105911 = (function (coll,n,not_found){
var this__105894 = this;
if(cljs.core.truth_((function (){var and__3546__auto____105895 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____105895))
{return (n < this__105894.array.length);
} else
{return and__3546__auto____105895;
}
})()))
{return (this__105894.array[n]);
} else
{return not_found;
}
});
G__105909 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__105909__105910.call(this,coll,n);
case  3 :
return G__105909__105911.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105909;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__105896 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__105896.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__105913 = pv.cnt;

if(cljs.core.truth_((cnt__105913 < 32)))
{return 0;
} else
{return (((cnt__105913 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__105914 = level;
var ret__105915 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__105914)))
{return ret__105915;
} else
{var embed__105916 = ret__105915;
var r__105917 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___105918 = (r__105917[0] = embed__105916);

{
var G__105919 = (ll__105914 - 5);
var G__105920 = r__105917;
ll__105914 = G__105919;
ret__105915 = G__105920;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__105921 = cljs.core.aclone.call(null,parent);
var subidx__105922 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__105921[subidx__105922] = tailnode);
return ret__105921;
} else
{var temp__3695__auto____105923 = (parent[subidx__105922]);

if(cljs.core.truth_(temp__3695__auto____105923))
{var child__105924 = temp__3695__auto____105923;

var node_to_insert__105925 = push_tail.call(null,pv,(level - 5),child__105924,tailnode);
var ___105926 = (ret__105921[subidx__105922] = node_to_insert__105925);

return ret__105921;
} else
{var node_to_insert__105927 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___105928 = (ret__105921[subidx__105922] = node_to_insert__105927);

return ret__105921;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____105929 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____105929))
{return (i < pv.cnt);
} else
{return and__3546__auto____105929;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__105930 = pv.root;
var level__105931 = pv.shift;

while(true){
if(cljs.core.truth_((level__105931 > 0)))
{{
var G__105932 = (node__105930[((i >> level__105931) & 31)]);
var G__105933 = (level__105931 - 5);
node__105930 = G__105932;
level__105931 = G__105933;
continue;
}
} else
{return node__105930;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__105934 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__105934[(i & 31)] = val);
return ret__105934;
} else
{var subidx__105935 = ((i >> level) & 31);
var ___105936 = (ret__105934[subidx__105935] = do_assoc.call(null,pv,(level - 5),(node[subidx__105935]),i,val));

return ret__105934;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__105937 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__105938 = pop_tail.call(null,pv,(level - 5),(node[subidx__105937]));

if(cljs.core.truth_((function (){var and__3546__auto____105939 = (new_child__105938 === null);

if(cljs.core.truth_(and__3546__auto____105939))
{return (subidx__105937 === 0);
} else
{return and__3546__auto____105939;
}
})()))
{return null;
} else
{var ret__105940 = cljs.core.aclone.call(null,node);
var ___105941 = (ret__105940[subidx__105937] = new_child__105938);

return ret__105940;
}
} else
{if(cljs.core.truth_((subidx__105937 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__105942 = cljs.core.aclone.call(null,node);
var ___105943 = (ret__105942[subidx__105937] = null);

return ret__105942;
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
var this__105944 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__105984 = null;
var G__105984__105985 = (function (coll,k){
var this__105945 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__105984__105986 = (function (coll,k,not_found){
var this__105946 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__105984 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__105984__105985.call(this,coll,k);
case  3 :
return G__105984__105986.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105984;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__105947 = this;
if(cljs.core.truth_((function (){var and__3546__auto____105948 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____105948))
{return (k < this__105947.cnt);
} else
{return and__3546__auto____105948;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__105949 = cljs.core.aclone.call(null,this__105947.tail);

(new_tail__105949[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__105947.meta,this__105947.cnt,this__105947.shift,this__105947.root,new_tail__105949));
} else
{return (new cljs.core.PersistentVector(this__105947.meta,this__105947.cnt,this__105947.shift,cljs.core.do_assoc.call(null,coll,this__105947.shift,this__105947.root,k,v),this__105947.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__105947.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__105947.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__105988 = null;
var G__105988__105989 = (function (tsym105950,k){
var this__105952 = this;
var tsym105950__105953 = this;

var coll__105954 = tsym105950__105953;

return cljs.core._lookup.call(null,coll__105954,k);
});
var G__105988__105990 = (function (tsym105951,k,not_found){
var this__105955 = this;
var tsym105951__105956 = this;

var coll__105957 = tsym105951__105956;

return cljs.core._lookup.call(null,coll__105957,k,not_found);
});
G__105988 = function(tsym105951,k,not_found){
switch(arguments.length){
case  2 :
return G__105988__105989.call(this,tsym105951,k);
case  3 :
return G__105988__105990.call(this,tsym105951,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105988;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__105958 = this;
if(cljs.core.truth_(((this__105958.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__105959 = cljs.core.aclone.call(null,this__105958.tail);

new_tail__105959.push(o);
return (new cljs.core.PersistentVector(this__105958.meta,(this__105958.cnt + 1),this__105958.shift,this__105958.root,new_tail__105959));
} else
{var root_overflow_QMARK___105960 = ((this__105958.cnt >> 5) > (1 << this__105958.shift));
var new_shift__105961 = (cljs.core.truth_(root_overflow_QMARK___105960)?(this__105958.shift + 5):this__105958.shift);
var new_root__105963 = (cljs.core.truth_(root_overflow_QMARK___105960)?(function (){var n_r__105962 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__105962[0] = this__105958.root);
(n_r__105962[1] = cljs.core.new_path.call(null,this__105958.shift,this__105958.tail));
return n_r__105962;
})():cljs.core.push_tail.call(null,coll,this__105958.shift,this__105958.root,this__105958.tail));

return (new cljs.core.PersistentVector(this__105958.meta,(this__105958.cnt + 1),new_shift__105961,new_root__105963,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__105992 = null;
var G__105992__105993 = (function (v,f){
var this__105964 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__105992__105994 = (function (v,f,start){
var this__105965 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__105992 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__105992__105993.call(this,v,f);
case  3 :
return G__105992__105994.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105992;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__105966 = this;
if(cljs.core.truth_((this__105966.cnt > 0)))
{var vector_seq__105967 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__105966.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__105967.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__105968 = this;
return this__105968.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__105969 = this;
if(cljs.core.truth_((this__105969.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__105969.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__105970 = this;
if(cljs.core.truth_((this__105970.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__105970.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__105970.meta);
} else
{if(cljs.core.truth_((1 < (this__105970.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__105970.meta,(this__105970.cnt - 1),this__105970.shift,this__105970.root,cljs.core.aclone.call(null,this__105970.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__105971 = cljs.core.array_for.call(null,coll,(this__105970.cnt - 2));
var nr__105972 = cljs.core.pop_tail.call(null,this__105970.shift,this__105970.root);
var new_root__105973 = (cljs.core.truth_((nr__105972 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__105972);
var cnt_1__105974 = (this__105970.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____105975 = (5 < this__105970.shift);

if(cljs.core.truth_(and__3546__auto____105975))
{return ((new_root__105973[1]) === null);
} else
{return and__3546__auto____105975;
}
})()))
{return (new cljs.core.PersistentVector(this__105970.meta,cnt_1__105974,(this__105970.shift - 5),(new_root__105973[0]),new_tail__105971));
} else
{return (new cljs.core.PersistentVector(this__105970.meta,cnt_1__105974,this__105970.shift,new_root__105973,new_tail__105971));
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
var this__105976 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__105977 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__105978 = this;
return (new cljs.core.PersistentVector(meta,this__105978.cnt,this__105978.shift,this__105978.root,this__105978.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__105979 = this;
return this__105979.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__105996 = null;
var G__105996__105997 = (function (coll,n){
var this__105980 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__105996__105998 = (function (coll,n,not_found){
var this__105981 = this;
if(cljs.core.truth_((function (){var and__3546__auto____105982 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____105982))
{return (n < this__105981.cnt);
} else
{return and__3546__auto____105982;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__105996 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__105996__105997.call(this,coll,n);
case  3 :
return G__105996__105998.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__105996;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__105983 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__105983.meta);
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
vector.cljs$lang$applyTo = (function (arglist__106000){
var args = cljs.core.seq( arglist__106000 );;
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
var this__106001 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__106029 = null;
var G__106029__106030 = (function (coll,k){
var this__106002 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__106029__106031 = (function (coll,k,not_found){
var this__106003 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__106029 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__106029__106030.call(this,coll,k);
case  3 :
return G__106029__106031.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106029;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__106004 = this;
var v_pos__106005 = (this__106004.start + key);

return (new cljs.core.Subvec(this__106004.meta,cljs.core._assoc.call(null,this__106004.v,v_pos__106005,val),this__106004.start,((this__106004.end > (v_pos__106005 + 1)) ? this__106004.end : (v_pos__106005 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__106033 = null;
var G__106033__106034 = (function (tsym106006,k){
var this__106008 = this;
var tsym106006__106009 = this;

var coll__106010 = tsym106006__106009;

return cljs.core._lookup.call(null,coll__106010,k);
});
var G__106033__106035 = (function (tsym106007,k,not_found){
var this__106011 = this;
var tsym106007__106012 = this;

var coll__106013 = tsym106007__106012;

return cljs.core._lookup.call(null,coll__106013,k,not_found);
});
G__106033 = function(tsym106007,k,not_found){
switch(arguments.length){
case  2 :
return G__106033__106034.call(this,tsym106007,k);
case  3 :
return G__106033__106035.call(this,tsym106007,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106033;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__106014 = this;
return (new cljs.core.Subvec(this__106014.meta,cljs.core._assoc_n.call(null,this__106014.v,this__106014.end,o),this__106014.start,(this__106014.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__106037 = null;
var G__106037__106038 = (function (coll,f){
var this__106015 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__106037__106039 = (function (coll,f,start){
var this__106016 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__106037 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__106037__106038.call(this,coll,f);
case  3 :
return G__106037__106039.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106037;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__106017 = this;
var subvec_seq__106018 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__106017.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__106017.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__106018.call(null,this__106017.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__106019 = this;
return (this__106019.end - this__106019.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__106020 = this;
return cljs.core._nth.call(null,this__106020.v,(this__106020.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__106021 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__106021.start,this__106021.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__106021.meta,this__106021.v,this__106021.start,(this__106021.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__106022 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__106023 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__106024 = this;
return (new cljs.core.Subvec(meta,this__106024.v,this__106024.start,this__106024.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__106025 = this;
return this__106025.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__106041 = null;
var G__106041__106042 = (function (coll,n){
var this__106026 = this;
return cljs.core._nth.call(null,this__106026.v,(this__106026.start + n));
});
var G__106041__106043 = (function (coll,n,not_found){
var this__106027 = this;
return cljs.core._nth.call(null,this__106027.v,(this__106027.start + n),not_found);
});
G__106041 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__106041__106042.call(this,coll,n);
case  3 :
return G__106041__106043.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106041;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__106028 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__106028.meta);
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
var subvec__106045 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__106046 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__106045.call(this,v,start);
case  3 :
return subvec__106046.call(this,v,start,end);
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
var this__106048 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__106049 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__106050 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__106051 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__106051.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__106052 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__106053 = this;
return cljs.core._first.call(null,this__106053.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__106054 = this;
var temp__3695__auto____106055 = cljs.core.next.call(null,this__106054.front);

if(cljs.core.truth_(temp__3695__auto____106055))
{var f1__106056 = temp__3695__auto____106055;

return (new cljs.core.PersistentQueueSeq(this__106054.meta,f1__106056,this__106054.rear));
} else
{if(cljs.core.truth_((this__106054.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__106054.meta,this__106054.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__106057 = this;
return this__106057.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__106058 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__106058.front,this__106058.rear));
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
var this__106059 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__106060 = this;
if(cljs.core.truth_(this__106060.front))
{return (new cljs.core.PersistentQueue(this__106060.meta,(this__106060.count + 1),this__106060.front,cljs.core.conj.call(null,(function (){var or__3548__auto____106061 = this__106060.rear;

if(cljs.core.truth_(or__3548__auto____106061))
{return or__3548__auto____106061;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__106060.meta,(this__106060.count + 1),cljs.core.conj.call(null,this__106060.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__106062 = this;
var rear__106063 = cljs.core.seq.call(null,this__106062.rear);

if(cljs.core.truth_((function (){var or__3548__auto____106064 = this__106062.front;

if(cljs.core.truth_(or__3548__auto____106064))
{return or__3548__auto____106064;
} else
{return rear__106063;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__106062.front,cljs.core.seq.call(null,rear__106063)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__106065 = this;
return this__106065.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__106066 = this;
return cljs.core._first.call(null,this__106066.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__106067 = this;
if(cljs.core.truth_(this__106067.front))
{var temp__3695__auto____106068 = cljs.core.next.call(null,this__106067.front);

if(cljs.core.truth_(temp__3695__auto____106068))
{var f1__106069 = temp__3695__auto____106068;

return (new cljs.core.PersistentQueue(this__106067.meta,(this__106067.count - 1),f1__106069,this__106067.rear));
} else
{return (new cljs.core.PersistentQueue(this__106067.meta,(this__106067.count - 1),cljs.core.seq.call(null,this__106067.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__106070 = this;
return cljs.core.first.call(null,this__106070.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__106071 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__106072 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__106073 = this;
return (new cljs.core.PersistentQueue(meta,this__106073.count,this__106073.front,this__106073.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__106074 = this;
return this__106074.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__106075 = this;
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
var this__106076 = this;
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
var len__106077 = array.length;

var i__106078 = 0;

while(true){
if(cljs.core.truth_((i__106078 < len__106077)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__106078]))))
{return i__106078;
} else
{{
var G__106079 = (i__106078 + incr);
i__106078 = G__106079;
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
var obj_map_contains_key_QMARK___106081 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___106082 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____106080 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____106080))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____106080;
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
return obj_map_contains_key_QMARK___106081.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___106082.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__106085 = cljs.core.hash.call(null,a);
var b__106086 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__106085 < b__106086)))
{return -1;
} else
{if(cljs.core.truth_((a__106085 > b__106086)))
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
var this__106087 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__106114 = null;
var G__106114__106115 = (function (coll,k){
var this__106088 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__106114__106116 = (function (coll,k,not_found){
var this__106089 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__106089.strobj,(this__106089.strobj[k]),not_found);
});
G__106114 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__106114__106115.call(this,coll,k);
case  3 :
return G__106114__106116.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106114;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__106090 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__106091 = goog.object.clone.call(null,this__106090.strobj);
var overwrite_QMARK___106092 = new_strobj__106091.hasOwnProperty(k);

(new_strobj__106091[k] = v);
if(cljs.core.truth_(overwrite_QMARK___106092))
{return (new cljs.core.ObjMap(this__106090.meta,this__106090.keys,new_strobj__106091));
} else
{var new_keys__106093 = cljs.core.aclone.call(null,this__106090.keys);

new_keys__106093.push(k);
return (new cljs.core.ObjMap(this__106090.meta,new_keys__106093,new_strobj__106091));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__106090.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__106094 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__106094.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__106118 = null;
var G__106118__106119 = (function (tsym106095,k){
var this__106097 = this;
var tsym106095__106098 = this;

var coll__106099 = tsym106095__106098;

return cljs.core._lookup.call(null,coll__106099,k);
});
var G__106118__106120 = (function (tsym106096,k,not_found){
var this__106100 = this;
var tsym106096__106101 = this;

var coll__106102 = tsym106096__106101;

return cljs.core._lookup.call(null,coll__106102,k,not_found);
});
G__106118 = function(tsym106096,k,not_found){
switch(arguments.length){
case  2 :
return G__106118__106119.call(this,tsym106096,k);
case  3 :
return G__106118__106120.call(this,tsym106096,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106118;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__106103 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__106104 = this;
if(cljs.core.truth_((this__106104.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__106084_SHARP_){
return cljs.core.vector.call(null,p1__106084_SHARP_,(this__106104.strobj[p1__106084_SHARP_]));
}),this__106104.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__106105 = this;
return this__106105.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__106106 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__106107 = this;
return (new cljs.core.ObjMap(meta,this__106107.keys,this__106107.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__106108 = this;
return this__106108.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__106109 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__106109.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__106110 = this;
if(cljs.core.truth_((function (){var and__3546__auto____106111 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____106111))
{return this__106110.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____106111;
}
})()))
{var new_keys__106112 = cljs.core.aclone.call(null,this__106110.keys);
var new_strobj__106113 = goog.object.clone.call(null,this__106110.strobj);

new_keys__106112.splice(cljs.core.scan_array.call(null,1,k,new_keys__106112),1);
cljs.core.js_delete.call(null,new_strobj__106113,k);
return (new cljs.core.ObjMap(this__106110.meta,new_keys__106112,new_strobj__106113));
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
var this__106123 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__106161 = null;
var G__106161__106162 = (function (coll,k){
var this__106124 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__106161__106163 = (function (coll,k,not_found){
var this__106125 = this;
var bucket__106126 = (this__106125.hashobj[cljs.core.hash.call(null,k)]);
var i__106127 = (cljs.core.truth_(bucket__106126)?cljs.core.scan_array.call(null,2,k,bucket__106126):null);

if(cljs.core.truth_(i__106127))
{return (bucket__106126[(i__106127 + 1)]);
} else
{return not_found;
}
});
G__106161 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__106161__106162.call(this,coll,k);
case  3 :
return G__106161__106163.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106161;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__106128 = this;
var h__106129 = cljs.core.hash.call(null,k);
var bucket__106130 = (this__106128.hashobj[h__106129]);

if(cljs.core.truth_(bucket__106130))
{var new_bucket__106131 = cljs.core.aclone.call(null,bucket__106130);
var new_hashobj__106132 = goog.object.clone.call(null,this__106128.hashobj);

(new_hashobj__106132[h__106129] = new_bucket__106131);
var temp__3695__auto____106133 = cljs.core.scan_array.call(null,2,k,new_bucket__106131);

if(cljs.core.truth_(temp__3695__auto____106133))
{var i__106134 = temp__3695__auto____106133;

(new_bucket__106131[(i__106134 + 1)] = v);
return (new cljs.core.HashMap(this__106128.meta,this__106128.count,new_hashobj__106132));
} else
{new_bucket__106131.push(k,v);
return (new cljs.core.HashMap(this__106128.meta,(this__106128.count + 1),new_hashobj__106132));
}
} else
{var new_hashobj__106135 = goog.object.clone.call(null,this__106128.hashobj);

(new_hashobj__106135[h__106129] = [k,v]);
return (new cljs.core.HashMap(this__106128.meta,(this__106128.count + 1),new_hashobj__106135));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__106136 = this;
var bucket__106137 = (this__106136.hashobj[cljs.core.hash.call(null,k)]);
var i__106138 = (cljs.core.truth_(bucket__106137)?cljs.core.scan_array.call(null,2,k,bucket__106137):null);

if(cljs.core.truth_(i__106138))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__106165 = null;
var G__106165__106166 = (function (tsym106139,k){
var this__106141 = this;
var tsym106139__106142 = this;

var coll__106143 = tsym106139__106142;

return cljs.core._lookup.call(null,coll__106143,k);
});
var G__106165__106167 = (function (tsym106140,k,not_found){
var this__106144 = this;
var tsym106140__106145 = this;

var coll__106146 = tsym106140__106145;

return cljs.core._lookup.call(null,coll__106146,k,not_found);
});
G__106165 = function(tsym106140,k,not_found){
switch(arguments.length){
case  2 :
return G__106165__106166.call(this,tsym106140,k);
case  3 :
return G__106165__106167.call(this,tsym106140,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106165;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__106147 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__106148 = this;
if(cljs.core.truth_((this__106148.count > 0)))
{var hashes__106149 = cljs.core.js_keys.call(null,this__106148.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__106122_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__106148.hashobj[p1__106122_SHARP_])));
}),hashes__106149);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__106150 = this;
return this__106150.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__106151 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__106152 = this;
return (new cljs.core.HashMap(meta,this__106152.count,this__106152.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__106153 = this;
return this__106153.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__106154 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__106154.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__106155 = this;
var h__106156 = cljs.core.hash.call(null,k);
var bucket__106157 = (this__106155.hashobj[h__106156]);
var i__106158 = (cljs.core.truth_(bucket__106157)?cljs.core.scan_array.call(null,2,k,bucket__106157):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__106158)))
{return coll;
} else
{var new_hashobj__106159 = goog.object.clone.call(null,this__106155.hashobj);

if(cljs.core.truth_((3 > bucket__106157.length)))
{cljs.core.js_delete.call(null,new_hashobj__106159,h__106156);
} else
{var new_bucket__106160 = cljs.core.aclone.call(null,bucket__106157);

new_bucket__106160.splice(i__106158,2);
(new_hashobj__106159[h__106156] = new_bucket__106160);
}
return (new cljs.core.HashMap(this__106155.meta,(this__106155.count - 1),new_hashobj__106159));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__106169 = ks.length;

var i__106170 = 0;
var out__106171 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__106170 < len__106169)))
{{
var G__106172 = (i__106170 + 1);
var G__106173 = cljs.core.assoc.call(null,out__106171,(ks[i__106170]),(vs[i__106170]));
i__106170 = G__106172;
out__106171 = G__106173;
continue;
}
} else
{return out__106171;
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
var in$__106174 = cljs.core.seq.call(null,keyvals);
var out__106175 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__106174))
{{
var G__106176 = cljs.core.nnext.call(null,in$__106174);
var G__106177 = cljs.core.assoc.call(null,out__106175,cljs.core.first.call(null,in$__106174),cljs.core.second.call(null,in$__106174));
in$__106174 = G__106176;
out__106175 = G__106177;
continue;
}
} else
{return out__106175;
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
hash_map.cljs$lang$applyTo = (function (arglist__106178){
var keyvals = cljs.core.seq( arglist__106178 );;
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
{return cljs.core.reduce.call(null,(function (p1__106179_SHARP_,p2__106180_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____106181 = p1__106179_SHARP_;

if(cljs.core.truth_(or__3548__auto____106181))
{return or__3548__auto____106181;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__106180_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__106182){
var maps = cljs.core.seq( arglist__106182 );;
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
{var merge_entry__106185 = (function (m,e){
var k__106183 = cljs.core.first.call(null,e);
var v__106184 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__106183)))
{return cljs.core.assoc.call(null,m,k__106183,f.call(null,cljs.core.get.call(null,m,k__106183),v__106184));
} else
{return cljs.core.assoc.call(null,m,k__106183,v__106184);
}
});
var merge2__106187 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__106185,(function (){var or__3548__auto____106186 = m1;

if(cljs.core.truth_(or__3548__auto____106186))
{return or__3548__auto____106186;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__106187,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__106188){
var f = cljs.core.first(arglist__106188);
var maps = cljs.core.rest(arglist__106188);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__106190 = cljs.core.ObjMap.fromObject([],{});
var keys__106191 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__106191))
{var key__106192 = cljs.core.first.call(null,keys__106191);
var entry__106193 = cljs.core.get.call(null,map,key__106192,"\uFDD0'user/not-found");

{
var G__106194 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__106193,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__106190,key__106192,entry__106193):ret__106190);
var G__106195 = cljs.core.next.call(null,keys__106191);
ret__106190 = G__106194;
keys__106191 = G__106195;
continue;
}
} else
{return ret__106190;
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
var this__106196 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__106217 = null;
var G__106217__106218 = (function (coll,v){
var this__106197 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__106217__106219 = (function (coll,v,not_found){
var this__106198 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__106198.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__106217 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__106217__106218.call(this,coll,v);
case  3 :
return G__106217__106219.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106217;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__106221 = null;
var G__106221__106222 = (function (tsym106199,k){
var this__106201 = this;
var tsym106199__106202 = this;

var coll__106203 = tsym106199__106202;

return cljs.core._lookup.call(null,coll__106203,k);
});
var G__106221__106223 = (function (tsym106200,k,not_found){
var this__106204 = this;
var tsym106200__106205 = this;

var coll__106206 = tsym106200__106205;

return cljs.core._lookup.call(null,coll__106206,k,not_found);
});
G__106221 = function(tsym106200,k,not_found){
switch(arguments.length){
case  2 :
return G__106221__106222.call(this,tsym106200,k);
case  3 :
return G__106221__106223.call(this,tsym106200,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106221;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__106207 = this;
return (new cljs.core.Set(this__106207.meta,cljs.core.assoc.call(null,this__106207.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__106208 = this;
return cljs.core.keys.call(null,this__106208.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__106209 = this;
return (new cljs.core.Set(this__106209.meta,cljs.core.dissoc.call(null,this__106209.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__106210 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__106211 = this;
var and__3546__auto____106212 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____106212))
{var and__3546__auto____106213 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____106213))
{return cljs.core.every_QMARK_.call(null,(function (p1__106189_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__106189_SHARP_);
}),other);
} else
{return and__3546__auto____106213;
}
} else
{return and__3546__auto____106212;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__106214 = this;
return (new cljs.core.Set(meta,this__106214.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__106215 = this;
return this__106215.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__106216 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__106216.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__106226 = cljs.core.seq.call(null,coll);
var out__106227 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__106226))))
{{
var G__106228 = cljs.core.rest.call(null,in$__106226);
var G__106229 = cljs.core.conj.call(null,out__106227,cljs.core.first.call(null,in$__106226));
in$__106226 = G__106228;
out__106227 = G__106229;
continue;
}
} else
{return out__106227;
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
{var n__106230 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____106231 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____106231))
{var e__106232 = temp__3695__auto____106231;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__106232));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__106230,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__106225_SHARP_){
var temp__3695__auto____106233 = cljs.core.find.call(null,smap,p1__106225_SHARP_);

if(cljs.core.truth_(temp__3695__auto____106233))
{var e__106234 = temp__3695__auto____106233;

return cljs.core.second.call(null,e__106234);
} else
{return p1__106225_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__106242 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__106235,seen){
while(true){
var vec__106236__106237 = p__106235;
var f__106238 = cljs.core.nth.call(null,vec__106236__106237,0,null);
var xs__106239 = vec__106236__106237;

var temp__3698__auto____106240 = cljs.core.seq.call(null,xs__106239);

if(cljs.core.truth_(temp__3698__auto____106240))
{var s__106241 = temp__3698__auto____106240;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__106238)))
{{
var G__106243 = cljs.core.rest.call(null,s__106241);
var G__106244 = seen;
p__106235 = G__106243;
seen = G__106244;
continue;
}
} else
{return cljs.core.cons.call(null,f__106238,step.call(null,cljs.core.rest.call(null,s__106241),cljs.core.conj.call(null,seen,f__106238)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__106242.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__106245 = cljs.core.PersistentVector.fromArray([]);
var s__106246 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__106246)))
{{
var G__106247 = cljs.core.conj.call(null,ret__106245,cljs.core.first.call(null,s__106246));
var G__106248 = cljs.core.next.call(null,s__106246);
ret__106245 = G__106247;
s__106246 = G__106248;
continue;
}
} else
{return cljs.core.seq.call(null,ret__106245);
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
{if(cljs.core.truth_((function (){var or__3548__auto____106249 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____106249))
{return or__3548__auto____106249;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__106250 = x.lastIndexOf("/");

if(cljs.core.truth_((i__106250 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__106250 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____106251 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____106251))
{return or__3548__auto____106251;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__106252 = x.lastIndexOf("/");

if(cljs.core.truth_((i__106252 > -1)))
{return cljs.core.subs.call(null,x,2,i__106252);
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
var map__106255 = cljs.core.ObjMap.fromObject([],{});
var ks__106256 = cljs.core.seq.call(null,keys);
var vs__106257 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____106258 = ks__106256;

if(cljs.core.truth_(and__3546__auto____106258))
{return vs__106257;
} else
{return and__3546__auto____106258;
}
})()))
{{
var G__106259 = cljs.core.assoc.call(null,map__106255,cljs.core.first.call(null,ks__106256),cljs.core.first.call(null,vs__106257));
var G__106260 = cljs.core.next.call(null,ks__106256);
var G__106261 = cljs.core.next.call(null,vs__106257);
map__106255 = G__106259;
ks__106256 = G__106260;
vs__106257 = G__106261;
continue;
}
} else
{return map__106255;
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
var max_key__106264 = (function (k,x){
return x;
});
var max_key__106265 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__106266 = (function() { 
var G__106268__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__106253_SHARP_,p2__106254_SHARP_){
return max_key.call(null,k,p1__106253_SHARP_,p2__106254_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__106268 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__106268__delegate.call(this, k, x, y, more);
};
G__106268.cljs$lang$maxFixedArity = 3;
G__106268.cljs$lang$applyTo = (function (arglist__106269){
var k = cljs.core.first(arglist__106269);
var x = cljs.core.first(cljs.core.next(arglist__106269));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__106269)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__106269)));
return G__106268__delegate.call(this, k, x, y, more);
});
return G__106268;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__106264.call(this,k,x);
case  3 :
return max_key__106265.call(this,k,x,y);
default:
return max_key__106266.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__106266.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__106270 = (function (k,x){
return x;
});
var min_key__106271 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__106272 = (function() { 
var G__106274__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__106262_SHARP_,p2__106263_SHARP_){
return min_key.call(null,k,p1__106262_SHARP_,p2__106263_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__106274 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__106274__delegate.call(this, k, x, y, more);
};
G__106274.cljs$lang$maxFixedArity = 3;
G__106274.cljs$lang$applyTo = (function (arglist__106275){
var k = cljs.core.first(arglist__106275);
var x = cljs.core.first(cljs.core.next(arglist__106275));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__106275)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__106275)));
return G__106274__delegate.call(this, k, x, y, more);
});
return G__106274;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__106270.call(this,k,x);
case  3 :
return min_key__106271.call(this,k,x,y);
default:
return min_key__106272.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__106272.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__106278 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__106279 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____106276 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____106276))
{var s__106277 = temp__3698__auto____106276;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__106277),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__106277)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__106278.call(this,n,step);
case  3 :
return partition_all__106279.call(this,n,step,coll);
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
var temp__3698__auto____106281 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____106281))
{var s__106282 = temp__3698__auto____106281;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__106282))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__106282),take_while.call(null,pred,cljs.core.rest.call(null,s__106282)));
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
var this__106283 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__106284 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__106300 = null;
var G__106300__106301 = (function (rng,f){
var this__106285 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__106300__106302 = (function (rng,f,s){
var this__106286 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__106300 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__106300__106301.call(this,rng,f);
case  3 :
return G__106300__106302.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106300;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__106287 = this;
var comp__106288 = (cljs.core.truth_((this__106287.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__106288.call(null,this__106287.start,this__106287.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__106289 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__106289.end - this__106289.start) / this__106289.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__106290 = this;
return this__106290.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__106291 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__106291.meta,(this__106291.start + this__106291.step),this__106291.end,this__106291.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__106292 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__106293 = this;
return (new cljs.core.Range(meta,this__106293.start,this__106293.end,this__106293.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__106294 = this;
return this__106294.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__106304 = null;
var G__106304__106305 = (function (rng,n){
var this__106295 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__106295.start + (n * this__106295.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____106296 = (this__106295.start > this__106295.end);

if(cljs.core.truth_(and__3546__auto____106296))
{return cljs.core._EQ_.call(null,this__106295.step,0);
} else
{return and__3546__auto____106296;
}
})()))
{return this__106295.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__106304__106306 = (function (rng,n,not_found){
var this__106297 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__106297.start + (n * this__106297.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____106298 = (this__106297.start > this__106297.end);

if(cljs.core.truth_(and__3546__auto____106298))
{return cljs.core._EQ_.call(null,this__106297.step,0);
} else
{return and__3546__auto____106298;
}
})()))
{return this__106297.start;
} else
{return not_found;
}
}
});
G__106304 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__106304__106305.call(this,rng,n);
case  3 :
return G__106304__106306.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106304;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__106299 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__106299.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__106308 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__106309 = (function (end){
return range.call(null,0,end,1);
});
var range__106310 = (function (start,end){
return range.call(null,start,end,1);
});
var range__106311 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__106308.call(this);
case  1 :
return range__106309.call(this,start);
case  2 :
return range__106310.call(this,start,end);
case  3 :
return range__106311.call(this,start,end,step);
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
var temp__3698__auto____106313 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____106313))
{var s__106314 = temp__3698__auto____106313;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__106314),take_nth.call(null,n,cljs.core.drop.call(null,n,s__106314)));
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
var temp__3698__auto____106316 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____106316))
{var s__106317 = temp__3698__auto____106316;

var fst__106318 = cljs.core.first.call(null,s__106317);
var fv__106319 = f.call(null,fst__106318);
var run__106320 = cljs.core.cons.call(null,fst__106318,cljs.core.take_while.call(null,(function (p1__106315_SHARP_){
return cljs.core._EQ_.call(null,fv__106319,f.call(null,p1__106315_SHARP_));
}),cljs.core.next.call(null,s__106317)));

return cljs.core.cons.call(null,run__106320,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__106320),s__106317))));
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
var reductions__106335 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____106331 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____106331))
{var s__106332 = temp__3695__auto____106331;

return reductions.call(null,f,cljs.core.first.call(null,s__106332),cljs.core.rest.call(null,s__106332));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__106336 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____106333 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____106333))
{var s__106334 = temp__3698__auto____106333;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__106334)),cljs.core.rest.call(null,s__106334));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__106335.call(this,f,init);
case  3 :
return reductions__106336.call(this,f,init,coll);
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
var juxt__106339 = (function (f){
return (function() {
var G__106344 = null;
var G__106344__106345 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__106344__106346 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__106344__106347 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__106344__106348 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__106344__106349 = (function() { 
var G__106351__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__106351 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__106351__delegate.call(this, x, y, z, args);
};
G__106351.cljs$lang$maxFixedArity = 3;
G__106351.cljs$lang$applyTo = (function (arglist__106352){
var x = cljs.core.first(arglist__106352);
var y = cljs.core.first(cljs.core.next(arglist__106352));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__106352)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__106352)));
return G__106351__delegate.call(this, x, y, z, args);
});
return G__106351;
})()
;
G__106344 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__106344__106345.call(this);
case  1 :
return G__106344__106346.call(this,x);
case  2 :
return G__106344__106347.call(this,x,y);
case  3 :
return G__106344__106348.call(this,x,y,z);
default:
return G__106344__106349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__106344.cljs$lang$maxFixedArity = 3;
G__106344.cljs$lang$applyTo = G__106344__106349.cljs$lang$applyTo;
return G__106344;
})()
});
var juxt__106340 = (function (f,g){
return (function() {
var G__106353 = null;
var G__106353__106354 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__106353__106355 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__106353__106356 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__106353__106357 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__106353__106358 = (function() { 
var G__106360__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__106360 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__106360__delegate.call(this, x, y, z, args);
};
G__106360.cljs$lang$maxFixedArity = 3;
G__106360.cljs$lang$applyTo = (function (arglist__106361){
var x = cljs.core.first(arglist__106361);
var y = cljs.core.first(cljs.core.next(arglist__106361));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__106361)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__106361)));
return G__106360__delegate.call(this, x, y, z, args);
});
return G__106360;
})()
;
G__106353 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__106353__106354.call(this);
case  1 :
return G__106353__106355.call(this,x);
case  2 :
return G__106353__106356.call(this,x,y);
case  3 :
return G__106353__106357.call(this,x,y,z);
default:
return G__106353__106358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__106353.cljs$lang$maxFixedArity = 3;
G__106353.cljs$lang$applyTo = G__106353__106358.cljs$lang$applyTo;
return G__106353;
})()
});
var juxt__106341 = (function (f,g,h){
return (function() {
var G__106362 = null;
var G__106362__106363 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__106362__106364 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__106362__106365 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__106362__106366 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__106362__106367 = (function() { 
var G__106369__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__106369 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__106369__delegate.call(this, x, y, z, args);
};
G__106369.cljs$lang$maxFixedArity = 3;
G__106369.cljs$lang$applyTo = (function (arglist__106370){
var x = cljs.core.first(arglist__106370);
var y = cljs.core.first(cljs.core.next(arglist__106370));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__106370)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__106370)));
return G__106369__delegate.call(this, x, y, z, args);
});
return G__106369;
})()
;
G__106362 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__106362__106363.call(this);
case  1 :
return G__106362__106364.call(this,x);
case  2 :
return G__106362__106365.call(this,x,y);
case  3 :
return G__106362__106366.call(this,x,y,z);
default:
return G__106362__106367.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__106362.cljs$lang$maxFixedArity = 3;
G__106362.cljs$lang$applyTo = G__106362__106367.cljs$lang$applyTo;
return G__106362;
})()
});
var juxt__106342 = (function() { 
var G__106371__delegate = function (f,g,h,fs){
var fs__106338 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__106372 = null;
var G__106372__106373 = (function (){
return cljs.core.reduce.call(null,(function (p1__106321_SHARP_,p2__106322_SHARP_){
return cljs.core.conj.call(null,p1__106321_SHARP_,p2__106322_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__106338);
});
var G__106372__106374 = (function (x){
return cljs.core.reduce.call(null,(function (p1__106323_SHARP_,p2__106324_SHARP_){
return cljs.core.conj.call(null,p1__106323_SHARP_,p2__106324_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__106338);
});
var G__106372__106375 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__106325_SHARP_,p2__106326_SHARP_){
return cljs.core.conj.call(null,p1__106325_SHARP_,p2__106326_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__106338);
});
var G__106372__106376 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__106327_SHARP_,p2__106328_SHARP_){
return cljs.core.conj.call(null,p1__106327_SHARP_,p2__106328_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__106338);
});
var G__106372__106377 = (function() { 
var G__106379__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__106329_SHARP_,p2__106330_SHARP_){
return cljs.core.conj.call(null,p1__106329_SHARP_,cljs.core.apply.call(null,p2__106330_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__106338);
};
var G__106379 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__106379__delegate.call(this, x, y, z, args);
};
G__106379.cljs$lang$maxFixedArity = 3;
G__106379.cljs$lang$applyTo = (function (arglist__106380){
var x = cljs.core.first(arglist__106380);
var y = cljs.core.first(cljs.core.next(arglist__106380));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__106380)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__106380)));
return G__106379__delegate.call(this, x, y, z, args);
});
return G__106379;
})()
;
G__106372 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__106372__106373.call(this);
case  1 :
return G__106372__106374.call(this,x);
case  2 :
return G__106372__106375.call(this,x,y);
case  3 :
return G__106372__106376.call(this,x,y,z);
default:
return G__106372__106377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__106372.cljs$lang$maxFixedArity = 3;
G__106372.cljs$lang$applyTo = G__106372__106377.cljs$lang$applyTo;
return G__106372;
})()
};
var G__106371 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__106371__delegate.call(this, f, g, h, fs);
};
G__106371.cljs$lang$maxFixedArity = 3;
G__106371.cljs$lang$applyTo = (function (arglist__106381){
var f = cljs.core.first(arglist__106381);
var g = cljs.core.first(cljs.core.next(arglist__106381));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__106381)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__106381)));
return G__106371__delegate.call(this, f, g, h, fs);
});
return G__106371;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__106339.call(this,f);
case  2 :
return juxt__106340.call(this,f,g);
case  3 :
return juxt__106341.call(this,f,g,h);
default:
return juxt__106342.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__106342.cljs$lang$applyTo;
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
var dorun__106383 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__106386 = cljs.core.next.call(null,coll);
coll = G__106386;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__106384 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____106382 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____106382))
{return (n > 0);
} else
{return and__3546__auto____106382;
}
})()))
{{
var G__106387 = (n - 1);
var G__106388 = cljs.core.next.call(null,coll);
n = G__106387;
coll = G__106388;
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
return dorun__106383.call(this,n);
case  2 :
return dorun__106384.call(this,n,coll);
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
var doall__106389 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__106390 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__106389.call(this,n);
case  2 :
return doall__106390.call(this,n,coll);
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
var matches__106392 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__106392),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__106392),1)))
{return cljs.core.first.call(null,matches__106392);
} else
{return cljs.core.vec.call(null,matches__106392);
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
var matches__106393 = re.exec(s);

if(cljs.core.truth_((matches__106393 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__106393),1)))
{return cljs.core.first.call(null,matches__106393);
} else
{return cljs.core.vec.call(null,matches__106393);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__106394 = cljs.core.re_find.call(null,re,s);
var match_idx__106395 = s.search(re);
var match_str__106396 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__106394))?cljs.core.first.call(null,match_data__106394):match_data__106394);
var post_match__106397 = cljs.core.subs.call(null,s,(match_idx__106395 + cljs.core.count.call(null,match_str__106396)));

if(cljs.core.truth_(match_data__106394))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__106394,re_seq.call(null,re,post_match__106397));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__106399__106400 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___106401 = cljs.core.nth.call(null,vec__106399__106400,0,null);
var flags__106402 = cljs.core.nth.call(null,vec__106399__106400,1,null);
var pattern__106403 = cljs.core.nth.call(null,vec__106399__106400,2,null);

return (new RegExp(pattern__106403,flags__106402));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__106398_SHARP_){
return print_one.call(null,p1__106398_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____106404 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____106404))
{var and__3546__auto____106408 = (function (){var x__451__auto____106405 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____106406 = x__451__auto____106405;

if(cljs.core.truth_(and__3546__auto____106406))
{var and__3546__auto____106407 = x__451__auto____106405.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____106407))
{return cljs.core.not.call(null,x__451__auto____106405.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____106407;
}
} else
{return and__3546__auto____106406;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____106405);
}
})();

if(cljs.core.truth_(and__3546__auto____106408))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____106408;
}
} else
{return and__3546__auto____106404;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____106409 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____106410 = x__451__auto____106409;

if(cljs.core.truth_(and__3546__auto____106410))
{var and__3546__auto____106411 = x__451__auto____106409.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____106411))
{return cljs.core.not.call(null,x__451__auto____106409.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____106411;
}
} else
{return and__3546__auto____106410;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____106409);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__106412 = cljs.core.first.call(null,objs);
var sb__106413 = (new goog.string.StringBuffer());

var G__106414__106415 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__106414__106415))
{var obj__106416 = cljs.core.first.call(null,G__106414__106415);
var G__106414__106417 = G__106414__106415;

while(true){
if(cljs.core.truth_((obj__106416 === first_obj__106412)))
{} else
{sb__106413.append(" ");
}
var G__106418__106419 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__106416,opts));

if(cljs.core.truth_(G__106418__106419))
{var string__106420 = cljs.core.first.call(null,G__106418__106419);
var G__106418__106421 = G__106418__106419;

while(true){
sb__106413.append(string__106420);
var temp__3698__auto____106422 = cljs.core.next.call(null,G__106418__106421);

if(cljs.core.truth_(temp__3698__auto____106422))
{var G__106418__106423 = temp__3698__auto____106422;

{
var G__106426 = cljs.core.first.call(null,G__106418__106423);
var G__106427 = G__106418__106423;
string__106420 = G__106426;
G__106418__106421 = G__106427;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____106424 = cljs.core.next.call(null,G__106414__106417);

if(cljs.core.truth_(temp__3698__auto____106424))
{var G__106414__106425 = temp__3698__auto____106424;

{
var G__106428 = cljs.core.first.call(null,G__106414__106425);
var G__106429 = G__106414__106425;
obj__106416 = G__106428;
G__106414__106417 = G__106429;
continue;
}
} else
{}
break;
}
} else
{}
return sb__106413;
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
var sb__106430 = cljs.core.pr_sb.call(null,objs,opts);

sb__106430.append("\n");
return cljs.core.str.call(null,sb__106430);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__106431 = cljs.core.first.call(null,objs);

var G__106432__106433 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__106432__106433))
{var obj__106434 = cljs.core.first.call(null,G__106432__106433);
var G__106432__106435 = G__106432__106433;

while(true){
if(cljs.core.truth_((obj__106434 === first_obj__106431)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__106436__106437 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__106434,opts));

if(cljs.core.truth_(G__106436__106437))
{var string__106438 = cljs.core.first.call(null,G__106436__106437);
var G__106436__106439 = G__106436__106437;

while(true){
cljs.core.string_print.call(null,string__106438);
var temp__3698__auto____106440 = cljs.core.next.call(null,G__106436__106439);

if(cljs.core.truth_(temp__3698__auto____106440))
{var G__106436__106441 = temp__3698__auto____106440;

{
var G__106444 = cljs.core.first.call(null,G__106436__106441);
var G__106445 = G__106436__106441;
string__106438 = G__106444;
G__106436__106439 = G__106445;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____106442 = cljs.core.next.call(null,G__106432__106435);

if(cljs.core.truth_(temp__3698__auto____106442))
{var G__106432__106443 = temp__3698__auto____106442;

{
var G__106446 = cljs.core.first.call(null,G__106432__106443);
var G__106447 = G__106432__106443;
obj__106434 = G__106446;
G__106432__106435 = G__106447;
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
pr_str.cljs$lang$applyTo = (function (arglist__106448){
var objs = cljs.core.seq( arglist__106448 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__106449){
var objs = cljs.core.seq( arglist__106449 );;
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
pr.cljs$lang$applyTo = (function (arglist__106450){
var objs = cljs.core.seq( arglist__106450 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__106451){
var objs = cljs.core.seq( arglist__106451 );;
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
print_str.cljs$lang$applyTo = (function (arglist__106452){
var objs = cljs.core.seq( arglist__106452 );;
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
println.cljs$lang$applyTo = (function (arglist__106453){
var objs = cljs.core.seq( arglist__106453 );;
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
println_str.cljs$lang$applyTo = (function (arglist__106454){
var objs = cljs.core.seq( arglist__106454 );;
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
prn.cljs$lang$applyTo = (function (arglist__106455){
var objs = cljs.core.seq( arglist__106455 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__106456 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__106456,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____106457 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____106457))
{var nspc__106458 = temp__3698__auto____106457;

return cljs.core.str.call(null,nspc__106458,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____106459 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____106459))
{var nspc__106460 = temp__3698__auto____106459;

return cljs.core.str.call(null,nspc__106460,"/");
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
var pr_pair__106461 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__106461,"{",", ","}",opts,coll);
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
var this__106462 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__106463 = this;
var G__106464__106465 = cljs.core.seq.call(null,this__106463.watches);

if(cljs.core.truth_(G__106464__106465))
{var G__106467__106469 = cljs.core.first.call(null,G__106464__106465);
var vec__106468__106470 = G__106467__106469;
var key__106471 = cljs.core.nth.call(null,vec__106468__106470,0,null);
var f__106472 = cljs.core.nth.call(null,vec__106468__106470,1,null);
var G__106464__106473 = G__106464__106465;

var G__106467__106474 = G__106467__106469;
var G__106464__106475 = G__106464__106473;

while(true){
var vec__106476__106477 = G__106467__106474;
var key__106478 = cljs.core.nth.call(null,vec__106476__106477,0,null);
var f__106479 = cljs.core.nth.call(null,vec__106476__106477,1,null);
var G__106464__106480 = G__106464__106475;

f__106479.call(null,key__106478,this$,oldval,newval);
var temp__3698__auto____106481 = cljs.core.next.call(null,G__106464__106480);

if(cljs.core.truth_(temp__3698__auto____106481))
{var G__106464__106482 = temp__3698__auto____106481;

{
var G__106489 = cljs.core.first.call(null,G__106464__106482);
var G__106490 = G__106464__106482;
G__106467__106474 = G__106489;
G__106464__106475 = G__106490;
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
var this__106483 = this;
return this$.watches = cljs.core.assoc.call(null,this__106483.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__106484 = this;
return this$.watches = cljs.core.dissoc.call(null,this__106484.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__106485 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__106485.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__106486 = this;
return this__106486.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__106487 = this;
return this__106487.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__106488 = this;
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
var atom__106497 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__106498 = (function() { 
var G__106500__delegate = function (x,p__106491){
var map__106492__106493 = p__106491;
var map__106492__106494 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__106492__106493))?cljs.core.apply.call(null,cljs.core.hash_map,map__106492__106493):map__106492__106493);
var validator__106495 = cljs.core.get.call(null,map__106492__106494,"\uFDD0'validator");
var meta__106496 = cljs.core.get.call(null,map__106492__106494,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__106496,validator__106495,null));
};
var G__106500 = function (x,var_args){
var p__106491 = null;
if (goog.isDef(var_args)) {
  p__106491 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__106500__delegate.call(this, x, p__106491);
};
G__106500.cljs$lang$maxFixedArity = 1;
G__106500.cljs$lang$applyTo = (function (arglist__106501){
var x = cljs.core.first(arglist__106501);
var p__106491 = cljs.core.rest(arglist__106501);
return G__106500__delegate.call(this, x, p__106491);
});
return G__106500;
})()
;
atom = function(x,var_args){
var p__106491 = var_args;
switch(arguments.length){
case  1 :
return atom__106497.call(this,x);
default:
return atom__106498.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__106498.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____106502 = a.validator;

if(cljs.core.truth_(temp__3698__auto____106502))
{var validate__106503 = temp__3698__auto____106502;

if(cljs.core.truth_(validate__106503.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__106504 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__106504,new_value);
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
var swap_BANG___106505 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___106506 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___106507 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___106508 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___106509 = (function() { 
var G__106511__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__106511 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__106511__delegate.call(this, a, f, x, y, z, more);
};
G__106511.cljs$lang$maxFixedArity = 5;
G__106511.cljs$lang$applyTo = (function (arglist__106512){
var a = cljs.core.first(arglist__106512);
var f = cljs.core.first(cljs.core.next(arglist__106512));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__106512)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__106512))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__106512)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__106512)))));
return G__106511__delegate.call(this, a, f, x, y, z, more);
});
return G__106511;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___106505.call(this,a,f);
case  3 :
return swap_BANG___106506.call(this,a,f,x);
case  4 :
return swap_BANG___106507.call(this,a,f,x,y);
case  5 :
return swap_BANG___106508.call(this,a,f,x,y,z);
default:
return swap_BANG___106509.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___106509.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__106513){
var iref = cljs.core.first(arglist__106513);
var f = cljs.core.first(cljs.core.next(arglist__106513));
var args = cljs.core.rest(cljs.core.next(arglist__106513));
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
var gensym__106514 = (function (){
return gensym.call(null,"G__");
});
var gensym__106515 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__106514.call(this);
case  1 :
return gensym__106515.call(this,prefix_string);
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
var this__106517 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__106517.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__106518 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__106518.state,(function (p__106519){
var curr_state__106520 = p__106519;
var curr_state__106521 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__106520))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__106520):curr_state__106520);
var done__106522 = cljs.core.get.call(null,curr_state__106521,"\uFDD0'done");

if(cljs.core.truth_(done__106522))
{return curr_state__106521;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__106518.f.call(null)});
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
var map__106523__106524 = options;
var map__106523__106525 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__106523__106524))?cljs.core.apply.call(null,cljs.core.hash_map,map__106523__106524):map__106523__106524);
var keywordize_keys__106526 = cljs.core.get.call(null,map__106523__106525,"\uFDD0'keywordize-keys");
var keyfn__106527 = (cljs.core.truth_(keywordize_keys__106526)?cljs.core.keyword:cljs.core.str);
var f__106533 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____106532 = (function iter__106528(s__106529){
return (new cljs.core.LazySeq(null,false,(function (){
var s__106529__106530 = s__106529;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__106529__106530)))
{var k__106531 = cljs.core.first.call(null,s__106529__106530);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__106527.call(null,k__106531),thisfn.call(null,(x[k__106531]))]),iter__106528.call(null,cljs.core.rest.call(null,s__106529__106530)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____106532.call(null,cljs.core.js_keys.call(null,x));
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

return f__106533.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__106534){
var x = cljs.core.first(arglist__106534);
var options = cljs.core.rest(arglist__106534);
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
var mem__106535 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__106539__delegate = function (args){
var temp__3695__auto____106536 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__106535),args);

if(cljs.core.truth_(temp__3695__auto____106536))
{var v__106537 = temp__3695__auto____106536;

return v__106537;
} else
{var ret__106538 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__106535,cljs.core.assoc,args,ret__106538);
return ret__106538;
}
};
var G__106539 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__106539__delegate.call(this, args);
};
G__106539.cljs$lang$maxFixedArity = 0;
G__106539.cljs$lang$applyTo = (function (arglist__106540){
var args = cljs.core.seq( arglist__106540 );;
return G__106539__delegate.call(this, args);
});
return G__106539;
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
var trampoline__106542 = (function (f){
while(true){
var ret__106541 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__106541)))
{{
var G__106545 = ret__106541;
f = G__106545;
continue;
}
} else
{return ret__106541;
}
break;
}
});
var trampoline__106543 = (function() { 
var G__106546__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__106546 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__106546__delegate.call(this, f, args);
};
G__106546.cljs$lang$maxFixedArity = 1;
G__106546.cljs$lang$applyTo = (function (arglist__106547){
var f = cljs.core.first(arglist__106547);
var args = cljs.core.rest(arglist__106547);
return G__106546__delegate.call(this, f, args);
});
return G__106546;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__106542.call(this,f);
default:
return trampoline__106543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__106543.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__106548 = (function (){
return rand.call(null,1);
});
var rand__106549 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__106548.call(this);
case  1 :
return rand__106549.call(this,n);
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
var k__106551 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__106551,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__106551,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___106560 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___106561 = (function (h,child,parent){
var or__3548__auto____106552 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____106552))
{return or__3548__auto____106552;
} else
{var or__3548__auto____106553 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____106553))
{return or__3548__auto____106553;
} else
{var and__3546__auto____106554 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____106554))
{var and__3546__auto____106555 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____106555))
{var and__3546__auto____106556 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____106556))
{var ret__106557 = true;
var i__106558 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____106559 = cljs.core.not.call(null,ret__106557);

if(cljs.core.truth_(or__3548__auto____106559))
{return or__3548__auto____106559;
} else
{return cljs.core._EQ_.call(null,i__106558,cljs.core.count.call(null,parent));
}
})()))
{return ret__106557;
} else
{{
var G__106563 = isa_QMARK_.call(null,h,child.call(null,i__106558),parent.call(null,i__106558));
var G__106564 = (i__106558 + 1);
ret__106557 = G__106563;
i__106558 = G__106564;
continue;
}
}
break;
}
} else
{return and__3546__auto____106556;
}
} else
{return and__3546__auto____106555;
}
} else
{return and__3546__auto____106554;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___106560.call(this,h,child);
case  3 :
return isa_QMARK___106561.call(this,h,child,parent);
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
var parents__106565 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__106566 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__106565.call(this,h);
case  2 :
return parents__106566.call(this,h,tag);
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
var ancestors__106568 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__106569 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__106568.call(this,h);
case  2 :
return ancestors__106569.call(this,h,tag);
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
var descendants__106571 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__106572 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__106571.call(this,h);
case  2 :
return descendants__106572.call(this,h,tag);
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
var derive__106582 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__106583 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__106577 = "\uFDD0'parents".call(null,h);
var td__106578 = "\uFDD0'descendants".call(null,h);
var ta__106579 = "\uFDD0'ancestors".call(null,h);
var tf__106580 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____106581 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__106577.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__106579.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__106579.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__106577,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__106580.call(null,"\uFDD0'ancestors".call(null,h),tag,td__106578,parent,ta__106579),"\uFDD0'descendants":tf__106580.call(null,"\uFDD0'descendants".call(null,h),parent,ta__106579,tag,td__106578)});
})());

if(cljs.core.truth_(or__3548__auto____106581))
{return or__3548__auto____106581;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__106582.call(this,h,tag);
case  3 :
return derive__106583.call(this,h,tag,parent);
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
var underive__106589 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__106590 = (function (h,tag,parent){
var parentMap__106585 = "\uFDD0'parents".call(null,h);
var childsParents__106586 = (cljs.core.truth_(parentMap__106585.call(null,tag))?cljs.core.disj.call(null,parentMap__106585.call(null,tag),parent):cljs.core.set([]));
var newParents__106587 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__106586))?cljs.core.assoc.call(null,parentMap__106585,tag,childsParents__106586):cljs.core.dissoc.call(null,parentMap__106585,tag));
var deriv_seq__106588 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__106574_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__106574_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__106574_SHARP_),cljs.core.second.call(null,p1__106574_SHARP_)));
}),cljs.core.seq.call(null,newParents__106587)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__106585.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__106575_SHARP_,p2__106576_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__106575_SHARP_,p2__106576_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__106588));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__106589.call(this,h,tag);
case  3 :
return underive__106590.call(this,h,tag,parent);
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
var xprefs__106592 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____106594 = (cljs.core.truth_((function (){var and__3546__auto____106593 = xprefs__106592;

if(cljs.core.truth_(and__3546__auto____106593))
{return xprefs__106592.call(null,y);
} else
{return and__3546__auto____106593;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____106594))
{return or__3548__auto____106594;
} else
{var or__3548__auto____106596 = (function (){var ps__106595 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__106595) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__106595),prefer_table)))
{} else
{}
{
var G__106599 = cljs.core.rest.call(null,ps__106595);
ps__106595 = G__106599;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____106596))
{return or__3548__auto____106596;
} else
{var or__3548__auto____106598 = (function (){var ps__106597 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__106597) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__106597),y,prefer_table)))
{} else
{}
{
var G__106600 = cljs.core.rest.call(null,ps__106597);
ps__106597 = G__106600;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____106598))
{return or__3548__auto____106598;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____106601 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____106601))
{return or__3548__auto____106601;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__106610 = cljs.core.reduce.call(null,(function (be,p__106602){
var vec__106603__106604 = p__106602;
var k__106605 = cljs.core.nth.call(null,vec__106603__106604,0,null);
var ___106606 = cljs.core.nth.call(null,vec__106603__106604,1,null);
var e__106607 = vec__106603__106604;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__106605)))
{var be2__106609 = (cljs.core.truth_((function (){var or__3548__auto____106608 = (be === null);

if(cljs.core.truth_(or__3548__auto____106608))
{return or__3548__auto____106608;
} else
{return cljs.core.dominates.call(null,k__106605,cljs.core.first.call(null,be),prefer_table);
}
})())?e__106607:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__106609),k__106605,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__106605," and ",cljs.core.first.call(null,be2__106609),", and neither is preferred")));
}
return be2__106609;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__106610))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__106610));
return cljs.core.second.call(null,best_entry__106610);
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
if(cljs.core.truth_((function (){var and__3546__auto____106611 = mf;

if(cljs.core.truth_(and__3546__auto____106611))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____106611;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____106612 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____106612))
{return or__3548__auto____106612;
} else
{var or__3548__auto____106613 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____106613))
{return or__3548__auto____106613;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____106614 = mf;

if(cljs.core.truth_(and__3546__auto____106614))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____106614;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____106615 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____106615))
{return or__3548__auto____106615;
} else
{var or__3548__auto____106616 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____106616))
{return or__3548__auto____106616;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____106617 = mf;

if(cljs.core.truth_(and__3546__auto____106617))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____106617;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____106618 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____106618))
{return or__3548__auto____106618;
} else
{var or__3548__auto____106619 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____106619))
{return or__3548__auto____106619;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____106620 = mf;

if(cljs.core.truth_(and__3546__auto____106620))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____106620;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____106621 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____106621))
{return or__3548__auto____106621;
} else
{var or__3548__auto____106622 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____106622))
{return or__3548__auto____106622;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____106623 = mf;

if(cljs.core.truth_(and__3546__auto____106623))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____106623;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____106624 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____106624))
{return or__3548__auto____106624;
} else
{var or__3548__auto____106625 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____106625))
{return or__3548__auto____106625;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____106626 = mf;

if(cljs.core.truth_(and__3546__auto____106626))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____106626;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____106627 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____106627))
{return or__3548__auto____106627;
} else
{var or__3548__auto____106628 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____106628))
{return or__3548__auto____106628;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____106629 = mf;

if(cljs.core.truth_(and__3546__auto____106629))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____106629;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____106630 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____106630))
{return or__3548__auto____106630;
} else
{var or__3548__auto____106631 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____106631))
{return or__3548__auto____106631;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____106632 = mf;

if(cljs.core.truth_(and__3546__auto____106632))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____106632;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____106633 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____106633))
{return or__3548__auto____106633;
} else
{var or__3548__auto____106634 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____106634))
{return or__3548__auto____106634;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__106635 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__106636 = cljs.core._get_method.call(null,mf,dispatch_val__106635);

if(cljs.core.truth_(target_fn__106636))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__106635)));
}
return cljs.core.apply.call(null,target_fn__106636,args);
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
var this__106637 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__106638 = this;
cljs.core.swap_BANG_.call(null,this__106638.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__106638.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__106638.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__106638.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__106639 = this;
cljs.core.swap_BANG_.call(null,this__106639.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__106639.method_cache,this__106639.method_table,this__106639.cached_hierarchy,this__106639.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__106640 = this;
cljs.core.swap_BANG_.call(null,this__106640.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__106640.method_cache,this__106640.method_table,this__106640.cached_hierarchy,this__106640.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__106641 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__106641.cached_hierarchy),cljs.core.deref.call(null,this__106641.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__106641.method_cache,this__106641.method_table,this__106641.cached_hierarchy,this__106641.hierarchy);
}
var temp__3695__auto____106642 = cljs.core.deref.call(null,this__106641.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____106642))
{var target_fn__106643 = temp__3695__auto____106642;

return target_fn__106643;
} else
{var temp__3695__auto____106644 = cljs.core.find_and_cache_best_method.call(null,this__106641.name,dispatch_val,this__106641.hierarchy,this__106641.method_table,this__106641.prefer_table,this__106641.method_cache,this__106641.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____106644))
{var target_fn__106645 = temp__3695__auto____106644;

return target_fn__106645;
} else
{return cljs.core.deref.call(null,this__106641.method_table).call(null,this__106641.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__106646 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__106646.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__106646.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__106646.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__106646.method_cache,this__106646.method_table,this__106646.cached_hierarchy,this__106646.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__106647 = this;
return cljs.core.deref.call(null,this__106647.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__106648 = this;
return cljs.core.deref.call(null,this__106648.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__106649 = this;
return cljs.core.do_dispatch.call(null,mf,this__106649.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__106650__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__106650 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__106650__delegate.call(this, _, args);
};
G__106650.cljs$lang$maxFixedArity = 1;
G__106650.cljs$lang$applyTo = (function (arglist__106651){
var _ = cljs.core.first(arglist__106651);
var args = cljs.core.rest(arglist__106651);
return G__106650__delegate.call(this, _, args);
});
return G__106650;
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
