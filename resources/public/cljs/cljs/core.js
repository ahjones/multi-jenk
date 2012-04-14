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
var or__3548__auto____5212 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____5212))
{return or__3548__auto____5212;
} else
{var or__3548__auto____5213 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____5213))
{return or__3548__auto____5213;
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
var _invoke__5277 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____5214 = this$;

if(cljs.core.truth_(and__3546__auto____5214))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5214;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____5215 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5215))
{return or__3548__auto____5215;
} else
{var or__3548__auto____5216 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5216))
{return or__3548__auto____5216;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__5278 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____5217 = this$;

if(cljs.core.truth_(and__3546__auto____5217))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5217;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____5218 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5218))
{return or__3548__auto____5218;
} else
{var or__3548__auto____5219 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5219))
{return or__3548__auto____5219;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__5279 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____5220 = this$;

if(cljs.core.truth_(and__3546__auto____5220))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5220;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____5221 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5221))
{return or__3548__auto____5221;
} else
{var or__3548__auto____5222 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5222))
{return or__3548__auto____5222;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__5280 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____5223 = this$;

if(cljs.core.truth_(and__3546__auto____5223))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5223;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____5224 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5224))
{return or__3548__auto____5224;
} else
{var or__3548__auto____5225 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5225))
{return or__3548__auto____5225;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5281 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____5226 = this$;

if(cljs.core.truth_(and__3546__auto____5226))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5226;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____5227 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5227))
{return or__3548__auto____5227;
} else
{var or__3548__auto____5228 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5228))
{return or__3548__auto____5228;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__5282 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____5229 = this$;

if(cljs.core.truth_(and__3546__auto____5229))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5229;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____5230 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5230))
{return or__3548__auto____5230;
} else
{var or__3548__auto____5231 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5231))
{return or__3548__auto____5231;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__5283 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____5232 = this$;

if(cljs.core.truth_(and__3546__auto____5232))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5232;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____5233 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5233))
{return or__3548__auto____5233;
} else
{var or__3548__auto____5234 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5234))
{return or__3548__auto____5234;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__5284 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____5235 = this$;

if(cljs.core.truth_(and__3546__auto____5235))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5235;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____5236 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5236))
{return or__3548__auto____5236;
} else
{var or__3548__auto____5237 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5237))
{return or__3548__auto____5237;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__5285 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____5238 = this$;

if(cljs.core.truth_(and__3546__auto____5238))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5238;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____5239 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5239))
{return or__3548__auto____5239;
} else
{var or__3548__auto____5240 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5240))
{return or__3548__auto____5240;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__5286 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____5241 = this$;

if(cljs.core.truth_(and__3546__auto____5241))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5241;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____5242 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5242))
{return or__3548__auto____5242;
} else
{var or__3548__auto____5243 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5243))
{return or__3548__auto____5243;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__5287 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____5244 = this$;

if(cljs.core.truth_(and__3546__auto____5244))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5244;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____5245 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5245))
{return or__3548__auto____5245;
} else
{var or__3548__auto____5246 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5246))
{return or__3548__auto____5246;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__5288 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____5247 = this$;

if(cljs.core.truth_(and__3546__auto____5247))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5247;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____5248 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5248))
{return or__3548__auto____5248;
} else
{var or__3548__auto____5249 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5249))
{return or__3548__auto____5249;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__5289 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____5250 = this$;

if(cljs.core.truth_(and__3546__auto____5250))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5250;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____5251 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5251))
{return or__3548__auto____5251;
} else
{var or__3548__auto____5252 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5252))
{return or__3548__auto____5252;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__5290 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____5253 = this$;

if(cljs.core.truth_(and__3546__auto____5253))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5253;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____5254 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5254))
{return or__3548__auto____5254;
} else
{var or__3548__auto____5255 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5255))
{return or__3548__auto____5255;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__5291 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____5256 = this$;

if(cljs.core.truth_(and__3546__auto____5256))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5256;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____5257 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5257))
{return or__3548__auto____5257;
} else
{var or__3548__auto____5258 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5258))
{return or__3548__auto____5258;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__5292 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____5259 = this$;

if(cljs.core.truth_(and__3546__auto____5259))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5259;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____5260 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5260))
{return or__3548__auto____5260;
} else
{var or__3548__auto____5261 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5261))
{return or__3548__auto____5261;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__5293 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____5262 = this$;

if(cljs.core.truth_(and__3546__auto____5262))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5262;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____5263 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5263))
{return or__3548__auto____5263;
} else
{var or__3548__auto____5264 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5264))
{return or__3548__auto____5264;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__5294 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____5265 = this$;

if(cljs.core.truth_(and__3546__auto____5265))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5265;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____5266 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5266))
{return or__3548__auto____5266;
} else
{var or__3548__auto____5267 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5267))
{return or__3548__auto____5267;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__5295 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____5268 = this$;

if(cljs.core.truth_(and__3546__auto____5268))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5268;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____5269 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5269))
{return or__3548__auto____5269;
} else
{var or__3548__auto____5270 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5270))
{return or__3548__auto____5270;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__5296 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____5271 = this$;

if(cljs.core.truth_(and__3546__auto____5271))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5271;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____5272 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5272))
{return or__3548__auto____5272;
} else
{var or__3548__auto____5273 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5273))
{return or__3548__auto____5273;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__5297 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____5274 = this$;

if(cljs.core.truth_(and__3546__auto____5274))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5274;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____5275 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5275))
{return or__3548__auto____5275;
} else
{var or__3548__auto____5276 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5276))
{return or__3548__auto____5276;
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
return _invoke__5277.call(this,this$);
case  2 :
return _invoke__5278.call(this,this$,a);
case  3 :
return _invoke__5279.call(this,this$,a,b);
case  4 :
return _invoke__5280.call(this,this$,a,b,c);
case  5 :
return _invoke__5281.call(this,this$,a,b,c,d);
case  6 :
return _invoke__5282.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__5283.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__5284.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__5285.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__5286.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__5287.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__5288.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__5289.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__5290.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__5291.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__5292.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__5293.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__5294.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__5295.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__5296.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__5297.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5299 = coll;

if(cljs.core.truth_(and__3546__auto____5299))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____5299;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____5300 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5300))
{return or__3548__auto____5300;
} else
{var or__3548__auto____5301 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____5301))
{return or__3548__auto____5301;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5302 = coll;

if(cljs.core.truth_(and__3546__auto____5302))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____5302;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____5303 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5303))
{return or__3548__auto____5303;
} else
{var or__3548__auto____5304 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____5304))
{return or__3548__auto____5304;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____5305 = coll;

if(cljs.core.truth_(and__3546__auto____5305))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____5305;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____5306 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5306))
{return or__3548__auto____5306;
} else
{var or__3548__auto____5307 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____5307))
{return or__3548__auto____5307;
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
var _nth__5314 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____5308 = coll;

if(cljs.core.truth_(and__3546__auto____5308))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____5308;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____5309 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5309))
{return or__3548__auto____5309;
} else
{var or__3548__auto____5310 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____5310))
{return or__3548__auto____5310;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__5315 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____5311 = coll;

if(cljs.core.truth_(and__3546__auto____5311))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____5311;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____5312 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5312))
{return or__3548__auto____5312;
} else
{var or__3548__auto____5313 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____5313))
{return or__3548__auto____5313;
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
return _nth__5314.call(this,coll,n);
case  3 :
return _nth__5315.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5317 = coll;

if(cljs.core.truth_(and__3546__auto____5317))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____5317;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____5318 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5318))
{return or__3548__auto____5318;
} else
{var or__3548__auto____5319 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____5319))
{return or__3548__auto____5319;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5320 = coll;

if(cljs.core.truth_(and__3546__auto____5320))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____5320;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____5321 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5321))
{return or__3548__auto____5321;
} else
{var or__3548__auto____5322 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____5322))
{return or__3548__auto____5322;
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
var _lookup__5329 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____5323 = o;

if(cljs.core.truth_(and__3546__auto____5323))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____5323;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____5324 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5324))
{return or__3548__auto____5324;
} else
{var or__3548__auto____5325 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____5325))
{return or__3548__auto____5325;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__5330 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____5326 = o;

if(cljs.core.truth_(and__3546__auto____5326))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____5326;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____5327 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5327))
{return or__3548__auto____5327;
} else
{var or__3548__auto____5328 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____5328))
{return or__3548__auto____5328;
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
return _lookup__5329.call(this,o,k);
case  3 :
return _lookup__5330.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____5332 = coll;

if(cljs.core.truth_(and__3546__auto____5332))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____5332;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____5333 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5333))
{return or__3548__auto____5333;
} else
{var or__3548__auto____5334 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____5334))
{return or__3548__auto____5334;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____5335 = coll;

if(cljs.core.truth_(and__3546__auto____5335))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____5335;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____5336 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5336))
{return or__3548__auto____5336;
} else
{var or__3548__auto____5337 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____5337))
{return or__3548__auto____5337;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____5338 = coll;

if(cljs.core.truth_(and__3546__auto____5338))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____5338;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____5339 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5339))
{return or__3548__auto____5339;
} else
{var or__3548__auto____5340 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____5340))
{return or__3548__auto____5340;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____5341 = coll;

if(cljs.core.truth_(and__3546__auto____5341))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____5341;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____5342 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5342))
{return or__3548__auto____5342;
} else
{var or__3548__auto____5343 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____5343))
{return or__3548__auto____5343;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5344 = coll;

if(cljs.core.truth_(and__3546__auto____5344))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____5344;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____5345 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5345))
{return or__3548__auto____5345;
} else
{var or__3548__auto____5346 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____5346))
{return or__3548__auto____5346;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5347 = coll;

if(cljs.core.truth_(and__3546__auto____5347))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____5347;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____5348 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5348))
{return or__3548__auto____5348;
} else
{var or__3548__auto____5349 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____5349))
{return or__3548__auto____5349;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____5350 = coll;

if(cljs.core.truth_(and__3546__auto____5350))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____5350;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____5351 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5351))
{return or__3548__auto____5351;
} else
{var or__3548__auto____5352 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____5352))
{return or__3548__auto____5352;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____5353 = o;

if(cljs.core.truth_(and__3546__auto____5353))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____5353;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____5354 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5354))
{return or__3548__auto____5354;
} else
{var or__3548__auto____5355 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____5355))
{return or__3548__auto____5355;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____5356 = o;

if(cljs.core.truth_(and__3546__auto____5356))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____5356;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____5357 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5357))
{return or__3548__auto____5357;
} else
{var or__3548__auto____5358 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____5358))
{return or__3548__auto____5358;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____5359 = o;

if(cljs.core.truth_(and__3546__auto____5359))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____5359;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____5360 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5360))
{return or__3548__auto____5360;
} else
{var or__3548__auto____5361 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____5361))
{return or__3548__auto____5361;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____5362 = o;

if(cljs.core.truth_(and__3546__auto____5362))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____5362;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____5363 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5363))
{return or__3548__auto____5363;
} else
{var or__3548__auto____5364 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____5364))
{return or__3548__auto____5364;
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
var _reduce__5371 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____5365 = coll;

if(cljs.core.truth_(and__3546__auto____5365))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____5365;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____5366 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5366))
{return or__3548__auto____5366;
} else
{var or__3548__auto____5367 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____5367))
{return or__3548__auto____5367;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__5372 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____5368 = coll;

if(cljs.core.truth_(and__3546__auto____5368))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____5368;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____5369 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5369))
{return or__3548__auto____5369;
} else
{var or__3548__auto____5370 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____5370))
{return or__3548__auto____5370;
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
return _reduce__5371.call(this,coll,f);
case  3 :
return _reduce__5372.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____5374 = o;

if(cljs.core.truth_(and__3546__auto____5374))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____5374;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____5375 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5375))
{return or__3548__auto____5375;
} else
{var or__3548__auto____5376 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____5376))
{return or__3548__auto____5376;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____5377 = o;

if(cljs.core.truth_(and__3546__auto____5377))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____5377;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____5378 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5378))
{return or__3548__auto____5378;
} else
{var or__3548__auto____5379 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____5379))
{return or__3548__auto____5379;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____5380 = o;

if(cljs.core.truth_(and__3546__auto____5380))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____5380;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____5381 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5381))
{return or__3548__auto____5381;
} else
{var or__3548__auto____5382 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____5382))
{return or__3548__auto____5382;
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
if(cljs.core.truth_((function (){var and__3546__auto____5383 = o;

if(cljs.core.truth_(and__3546__auto____5383))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____5383;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____5384 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5384))
{return or__3548__auto____5384;
} else
{var or__3548__auto____5385 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____5385))
{return or__3548__auto____5385;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____5386 = d;

if(cljs.core.truth_(and__3546__auto____5386))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____5386;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____5387 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____5387))
{return or__3548__auto____5387;
} else
{var or__3548__auto____5388 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____5388))
{return or__3548__auto____5388;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____5389 = this$;

if(cljs.core.truth_(and__3546__auto____5389))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____5389;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____5390 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5390))
{return or__3548__auto____5390;
} else
{var or__3548__auto____5391 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____5391))
{return or__3548__auto____5391;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____5392 = this$;

if(cljs.core.truth_(and__3546__auto____5392))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____5392;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____5393 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5393))
{return or__3548__auto____5393;
} else
{var or__3548__auto____5394 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____5394))
{return or__3548__auto____5394;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____5395 = this$;

if(cljs.core.truth_(and__3546__auto____5395))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____5395;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____5396 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5396))
{return or__3548__auto____5396;
} else
{var or__3548__auto____5397 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____5397))
{return or__3548__auto____5397;
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
var G__5398 = null;
var G__5398__5399 = (function (o,k){
return null;
});
var G__5398__5400 = (function (o,k,not_found){
return not_found;
});
G__5398 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__5398__5399.call(this,o,k);
case  3 :
return G__5398__5400.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5398;
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
var G__5402 = null;
var G__5402__5403 = (function (_,f){
return f.call(null);
});
var G__5402__5404 = (function (_,f,start){
return start;
});
G__5402 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__5402__5403.call(this,_,f);
case  3 :
return G__5402__5404.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5402;
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
var G__5406 = null;
var G__5406__5407 = (function (_,n){
return null;
});
var G__5406__5408 = (function (_,n,not_found){
return not_found;
});
G__5406 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__5406__5407.call(this,_,n);
case  3 :
return G__5406__5408.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5406;
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
var ci_reduce__5416 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__5410 = cljs.core._nth.call(null,cicoll,0);
var n__5411 = 1;

while(true){
if(cljs.core.truth_((n__5411 < cljs.core._count.call(null,cicoll))))
{{
var G__5420 = f.call(null,val__5410,cljs.core._nth.call(null,cicoll,n__5411));
var G__5421 = (n__5411 + 1);
val__5410 = G__5420;
n__5411 = G__5421;
continue;
}
} else
{return val__5410;
}
break;
}
}
});
var ci_reduce__5417 = (function (cicoll,f,val){
var val__5412 = val;
var n__5413 = 0;

while(true){
if(cljs.core.truth_((n__5413 < cljs.core._count.call(null,cicoll))))
{{
var G__5422 = f.call(null,val__5412,cljs.core._nth.call(null,cicoll,n__5413));
var G__5423 = (n__5413 + 1);
val__5412 = G__5422;
n__5413 = G__5423;
continue;
}
} else
{return val__5412;
}
break;
}
});
var ci_reduce__5418 = (function (cicoll,f,val,idx){
var val__5414 = val;
var n__5415 = idx;

while(true){
if(cljs.core.truth_((n__5415 < cljs.core._count.call(null,cicoll))))
{{
var G__5424 = f.call(null,val__5414,cljs.core._nth.call(null,cicoll,n__5415));
var G__5425 = (n__5415 + 1);
val__5414 = G__5424;
n__5415 = G__5425;
continue;
}
} else
{return val__5414;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__5416.call(this,cicoll,f);
case  3 :
return ci_reduce__5417.call(this,cicoll,f,val);
case  4 :
return ci_reduce__5418.call(this,cicoll,f,val,idx);
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
var this__5426 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5439 = null;
var G__5439__5440 = (function (_,f){
var this__5427 = this;
return cljs.core.ci_reduce.call(null,this__5427.a,f,(this__5427.a[this__5427.i]),(this__5427.i + 1));
});
var G__5439__5441 = (function (_,f,start){
var this__5428 = this;
return cljs.core.ci_reduce.call(null,this__5428.a,f,start,this__5428.i);
});
G__5439 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__5439__5440.call(this,_,f);
case  3 :
return G__5439__5441.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5439;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5429 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5430 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5443 = null;
var G__5443__5444 = (function (coll,n){
var this__5431 = this;
var i__5432 = (n + this__5431.i);

if(cljs.core.truth_((i__5432 < this__5431.a.length)))
{return (this__5431.a[i__5432]);
} else
{return null;
}
});
var G__5443__5445 = (function (coll,n,not_found){
var this__5433 = this;
var i__5434 = (n + this__5433.i);

if(cljs.core.truth_((i__5434 < this__5433.a.length)))
{return (this__5433.a[i__5434]);
} else
{return not_found;
}
});
G__5443 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5443__5444.call(this,coll,n);
case  3 :
return G__5443__5445.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5443;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__5435 = this;
return (this__5435.a.length - this__5435.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__5436 = this;
return (this__5436.a[this__5436.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__5437 = this;
if(cljs.core.truth_(((this__5437.i + 1) < this__5437.a.length)))
{return (new cljs.core.IndexedSeq(this__5437.a,(this__5437.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__5438 = this;
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
var G__5447 = null;
var G__5447__5448 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__5447__5449 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__5447 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__5447__5448.call(this,array,f);
case  3 :
return G__5447__5449.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5447;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__5451 = null;
var G__5451__5452 = (function (array,k){
return (array[k]);
});
var G__5451__5453 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__5451 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__5451__5452.call(this,array,k);
case  3 :
return G__5451__5453.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5451;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__5455 = null;
var G__5455__5456 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__5455__5457 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__5455 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__5455__5456.call(this,array,n);
case  3 :
return G__5455__5457.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5455;
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
var temp__3698__auto____5459 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5459))
{var s__5460 = temp__3698__auto____5459;

return cljs.core._first.call(null,s__5460);
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
var G__5461 = cljs.core.next.call(null,s);
s = G__5461;
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
var s__5462 = cljs.core.seq.call(null,x);
var n__5463 = 0;

while(true){
if(cljs.core.truth_(s__5462))
{{
var G__5464 = cljs.core.next.call(null,s__5462);
var G__5465 = (n__5463 + 1);
s__5462 = G__5464;
n__5463 = G__5465;
continue;
}
} else
{return n__5463;
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
var conj__5466 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__5467 = (function() { 
var G__5469__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__5470 = conj.call(null,coll,x);
var G__5471 = cljs.core.first.call(null,xs);
var G__5472 = cljs.core.next.call(null,xs);
coll = G__5470;
x = G__5471;
xs = G__5472;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__5469 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5469__delegate.call(this, coll, x, xs);
};
G__5469.cljs$lang$maxFixedArity = 2;
G__5469.cljs$lang$applyTo = (function (arglist__5473){
var coll = cljs.core.first(arglist__5473);
var x = cljs.core.first(cljs.core.next(arglist__5473));
var xs = cljs.core.rest(cljs.core.next(arglist__5473));
return G__5469__delegate.call(this, coll, x, xs);
});
return G__5469;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__5466.call(this,coll,x);
default:
return conj__5467.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__5467.cljs$lang$applyTo;
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
var nth__5474 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__5475 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__5474.call(this,coll,n);
case  3 :
return nth__5475.call(this,coll,n,not_found);
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
var get__5477 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__5478 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__5477.call(this,o,k);
case  3 :
return get__5478.call(this,o,k,not_found);
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
var assoc__5481 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__5482 = (function() { 
var G__5484__delegate = function (coll,k,v,kvs){
while(true){
var ret__5480 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__5485 = ret__5480;
var G__5486 = cljs.core.first.call(null,kvs);
var G__5487 = cljs.core.second.call(null,kvs);
var G__5488 = cljs.core.nnext.call(null,kvs);
coll = G__5485;
k = G__5486;
v = G__5487;
kvs = G__5488;
continue;
}
} else
{return ret__5480;
}
break;
}
};
var G__5484 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5484__delegate.call(this, coll, k, v, kvs);
};
G__5484.cljs$lang$maxFixedArity = 3;
G__5484.cljs$lang$applyTo = (function (arglist__5489){
var coll = cljs.core.first(arglist__5489);
var k = cljs.core.first(cljs.core.next(arglist__5489));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5489)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5489)));
return G__5484__delegate.call(this, coll, k, v, kvs);
});
return G__5484;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__5481.call(this,coll,k,v);
default:
return assoc__5482.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__5482.cljs$lang$applyTo;
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
var dissoc__5491 = (function (coll){
return coll;
});
var dissoc__5492 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__5493 = (function() { 
var G__5495__delegate = function (coll,k,ks){
while(true){
var ret__5490 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5496 = ret__5490;
var G__5497 = cljs.core.first.call(null,ks);
var G__5498 = cljs.core.next.call(null,ks);
coll = G__5496;
k = G__5497;
ks = G__5498;
continue;
}
} else
{return ret__5490;
}
break;
}
};
var G__5495 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5495__delegate.call(this, coll, k, ks);
};
G__5495.cljs$lang$maxFixedArity = 2;
G__5495.cljs$lang$applyTo = (function (arglist__5499){
var coll = cljs.core.first(arglist__5499);
var k = cljs.core.first(cljs.core.next(arglist__5499));
var ks = cljs.core.rest(cljs.core.next(arglist__5499));
return G__5495__delegate.call(this, coll, k, ks);
});
return G__5495;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__5491.call(this,coll);
case  2 :
return dissoc__5492.call(this,coll,k);
default:
return dissoc__5493.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__5493.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____5500 = o;

if(cljs.core.truth_((function (){var and__3546__auto____5501 = x__451__auto____5500;

if(cljs.core.truth_(and__3546__auto____5501))
{var and__3546__auto____5502 = x__451__auto____5500.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____5502))
{return cljs.core.not.call(null,x__451__auto____5500.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____5502;
}
} else
{return and__3546__auto____5501;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____5500);
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
var disj__5504 = (function (coll){
return coll;
});
var disj__5505 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__5506 = (function() { 
var G__5508__delegate = function (coll,k,ks){
while(true){
var ret__5503 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5509 = ret__5503;
var G__5510 = cljs.core.first.call(null,ks);
var G__5511 = cljs.core.next.call(null,ks);
coll = G__5509;
k = G__5510;
ks = G__5511;
continue;
}
} else
{return ret__5503;
}
break;
}
};
var G__5508 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5508__delegate.call(this, coll, k, ks);
};
G__5508.cljs$lang$maxFixedArity = 2;
G__5508.cljs$lang$applyTo = (function (arglist__5512){
var coll = cljs.core.first(arglist__5512);
var k = cljs.core.first(cljs.core.next(arglist__5512));
var ks = cljs.core.rest(cljs.core.next(arglist__5512));
return G__5508__delegate.call(this, coll, k, ks);
});
return G__5508;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__5504.call(this,coll);
case  2 :
return disj__5505.call(this,coll,k);
default:
return disj__5506.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__5506.cljs$lang$applyTo;
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
{var x__451__auto____5513 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5514 = x__451__auto____5513;

if(cljs.core.truth_(and__3546__auto____5514))
{var and__3546__auto____5515 = x__451__auto____5513.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____5515))
{return cljs.core.not.call(null,x__451__auto____5513.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____5515;
}
} else
{return and__3546__auto____5514;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____5513);
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
{var x__451__auto____5516 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5517 = x__451__auto____5516;

if(cljs.core.truth_(and__3546__auto____5517))
{var and__3546__auto____5518 = x__451__auto____5516.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____5518))
{return cljs.core.not.call(null,x__451__auto____5516.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____5518;
}
} else
{return and__3546__auto____5517;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____5516);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____5519 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5520 = x__451__auto____5519;

if(cljs.core.truth_(and__3546__auto____5520))
{var and__3546__auto____5521 = x__451__auto____5519.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____5521))
{return cljs.core.not.call(null,x__451__auto____5519.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____5521;
}
} else
{return and__3546__auto____5520;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____5519);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____5522 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5523 = x__451__auto____5522;

if(cljs.core.truth_(and__3546__auto____5523))
{var and__3546__auto____5524 = x__451__auto____5522.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____5524))
{return cljs.core.not.call(null,x__451__auto____5522.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____5524;
}
} else
{return and__3546__auto____5523;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____5522);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____5525 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5526 = x__451__auto____5525;

if(cljs.core.truth_(and__3546__auto____5526))
{var and__3546__auto____5527 = x__451__auto____5525.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____5527))
{return cljs.core.not.call(null,x__451__auto____5525.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____5527;
}
} else
{return and__3546__auto____5526;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____5525);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____5528 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5529 = x__451__auto____5528;

if(cljs.core.truth_(and__3546__auto____5529))
{var and__3546__auto____5530 = x__451__auto____5528.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____5530))
{return cljs.core.not.call(null,x__451__auto____5528.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____5530;
}
} else
{return and__3546__auto____5529;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____5528);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____5531 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5532 = x__451__auto____5531;

if(cljs.core.truth_(and__3546__auto____5532))
{var and__3546__auto____5533 = x__451__auto____5531.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____5533))
{return cljs.core.not.call(null,x__451__auto____5531.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____5533;
}
} else
{return and__3546__auto____5532;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____5531);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__5534 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__5534.push(key);
}));
return keys__5534;
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
{var x__451__auto____5535 = s;

if(cljs.core.truth_((function (){var and__3546__auto____5536 = x__451__auto____5535;

if(cljs.core.truth_(and__3546__auto____5536))
{var and__3546__auto____5537 = x__451__auto____5535.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____5537))
{return cljs.core.not.call(null,x__451__auto____5535.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____5537;
}
} else
{return and__3546__auto____5536;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____5535);
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
var and__3546__auto____5538 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5538))
{return cljs.core.not.call(null,(function (){var or__3548__auto____5539 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____5539))
{return or__3548__auto____5539;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____5538;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____5540 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5540))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____5540;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____5541 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5541))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____5541;
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
var and__3546__auto____5542 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____5542))
{return (n == n.toFixed());
} else
{return and__3546__auto____5542;
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
if(cljs.core.truth_((function (){var and__3546__auto____5543 = coll;

if(cljs.core.truth_(and__3546__auto____5543))
{var and__3546__auto____5544 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____5544))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____5544;
}
} else
{return and__3546__auto____5543;
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
var distinct_QMARK___5549 = (function (x){
return true;
});
var distinct_QMARK___5550 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___5551 = (function() { 
var G__5553__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__5545 = cljs.core.set([y,x]);
var xs__5546 = more;

while(true){
var x__5547 = cljs.core.first.call(null,xs__5546);
var etc__5548 = cljs.core.next.call(null,xs__5546);

if(cljs.core.truth_(xs__5546))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__5545,x__5547)))
{return false;
} else
{{
var G__5554 = cljs.core.conj.call(null,s__5545,x__5547);
var G__5555 = etc__5548;
s__5545 = G__5554;
xs__5546 = G__5555;
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
var G__5553 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5553__delegate.call(this, x, y, more);
};
G__5553.cljs$lang$maxFixedArity = 2;
G__5553.cljs$lang$applyTo = (function (arglist__5556){
var x = cljs.core.first(arglist__5556);
var y = cljs.core.first(cljs.core.next(arglist__5556));
var more = cljs.core.rest(cljs.core.next(arglist__5556));
return G__5553__delegate.call(this, x, y, more);
});
return G__5553;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___5549.call(this,x);
case  2 :
return distinct_QMARK___5550.call(this,x,y);
default:
return distinct_QMARK___5551.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___5551.cljs$lang$applyTo;
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
var r__5557 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__5557)))
{return r__5557;
} else
{if(cljs.core.truth_(r__5557))
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
var sort__5559 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__5560 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__5558 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__5558,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__5558);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__5559.call(this,comp);
case  2 :
return sort__5560.call(this,comp,coll);
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
var sort_by__5562 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__5563 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__5562.call(this,keyfn,comp);
case  3 :
return sort_by__5563.call(this,keyfn,comp,coll);
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
var reduce__5565 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__5566 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__5565.call(this,f,val);
case  3 :
return reduce__5566.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__5572 = (function (f,coll){
var temp__3695__auto____5568 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____5568))
{var s__5569 = temp__3695__auto____5568;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__5569),cljs.core.next.call(null,s__5569));
} else
{return f.call(null);
}
});
var seq_reduce__5573 = (function (f,val,coll){
var val__5570 = val;
var coll__5571 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__5571))
{{
var G__5575 = f.call(null,val__5570,cljs.core.first.call(null,coll__5571));
var G__5576 = cljs.core.next.call(null,coll__5571);
val__5570 = G__5575;
coll__5571 = G__5576;
continue;
}
} else
{return val__5570;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__5572.call(this,f,val);
case  3 :
return seq_reduce__5573.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__5577 = null;
var G__5577__5578 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__5577__5579 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__5577 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__5577__5578.call(this,coll,f);
case  3 :
return G__5577__5579.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5577;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___5581 = (function (){
return 0;
});
var _PLUS___5582 = (function (x){
return x;
});
var _PLUS___5583 = (function (x,y){
return (x + y);
});
var _PLUS___5584 = (function() { 
var G__5586__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__5586 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5586__delegate.call(this, x, y, more);
};
G__5586.cljs$lang$maxFixedArity = 2;
G__5586.cljs$lang$applyTo = (function (arglist__5587){
var x = cljs.core.first(arglist__5587);
var y = cljs.core.first(cljs.core.next(arglist__5587));
var more = cljs.core.rest(cljs.core.next(arglist__5587));
return G__5586__delegate.call(this, x, y, more);
});
return G__5586;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___5581.call(this);
case  1 :
return _PLUS___5582.call(this,x);
case  2 :
return _PLUS___5583.call(this,x,y);
default:
return _PLUS___5584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___5584.cljs$lang$applyTo;
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
var ___5588 = (function (x){
return (- x);
});
var ___5589 = (function (x,y){
return (x - y);
});
var ___5590 = (function() { 
var G__5592__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__5592 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5592__delegate.call(this, x, y, more);
};
G__5592.cljs$lang$maxFixedArity = 2;
G__5592.cljs$lang$applyTo = (function (arglist__5593){
var x = cljs.core.first(arglist__5593);
var y = cljs.core.first(cljs.core.next(arglist__5593));
var more = cljs.core.rest(cljs.core.next(arglist__5593));
return G__5592__delegate.call(this, x, y, more);
});
return G__5592;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___5588.call(this,x);
case  2 :
return ___5589.call(this,x,y);
default:
return ___5590.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___5590.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___5594 = (function (){
return 1;
});
var _STAR___5595 = (function (x){
return x;
});
var _STAR___5596 = (function (x,y){
return (x * y);
});
var _STAR___5597 = (function() { 
var G__5599__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__5599 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5599__delegate.call(this, x, y, more);
};
G__5599.cljs$lang$maxFixedArity = 2;
G__5599.cljs$lang$applyTo = (function (arglist__5600){
var x = cljs.core.first(arglist__5600);
var y = cljs.core.first(cljs.core.next(arglist__5600));
var more = cljs.core.rest(cljs.core.next(arglist__5600));
return G__5599__delegate.call(this, x, y, more);
});
return G__5599;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___5594.call(this);
case  1 :
return _STAR___5595.call(this,x);
case  2 :
return _STAR___5596.call(this,x,y);
default:
return _STAR___5597.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___5597.cljs$lang$applyTo;
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
var _SLASH___5601 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___5602 = (function (x,y){
return (x / y);
});
var _SLASH___5603 = (function() { 
var G__5605__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__5605 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5605__delegate.call(this, x, y, more);
};
G__5605.cljs$lang$maxFixedArity = 2;
G__5605.cljs$lang$applyTo = (function (arglist__5606){
var x = cljs.core.first(arglist__5606);
var y = cljs.core.first(cljs.core.next(arglist__5606));
var more = cljs.core.rest(cljs.core.next(arglist__5606));
return G__5605__delegate.call(this, x, y, more);
});
return G__5605;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___5601.call(this,x);
case  2 :
return _SLASH___5602.call(this,x,y);
default:
return _SLASH___5603.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___5603.cljs$lang$applyTo;
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
var _LT___5607 = (function (x){
return true;
});
var _LT___5608 = (function (x,y){
return (x < y);
});
var _LT___5609 = (function() { 
var G__5611__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5612 = y;
var G__5613 = cljs.core.first.call(null,more);
var G__5614 = cljs.core.next.call(null,more);
x = G__5612;
y = G__5613;
more = G__5614;
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
var G__5611 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5611__delegate.call(this, x, y, more);
};
G__5611.cljs$lang$maxFixedArity = 2;
G__5611.cljs$lang$applyTo = (function (arglist__5615){
var x = cljs.core.first(arglist__5615);
var y = cljs.core.first(cljs.core.next(arglist__5615));
var more = cljs.core.rest(cljs.core.next(arglist__5615));
return G__5611__delegate.call(this, x, y, more);
});
return G__5611;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___5607.call(this,x);
case  2 :
return _LT___5608.call(this,x,y);
default:
return _LT___5609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___5609.cljs$lang$applyTo;
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
var _LT__EQ___5616 = (function (x){
return true;
});
var _LT__EQ___5617 = (function (x,y){
return (x <= y);
});
var _LT__EQ___5618 = (function() { 
var G__5620__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5621 = y;
var G__5622 = cljs.core.first.call(null,more);
var G__5623 = cljs.core.next.call(null,more);
x = G__5621;
y = G__5622;
more = G__5623;
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
var G__5620 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5620__delegate.call(this, x, y, more);
};
G__5620.cljs$lang$maxFixedArity = 2;
G__5620.cljs$lang$applyTo = (function (arglist__5624){
var x = cljs.core.first(arglist__5624);
var y = cljs.core.first(cljs.core.next(arglist__5624));
var more = cljs.core.rest(cljs.core.next(arglist__5624));
return G__5620__delegate.call(this, x, y, more);
});
return G__5620;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___5616.call(this,x);
case  2 :
return _LT__EQ___5617.call(this,x,y);
default:
return _LT__EQ___5618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___5618.cljs$lang$applyTo;
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
var _GT___5625 = (function (x){
return true;
});
var _GT___5626 = (function (x,y){
return (x > y);
});
var _GT___5627 = (function() { 
var G__5629__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5630 = y;
var G__5631 = cljs.core.first.call(null,more);
var G__5632 = cljs.core.next.call(null,more);
x = G__5630;
y = G__5631;
more = G__5632;
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
var G__5629 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5629__delegate.call(this, x, y, more);
};
G__5629.cljs$lang$maxFixedArity = 2;
G__5629.cljs$lang$applyTo = (function (arglist__5633){
var x = cljs.core.first(arglist__5633);
var y = cljs.core.first(cljs.core.next(arglist__5633));
var more = cljs.core.rest(cljs.core.next(arglist__5633));
return G__5629__delegate.call(this, x, y, more);
});
return G__5629;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___5625.call(this,x);
case  2 :
return _GT___5626.call(this,x,y);
default:
return _GT___5627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___5627.cljs$lang$applyTo;
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
var _GT__EQ___5634 = (function (x){
return true;
});
var _GT__EQ___5635 = (function (x,y){
return (x >= y);
});
var _GT__EQ___5636 = (function() { 
var G__5638__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5639 = y;
var G__5640 = cljs.core.first.call(null,more);
var G__5641 = cljs.core.next.call(null,more);
x = G__5639;
y = G__5640;
more = G__5641;
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
var G__5638 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5638__delegate.call(this, x, y, more);
};
G__5638.cljs$lang$maxFixedArity = 2;
G__5638.cljs$lang$applyTo = (function (arglist__5642){
var x = cljs.core.first(arglist__5642);
var y = cljs.core.first(cljs.core.next(arglist__5642));
var more = cljs.core.rest(cljs.core.next(arglist__5642));
return G__5638__delegate.call(this, x, y, more);
});
return G__5638;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___5634.call(this,x);
case  2 :
return _GT__EQ___5635.call(this,x,y);
default:
return _GT__EQ___5636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___5636.cljs$lang$applyTo;
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
var max__5643 = (function (x){
return x;
});
var max__5644 = (function (x,y){
return ((x > y) ? x : y);
});
var max__5645 = (function() { 
var G__5647__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__5647 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5647__delegate.call(this, x, y, more);
};
G__5647.cljs$lang$maxFixedArity = 2;
G__5647.cljs$lang$applyTo = (function (arglist__5648){
var x = cljs.core.first(arglist__5648);
var y = cljs.core.first(cljs.core.next(arglist__5648));
var more = cljs.core.rest(cljs.core.next(arglist__5648));
return G__5647__delegate.call(this, x, y, more);
});
return G__5647;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__5643.call(this,x);
case  2 :
return max__5644.call(this,x,y);
default:
return max__5645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__5645.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__5649 = (function (x){
return x;
});
var min__5650 = (function (x,y){
return ((x < y) ? x : y);
});
var min__5651 = (function() { 
var G__5653__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__5653 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5653__delegate.call(this, x, y, more);
};
G__5653.cljs$lang$maxFixedArity = 2;
G__5653.cljs$lang$applyTo = (function (arglist__5654){
var x = cljs.core.first(arglist__5654);
var y = cljs.core.first(cljs.core.next(arglist__5654));
var more = cljs.core.rest(cljs.core.next(arglist__5654));
return G__5653__delegate.call(this, x, y, more);
});
return G__5653;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__5649.call(this,x);
case  2 :
return min__5650.call(this,x,y);
default:
return min__5651.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__5651.cljs$lang$applyTo;
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
var rem__5655 = (n % d);

return cljs.core.fix.call(null,((n - rem__5655) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__5656 = cljs.core.quot.call(null,n,d);

return (n - (d * q__5656));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__5657 = (function (){
return Math.random.call(null);
});
var rand__5658 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__5657.call(this);
case  1 :
return rand__5658.call(this,n);
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
var _EQ__EQ___5660 = (function (x){
return true;
});
var _EQ__EQ___5661 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___5662 = (function() { 
var G__5664__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5665 = y;
var G__5666 = cljs.core.first.call(null,more);
var G__5667 = cljs.core.next.call(null,more);
x = G__5665;
y = G__5666;
more = G__5667;
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
var G__5664 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5664__delegate.call(this, x, y, more);
};
G__5664.cljs$lang$maxFixedArity = 2;
G__5664.cljs$lang$applyTo = (function (arglist__5668){
var x = cljs.core.first(arglist__5668);
var y = cljs.core.first(cljs.core.next(arglist__5668));
var more = cljs.core.rest(cljs.core.next(arglist__5668));
return G__5664__delegate.call(this, x, y, more);
});
return G__5664;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___5660.call(this,x);
case  2 :
return _EQ__EQ___5661.call(this,x,y);
default:
return _EQ__EQ___5662.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___5662.cljs$lang$applyTo;
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
var n__5669 = n;
var xs__5670 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____5671 = xs__5670;

if(cljs.core.truth_(and__3546__auto____5671))
{return (n__5669 > 0);
} else
{return and__3546__auto____5671;
}
})()))
{{
var G__5672 = (n__5669 - 1);
var G__5673 = cljs.core.next.call(null,xs__5670);
n__5669 = G__5672;
xs__5670 = G__5673;
continue;
}
} else
{return xs__5670;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__5678 = null;
var G__5678__5679 = (function (coll,n){
var temp__3695__auto____5674 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____5674))
{var xs__5675 = temp__3695__auto____5674;

return cljs.core.first.call(null,xs__5675);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__5678__5680 = (function (coll,n,not_found){
var temp__3695__auto____5676 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____5676))
{var xs__5677 = temp__3695__auto____5676;

return cljs.core.first.call(null,xs__5677);
} else
{return not_found;
}
});
G__5678 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5678__5679.call(this,coll,n);
case  3 :
return G__5678__5680.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5678;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___5682 = (function (){
return "";
});
var str_STAR___5683 = (function (x){
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
var str_STAR___5684 = (function() { 
var G__5686__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__5687 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__5688 = cljs.core.next.call(null,more);
sb = G__5687;
more = G__5688;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__5686 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5686__delegate.call(this, x, ys);
};
G__5686.cljs$lang$maxFixedArity = 1;
G__5686.cljs$lang$applyTo = (function (arglist__5689){
var x = cljs.core.first(arglist__5689);
var ys = cljs.core.rest(arglist__5689);
return G__5686__delegate.call(this, x, ys);
});
return G__5686;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___5682.call(this);
case  1 :
return str_STAR___5683.call(this,x);
default:
return str_STAR___5684.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___5684.cljs$lang$applyTo;
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
var str__5690 = (function (){
return "";
});
var str__5691 = (function (x){
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
var str__5692 = (function() { 
var G__5694__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__5695 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__5696 = cljs.core.next.call(null,more);
sb = G__5695;
more = G__5696;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__5694 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5694__delegate.call(this, x, ys);
};
G__5694.cljs$lang$maxFixedArity = 1;
G__5694.cljs$lang$applyTo = (function (arglist__5697){
var x = cljs.core.first(arglist__5697);
var ys = cljs.core.rest(arglist__5697);
return G__5694__delegate.call(this, x, ys);
});
return G__5694;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__5690.call(this);
case  1 :
return str__5691.call(this,x);
default:
return str__5692.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__5692.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__5698 = (function (s,start){
return s.substring(start);
});
var subs__5699 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__5698.call(this,s,start);
case  3 :
return subs__5699.call(this,s,start,end);
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
var symbol__5701 = (function (name){
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
var symbol__5702 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__5701.call(this,ns);
case  2 :
return symbol__5702.call(this,ns,name);
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
var keyword__5704 = (function (name){
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
var keyword__5705 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__5704.call(this,ns);
case  2 :
return keyword__5705.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__5707 = cljs.core.seq.call(null,x);
var ys__5708 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__5707 === null)))
{return (ys__5708 === null);
} else
{if(cljs.core.truth_((ys__5708 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__5707),cljs.core.first.call(null,ys__5708))))
{{
var G__5709 = cljs.core.next.call(null,xs__5707);
var G__5710 = cljs.core.next.call(null,ys__5708);
xs__5707 = G__5709;
ys__5708 = G__5710;
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
return cljs.core.reduce.call(null,(function (p1__5711_SHARP_,p2__5712_SHARP_){
return cljs.core.hash_combine.call(null,p1__5711_SHARP_,cljs.core.hash.call(null,p2__5712_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__5713__5714 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__5713__5714))
{var G__5716__5718 = cljs.core.first.call(null,G__5713__5714);
var vec__5717__5719 = G__5716__5718;
var key_name__5720 = cljs.core.nth.call(null,vec__5717__5719,0,null);
var f__5721 = cljs.core.nth.call(null,vec__5717__5719,1,null);
var G__5713__5722 = G__5713__5714;

var G__5716__5723 = G__5716__5718;
var G__5713__5724 = G__5713__5722;

while(true){
var vec__5725__5726 = G__5716__5723;
var key_name__5727 = cljs.core.nth.call(null,vec__5725__5726,0,null);
var f__5728 = cljs.core.nth.call(null,vec__5725__5726,1,null);
var G__5713__5729 = G__5713__5724;

var str_name__5730 = cljs.core.name.call(null,key_name__5727);

obj[str_name__5730] = f__5728;
var temp__3698__auto____5731 = cljs.core.next.call(null,G__5713__5729);

if(cljs.core.truth_(temp__3698__auto____5731))
{var G__5713__5732 = temp__3698__auto____5731;

{
var G__5733 = cljs.core.first.call(null,G__5713__5732);
var G__5734 = G__5713__5732;
G__5716__5723 = G__5733;
G__5713__5724 = G__5734;
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
var this__5735 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5736 = this;
return (new cljs.core.List(this__5736.meta,o,coll,(this__5736.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5737 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5738 = this;
return this__5738.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5739 = this;
return this__5739.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5740 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5741 = this;
return this__5741.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5742 = this;
return this__5742.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5743 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5744 = this;
return (new cljs.core.List(meta,this__5744.first,this__5744.rest,this__5744.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5745 = this;
return this__5745.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5746 = this;
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
var this__5747 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5748 = this;
return (new cljs.core.List(this__5748.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5749 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5750 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5751 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5752 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5753 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5754 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5755 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5756 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5757 = this;
return this__5757.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5758 = this;
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
list.cljs$lang$applyTo = (function (arglist__5759){
var items = cljs.core.seq( arglist__5759 );;
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
var this__5760 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5761 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5762 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5763 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5763.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5764 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5765 = this;
return this__5765.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5766 = this;
if(cljs.core.truth_((this__5766.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__5766.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5767 = this;
return this__5767.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5768 = this;
return (new cljs.core.Cons(meta,this__5768.first,this__5768.rest));
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
var G__5769 = null;
var G__5769__5770 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__5769__5771 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__5769 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__5769__5770.call(this,string,f);
case  3 :
return G__5769__5771.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5769;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__5773 = null;
var G__5773__5774 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__5773__5775 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__5773 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__5773__5774.call(this,string,k);
case  3 :
return G__5773__5775.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5773;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__5777 = null;
var G__5777__5778 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__5777__5779 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__5777 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__5777__5778.call(this,string,n);
case  3 :
return G__5777__5779.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5777;
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
var G__5787 = null;
var G__5787__5788 = (function (tsym5781,coll){
var tsym5781__5783 = this;

var this$__5784 = tsym5781__5783;

return cljs.core.get.call(null,coll,this$__5784.toString());
});
var G__5787__5789 = (function (tsym5782,coll,not_found){
var tsym5782__5785 = this;

var this$__5786 = tsym5782__5785;

return cljs.core.get.call(null,coll,this$__5786.toString(),not_found);
});
G__5787 = function(tsym5782,coll,not_found){
switch(arguments.length){
case  2 :
return G__5787__5788.call(this,tsym5782,coll);
case  3 :
return G__5787__5789.call(this,tsym5782,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5787;
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
var x__5791 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__5791;
} else
{lazy_seq.x = x__5791.call(null);
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
var this__5792 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5793 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5794 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5795 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5795.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5796 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5797 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5798 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5799 = this;
return this__5799.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5800 = this;
return (new cljs.core.LazySeq(meta,this__5800.realized,this__5800.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__5801 = [];

var s__5802 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5802)))
{ary__5801.push(cljs.core.first.call(null,s__5802));
{
var G__5803 = cljs.core.next.call(null,s__5802);
s__5802 = G__5803;
continue;
}
} else
{return ary__5801;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__5804 = s;
var i__5805 = n;
var sum__5806 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____5807 = (i__5805 > 0);

if(cljs.core.truth_(and__3546__auto____5807))
{return cljs.core.seq.call(null,s__5804);
} else
{return and__3546__auto____5807;
}
})()))
{{
var G__5808 = cljs.core.next.call(null,s__5804);
var G__5809 = (i__5805 - 1);
var G__5810 = (sum__5806 + 1);
s__5804 = G__5808;
i__5805 = G__5809;
sum__5806 = G__5810;
continue;
}
} else
{return sum__5806;
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
var concat__5814 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__5815 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__5816 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5811 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__5811))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__5811),concat.call(null,cljs.core.rest.call(null,s__5811),y));
} else
{return y;
}
})));
});
var concat__5817 = (function() { 
var G__5819__delegate = function (x,y,zs){
var cat__5813 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__5812 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__5812))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__5812),cat.call(null,cljs.core.rest.call(null,xys__5812),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__5813.call(null,concat.call(null,x,y),zs);
};
var G__5819 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5819__delegate.call(this, x, y, zs);
};
G__5819.cljs$lang$maxFixedArity = 2;
G__5819.cljs$lang$applyTo = (function (arglist__5820){
var x = cljs.core.first(arglist__5820);
var y = cljs.core.first(cljs.core.next(arglist__5820));
var zs = cljs.core.rest(cljs.core.next(arglist__5820));
return G__5819__delegate.call(this, x, y, zs);
});
return G__5819;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__5814.call(this);
case  1 :
return concat__5815.call(this,x);
case  2 :
return concat__5816.call(this,x,y);
default:
return concat__5817.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__5817.cljs$lang$applyTo;
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
var list_STAR___5821 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___5822 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___5823 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___5824 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5825 = (function() { 
var G__5827__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__5827 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5827__delegate.call(this, a, b, c, d, more);
};
G__5827.cljs$lang$maxFixedArity = 4;
G__5827.cljs$lang$applyTo = (function (arglist__5828){
var a = cljs.core.first(arglist__5828);
var b = cljs.core.first(cljs.core.next(arglist__5828));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5828)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5828))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5828))));
return G__5827__delegate.call(this, a, b, c, d, more);
});
return G__5827;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___5821.call(this,a);
case  2 :
return list_STAR___5822.call(this,a,b);
case  3 :
return list_STAR___5823.call(this,a,b,c);
case  4 :
return list_STAR___5824.call(this,a,b,c,d);
default:
return list_STAR___5825.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5825.cljs$lang$applyTo;
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
var apply__5838 = (function (f,args){
var fixed_arity__5829 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__5829 + 1)) <= fixed_arity__5829)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__5839 = (function (f,x,args){
var arglist__5830 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__5831 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5830,fixed_arity__5831) <= fixed_arity__5831)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5830));
} else
{return f.cljs$lang$applyTo(arglist__5830);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5830));
}
});
var apply__5840 = (function (f,x,y,args){
var arglist__5832 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__5833 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5832,fixed_arity__5833) <= fixed_arity__5833)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5832));
} else
{return f.cljs$lang$applyTo(arglist__5832);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5832));
}
});
var apply__5841 = (function (f,x,y,z,args){
var arglist__5834 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__5835 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5834,fixed_arity__5835) <= fixed_arity__5835)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5834));
} else
{return f.cljs$lang$applyTo(arglist__5834);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5834));
}
});
var apply__5842 = (function() { 
var G__5844__delegate = function (f,a,b,c,d,args){
var arglist__5836 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__5837 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5836,fixed_arity__5837) <= fixed_arity__5837)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5836));
} else
{return f.cljs$lang$applyTo(arglist__5836);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5836));
}
};
var G__5844 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__5844__delegate.call(this, f, a, b, c, d, args);
};
G__5844.cljs$lang$maxFixedArity = 5;
G__5844.cljs$lang$applyTo = (function (arglist__5845){
var f = cljs.core.first(arglist__5845);
var a = cljs.core.first(cljs.core.next(arglist__5845));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5845)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5845))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5845)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5845)))));
return G__5844__delegate.call(this, f, a, b, c, d, args);
});
return G__5844;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__5838.call(this,f,a);
case  3 :
return apply__5839.call(this,f,a,b);
case  4 :
return apply__5840.call(this,f,a,b,c);
case  5 :
return apply__5841.call(this,f,a,b,c,d);
default:
return apply__5842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__5842.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__5846){
var obj = cljs.core.first(arglist__5846);
var f = cljs.core.first(cljs.core.next(arglist__5846));
var args = cljs.core.rest(cljs.core.next(arglist__5846));
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
var not_EQ___5847 = (function (x){
return false;
});
var not_EQ___5848 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___5849 = (function() { 
var G__5851__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__5851 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5851__delegate.call(this, x, y, more);
};
G__5851.cljs$lang$maxFixedArity = 2;
G__5851.cljs$lang$applyTo = (function (arglist__5852){
var x = cljs.core.first(arglist__5852);
var y = cljs.core.first(cljs.core.next(arglist__5852));
var more = cljs.core.rest(cljs.core.next(arglist__5852));
return G__5851__delegate.call(this, x, y, more);
});
return G__5851;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___5847.call(this,x);
case  2 :
return not_EQ___5848.call(this,x,y);
default:
return not_EQ___5849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___5849.cljs$lang$applyTo;
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
var G__5853 = pred;
var G__5854 = cljs.core.next.call(null,coll);
pred = G__5853;
coll = G__5854;
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
{var or__3548__auto____5855 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____5855))
{return or__3548__auto____5855;
} else
{{
var G__5856 = pred;
var G__5857 = cljs.core.next.call(null,coll);
pred = G__5856;
coll = G__5857;
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
var G__5858 = null;
var G__5858__5859 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__5858__5860 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__5858__5861 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__5858__5862 = (function() { 
var G__5864__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__5864 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5864__delegate.call(this, x, y, zs);
};
G__5864.cljs$lang$maxFixedArity = 2;
G__5864.cljs$lang$applyTo = (function (arglist__5865){
var x = cljs.core.first(arglist__5865);
var y = cljs.core.first(cljs.core.next(arglist__5865));
var zs = cljs.core.rest(cljs.core.next(arglist__5865));
return G__5864__delegate.call(this, x, y, zs);
});
return G__5864;
})()
;
G__5858 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__5858__5859.call(this);
case  1 :
return G__5858__5860.call(this,x);
case  2 :
return G__5858__5861.call(this,x,y);
default:
return G__5858__5862.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5858.cljs$lang$maxFixedArity = 2;
G__5858.cljs$lang$applyTo = G__5858__5862.cljs$lang$applyTo;
return G__5858;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__5866__delegate = function (args){
return x;
};
var G__5866 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5866__delegate.call(this, args);
};
G__5866.cljs$lang$maxFixedArity = 0;
G__5866.cljs$lang$applyTo = (function (arglist__5867){
var args = cljs.core.seq( arglist__5867 );;
return G__5866__delegate.call(this, args);
});
return G__5866;
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
var comp__5871 = (function (){
return cljs.core.identity;
});
var comp__5872 = (function (f){
return f;
});
var comp__5873 = (function (f,g){
return (function() {
var G__5877 = null;
var G__5877__5878 = (function (){
return f.call(null,g.call(null));
});
var G__5877__5879 = (function (x){
return f.call(null,g.call(null,x));
});
var G__5877__5880 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__5877__5881 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__5877__5882 = (function() { 
var G__5884__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__5884 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5884__delegate.call(this, x, y, z, args);
};
G__5884.cljs$lang$maxFixedArity = 3;
G__5884.cljs$lang$applyTo = (function (arglist__5885){
var x = cljs.core.first(arglist__5885);
var y = cljs.core.first(cljs.core.next(arglist__5885));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5885)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5885)));
return G__5884__delegate.call(this, x, y, z, args);
});
return G__5884;
})()
;
G__5877 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5877__5878.call(this);
case  1 :
return G__5877__5879.call(this,x);
case  2 :
return G__5877__5880.call(this,x,y);
case  3 :
return G__5877__5881.call(this,x,y,z);
default:
return G__5877__5882.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5877.cljs$lang$maxFixedArity = 3;
G__5877.cljs$lang$applyTo = G__5877__5882.cljs$lang$applyTo;
return G__5877;
})()
});
var comp__5874 = (function (f,g,h){
return (function() {
var G__5886 = null;
var G__5886__5887 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__5886__5888 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__5886__5889 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__5886__5890 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__5886__5891 = (function() { 
var G__5893__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__5893 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5893__delegate.call(this, x, y, z, args);
};
G__5893.cljs$lang$maxFixedArity = 3;
G__5893.cljs$lang$applyTo = (function (arglist__5894){
var x = cljs.core.first(arglist__5894);
var y = cljs.core.first(cljs.core.next(arglist__5894));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5894)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5894)));
return G__5893__delegate.call(this, x, y, z, args);
});
return G__5893;
})()
;
G__5886 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5886__5887.call(this);
case  1 :
return G__5886__5888.call(this,x);
case  2 :
return G__5886__5889.call(this,x,y);
case  3 :
return G__5886__5890.call(this,x,y,z);
default:
return G__5886__5891.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5886.cljs$lang$maxFixedArity = 3;
G__5886.cljs$lang$applyTo = G__5886__5891.cljs$lang$applyTo;
return G__5886;
})()
});
var comp__5875 = (function() { 
var G__5895__delegate = function (f1,f2,f3,fs){
var fs__5868 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__5896__delegate = function (args){
var ret__5869 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__5868),args);
var fs__5870 = cljs.core.next.call(null,fs__5868);

while(true){
if(cljs.core.truth_(fs__5870))
{{
var G__5897 = cljs.core.first.call(null,fs__5870).call(null,ret__5869);
var G__5898 = cljs.core.next.call(null,fs__5870);
ret__5869 = G__5897;
fs__5870 = G__5898;
continue;
}
} else
{return ret__5869;
}
break;
}
};
var G__5896 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5896__delegate.call(this, args);
};
G__5896.cljs$lang$maxFixedArity = 0;
G__5896.cljs$lang$applyTo = (function (arglist__5899){
var args = cljs.core.seq( arglist__5899 );;
return G__5896__delegate.call(this, args);
});
return G__5896;
})()
;
};
var G__5895 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5895__delegate.call(this, f1, f2, f3, fs);
};
G__5895.cljs$lang$maxFixedArity = 3;
G__5895.cljs$lang$applyTo = (function (arglist__5900){
var f1 = cljs.core.first(arglist__5900);
var f2 = cljs.core.first(cljs.core.next(arglist__5900));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5900)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5900)));
return G__5895__delegate.call(this, f1, f2, f3, fs);
});
return G__5895;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__5871.call(this);
case  1 :
return comp__5872.call(this,f1);
case  2 :
return comp__5873.call(this,f1,f2);
case  3 :
return comp__5874.call(this,f1,f2,f3);
default:
return comp__5875.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__5875.cljs$lang$applyTo;
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
var partial__5901 = (function (f,arg1){
return (function() { 
var G__5906__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__5906 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5906__delegate.call(this, args);
};
G__5906.cljs$lang$maxFixedArity = 0;
G__5906.cljs$lang$applyTo = (function (arglist__5907){
var args = cljs.core.seq( arglist__5907 );;
return G__5906__delegate.call(this, args);
});
return G__5906;
})()
;
});
var partial__5902 = (function (f,arg1,arg2){
return (function() { 
var G__5908__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__5908 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5908__delegate.call(this, args);
};
G__5908.cljs$lang$maxFixedArity = 0;
G__5908.cljs$lang$applyTo = (function (arglist__5909){
var args = cljs.core.seq( arglist__5909 );;
return G__5908__delegate.call(this, args);
});
return G__5908;
})()
;
});
var partial__5903 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__5910__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__5910 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5910__delegate.call(this, args);
};
G__5910.cljs$lang$maxFixedArity = 0;
G__5910.cljs$lang$applyTo = (function (arglist__5911){
var args = cljs.core.seq( arglist__5911 );;
return G__5910__delegate.call(this, args);
});
return G__5910;
})()
;
});
var partial__5904 = (function() { 
var G__5912__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__5913__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__5913 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5913__delegate.call(this, args);
};
G__5913.cljs$lang$maxFixedArity = 0;
G__5913.cljs$lang$applyTo = (function (arglist__5914){
var args = cljs.core.seq( arglist__5914 );;
return G__5913__delegate.call(this, args);
});
return G__5913;
})()
;
};
var G__5912 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5912__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__5912.cljs$lang$maxFixedArity = 4;
G__5912.cljs$lang$applyTo = (function (arglist__5915){
var f = cljs.core.first(arglist__5915);
var arg1 = cljs.core.first(cljs.core.next(arglist__5915));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5915)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5915))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5915))));
return G__5912__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__5912;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__5901.call(this,f,arg1);
case  3 :
return partial__5902.call(this,f,arg1,arg2);
case  4 :
return partial__5903.call(this,f,arg1,arg2,arg3);
default:
return partial__5904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5904.cljs$lang$applyTo;
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
var fnil__5916 = (function (f,x){
return (function() {
var G__5920 = null;
var G__5920__5921 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__5920__5922 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__5920__5923 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__5920__5924 = (function() { 
var G__5926__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__5926 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5926__delegate.call(this, a, b, c, ds);
};
G__5926.cljs$lang$maxFixedArity = 3;
G__5926.cljs$lang$applyTo = (function (arglist__5927){
var a = cljs.core.first(arglist__5927);
var b = cljs.core.first(cljs.core.next(arglist__5927));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5927)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5927)));
return G__5926__delegate.call(this, a, b, c, ds);
});
return G__5926;
})()
;
G__5920 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__5920__5921.call(this,a);
case  2 :
return G__5920__5922.call(this,a,b);
case  3 :
return G__5920__5923.call(this,a,b,c);
default:
return G__5920__5924.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5920.cljs$lang$maxFixedArity = 3;
G__5920.cljs$lang$applyTo = G__5920__5924.cljs$lang$applyTo;
return G__5920;
})()
});
var fnil__5917 = (function (f,x,y){
return (function() {
var G__5928 = null;
var G__5928__5929 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__5928__5930 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__5928__5931 = (function() { 
var G__5933__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__5933 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5933__delegate.call(this, a, b, c, ds);
};
G__5933.cljs$lang$maxFixedArity = 3;
G__5933.cljs$lang$applyTo = (function (arglist__5934){
var a = cljs.core.first(arglist__5934);
var b = cljs.core.first(cljs.core.next(arglist__5934));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5934)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5934)));
return G__5933__delegate.call(this, a, b, c, ds);
});
return G__5933;
})()
;
G__5928 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__5928__5929.call(this,a,b);
case  3 :
return G__5928__5930.call(this,a,b,c);
default:
return G__5928__5931.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5928.cljs$lang$maxFixedArity = 3;
G__5928.cljs$lang$applyTo = G__5928__5931.cljs$lang$applyTo;
return G__5928;
})()
});
var fnil__5918 = (function (f,x,y,z){
return (function() {
var G__5935 = null;
var G__5935__5936 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__5935__5937 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__5935__5938 = (function() { 
var G__5940__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__5940 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5940__delegate.call(this, a, b, c, ds);
};
G__5940.cljs$lang$maxFixedArity = 3;
G__5940.cljs$lang$applyTo = (function (arglist__5941){
var a = cljs.core.first(arglist__5941);
var b = cljs.core.first(cljs.core.next(arglist__5941));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5941)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5941)));
return G__5940__delegate.call(this, a, b, c, ds);
});
return G__5940;
})()
;
G__5935 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__5935__5936.call(this,a,b);
case  3 :
return G__5935__5937.call(this,a,b,c);
default:
return G__5935__5938.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5935.cljs$lang$maxFixedArity = 3;
G__5935.cljs$lang$applyTo = G__5935__5938.cljs$lang$applyTo;
return G__5935;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__5916.call(this,f,x);
case  3 :
return fnil__5917.call(this,f,x,y);
case  4 :
return fnil__5918.call(this,f,x,y,z);
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
var mapi__5944 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5942 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5942))
{var s__5943 = temp__3698__auto____5942;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__5943)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5943)));
} else
{return null;
}
})));
});

return mapi__5944.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5945 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5945))
{var s__5946 = temp__3698__auto____5945;

var x__5947 = f.call(null,cljs.core.first.call(null,s__5946));

if(cljs.core.truth_((x__5947 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__5946));
} else
{return cljs.core.cons.call(null,x__5947,keep.call(null,f,cljs.core.rest.call(null,s__5946)));
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
var keepi__5957 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5954 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5954))
{var s__5955 = temp__3698__auto____5954;

var x__5956 = f.call(null,idx,cljs.core.first.call(null,s__5955));

if(cljs.core.truth_((x__5956 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5955));
} else
{return cljs.core.cons.call(null,x__5956,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5955)));
}
} else
{return null;
}
})));
});

return keepi__5957.call(null,0,coll);
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
var every_pred__6002 = (function (p){
return (function() {
var ep1 = null;
var ep1__6007 = (function (){
return true;
});
var ep1__6008 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__6009 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5964 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____5964))
{return p.call(null,y);
} else
{return and__3546__auto____5964;
}
})());
});
var ep1__6010 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5965 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____5965))
{var and__3546__auto____5966 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____5966))
{return p.call(null,z);
} else
{return and__3546__auto____5966;
}
} else
{return and__3546__auto____5965;
}
})());
});
var ep1__6011 = (function() { 
var G__6013__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5967 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____5967))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____5967;
}
})());
};
var G__6013 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6013__delegate.call(this, x, y, z, args);
};
G__6013.cljs$lang$maxFixedArity = 3;
G__6013.cljs$lang$applyTo = (function (arglist__6014){
var x = cljs.core.first(arglist__6014);
var y = cljs.core.first(cljs.core.next(arglist__6014));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6014)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6014)));
return G__6013__delegate.call(this, x, y, z, args);
});
return G__6013;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__6007.call(this);
case  1 :
return ep1__6008.call(this,x);
case  2 :
return ep1__6009.call(this,x,y);
case  3 :
return ep1__6010.call(this,x,y,z);
default:
return ep1__6011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__6011.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__6003 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__6015 = (function (){
return true;
});
var ep2__6016 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5968 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5968))
{return p2.call(null,x);
} else
{return and__3546__auto____5968;
}
})());
});
var ep2__6017 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5969 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5969))
{var and__3546__auto____5970 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____5970))
{var and__3546__auto____5971 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5971))
{return p2.call(null,y);
} else
{return and__3546__auto____5971;
}
} else
{return and__3546__auto____5970;
}
} else
{return and__3546__auto____5969;
}
})());
});
var ep2__6018 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5972 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5972))
{var and__3546__auto____5973 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____5973))
{var and__3546__auto____5974 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____5974))
{var and__3546__auto____5975 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5975))
{var and__3546__auto____5976 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____5976))
{return p2.call(null,z);
} else
{return and__3546__auto____5976;
}
} else
{return and__3546__auto____5975;
}
} else
{return and__3546__auto____5974;
}
} else
{return and__3546__auto____5973;
}
} else
{return and__3546__auto____5972;
}
})());
});
var ep2__6019 = (function() { 
var G__6021__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5977 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____5977))
{return cljs.core.every_QMARK_.call(null,(function (p1__5948_SHARP_){
var and__3546__auto____5978 = p1.call(null,p1__5948_SHARP_);

if(cljs.core.truth_(and__3546__auto____5978))
{return p2.call(null,p1__5948_SHARP_);
} else
{return and__3546__auto____5978;
}
}),args);
} else
{return and__3546__auto____5977;
}
})());
};
var G__6021 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6021__delegate.call(this, x, y, z, args);
};
G__6021.cljs$lang$maxFixedArity = 3;
G__6021.cljs$lang$applyTo = (function (arglist__6022){
var x = cljs.core.first(arglist__6022);
var y = cljs.core.first(cljs.core.next(arglist__6022));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6022)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6022)));
return G__6021__delegate.call(this, x, y, z, args);
});
return G__6021;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__6015.call(this);
case  1 :
return ep2__6016.call(this,x);
case  2 :
return ep2__6017.call(this,x,y);
case  3 :
return ep2__6018.call(this,x,y,z);
default:
return ep2__6019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__6019.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__6004 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__6023 = (function (){
return true;
});
var ep3__6024 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5979 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5979))
{var and__3546__auto____5980 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5980))
{return p3.call(null,x);
} else
{return and__3546__auto____5980;
}
} else
{return and__3546__auto____5979;
}
})());
});
var ep3__6025 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5981 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5981))
{var and__3546__auto____5982 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5982))
{var and__3546__auto____5983 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____5983))
{var and__3546__auto____5984 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____5984))
{var and__3546__auto____5985 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____5985))
{return p3.call(null,y);
} else
{return and__3546__auto____5985;
}
} else
{return and__3546__auto____5984;
}
} else
{return and__3546__auto____5983;
}
} else
{return and__3546__auto____5982;
}
} else
{return and__3546__auto____5981;
}
})());
});
var ep3__6026 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5986 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5986))
{var and__3546__auto____5987 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5987))
{var and__3546__auto____5988 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____5988))
{var and__3546__auto____5989 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____5989))
{var and__3546__auto____5990 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____5990))
{var and__3546__auto____5991 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____5991))
{var and__3546__auto____5992 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____5992))
{var and__3546__auto____5993 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____5993))
{return p3.call(null,z);
} else
{return and__3546__auto____5993;
}
} else
{return and__3546__auto____5992;
}
} else
{return and__3546__auto____5991;
}
} else
{return and__3546__auto____5990;
}
} else
{return and__3546__auto____5989;
}
} else
{return and__3546__auto____5988;
}
} else
{return and__3546__auto____5987;
}
} else
{return and__3546__auto____5986;
}
})());
});
var ep3__6027 = (function() { 
var G__6029__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5994 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____5994))
{return cljs.core.every_QMARK_.call(null,(function (p1__5949_SHARP_){
var and__3546__auto____5995 = p1.call(null,p1__5949_SHARP_);

if(cljs.core.truth_(and__3546__auto____5995))
{var and__3546__auto____5996 = p2.call(null,p1__5949_SHARP_);

if(cljs.core.truth_(and__3546__auto____5996))
{return p3.call(null,p1__5949_SHARP_);
} else
{return and__3546__auto____5996;
}
} else
{return and__3546__auto____5995;
}
}),args);
} else
{return and__3546__auto____5994;
}
})());
};
var G__6029 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6029__delegate.call(this, x, y, z, args);
};
G__6029.cljs$lang$maxFixedArity = 3;
G__6029.cljs$lang$applyTo = (function (arglist__6030){
var x = cljs.core.first(arglist__6030);
var y = cljs.core.first(cljs.core.next(arglist__6030));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6030)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6030)));
return G__6029__delegate.call(this, x, y, z, args);
});
return G__6029;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__6023.call(this);
case  1 :
return ep3__6024.call(this,x);
case  2 :
return ep3__6025.call(this,x,y);
case  3 :
return ep3__6026.call(this,x,y,z);
default:
return ep3__6027.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__6027.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__6005 = (function() { 
var G__6031__delegate = function (p1,p2,p3,ps){
var ps__5997 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__6032 = (function (){
return true;
});
var epn__6033 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__5950_SHARP_){
return p1__5950_SHARP_.call(null,x);
}),ps__5997);
});
var epn__6034 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__5951_SHARP_){
var and__3546__auto____5998 = p1__5951_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____5998))
{return p1__5951_SHARP_.call(null,y);
} else
{return and__3546__auto____5998;
}
}),ps__5997);
});
var epn__6035 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__5952_SHARP_){
var and__3546__auto____5999 = p1__5952_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____5999))
{var and__3546__auto____6000 = p1__5952_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____6000))
{return p1__5952_SHARP_.call(null,z);
} else
{return and__3546__auto____6000;
}
} else
{return and__3546__auto____5999;
}
}),ps__5997);
});
var epn__6036 = (function() { 
var G__6038__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____6001 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____6001))
{return cljs.core.every_QMARK_.call(null,(function (p1__5953_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__5953_SHARP_,args);
}),ps__5997);
} else
{return and__3546__auto____6001;
}
})());
};
var G__6038 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6038__delegate.call(this, x, y, z, args);
};
G__6038.cljs$lang$maxFixedArity = 3;
G__6038.cljs$lang$applyTo = (function (arglist__6039){
var x = cljs.core.first(arglist__6039);
var y = cljs.core.first(cljs.core.next(arglist__6039));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6039)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6039)));
return G__6038__delegate.call(this, x, y, z, args);
});
return G__6038;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__6032.call(this);
case  1 :
return epn__6033.call(this,x);
case  2 :
return epn__6034.call(this,x,y);
case  3 :
return epn__6035.call(this,x,y,z);
default:
return epn__6036.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__6036.cljs$lang$applyTo;
return epn;
})()
};
var G__6031 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6031__delegate.call(this, p1, p2, p3, ps);
};
G__6031.cljs$lang$maxFixedArity = 3;
G__6031.cljs$lang$applyTo = (function (arglist__6040){
var p1 = cljs.core.first(arglist__6040);
var p2 = cljs.core.first(cljs.core.next(arglist__6040));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6040)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6040)));
return G__6031__delegate.call(this, p1, p2, p3, ps);
});
return G__6031;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__6002.call(this,p1);
case  2 :
return every_pred__6003.call(this,p1,p2);
case  3 :
return every_pred__6004.call(this,p1,p2,p3);
default:
return every_pred__6005.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__6005.cljs$lang$applyTo;
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
var some_fn__6080 = (function (p){
return (function() {
var sp1 = null;
var sp1__6085 = (function (){
return null;
});
var sp1__6086 = (function (x){
return p.call(null,x);
});
var sp1__6087 = (function (x,y){
var or__3548__auto____6042 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____6042))
{return or__3548__auto____6042;
} else
{return p.call(null,y);
}
});
var sp1__6088 = (function (x,y,z){
var or__3548__auto____6043 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____6043))
{return or__3548__auto____6043;
} else
{var or__3548__auto____6044 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____6044))
{return or__3548__auto____6044;
} else
{return p.call(null,z);
}
}
});
var sp1__6089 = (function() { 
var G__6091__delegate = function (x,y,z,args){
var or__3548__auto____6045 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6045))
{return or__3548__auto____6045;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__6091 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6091__delegate.call(this, x, y, z, args);
};
G__6091.cljs$lang$maxFixedArity = 3;
G__6091.cljs$lang$applyTo = (function (arglist__6092){
var x = cljs.core.first(arglist__6092);
var y = cljs.core.first(cljs.core.next(arglist__6092));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6092)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6092)));
return G__6091__delegate.call(this, x, y, z, args);
});
return G__6091;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__6085.call(this);
case  1 :
return sp1__6086.call(this,x);
case  2 :
return sp1__6087.call(this,x,y);
case  3 :
return sp1__6088.call(this,x,y,z);
default:
return sp1__6089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__6089.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__6081 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__6093 = (function (){
return null;
});
var sp2__6094 = (function (x){
var or__3548__auto____6046 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6046))
{return or__3548__auto____6046;
} else
{return p2.call(null,x);
}
});
var sp2__6095 = (function (x,y){
var or__3548__auto____6047 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6047))
{return or__3548__auto____6047;
} else
{var or__3548__auto____6048 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6048))
{return or__3548__auto____6048;
} else
{var or__3548__auto____6049 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6049))
{return or__3548__auto____6049;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__6096 = (function (x,y,z){
var or__3548__auto____6050 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6050))
{return or__3548__auto____6050;
} else
{var or__3548__auto____6051 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6051))
{return or__3548__auto____6051;
} else
{var or__3548__auto____6052 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____6052))
{return or__3548__auto____6052;
} else
{var or__3548__auto____6053 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6053))
{return or__3548__auto____6053;
} else
{var or__3548__auto____6054 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____6054))
{return or__3548__auto____6054;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__6097 = (function() { 
var G__6099__delegate = function (x,y,z,args){
var or__3548__auto____6055 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6055))
{return or__3548__auto____6055;
} else
{return cljs.core.some.call(null,(function (p1__5958_SHARP_){
var or__3548__auto____6056 = p1.call(null,p1__5958_SHARP_);

if(cljs.core.truth_(or__3548__auto____6056))
{return or__3548__auto____6056;
} else
{return p2.call(null,p1__5958_SHARP_);
}
}),args);
}
};
var G__6099 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6099__delegate.call(this, x, y, z, args);
};
G__6099.cljs$lang$maxFixedArity = 3;
G__6099.cljs$lang$applyTo = (function (arglist__6100){
var x = cljs.core.first(arglist__6100);
var y = cljs.core.first(cljs.core.next(arglist__6100));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6100)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6100)));
return G__6099__delegate.call(this, x, y, z, args);
});
return G__6099;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__6093.call(this);
case  1 :
return sp2__6094.call(this,x);
case  2 :
return sp2__6095.call(this,x,y);
case  3 :
return sp2__6096.call(this,x,y,z);
default:
return sp2__6097.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__6097.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__6082 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__6101 = (function (){
return null;
});
var sp3__6102 = (function (x){
var or__3548__auto____6057 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6057))
{return or__3548__auto____6057;
} else
{var or__3548__auto____6058 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6058))
{return or__3548__auto____6058;
} else
{return p3.call(null,x);
}
}
});
var sp3__6103 = (function (x,y){
var or__3548__auto____6059 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6059))
{return or__3548__auto____6059;
} else
{var or__3548__auto____6060 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6060))
{return or__3548__auto____6060;
} else
{var or__3548__auto____6061 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____6061))
{return or__3548__auto____6061;
} else
{var or__3548__auto____6062 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6062))
{return or__3548__auto____6062;
} else
{var or__3548__auto____6063 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____6063))
{return or__3548__auto____6063;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__6104 = (function (x,y,z){
var or__3548__auto____6064 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____6064))
{return or__3548__auto____6064;
} else
{var or__3548__auto____6065 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____6065))
{return or__3548__auto____6065;
} else
{var or__3548__auto____6066 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____6066))
{return or__3548__auto____6066;
} else
{var or__3548__auto____6067 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____6067))
{return or__3548__auto____6067;
} else
{var or__3548__auto____6068 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____6068))
{return or__3548__auto____6068;
} else
{var or__3548__auto____6069 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____6069))
{return or__3548__auto____6069;
} else
{var or__3548__auto____6070 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____6070))
{return or__3548__auto____6070;
} else
{var or__3548__auto____6071 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____6071))
{return or__3548__auto____6071;
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
var sp3__6105 = (function() { 
var G__6107__delegate = function (x,y,z,args){
var or__3548__auto____6072 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6072))
{return or__3548__auto____6072;
} else
{return cljs.core.some.call(null,(function (p1__5959_SHARP_){
var or__3548__auto____6073 = p1.call(null,p1__5959_SHARP_);

if(cljs.core.truth_(or__3548__auto____6073))
{return or__3548__auto____6073;
} else
{var or__3548__auto____6074 = p2.call(null,p1__5959_SHARP_);

if(cljs.core.truth_(or__3548__auto____6074))
{return or__3548__auto____6074;
} else
{return p3.call(null,p1__5959_SHARP_);
}
}
}),args);
}
};
var G__6107 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6107__delegate.call(this, x, y, z, args);
};
G__6107.cljs$lang$maxFixedArity = 3;
G__6107.cljs$lang$applyTo = (function (arglist__6108){
var x = cljs.core.first(arglist__6108);
var y = cljs.core.first(cljs.core.next(arglist__6108));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6108)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6108)));
return G__6107__delegate.call(this, x, y, z, args);
});
return G__6107;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__6101.call(this);
case  1 :
return sp3__6102.call(this,x);
case  2 :
return sp3__6103.call(this,x,y);
case  3 :
return sp3__6104.call(this,x,y,z);
default:
return sp3__6105.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__6105.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__6083 = (function() { 
var G__6109__delegate = function (p1,p2,p3,ps){
var ps__6075 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__6110 = (function (){
return null;
});
var spn__6111 = (function (x){
return cljs.core.some.call(null,(function (p1__5960_SHARP_){
return p1__5960_SHARP_.call(null,x);
}),ps__6075);
});
var spn__6112 = (function (x,y){
return cljs.core.some.call(null,(function (p1__5961_SHARP_){
var or__3548__auto____6076 = p1__5961_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6076))
{return or__3548__auto____6076;
} else
{return p1__5961_SHARP_.call(null,y);
}
}),ps__6075);
});
var spn__6113 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__5962_SHARP_){
var or__3548__auto____6077 = p1__5962_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6077))
{return or__3548__auto____6077;
} else
{var or__3548__auto____6078 = p1__5962_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____6078))
{return or__3548__auto____6078;
} else
{return p1__5962_SHARP_.call(null,z);
}
}
}),ps__6075);
});
var spn__6114 = (function() { 
var G__6116__delegate = function (x,y,z,args){
var or__3548__auto____6079 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____6079))
{return or__3548__auto____6079;
} else
{return cljs.core.some.call(null,(function (p1__5963_SHARP_){
return cljs.core.some.call(null,p1__5963_SHARP_,args);
}),ps__6075);
}
};
var G__6116 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6116__delegate.call(this, x, y, z, args);
};
G__6116.cljs$lang$maxFixedArity = 3;
G__6116.cljs$lang$applyTo = (function (arglist__6117){
var x = cljs.core.first(arglist__6117);
var y = cljs.core.first(cljs.core.next(arglist__6117));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6117)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6117)));
return G__6116__delegate.call(this, x, y, z, args);
});
return G__6116;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__6110.call(this);
case  1 :
return spn__6111.call(this,x);
case  2 :
return spn__6112.call(this,x,y);
case  3 :
return spn__6113.call(this,x,y,z);
default:
return spn__6114.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__6114.cljs$lang$applyTo;
return spn;
})()
};
var G__6109 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6109__delegate.call(this, p1, p2, p3, ps);
};
G__6109.cljs$lang$maxFixedArity = 3;
G__6109.cljs$lang$applyTo = (function (arglist__6118){
var p1 = cljs.core.first(arglist__6118);
var p2 = cljs.core.first(cljs.core.next(arglist__6118));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6118)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6118)));
return G__6109__delegate.call(this, p1, p2, p3, ps);
});
return G__6109;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__6080.call(this,p1);
case  2 :
return some_fn__6081.call(this,p1,p2);
case  3 :
return some_fn__6082.call(this,p1,p2,p3);
default:
return some_fn__6083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__6083.cljs$lang$applyTo;
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
var map__6131 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6119 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6119))
{var s__6120 = temp__3698__auto____6119;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__6120)),map.call(null,f,cljs.core.rest.call(null,s__6120)));
} else
{return null;
}
})));
});
var map__6132 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6121 = cljs.core.seq.call(null,c1);
var s2__6122 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____6123 = s1__6121;

if(cljs.core.truth_(and__3546__auto____6123))
{return s2__6122;
} else
{return and__3546__auto____6123;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__6121),cljs.core.first.call(null,s2__6122)),map.call(null,f,cljs.core.rest.call(null,s1__6121),cljs.core.rest.call(null,s2__6122)));
} else
{return null;
}
})));
});
var map__6133 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6124 = cljs.core.seq.call(null,c1);
var s2__6125 = cljs.core.seq.call(null,c2);
var s3__6126 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____6127 = s1__6124;

if(cljs.core.truth_(and__3546__auto____6127))
{var and__3546__auto____6128 = s2__6125;

if(cljs.core.truth_(and__3546__auto____6128))
{return s3__6126;
} else
{return and__3546__auto____6128;
}
} else
{return and__3546__auto____6127;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__6124),cljs.core.first.call(null,s2__6125),cljs.core.first.call(null,s3__6126)),map.call(null,f,cljs.core.rest.call(null,s1__6124),cljs.core.rest.call(null,s2__6125),cljs.core.rest.call(null,s3__6126)));
} else
{return null;
}
})));
});
var map__6134 = (function() { 
var G__6136__delegate = function (f,c1,c2,c3,colls){
var step__6130 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__6129 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__6129)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__6129),step.call(null,map.call(null,cljs.core.rest,ss__6129)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__6041_SHARP_){
return cljs.core.apply.call(null,f,p1__6041_SHARP_);
}),step__6130.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__6136 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6136__delegate.call(this, f, c1, c2, c3, colls);
};
G__6136.cljs$lang$maxFixedArity = 4;
G__6136.cljs$lang$applyTo = (function (arglist__6137){
var f = cljs.core.first(arglist__6137);
var c1 = cljs.core.first(cljs.core.next(arglist__6137));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6137)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6137))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6137))));
return G__6136__delegate.call(this, f, c1, c2, c3, colls);
});
return G__6136;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__6131.call(this,f,c1);
case  3 :
return map__6132.call(this,f,c1,c2);
case  4 :
return map__6133.call(this,f,c1,c2,c3);
default:
return map__6134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__6134.cljs$lang$applyTo;
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
{var temp__3698__auto____6138 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6138))
{var s__6139 = temp__3698__auto____6138;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__6139),take.call(null,(n - 1),cljs.core.rest.call(null,s__6139)));
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
var step__6142 = (function (n,coll){
while(true){
var s__6140 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____6141 = (n > 0);

if(cljs.core.truth_(and__3546__auto____6141))
{return s__6140;
} else
{return and__3546__auto____6141;
}
})()))
{{
var G__6143 = (n - 1);
var G__6144 = cljs.core.rest.call(null,s__6140);
n = G__6143;
coll = G__6144;
continue;
}
} else
{return s__6140;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__6142.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__6145 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__6146 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__6145.call(this,n);
case  2 :
return drop_last__6146.call(this,n,s);
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
var s__6148 = cljs.core.seq.call(null,coll);
var lead__6149 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__6149))
{{
var G__6150 = cljs.core.next.call(null,s__6148);
var G__6151 = cljs.core.next.call(null,lead__6149);
s__6148 = G__6150;
lead__6149 = G__6151;
continue;
}
} else
{return s__6148;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__6154 = (function (pred,coll){
while(true){
var s__6152 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____6153 = s__6152;

if(cljs.core.truth_(and__3546__auto____6153))
{return pred.call(null,cljs.core.first.call(null,s__6152));
} else
{return and__3546__auto____6153;
}
})()))
{{
var G__6155 = pred;
var G__6156 = cljs.core.rest.call(null,s__6152);
pred = G__6155;
coll = G__6156;
continue;
}
} else
{return s__6152;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__6154.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6157 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6157))
{var s__6158 = temp__3698__auto____6157;

return cljs.core.concat.call(null,s__6158,cycle.call(null,s__6158));
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
var repeat__6159 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__6160 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__6159.call(this,n);
case  2 :
return repeat__6160.call(this,n,x);
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
var repeatedly__6162 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__6163 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__6162.call(this,n);
case  2 :
return repeatedly__6163.call(this,n,f);
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
var interleave__6169 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6165 = cljs.core.seq.call(null,c1);
var s2__6166 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____6167 = s1__6165;

if(cljs.core.truth_(and__3546__auto____6167))
{return s2__6166;
} else
{return and__3546__auto____6167;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__6165),cljs.core.cons.call(null,cljs.core.first.call(null,s2__6166),interleave.call(null,cljs.core.rest.call(null,s1__6165),cljs.core.rest.call(null,s2__6166))));
} else
{return null;
}
})));
});
var interleave__6170 = (function() { 
var G__6172__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__6168 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__6168)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__6168),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__6168)));
} else
{return null;
}
})));
};
var G__6172 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6172__delegate.call(this, c1, c2, colls);
};
G__6172.cljs$lang$maxFixedArity = 2;
G__6172.cljs$lang$applyTo = (function (arglist__6173){
var c1 = cljs.core.first(arglist__6173);
var c2 = cljs.core.first(cljs.core.next(arglist__6173));
var colls = cljs.core.rest(cljs.core.next(arglist__6173));
return G__6172__delegate.call(this, c1, c2, colls);
});
return G__6172;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__6169.call(this,c1,c2);
default:
return interleave__6170.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__6170.cljs$lang$applyTo;
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
var cat__6176 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____6174 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____6174))
{var coll__6175 = temp__3695__auto____6174;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__6175),cat.call(null,cljs.core.rest.call(null,coll__6175),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__6176.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__6177 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__6178 = (function() { 
var G__6180__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__6180 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6180__delegate.call(this, f, coll, colls);
};
G__6180.cljs$lang$maxFixedArity = 2;
G__6180.cljs$lang$applyTo = (function (arglist__6181){
var f = cljs.core.first(arglist__6181);
var coll = cljs.core.first(cljs.core.next(arglist__6181));
var colls = cljs.core.rest(cljs.core.next(arglist__6181));
return G__6180__delegate.call(this, f, coll, colls);
});
return G__6180;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__6177.call(this,f,coll);
default:
return mapcat__6178.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__6178.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6182 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6182))
{var s__6183 = temp__3698__auto____6182;

var f__6184 = cljs.core.first.call(null,s__6183);
var r__6185 = cljs.core.rest.call(null,s__6183);

if(cljs.core.truth_(pred.call(null,f__6184)))
{return cljs.core.cons.call(null,f__6184,filter.call(null,pred,r__6185));
} else
{return filter.call(null,pred,r__6185);
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
var walk__6187 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__6187.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__6186_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__6186_SHARP_));
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
var partition__6194 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__6195 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6188 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6188))
{var s__6189 = temp__3698__auto____6188;

var p__6190 = cljs.core.take.call(null,n,s__6189);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6190))))
{return cljs.core.cons.call(null,p__6190,partition.call(null,n,step,cljs.core.drop.call(null,step,s__6189)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__6196 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6191 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6191))
{var s__6192 = temp__3698__auto____6191;

var p__6193 = cljs.core.take.call(null,n,s__6192);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6193))))
{return cljs.core.cons.call(null,p__6193,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__6192)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__6193,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__6194.call(this,n,step);
case  3 :
return partition__6195.call(this,n,step,pad);
case  4 :
return partition__6196.call(this,n,step,pad,coll);
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
var get_in__6202 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__6203 = (function (m,ks,not_found){
var sentinel__6198 = cljs.core.lookup_sentinel;
var m__6199 = m;
var ks__6200 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__6200))
{var m__6201 = cljs.core.get.call(null,m__6199,cljs.core.first.call(null,ks__6200),sentinel__6198);

if(cljs.core.truth_((sentinel__6198 === m__6201)))
{return not_found;
} else
{{
var G__6205 = sentinel__6198;
var G__6206 = m__6201;
var G__6207 = cljs.core.next.call(null,ks__6200);
sentinel__6198 = G__6205;
m__6199 = G__6206;
ks__6200 = G__6207;
continue;
}
}
} else
{return m__6199;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__6202.call(this,m,ks);
case  3 :
return get_in__6203.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__6208,v){
var vec__6209__6210 = p__6208;
var k__6211 = cljs.core.nth.call(null,vec__6209__6210,0,null);
var ks__6212 = cljs.core.nthnext.call(null,vec__6209__6210,1);

if(cljs.core.truth_(ks__6212))
{return cljs.core.assoc.call(null,m,k__6211,assoc_in.call(null,cljs.core.get.call(null,m,k__6211),ks__6212,v));
} else
{return cljs.core.assoc.call(null,m,k__6211,v);
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
var update_in__delegate = function (m,p__6213,f,args){
var vec__6214__6215 = p__6213;
var k__6216 = cljs.core.nth.call(null,vec__6214__6215,0,null);
var ks__6217 = cljs.core.nthnext.call(null,vec__6214__6215,1);

if(cljs.core.truth_(ks__6217))
{return cljs.core.assoc.call(null,m,k__6216,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__6216),ks__6217,f,args));
} else
{return cljs.core.assoc.call(null,m,k__6216,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__6216),args));
}
};
var update_in = function (m,p__6213,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__6213, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__6218){
var m = cljs.core.first(arglist__6218);
var p__6213 = cljs.core.first(cljs.core.next(arglist__6218));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6218)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6218)));
return update_in__delegate.call(this, m, p__6213, f, args);
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
var this__6219 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6252 = null;
var G__6252__6253 = (function (coll,k){
var this__6220 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6252__6254 = (function (coll,k,not_found){
var this__6221 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6252 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6252__6253.call(this,coll,k);
case  3 :
return G__6252__6254.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6252;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6222 = this;
var new_array__6223 = cljs.core.aclone.call(null,this__6222.array);

(new_array__6223[k] = v);
return (new cljs.core.Vector(this__6222.meta,new_array__6223));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__6256 = null;
var G__6256__6257 = (function (tsym6224,k){
var this__6226 = this;
var tsym6224__6227 = this;

var coll__6228 = tsym6224__6227;

return cljs.core._lookup.call(null,coll__6228,k);
});
var G__6256__6258 = (function (tsym6225,k,not_found){
var this__6229 = this;
var tsym6225__6230 = this;

var coll__6231 = tsym6225__6230;

return cljs.core._lookup.call(null,coll__6231,k,not_found);
});
G__6256 = function(tsym6225,k,not_found){
switch(arguments.length){
case  2 :
return G__6256__6257.call(this,tsym6225,k);
case  3 :
return G__6256__6258.call(this,tsym6225,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6256;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6232 = this;
var new_array__6233 = cljs.core.aclone.call(null,this__6232.array);

new_array__6233.push(o);
return (new cljs.core.Vector(this__6232.meta,new_array__6233));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6260 = null;
var G__6260__6261 = (function (v,f){
var this__6234 = this;
return cljs.core.ci_reduce.call(null,this__6234.array,f);
});
var G__6260__6262 = (function (v,f,start){
var this__6235 = this;
return cljs.core.ci_reduce.call(null,this__6235.array,f,start);
});
G__6260 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__6260__6261.call(this,v,f);
case  3 :
return G__6260__6262.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6260;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6236 = this;
if(cljs.core.truth_((this__6236.array.length > 0)))
{var vector_seq__6237 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__6236.array.length)))
{return cljs.core.cons.call(null,(this__6236.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__6237.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6238 = this;
return this__6238.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6239 = this;
var count__6240 = this__6239.array.length;

if(cljs.core.truth_((count__6240 > 0)))
{return (this__6239.array[(count__6240 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6241 = this;
if(cljs.core.truth_((this__6241.array.length > 0)))
{var new_array__6242 = cljs.core.aclone.call(null,this__6241.array);

new_array__6242.pop();
return (new cljs.core.Vector(this__6241.meta,new_array__6242));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__6243 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6244 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6245 = this;
return (new cljs.core.Vector(meta,this__6245.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6246 = this;
return this__6246.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6264 = null;
var G__6264__6265 = (function (coll,n){
var this__6247 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6248 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____6248))
{return (n < this__6247.array.length);
} else
{return and__3546__auto____6248;
}
})()))
{return (this__6247.array[n]);
} else
{return null;
}
});
var G__6264__6266 = (function (coll,n,not_found){
var this__6249 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6250 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____6250))
{return (n < this__6249.array.length);
} else
{return and__3546__auto____6250;
}
})()))
{return (this__6249.array[n]);
} else
{return not_found;
}
});
G__6264 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6264__6265.call(this,coll,n);
case  3 :
return G__6264__6266.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6264;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6251 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__6251.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__6268 = pv.cnt;

if(cljs.core.truth_((cnt__6268 < 32)))
{return 0;
} else
{return (((cnt__6268 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__6269 = level;
var ret__6270 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__6269)))
{return ret__6270;
} else
{var embed__6271 = ret__6270;
var r__6272 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___6273 = (r__6272[0] = embed__6271);

{
var G__6274 = (ll__6269 - 5);
var G__6275 = r__6272;
ll__6269 = G__6274;
ret__6270 = G__6275;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__6276 = cljs.core.aclone.call(null,parent);
var subidx__6277 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__6276[subidx__6277] = tailnode);
return ret__6276;
} else
{var temp__3695__auto____6278 = (parent[subidx__6277]);

if(cljs.core.truth_(temp__3695__auto____6278))
{var child__6279 = temp__3695__auto____6278;

var node_to_insert__6280 = push_tail.call(null,pv,(level - 5),child__6279,tailnode);
var ___6281 = (ret__6276[subidx__6277] = node_to_insert__6280);

return ret__6276;
} else
{var node_to_insert__6282 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___6283 = (ret__6276[subidx__6277] = node_to_insert__6282);

return ret__6276;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____6284 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____6284))
{return (i < pv.cnt);
} else
{return and__3546__auto____6284;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__6285 = pv.root;
var level__6286 = pv.shift;

while(true){
if(cljs.core.truth_((level__6286 > 0)))
{{
var G__6287 = (node__6285[((i >> level__6286) & 31)]);
var G__6288 = (level__6286 - 5);
node__6285 = G__6287;
level__6286 = G__6288;
continue;
}
} else
{return node__6285;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__6289 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__6289[(i & 31)] = val);
return ret__6289;
} else
{var subidx__6290 = ((i >> level) & 31);
var ___6291 = (ret__6289[subidx__6290] = do_assoc.call(null,pv,(level - 5),(node[subidx__6290]),i,val));

return ret__6289;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__6292 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__6293 = pop_tail.call(null,pv,(level - 5),(node[subidx__6292]));

if(cljs.core.truth_((function (){var and__3546__auto____6294 = (new_child__6293 === null);

if(cljs.core.truth_(and__3546__auto____6294))
{return (subidx__6292 === 0);
} else
{return and__3546__auto____6294;
}
})()))
{return null;
} else
{var ret__6295 = cljs.core.aclone.call(null,node);
var ___6296 = (ret__6295[subidx__6292] = new_child__6293);

return ret__6295;
}
} else
{if(cljs.core.truth_((subidx__6292 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__6297 = cljs.core.aclone.call(null,node);
var ___6298 = (ret__6297[subidx__6292] = null);

return ret__6297;
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
var this__6299 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6339 = null;
var G__6339__6340 = (function (coll,k){
var this__6300 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6339__6341 = (function (coll,k,not_found){
var this__6301 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6339 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6339__6340.call(this,coll,k);
case  3 :
return G__6339__6341.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6339;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6302 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6303 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____6303))
{return (k < this__6302.cnt);
} else
{return and__3546__auto____6303;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__6304 = cljs.core.aclone.call(null,this__6302.tail);

(new_tail__6304[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__6302.meta,this__6302.cnt,this__6302.shift,this__6302.root,new_tail__6304));
} else
{return (new cljs.core.PersistentVector(this__6302.meta,this__6302.cnt,this__6302.shift,cljs.core.do_assoc.call(null,coll,this__6302.shift,this__6302.root,k,v),this__6302.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__6302.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__6302.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__6343 = null;
var G__6343__6344 = (function (tsym6305,k){
var this__6307 = this;
var tsym6305__6308 = this;

var coll__6309 = tsym6305__6308;

return cljs.core._lookup.call(null,coll__6309,k);
});
var G__6343__6345 = (function (tsym6306,k,not_found){
var this__6310 = this;
var tsym6306__6311 = this;

var coll__6312 = tsym6306__6311;

return cljs.core._lookup.call(null,coll__6312,k,not_found);
});
G__6343 = function(tsym6306,k,not_found){
switch(arguments.length){
case  2 :
return G__6343__6344.call(this,tsym6306,k);
case  3 :
return G__6343__6345.call(this,tsym6306,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6343;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6313 = this;
if(cljs.core.truth_(((this__6313.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__6314 = cljs.core.aclone.call(null,this__6313.tail);

new_tail__6314.push(o);
return (new cljs.core.PersistentVector(this__6313.meta,(this__6313.cnt + 1),this__6313.shift,this__6313.root,new_tail__6314));
} else
{var root_overflow_QMARK___6315 = ((this__6313.cnt >> 5) > (1 << this__6313.shift));
var new_shift__6316 = (cljs.core.truth_(root_overflow_QMARK___6315)?(this__6313.shift + 5):this__6313.shift);
var new_root__6318 = (cljs.core.truth_(root_overflow_QMARK___6315)?(function (){var n_r__6317 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__6317[0] = this__6313.root);
(n_r__6317[1] = cljs.core.new_path.call(null,this__6313.shift,this__6313.tail));
return n_r__6317;
})():cljs.core.push_tail.call(null,coll,this__6313.shift,this__6313.root,this__6313.tail));

return (new cljs.core.PersistentVector(this__6313.meta,(this__6313.cnt + 1),new_shift__6316,new_root__6318,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6347 = null;
var G__6347__6348 = (function (v,f){
var this__6319 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__6347__6349 = (function (v,f,start){
var this__6320 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__6347 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__6347__6348.call(this,v,f);
case  3 :
return G__6347__6349.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6347;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6321 = this;
if(cljs.core.truth_((this__6321.cnt > 0)))
{var vector_seq__6322 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__6321.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__6322.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6323 = this;
return this__6323.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6324 = this;
if(cljs.core.truth_((this__6324.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__6324.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6325 = this;
if(cljs.core.truth_((this__6325.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__6325.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__6325.meta);
} else
{if(cljs.core.truth_((1 < (this__6325.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__6325.meta,(this__6325.cnt - 1),this__6325.shift,this__6325.root,cljs.core.aclone.call(null,this__6325.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__6326 = cljs.core.array_for.call(null,coll,(this__6325.cnt - 2));
var nr__6327 = cljs.core.pop_tail.call(null,this__6325.shift,this__6325.root);
var new_root__6328 = (cljs.core.truth_((nr__6327 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__6327);
var cnt_1__6329 = (this__6325.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____6330 = (5 < this__6325.shift);

if(cljs.core.truth_(and__3546__auto____6330))
{return ((new_root__6328[1]) === null);
} else
{return and__3546__auto____6330;
}
})()))
{return (new cljs.core.PersistentVector(this__6325.meta,cnt_1__6329,(this__6325.shift - 5),(new_root__6328[0]),new_tail__6326));
} else
{return (new cljs.core.PersistentVector(this__6325.meta,cnt_1__6329,this__6325.shift,new_root__6328,new_tail__6326));
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
var this__6331 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6332 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6333 = this;
return (new cljs.core.PersistentVector(meta,this__6333.cnt,this__6333.shift,this__6333.root,this__6333.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6334 = this;
return this__6334.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6351 = null;
var G__6351__6352 = (function (coll,n){
var this__6335 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__6351__6353 = (function (coll,n,not_found){
var this__6336 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6337 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____6337))
{return (n < this__6336.cnt);
} else
{return and__3546__auto____6337;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__6351 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6351__6352.call(this,coll,n);
case  3 :
return G__6351__6353.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6351;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6338 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__6338.meta);
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
vector.cljs$lang$applyTo = (function (arglist__6355){
var args = cljs.core.seq( arglist__6355 );;
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
var this__6356 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6384 = null;
var G__6384__6385 = (function (coll,k){
var this__6357 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6384__6386 = (function (coll,k,not_found){
var this__6358 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6384 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6384__6385.call(this,coll,k);
case  3 :
return G__6384__6386.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6384;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__6359 = this;
var v_pos__6360 = (this__6359.start + key);

return (new cljs.core.Subvec(this__6359.meta,cljs.core._assoc.call(null,this__6359.v,v_pos__6360,val),this__6359.start,((this__6359.end > (v_pos__6360 + 1)) ? this__6359.end : (v_pos__6360 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__6388 = null;
var G__6388__6389 = (function (tsym6361,k){
var this__6363 = this;
var tsym6361__6364 = this;

var coll__6365 = tsym6361__6364;

return cljs.core._lookup.call(null,coll__6365,k);
});
var G__6388__6390 = (function (tsym6362,k,not_found){
var this__6366 = this;
var tsym6362__6367 = this;

var coll__6368 = tsym6362__6367;

return cljs.core._lookup.call(null,coll__6368,k,not_found);
});
G__6388 = function(tsym6362,k,not_found){
switch(arguments.length){
case  2 :
return G__6388__6389.call(this,tsym6362,k);
case  3 :
return G__6388__6390.call(this,tsym6362,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6388;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6369 = this;
return (new cljs.core.Subvec(this__6369.meta,cljs.core._assoc_n.call(null,this__6369.v,this__6369.end,o),this__6369.start,(this__6369.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6392 = null;
var G__6392__6393 = (function (coll,f){
var this__6370 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__6392__6394 = (function (coll,f,start){
var this__6371 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__6392 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__6392__6393.call(this,coll,f);
case  3 :
return G__6392__6394.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6392;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6372 = this;
var subvec_seq__6373 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__6372.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__6372.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__6373.call(null,this__6372.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6374 = this;
return (this__6374.end - this__6374.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6375 = this;
return cljs.core._nth.call(null,this__6375.v,(this__6375.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6376 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__6376.start,this__6376.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__6376.meta,this__6376.v,this__6376.start,(this__6376.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__6377 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6378 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6379 = this;
return (new cljs.core.Subvec(meta,this__6379.v,this__6379.start,this__6379.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6380 = this;
return this__6380.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6396 = null;
var G__6396__6397 = (function (coll,n){
var this__6381 = this;
return cljs.core._nth.call(null,this__6381.v,(this__6381.start + n));
});
var G__6396__6398 = (function (coll,n,not_found){
var this__6382 = this;
return cljs.core._nth.call(null,this__6382.v,(this__6382.start + n),not_found);
});
G__6396 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6396__6397.call(this,coll,n);
case  3 :
return G__6396__6398.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6396;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6383 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__6383.meta);
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
var subvec__6400 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__6401 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__6400.call(this,v,start);
case  3 :
return subvec__6401.call(this,v,start,end);
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
var this__6403 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6404 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6405 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6406 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6406.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6407 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6408 = this;
return cljs.core._first.call(null,this__6408.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6409 = this;
var temp__3695__auto____6410 = cljs.core.next.call(null,this__6409.front);

if(cljs.core.truth_(temp__3695__auto____6410))
{var f1__6411 = temp__3695__auto____6410;

return (new cljs.core.PersistentQueueSeq(this__6409.meta,f1__6411,this__6409.rear));
} else
{if(cljs.core.truth_((this__6409.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__6409.meta,this__6409.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6412 = this;
return this__6412.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6413 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__6413.front,this__6413.rear));
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
var this__6414 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6415 = this;
if(cljs.core.truth_(this__6415.front))
{return (new cljs.core.PersistentQueue(this__6415.meta,(this__6415.count + 1),this__6415.front,cljs.core.conj.call(null,(function (){var or__3548__auto____6416 = this__6415.rear;

if(cljs.core.truth_(or__3548__auto____6416))
{return or__3548__auto____6416;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__6415.meta,(this__6415.count + 1),cljs.core.conj.call(null,this__6415.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6417 = this;
var rear__6418 = cljs.core.seq.call(null,this__6417.rear);

if(cljs.core.truth_((function (){var or__3548__auto____6419 = this__6417.front;

if(cljs.core.truth_(or__3548__auto____6419))
{return or__3548__auto____6419;
} else
{return rear__6418;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__6417.front,cljs.core.seq.call(null,rear__6418)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6420 = this;
return this__6420.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6421 = this;
return cljs.core._first.call(null,this__6421.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6422 = this;
if(cljs.core.truth_(this__6422.front))
{var temp__3695__auto____6423 = cljs.core.next.call(null,this__6422.front);

if(cljs.core.truth_(temp__3695__auto____6423))
{var f1__6424 = temp__3695__auto____6423;

return (new cljs.core.PersistentQueue(this__6422.meta,(this__6422.count - 1),f1__6424,this__6422.rear));
} else
{return (new cljs.core.PersistentQueue(this__6422.meta,(this__6422.count - 1),cljs.core.seq.call(null,this__6422.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__6425 = this;
return cljs.core.first.call(null,this__6425.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__6426 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6427 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6428 = this;
return (new cljs.core.PersistentQueue(meta,this__6428.count,this__6428.front,this__6428.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6429 = this;
return this__6429.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6430 = this;
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
var this__6431 = this;
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
var len__6432 = array.length;

var i__6433 = 0;

while(true){
if(cljs.core.truth_((i__6433 < len__6432)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__6433]))))
{return i__6433;
} else
{{
var G__6434 = (i__6433 + incr);
i__6433 = G__6434;
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
var obj_map_contains_key_QMARK___6436 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___6437 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____6435 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____6435))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____6435;
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
return obj_map_contains_key_QMARK___6436.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___6437.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__6440 = cljs.core.hash.call(null,a);
var b__6441 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__6440 < b__6441)))
{return -1;
} else
{if(cljs.core.truth_((a__6440 > b__6441)))
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
var this__6442 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6469 = null;
var G__6469__6470 = (function (coll,k){
var this__6443 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__6469__6471 = (function (coll,k,not_found){
var this__6444 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6444.strobj,(this__6444.strobj[k]),not_found);
});
G__6469 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6469__6470.call(this,coll,k);
case  3 :
return G__6469__6471.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6469;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6445 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__6446 = goog.object.clone.call(null,this__6445.strobj);
var overwrite_QMARK___6447 = new_strobj__6446.hasOwnProperty(k);

(new_strobj__6446[k] = v);
if(cljs.core.truth_(overwrite_QMARK___6447))
{return (new cljs.core.ObjMap(this__6445.meta,this__6445.keys,new_strobj__6446));
} else
{var new_keys__6448 = cljs.core.aclone.call(null,this__6445.keys);

new_keys__6448.push(k);
return (new cljs.core.ObjMap(this__6445.meta,new_keys__6448,new_strobj__6446));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__6445.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__6449 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6449.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__6473 = null;
var G__6473__6474 = (function (tsym6450,k){
var this__6452 = this;
var tsym6450__6453 = this;

var coll__6454 = tsym6450__6453;

return cljs.core._lookup.call(null,coll__6454,k);
});
var G__6473__6475 = (function (tsym6451,k,not_found){
var this__6455 = this;
var tsym6451__6456 = this;

var coll__6457 = tsym6451__6456;

return cljs.core._lookup.call(null,coll__6457,k,not_found);
});
G__6473 = function(tsym6451,k,not_found){
switch(arguments.length){
case  2 :
return G__6473__6474.call(this,tsym6451,k);
case  3 :
return G__6473__6475.call(this,tsym6451,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6473;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__6458 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6459 = this;
if(cljs.core.truth_((this__6459.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__6439_SHARP_){
return cljs.core.vector.call(null,p1__6439_SHARP_,(this__6459.strobj[p1__6439_SHARP_]));
}),this__6459.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6460 = this;
return this__6460.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6461 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6462 = this;
return (new cljs.core.ObjMap(meta,this__6462.keys,this__6462.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6463 = this;
return this__6463.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6464 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__6464.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__6465 = this;
if(cljs.core.truth_((function (){var and__3546__auto____6466 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____6466))
{return this__6465.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____6466;
}
})()))
{var new_keys__6467 = cljs.core.aclone.call(null,this__6465.keys);
var new_strobj__6468 = goog.object.clone.call(null,this__6465.strobj);

new_keys__6467.splice(cljs.core.scan_array.call(null,1,k,new_keys__6467),1);
cljs.core.js_delete.call(null,new_strobj__6468,k);
return (new cljs.core.ObjMap(this__6465.meta,new_keys__6467,new_strobj__6468));
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
var this__6478 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6516 = null;
var G__6516__6517 = (function (coll,k){
var this__6479 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__6516__6518 = (function (coll,k,not_found){
var this__6480 = this;
var bucket__6481 = (this__6480.hashobj[cljs.core.hash.call(null,k)]);
var i__6482 = (cljs.core.truth_(bucket__6481)?cljs.core.scan_array.call(null,2,k,bucket__6481):null);

if(cljs.core.truth_(i__6482))
{return (bucket__6481[(i__6482 + 1)]);
} else
{return not_found;
}
});
G__6516 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6516__6517.call(this,coll,k);
case  3 :
return G__6516__6518.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6516;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6483 = this;
var h__6484 = cljs.core.hash.call(null,k);
var bucket__6485 = (this__6483.hashobj[h__6484]);

if(cljs.core.truth_(bucket__6485))
{var new_bucket__6486 = cljs.core.aclone.call(null,bucket__6485);
var new_hashobj__6487 = goog.object.clone.call(null,this__6483.hashobj);

(new_hashobj__6487[h__6484] = new_bucket__6486);
var temp__3695__auto____6488 = cljs.core.scan_array.call(null,2,k,new_bucket__6486);

if(cljs.core.truth_(temp__3695__auto____6488))
{var i__6489 = temp__3695__auto____6488;

(new_bucket__6486[(i__6489 + 1)] = v);
return (new cljs.core.HashMap(this__6483.meta,this__6483.count,new_hashobj__6487));
} else
{new_bucket__6486.push(k,v);
return (new cljs.core.HashMap(this__6483.meta,(this__6483.count + 1),new_hashobj__6487));
}
} else
{var new_hashobj__6490 = goog.object.clone.call(null,this__6483.hashobj);

(new_hashobj__6490[h__6484] = [k,v]);
return (new cljs.core.HashMap(this__6483.meta,(this__6483.count + 1),new_hashobj__6490));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__6491 = this;
var bucket__6492 = (this__6491.hashobj[cljs.core.hash.call(null,k)]);
var i__6493 = (cljs.core.truth_(bucket__6492)?cljs.core.scan_array.call(null,2,k,bucket__6492):null);

if(cljs.core.truth_(i__6493))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__6520 = null;
var G__6520__6521 = (function (tsym6494,k){
var this__6496 = this;
var tsym6494__6497 = this;

var coll__6498 = tsym6494__6497;

return cljs.core._lookup.call(null,coll__6498,k);
});
var G__6520__6522 = (function (tsym6495,k,not_found){
var this__6499 = this;
var tsym6495__6500 = this;

var coll__6501 = tsym6495__6500;

return cljs.core._lookup.call(null,coll__6501,k,not_found);
});
G__6520 = function(tsym6495,k,not_found){
switch(arguments.length){
case  2 :
return G__6520__6521.call(this,tsym6495,k);
case  3 :
return G__6520__6522.call(this,tsym6495,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6520;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__6502 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6503 = this;
if(cljs.core.truth_((this__6503.count > 0)))
{var hashes__6504 = cljs.core.js_keys.call(null,this__6503.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__6477_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__6503.hashobj[p1__6477_SHARP_])));
}),hashes__6504);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6505 = this;
return this__6505.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6506 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6507 = this;
return (new cljs.core.HashMap(meta,this__6507.count,this__6507.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6508 = this;
return this__6508.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6509 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__6509.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__6510 = this;
var h__6511 = cljs.core.hash.call(null,k);
var bucket__6512 = (this__6510.hashobj[h__6511]);
var i__6513 = (cljs.core.truth_(bucket__6512)?cljs.core.scan_array.call(null,2,k,bucket__6512):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__6513)))
{return coll;
} else
{var new_hashobj__6514 = goog.object.clone.call(null,this__6510.hashobj);

if(cljs.core.truth_((3 > bucket__6512.length)))
{cljs.core.js_delete.call(null,new_hashobj__6514,h__6511);
} else
{var new_bucket__6515 = cljs.core.aclone.call(null,bucket__6512);

new_bucket__6515.splice(i__6513,2);
(new_hashobj__6514[h__6511] = new_bucket__6515);
}
return (new cljs.core.HashMap(this__6510.meta,(this__6510.count - 1),new_hashobj__6514));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__6524 = ks.length;

var i__6525 = 0;
var out__6526 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__6525 < len__6524)))
{{
var G__6527 = (i__6525 + 1);
var G__6528 = cljs.core.assoc.call(null,out__6526,(ks[i__6525]),(vs[i__6525]));
i__6525 = G__6527;
out__6526 = G__6528;
continue;
}
} else
{return out__6526;
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
var in$__6529 = cljs.core.seq.call(null,keyvals);
var out__6530 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__6529))
{{
var G__6531 = cljs.core.nnext.call(null,in$__6529);
var G__6532 = cljs.core.assoc.call(null,out__6530,cljs.core.first.call(null,in$__6529),cljs.core.second.call(null,in$__6529));
in$__6529 = G__6531;
out__6530 = G__6532;
continue;
}
} else
{return out__6530;
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
hash_map.cljs$lang$applyTo = (function (arglist__6533){
var keyvals = cljs.core.seq( arglist__6533 );;
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
{return cljs.core.reduce.call(null,(function (p1__6534_SHARP_,p2__6535_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____6536 = p1__6534_SHARP_;

if(cljs.core.truth_(or__3548__auto____6536))
{return or__3548__auto____6536;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__6535_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__6537){
var maps = cljs.core.seq( arglist__6537 );;
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
{var merge_entry__6540 = (function (m,e){
var k__6538 = cljs.core.first.call(null,e);
var v__6539 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__6538)))
{return cljs.core.assoc.call(null,m,k__6538,f.call(null,cljs.core.get.call(null,m,k__6538),v__6539));
} else
{return cljs.core.assoc.call(null,m,k__6538,v__6539);
}
});
var merge2__6542 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__6540,(function (){var or__3548__auto____6541 = m1;

if(cljs.core.truth_(or__3548__auto____6541))
{return or__3548__auto____6541;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__6542,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__6543){
var f = cljs.core.first(arglist__6543);
var maps = cljs.core.rest(arglist__6543);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__6545 = cljs.core.ObjMap.fromObject([],{});
var keys__6546 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__6546))
{var key__6547 = cljs.core.first.call(null,keys__6546);
var entry__6548 = cljs.core.get.call(null,map,key__6547,"\uFDD0'user/not-found");

{
var G__6549 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__6548,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__6545,key__6547,entry__6548):ret__6545);
var G__6550 = cljs.core.next.call(null,keys__6546);
ret__6545 = G__6549;
keys__6546 = G__6550;
continue;
}
} else
{return ret__6545;
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
var this__6551 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6572 = null;
var G__6572__6573 = (function (coll,v){
var this__6552 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__6572__6574 = (function (coll,v,not_found){
var this__6553 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__6553.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__6572 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__6572__6573.call(this,coll,v);
case  3 :
return G__6572__6574.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6572;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__6576 = null;
var G__6576__6577 = (function (tsym6554,k){
var this__6556 = this;
var tsym6554__6557 = this;

var coll__6558 = tsym6554__6557;

return cljs.core._lookup.call(null,coll__6558,k);
});
var G__6576__6578 = (function (tsym6555,k,not_found){
var this__6559 = this;
var tsym6555__6560 = this;

var coll__6561 = tsym6555__6560;

return cljs.core._lookup.call(null,coll__6561,k,not_found);
});
G__6576 = function(tsym6555,k,not_found){
switch(arguments.length){
case  2 :
return G__6576__6577.call(this,tsym6555,k);
case  3 :
return G__6576__6578.call(this,tsym6555,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6576;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6562 = this;
return (new cljs.core.Set(this__6562.meta,cljs.core.assoc.call(null,this__6562.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6563 = this;
return cljs.core.keys.call(null,this__6563.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__6564 = this;
return (new cljs.core.Set(this__6564.meta,cljs.core.dissoc.call(null,this__6564.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6565 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6566 = this;
var and__3546__auto____6567 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____6567))
{var and__3546__auto____6568 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____6568))
{return cljs.core.every_QMARK_.call(null,(function (p1__6544_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__6544_SHARP_);
}),other);
} else
{return and__3546__auto____6568;
}
} else
{return and__3546__auto____6567;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6569 = this;
return (new cljs.core.Set(meta,this__6569.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6570 = this;
return this__6570.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6571 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__6571.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__6581 = cljs.core.seq.call(null,coll);
var out__6582 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__6581))))
{{
var G__6583 = cljs.core.rest.call(null,in$__6581);
var G__6584 = cljs.core.conj.call(null,out__6582,cljs.core.first.call(null,in$__6581));
in$__6581 = G__6583;
out__6582 = G__6584;
continue;
}
} else
{return out__6582;
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
{var n__6585 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____6586 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____6586))
{var e__6587 = temp__3695__auto____6586;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__6587));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__6585,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__6580_SHARP_){
var temp__3695__auto____6588 = cljs.core.find.call(null,smap,p1__6580_SHARP_);

if(cljs.core.truth_(temp__3695__auto____6588))
{var e__6589 = temp__3695__auto____6588;

return cljs.core.second.call(null,e__6589);
} else
{return p1__6580_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__6597 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__6590,seen){
while(true){
var vec__6591__6592 = p__6590;
var f__6593 = cljs.core.nth.call(null,vec__6591__6592,0,null);
var xs__6594 = vec__6591__6592;

var temp__3698__auto____6595 = cljs.core.seq.call(null,xs__6594);

if(cljs.core.truth_(temp__3698__auto____6595))
{var s__6596 = temp__3698__auto____6595;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__6593)))
{{
var G__6598 = cljs.core.rest.call(null,s__6596);
var G__6599 = seen;
p__6590 = G__6598;
seen = G__6599;
continue;
}
} else
{return cljs.core.cons.call(null,f__6593,step.call(null,cljs.core.rest.call(null,s__6596),cljs.core.conj.call(null,seen,f__6593)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__6597.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__6600 = cljs.core.PersistentVector.fromArray([]);
var s__6601 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__6601)))
{{
var G__6602 = cljs.core.conj.call(null,ret__6600,cljs.core.first.call(null,s__6601));
var G__6603 = cljs.core.next.call(null,s__6601);
ret__6600 = G__6602;
s__6601 = G__6603;
continue;
}
} else
{return cljs.core.seq.call(null,ret__6600);
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
{if(cljs.core.truth_((function (){var or__3548__auto____6604 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6604))
{return or__3548__auto____6604;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6605 = x.lastIndexOf("/");

if(cljs.core.truth_((i__6605 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__6605 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____6606 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6606))
{return or__3548__auto____6606;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6607 = x.lastIndexOf("/");

if(cljs.core.truth_((i__6607 > -1)))
{return cljs.core.subs.call(null,x,2,i__6607);
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
var map__6610 = cljs.core.ObjMap.fromObject([],{});
var ks__6611 = cljs.core.seq.call(null,keys);
var vs__6612 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6613 = ks__6611;

if(cljs.core.truth_(and__3546__auto____6613))
{return vs__6612;
} else
{return and__3546__auto____6613;
}
})()))
{{
var G__6614 = cljs.core.assoc.call(null,map__6610,cljs.core.first.call(null,ks__6611),cljs.core.first.call(null,vs__6612));
var G__6615 = cljs.core.next.call(null,ks__6611);
var G__6616 = cljs.core.next.call(null,vs__6612);
map__6610 = G__6614;
ks__6611 = G__6615;
vs__6612 = G__6616;
continue;
}
} else
{return map__6610;
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
var max_key__6619 = (function (k,x){
return x;
});
var max_key__6620 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__6621 = (function() { 
var G__6623__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6608_SHARP_,p2__6609_SHARP_){
return max_key.call(null,k,p1__6608_SHARP_,p2__6609_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__6623 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6623__delegate.call(this, k, x, y, more);
};
G__6623.cljs$lang$maxFixedArity = 3;
G__6623.cljs$lang$applyTo = (function (arglist__6624){
var k = cljs.core.first(arglist__6624);
var x = cljs.core.first(cljs.core.next(arglist__6624));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6624)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6624)));
return G__6623__delegate.call(this, k, x, y, more);
});
return G__6623;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__6619.call(this,k,x);
case  3 :
return max_key__6620.call(this,k,x,y);
default:
return max_key__6621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__6621.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__6625 = (function (k,x){
return x;
});
var min_key__6626 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__6627 = (function() { 
var G__6629__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6617_SHARP_,p2__6618_SHARP_){
return min_key.call(null,k,p1__6617_SHARP_,p2__6618_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__6629 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6629__delegate.call(this, k, x, y, more);
};
G__6629.cljs$lang$maxFixedArity = 3;
G__6629.cljs$lang$applyTo = (function (arglist__6630){
var k = cljs.core.first(arglist__6630);
var x = cljs.core.first(cljs.core.next(arglist__6630));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6630)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6630)));
return G__6629__delegate.call(this, k, x, y, more);
});
return G__6629;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__6625.call(this,k,x);
case  3 :
return min_key__6626.call(this,k,x,y);
default:
return min_key__6627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__6627.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__6633 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__6634 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6631 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6631))
{var s__6632 = temp__3698__auto____6631;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__6632),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__6632)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__6633.call(this,n,step);
case  3 :
return partition_all__6634.call(this,n,step,coll);
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
var temp__3698__auto____6636 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6636))
{var s__6637 = temp__3698__auto____6636;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__6637))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__6637),take_while.call(null,pred,cljs.core.rest.call(null,s__6637)));
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
var this__6638 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__6639 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6655 = null;
var G__6655__6656 = (function (rng,f){
var this__6640 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__6655__6657 = (function (rng,f,s){
var this__6641 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__6655 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__6655__6656.call(this,rng,f);
case  3 :
return G__6655__6657.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6655;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__6642 = this;
var comp__6643 = (cljs.core.truth_((this__6642.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__6643.call(null,this__6642.start,this__6642.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__6644 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__6644.end - this__6644.start) / this__6644.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__6645 = this;
return this__6645.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__6646 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__6646.meta,(this__6646.start + this__6646.step),this__6646.end,this__6646.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__6647 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__6648 = this;
return (new cljs.core.Range(meta,this__6648.start,this__6648.end,this__6648.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__6649 = this;
return this__6649.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6659 = null;
var G__6659__6660 = (function (rng,n){
var this__6650 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__6650.start + (n * this__6650.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____6651 = (this__6650.start > this__6650.end);

if(cljs.core.truth_(and__3546__auto____6651))
{return cljs.core._EQ_.call(null,this__6650.step,0);
} else
{return and__3546__auto____6651;
}
})()))
{return this__6650.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__6659__6661 = (function (rng,n,not_found){
var this__6652 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__6652.start + (n * this__6652.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____6653 = (this__6652.start > this__6652.end);

if(cljs.core.truth_(and__3546__auto____6653))
{return cljs.core._EQ_.call(null,this__6652.step,0);
} else
{return and__3546__auto____6653;
}
})()))
{return this__6652.start;
} else
{return not_found;
}
}
});
G__6659 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__6659__6660.call(this,rng,n);
case  3 :
return G__6659__6661.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6659;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__6654 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6654.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__6663 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__6664 = (function (end){
return range.call(null,0,end,1);
});
var range__6665 = (function (start,end){
return range.call(null,start,end,1);
});
var range__6666 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__6663.call(this);
case  1 :
return range__6664.call(this,start);
case  2 :
return range__6665.call(this,start,end);
case  3 :
return range__6666.call(this,start,end,step);
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
var temp__3698__auto____6668 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6668))
{var s__6669 = temp__3698__auto____6668;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__6669),take_nth.call(null,n,cljs.core.drop.call(null,n,s__6669)));
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
var temp__3698__auto____6671 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6671))
{var s__6672 = temp__3698__auto____6671;

var fst__6673 = cljs.core.first.call(null,s__6672);
var fv__6674 = f.call(null,fst__6673);
var run__6675 = cljs.core.cons.call(null,fst__6673,cljs.core.take_while.call(null,(function (p1__6670_SHARP_){
return cljs.core._EQ_.call(null,fv__6674,f.call(null,p1__6670_SHARP_));
}),cljs.core.next.call(null,s__6672)));

return cljs.core.cons.call(null,run__6675,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__6675),s__6672))));
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
var reductions__6690 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____6686 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____6686))
{var s__6687 = temp__3695__auto____6686;

return reductions.call(null,f,cljs.core.first.call(null,s__6687),cljs.core.rest.call(null,s__6687));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__6691 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6688 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6688))
{var s__6689 = temp__3698__auto____6688;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__6689)),cljs.core.rest.call(null,s__6689));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__6690.call(this,f,init);
case  3 :
return reductions__6691.call(this,f,init,coll);
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
var juxt__6694 = (function (f){
return (function() {
var G__6699 = null;
var G__6699__6700 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__6699__6701 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__6699__6702 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__6699__6703 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__6699__6704 = (function() { 
var G__6706__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__6706 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6706__delegate.call(this, x, y, z, args);
};
G__6706.cljs$lang$maxFixedArity = 3;
G__6706.cljs$lang$applyTo = (function (arglist__6707){
var x = cljs.core.first(arglist__6707);
var y = cljs.core.first(cljs.core.next(arglist__6707));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6707)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6707)));
return G__6706__delegate.call(this, x, y, z, args);
});
return G__6706;
})()
;
G__6699 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6699__6700.call(this);
case  1 :
return G__6699__6701.call(this,x);
case  2 :
return G__6699__6702.call(this,x,y);
case  3 :
return G__6699__6703.call(this,x,y,z);
default:
return G__6699__6704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6699.cljs$lang$maxFixedArity = 3;
G__6699.cljs$lang$applyTo = G__6699__6704.cljs$lang$applyTo;
return G__6699;
})()
});
var juxt__6695 = (function (f,g){
return (function() {
var G__6708 = null;
var G__6708__6709 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__6708__6710 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__6708__6711 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__6708__6712 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__6708__6713 = (function() { 
var G__6715__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__6715 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6715__delegate.call(this, x, y, z, args);
};
G__6715.cljs$lang$maxFixedArity = 3;
G__6715.cljs$lang$applyTo = (function (arglist__6716){
var x = cljs.core.first(arglist__6716);
var y = cljs.core.first(cljs.core.next(arglist__6716));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6716)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6716)));
return G__6715__delegate.call(this, x, y, z, args);
});
return G__6715;
})()
;
G__6708 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6708__6709.call(this);
case  1 :
return G__6708__6710.call(this,x);
case  2 :
return G__6708__6711.call(this,x,y);
case  3 :
return G__6708__6712.call(this,x,y,z);
default:
return G__6708__6713.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6708.cljs$lang$maxFixedArity = 3;
G__6708.cljs$lang$applyTo = G__6708__6713.cljs$lang$applyTo;
return G__6708;
})()
});
var juxt__6696 = (function (f,g,h){
return (function() {
var G__6717 = null;
var G__6717__6718 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__6717__6719 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__6717__6720 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__6717__6721 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__6717__6722 = (function() { 
var G__6724__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__6724 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6724__delegate.call(this, x, y, z, args);
};
G__6724.cljs$lang$maxFixedArity = 3;
G__6724.cljs$lang$applyTo = (function (arglist__6725){
var x = cljs.core.first(arglist__6725);
var y = cljs.core.first(cljs.core.next(arglist__6725));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6725)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6725)));
return G__6724__delegate.call(this, x, y, z, args);
});
return G__6724;
})()
;
G__6717 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6717__6718.call(this);
case  1 :
return G__6717__6719.call(this,x);
case  2 :
return G__6717__6720.call(this,x,y);
case  3 :
return G__6717__6721.call(this,x,y,z);
default:
return G__6717__6722.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6717.cljs$lang$maxFixedArity = 3;
G__6717.cljs$lang$applyTo = G__6717__6722.cljs$lang$applyTo;
return G__6717;
})()
});
var juxt__6697 = (function() { 
var G__6726__delegate = function (f,g,h,fs){
var fs__6693 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__6727 = null;
var G__6727__6728 = (function (){
return cljs.core.reduce.call(null,(function (p1__6676_SHARP_,p2__6677_SHARP_){
return cljs.core.conj.call(null,p1__6676_SHARP_,p2__6677_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__6693);
});
var G__6727__6729 = (function (x){
return cljs.core.reduce.call(null,(function (p1__6678_SHARP_,p2__6679_SHARP_){
return cljs.core.conj.call(null,p1__6678_SHARP_,p2__6679_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__6693);
});
var G__6727__6730 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__6680_SHARP_,p2__6681_SHARP_){
return cljs.core.conj.call(null,p1__6680_SHARP_,p2__6681_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__6693);
});
var G__6727__6731 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__6682_SHARP_,p2__6683_SHARP_){
return cljs.core.conj.call(null,p1__6682_SHARP_,p2__6683_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__6693);
});
var G__6727__6732 = (function() { 
var G__6734__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__6684_SHARP_,p2__6685_SHARP_){
return cljs.core.conj.call(null,p1__6684_SHARP_,cljs.core.apply.call(null,p2__6685_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__6693);
};
var G__6734 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6734__delegate.call(this, x, y, z, args);
};
G__6734.cljs$lang$maxFixedArity = 3;
G__6734.cljs$lang$applyTo = (function (arglist__6735){
var x = cljs.core.first(arglist__6735);
var y = cljs.core.first(cljs.core.next(arglist__6735));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6735)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6735)));
return G__6734__delegate.call(this, x, y, z, args);
});
return G__6734;
})()
;
G__6727 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6727__6728.call(this);
case  1 :
return G__6727__6729.call(this,x);
case  2 :
return G__6727__6730.call(this,x,y);
case  3 :
return G__6727__6731.call(this,x,y,z);
default:
return G__6727__6732.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6727.cljs$lang$maxFixedArity = 3;
G__6727.cljs$lang$applyTo = G__6727__6732.cljs$lang$applyTo;
return G__6727;
})()
};
var G__6726 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6726__delegate.call(this, f, g, h, fs);
};
G__6726.cljs$lang$maxFixedArity = 3;
G__6726.cljs$lang$applyTo = (function (arglist__6736){
var f = cljs.core.first(arglist__6736);
var g = cljs.core.first(cljs.core.next(arglist__6736));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6736)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6736)));
return G__6726__delegate.call(this, f, g, h, fs);
});
return G__6726;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__6694.call(this,f);
case  2 :
return juxt__6695.call(this,f,g);
case  3 :
return juxt__6696.call(this,f,g,h);
default:
return juxt__6697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__6697.cljs$lang$applyTo;
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
var dorun__6738 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__6741 = cljs.core.next.call(null,coll);
coll = G__6741;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__6739 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6737 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____6737))
{return (n > 0);
} else
{return and__3546__auto____6737;
}
})()))
{{
var G__6742 = (n - 1);
var G__6743 = cljs.core.next.call(null,coll);
n = G__6742;
coll = G__6743;
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
return dorun__6738.call(this,n);
case  2 :
return dorun__6739.call(this,n,coll);
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
var doall__6744 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__6745 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__6744.call(this,n);
case  2 :
return doall__6745.call(this,n,coll);
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
var matches__6747 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__6747),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__6747),1)))
{return cljs.core.first.call(null,matches__6747);
} else
{return cljs.core.vec.call(null,matches__6747);
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
var matches__6748 = re.exec(s);

if(cljs.core.truth_((matches__6748 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__6748),1)))
{return cljs.core.first.call(null,matches__6748);
} else
{return cljs.core.vec.call(null,matches__6748);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__6749 = cljs.core.re_find.call(null,re,s);
var match_idx__6750 = s.search(re);
var match_str__6751 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__6749))?cljs.core.first.call(null,match_data__6749):match_data__6749);
var post_match__6752 = cljs.core.subs.call(null,s,(match_idx__6750 + cljs.core.count.call(null,match_str__6751)));

if(cljs.core.truth_(match_data__6749))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__6749,re_seq.call(null,re,post_match__6752));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__6754__6755 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___6756 = cljs.core.nth.call(null,vec__6754__6755,0,null);
var flags__6757 = cljs.core.nth.call(null,vec__6754__6755,1,null);
var pattern__6758 = cljs.core.nth.call(null,vec__6754__6755,2,null);

return (new RegExp(pattern__6758,flags__6757));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__6753_SHARP_){
return print_one.call(null,p1__6753_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____6759 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____6759))
{var and__3546__auto____6763 = (function (){var x__451__auto____6760 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____6761 = x__451__auto____6760;

if(cljs.core.truth_(and__3546__auto____6761))
{var and__3546__auto____6762 = x__451__auto____6760.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____6762))
{return cljs.core.not.call(null,x__451__auto____6760.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____6762;
}
} else
{return and__3546__auto____6761;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____6760);
}
})();

if(cljs.core.truth_(and__3546__auto____6763))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____6763;
}
} else
{return and__3546__auto____6759;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____6764 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____6765 = x__451__auto____6764;

if(cljs.core.truth_(and__3546__auto____6765))
{var and__3546__auto____6766 = x__451__auto____6764.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____6766))
{return cljs.core.not.call(null,x__451__auto____6764.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____6766;
}
} else
{return and__3546__auto____6765;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____6764);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__6767 = cljs.core.first.call(null,objs);
var sb__6768 = (new goog.string.StringBuffer());

var G__6769__6770 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__6769__6770))
{var obj__6771 = cljs.core.first.call(null,G__6769__6770);
var G__6769__6772 = G__6769__6770;

while(true){
if(cljs.core.truth_((obj__6771 === first_obj__6767)))
{} else
{sb__6768.append(" ");
}
var G__6773__6774 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6771,opts));

if(cljs.core.truth_(G__6773__6774))
{var string__6775 = cljs.core.first.call(null,G__6773__6774);
var G__6773__6776 = G__6773__6774;

while(true){
sb__6768.append(string__6775);
var temp__3698__auto____6777 = cljs.core.next.call(null,G__6773__6776);

if(cljs.core.truth_(temp__3698__auto____6777))
{var G__6773__6778 = temp__3698__auto____6777;

{
var G__6781 = cljs.core.first.call(null,G__6773__6778);
var G__6782 = G__6773__6778;
string__6775 = G__6781;
G__6773__6776 = G__6782;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____6779 = cljs.core.next.call(null,G__6769__6772);

if(cljs.core.truth_(temp__3698__auto____6779))
{var G__6769__6780 = temp__3698__auto____6779;

{
var G__6783 = cljs.core.first.call(null,G__6769__6780);
var G__6784 = G__6769__6780;
obj__6771 = G__6783;
G__6769__6772 = G__6784;
continue;
}
} else
{}
break;
}
} else
{}
return sb__6768;
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
var sb__6785 = cljs.core.pr_sb.call(null,objs,opts);

sb__6785.append("\n");
return cljs.core.str.call(null,sb__6785);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__6786 = cljs.core.first.call(null,objs);

var G__6787__6788 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__6787__6788))
{var obj__6789 = cljs.core.first.call(null,G__6787__6788);
var G__6787__6790 = G__6787__6788;

while(true){
if(cljs.core.truth_((obj__6789 === first_obj__6786)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__6791__6792 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6789,opts));

if(cljs.core.truth_(G__6791__6792))
{var string__6793 = cljs.core.first.call(null,G__6791__6792);
var G__6791__6794 = G__6791__6792;

while(true){
cljs.core.string_print.call(null,string__6793);
var temp__3698__auto____6795 = cljs.core.next.call(null,G__6791__6794);

if(cljs.core.truth_(temp__3698__auto____6795))
{var G__6791__6796 = temp__3698__auto____6795;

{
var G__6799 = cljs.core.first.call(null,G__6791__6796);
var G__6800 = G__6791__6796;
string__6793 = G__6799;
G__6791__6794 = G__6800;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____6797 = cljs.core.next.call(null,G__6787__6790);

if(cljs.core.truth_(temp__3698__auto____6797))
{var G__6787__6798 = temp__3698__auto____6797;

{
var G__6801 = cljs.core.first.call(null,G__6787__6798);
var G__6802 = G__6787__6798;
obj__6789 = G__6801;
G__6787__6790 = G__6802;
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
pr_str.cljs$lang$applyTo = (function (arglist__6803){
var objs = cljs.core.seq( arglist__6803 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__6804){
var objs = cljs.core.seq( arglist__6804 );;
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
pr.cljs$lang$applyTo = (function (arglist__6805){
var objs = cljs.core.seq( arglist__6805 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__6806){
var objs = cljs.core.seq( arglist__6806 );;
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
print_str.cljs$lang$applyTo = (function (arglist__6807){
var objs = cljs.core.seq( arglist__6807 );;
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
println.cljs$lang$applyTo = (function (arglist__6808){
var objs = cljs.core.seq( arglist__6808 );;
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
println_str.cljs$lang$applyTo = (function (arglist__6809){
var objs = cljs.core.seq( arglist__6809 );;
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
prn.cljs$lang$applyTo = (function (arglist__6810){
var objs = cljs.core.seq( arglist__6810 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__6811 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__6811,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____6812 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____6812))
{var nspc__6813 = temp__3698__auto____6812;

return cljs.core.str.call(null,nspc__6813,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____6814 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____6814))
{var nspc__6815 = temp__3698__auto____6814;

return cljs.core.str.call(null,nspc__6815,"/");
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
var pr_pair__6816 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__6816,"{",", ","}",opts,coll);
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
var this__6817 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__6818 = this;
var G__6819__6820 = cljs.core.seq.call(null,this__6818.watches);

if(cljs.core.truth_(G__6819__6820))
{var G__6822__6824 = cljs.core.first.call(null,G__6819__6820);
var vec__6823__6825 = G__6822__6824;
var key__6826 = cljs.core.nth.call(null,vec__6823__6825,0,null);
var f__6827 = cljs.core.nth.call(null,vec__6823__6825,1,null);
var G__6819__6828 = G__6819__6820;

var G__6822__6829 = G__6822__6824;
var G__6819__6830 = G__6819__6828;

while(true){
var vec__6831__6832 = G__6822__6829;
var key__6833 = cljs.core.nth.call(null,vec__6831__6832,0,null);
var f__6834 = cljs.core.nth.call(null,vec__6831__6832,1,null);
var G__6819__6835 = G__6819__6830;

f__6834.call(null,key__6833,this$,oldval,newval);
var temp__3698__auto____6836 = cljs.core.next.call(null,G__6819__6835);

if(cljs.core.truth_(temp__3698__auto____6836))
{var G__6819__6837 = temp__3698__auto____6836;

{
var G__6844 = cljs.core.first.call(null,G__6819__6837);
var G__6845 = G__6819__6837;
G__6822__6829 = G__6844;
G__6819__6830 = G__6845;
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
var this__6838 = this;
return this$.watches = cljs.core.assoc.call(null,this__6838.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__6839 = this;
return this$.watches = cljs.core.dissoc.call(null,this__6839.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__6840 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__6840.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__6841 = this;
return this__6841.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__6842 = this;
return this__6842.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__6843 = this;
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
var atom__6852 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__6853 = (function() { 
var G__6855__delegate = function (x,p__6846){
var map__6847__6848 = p__6846;
var map__6847__6849 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6847__6848))?cljs.core.apply.call(null,cljs.core.hash_map,map__6847__6848):map__6847__6848);
var validator__6850 = cljs.core.get.call(null,map__6847__6849,"\uFDD0'validator");
var meta__6851 = cljs.core.get.call(null,map__6847__6849,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__6851,validator__6850,null));
};
var G__6855 = function (x,var_args){
var p__6846 = null;
if (goog.isDef(var_args)) {
  p__6846 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6855__delegate.call(this, x, p__6846);
};
G__6855.cljs$lang$maxFixedArity = 1;
G__6855.cljs$lang$applyTo = (function (arglist__6856){
var x = cljs.core.first(arglist__6856);
var p__6846 = cljs.core.rest(arglist__6856);
return G__6855__delegate.call(this, x, p__6846);
});
return G__6855;
})()
;
atom = function(x,var_args){
var p__6846 = var_args;
switch(arguments.length){
case  1 :
return atom__6852.call(this,x);
default:
return atom__6853.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__6853.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____6857 = a.validator;

if(cljs.core.truth_(temp__3698__auto____6857))
{var validate__6858 = temp__3698__auto____6857;

if(cljs.core.truth_(validate__6858.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__6859 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__6859,new_value);
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
var swap_BANG___6860 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___6861 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___6862 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___6863 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6864 = (function() { 
var G__6866__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__6866 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__6866__delegate.call(this, a, f, x, y, z, more);
};
G__6866.cljs$lang$maxFixedArity = 5;
G__6866.cljs$lang$applyTo = (function (arglist__6867){
var a = cljs.core.first(arglist__6867);
var f = cljs.core.first(cljs.core.next(arglist__6867));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6867)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6867))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6867)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6867)))));
return G__6866__delegate.call(this, a, f, x, y, z, more);
});
return G__6866;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___6860.call(this,a,f);
case  3 :
return swap_BANG___6861.call(this,a,f,x);
case  4 :
return swap_BANG___6862.call(this,a,f,x,y);
case  5 :
return swap_BANG___6863.call(this,a,f,x,y,z);
default:
return swap_BANG___6864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6864.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__6868){
var iref = cljs.core.first(arglist__6868);
var f = cljs.core.first(cljs.core.next(arglist__6868));
var args = cljs.core.rest(cljs.core.next(arglist__6868));
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
var gensym__6869 = (function (){
return gensym.call(null,"G__");
});
var gensym__6870 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__6869.call(this);
case  1 :
return gensym__6870.call(this,prefix_string);
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
var this__6872 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__6872.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__6873 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__6873.state,(function (p__6874){
var curr_state__6875 = p__6874;
var curr_state__6876 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__6875))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__6875):curr_state__6875);
var done__6877 = cljs.core.get.call(null,curr_state__6876,"\uFDD0'done");

if(cljs.core.truth_(done__6877))
{return curr_state__6876;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__6873.f.call(null)});
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
var map__6878__6879 = options;
var map__6878__6880 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6878__6879))?cljs.core.apply.call(null,cljs.core.hash_map,map__6878__6879):map__6878__6879);
var keywordize_keys__6881 = cljs.core.get.call(null,map__6878__6880,"\uFDD0'keywordize-keys");
var keyfn__6882 = (cljs.core.truth_(keywordize_keys__6881)?cljs.core.keyword:cljs.core.str);
var f__6888 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____6887 = (function iter__6883(s__6884){
return (new cljs.core.LazySeq(null,false,(function (){
var s__6884__6885 = s__6884;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__6884__6885)))
{var k__6886 = cljs.core.first.call(null,s__6884__6885);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__6882.call(null,k__6886),thisfn.call(null,(x[k__6886]))]),iter__6883.call(null,cljs.core.rest.call(null,s__6884__6885)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____6887.call(null,cljs.core.js_keys.call(null,x));
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

return f__6888.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__6889){
var x = cljs.core.first(arglist__6889);
var options = cljs.core.rest(arglist__6889);
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
var mem__6890 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__6894__delegate = function (args){
var temp__3695__auto____6891 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__6890),args);

if(cljs.core.truth_(temp__3695__auto____6891))
{var v__6892 = temp__3695__auto____6891;

return v__6892;
} else
{var ret__6893 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__6890,cljs.core.assoc,args,ret__6893);
return ret__6893;
}
};
var G__6894 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6894__delegate.call(this, args);
};
G__6894.cljs$lang$maxFixedArity = 0;
G__6894.cljs$lang$applyTo = (function (arglist__6895){
var args = cljs.core.seq( arglist__6895 );;
return G__6894__delegate.call(this, args);
});
return G__6894;
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
var trampoline__6897 = (function (f){
while(true){
var ret__6896 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__6896)))
{{
var G__6900 = ret__6896;
f = G__6900;
continue;
}
} else
{return ret__6896;
}
break;
}
});
var trampoline__6898 = (function() { 
var G__6901__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__6901 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6901__delegate.call(this, f, args);
};
G__6901.cljs$lang$maxFixedArity = 1;
G__6901.cljs$lang$applyTo = (function (arglist__6902){
var f = cljs.core.first(arglist__6902);
var args = cljs.core.rest(arglist__6902);
return G__6901__delegate.call(this, f, args);
});
return G__6901;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__6897.call(this,f);
default:
return trampoline__6898.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__6898.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__6903 = (function (){
return rand.call(null,1);
});
var rand__6904 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__6903.call(this);
case  1 :
return rand__6904.call(this,n);
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
var k__6906 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__6906,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__6906,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___6915 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___6916 = (function (h,child,parent){
var or__3548__auto____6907 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____6907))
{return or__3548__auto____6907;
} else
{var or__3548__auto____6908 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____6908))
{return or__3548__auto____6908;
} else
{var and__3546__auto____6909 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____6909))
{var and__3546__auto____6910 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____6910))
{var and__3546__auto____6911 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____6911))
{var ret__6912 = true;
var i__6913 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____6914 = cljs.core.not.call(null,ret__6912);

if(cljs.core.truth_(or__3548__auto____6914))
{return or__3548__auto____6914;
} else
{return cljs.core._EQ_.call(null,i__6913,cljs.core.count.call(null,parent));
}
})()))
{return ret__6912;
} else
{{
var G__6918 = isa_QMARK_.call(null,h,child.call(null,i__6913),parent.call(null,i__6913));
var G__6919 = (i__6913 + 1);
ret__6912 = G__6918;
i__6913 = G__6919;
continue;
}
}
break;
}
} else
{return and__3546__auto____6911;
}
} else
{return and__3546__auto____6910;
}
} else
{return and__3546__auto____6909;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___6915.call(this,h,child);
case  3 :
return isa_QMARK___6916.call(this,h,child,parent);
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
var parents__6920 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__6921 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__6920.call(this,h);
case  2 :
return parents__6921.call(this,h,tag);
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
var ancestors__6923 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__6924 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__6923.call(this,h);
case  2 :
return ancestors__6924.call(this,h,tag);
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
var descendants__6926 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__6927 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__6926.call(this,h);
case  2 :
return descendants__6927.call(this,h,tag);
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
var derive__6937 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__6938 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__6932 = "\uFDD0'parents".call(null,h);
var td__6933 = "\uFDD0'descendants".call(null,h);
var ta__6934 = "\uFDD0'ancestors".call(null,h);
var tf__6935 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____6936 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__6932.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6934.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6934.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__6932,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__6935.call(null,"\uFDD0'ancestors".call(null,h),tag,td__6933,parent,ta__6934),"\uFDD0'descendants":tf__6935.call(null,"\uFDD0'descendants".call(null,h),parent,ta__6934,tag,td__6933)});
})());

if(cljs.core.truth_(or__3548__auto____6936))
{return or__3548__auto____6936;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__6937.call(this,h,tag);
case  3 :
return derive__6938.call(this,h,tag,parent);
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
var underive__6944 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__6945 = (function (h,tag,parent){
var parentMap__6940 = "\uFDD0'parents".call(null,h);
var childsParents__6941 = (cljs.core.truth_(parentMap__6940.call(null,tag))?cljs.core.disj.call(null,parentMap__6940.call(null,tag),parent):cljs.core.set([]));
var newParents__6942 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__6941))?cljs.core.assoc.call(null,parentMap__6940,tag,childsParents__6941):cljs.core.dissoc.call(null,parentMap__6940,tag));
var deriv_seq__6943 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__6929_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__6929_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__6929_SHARP_),cljs.core.second.call(null,p1__6929_SHARP_)));
}),cljs.core.seq.call(null,newParents__6942)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__6940.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__6930_SHARP_,p2__6931_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__6930_SHARP_,p2__6931_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__6943));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__6944.call(this,h,tag);
case  3 :
return underive__6945.call(this,h,tag,parent);
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
var xprefs__6947 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____6949 = (cljs.core.truth_((function (){var and__3546__auto____6948 = xprefs__6947;

if(cljs.core.truth_(and__3546__auto____6948))
{return xprefs__6947.call(null,y);
} else
{return and__3546__auto____6948;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____6949))
{return or__3548__auto____6949;
} else
{var or__3548__auto____6951 = (function (){var ps__6950 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__6950) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__6950),prefer_table)))
{} else
{}
{
var G__6954 = cljs.core.rest.call(null,ps__6950);
ps__6950 = G__6954;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____6951))
{return or__3548__auto____6951;
} else
{var or__3548__auto____6953 = (function (){var ps__6952 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__6952) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__6952),y,prefer_table)))
{} else
{}
{
var G__6955 = cljs.core.rest.call(null,ps__6952);
ps__6952 = G__6955;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____6953))
{return or__3548__auto____6953;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____6956 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____6956))
{return or__3548__auto____6956;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__6965 = cljs.core.reduce.call(null,(function (be,p__6957){
var vec__6958__6959 = p__6957;
var k__6960 = cljs.core.nth.call(null,vec__6958__6959,0,null);
var ___6961 = cljs.core.nth.call(null,vec__6958__6959,1,null);
var e__6962 = vec__6958__6959;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__6960)))
{var be2__6964 = (cljs.core.truth_((function (){var or__3548__auto____6963 = (be === null);

if(cljs.core.truth_(or__3548__auto____6963))
{return or__3548__auto____6963;
} else
{return cljs.core.dominates.call(null,k__6960,cljs.core.first.call(null,be),prefer_table);
}
})())?e__6962:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__6964),k__6960,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__6960," and ",cljs.core.first.call(null,be2__6964),", and neither is preferred")));
}
return be2__6964;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__6965))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__6965));
return cljs.core.second.call(null,best_entry__6965);
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
if(cljs.core.truth_((function (){var and__3546__auto____6966 = mf;

if(cljs.core.truth_(and__3546__auto____6966))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____6966;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____6967 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6967))
{return or__3548__auto____6967;
} else
{var or__3548__auto____6968 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____6968))
{return or__3548__auto____6968;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____6969 = mf;

if(cljs.core.truth_(and__3546__auto____6969))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____6969;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____6970 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6970))
{return or__3548__auto____6970;
} else
{var or__3548__auto____6971 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____6971))
{return or__3548__auto____6971;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____6972 = mf;

if(cljs.core.truth_(and__3546__auto____6972))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____6972;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____6973 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6973))
{return or__3548__auto____6973;
} else
{var or__3548__auto____6974 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____6974))
{return or__3548__auto____6974;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____6975 = mf;

if(cljs.core.truth_(and__3546__auto____6975))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____6975;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____6976 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6976))
{return or__3548__auto____6976;
} else
{var or__3548__auto____6977 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____6977))
{return or__3548__auto____6977;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____6978 = mf;

if(cljs.core.truth_(and__3546__auto____6978))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____6978;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____6979 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6979))
{return or__3548__auto____6979;
} else
{var or__3548__auto____6980 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____6980))
{return or__3548__auto____6980;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____6981 = mf;

if(cljs.core.truth_(and__3546__auto____6981))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____6981;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____6982 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6982))
{return or__3548__auto____6982;
} else
{var or__3548__auto____6983 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____6983))
{return or__3548__auto____6983;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____6984 = mf;

if(cljs.core.truth_(and__3546__auto____6984))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____6984;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____6985 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6985))
{return or__3548__auto____6985;
} else
{var or__3548__auto____6986 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____6986))
{return or__3548__auto____6986;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____6987 = mf;

if(cljs.core.truth_(and__3546__auto____6987))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____6987;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____6988 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6988))
{return or__3548__auto____6988;
} else
{var or__3548__auto____6989 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____6989))
{return or__3548__auto____6989;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__6990 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__6991 = cljs.core._get_method.call(null,mf,dispatch_val__6990);

if(cljs.core.truth_(target_fn__6991))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__6990)));
}
return cljs.core.apply.call(null,target_fn__6991,args);
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
var this__6992 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__6993 = this;
cljs.core.swap_BANG_.call(null,this__6993.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6993.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6993.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6993.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__6994 = this;
cljs.core.swap_BANG_.call(null,this__6994.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__6994.method_cache,this__6994.method_table,this__6994.cached_hierarchy,this__6994.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__6995 = this;
cljs.core.swap_BANG_.call(null,this__6995.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__6995.method_cache,this__6995.method_table,this__6995.cached_hierarchy,this__6995.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__6996 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__6996.cached_hierarchy),cljs.core.deref.call(null,this__6996.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__6996.method_cache,this__6996.method_table,this__6996.cached_hierarchy,this__6996.hierarchy);
}
var temp__3695__auto____6997 = cljs.core.deref.call(null,this__6996.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____6997))
{var target_fn__6998 = temp__3695__auto____6997;

return target_fn__6998;
} else
{var temp__3695__auto____6999 = cljs.core.find_and_cache_best_method.call(null,this__6996.name,dispatch_val,this__6996.hierarchy,this__6996.method_table,this__6996.prefer_table,this__6996.method_cache,this__6996.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____6999))
{var target_fn__7000 = temp__3695__auto____6999;

return target_fn__7000;
} else
{return cljs.core.deref.call(null,this__6996.method_table).call(null,this__6996.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__7001 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__7001.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__7001.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__7001.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__7001.method_cache,this__7001.method_table,this__7001.cached_hierarchy,this__7001.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__7002 = this;
return cljs.core.deref.call(null,this__7002.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__7003 = this;
return cljs.core.deref.call(null,this__7003.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__7004 = this;
return cljs.core.do_dispatch.call(null,mf,this__7004.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__7005__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__7005 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7005__delegate.call(this, _, args);
};
G__7005.cljs$lang$maxFixedArity = 1;
G__7005.cljs$lang$applyTo = (function (arglist__7006){
var _ = cljs.core.first(arglist__7006);
var args = cljs.core.rest(arglist__7006);
return G__7005__delegate.call(this, _, args);
});
return G__7005;
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
