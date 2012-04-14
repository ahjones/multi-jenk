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
var or__3548__auto____186164 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____186164))
{return or__3548__auto____186164;
} else
{var or__3548__auto____186165 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____186165))
{return or__3548__auto____186165;
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
var _invoke__186229 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____186166 = this$;

if(cljs.core.truth_(and__3546__auto____186166))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186166;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____186167 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186167))
{return or__3548__auto____186167;
} else
{var or__3548__auto____186168 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186168))
{return or__3548__auto____186168;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__186230 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____186169 = this$;

if(cljs.core.truth_(and__3546__auto____186169))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186169;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____186170 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186170))
{return or__3548__auto____186170;
} else
{var or__3548__auto____186171 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186171))
{return or__3548__auto____186171;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__186231 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____186172 = this$;

if(cljs.core.truth_(and__3546__auto____186172))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186172;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____186173 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186173))
{return or__3548__auto____186173;
} else
{var or__3548__auto____186174 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186174))
{return or__3548__auto____186174;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__186232 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____186175 = this$;

if(cljs.core.truth_(and__3546__auto____186175))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186175;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____186176 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186176))
{return or__3548__auto____186176;
} else
{var or__3548__auto____186177 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186177))
{return or__3548__auto____186177;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__186233 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____186178 = this$;

if(cljs.core.truth_(and__3546__auto____186178))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186178;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____186179 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186179))
{return or__3548__auto____186179;
} else
{var or__3548__auto____186180 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186180))
{return or__3548__auto____186180;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__186234 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____186181 = this$;

if(cljs.core.truth_(and__3546__auto____186181))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186181;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____186182 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186182))
{return or__3548__auto____186182;
} else
{var or__3548__auto____186183 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186183))
{return or__3548__auto____186183;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__186235 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____186184 = this$;

if(cljs.core.truth_(and__3546__auto____186184))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186184;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____186185 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186185))
{return or__3548__auto____186185;
} else
{var or__3548__auto____186186 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186186))
{return or__3548__auto____186186;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__186236 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____186187 = this$;

if(cljs.core.truth_(and__3546__auto____186187))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186187;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____186188 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186188))
{return or__3548__auto____186188;
} else
{var or__3548__auto____186189 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186189))
{return or__3548__auto____186189;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__186237 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____186190 = this$;

if(cljs.core.truth_(and__3546__auto____186190))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186190;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____186191 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186191))
{return or__3548__auto____186191;
} else
{var or__3548__auto____186192 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186192))
{return or__3548__auto____186192;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__186238 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____186193 = this$;

if(cljs.core.truth_(and__3546__auto____186193))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186193;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____186194 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186194))
{return or__3548__auto____186194;
} else
{var or__3548__auto____186195 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186195))
{return or__3548__auto____186195;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__186239 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____186196 = this$;

if(cljs.core.truth_(and__3546__auto____186196))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186196;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____186197 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186197))
{return or__3548__auto____186197;
} else
{var or__3548__auto____186198 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186198))
{return or__3548__auto____186198;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__186240 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____186199 = this$;

if(cljs.core.truth_(and__3546__auto____186199))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186199;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____186200 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186200))
{return or__3548__auto____186200;
} else
{var or__3548__auto____186201 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186201))
{return or__3548__auto____186201;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__186241 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____186202 = this$;

if(cljs.core.truth_(and__3546__auto____186202))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186202;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____186203 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186203))
{return or__3548__auto____186203;
} else
{var or__3548__auto____186204 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186204))
{return or__3548__auto____186204;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__186242 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____186205 = this$;

if(cljs.core.truth_(and__3546__auto____186205))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186205;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____186206 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186206))
{return or__3548__auto____186206;
} else
{var or__3548__auto____186207 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186207))
{return or__3548__auto____186207;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__186243 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____186208 = this$;

if(cljs.core.truth_(and__3546__auto____186208))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186208;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____186209 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186209))
{return or__3548__auto____186209;
} else
{var or__3548__auto____186210 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186210))
{return or__3548__auto____186210;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__186244 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____186211 = this$;

if(cljs.core.truth_(and__3546__auto____186211))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186211;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____186212 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186212))
{return or__3548__auto____186212;
} else
{var or__3548__auto____186213 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186213))
{return or__3548__auto____186213;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__186245 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____186214 = this$;

if(cljs.core.truth_(and__3546__auto____186214))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186214;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____186215 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186215))
{return or__3548__auto____186215;
} else
{var or__3548__auto____186216 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186216))
{return or__3548__auto____186216;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__186246 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____186217 = this$;

if(cljs.core.truth_(and__3546__auto____186217))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186217;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____186218 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186218))
{return or__3548__auto____186218;
} else
{var or__3548__auto____186219 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186219))
{return or__3548__auto____186219;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__186247 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____186220 = this$;

if(cljs.core.truth_(and__3546__auto____186220))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186220;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____186221 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186221))
{return or__3548__auto____186221;
} else
{var or__3548__auto____186222 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186222))
{return or__3548__auto____186222;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__186248 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____186223 = this$;

if(cljs.core.truth_(and__3546__auto____186223))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186223;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____186224 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186224))
{return or__3548__auto____186224;
} else
{var or__3548__auto____186225 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186225))
{return or__3548__auto____186225;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__186249 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____186226 = this$;

if(cljs.core.truth_(and__3546__auto____186226))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____186226;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____186227 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186227))
{return or__3548__auto____186227;
} else
{var or__3548__auto____186228 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____186228))
{return or__3548__auto____186228;
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
return _invoke__186229.call(this,this$);
case  2 :
return _invoke__186230.call(this,this$,a);
case  3 :
return _invoke__186231.call(this,this$,a,b);
case  4 :
return _invoke__186232.call(this,this$,a,b,c);
case  5 :
return _invoke__186233.call(this,this$,a,b,c,d);
case  6 :
return _invoke__186234.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__186235.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__186236.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__186237.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__186238.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__186239.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__186240.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__186241.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__186242.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__186243.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__186244.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__186245.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__186246.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__186247.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__186248.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__186249.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____186251 = coll;

if(cljs.core.truth_(and__3546__auto____186251))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____186251;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____186252 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186252))
{return or__3548__auto____186252;
} else
{var or__3548__auto____186253 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____186253))
{return or__3548__auto____186253;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____186254 = coll;

if(cljs.core.truth_(and__3546__auto____186254))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____186254;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____186255 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186255))
{return or__3548__auto____186255;
} else
{var or__3548__auto____186256 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____186256))
{return or__3548__auto____186256;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____186257 = coll;

if(cljs.core.truth_(and__3546__auto____186257))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____186257;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____186258 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186258))
{return or__3548__auto____186258;
} else
{var or__3548__auto____186259 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____186259))
{return or__3548__auto____186259;
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
var _nth__186266 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____186260 = coll;

if(cljs.core.truth_(and__3546__auto____186260))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____186260;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____186261 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186261))
{return or__3548__auto____186261;
} else
{var or__3548__auto____186262 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____186262))
{return or__3548__auto____186262;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__186267 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____186263 = coll;

if(cljs.core.truth_(and__3546__auto____186263))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____186263;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____186264 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186264))
{return or__3548__auto____186264;
} else
{var or__3548__auto____186265 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____186265))
{return or__3548__auto____186265;
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
return _nth__186266.call(this,coll,n);
case  3 :
return _nth__186267.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____186269 = coll;

if(cljs.core.truth_(and__3546__auto____186269))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____186269;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____186270 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186270))
{return or__3548__auto____186270;
} else
{var or__3548__auto____186271 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____186271))
{return or__3548__auto____186271;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____186272 = coll;

if(cljs.core.truth_(and__3546__auto____186272))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____186272;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____186273 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186273))
{return or__3548__auto____186273;
} else
{var or__3548__auto____186274 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____186274))
{return or__3548__auto____186274;
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
var _lookup__186281 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____186275 = o;

if(cljs.core.truth_(and__3546__auto____186275))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____186275;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____186276 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____186276))
{return or__3548__auto____186276;
} else
{var or__3548__auto____186277 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____186277))
{return or__3548__auto____186277;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__186282 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____186278 = o;

if(cljs.core.truth_(and__3546__auto____186278))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____186278;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____186279 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____186279))
{return or__3548__auto____186279;
} else
{var or__3548__auto____186280 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____186280))
{return or__3548__auto____186280;
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
return _lookup__186281.call(this,o,k);
case  3 :
return _lookup__186282.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____186284 = coll;

if(cljs.core.truth_(and__3546__auto____186284))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____186284;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____186285 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186285))
{return or__3548__auto____186285;
} else
{var or__3548__auto____186286 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____186286))
{return or__3548__auto____186286;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____186287 = coll;

if(cljs.core.truth_(and__3546__auto____186287))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____186287;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____186288 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186288))
{return or__3548__auto____186288;
} else
{var or__3548__auto____186289 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____186289))
{return or__3548__auto____186289;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____186290 = coll;

if(cljs.core.truth_(and__3546__auto____186290))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____186290;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____186291 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186291))
{return or__3548__auto____186291;
} else
{var or__3548__auto____186292 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____186292))
{return or__3548__auto____186292;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____186293 = coll;

if(cljs.core.truth_(and__3546__auto____186293))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____186293;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____186294 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186294))
{return or__3548__auto____186294;
} else
{var or__3548__auto____186295 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____186295))
{return or__3548__auto____186295;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____186296 = coll;

if(cljs.core.truth_(and__3546__auto____186296))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____186296;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____186297 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186297))
{return or__3548__auto____186297;
} else
{var or__3548__auto____186298 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____186298))
{return or__3548__auto____186298;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____186299 = coll;

if(cljs.core.truth_(and__3546__auto____186299))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____186299;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____186300 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186300))
{return or__3548__auto____186300;
} else
{var or__3548__auto____186301 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____186301))
{return or__3548__auto____186301;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____186302 = coll;

if(cljs.core.truth_(and__3546__auto____186302))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____186302;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____186303 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186303))
{return or__3548__auto____186303;
} else
{var or__3548__auto____186304 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____186304))
{return or__3548__auto____186304;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____186305 = o;

if(cljs.core.truth_(and__3546__auto____186305))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____186305;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____186306 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____186306))
{return or__3548__auto____186306;
} else
{var or__3548__auto____186307 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____186307))
{return or__3548__auto____186307;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____186308 = o;

if(cljs.core.truth_(and__3546__auto____186308))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____186308;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____186309 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____186309))
{return or__3548__auto____186309;
} else
{var or__3548__auto____186310 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____186310))
{return or__3548__auto____186310;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____186311 = o;

if(cljs.core.truth_(and__3546__auto____186311))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____186311;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____186312 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____186312))
{return or__3548__auto____186312;
} else
{var or__3548__auto____186313 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____186313))
{return or__3548__auto____186313;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____186314 = o;

if(cljs.core.truth_(and__3546__auto____186314))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____186314;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____186315 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____186315))
{return or__3548__auto____186315;
} else
{var or__3548__auto____186316 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____186316))
{return or__3548__auto____186316;
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
var _reduce__186323 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____186317 = coll;

if(cljs.core.truth_(and__3546__auto____186317))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____186317;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____186318 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186318))
{return or__3548__auto____186318;
} else
{var or__3548__auto____186319 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____186319))
{return or__3548__auto____186319;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__186324 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____186320 = coll;

if(cljs.core.truth_(and__3546__auto____186320))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____186320;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____186321 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____186321))
{return or__3548__auto____186321;
} else
{var or__3548__auto____186322 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____186322))
{return or__3548__auto____186322;
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
return _reduce__186323.call(this,coll,f);
case  3 :
return _reduce__186324.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____186326 = o;

if(cljs.core.truth_(and__3546__auto____186326))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____186326;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____186327 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____186327))
{return or__3548__auto____186327;
} else
{var or__3548__auto____186328 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____186328))
{return or__3548__auto____186328;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____186329 = o;

if(cljs.core.truth_(and__3546__auto____186329))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____186329;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____186330 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____186330))
{return or__3548__auto____186330;
} else
{var or__3548__auto____186331 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____186331))
{return or__3548__auto____186331;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____186332 = o;

if(cljs.core.truth_(and__3546__auto____186332))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____186332;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____186333 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____186333))
{return or__3548__auto____186333;
} else
{var or__3548__auto____186334 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____186334))
{return or__3548__auto____186334;
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
if(cljs.core.truth_((function (){var and__3546__auto____186335 = o;

if(cljs.core.truth_(and__3546__auto____186335))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____186335;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____186336 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____186336))
{return or__3548__auto____186336;
} else
{var or__3548__auto____186337 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____186337))
{return or__3548__auto____186337;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____186338 = d;

if(cljs.core.truth_(and__3546__auto____186338))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____186338;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____186339 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____186339))
{return or__3548__auto____186339;
} else
{var or__3548__auto____186340 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____186340))
{return or__3548__auto____186340;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____186341 = this$;

if(cljs.core.truth_(and__3546__auto____186341))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____186341;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____186342 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186342))
{return or__3548__auto____186342;
} else
{var or__3548__auto____186343 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____186343))
{return or__3548__auto____186343;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____186344 = this$;

if(cljs.core.truth_(and__3546__auto____186344))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____186344;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____186345 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186345))
{return or__3548__auto____186345;
} else
{var or__3548__auto____186346 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____186346))
{return or__3548__auto____186346;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____186347 = this$;

if(cljs.core.truth_(and__3546__auto____186347))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____186347;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____186348 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____186348))
{return or__3548__auto____186348;
} else
{var or__3548__auto____186349 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____186349))
{return or__3548__auto____186349;
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
var G__186350 = null;
var G__186350__186351 = (function (o,k){
return null;
});
var G__186350__186352 = (function (o,k,not_found){
return not_found;
});
G__186350 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__186350__186351.call(this,o,k);
case  3 :
return G__186350__186352.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186350;
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
var G__186354 = null;
var G__186354__186355 = (function (_,f){
return f.call(null);
});
var G__186354__186356 = (function (_,f,start){
return start;
});
G__186354 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__186354__186355.call(this,_,f);
case  3 :
return G__186354__186356.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186354;
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
var G__186358 = null;
var G__186358__186359 = (function (_,n){
return null;
});
var G__186358__186360 = (function (_,n,not_found){
return not_found;
});
G__186358 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__186358__186359.call(this,_,n);
case  3 :
return G__186358__186360.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186358;
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
var ci_reduce__186368 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__186362 = cljs.core._nth.call(null,cicoll,0);
var n__186363 = 1;

while(true){
if(cljs.core.truth_((n__186363 < cljs.core._count.call(null,cicoll))))
{{
var G__186372 = f.call(null,val__186362,cljs.core._nth.call(null,cicoll,n__186363));
var G__186373 = (n__186363 + 1);
val__186362 = G__186372;
n__186363 = G__186373;
continue;
}
} else
{return val__186362;
}
break;
}
}
});
var ci_reduce__186369 = (function (cicoll,f,val){
var val__186364 = val;
var n__186365 = 0;

while(true){
if(cljs.core.truth_((n__186365 < cljs.core._count.call(null,cicoll))))
{{
var G__186374 = f.call(null,val__186364,cljs.core._nth.call(null,cicoll,n__186365));
var G__186375 = (n__186365 + 1);
val__186364 = G__186374;
n__186365 = G__186375;
continue;
}
} else
{return val__186364;
}
break;
}
});
var ci_reduce__186370 = (function (cicoll,f,val,idx){
var val__186366 = val;
var n__186367 = idx;

while(true){
if(cljs.core.truth_((n__186367 < cljs.core._count.call(null,cicoll))))
{{
var G__186376 = f.call(null,val__186366,cljs.core._nth.call(null,cicoll,n__186367));
var G__186377 = (n__186367 + 1);
val__186366 = G__186376;
n__186367 = G__186377;
continue;
}
} else
{return val__186366;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__186368.call(this,cicoll,f);
case  3 :
return ci_reduce__186369.call(this,cicoll,f,val);
case  4 :
return ci_reduce__186370.call(this,cicoll,f,val,idx);
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
var this__186378 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__186391 = null;
var G__186391__186392 = (function (_,f){
var this__186379 = this;
return cljs.core.ci_reduce.call(null,this__186379.a,f,(this__186379.a[this__186379.i]),(this__186379.i + 1));
});
var G__186391__186393 = (function (_,f,start){
var this__186380 = this;
return cljs.core.ci_reduce.call(null,this__186380.a,f,start,this__186380.i);
});
G__186391 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__186391__186392.call(this,_,f);
case  3 :
return G__186391__186393.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186391;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__186381 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__186382 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__186395 = null;
var G__186395__186396 = (function (coll,n){
var this__186383 = this;
var i__186384 = (n + this__186383.i);

if(cljs.core.truth_((i__186384 < this__186383.a.length)))
{return (this__186383.a[i__186384]);
} else
{return null;
}
});
var G__186395__186397 = (function (coll,n,not_found){
var this__186385 = this;
var i__186386 = (n + this__186385.i);

if(cljs.core.truth_((i__186386 < this__186385.a.length)))
{return (this__186385.a[i__186386]);
} else
{return not_found;
}
});
G__186395 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__186395__186396.call(this,coll,n);
case  3 :
return G__186395__186397.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186395;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__186387 = this;
return (this__186387.a.length - this__186387.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__186388 = this;
return (this__186388.a[this__186388.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__186389 = this;
if(cljs.core.truth_(((this__186389.i + 1) < this__186389.a.length)))
{return (new cljs.core.IndexedSeq(this__186389.a,(this__186389.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__186390 = this;
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
var G__186399 = null;
var G__186399__186400 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__186399__186401 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__186399 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__186399__186400.call(this,array,f);
case  3 :
return G__186399__186401.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186399;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__186403 = null;
var G__186403__186404 = (function (array,k){
return (array[k]);
});
var G__186403__186405 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__186403 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__186403__186404.call(this,array,k);
case  3 :
return G__186403__186405.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186403;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__186407 = null;
var G__186407__186408 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__186407__186409 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__186407 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__186407__186408.call(this,array,n);
case  3 :
return G__186407__186409.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186407;
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
var temp__3698__auto____186411 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____186411))
{var s__186412 = temp__3698__auto____186411;

return cljs.core._first.call(null,s__186412);
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
var G__186413 = cljs.core.next.call(null,s);
s = G__186413;
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
var s__186414 = cljs.core.seq.call(null,x);
var n__186415 = 0;

while(true){
if(cljs.core.truth_(s__186414))
{{
var G__186416 = cljs.core.next.call(null,s__186414);
var G__186417 = (n__186415 + 1);
s__186414 = G__186416;
n__186415 = G__186417;
continue;
}
} else
{return n__186415;
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
var conj__186418 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__186419 = (function() { 
var G__186421__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__186422 = conj.call(null,coll,x);
var G__186423 = cljs.core.first.call(null,xs);
var G__186424 = cljs.core.next.call(null,xs);
coll = G__186422;
x = G__186423;
xs = G__186424;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__186421 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186421__delegate.call(this, coll, x, xs);
};
G__186421.cljs$lang$maxFixedArity = 2;
G__186421.cljs$lang$applyTo = (function (arglist__186425){
var coll = cljs.core.first(arglist__186425);
var x = cljs.core.first(cljs.core.next(arglist__186425));
var xs = cljs.core.rest(cljs.core.next(arglist__186425));
return G__186421__delegate.call(this, coll, x, xs);
});
return G__186421;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__186418.call(this,coll,x);
default:
return conj__186419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__186419.cljs$lang$applyTo;
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
var nth__186426 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__186427 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__186426.call(this,coll,n);
case  3 :
return nth__186427.call(this,coll,n,not_found);
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
var get__186429 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__186430 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__186429.call(this,o,k);
case  3 :
return get__186430.call(this,o,k,not_found);
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
var assoc__186433 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__186434 = (function() { 
var G__186436__delegate = function (coll,k,v,kvs){
while(true){
var ret__186432 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__186437 = ret__186432;
var G__186438 = cljs.core.first.call(null,kvs);
var G__186439 = cljs.core.second.call(null,kvs);
var G__186440 = cljs.core.nnext.call(null,kvs);
coll = G__186437;
k = G__186438;
v = G__186439;
kvs = G__186440;
continue;
}
} else
{return ret__186432;
}
break;
}
};
var G__186436 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__186436__delegate.call(this, coll, k, v, kvs);
};
G__186436.cljs$lang$maxFixedArity = 3;
G__186436.cljs$lang$applyTo = (function (arglist__186441){
var coll = cljs.core.first(arglist__186441);
var k = cljs.core.first(cljs.core.next(arglist__186441));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186441)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__186441)));
return G__186436__delegate.call(this, coll, k, v, kvs);
});
return G__186436;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__186433.call(this,coll,k,v);
default:
return assoc__186434.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__186434.cljs$lang$applyTo;
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
var dissoc__186443 = (function (coll){
return coll;
});
var dissoc__186444 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__186445 = (function() { 
var G__186447__delegate = function (coll,k,ks){
while(true){
var ret__186442 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__186448 = ret__186442;
var G__186449 = cljs.core.first.call(null,ks);
var G__186450 = cljs.core.next.call(null,ks);
coll = G__186448;
k = G__186449;
ks = G__186450;
continue;
}
} else
{return ret__186442;
}
break;
}
};
var G__186447 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186447__delegate.call(this, coll, k, ks);
};
G__186447.cljs$lang$maxFixedArity = 2;
G__186447.cljs$lang$applyTo = (function (arglist__186451){
var coll = cljs.core.first(arglist__186451);
var k = cljs.core.first(cljs.core.next(arglist__186451));
var ks = cljs.core.rest(cljs.core.next(arglist__186451));
return G__186447__delegate.call(this, coll, k, ks);
});
return G__186447;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__186443.call(this,coll);
case  2 :
return dissoc__186444.call(this,coll,k);
default:
return dissoc__186445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__186445.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____186452 = o;

if(cljs.core.truth_((function (){var and__3546__auto____186453 = x__451__auto____186452;

if(cljs.core.truth_(and__3546__auto____186453))
{var and__3546__auto____186454 = x__451__auto____186452.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____186454))
{return cljs.core.not.call(null,x__451__auto____186452.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____186454;
}
} else
{return and__3546__auto____186453;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____186452);
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
var disj__186456 = (function (coll){
return coll;
});
var disj__186457 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__186458 = (function() { 
var G__186460__delegate = function (coll,k,ks){
while(true){
var ret__186455 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__186461 = ret__186455;
var G__186462 = cljs.core.first.call(null,ks);
var G__186463 = cljs.core.next.call(null,ks);
coll = G__186461;
k = G__186462;
ks = G__186463;
continue;
}
} else
{return ret__186455;
}
break;
}
};
var G__186460 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186460__delegate.call(this, coll, k, ks);
};
G__186460.cljs$lang$maxFixedArity = 2;
G__186460.cljs$lang$applyTo = (function (arglist__186464){
var coll = cljs.core.first(arglist__186464);
var k = cljs.core.first(cljs.core.next(arglist__186464));
var ks = cljs.core.rest(cljs.core.next(arglist__186464));
return G__186460__delegate.call(this, coll, k, ks);
});
return G__186460;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__186456.call(this,coll);
case  2 :
return disj__186457.call(this,coll,k);
default:
return disj__186458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__186458.cljs$lang$applyTo;
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
{var x__451__auto____186465 = x;

if(cljs.core.truth_((function (){var and__3546__auto____186466 = x__451__auto____186465;

if(cljs.core.truth_(and__3546__auto____186466))
{var and__3546__auto____186467 = x__451__auto____186465.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____186467))
{return cljs.core.not.call(null,x__451__auto____186465.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____186467;
}
} else
{return and__3546__auto____186466;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____186465);
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
{var x__451__auto____186468 = x;

if(cljs.core.truth_((function (){var and__3546__auto____186469 = x__451__auto____186468;

if(cljs.core.truth_(and__3546__auto____186469))
{var and__3546__auto____186470 = x__451__auto____186468.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____186470))
{return cljs.core.not.call(null,x__451__auto____186468.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____186470;
}
} else
{return and__3546__auto____186469;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____186468);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____186471 = x;

if(cljs.core.truth_((function (){var and__3546__auto____186472 = x__451__auto____186471;

if(cljs.core.truth_(and__3546__auto____186472))
{var and__3546__auto____186473 = x__451__auto____186471.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____186473))
{return cljs.core.not.call(null,x__451__auto____186471.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____186473;
}
} else
{return and__3546__auto____186472;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____186471);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____186474 = x;

if(cljs.core.truth_((function (){var and__3546__auto____186475 = x__451__auto____186474;

if(cljs.core.truth_(and__3546__auto____186475))
{var and__3546__auto____186476 = x__451__auto____186474.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____186476))
{return cljs.core.not.call(null,x__451__auto____186474.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____186476;
}
} else
{return and__3546__auto____186475;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____186474);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____186477 = x;

if(cljs.core.truth_((function (){var and__3546__auto____186478 = x__451__auto____186477;

if(cljs.core.truth_(and__3546__auto____186478))
{var and__3546__auto____186479 = x__451__auto____186477.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____186479))
{return cljs.core.not.call(null,x__451__auto____186477.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____186479;
}
} else
{return and__3546__auto____186478;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____186477);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____186480 = x;

if(cljs.core.truth_((function (){var and__3546__auto____186481 = x__451__auto____186480;

if(cljs.core.truth_(and__3546__auto____186481))
{var and__3546__auto____186482 = x__451__auto____186480.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____186482))
{return cljs.core.not.call(null,x__451__auto____186480.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____186482;
}
} else
{return and__3546__auto____186481;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____186480);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____186483 = x;

if(cljs.core.truth_((function (){var and__3546__auto____186484 = x__451__auto____186483;

if(cljs.core.truth_(and__3546__auto____186484))
{var and__3546__auto____186485 = x__451__auto____186483.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____186485))
{return cljs.core.not.call(null,x__451__auto____186483.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____186485;
}
} else
{return and__3546__auto____186484;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____186483);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__186486 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__186486.push(key);
}));
return keys__186486;
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
{var x__451__auto____186487 = s;

if(cljs.core.truth_((function (){var and__3546__auto____186488 = x__451__auto____186487;

if(cljs.core.truth_(and__3546__auto____186488))
{var and__3546__auto____186489 = x__451__auto____186487.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____186489))
{return cljs.core.not.call(null,x__451__auto____186487.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____186489;
}
} else
{return and__3546__auto____186488;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____186487);
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
var and__3546__auto____186490 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____186490))
{return cljs.core.not.call(null,(function (){var or__3548__auto____186491 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____186491))
{return or__3548__auto____186491;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____186490;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____186492 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____186492))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____186492;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____186493 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____186493))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____186493;
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
var and__3546__auto____186494 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____186494))
{return (n == n.toFixed());
} else
{return and__3546__auto____186494;
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
if(cljs.core.truth_((function (){var and__3546__auto____186495 = coll;

if(cljs.core.truth_(and__3546__auto____186495))
{var and__3546__auto____186496 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____186496))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____186496;
}
} else
{return and__3546__auto____186495;
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
var distinct_QMARK___186501 = (function (x){
return true;
});
var distinct_QMARK___186502 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___186503 = (function() { 
var G__186505__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__186497 = cljs.core.set([y,x]);
var xs__186498 = more;

while(true){
var x__186499 = cljs.core.first.call(null,xs__186498);
var etc__186500 = cljs.core.next.call(null,xs__186498);

if(cljs.core.truth_(xs__186498))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__186497,x__186499)))
{return false;
} else
{{
var G__186506 = cljs.core.conj.call(null,s__186497,x__186499);
var G__186507 = etc__186500;
s__186497 = G__186506;
xs__186498 = G__186507;
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
var G__186505 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186505__delegate.call(this, x, y, more);
};
G__186505.cljs$lang$maxFixedArity = 2;
G__186505.cljs$lang$applyTo = (function (arglist__186508){
var x = cljs.core.first(arglist__186508);
var y = cljs.core.first(cljs.core.next(arglist__186508));
var more = cljs.core.rest(cljs.core.next(arglist__186508));
return G__186505__delegate.call(this, x, y, more);
});
return G__186505;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___186501.call(this,x);
case  2 :
return distinct_QMARK___186502.call(this,x,y);
default:
return distinct_QMARK___186503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___186503.cljs$lang$applyTo;
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
var r__186509 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__186509)))
{return r__186509;
} else
{if(cljs.core.truth_(r__186509))
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
var sort__186511 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__186512 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__186510 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__186510,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__186510);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__186511.call(this,comp);
case  2 :
return sort__186512.call(this,comp,coll);
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
var sort_by__186514 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__186515 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__186514.call(this,keyfn,comp);
case  3 :
return sort_by__186515.call(this,keyfn,comp,coll);
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
var reduce__186517 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__186518 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__186517.call(this,f,val);
case  3 :
return reduce__186518.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__186524 = (function (f,coll){
var temp__3695__auto____186520 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____186520))
{var s__186521 = temp__3695__auto____186520;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__186521),cljs.core.next.call(null,s__186521));
} else
{return f.call(null);
}
});
var seq_reduce__186525 = (function (f,val,coll){
var val__186522 = val;
var coll__186523 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__186523))
{{
var G__186527 = f.call(null,val__186522,cljs.core.first.call(null,coll__186523));
var G__186528 = cljs.core.next.call(null,coll__186523);
val__186522 = G__186527;
coll__186523 = G__186528;
continue;
}
} else
{return val__186522;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__186524.call(this,f,val);
case  3 :
return seq_reduce__186525.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__186529 = null;
var G__186529__186530 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__186529__186531 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__186529 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__186529__186530.call(this,coll,f);
case  3 :
return G__186529__186531.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186529;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___186533 = (function (){
return 0;
});
var _PLUS___186534 = (function (x){
return x;
});
var _PLUS___186535 = (function (x,y){
return (x + y);
});
var _PLUS___186536 = (function() { 
var G__186538__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__186538 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186538__delegate.call(this, x, y, more);
};
G__186538.cljs$lang$maxFixedArity = 2;
G__186538.cljs$lang$applyTo = (function (arglist__186539){
var x = cljs.core.first(arglist__186539);
var y = cljs.core.first(cljs.core.next(arglist__186539));
var more = cljs.core.rest(cljs.core.next(arglist__186539));
return G__186538__delegate.call(this, x, y, more);
});
return G__186538;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___186533.call(this);
case  1 :
return _PLUS___186534.call(this,x);
case  2 :
return _PLUS___186535.call(this,x,y);
default:
return _PLUS___186536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___186536.cljs$lang$applyTo;
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
var ___186540 = (function (x){
return (- x);
});
var ___186541 = (function (x,y){
return (x - y);
});
var ___186542 = (function() { 
var G__186544__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__186544 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186544__delegate.call(this, x, y, more);
};
G__186544.cljs$lang$maxFixedArity = 2;
G__186544.cljs$lang$applyTo = (function (arglist__186545){
var x = cljs.core.first(arglist__186545);
var y = cljs.core.first(cljs.core.next(arglist__186545));
var more = cljs.core.rest(cljs.core.next(arglist__186545));
return G__186544__delegate.call(this, x, y, more);
});
return G__186544;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___186540.call(this,x);
case  2 :
return ___186541.call(this,x,y);
default:
return ___186542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___186542.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___186546 = (function (){
return 1;
});
var _STAR___186547 = (function (x){
return x;
});
var _STAR___186548 = (function (x,y){
return (x * y);
});
var _STAR___186549 = (function() { 
var G__186551__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__186551 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186551__delegate.call(this, x, y, more);
};
G__186551.cljs$lang$maxFixedArity = 2;
G__186551.cljs$lang$applyTo = (function (arglist__186552){
var x = cljs.core.first(arglist__186552);
var y = cljs.core.first(cljs.core.next(arglist__186552));
var more = cljs.core.rest(cljs.core.next(arglist__186552));
return G__186551__delegate.call(this, x, y, more);
});
return G__186551;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___186546.call(this);
case  1 :
return _STAR___186547.call(this,x);
case  2 :
return _STAR___186548.call(this,x,y);
default:
return _STAR___186549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___186549.cljs$lang$applyTo;
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
var _SLASH___186553 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___186554 = (function (x,y){
return (x / y);
});
var _SLASH___186555 = (function() { 
var G__186557__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__186557 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186557__delegate.call(this, x, y, more);
};
G__186557.cljs$lang$maxFixedArity = 2;
G__186557.cljs$lang$applyTo = (function (arglist__186558){
var x = cljs.core.first(arglist__186558);
var y = cljs.core.first(cljs.core.next(arglist__186558));
var more = cljs.core.rest(cljs.core.next(arglist__186558));
return G__186557__delegate.call(this, x, y, more);
});
return G__186557;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___186553.call(this,x);
case  2 :
return _SLASH___186554.call(this,x,y);
default:
return _SLASH___186555.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___186555.cljs$lang$applyTo;
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
var _LT___186559 = (function (x){
return true;
});
var _LT___186560 = (function (x,y){
return (x < y);
});
var _LT___186561 = (function() { 
var G__186563__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__186564 = y;
var G__186565 = cljs.core.first.call(null,more);
var G__186566 = cljs.core.next.call(null,more);
x = G__186564;
y = G__186565;
more = G__186566;
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
var G__186563 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186563__delegate.call(this, x, y, more);
};
G__186563.cljs$lang$maxFixedArity = 2;
G__186563.cljs$lang$applyTo = (function (arglist__186567){
var x = cljs.core.first(arglist__186567);
var y = cljs.core.first(cljs.core.next(arglist__186567));
var more = cljs.core.rest(cljs.core.next(arglist__186567));
return G__186563__delegate.call(this, x, y, more);
});
return G__186563;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___186559.call(this,x);
case  2 :
return _LT___186560.call(this,x,y);
default:
return _LT___186561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___186561.cljs$lang$applyTo;
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
var _LT__EQ___186568 = (function (x){
return true;
});
var _LT__EQ___186569 = (function (x,y){
return (x <= y);
});
var _LT__EQ___186570 = (function() { 
var G__186572__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__186573 = y;
var G__186574 = cljs.core.first.call(null,more);
var G__186575 = cljs.core.next.call(null,more);
x = G__186573;
y = G__186574;
more = G__186575;
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
var G__186572 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186572__delegate.call(this, x, y, more);
};
G__186572.cljs$lang$maxFixedArity = 2;
G__186572.cljs$lang$applyTo = (function (arglist__186576){
var x = cljs.core.first(arglist__186576);
var y = cljs.core.first(cljs.core.next(arglist__186576));
var more = cljs.core.rest(cljs.core.next(arglist__186576));
return G__186572__delegate.call(this, x, y, more);
});
return G__186572;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___186568.call(this,x);
case  2 :
return _LT__EQ___186569.call(this,x,y);
default:
return _LT__EQ___186570.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___186570.cljs$lang$applyTo;
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
var _GT___186577 = (function (x){
return true;
});
var _GT___186578 = (function (x,y){
return (x > y);
});
var _GT___186579 = (function() { 
var G__186581__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__186582 = y;
var G__186583 = cljs.core.first.call(null,more);
var G__186584 = cljs.core.next.call(null,more);
x = G__186582;
y = G__186583;
more = G__186584;
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
var G__186581 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186581__delegate.call(this, x, y, more);
};
G__186581.cljs$lang$maxFixedArity = 2;
G__186581.cljs$lang$applyTo = (function (arglist__186585){
var x = cljs.core.first(arglist__186585);
var y = cljs.core.first(cljs.core.next(arglist__186585));
var more = cljs.core.rest(cljs.core.next(arglist__186585));
return G__186581__delegate.call(this, x, y, more);
});
return G__186581;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___186577.call(this,x);
case  2 :
return _GT___186578.call(this,x,y);
default:
return _GT___186579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___186579.cljs$lang$applyTo;
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
var _GT__EQ___186586 = (function (x){
return true;
});
var _GT__EQ___186587 = (function (x,y){
return (x >= y);
});
var _GT__EQ___186588 = (function() { 
var G__186590__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__186591 = y;
var G__186592 = cljs.core.first.call(null,more);
var G__186593 = cljs.core.next.call(null,more);
x = G__186591;
y = G__186592;
more = G__186593;
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
var G__186590 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186590__delegate.call(this, x, y, more);
};
G__186590.cljs$lang$maxFixedArity = 2;
G__186590.cljs$lang$applyTo = (function (arglist__186594){
var x = cljs.core.first(arglist__186594);
var y = cljs.core.first(cljs.core.next(arglist__186594));
var more = cljs.core.rest(cljs.core.next(arglist__186594));
return G__186590__delegate.call(this, x, y, more);
});
return G__186590;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___186586.call(this,x);
case  2 :
return _GT__EQ___186587.call(this,x,y);
default:
return _GT__EQ___186588.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___186588.cljs$lang$applyTo;
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
var max__186595 = (function (x){
return x;
});
var max__186596 = (function (x,y){
return ((x > y) ? x : y);
});
var max__186597 = (function() { 
var G__186599__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__186599 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186599__delegate.call(this, x, y, more);
};
G__186599.cljs$lang$maxFixedArity = 2;
G__186599.cljs$lang$applyTo = (function (arglist__186600){
var x = cljs.core.first(arglist__186600);
var y = cljs.core.first(cljs.core.next(arglist__186600));
var more = cljs.core.rest(cljs.core.next(arglist__186600));
return G__186599__delegate.call(this, x, y, more);
});
return G__186599;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__186595.call(this,x);
case  2 :
return max__186596.call(this,x,y);
default:
return max__186597.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__186597.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__186601 = (function (x){
return x;
});
var min__186602 = (function (x,y){
return ((x < y) ? x : y);
});
var min__186603 = (function() { 
var G__186605__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__186605 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186605__delegate.call(this, x, y, more);
};
G__186605.cljs$lang$maxFixedArity = 2;
G__186605.cljs$lang$applyTo = (function (arglist__186606){
var x = cljs.core.first(arglist__186606);
var y = cljs.core.first(cljs.core.next(arglist__186606));
var more = cljs.core.rest(cljs.core.next(arglist__186606));
return G__186605__delegate.call(this, x, y, more);
});
return G__186605;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__186601.call(this,x);
case  2 :
return min__186602.call(this,x,y);
default:
return min__186603.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__186603.cljs$lang$applyTo;
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
var rem__186607 = (n % d);

return cljs.core.fix.call(null,((n - rem__186607) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__186608 = cljs.core.quot.call(null,n,d);

return (n - (d * q__186608));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__186609 = (function (){
return Math.random.call(null);
});
var rand__186610 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__186609.call(this);
case  1 :
return rand__186610.call(this,n);
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
var _EQ__EQ___186612 = (function (x){
return true;
});
var _EQ__EQ___186613 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___186614 = (function() { 
var G__186616__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__186617 = y;
var G__186618 = cljs.core.first.call(null,more);
var G__186619 = cljs.core.next.call(null,more);
x = G__186617;
y = G__186618;
more = G__186619;
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
var G__186616 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186616__delegate.call(this, x, y, more);
};
G__186616.cljs$lang$maxFixedArity = 2;
G__186616.cljs$lang$applyTo = (function (arglist__186620){
var x = cljs.core.first(arglist__186620);
var y = cljs.core.first(cljs.core.next(arglist__186620));
var more = cljs.core.rest(cljs.core.next(arglist__186620));
return G__186616__delegate.call(this, x, y, more);
});
return G__186616;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___186612.call(this,x);
case  2 :
return _EQ__EQ___186613.call(this,x,y);
default:
return _EQ__EQ___186614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___186614.cljs$lang$applyTo;
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
var n__186621 = n;
var xs__186622 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____186623 = xs__186622;

if(cljs.core.truth_(and__3546__auto____186623))
{return (n__186621 > 0);
} else
{return and__3546__auto____186623;
}
})()))
{{
var G__186624 = (n__186621 - 1);
var G__186625 = cljs.core.next.call(null,xs__186622);
n__186621 = G__186624;
xs__186622 = G__186625;
continue;
}
} else
{return xs__186622;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__186630 = null;
var G__186630__186631 = (function (coll,n){
var temp__3695__auto____186626 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____186626))
{var xs__186627 = temp__3695__auto____186626;

return cljs.core.first.call(null,xs__186627);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__186630__186632 = (function (coll,n,not_found){
var temp__3695__auto____186628 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____186628))
{var xs__186629 = temp__3695__auto____186628;

return cljs.core.first.call(null,xs__186629);
} else
{return not_found;
}
});
G__186630 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__186630__186631.call(this,coll,n);
case  3 :
return G__186630__186632.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186630;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___186634 = (function (){
return "";
});
var str_STAR___186635 = (function (x){
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
var str_STAR___186636 = (function() { 
var G__186638__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__186639 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__186640 = cljs.core.next.call(null,more);
sb = G__186639;
more = G__186640;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__186638 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__186638__delegate.call(this, x, ys);
};
G__186638.cljs$lang$maxFixedArity = 1;
G__186638.cljs$lang$applyTo = (function (arglist__186641){
var x = cljs.core.first(arglist__186641);
var ys = cljs.core.rest(arglist__186641);
return G__186638__delegate.call(this, x, ys);
});
return G__186638;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___186634.call(this);
case  1 :
return str_STAR___186635.call(this,x);
default:
return str_STAR___186636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___186636.cljs$lang$applyTo;
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
var str__186642 = (function (){
return "";
});
var str__186643 = (function (x){
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
var str__186644 = (function() { 
var G__186646__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__186647 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__186648 = cljs.core.next.call(null,more);
sb = G__186647;
more = G__186648;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__186646 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__186646__delegate.call(this, x, ys);
};
G__186646.cljs$lang$maxFixedArity = 1;
G__186646.cljs$lang$applyTo = (function (arglist__186649){
var x = cljs.core.first(arglist__186649);
var ys = cljs.core.rest(arglist__186649);
return G__186646__delegate.call(this, x, ys);
});
return G__186646;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__186642.call(this);
case  1 :
return str__186643.call(this,x);
default:
return str__186644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__186644.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__186650 = (function (s,start){
return s.substring(start);
});
var subs__186651 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__186650.call(this,s,start);
case  3 :
return subs__186651.call(this,s,start,end);
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
var symbol__186653 = (function (name){
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
var symbol__186654 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__186653.call(this,ns);
case  2 :
return symbol__186654.call(this,ns,name);
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
var keyword__186656 = (function (name){
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
var keyword__186657 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__186656.call(this,ns);
case  2 :
return keyword__186657.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__186659 = cljs.core.seq.call(null,x);
var ys__186660 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__186659 === null)))
{return (ys__186660 === null);
} else
{if(cljs.core.truth_((ys__186660 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__186659),cljs.core.first.call(null,ys__186660))))
{{
var G__186661 = cljs.core.next.call(null,xs__186659);
var G__186662 = cljs.core.next.call(null,ys__186660);
xs__186659 = G__186661;
ys__186660 = G__186662;
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
return cljs.core.reduce.call(null,(function (p1__186663_SHARP_,p2__186664_SHARP_){
return cljs.core.hash_combine.call(null,p1__186663_SHARP_,cljs.core.hash.call(null,p2__186664_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__186665__186666 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__186665__186666))
{var G__186668__186670 = cljs.core.first.call(null,G__186665__186666);
var vec__186669__186671 = G__186668__186670;
var key_name__186672 = cljs.core.nth.call(null,vec__186669__186671,0,null);
var f__186673 = cljs.core.nth.call(null,vec__186669__186671,1,null);
var G__186665__186674 = G__186665__186666;

var G__186668__186675 = G__186668__186670;
var G__186665__186676 = G__186665__186674;

while(true){
var vec__186677__186678 = G__186668__186675;
var key_name__186679 = cljs.core.nth.call(null,vec__186677__186678,0,null);
var f__186680 = cljs.core.nth.call(null,vec__186677__186678,1,null);
var G__186665__186681 = G__186665__186676;

var str_name__186682 = cljs.core.name.call(null,key_name__186679);

obj[str_name__186682] = f__186680;
var temp__3698__auto____186683 = cljs.core.next.call(null,G__186665__186681);

if(cljs.core.truth_(temp__3698__auto____186683))
{var G__186665__186684 = temp__3698__auto____186683;

{
var G__186685 = cljs.core.first.call(null,G__186665__186684);
var G__186686 = G__186665__186684;
G__186668__186675 = G__186685;
G__186665__186676 = G__186686;
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
var this__186687 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__186688 = this;
return (new cljs.core.List(this__186688.meta,o,coll,(this__186688.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__186689 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__186690 = this;
return this__186690.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__186691 = this;
return this__186691.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__186692 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__186693 = this;
return this__186693.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__186694 = this;
return this__186694.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__186695 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__186696 = this;
return (new cljs.core.List(meta,this__186696.first,this__186696.rest,this__186696.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__186697 = this;
return this__186697.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__186698 = this;
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
var this__186699 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__186700 = this;
return (new cljs.core.List(this__186700.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__186701 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__186702 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__186703 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__186704 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__186705 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__186706 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__186707 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__186708 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__186709 = this;
return this__186709.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__186710 = this;
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
list.cljs$lang$applyTo = (function (arglist__186711){
var items = cljs.core.seq( arglist__186711 );;
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
var this__186712 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__186713 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__186714 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__186715 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__186715.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__186716 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__186717 = this;
return this__186717.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__186718 = this;
if(cljs.core.truth_((this__186718.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__186718.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__186719 = this;
return this__186719.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__186720 = this;
return (new cljs.core.Cons(meta,this__186720.first,this__186720.rest));
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
var G__186721 = null;
var G__186721__186722 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__186721__186723 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__186721 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__186721__186722.call(this,string,f);
case  3 :
return G__186721__186723.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186721;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__186725 = null;
var G__186725__186726 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__186725__186727 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__186725 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__186725__186726.call(this,string,k);
case  3 :
return G__186725__186727.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186725;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__186729 = null;
var G__186729__186730 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__186729__186731 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__186729 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__186729__186730.call(this,string,n);
case  3 :
return G__186729__186731.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186729;
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
var G__186739 = null;
var G__186739__186740 = (function (tsym186733,coll){
var tsym186733__186735 = this;

var this$__186736 = tsym186733__186735;

return cljs.core.get.call(null,coll,this$__186736.toString());
});
var G__186739__186741 = (function (tsym186734,coll,not_found){
var tsym186734__186737 = this;

var this$__186738 = tsym186734__186737;

return cljs.core.get.call(null,coll,this$__186738.toString(),not_found);
});
G__186739 = function(tsym186734,coll,not_found){
switch(arguments.length){
case  2 :
return G__186739__186740.call(this,tsym186734,coll);
case  3 :
return G__186739__186741.call(this,tsym186734,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__186739;
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
var x__186743 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__186743;
} else
{lazy_seq.x = x__186743.call(null);
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
var this__186744 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__186745 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__186746 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__186747 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__186747.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__186748 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__186749 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__186750 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__186751 = this;
return this__186751.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__186752 = this;
return (new cljs.core.LazySeq(meta,this__186752.realized,this__186752.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__186753 = [];

var s__186754 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__186754)))
{ary__186753.push(cljs.core.first.call(null,s__186754));
{
var G__186755 = cljs.core.next.call(null,s__186754);
s__186754 = G__186755;
continue;
}
} else
{return ary__186753;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__186756 = s;
var i__186757 = n;
var sum__186758 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____186759 = (i__186757 > 0);

if(cljs.core.truth_(and__3546__auto____186759))
{return cljs.core.seq.call(null,s__186756);
} else
{return and__3546__auto____186759;
}
})()))
{{
var G__186760 = cljs.core.next.call(null,s__186756);
var G__186761 = (i__186757 - 1);
var G__186762 = (sum__186758 + 1);
s__186756 = G__186760;
i__186757 = G__186761;
sum__186758 = G__186762;
continue;
}
} else
{return sum__186758;
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
var concat__186766 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__186767 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__186768 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__186763 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__186763))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__186763),concat.call(null,cljs.core.rest.call(null,s__186763),y));
} else
{return y;
}
})));
});
var concat__186769 = (function() { 
var G__186771__delegate = function (x,y,zs){
var cat__186765 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__186764 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__186764))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__186764),cat.call(null,cljs.core.rest.call(null,xys__186764),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__186765.call(null,concat.call(null,x,y),zs);
};
var G__186771 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186771__delegate.call(this, x, y, zs);
};
G__186771.cljs$lang$maxFixedArity = 2;
G__186771.cljs$lang$applyTo = (function (arglist__186772){
var x = cljs.core.first(arglist__186772);
var y = cljs.core.first(cljs.core.next(arglist__186772));
var zs = cljs.core.rest(cljs.core.next(arglist__186772));
return G__186771__delegate.call(this, x, y, zs);
});
return G__186771;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__186766.call(this);
case  1 :
return concat__186767.call(this,x);
case  2 :
return concat__186768.call(this,x,y);
default:
return concat__186769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__186769.cljs$lang$applyTo;
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
var list_STAR___186773 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___186774 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___186775 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___186776 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___186777 = (function() { 
var G__186779__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__186779 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__186779__delegate.call(this, a, b, c, d, more);
};
G__186779.cljs$lang$maxFixedArity = 4;
G__186779.cljs$lang$applyTo = (function (arglist__186780){
var a = cljs.core.first(arglist__186780);
var b = cljs.core.first(cljs.core.next(arglist__186780));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186780)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__186780))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__186780))));
return G__186779__delegate.call(this, a, b, c, d, more);
});
return G__186779;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___186773.call(this,a);
case  2 :
return list_STAR___186774.call(this,a,b);
case  3 :
return list_STAR___186775.call(this,a,b,c);
case  4 :
return list_STAR___186776.call(this,a,b,c,d);
default:
return list_STAR___186777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___186777.cljs$lang$applyTo;
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
var apply__186790 = (function (f,args){
var fixed_arity__186781 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__186781 + 1)) <= fixed_arity__186781)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__186791 = (function (f,x,args){
var arglist__186782 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__186783 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__186782,fixed_arity__186783) <= fixed_arity__186783)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__186782));
} else
{return f.cljs$lang$applyTo(arglist__186782);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__186782));
}
});
var apply__186792 = (function (f,x,y,args){
var arglist__186784 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__186785 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__186784,fixed_arity__186785) <= fixed_arity__186785)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__186784));
} else
{return f.cljs$lang$applyTo(arglist__186784);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__186784));
}
});
var apply__186793 = (function (f,x,y,z,args){
var arglist__186786 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__186787 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__186786,fixed_arity__186787) <= fixed_arity__186787)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__186786));
} else
{return f.cljs$lang$applyTo(arglist__186786);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__186786));
}
});
var apply__186794 = (function() { 
var G__186796__delegate = function (f,a,b,c,d,args){
var arglist__186788 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__186789 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__186788,fixed_arity__186789) <= fixed_arity__186789)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__186788));
} else
{return f.cljs$lang$applyTo(arglist__186788);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__186788));
}
};
var G__186796 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__186796__delegate.call(this, f, a, b, c, d, args);
};
G__186796.cljs$lang$maxFixedArity = 5;
G__186796.cljs$lang$applyTo = (function (arglist__186797){
var f = cljs.core.first(arglist__186797);
var a = cljs.core.first(cljs.core.next(arglist__186797));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186797)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__186797))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__186797)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__186797)))));
return G__186796__delegate.call(this, f, a, b, c, d, args);
});
return G__186796;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__186790.call(this,f,a);
case  3 :
return apply__186791.call(this,f,a,b);
case  4 :
return apply__186792.call(this,f,a,b,c);
case  5 :
return apply__186793.call(this,f,a,b,c,d);
default:
return apply__186794.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__186794.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__186798){
var obj = cljs.core.first(arglist__186798);
var f = cljs.core.first(cljs.core.next(arglist__186798));
var args = cljs.core.rest(cljs.core.next(arglist__186798));
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
var not_EQ___186799 = (function (x){
return false;
});
var not_EQ___186800 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___186801 = (function() { 
var G__186803__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__186803 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186803__delegate.call(this, x, y, more);
};
G__186803.cljs$lang$maxFixedArity = 2;
G__186803.cljs$lang$applyTo = (function (arglist__186804){
var x = cljs.core.first(arglist__186804);
var y = cljs.core.first(cljs.core.next(arglist__186804));
var more = cljs.core.rest(cljs.core.next(arglist__186804));
return G__186803__delegate.call(this, x, y, more);
});
return G__186803;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___186799.call(this,x);
case  2 :
return not_EQ___186800.call(this,x,y);
default:
return not_EQ___186801.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___186801.cljs$lang$applyTo;
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
var G__186805 = pred;
var G__186806 = cljs.core.next.call(null,coll);
pred = G__186805;
coll = G__186806;
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
{var or__3548__auto____186807 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____186807))
{return or__3548__auto____186807;
} else
{{
var G__186808 = pred;
var G__186809 = cljs.core.next.call(null,coll);
pred = G__186808;
coll = G__186809;
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
var G__186810 = null;
var G__186810__186811 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__186810__186812 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__186810__186813 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__186810__186814 = (function() { 
var G__186816__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__186816 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__186816__delegate.call(this, x, y, zs);
};
G__186816.cljs$lang$maxFixedArity = 2;
G__186816.cljs$lang$applyTo = (function (arglist__186817){
var x = cljs.core.first(arglist__186817);
var y = cljs.core.first(cljs.core.next(arglist__186817));
var zs = cljs.core.rest(cljs.core.next(arglist__186817));
return G__186816__delegate.call(this, x, y, zs);
});
return G__186816;
})()
;
G__186810 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__186810__186811.call(this);
case  1 :
return G__186810__186812.call(this,x);
case  2 :
return G__186810__186813.call(this,x,y);
default:
return G__186810__186814.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__186810.cljs$lang$maxFixedArity = 2;
G__186810.cljs$lang$applyTo = G__186810__186814.cljs$lang$applyTo;
return G__186810;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__186818__delegate = function (args){
return x;
};
var G__186818 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__186818__delegate.call(this, args);
};
G__186818.cljs$lang$maxFixedArity = 0;
G__186818.cljs$lang$applyTo = (function (arglist__186819){
var args = cljs.core.seq( arglist__186819 );;
return G__186818__delegate.call(this, args);
});
return G__186818;
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
var comp__186823 = (function (){
return cljs.core.identity;
});
var comp__186824 = (function (f){
return f;
});
var comp__186825 = (function (f,g){
return (function() {
var G__186829 = null;
var G__186829__186830 = (function (){
return f.call(null,g.call(null));
});
var G__186829__186831 = (function (x){
return f.call(null,g.call(null,x));
});
var G__186829__186832 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__186829__186833 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__186829__186834 = (function() { 
var G__186836__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__186836 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__186836__delegate.call(this, x, y, z, args);
};
G__186836.cljs$lang$maxFixedArity = 3;
G__186836.cljs$lang$applyTo = (function (arglist__186837){
var x = cljs.core.first(arglist__186837);
var y = cljs.core.first(cljs.core.next(arglist__186837));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186837)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__186837)));
return G__186836__delegate.call(this, x, y, z, args);
});
return G__186836;
})()
;
G__186829 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__186829__186830.call(this);
case  1 :
return G__186829__186831.call(this,x);
case  2 :
return G__186829__186832.call(this,x,y);
case  3 :
return G__186829__186833.call(this,x,y,z);
default:
return G__186829__186834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__186829.cljs$lang$maxFixedArity = 3;
G__186829.cljs$lang$applyTo = G__186829__186834.cljs$lang$applyTo;
return G__186829;
})()
});
var comp__186826 = (function (f,g,h){
return (function() {
var G__186838 = null;
var G__186838__186839 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__186838__186840 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__186838__186841 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__186838__186842 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__186838__186843 = (function() { 
var G__186845__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__186845 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__186845__delegate.call(this, x, y, z, args);
};
G__186845.cljs$lang$maxFixedArity = 3;
G__186845.cljs$lang$applyTo = (function (arglist__186846){
var x = cljs.core.first(arglist__186846);
var y = cljs.core.first(cljs.core.next(arglist__186846));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186846)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__186846)));
return G__186845__delegate.call(this, x, y, z, args);
});
return G__186845;
})()
;
G__186838 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__186838__186839.call(this);
case  1 :
return G__186838__186840.call(this,x);
case  2 :
return G__186838__186841.call(this,x,y);
case  3 :
return G__186838__186842.call(this,x,y,z);
default:
return G__186838__186843.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__186838.cljs$lang$maxFixedArity = 3;
G__186838.cljs$lang$applyTo = G__186838__186843.cljs$lang$applyTo;
return G__186838;
})()
});
var comp__186827 = (function() { 
var G__186847__delegate = function (f1,f2,f3,fs){
var fs__186820 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__186848__delegate = function (args){
var ret__186821 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__186820),args);
var fs__186822 = cljs.core.next.call(null,fs__186820);

while(true){
if(cljs.core.truth_(fs__186822))
{{
var G__186849 = cljs.core.first.call(null,fs__186822).call(null,ret__186821);
var G__186850 = cljs.core.next.call(null,fs__186822);
ret__186821 = G__186849;
fs__186822 = G__186850;
continue;
}
} else
{return ret__186821;
}
break;
}
};
var G__186848 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__186848__delegate.call(this, args);
};
G__186848.cljs$lang$maxFixedArity = 0;
G__186848.cljs$lang$applyTo = (function (arglist__186851){
var args = cljs.core.seq( arglist__186851 );;
return G__186848__delegate.call(this, args);
});
return G__186848;
})()
;
};
var G__186847 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__186847__delegate.call(this, f1, f2, f3, fs);
};
G__186847.cljs$lang$maxFixedArity = 3;
G__186847.cljs$lang$applyTo = (function (arglist__186852){
var f1 = cljs.core.first(arglist__186852);
var f2 = cljs.core.first(cljs.core.next(arglist__186852));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186852)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__186852)));
return G__186847__delegate.call(this, f1, f2, f3, fs);
});
return G__186847;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__186823.call(this);
case  1 :
return comp__186824.call(this,f1);
case  2 :
return comp__186825.call(this,f1,f2);
case  3 :
return comp__186826.call(this,f1,f2,f3);
default:
return comp__186827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__186827.cljs$lang$applyTo;
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
var partial__186853 = (function (f,arg1){
return (function() { 
var G__186858__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__186858 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__186858__delegate.call(this, args);
};
G__186858.cljs$lang$maxFixedArity = 0;
G__186858.cljs$lang$applyTo = (function (arglist__186859){
var args = cljs.core.seq( arglist__186859 );;
return G__186858__delegate.call(this, args);
});
return G__186858;
})()
;
});
var partial__186854 = (function (f,arg1,arg2){
return (function() { 
var G__186860__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__186860 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__186860__delegate.call(this, args);
};
G__186860.cljs$lang$maxFixedArity = 0;
G__186860.cljs$lang$applyTo = (function (arglist__186861){
var args = cljs.core.seq( arglist__186861 );;
return G__186860__delegate.call(this, args);
});
return G__186860;
})()
;
});
var partial__186855 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__186862__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__186862 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__186862__delegate.call(this, args);
};
G__186862.cljs$lang$maxFixedArity = 0;
G__186862.cljs$lang$applyTo = (function (arglist__186863){
var args = cljs.core.seq( arglist__186863 );;
return G__186862__delegate.call(this, args);
});
return G__186862;
})()
;
});
var partial__186856 = (function() { 
var G__186864__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__186865__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__186865 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__186865__delegate.call(this, args);
};
G__186865.cljs$lang$maxFixedArity = 0;
G__186865.cljs$lang$applyTo = (function (arglist__186866){
var args = cljs.core.seq( arglist__186866 );;
return G__186865__delegate.call(this, args);
});
return G__186865;
})()
;
};
var G__186864 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__186864__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__186864.cljs$lang$maxFixedArity = 4;
G__186864.cljs$lang$applyTo = (function (arglist__186867){
var f = cljs.core.first(arglist__186867);
var arg1 = cljs.core.first(cljs.core.next(arglist__186867));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186867)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__186867))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__186867))));
return G__186864__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__186864;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__186853.call(this,f,arg1);
case  3 :
return partial__186854.call(this,f,arg1,arg2);
case  4 :
return partial__186855.call(this,f,arg1,arg2,arg3);
default:
return partial__186856.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__186856.cljs$lang$applyTo;
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
var fnil__186868 = (function (f,x){
return (function() {
var G__186872 = null;
var G__186872__186873 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__186872__186874 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__186872__186875 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__186872__186876 = (function() { 
var G__186878__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__186878 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__186878__delegate.call(this, a, b, c, ds);
};
G__186878.cljs$lang$maxFixedArity = 3;
G__186878.cljs$lang$applyTo = (function (arglist__186879){
var a = cljs.core.first(arglist__186879);
var b = cljs.core.first(cljs.core.next(arglist__186879));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186879)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__186879)));
return G__186878__delegate.call(this, a, b, c, ds);
});
return G__186878;
})()
;
G__186872 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__186872__186873.call(this,a);
case  2 :
return G__186872__186874.call(this,a,b);
case  3 :
return G__186872__186875.call(this,a,b,c);
default:
return G__186872__186876.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__186872.cljs$lang$maxFixedArity = 3;
G__186872.cljs$lang$applyTo = G__186872__186876.cljs$lang$applyTo;
return G__186872;
})()
});
var fnil__186869 = (function (f,x,y){
return (function() {
var G__186880 = null;
var G__186880__186881 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__186880__186882 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__186880__186883 = (function() { 
var G__186885__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__186885 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__186885__delegate.call(this, a, b, c, ds);
};
G__186885.cljs$lang$maxFixedArity = 3;
G__186885.cljs$lang$applyTo = (function (arglist__186886){
var a = cljs.core.first(arglist__186886);
var b = cljs.core.first(cljs.core.next(arglist__186886));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186886)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__186886)));
return G__186885__delegate.call(this, a, b, c, ds);
});
return G__186885;
})()
;
G__186880 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__186880__186881.call(this,a,b);
case  3 :
return G__186880__186882.call(this,a,b,c);
default:
return G__186880__186883.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__186880.cljs$lang$maxFixedArity = 3;
G__186880.cljs$lang$applyTo = G__186880__186883.cljs$lang$applyTo;
return G__186880;
})()
});
var fnil__186870 = (function (f,x,y,z){
return (function() {
var G__186887 = null;
var G__186887__186888 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__186887__186889 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__186887__186890 = (function() { 
var G__186892__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__186892 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__186892__delegate.call(this, a, b, c, ds);
};
G__186892.cljs$lang$maxFixedArity = 3;
G__186892.cljs$lang$applyTo = (function (arglist__186893){
var a = cljs.core.first(arglist__186893);
var b = cljs.core.first(cljs.core.next(arglist__186893));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186893)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__186893)));
return G__186892__delegate.call(this, a, b, c, ds);
});
return G__186892;
})()
;
G__186887 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__186887__186888.call(this,a,b);
case  3 :
return G__186887__186889.call(this,a,b,c);
default:
return G__186887__186890.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__186887.cljs$lang$maxFixedArity = 3;
G__186887.cljs$lang$applyTo = G__186887__186890.cljs$lang$applyTo;
return G__186887;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__186868.call(this,f,x);
case  3 :
return fnil__186869.call(this,f,x,y);
case  4 :
return fnil__186870.call(this,f,x,y,z);
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
var mapi__186896 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____186894 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____186894))
{var s__186895 = temp__3698__auto____186894;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__186895)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__186895)));
} else
{return null;
}
})));
});

return mapi__186896.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____186897 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____186897))
{var s__186898 = temp__3698__auto____186897;

var x__186899 = f.call(null,cljs.core.first.call(null,s__186898));

if(cljs.core.truth_((x__186899 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__186898));
} else
{return cljs.core.cons.call(null,x__186899,keep.call(null,f,cljs.core.rest.call(null,s__186898)));
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
var keepi__186909 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____186906 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____186906))
{var s__186907 = temp__3698__auto____186906;

var x__186908 = f.call(null,idx,cljs.core.first.call(null,s__186907));

if(cljs.core.truth_((x__186908 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__186907));
} else
{return cljs.core.cons.call(null,x__186908,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__186907)));
}
} else
{return null;
}
})));
});

return keepi__186909.call(null,0,coll);
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
var every_pred__186954 = (function (p){
return (function() {
var ep1 = null;
var ep1__186959 = (function (){
return true;
});
var ep1__186960 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__186961 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____186916 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____186916))
{return p.call(null,y);
} else
{return and__3546__auto____186916;
}
})());
});
var ep1__186962 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____186917 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____186917))
{var and__3546__auto____186918 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____186918))
{return p.call(null,z);
} else
{return and__3546__auto____186918;
}
} else
{return and__3546__auto____186917;
}
})());
});
var ep1__186963 = (function() { 
var G__186965__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____186919 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____186919))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____186919;
}
})());
};
var G__186965 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__186965__delegate.call(this, x, y, z, args);
};
G__186965.cljs$lang$maxFixedArity = 3;
G__186965.cljs$lang$applyTo = (function (arglist__186966){
var x = cljs.core.first(arglist__186966);
var y = cljs.core.first(cljs.core.next(arglist__186966));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186966)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__186966)));
return G__186965__delegate.call(this, x, y, z, args);
});
return G__186965;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__186959.call(this);
case  1 :
return ep1__186960.call(this,x);
case  2 :
return ep1__186961.call(this,x,y);
case  3 :
return ep1__186962.call(this,x,y,z);
default:
return ep1__186963.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__186963.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__186955 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__186967 = (function (){
return true;
});
var ep2__186968 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____186920 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____186920))
{return p2.call(null,x);
} else
{return and__3546__auto____186920;
}
})());
});
var ep2__186969 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____186921 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____186921))
{var and__3546__auto____186922 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____186922))
{var and__3546__auto____186923 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____186923))
{return p2.call(null,y);
} else
{return and__3546__auto____186923;
}
} else
{return and__3546__auto____186922;
}
} else
{return and__3546__auto____186921;
}
})());
});
var ep2__186970 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____186924 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____186924))
{var and__3546__auto____186925 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____186925))
{var and__3546__auto____186926 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____186926))
{var and__3546__auto____186927 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____186927))
{var and__3546__auto____186928 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____186928))
{return p2.call(null,z);
} else
{return and__3546__auto____186928;
}
} else
{return and__3546__auto____186927;
}
} else
{return and__3546__auto____186926;
}
} else
{return and__3546__auto____186925;
}
} else
{return and__3546__auto____186924;
}
})());
});
var ep2__186971 = (function() { 
var G__186973__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____186929 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____186929))
{return cljs.core.every_QMARK_.call(null,(function (p1__186900_SHARP_){
var and__3546__auto____186930 = p1.call(null,p1__186900_SHARP_);

if(cljs.core.truth_(and__3546__auto____186930))
{return p2.call(null,p1__186900_SHARP_);
} else
{return and__3546__auto____186930;
}
}),args);
} else
{return and__3546__auto____186929;
}
})());
};
var G__186973 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__186973__delegate.call(this, x, y, z, args);
};
G__186973.cljs$lang$maxFixedArity = 3;
G__186973.cljs$lang$applyTo = (function (arglist__186974){
var x = cljs.core.first(arglist__186974);
var y = cljs.core.first(cljs.core.next(arglist__186974));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186974)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__186974)));
return G__186973__delegate.call(this, x, y, z, args);
});
return G__186973;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__186967.call(this);
case  1 :
return ep2__186968.call(this,x);
case  2 :
return ep2__186969.call(this,x,y);
case  3 :
return ep2__186970.call(this,x,y,z);
default:
return ep2__186971.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__186971.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__186956 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__186975 = (function (){
return true;
});
var ep3__186976 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____186931 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____186931))
{var and__3546__auto____186932 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____186932))
{return p3.call(null,x);
} else
{return and__3546__auto____186932;
}
} else
{return and__3546__auto____186931;
}
})());
});
var ep3__186977 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____186933 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____186933))
{var and__3546__auto____186934 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____186934))
{var and__3546__auto____186935 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____186935))
{var and__3546__auto____186936 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____186936))
{var and__3546__auto____186937 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____186937))
{return p3.call(null,y);
} else
{return and__3546__auto____186937;
}
} else
{return and__3546__auto____186936;
}
} else
{return and__3546__auto____186935;
}
} else
{return and__3546__auto____186934;
}
} else
{return and__3546__auto____186933;
}
})());
});
var ep3__186978 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____186938 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____186938))
{var and__3546__auto____186939 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____186939))
{var and__3546__auto____186940 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____186940))
{var and__3546__auto____186941 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____186941))
{var and__3546__auto____186942 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____186942))
{var and__3546__auto____186943 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____186943))
{var and__3546__auto____186944 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____186944))
{var and__3546__auto____186945 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____186945))
{return p3.call(null,z);
} else
{return and__3546__auto____186945;
}
} else
{return and__3546__auto____186944;
}
} else
{return and__3546__auto____186943;
}
} else
{return and__3546__auto____186942;
}
} else
{return and__3546__auto____186941;
}
} else
{return and__3546__auto____186940;
}
} else
{return and__3546__auto____186939;
}
} else
{return and__3546__auto____186938;
}
})());
});
var ep3__186979 = (function() { 
var G__186981__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____186946 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____186946))
{return cljs.core.every_QMARK_.call(null,(function (p1__186901_SHARP_){
var and__3546__auto____186947 = p1.call(null,p1__186901_SHARP_);

if(cljs.core.truth_(and__3546__auto____186947))
{var and__3546__auto____186948 = p2.call(null,p1__186901_SHARP_);

if(cljs.core.truth_(and__3546__auto____186948))
{return p3.call(null,p1__186901_SHARP_);
} else
{return and__3546__auto____186948;
}
} else
{return and__3546__auto____186947;
}
}),args);
} else
{return and__3546__auto____186946;
}
})());
};
var G__186981 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__186981__delegate.call(this, x, y, z, args);
};
G__186981.cljs$lang$maxFixedArity = 3;
G__186981.cljs$lang$applyTo = (function (arglist__186982){
var x = cljs.core.first(arglist__186982);
var y = cljs.core.first(cljs.core.next(arglist__186982));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186982)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__186982)));
return G__186981__delegate.call(this, x, y, z, args);
});
return G__186981;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__186975.call(this);
case  1 :
return ep3__186976.call(this,x);
case  2 :
return ep3__186977.call(this,x,y);
case  3 :
return ep3__186978.call(this,x,y,z);
default:
return ep3__186979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__186979.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__186957 = (function() { 
var G__186983__delegate = function (p1,p2,p3,ps){
var ps__186949 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__186984 = (function (){
return true;
});
var epn__186985 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__186902_SHARP_){
return p1__186902_SHARP_.call(null,x);
}),ps__186949);
});
var epn__186986 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__186903_SHARP_){
var and__3546__auto____186950 = p1__186903_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____186950))
{return p1__186903_SHARP_.call(null,y);
} else
{return and__3546__auto____186950;
}
}),ps__186949);
});
var epn__186987 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__186904_SHARP_){
var and__3546__auto____186951 = p1__186904_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____186951))
{var and__3546__auto____186952 = p1__186904_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____186952))
{return p1__186904_SHARP_.call(null,z);
} else
{return and__3546__auto____186952;
}
} else
{return and__3546__auto____186951;
}
}),ps__186949);
});
var epn__186988 = (function() { 
var G__186990__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____186953 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____186953))
{return cljs.core.every_QMARK_.call(null,(function (p1__186905_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__186905_SHARP_,args);
}),ps__186949);
} else
{return and__3546__auto____186953;
}
})());
};
var G__186990 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__186990__delegate.call(this, x, y, z, args);
};
G__186990.cljs$lang$maxFixedArity = 3;
G__186990.cljs$lang$applyTo = (function (arglist__186991){
var x = cljs.core.first(arglist__186991);
var y = cljs.core.first(cljs.core.next(arglist__186991));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186991)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__186991)));
return G__186990__delegate.call(this, x, y, z, args);
});
return G__186990;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__186984.call(this);
case  1 :
return epn__186985.call(this,x);
case  2 :
return epn__186986.call(this,x,y);
case  3 :
return epn__186987.call(this,x,y,z);
default:
return epn__186988.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__186988.cljs$lang$applyTo;
return epn;
})()
};
var G__186983 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__186983__delegate.call(this, p1, p2, p3, ps);
};
G__186983.cljs$lang$maxFixedArity = 3;
G__186983.cljs$lang$applyTo = (function (arglist__186992){
var p1 = cljs.core.first(arglist__186992);
var p2 = cljs.core.first(cljs.core.next(arglist__186992));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__186992)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__186992)));
return G__186983__delegate.call(this, p1, p2, p3, ps);
});
return G__186983;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__186954.call(this,p1);
case  2 :
return every_pred__186955.call(this,p1,p2);
case  3 :
return every_pred__186956.call(this,p1,p2,p3);
default:
return every_pred__186957.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__186957.cljs$lang$applyTo;
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
var some_fn__187032 = (function (p){
return (function() {
var sp1 = null;
var sp1__187037 = (function (){
return null;
});
var sp1__187038 = (function (x){
return p.call(null,x);
});
var sp1__187039 = (function (x,y){
var or__3548__auto____186994 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____186994))
{return or__3548__auto____186994;
} else
{return p.call(null,y);
}
});
var sp1__187040 = (function (x,y,z){
var or__3548__auto____186995 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____186995))
{return or__3548__auto____186995;
} else
{var or__3548__auto____186996 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____186996))
{return or__3548__auto____186996;
} else
{return p.call(null,z);
}
}
});
var sp1__187041 = (function() { 
var G__187043__delegate = function (x,y,z,args){
var or__3548__auto____186997 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____186997))
{return or__3548__auto____186997;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__187043 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__187043__delegate.call(this, x, y, z, args);
};
G__187043.cljs$lang$maxFixedArity = 3;
G__187043.cljs$lang$applyTo = (function (arglist__187044){
var x = cljs.core.first(arglist__187044);
var y = cljs.core.first(cljs.core.next(arglist__187044));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187044)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__187044)));
return G__187043__delegate.call(this, x, y, z, args);
});
return G__187043;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__187037.call(this);
case  1 :
return sp1__187038.call(this,x);
case  2 :
return sp1__187039.call(this,x,y);
case  3 :
return sp1__187040.call(this,x,y,z);
default:
return sp1__187041.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__187041.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__187033 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__187045 = (function (){
return null;
});
var sp2__187046 = (function (x){
var or__3548__auto____186998 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____186998))
{return or__3548__auto____186998;
} else
{return p2.call(null,x);
}
});
var sp2__187047 = (function (x,y){
var or__3548__auto____186999 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____186999))
{return or__3548__auto____186999;
} else
{var or__3548__auto____187000 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____187000))
{return or__3548__auto____187000;
} else
{var or__3548__auto____187001 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____187001))
{return or__3548__auto____187001;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__187048 = (function (x,y,z){
var or__3548__auto____187002 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____187002))
{return or__3548__auto____187002;
} else
{var or__3548__auto____187003 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____187003))
{return or__3548__auto____187003;
} else
{var or__3548__auto____187004 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____187004))
{return or__3548__auto____187004;
} else
{var or__3548__auto____187005 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____187005))
{return or__3548__auto____187005;
} else
{var or__3548__auto____187006 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____187006))
{return or__3548__auto____187006;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__187049 = (function() { 
var G__187051__delegate = function (x,y,z,args){
var or__3548__auto____187007 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____187007))
{return or__3548__auto____187007;
} else
{return cljs.core.some.call(null,(function (p1__186910_SHARP_){
var or__3548__auto____187008 = p1.call(null,p1__186910_SHARP_);

if(cljs.core.truth_(or__3548__auto____187008))
{return or__3548__auto____187008;
} else
{return p2.call(null,p1__186910_SHARP_);
}
}),args);
}
};
var G__187051 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__187051__delegate.call(this, x, y, z, args);
};
G__187051.cljs$lang$maxFixedArity = 3;
G__187051.cljs$lang$applyTo = (function (arglist__187052){
var x = cljs.core.first(arglist__187052);
var y = cljs.core.first(cljs.core.next(arglist__187052));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187052)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__187052)));
return G__187051__delegate.call(this, x, y, z, args);
});
return G__187051;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__187045.call(this);
case  1 :
return sp2__187046.call(this,x);
case  2 :
return sp2__187047.call(this,x,y);
case  3 :
return sp2__187048.call(this,x,y,z);
default:
return sp2__187049.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__187049.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__187034 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__187053 = (function (){
return null;
});
var sp3__187054 = (function (x){
var or__3548__auto____187009 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____187009))
{return or__3548__auto____187009;
} else
{var or__3548__auto____187010 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____187010))
{return or__3548__auto____187010;
} else
{return p3.call(null,x);
}
}
});
var sp3__187055 = (function (x,y){
var or__3548__auto____187011 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____187011))
{return or__3548__auto____187011;
} else
{var or__3548__auto____187012 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____187012))
{return or__3548__auto____187012;
} else
{var or__3548__auto____187013 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____187013))
{return or__3548__auto____187013;
} else
{var or__3548__auto____187014 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____187014))
{return or__3548__auto____187014;
} else
{var or__3548__auto____187015 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____187015))
{return or__3548__auto____187015;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__187056 = (function (x,y,z){
var or__3548__auto____187016 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____187016))
{return or__3548__auto____187016;
} else
{var or__3548__auto____187017 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____187017))
{return or__3548__auto____187017;
} else
{var or__3548__auto____187018 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____187018))
{return or__3548__auto____187018;
} else
{var or__3548__auto____187019 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____187019))
{return or__3548__auto____187019;
} else
{var or__3548__auto____187020 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____187020))
{return or__3548__auto____187020;
} else
{var or__3548__auto____187021 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____187021))
{return or__3548__auto____187021;
} else
{var or__3548__auto____187022 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____187022))
{return or__3548__auto____187022;
} else
{var or__3548__auto____187023 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____187023))
{return or__3548__auto____187023;
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
var sp3__187057 = (function() { 
var G__187059__delegate = function (x,y,z,args){
var or__3548__auto____187024 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____187024))
{return or__3548__auto____187024;
} else
{return cljs.core.some.call(null,(function (p1__186911_SHARP_){
var or__3548__auto____187025 = p1.call(null,p1__186911_SHARP_);

if(cljs.core.truth_(or__3548__auto____187025))
{return or__3548__auto____187025;
} else
{var or__3548__auto____187026 = p2.call(null,p1__186911_SHARP_);

if(cljs.core.truth_(or__3548__auto____187026))
{return or__3548__auto____187026;
} else
{return p3.call(null,p1__186911_SHARP_);
}
}
}),args);
}
};
var G__187059 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__187059__delegate.call(this, x, y, z, args);
};
G__187059.cljs$lang$maxFixedArity = 3;
G__187059.cljs$lang$applyTo = (function (arglist__187060){
var x = cljs.core.first(arglist__187060);
var y = cljs.core.first(cljs.core.next(arglist__187060));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187060)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__187060)));
return G__187059__delegate.call(this, x, y, z, args);
});
return G__187059;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__187053.call(this);
case  1 :
return sp3__187054.call(this,x);
case  2 :
return sp3__187055.call(this,x,y);
case  3 :
return sp3__187056.call(this,x,y,z);
default:
return sp3__187057.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__187057.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__187035 = (function() { 
var G__187061__delegate = function (p1,p2,p3,ps){
var ps__187027 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__187062 = (function (){
return null;
});
var spn__187063 = (function (x){
return cljs.core.some.call(null,(function (p1__186912_SHARP_){
return p1__186912_SHARP_.call(null,x);
}),ps__187027);
});
var spn__187064 = (function (x,y){
return cljs.core.some.call(null,(function (p1__186913_SHARP_){
var or__3548__auto____187028 = p1__186913_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____187028))
{return or__3548__auto____187028;
} else
{return p1__186913_SHARP_.call(null,y);
}
}),ps__187027);
});
var spn__187065 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__186914_SHARP_){
var or__3548__auto____187029 = p1__186914_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____187029))
{return or__3548__auto____187029;
} else
{var or__3548__auto____187030 = p1__186914_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____187030))
{return or__3548__auto____187030;
} else
{return p1__186914_SHARP_.call(null,z);
}
}
}),ps__187027);
});
var spn__187066 = (function() { 
var G__187068__delegate = function (x,y,z,args){
var or__3548__auto____187031 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____187031))
{return or__3548__auto____187031;
} else
{return cljs.core.some.call(null,(function (p1__186915_SHARP_){
return cljs.core.some.call(null,p1__186915_SHARP_,args);
}),ps__187027);
}
};
var G__187068 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__187068__delegate.call(this, x, y, z, args);
};
G__187068.cljs$lang$maxFixedArity = 3;
G__187068.cljs$lang$applyTo = (function (arglist__187069){
var x = cljs.core.first(arglist__187069);
var y = cljs.core.first(cljs.core.next(arglist__187069));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187069)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__187069)));
return G__187068__delegate.call(this, x, y, z, args);
});
return G__187068;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__187062.call(this);
case  1 :
return spn__187063.call(this,x);
case  2 :
return spn__187064.call(this,x,y);
case  3 :
return spn__187065.call(this,x,y,z);
default:
return spn__187066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__187066.cljs$lang$applyTo;
return spn;
})()
};
var G__187061 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__187061__delegate.call(this, p1, p2, p3, ps);
};
G__187061.cljs$lang$maxFixedArity = 3;
G__187061.cljs$lang$applyTo = (function (arglist__187070){
var p1 = cljs.core.first(arglist__187070);
var p2 = cljs.core.first(cljs.core.next(arglist__187070));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187070)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__187070)));
return G__187061__delegate.call(this, p1, p2, p3, ps);
});
return G__187061;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__187032.call(this,p1);
case  2 :
return some_fn__187033.call(this,p1,p2);
case  3 :
return some_fn__187034.call(this,p1,p2,p3);
default:
return some_fn__187035.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__187035.cljs$lang$applyTo;
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
var map__187083 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____187071 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____187071))
{var s__187072 = temp__3698__auto____187071;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__187072)),map.call(null,f,cljs.core.rest.call(null,s__187072)));
} else
{return null;
}
})));
});
var map__187084 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__187073 = cljs.core.seq.call(null,c1);
var s2__187074 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____187075 = s1__187073;

if(cljs.core.truth_(and__3546__auto____187075))
{return s2__187074;
} else
{return and__3546__auto____187075;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__187073),cljs.core.first.call(null,s2__187074)),map.call(null,f,cljs.core.rest.call(null,s1__187073),cljs.core.rest.call(null,s2__187074)));
} else
{return null;
}
})));
});
var map__187085 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__187076 = cljs.core.seq.call(null,c1);
var s2__187077 = cljs.core.seq.call(null,c2);
var s3__187078 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____187079 = s1__187076;

if(cljs.core.truth_(and__3546__auto____187079))
{var and__3546__auto____187080 = s2__187077;

if(cljs.core.truth_(and__3546__auto____187080))
{return s3__187078;
} else
{return and__3546__auto____187080;
}
} else
{return and__3546__auto____187079;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__187076),cljs.core.first.call(null,s2__187077),cljs.core.first.call(null,s3__187078)),map.call(null,f,cljs.core.rest.call(null,s1__187076),cljs.core.rest.call(null,s2__187077),cljs.core.rest.call(null,s3__187078)));
} else
{return null;
}
})));
});
var map__187086 = (function() { 
var G__187088__delegate = function (f,c1,c2,c3,colls){
var step__187082 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__187081 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__187081)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__187081),step.call(null,map.call(null,cljs.core.rest,ss__187081)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__186993_SHARP_){
return cljs.core.apply.call(null,f,p1__186993_SHARP_);
}),step__187082.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__187088 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__187088__delegate.call(this, f, c1, c2, c3, colls);
};
G__187088.cljs$lang$maxFixedArity = 4;
G__187088.cljs$lang$applyTo = (function (arglist__187089){
var f = cljs.core.first(arglist__187089);
var c1 = cljs.core.first(cljs.core.next(arglist__187089));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187089)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__187089))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__187089))));
return G__187088__delegate.call(this, f, c1, c2, c3, colls);
});
return G__187088;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__187083.call(this,f,c1);
case  3 :
return map__187084.call(this,f,c1,c2);
case  4 :
return map__187085.call(this,f,c1,c2,c3);
default:
return map__187086.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__187086.cljs$lang$applyTo;
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
{var temp__3698__auto____187090 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____187090))
{var s__187091 = temp__3698__auto____187090;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__187091),take.call(null,(n - 1),cljs.core.rest.call(null,s__187091)));
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
var step__187094 = (function (n,coll){
while(true){
var s__187092 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____187093 = (n > 0);

if(cljs.core.truth_(and__3546__auto____187093))
{return s__187092;
} else
{return and__3546__auto____187093;
}
})()))
{{
var G__187095 = (n - 1);
var G__187096 = cljs.core.rest.call(null,s__187092);
n = G__187095;
coll = G__187096;
continue;
}
} else
{return s__187092;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__187094.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__187097 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__187098 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__187097.call(this,n);
case  2 :
return drop_last__187098.call(this,n,s);
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
var s__187100 = cljs.core.seq.call(null,coll);
var lead__187101 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__187101))
{{
var G__187102 = cljs.core.next.call(null,s__187100);
var G__187103 = cljs.core.next.call(null,lead__187101);
s__187100 = G__187102;
lead__187101 = G__187103;
continue;
}
} else
{return s__187100;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__187106 = (function (pred,coll){
while(true){
var s__187104 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____187105 = s__187104;

if(cljs.core.truth_(and__3546__auto____187105))
{return pred.call(null,cljs.core.first.call(null,s__187104));
} else
{return and__3546__auto____187105;
}
})()))
{{
var G__187107 = pred;
var G__187108 = cljs.core.rest.call(null,s__187104);
pred = G__187107;
coll = G__187108;
continue;
}
} else
{return s__187104;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__187106.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____187109 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____187109))
{var s__187110 = temp__3698__auto____187109;

return cljs.core.concat.call(null,s__187110,cycle.call(null,s__187110));
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
var repeat__187111 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__187112 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__187111.call(this,n);
case  2 :
return repeat__187112.call(this,n,x);
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
var repeatedly__187114 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__187115 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__187114.call(this,n);
case  2 :
return repeatedly__187115.call(this,n,f);
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
var interleave__187121 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__187117 = cljs.core.seq.call(null,c1);
var s2__187118 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____187119 = s1__187117;

if(cljs.core.truth_(and__3546__auto____187119))
{return s2__187118;
} else
{return and__3546__auto____187119;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__187117),cljs.core.cons.call(null,cljs.core.first.call(null,s2__187118),interleave.call(null,cljs.core.rest.call(null,s1__187117),cljs.core.rest.call(null,s2__187118))));
} else
{return null;
}
})));
});
var interleave__187122 = (function() { 
var G__187124__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__187120 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__187120)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__187120),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__187120)));
} else
{return null;
}
})));
};
var G__187124 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__187124__delegate.call(this, c1, c2, colls);
};
G__187124.cljs$lang$maxFixedArity = 2;
G__187124.cljs$lang$applyTo = (function (arglist__187125){
var c1 = cljs.core.first(arglist__187125);
var c2 = cljs.core.first(cljs.core.next(arglist__187125));
var colls = cljs.core.rest(cljs.core.next(arglist__187125));
return G__187124__delegate.call(this, c1, c2, colls);
});
return G__187124;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__187121.call(this,c1,c2);
default:
return interleave__187122.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__187122.cljs$lang$applyTo;
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
var cat__187128 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____187126 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____187126))
{var coll__187127 = temp__3695__auto____187126;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__187127),cat.call(null,cljs.core.rest.call(null,coll__187127),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__187128.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__187129 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__187130 = (function() { 
var G__187132__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__187132 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__187132__delegate.call(this, f, coll, colls);
};
G__187132.cljs$lang$maxFixedArity = 2;
G__187132.cljs$lang$applyTo = (function (arglist__187133){
var f = cljs.core.first(arglist__187133);
var coll = cljs.core.first(cljs.core.next(arglist__187133));
var colls = cljs.core.rest(cljs.core.next(arglist__187133));
return G__187132__delegate.call(this, f, coll, colls);
});
return G__187132;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__187129.call(this,f,coll);
default:
return mapcat__187130.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__187130.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____187134 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____187134))
{var s__187135 = temp__3698__auto____187134;

var f__187136 = cljs.core.first.call(null,s__187135);
var r__187137 = cljs.core.rest.call(null,s__187135);

if(cljs.core.truth_(pred.call(null,f__187136)))
{return cljs.core.cons.call(null,f__187136,filter.call(null,pred,r__187137));
} else
{return filter.call(null,pred,r__187137);
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
var walk__187139 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__187139.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__187138_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__187138_SHARP_));
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
var partition__187146 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__187147 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____187140 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____187140))
{var s__187141 = temp__3698__auto____187140;

var p__187142 = cljs.core.take.call(null,n,s__187141);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__187142))))
{return cljs.core.cons.call(null,p__187142,partition.call(null,n,step,cljs.core.drop.call(null,step,s__187141)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__187148 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____187143 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____187143))
{var s__187144 = temp__3698__auto____187143;

var p__187145 = cljs.core.take.call(null,n,s__187144);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__187145))))
{return cljs.core.cons.call(null,p__187145,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__187144)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__187145,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__187146.call(this,n,step);
case  3 :
return partition__187147.call(this,n,step,pad);
case  4 :
return partition__187148.call(this,n,step,pad,coll);
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
var get_in__187154 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__187155 = (function (m,ks,not_found){
var sentinel__187150 = cljs.core.lookup_sentinel;
var m__187151 = m;
var ks__187152 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__187152))
{var m__187153 = cljs.core.get.call(null,m__187151,cljs.core.first.call(null,ks__187152),sentinel__187150);

if(cljs.core.truth_((sentinel__187150 === m__187153)))
{return not_found;
} else
{{
var G__187157 = sentinel__187150;
var G__187158 = m__187153;
var G__187159 = cljs.core.next.call(null,ks__187152);
sentinel__187150 = G__187157;
m__187151 = G__187158;
ks__187152 = G__187159;
continue;
}
}
} else
{return m__187151;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__187154.call(this,m,ks);
case  3 :
return get_in__187155.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__187160,v){
var vec__187161__187162 = p__187160;
var k__187163 = cljs.core.nth.call(null,vec__187161__187162,0,null);
var ks__187164 = cljs.core.nthnext.call(null,vec__187161__187162,1);

if(cljs.core.truth_(ks__187164))
{return cljs.core.assoc.call(null,m,k__187163,assoc_in.call(null,cljs.core.get.call(null,m,k__187163),ks__187164,v));
} else
{return cljs.core.assoc.call(null,m,k__187163,v);
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
var update_in__delegate = function (m,p__187165,f,args){
var vec__187166__187167 = p__187165;
var k__187168 = cljs.core.nth.call(null,vec__187166__187167,0,null);
var ks__187169 = cljs.core.nthnext.call(null,vec__187166__187167,1);

if(cljs.core.truth_(ks__187169))
{return cljs.core.assoc.call(null,m,k__187168,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__187168),ks__187169,f,args));
} else
{return cljs.core.assoc.call(null,m,k__187168,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__187168),args));
}
};
var update_in = function (m,p__187165,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__187165, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__187170){
var m = cljs.core.first(arglist__187170);
var p__187165 = cljs.core.first(cljs.core.next(arglist__187170));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187170)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__187170)));
return update_in__delegate.call(this, m, p__187165, f, args);
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
var this__187171 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__187204 = null;
var G__187204__187205 = (function (coll,k){
var this__187172 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__187204__187206 = (function (coll,k,not_found){
var this__187173 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__187204 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__187204__187205.call(this,coll,k);
case  3 :
return G__187204__187206.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187204;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__187174 = this;
var new_array__187175 = cljs.core.aclone.call(null,this__187174.array);

(new_array__187175[k] = v);
return (new cljs.core.Vector(this__187174.meta,new_array__187175));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__187208 = null;
var G__187208__187209 = (function (tsym187176,k){
var this__187178 = this;
var tsym187176__187179 = this;

var coll__187180 = tsym187176__187179;

return cljs.core._lookup.call(null,coll__187180,k);
});
var G__187208__187210 = (function (tsym187177,k,not_found){
var this__187181 = this;
var tsym187177__187182 = this;

var coll__187183 = tsym187177__187182;

return cljs.core._lookup.call(null,coll__187183,k,not_found);
});
G__187208 = function(tsym187177,k,not_found){
switch(arguments.length){
case  2 :
return G__187208__187209.call(this,tsym187177,k);
case  3 :
return G__187208__187210.call(this,tsym187177,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187208;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__187184 = this;
var new_array__187185 = cljs.core.aclone.call(null,this__187184.array);

new_array__187185.push(o);
return (new cljs.core.Vector(this__187184.meta,new_array__187185));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__187212 = null;
var G__187212__187213 = (function (v,f){
var this__187186 = this;
return cljs.core.ci_reduce.call(null,this__187186.array,f);
});
var G__187212__187214 = (function (v,f,start){
var this__187187 = this;
return cljs.core.ci_reduce.call(null,this__187187.array,f,start);
});
G__187212 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__187212__187213.call(this,v,f);
case  3 :
return G__187212__187214.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187212;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__187188 = this;
if(cljs.core.truth_((this__187188.array.length > 0)))
{var vector_seq__187189 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__187188.array.length)))
{return cljs.core.cons.call(null,(this__187188.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__187189.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__187190 = this;
return this__187190.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__187191 = this;
var count__187192 = this__187191.array.length;

if(cljs.core.truth_((count__187192 > 0)))
{return (this__187191.array[(count__187192 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__187193 = this;
if(cljs.core.truth_((this__187193.array.length > 0)))
{var new_array__187194 = cljs.core.aclone.call(null,this__187193.array);

new_array__187194.pop();
return (new cljs.core.Vector(this__187193.meta,new_array__187194));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__187195 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__187196 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__187197 = this;
return (new cljs.core.Vector(meta,this__187197.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__187198 = this;
return this__187198.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__187216 = null;
var G__187216__187217 = (function (coll,n){
var this__187199 = this;
if(cljs.core.truth_((function (){var and__3546__auto____187200 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____187200))
{return (n < this__187199.array.length);
} else
{return and__3546__auto____187200;
}
})()))
{return (this__187199.array[n]);
} else
{return null;
}
});
var G__187216__187218 = (function (coll,n,not_found){
var this__187201 = this;
if(cljs.core.truth_((function (){var and__3546__auto____187202 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____187202))
{return (n < this__187201.array.length);
} else
{return and__3546__auto____187202;
}
})()))
{return (this__187201.array[n]);
} else
{return not_found;
}
});
G__187216 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__187216__187217.call(this,coll,n);
case  3 :
return G__187216__187218.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187216;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__187203 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__187203.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__187220 = pv.cnt;

if(cljs.core.truth_((cnt__187220 < 32)))
{return 0;
} else
{return (((cnt__187220 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__187221 = level;
var ret__187222 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__187221)))
{return ret__187222;
} else
{var embed__187223 = ret__187222;
var r__187224 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___187225 = (r__187224[0] = embed__187223);

{
var G__187226 = (ll__187221 - 5);
var G__187227 = r__187224;
ll__187221 = G__187226;
ret__187222 = G__187227;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__187228 = cljs.core.aclone.call(null,parent);
var subidx__187229 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__187228[subidx__187229] = tailnode);
return ret__187228;
} else
{var temp__3695__auto____187230 = (parent[subidx__187229]);

if(cljs.core.truth_(temp__3695__auto____187230))
{var child__187231 = temp__3695__auto____187230;

var node_to_insert__187232 = push_tail.call(null,pv,(level - 5),child__187231,tailnode);
var ___187233 = (ret__187228[subidx__187229] = node_to_insert__187232);

return ret__187228;
} else
{var node_to_insert__187234 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___187235 = (ret__187228[subidx__187229] = node_to_insert__187234);

return ret__187228;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____187236 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____187236))
{return (i < pv.cnt);
} else
{return and__3546__auto____187236;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__187237 = pv.root;
var level__187238 = pv.shift;

while(true){
if(cljs.core.truth_((level__187238 > 0)))
{{
var G__187239 = (node__187237[((i >> level__187238) & 31)]);
var G__187240 = (level__187238 - 5);
node__187237 = G__187239;
level__187238 = G__187240;
continue;
}
} else
{return node__187237;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__187241 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__187241[(i & 31)] = val);
return ret__187241;
} else
{var subidx__187242 = ((i >> level) & 31);
var ___187243 = (ret__187241[subidx__187242] = do_assoc.call(null,pv,(level - 5),(node[subidx__187242]),i,val));

return ret__187241;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__187244 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__187245 = pop_tail.call(null,pv,(level - 5),(node[subidx__187244]));

if(cljs.core.truth_((function (){var and__3546__auto____187246 = (new_child__187245 === null);

if(cljs.core.truth_(and__3546__auto____187246))
{return (subidx__187244 === 0);
} else
{return and__3546__auto____187246;
}
})()))
{return null;
} else
{var ret__187247 = cljs.core.aclone.call(null,node);
var ___187248 = (ret__187247[subidx__187244] = new_child__187245);

return ret__187247;
}
} else
{if(cljs.core.truth_((subidx__187244 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__187249 = cljs.core.aclone.call(null,node);
var ___187250 = (ret__187249[subidx__187244] = null);

return ret__187249;
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
var this__187251 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__187291 = null;
var G__187291__187292 = (function (coll,k){
var this__187252 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__187291__187293 = (function (coll,k,not_found){
var this__187253 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__187291 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__187291__187292.call(this,coll,k);
case  3 :
return G__187291__187293.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187291;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__187254 = this;
if(cljs.core.truth_((function (){var and__3546__auto____187255 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____187255))
{return (k < this__187254.cnt);
} else
{return and__3546__auto____187255;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__187256 = cljs.core.aclone.call(null,this__187254.tail);

(new_tail__187256[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__187254.meta,this__187254.cnt,this__187254.shift,this__187254.root,new_tail__187256));
} else
{return (new cljs.core.PersistentVector(this__187254.meta,this__187254.cnt,this__187254.shift,cljs.core.do_assoc.call(null,coll,this__187254.shift,this__187254.root,k,v),this__187254.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__187254.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__187254.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__187295 = null;
var G__187295__187296 = (function (tsym187257,k){
var this__187259 = this;
var tsym187257__187260 = this;

var coll__187261 = tsym187257__187260;

return cljs.core._lookup.call(null,coll__187261,k);
});
var G__187295__187297 = (function (tsym187258,k,not_found){
var this__187262 = this;
var tsym187258__187263 = this;

var coll__187264 = tsym187258__187263;

return cljs.core._lookup.call(null,coll__187264,k,not_found);
});
G__187295 = function(tsym187258,k,not_found){
switch(arguments.length){
case  2 :
return G__187295__187296.call(this,tsym187258,k);
case  3 :
return G__187295__187297.call(this,tsym187258,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187295;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__187265 = this;
if(cljs.core.truth_(((this__187265.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__187266 = cljs.core.aclone.call(null,this__187265.tail);

new_tail__187266.push(o);
return (new cljs.core.PersistentVector(this__187265.meta,(this__187265.cnt + 1),this__187265.shift,this__187265.root,new_tail__187266));
} else
{var root_overflow_QMARK___187267 = ((this__187265.cnt >> 5) > (1 << this__187265.shift));
var new_shift__187268 = (cljs.core.truth_(root_overflow_QMARK___187267)?(this__187265.shift + 5):this__187265.shift);
var new_root__187270 = (cljs.core.truth_(root_overflow_QMARK___187267)?(function (){var n_r__187269 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__187269[0] = this__187265.root);
(n_r__187269[1] = cljs.core.new_path.call(null,this__187265.shift,this__187265.tail));
return n_r__187269;
})():cljs.core.push_tail.call(null,coll,this__187265.shift,this__187265.root,this__187265.tail));

return (new cljs.core.PersistentVector(this__187265.meta,(this__187265.cnt + 1),new_shift__187268,new_root__187270,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__187299 = null;
var G__187299__187300 = (function (v,f){
var this__187271 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__187299__187301 = (function (v,f,start){
var this__187272 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__187299 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__187299__187300.call(this,v,f);
case  3 :
return G__187299__187301.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187299;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__187273 = this;
if(cljs.core.truth_((this__187273.cnt > 0)))
{var vector_seq__187274 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__187273.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__187274.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__187275 = this;
return this__187275.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__187276 = this;
if(cljs.core.truth_((this__187276.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__187276.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__187277 = this;
if(cljs.core.truth_((this__187277.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__187277.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__187277.meta);
} else
{if(cljs.core.truth_((1 < (this__187277.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__187277.meta,(this__187277.cnt - 1),this__187277.shift,this__187277.root,cljs.core.aclone.call(null,this__187277.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__187278 = cljs.core.array_for.call(null,coll,(this__187277.cnt - 2));
var nr__187279 = cljs.core.pop_tail.call(null,this__187277.shift,this__187277.root);
var new_root__187280 = (cljs.core.truth_((nr__187279 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__187279);
var cnt_1__187281 = (this__187277.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____187282 = (5 < this__187277.shift);

if(cljs.core.truth_(and__3546__auto____187282))
{return ((new_root__187280[1]) === null);
} else
{return and__3546__auto____187282;
}
})()))
{return (new cljs.core.PersistentVector(this__187277.meta,cnt_1__187281,(this__187277.shift - 5),(new_root__187280[0]),new_tail__187278));
} else
{return (new cljs.core.PersistentVector(this__187277.meta,cnt_1__187281,this__187277.shift,new_root__187280,new_tail__187278));
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
var this__187283 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__187284 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__187285 = this;
return (new cljs.core.PersistentVector(meta,this__187285.cnt,this__187285.shift,this__187285.root,this__187285.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__187286 = this;
return this__187286.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__187303 = null;
var G__187303__187304 = (function (coll,n){
var this__187287 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__187303__187305 = (function (coll,n,not_found){
var this__187288 = this;
if(cljs.core.truth_((function (){var and__3546__auto____187289 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____187289))
{return (n < this__187288.cnt);
} else
{return and__3546__auto____187289;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__187303 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__187303__187304.call(this,coll,n);
case  3 :
return G__187303__187305.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187303;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__187290 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__187290.meta);
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
vector.cljs$lang$applyTo = (function (arglist__187307){
var args = cljs.core.seq( arglist__187307 );;
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
var this__187308 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__187336 = null;
var G__187336__187337 = (function (coll,k){
var this__187309 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__187336__187338 = (function (coll,k,not_found){
var this__187310 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__187336 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__187336__187337.call(this,coll,k);
case  3 :
return G__187336__187338.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187336;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__187311 = this;
var v_pos__187312 = (this__187311.start + key);

return (new cljs.core.Subvec(this__187311.meta,cljs.core._assoc.call(null,this__187311.v,v_pos__187312,val),this__187311.start,((this__187311.end > (v_pos__187312 + 1)) ? this__187311.end : (v_pos__187312 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__187340 = null;
var G__187340__187341 = (function (tsym187313,k){
var this__187315 = this;
var tsym187313__187316 = this;

var coll__187317 = tsym187313__187316;

return cljs.core._lookup.call(null,coll__187317,k);
});
var G__187340__187342 = (function (tsym187314,k,not_found){
var this__187318 = this;
var tsym187314__187319 = this;

var coll__187320 = tsym187314__187319;

return cljs.core._lookup.call(null,coll__187320,k,not_found);
});
G__187340 = function(tsym187314,k,not_found){
switch(arguments.length){
case  2 :
return G__187340__187341.call(this,tsym187314,k);
case  3 :
return G__187340__187342.call(this,tsym187314,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187340;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__187321 = this;
return (new cljs.core.Subvec(this__187321.meta,cljs.core._assoc_n.call(null,this__187321.v,this__187321.end,o),this__187321.start,(this__187321.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__187344 = null;
var G__187344__187345 = (function (coll,f){
var this__187322 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__187344__187346 = (function (coll,f,start){
var this__187323 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__187344 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__187344__187345.call(this,coll,f);
case  3 :
return G__187344__187346.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187344;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__187324 = this;
var subvec_seq__187325 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__187324.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__187324.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__187325.call(null,this__187324.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__187326 = this;
return (this__187326.end - this__187326.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__187327 = this;
return cljs.core._nth.call(null,this__187327.v,(this__187327.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__187328 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__187328.start,this__187328.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__187328.meta,this__187328.v,this__187328.start,(this__187328.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__187329 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__187330 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__187331 = this;
return (new cljs.core.Subvec(meta,this__187331.v,this__187331.start,this__187331.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__187332 = this;
return this__187332.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__187348 = null;
var G__187348__187349 = (function (coll,n){
var this__187333 = this;
return cljs.core._nth.call(null,this__187333.v,(this__187333.start + n));
});
var G__187348__187350 = (function (coll,n,not_found){
var this__187334 = this;
return cljs.core._nth.call(null,this__187334.v,(this__187334.start + n),not_found);
});
G__187348 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__187348__187349.call(this,coll,n);
case  3 :
return G__187348__187350.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187348;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__187335 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__187335.meta);
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
var subvec__187352 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__187353 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__187352.call(this,v,start);
case  3 :
return subvec__187353.call(this,v,start,end);
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
var this__187355 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__187356 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__187357 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__187358 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__187358.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__187359 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__187360 = this;
return cljs.core._first.call(null,this__187360.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__187361 = this;
var temp__3695__auto____187362 = cljs.core.next.call(null,this__187361.front);

if(cljs.core.truth_(temp__3695__auto____187362))
{var f1__187363 = temp__3695__auto____187362;

return (new cljs.core.PersistentQueueSeq(this__187361.meta,f1__187363,this__187361.rear));
} else
{if(cljs.core.truth_((this__187361.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__187361.meta,this__187361.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__187364 = this;
return this__187364.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__187365 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__187365.front,this__187365.rear));
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
var this__187366 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__187367 = this;
if(cljs.core.truth_(this__187367.front))
{return (new cljs.core.PersistentQueue(this__187367.meta,(this__187367.count + 1),this__187367.front,cljs.core.conj.call(null,(function (){var or__3548__auto____187368 = this__187367.rear;

if(cljs.core.truth_(or__3548__auto____187368))
{return or__3548__auto____187368;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__187367.meta,(this__187367.count + 1),cljs.core.conj.call(null,this__187367.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__187369 = this;
var rear__187370 = cljs.core.seq.call(null,this__187369.rear);

if(cljs.core.truth_((function (){var or__3548__auto____187371 = this__187369.front;

if(cljs.core.truth_(or__3548__auto____187371))
{return or__3548__auto____187371;
} else
{return rear__187370;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__187369.front,cljs.core.seq.call(null,rear__187370)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__187372 = this;
return this__187372.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__187373 = this;
return cljs.core._first.call(null,this__187373.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__187374 = this;
if(cljs.core.truth_(this__187374.front))
{var temp__3695__auto____187375 = cljs.core.next.call(null,this__187374.front);

if(cljs.core.truth_(temp__3695__auto____187375))
{var f1__187376 = temp__3695__auto____187375;

return (new cljs.core.PersistentQueue(this__187374.meta,(this__187374.count - 1),f1__187376,this__187374.rear));
} else
{return (new cljs.core.PersistentQueue(this__187374.meta,(this__187374.count - 1),cljs.core.seq.call(null,this__187374.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__187377 = this;
return cljs.core.first.call(null,this__187377.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__187378 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__187379 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__187380 = this;
return (new cljs.core.PersistentQueue(meta,this__187380.count,this__187380.front,this__187380.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__187381 = this;
return this__187381.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__187382 = this;
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
var this__187383 = this;
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
var len__187384 = array.length;

var i__187385 = 0;

while(true){
if(cljs.core.truth_((i__187385 < len__187384)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__187385]))))
{return i__187385;
} else
{{
var G__187386 = (i__187385 + incr);
i__187385 = G__187386;
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
var obj_map_contains_key_QMARK___187388 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___187389 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____187387 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____187387))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____187387;
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
return obj_map_contains_key_QMARK___187388.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___187389.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__187392 = cljs.core.hash.call(null,a);
var b__187393 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__187392 < b__187393)))
{return -1;
} else
{if(cljs.core.truth_((a__187392 > b__187393)))
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
var this__187394 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__187421 = null;
var G__187421__187422 = (function (coll,k){
var this__187395 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__187421__187423 = (function (coll,k,not_found){
var this__187396 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__187396.strobj,(this__187396.strobj[k]),not_found);
});
G__187421 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__187421__187422.call(this,coll,k);
case  3 :
return G__187421__187423.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187421;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__187397 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__187398 = goog.object.clone.call(null,this__187397.strobj);
var overwrite_QMARK___187399 = new_strobj__187398.hasOwnProperty(k);

(new_strobj__187398[k] = v);
if(cljs.core.truth_(overwrite_QMARK___187399))
{return (new cljs.core.ObjMap(this__187397.meta,this__187397.keys,new_strobj__187398));
} else
{var new_keys__187400 = cljs.core.aclone.call(null,this__187397.keys);

new_keys__187400.push(k);
return (new cljs.core.ObjMap(this__187397.meta,new_keys__187400,new_strobj__187398));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__187397.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__187401 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__187401.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__187425 = null;
var G__187425__187426 = (function (tsym187402,k){
var this__187404 = this;
var tsym187402__187405 = this;

var coll__187406 = tsym187402__187405;

return cljs.core._lookup.call(null,coll__187406,k);
});
var G__187425__187427 = (function (tsym187403,k,not_found){
var this__187407 = this;
var tsym187403__187408 = this;

var coll__187409 = tsym187403__187408;

return cljs.core._lookup.call(null,coll__187409,k,not_found);
});
G__187425 = function(tsym187403,k,not_found){
switch(arguments.length){
case  2 :
return G__187425__187426.call(this,tsym187403,k);
case  3 :
return G__187425__187427.call(this,tsym187403,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187425;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__187410 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__187411 = this;
if(cljs.core.truth_((this__187411.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__187391_SHARP_){
return cljs.core.vector.call(null,p1__187391_SHARP_,(this__187411.strobj[p1__187391_SHARP_]));
}),this__187411.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__187412 = this;
return this__187412.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__187413 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__187414 = this;
return (new cljs.core.ObjMap(meta,this__187414.keys,this__187414.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__187415 = this;
return this__187415.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__187416 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__187416.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__187417 = this;
if(cljs.core.truth_((function (){var and__3546__auto____187418 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____187418))
{return this__187417.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____187418;
}
})()))
{var new_keys__187419 = cljs.core.aclone.call(null,this__187417.keys);
var new_strobj__187420 = goog.object.clone.call(null,this__187417.strobj);

new_keys__187419.splice(cljs.core.scan_array.call(null,1,k,new_keys__187419),1);
cljs.core.js_delete.call(null,new_strobj__187420,k);
return (new cljs.core.ObjMap(this__187417.meta,new_keys__187419,new_strobj__187420));
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
var this__187430 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__187468 = null;
var G__187468__187469 = (function (coll,k){
var this__187431 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__187468__187470 = (function (coll,k,not_found){
var this__187432 = this;
var bucket__187433 = (this__187432.hashobj[cljs.core.hash.call(null,k)]);
var i__187434 = (cljs.core.truth_(bucket__187433)?cljs.core.scan_array.call(null,2,k,bucket__187433):null);

if(cljs.core.truth_(i__187434))
{return (bucket__187433[(i__187434 + 1)]);
} else
{return not_found;
}
});
G__187468 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__187468__187469.call(this,coll,k);
case  3 :
return G__187468__187470.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187468;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__187435 = this;
var h__187436 = cljs.core.hash.call(null,k);
var bucket__187437 = (this__187435.hashobj[h__187436]);

if(cljs.core.truth_(bucket__187437))
{var new_bucket__187438 = cljs.core.aclone.call(null,bucket__187437);
var new_hashobj__187439 = goog.object.clone.call(null,this__187435.hashobj);

(new_hashobj__187439[h__187436] = new_bucket__187438);
var temp__3695__auto____187440 = cljs.core.scan_array.call(null,2,k,new_bucket__187438);

if(cljs.core.truth_(temp__3695__auto____187440))
{var i__187441 = temp__3695__auto____187440;

(new_bucket__187438[(i__187441 + 1)] = v);
return (new cljs.core.HashMap(this__187435.meta,this__187435.count,new_hashobj__187439));
} else
{new_bucket__187438.push(k,v);
return (new cljs.core.HashMap(this__187435.meta,(this__187435.count + 1),new_hashobj__187439));
}
} else
{var new_hashobj__187442 = goog.object.clone.call(null,this__187435.hashobj);

(new_hashobj__187442[h__187436] = [k,v]);
return (new cljs.core.HashMap(this__187435.meta,(this__187435.count + 1),new_hashobj__187442));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__187443 = this;
var bucket__187444 = (this__187443.hashobj[cljs.core.hash.call(null,k)]);
var i__187445 = (cljs.core.truth_(bucket__187444)?cljs.core.scan_array.call(null,2,k,bucket__187444):null);

if(cljs.core.truth_(i__187445))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__187472 = null;
var G__187472__187473 = (function (tsym187446,k){
var this__187448 = this;
var tsym187446__187449 = this;

var coll__187450 = tsym187446__187449;

return cljs.core._lookup.call(null,coll__187450,k);
});
var G__187472__187474 = (function (tsym187447,k,not_found){
var this__187451 = this;
var tsym187447__187452 = this;

var coll__187453 = tsym187447__187452;

return cljs.core._lookup.call(null,coll__187453,k,not_found);
});
G__187472 = function(tsym187447,k,not_found){
switch(arguments.length){
case  2 :
return G__187472__187473.call(this,tsym187447,k);
case  3 :
return G__187472__187474.call(this,tsym187447,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187472;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__187454 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__187455 = this;
if(cljs.core.truth_((this__187455.count > 0)))
{var hashes__187456 = cljs.core.js_keys.call(null,this__187455.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__187429_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__187455.hashobj[p1__187429_SHARP_])));
}),hashes__187456);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__187457 = this;
return this__187457.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__187458 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__187459 = this;
return (new cljs.core.HashMap(meta,this__187459.count,this__187459.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__187460 = this;
return this__187460.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__187461 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__187461.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__187462 = this;
var h__187463 = cljs.core.hash.call(null,k);
var bucket__187464 = (this__187462.hashobj[h__187463]);
var i__187465 = (cljs.core.truth_(bucket__187464)?cljs.core.scan_array.call(null,2,k,bucket__187464):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__187465)))
{return coll;
} else
{var new_hashobj__187466 = goog.object.clone.call(null,this__187462.hashobj);

if(cljs.core.truth_((3 > bucket__187464.length)))
{cljs.core.js_delete.call(null,new_hashobj__187466,h__187463);
} else
{var new_bucket__187467 = cljs.core.aclone.call(null,bucket__187464);

new_bucket__187467.splice(i__187465,2);
(new_hashobj__187466[h__187463] = new_bucket__187467);
}
return (new cljs.core.HashMap(this__187462.meta,(this__187462.count - 1),new_hashobj__187466));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__187476 = ks.length;

var i__187477 = 0;
var out__187478 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__187477 < len__187476)))
{{
var G__187479 = (i__187477 + 1);
var G__187480 = cljs.core.assoc.call(null,out__187478,(ks[i__187477]),(vs[i__187477]));
i__187477 = G__187479;
out__187478 = G__187480;
continue;
}
} else
{return out__187478;
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
var in$__187481 = cljs.core.seq.call(null,keyvals);
var out__187482 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__187481))
{{
var G__187483 = cljs.core.nnext.call(null,in$__187481);
var G__187484 = cljs.core.assoc.call(null,out__187482,cljs.core.first.call(null,in$__187481),cljs.core.second.call(null,in$__187481));
in$__187481 = G__187483;
out__187482 = G__187484;
continue;
}
} else
{return out__187482;
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
hash_map.cljs$lang$applyTo = (function (arglist__187485){
var keyvals = cljs.core.seq( arglist__187485 );;
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
{return cljs.core.reduce.call(null,(function (p1__187486_SHARP_,p2__187487_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____187488 = p1__187486_SHARP_;

if(cljs.core.truth_(or__3548__auto____187488))
{return or__3548__auto____187488;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__187487_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__187489){
var maps = cljs.core.seq( arglist__187489 );;
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
{var merge_entry__187492 = (function (m,e){
var k__187490 = cljs.core.first.call(null,e);
var v__187491 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__187490)))
{return cljs.core.assoc.call(null,m,k__187490,f.call(null,cljs.core.get.call(null,m,k__187490),v__187491));
} else
{return cljs.core.assoc.call(null,m,k__187490,v__187491);
}
});
var merge2__187494 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__187492,(function (){var or__3548__auto____187493 = m1;

if(cljs.core.truth_(or__3548__auto____187493))
{return or__3548__auto____187493;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__187494,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__187495){
var f = cljs.core.first(arglist__187495);
var maps = cljs.core.rest(arglist__187495);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__187497 = cljs.core.ObjMap.fromObject([],{});
var keys__187498 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__187498))
{var key__187499 = cljs.core.first.call(null,keys__187498);
var entry__187500 = cljs.core.get.call(null,map,key__187499,"\uFDD0'user/not-found");

{
var G__187501 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__187500,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__187497,key__187499,entry__187500):ret__187497);
var G__187502 = cljs.core.next.call(null,keys__187498);
ret__187497 = G__187501;
keys__187498 = G__187502;
continue;
}
} else
{return ret__187497;
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
var this__187503 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__187524 = null;
var G__187524__187525 = (function (coll,v){
var this__187504 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__187524__187526 = (function (coll,v,not_found){
var this__187505 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__187505.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__187524 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__187524__187525.call(this,coll,v);
case  3 :
return G__187524__187526.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187524;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__187528 = null;
var G__187528__187529 = (function (tsym187506,k){
var this__187508 = this;
var tsym187506__187509 = this;

var coll__187510 = tsym187506__187509;

return cljs.core._lookup.call(null,coll__187510,k);
});
var G__187528__187530 = (function (tsym187507,k,not_found){
var this__187511 = this;
var tsym187507__187512 = this;

var coll__187513 = tsym187507__187512;

return cljs.core._lookup.call(null,coll__187513,k,not_found);
});
G__187528 = function(tsym187507,k,not_found){
switch(arguments.length){
case  2 :
return G__187528__187529.call(this,tsym187507,k);
case  3 :
return G__187528__187530.call(this,tsym187507,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187528;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__187514 = this;
return (new cljs.core.Set(this__187514.meta,cljs.core.assoc.call(null,this__187514.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__187515 = this;
return cljs.core.keys.call(null,this__187515.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__187516 = this;
return (new cljs.core.Set(this__187516.meta,cljs.core.dissoc.call(null,this__187516.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__187517 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__187518 = this;
var and__3546__auto____187519 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____187519))
{var and__3546__auto____187520 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____187520))
{return cljs.core.every_QMARK_.call(null,(function (p1__187496_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__187496_SHARP_);
}),other);
} else
{return and__3546__auto____187520;
}
} else
{return and__3546__auto____187519;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__187521 = this;
return (new cljs.core.Set(meta,this__187521.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__187522 = this;
return this__187522.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__187523 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__187523.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__187533 = cljs.core.seq.call(null,coll);
var out__187534 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__187533))))
{{
var G__187535 = cljs.core.rest.call(null,in$__187533);
var G__187536 = cljs.core.conj.call(null,out__187534,cljs.core.first.call(null,in$__187533));
in$__187533 = G__187535;
out__187534 = G__187536;
continue;
}
} else
{return out__187534;
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
{var n__187537 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____187538 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____187538))
{var e__187539 = temp__3695__auto____187538;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__187539));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__187537,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__187532_SHARP_){
var temp__3695__auto____187540 = cljs.core.find.call(null,smap,p1__187532_SHARP_);

if(cljs.core.truth_(temp__3695__auto____187540))
{var e__187541 = temp__3695__auto____187540;

return cljs.core.second.call(null,e__187541);
} else
{return p1__187532_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__187549 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__187542,seen){
while(true){
var vec__187543__187544 = p__187542;
var f__187545 = cljs.core.nth.call(null,vec__187543__187544,0,null);
var xs__187546 = vec__187543__187544;

var temp__3698__auto____187547 = cljs.core.seq.call(null,xs__187546);

if(cljs.core.truth_(temp__3698__auto____187547))
{var s__187548 = temp__3698__auto____187547;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__187545)))
{{
var G__187550 = cljs.core.rest.call(null,s__187548);
var G__187551 = seen;
p__187542 = G__187550;
seen = G__187551;
continue;
}
} else
{return cljs.core.cons.call(null,f__187545,step.call(null,cljs.core.rest.call(null,s__187548),cljs.core.conj.call(null,seen,f__187545)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__187549.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__187552 = cljs.core.PersistentVector.fromArray([]);
var s__187553 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__187553)))
{{
var G__187554 = cljs.core.conj.call(null,ret__187552,cljs.core.first.call(null,s__187553));
var G__187555 = cljs.core.next.call(null,s__187553);
ret__187552 = G__187554;
s__187553 = G__187555;
continue;
}
} else
{return cljs.core.seq.call(null,ret__187552);
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
{if(cljs.core.truth_((function (){var or__3548__auto____187556 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____187556))
{return or__3548__auto____187556;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__187557 = x.lastIndexOf("/");

if(cljs.core.truth_((i__187557 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__187557 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____187558 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____187558))
{return or__3548__auto____187558;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__187559 = x.lastIndexOf("/");

if(cljs.core.truth_((i__187559 > -1)))
{return cljs.core.subs.call(null,x,2,i__187559);
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
var map__187562 = cljs.core.ObjMap.fromObject([],{});
var ks__187563 = cljs.core.seq.call(null,keys);
var vs__187564 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____187565 = ks__187563;

if(cljs.core.truth_(and__3546__auto____187565))
{return vs__187564;
} else
{return and__3546__auto____187565;
}
})()))
{{
var G__187566 = cljs.core.assoc.call(null,map__187562,cljs.core.first.call(null,ks__187563),cljs.core.first.call(null,vs__187564));
var G__187567 = cljs.core.next.call(null,ks__187563);
var G__187568 = cljs.core.next.call(null,vs__187564);
map__187562 = G__187566;
ks__187563 = G__187567;
vs__187564 = G__187568;
continue;
}
} else
{return map__187562;
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
var max_key__187571 = (function (k,x){
return x;
});
var max_key__187572 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__187573 = (function() { 
var G__187575__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__187560_SHARP_,p2__187561_SHARP_){
return max_key.call(null,k,p1__187560_SHARP_,p2__187561_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__187575 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__187575__delegate.call(this, k, x, y, more);
};
G__187575.cljs$lang$maxFixedArity = 3;
G__187575.cljs$lang$applyTo = (function (arglist__187576){
var k = cljs.core.first(arglist__187576);
var x = cljs.core.first(cljs.core.next(arglist__187576));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187576)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__187576)));
return G__187575__delegate.call(this, k, x, y, more);
});
return G__187575;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__187571.call(this,k,x);
case  3 :
return max_key__187572.call(this,k,x,y);
default:
return max_key__187573.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__187573.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__187577 = (function (k,x){
return x;
});
var min_key__187578 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__187579 = (function() { 
var G__187581__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__187569_SHARP_,p2__187570_SHARP_){
return min_key.call(null,k,p1__187569_SHARP_,p2__187570_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__187581 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__187581__delegate.call(this, k, x, y, more);
};
G__187581.cljs$lang$maxFixedArity = 3;
G__187581.cljs$lang$applyTo = (function (arglist__187582){
var k = cljs.core.first(arglist__187582);
var x = cljs.core.first(cljs.core.next(arglist__187582));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187582)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__187582)));
return G__187581__delegate.call(this, k, x, y, more);
});
return G__187581;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__187577.call(this,k,x);
case  3 :
return min_key__187578.call(this,k,x,y);
default:
return min_key__187579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__187579.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__187585 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__187586 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____187583 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____187583))
{var s__187584 = temp__3698__auto____187583;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__187584),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__187584)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__187585.call(this,n,step);
case  3 :
return partition_all__187586.call(this,n,step,coll);
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
var temp__3698__auto____187588 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____187588))
{var s__187589 = temp__3698__auto____187588;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__187589))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__187589),take_while.call(null,pred,cljs.core.rest.call(null,s__187589)));
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
var this__187590 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__187591 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__187607 = null;
var G__187607__187608 = (function (rng,f){
var this__187592 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__187607__187609 = (function (rng,f,s){
var this__187593 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__187607 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__187607__187608.call(this,rng,f);
case  3 :
return G__187607__187609.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187607;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__187594 = this;
var comp__187595 = (cljs.core.truth_((this__187594.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__187595.call(null,this__187594.start,this__187594.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__187596 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__187596.end - this__187596.start) / this__187596.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__187597 = this;
return this__187597.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__187598 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__187598.meta,(this__187598.start + this__187598.step),this__187598.end,this__187598.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__187599 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__187600 = this;
return (new cljs.core.Range(meta,this__187600.start,this__187600.end,this__187600.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__187601 = this;
return this__187601.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__187611 = null;
var G__187611__187612 = (function (rng,n){
var this__187602 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__187602.start + (n * this__187602.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____187603 = (this__187602.start > this__187602.end);

if(cljs.core.truth_(and__3546__auto____187603))
{return cljs.core._EQ_.call(null,this__187602.step,0);
} else
{return and__3546__auto____187603;
}
})()))
{return this__187602.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__187611__187613 = (function (rng,n,not_found){
var this__187604 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__187604.start + (n * this__187604.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____187605 = (this__187604.start > this__187604.end);

if(cljs.core.truth_(and__3546__auto____187605))
{return cljs.core._EQ_.call(null,this__187604.step,0);
} else
{return and__3546__auto____187605;
}
})()))
{return this__187604.start;
} else
{return not_found;
}
}
});
G__187611 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__187611__187612.call(this,rng,n);
case  3 :
return G__187611__187613.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__187611;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__187606 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__187606.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__187615 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__187616 = (function (end){
return range.call(null,0,end,1);
});
var range__187617 = (function (start,end){
return range.call(null,start,end,1);
});
var range__187618 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__187615.call(this);
case  1 :
return range__187616.call(this,start);
case  2 :
return range__187617.call(this,start,end);
case  3 :
return range__187618.call(this,start,end,step);
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
var temp__3698__auto____187620 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____187620))
{var s__187621 = temp__3698__auto____187620;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__187621),take_nth.call(null,n,cljs.core.drop.call(null,n,s__187621)));
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
var temp__3698__auto____187623 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____187623))
{var s__187624 = temp__3698__auto____187623;

var fst__187625 = cljs.core.first.call(null,s__187624);
var fv__187626 = f.call(null,fst__187625);
var run__187627 = cljs.core.cons.call(null,fst__187625,cljs.core.take_while.call(null,(function (p1__187622_SHARP_){
return cljs.core._EQ_.call(null,fv__187626,f.call(null,p1__187622_SHARP_));
}),cljs.core.next.call(null,s__187624)));

return cljs.core.cons.call(null,run__187627,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__187627),s__187624))));
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
var reductions__187642 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____187638 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____187638))
{var s__187639 = temp__3695__auto____187638;

return reductions.call(null,f,cljs.core.first.call(null,s__187639),cljs.core.rest.call(null,s__187639));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__187643 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____187640 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____187640))
{var s__187641 = temp__3698__auto____187640;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__187641)),cljs.core.rest.call(null,s__187641));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__187642.call(this,f,init);
case  3 :
return reductions__187643.call(this,f,init,coll);
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
var juxt__187646 = (function (f){
return (function() {
var G__187651 = null;
var G__187651__187652 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__187651__187653 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__187651__187654 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__187651__187655 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__187651__187656 = (function() { 
var G__187658__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__187658 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__187658__delegate.call(this, x, y, z, args);
};
G__187658.cljs$lang$maxFixedArity = 3;
G__187658.cljs$lang$applyTo = (function (arglist__187659){
var x = cljs.core.first(arglist__187659);
var y = cljs.core.first(cljs.core.next(arglist__187659));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187659)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__187659)));
return G__187658__delegate.call(this, x, y, z, args);
});
return G__187658;
})()
;
G__187651 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__187651__187652.call(this);
case  1 :
return G__187651__187653.call(this,x);
case  2 :
return G__187651__187654.call(this,x,y);
case  3 :
return G__187651__187655.call(this,x,y,z);
default:
return G__187651__187656.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__187651.cljs$lang$maxFixedArity = 3;
G__187651.cljs$lang$applyTo = G__187651__187656.cljs$lang$applyTo;
return G__187651;
})()
});
var juxt__187647 = (function (f,g){
return (function() {
var G__187660 = null;
var G__187660__187661 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__187660__187662 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__187660__187663 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__187660__187664 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__187660__187665 = (function() { 
var G__187667__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__187667 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__187667__delegate.call(this, x, y, z, args);
};
G__187667.cljs$lang$maxFixedArity = 3;
G__187667.cljs$lang$applyTo = (function (arglist__187668){
var x = cljs.core.first(arglist__187668);
var y = cljs.core.first(cljs.core.next(arglist__187668));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187668)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__187668)));
return G__187667__delegate.call(this, x, y, z, args);
});
return G__187667;
})()
;
G__187660 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__187660__187661.call(this);
case  1 :
return G__187660__187662.call(this,x);
case  2 :
return G__187660__187663.call(this,x,y);
case  3 :
return G__187660__187664.call(this,x,y,z);
default:
return G__187660__187665.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__187660.cljs$lang$maxFixedArity = 3;
G__187660.cljs$lang$applyTo = G__187660__187665.cljs$lang$applyTo;
return G__187660;
})()
});
var juxt__187648 = (function (f,g,h){
return (function() {
var G__187669 = null;
var G__187669__187670 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__187669__187671 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__187669__187672 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__187669__187673 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__187669__187674 = (function() { 
var G__187676__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__187676 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__187676__delegate.call(this, x, y, z, args);
};
G__187676.cljs$lang$maxFixedArity = 3;
G__187676.cljs$lang$applyTo = (function (arglist__187677){
var x = cljs.core.first(arglist__187677);
var y = cljs.core.first(cljs.core.next(arglist__187677));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187677)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__187677)));
return G__187676__delegate.call(this, x, y, z, args);
});
return G__187676;
})()
;
G__187669 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__187669__187670.call(this);
case  1 :
return G__187669__187671.call(this,x);
case  2 :
return G__187669__187672.call(this,x,y);
case  3 :
return G__187669__187673.call(this,x,y,z);
default:
return G__187669__187674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__187669.cljs$lang$maxFixedArity = 3;
G__187669.cljs$lang$applyTo = G__187669__187674.cljs$lang$applyTo;
return G__187669;
})()
});
var juxt__187649 = (function() { 
var G__187678__delegate = function (f,g,h,fs){
var fs__187645 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__187679 = null;
var G__187679__187680 = (function (){
return cljs.core.reduce.call(null,(function (p1__187628_SHARP_,p2__187629_SHARP_){
return cljs.core.conj.call(null,p1__187628_SHARP_,p2__187629_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__187645);
});
var G__187679__187681 = (function (x){
return cljs.core.reduce.call(null,(function (p1__187630_SHARP_,p2__187631_SHARP_){
return cljs.core.conj.call(null,p1__187630_SHARP_,p2__187631_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__187645);
});
var G__187679__187682 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__187632_SHARP_,p2__187633_SHARP_){
return cljs.core.conj.call(null,p1__187632_SHARP_,p2__187633_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__187645);
});
var G__187679__187683 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__187634_SHARP_,p2__187635_SHARP_){
return cljs.core.conj.call(null,p1__187634_SHARP_,p2__187635_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__187645);
});
var G__187679__187684 = (function() { 
var G__187686__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__187636_SHARP_,p2__187637_SHARP_){
return cljs.core.conj.call(null,p1__187636_SHARP_,cljs.core.apply.call(null,p2__187637_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__187645);
};
var G__187686 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__187686__delegate.call(this, x, y, z, args);
};
G__187686.cljs$lang$maxFixedArity = 3;
G__187686.cljs$lang$applyTo = (function (arglist__187687){
var x = cljs.core.first(arglist__187687);
var y = cljs.core.first(cljs.core.next(arglist__187687));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187687)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__187687)));
return G__187686__delegate.call(this, x, y, z, args);
});
return G__187686;
})()
;
G__187679 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__187679__187680.call(this);
case  1 :
return G__187679__187681.call(this,x);
case  2 :
return G__187679__187682.call(this,x,y);
case  3 :
return G__187679__187683.call(this,x,y,z);
default:
return G__187679__187684.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__187679.cljs$lang$maxFixedArity = 3;
G__187679.cljs$lang$applyTo = G__187679__187684.cljs$lang$applyTo;
return G__187679;
})()
};
var G__187678 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__187678__delegate.call(this, f, g, h, fs);
};
G__187678.cljs$lang$maxFixedArity = 3;
G__187678.cljs$lang$applyTo = (function (arglist__187688){
var f = cljs.core.first(arglist__187688);
var g = cljs.core.first(cljs.core.next(arglist__187688));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187688)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__187688)));
return G__187678__delegate.call(this, f, g, h, fs);
});
return G__187678;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__187646.call(this,f);
case  2 :
return juxt__187647.call(this,f,g);
case  3 :
return juxt__187648.call(this,f,g,h);
default:
return juxt__187649.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__187649.cljs$lang$applyTo;
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
var dorun__187690 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__187693 = cljs.core.next.call(null,coll);
coll = G__187693;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__187691 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____187689 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____187689))
{return (n > 0);
} else
{return and__3546__auto____187689;
}
})()))
{{
var G__187694 = (n - 1);
var G__187695 = cljs.core.next.call(null,coll);
n = G__187694;
coll = G__187695;
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
return dorun__187690.call(this,n);
case  2 :
return dorun__187691.call(this,n,coll);
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
var doall__187696 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__187697 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__187696.call(this,n);
case  2 :
return doall__187697.call(this,n,coll);
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
var matches__187699 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__187699),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__187699),1)))
{return cljs.core.first.call(null,matches__187699);
} else
{return cljs.core.vec.call(null,matches__187699);
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
var matches__187700 = re.exec(s);

if(cljs.core.truth_((matches__187700 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__187700),1)))
{return cljs.core.first.call(null,matches__187700);
} else
{return cljs.core.vec.call(null,matches__187700);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__187701 = cljs.core.re_find.call(null,re,s);
var match_idx__187702 = s.search(re);
var match_str__187703 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__187701))?cljs.core.first.call(null,match_data__187701):match_data__187701);
var post_match__187704 = cljs.core.subs.call(null,s,(match_idx__187702 + cljs.core.count.call(null,match_str__187703)));

if(cljs.core.truth_(match_data__187701))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__187701,re_seq.call(null,re,post_match__187704));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__187706__187707 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___187708 = cljs.core.nth.call(null,vec__187706__187707,0,null);
var flags__187709 = cljs.core.nth.call(null,vec__187706__187707,1,null);
var pattern__187710 = cljs.core.nth.call(null,vec__187706__187707,2,null);

return (new RegExp(pattern__187710,flags__187709));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__187705_SHARP_){
return print_one.call(null,p1__187705_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____187711 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____187711))
{var and__3546__auto____187715 = (function (){var x__451__auto____187712 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____187713 = x__451__auto____187712;

if(cljs.core.truth_(and__3546__auto____187713))
{var and__3546__auto____187714 = x__451__auto____187712.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____187714))
{return cljs.core.not.call(null,x__451__auto____187712.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____187714;
}
} else
{return and__3546__auto____187713;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____187712);
}
})();

if(cljs.core.truth_(and__3546__auto____187715))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____187715;
}
} else
{return and__3546__auto____187711;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____187716 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____187717 = x__451__auto____187716;

if(cljs.core.truth_(and__3546__auto____187717))
{var and__3546__auto____187718 = x__451__auto____187716.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____187718))
{return cljs.core.not.call(null,x__451__auto____187716.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____187718;
}
} else
{return and__3546__auto____187717;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____187716);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__187719 = cljs.core.first.call(null,objs);
var sb__187720 = (new goog.string.StringBuffer());

var G__187721__187722 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__187721__187722))
{var obj__187723 = cljs.core.first.call(null,G__187721__187722);
var G__187721__187724 = G__187721__187722;

while(true){
if(cljs.core.truth_((obj__187723 === first_obj__187719)))
{} else
{sb__187720.append(" ");
}
var G__187725__187726 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__187723,opts));

if(cljs.core.truth_(G__187725__187726))
{var string__187727 = cljs.core.first.call(null,G__187725__187726);
var G__187725__187728 = G__187725__187726;

while(true){
sb__187720.append(string__187727);
var temp__3698__auto____187729 = cljs.core.next.call(null,G__187725__187728);

if(cljs.core.truth_(temp__3698__auto____187729))
{var G__187725__187730 = temp__3698__auto____187729;

{
var G__187733 = cljs.core.first.call(null,G__187725__187730);
var G__187734 = G__187725__187730;
string__187727 = G__187733;
G__187725__187728 = G__187734;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____187731 = cljs.core.next.call(null,G__187721__187724);

if(cljs.core.truth_(temp__3698__auto____187731))
{var G__187721__187732 = temp__3698__auto____187731;

{
var G__187735 = cljs.core.first.call(null,G__187721__187732);
var G__187736 = G__187721__187732;
obj__187723 = G__187735;
G__187721__187724 = G__187736;
continue;
}
} else
{}
break;
}
} else
{}
return sb__187720;
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
var sb__187737 = cljs.core.pr_sb.call(null,objs,opts);

sb__187737.append("\n");
return cljs.core.str.call(null,sb__187737);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__187738 = cljs.core.first.call(null,objs);

var G__187739__187740 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__187739__187740))
{var obj__187741 = cljs.core.first.call(null,G__187739__187740);
var G__187739__187742 = G__187739__187740;

while(true){
if(cljs.core.truth_((obj__187741 === first_obj__187738)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__187743__187744 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__187741,opts));

if(cljs.core.truth_(G__187743__187744))
{var string__187745 = cljs.core.first.call(null,G__187743__187744);
var G__187743__187746 = G__187743__187744;

while(true){
cljs.core.string_print.call(null,string__187745);
var temp__3698__auto____187747 = cljs.core.next.call(null,G__187743__187746);

if(cljs.core.truth_(temp__3698__auto____187747))
{var G__187743__187748 = temp__3698__auto____187747;

{
var G__187751 = cljs.core.first.call(null,G__187743__187748);
var G__187752 = G__187743__187748;
string__187745 = G__187751;
G__187743__187746 = G__187752;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____187749 = cljs.core.next.call(null,G__187739__187742);

if(cljs.core.truth_(temp__3698__auto____187749))
{var G__187739__187750 = temp__3698__auto____187749;

{
var G__187753 = cljs.core.first.call(null,G__187739__187750);
var G__187754 = G__187739__187750;
obj__187741 = G__187753;
G__187739__187742 = G__187754;
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
pr_str.cljs$lang$applyTo = (function (arglist__187755){
var objs = cljs.core.seq( arglist__187755 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__187756){
var objs = cljs.core.seq( arglist__187756 );;
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
pr.cljs$lang$applyTo = (function (arglist__187757){
var objs = cljs.core.seq( arglist__187757 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__187758){
var objs = cljs.core.seq( arglist__187758 );;
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
print_str.cljs$lang$applyTo = (function (arglist__187759){
var objs = cljs.core.seq( arglist__187759 );;
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
println.cljs$lang$applyTo = (function (arglist__187760){
var objs = cljs.core.seq( arglist__187760 );;
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
println_str.cljs$lang$applyTo = (function (arglist__187761){
var objs = cljs.core.seq( arglist__187761 );;
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
prn.cljs$lang$applyTo = (function (arglist__187762){
var objs = cljs.core.seq( arglist__187762 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__187763 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__187763,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____187764 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____187764))
{var nspc__187765 = temp__3698__auto____187764;

return cljs.core.str.call(null,nspc__187765,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____187766 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____187766))
{var nspc__187767 = temp__3698__auto____187766;

return cljs.core.str.call(null,nspc__187767,"/");
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
var pr_pair__187768 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__187768,"{",", ","}",opts,coll);
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
var this__187769 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__187770 = this;
var G__187771__187772 = cljs.core.seq.call(null,this__187770.watches);

if(cljs.core.truth_(G__187771__187772))
{var G__187774__187776 = cljs.core.first.call(null,G__187771__187772);
var vec__187775__187777 = G__187774__187776;
var key__187778 = cljs.core.nth.call(null,vec__187775__187777,0,null);
var f__187779 = cljs.core.nth.call(null,vec__187775__187777,1,null);
var G__187771__187780 = G__187771__187772;

var G__187774__187781 = G__187774__187776;
var G__187771__187782 = G__187771__187780;

while(true){
var vec__187783__187784 = G__187774__187781;
var key__187785 = cljs.core.nth.call(null,vec__187783__187784,0,null);
var f__187786 = cljs.core.nth.call(null,vec__187783__187784,1,null);
var G__187771__187787 = G__187771__187782;

f__187786.call(null,key__187785,this$,oldval,newval);
var temp__3698__auto____187788 = cljs.core.next.call(null,G__187771__187787);

if(cljs.core.truth_(temp__3698__auto____187788))
{var G__187771__187789 = temp__3698__auto____187788;

{
var G__187796 = cljs.core.first.call(null,G__187771__187789);
var G__187797 = G__187771__187789;
G__187774__187781 = G__187796;
G__187771__187782 = G__187797;
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
var this__187790 = this;
return this$.watches = cljs.core.assoc.call(null,this__187790.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__187791 = this;
return this$.watches = cljs.core.dissoc.call(null,this__187791.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__187792 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__187792.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__187793 = this;
return this__187793.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__187794 = this;
return this__187794.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__187795 = this;
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
var atom__187804 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__187805 = (function() { 
var G__187807__delegate = function (x,p__187798){
var map__187799__187800 = p__187798;
var map__187799__187801 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__187799__187800))?cljs.core.apply.call(null,cljs.core.hash_map,map__187799__187800):map__187799__187800);
var validator__187802 = cljs.core.get.call(null,map__187799__187801,"\uFDD0'validator");
var meta__187803 = cljs.core.get.call(null,map__187799__187801,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__187803,validator__187802,null));
};
var G__187807 = function (x,var_args){
var p__187798 = null;
if (goog.isDef(var_args)) {
  p__187798 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__187807__delegate.call(this, x, p__187798);
};
G__187807.cljs$lang$maxFixedArity = 1;
G__187807.cljs$lang$applyTo = (function (arglist__187808){
var x = cljs.core.first(arglist__187808);
var p__187798 = cljs.core.rest(arglist__187808);
return G__187807__delegate.call(this, x, p__187798);
});
return G__187807;
})()
;
atom = function(x,var_args){
var p__187798 = var_args;
switch(arguments.length){
case  1 :
return atom__187804.call(this,x);
default:
return atom__187805.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__187805.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____187809 = a.validator;

if(cljs.core.truth_(temp__3698__auto____187809))
{var validate__187810 = temp__3698__auto____187809;

if(cljs.core.truth_(validate__187810.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__187811 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__187811,new_value);
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
var swap_BANG___187812 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___187813 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___187814 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___187815 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___187816 = (function() { 
var G__187818__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__187818 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__187818__delegate.call(this, a, f, x, y, z, more);
};
G__187818.cljs$lang$maxFixedArity = 5;
G__187818.cljs$lang$applyTo = (function (arglist__187819){
var a = cljs.core.first(arglist__187819);
var f = cljs.core.first(cljs.core.next(arglist__187819));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__187819)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__187819))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__187819)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__187819)))));
return G__187818__delegate.call(this, a, f, x, y, z, more);
});
return G__187818;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___187812.call(this,a,f);
case  3 :
return swap_BANG___187813.call(this,a,f,x);
case  4 :
return swap_BANG___187814.call(this,a,f,x,y);
case  5 :
return swap_BANG___187815.call(this,a,f,x,y,z);
default:
return swap_BANG___187816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___187816.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__187820){
var iref = cljs.core.first(arglist__187820);
var f = cljs.core.first(cljs.core.next(arglist__187820));
var args = cljs.core.rest(cljs.core.next(arglist__187820));
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
var gensym__187821 = (function (){
return gensym.call(null,"G__");
});
var gensym__187822 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__187821.call(this);
case  1 :
return gensym__187822.call(this,prefix_string);
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
var this__187824 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__187824.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__187825 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__187825.state,(function (p__187826){
var curr_state__187827 = p__187826;
var curr_state__187828 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__187827))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__187827):curr_state__187827);
var done__187829 = cljs.core.get.call(null,curr_state__187828,"\uFDD0'done");

if(cljs.core.truth_(done__187829))
{return curr_state__187828;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__187825.f.call(null)});
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
var map__187830__187831 = options;
var map__187830__187832 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__187830__187831))?cljs.core.apply.call(null,cljs.core.hash_map,map__187830__187831):map__187830__187831);
var keywordize_keys__187833 = cljs.core.get.call(null,map__187830__187832,"\uFDD0'keywordize-keys");
var keyfn__187834 = (cljs.core.truth_(keywordize_keys__187833)?cljs.core.keyword:cljs.core.str);
var f__187840 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____187839 = (function iter__187835(s__187836){
return (new cljs.core.LazySeq(null,false,(function (){
var s__187836__187837 = s__187836;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__187836__187837)))
{var k__187838 = cljs.core.first.call(null,s__187836__187837);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__187834.call(null,k__187838),thisfn.call(null,(x[k__187838]))]),iter__187835.call(null,cljs.core.rest.call(null,s__187836__187837)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____187839.call(null,cljs.core.js_keys.call(null,x));
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

return f__187840.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__187841){
var x = cljs.core.first(arglist__187841);
var options = cljs.core.rest(arglist__187841);
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
var mem__187842 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__187846__delegate = function (args){
var temp__3695__auto____187843 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__187842),args);

if(cljs.core.truth_(temp__3695__auto____187843))
{var v__187844 = temp__3695__auto____187843;

return v__187844;
} else
{var ret__187845 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__187842,cljs.core.assoc,args,ret__187845);
return ret__187845;
}
};
var G__187846 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__187846__delegate.call(this, args);
};
G__187846.cljs$lang$maxFixedArity = 0;
G__187846.cljs$lang$applyTo = (function (arglist__187847){
var args = cljs.core.seq( arglist__187847 );;
return G__187846__delegate.call(this, args);
});
return G__187846;
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
var trampoline__187849 = (function (f){
while(true){
var ret__187848 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__187848)))
{{
var G__187852 = ret__187848;
f = G__187852;
continue;
}
} else
{return ret__187848;
}
break;
}
});
var trampoline__187850 = (function() { 
var G__187853__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__187853 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__187853__delegate.call(this, f, args);
};
G__187853.cljs$lang$maxFixedArity = 1;
G__187853.cljs$lang$applyTo = (function (arglist__187854){
var f = cljs.core.first(arglist__187854);
var args = cljs.core.rest(arglist__187854);
return G__187853__delegate.call(this, f, args);
});
return G__187853;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__187849.call(this,f);
default:
return trampoline__187850.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__187850.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__187855 = (function (){
return rand.call(null,1);
});
var rand__187856 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__187855.call(this);
case  1 :
return rand__187856.call(this,n);
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
var k__187858 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__187858,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__187858,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___187867 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___187868 = (function (h,child,parent){
var or__3548__auto____187859 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____187859))
{return or__3548__auto____187859;
} else
{var or__3548__auto____187860 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____187860))
{return or__3548__auto____187860;
} else
{var and__3546__auto____187861 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____187861))
{var and__3546__auto____187862 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____187862))
{var and__3546__auto____187863 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____187863))
{var ret__187864 = true;
var i__187865 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____187866 = cljs.core.not.call(null,ret__187864);

if(cljs.core.truth_(or__3548__auto____187866))
{return or__3548__auto____187866;
} else
{return cljs.core._EQ_.call(null,i__187865,cljs.core.count.call(null,parent));
}
})()))
{return ret__187864;
} else
{{
var G__187870 = isa_QMARK_.call(null,h,child.call(null,i__187865),parent.call(null,i__187865));
var G__187871 = (i__187865 + 1);
ret__187864 = G__187870;
i__187865 = G__187871;
continue;
}
}
break;
}
} else
{return and__3546__auto____187863;
}
} else
{return and__3546__auto____187862;
}
} else
{return and__3546__auto____187861;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___187867.call(this,h,child);
case  3 :
return isa_QMARK___187868.call(this,h,child,parent);
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
var parents__187872 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__187873 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__187872.call(this,h);
case  2 :
return parents__187873.call(this,h,tag);
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
var ancestors__187875 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__187876 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__187875.call(this,h);
case  2 :
return ancestors__187876.call(this,h,tag);
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
var descendants__187878 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__187879 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__187878.call(this,h);
case  2 :
return descendants__187879.call(this,h,tag);
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
var derive__187889 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__187890 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__187884 = "\uFDD0'parents".call(null,h);
var td__187885 = "\uFDD0'descendants".call(null,h);
var ta__187886 = "\uFDD0'ancestors".call(null,h);
var tf__187887 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____187888 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__187884.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__187886.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__187886.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__187884,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__187887.call(null,"\uFDD0'ancestors".call(null,h),tag,td__187885,parent,ta__187886),"\uFDD0'descendants":tf__187887.call(null,"\uFDD0'descendants".call(null,h),parent,ta__187886,tag,td__187885)});
})());

if(cljs.core.truth_(or__3548__auto____187888))
{return or__3548__auto____187888;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__187889.call(this,h,tag);
case  3 :
return derive__187890.call(this,h,tag,parent);
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
var underive__187896 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__187897 = (function (h,tag,parent){
var parentMap__187892 = "\uFDD0'parents".call(null,h);
var childsParents__187893 = (cljs.core.truth_(parentMap__187892.call(null,tag))?cljs.core.disj.call(null,parentMap__187892.call(null,tag),parent):cljs.core.set([]));
var newParents__187894 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__187893))?cljs.core.assoc.call(null,parentMap__187892,tag,childsParents__187893):cljs.core.dissoc.call(null,parentMap__187892,tag));
var deriv_seq__187895 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__187881_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__187881_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__187881_SHARP_),cljs.core.second.call(null,p1__187881_SHARP_)));
}),cljs.core.seq.call(null,newParents__187894)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__187892.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__187882_SHARP_,p2__187883_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__187882_SHARP_,p2__187883_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__187895));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__187896.call(this,h,tag);
case  3 :
return underive__187897.call(this,h,tag,parent);
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
var xprefs__187899 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____187901 = (cljs.core.truth_((function (){var and__3546__auto____187900 = xprefs__187899;

if(cljs.core.truth_(and__3546__auto____187900))
{return xprefs__187899.call(null,y);
} else
{return and__3546__auto____187900;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____187901))
{return or__3548__auto____187901;
} else
{var or__3548__auto____187903 = (function (){var ps__187902 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__187902) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__187902),prefer_table)))
{} else
{}
{
var G__187906 = cljs.core.rest.call(null,ps__187902);
ps__187902 = G__187906;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____187903))
{return or__3548__auto____187903;
} else
{var or__3548__auto____187905 = (function (){var ps__187904 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__187904) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__187904),y,prefer_table)))
{} else
{}
{
var G__187907 = cljs.core.rest.call(null,ps__187904);
ps__187904 = G__187907;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____187905))
{return or__3548__auto____187905;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____187908 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____187908))
{return or__3548__auto____187908;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__187917 = cljs.core.reduce.call(null,(function (be,p__187909){
var vec__187910__187911 = p__187909;
var k__187912 = cljs.core.nth.call(null,vec__187910__187911,0,null);
var ___187913 = cljs.core.nth.call(null,vec__187910__187911,1,null);
var e__187914 = vec__187910__187911;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__187912)))
{var be2__187916 = (cljs.core.truth_((function (){var or__3548__auto____187915 = (be === null);

if(cljs.core.truth_(or__3548__auto____187915))
{return or__3548__auto____187915;
} else
{return cljs.core.dominates.call(null,k__187912,cljs.core.first.call(null,be),prefer_table);
}
})())?e__187914:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__187916),k__187912,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__187912," and ",cljs.core.first.call(null,be2__187916),", and neither is preferred")));
}
return be2__187916;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__187917))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__187917));
return cljs.core.second.call(null,best_entry__187917);
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
if(cljs.core.truth_((function (){var and__3546__auto____187918 = mf;

if(cljs.core.truth_(and__3546__auto____187918))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____187918;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____187919 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____187919))
{return or__3548__auto____187919;
} else
{var or__3548__auto____187920 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____187920))
{return or__3548__auto____187920;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____187921 = mf;

if(cljs.core.truth_(and__3546__auto____187921))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____187921;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____187922 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____187922))
{return or__3548__auto____187922;
} else
{var or__3548__auto____187923 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____187923))
{return or__3548__auto____187923;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____187924 = mf;

if(cljs.core.truth_(and__3546__auto____187924))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____187924;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____187925 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____187925))
{return or__3548__auto____187925;
} else
{var or__3548__auto____187926 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____187926))
{return or__3548__auto____187926;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____187927 = mf;

if(cljs.core.truth_(and__3546__auto____187927))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____187927;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____187928 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____187928))
{return or__3548__auto____187928;
} else
{var or__3548__auto____187929 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____187929))
{return or__3548__auto____187929;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____187930 = mf;

if(cljs.core.truth_(and__3546__auto____187930))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____187930;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____187931 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____187931))
{return or__3548__auto____187931;
} else
{var or__3548__auto____187932 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____187932))
{return or__3548__auto____187932;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____187933 = mf;

if(cljs.core.truth_(and__3546__auto____187933))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____187933;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____187934 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____187934))
{return or__3548__auto____187934;
} else
{var or__3548__auto____187935 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____187935))
{return or__3548__auto____187935;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____187936 = mf;

if(cljs.core.truth_(and__3546__auto____187936))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____187936;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____187937 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____187937))
{return or__3548__auto____187937;
} else
{var or__3548__auto____187938 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____187938))
{return or__3548__auto____187938;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____187939 = mf;

if(cljs.core.truth_(and__3546__auto____187939))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____187939;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____187940 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____187940))
{return or__3548__auto____187940;
} else
{var or__3548__auto____187941 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____187941))
{return or__3548__auto____187941;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__187942 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__187943 = cljs.core._get_method.call(null,mf,dispatch_val__187942);

if(cljs.core.truth_(target_fn__187943))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__187942)));
}
return cljs.core.apply.call(null,target_fn__187943,args);
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
var this__187944 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__187945 = this;
cljs.core.swap_BANG_.call(null,this__187945.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__187945.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__187945.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__187945.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__187946 = this;
cljs.core.swap_BANG_.call(null,this__187946.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__187946.method_cache,this__187946.method_table,this__187946.cached_hierarchy,this__187946.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__187947 = this;
cljs.core.swap_BANG_.call(null,this__187947.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__187947.method_cache,this__187947.method_table,this__187947.cached_hierarchy,this__187947.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__187948 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__187948.cached_hierarchy),cljs.core.deref.call(null,this__187948.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__187948.method_cache,this__187948.method_table,this__187948.cached_hierarchy,this__187948.hierarchy);
}
var temp__3695__auto____187949 = cljs.core.deref.call(null,this__187948.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____187949))
{var target_fn__187950 = temp__3695__auto____187949;

return target_fn__187950;
} else
{var temp__3695__auto____187951 = cljs.core.find_and_cache_best_method.call(null,this__187948.name,dispatch_val,this__187948.hierarchy,this__187948.method_table,this__187948.prefer_table,this__187948.method_cache,this__187948.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____187951))
{var target_fn__187952 = temp__3695__auto____187951;

return target_fn__187952;
} else
{return cljs.core.deref.call(null,this__187948.method_table).call(null,this__187948.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__187953 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__187953.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__187953.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__187953.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__187953.method_cache,this__187953.method_table,this__187953.cached_hierarchy,this__187953.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__187954 = this;
return cljs.core.deref.call(null,this__187954.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__187955 = this;
return cljs.core.deref.call(null,this__187955.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__187956 = this;
return cljs.core.do_dispatch.call(null,mf,this__187956.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__187957__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__187957 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__187957__delegate.call(this, _, args);
};
G__187957.cljs$lang$maxFixedArity = 1;
G__187957.cljs$lang$applyTo = (function (arglist__187958){
var _ = cljs.core.first(arglist__187958);
var args = cljs.core.rest(arglist__187958);
return G__187957__delegate.call(this, _, args);
});
return G__187957;
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
