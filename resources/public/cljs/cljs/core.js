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
var or__3548__auto____25210 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____25210))
{return or__3548__auto____25210;
} else
{var or__3548__auto____25211 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____25211))
{return or__3548__auto____25211;
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
var _invoke__25275 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____25212 = this$;

if(cljs.core.truth_(and__3546__auto____25212))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25212;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____25213 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25213))
{return or__3548__auto____25213;
} else
{var or__3548__auto____25214 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25214))
{return or__3548__auto____25214;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__25276 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____25215 = this$;

if(cljs.core.truth_(and__3546__auto____25215))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25215;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____25216 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25216))
{return or__3548__auto____25216;
} else
{var or__3548__auto____25217 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25217))
{return or__3548__auto____25217;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__25277 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____25218 = this$;

if(cljs.core.truth_(and__3546__auto____25218))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25218;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____25219 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25219))
{return or__3548__auto____25219;
} else
{var or__3548__auto____25220 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25220))
{return or__3548__auto____25220;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__25278 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____25221 = this$;

if(cljs.core.truth_(and__3546__auto____25221))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25221;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____25222 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25222))
{return or__3548__auto____25222;
} else
{var or__3548__auto____25223 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25223))
{return or__3548__auto____25223;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__25279 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____25224 = this$;

if(cljs.core.truth_(and__3546__auto____25224))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25224;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____25225 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25225))
{return or__3548__auto____25225;
} else
{var or__3548__auto____25226 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25226))
{return or__3548__auto____25226;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__25280 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____25227 = this$;

if(cljs.core.truth_(and__3546__auto____25227))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25227;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____25228 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25228))
{return or__3548__auto____25228;
} else
{var or__3548__auto____25229 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25229))
{return or__3548__auto____25229;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__25281 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____25230 = this$;

if(cljs.core.truth_(and__3546__auto____25230))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25230;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____25231 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25231))
{return or__3548__auto____25231;
} else
{var or__3548__auto____25232 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25232))
{return or__3548__auto____25232;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__25282 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____25233 = this$;

if(cljs.core.truth_(and__3546__auto____25233))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25233;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____25234 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25234))
{return or__3548__auto____25234;
} else
{var or__3548__auto____25235 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25235))
{return or__3548__auto____25235;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__25283 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____25236 = this$;

if(cljs.core.truth_(and__3546__auto____25236))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25236;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____25237 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25237))
{return or__3548__auto____25237;
} else
{var or__3548__auto____25238 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25238))
{return or__3548__auto____25238;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__25284 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____25239 = this$;

if(cljs.core.truth_(and__3546__auto____25239))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25239;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____25240 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25240))
{return or__3548__auto____25240;
} else
{var or__3548__auto____25241 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25241))
{return or__3548__auto____25241;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__25285 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____25242 = this$;

if(cljs.core.truth_(and__3546__auto____25242))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25242;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____25243 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25243))
{return or__3548__auto____25243;
} else
{var or__3548__auto____25244 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25244))
{return or__3548__auto____25244;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__25286 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____25245 = this$;

if(cljs.core.truth_(and__3546__auto____25245))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25245;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____25246 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25246))
{return or__3548__auto____25246;
} else
{var or__3548__auto____25247 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25247))
{return or__3548__auto____25247;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__25287 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____25248 = this$;

if(cljs.core.truth_(and__3546__auto____25248))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25248;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____25249 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25249))
{return or__3548__auto____25249;
} else
{var or__3548__auto____25250 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25250))
{return or__3548__auto____25250;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__25288 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____25251 = this$;

if(cljs.core.truth_(and__3546__auto____25251))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25251;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____25252 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25252))
{return or__3548__auto____25252;
} else
{var or__3548__auto____25253 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25253))
{return or__3548__auto____25253;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__25289 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____25254 = this$;

if(cljs.core.truth_(and__3546__auto____25254))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25254;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____25255 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25255))
{return or__3548__auto____25255;
} else
{var or__3548__auto____25256 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25256))
{return or__3548__auto____25256;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__25290 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____25257 = this$;

if(cljs.core.truth_(and__3546__auto____25257))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25257;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____25258 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25258))
{return or__3548__auto____25258;
} else
{var or__3548__auto____25259 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25259))
{return or__3548__auto____25259;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__25291 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____25260 = this$;

if(cljs.core.truth_(and__3546__auto____25260))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25260;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____25261 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25261))
{return or__3548__auto____25261;
} else
{var or__3548__auto____25262 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25262))
{return or__3548__auto____25262;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__25292 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____25263 = this$;

if(cljs.core.truth_(and__3546__auto____25263))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25263;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____25264 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25264))
{return or__3548__auto____25264;
} else
{var or__3548__auto____25265 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25265))
{return or__3548__auto____25265;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__25293 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____25266 = this$;

if(cljs.core.truth_(and__3546__auto____25266))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25266;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____25267 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25267))
{return or__3548__auto____25267;
} else
{var or__3548__auto____25268 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25268))
{return or__3548__auto____25268;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__25294 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____25269 = this$;

if(cljs.core.truth_(and__3546__auto____25269))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25269;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____25270 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25270))
{return or__3548__auto____25270;
} else
{var or__3548__auto____25271 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25271))
{return or__3548__auto____25271;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__25295 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____25272 = this$;

if(cljs.core.truth_(and__3546__auto____25272))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25272;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____25273 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25273))
{return or__3548__auto____25273;
} else
{var or__3548__auto____25274 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25274))
{return or__3548__auto____25274;
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
return _invoke__25275.call(this,this$);
case  2 :
return _invoke__25276.call(this,this$,a);
case  3 :
return _invoke__25277.call(this,this$,a,b);
case  4 :
return _invoke__25278.call(this,this$,a,b,c);
case  5 :
return _invoke__25279.call(this,this$,a,b,c,d);
case  6 :
return _invoke__25280.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__25281.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__25282.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__25283.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__25284.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__25285.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__25286.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__25287.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__25288.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__25289.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__25290.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__25291.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__25292.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__25293.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__25294.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__25295.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____25297 = coll;

if(cljs.core.truth_(and__3546__auto____25297))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____25297;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____25298 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25298))
{return or__3548__auto____25298;
} else
{var or__3548__auto____25299 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____25299))
{return or__3548__auto____25299;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____25300 = coll;

if(cljs.core.truth_(and__3546__auto____25300))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____25300;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____25301 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25301))
{return or__3548__auto____25301;
} else
{var or__3548__auto____25302 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____25302))
{return or__3548__auto____25302;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____25303 = coll;

if(cljs.core.truth_(and__3546__auto____25303))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____25303;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____25304 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25304))
{return or__3548__auto____25304;
} else
{var or__3548__auto____25305 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____25305))
{return or__3548__auto____25305;
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
var _nth__25312 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____25306 = coll;

if(cljs.core.truth_(and__3546__auto____25306))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____25306;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____25307 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25307))
{return or__3548__auto____25307;
} else
{var or__3548__auto____25308 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____25308))
{return or__3548__auto____25308;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__25313 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____25309 = coll;

if(cljs.core.truth_(and__3546__auto____25309))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____25309;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____25310 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25310))
{return or__3548__auto____25310;
} else
{var or__3548__auto____25311 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____25311))
{return or__3548__auto____25311;
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
return _nth__25312.call(this,coll,n);
case  3 :
return _nth__25313.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____25315 = coll;

if(cljs.core.truth_(and__3546__auto____25315))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____25315;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____25316 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25316))
{return or__3548__auto____25316;
} else
{var or__3548__auto____25317 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____25317))
{return or__3548__auto____25317;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____25318 = coll;

if(cljs.core.truth_(and__3546__auto____25318))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____25318;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____25319 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25319))
{return or__3548__auto____25319;
} else
{var or__3548__auto____25320 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____25320))
{return or__3548__auto____25320;
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
var _lookup__25327 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____25321 = o;

if(cljs.core.truth_(and__3546__auto____25321))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____25321;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____25322 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25322))
{return or__3548__auto____25322;
} else
{var or__3548__auto____25323 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____25323))
{return or__3548__auto____25323;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__25328 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____25324 = o;

if(cljs.core.truth_(and__3546__auto____25324))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____25324;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____25325 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25325))
{return or__3548__auto____25325;
} else
{var or__3548__auto____25326 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____25326))
{return or__3548__auto____25326;
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
return _lookup__25327.call(this,o,k);
case  3 :
return _lookup__25328.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____25330 = coll;

if(cljs.core.truth_(and__3546__auto____25330))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____25330;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____25331 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25331))
{return or__3548__auto____25331;
} else
{var or__3548__auto____25332 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____25332))
{return or__3548__auto____25332;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____25333 = coll;

if(cljs.core.truth_(and__3546__auto____25333))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____25333;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____25334 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25334))
{return or__3548__auto____25334;
} else
{var or__3548__auto____25335 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____25335))
{return or__3548__auto____25335;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____25336 = coll;

if(cljs.core.truth_(and__3546__auto____25336))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____25336;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____25337 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25337))
{return or__3548__auto____25337;
} else
{var or__3548__auto____25338 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____25338))
{return or__3548__auto____25338;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____25339 = coll;

if(cljs.core.truth_(and__3546__auto____25339))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____25339;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____25340 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25340))
{return or__3548__auto____25340;
} else
{var or__3548__auto____25341 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____25341))
{return or__3548__auto____25341;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____25342 = coll;

if(cljs.core.truth_(and__3546__auto____25342))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____25342;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____25343 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25343))
{return or__3548__auto____25343;
} else
{var or__3548__auto____25344 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____25344))
{return or__3548__auto____25344;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____25345 = coll;

if(cljs.core.truth_(and__3546__auto____25345))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____25345;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____25346 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25346))
{return or__3548__auto____25346;
} else
{var or__3548__auto____25347 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____25347))
{return or__3548__auto____25347;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____25348 = coll;

if(cljs.core.truth_(and__3546__auto____25348))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____25348;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____25349 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25349))
{return or__3548__auto____25349;
} else
{var or__3548__auto____25350 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____25350))
{return or__3548__auto____25350;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____25351 = o;

if(cljs.core.truth_(and__3546__auto____25351))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____25351;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____25352 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25352))
{return or__3548__auto____25352;
} else
{var or__3548__auto____25353 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____25353))
{return or__3548__auto____25353;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____25354 = o;

if(cljs.core.truth_(and__3546__auto____25354))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____25354;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____25355 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25355))
{return or__3548__auto____25355;
} else
{var or__3548__auto____25356 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____25356))
{return or__3548__auto____25356;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____25357 = o;

if(cljs.core.truth_(and__3546__auto____25357))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____25357;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____25358 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25358))
{return or__3548__auto____25358;
} else
{var or__3548__auto____25359 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____25359))
{return or__3548__auto____25359;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____25360 = o;

if(cljs.core.truth_(and__3546__auto____25360))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____25360;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____25361 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25361))
{return or__3548__auto____25361;
} else
{var or__3548__auto____25362 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____25362))
{return or__3548__auto____25362;
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
var _reduce__25369 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____25363 = coll;

if(cljs.core.truth_(and__3546__auto____25363))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____25363;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____25364 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25364))
{return or__3548__auto____25364;
} else
{var or__3548__auto____25365 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____25365))
{return or__3548__auto____25365;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__25370 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____25366 = coll;

if(cljs.core.truth_(and__3546__auto____25366))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____25366;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____25367 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25367))
{return or__3548__auto____25367;
} else
{var or__3548__auto____25368 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____25368))
{return or__3548__auto____25368;
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
return _reduce__25369.call(this,coll,f);
case  3 :
return _reduce__25370.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____25372 = o;

if(cljs.core.truth_(and__3546__auto____25372))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____25372;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____25373 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25373))
{return or__3548__auto____25373;
} else
{var or__3548__auto____25374 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____25374))
{return or__3548__auto____25374;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____25375 = o;

if(cljs.core.truth_(and__3546__auto____25375))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____25375;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____25376 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25376))
{return or__3548__auto____25376;
} else
{var or__3548__auto____25377 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____25377))
{return or__3548__auto____25377;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____25378 = o;

if(cljs.core.truth_(and__3546__auto____25378))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____25378;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____25379 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25379))
{return or__3548__auto____25379;
} else
{var or__3548__auto____25380 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____25380))
{return or__3548__auto____25380;
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
if(cljs.core.truth_((function (){var and__3546__auto____25381 = o;

if(cljs.core.truth_(and__3546__auto____25381))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____25381;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____25382 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25382))
{return or__3548__auto____25382;
} else
{var or__3548__auto____25383 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____25383))
{return or__3548__auto____25383;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____25384 = d;

if(cljs.core.truth_(and__3546__auto____25384))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____25384;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____25385 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____25385))
{return or__3548__auto____25385;
} else
{var or__3548__auto____25386 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____25386))
{return or__3548__auto____25386;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____25387 = this$;

if(cljs.core.truth_(and__3546__auto____25387))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____25387;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____25388 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25388))
{return or__3548__auto____25388;
} else
{var or__3548__auto____25389 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____25389))
{return or__3548__auto____25389;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____25390 = this$;

if(cljs.core.truth_(and__3546__auto____25390))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____25390;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____25391 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25391))
{return or__3548__auto____25391;
} else
{var or__3548__auto____25392 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____25392))
{return or__3548__auto____25392;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____25393 = this$;

if(cljs.core.truth_(and__3546__auto____25393))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____25393;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____25394 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25394))
{return or__3548__auto____25394;
} else
{var or__3548__auto____25395 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____25395))
{return or__3548__auto____25395;
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
var G__25396 = null;
var G__25396__25397 = (function (o,k){
return null;
});
var G__25396__25398 = (function (o,k,not_found){
return not_found;
});
G__25396 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__25396__25397.call(this,o,k);
case  3 :
return G__25396__25398.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25396;
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
var G__25400 = null;
var G__25400__25401 = (function (_,f){
return f.call(null);
});
var G__25400__25402 = (function (_,f,start){
return start;
});
G__25400 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__25400__25401.call(this,_,f);
case  3 :
return G__25400__25402.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25400;
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
var G__25404 = null;
var G__25404__25405 = (function (_,n){
return null;
});
var G__25404__25406 = (function (_,n,not_found){
return not_found;
});
G__25404 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__25404__25405.call(this,_,n);
case  3 :
return G__25404__25406.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25404;
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
var ci_reduce__25414 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__25408 = cljs.core._nth.call(null,cicoll,0);
var n__25409 = 1;

while(true){
if(cljs.core.truth_((n__25409 < cljs.core._count.call(null,cicoll))))
{{
var G__25418 = f.call(null,val__25408,cljs.core._nth.call(null,cicoll,n__25409));
var G__25419 = (n__25409 + 1);
val__25408 = G__25418;
n__25409 = G__25419;
continue;
}
} else
{return val__25408;
}
break;
}
}
});
var ci_reduce__25415 = (function (cicoll,f,val){
var val__25410 = val;
var n__25411 = 0;

while(true){
if(cljs.core.truth_((n__25411 < cljs.core._count.call(null,cicoll))))
{{
var G__25420 = f.call(null,val__25410,cljs.core._nth.call(null,cicoll,n__25411));
var G__25421 = (n__25411 + 1);
val__25410 = G__25420;
n__25411 = G__25421;
continue;
}
} else
{return val__25410;
}
break;
}
});
var ci_reduce__25416 = (function (cicoll,f,val,idx){
var val__25412 = val;
var n__25413 = idx;

while(true){
if(cljs.core.truth_((n__25413 < cljs.core._count.call(null,cicoll))))
{{
var G__25422 = f.call(null,val__25412,cljs.core._nth.call(null,cicoll,n__25413));
var G__25423 = (n__25413 + 1);
val__25412 = G__25422;
n__25413 = G__25423;
continue;
}
} else
{return val__25412;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__25414.call(this,cicoll,f);
case  3 :
return ci_reduce__25415.call(this,cicoll,f,val);
case  4 :
return ci_reduce__25416.call(this,cicoll,f,val,idx);
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
var this__25424 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__25437 = null;
var G__25437__25438 = (function (_,f){
var this__25425 = this;
return cljs.core.ci_reduce.call(null,this__25425.a,f,(this__25425.a[this__25425.i]),(this__25425.i + 1));
});
var G__25437__25439 = (function (_,f,start){
var this__25426 = this;
return cljs.core.ci_reduce.call(null,this__25426.a,f,start,this__25426.i);
});
G__25437 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__25437__25438.call(this,_,f);
case  3 :
return G__25437__25439.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25437;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__25427 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__25428 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__25441 = null;
var G__25441__25442 = (function (coll,n){
var this__25429 = this;
var i__25430 = (n + this__25429.i);

if(cljs.core.truth_((i__25430 < this__25429.a.length)))
{return (this__25429.a[i__25430]);
} else
{return null;
}
});
var G__25441__25443 = (function (coll,n,not_found){
var this__25431 = this;
var i__25432 = (n + this__25431.i);

if(cljs.core.truth_((i__25432 < this__25431.a.length)))
{return (this__25431.a[i__25432]);
} else
{return not_found;
}
});
G__25441 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__25441__25442.call(this,coll,n);
case  3 :
return G__25441__25443.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25441;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__25433 = this;
return (this__25433.a.length - this__25433.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__25434 = this;
return (this__25434.a[this__25434.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__25435 = this;
if(cljs.core.truth_(((this__25435.i + 1) < this__25435.a.length)))
{return (new cljs.core.IndexedSeq(this__25435.a,(this__25435.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__25436 = this;
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
var G__25445 = null;
var G__25445__25446 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__25445__25447 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__25445 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__25445__25446.call(this,array,f);
case  3 :
return G__25445__25447.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25445;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__25449 = null;
var G__25449__25450 = (function (array,k){
return (array[k]);
});
var G__25449__25451 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__25449 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__25449__25450.call(this,array,k);
case  3 :
return G__25449__25451.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25449;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__25453 = null;
var G__25453__25454 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__25453__25455 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__25453 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__25453__25454.call(this,array,n);
case  3 :
return G__25453__25455.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25453;
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
var temp__3698__auto____25457 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____25457))
{var s__25458 = temp__3698__auto____25457;

return cljs.core._first.call(null,s__25458);
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
var G__25459 = cljs.core.next.call(null,s);
s = G__25459;
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
var s__25460 = cljs.core.seq.call(null,x);
var n__25461 = 0;

while(true){
if(cljs.core.truth_(s__25460))
{{
var G__25462 = cljs.core.next.call(null,s__25460);
var G__25463 = (n__25461 + 1);
s__25460 = G__25462;
n__25461 = G__25463;
continue;
}
} else
{return n__25461;
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
var conj__25464 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__25465 = (function() { 
var G__25467__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__25468 = conj.call(null,coll,x);
var G__25469 = cljs.core.first.call(null,xs);
var G__25470 = cljs.core.next.call(null,xs);
coll = G__25468;
x = G__25469;
xs = G__25470;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__25467 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25467__delegate.call(this, coll, x, xs);
};
G__25467.cljs$lang$maxFixedArity = 2;
G__25467.cljs$lang$applyTo = (function (arglist__25471){
var coll = cljs.core.first(arglist__25471);
var x = cljs.core.first(cljs.core.next(arglist__25471));
var xs = cljs.core.rest(cljs.core.next(arglist__25471));
return G__25467__delegate.call(this, coll, x, xs);
});
return G__25467;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__25464.call(this,coll,x);
default:
return conj__25465.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__25465.cljs$lang$applyTo;
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
var nth__25472 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__25473 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__25472.call(this,coll,n);
case  3 :
return nth__25473.call(this,coll,n,not_found);
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
var get__25475 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__25476 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__25475.call(this,o,k);
case  3 :
return get__25476.call(this,o,k,not_found);
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
var assoc__25479 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__25480 = (function() { 
var G__25482__delegate = function (coll,k,v,kvs){
while(true){
var ret__25478 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__25483 = ret__25478;
var G__25484 = cljs.core.first.call(null,kvs);
var G__25485 = cljs.core.second.call(null,kvs);
var G__25486 = cljs.core.nnext.call(null,kvs);
coll = G__25483;
k = G__25484;
v = G__25485;
kvs = G__25486;
continue;
}
} else
{return ret__25478;
}
break;
}
};
var G__25482 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25482__delegate.call(this, coll, k, v, kvs);
};
G__25482.cljs$lang$maxFixedArity = 3;
G__25482.cljs$lang$applyTo = (function (arglist__25487){
var coll = cljs.core.first(arglist__25487);
var k = cljs.core.first(cljs.core.next(arglist__25487));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25487)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25487)));
return G__25482__delegate.call(this, coll, k, v, kvs);
});
return G__25482;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__25479.call(this,coll,k,v);
default:
return assoc__25480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__25480.cljs$lang$applyTo;
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
var dissoc__25489 = (function (coll){
return coll;
});
var dissoc__25490 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__25491 = (function() { 
var G__25493__delegate = function (coll,k,ks){
while(true){
var ret__25488 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__25494 = ret__25488;
var G__25495 = cljs.core.first.call(null,ks);
var G__25496 = cljs.core.next.call(null,ks);
coll = G__25494;
k = G__25495;
ks = G__25496;
continue;
}
} else
{return ret__25488;
}
break;
}
};
var G__25493 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25493__delegate.call(this, coll, k, ks);
};
G__25493.cljs$lang$maxFixedArity = 2;
G__25493.cljs$lang$applyTo = (function (arglist__25497){
var coll = cljs.core.first(arglist__25497);
var k = cljs.core.first(cljs.core.next(arglist__25497));
var ks = cljs.core.rest(cljs.core.next(arglist__25497));
return G__25493__delegate.call(this, coll, k, ks);
});
return G__25493;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__25489.call(this,coll);
case  2 :
return dissoc__25490.call(this,coll,k);
default:
return dissoc__25491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__25491.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____25498 = o;

if(cljs.core.truth_((function (){var and__3546__auto____25499 = x__451__auto____25498;

if(cljs.core.truth_(and__3546__auto____25499))
{var and__3546__auto____25500 = x__451__auto____25498.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____25500))
{return cljs.core.not.call(null,x__451__auto____25498.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____25500;
}
} else
{return and__3546__auto____25499;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____25498);
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
var disj__25502 = (function (coll){
return coll;
});
var disj__25503 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__25504 = (function() { 
var G__25506__delegate = function (coll,k,ks){
while(true){
var ret__25501 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__25507 = ret__25501;
var G__25508 = cljs.core.first.call(null,ks);
var G__25509 = cljs.core.next.call(null,ks);
coll = G__25507;
k = G__25508;
ks = G__25509;
continue;
}
} else
{return ret__25501;
}
break;
}
};
var G__25506 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25506__delegate.call(this, coll, k, ks);
};
G__25506.cljs$lang$maxFixedArity = 2;
G__25506.cljs$lang$applyTo = (function (arglist__25510){
var coll = cljs.core.first(arglist__25510);
var k = cljs.core.first(cljs.core.next(arglist__25510));
var ks = cljs.core.rest(cljs.core.next(arglist__25510));
return G__25506__delegate.call(this, coll, k, ks);
});
return G__25506;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__25502.call(this,coll);
case  2 :
return disj__25503.call(this,coll,k);
default:
return disj__25504.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__25504.cljs$lang$applyTo;
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
{var x__451__auto____25511 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25512 = x__451__auto____25511;

if(cljs.core.truth_(and__3546__auto____25512))
{var and__3546__auto____25513 = x__451__auto____25511.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____25513))
{return cljs.core.not.call(null,x__451__auto____25511.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____25513;
}
} else
{return and__3546__auto____25512;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____25511);
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
{var x__451__auto____25514 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25515 = x__451__auto____25514;

if(cljs.core.truth_(and__3546__auto____25515))
{var and__3546__auto____25516 = x__451__auto____25514.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____25516))
{return cljs.core.not.call(null,x__451__auto____25514.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____25516;
}
} else
{return and__3546__auto____25515;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____25514);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____25517 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25518 = x__451__auto____25517;

if(cljs.core.truth_(and__3546__auto____25518))
{var and__3546__auto____25519 = x__451__auto____25517.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____25519))
{return cljs.core.not.call(null,x__451__auto____25517.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____25519;
}
} else
{return and__3546__auto____25518;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____25517);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____25520 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25521 = x__451__auto____25520;

if(cljs.core.truth_(and__3546__auto____25521))
{var and__3546__auto____25522 = x__451__auto____25520.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____25522))
{return cljs.core.not.call(null,x__451__auto____25520.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____25522;
}
} else
{return and__3546__auto____25521;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____25520);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____25523 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25524 = x__451__auto____25523;

if(cljs.core.truth_(and__3546__auto____25524))
{var and__3546__auto____25525 = x__451__auto____25523.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____25525))
{return cljs.core.not.call(null,x__451__auto____25523.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____25525;
}
} else
{return and__3546__auto____25524;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____25523);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____25526 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25527 = x__451__auto____25526;

if(cljs.core.truth_(and__3546__auto____25527))
{var and__3546__auto____25528 = x__451__auto____25526.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____25528))
{return cljs.core.not.call(null,x__451__auto____25526.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____25528;
}
} else
{return and__3546__auto____25527;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____25526);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____25529 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25530 = x__451__auto____25529;

if(cljs.core.truth_(and__3546__auto____25530))
{var and__3546__auto____25531 = x__451__auto____25529.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____25531))
{return cljs.core.not.call(null,x__451__auto____25529.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____25531;
}
} else
{return and__3546__auto____25530;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____25529);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__25532 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__25532.push(key);
}));
return keys__25532;
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
{var x__451__auto____25533 = s;

if(cljs.core.truth_((function (){var and__3546__auto____25534 = x__451__auto____25533;

if(cljs.core.truth_(and__3546__auto____25534))
{var and__3546__auto____25535 = x__451__auto____25533.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____25535))
{return cljs.core.not.call(null,x__451__auto____25533.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____25535;
}
} else
{return and__3546__auto____25534;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____25533);
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
var and__3546__auto____25536 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____25536))
{return cljs.core.not.call(null,(function (){var or__3548__auto____25537 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____25537))
{return or__3548__auto____25537;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____25536;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____25538 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____25538))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____25538;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____25539 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____25539))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____25539;
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
var and__3546__auto____25540 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____25540))
{return (n == n.toFixed());
} else
{return and__3546__auto____25540;
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
if(cljs.core.truth_((function (){var and__3546__auto____25541 = coll;

if(cljs.core.truth_(and__3546__auto____25541))
{var and__3546__auto____25542 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____25542))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____25542;
}
} else
{return and__3546__auto____25541;
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
var distinct_QMARK___25547 = (function (x){
return true;
});
var distinct_QMARK___25548 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___25549 = (function() { 
var G__25551__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__25543 = cljs.core.set([y,x]);
var xs__25544 = more;

while(true){
var x__25545 = cljs.core.first.call(null,xs__25544);
var etc__25546 = cljs.core.next.call(null,xs__25544);

if(cljs.core.truth_(xs__25544))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__25543,x__25545)))
{return false;
} else
{{
var G__25552 = cljs.core.conj.call(null,s__25543,x__25545);
var G__25553 = etc__25546;
s__25543 = G__25552;
xs__25544 = G__25553;
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
var G__25551 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25551__delegate.call(this, x, y, more);
};
G__25551.cljs$lang$maxFixedArity = 2;
G__25551.cljs$lang$applyTo = (function (arglist__25554){
var x = cljs.core.first(arglist__25554);
var y = cljs.core.first(cljs.core.next(arglist__25554));
var more = cljs.core.rest(cljs.core.next(arglist__25554));
return G__25551__delegate.call(this, x, y, more);
});
return G__25551;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___25547.call(this,x);
case  2 :
return distinct_QMARK___25548.call(this,x,y);
default:
return distinct_QMARK___25549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___25549.cljs$lang$applyTo;
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
var r__25555 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__25555)))
{return r__25555;
} else
{if(cljs.core.truth_(r__25555))
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
var sort__25557 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__25558 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__25556 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__25556,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__25556);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__25557.call(this,comp);
case  2 :
return sort__25558.call(this,comp,coll);
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
var sort_by__25560 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__25561 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__25560.call(this,keyfn,comp);
case  3 :
return sort_by__25561.call(this,keyfn,comp,coll);
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
var reduce__25563 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__25564 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__25563.call(this,f,val);
case  3 :
return reduce__25564.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__25570 = (function (f,coll){
var temp__3695__auto____25566 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____25566))
{var s__25567 = temp__3695__auto____25566;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__25567),cljs.core.next.call(null,s__25567));
} else
{return f.call(null);
}
});
var seq_reduce__25571 = (function (f,val,coll){
var val__25568 = val;
var coll__25569 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__25569))
{{
var G__25573 = f.call(null,val__25568,cljs.core.first.call(null,coll__25569));
var G__25574 = cljs.core.next.call(null,coll__25569);
val__25568 = G__25573;
coll__25569 = G__25574;
continue;
}
} else
{return val__25568;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__25570.call(this,f,val);
case  3 :
return seq_reduce__25571.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__25575 = null;
var G__25575__25576 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__25575__25577 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__25575 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__25575__25576.call(this,coll,f);
case  3 :
return G__25575__25577.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25575;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___25579 = (function (){
return 0;
});
var _PLUS___25580 = (function (x){
return x;
});
var _PLUS___25581 = (function (x,y){
return (x + y);
});
var _PLUS___25582 = (function() { 
var G__25584__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__25584 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25584__delegate.call(this, x, y, more);
};
G__25584.cljs$lang$maxFixedArity = 2;
G__25584.cljs$lang$applyTo = (function (arglist__25585){
var x = cljs.core.first(arglist__25585);
var y = cljs.core.first(cljs.core.next(arglist__25585));
var more = cljs.core.rest(cljs.core.next(arglist__25585));
return G__25584__delegate.call(this, x, y, more);
});
return G__25584;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___25579.call(this);
case  1 :
return _PLUS___25580.call(this,x);
case  2 :
return _PLUS___25581.call(this,x,y);
default:
return _PLUS___25582.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___25582.cljs$lang$applyTo;
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
var ___25586 = (function (x){
return (- x);
});
var ___25587 = (function (x,y){
return (x - y);
});
var ___25588 = (function() { 
var G__25590__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__25590 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25590__delegate.call(this, x, y, more);
};
G__25590.cljs$lang$maxFixedArity = 2;
G__25590.cljs$lang$applyTo = (function (arglist__25591){
var x = cljs.core.first(arglist__25591);
var y = cljs.core.first(cljs.core.next(arglist__25591));
var more = cljs.core.rest(cljs.core.next(arglist__25591));
return G__25590__delegate.call(this, x, y, more);
});
return G__25590;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___25586.call(this,x);
case  2 :
return ___25587.call(this,x,y);
default:
return ___25588.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___25588.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___25592 = (function (){
return 1;
});
var _STAR___25593 = (function (x){
return x;
});
var _STAR___25594 = (function (x,y){
return (x * y);
});
var _STAR___25595 = (function() { 
var G__25597__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__25597 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25597__delegate.call(this, x, y, more);
};
G__25597.cljs$lang$maxFixedArity = 2;
G__25597.cljs$lang$applyTo = (function (arglist__25598){
var x = cljs.core.first(arglist__25598);
var y = cljs.core.first(cljs.core.next(arglist__25598));
var more = cljs.core.rest(cljs.core.next(arglist__25598));
return G__25597__delegate.call(this, x, y, more);
});
return G__25597;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___25592.call(this);
case  1 :
return _STAR___25593.call(this,x);
case  2 :
return _STAR___25594.call(this,x,y);
default:
return _STAR___25595.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___25595.cljs$lang$applyTo;
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
var _SLASH___25599 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___25600 = (function (x,y){
return (x / y);
});
var _SLASH___25601 = (function() { 
var G__25603__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__25603 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25603__delegate.call(this, x, y, more);
};
G__25603.cljs$lang$maxFixedArity = 2;
G__25603.cljs$lang$applyTo = (function (arglist__25604){
var x = cljs.core.first(arglist__25604);
var y = cljs.core.first(cljs.core.next(arglist__25604));
var more = cljs.core.rest(cljs.core.next(arglist__25604));
return G__25603__delegate.call(this, x, y, more);
});
return G__25603;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___25599.call(this,x);
case  2 :
return _SLASH___25600.call(this,x,y);
default:
return _SLASH___25601.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___25601.cljs$lang$applyTo;
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
var _LT___25605 = (function (x){
return true;
});
var _LT___25606 = (function (x,y){
return (x < y);
});
var _LT___25607 = (function() { 
var G__25609__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__25610 = y;
var G__25611 = cljs.core.first.call(null,more);
var G__25612 = cljs.core.next.call(null,more);
x = G__25610;
y = G__25611;
more = G__25612;
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
var G__25609 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25609__delegate.call(this, x, y, more);
};
G__25609.cljs$lang$maxFixedArity = 2;
G__25609.cljs$lang$applyTo = (function (arglist__25613){
var x = cljs.core.first(arglist__25613);
var y = cljs.core.first(cljs.core.next(arglist__25613));
var more = cljs.core.rest(cljs.core.next(arglist__25613));
return G__25609__delegate.call(this, x, y, more);
});
return G__25609;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___25605.call(this,x);
case  2 :
return _LT___25606.call(this,x,y);
default:
return _LT___25607.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___25607.cljs$lang$applyTo;
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
var _LT__EQ___25614 = (function (x){
return true;
});
var _LT__EQ___25615 = (function (x,y){
return (x <= y);
});
var _LT__EQ___25616 = (function() { 
var G__25618__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__25619 = y;
var G__25620 = cljs.core.first.call(null,more);
var G__25621 = cljs.core.next.call(null,more);
x = G__25619;
y = G__25620;
more = G__25621;
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
var G__25618 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25618__delegate.call(this, x, y, more);
};
G__25618.cljs$lang$maxFixedArity = 2;
G__25618.cljs$lang$applyTo = (function (arglist__25622){
var x = cljs.core.first(arglist__25622);
var y = cljs.core.first(cljs.core.next(arglist__25622));
var more = cljs.core.rest(cljs.core.next(arglist__25622));
return G__25618__delegate.call(this, x, y, more);
});
return G__25618;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___25614.call(this,x);
case  2 :
return _LT__EQ___25615.call(this,x,y);
default:
return _LT__EQ___25616.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___25616.cljs$lang$applyTo;
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
var _GT___25623 = (function (x){
return true;
});
var _GT___25624 = (function (x,y){
return (x > y);
});
var _GT___25625 = (function() { 
var G__25627__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__25628 = y;
var G__25629 = cljs.core.first.call(null,more);
var G__25630 = cljs.core.next.call(null,more);
x = G__25628;
y = G__25629;
more = G__25630;
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
var G__25627 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25627__delegate.call(this, x, y, more);
};
G__25627.cljs$lang$maxFixedArity = 2;
G__25627.cljs$lang$applyTo = (function (arglist__25631){
var x = cljs.core.first(arglist__25631);
var y = cljs.core.first(cljs.core.next(arglist__25631));
var more = cljs.core.rest(cljs.core.next(arglist__25631));
return G__25627__delegate.call(this, x, y, more);
});
return G__25627;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___25623.call(this,x);
case  2 :
return _GT___25624.call(this,x,y);
default:
return _GT___25625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___25625.cljs$lang$applyTo;
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
var _GT__EQ___25632 = (function (x){
return true;
});
var _GT__EQ___25633 = (function (x,y){
return (x >= y);
});
var _GT__EQ___25634 = (function() { 
var G__25636__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__25637 = y;
var G__25638 = cljs.core.first.call(null,more);
var G__25639 = cljs.core.next.call(null,more);
x = G__25637;
y = G__25638;
more = G__25639;
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
var G__25636 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25636__delegate.call(this, x, y, more);
};
G__25636.cljs$lang$maxFixedArity = 2;
G__25636.cljs$lang$applyTo = (function (arglist__25640){
var x = cljs.core.first(arglist__25640);
var y = cljs.core.first(cljs.core.next(arglist__25640));
var more = cljs.core.rest(cljs.core.next(arglist__25640));
return G__25636__delegate.call(this, x, y, more);
});
return G__25636;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___25632.call(this,x);
case  2 :
return _GT__EQ___25633.call(this,x,y);
default:
return _GT__EQ___25634.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___25634.cljs$lang$applyTo;
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
var max__25641 = (function (x){
return x;
});
var max__25642 = (function (x,y){
return ((x > y) ? x : y);
});
var max__25643 = (function() { 
var G__25645__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__25645 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25645__delegate.call(this, x, y, more);
};
G__25645.cljs$lang$maxFixedArity = 2;
G__25645.cljs$lang$applyTo = (function (arglist__25646){
var x = cljs.core.first(arglist__25646);
var y = cljs.core.first(cljs.core.next(arglist__25646));
var more = cljs.core.rest(cljs.core.next(arglist__25646));
return G__25645__delegate.call(this, x, y, more);
});
return G__25645;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__25641.call(this,x);
case  2 :
return max__25642.call(this,x,y);
default:
return max__25643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__25643.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__25647 = (function (x){
return x;
});
var min__25648 = (function (x,y){
return ((x < y) ? x : y);
});
var min__25649 = (function() { 
var G__25651__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__25651 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25651__delegate.call(this, x, y, more);
};
G__25651.cljs$lang$maxFixedArity = 2;
G__25651.cljs$lang$applyTo = (function (arglist__25652){
var x = cljs.core.first(arglist__25652);
var y = cljs.core.first(cljs.core.next(arglist__25652));
var more = cljs.core.rest(cljs.core.next(arglist__25652));
return G__25651__delegate.call(this, x, y, more);
});
return G__25651;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__25647.call(this,x);
case  2 :
return min__25648.call(this,x,y);
default:
return min__25649.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__25649.cljs$lang$applyTo;
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
var rem__25653 = (n % d);

return cljs.core.fix.call(null,((n - rem__25653) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__25654 = cljs.core.quot.call(null,n,d);

return (n - (d * q__25654));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__25655 = (function (){
return Math.random.call(null);
});
var rand__25656 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__25655.call(this);
case  1 :
return rand__25656.call(this,n);
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
var _EQ__EQ___25658 = (function (x){
return true;
});
var _EQ__EQ___25659 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___25660 = (function() { 
var G__25662__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__25663 = y;
var G__25664 = cljs.core.first.call(null,more);
var G__25665 = cljs.core.next.call(null,more);
x = G__25663;
y = G__25664;
more = G__25665;
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
var G__25662 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25662__delegate.call(this, x, y, more);
};
G__25662.cljs$lang$maxFixedArity = 2;
G__25662.cljs$lang$applyTo = (function (arglist__25666){
var x = cljs.core.first(arglist__25666);
var y = cljs.core.first(cljs.core.next(arglist__25666));
var more = cljs.core.rest(cljs.core.next(arglist__25666));
return G__25662__delegate.call(this, x, y, more);
});
return G__25662;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___25658.call(this,x);
case  2 :
return _EQ__EQ___25659.call(this,x,y);
default:
return _EQ__EQ___25660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___25660.cljs$lang$applyTo;
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
var n__25667 = n;
var xs__25668 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____25669 = xs__25668;

if(cljs.core.truth_(and__3546__auto____25669))
{return (n__25667 > 0);
} else
{return and__3546__auto____25669;
}
})()))
{{
var G__25670 = (n__25667 - 1);
var G__25671 = cljs.core.next.call(null,xs__25668);
n__25667 = G__25670;
xs__25668 = G__25671;
continue;
}
} else
{return xs__25668;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__25676 = null;
var G__25676__25677 = (function (coll,n){
var temp__3695__auto____25672 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____25672))
{var xs__25673 = temp__3695__auto____25672;

return cljs.core.first.call(null,xs__25673);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__25676__25678 = (function (coll,n,not_found){
var temp__3695__auto____25674 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____25674))
{var xs__25675 = temp__3695__auto____25674;

return cljs.core.first.call(null,xs__25675);
} else
{return not_found;
}
});
G__25676 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__25676__25677.call(this,coll,n);
case  3 :
return G__25676__25678.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25676;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___25680 = (function (){
return "";
});
var str_STAR___25681 = (function (x){
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
var str_STAR___25682 = (function() { 
var G__25684__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__25685 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__25686 = cljs.core.next.call(null,more);
sb = G__25685;
more = G__25686;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__25684 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__25684__delegate.call(this, x, ys);
};
G__25684.cljs$lang$maxFixedArity = 1;
G__25684.cljs$lang$applyTo = (function (arglist__25687){
var x = cljs.core.first(arglist__25687);
var ys = cljs.core.rest(arglist__25687);
return G__25684__delegate.call(this, x, ys);
});
return G__25684;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___25680.call(this);
case  1 :
return str_STAR___25681.call(this,x);
default:
return str_STAR___25682.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___25682.cljs$lang$applyTo;
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
var str__25688 = (function (){
return "";
});
var str__25689 = (function (x){
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
var str__25690 = (function() { 
var G__25692__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__25693 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__25694 = cljs.core.next.call(null,more);
sb = G__25693;
more = G__25694;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__25692 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__25692__delegate.call(this, x, ys);
};
G__25692.cljs$lang$maxFixedArity = 1;
G__25692.cljs$lang$applyTo = (function (arglist__25695){
var x = cljs.core.first(arglist__25695);
var ys = cljs.core.rest(arglist__25695);
return G__25692__delegate.call(this, x, ys);
});
return G__25692;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__25688.call(this);
case  1 :
return str__25689.call(this,x);
default:
return str__25690.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__25690.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__25696 = (function (s,start){
return s.substring(start);
});
var subs__25697 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__25696.call(this,s,start);
case  3 :
return subs__25697.call(this,s,start,end);
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
var symbol__25699 = (function (name){
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
var symbol__25700 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__25699.call(this,ns);
case  2 :
return symbol__25700.call(this,ns,name);
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
var keyword__25702 = (function (name){
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
var keyword__25703 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__25702.call(this,ns);
case  2 :
return keyword__25703.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__25705 = cljs.core.seq.call(null,x);
var ys__25706 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__25705 === null)))
{return (ys__25706 === null);
} else
{if(cljs.core.truth_((ys__25706 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__25705),cljs.core.first.call(null,ys__25706))))
{{
var G__25707 = cljs.core.next.call(null,xs__25705);
var G__25708 = cljs.core.next.call(null,ys__25706);
xs__25705 = G__25707;
ys__25706 = G__25708;
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
return cljs.core.reduce.call(null,(function (p1__25709_SHARP_,p2__25710_SHARP_){
return cljs.core.hash_combine.call(null,p1__25709_SHARP_,cljs.core.hash.call(null,p2__25710_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__25711__25712 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__25711__25712))
{var G__25714__25716 = cljs.core.first.call(null,G__25711__25712);
var vec__25715__25717 = G__25714__25716;
var key_name__25718 = cljs.core.nth.call(null,vec__25715__25717,0,null);
var f__25719 = cljs.core.nth.call(null,vec__25715__25717,1,null);
var G__25711__25720 = G__25711__25712;

var G__25714__25721 = G__25714__25716;
var G__25711__25722 = G__25711__25720;

while(true){
var vec__25723__25724 = G__25714__25721;
var key_name__25725 = cljs.core.nth.call(null,vec__25723__25724,0,null);
var f__25726 = cljs.core.nth.call(null,vec__25723__25724,1,null);
var G__25711__25727 = G__25711__25722;

var str_name__25728 = cljs.core.name.call(null,key_name__25725);

obj[str_name__25728] = f__25726;
var temp__3698__auto____25729 = cljs.core.next.call(null,G__25711__25727);

if(cljs.core.truth_(temp__3698__auto____25729))
{var G__25711__25730 = temp__3698__auto____25729;

{
var G__25731 = cljs.core.first.call(null,G__25711__25730);
var G__25732 = G__25711__25730;
G__25714__25721 = G__25731;
G__25711__25722 = G__25732;
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
var this__25733 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__25734 = this;
return (new cljs.core.List(this__25734.meta,o,coll,(this__25734.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__25735 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__25736 = this;
return this__25736.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__25737 = this;
return this__25737.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__25738 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__25739 = this;
return this__25739.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__25740 = this;
return this__25740.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__25741 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__25742 = this;
return (new cljs.core.List(meta,this__25742.first,this__25742.rest,this__25742.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__25743 = this;
return this__25743.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__25744 = this;
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
var this__25745 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__25746 = this;
return (new cljs.core.List(this__25746.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__25747 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__25748 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__25749 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__25750 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__25751 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__25752 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__25753 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__25754 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__25755 = this;
return this__25755.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__25756 = this;
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
list.cljs$lang$applyTo = (function (arglist__25757){
var items = cljs.core.seq( arglist__25757 );;
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
var this__25758 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__25759 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__25760 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__25761 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__25761.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__25762 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__25763 = this;
return this__25763.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__25764 = this;
if(cljs.core.truth_((this__25764.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__25764.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__25765 = this;
return this__25765.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__25766 = this;
return (new cljs.core.Cons(meta,this__25766.first,this__25766.rest));
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
var G__25767 = null;
var G__25767__25768 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__25767__25769 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__25767 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__25767__25768.call(this,string,f);
case  3 :
return G__25767__25769.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25767;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__25771 = null;
var G__25771__25772 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__25771__25773 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__25771 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__25771__25772.call(this,string,k);
case  3 :
return G__25771__25773.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25771;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__25775 = null;
var G__25775__25776 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__25775__25777 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__25775 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__25775__25776.call(this,string,n);
case  3 :
return G__25775__25777.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25775;
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
var G__25785 = null;
var G__25785__25786 = (function (tsym25779,coll){
var tsym25779__25781 = this;

var this$__25782 = tsym25779__25781;

return cljs.core.get.call(null,coll,this$__25782.toString());
});
var G__25785__25787 = (function (tsym25780,coll,not_found){
var tsym25780__25783 = this;

var this$__25784 = tsym25780__25783;

return cljs.core.get.call(null,coll,this$__25784.toString(),not_found);
});
G__25785 = function(tsym25780,coll,not_found){
switch(arguments.length){
case  2 :
return G__25785__25786.call(this,tsym25780,coll);
case  3 :
return G__25785__25787.call(this,tsym25780,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25785;
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
var x__25789 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__25789;
} else
{lazy_seq.x = x__25789.call(null);
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
var this__25790 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__25791 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__25792 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__25793 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__25793.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__25794 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__25795 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__25796 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__25797 = this;
return this__25797.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__25798 = this;
return (new cljs.core.LazySeq(meta,this__25798.realized,this__25798.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__25799 = [];

var s__25800 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__25800)))
{ary__25799.push(cljs.core.first.call(null,s__25800));
{
var G__25801 = cljs.core.next.call(null,s__25800);
s__25800 = G__25801;
continue;
}
} else
{return ary__25799;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__25802 = s;
var i__25803 = n;
var sum__25804 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____25805 = (i__25803 > 0);

if(cljs.core.truth_(and__3546__auto____25805))
{return cljs.core.seq.call(null,s__25802);
} else
{return and__3546__auto____25805;
}
})()))
{{
var G__25806 = cljs.core.next.call(null,s__25802);
var G__25807 = (i__25803 - 1);
var G__25808 = (sum__25804 + 1);
s__25802 = G__25806;
i__25803 = G__25807;
sum__25804 = G__25808;
continue;
}
} else
{return sum__25804;
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
var concat__25812 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__25813 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__25814 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__25809 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__25809))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__25809),concat.call(null,cljs.core.rest.call(null,s__25809),y));
} else
{return y;
}
})));
});
var concat__25815 = (function() { 
var G__25817__delegate = function (x,y,zs){
var cat__25811 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__25810 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__25810))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__25810),cat.call(null,cljs.core.rest.call(null,xys__25810),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__25811.call(null,concat.call(null,x,y),zs);
};
var G__25817 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25817__delegate.call(this, x, y, zs);
};
G__25817.cljs$lang$maxFixedArity = 2;
G__25817.cljs$lang$applyTo = (function (arglist__25818){
var x = cljs.core.first(arglist__25818);
var y = cljs.core.first(cljs.core.next(arglist__25818));
var zs = cljs.core.rest(cljs.core.next(arglist__25818));
return G__25817__delegate.call(this, x, y, zs);
});
return G__25817;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__25812.call(this);
case  1 :
return concat__25813.call(this,x);
case  2 :
return concat__25814.call(this,x,y);
default:
return concat__25815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__25815.cljs$lang$applyTo;
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
var list_STAR___25819 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___25820 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___25821 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___25822 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___25823 = (function() { 
var G__25825__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__25825 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__25825__delegate.call(this, a, b, c, d, more);
};
G__25825.cljs$lang$maxFixedArity = 4;
G__25825.cljs$lang$applyTo = (function (arglist__25826){
var a = cljs.core.first(arglist__25826);
var b = cljs.core.first(cljs.core.next(arglist__25826));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25826)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25826))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25826))));
return G__25825__delegate.call(this, a, b, c, d, more);
});
return G__25825;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___25819.call(this,a);
case  2 :
return list_STAR___25820.call(this,a,b);
case  3 :
return list_STAR___25821.call(this,a,b,c);
case  4 :
return list_STAR___25822.call(this,a,b,c,d);
default:
return list_STAR___25823.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___25823.cljs$lang$applyTo;
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
var apply__25836 = (function (f,args){
var fixed_arity__25827 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__25827 + 1)) <= fixed_arity__25827)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__25837 = (function (f,x,args){
var arglist__25828 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__25829 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__25828,fixed_arity__25829) <= fixed_arity__25829)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__25828));
} else
{return f.cljs$lang$applyTo(arglist__25828);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__25828));
}
});
var apply__25838 = (function (f,x,y,args){
var arglist__25830 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__25831 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__25830,fixed_arity__25831) <= fixed_arity__25831)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__25830));
} else
{return f.cljs$lang$applyTo(arglist__25830);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__25830));
}
});
var apply__25839 = (function (f,x,y,z,args){
var arglist__25832 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__25833 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__25832,fixed_arity__25833) <= fixed_arity__25833)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__25832));
} else
{return f.cljs$lang$applyTo(arglist__25832);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__25832));
}
});
var apply__25840 = (function() { 
var G__25842__delegate = function (f,a,b,c,d,args){
var arglist__25834 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__25835 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__25834,fixed_arity__25835) <= fixed_arity__25835)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__25834));
} else
{return f.cljs$lang$applyTo(arglist__25834);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__25834));
}
};
var G__25842 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__25842__delegate.call(this, f, a, b, c, d, args);
};
G__25842.cljs$lang$maxFixedArity = 5;
G__25842.cljs$lang$applyTo = (function (arglist__25843){
var f = cljs.core.first(arglist__25843);
var a = cljs.core.first(cljs.core.next(arglist__25843));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25843)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25843))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25843)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25843)))));
return G__25842__delegate.call(this, f, a, b, c, d, args);
});
return G__25842;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__25836.call(this,f,a);
case  3 :
return apply__25837.call(this,f,a,b);
case  4 :
return apply__25838.call(this,f,a,b,c);
case  5 :
return apply__25839.call(this,f,a,b,c,d);
default:
return apply__25840.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__25840.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__25844){
var obj = cljs.core.first(arglist__25844);
var f = cljs.core.first(cljs.core.next(arglist__25844));
var args = cljs.core.rest(cljs.core.next(arglist__25844));
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
var not_EQ___25845 = (function (x){
return false;
});
var not_EQ___25846 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___25847 = (function() { 
var G__25849__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__25849 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25849__delegate.call(this, x, y, more);
};
G__25849.cljs$lang$maxFixedArity = 2;
G__25849.cljs$lang$applyTo = (function (arglist__25850){
var x = cljs.core.first(arglist__25850);
var y = cljs.core.first(cljs.core.next(arglist__25850));
var more = cljs.core.rest(cljs.core.next(arglist__25850));
return G__25849__delegate.call(this, x, y, more);
});
return G__25849;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___25845.call(this,x);
case  2 :
return not_EQ___25846.call(this,x,y);
default:
return not_EQ___25847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___25847.cljs$lang$applyTo;
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
var G__25851 = pred;
var G__25852 = cljs.core.next.call(null,coll);
pred = G__25851;
coll = G__25852;
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
{var or__3548__auto____25853 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____25853))
{return or__3548__auto____25853;
} else
{{
var G__25854 = pred;
var G__25855 = cljs.core.next.call(null,coll);
pred = G__25854;
coll = G__25855;
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
var G__25856 = null;
var G__25856__25857 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__25856__25858 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__25856__25859 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__25856__25860 = (function() { 
var G__25862__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__25862 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25862__delegate.call(this, x, y, zs);
};
G__25862.cljs$lang$maxFixedArity = 2;
G__25862.cljs$lang$applyTo = (function (arglist__25863){
var x = cljs.core.first(arglist__25863);
var y = cljs.core.first(cljs.core.next(arglist__25863));
var zs = cljs.core.rest(cljs.core.next(arglist__25863));
return G__25862__delegate.call(this, x, y, zs);
});
return G__25862;
})()
;
G__25856 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__25856__25857.call(this);
case  1 :
return G__25856__25858.call(this,x);
case  2 :
return G__25856__25859.call(this,x,y);
default:
return G__25856__25860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__25856.cljs$lang$maxFixedArity = 2;
G__25856.cljs$lang$applyTo = G__25856__25860.cljs$lang$applyTo;
return G__25856;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__25864__delegate = function (args){
return x;
};
var G__25864 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25864__delegate.call(this, args);
};
G__25864.cljs$lang$maxFixedArity = 0;
G__25864.cljs$lang$applyTo = (function (arglist__25865){
var args = cljs.core.seq( arglist__25865 );;
return G__25864__delegate.call(this, args);
});
return G__25864;
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
var comp__25869 = (function (){
return cljs.core.identity;
});
var comp__25870 = (function (f){
return f;
});
var comp__25871 = (function (f,g){
return (function() {
var G__25875 = null;
var G__25875__25876 = (function (){
return f.call(null,g.call(null));
});
var G__25875__25877 = (function (x){
return f.call(null,g.call(null,x));
});
var G__25875__25878 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__25875__25879 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__25875__25880 = (function() { 
var G__25882__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__25882 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25882__delegate.call(this, x, y, z, args);
};
G__25882.cljs$lang$maxFixedArity = 3;
G__25882.cljs$lang$applyTo = (function (arglist__25883){
var x = cljs.core.first(arglist__25883);
var y = cljs.core.first(cljs.core.next(arglist__25883));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25883)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25883)));
return G__25882__delegate.call(this, x, y, z, args);
});
return G__25882;
})()
;
G__25875 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__25875__25876.call(this);
case  1 :
return G__25875__25877.call(this,x);
case  2 :
return G__25875__25878.call(this,x,y);
case  3 :
return G__25875__25879.call(this,x,y,z);
default:
return G__25875__25880.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__25875.cljs$lang$maxFixedArity = 3;
G__25875.cljs$lang$applyTo = G__25875__25880.cljs$lang$applyTo;
return G__25875;
})()
});
var comp__25872 = (function (f,g,h){
return (function() {
var G__25884 = null;
var G__25884__25885 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__25884__25886 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__25884__25887 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__25884__25888 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__25884__25889 = (function() { 
var G__25891__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__25891 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25891__delegate.call(this, x, y, z, args);
};
G__25891.cljs$lang$maxFixedArity = 3;
G__25891.cljs$lang$applyTo = (function (arglist__25892){
var x = cljs.core.first(arglist__25892);
var y = cljs.core.first(cljs.core.next(arglist__25892));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25892)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25892)));
return G__25891__delegate.call(this, x, y, z, args);
});
return G__25891;
})()
;
G__25884 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__25884__25885.call(this);
case  1 :
return G__25884__25886.call(this,x);
case  2 :
return G__25884__25887.call(this,x,y);
case  3 :
return G__25884__25888.call(this,x,y,z);
default:
return G__25884__25889.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__25884.cljs$lang$maxFixedArity = 3;
G__25884.cljs$lang$applyTo = G__25884__25889.cljs$lang$applyTo;
return G__25884;
})()
});
var comp__25873 = (function() { 
var G__25893__delegate = function (f1,f2,f3,fs){
var fs__25866 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__25894__delegate = function (args){
var ret__25867 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__25866),args);
var fs__25868 = cljs.core.next.call(null,fs__25866);

while(true){
if(cljs.core.truth_(fs__25868))
{{
var G__25895 = cljs.core.first.call(null,fs__25868).call(null,ret__25867);
var G__25896 = cljs.core.next.call(null,fs__25868);
ret__25867 = G__25895;
fs__25868 = G__25896;
continue;
}
} else
{return ret__25867;
}
break;
}
};
var G__25894 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25894__delegate.call(this, args);
};
G__25894.cljs$lang$maxFixedArity = 0;
G__25894.cljs$lang$applyTo = (function (arglist__25897){
var args = cljs.core.seq( arglist__25897 );;
return G__25894__delegate.call(this, args);
});
return G__25894;
})()
;
};
var G__25893 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25893__delegate.call(this, f1, f2, f3, fs);
};
G__25893.cljs$lang$maxFixedArity = 3;
G__25893.cljs$lang$applyTo = (function (arglist__25898){
var f1 = cljs.core.first(arglist__25898);
var f2 = cljs.core.first(cljs.core.next(arglist__25898));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25898)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25898)));
return G__25893__delegate.call(this, f1, f2, f3, fs);
});
return G__25893;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__25869.call(this);
case  1 :
return comp__25870.call(this,f1);
case  2 :
return comp__25871.call(this,f1,f2);
case  3 :
return comp__25872.call(this,f1,f2,f3);
default:
return comp__25873.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__25873.cljs$lang$applyTo;
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
var partial__25899 = (function (f,arg1){
return (function() { 
var G__25904__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__25904 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25904__delegate.call(this, args);
};
G__25904.cljs$lang$maxFixedArity = 0;
G__25904.cljs$lang$applyTo = (function (arglist__25905){
var args = cljs.core.seq( arglist__25905 );;
return G__25904__delegate.call(this, args);
});
return G__25904;
})()
;
});
var partial__25900 = (function (f,arg1,arg2){
return (function() { 
var G__25906__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__25906 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25906__delegate.call(this, args);
};
G__25906.cljs$lang$maxFixedArity = 0;
G__25906.cljs$lang$applyTo = (function (arglist__25907){
var args = cljs.core.seq( arglist__25907 );;
return G__25906__delegate.call(this, args);
});
return G__25906;
})()
;
});
var partial__25901 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__25908__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__25908 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25908__delegate.call(this, args);
};
G__25908.cljs$lang$maxFixedArity = 0;
G__25908.cljs$lang$applyTo = (function (arglist__25909){
var args = cljs.core.seq( arglist__25909 );;
return G__25908__delegate.call(this, args);
});
return G__25908;
})()
;
});
var partial__25902 = (function() { 
var G__25910__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__25911__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__25911 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25911__delegate.call(this, args);
};
G__25911.cljs$lang$maxFixedArity = 0;
G__25911.cljs$lang$applyTo = (function (arglist__25912){
var args = cljs.core.seq( arglist__25912 );;
return G__25911__delegate.call(this, args);
});
return G__25911;
})()
;
};
var G__25910 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__25910__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__25910.cljs$lang$maxFixedArity = 4;
G__25910.cljs$lang$applyTo = (function (arglist__25913){
var f = cljs.core.first(arglist__25913);
var arg1 = cljs.core.first(cljs.core.next(arglist__25913));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25913)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25913))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25913))));
return G__25910__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__25910;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__25899.call(this,f,arg1);
case  3 :
return partial__25900.call(this,f,arg1,arg2);
case  4 :
return partial__25901.call(this,f,arg1,arg2,arg3);
default:
return partial__25902.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__25902.cljs$lang$applyTo;
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
var fnil__25914 = (function (f,x){
return (function() {
var G__25918 = null;
var G__25918__25919 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__25918__25920 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__25918__25921 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__25918__25922 = (function() { 
var G__25924__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__25924 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25924__delegate.call(this, a, b, c, ds);
};
G__25924.cljs$lang$maxFixedArity = 3;
G__25924.cljs$lang$applyTo = (function (arglist__25925){
var a = cljs.core.first(arglist__25925);
var b = cljs.core.first(cljs.core.next(arglist__25925));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25925)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25925)));
return G__25924__delegate.call(this, a, b, c, ds);
});
return G__25924;
})()
;
G__25918 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__25918__25919.call(this,a);
case  2 :
return G__25918__25920.call(this,a,b);
case  3 :
return G__25918__25921.call(this,a,b,c);
default:
return G__25918__25922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__25918.cljs$lang$maxFixedArity = 3;
G__25918.cljs$lang$applyTo = G__25918__25922.cljs$lang$applyTo;
return G__25918;
})()
});
var fnil__25915 = (function (f,x,y){
return (function() {
var G__25926 = null;
var G__25926__25927 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__25926__25928 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__25926__25929 = (function() { 
var G__25931__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__25931 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25931__delegate.call(this, a, b, c, ds);
};
G__25931.cljs$lang$maxFixedArity = 3;
G__25931.cljs$lang$applyTo = (function (arglist__25932){
var a = cljs.core.first(arglist__25932);
var b = cljs.core.first(cljs.core.next(arglist__25932));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25932)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25932)));
return G__25931__delegate.call(this, a, b, c, ds);
});
return G__25931;
})()
;
G__25926 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__25926__25927.call(this,a,b);
case  3 :
return G__25926__25928.call(this,a,b,c);
default:
return G__25926__25929.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__25926.cljs$lang$maxFixedArity = 3;
G__25926.cljs$lang$applyTo = G__25926__25929.cljs$lang$applyTo;
return G__25926;
})()
});
var fnil__25916 = (function (f,x,y,z){
return (function() {
var G__25933 = null;
var G__25933__25934 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__25933__25935 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__25933__25936 = (function() { 
var G__25938__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__25938 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25938__delegate.call(this, a, b, c, ds);
};
G__25938.cljs$lang$maxFixedArity = 3;
G__25938.cljs$lang$applyTo = (function (arglist__25939){
var a = cljs.core.first(arglist__25939);
var b = cljs.core.first(cljs.core.next(arglist__25939));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25939)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25939)));
return G__25938__delegate.call(this, a, b, c, ds);
});
return G__25938;
})()
;
G__25933 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__25933__25934.call(this,a,b);
case  3 :
return G__25933__25935.call(this,a,b,c);
default:
return G__25933__25936.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__25933.cljs$lang$maxFixedArity = 3;
G__25933.cljs$lang$applyTo = G__25933__25936.cljs$lang$applyTo;
return G__25933;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__25914.call(this,f,x);
case  3 :
return fnil__25915.call(this,f,x,y);
case  4 :
return fnil__25916.call(this,f,x,y,z);
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
var mapi__25942 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____25940 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____25940))
{var s__25941 = temp__3698__auto____25940;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__25941)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__25941)));
} else
{return null;
}
})));
});

return mapi__25942.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____25943 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____25943))
{var s__25944 = temp__3698__auto____25943;

var x__25945 = f.call(null,cljs.core.first.call(null,s__25944));

if(cljs.core.truth_((x__25945 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__25944));
} else
{return cljs.core.cons.call(null,x__25945,keep.call(null,f,cljs.core.rest.call(null,s__25944)));
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
var keepi__25955 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____25952 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____25952))
{var s__25953 = temp__3698__auto____25952;

var x__25954 = f.call(null,idx,cljs.core.first.call(null,s__25953));

if(cljs.core.truth_((x__25954 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__25953));
} else
{return cljs.core.cons.call(null,x__25954,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__25953)));
}
} else
{return null;
}
})));
});

return keepi__25955.call(null,0,coll);
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
var every_pred__26000 = (function (p){
return (function() {
var ep1 = null;
var ep1__26005 = (function (){
return true;
});
var ep1__26006 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__26007 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____25962 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____25962))
{return p.call(null,y);
} else
{return and__3546__auto____25962;
}
})());
});
var ep1__26008 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____25963 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____25963))
{var and__3546__auto____25964 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____25964))
{return p.call(null,z);
} else
{return and__3546__auto____25964;
}
} else
{return and__3546__auto____25963;
}
})());
});
var ep1__26009 = (function() { 
var G__26011__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____25965 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____25965))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____25965;
}
})());
};
var G__26011 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26011__delegate.call(this, x, y, z, args);
};
G__26011.cljs$lang$maxFixedArity = 3;
G__26011.cljs$lang$applyTo = (function (arglist__26012){
var x = cljs.core.first(arglist__26012);
var y = cljs.core.first(cljs.core.next(arglist__26012));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26012)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26012)));
return G__26011__delegate.call(this, x, y, z, args);
});
return G__26011;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__26005.call(this);
case  1 :
return ep1__26006.call(this,x);
case  2 :
return ep1__26007.call(this,x,y);
case  3 :
return ep1__26008.call(this,x,y,z);
default:
return ep1__26009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__26009.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__26001 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__26013 = (function (){
return true;
});
var ep2__26014 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____25966 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____25966))
{return p2.call(null,x);
} else
{return and__3546__auto____25966;
}
})());
});
var ep2__26015 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____25967 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____25967))
{var and__3546__auto____25968 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____25968))
{var and__3546__auto____25969 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____25969))
{return p2.call(null,y);
} else
{return and__3546__auto____25969;
}
} else
{return and__3546__auto____25968;
}
} else
{return and__3546__auto____25967;
}
})());
});
var ep2__26016 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____25970 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____25970))
{var and__3546__auto____25971 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____25971))
{var and__3546__auto____25972 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____25972))
{var and__3546__auto____25973 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____25973))
{var and__3546__auto____25974 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____25974))
{return p2.call(null,z);
} else
{return and__3546__auto____25974;
}
} else
{return and__3546__auto____25973;
}
} else
{return and__3546__auto____25972;
}
} else
{return and__3546__auto____25971;
}
} else
{return and__3546__auto____25970;
}
})());
});
var ep2__26017 = (function() { 
var G__26019__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____25975 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____25975))
{return cljs.core.every_QMARK_.call(null,(function (p1__25946_SHARP_){
var and__3546__auto____25976 = p1.call(null,p1__25946_SHARP_);

if(cljs.core.truth_(and__3546__auto____25976))
{return p2.call(null,p1__25946_SHARP_);
} else
{return and__3546__auto____25976;
}
}),args);
} else
{return and__3546__auto____25975;
}
})());
};
var G__26019 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26019__delegate.call(this, x, y, z, args);
};
G__26019.cljs$lang$maxFixedArity = 3;
G__26019.cljs$lang$applyTo = (function (arglist__26020){
var x = cljs.core.first(arglist__26020);
var y = cljs.core.first(cljs.core.next(arglist__26020));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26020)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26020)));
return G__26019__delegate.call(this, x, y, z, args);
});
return G__26019;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__26013.call(this);
case  1 :
return ep2__26014.call(this,x);
case  2 :
return ep2__26015.call(this,x,y);
case  3 :
return ep2__26016.call(this,x,y,z);
default:
return ep2__26017.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__26017.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__26002 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__26021 = (function (){
return true;
});
var ep3__26022 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____25977 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____25977))
{var and__3546__auto____25978 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____25978))
{return p3.call(null,x);
} else
{return and__3546__auto____25978;
}
} else
{return and__3546__auto____25977;
}
})());
});
var ep3__26023 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____25979 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____25979))
{var and__3546__auto____25980 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____25980))
{var and__3546__auto____25981 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____25981))
{var and__3546__auto____25982 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____25982))
{var and__3546__auto____25983 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____25983))
{return p3.call(null,y);
} else
{return and__3546__auto____25983;
}
} else
{return and__3546__auto____25982;
}
} else
{return and__3546__auto____25981;
}
} else
{return and__3546__auto____25980;
}
} else
{return and__3546__auto____25979;
}
})());
});
var ep3__26024 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____25984 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____25984))
{var and__3546__auto____25985 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____25985))
{var and__3546__auto____25986 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____25986))
{var and__3546__auto____25987 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____25987))
{var and__3546__auto____25988 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____25988))
{var and__3546__auto____25989 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____25989))
{var and__3546__auto____25990 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____25990))
{var and__3546__auto____25991 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____25991))
{return p3.call(null,z);
} else
{return and__3546__auto____25991;
}
} else
{return and__3546__auto____25990;
}
} else
{return and__3546__auto____25989;
}
} else
{return and__3546__auto____25988;
}
} else
{return and__3546__auto____25987;
}
} else
{return and__3546__auto____25986;
}
} else
{return and__3546__auto____25985;
}
} else
{return and__3546__auto____25984;
}
})());
});
var ep3__26025 = (function() { 
var G__26027__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____25992 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____25992))
{return cljs.core.every_QMARK_.call(null,(function (p1__25947_SHARP_){
var and__3546__auto____25993 = p1.call(null,p1__25947_SHARP_);

if(cljs.core.truth_(and__3546__auto____25993))
{var and__3546__auto____25994 = p2.call(null,p1__25947_SHARP_);

if(cljs.core.truth_(and__3546__auto____25994))
{return p3.call(null,p1__25947_SHARP_);
} else
{return and__3546__auto____25994;
}
} else
{return and__3546__auto____25993;
}
}),args);
} else
{return and__3546__auto____25992;
}
})());
};
var G__26027 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26027__delegate.call(this, x, y, z, args);
};
G__26027.cljs$lang$maxFixedArity = 3;
G__26027.cljs$lang$applyTo = (function (arglist__26028){
var x = cljs.core.first(arglist__26028);
var y = cljs.core.first(cljs.core.next(arglist__26028));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26028)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26028)));
return G__26027__delegate.call(this, x, y, z, args);
});
return G__26027;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__26021.call(this);
case  1 :
return ep3__26022.call(this,x);
case  2 :
return ep3__26023.call(this,x,y);
case  3 :
return ep3__26024.call(this,x,y,z);
default:
return ep3__26025.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__26025.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__26003 = (function() { 
var G__26029__delegate = function (p1,p2,p3,ps){
var ps__25995 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__26030 = (function (){
return true;
});
var epn__26031 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__25948_SHARP_){
return p1__25948_SHARP_.call(null,x);
}),ps__25995);
});
var epn__26032 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__25949_SHARP_){
var and__3546__auto____25996 = p1__25949_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____25996))
{return p1__25949_SHARP_.call(null,y);
} else
{return and__3546__auto____25996;
}
}),ps__25995);
});
var epn__26033 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__25950_SHARP_){
var and__3546__auto____25997 = p1__25950_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____25997))
{var and__3546__auto____25998 = p1__25950_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____25998))
{return p1__25950_SHARP_.call(null,z);
} else
{return and__3546__auto____25998;
}
} else
{return and__3546__auto____25997;
}
}),ps__25995);
});
var epn__26034 = (function() { 
var G__26036__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____25999 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____25999))
{return cljs.core.every_QMARK_.call(null,(function (p1__25951_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__25951_SHARP_,args);
}),ps__25995);
} else
{return and__3546__auto____25999;
}
})());
};
var G__26036 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26036__delegate.call(this, x, y, z, args);
};
G__26036.cljs$lang$maxFixedArity = 3;
G__26036.cljs$lang$applyTo = (function (arglist__26037){
var x = cljs.core.first(arglist__26037);
var y = cljs.core.first(cljs.core.next(arglist__26037));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26037)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26037)));
return G__26036__delegate.call(this, x, y, z, args);
});
return G__26036;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__26030.call(this);
case  1 :
return epn__26031.call(this,x);
case  2 :
return epn__26032.call(this,x,y);
case  3 :
return epn__26033.call(this,x,y,z);
default:
return epn__26034.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__26034.cljs$lang$applyTo;
return epn;
})()
};
var G__26029 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26029__delegate.call(this, p1, p2, p3, ps);
};
G__26029.cljs$lang$maxFixedArity = 3;
G__26029.cljs$lang$applyTo = (function (arglist__26038){
var p1 = cljs.core.first(arglist__26038);
var p2 = cljs.core.first(cljs.core.next(arglist__26038));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26038)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26038)));
return G__26029__delegate.call(this, p1, p2, p3, ps);
});
return G__26029;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__26000.call(this,p1);
case  2 :
return every_pred__26001.call(this,p1,p2);
case  3 :
return every_pred__26002.call(this,p1,p2,p3);
default:
return every_pred__26003.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__26003.cljs$lang$applyTo;
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
var some_fn__26078 = (function (p){
return (function() {
var sp1 = null;
var sp1__26083 = (function (){
return null;
});
var sp1__26084 = (function (x){
return p.call(null,x);
});
var sp1__26085 = (function (x,y){
var or__3548__auto____26040 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____26040))
{return or__3548__auto____26040;
} else
{return p.call(null,y);
}
});
var sp1__26086 = (function (x,y,z){
var or__3548__auto____26041 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____26041))
{return or__3548__auto____26041;
} else
{var or__3548__auto____26042 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____26042))
{return or__3548__auto____26042;
} else
{return p.call(null,z);
}
}
});
var sp1__26087 = (function() { 
var G__26089__delegate = function (x,y,z,args){
var or__3548__auto____26043 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____26043))
{return or__3548__auto____26043;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__26089 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26089__delegate.call(this, x, y, z, args);
};
G__26089.cljs$lang$maxFixedArity = 3;
G__26089.cljs$lang$applyTo = (function (arglist__26090){
var x = cljs.core.first(arglist__26090);
var y = cljs.core.first(cljs.core.next(arglist__26090));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26090)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26090)));
return G__26089__delegate.call(this, x, y, z, args);
});
return G__26089;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__26083.call(this);
case  1 :
return sp1__26084.call(this,x);
case  2 :
return sp1__26085.call(this,x,y);
case  3 :
return sp1__26086.call(this,x,y,z);
default:
return sp1__26087.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__26087.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__26079 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__26091 = (function (){
return null;
});
var sp2__26092 = (function (x){
var or__3548__auto____26044 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____26044))
{return or__3548__auto____26044;
} else
{return p2.call(null,x);
}
});
var sp2__26093 = (function (x,y){
var or__3548__auto____26045 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____26045))
{return or__3548__auto____26045;
} else
{var or__3548__auto____26046 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____26046))
{return or__3548__auto____26046;
} else
{var or__3548__auto____26047 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____26047))
{return or__3548__auto____26047;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__26094 = (function (x,y,z){
var or__3548__auto____26048 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____26048))
{return or__3548__auto____26048;
} else
{var or__3548__auto____26049 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____26049))
{return or__3548__auto____26049;
} else
{var or__3548__auto____26050 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____26050))
{return or__3548__auto____26050;
} else
{var or__3548__auto____26051 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____26051))
{return or__3548__auto____26051;
} else
{var or__3548__auto____26052 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____26052))
{return or__3548__auto____26052;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__26095 = (function() { 
var G__26097__delegate = function (x,y,z,args){
var or__3548__auto____26053 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____26053))
{return or__3548__auto____26053;
} else
{return cljs.core.some.call(null,(function (p1__25956_SHARP_){
var or__3548__auto____26054 = p1.call(null,p1__25956_SHARP_);

if(cljs.core.truth_(or__3548__auto____26054))
{return or__3548__auto____26054;
} else
{return p2.call(null,p1__25956_SHARP_);
}
}),args);
}
};
var G__26097 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26097__delegate.call(this, x, y, z, args);
};
G__26097.cljs$lang$maxFixedArity = 3;
G__26097.cljs$lang$applyTo = (function (arglist__26098){
var x = cljs.core.first(arglist__26098);
var y = cljs.core.first(cljs.core.next(arglist__26098));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26098)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26098)));
return G__26097__delegate.call(this, x, y, z, args);
});
return G__26097;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__26091.call(this);
case  1 :
return sp2__26092.call(this,x);
case  2 :
return sp2__26093.call(this,x,y);
case  3 :
return sp2__26094.call(this,x,y,z);
default:
return sp2__26095.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__26095.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__26080 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__26099 = (function (){
return null;
});
var sp3__26100 = (function (x){
var or__3548__auto____26055 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____26055))
{return or__3548__auto____26055;
} else
{var or__3548__auto____26056 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____26056))
{return or__3548__auto____26056;
} else
{return p3.call(null,x);
}
}
});
var sp3__26101 = (function (x,y){
var or__3548__auto____26057 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____26057))
{return or__3548__auto____26057;
} else
{var or__3548__auto____26058 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____26058))
{return or__3548__auto____26058;
} else
{var or__3548__auto____26059 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____26059))
{return or__3548__auto____26059;
} else
{var or__3548__auto____26060 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____26060))
{return or__3548__auto____26060;
} else
{var or__3548__auto____26061 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____26061))
{return or__3548__auto____26061;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__26102 = (function (x,y,z){
var or__3548__auto____26062 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____26062))
{return or__3548__auto____26062;
} else
{var or__3548__auto____26063 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____26063))
{return or__3548__auto____26063;
} else
{var or__3548__auto____26064 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____26064))
{return or__3548__auto____26064;
} else
{var or__3548__auto____26065 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____26065))
{return or__3548__auto____26065;
} else
{var or__3548__auto____26066 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____26066))
{return or__3548__auto____26066;
} else
{var or__3548__auto____26067 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____26067))
{return or__3548__auto____26067;
} else
{var or__3548__auto____26068 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____26068))
{return or__3548__auto____26068;
} else
{var or__3548__auto____26069 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____26069))
{return or__3548__auto____26069;
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
var sp3__26103 = (function() { 
var G__26105__delegate = function (x,y,z,args){
var or__3548__auto____26070 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____26070))
{return or__3548__auto____26070;
} else
{return cljs.core.some.call(null,(function (p1__25957_SHARP_){
var or__3548__auto____26071 = p1.call(null,p1__25957_SHARP_);

if(cljs.core.truth_(or__3548__auto____26071))
{return or__3548__auto____26071;
} else
{var or__3548__auto____26072 = p2.call(null,p1__25957_SHARP_);

if(cljs.core.truth_(or__3548__auto____26072))
{return or__3548__auto____26072;
} else
{return p3.call(null,p1__25957_SHARP_);
}
}
}),args);
}
};
var G__26105 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26105__delegate.call(this, x, y, z, args);
};
G__26105.cljs$lang$maxFixedArity = 3;
G__26105.cljs$lang$applyTo = (function (arglist__26106){
var x = cljs.core.first(arglist__26106);
var y = cljs.core.first(cljs.core.next(arglist__26106));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26106)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26106)));
return G__26105__delegate.call(this, x, y, z, args);
});
return G__26105;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__26099.call(this);
case  1 :
return sp3__26100.call(this,x);
case  2 :
return sp3__26101.call(this,x,y);
case  3 :
return sp3__26102.call(this,x,y,z);
default:
return sp3__26103.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__26103.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__26081 = (function() { 
var G__26107__delegate = function (p1,p2,p3,ps){
var ps__26073 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__26108 = (function (){
return null;
});
var spn__26109 = (function (x){
return cljs.core.some.call(null,(function (p1__25958_SHARP_){
return p1__25958_SHARP_.call(null,x);
}),ps__26073);
});
var spn__26110 = (function (x,y){
return cljs.core.some.call(null,(function (p1__25959_SHARP_){
var or__3548__auto____26074 = p1__25959_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____26074))
{return or__3548__auto____26074;
} else
{return p1__25959_SHARP_.call(null,y);
}
}),ps__26073);
});
var spn__26111 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__25960_SHARP_){
var or__3548__auto____26075 = p1__25960_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____26075))
{return or__3548__auto____26075;
} else
{var or__3548__auto____26076 = p1__25960_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____26076))
{return or__3548__auto____26076;
} else
{return p1__25960_SHARP_.call(null,z);
}
}
}),ps__26073);
});
var spn__26112 = (function() { 
var G__26114__delegate = function (x,y,z,args){
var or__3548__auto____26077 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____26077))
{return or__3548__auto____26077;
} else
{return cljs.core.some.call(null,(function (p1__25961_SHARP_){
return cljs.core.some.call(null,p1__25961_SHARP_,args);
}),ps__26073);
}
};
var G__26114 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26114__delegate.call(this, x, y, z, args);
};
G__26114.cljs$lang$maxFixedArity = 3;
G__26114.cljs$lang$applyTo = (function (arglist__26115){
var x = cljs.core.first(arglist__26115);
var y = cljs.core.first(cljs.core.next(arglist__26115));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26115)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26115)));
return G__26114__delegate.call(this, x, y, z, args);
});
return G__26114;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__26108.call(this);
case  1 :
return spn__26109.call(this,x);
case  2 :
return spn__26110.call(this,x,y);
case  3 :
return spn__26111.call(this,x,y,z);
default:
return spn__26112.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__26112.cljs$lang$applyTo;
return spn;
})()
};
var G__26107 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26107__delegate.call(this, p1, p2, p3, ps);
};
G__26107.cljs$lang$maxFixedArity = 3;
G__26107.cljs$lang$applyTo = (function (arglist__26116){
var p1 = cljs.core.first(arglist__26116);
var p2 = cljs.core.first(cljs.core.next(arglist__26116));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26116)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26116)));
return G__26107__delegate.call(this, p1, p2, p3, ps);
});
return G__26107;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__26078.call(this,p1);
case  2 :
return some_fn__26079.call(this,p1,p2);
case  3 :
return some_fn__26080.call(this,p1,p2,p3);
default:
return some_fn__26081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__26081.cljs$lang$applyTo;
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
var map__26129 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26117 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26117))
{var s__26118 = temp__3698__auto____26117;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__26118)),map.call(null,f,cljs.core.rest.call(null,s__26118)));
} else
{return null;
}
})));
});
var map__26130 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__26119 = cljs.core.seq.call(null,c1);
var s2__26120 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____26121 = s1__26119;

if(cljs.core.truth_(and__3546__auto____26121))
{return s2__26120;
} else
{return and__3546__auto____26121;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__26119),cljs.core.first.call(null,s2__26120)),map.call(null,f,cljs.core.rest.call(null,s1__26119),cljs.core.rest.call(null,s2__26120)));
} else
{return null;
}
})));
});
var map__26131 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__26122 = cljs.core.seq.call(null,c1);
var s2__26123 = cljs.core.seq.call(null,c2);
var s3__26124 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____26125 = s1__26122;

if(cljs.core.truth_(and__3546__auto____26125))
{var and__3546__auto____26126 = s2__26123;

if(cljs.core.truth_(and__3546__auto____26126))
{return s3__26124;
} else
{return and__3546__auto____26126;
}
} else
{return and__3546__auto____26125;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__26122),cljs.core.first.call(null,s2__26123),cljs.core.first.call(null,s3__26124)),map.call(null,f,cljs.core.rest.call(null,s1__26122),cljs.core.rest.call(null,s2__26123),cljs.core.rest.call(null,s3__26124)));
} else
{return null;
}
})));
});
var map__26132 = (function() { 
var G__26134__delegate = function (f,c1,c2,c3,colls){
var step__26128 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__26127 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__26127)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__26127),step.call(null,map.call(null,cljs.core.rest,ss__26127)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__26039_SHARP_){
return cljs.core.apply.call(null,f,p1__26039_SHARP_);
}),step__26128.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__26134 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__26134__delegate.call(this, f, c1, c2, c3, colls);
};
G__26134.cljs$lang$maxFixedArity = 4;
G__26134.cljs$lang$applyTo = (function (arglist__26135){
var f = cljs.core.first(arglist__26135);
var c1 = cljs.core.first(cljs.core.next(arglist__26135));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26135)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26135))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26135))));
return G__26134__delegate.call(this, f, c1, c2, c3, colls);
});
return G__26134;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__26129.call(this,f,c1);
case  3 :
return map__26130.call(this,f,c1,c2);
case  4 :
return map__26131.call(this,f,c1,c2,c3);
default:
return map__26132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__26132.cljs$lang$applyTo;
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
{var temp__3698__auto____26136 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26136))
{var s__26137 = temp__3698__auto____26136;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__26137),take.call(null,(n - 1),cljs.core.rest.call(null,s__26137)));
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
var step__26140 = (function (n,coll){
while(true){
var s__26138 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____26139 = (n > 0);

if(cljs.core.truth_(and__3546__auto____26139))
{return s__26138;
} else
{return and__3546__auto____26139;
}
})()))
{{
var G__26141 = (n - 1);
var G__26142 = cljs.core.rest.call(null,s__26138);
n = G__26141;
coll = G__26142;
continue;
}
} else
{return s__26138;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__26140.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__26143 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__26144 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__26143.call(this,n);
case  2 :
return drop_last__26144.call(this,n,s);
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
var s__26146 = cljs.core.seq.call(null,coll);
var lead__26147 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__26147))
{{
var G__26148 = cljs.core.next.call(null,s__26146);
var G__26149 = cljs.core.next.call(null,lead__26147);
s__26146 = G__26148;
lead__26147 = G__26149;
continue;
}
} else
{return s__26146;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__26152 = (function (pred,coll){
while(true){
var s__26150 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____26151 = s__26150;

if(cljs.core.truth_(and__3546__auto____26151))
{return pred.call(null,cljs.core.first.call(null,s__26150));
} else
{return and__3546__auto____26151;
}
})()))
{{
var G__26153 = pred;
var G__26154 = cljs.core.rest.call(null,s__26150);
pred = G__26153;
coll = G__26154;
continue;
}
} else
{return s__26150;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__26152.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26155 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26155))
{var s__26156 = temp__3698__auto____26155;

return cljs.core.concat.call(null,s__26156,cycle.call(null,s__26156));
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
var repeat__26157 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__26158 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__26157.call(this,n);
case  2 :
return repeat__26158.call(this,n,x);
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
var repeatedly__26160 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__26161 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__26160.call(this,n);
case  2 :
return repeatedly__26161.call(this,n,f);
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
var interleave__26167 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__26163 = cljs.core.seq.call(null,c1);
var s2__26164 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____26165 = s1__26163;

if(cljs.core.truth_(and__3546__auto____26165))
{return s2__26164;
} else
{return and__3546__auto____26165;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__26163),cljs.core.cons.call(null,cljs.core.first.call(null,s2__26164),interleave.call(null,cljs.core.rest.call(null,s1__26163),cljs.core.rest.call(null,s2__26164))));
} else
{return null;
}
})));
});
var interleave__26168 = (function() { 
var G__26170__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__26166 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__26166)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__26166),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__26166)));
} else
{return null;
}
})));
};
var G__26170 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26170__delegate.call(this, c1, c2, colls);
};
G__26170.cljs$lang$maxFixedArity = 2;
G__26170.cljs$lang$applyTo = (function (arglist__26171){
var c1 = cljs.core.first(arglist__26171);
var c2 = cljs.core.first(cljs.core.next(arglist__26171));
var colls = cljs.core.rest(cljs.core.next(arglist__26171));
return G__26170__delegate.call(this, c1, c2, colls);
});
return G__26170;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__26167.call(this,c1,c2);
default:
return interleave__26168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__26168.cljs$lang$applyTo;
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
var cat__26174 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____26172 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____26172))
{var coll__26173 = temp__3695__auto____26172;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__26173),cat.call(null,cljs.core.rest.call(null,coll__26173),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__26174.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__26175 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__26176 = (function() { 
var G__26178__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__26178 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26178__delegate.call(this, f, coll, colls);
};
G__26178.cljs$lang$maxFixedArity = 2;
G__26178.cljs$lang$applyTo = (function (arglist__26179){
var f = cljs.core.first(arglist__26179);
var coll = cljs.core.first(cljs.core.next(arglist__26179));
var colls = cljs.core.rest(cljs.core.next(arglist__26179));
return G__26178__delegate.call(this, f, coll, colls);
});
return G__26178;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__26175.call(this,f,coll);
default:
return mapcat__26176.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__26176.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26180 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26180))
{var s__26181 = temp__3698__auto____26180;

var f__26182 = cljs.core.first.call(null,s__26181);
var r__26183 = cljs.core.rest.call(null,s__26181);

if(cljs.core.truth_(pred.call(null,f__26182)))
{return cljs.core.cons.call(null,f__26182,filter.call(null,pred,r__26183));
} else
{return filter.call(null,pred,r__26183);
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
var walk__26185 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__26185.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__26184_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__26184_SHARP_));
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
var partition__26192 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__26193 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26186 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26186))
{var s__26187 = temp__3698__auto____26186;

var p__26188 = cljs.core.take.call(null,n,s__26187);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__26188))))
{return cljs.core.cons.call(null,p__26188,partition.call(null,n,step,cljs.core.drop.call(null,step,s__26187)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__26194 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26189 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26189))
{var s__26190 = temp__3698__auto____26189;

var p__26191 = cljs.core.take.call(null,n,s__26190);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__26191))))
{return cljs.core.cons.call(null,p__26191,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__26190)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__26191,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__26192.call(this,n,step);
case  3 :
return partition__26193.call(this,n,step,pad);
case  4 :
return partition__26194.call(this,n,step,pad,coll);
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
var get_in__26200 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__26201 = (function (m,ks,not_found){
var sentinel__26196 = cljs.core.lookup_sentinel;
var m__26197 = m;
var ks__26198 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__26198))
{var m__26199 = cljs.core.get.call(null,m__26197,cljs.core.first.call(null,ks__26198),sentinel__26196);

if(cljs.core.truth_((sentinel__26196 === m__26199)))
{return not_found;
} else
{{
var G__26203 = sentinel__26196;
var G__26204 = m__26199;
var G__26205 = cljs.core.next.call(null,ks__26198);
sentinel__26196 = G__26203;
m__26197 = G__26204;
ks__26198 = G__26205;
continue;
}
}
} else
{return m__26197;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__26200.call(this,m,ks);
case  3 :
return get_in__26201.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__26206,v){
var vec__26207__26208 = p__26206;
var k__26209 = cljs.core.nth.call(null,vec__26207__26208,0,null);
var ks__26210 = cljs.core.nthnext.call(null,vec__26207__26208,1);

if(cljs.core.truth_(ks__26210))
{return cljs.core.assoc.call(null,m,k__26209,assoc_in.call(null,cljs.core.get.call(null,m,k__26209),ks__26210,v));
} else
{return cljs.core.assoc.call(null,m,k__26209,v);
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
var update_in__delegate = function (m,p__26211,f,args){
var vec__26212__26213 = p__26211;
var k__26214 = cljs.core.nth.call(null,vec__26212__26213,0,null);
var ks__26215 = cljs.core.nthnext.call(null,vec__26212__26213,1);

if(cljs.core.truth_(ks__26215))
{return cljs.core.assoc.call(null,m,k__26214,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__26214),ks__26215,f,args));
} else
{return cljs.core.assoc.call(null,m,k__26214,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__26214),args));
}
};
var update_in = function (m,p__26211,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__26211, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__26216){
var m = cljs.core.first(arglist__26216);
var p__26211 = cljs.core.first(cljs.core.next(arglist__26216));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26216)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26216)));
return update_in__delegate.call(this, m, p__26211, f, args);
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
var this__26217 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__26250 = null;
var G__26250__26251 = (function (coll,k){
var this__26218 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__26250__26252 = (function (coll,k,not_found){
var this__26219 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__26250 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__26250__26251.call(this,coll,k);
case  3 :
return G__26250__26252.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26250;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__26220 = this;
var new_array__26221 = cljs.core.aclone.call(null,this__26220.array);

(new_array__26221[k] = v);
return (new cljs.core.Vector(this__26220.meta,new_array__26221));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__26254 = null;
var G__26254__26255 = (function (tsym26222,k){
var this__26224 = this;
var tsym26222__26225 = this;

var coll__26226 = tsym26222__26225;

return cljs.core._lookup.call(null,coll__26226,k);
});
var G__26254__26256 = (function (tsym26223,k,not_found){
var this__26227 = this;
var tsym26223__26228 = this;

var coll__26229 = tsym26223__26228;

return cljs.core._lookup.call(null,coll__26229,k,not_found);
});
G__26254 = function(tsym26223,k,not_found){
switch(arguments.length){
case  2 :
return G__26254__26255.call(this,tsym26223,k);
case  3 :
return G__26254__26256.call(this,tsym26223,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26254;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26230 = this;
var new_array__26231 = cljs.core.aclone.call(null,this__26230.array);

new_array__26231.push(o);
return (new cljs.core.Vector(this__26230.meta,new_array__26231));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__26258 = null;
var G__26258__26259 = (function (v,f){
var this__26232 = this;
return cljs.core.ci_reduce.call(null,this__26232.array,f);
});
var G__26258__26260 = (function (v,f,start){
var this__26233 = this;
return cljs.core.ci_reduce.call(null,this__26233.array,f,start);
});
G__26258 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__26258__26259.call(this,v,f);
case  3 :
return G__26258__26260.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26258;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26234 = this;
if(cljs.core.truth_((this__26234.array.length > 0)))
{var vector_seq__26235 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__26234.array.length)))
{return cljs.core.cons.call(null,(this__26234.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__26235.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26236 = this;
return this__26236.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__26237 = this;
var count__26238 = this__26237.array.length;

if(cljs.core.truth_((count__26238 > 0)))
{return (this__26237.array[(count__26238 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__26239 = this;
if(cljs.core.truth_((this__26239.array.length > 0)))
{var new_array__26240 = cljs.core.aclone.call(null,this__26239.array);

new_array__26240.pop();
return (new cljs.core.Vector(this__26239.meta,new_array__26240));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__26241 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26242 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26243 = this;
return (new cljs.core.Vector(meta,this__26243.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26244 = this;
return this__26244.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__26262 = null;
var G__26262__26263 = (function (coll,n){
var this__26245 = this;
if(cljs.core.truth_((function (){var and__3546__auto____26246 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____26246))
{return (n < this__26245.array.length);
} else
{return and__3546__auto____26246;
}
})()))
{return (this__26245.array[n]);
} else
{return null;
}
});
var G__26262__26264 = (function (coll,n,not_found){
var this__26247 = this;
if(cljs.core.truth_((function (){var and__3546__auto____26248 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____26248))
{return (n < this__26247.array.length);
} else
{return and__3546__auto____26248;
}
})()))
{return (this__26247.array[n]);
} else
{return not_found;
}
});
G__26262 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__26262__26263.call(this,coll,n);
case  3 :
return G__26262__26264.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26262;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26249 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__26249.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__26266 = pv.cnt;

if(cljs.core.truth_((cnt__26266 < 32)))
{return 0;
} else
{return (((cnt__26266 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__26267 = level;
var ret__26268 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__26267)))
{return ret__26268;
} else
{var embed__26269 = ret__26268;
var r__26270 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___26271 = (r__26270[0] = embed__26269);

{
var G__26272 = (ll__26267 - 5);
var G__26273 = r__26270;
ll__26267 = G__26272;
ret__26268 = G__26273;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__26274 = cljs.core.aclone.call(null,parent);
var subidx__26275 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__26274[subidx__26275] = tailnode);
return ret__26274;
} else
{var temp__3695__auto____26276 = (parent[subidx__26275]);

if(cljs.core.truth_(temp__3695__auto____26276))
{var child__26277 = temp__3695__auto____26276;

var node_to_insert__26278 = push_tail.call(null,pv,(level - 5),child__26277,tailnode);
var ___26279 = (ret__26274[subidx__26275] = node_to_insert__26278);

return ret__26274;
} else
{var node_to_insert__26280 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___26281 = (ret__26274[subidx__26275] = node_to_insert__26280);

return ret__26274;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____26282 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____26282))
{return (i < pv.cnt);
} else
{return and__3546__auto____26282;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__26283 = pv.root;
var level__26284 = pv.shift;

while(true){
if(cljs.core.truth_((level__26284 > 0)))
{{
var G__26285 = (node__26283[((i >> level__26284) & 31)]);
var G__26286 = (level__26284 - 5);
node__26283 = G__26285;
level__26284 = G__26286;
continue;
}
} else
{return node__26283;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__26287 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__26287[(i & 31)] = val);
return ret__26287;
} else
{var subidx__26288 = ((i >> level) & 31);
var ___26289 = (ret__26287[subidx__26288] = do_assoc.call(null,pv,(level - 5),(node[subidx__26288]),i,val));

return ret__26287;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__26290 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__26291 = pop_tail.call(null,pv,(level - 5),(node[subidx__26290]));

if(cljs.core.truth_((function (){var and__3546__auto____26292 = (new_child__26291 === null);

if(cljs.core.truth_(and__3546__auto____26292))
{return (subidx__26290 === 0);
} else
{return and__3546__auto____26292;
}
})()))
{return null;
} else
{var ret__26293 = cljs.core.aclone.call(null,node);
var ___26294 = (ret__26293[subidx__26290] = new_child__26291);

return ret__26293;
}
} else
{if(cljs.core.truth_((subidx__26290 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__26295 = cljs.core.aclone.call(null,node);
var ___26296 = (ret__26295[subidx__26290] = null);

return ret__26295;
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
var this__26297 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__26337 = null;
var G__26337__26338 = (function (coll,k){
var this__26298 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__26337__26339 = (function (coll,k,not_found){
var this__26299 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__26337 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__26337__26338.call(this,coll,k);
case  3 :
return G__26337__26339.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26337;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__26300 = this;
if(cljs.core.truth_((function (){var and__3546__auto____26301 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____26301))
{return (k < this__26300.cnt);
} else
{return and__3546__auto____26301;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__26302 = cljs.core.aclone.call(null,this__26300.tail);

(new_tail__26302[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__26300.meta,this__26300.cnt,this__26300.shift,this__26300.root,new_tail__26302));
} else
{return (new cljs.core.PersistentVector(this__26300.meta,this__26300.cnt,this__26300.shift,cljs.core.do_assoc.call(null,coll,this__26300.shift,this__26300.root,k,v),this__26300.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__26300.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__26300.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__26341 = null;
var G__26341__26342 = (function (tsym26303,k){
var this__26305 = this;
var tsym26303__26306 = this;

var coll__26307 = tsym26303__26306;

return cljs.core._lookup.call(null,coll__26307,k);
});
var G__26341__26343 = (function (tsym26304,k,not_found){
var this__26308 = this;
var tsym26304__26309 = this;

var coll__26310 = tsym26304__26309;

return cljs.core._lookup.call(null,coll__26310,k,not_found);
});
G__26341 = function(tsym26304,k,not_found){
switch(arguments.length){
case  2 :
return G__26341__26342.call(this,tsym26304,k);
case  3 :
return G__26341__26343.call(this,tsym26304,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26341;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26311 = this;
if(cljs.core.truth_(((this__26311.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__26312 = cljs.core.aclone.call(null,this__26311.tail);

new_tail__26312.push(o);
return (new cljs.core.PersistentVector(this__26311.meta,(this__26311.cnt + 1),this__26311.shift,this__26311.root,new_tail__26312));
} else
{var root_overflow_QMARK___26313 = ((this__26311.cnt >> 5) > (1 << this__26311.shift));
var new_shift__26314 = (cljs.core.truth_(root_overflow_QMARK___26313)?(this__26311.shift + 5):this__26311.shift);
var new_root__26316 = (cljs.core.truth_(root_overflow_QMARK___26313)?(function (){var n_r__26315 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__26315[0] = this__26311.root);
(n_r__26315[1] = cljs.core.new_path.call(null,this__26311.shift,this__26311.tail));
return n_r__26315;
})():cljs.core.push_tail.call(null,coll,this__26311.shift,this__26311.root,this__26311.tail));

return (new cljs.core.PersistentVector(this__26311.meta,(this__26311.cnt + 1),new_shift__26314,new_root__26316,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__26345 = null;
var G__26345__26346 = (function (v,f){
var this__26317 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__26345__26347 = (function (v,f,start){
var this__26318 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__26345 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__26345__26346.call(this,v,f);
case  3 :
return G__26345__26347.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26345;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26319 = this;
if(cljs.core.truth_((this__26319.cnt > 0)))
{var vector_seq__26320 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__26319.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__26320.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26321 = this;
return this__26321.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__26322 = this;
if(cljs.core.truth_((this__26322.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__26322.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__26323 = this;
if(cljs.core.truth_((this__26323.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__26323.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__26323.meta);
} else
{if(cljs.core.truth_((1 < (this__26323.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__26323.meta,(this__26323.cnt - 1),this__26323.shift,this__26323.root,cljs.core.aclone.call(null,this__26323.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__26324 = cljs.core.array_for.call(null,coll,(this__26323.cnt - 2));
var nr__26325 = cljs.core.pop_tail.call(null,this__26323.shift,this__26323.root);
var new_root__26326 = (cljs.core.truth_((nr__26325 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__26325);
var cnt_1__26327 = (this__26323.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____26328 = (5 < this__26323.shift);

if(cljs.core.truth_(and__3546__auto____26328))
{return ((new_root__26326[1]) === null);
} else
{return and__3546__auto____26328;
}
})()))
{return (new cljs.core.PersistentVector(this__26323.meta,cnt_1__26327,(this__26323.shift - 5),(new_root__26326[0]),new_tail__26324));
} else
{return (new cljs.core.PersistentVector(this__26323.meta,cnt_1__26327,this__26323.shift,new_root__26326,new_tail__26324));
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
var this__26329 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26330 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26331 = this;
return (new cljs.core.PersistentVector(meta,this__26331.cnt,this__26331.shift,this__26331.root,this__26331.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26332 = this;
return this__26332.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__26349 = null;
var G__26349__26350 = (function (coll,n){
var this__26333 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__26349__26351 = (function (coll,n,not_found){
var this__26334 = this;
if(cljs.core.truth_((function (){var and__3546__auto____26335 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____26335))
{return (n < this__26334.cnt);
} else
{return and__3546__auto____26335;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__26349 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__26349__26350.call(this,coll,n);
case  3 :
return G__26349__26351.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26349;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26336 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__26336.meta);
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
vector.cljs$lang$applyTo = (function (arglist__26353){
var args = cljs.core.seq( arglist__26353 );;
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
var this__26354 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__26382 = null;
var G__26382__26383 = (function (coll,k){
var this__26355 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__26382__26384 = (function (coll,k,not_found){
var this__26356 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__26382 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__26382__26383.call(this,coll,k);
case  3 :
return G__26382__26384.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26382;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__26357 = this;
var v_pos__26358 = (this__26357.start + key);

return (new cljs.core.Subvec(this__26357.meta,cljs.core._assoc.call(null,this__26357.v,v_pos__26358,val),this__26357.start,((this__26357.end > (v_pos__26358 + 1)) ? this__26357.end : (v_pos__26358 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__26386 = null;
var G__26386__26387 = (function (tsym26359,k){
var this__26361 = this;
var tsym26359__26362 = this;

var coll__26363 = tsym26359__26362;

return cljs.core._lookup.call(null,coll__26363,k);
});
var G__26386__26388 = (function (tsym26360,k,not_found){
var this__26364 = this;
var tsym26360__26365 = this;

var coll__26366 = tsym26360__26365;

return cljs.core._lookup.call(null,coll__26366,k,not_found);
});
G__26386 = function(tsym26360,k,not_found){
switch(arguments.length){
case  2 :
return G__26386__26387.call(this,tsym26360,k);
case  3 :
return G__26386__26388.call(this,tsym26360,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26386;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26367 = this;
return (new cljs.core.Subvec(this__26367.meta,cljs.core._assoc_n.call(null,this__26367.v,this__26367.end,o),this__26367.start,(this__26367.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__26390 = null;
var G__26390__26391 = (function (coll,f){
var this__26368 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__26390__26392 = (function (coll,f,start){
var this__26369 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__26390 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__26390__26391.call(this,coll,f);
case  3 :
return G__26390__26392.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26390;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26370 = this;
var subvec_seq__26371 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__26370.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__26370.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__26371.call(null,this__26370.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26372 = this;
return (this__26372.end - this__26372.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__26373 = this;
return cljs.core._nth.call(null,this__26373.v,(this__26373.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__26374 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__26374.start,this__26374.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__26374.meta,this__26374.v,this__26374.start,(this__26374.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__26375 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26376 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26377 = this;
return (new cljs.core.Subvec(meta,this__26377.v,this__26377.start,this__26377.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26378 = this;
return this__26378.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__26394 = null;
var G__26394__26395 = (function (coll,n){
var this__26379 = this;
return cljs.core._nth.call(null,this__26379.v,(this__26379.start + n));
});
var G__26394__26396 = (function (coll,n,not_found){
var this__26380 = this;
return cljs.core._nth.call(null,this__26380.v,(this__26380.start + n),not_found);
});
G__26394 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__26394__26395.call(this,coll,n);
case  3 :
return G__26394__26396.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26394;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26381 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__26381.meta);
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
var subvec__26398 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__26399 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__26398.call(this,v,start);
case  3 :
return subvec__26399.call(this,v,start,end);
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
var this__26401 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__26402 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26403 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26404 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__26404.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26405 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__26406 = this;
return cljs.core._first.call(null,this__26406.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__26407 = this;
var temp__3695__auto____26408 = cljs.core.next.call(null,this__26407.front);

if(cljs.core.truth_(temp__3695__auto____26408))
{var f1__26409 = temp__3695__auto____26408;

return (new cljs.core.PersistentQueueSeq(this__26407.meta,f1__26409,this__26407.rear));
} else
{if(cljs.core.truth_((this__26407.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__26407.meta,this__26407.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26410 = this;
return this__26410.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26411 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__26411.front,this__26411.rear));
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
var this__26412 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26413 = this;
if(cljs.core.truth_(this__26413.front))
{return (new cljs.core.PersistentQueue(this__26413.meta,(this__26413.count + 1),this__26413.front,cljs.core.conj.call(null,(function (){var or__3548__auto____26414 = this__26413.rear;

if(cljs.core.truth_(or__3548__auto____26414))
{return or__3548__auto____26414;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__26413.meta,(this__26413.count + 1),cljs.core.conj.call(null,this__26413.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26415 = this;
var rear__26416 = cljs.core.seq.call(null,this__26415.rear);

if(cljs.core.truth_((function (){var or__3548__auto____26417 = this__26415.front;

if(cljs.core.truth_(or__3548__auto____26417))
{return or__3548__auto____26417;
} else
{return rear__26416;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__26415.front,cljs.core.seq.call(null,rear__26416)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26418 = this;
return this__26418.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__26419 = this;
return cljs.core._first.call(null,this__26419.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__26420 = this;
if(cljs.core.truth_(this__26420.front))
{var temp__3695__auto____26421 = cljs.core.next.call(null,this__26420.front);

if(cljs.core.truth_(temp__3695__auto____26421))
{var f1__26422 = temp__3695__auto____26421;

return (new cljs.core.PersistentQueue(this__26420.meta,(this__26420.count - 1),f1__26422,this__26420.rear));
} else
{return (new cljs.core.PersistentQueue(this__26420.meta,(this__26420.count - 1),cljs.core.seq.call(null,this__26420.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__26423 = this;
return cljs.core.first.call(null,this__26423.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__26424 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26425 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26426 = this;
return (new cljs.core.PersistentQueue(meta,this__26426.count,this__26426.front,this__26426.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26427 = this;
return this__26427.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26428 = this;
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
var this__26429 = this;
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
var len__26430 = array.length;

var i__26431 = 0;

while(true){
if(cljs.core.truth_((i__26431 < len__26430)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__26431]))))
{return i__26431;
} else
{{
var G__26432 = (i__26431 + incr);
i__26431 = G__26432;
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
var obj_map_contains_key_QMARK___26434 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___26435 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____26433 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____26433))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____26433;
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
return obj_map_contains_key_QMARK___26434.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___26435.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__26438 = cljs.core.hash.call(null,a);
var b__26439 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__26438 < b__26439)))
{return -1;
} else
{if(cljs.core.truth_((a__26438 > b__26439)))
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
var this__26440 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__26467 = null;
var G__26467__26468 = (function (coll,k){
var this__26441 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__26467__26469 = (function (coll,k,not_found){
var this__26442 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__26442.strobj,(this__26442.strobj[k]),not_found);
});
G__26467 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__26467__26468.call(this,coll,k);
case  3 :
return G__26467__26469.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26467;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__26443 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__26444 = goog.object.clone.call(null,this__26443.strobj);
var overwrite_QMARK___26445 = new_strobj__26444.hasOwnProperty(k);

(new_strobj__26444[k] = v);
if(cljs.core.truth_(overwrite_QMARK___26445))
{return (new cljs.core.ObjMap(this__26443.meta,this__26443.keys,new_strobj__26444));
} else
{var new_keys__26446 = cljs.core.aclone.call(null,this__26443.keys);

new_keys__26446.push(k);
return (new cljs.core.ObjMap(this__26443.meta,new_keys__26446,new_strobj__26444));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__26443.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__26447 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__26447.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__26471 = null;
var G__26471__26472 = (function (tsym26448,k){
var this__26450 = this;
var tsym26448__26451 = this;

var coll__26452 = tsym26448__26451;

return cljs.core._lookup.call(null,coll__26452,k);
});
var G__26471__26473 = (function (tsym26449,k,not_found){
var this__26453 = this;
var tsym26449__26454 = this;

var coll__26455 = tsym26449__26454;

return cljs.core._lookup.call(null,coll__26455,k,not_found);
});
G__26471 = function(tsym26449,k,not_found){
switch(arguments.length){
case  2 :
return G__26471__26472.call(this,tsym26449,k);
case  3 :
return G__26471__26473.call(this,tsym26449,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26471;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__26456 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26457 = this;
if(cljs.core.truth_((this__26457.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__26437_SHARP_){
return cljs.core.vector.call(null,p1__26437_SHARP_,(this__26457.strobj[p1__26437_SHARP_]));
}),this__26457.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26458 = this;
return this__26458.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26459 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26460 = this;
return (new cljs.core.ObjMap(meta,this__26460.keys,this__26460.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26461 = this;
return this__26461.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26462 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__26462.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__26463 = this;
if(cljs.core.truth_((function (){var and__3546__auto____26464 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____26464))
{return this__26463.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____26464;
}
})()))
{var new_keys__26465 = cljs.core.aclone.call(null,this__26463.keys);
var new_strobj__26466 = goog.object.clone.call(null,this__26463.strobj);

new_keys__26465.splice(cljs.core.scan_array.call(null,1,k,new_keys__26465),1);
cljs.core.js_delete.call(null,new_strobj__26466,k);
return (new cljs.core.ObjMap(this__26463.meta,new_keys__26465,new_strobj__26466));
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
var this__26476 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__26514 = null;
var G__26514__26515 = (function (coll,k){
var this__26477 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__26514__26516 = (function (coll,k,not_found){
var this__26478 = this;
var bucket__26479 = (this__26478.hashobj[cljs.core.hash.call(null,k)]);
var i__26480 = (cljs.core.truth_(bucket__26479)?cljs.core.scan_array.call(null,2,k,bucket__26479):null);

if(cljs.core.truth_(i__26480))
{return (bucket__26479[(i__26480 + 1)]);
} else
{return not_found;
}
});
G__26514 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__26514__26515.call(this,coll,k);
case  3 :
return G__26514__26516.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26514;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__26481 = this;
var h__26482 = cljs.core.hash.call(null,k);
var bucket__26483 = (this__26481.hashobj[h__26482]);

if(cljs.core.truth_(bucket__26483))
{var new_bucket__26484 = cljs.core.aclone.call(null,bucket__26483);
var new_hashobj__26485 = goog.object.clone.call(null,this__26481.hashobj);

(new_hashobj__26485[h__26482] = new_bucket__26484);
var temp__3695__auto____26486 = cljs.core.scan_array.call(null,2,k,new_bucket__26484);

if(cljs.core.truth_(temp__3695__auto____26486))
{var i__26487 = temp__3695__auto____26486;

(new_bucket__26484[(i__26487 + 1)] = v);
return (new cljs.core.HashMap(this__26481.meta,this__26481.count,new_hashobj__26485));
} else
{new_bucket__26484.push(k,v);
return (new cljs.core.HashMap(this__26481.meta,(this__26481.count + 1),new_hashobj__26485));
}
} else
{var new_hashobj__26488 = goog.object.clone.call(null,this__26481.hashobj);

(new_hashobj__26488[h__26482] = [k,v]);
return (new cljs.core.HashMap(this__26481.meta,(this__26481.count + 1),new_hashobj__26488));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__26489 = this;
var bucket__26490 = (this__26489.hashobj[cljs.core.hash.call(null,k)]);
var i__26491 = (cljs.core.truth_(bucket__26490)?cljs.core.scan_array.call(null,2,k,bucket__26490):null);

if(cljs.core.truth_(i__26491))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__26518 = null;
var G__26518__26519 = (function (tsym26492,k){
var this__26494 = this;
var tsym26492__26495 = this;

var coll__26496 = tsym26492__26495;

return cljs.core._lookup.call(null,coll__26496,k);
});
var G__26518__26520 = (function (tsym26493,k,not_found){
var this__26497 = this;
var tsym26493__26498 = this;

var coll__26499 = tsym26493__26498;

return cljs.core._lookup.call(null,coll__26499,k,not_found);
});
G__26518 = function(tsym26493,k,not_found){
switch(arguments.length){
case  2 :
return G__26518__26519.call(this,tsym26493,k);
case  3 :
return G__26518__26520.call(this,tsym26493,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26518;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__26500 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26501 = this;
if(cljs.core.truth_((this__26501.count > 0)))
{var hashes__26502 = cljs.core.js_keys.call(null,this__26501.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__26475_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__26501.hashobj[p1__26475_SHARP_])));
}),hashes__26502);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26503 = this;
return this__26503.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26504 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26505 = this;
return (new cljs.core.HashMap(meta,this__26505.count,this__26505.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26506 = this;
return this__26506.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26507 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__26507.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__26508 = this;
var h__26509 = cljs.core.hash.call(null,k);
var bucket__26510 = (this__26508.hashobj[h__26509]);
var i__26511 = (cljs.core.truth_(bucket__26510)?cljs.core.scan_array.call(null,2,k,bucket__26510):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__26511)))
{return coll;
} else
{var new_hashobj__26512 = goog.object.clone.call(null,this__26508.hashobj);

if(cljs.core.truth_((3 > bucket__26510.length)))
{cljs.core.js_delete.call(null,new_hashobj__26512,h__26509);
} else
{var new_bucket__26513 = cljs.core.aclone.call(null,bucket__26510);

new_bucket__26513.splice(i__26511,2);
(new_hashobj__26512[h__26509] = new_bucket__26513);
}
return (new cljs.core.HashMap(this__26508.meta,(this__26508.count - 1),new_hashobj__26512));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__26522 = ks.length;

var i__26523 = 0;
var out__26524 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__26523 < len__26522)))
{{
var G__26525 = (i__26523 + 1);
var G__26526 = cljs.core.assoc.call(null,out__26524,(ks[i__26523]),(vs[i__26523]));
i__26523 = G__26525;
out__26524 = G__26526;
continue;
}
} else
{return out__26524;
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
var in$__26527 = cljs.core.seq.call(null,keyvals);
var out__26528 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__26527))
{{
var G__26529 = cljs.core.nnext.call(null,in$__26527);
var G__26530 = cljs.core.assoc.call(null,out__26528,cljs.core.first.call(null,in$__26527),cljs.core.second.call(null,in$__26527));
in$__26527 = G__26529;
out__26528 = G__26530;
continue;
}
} else
{return out__26528;
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
hash_map.cljs$lang$applyTo = (function (arglist__26531){
var keyvals = cljs.core.seq( arglist__26531 );;
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
{return cljs.core.reduce.call(null,(function (p1__26532_SHARP_,p2__26533_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____26534 = p1__26532_SHARP_;

if(cljs.core.truth_(or__3548__auto____26534))
{return or__3548__auto____26534;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__26533_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__26535){
var maps = cljs.core.seq( arglist__26535 );;
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
{var merge_entry__26538 = (function (m,e){
var k__26536 = cljs.core.first.call(null,e);
var v__26537 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__26536)))
{return cljs.core.assoc.call(null,m,k__26536,f.call(null,cljs.core.get.call(null,m,k__26536),v__26537));
} else
{return cljs.core.assoc.call(null,m,k__26536,v__26537);
}
});
var merge2__26540 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__26538,(function (){var or__3548__auto____26539 = m1;

if(cljs.core.truth_(or__3548__auto____26539))
{return or__3548__auto____26539;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__26540,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__26541){
var f = cljs.core.first(arglist__26541);
var maps = cljs.core.rest(arglist__26541);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__26543 = cljs.core.ObjMap.fromObject([],{});
var keys__26544 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__26544))
{var key__26545 = cljs.core.first.call(null,keys__26544);
var entry__26546 = cljs.core.get.call(null,map,key__26545,"\uFDD0'user/not-found");

{
var G__26547 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__26546,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__26543,key__26545,entry__26546):ret__26543);
var G__26548 = cljs.core.next.call(null,keys__26544);
ret__26543 = G__26547;
keys__26544 = G__26548;
continue;
}
} else
{return ret__26543;
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
var this__26549 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__26570 = null;
var G__26570__26571 = (function (coll,v){
var this__26550 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__26570__26572 = (function (coll,v,not_found){
var this__26551 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__26551.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__26570 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__26570__26571.call(this,coll,v);
case  3 :
return G__26570__26572.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26570;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__26574 = null;
var G__26574__26575 = (function (tsym26552,k){
var this__26554 = this;
var tsym26552__26555 = this;

var coll__26556 = tsym26552__26555;

return cljs.core._lookup.call(null,coll__26556,k);
});
var G__26574__26576 = (function (tsym26553,k,not_found){
var this__26557 = this;
var tsym26553__26558 = this;

var coll__26559 = tsym26553__26558;

return cljs.core._lookup.call(null,coll__26559,k,not_found);
});
G__26574 = function(tsym26553,k,not_found){
switch(arguments.length){
case  2 :
return G__26574__26575.call(this,tsym26553,k);
case  3 :
return G__26574__26576.call(this,tsym26553,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26574;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26560 = this;
return (new cljs.core.Set(this__26560.meta,cljs.core.assoc.call(null,this__26560.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26561 = this;
return cljs.core.keys.call(null,this__26561.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__26562 = this;
return (new cljs.core.Set(this__26562.meta,cljs.core.dissoc.call(null,this__26562.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26563 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26564 = this;
var and__3546__auto____26565 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____26565))
{var and__3546__auto____26566 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____26566))
{return cljs.core.every_QMARK_.call(null,(function (p1__26542_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__26542_SHARP_);
}),other);
} else
{return and__3546__auto____26566;
}
} else
{return and__3546__auto____26565;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26567 = this;
return (new cljs.core.Set(meta,this__26567.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26568 = this;
return this__26568.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26569 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__26569.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__26579 = cljs.core.seq.call(null,coll);
var out__26580 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__26579))))
{{
var G__26581 = cljs.core.rest.call(null,in$__26579);
var G__26582 = cljs.core.conj.call(null,out__26580,cljs.core.first.call(null,in$__26579));
in$__26579 = G__26581;
out__26580 = G__26582;
continue;
}
} else
{return out__26580;
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
{var n__26583 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____26584 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____26584))
{var e__26585 = temp__3695__auto____26584;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__26585));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__26583,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__26578_SHARP_){
var temp__3695__auto____26586 = cljs.core.find.call(null,smap,p1__26578_SHARP_);

if(cljs.core.truth_(temp__3695__auto____26586))
{var e__26587 = temp__3695__auto____26586;

return cljs.core.second.call(null,e__26587);
} else
{return p1__26578_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__26595 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__26588,seen){
while(true){
var vec__26589__26590 = p__26588;
var f__26591 = cljs.core.nth.call(null,vec__26589__26590,0,null);
var xs__26592 = vec__26589__26590;

var temp__3698__auto____26593 = cljs.core.seq.call(null,xs__26592);

if(cljs.core.truth_(temp__3698__auto____26593))
{var s__26594 = temp__3698__auto____26593;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__26591)))
{{
var G__26596 = cljs.core.rest.call(null,s__26594);
var G__26597 = seen;
p__26588 = G__26596;
seen = G__26597;
continue;
}
} else
{return cljs.core.cons.call(null,f__26591,step.call(null,cljs.core.rest.call(null,s__26594),cljs.core.conj.call(null,seen,f__26591)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__26595.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__26598 = cljs.core.PersistentVector.fromArray([]);
var s__26599 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__26599)))
{{
var G__26600 = cljs.core.conj.call(null,ret__26598,cljs.core.first.call(null,s__26599));
var G__26601 = cljs.core.next.call(null,s__26599);
ret__26598 = G__26600;
s__26599 = G__26601;
continue;
}
} else
{return cljs.core.seq.call(null,ret__26598);
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
{if(cljs.core.truth_((function (){var or__3548__auto____26602 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____26602))
{return or__3548__auto____26602;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__26603 = x.lastIndexOf("/");

if(cljs.core.truth_((i__26603 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__26603 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____26604 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____26604))
{return or__3548__auto____26604;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__26605 = x.lastIndexOf("/");

if(cljs.core.truth_((i__26605 > -1)))
{return cljs.core.subs.call(null,x,2,i__26605);
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
var map__26608 = cljs.core.ObjMap.fromObject([],{});
var ks__26609 = cljs.core.seq.call(null,keys);
var vs__26610 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____26611 = ks__26609;

if(cljs.core.truth_(and__3546__auto____26611))
{return vs__26610;
} else
{return and__3546__auto____26611;
}
})()))
{{
var G__26612 = cljs.core.assoc.call(null,map__26608,cljs.core.first.call(null,ks__26609),cljs.core.first.call(null,vs__26610));
var G__26613 = cljs.core.next.call(null,ks__26609);
var G__26614 = cljs.core.next.call(null,vs__26610);
map__26608 = G__26612;
ks__26609 = G__26613;
vs__26610 = G__26614;
continue;
}
} else
{return map__26608;
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
var max_key__26617 = (function (k,x){
return x;
});
var max_key__26618 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__26619 = (function() { 
var G__26621__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__26606_SHARP_,p2__26607_SHARP_){
return max_key.call(null,k,p1__26606_SHARP_,p2__26607_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__26621 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26621__delegate.call(this, k, x, y, more);
};
G__26621.cljs$lang$maxFixedArity = 3;
G__26621.cljs$lang$applyTo = (function (arglist__26622){
var k = cljs.core.first(arglist__26622);
var x = cljs.core.first(cljs.core.next(arglist__26622));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26622)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26622)));
return G__26621__delegate.call(this, k, x, y, more);
});
return G__26621;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__26617.call(this,k,x);
case  3 :
return max_key__26618.call(this,k,x,y);
default:
return max_key__26619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__26619.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__26623 = (function (k,x){
return x;
});
var min_key__26624 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__26625 = (function() { 
var G__26627__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__26615_SHARP_,p2__26616_SHARP_){
return min_key.call(null,k,p1__26615_SHARP_,p2__26616_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__26627 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26627__delegate.call(this, k, x, y, more);
};
G__26627.cljs$lang$maxFixedArity = 3;
G__26627.cljs$lang$applyTo = (function (arglist__26628){
var k = cljs.core.first(arglist__26628);
var x = cljs.core.first(cljs.core.next(arglist__26628));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26628)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26628)));
return G__26627__delegate.call(this, k, x, y, more);
});
return G__26627;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__26623.call(this,k,x);
case  3 :
return min_key__26624.call(this,k,x,y);
default:
return min_key__26625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__26625.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__26631 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__26632 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26629 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26629))
{var s__26630 = temp__3698__auto____26629;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__26630),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__26630)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__26631.call(this,n,step);
case  3 :
return partition_all__26632.call(this,n,step,coll);
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
var temp__3698__auto____26634 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26634))
{var s__26635 = temp__3698__auto____26634;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__26635))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__26635),take_while.call(null,pred,cljs.core.rest.call(null,s__26635)));
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
var this__26636 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__26637 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__26653 = null;
var G__26653__26654 = (function (rng,f){
var this__26638 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__26653__26655 = (function (rng,f,s){
var this__26639 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__26653 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__26653__26654.call(this,rng,f);
case  3 :
return G__26653__26655.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26653;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__26640 = this;
var comp__26641 = (cljs.core.truth_((this__26640.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__26641.call(null,this__26640.start,this__26640.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__26642 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__26642.end - this__26642.start) / this__26642.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__26643 = this;
return this__26643.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__26644 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__26644.meta,(this__26644.start + this__26644.step),this__26644.end,this__26644.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__26645 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__26646 = this;
return (new cljs.core.Range(meta,this__26646.start,this__26646.end,this__26646.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__26647 = this;
return this__26647.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__26657 = null;
var G__26657__26658 = (function (rng,n){
var this__26648 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__26648.start + (n * this__26648.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____26649 = (this__26648.start > this__26648.end);

if(cljs.core.truth_(and__3546__auto____26649))
{return cljs.core._EQ_.call(null,this__26648.step,0);
} else
{return and__3546__auto____26649;
}
})()))
{return this__26648.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__26657__26659 = (function (rng,n,not_found){
var this__26650 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__26650.start + (n * this__26650.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____26651 = (this__26650.start > this__26650.end);

if(cljs.core.truth_(and__3546__auto____26651))
{return cljs.core._EQ_.call(null,this__26650.step,0);
} else
{return and__3546__auto____26651;
}
})()))
{return this__26650.start;
} else
{return not_found;
}
}
});
G__26657 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__26657__26658.call(this,rng,n);
case  3 :
return G__26657__26659.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26657;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__26652 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__26652.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__26661 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__26662 = (function (end){
return range.call(null,0,end,1);
});
var range__26663 = (function (start,end){
return range.call(null,start,end,1);
});
var range__26664 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__26661.call(this);
case  1 :
return range__26662.call(this,start);
case  2 :
return range__26663.call(this,start,end);
case  3 :
return range__26664.call(this,start,end,step);
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
var temp__3698__auto____26666 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26666))
{var s__26667 = temp__3698__auto____26666;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__26667),take_nth.call(null,n,cljs.core.drop.call(null,n,s__26667)));
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
var temp__3698__auto____26669 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26669))
{var s__26670 = temp__3698__auto____26669;

var fst__26671 = cljs.core.first.call(null,s__26670);
var fv__26672 = f.call(null,fst__26671);
var run__26673 = cljs.core.cons.call(null,fst__26671,cljs.core.take_while.call(null,(function (p1__26668_SHARP_){
return cljs.core._EQ_.call(null,fv__26672,f.call(null,p1__26668_SHARP_));
}),cljs.core.next.call(null,s__26670)));

return cljs.core.cons.call(null,run__26673,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__26673),s__26670))));
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
var reductions__26688 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____26684 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____26684))
{var s__26685 = temp__3695__auto____26684;

return reductions.call(null,f,cljs.core.first.call(null,s__26685),cljs.core.rest.call(null,s__26685));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__26689 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26686 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26686))
{var s__26687 = temp__3698__auto____26686;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__26687)),cljs.core.rest.call(null,s__26687));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__26688.call(this,f,init);
case  3 :
return reductions__26689.call(this,f,init,coll);
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
var juxt__26692 = (function (f){
return (function() {
var G__26697 = null;
var G__26697__26698 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__26697__26699 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__26697__26700 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__26697__26701 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__26697__26702 = (function() { 
var G__26704__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__26704 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26704__delegate.call(this, x, y, z, args);
};
G__26704.cljs$lang$maxFixedArity = 3;
G__26704.cljs$lang$applyTo = (function (arglist__26705){
var x = cljs.core.first(arglist__26705);
var y = cljs.core.first(cljs.core.next(arglist__26705));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26705)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26705)));
return G__26704__delegate.call(this, x, y, z, args);
});
return G__26704;
})()
;
G__26697 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__26697__26698.call(this);
case  1 :
return G__26697__26699.call(this,x);
case  2 :
return G__26697__26700.call(this,x,y);
case  3 :
return G__26697__26701.call(this,x,y,z);
default:
return G__26697__26702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__26697.cljs$lang$maxFixedArity = 3;
G__26697.cljs$lang$applyTo = G__26697__26702.cljs$lang$applyTo;
return G__26697;
})()
});
var juxt__26693 = (function (f,g){
return (function() {
var G__26706 = null;
var G__26706__26707 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__26706__26708 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__26706__26709 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__26706__26710 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__26706__26711 = (function() { 
var G__26713__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__26713 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26713__delegate.call(this, x, y, z, args);
};
G__26713.cljs$lang$maxFixedArity = 3;
G__26713.cljs$lang$applyTo = (function (arglist__26714){
var x = cljs.core.first(arglist__26714);
var y = cljs.core.first(cljs.core.next(arglist__26714));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26714)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26714)));
return G__26713__delegate.call(this, x, y, z, args);
});
return G__26713;
})()
;
G__26706 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__26706__26707.call(this);
case  1 :
return G__26706__26708.call(this,x);
case  2 :
return G__26706__26709.call(this,x,y);
case  3 :
return G__26706__26710.call(this,x,y,z);
default:
return G__26706__26711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__26706.cljs$lang$maxFixedArity = 3;
G__26706.cljs$lang$applyTo = G__26706__26711.cljs$lang$applyTo;
return G__26706;
})()
});
var juxt__26694 = (function (f,g,h){
return (function() {
var G__26715 = null;
var G__26715__26716 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__26715__26717 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__26715__26718 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__26715__26719 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__26715__26720 = (function() { 
var G__26722__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__26722 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26722__delegate.call(this, x, y, z, args);
};
G__26722.cljs$lang$maxFixedArity = 3;
G__26722.cljs$lang$applyTo = (function (arglist__26723){
var x = cljs.core.first(arglist__26723);
var y = cljs.core.first(cljs.core.next(arglist__26723));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26723)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26723)));
return G__26722__delegate.call(this, x, y, z, args);
});
return G__26722;
})()
;
G__26715 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__26715__26716.call(this);
case  1 :
return G__26715__26717.call(this,x);
case  2 :
return G__26715__26718.call(this,x,y);
case  3 :
return G__26715__26719.call(this,x,y,z);
default:
return G__26715__26720.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__26715.cljs$lang$maxFixedArity = 3;
G__26715.cljs$lang$applyTo = G__26715__26720.cljs$lang$applyTo;
return G__26715;
})()
});
var juxt__26695 = (function() { 
var G__26724__delegate = function (f,g,h,fs){
var fs__26691 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__26725 = null;
var G__26725__26726 = (function (){
return cljs.core.reduce.call(null,(function (p1__26674_SHARP_,p2__26675_SHARP_){
return cljs.core.conj.call(null,p1__26674_SHARP_,p2__26675_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__26691);
});
var G__26725__26727 = (function (x){
return cljs.core.reduce.call(null,(function (p1__26676_SHARP_,p2__26677_SHARP_){
return cljs.core.conj.call(null,p1__26676_SHARP_,p2__26677_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__26691);
});
var G__26725__26728 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__26678_SHARP_,p2__26679_SHARP_){
return cljs.core.conj.call(null,p1__26678_SHARP_,p2__26679_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__26691);
});
var G__26725__26729 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__26680_SHARP_,p2__26681_SHARP_){
return cljs.core.conj.call(null,p1__26680_SHARP_,p2__26681_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__26691);
});
var G__26725__26730 = (function() { 
var G__26732__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__26682_SHARP_,p2__26683_SHARP_){
return cljs.core.conj.call(null,p1__26682_SHARP_,cljs.core.apply.call(null,p2__26683_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__26691);
};
var G__26732 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26732__delegate.call(this, x, y, z, args);
};
G__26732.cljs$lang$maxFixedArity = 3;
G__26732.cljs$lang$applyTo = (function (arglist__26733){
var x = cljs.core.first(arglist__26733);
var y = cljs.core.first(cljs.core.next(arglist__26733));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26733)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26733)));
return G__26732__delegate.call(this, x, y, z, args);
});
return G__26732;
})()
;
G__26725 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__26725__26726.call(this);
case  1 :
return G__26725__26727.call(this,x);
case  2 :
return G__26725__26728.call(this,x,y);
case  3 :
return G__26725__26729.call(this,x,y,z);
default:
return G__26725__26730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__26725.cljs$lang$maxFixedArity = 3;
G__26725.cljs$lang$applyTo = G__26725__26730.cljs$lang$applyTo;
return G__26725;
})()
};
var G__26724 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26724__delegate.call(this, f, g, h, fs);
};
G__26724.cljs$lang$maxFixedArity = 3;
G__26724.cljs$lang$applyTo = (function (arglist__26734){
var f = cljs.core.first(arglist__26734);
var g = cljs.core.first(cljs.core.next(arglist__26734));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26734)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26734)));
return G__26724__delegate.call(this, f, g, h, fs);
});
return G__26724;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__26692.call(this,f);
case  2 :
return juxt__26693.call(this,f,g);
case  3 :
return juxt__26694.call(this,f,g,h);
default:
return juxt__26695.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__26695.cljs$lang$applyTo;
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
var dorun__26736 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__26739 = cljs.core.next.call(null,coll);
coll = G__26739;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__26737 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____26735 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____26735))
{return (n > 0);
} else
{return and__3546__auto____26735;
}
})()))
{{
var G__26740 = (n - 1);
var G__26741 = cljs.core.next.call(null,coll);
n = G__26740;
coll = G__26741;
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
return dorun__26736.call(this,n);
case  2 :
return dorun__26737.call(this,n,coll);
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
var doall__26742 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__26743 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__26742.call(this,n);
case  2 :
return doall__26743.call(this,n,coll);
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
var matches__26745 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__26745),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__26745),1)))
{return cljs.core.first.call(null,matches__26745);
} else
{return cljs.core.vec.call(null,matches__26745);
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
var matches__26746 = re.exec(s);

if(cljs.core.truth_((matches__26746 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__26746),1)))
{return cljs.core.first.call(null,matches__26746);
} else
{return cljs.core.vec.call(null,matches__26746);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__26747 = cljs.core.re_find.call(null,re,s);
var match_idx__26748 = s.search(re);
var match_str__26749 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__26747))?cljs.core.first.call(null,match_data__26747):match_data__26747);
var post_match__26750 = cljs.core.subs.call(null,s,(match_idx__26748 + cljs.core.count.call(null,match_str__26749)));

if(cljs.core.truth_(match_data__26747))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__26747,re_seq.call(null,re,post_match__26750));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__26752__26753 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___26754 = cljs.core.nth.call(null,vec__26752__26753,0,null);
var flags__26755 = cljs.core.nth.call(null,vec__26752__26753,1,null);
var pattern__26756 = cljs.core.nth.call(null,vec__26752__26753,2,null);

return (new RegExp(pattern__26756,flags__26755));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__26751_SHARP_){
return print_one.call(null,p1__26751_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____26757 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____26757))
{var and__3546__auto____26761 = (function (){var x__451__auto____26758 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____26759 = x__451__auto____26758;

if(cljs.core.truth_(and__3546__auto____26759))
{var and__3546__auto____26760 = x__451__auto____26758.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____26760))
{return cljs.core.not.call(null,x__451__auto____26758.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____26760;
}
} else
{return and__3546__auto____26759;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____26758);
}
})();

if(cljs.core.truth_(and__3546__auto____26761))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____26761;
}
} else
{return and__3546__auto____26757;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____26762 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____26763 = x__451__auto____26762;

if(cljs.core.truth_(and__3546__auto____26763))
{var and__3546__auto____26764 = x__451__auto____26762.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____26764))
{return cljs.core.not.call(null,x__451__auto____26762.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____26764;
}
} else
{return and__3546__auto____26763;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____26762);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__26765 = cljs.core.first.call(null,objs);
var sb__26766 = (new goog.string.StringBuffer());

var G__26767__26768 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__26767__26768))
{var obj__26769 = cljs.core.first.call(null,G__26767__26768);
var G__26767__26770 = G__26767__26768;

while(true){
if(cljs.core.truth_((obj__26769 === first_obj__26765)))
{} else
{sb__26766.append(" ");
}
var G__26771__26772 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__26769,opts));

if(cljs.core.truth_(G__26771__26772))
{var string__26773 = cljs.core.first.call(null,G__26771__26772);
var G__26771__26774 = G__26771__26772;

while(true){
sb__26766.append(string__26773);
var temp__3698__auto____26775 = cljs.core.next.call(null,G__26771__26774);

if(cljs.core.truth_(temp__3698__auto____26775))
{var G__26771__26776 = temp__3698__auto____26775;

{
var G__26779 = cljs.core.first.call(null,G__26771__26776);
var G__26780 = G__26771__26776;
string__26773 = G__26779;
G__26771__26774 = G__26780;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____26777 = cljs.core.next.call(null,G__26767__26770);

if(cljs.core.truth_(temp__3698__auto____26777))
{var G__26767__26778 = temp__3698__auto____26777;

{
var G__26781 = cljs.core.first.call(null,G__26767__26778);
var G__26782 = G__26767__26778;
obj__26769 = G__26781;
G__26767__26770 = G__26782;
continue;
}
} else
{}
break;
}
} else
{}
return sb__26766;
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
var sb__26783 = cljs.core.pr_sb.call(null,objs,opts);

sb__26783.append("\n");
return cljs.core.str.call(null,sb__26783);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__26784 = cljs.core.first.call(null,objs);

var G__26785__26786 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__26785__26786))
{var obj__26787 = cljs.core.first.call(null,G__26785__26786);
var G__26785__26788 = G__26785__26786;

while(true){
if(cljs.core.truth_((obj__26787 === first_obj__26784)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__26789__26790 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__26787,opts));

if(cljs.core.truth_(G__26789__26790))
{var string__26791 = cljs.core.first.call(null,G__26789__26790);
var G__26789__26792 = G__26789__26790;

while(true){
cljs.core.string_print.call(null,string__26791);
var temp__3698__auto____26793 = cljs.core.next.call(null,G__26789__26792);

if(cljs.core.truth_(temp__3698__auto____26793))
{var G__26789__26794 = temp__3698__auto____26793;

{
var G__26797 = cljs.core.first.call(null,G__26789__26794);
var G__26798 = G__26789__26794;
string__26791 = G__26797;
G__26789__26792 = G__26798;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____26795 = cljs.core.next.call(null,G__26785__26788);

if(cljs.core.truth_(temp__3698__auto____26795))
{var G__26785__26796 = temp__3698__auto____26795;

{
var G__26799 = cljs.core.first.call(null,G__26785__26796);
var G__26800 = G__26785__26796;
obj__26787 = G__26799;
G__26785__26788 = G__26800;
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
pr_str.cljs$lang$applyTo = (function (arglist__26801){
var objs = cljs.core.seq( arglist__26801 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__26802){
var objs = cljs.core.seq( arglist__26802 );;
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
pr.cljs$lang$applyTo = (function (arglist__26803){
var objs = cljs.core.seq( arglist__26803 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__26804){
var objs = cljs.core.seq( arglist__26804 );;
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
print_str.cljs$lang$applyTo = (function (arglist__26805){
var objs = cljs.core.seq( arglist__26805 );;
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
println.cljs$lang$applyTo = (function (arglist__26806){
var objs = cljs.core.seq( arglist__26806 );;
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
println_str.cljs$lang$applyTo = (function (arglist__26807){
var objs = cljs.core.seq( arglist__26807 );;
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
prn.cljs$lang$applyTo = (function (arglist__26808){
var objs = cljs.core.seq( arglist__26808 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__26809 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__26809,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____26810 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____26810))
{var nspc__26811 = temp__3698__auto____26810;

return cljs.core.str.call(null,nspc__26811,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____26812 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____26812))
{var nspc__26813 = temp__3698__auto____26812;

return cljs.core.str.call(null,nspc__26813,"/");
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
var pr_pair__26814 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__26814,"{",", ","}",opts,coll);
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
var this__26815 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__26816 = this;
var G__26817__26818 = cljs.core.seq.call(null,this__26816.watches);

if(cljs.core.truth_(G__26817__26818))
{var G__26820__26822 = cljs.core.first.call(null,G__26817__26818);
var vec__26821__26823 = G__26820__26822;
var key__26824 = cljs.core.nth.call(null,vec__26821__26823,0,null);
var f__26825 = cljs.core.nth.call(null,vec__26821__26823,1,null);
var G__26817__26826 = G__26817__26818;

var G__26820__26827 = G__26820__26822;
var G__26817__26828 = G__26817__26826;

while(true){
var vec__26829__26830 = G__26820__26827;
var key__26831 = cljs.core.nth.call(null,vec__26829__26830,0,null);
var f__26832 = cljs.core.nth.call(null,vec__26829__26830,1,null);
var G__26817__26833 = G__26817__26828;

f__26832.call(null,key__26831,this$,oldval,newval);
var temp__3698__auto____26834 = cljs.core.next.call(null,G__26817__26833);

if(cljs.core.truth_(temp__3698__auto____26834))
{var G__26817__26835 = temp__3698__auto____26834;

{
var G__26842 = cljs.core.first.call(null,G__26817__26835);
var G__26843 = G__26817__26835;
G__26820__26827 = G__26842;
G__26817__26828 = G__26843;
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
var this__26836 = this;
return this$.watches = cljs.core.assoc.call(null,this__26836.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__26837 = this;
return this$.watches = cljs.core.dissoc.call(null,this__26837.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__26838 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__26838.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__26839 = this;
return this__26839.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__26840 = this;
return this__26840.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__26841 = this;
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
var atom__26850 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__26851 = (function() { 
var G__26853__delegate = function (x,p__26844){
var map__26845__26846 = p__26844;
var map__26845__26847 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__26845__26846))?cljs.core.apply.call(null,cljs.core.hash_map,map__26845__26846):map__26845__26846);
var validator__26848 = cljs.core.get.call(null,map__26845__26847,"\uFDD0'validator");
var meta__26849 = cljs.core.get.call(null,map__26845__26847,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__26849,validator__26848,null));
};
var G__26853 = function (x,var_args){
var p__26844 = null;
if (goog.isDef(var_args)) {
  p__26844 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__26853__delegate.call(this, x, p__26844);
};
G__26853.cljs$lang$maxFixedArity = 1;
G__26853.cljs$lang$applyTo = (function (arglist__26854){
var x = cljs.core.first(arglist__26854);
var p__26844 = cljs.core.rest(arglist__26854);
return G__26853__delegate.call(this, x, p__26844);
});
return G__26853;
})()
;
atom = function(x,var_args){
var p__26844 = var_args;
switch(arguments.length){
case  1 :
return atom__26850.call(this,x);
default:
return atom__26851.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__26851.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____26855 = a.validator;

if(cljs.core.truth_(temp__3698__auto____26855))
{var validate__26856 = temp__3698__auto____26855;

if(cljs.core.truth_(validate__26856.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__26857 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__26857,new_value);
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
var swap_BANG___26858 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___26859 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___26860 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___26861 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___26862 = (function() { 
var G__26864__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__26864 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__26864__delegate.call(this, a, f, x, y, z, more);
};
G__26864.cljs$lang$maxFixedArity = 5;
G__26864.cljs$lang$applyTo = (function (arglist__26865){
var a = cljs.core.first(arglist__26865);
var f = cljs.core.first(cljs.core.next(arglist__26865));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26865)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26865))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26865)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26865)))));
return G__26864__delegate.call(this, a, f, x, y, z, more);
});
return G__26864;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___26858.call(this,a,f);
case  3 :
return swap_BANG___26859.call(this,a,f,x);
case  4 :
return swap_BANG___26860.call(this,a,f,x,y);
case  5 :
return swap_BANG___26861.call(this,a,f,x,y,z);
default:
return swap_BANG___26862.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___26862.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__26866){
var iref = cljs.core.first(arglist__26866);
var f = cljs.core.first(cljs.core.next(arglist__26866));
var args = cljs.core.rest(cljs.core.next(arglist__26866));
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
var gensym__26867 = (function (){
return gensym.call(null,"G__");
});
var gensym__26868 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__26867.call(this);
case  1 :
return gensym__26868.call(this,prefix_string);
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
var this__26870 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__26870.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__26871 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__26871.state,(function (p__26872){
var curr_state__26873 = p__26872;
var curr_state__26874 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__26873))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__26873):curr_state__26873);
var done__26875 = cljs.core.get.call(null,curr_state__26874,"\uFDD0'done");

if(cljs.core.truth_(done__26875))
{return curr_state__26874;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__26871.f.call(null)});
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
var map__26876__26877 = options;
var map__26876__26878 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__26876__26877))?cljs.core.apply.call(null,cljs.core.hash_map,map__26876__26877):map__26876__26877);
var keywordize_keys__26879 = cljs.core.get.call(null,map__26876__26878,"\uFDD0'keywordize-keys");
var keyfn__26880 = (cljs.core.truth_(keywordize_keys__26879)?cljs.core.keyword:cljs.core.str);
var f__26886 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____26885 = (function iter__26881(s__26882){
return (new cljs.core.LazySeq(null,false,(function (){
var s__26882__26883 = s__26882;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__26882__26883)))
{var k__26884 = cljs.core.first.call(null,s__26882__26883);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__26880.call(null,k__26884),thisfn.call(null,(x[k__26884]))]),iter__26881.call(null,cljs.core.rest.call(null,s__26882__26883)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____26885.call(null,cljs.core.js_keys.call(null,x));
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

return f__26886.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__26887){
var x = cljs.core.first(arglist__26887);
var options = cljs.core.rest(arglist__26887);
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
var mem__26888 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__26892__delegate = function (args){
var temp__3695__auto____26889 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__26888),args);

if(cljs.core.truth_(temp__3695__auto____26889))
{var v__26890 = temp__3695__auto____26889;

return v__26890;
} else
{var ret__26891 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__26888,cljs.core.assoc,args,ret__26891);
return ret__26891;
}
};
var G__26892 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26892__delegate.call(this, args);
};
G__26892.cljs$lang$maxFixedArity = 0;
G__26892.cljs$lang$applyTo = (function (arglist__26893){
var args = cljs.core.seq( arglist__26893 );;
return G__26892__delegate.call(this, args);
});
return G__26892;
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
var trampoline__26895 = (function (f){
while(true){
var ret__26894 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__26894)))
{{
var G__26898 = ret__26894;
f = G__26898;
continue;
}
} else
{return ret__26894;
}
break;
}
});
var trampoline__26896 = (function() { 
var G__26899__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__26899 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__26899__delegate.call(this, f, args);
};
G__26899.cljs$lang$maxFixedArity = 1;
G__26899.cljs$lang$applyTo = (function (arglist__26900){
var f = cljs.core.first(arglist__26900);
var args = cljs.core.rest(arglist__26900);
return G__26899__delegate.call(this, f, args);
});
return G__26899;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__26895.call(this,f);
default:
return trampoline__26896.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__26896.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__26901 = (function (){
return rand.call(null,1);
});
var rand__26902 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__26901.call(this);
case  1 :
return rand__26902.call(this,n);
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
var k__26904 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__26904,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__26904,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___26913 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___26914 = (function (h,child,parent){
var or__3548__auto____26905 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____26905))
{return or__3548__auto____26905;
} else
{var or__3548__auto____26906 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____26906))
{return or__3548__auto____26906;
} else
{var and__3546__auto____26907 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____26907))
{var and__3546__auto____26908 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____26908))
{var and__3546__auto____26909 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____26909))
{var ret__26910 = true;
var i__26911 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____26912 = cljs.core.not.call(null,ret__26910);

if(cljs.core.truth_(or__3548__auto____26912))
{return or__3548__auto____26912;
} else
{return cljs.core._EQ_.call(null,i__26911,cljs.core.count.call(null,parent));
}
})()))
{return ret__26910;
} else
{{
var G__26916 = isa_QMARK_.call(null,h,child.call(null,i__26911),parent.call(null,i__26911));
var G__26917 = (i__26911 + 1);
ret__26910 = G__26916;
i__26911 = G__26917;
continue;
}
}
break;
}
} else
{return and__3546__auto____26909;
}
} else
{return and__3546__auto____26908;
}
} else
{return and__3546__auto____26907;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___26913.call(this,h,child);
case  3 :
return isa_QMARK___26914.call(this,h,child,parent);
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
var parents__26918 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__26919 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__26918.call(this,h);
case  2 :
return parents__26919.call(this,h,tag);
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
var ancestors__26921 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__26922 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__26921.call(this,h);
case  2 :
return ancestors__26922.call(this,h,tag);
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
var descendants__26924 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__26925 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__26924.call(this,h);
case  2 :
return descendants__26925.call(this,h,tag);
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
var derive__26935 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__26936 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__26930 = "\uFDD0'parents".call(null,h);
var td__26931 = "\uFDD0'descendants".call(null,h);
var ta__26932 = "\uFDD0'ancestors".call(null,h);
var tf__26933 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____26934 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__26930.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__26932.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__26932.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__26930,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__26933.call(null,"\uFDD0'ancestors".call(null,h),tag,td__26931,parent,ta__26932),"\uFDD0'descendants":tf__26933.call(null,"\uFDD0'descendants".call(null,h),parent,ta__26932,tag,td__26931)});
})());

if(cljs.core.truth_(or__3548__auto____26934))
{return or__3548__auto____26934;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__26935.call(this,h,tag);
case  3 :
return derive__26936.call(this,h,tag,parent);
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
var underive__26942 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__26943 = (function (h,tag,parent){
var parentMap__26938 = "\uFDD0'parents".call(null,h);
var childsParents__26939 = (cljs.core.truth_(parentMap__26938.call(null,tag))?cljs.core.disj.call(null,parentMap__26938.call(null,tag),parent):cljs.core.set([]));
var newParents__26940 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__26939))?cljs.core.assoc.call(null,parentMap__26938,tag,childsParents__26939):cljs.core.dissoc.call(null,parentMap__26938,tag));
var deriv_seq__26941 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__26927_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__26927_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__26927_SHARP_),cljs.core.second.call(null,p1__26927_SHARP_)));
}),cljs.core.seq.call(null,newParents__26940)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__26938.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__26928_SHARP_,p2__26929_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__26928_SHARP_,p2__26929_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__26941));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__26942.call(this,h,tag);
case  3 :
return underive__26943.call(this,h,tag,parent);
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
var xprefs__26945 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____26947 = (cljs.core.truth_((function (){var and__3546__auto____26946 = xprefs__26945;

if(cljs.core.truth_(and__3546__auto____26946))
{return xprefs__26945.call(null,y);
} else
{return and__3546__auto____26946;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____26947))
{return or__3548__auto____26947;
} else
{var or__3548__auto____26949 = (function (){var ps__26948 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__26948) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__26948),prefer_table)))
{} else
{}
{
var G__26952 = cljs.core.rest.call(null,ps__26948);
ps__26948 = G__26952;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____26949))
{return or__3548__auto____26949;
} else
{var or__3548__auto____26951 = (function (){var ps__26950 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__26950) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__26950),y,prefer_table)))
{} else
{}
{
var G__26953 = cljs.core.rest.call(null,ps__26950);
ps__26950 = G__26953;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____26951))
{return or__3548__auto____26951;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____26954 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____26954))
{return or__3548__auto____26954;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__26963 = cljs.core.reduce.call(null,(function (be,p__26955){
var vec__26956__26957 = p__26955;
var k__26958 = cljs.core.nth.call(null,vec__26956__26957,0,null);
var ___26959 = cljs.core.nth.call(null,vec__26956__26957,1,null);
var e__26960 = vec__26956__26957;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__26958)))
{var be2__26962 = (cljs.core.truth_((function (){var or__3548__auto____26961 = (be === null);

if(cljs.core.truth_(or__3548__auto____26961))
{return or__3548__auto____26961;
} else
{return cljs.core.dominates.call(null,k__26958,cljs.core.first.call(null,be),prefer_table);
}
})())?e__26960:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__26962),k__26958,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__26958," and ",cljs.core.first.call(null,be2__26962),", and neither is preferred")));
}
return be2__26962;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__26963))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__26963));
return cljs.core.second.call(null,best_entry__26963);
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
if(cljs.core.truth_((function (){var and__3546__auto____26964 = mf;

if(cljs.core.truth_(and__3546__auto____26964))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____26964;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____26965 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____26965))
{return or__3548__auto____26965;
} else
{var or__3548__auto____26966 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____26966))
{return or__3548__auto____26966;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____26967 = mf;

if(cljs.core.truth_(and__3546__auto____26967))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____26967;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____26968 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____26968))
{return or__3548__auto____26968;
} else
{var or__3548__auto____26969 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____26969))
{return or__3548__auto____26969;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____26970 = mf;

if(cljs.core.truth_(and__3546__auto____26970))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____26970;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____26971 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____26971))
{return or__3548__auto____26971;
} else
{var or__3548__auto____26972 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____26972))
{return or__3548__auto____26972;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____26973 = mf;

if(cljs.core.truth_(and__3546__auto____26973))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____26973;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____26974 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____26974))
{return or__3548__auto____26974;
} else
{var or__3548__auto____26975 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____26975))
{return or__3548__auto____26975;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____26976 = mf;

if(cljs.core.truth_(and__3546__auto____26976))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____26976;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____26977 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____26977))
{return or__3548__auto____26977;
} else
{var or__3548__auto____26978 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____26978))
{return or__3548__auto____26978;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____26979 = mf;

if(cljs.core.truth_(and__3546__auto____26979))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____26979;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____26980 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____26980))
{return or__3548__auto____26980;
} else
{var or__3548__auto____26981 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____26981))
{return or__3548__auto____26981;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____26982 = mf;

if(cljs.core.truth_(and__3546__auto____26982))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____26982;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____26983 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____26983))
{return or__3548__auto____26983;
} else
{var or__3548__auto____26984 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____26984))
{return or__3548__auto____26984;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____26985 = mf;

if(cljs.core.truth_(and__3546__auto____26985))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____26985;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____26986 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____26986))
{return or__3548__auto____26986;
} else
{var or__3548__auto____26987 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____26987))
{return or__3548__auto____26987;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__26988 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__26989 = cljs.core._get_method.call(null,mf,dispatch_val__26988);

if(cljs.core.truth_(target_fn__26989))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__26988)));
}
return cljs.core.apply.call(null,target_fn__26989,args);
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
var this__26990 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__26991 = this;
cljs.core.swap_BANG_.call(null,this__26991.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__26991.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__26991.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__26991.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__26992 = this;
cljs.core.swap_BANG_.call(null,this__26992.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__26992.method_cache,this__26992.method_table,this__26992.cached_hierarchy,this__26992.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__26993 = this;
cljs.core.swap_BANG_.call(null,this__26993.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__26993.method_cache,this__26993.method_table,this__26993.cached_hierarchy,this__26993.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__26994 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__26994.cached_hierarchy),cljs.core.deref.call(null,this__26994.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__26994.method_cache,this__26994.method_table,this__26994.cached_hierarchy,this__26994.hierarchy);
}
var temp__3695__auto____26995 = cljs.core.deref.call(null,this__26994.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____26995))
{var target_fn__26996 = temp__3695__auto____26995;

return target_fn__26996;
} else
{var temp__3695__auto____26997 = cljs.core.find_and_cache_best_method.call(null,this__26994.name,dispatch_val,this__26994.hierarchy,this__26994.method_table,this__26994.prefer_table,this__26994.method_cache,this__26994.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____26997))
{var target_fn__26998 = temp__3695__auto____26997;

return target_fn__26998;
} else
{return cljs.core.deref.call(null,this__26994.method_table).call(null,this__26994.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__26999 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__26999.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__26999.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__26999.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__26999.method_cache,this__26999.method_table,this__26999.cached_hierarchy,this__26999.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__27000 = this;
return cljs.core.deref.call(null,this__27000.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__27001 = this;
return cljs.core.deref.call(null,this__27001.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__27002 = this;
return cljs.core.do_dispatch.call(null,mf,this__27002.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__27003__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__27003 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27003__delegate.call(this, _, args);
};
G__27003.cljs$lang$maxFixedArity = 1;
G__27003.cljs$lang$applyTo = (function (arglist__27004){
var _ = cljs.core.first(arglist__27004);
var args = cljs.core.rest(arglist__27004);
return G__27003__delegate.call(this, _, args);
});
return G__27003;
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
