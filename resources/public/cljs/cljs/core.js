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
var or__3548__auto____326215 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____326215))
{return or__3548__auto____326215;
} else
{var or__3548__auto____326216 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____326216))
{return or__3548__auto____326216;
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
var _invoke__326280 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____326217 = this$;

if(cljs.core.truth_(and__3546__auto____326217))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326217;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____326218 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326218))
{return or__3548__auto____326218;
} else
{var or__3548__auto____326219 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326219))
{return or__3548__auto____326219;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__326281 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____326220 = this$;

if(cljs.core.truth_(and__3546__auto____326220))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326220;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____326221 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326221))
{return or__3548__auto____326221;
} else
{var or__3548__auto____326222 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326222))
{return or__3548__auto____326222;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__326282 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____326223 = this$;

if(cljs.core.truth_(and__3546__auto____326223))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326223;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____326224 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326224))
{return or__3548__auto____326224;
} else
{var or__3548__auto____326225 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326225))
{return or__3548__auto____326225;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__326283 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____326226 = this$;

if(cljs.core.truth_(and__3546__auto____326226))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326226;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____326227 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326227))
{return or__3548__auto____326227;
} else
{var or__3548__auto____326228 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326228))
{return or__3548__auto____326228;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__326284 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____326229 = this$;

if(cljs.core.truth_(and__3546__auto____326229))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326229;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____326230 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326230))
{return or__3548__auto____326230;
} else
{var or__3548__auto____326231 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326231))
{return or__3548__auto____326231;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__326285 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____326232 = this$;

if(cljs.core.truth_(and__3546__auto____326232))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326232;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____326233 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326233))
{return or__3548__auto____326233;
} else
{var or__3548__auto____326234 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326234))
{return or__3548__auto____326234;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__326286 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____326235 = this$;

if(cljs.core.truth_(and__3546__auto____326235))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326235;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____326236 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326236))
{return or__3548__auto____326236;
} else
{var or__3548__auto____326237 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326237))
{return or__3548__auto____326237;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__326287 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____326238 = this$;

if(cljs.core.truth_(and__3546__auto____326238))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326238;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____326239 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326239))
{return or__3548__auto____326239;
} else
{var or__3548__auto____326240 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326240))
{return or__3548__auto____326240;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__326288 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____326241 = this$;

if(cljs.core.truth_(and__3546__auto____326241))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326241;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____326242 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326242))
{return or__3548__auto____326242;
} else
{var or__3548__auto____326243 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326243))
{return or__3548__auto____326243;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__326289 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____326244 = this$;

if(cljs.core.truth_(and__3546__auto____326244))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326244;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____326245 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326245))
{return or__3548__auto____326245;
} else
{var or__3548__auto____326246 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326246))
{return or__3548__auto____326246;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__326290 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____326247 = this$;

if(cljs.core.truth_(and__3546__auto____326247))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326247;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____326248 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326248))
{return or__3548__auto____326248;
} else
{var or__3548__auto____326249 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326249))
{return or__3548__auto____326249;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__326291 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____326250 = this$;

if(cljs.core.truth_(and__3546__auto____326250))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326250;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____326251 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326251))
{return or__3548__auto____326251;
} else
{var or__3548__auto____326252 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326252))
{return or__3548__auto____326252;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__326292 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____326253 = this$;

if(cljs.core.truth_(and__3546__auto____326253))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326253;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____326254 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326254))
{return or__3548__auto____326254;
} else
{var or__3548__auto____326255 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326255))
{return or__3548__auto____326255;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__326293 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____326256 = this$;

if(cljs.core.truth_(and__3546__auto____326256))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326256;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____326257 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326257))
{return or__3548__auto____326257;
} else
{var or__3548__auto____326258 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326258))
{return or__3548__auto____326258;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__326294 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____326259 = this$;

if(cljs.core.truth_(and__3546__auto____326259))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326259;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____326260 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326260))
{return or__3548__auto____326260;
} else
{var or__3548__auto____326261 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326261))
{return or__3548__auto____326261;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__326295 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____326262 = this$;

if(cljs.core.truth_(and__3546__auto____326262))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326262;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____326263 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326263))
{return or__3548__auto____326263;
} else
{var or__3548__auto____326264 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326264))
{return or__3548__auto____326264;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__326296 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____326265 = this$;

if(cljs.core.truth_(and__3546__auto____326265))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326265;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____326266 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326266))
{return or__3548__auto____326266;
} else
{var or__3548__auto____326267 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326267))
{return or__3548__auto____326267;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__326297 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____326268 = this$;

if(cljs.core.truth_(and__3546__auto____326268))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326268;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____326269 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326269))
{return or__3548__auto____326269;
} else
{var or__3548__auto____326270 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326270))
{return or__3548__auto____326270;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__326298 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____326271 = this$;

if(cljs.core.truth_(and__3546__auto____326271))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326271;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____326272 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326272))
{return or__3548__auto____326272;
} else
{var or__3548__auto____326273 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326273))
{return or__3548__auto____326273;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__326299 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____326274 = this$;

if(cljs.core.truth_(and__3546__auto____326274))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326274;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____326275 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326275))
{return or__3548__auto____326275;
} else
{var or__3548__auto____326276 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326276))
{return or__3548__auto____326276;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__326300 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____326277 = this$;

if(cljs.core.truth_(and__3546__auto____326277))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____326277;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____326278 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326278))
{return or__3548__auto____326278;
} else
{var or__3548__auto____326279 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____326279))
{return or__3548__auto____326279;
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
return _invoke__326280.call(this,this$);
case  2 :
return _invoke__326281.call(this,this$,a);
case  3 :
return _invoke__326282.call(this,this$,a,b);
case  4 :
return _invoke__326283.call(this,this$,a,b,c);
case  5 :
return _invoke__326284.call(this,this$,a,b,c,d);
case  6 :
return _invoke__326285.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__326286.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__326287.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__326288.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__326289.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__326290.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__326291.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__326292.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__326293.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__326294.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__326295.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__326296.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__326297.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__326298.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__326299.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__326300.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____326302 = coll;

if(cljs.core.truth_(and__3546__auto____326302))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____326302;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____326303 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326303))
{return or__3548__auto____326303;
} else
{var or__3548__auto____326304 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____326304))
{return or__3548__auto____326304;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____326305 = coll;

if(cljs.core.truth_(and__3546__auto____326305))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____326305;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____326306 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326306))
{return or__3548__auto____326306;
} else
{var or__3548__auto____326307 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____326307))
{return or__3548__auto____326307;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____326308 = coll;

if(cljs.core.truth_(and__3546__auto____326308))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____326308;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____326309 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326309))
{return or__3548__auto____326309;
} else
{var or__3548__auto____326310 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____326310))
{return or__3548__auto____326310;
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
var _nth__326317 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____326311 = coll;

if(cljs.core.truth_(and__3546__auto____326311))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____326311;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____326312 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326312))
{return or__3548__auto____326312;
} else
{var or__3548__auto____326313 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____326313))
{return or__3548__auto____326313;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__326318 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____326314 = coll;

if(cljs.core.truth_(and__3546__auto____326314))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____326314;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____326315 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326315))
{return or__3548__auto____326315;
} else
{var or__3548__auto____326316 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____326316))
{return or__3548__auto____326316;
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
return _nth__326317.call(this,coll,n);
case  3 :
return _nth__326318.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____326320 = coll;

if(cljs.core.truth_(and__3546__auto____326320))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____326320;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____326321 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326321))
{return or__3548__auto____326321;
} else
{var or__3548__auto____326322 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____326322))
{return or__3548__auto____326322;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____326323 = coll;

if(cljs.core.truth_(and__3546__auto____326323))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____326323;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____326324 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326324))
{return or__3548__auto____326324;
} else
{var or__3548__auto____326325 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____326325))
{return or__3548__auto____326325;
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
var _lookup__326332 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____326326 = o;

if(cljs.core.truth_(and__3546__auto____326326))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____326326;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____326327 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____326327))
{return or__3548__auto____326327;
} else
{var or__3548__auto____326328 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____326328))
{return or__3548__auto____326328;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__326333 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____326329 = o;

if(cljs.core.truth_(and__3546__auto____326329))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____326329;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____326330 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____326330))
{return or__3548__auto____326330;
} else
{var or__3548__auto____326331 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____326331))
{return or__3548__auto____326331;
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
return _lookup__326332.call(this,o,k);
case  3 :
return _lookup__326333.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____326335 = coll;

if(cljs.core.truth_(and__3546__auto____326335))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____326335;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____326336 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326336))
{return or__3548__auto____326336;
} else
{var or__3548__auto____326337 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____326337))
{return or__3548__auto____326337;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____326338 = coll;

if(cljs.core.truth_(and__3546__auto____326338))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____326338;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____326339 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326339))
{return or__3548__auto____326339;
} else
{var or__3548__auto____326340 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____326340))
{return or__3548__auto____326340;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____326341 = coll;

if(cljs.core.truth_(and__3546__auto____326341))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____326341;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____326342 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326342))
{return or__3548__auto____326342;
} else
{var or__3548__auto____326343 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____326343))
{return or__3548__auto____326343;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____326344 = coll;

if(cljs.core.truth_(and__3546__auto____326344))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____326344;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____326345 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326345))
{return or__3548__auto____326345;
} else
{var or__3548__auto____326346 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____326346))
{return or__3548__auto____326346;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____326347 = coll;

if(cljs.core.truth_(and__3546__auto____326347))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____326347;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____326348 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326348))
{return or__3548__auto____326348;
} else
{var or__3548__auto____326349 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____326349))
{return or__3548__auto____326349;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____326350 = coll;

if(cljs.core.truth_(and__3546__auto____326350))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____326350;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____326351 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326351))
{return or__3548__auto____326351;
} else
{var or__3548__auto____326352 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____326352))
{return or__3548__auto____326352;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____326353 = coll;

if(cljs.core.truth_(and__3546__auto____326353))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____326353;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____326354 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326354))
{return or__3548__auto____326354;
} else
{var or__3548__auto____326355 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____326355))
{return or__3548__auto____326355;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____326356 = o;

if(cljs.core.truth_(and__3546__auto____326356))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____326356;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____326357 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____326357))
{return or__3548__auto____326357;
} else
{var or__3548__auto____326358 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____326358))
{return or__3548__auto____326358;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____326359 = o;

if(cljs.core.truth_(and__3546__auto____326359))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____326359;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____326360 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____326360))
{return or__3548__auto____326360;
} else
{var or__3548__auto____326361 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____326361))
{return or__3548__auto____326361;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____326362 = o;

if(cljs.core.truth_(and__3546__auto____326362))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____326362;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____326363 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____326363))
{return or__3548__auto____326363;
} else
{var or__3548__auto____326364 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____326364))
{return or__3548__auto____326364;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____326365 = o;

if(cljs.core.truth_(and__3546__auto____326365))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____326365;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____326366 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____326366))
{return or__3548__auto____326366;
} else
{var or__3548__auto____326367 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____326367))
{return or__3548__auto____326367;
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
var _reduce__326374 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____326368 = coll;

if(cljs.core.truth_(and__3546__auto____326368))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____326368;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____326369 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326369))
{return or__3548__auto____326369;
} else
{var or__3548__auto____326370 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____326370))
{return or__3548__auto____326370;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__326375 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____326371 = coll;

if(cljs.core.truth_(and__3546__auto____326371))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____326371;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____326372 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____326372))
{return or__3548__auto____326372;
} else
{var or__3548__auto____326373 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____326373))
{return or__3548__auto____326373;
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
return _reduce__326374.call(this,coll,f);
case  3 :
return _reduce__326375.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____326377 = o;

if(cljs.core.truth_(and__3546__auto____326377))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____326377;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____326378 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____326378))
{return or__3548__auto____326378;
} else
{var or__3548__auto____326379 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____326379))
{return or__3548__auto____326379;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____326380 = o;

if(cljs.core.truth_(and__3546__auto____326380))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____326380;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____326381 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____326381))
{return or__3548__auto____326381;
} else
{var or__3548__auto____326382 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____326382))
{return or__3548__auto____326382;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____326383 = o;

if(cljs.core.truth_(and__3546__auto____326383))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____326383;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____326384 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____326384))
{return or__3548__auto____326384;
} else
{var or__3548__auto____326385 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____326385))
{return or__3548__auto____326385;
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
if(cljs.core.truth_((function (){var and__3546__auto____326386 = o;

if(cljs.core.truth_(and__3546__auto____326386))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____326386;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____326387 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____326387))
{return or__3548__auto____326387;
} else
{var or__3548__auto____326388 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____326388))
{return or__3548__auto____326388;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____326389 = d;

if(cljs.core.truth_(and__3546__auto____326389))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____326389;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____326390 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____326390))
{return or__3548__auto____326390;
} else
{var or__3548__auto____326391 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____326391))
{return or__3548__auto____326391;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____326392 = this$;

if(cljs.core.truth_(and__3546__auto____326392))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____326392;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____326393 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326393))
{return or__3548__auto____326393;
} else
{var or__3548__auto____326394 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____326394))
{return or__3548__auto____326394;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____326395 = this$;

if(cljs.core.truth_(and__3546__auto____326395))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____326395;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____326396 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326396))
{return or__3548__auto____326396;
} else
{var or__3548__auto____326397 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____326397))
{return or__3548__auto____326397;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____326398 = this$;

if(cljs.core.truth_(and__3546__auto____326398))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____326398;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____326399 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____326399))
{return or__3548__auto____326399;
} else
{var or__3548__auto____326400 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____326400))
{return or__3548__auto____326400;
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
var G__326401 = null;
var G__326401__326402 = (function (o,k){
return null;
});
var G__326401__326403 = (function (o,k,not_found){
return not_found;
});
G__326401 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__326401__326402.call(this,o,k);
case  3 :
return G__326401__326403.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326401;
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
var G__326405 = null;
var G__326405__326406 = (function (_,f){
return f.call(null);
});
var G__326405__326407 = (function (_,f,start){
return start;
});
G__326405 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__326405__326406.call(this,_,f);
case  3 :
return G__326405__326407.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326405;
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
var G__326409 = null;
var G__326409__326410 = (function (_,n){
return null;
});
var G__326409__326411 = (function (_,n,not_found){
return not_found;
});
G__326409 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__326409__326410.call(this,_,n);
case  3 :
return G__326409__326411.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326409;
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
var ci_reduce__326419 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__326413 = cljs.core._nth.call(null,cicoll,0);
var n__326414 = 1;

while(true){
if(cljs.core.truth_((n__326414 < cljs.core._count.call(null,cicoll))))
{{
var G__326423 = f.call(null,val__326413,cljs.core._nth.call(null,cicoll,n__326414));
var G__326424 = (n__326414 + 1);
val__326413 = G__326423;
n__326414 = G__326424;
continue;
}
} else
{return val__326413;
}
break;
}
}
});
var ci_reduce__326420 = (function (cicoll,f,val){
var val__326415 = val;
var n__326416 = 0;

while(true){
if(cljs.core.truth_((n__326416 < cljs.core._count.call(null,cicoll))))
{{
var G__326425 = f.call(null,val__326415,cljs.core._nth.call(null,cicoll,n__326416));
var G__326426 = (n__326416 + 1);
val__326415 = G__326425;
n__326416 = G__326426;
continue;
}
} else
{return val__326415;
}
break;
}
});
var ci_reduce__326421 = (function (cicoll,f,val,idx){
var val__326417 = val;
var n__326418 = idx;

while(true){
if(cljs.core.truth_((n__326418 < cljs.core._count.call(null,cicoll))))
{{
var G__326427 = f.call(null,val__326417,cljs.core._nth.call(null,cicoll,n__326418));
var G__326428 = (n__326418 + 1);
val__326417 = G__326427;
n__326418 = G__326428;
continue;
}
} else
{return val__326417;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__326419.call(this,cicoll,f);
case  3 :
return ci_reduce__326420.call(this,cicoll,f,val);
case  4 :
return ci_reduce__326421.call(this,cicoll,f,val,idx);
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
var this__326429 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__326442 = null;
var G__326442__326443 = (function (_,f){
var this__326430 = this;
return cljs.core.ci_reduce.call(null,this__326430.a,f,(this__326430.a[this__326430.i]),(this__326430.i + 1));
});
var G__326442__326444 = (function (_,f,start){
var this__326431 = this;
return cljs.core.ci_reduce.call(null,this__326431.a,f,start,this__326431.i);
});
G__326442 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__326442__326443.call(this,_,f);
case  3 :
return G__326442__326444.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326442;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__326432 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__326433 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__326446 = null;
var G__326446__326447 = (function (coll,n){
var this__326434 = this;
var i__326435 = (n + this__326434.i);

if(cljs.core.truth_((i__326435 < this__326434.a.length)))
{return (this__326434.a[i__326435]);
} else
{return null;
}
});
var G__326446__326448 = (function (coll,n,not_found){
var this__326436 = this;
var i__326437 = (n + this__326436.i);

if(cljs.core.truth_((i__326437 < this__326436.a.length)))
{return (this__326436.a[i__326437]);
} else
{return not_found;
}
});
G__326446 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__326446__326447.call(this,coll,n);
case  3 :
return G__326446__326448.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326446;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__326438 = this;
return (this__326438.a.length - this__326438.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__326439 = this;
return (this__326439.a[this__326439.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__326440 = this;
if(cljs.core.truth_(((this__326440.i + 1) < this__326440.a.length)))
{return (new cljs.core.IndexedSeq(this__326440.a,(this__326440.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__326441 = this;
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
var G__326450 = null;
var G__326450__326451 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__326450__326452 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__326450 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__326450__326451.call(this,array,f);
case  3 :
return G__326450__326452.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326450;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__326454 = null;
var G__326454__326455 = (function (array,k){
return (array[k]);
});
var G__326454__326456 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__326454 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__326454__326455.call(this,array,k);
case  3 :
return G__326454__326456.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326454;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__326458 = null;
var G__326458__326459 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__326458__326460 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__326458 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__326458__326459.call(this,array,n);
case  3 :
return G__326458__326460.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326458;
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
var temp__3698__auto____326462 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____326462))
{var s__326463 = temp__3698__auto____326462;

return cljs.core._first.call(null,s__326463);
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
var G__326464 = cljs.core.next.call(null,s);
s = G__326464;
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
var s__326465 = cljs.core.seq.call(null,x);
var n__326466 = 0;

while(true){
if(cljs.core.truth_(s__326465))
{{
var G__326467 = cljs.core.next.call(null,s__326465);
var G__326468 = (n__326466 + 1);
s__326465 = G__326467;
n__326466 = G__326468;
continue;
}
} else
{return n__326466;
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
var conj__326469 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__326470 = (function() { 
var G__326472__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__326473 = conj.call(null,coll,x);
var G__326474 = cljs.core.first.call(null,xs);
var G__326475 = cljs.core.next.call(null,xs);
coll = G__326473;
x = G__326474;
xs = G__326475;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__326472 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326472__delegate.call(this, coll, x, xs);
};
G__326472.cljs$lang$maxFixedArity = 2;
G__326472.cljs$lang$applyTo = (function (arglist__326476){
var coll = cljs.core.first(arglist__326476);
var x = cljs.core.first(cljs.core.next(arglist__326476));
var xs = cljs.core.rest(cljs.core.next(arglist__326476));
return G__326472__delegate.call(this, coll, x, xs);
});
return G__326472;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__326469.call(this,coll,x);
default:
return conj__326470.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__326470.cljs$lang$applyTo;
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
var nth__326477 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__326478 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__326477.call(this,coll,n);
case  3 :
return nth__326478.call(this,coll,n,not_found);
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
var get__326480 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__326481 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__326480.call(this,o,k);
case  3 :
return get__326481.call(this,o,k,not_found);
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
var assoc__326484 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__326485 = (function() { 
var G__326487__delegate = function (coll,k,v,kvs){
while(true){
var ret__326483 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__326488 = ret__326483;
var G__326489 = cljs.core.first.call(null,kvs);
var G__326490 = cljs.core.second.call(null,kvs);
var G__326491 = cljs.core.nnext.call(null,kvs);
coll = G__326488;
k = G__326489;
v = G__326490;
kvs = G__326491;
continue;
}
} else
{return ret__326483;
}
break;
}
};
var G__326487 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__326487__delegate.call(this, coll, k, v, kvs);
};
G__326487.cljs$lang$maxFixedArity = 3;
G__326487.cljs$lang$applyTo = (function (arglist__326492){
var coll = cljs.core.first(arglist__326492);
var k = cljs.core.first(cljs.core.next(arglist__326492));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__326492)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__326492)));
return G__326487__delegate.call(this, coll, k, v, kvs);
});
return G__326487;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__326484.call(this,coll,k,v);
default:
return assoc__326485.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__326485.cljs$lang$applyTo;
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
var dissoc__326494 = (function (coll){
return coll;
});
var dissoc__326495 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__326496 = (function() { 
var G__326498__delegate = function (coll,k,ks){
while(true){
var ret__326493 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__326499 = ret__326493;
var G__326500 = cljs.core.first.call(null,ks);
var G__326501 = cljs.core.next.call(null,ks);
coll = G__326499;
k = G__326500;
ks = G__326501;
continue;
}
} else
{return ret__326493;
}
break;
}
};
var G__326498 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326498__delegate.call(this, coll, k, ks);
};
G__326498.cljs$lang$maxFixedArity = 2;
G__326498.cljs$lang$applyTo = (function (arglist__326502){
var coll = cljs.core.first(arglist__326502);
var k = cljs.core.first(cljs.core.next(arglist__326502));
var ks = cljs.core.rest(cljs.core.next(arglist__326502));
return G__326498__delegate.call(this, coll, k, ks);
});
return G__326498;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__326494.call(this,coll);
case  2 :
return dissoc__326495.call(this,coll,k);
default:
return dissoc__326496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__326496.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____326503 = o;

if(cljs.core.truth_((function (){var and__3546__auto____326504 = x__451__auto____326503;

if(cljs.core.truth_(and__3546__auto____326504))
{var and__3546__auto____326505 = x__451__auto____326503.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____326505))
{return cljs.core.not.call(null,x__451__auto____326503.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____326505;
}
} else
{return and__3546__auto____326504;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____326503);
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
var disj__326507 = (function (coll){
return coll;
});
var disj__326508 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__326509 = (function() { 
var G__326511__delegate = function (coll,k,ks){
while(true){
var ret__326506 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__326512 = ret__326506;
var G__326513 = cljs.core.first.call(null,ks);
var G__326514 = cljs.core.next.call(null,ks);
coll = G__326512;
k = G__326513;
ks = G__326514;
continue;
}
} else
{return ret__326506;
}
break;
}
};
var G__326511 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326511__delegate.call(this, coll, k, ks);
};
G__326511.cljs$lang$maxFixedArity = 2;
G__326511.cljs$lang$applyTo = (function (arglist__326515){
var coll = cljs.core.first(arglist__326515);
var k = cljs.core.first(cljs.core.next(arglist__326515));
var ks = cljs.core.rest(cljs.core.next(arglist__326515));
return G__326511__delegate.call(this, coll, k, ks);
});
return G__326511;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__326507.call(this,coll);
case  2 :
return disj__326508.call(this,coll,k);
default:
return disj__326509.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__326509.cljs$lang$applyTo;
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
{var x__451__auto____326516 = x;

if(cljs.core.truth_((function (){var and__3546__auto____326517 = x__451__auto____326516;

if(cljs.core.truth_(and__3546__auto____326517))
{var and__3546__auto____326518 = x__451__auto____326516.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____326518))
{return cljs.core.not.call(null,x__451__auto____326516.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____326518;
}
} else
{return and__3546__auto____326517;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____326516);
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
{var x__451__auto____326519 = x;

if(cljs.core.truth_((function (){var and__3546__auto____326520 = x__451__auto____326519;

if(cljs.core.truth_(and__3546__auto____326520))
{var and__3546__auto____326521 = x__451__auto____326519.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____326521))
{return cljs.core.not.call(null,x__451__auto____326519.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____326521;
}
} else
{return and__3546__auto____326520;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____326519);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____326522 = x;

if(cljs.core.truth_((function (){var and__3546__auto____326523 = x__451__auto____326522;

if(cljs.core.truth_(and__3546__auto____326523))
{var and__3546__auto____326524 = x__451__auto____326522.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____326524))
{return cljs.core.not.call(null,x__451__auto____326522.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____326524;
}
} else
{return and__3546__auto____326523;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____326522);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____326525 = x;

if(cljs.core.truth_((function (){var and__3546__auto____326526 = x__451__auto____326525;

if(cljs.core.truth_(and__3546__auto____326526))
{var and__3546__auto____326527 = x__451__auto____326525.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____326527))
{return cljs.core.not.call(null,x__451__auto____326525.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____326527;
}
} else
{return and__3546__auto____326526;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____326525);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____326528 = x;

if(cljs.core.truth_((function (){var and__3546__auto____326529 = x__451__auto____326528;

if(cljs.core.truth_(and__3546__auto____326529))
{var and__3546__auto____326530 = x__451__auto____326528.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____326530))
{return cljs.core.not.call(null,x__451__auto____326528.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____326530;
}
} else
{return and__3546__auto____326529;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____326528);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____326531 = x;

if(cljs.core.truth_((function (){var and__3546__auto____326532 = x__451__auto____326531;

if(cljs.core.truth_(and__3546__auto____326532))
{var and__3546__auto____326533 = x__451__auto____326531.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____326533))
{return cljs.core.not.call(null,x__451__auto____326531.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____326533;
}
} else
{return and__3546__auto____326532;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____326531);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____326534 = x;

if(cljs.core.truth_((function (){var and__3546__auto____326535 = x__451__auto____326534;

if(cljs.core.truth_(and__3546__auto____326535))
{var and__3546__auto____326536 = x__451__auto____326534.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____326536))
{return cljs.core.not.call(null,x__451__auto____326534.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____326536;
}
} else
{return and__3546__auto____326535;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____326534);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__326537 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__326537.push(key);
}));
return keys__326537;
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
{var x__451__auto____326538 = s;

if(cljs.core.truth_((function (){var and__3546__auto____326539 = x__451__auto____326538;

if(cljs.core.truth_(and__3546__auto____326539))
{var and__3546__auto____326540 = x__451__auto____326538.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____326540))
{return cljs.core.not.call(null,x__451__auto____326538.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____326540;
}
} else
{return and__3546__auto____326539;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____326538);
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
var and__3546__auto____326541 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____326541))
{return cljs.core.not.call(null,(function (){var or__3548__auto____326542 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____326542))
{return or__3548__auto____326542;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____326541;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____326543 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____326543))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____326543;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____326544 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____326544))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____326544;
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
var and__3546__auto____326545 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____326545))
{return (n == n.toFixed());
} else
{return and__3546__auto____326545;
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
if(cljs.core.truth_((function (){var and__3546__auto____326546 = coll;

if(cljs.core.truth_(and__3546__auto____326546))
{var and__3546__auto____326547 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____326547))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____326547;
}
} else
{return and__3546__auto____326546;
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
var distinct_QMARK___326552 = (function (x){
return true;
});
var distinct_QMARK___326553 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___326554 = (function() { 
var G__326556__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__326548 = cljs.core.set([y,x]);
var xs__326549 = more;

while(true){
var x__326550 = cljs.core.first.call(null,xs__326549);
var etc__326551 = cljs.core.next.call(null,xs__326549);

if(cljs.core.truth_(xs__326549))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__326548,x__326550)))
{return false;
} else
{{
var G__326557 = cljs.core.conj.call(null,s__326548,x__326550);
var G__326558 = etc__326551;
s__326548 = G__326557;
xs__326549 = G__326558;
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
var G__326556 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326556__delegate.call(this, x, y, more);
};
G__326556.cljs$lang$maxFixedArity = 2;
G__326556.cljs$lang$applyTo = (function (arglist__326559){
var x = cljs.core.first(arglist__326559);
var y = cljs.core.first(cljs.core.next(arglist__326559));
var more = cljs.core.rest(cljs.core.next(arglist__326559));
return G__326556__delegate.call(this, x, y, more);
});
return G__326556;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___326552.call(this,x);
case  2 :
return distinct_QMARK___326553.call(this,x,y);
default:
return distinct_QMARK___326554.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___326554.cljs$lang$applyTo;
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
var r__326560 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__326560)))
{return r__326560;
} else
{if(cljs.core.truth_(r__326560))
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
var sort__326562 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__326563 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__326561 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__326561,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__326561);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__326562.call(this,comp);
case  2 :
return sort__326563.call(this,comp,coll);
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
var sort_by__326565 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__326566 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__326565.call(this,keyfn,comp);
case  3 :
return sort_by__326566.call(this,keyfn,comp,coll);
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
var reduce__326568 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__326569 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__326568.call(this,f,val);
case  3 :
return reduce__326569.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__326575 = (function (f,coll){
var temp__3695__auto____326571 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____326571))
{var s__326572 = temp__3695__auto____326571;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__326572),cljs.core.next.call(null,s__326572));
} else
{return f.call(null);
}
});
var seq_reduce__326576 = (function (f,val,coll){
var val__326573 = val;
var coll__326574 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__326574))
{{
var G__326578 = f.call(null,val__326573,cljs.core.first.call(null,coll__326574));
var G__326579 = cljs.core.next.call(null,coll__326574);
val__326573 = G__326578;
coll__326574 = G__326579;
continue;
}
} else
{return val__326573;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__326575.call(this,f,val);
case  3 :
return seq_reduce__326576.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__326580 = null;
var G__326580__326581 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__326580__326582 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__326580 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__326580__326581.call(this,coll,f);
case  3 :
return G__326580__326582.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326580;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___326584 = (function (){
return 0;
});
var _PLUS___326585 = (function (x){
return x;
});
var _PLUS___326586 = (function (x,y){
return (x + y);
});
var _PLUS___326587 = (function() { 
var G__326589__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__326589 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326589__delegate.call(this, x, y, more);
};
G__326589.cljs$lang$maxFixedArity = 2;
G__326589.cljs$lang$applyTo = (function (arglist__326590){
var x = cljs.core.first(arglist__326590);
var y = cljs.core.first(cljs.core.next(arglist__326590));
var more = cljs.core.rest(cljs.core.next(arglist__326590));
return G__326589__delegate.call(this, x, y, more);
});
return G__326589;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___326584.call(this);
case  1 :
return _PLUS___326585.call(this,x);
case  2 :
return _PLUS___326586.call(this,x,y);
default:
return _PLUS___326587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___326587.cljs$lang$applyTo;
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
var ___326591 = (function (x){
return (- x);
});
var ___326592 = (function (x,y){
return (x - y);
});
var ___326593 = (function() { 
var G__326595__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__326595 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326595__delegate.call(this, x, y, more);
};
G__326595.cljs$lang$maxFixedArity = 2;
G__326595.cljs$lang$applyTo = (function (arglist__326596){
var x = cljs.core.first(arglist__326596);
var y = cljs.core.first(cljs.core.next(arglist__326596));
var more = cljs.core.rest(cljs.core.next(arglist__326596));
return G__326595__delegate.call(this, x, y, more);
});
return G__326595;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___326591.call(this,x);
case  2 :
return ___326592.call(this,x,y);
default:
return ___326593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___326593.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___326597 = (function (){
return 1;
});
var _STAR___326598 = (function (x){
return x;
});
var _STAR___326599 = (function (x,y){
return (x * y);
});
var _STAR___326600 = (function() { 
var G__326602__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__326602 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326602__delegate.call(this, x, y, more);
};
G__326602.cljs$lang$maxFixedArity = 2;
G__326602.cljs$lang$applyTo = (function (arglist__326603){
var x = cljs.core.first(arglist__326603);
var y = cljs.core.first(cljs.core.next(arglist__326603));
var more = cljs.core.rest(cljs.core.next(arglist__326603));
return G__326602__delegate.call(this, x, y, more);
});
return G__326602;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___326597.call(this);
case  1 :
return _STAR___326598.call(this,x);
case  2 :
return _STAR___326599.call(this,x,y);
default:
return _STAR___326600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___326600.cljs$lang$applyTo;
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
var _SLASH___326604 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___326605 = (function (x,y){
return (x / y);
});
var _SLASH___326606 = (function() { 
var G__326608__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__326608 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326608__delegate.call(this, x, y, more);
};
G__326608.cljs$lang$maxFixedArity = 2;
G__326608.cljs$lang$applyTo = (function (arglist__326609){
var x = cljs.core.first(arglist__326609);
var y = cljs.core.first(cljs.core.next(arglist__326609));
var more = cljs.core.rest(cljs.core.next(arglist__326609));
return G__326608__delegate.call(this, x, y, more);
});
return G__326608;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___326604.call(this,x);
case  2 :
return _SLASH___326605.call(this,x,y);
default:
return _SLASH___326606.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___326606.cljs$lang$applyTo;
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
var _LT___326610 = (function (x){
return true;
});
var _LT___326611 = (function (x,y){
return (x < y);
});
var _LT___326612 = (function() { 
var G__326614__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__326615 = y;
var G__326616 = cljs.core.first.call(null,more);
var G__326617 = cljs.core.next.call(null,more);
x = G__326615;
y = G__326616;
more = G__326617;
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
var G__326614 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326614__delegate.call(this, x, y, more);
};
G__326614.cljs$lang$maxFixedArity = 2;
G__326614.cljs$lang$applyTo = (function (arglist__326618){
var x = cljs.core.first(arglist__326618);
var y = cljs.core.first(cljs.core.next(arglist__326618));
var more = cljs.core.rest(cljs.core.next(arglist__326618));
return G__326614__delegate.call(this, x, y, more);
});
return G__326614;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___326610.call(this,x);
case  2 :
return _LT___326611.call(this,x,y);
default:
return _LT___326612.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___326612.cljs$lang$applyTo;
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
var _LT__EQ___326619 = (function (x){
return true;
});
var _LT__EQ___326620 = (function (x,y){
return (x <= y);
});
var _LT__EQ___326621 = (function() { 
var G__326623__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__326624 = y;
var G__326625 = cljs.core.first.call(null,more);
var G__326626 = cljs.core.next.call(null,more);
x = G__326624;
y = G__326625;
more = G__326626;
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
var G__326623 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326623__delegate.call(this, x, y, more);
};
G__326623.cljs$lang$maxFixedArity = 2;
G__326623.cljs$lang$applyTo = (function (arglist__326627){
var x = cljs.core.first(arglist__326627);
var y = cljs.core.first(cljs.core.next(arglist__326627));
var more = cljs.core.rest(cljs.core.next(arglist__326627));
return G__326623__delegate.call(this, x, y, more);
});
return G__326623;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___326619.call(this,x);
case  2 :
return _LT__EQ___326620.call(this,x,y);
default:
return _LT__EQ___326621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___326621.cljs$lang$applyTo;
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
var _GT___326628 = (function (x){
return true;
});
var _GT___326629 = (function (x,y){
return (x > y);
});
var _GT___326630 = (function() { 
var G__326632__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__326633 = y;
var G__326634 = cljs.core.first.call(null,more);
var G__326635 = cljs.core.next.call(null,more);
x = G__326633;
y = G__326634;
more = G__326635;
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
var G__326632 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326632__delegate.call(this, x, y, more);
};
G__326632.cljs$lang$maxFixedArity = 2;
G__326632.cljs$lang$applyTo = (function (arglist__326636){
var x = cljs.core.first(arglist__326636);
var y = cljs.core.first(cljs.core.next(arglist__326636));
var more = cljs.core.rest(cljs.core.next(arglist__326636));
return G__326632__delegate.call(this, x, y, more);
});
return G__326632;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___326628.call(this,x);
case  2 :
return _GT___326629.call(this,x,y);
default:
return _GT___326630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___326630.cljs$lang$applyTo;
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
var _GT__EQ___326637 = (function (x){
return true;
});
var _GT__EQ___326638 = (function (x,y){
return (x >= y);
});
var _GT__EQ___326639 = (function() { 
var G__326641__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__326642 = y;
var G__326643 = cljs.core.first.call(null,more);
var G__326644 = cljs.core.next.call(null,more);
x = G__326642;
y = G__326643;
more = G__326644;
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
var G__326641 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326641__delegate.call(this, x, y, more);
};
G__326641.cljs$lang$maxFixedArity = 2;
G__326641.cljs$lang$applyTo = (function (arglist__326645){
var x = cljs.core.first(arglist__326645);
var y = cljs.core.first(cljs.core.next(arglist__326645));
var more = cljs.core.rest(cljs.core.next(arglist__326645));
return G__326641__delegate.call(this, x, y, more);
});
return G__326641;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___326637.call(this,x);
case  2 :
return _GT__EQ___326638.call(this,x,y);
default:
return _GT__EQ___326639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___326639.cljs$lang$applyTo;
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
var max__326646 = (function (x){
return x;
});
var max__326647 = (function (x,y){
return ((x > y) ? x : y);
});
var max__326648 = (function() { 
var G__326650__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__326650 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326650__delegate.call(this, x, y, more);
};
G__326650.cljs$lang$maxFixedArity = 2;
G__326650.cljs$lang$applyTo = (function (arglist__326651){
var x = cljs.core.first(arglist__326651);
var y = cljs.core.first(cljs.core.next(arglist__326651));
var more = cljs.core.rest(cljs.core.next(arglist__326651));
return G__326650__delegate.call(this, x, y, more);
});
return G__326650;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__326646.call(this,x);
case  2 :
return max__326647.call(this,x,y);
default:
return max__326648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__326648.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__326652 = (function (x){
return x;
});
var min__326653 = (function (x,y){
return ((x < y) ? x : y);
});
var min__326654 = (function() { 
var G__326656__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__326656 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326656__delegate.call(this, x, y, more);
};
G__326656.cljs$lang$maxFixedArity = 2;
G__326656.cljs$lang$applyTo = (function (arglist__326657){
var x = cljs.core.first(arglist__326657);
var y = cljs.core.first(cljs.core.next(arglist__326657));
var more = cljs.core.rest(cljs.core.next(arglist__326657));
return G__326656__delegate.call(this, x, y, more);
});
return G__326656;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__326652.call(this,x);
case  2 :
return min__326653.call(this,x,y);
default:
return min__326654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__326654.cljs$lang$applyTo;
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
var rem__326658 = (n % d);

return cljs.core.fix.call(null,((n - rem__326658) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__326659 = cljs.core.quot.call(null,n,d);

return (n - (d * q__326659));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__326660 = (function (){
return Math.random.call(null);
});
var rand__326661 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__326660.call(this);
case  1 :
return rand__326661.call(this,n);
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
var _EQ__EQ___326663 = (function (x){
return true;
});
var _EQ__EQ___326664 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___326665 = (function() { 
var G__326667__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__326668 = y;
var G__326669 = cljs.core.first.call(null,more);
var G__326670 = cljs.core.next.call(null,more);
x = G__326668;
y = G__326669;
more = G__326670;
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
var G__326667 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326667__delegate.call(this, x, y, more);
};
G__326667.cljs$lang$maxFixedArity = 2;
G__326667.cljs$lang$applyTo = (function (arglist__326671){
var x = cljs.core.first(arglist__326671);
var y = cljs.core.first(cljs.core.next(arglist__326671));
var more = cljs.core.rest(cljs.core.next(arglist__326671));
return G__326667__delegate.call(this, x, y, more);
});
return G__326667;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___326663.call(this,x);
case  2 :
return _EQ__EQ___326664.call(this,x,y);
default:
return _EQ__EQ___326665.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___326665.cljs$lang$applyTo;
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
var n__326672 = n;
var xs__326673 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____326674 = xs__326673;

if(cljs.core.truth_(and__3546__auto____326674))
{return (n__326672 > 0);
} else
{return and__3546__auto____326674;
}
})()))
{{
var G__326675 = (n__326672 - 1);
var G__326676 = cljs.core.next.call(null,xs__326673);
n__326672 = G__326675;
xs__326673 = G__326676;
continue;
}
} else
{return xs__326673;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__326681 = null;
var G__326681__326682 = (function (coll,n){
var temp__3695__auto____326677 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____326677))
{var xs__326678 = temp__3695__auto____326677;

return cljs.core.first.call(null,xs__326678);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__326681__326683 = (function (coll,n,not_found){
var temp__3695__auto____326679 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____326679))
{var xs__326680 = temp__3695__auto____326679;

return cljs.core.first.call(null,xs__326680);
} else
{return not_found;
}
});
G__326681 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__326681__326682.call(this,coll,n);
case  3 :
return G__326681__326683.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326681;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___326685 = (function (){
return "";
});
var str_STAR___326686 = (function (x){
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
var str_STAR___326687 = (function() { 
var G__326689__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__326690 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__326691 = cljs.core.next.call(null,more);
sb = G__326690;
more = G__326691;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__326689 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__326689__delegate.call(this, x, ys);
};
G__326689.cljs$lang$maxFixedArity = 1;
G__326689.cljs$lang$applyTo = (function (arglist__326692){
var x = cljs.core.first(arglist__326692);
var ys = cljs.core.rest(arglist__326692);
return G__326689__delegate.call(this, x, ys);
});
return G__326689;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___326685.call(this);
case  1 :
return str_STAR___326686.call(this,x);
default:
return str_STAR___326687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___326687.cljs$lang$applyTo;
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
var str__326693 = (function (){
return "";
});
var str__326694 = (function (x){
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
var str__326695 = (function() { 
var G__326697__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__326698 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__326699 = cljs.core.next.call(null,more);
sb = G__326698;
more = G__326699;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__326697 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__326697__delegate.call(this, x, ys);
};
G__326697.cljs$lang$maxFixedArity = 1;
G__326697.cljs$lang$applyTo = (function (arglist__326700){
var x = cljs.core.first(arglist__326700);
var ys = cljs.core.rest(arglist__326700);
return G__326697__delegate.call(this, x, ys);
});
return G__326697;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__326693.call(this);
case  1 :
return str__326694.call(this,x);
default:
return str__326695.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__326695.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__326701 = (function (s,start){
return s.substring(start);
});
var subs__326702 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__326701.call(this,s,start);
case  3 :
return subs__326702.call(this,s,start,end);
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
var symbol__326704 = (function (name){
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
var symbol__326705 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__326704.call(this,ns);
case  2 :
return symbol__326705.call(this,ns,name);
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
var keyword__326707 = (function (name){
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
var keyword__326708 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__326707.call(this,ns);
case  2 :
return keyword__326708.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__326710 = cljs.core.seq.call(null,x);
var ys__326711 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__326710 === null)))
{return (ys__326711 === null);
} else
{if(cljs.core.truth_((ys__326711 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__326710),cljs.core.first.call(null,ys__326711))))
{{
var G__326712 = cljs.core.next.call(null,xs__326710);
var G__326713 = cljs.core.next.call(null,ys__326711);
xs__326710 = G__326712;
ys__326711 = G__326713;
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
return cljs.core.reduce.call(null,(function (p1__326714_SHARP_,p2__326715_SHARP_){
return cljs.core.hash_combine.call(null,p1__326714_SHARP_,cljs.core.hash.call(null,p2__326715_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__326716__326717 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__326716__326717))
{var G__326719__326721 = cljs.core.first.call(null,G__326716__326717);
var vec__326720__326722 = G__326719__326721;
var key_name__326723 = cljs.core.nth.call(null,vec__326720__326722,0,null);
var f__326724 = cljs.core.nth.call(null,vec__326720__326722,1,null);
var G__326716__326725 = G__326716__326717;

var G__326719__326726 = G__326719__326721;
var G__326716__326727 = G__326716__326725;

while(true){
var vec__326728__326729 = G__326719__326726;
var key_name__326730 = cljs.core.nth.call(null,vec__326728__326729,0,null);
var f__326731 = cljs.core.nth.call(null,vec__326728__326729,1,null);
var G__326716__326732 = G__326716__326727;

var str_name__326733 = cljs.core.name.call(null,key_name__326730);

obj[str_name__326733] = f__326731;
var temp__3698__auto____326734 = cljs.core.next.call(null,G__326716__326732);

if(cljs.core.truth_(temp__3698__auto____326734))
{var G__326716__326735 = temp__3698__auto____326734;

{
var G__326736 = cljs.core.first.call(null,G__326716__326735);
var G__326737 = G__326716__326735;
G__326719__326726 = G__326736;
G__326716__326727 = G__326737;
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
var this__326738 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__326739 = this;
return (new cljs.core.List(this__326739.meta,o,coll,(this__326739.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__326740 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__326741 = this;
return this__326741.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__326742 = this;
return this__326742.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__326743 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__326744 = this;
return this__326744.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__326745 = this;
return this__326745.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__326746 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__326747 = this;
return (new cljs.core.List(meta,this__326747.first,this__326747.rest,this__326747.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__326748 = this;
return this__326748.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__326749 = this;
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
var this__326750 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__326751 = this;
return (new cljs.core.List(this__326751.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__326752 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__326753 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__326754 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__326755 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__326756 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__326757 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__326758 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__326759 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__326760 = this;
return this__326760.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__326761 = this;
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
list.cljs$lang$applyTo = (function (arglist__326762){
var items = cljs.core.seq( arglist__326762 );;
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
var this__326763 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__326764 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__326765 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__326766 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__326766.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__326767 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__326768 = this;
return this__326768.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__326769 = this;
if(cljs.core.truth_((this__326769.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__326769.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__326770 = this;
return this__326770.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__326771 = this;
return (new cljs.core.Cons(meta,this__326771.first,this__326771.rest));
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
var G__326772 = null;
var G__326772__326773 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__326772__326774 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__326772 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__326772__326773.call(this,string,f);
case  3 :
return G__326772__326774.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326772;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__326776 = null;
var G__326776__326777 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__326776__326778 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__326776 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__326776__326777.call(this,string,k);
case  3 :
return G__326776__326778.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326776;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__326780 = null;
var G__326780__326781 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__326780__326782 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__326780 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__326780__326781.call(this,string,n);
case  3 :
return G__326780__326782.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326780;
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
var G__326790 = null;
var G__326790__326791 = (function (tsym326784,coll){
var tsym326784__326786 = this;

var this$__326787 = tsym326784__326786;

return cljs.core.get.call(null,coll,this$__326787.toString());
});
var G__326790__326792 = (function (tsym326785,coll,not_found){
var tsym326785__326788 = this;

var this$__326789 = tsym326785__326788;

return cljs.core.get.call(null,coll,this$__326789.toString(),not_found);
});
G__326790 = function(tsym326785,coll,not_found){
switch(arguments.length){
case  2 :
return G__326790__326791.call(this,tsym326785,coll);
case  3 :
return G__326790__326792.call(this,tsym326785,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__326790;
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
var x__326794 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__326794;
} else
{lazy_seq.x = x__326794.call(null);
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
var this__326795 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__326796 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__326797 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__326798 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__326798.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__326799 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__326800 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__326801 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__326802 = this;
return this__326802.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__326803 = this;
return (new cljs.core.LazySeq(meta,this__326803.realized,this__326803.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__326804 = [];

var s__326805 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__326805)))
{ary__326804.push(cljs.core.first.call(null,s__326805));
{
var G__326806 = cljs.core.next.call(null,s__326805);
s__326805 = G__326806;
continue;
}
} else
{return ary__326804;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__326807 = s;
var i__326808 = n;
var sum__326809 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____326810 = (i__326808 > 0);

if(cljs.core.truth_(and__3546__auto____326810))
{return cljs.core.seq.call(null,s__326807);
} else
{return and__3546__auto____326810;
}
})()))
{{
var G__326811 = cljs.core.next.call(null,s__326807);
var G__326812 = (i__326808 - 1);
var G__326813 = (sum__326809 + 1);
s__326807 = G__326811;
i__326808 = G__326812;
sum__326809 = G__326813;
continue;
}
} else
{return sum__326809;
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
var concat__326817 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__326818 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__326819 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__326814 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__326814))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__326814),concat.call(null,cljs.core.rest.call(null,s__326814),y));
} else
{return y;
}
})));
});
var concat__326820 = (function() { 
var G__326822__delegate = function (x,y,zs){
var cat__326816 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__326815 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__326815))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__326815),cat.call(null,cljs.core.rest.call(null,xys__326815),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__326816.call(null,concat.call(null,x,y),zs);
};
var G__326822 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326822__delegate.call(this, x, y, zs);
};
G__326822.cljs$lang$maxFixedArity = 2;
G__326822.cljs$lang$applyTo = (function (arglist__326823){
var x = cljs.core.first(arglist__326823);
var y = cljs.core.first(cljs.core.next(arglist__326823));
var zs = cljs.core.rest(cljs.core.next(arglist__326823));
return G__326822__delegate.call(this, x, y, zs);
});
return G__326822;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__326817.call(this);
case  1 :
return concat__326818.call(this,x);
case  2 :
return concat__326819.call(this,x,y);
default:
return concat__326820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__326820.cljs$lang$applyTo;
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
var list_STAR___326824 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___326825 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___326826 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___326827 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___326828 = (function() { 
var G__326830__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__326830 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__326830__delegate.call(this, a, b, c, d, more);
};
G__326830.cljs$lang$maxFixedArity = 4;
G__326830.cljs$lang$applyTo = (function (arglist__326831){
var a = cljs.core.first(arglist__326831);
var b = cljs.core.first(cljs.core.next(arglist__326831));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__326831)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__326831))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__326831))));
return G__326830__delegate.call(this, a, b, c, d, more);
});
return G__326830;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___326824.call(this,a);
case  2 :
return list_STAR___326825.call(this,a,b);
case  3 :
return list_STAR___326826.call(this,a,b,c);
case  4 :
return list_STAR___326827.call(this,a,b,c,d);
default:
return list_STAR___326828.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___326828.cljs$lang$applyTo;
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
var apply__326841 = (function (f,args){
var fixed_arity__326832 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__326832 + 1)) <= fixed_arity__326832)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__326842 = (function (f,x,args){
var arglist__326833 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__326834 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__326833,fixed_arity__326834) <= fixed_arity__326834)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__326833));
} else
{return f.cljs$lang$applyTo(arglist__326833);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__326833));
}
});
var apply__326843 = (function (f,x,y,args){
var arglist__326835 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__326836 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__326835,fixed_arity__326836) <= fixed_arity__326836)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__326835));
} else
{return f.cljs$lang$applyTo(arglist__326835);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__326835));
}
});
var apply__326844 = (function (f,x,y,z,args){
var arglist__326837 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__326838 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__326837,fixed_arity__326838) <= fixed_arity__326838)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__326837));
} else
{return f.cljs$lang$applyTo(arglist__326837);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__326837));
}
});
var apply__326845 = (function() { 
var G__326847__delegate = function (f,a,b,c,d,args){
var arglist__326839 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__326840 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__326839,fixed_arity__326840) <= fixed_arity__326840)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__326839));
} else
{return f.cljs$lang$applyTo(arglist__326839);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__326839));
}
};
var G__326847 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__326847__delegate.call(this, f, a, b, c, d, args);
};
G__326847.cljs$lang$maxFixedArity = 5;
G__326847.cljs$lang$applyTo = (function (arglist__326848){
var f = cljs.core.first(arglist__326848);
var a = cljs.core.first(cljs.core.next(arglist__326848));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__326848)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__326848))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__326848)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__326848)))));
return G__326847__delegate.call(this, f, a, b, c, d, args);
});
return G__326847;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__326841.call(this,f,a);
case  3 :
return apply__326842.call(this,f,a,b);
case  4 :
return apply__326843.call(this,f,a,b,c);
case  5 :
return apply__326844.call(this,f,a,b,c,d);
default:
return apply__326845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__326845.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__326849){
var obj = cljs.core.first(arglist__326849);
var f = cljs.core.first(cljs.core.next(arglist__326849));
var args = cljs.core.rest(cljs.core.next(arglist__326849));
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
var not_EQ___326850 = (function (x){
return false;
});
var not_EQ___326851 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___326852 = (function() { 
var G__326854__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__326854 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326854__delegate.call(this, x, y, more);
};
G__326854.cljs$lang$maxFixedArity = 2;
G__326854.cljs$lang$applyTo = (function (arglist__326855){
var x = cljs.core.first(arglist__326855);
var y = cljs.core.first(cljs.core.next(arglist__326855));
var more = cljs.core.rest(cljs.core.next(arglist__326855));
return G__326854__delegate.call(this, x, y, more);
});
return G__326854;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___326850.call(this,x);
case  2 :
return not_EQ___326851.call(this,x,y);
default:
return not_EQ___326852.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___326852.cljs$lang$applyTo;
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
var G__326856 = pred;
var G__326857 = cljs.core.next.call(null,coll);
pred = G__326856;
coll = G__326857;
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
{var or__3548__auto____326858 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____326858))
{return or__3548__auto____326858;
} else
{{
var G__326859 = pred;
var G__326860 = cljs.core.next.call(null,coll);
pred = G__326859;
coll = G__326860;
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
var G__326861 = null;
var G__326861__326862 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__326861__326863 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__326861__326864 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__326861__326865 = (function() { 
var G__326867__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__326867 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__326867__delegate.call(this, x, y, zs);
};
G__326867.cljs$lang$maxFixedArity = 2;
G__326867.cljs$lang$applyTo = (function (arglist__326868){
var x = cljs.core.first(arglist__326868);
var y = cljs.core.first(cljs.core.next(arglist__326868));
var zs = cljs.core.rest(cljs.core.next(arglist__326868));
return G__326867__delegate.call(this, x, y, zs);
});
return G__326867;
})()
;
G__326861 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__326861__326862.call(this);
case  1 :
return G__326861__326863.call(this,x);
case  2 :
return G__326861__326864.call(this,x,y);
default:
return G__326861__326865.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__326861.cljs$lang$maxFixedArity = 2;
G__326861.cljs$lang$applyTo = G__326861__326865.cljs$lang$applyTo;
return G__326861;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__326869__delegate = function (args){
return x;
};
var G__326869 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__326869__delegate.call(this, args);
};
G__326869.cljs$lang$maxFixedArity = 0;
G__326869.cljs$lang$applyTo = (function (arglist__326870){
var args = cljs.core.seq( arglist__326870 );;
return G__326869__delegate.call(this, args);
});
return G__326869;
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
var comp__326874 = (function (){
return cljs.core.identity;
});
var comp__326875 = (function (f){
return f;
});
var comp__326876 = (function (f,g){
return (function() {
var G__326880 = null;
var G__326880__326881 = (function (){
return f.call(null,g.call(null));
});
var G__326880__326882 = (function (x){
return f.call(null,g.call(null,x));
});
var G__326880__326883 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__326880__326884 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__326880__326885 = (function() { 
var G__326887__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__326887 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__326887__delegate.call(this, x, y, z, args);
};
G__326887.cljs$lang$maxFixedArity = 3;
G__326887.cljs$lang$applyTo = (function (arglist__326888){
var x = cljs.core.first(arglist__326888);
var y = cljs.core.first(cljs.core.next(arglist__326888));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__326888)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__326888)));
return G__326887__delegate.call(this, x, y, z, args);
});
return G__326887;
})()
;
G__326880 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__326880__326881.call(this);
case  1 :
return G__326880__326882.call(this,x);
case  2 :
return G__326880__326883.call(this,x,y);
case  3 :
return G__326880__326884.call(this,x,y,z);
default:
return G__326880__326885.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__326880.cljs$lang$maxFixedArity = 3;
G__326880.cljs$lang$applyTo = G__326880__326885.cljs$lang$applyTo;
return G__326880;
})()
});
var comp__326877 = (function (f,g,h){
return (function() {
var G__326889 = null;
var G__326889__326890 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__326889__326891 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__326889__326892 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__326889__326893 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__326889__326894 = (function() { 
var G__326896__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__326896 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__326896__delegate.call(this, x, y, z, args);
};
G__326896.cljs$lang$maxFixedArity = 3;
G__326896.cljs$lang$applyTo = (function (arglist__326897){
var x = cljs.core.first(arglist__326897);
var y = cljs.core.first(cljs.core.next(arglist__326897));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__326897)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__326897)));
return G__326896__delegate.call(this, x, y, z, args);
});
return G__326896;
})()
;
G__326889 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__326889__326890.call(this);
case  1 :
return G__326889__326891.call(this,x);
case  2 :
return G__326889__326892.call(this,x,y);
case  3 :
return G__326889__326893.call(this,x,y,z);
default:
return G__326889__326894.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__326889.cljs$lang$maxFixedArity = 3;
G__326889.cljs$lang$applyTo = G__326889__326894.cljs$lang$applyTo;
return G__326889;
})()
});
var comp__326878 = (function() { 
var G__326898__delegate = function (f1,f2,f3,fs){
var fs__326871 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__326899__delegate = function (args){
var ret__326872 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__326871),args);
var fs__326873 = cljs.core.next.call(null,fs__326871);

while(true){
if(cljs.core.truth_(fs__326873))
{{
var G__326900 = cljs.core.first.call(null,fs__326873).call(null,ret__326872);
var G__326901 = cljs.core.next.call(null,fs__326873);
ret__326872 = G__326900;
fs__326873 = G__326901;
continue;
}
} else
{return ret__326872;
}
break;
}
};
var G__326899 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__326899__delegate.call(this, args);
};
G__326899.cljs$lang$maxFixedArity = 0;
G__326899.cljs$lang$applyTo = (function (arglist__326902){
var args = cljs.core.seq( arglist__326902 );;
return G__326899__delegate.call(this, args);
});
return G__326899;
})()
;
};
var G__326898 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__326898__delegate.call(this, f1, f2, f3, fs);
};
G__326898.cljs$lang$maxFixedArity = 3;
G__326898.cljs$lang$applyTo = (function (arglist__326903){
var f1 = cljs.core.first(arglist__326903);
var f2 = cljs.core.first(cljs.core.next(arglist__326903));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__326903)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__326903)));
return G__326898__delegate.call(this, f1, f2, f3, fs);
});
return G__326898;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__326874.call(this);
case  1 :
return comp__326875.call(this,f1);
case  2 :
return comp__326876.call(this,f1,f2);
case  3 :
return comp__326877.call(this,f1,f2,f3);
default:
return comp__326878.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__326878.cljs$lang$applyTo;
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
var partial__326904 = (function (f,arg1){
return (function() { 
var G__326909__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__326909 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__326909__delegate.call(this, args);
};
G__326909.cljs$lang$maxFixedArity = 0;
G__326909.cljs$lang$applyTo = (function (arglist__326910){
var args = cljs.core.seq( arglist__326910 );;
return G__326909__delegate.call(this, args);
});
return G__326909;
})()
;
});
var partial__326905 = (function (f,arg1,arg2){
return (function() { 
var G__326911__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__326911 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__326911__delegate.call(this, args);
};
G__326911.cljs$lang$maxFixedArity = 0;
G__326911.cljs$lang$applyTo = (function (arglist__326912){
var args = cljs.core.seq( arglist__326912 );;
return G__326911__delegate.call(this, args);
});
return G__326911;
})()
;
});
var partial__326906 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__326913__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__326913 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__326913__delegate.call(this, args);
};
G__326913.cljs$lang$maxFixedArity = 0;
G__326913.cljs$lang$applyTo = (function (arglist__326914){
var args = cljs.core.seq( arglist__326914 );;
return G__326913__delegate.call(this, args);
});
return G__326913;
})()
;
});
var partial__326907 = (function() { 
var G__326915__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__326916__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__326916 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__326916__delegate.call(this, args);
};
G__326916.cljs$lang$maxFixedArity = 0;
G__326916.cljs$lang$applyTo = (function (arglist__326917){
var args = cljs.core.seq( arglist__326917 );;
return G__326916__delegate.call(this, args);
});
return G__326916;
})()
;
};
var G__326915 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__326915__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__326915.cljs$lang$maxFixedArity = 4;
G__326915.cljs$lang$applyTo = (function (arglist__326918){
var f = cljs.core.first(arglist__326918);
var arg1 = cljs.core.first(cljs.core.next(arglist__326918));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__326918)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__326918))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__326918))));
return G__326915__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__326915;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__326904.call(this,f,arg1);
case  3 :
return partial__326905.call(this,f,arg1,arg2);
case  4 :
return partial__326906.call(this,f,arg1,arg2,arg3);
default:
return partial__326907.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__326907.cljs$lang$applyTo;
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
var fnil__326919 = (function (f,x){
return (function() {
var G__326923 = null;
var G__326923__326924 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__326923__326925 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__326923__326926 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__326923__326927 = (function() { 
var G__326929__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__326929 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__326929__delegate.call(this, a, b, c, ds);
};
G__326929.cljs$lang$maxFixedArity = 3;
G__326929.cljs$lang$applyTo = (function (arglist__326930){
var a = cljs.core.first(arglist__326930);
var b = cljs.core.first(cljs.core.next(arglist__326930));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__326930)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__326930)));
return G__326929__delegate.call(this, a, b, c, ds);
});
return G__326929;
})()
;
G__326923 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__326923__326924.call(this,a);
case  2 :
return G__326923__326925.call(this,a,b);
case  3 :
return G__326923__326926.call(this,a,b,c);
default:
return G__326923__326927.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__326923.cljs$lang$maxFixedArity = 3;
G__326923.cljs$lang$applyTo = G__326923__326927.cljs$lang$applyTo;
return G__326923;
})()
});
var fnil__326920 = (function (f,x,y){
return (function() {
var G__326931 = null;
var G__326931__326932 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__326931__326933 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__326931__326934 = (function() { 
var G__326936__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__326936 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__326936__delegate.call(this, a, b, c, ds);
};
G__326936.cljs$lang$maxFixedArity = 3;
G__326936.cljs$lang$applyTo = (function (arglist__326937){
var a = cljs.core.first(arglist__326937);
var b = cljs.core.first(cljs.core.next(arglist__326937));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__326937)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__326937)));
return G__326936__delegate.call(this, a, b, c, ds);
});
return G__326936;
})()
;
G__326931 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__326931__326932.call(this,a,b);
case  3 :
return G__326931__326933.call(this,a,b,c);
default:
return G__326931__326934.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__326931.cljs$lang$maxFixedArity = 3;
G__326931.cljs$lang$applyTo = G__326931__326934.cljs$lang$applyTo;
return G__326931;
})()
});
var fnil__326921 = (function (f,x,y,z){
return (function() {
var G__326938 = null;
var G__326938__326939 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__326938__326940 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__326938__326941 = (function() { 
var G__326943__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__326943 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__326943__delegate.call(this, a, b, c, ds);
};
G__326943.cljs$lang$maxFixedArity = 3;
G__326943.cljs$lang$applyTo = (function (arglist__326944){
var a = cljs.core.first(arglist__326944);
var b = cljs.core.first(cljs.core.next(arglist__326944));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__326944)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__326944)));
return G__326943__delegate.call(this, a, b, c, ds);
});
return G__326943;
})()
;
G__326938 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__326938__326939.call(this,a,b);
case  3 :
return G__326938__326940.call(this,a,b,c);
default:
return G__326938__326941.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__326938.cljs$lang$maxFixedArity = 3;
G__326938.cljs$lang$applyTo = G__326938__326941.cljs$lang$applyTo;
return G__326938;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__326919.call(this,f,x);
case  3 :
return fnil__326920.call(this,f,x,y);
case  4 :
return fnil__326921.call(this,f,x,y,z);
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
var mapi__326947 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____326945 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____326945))
{var s__326946 = temp__3698__auto____326945;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__326946)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__326946)));
} else
{return null;
}
})));
});

return mapi__326947.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____326948 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____326948))
{var s__326949 = temp__3698__auto____326948;

var x__326950 = f.call(null,cljs.core.first.call(null,s__326949));

if(cljs.core.truth_((x__326950 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__326949));
} else
{return cljs.core.cons.call(null,x__326950,keep.call(null,f,cljs.core.rest.call(null,s__326949)));
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
var keepi__326960 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____326957 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____326957))
{var s__326958 = temp__3698__auto____326957;

var x__326959 = f.call(null,idx,cljs.core.first.call(null,s__326958));

if(cljs.core.truth_((x__326959 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__326958));
} else
{return cljs.core.cons.call(null,x__326959,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__326958)));
}
} else
{return null;
}
})));
});

return keepi__326960.call(null,0,coll);
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
var every_pred__327005 = (function (p){
return (function() {
var ep1 = null;
var ep1__327010 = (function (){
return true;
});
var ep1__327011 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__327012 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____326967 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____326967))
{return p.call(null,y);
} else
{return and__3546__auto____326967;
}
})());
});
var ep1__327013 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____326968 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____326968))
{var and__3546__auto____326969 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____326969))
{return p.call(null,z);
} else
{return and__3546__auto____326969;
}
} else
{return and__3546__auto____326968;
}
})());
});
var ep1__327014 = (function() { 
var G__327016__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____326970 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____326970))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____326970;
}
})());
};
var G__327016 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327016__delegate.call(this, x, y, z, args);
};
G__327016.cljs$lang$maxFixedArity = 3;
G__327016.cljs$lang$applyTo = (function (arglist__327017){
var x = cljs.core.first(arglist__327017);
var y = cljs.core.first(cljs.core.next(arglist__327017));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327017)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327017)));
return G__327016__delegate.call(this, x, y, z, args);
});
return G__327016;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__327010.call(this);
case  1 :
return ep1__327011.call(this,x);
case  2 :
return ep1__327012.call(this,x,y);
case  3 :
return ep1__327013.call(this,x,y,z);
default:
return ep1__327014.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__327014.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__327006 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__327018 = (function (){
return true;
});
var ep2__327019 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____326971 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____326971))
{return p2.call(null,x);
} else
{return and__3546__auto____326971;
}
})());
});
var ep2__327020 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____326972 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____326972))
{var and__3546__auto____326973 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____326973))
{var and__3546__auto____326974 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____326974))
{return p2.call(null,y);
} else
{return and__3546__auto____326974;
}
} else
{return and__3546__auto____326973;
}
} else
{return and__3546__auto____326972;
}
})());
});
var ep2__327021 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____326975 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____326975))
{var and__3546__auto____326976 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____326976))
{var and__3546__auto____326977 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____326977))
{var and__3546__auto____326978 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____326978))
{var and__3546__auto____326979 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____326979))
{return p2.call(null,z);
} else
{return and__3546__auto____326979;
}
} else
{return and__3546__auto____326978;
}
} else
{return and__3546__auto____326977;
}
} else
{return and__3546__auto____326976;
}
} else
{return and__3546__auto____326975;
}
})());
});
var ep2__327022 = (function() { 
var G__327024__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____326980 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____326980))
{return cljs.core.every_QMARK_.call(null,(function (p1__326951_SHARP_){
var and__3546__auto____326981 = p1.call(null,p1__326951_SHARP_);

if(cljs.core.truth_(and__3546__auto____326981))
{return p2.call(null,p1__326951_SHARP_);
} else
{return and__3546__auto____326981;
}
}),args);
} else
{return and__3546__auto____326980;
}
})());
};
var G__327024 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327024__delegate.call(this, x, y, z, args);
};
G__327024.cljs$lang$maxFixedArity = 3;
G__327024.cljs$lang$applyTo = (function (arglist__327025){
var x = cljs.core.first(arglist__327025);
var y = cljs.core.first(cljs.core.next(arglist__327025));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327025)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327025)));
return G__327024__delegate.call(this, x, y, z, args);
});
return G__327024;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__327018.call(this);
case  1 :
return ep2__327019.call(this,x);
case  2 :
return ep2__327020.call(this,x,y);
case  3 :
return ep2__327021.call(this,x,y,z);
default:
return ep2__327022.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__327022.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__327007 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__327026 = (function (){
return true;
});
var ep3__327027 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____326982 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____326982))
{var and__3546__auto____326983 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____326983))
{return p3.call(null,x);
} else
{return and__3546__auto____326983;
}
} else
{return and__3546__auto____326982;
}
})());
});
var ep3__327028 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____326984 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____326984))
{var and__3546__auto____326985 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____326985))
{var and__3546__auto____326986 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____326986))
{var and__3546__auto____326987 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____326987))
{var and__3546__auto____326988 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____326988))
{return p3.call(null,y);
} else
{return and__3546__auto____326988;
}
} else
{return and__3546__auto____326987;
}
} else
{return and__3546__auto____326986;
}
} else
{return and__3546__auto____326985;
}
} else
{return and__3546__auto____326984;
}
})());
});
var ep3__327029 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____326989 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____326989))
{var and__3546__auto____326990 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____326990))
{var and__3546__auto____326991 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____326991))
{var and__3546__auto____326992 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____326992))
{var and__3546__auto____326993 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____326993))
{var and__3546__auto____326994 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____326994))
{var and__3546__auto____326995 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____326995))
{var and__3546__auto____326996 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____326996))
{return p3.call(null,z);
} else
{return and__3546__auto____326996;
}
} else
{return and__3546__auto____326995;
}
} else
{return and__3546__auto____326994;
}
} else
{return and__3546__auto____326993;
}
} else
{return and__3546__auto____326992;
}
} else
{return and__3546__auto____326991;
}
} else
{return and__3546__auto____326990;
}
} else
{return and__3546__auto____326989;
}
})());
});
var ep3__327030 = (function() { 
var G__327032__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____326997 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____326997))
{return cljs.core.every_QMARK_.call(null,(function (p1__326952_SHARP_){
var and__3546__auto____326998 = p1.call(null,p1__326952_SHARP_);

if(cljs.core.truth_(and__3546__auto____326998))
{var and__3546__auto____326999 = p2.call(null,p1__326952_SHARP_);

if(cljs.core.truth_(and__3546__auto____326999))
{return p3.call(null,p1__326952_SHARP_);
} else
{return and__3546__auto____326999;
}
} else
{return and__3546__auto____326998;
}
}),args);
} else
{return and__3546__auto____326997;
}
})());
};
var G__327032 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327032__delegate.call(this, x, y, z, args);
};
G__327032.cljs$lang$maxFixedArity = 3;
G__327032.cljs$lang$applyTo = (function (arglist__327033){
var x = cljs.core.first(arglist__327033);
var y = cljs.core.first(cljs.core.next(arglist__327033));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327033)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327033)));
return G__327032__delegate.call(this, x, y, z, args);
});
return G__327032;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__327026.call(this);
case  1 :
return ep3__327027.call(this,x);
case  2 :
return ep3__327028.call(this,x,y);
case  3 :
return ep3__327029.call(this,x,y,z);
default:
return ep3__327030.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__327030.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__327008 = (function() { 
var G__327034__delegate = function (p1,p2,p3,ps){
var ps__327000 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__327035 = (function (){
return true;
});
var epn__327036 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__326953_SHARP_){
return p1__326953_SHARP_.call(null,x);
}),ps__327000);
});
var epn__327037 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__326954_SHARP_){
var and__3546__auto____327001 = p1__326954_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____327001))
{return p1__326954_SHARP_.call(null,y);
} else
{return and__3546__auto____327001;
}
}),ps__327000);
});
var epn__327038 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__326955_SHARP_){
var and__3546__auto____327002 = p1__326955_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____327002))
{var and__3546__auto____327003 = p1__326955_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____327003))
{return p1__326955_SHARP_.call(null,z);
} else
{return and__3546__auto____327003;
}
} else
{return and__3546__auto____327002;
}
}),ps__327000);
});
var epn__327039 = (function() { 
var G__327041__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____327004 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____327004))
{return cljs.core.every_QMARK_.call(null,(function (p1__326956_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__326956_SHARP_,args);
}),ps__327000);
} else
{return and__3546__auto____327004;
}
})());
};
var G__327041 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327041__delegate.call(this, x, y, z, args);
};
G__327041.cljs$lang$maxFixedArity = 3;
G__327041.cljs$lang$applyTo = (function (arglist__327042){
var x = cljs.core.first(arglist__327042);
var y = cljs.core.first(cljs.core.next(arglist__327042));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327042)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327042)));
return G__327041__delegate.call(this, x, y, z, args);
});
return G__327041;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__327035.call(this);
case  1 :
return epn__327036.call(this,x);
case  2 :
return epn__327037.call(this,x,y);
case  3 :
return epn__327038.call(this,x,y,z);
default:
return epn__327039.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__327039.cljs$lang$applyTo;
return epn;
})()
};
var G__327034 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327034__delegate.call(this, p1, p2, p3, ps);
};
G__327034.cljs$lang$maxFixedArity = 3;
G__327034.cljs$lang$applyTo = (function (arglist__327043){
var p1 = cljs.core.first(arglist__327043);
var p2 = cljs.core.first(cljs.core.next(arglist__327043));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327043)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327043)));
return G__327034__delegate.call(this, p1, p2, p3, ps);
});
return G__327034;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__327005.call(this,p1);
case  2 :
return every_pred__327006.call(this,p1,p2);
case  3 :
return every_pred__327007.call(this,p1,p2,p3);
default:
return every_pred__327008.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__327008.cljs$lang$applyTo;
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
var some_fn__327083 = (function (p){
return (function() {
var sp1 = null;
var sp1__327088 = (function (){
return null;
});
var sp1__327089 = (function (x){
return p.call(null,x);
});
var sp1__327090 = (function (x,y){
var or__3548__auto____327045 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____327045))
{return or__3548__auto____327045;
} else
{return p.call(null,y);
}
});
var sp1__327091 = (function (x,y,z){
var or__3548__auto____327046 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____327046))
{return or__3548__auto____327046;
} else
{var or__3548__auto____327047 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____327047))
{return or__3548__auto____327047;
} else
{return p.call(null,z);
}
}
});
var sp1__327092 = (function() { 
var G__327094__delegate = function (x,y,z,args){
var or__3548__auto____327048 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____327048))
{return or__3548__auto____327048;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__327094 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327094__delegate.call(this, x, y, z, args);
};
G__327094.cljs$lang$maxFixedArity = 3;
G__327094.cljs$lang$applyTo = (function (arglist__327095){
var x = cljs.core.first(arglist__327095);
var y = cljs.core.first(cljs.core.next(arglist__327095));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327095)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327095)));
return G__327094__delegate.call(this, x, y, z, args);
});
return G__327094;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__327088.call(this);
case  1 :
return sp1__327089.call(this,x);
case  2 :
return sp1__327090.call(this,x,y);
case  3 :
return sp1__327091.call(this,x,y,z);
default:
return sp1__327092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__327092.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__327084 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__327096 = (function (){
return null;
});
var sp2__327097 = (function (x){
var or__3548__auto____327049 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____327049))
{return or__3548__auto____327049;
} else
{return p2.call(null,x);
}
});
var sp2__327098 = (function (x,y){
var or__3548__auto____327050 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____327050))
{return or__3548__auto____327050;
} else
{var or__3548__auto____327051 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____327051))
{return or__3548__auto____327051;
} else
{var or__3548__auto____327052 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____327052))
{return or__3548__auto____327052;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__327099 = (function (x,y,z){
var or__3548__auto____327053 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____327053))
{return or__3548__auto____327053;
} else
{var or__3548__auto____327054 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____327054))
{return or__3548__auto____327054;
} else
{var or__3548__auto____327055 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____327055))
{return or__3548__auto____327055;
} else
{var or__3548__auto____327056 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____327056))
{return or__3548__auto____327056;
} else
{var or__3548__auto____327057 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____327057))
{return or__3548__auto____327057;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__327100 = (function() { 
var G__327102__delegate = function (x,y,z,args){
var or__3548__auto____327058 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____327058))
{return or__3548__auto____327058;
} else
{return cljs.core.some.call(null,(function (p1__326961_SHARP_){
var or__3548__auto____327059 = p1.call(null,p1__326961_SHARP_);

if(cljs.core.truth_(or__3548__auto____327059))
{return or__3548__auto____327059;
} else
{return p2.call(null,p1__326961_SHARP_);
}
}),args);
}
};
var G__327102 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327102__delegate.call(this, x, y, z, args);
};
G__327102.cljs$lang$maxFixedArity = 3;
G__327102.cljs$lang$applyTo = (function (arglist__327103){
var x = cljs.core.first(arglist__327103);
var y = cljs.core.first(cljs.core.next(arglist__327103));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327103)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327103)));
return G__327102__delegate.call(this, x, y, z, args);
});
return G__327102;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__327096.call(this);
case  1 :
return sp2__327097.call(this,x);
case  2 :
return sp2__327098.call(this,x,y);
case  3 :
return sp2__327099.call(this,x,y,z);
default:
return sp2__327100.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__327100.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__327085 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__327104 = (function (){
return null;
});
var sp3__327105 = (function (x){
var or__3548__auto____327060 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____327060))
{return or__3548__auto____327060;
} else
{var or__3548__auto____327061 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____327061))
{return or__3548__auto____327061;
} else
{return p3.call(null,x);
}
}
});
var sp3__327106 = (function (x,y){
var or__3548__auto____327062 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____327062))
{return or__3548__auto____327062;
} else
{var or__3548__auto____327063 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____327063))
{return or__3548__auto____327063;
} else
{var or__3548__auto____327064 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____327064))
{return or__3548__auto____327064;
} else
{var or__3548__auto____327065 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____327065))
{return or__3548__auto____327065;
} else
{var or__3548__auto____327066 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____327066))
{return or__3548__auto____327066;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__327107 = (function (x,y,z){
var or__3548__auto____327067 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____327067))
{return or__3548__auto____327067;
} else
{var or__3548__auto____327068 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____327068))
{return or__3548__auto____327068;
} else
{var or__3548__auto____327069 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____327069))
{return or__3548__auto____327069;
} else
{var or__3548__auto____327070 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____327070))
{return or__3548__auto____327070;
} else
{var or__3548__auto____327071 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____327071))
{return or__3548__auto____327071;
} else
{var or__3548__auto____327072 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____327072))
{return or__3548__auto____327072;
} else
{var or__3548__auto____327073 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____327073))
{return or__3548__auto____327073;
} else
{var or__3548__auto____327074 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____327074))
{return or__3548__auto____327074;
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
var sp3__327108 = (function() { 
var G__327110__delegate = function (x,y,z,args){
var or__3548__auto____327075 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____327075))
{return or__3548__auto____327075;
} else
{return cljs.core.some.call(null,(function (p1__326962_SHARP_){
var or__3548__auto____327076 = p1.call(null,p1__326962_SHARP_);

if(cljs.core.truth_(or__3548__auto____327076))
{return or__3548__auto____327076;
} else
{var or__3548__auto____327077 = p2.call(null,p1__326962_SHARP_);

if(cljs.core.truth_(or__3548__auto____327077))
{return or__3548__auto____327077;
} else
{return p3.call(null,p1__326962_SHARP_);
}
}
}),args);
}
};
var G__327110 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327110__delegate.call(this, x, y, z, args);
};
G__327110.cljs$lang$maxFixedArity = 3;
G__327110.cljs$lang$applyTo = (function (arglist__327111){
var x = cljs.core.first(arglist__327111);
var y = cljs.core.first(cljs.core.next(arglist__327111));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327111)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327111)));
return G__327110__delegate.call(this, x, y, z, args);
});
return G__327110;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__327104.call(this);
case  1 :
return sp3__327105.call(this,x);
case  2 :
return sp3__327106.call(this,x,y);
case  3 :
return sp3__327107.call(this,x,y,z);
default:
return sp3__327108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__327108.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__327086 = (function() { 
var G__327112__delegate = function (p1,p2,p3,ps){
var ps__327078 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__327113 = (function (){
return null;
});
var spn__327114 = (function (x){
return cljs.core.some.call(null,(function (p1__326963_SHARP_){
return p1__326963_SHARP_.call(null,x);
}),ps__327078);
});
var spn__327115 = (function (x,y){
return cljs.core.some.call(null,(function (p1__326964_SHARP_){
var or__3548__auto____327079 = p1__326964_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____327079))
{return or__3548__auto____327079;
} else
{return p1__326964_SHARP_.call(null,y);
}
}),ps__327078);
});
var spn__327116 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__326965_SHARP_){
var or__3548__auto____327080 = p1__326965_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____327080))
{return or__3548__auto____327080;
} else
{var or__3548__auto____327081 = p1__326965_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____327081))
{return or__3548__auto____327081;
} else
{return p1__326965_SHARP_.call(null,z);
}
}
}),ps__327078);
});
var spn__327117 = (function() { 
var G__327119__delegate = function (x,y,z,args){
var or__3548__auto____327082 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____327082))
{return or__3548__auto____327082;
} else
{return cljs.core.some.call(null,(function (p1__326966_SHARP_){
return cljs.core.some.call(null,p1__326966_SHARP_,args);
}),ps__327078);
}
};
var G__327119 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327119__delegate.call(this, x, y, z, args);
};
G__327119.cljs$lang$maxFixedArity = 3;
G__327119.cljs$lang$applyTo = (function (arglist__327120){
var x = cljs.core.first(arglist__327120);
var y = cljs.core.first(cljs.core.next(arglist__327120));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327120)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327120)));
return G__327119__delegate.call(this, x, y, z, args);
});
return G__327119;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__327113.call(this);
case  1 :
return spn__327114.call(this,x);
case  2 :
return spn__327115.call(this,x,y);
case  3 :
return spn__327116.call(this,x,y,z);
default:
return spn__327117.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__327117.cljs$lang$applyTo;
return spn;
})()
};
var G__327112 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327112__delegate.call(this, p1, p2, p3, ps);
};
G__327112.cljs$lang$maxFixedArity = 3;
G__327112.cljs$lang$applyTo = (function (arglist__327121){
var p1 = cljs.core.first(arglist__327121);
var p2 = cljs.core.first(cljs.core.next(arglist__327121));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327121)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327121)));
return G__327112__delegate.call(this, p1, p2, p3, ps);
});
return G__327112;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__327083.call(this,p1);
case  2 :
return some_fn__327084.call(this,p1,p2);
case  3 :
return some_fn__327085.call(this,p1,p2,p3);
default:
return some_fn__327086.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__327086.cljs$lang$applyTo;
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
var map__327134 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____327122 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____327122))
{var s__327123 = temp__3698__auto____327122;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__327123)),map.call(null,f,cljs.core.rest.call(null,s__327123)));
} else
{return null;
}
})));
});
var map__327135 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__327124 = cljs.core.seq.call(null,c1);
var s2__327125 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____327126 = s1__327124;

if(cljs.core.truth_(and__3546__auto____327126))
{return s2__327125;
} else
{return and__3546__auto____327126;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__327124),cljs.core.first.call(null,s2__327125)),map.call(null,f,cljs.core.rest.call(null,s1__327124),cljs.core.rest.call(null,s2__327125)));
} else
{return null;
}
})));
});
var map__327136 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__327127 = cljs.core.seq.call(null,c1);
var s2__327128 = cljs.core.seq.call(null,c2);
var s3__327129 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____327130 = s1__327127;

if(cljs.core.truth_(and__3546__auto____327130))
{var and__3546__auto____327131 = s2__327128;

if(cljs.core.truth_(and__3546__auto____327131))
{return s3__327129;
} else
{return and__3546__auto____327131;
}
} else
{return and__3546__auto____327130;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__327127),cljs.core.first.call(null,s2__327128),cljs.core.first.call(null,s3__327129)),map.call(null,f,cljs.core.rest.call(null,s1__327127),cljs.core.rest.call(null,s2__327128),cljs.core.rest.call(null,s3__327129)));
} else
{return null;
}
})));
});
var map__327137 = (function() { 
var G__327139__delegate = function (f,c1,c2,c3,colls){
var step__327133 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__327132 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__327132)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__327132),step.call(null,map.call(null,cljs.core.rest,ss__327132)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__327044_SHARP_){
return cljs.core.apply.call(null,f,p1__327044_SHARP_);
}),step__327133.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__327139 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__327139__delegate.call(this, f, c1, c2, c3, colls);
};
G__327139.cljs$lang$maxFixedArity = 4;
G__327139.cljs$lang$applyTo = (function (arglist__327140){
var f = cljs.core.first(arglist__327140);
var c1 = cljs.core.first(cljs.core.next(arglist__327140));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327140)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__327140))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__327140))));
return G__327139__delegate.call(this, f, c1, c2, c3, colls);
});
return G__327139;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__327134.call(this,f,c1);
case  3 :
return map__327135.call(this,f,c1,c2);
case  4 :
return map__327136.call(this,f,c1,c2,c3);
default:
return map__327137.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__327137.cljs$lang$applyTo;
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
{var temp__3698__auto____327141 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____327141))
{var s__327142 = temp__3698__auto____327141;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__327142),take.call(null,(n - 1),cljs.core.rest.call(null,s__327142)));
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
var step__327145 = (function (n,coll){
while(true){
var s__327143 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____327144 = (n > 0);

if(cljs.core.truth_(and__3546__auto____327144))
{return s__327143;
} else
{return and__3546__auto____327144;
}
})()))
{{
var G__327146 = (n - 1);
var G__327147 = cljs.core.rest.call(null,s__327143);
n = G__327146;
coll = G__327147;
continue;
}
} else
{return s__327143;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__327145.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__327148 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__327149 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__327148.call(this,n);
case  2 :
return drop_last__327149.call(this,n,s);
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
var s__327151 = cljs.core.seq.call(null,coll);
var lead__327152 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__327152))
{{
var G__327153 = cljs.core.next.call(null,s__327151);
var G__327154 = cljs.core.next.call(null,lead__327152);
s__327151 = G__327153;
lead__327152 = G__327154;
continue;
}
} else
{return s__327151;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__327157 = (function (pred,coll){
while(true){
var s__327155 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____327156 = s__327155;

if(cljs.core.truth_(and__3546__auto____327156))
{return pred.call(null,cljs.core.first.call(null,s__327155));
} else
{return and__3546__auto____327156;
}
})()))
{{
var G__327158 = pred;
var G__327159 = cljs.core.rest.call(null,s__327155);
pred = G__327158;
coll = G__327159;
continue;
}
} else
{return s__327155;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__327157.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____327160 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____327160))
{var s__327161 = temp__3698__auto____327160;

return cljs.core.concat.call(null,s__327161,cycle.call(null,s__327161));
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
var repeat__327162 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__327163 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__327162.call(this,n);
case  2 :
return repeat__327163.call(this,n,x);
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
var repeatedly__327165 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__327166 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__327165.call(this,n);
case  2 :
return repeatedly__327166.call(this,n,f);
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
var interleave__327172 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__327168 = cljs.core.seq.call(null,c1);
var s2__327169 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____327170 = s1__327168;

if(cljs.core.truth_(and__3546__auto____327170))
{return s2__327169;
} else
{return and__3546__auto____327170;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__327168),cljs.core.cons.call(null,cljs.core.first.call(null,s2__327169),interleave.call(null,cljs.core.rest.call(null,s1__327168),cljs.core.rest.call(null,s2__327169))));
} else
{return null;
}
})));
});
var interleave__327173 = (function() { 
var G__327175__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__327171 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__327171)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__327171),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__327171)));
} else
{return null;
}
})));
};
var G__327175 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__327175__delegate.call(this, c1, c2, colls);
};
G__327175.cljs$lang$maxFixedArity = 2;
G__327175.cljs$lang$applyTo = (function (arglist__327176){
var c1 = cljs.core.first(arglist__327176);
var c2 = cljs.core.first(cljs.core.next(arglist__327176));
var colls = cljs.core.rest(cljs.core.next(arglist__327176));
return G__327175__delegate.call(this, c1, c2, colls);
});
return G__327175;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__327172.call(this,c1,c2);
default:
return interleave__327173.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__327173.cljs$lang$applyTo;
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
var cat__327179 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____327177 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____327177))
{var coll__327178 = temp__3695__auto____327177;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__327178),cat.call(null,cljs.core.rest.call(null,coll__327178),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__327179.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__327180 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__327181 = (function() { 
var G__327183__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__327183 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__327183__delegate.call(this, f, coll, colls);
};
G__327183.cljs$lang$maxFixedArity = 2;
G__327183.cljs$lang$applyTo = (function (arglist__327184){
var f = cljs.core.first(arglist__327184);
var coll = cljs.core.first(cljs.core.next(arglist__327184));
var colls = cljs.core.rest(cljs.core.next(arglist__327184));
return G__327183__delegate.call(this, f, coll, colls);
});
return G__327183;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__327180.call(this,f,coll);
default:
return mapcat__327181.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__327181.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____327185 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____327185))
{var s__327186 = temp__3698__auto____327185;

var f__327187 = cljs.core.first.call(null,s__327186);
var r__327188 = cljs.core.rest.call(null,s__327186);

if(cljs.core.truth_(pred.call(null,f__327187)))
{return cljs.core.cons.call(null,f__327187,filter.call(null,pred,r__327188));
} else
{return filter.call(null,pred,r__327188);
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
var walk__327190 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__327190.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__327189_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__327189_SHARP_));
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
var partition__327197 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__327198 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____327191 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____327191))
{var s__327192 = temp__3698__auto____327191;

var p__327193 = cljs.core.take.call(null,n,s__327192);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__327193))))
{return cljs.core.cons.call(null,p__327193,partition.call(null,n,step,cljs.core.drop.call(null,step,s__327192)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__327199 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____327194 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____327194))
{var s__327195 = temp__3698__auto____327194;

var p__327196 = cljs.core.take.call(null,n,s__327195);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__327196))))
{return cljs.core.cons.call(null,p__327196,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__327195)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__327196,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__327197.call(this,n,step);
case  3 :
return partition__327198.call(this,n,step,pad);
case  4 :
return partition__327199.call(this,n,step,pad,coll);
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
var get_in__327205 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__327206 = (function (m,ks,not_found){
var sentinel__327201 = cljs.core.lookup_sentinel;
var m__327202 = m;
var ks__327203 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__327203))
{var m__327204 = cljs.core.get.call(null,m__327202,cljs.core.first.call(null,ks__327203),sentinel__327201);

if(cljs.core.truth_((sentinel__327201 === m__327204)))
{return not_found;
} else
{{
var G__327208 = sentinel__327201;
var G__327209 = m__327204;
var G__327210 = cljs.core.next.call(null,ks__327203);
sentinel__327201 = G__327208;
m__327202 = G__327209;
ks__327203 = G__327210;
continue;
}
}
} else
{return m__327202;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__327205.call(this,m,ks);
case  3 :
return get_in__327206.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__327211,v){
var vec__327212__327213 = p__327211;
var k__327214 = cljs.core.nth.call(null,vec__327212__327213,0,null);
var ks__327215 = cljs.core.nthnext.call(null,vec__327212__327213,1);

if(cljs.core.truth_(ks__327215))
{return cljs.core.assoc.call(null,m,k__327214,assoc_in.call(null,cljs.core.get.call(null,m,k__327214),ks__327215,v));
} else
{return cljs.core.assoc.call(null,m,k__327214,v);
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
var update_in__delegate = function (m,p__327216,f,args){
var vec__327217__327218 = p__327216;
var k__327219 = cljs.core.nth.call(null,vec__327217__327218,0,null);
var ks__327220 = cljs.core.nthnext.call(null,vec__327217__327218,1);

if(cljs.core.truth_(ks__327220))
{return cljs.core.assoc.call(null,m,k__327219,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__327219),ks__327220,f,args));
} else
{return cljs.core.assoc.call(null,m,k__327219,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__327219),args));
}
};
var update_in = function (m,p__327216,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__327216, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__327221){
var m = cljs.core.first(arglist__327221);
var p__327216 = cljs.core.first(cljs.core.next(arglist__327221));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327221)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327221)));
return update_in__delegate.call(this, m, p__327216, f, args);
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
var this__327222 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__327255 = null;
var G__327255__327256 = (function (coll,k){
var this__327223 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__327255__327257 = (function (coll,k,not_found){
var this__327224 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__327255 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__327255__327256.call(this,coll,k);
case  3 :
return G__327255__327257.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327255;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__327225 = this;
var new_array__327226 = cljs.core.aclone.call(null,this__327225.array);

(new_array__327226[k] = v);
return (new cljs.core.Vector(this__327225.meta,new_array__327226));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__327259 = null;
var G__327259__327260 = (function (tsym327227,k){
var this__327229 = this;
var tsym327227__327230 = this;

var coll__327231 = tsym327227__327230;

return cljs.core._lookup.call(null,coll__327231,k);
});
var G__327259__327261 = (function (tsym327228,k,not_found){
var this__327232 = this;
var tsym327228__327233 = this;

var coll__327234 = tsym327228__327233;

return cljs.core._lookup.call(null,coll__327234,k,not_found);
});
G__327259 = function(tsym327228,k,not_found){
switch(arguments.length){
case  2 :
return G__327259__327260.call(this,tsym327228,k);
case  3 :
return G__327259__327261.call(this,tsym327228,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327259;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__327235 = this;
var new_array__327236 = cljs.core.aclone.call(null,this__327235.array);

new_array__327236.push(o);
return (new cljs.core.Vector(this__327235.meta,new_array__327236));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__327263 = null;
var G__327263__327264 = (function (v,f){
var this__327237 = this;
return cljs.core.ci_reduce.call(null,this__327237.array,f);
});
var G__327263__327265 = (function (v,f,start){
var this__327238 = this;
return cljs.core.ci_reduce.call(null,this__327238.array,f,start);
});
G__327263 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__327263__327264.call(this,v,f);
case  3 :
return G__327263__327265.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327263;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__327239 = this;
if(cljs.core.truth_((this__327239.array.length > 0)))
{var vector_seq__327240 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__327239.array.length)))
{return cljs.core.cons.call(null,(this__327239.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__327240.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__327241 = this;
return this__327241.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__327242 = this;
var count__327243 = this__327242.array.length;

if(cljs.core.truth_((count__327243 > 0)))
{return (this__327242.array[(count__327243 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__327244 = this;
if(cljs.core.truth_((this__327244.array.length > 0)))
{var new_array__327245 = cljs.core.aclone.call(null,this__327244.array);

new_array__327245.pop();
return (new cljs.core.Vector(this__327244.meta,new_array__327245));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__327246 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__327247 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__327248 = this;
return (new cljs.core.Vector(meta,this__327248.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__327249 = this;
return this__327249.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__327267 = null;
var G__327267__327268 = (function (coll,n){
var this__327250 = this;
if(cljs.core.truth_((function (){var and__3546__auto____327251 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____327251))
{return (n < this__327250.array.length);
} else
{return and__3546__auto____327251;
}
})()))
{return (this__327250.array[n]);
} else
{return null;
}
});
var G__327267__327269 = (function (coll,n,not_found){
var this__327252 = this;
if(cljs.core.truth_((function (){var and__3546__auto____327253 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____327253))
{return (n < this__327252.array.length);
} else
{return and__3546__auto____327253;
}
})()))
{return (this__327252.array[n]);
} else
{return not_found;
}
});
G__327267 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__327267__327268.call(this,coll,n);
case  3 :
return G__327267__327269.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327267;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__327254 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__327254.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__327271 = pv.cnt;

if(cljs.core.truth_((cnt__327271 < 32)))
{return 0;
} else
{return (((cnt__327271 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__327272 = level;
var ret__327273 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__327272)))
{return ret__327273;
} else
{var embed__327274 = ret__327273;
var r__327275 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___327276 = (r__327275[0] = embed__327274);

{
var G__327277 = (ll__327272 - 5);
var G__327278 = r__327275;
ll__327272 = G__327277;
ret__327273 = G__327278;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__327279 = cljs.core.aclone.call(null,parent);
var subidx__327280 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__327279[subidx__327280] = tailnode);
return ret__327279;
} else
{var temp__3695__auto____327281 = (parent[subidx__327280]);

if(cljs.core.truth_(temp__3695__auto____327281))
{var child__327282 = temp__3695__auto____327281;

var node_to_insert__327283 = push_tail.call(null,pv,(level - 5),child__327282,tailnode);
var ___327284 = (ret__327279[subidx__327280] = node_to_insert__327283);

return ret__327279;
} else
{var node_to_insert__327285 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___327286 = (ret__327279[subidx__327280] = node_to_insert__327285);

return ret__327279;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____327287 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____327287))
{return (i < pv.cnt);
} else
{return and__3546__auto____327287;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__327288 = pv.root;
var level__327289 = pv.shift;

while(true){
if(cljs.core.truth_((level__327289 > 0)))
{{
var G__327290 = (node__327288[((i >> level__327289) & 31)]);
var G__327291 = (level__327289 - 5);
node__327288 = G__327290;
level__327289 = G__327291;
continue;
}
} else
{return node__327288;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__327292 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__327292[(i & 31)] = val);
return ret__327292;
} else
{var subidx__327293 = ((i >> level) & 31);
var ___327294 = (ret__327292[subidx__327293] = do_assoc.call(null,pv,(level - 5),(node[subidx__327293]),i,val));

return ret__327292;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__327295 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__327296 = pop_tail.call(null,pv,(level - 5),(node[subidx__327295]));

if(cljs.core.truth_((function (){var and__3546__auto____327297 = (new_child__327296 === null);

if(cljs.core.truth_(and__3546__auto____327297))
{return (subidx__327295 === 0);
} else
{return and__3546__auto____327297;
}
})()))
{return null;
} else
{var ret__327298 = cljs.core.aclone.call(null,node);
var ___327299 = (ret__327298[subidx__327295] = new_child__327296);

return ret__327298;
}
} else
{if(cljs.core.truth_((subidx__327295 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__327300 = cljs.core.aclone.call(null,node);
var ___327301 = (ret__327300[subidx__327295] = null);

return ret__327300;
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
var this__327302 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__327342 = null;
var G__327342__327343 = (function (coll,k){
var this__327303 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__327342__327344 = (function (coll,k,not_found){
var this__327304 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__327342 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__327342__327343.call(this,coll,k);
case  3 :
return G__327342__327344.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327342;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__327305 = this;
if(cljs.core.truth_((function (){var and__3546__auto____327306 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____327306))
{return (k < this__327305.cnt);
} else
{return and__3546__auto____327306;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__327307 = cljs.core.aclone.call(null,this__327305.tail);

(new_tail__327307[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__327305.meta,this__327305.cnt,this__327305.shift,this__327305.root,new_tail__327307));
} else
{return (new cljs.core.PersistentVector(this__327305.meta,this__327305.cnt,this__327305.shift,cljs.core.do_assoc.call(null,coll,this__327305.shift,this__327305.root,k,v),this__327305.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__327305.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__327305.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__327346 = null;
var G__327346__327347 = (function (tsym327308,k){
var this__327310 = this;
var tsym327308__327311 = this;

var coll__327312 = tsym327308__327311;

return cljs.core._lookup.call(null,coll__327312,k);
});
var G__327346__327348 = (function (tsym327309,k,not_found){
var this__327313 = this;
var tsym327309__327314 = this;

var coll__327315 = tsym327309__327314;

return cljs.core._lookup.call(null,coll__327315,k,not_found);
});
G__327346 = function(tsym327309,k,not_found){
switch(arguments.length){
case  2 :
return G__327346__327347.call(this,tsym327309,k);
case  3 :
return G__327346__327348.call(this,tsym327309,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327346;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__327316 = this;
if(cljs.core.truth_(((this__327316.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__327317 = cljs.core.aclone.call(null,this__327316.tail);

new_tail__327317.push(o);
return (new cljs.core.PersistentVector(this__327316.meta,(this__327316.cnt + 1),this__327316.shift,this__327316.root,new_tail__327317));
} else
{var root_overflow_QMARK___327318 = ((this__327316.cnt >> 5) > (1 << this__327316.shift));
var new_shift__327319 = (cljs.core.truth_(root_overflow_QMARK___327318)?(this__327316.shift + 5):this__327316.shift);
var new_root__327321 = (cljs.core.truth_(root_overflow_QMARK___327318)?(function (){var n_r__327320 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__327320[0] = this__327316.root);
(n_r__327320[1] = cljs.core.new_path.call(null,this__327316.shift,this__327316.tail));
return n_r__327320;
})():cljs.core.push_tail.call(null,coll,this__327316.shift,this__327316.root,this__327316.tail));

return (new cljs.core.PersistentVector(this__327316.meta,(this__327316.cnt + 1),new_shift__327319,new_root__327321,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__327350 = null;
var G__327350__327351 = (function (v,f){
var this__327322 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__327350__327352 = (function (v,f,start){
var this__327323 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__327350 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__327350__327351.call(this,v,f);
case  3 :
return G__327350__327352.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327350;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__327324 = this;
if(cljs.core.truth_((this__327324.cnt > 0)))
{var vector_seq__327325 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__327324.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__327325.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__327326 = this;
return this__327326.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__327327 = this;
if(cljs.core.truth_((this__327327.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__327327.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__327328 = this;
if(cljs.core.truth_((this__327328.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__327328.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__327328.meta);
} else
{if(cljs.core.truth_((1 < (this__327328.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__327328.meta,(this__327328.cnt - 1),this__327328.shift,this__327328.root,cljs.core.aclone.call(null,this__327328.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__327329 = cljs.core.array_for.call(null,coll,(this__327328.cnt - 2));
var nr__327330 = cljs.core.pop_tail.call(null,this__327328.shift,this__327328.root);
var new_root__327331 = (cljs.core.truth_((nr__327330 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__327330);
var cnt_1__327332 = (this__327328.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____327333 = (5 < this__327328.shift);

if(cljs.core.truth_(and__3546__auto____327333))
{return ((new_root__327331[1]) === null);
} else
{return and__3546__auto____327333;
}
})()))
{return (new cljs.core.PersistentVector(this__327328.meta,cnt_1__327332,(this__327328.shift - 5),(new_root__327331[0]),new_tail__327329));
} else
{return (new cljs.core.PersistentVector(this__327328.meta,cnt_1__327332,this__327328.shift,new_root__327331,new_tail__327329));
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
var this__327334 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__327335 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__327336 = this;
return (new cljs.core.PersistentVector(meta,this__327336.cnt,this__327336.shift,this__327336.root,this__327336.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__327337 = this;
return this__327337.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__327354 = null;
var G__327354__327355 = (function (coll,n){
var this__327338 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__327354__327356 = (function (coll,n,not_found){
var this__327339 = this;
if(cljs.core.truth_((function (){var and__3546__auto____327340 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____327340))
{return (n < this__327339.cnt);
} else
{return and__3546__auto____327340;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__327354 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__327354__327355.call(this,coll,n);
case  3 :
return G__327354__327356.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327354;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__327341 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__327341.meta);
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
vector.cljs$lang$applyTo = (function (arglist__327358){
var args = cljs.core.seq( arglist__327358 );;
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
var this__327359 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__327387 = null;
var G__327387__327388 = (function (coll,k){
var this__327360 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__327387__327389 = (function (coll,k,not_found){
var this__327361 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__327387 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__327387__327388.call(this,coll,k);
case  3 :
return G__327387__327389.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327387;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__327362 = this;
var v_pos__327363 = (this__327362.start + key);

return (new cljs.core.Subvec(this__327362.meta,cljs.core._assoc.call(null,this__327362.v,v_pos__327363,val),this__327362.start,((this__327362.end > (v_pos__327363 + 1)) ? this__327362.end : (v_pos__327363 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__327391 = null;
var G__327391__327392 = (function (tsym327364,k){
var this__327366 = this;
var tsym327364__327367 = this;

var coll__327368 = tsym327364__327367;

return cljs.core._lookup.call(null,coll__327368,k);
});
var G__327391__327393 = (function (tsym327365,k,not_found){
var this__327369 = this;
var tsym327365__327370 = this;

var coll__327371 = tsym327365__327370;

return cljs.core._lookup.call(null,coll__327371,k,not_found);
});
G__327391 = function(tsym327365,k,not_found){
switch(arguments.length){
case  2 :
return G__327391__327392.call(this,tsym327365,k);
case  3 :
return G__327391__327393.call(this,tsym327365,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327391;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__327372 = this;
return (new cljs.core.Subvec(this__327372.meta,cljs.core._assoc_n.call(null,this__327372.v,this__327372.end,o),this__327372.start,(this__327372.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__327395 = null;
var G__327395__327396 = (function (coll,f){
var this__327373 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__327395__327397 = (function (coll,f,start){
var this__327374 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__327395 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__327395__327396.call(this,coll,f);
case  3 :
return G__327395__327397.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327395;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__327375 = this;
var subvec_seq__327376 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__327375.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__327375.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__327376.call(null,this__327375.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__327377 = this;
return (this__327377.end - this__327377.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__327378 = this;
return cljs.core._nth.call(null,this__327378.v,(this__327378.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__327379 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__327379.start,this__327379.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__327379.meta,this__327379.v,this__327379.start,(this__327379.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__327380 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__327381 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__327382 = this;
return (new cljs.core.Subvec(meta,this__327382.v,this__327382.start,this__327382.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__327383 = this;
return this__327383.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__327399 = null;
var G__327399__327400 = (function (coll,n){
var this__327384 = this;
return cljs.core._nth.call(null,this__327384.v,(this__327384.start + n));
});
var G__327399__327401 = (function (coll,n,not_found){
var this__327385 = this;
return cljs.core._nth.call(null,this__327385.v,(this__327385.start + n),not_found);
});
G__327399 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__327399__327400.call(this,coll,n);
case  3 :
return G__327399__327401.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327399;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__327386 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__327386.meta);
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
var subvec__327403 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__327404 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__327403.call(this,v,start);
case  3 :
return subvec__327404.call(this,v,start,end);
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
var this__327406 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__327407 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__327408 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__327409 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__327409.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__327410 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__327411 = this;
return cljs.core._first.call(null,this__327411.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__327412 = this;
var temp__3695__auto____327413 = cljs.core.next.call(null,this__327412.front);

if(cljs.core.truth_(temp__3695__auto____327413))
{var f1__327414 = temp__3695__auto____327413;

return (new cljs.core.PersistentQueueSeq(this__327412.meta,f1__327414,this__327412.rear));
} else
{if(cljs.core.truth_((this__327412.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__327412.meta,this__327412.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__327415 = this;
return this__327415.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__327416 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__327416.front,this__327416.rear));
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
var this__327417 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__327418 = this;
if(cljs.core.truth_(this__327418.front))
{return (new cljs.core.PersistentQueue(this__327418.meta,(this__327418.count + 1),this__327418.front,cljs.core.conj.call(null,(function (){var or__3548__auto____327419 = this__327418.rear;

if(cljs.core.truth_(or__3548__auto____327419))
{return or__3548__auto____327419;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__327418.meta,(this__327418.count + 1),cljs.core.conj.call(null,this__327418.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__327420 = this;
var rear__327421 = cljs.core.seq.call(null,this__327420.rear);

if(cljs.core.truth_((function (){var or__3548__auto____327422 = this__327420.front;

if(cljs.core.truth_(or__3548__auto____327422))
{return or__3548__auto____327422;
} else
{return rear__327421;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__327420.front,cljs.core.seq.call(null,rear__327421)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__327423 = this;
return this__327423.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__327424 = this;
return cljs.core._first.call(null,this__327424.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__327425 = this;
if(cljs.core.truth_(this__327425.front))
{var temp__3695__auto____327426 = cljs.core.next.call(null,this__327425.front);

if(cljs.core.truth_(temp__3695__auto____327426))
{var f1__327427 = temp__3695__auto____327426;

return (new cljs.core.PersistentQueue(this__327425.meta,(this__327425.count - 1),f1__327427,this__327425.rear));
} else
{return (new cljs.core.PersistentQueue(this__327425.meta,(this__327425.count - 1),cljs.core.seq.call(null,this__327425.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__327428 = this;
return cljs.core.first.call(null,this__327428.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__327429 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__327430 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__327431 = this;
return (new cljs.core.PersistentQueue(meta,this__327431.count,this__327431.front,this__327431.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__327432 = this;
return this__327432.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__327433 = this;
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
var this__327434 = this;
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
var len__327435 = array.length;

var i__327436 = 0;

while(true){
if(cljs.core.truth_((i__327436 < len__327435)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__327436]))))
{return i__327436;
} else
{{
var G__327437 = (i__327436 + incr);
i__327436 = G__327437;
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
var obj_map_contains_key_QMARK___327439 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___327440 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____327438 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____327438))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____327438;
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
return obj_map_contains_key_QMARK___327439.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___327440.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__327443 = cljs.core.hash.call(null,a);
var b__327444 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__327443 < b__327444)))
{return -1;
} else
{if(cljs.core.truth_((a__327443 > b__327444)))
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
var this__327445 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__327472 = null;
var G__327472__327473 = (function (coll,k){
var this__327446 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__327472__327474 = (function (coll,k,not_found){
var this__327447 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__327447.strobj,(this__327447.strobj[k]),not_found);
});
G__327472 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__327472__327473.call(this,coll,k);
case  3 :
return G__327472__327474.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327472;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__327448 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__327449 = goog.object.clone.call(null,this__327448.strobj);
var overwrite_QMARK___327450 = new_strobj__327449.hasOwnProperty(k);

(new_strobj__327449[k] = v);
if(cljs.core.truth_(overwrite_QMARK___327450))
{return (new cljs.core.ObjMap(this__327448.meta,this__327448.keys,new_strobj__327449));
} else
{var new_keys__327451 = cljs.core.aclone.call(null,this__327448.keys);

new_keys__327451.push(k);
return (new cljs.core.ObjMap(this__327448.meta,new_keys__327451,new_strobj__327449));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__327448.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__327452 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__327452.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__327476 = null;
var G__327476__327477 = (function (tsym327453,k){
var this__327455 = this;
var tsym327453__327456 = this;

var coll__327457 = tsym327453__327456;

return cljs.core._lookup.call(null,coll__327457,k);
});
var G__327476__327478 = (function (tsym327454,k,not_found){
var this__327458 = this;
var tsym327454__327459 = this;

var coll__327460 = tsym327454__327459;

return cljs.core._lookup.call(null,coll__327460,k,not_found);
});
G__327476 = function(tsym327454,k,not_found){
switch(arguments.length){
case  2 :
return G__327476__327477.call(this,tsym327454,k);
case  3 :
return G__327476__327478.call(this,tsym327454,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327476;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__327461 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__327462 = this;
if(cljs.core.truth_((this__327462.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__327442_SHARP_){
return cljs.core.vector.call(null,p1__327442_SHARP_,(this__327462.strobj[p1__327442_SHARP_]));
}),this__327462.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__327463 = this;
return this__327463.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__327464 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__327465 = this;
return (new cljs.core.ObjMap(meta,this__327465.keys,this__327465.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__327466 = this;
return this__327466.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__327467 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__327467.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__327468 = this;
if(cljs.core.truth_((function (){var and__3546__auto____327469 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____327469))
{return this__327468.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____327469;
}
})()))
{var new_keys__327470 = cljs.core.aclone.call(null,this__327468.keys);
var new_strobj__327471 = goog.object.clone.call(null,this__327468.strobj);

new_keys__327470.splice(cljs.core.scan_array.call(null,1,k,new_keys__327470),1);
cljs.core.js_delete.call(null,new_strobj__327471,k);
return (new cljs.core.ObjMap(this__327468.meta,new_keys__327470,new_strobj__327471));
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
var this__327481 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__327519 = null;
var G__327519__327520 = (function (coll,k){
var this__327482 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__327519__327521 = (function (coll,k,not_found){
var this__327483 = this;
var bucket__327484 = (this__327483.hashobj[cljs.core.hash.call(null,k)]);
var i__327485 = (cljs.core.truth_(bucket__327484)?cljs.core.scan_array.call(null,2,k,bucket__327484):null);

if(cljs.core.truth_(i__327485))
{return (bucket__327484[(i__327485 + 1)]);
} else
{return not_found;
}
});
G__327519 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__327519__327520.call(this,coll,k);
case  3 :
return G__327519__327521.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327519;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__327486 = this;
var h__327487 = cljs.core.hash.call(null,k);
var bucket__327488 = (this__327486.hashobj[h__327487]);

if(cljs.core.truth_(bucket__327488))
{var new_bucket__327489 = cljs.core.aclone.call(null,bucket__327488);
var new_hashobj__327490 = goog.object.clone.call(null,this__327486.hashobj);

(new_hashobj__327490[h__327487] = new_bucket__327489);
var temp__3695__auto____327491 = cljs.core.scan_array.call(null,2,k,new_bucket__327489);

if(cljs.core.truth_(temp__3695__auto____327491))
{var i__327492 = temp__3695__auto____327491;

(new_bucket__327489[(i__327492 + 1)] = v);
return (new cljs.core.HashMap(this__327486.meta,this__327486.count,new_hashobj__327490));
} else
{new_bucket__327489.push(k,v);
return (new cljs.core.HashMap(this__327486.meta,(this__327486.count + 1),new_hashobj__327490));
}
} else
{var new_hashobj__327493 = goog.object.clone.call(null,this__327486.hashobj);

(new_hashobj__327493[h__327487] = [k,v]);
return (new cljs.core.HashMap(this__327486.meta,(this__327486.count + 1),new_hashobj__327493));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__327494 = this;
var bucket__327495 = (this__327494.hashobj[cljs.core.hash.call(null,k)]);
var i__327496 = (cljs.core.truth_(bucket__327495)?cljs.core.scan_array.call(null,2,k,bucket__327495):null);

if(cljs.core.truth_(i__327496))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__327523 = null;
var G__327523__327524 = (function (tsym327497,k){
var this__327499 = this;
var tsym327497__327500 = this;

var coll__327501 = tsym327497__327500;

return cljs.core._lookup.call(null,coll__327501,k);
});
var G__327523__327525 = (function (tsym327498,k,not_found){
var this__327502 = this;
var tsym327498__327503 = this;

var coll__327504 = tsym327498__327503;

return cljs.core._lookup.call(null,coll__327504,k,not_found);
});
G__327523 = function(tsym327498,k,not_found){
switch(arguments.length){
case  2 :
return G__327523__327524.call(this,tsym327498,k);
case  3 :
return G__327523__327525.call(this,tsym327498,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327523;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__327505 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__327506 = this;
if(cljs.core.truth_((this__327506.count > 0)))
{var hashes__327507 = cljs.core.js_keys.call(null,this__327506.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__327480_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__327506.hashobj[p1__327480_SHARP_])));
}),hashes__327507);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__327508 = this;
return this__327508.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__327509 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__327510 = this;
return (new cljs.core.HashMap(meta,this__327510.count,this__327510.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__327511 = this;
return this__327511.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__327512 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__327512.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__327513 = this;
var h__327514 = cljs.core.hash.call(null,k);
var bucket__327515 = (this__327513.hashobj[h__327514]);
var i__327516 = (cljs.core.truth_(bucket__327515)?cljs.core.scan_array.call(null,2,k,bucket__327515):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__327516)))
{return coll;
} else
{var new_hashobj__327517 = goog.object.clone.call(null,this__327513.hashobj);

if(cljs.core.truth_((3 > bucket__327515.length)))
{cljs.core.js_delete.call(null,new_hashobj__327517,h__327514);
} else
{var new_bucket__327518 = cljs.core.aclone.call(null,bucket__327515);

new_bucket__327518.splice(i__327516,2);
(new_hashobj__327517[h__327514] = new_bucket__327518);
}
return (new cljs.core.HashMap(this__327513.meta,(this__327513.count - 1),new_hashobj__327517));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__327527 = ks.length;

var i__327528 = 0;
var out__327529 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__327528 < len__327527)))
{{
var G__327530 = (i__327528 + 1);
var G__327531 = cljs.core.assoc.call(null,out__327529,(ks[i__327528]),(vs[i__327528]));
i__327528 = G__327530;
out__327529 = G__327531;
continue;
}
} else
{return out__327529;
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
var in$__327532 = cljs.core.seq.call(null,keyvals);
var out__327533 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__327532))
{{
var G__327534 = cljs.core.nnext.call(null,in$__327532);
var G__327535 = cljs.core.assoc.call(null,out__327533,cljs.core.first.call(null,in$__327532),cljs.core.second.call(null,in$__327532));
in$__327532 = G__327534;
out__327533 = G__327535;
continue;
}
} else
{return out__327533;
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
hash_map.cljs$lang$applyTo = (function (arglist__327536){
var keyvals = cljs.core.seq( arglist__327536 );;
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
{return cljs.core.reduce.call(null,(function (p1__327537_SHARP_,p2__327538_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____327539 = p1__327537_SHARP_;

if(cljs.core.truth_(or__3548__auto____327539))
{return or__3548__auto____327539;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__327538_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__327540){
var maps = cljs.core.seq( arglist__327540 );;
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
{var merge_entry__327543 = (function (m,e){
var k__327541 = cljs.core.first.call(null,e);
var v__327542 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__327541)))
{return cljs.core.assoc.call(null,m,k__327541,f.call(null,cljs.core.get.call(null,m,k__327541),v__327542));
} else
{return cljs.core.assoc.call(null,m,k__327541,v__327542);
}
});
var merge2__327545 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__327543,(function (){var or__3548__auto____327544 = m1;

if(cljs.core.truth_(or__3548__auto____327544))
{return or__3548__auto____327544;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__327545,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__327546){
var f = cljs.core.first(arglist__327546);
var maps = cljs.core.rest(arglist__327546);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__327548 = cljs.core.ObjMap.fromObject([],{});
var keys__327549 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__327549))
{var key__327550 = cljs.core.first.call(null,keys__327549);
var entry__327551 = cljs.core.get.call(null,map,key__327550,"\uFDD0'user/not-found");

{
var G__327552 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__327551,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__327548,key__327550,entry__327551):ret__327548);
var G__327553 = cljs.core.next.call(null,keys__327549);
ret__327548 = G__327552;
keys__327549 = G__327553;
continue;
}
} else
{return ret__327548;
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
var this__327554 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__327575 = null;
var G__327575__327576 = (function (coll,v){
var this__327555 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__327575__327577 = (function (coll,v,not_found){
var this__327556 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__327556.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__327575 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__327575__327576.call(this,coll,v);
case  3 :
return G__327575__327577.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327575;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__327579 = null;
var G__327579__327580 = (function (tsym327557,k){
var this__327559 = this;
var tsym327557__327560 = this;

var coll__327561 = tsym327557__327560;

return cljs.core._lookup.call(null,coll__327561,k);
});
var G__327579__327581 = (function (tsym327558,k,not_found){
var this__327562 = this;
var tsym327558__327563 = this;

var coll__327564 = tsym327558__327563;

return cljs.core._lookup.call(null,coll__327564,k,not_found);
});
G__327579 = function(tsym327558,k,not_found){
switch(arguments.length){
case  2 :
return G__327579__327580.call(this,tsym327558,k);
case  3 :
return G__327579__327581.call(this,tsym327558,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327579;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__327565 = this;
return (new cljs.core.Set(this__327565.meta,cljs.core.assoc.call(null,this__327565.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__327566 = this;
return cljs.core.keys.call(null,this__327566.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__327567 = this;
return (new cljs.core.Set(this__327567.meta,cljs.core.dissoc.call(null,this__327567.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__327568 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__327569 = this;
var and__3546__auto____327570 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____327570))
{var and__3546__auto____327571 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____327571))
{return cljs.core.every_QMARK_.call(null,(function (p1__327547_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__327547_SHARP_);
}),other);
} else
{return and__3546__auto____327571;
}
} else
{return and__3546__auto____327570;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__327572 = this;
return (new cljs.core.Set(meta,this__327572.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__327573 = this;
return this__327573.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__327574 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__327574.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__327584 = cljs.core.seq.call(null,coll);
var out__327585 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__327584))))
{{
var G__327586 = cljs.core.rest.call(null,in$__327584);
var G__327587 = cljs.core.conj.call(null,out__327585,cljs.core.first.call(null,in$__327584));
in$__327584 = G__327586;
out__327585 = G__327587;
continue;
}
} else
{return out__327585;
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
{var n__327588 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____327589 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____327589))
{var e__327590 = temp__3695__auto____327589;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__327590));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__327588,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__327583_SHARP_){
var temp__3695__auto____327591 = cljs.core.find.call(null,smap,p1__327583_SHARP_);

if(cljs.core.truth_(temp__3695__auto____327591))
{var e__327592 = temp__3695__auto____327591;

return cljs.core.second.call(null,e__327592);
} else
{return p1__327583_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__327600 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__327593,seen){
while(true){
var vec__327594__327595 = p__327593;
var f__327596 = cljs.core.nth.call(null,vec__327594__327595,0,null);
var xs__327597 = vec__327594__327595;

var temp__3698__auto____327598 = cljs.core.seq.call(null,xs__327597);

if(cljs.core.truth_(temp__3698__auto____327598))
{var s__327599 = temp__3698__auto____327598;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__327596)))
{{
var G__327601 = cljs.core.rest.call(null,s__327599);
var G__327602 = seen;
p__327593 = G__327601;
seen = G__327602;
continue;
}
} else
{return cljs.core.cons.call(null,f__327596,step.call(null,cljs.core.rest.call(null,s__327599),cljs.core.conj.call(null,seen,f__327596)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__327600.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__327603 = cljs.core.PersistentVector.fromArray([]);
var s__327604 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__327604)))
{{
var G__327605 = cljs.core.conj.call(null,ret__327603,cljs.core.first.call(null,s__327604));
var G__327606 = cljs.core.next.call(null,s__327604);
ret__327603 = G__327605;
s__327604 = G__327606;
continue;
}
} else
{return cljs.core.seq.call(null,ret__327603);
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
{if(cljs.core.truth_((function (){var or__3548__auto____327607 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____327607))
{return or__3548__auto____327607;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__327608 = x.lastIndexOf("/");

if(cljs.core.truth_((i__327608 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__327608 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____327609 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____327609))
{return or__3548__auto____327609;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__327610 = x.lastIndexOf("/");

if(cljs.core.truth_((i__327610 > -1)))
{return cljs.core.subs.call(null,x,2,i__327610);
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
var map__327613 = cljs.core.ObjMap.fromObject([],{});
var ks__327614 = cljs.core.seq.call(null,keys);
var vs__327615 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____327616 = ks__327614;

if(cljs.core.truth_(and__3546__auto____327616))
{return vs__327615;
} else
{return and__3546__auto____327616;
}
})()))
{{
var G__327617 = cljs.core.assoc.call(null,map__327613,cljs.core.first.call(null,ks__327614),cljs.core.first.call(null,vs__327615));
var G__327618 = cljs.core.next.call(null,ks__327614);
var G__327619 = cljs.core.next.call(null,vs__327615);
map__327613 = G__327617;
ks__327614 = G__327618;
vs__327615 = G__327619;
continue;
}
} else
{return map__327613;
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
var max_key__327622 = (function (k,x){
return x;
});
var max_key__327623 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__327624 = (function() { 
var G__327626__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__327611_SHARP_,p2__327612_SHARP_){
return max_key.call(null,k,p1__327611_SHARP_,p2__327612_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__327626 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327626__delegate.call(this, k, x, y, more);
};
G__327626.cljs$lang$maxFixedArity = 3;
G__327626.cljs$lang$applyTo = (function (arglist__327627){
var k = cljs.core.first(arglist__327627);
var x = cljs.core.first(cljs.core.next(arglist__327627));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327627)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327627)));
return G__327626__delegate.call(this, k, x, y, more);
});
return G__327626;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__327622.call(this,k,x);
case  3 :
return max_key__327623.call(this,k,x,y);
default:
return max_key__327624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__327624.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__327628 = (function (k,x){
return x;
});
var min_key__327629 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__327630 = (function() { 
var G__327632__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__327620_SHARP_,p2__327621_SHARP_){
return min_key.call(null,k,p1__327620_SHARP_,p2__327621_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__327632 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327632__delegate.call(this, k, x, y, more);
};
G__327632.cljs$lang$maxFixedArity = 3;
G__327632.cljs$lang$applyTo = (function (arglist__327633){
var k = cljs.core.first(arglist__327633);
var x = cljs.core.first(cljs.core.next(arglist__327633));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327633)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327633)));
return G__327632__delegate.call(this, k, x, y, more);
});
return G__327632;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__327628.call(this,k,x);
case  3 :
return min_key__327629.call(this,k,x,y);
default:
return min_key__327630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__327630.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__327636 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__327637 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____327634 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____327634))
{var s__327635 = temp__3698__auto____327634;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__327635),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__327635)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__327636.call(this,n,step);
case  3 :
return partition_all__327637.call(this,n,step,coll);
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
var temp__3698__auto____327639 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____327639))
{var s__327640 = temp__3698__auto____327639;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__327640))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__327640),take_while.call(null,pred,cljs.core.rest.call(null,s__327640)));
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
var this__327641 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__327642 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__327658 = null;
var G__327658__327659 = (function (rng,f){
var this__327643 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__327658__327660 = (function (rng,f,s){
var this__327644 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__327658 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__327658__327659.call(this,rng,f);
case  3 :
return G__327658__327660.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327658;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__327645 = this;
var comp__327646 = (cljs.core.truth_((this__327645.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__327646.call(null,this__327645.start,this__327645.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__327647 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__327647.end - this__327647.start) / this__327647.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__327648 = this;
return this__327648.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__327649 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__327649.meta,(this__327649.start + this__327649.step),this__327649.end,this__327649.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__327650 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__327651 = this;
return (new cljs.core.Range(meta,this__327651.start,this__327651.end,this__327651.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__327652 = this;
return this__327652.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__327662 = null;
var G__327662__327663 = (function (rng,n){
var this__327653 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__327653.start + (n * this__327653.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____327654 = (this__327653.start > this__327653.end);

if(cljs.core.truth_(and__3546__auto____327654))
{return cljs.core._EQ_.call(null,this__327653.step,0);
} else
{return and__3546__auto____327654;
}
})()))
{return this__327653.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__327662__327664 = (function (rng,n,not_found){
var this__327655 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__327655.start + (n * this__327655.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____327656 = (this__327655.start > this__327655.end);

if(cljs.core.truth_(and__3546__auto____327656))
{return cljs.core._EQ_.call(null,this__327655.step,0);
} else
{return and__3546__auto____327656;
}
})()))
{return this__327655.start;
} else
{return not_found;
}
}
});
G__327662 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__327662__327663.call(this,rng,n);
case  3 :
return G__327662__327664.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__327662;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__327657 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__327657.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__327666 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__327667 = (function (end){
return range.call(null,0,end,1);
});
var range__327668 = (function (start,end){
return range.call(null,start,end,1);
});
var range__327669 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__327666.call(this);
case  1 :
return range__327667.call(this,start);
case  2 :
return range__327668.call(this,start,end);
case  3 :
return range__327669.call(this,start,end,step);
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
var temp__3698__auto____327671 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____327671))
{var s__327672 = temp__3698__auto____327671;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__327672),take_nth.call(null,n,cljs.core.drop.call(null,n,s__327672)));
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
var temp__3698__auto____327674 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____327674))
{var s__327675 = temp__3698__auto____327674;

var fst__327676 = cljs.core.first.call(null,s__327675);
var fv__327677 = f.call(null,fst__327676);
var run__327678 = cljs.core.cons.call(null,fst__327676,cljs.core.take_while.call(null,(function (p1__327673_SHARP_){
return cljs.core._EQ_.call(null,fv__327677,f.call(null,p1__327673_SHARP_));
}),cljs.core.next.call(null,s__327675)));

return cljs.core.cons.call(null,run__327678,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__327678),s__327675))));
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
var reductions__327693 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____327689 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____327689))
{var s__327690 = temp__3695__auto____327689;

return reductions.call(null,f,cljs.core.first.call(null,s__327690),cljs.core.rest.call(null,s__327690));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__327694 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____327691 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____327691))
{var s__327692 = temp__3698__auto____327691;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__327692)),cljs.core.rest.call(null,s__327692));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__327693.call(this,f,init);
case  3 :
return reductions__327694.call(this,f,init,coll);
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
var juxt__327697 = (function (f){
return (function() {
var G__327702 = null;
var G__327702__327703 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__327702__327704 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__327702__327705 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__327702__327706 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__327702__327707 = (function() { 
var G__327709__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__327709 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327709__delegate.call(this, x, y, z, args);
};
G__327709.cljs$lang$maxFixedArity = 3;
G__327709.cljs$lang$applyTo = (function (arglist__327710){
var x = cljs.core.first(arglist__327710);
var y = cljs.core.first(cljs.core.next(arglist__327710));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327710)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327710)));
return G__327709__delegate.call(this, x, y, z, args);
});
return G__327709;
})()
;
G__327702 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__327702__327703.call(this);
case  1 :
return G__327702__327704.call(this,x);
case  2 :
return G__327702__327705.call(this,x,y);
case  3 :
return G__327702__327706.call(this,x,y,z);
default:
return G__327702__327707.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__327702.cljs$lang$maxFixedArity = 3;
G__327702.cljs$lang$applyTo = G__327702__327707.cljs$lang$applyTo;
return G__327702;
})()
});
var juxt__327698 = (function (f,g){
return (function() {
var G__327711 = null;
var G__327711__327712 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__327711__327713 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__327711__327714 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__327711__327715 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__327711__327716 = (function() { 
var G__327718__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__327718 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327718__delegate.call(this, x, y, z, args);
};
G__327718.cljs$lang$maxFixedArity = 3;
G__327718.cljs$lang$applyTo = (function (arglist__327719){
var x = cljs.core.first(arglist__327719);
var y = cljs.core.first(cljs.core.next(arglist__327719));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327719)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327719)));
return G__327718__delegate.call(this, x, y, z, args);
});
return G__327718;
})()
;
G__327711 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__327711__327712.call(this);
case  1 :
return G__327711__327713.call(this,x);
case  2 :
return G__327711__327714.call(this,x,y);
case  3 :
return G__327711__327715.call(this,x,y,z);
default:
return G__327711__327716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__327711.cljs$lang$maxFixedArity = 3;
G__327711.cljs$lang$applyTo = G__327711__327716.cljs$lang$applyTo;
return G__327711;
})()
});
var juxt__327699 = (function (f,g,h){
return (function() {
var G__327720 = null;
var G__327720__327721 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__327720__327722 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__327720__327723 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__327720__327724 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__327720__327725 = (function() { 
var G__327727__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__327727 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327727__delegate.call(this, x, y, z, args);
};
G__327727.cljs$lang$maxFixedArity = 3;
G__327727.cljs$lang$applyTo = (function (arglist__327728){
var x = cljs.core.first(arglist__327728);
var y = cljs.core.first(cljs.core.next(arglist__327728));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327728)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327728)));
return G__327727__delegate.call(this, x, y, z, args);
});
return G__327727;
})()
;
G__327720 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__327720__327721.call(this);
case  1 :
return G__327720__327722.call(this,x);
case  2 :
return G__327720__327723.call(this,x,y);
case  3 :
return G__327720__327724.call(this,x,y,z);
default:
return G__327720__327725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__327720.cljs$lang$maxFixedArity = 3;
G__327720.cljs$lang$applyTo = G__327720__327725.cljs$lang$applyTo;
return G__327720;
})()
});
var juxt__327700 = (function() { 
var G__327729__delegate = function (f,g,h,fs){
var fs__327696 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__327730 = null;
var G__327730__327731 = (function (){
return cljs.core.reduce.call(null,(function (p1__327679_SHARP_,p2__327680_SHARP_){
return cljs.core.conj.call(null,p1__327679_SHARP_,p2__327680_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__327696);
});
var G__327730__327732 = (function (x){
return cljs.core.reduce.call(null,(function (p1__327681_SHARP_,p2__327682_SHARP_){
return cljs.core.conj.call(null,p1__327681_SHARP_,p2__327682_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__327696);
});
var G__327730__327733 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__327683_SHARP_,p2__327684_SHARP_){
return cljs.core.conj.call(null,p1__327683_SHARP_,p2__327684_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__327696);
});
var G__327730__327734 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__327685_SHARP_,p2__327686_SHARP_){
return cljs.core.conj.call(null,p1__327685_SHARP_,p2__327686_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__327696);
});
var G__327730__327735 = (function() { 
var G__327737__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__327687_SHARP_,p2__327688_SHARP_){
return cljs.core.conj.call(null,p1__327687_SHARP_,cljs.core.apply.call(null,p2__327688_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__327696);
};
var G__327737 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327737__delegate.call(this, x, y, z, args);
};
G__327737.cljs$lang$maxFixedArity = 3;
G__327737.cljs$lang$applyTo = (function (arglist__327738){
var x = cljs.core.first(arglist__327738);
var y = cljs.core.first(cljs.core.next(arglist__327738));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327738)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327738)));
return G__327737__delegate.call(this, x, y, z, args);
});
return G__327737;
})()
;
G__327730 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__327730__327731.call(this);
case  1 :
return G__327730__327732.call(this,x);
case  2 :
return G__327730__327733.call(this,x,y);
case  3 :
return G__327730__327734.call(this,x,y,z);
default:
return G__327730__327735.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__327730.cljs$lang$maxFixedArity = 3;
G__327730.cljs$lang$applyTo = G__327730__327735.cljs$lang$applyTo;
return G__327730;
})()
};
var G__327729 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__327729__delegate.call(this, f, g, h, fs);
};
G__327729.cljs$lang$maxFixedArity = 3;
G__327729.cljs$lang$applyTo = (function (arglist__327739){
var f = cljs.core.first(arglist__327739);
var g = cljs.core.first(cljs.core.next(arglist__327739));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327739)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__327739)));
return G__327729__delegate.call(this, f, g, h, fs);
});
return G__327729;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__327697.call(this,f);
case  2 :
return juxt__327698.call(this,f,g);
case  3 :
return juxt__327699.call(this,f,g,h);
default:
return juxt__327700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__327700.cljs$lang$applyTo;
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
var dorun__327741 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__327744 = cljs.core.next.call(null,coll);
coll = G__327744;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__327742 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____327740 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____327740))
{return (n > 0);
} else
{return and__3546__auto____327740;
}
})()))
{{
var G__327745 = (n - 1);
var G__327746 = cljs.core.next.call(null,coll);
n = G__327745;
coll = G__327746;
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
return dorun__327741.call(this,n);
case  2 :
return dorun__327742.call(this,n,coll);
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
var doall__327747 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__327748 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__327747.call(this,n);
case  2 :
return doall__327748.call(this,n,coll);
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
var matches__327750 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__327750),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__327750),1)))
{return cljs.core.first.call(null,matches__327750);
} else
{return cljs.core.vec.call(null,matches__327750);
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
var matches__327751 = re.exec(s);

if(cljs.core.truth_((matches__327751 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__327751),1)))
{return cljs.core.first.call(null,matches__327751);
} else
{return cljs.core.vec.call(null,matches__327751);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__327752 = cljs.core.re_find.call(null,re,s);
var match_idx__327753 = s.search(re);
var match_str__327754 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__327752))?cljs.core.first.call(null,match_data__327752):match_data__327752);
var post_match__327755 = cljs.core.subs.call(null,s,(match_idx__327753 + cljs.core.count.call(null,match_str__327754)));

if(cljs.core.truth_(match_data__327752))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__327752,re_seq.call(null,re,post_match__327755));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__327757__327758 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___327759 = cljs.core.nth.call(null,vec__327757__327758,0,null);
var flags__327760 = cljs.core.nth.call(null,vec__327757__327758,1,null);
var pattern__327761 = cljs.core.nth.call(null,vec__327757__327758,2,null);

return (new RegExp(pattern__327761,flags__327760));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__327756_SHARP_){
return print_one.call(null,p1__327756_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____327762 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____327762))
{var and__3546__auto____327766 = (function (){var x__451__auto____327763 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____327764 = x__451__auto____327763;

if(cljs.core.truth_(and__3546__auto____327764))
{var and__3546__auto____327765 = x__451__auto____327763.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____327765))
{return cljs.core.not.call(null,x__451__auto____327763.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____327765;
}
} else
{return and__3546__auto____327764;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____327763);
}
})();

if(cljs.core.truth_(and__3546__auto____327766))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____327766;
}
} else
{return and__3546__auto____327762;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____327767 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____327768 = x__451__auto____327767;

if(cljs.core.truth_(and__3546__auto____327768))
{var and__3546__auto____327769 = x__451__auto____327767.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____327769))
{return cljs.core.not.call(null,x__451__auto____327767.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____327769;
}
} else
{return and__3546__auto____327768;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____327767);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__327770 = cljs.core.first.call(null,objs);
var sb__327771 = (new goog.string.StringBuffer());

var G__327772__327773 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__327772__327773))
{var obj__327774 = cljs.core.first.call(null,G__327772__327773);
var G__327772__327775 = G__327772__327773;

while(true){
if(cljs.core.truth_((obj__327774 === first_obj__327770)))
{} else
{sb__327771.append(" ");
}
var G__327776__327777 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__327774,opts));

if(cljs.core.truth_(G__327776__327777))
{var string__327778 = cljs.core.first.call(null,G__327776__327777);
var G__327776__327779 = G__327776__327777;

while(true){
sb__327771.append(string__327778);
var temp__3698__auto____327780 = cljs.core.next.call(null,G__327776__327779);

if(cljs.core.truth_(temp__3698__auto____327780))
{var G__327776__327781 = temp__3698__auto____327780;

{
var G__327784 = cljs.core.first.call(null,G__327776__327781);
var G__327785 = G__327776__327781;
string__327778 = G__327784;
G__327776__327779 = G__327785;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____327782 = cljs.core.next.call(null,G__327772__327775);

if(cljs.core.truth_(temp__3698__auto____327782))
{var G__327772__327783 = temp__3698__auto____327782;

{
var G__327786 = cljs.core.first.call(null,G__327772__327783);
var G__327787 = G__327772__327783;
obj__327774 = G__327786;
G__327772__327775 = G__327787;
continue;
}
} else
{}
break;
}
} else
{}
return sb__327771;
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
var sb__327788 = cljs.core.pr_sb.call(null,objs,opts);

sb__327788.append("\n");
return cljs.core.str.call(null,sb__327788);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__327789 = cljs.core.first.call(null,objs);

var G__327790__327791 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__327790__327791))
{var obj__327792 = cljs.core.first.call(null,G__327790__327791);
var G__327790__327793 = G__327790__327791;

while(true){
if(cljs.core.truth_((obj__327792 === first_obj__327789)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__327794__327795 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__327792,opts));

if(cljs.core.truth_(G__327794__327795))
{var string__327796 = cljs.core.first.call(null,G__327794__327795);
var G__327794__327797 = G__327794__327795;

while(true){
cljs.core.string_print.call(null,string__327796);
var temp__3698__auto____327798 = cljs.core.next.call(null,G__327794__327797);

if(cljs.core.truth_(temp__3698__auto____327798))
{var G__327794__327799 = temp__3698__auto____327798;

{
var G__327802 = cljs.core.first.call(null,G__327794__327799);
var G__327803 = G__327794__327799;
string__327796 = G__327802;
G__327794__327797 = G__327803;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____327800 = cljs.core.next.call(null,G__327790__327793);

if(cljs.core.truth_(temp__3698__auto____327800))
{var G__327790__327801 = temp__3698__auto____327800;

{
var G__327804 = cljs.core.first.call(null,G__327790__327801);
var G__327805 = G__327790__327801;
obj__327792 = G__327804;
G__327790__327793 = G__327805;
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
pr_str.cljs$lang$applyTo = (function (arglist__327806){
var objs = cljs.core.seq( arglist__327806 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__327807){
var objs = cljs.core.seq( arglist__327807 );;
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
pr.cljs$lang$applyTo = (function (arglist__327808){
var objs = cljs.core.seq( arglist__327808 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__327809){
var objs = cljs.core.seq( arglist__327809 );;
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
print_str.cljs$lang$applyTo = (function (arglist__327810){
var objs = cljs.core.seq( arglist__327810 );;
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
println.cljs$lang$applyTo = (function (arglist__327811){
var objs = cljs.core.seq( arglist__327811 );;
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
println_str.cljs$lang$applyTo = (function (arglist__327812){
var objs = cljs.core.seq( arglist__327812 );;
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
prn.cljs$lang$applyTo = (function (arglist__327813){
var objs = cljs.core.seq( arglist__327813 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__327814 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__327814,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____327815 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____327815))
{var nspc__327816 = temp__3698__auto____327815;

return cljs.core.str.call(null,nspc__327816,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____327817 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____327817))
{var nspc__327818 = temp__3698__auto____327817;

return cljs.core.str.call(null,nspc__327818,"/");
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
var pr_pair__327819 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__327819,"{",", ","}",opts,coll);
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
var this__327820 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__327821 = this;
var G__327822__327823 = cljs.core.seq.call(null,this__327821.watches);

if(cljs.core.truth_(G__327822__327823))
{var G__327825__327827 = cljs.core.first.call(null,G__327822__327823);
var vec__327826__327828 = G__327825__327827;
var key__327829 = cljs.core.nth.call(null,vec__327826__327828,0,null);
var f__327830 = cljs.core.nth.call(null,vec__327826__327828,1,null);
var G__327822__327831 = G__327822__327823;

var G__327825__327832 = G__327825__327827;
var G__327822__327833 = G__327822__327831;

while(true){
var vec__327834__327835 = G__327825__327832;
var key__327836 = cljs.core.nth.call(null,vec__327834__327835,0,null);
var f__327837 = cljs.core.nth.call(null,vec__327834__327835,1,null);
var G__327822__327838 = G__327822__327833;

f__327837.call(null,key__327836,this$,oldval,newval);
var temp__3698__auto____327839 = cljs.core.next.call(null,G__327822__327838);

if(cljs.core.truth_(temp__3698__auto____327839))
{var G__327822__327840 = temp__3698__auto____327839;

{
var G__327847 = cljs.core.first.call(null,G__327822__327840);
var G__327848 = G__327822__327840;
G__327825__327832 = G__327847;
G__327822__327833 = G__327848;
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
var this__327841 = this;
return this$.watches = cljs.core.assoc.call(null,this__327841.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__327842 = this;
return this$.watches = cljs.core.dissoc.call(null,this__327842.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__327843 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__327843.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__327844 = this;
return this__327844.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__327845 = this;
return this__327845.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__327846 = this;
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
var atom__327855 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__327856 = (function() { 
var G__327858__delegate = function (x,p__327849){
var map__327850__327851 = p__327849;
var map__327850__327852 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__327850__327851))?cljs.core.apply.call(null,cljs.core.hash_map,map__327850__327851):map__327850__327851);
var validator__327853 = cljs.core.get.call(null,map__327850__327852,"\uFDD0'validator");
var meta__327854 = cljs.core.get.call(null,map__327850__327852,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__327854,validator__327853,null));
};
var G__327858 = function (x,var_args){
var p__327849 = null;
if (goog.isDef(var_args)) {
  p__327849 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__327858__delegate.call(this, x, p__327849);
};
G__327858.cljs$lang$maxFixedArity = 1;
G__327858.cljs$lang$applyTo = (function (arglist__327859){
var x = cljs.core.first(arglist__327859);
var p__327849 = cljs.core.rest(arglist__327859);
return G__327858__delegate.call(this, x, p__327849);
});
return G__327858;
})()
;
atom = function(x,var_args){
var p__327849 = var_args;
switch(arguments.length){
case  1 :
return atom__327855.call(this,x);
default:
return atom__327856.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__327856.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____327860 = a.validator;

if(cljs.core.truth_(temp__3698__auto____327860))
{var validate__327861 = temp__3698__auto____327860;

if(cljs.core.truth_(validate__327861.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__327862 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__327862,new_value);
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
var swap_BANG___327863 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___327864 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___327865 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___327866 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___327867 = (function() { 
var G__327869__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__327869 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__327869__delegate.call(this, a, f, x, y, z, more);
};
G__327869.cljs$lang$maxFixedArity = 5;
G__327869.cljs$lang$applyTo = (function (arglist__327870){
var a = cljs.core.first(arglist__327870);
var f = cljs.core.first(cljs.core.next(arglist__327870));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__327870)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__327870))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__327870)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__327870)))));
return G__327869__delegate.call(this, a, f, x, y, z, more);
});
return G__327869;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___327863.call(this,a,f);
case  3 :
return swap_BANG___327864.call(this,a,f,x);
case  4 :
return swap_BANG___327865.call(this,a,f,x,y);
case  5 :
return swap_BANG___327866.call(this,a,f,x,y,z);
default:
return swap_BANG___327867.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___327867.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__327871){
var iref = cljs.core.first(arglist__327871);
var f = cljs.core.first(cljs.core.next(arglist__327871));
var args = cljs.core.rest(cljs.core.next(arglist__327871));
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
var gensym__327872 = (function (){
return gensym.call(null,"G__");
});
var gensym__327873 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__327872.call(this);
case  1 :
return gensym__327873.call(this,prefix_string);
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
var this__327875 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__327875.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__327876 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__327876.state,(function (p__327877){
var curr_state__327878 = p__327877;
var curr_state__327879 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__327878))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__327878):curr_state__327878);
var done__327880 = cljs.core.get.call(null,curr_state__327879,"\uFDD0'done");

if(cljs.core.truth_(done__327880))
{return curr_state__327879;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__327876.f.call(null)});
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
var map__327881__327882 = options;
var map__327881__327883 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__327881__327882))?cljs.core.apply.call(null,cljs.core.hash_map,map__327881__327882):map__327881__327882);
var keywordize_keys__327884 = cljs.core.get.call(null,map__327881__327883,"\uFDD0'keywordize-keys");
var keyfn__327885 = (cljs.core.truth_(keywordize_keys__327884)?cljs.core.keyword:cljs.core.str);
var f__327891 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____327890 = (function iter__327886(s__327887){
return (new cljs.core.LazySeq(null,false,(function (){
var s__327887__327888 = s__327887;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__327887__327888)))
{var k__327889 = cljs.core.first.call(null,s__327887__327888);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__327885.call(null,k__327889),thisfn.call(null,(x[k__327889]))]),iter__327886.call(null,cljs.core.rest.call(null,s__327887__327888)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____327890.call(null,cljs.core.js_keys.call(null,x));
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

return f__327891.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__327892){
var x = cljs.core.first(arglist__327892);
var options = cljs.core.rest(arglist__327892);
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
var mem__327893 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__327897__delegate = function (args){
var temp__3695__auto____327894 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__327893),args);

if(cljs.core.truth_(temp__3695__auto____327894))
{var v__327895 = temp__3695__auto____327894;

return v__327895;
} else
{var ret__327896 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__327893,cljs.core.assoc,args,ret__327896);
return ret__327896;
}
};
var G__327897 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__327897__delegate.call(this, args);
};
G__327897.cljs$lang$maxFixedArity = 0;
G__327897.cljs$lang$applyTo = (function (arglist__327898){
var args = cljs.core.seq( arglist__327898 );;
return G__327897__delegate.call(this, args);
});
return G__327897;
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
var trampoline__327900 = (function (f){
while(true){
var ret__327899 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__327899)))
{{
var G__327903 = ret__327899;
f = G__327903;
continue;
}
} else
{return ret__327899;
}
break;
}
});
var trampoline__327901 = (function() { 
var G__327904__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__327904 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__327904__delegate.call(this, f, args);
};
G__327904.cljs$lang$maxFixedArity = 1;
G__327904.cljs$lang$applyTo = (function (arglist__327905){
var f = cljs.core.first(arglist__327905);
var args = cljs.core.rest(arglist__327905);
return G__327904__delegate.call(this, f, args);
});
return G__327904;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__327900.call(this,f);
default:
return trampoline__327901.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__327901.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__327906 = (function (){
return rand.call(null,1);
});
var rand__327907 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__327906.call(this);
case  1 :
return rand__327907.call(this,n);
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
var k__327909 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__327909,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__327909,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___327918 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___327919 = (function (h,child,parent){
var or__3548__auto____327910 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____327910))
{return or__3548__auto____327910;
} else
{var or__3548__auto____327911 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____327911))
{return or__3548__auto____327911;
} else
{var and__3546__auto____327912 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____327912))
{var and__3546__auto____327913 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____327913))
{var and__3546__auto____327914 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____327914))
{var ret__327915 = true;
var i__327916 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____327917 = cljs.core.not.call(null,ret__327915);

if(cljs.core.truth_(or__3548__auto____327917))
{return or__3548__auto____327917;
} else
{return cljs.core._EQ_.call(null,i__327916,cljs.core.count.call(null,parent));
}
})()))
{return ret__327915;
} else
{{
var G__327921 = isa_QMARK_.call(null,h,child.call(null,i__327916),parent.call(null,i__327916));
var G__327922 = (i__327916 + 1);
ret__327915 = G__327921;
i__327916 = G__327922;
continue;
}
}
break;
}
} else
{return and__3546__auto____327914;
}
} else
{return and__3546__auto____327913;
}
} else
{return and__3546__auto____327912;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___327918.call(this,h,child);
case  3 :
return isa_QMARK___327919.call(this,h,child,parent);
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
var parents__327923 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__327924 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__327923.call(this,h);
case  2 :
return parents__327924.call(this,h,tag);
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
var ancestors__327926 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__327927 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__327926.call(this,h);
case  2 :
return ancestors__327927.call(this,h,tag);
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
var descendants__327929 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__327930 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__327929.call(this,h);
case  2 :
return descendants__327930.call(this,h,tag);
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
var derive__327940 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__327941 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__327935 = "\uFDD0'parents".call(null,h);
var td__327936 = "\uFDD0'descendants".call(null,h);
var ta__327937 = "\uFDD0'ancestors".call(null,h);
var tf__327938 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____327939 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__327935.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__327937.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__327937.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__327935,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__327938.call(null,"\uFDD0'ancestors".call(null,h),tag,td__327936,parent,ta__327937),"\uFDD0'descendants":tf__327938.call(null,"\uFDD0'descendants".call(null,h),parent,ta__327937,tag,td__327936)});
})());

if(cljs.core.truth_(or__3548__auto____327939))
{return or__3548__auto____327939;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__327940.call(this,h,tag);
case  3 :
return derive__327941.call(this,h,tag,parent);
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
var underive__327947 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__327948 = (function (h,tag,parent){
var parentMap__327943 = "\uFDD0'parents".call(null,h);
var childsParents__327944 = (cljs.core.truth_(parentMap__327943.call(null,tag))?cljs.core.disj.call(null,parentMap__327943.call(null,tag),parent):cljs.core.set([]));
var newParents__327945 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__327944))?cljs.core.assoc.call(null,parentMap__327943,tag,childsParents__327944):cljs.core.dissoc.call(null,parentMap__327943,tag));
var deriv_seq__327946 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__327932_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__327932_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__327932_SHARP_),cljs.core.second.call(null,p1__327932_SHARP_)));
}),cljs.core.seq.call(null,newParents__327945)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__327943.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__327933_SHARP_,p2__327934_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__327933_SHARP_,p2__327934_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__327946));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__327947.call(this,h,tag);
case  3 :
return underive__327948.call(this,h,tag,parent);
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
var xprefs__327950 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____327952 = (cljs.core.truth_((function (){var and__3546__auto____327951 = xprefs__327950;

if(cljs.core.truth_(and__3546__auto____327951))
{return xprefs__327950.call(null,y);
} else
{return and__3546__auto____327951;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____327952))
{return or__3548__auto____327952;
} else
{var or__3548__auto____327954 = (function (){var ps__327953 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__327953) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__327953),prefer_table)))
{} else
{}
{
var G__327957 = cljs.core.rest.call(null,ps__327953);
ps__327953 = G__327957;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____327954))
{return or__3548__auto____327954;
} else
{var or__3548__auto____327956 = (function (){var ps__327955 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__327955) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__327955),y,prefer_table)))
{} else
{}
{
var G__327958 = cljs.core.rest.call(null,ps__327955);
ps__327955 = G__327958;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____327956))
{return or__3548__auto____327956;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____327959 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____327959))
{return or__3548__auto____327959;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__327968 = cljs.core.reduce.call(null,(function (be,p__327960){
var vec__327961__327962 = p__327960;
var k__327963 = cljs.core.nth.call(null,vec__327961__327962,0,null);
var ___327964 = cljs.core.nth.call(null,vec__327961__327962,1,null);
var e__327965 = vec__327961__327962;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__327963)))
{var be2__327967 = (cljs.core.truth_((function (){var or__3548__auto____327966 = (be === null);

if(cljs.core.truth_(or__3548__auto____327966))
{return or__3548__auto____327966;
} else
{return cljs.core.dominates.call(null,k__327963,cljs.core.first.call(null,be),prefer_table);
}
})())?e__327965:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__327967),k__327963,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__327963," and ",cljs.core.first.call(null,be2__327967),", and neither is preferred")));
}
return be2__327967;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__327968))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__327968));
return cljs.core.second.call(null,best_entry__327968);
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
if(cljs.core.truth_((function (){var and__3546__auto____327969 = mf;

if(cljs.core.truth_(and__3546__auto____327969))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____327969;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____327970 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____327970))
{return or__3548__auto____327970;
} else
{var or__3548__auto____327971 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____327971))
{return or__3548__auto____327971;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____327972 = mf;

if(cljs.core.truth_(and__3546__auto____327972))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____327972;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____327973 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____327973))
{return or__3548__auto____327973;
} else
{var or__3548__auto____327974 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____327974))
{return or__3548__auto____327974;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____327975 = mf;

if(cljs.core.truth_(and__3546__auto____327975))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____327975;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____327976 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____327976))
{return or__3548__auto____327976;
} else
{var or__3548__auto____327977 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____327977))
{return or__3548__auto____327977;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____327978 = mf;

if(cljs.core.truth_(and__3546__auto____327978))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____327978;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____327979 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____327979))
{return or__3548__auto____327979;
} else
{var or__3548__auto____327980 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____327980))
{return or__3548__auto____327980;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____327981 = mf;

if(cljs.core.truth_(and__3546__auto____327981))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____327981;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____327982 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____327982))
{return or__3548__auto____327982;
} else
{var or__3548__auto____327983 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____327983))
{return or__3548__auto____327983;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____327984 = mf;

if(cljs.core.truth_(and__3546__auto____327984))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____327984;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____327985 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____327985))
{return or__3548__auto____327985;
} else
{var or__3548__auto____327986 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____327986))
{return or__3548__auto____327986;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____327987 = mf;

if(cljs.core.truth_(and__3546__auto____327987))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____327987;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____327988 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____327988))
{return or__3548__auto____327988;
} else
{var or__3548__auto____327989 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____327989))
{return or__3548__auto____327989;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____327990 = mf;

if(cljs.core.truth_(and__3546__auto____327990))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____327990;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____327991 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____327991))
{return or__3548__auto____327991;
} else
{var or__3548__auto____327992 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____327992))
{return or__3548__auto____327992;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__327993 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__327994 = cljs.core._get_method.call(null,mf,dispatch_val__327993);

if(cljs.core.truth_(target_fn__327994))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__327993)));
}
return cljs.core.apply.call(null,target_fn__327994,args);
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
var this__327995 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__327996 = this;
cljs.core.swap_BANG_.call(null,this__327996.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__327996.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__327996.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__327996.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__327997 = this;
cljs.core.swap_BANG_.call(null,this__327997.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__327997.method_cache,this__327997.method_table,this__327997.cached_hierarchy,this__327997.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__327998 = this;
cljs.core.swap_BANG_.call(null,this__327998.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__327998.method_cache,this__327998.method_table,this__327998.cached_hierarchy,this__327998.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__327999 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__327999.cached_hierarchy),cljs.core.deref.call(null,this__327999.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__327999.method_cache,this__327999.method_table,this__327999.cached_hierarchy,this__327999.hierarchy);
}
var temp__3695__auto____328000 = cljs.core.deref.call(null,this__327999.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____328000))
{var target_fn__328001 = temp__3695__auto____328000;

return target_fn__328001;
} else
{var temp__3695__auto____328002 = cljs.core.find_and_cache_best_method.call(null,this__327999.name,dispatch_val,this__327999.hierarchy,this__327999.method_table,this__327999.prefer_table,this__327999.method_cache,this__327999.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____328002))
{var target_fn__328003 = temp__3695__auto____328002;

return target_fn__328003;
} else
{return cljs.core.deref.call(null,this__327999.method_table).call(null,this__327999.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__328004 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__328004.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__328004.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__328004.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__328004.method_cache,this__328004.method_table,this__328004.cached_hierarchy,this__328004.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__328005 = this;
return cljs.core.deref.call(null,this__328005.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__328006 = this;
return cljs.core.deref.call(null,this__328006.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__328007 = this;
return cljs.core.do_dispatch.call(null,mf,this__328007.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__328008__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__328008 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__328008__delegate.call(this, _, args);
};
G__328008.cljs$lang$maxFixedArity = 1;
G__328008.cljs$lang$applyTo = (function (arglist__328009){
var _ = cljs.core.first(arglist__328009);
var args = cljs.core.rest(arglist__328009);
return G__328008__delegate.call(this, _, args);
});
return G__328008;
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
