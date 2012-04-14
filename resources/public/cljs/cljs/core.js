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
var or__3548__auto____244151 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____244151))
{return or__3548__auto____244151;
} else
{var or__3548__auto____244152 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____244152))
{return or__3548__auto____244152;
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
var _invoke__244216 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____244153 = this$;

if(cljs.core.truth_(and__3546__auto____244153))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244153;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____244154 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244154))
{return or__3548__auto____244154;
} else
{var or__3548__auto____244155 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244155))
{return or__3548__auto____244155;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__244217 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____244156 = this$;

if(cljs.core.truth_(and__3546__auto____244156))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244156;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____244157 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244157))
{return or__3548__auto____244157;
} else
{var or__3548__auto____244158 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244158))
{return or__3548__auto____244158;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__244218 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____244159 = this$;

if(cljs.core.truth_(and__3546__auto____244159))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244159;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____244160 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244160))
{return or__3548__auto____244160;
} else
{var or__3548__auto____244161 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244161))
{return or__3548__auto____244161;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__244219 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____244162 = this$;

if(cljs.core.truth_(and__3546__auto____244162))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244162;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____244163 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244163))
{return or__3548__auto____244163;
} else
{var or__3548__auto____244164 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244164))
{return or__3548__auto____244164;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__244220 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____244165 = this$;

if(cljs.core.truth_(and__3546__auto____244165))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244165;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____244166 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244166))
{return or__3548__auto____244166;
} else
{var or__3548__auto____244167 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244167))
{return or__3548__auto____244167;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__244221 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____244168 = this$;

if(cljs.core.truth_(and__3546__auto____244168))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244168;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____244169 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244169))
{return or__3548__auto____244169;
} else
{var or__3548__auto____244170 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244170))
{return or__3548__auto____244170;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__244222 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____244171 = this$;

if(cljs.core.truth_(and__3546__auto____244171))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244171;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____244172 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244172))
{return or__3548__auto____244172;
} else
{var or__3548__auto____244173 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244173))
{return or__3548__auto____244173;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__244223 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____244174 = this$;

if(cljs.core.truth_(and__3546__auto____244174))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244174;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____244175 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244175))
{return or__3548__auto____244175;
} else
{var or__3548__auto____244176 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244176))
{return or__3548__auto____244176;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__244224 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____244177 = this$;

if(cljs.core.truth_(and__3546__auto____244177))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244177;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____244178 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244178))
{return or__3548__auto____244178;
} else
{var or__3548__auto____244179 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244179))
{return or__3548__auto____244179;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__244225 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____244180 = this$;

if(cljs.core.truth_(and__3546__auto____244180))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244180;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____244181 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244181))
{return or__3548__auto____244181;
} else
{var or__3548__auto____244182 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244182))
{return or__3548__auto____244182;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__244226 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____244183 = this$;

if(cljs.core.truth_(and__3546__auto____244183))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244183;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____244184 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244184))
{return or__3548__auto____244184;
} else
{var or__3548__auto____244185 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244185))
{return or__3548__auto____244185;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__244227 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____244186 = this$;

if(cljs.core.truth_(and__3546__auto____244186))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244186;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____244187 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244187))
{return or__3548__auto____244187;
} else
{var or__3548__auto____244188 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244188))
{return or__3548__auto____244188;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__244228 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____244189 = this$;

if(cljs.core.truth_(and__3546__auto____244189))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244189;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____244190 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244190))
{return or__3548__auto____244190;
} else
{var or__3548__auto____244191 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244191))
{return or__3548__auto____244191;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__244229 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____244192 = this$;

if(cljs.core.truth_(and__3546__auto____244192))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244192;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____244193 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244193))
{return or__3548__auto____244193;
} else
{var or__3548__auto____244194 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244194))
{return or__3548__auto____244194;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__244230 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____244195 = this$;

if(cljs.core.truth_(and__3546__auto____244195))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244195;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____244196 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244196))
{return or__3548__auto____244196;
} else
{var or__3548__auto____244197 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244197))
{return or__3548__auto____244197;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__244231 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____244198 = this$;

if(cljs.core.truth_(and__3546__auto____244198))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244198;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____244199 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244199))
{return or__3548__auto____244199;
} else
{var or__3548__auto____244200 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244200))
{return or__3548__auto____244200;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__244232 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____244201 = this$;

if(cljs.core.truth_(and__3546__auto____244201))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244201;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____244202 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244202))
{return or__3548__auto____244202;
} else
{var or__3548__auto____244203 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244203))
{return or__3548__auto____244203;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__244233 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____244204 = this$;

if(cljs.core.truth_(and__3546__auto____244204))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244204;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____244205 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244205))
{return or__3548__auto____244205;
} else
{var or__3548__auto____244206 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244206))
{return or__3548__auto____244206;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__244234 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____244207 = this$;

if(cljs.core.truth_(and__3546__auto____244207))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244207;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____244208 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244208))
{return or__3548__auto____244208;
} else
{var or__3548__auto____244209 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244209))
{return or__3548__auto____244209;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__244235 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____244210 = this$;

if(cljs.core.truth_(and__3546__auto____244210))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244210;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____244211 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244211))
{return or__3548__auto____244211;
} else
{var or__3548__auto____244212 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244212))
{return or__3548__auto____244212;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__244236 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____244213 = this$;

if(cljs.core.truth_(and__3546__auto____244213))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____244213;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____244214 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244214))
{return or__3548__auto____244214;
} else
{var or__3548__auto____244215 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____244215))
{return or__3548__auto____244215;
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
return _invoke__244216.call(this,this$);
case  2 :
return _invoke__244217.call(this,this$,a);
case  3 :
return _invoke__244218.call(this,this$,a,b);
case  4 :
return _invoke__244219.call(this,this$,a,b,c);
case  5 :
return _invoke__244220.call(this,this$,a,b,c,d);
case  6 :
return _invoke__244221.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__244222.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__244223.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__244224.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__244225.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__244226.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__244227.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__244228.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__244229.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__244230.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__244231.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__244232.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__244233.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__244234.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__244235.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__244236.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____244238 = coll;

if(cljs.core.truth_(and__3546__auto____244238))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____244238;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____244239 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244239))
{return or__3548__auto____244239;
} else
{var or__3548__auto____244240 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____244240))
{return or__3548__auto____244240;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____244241 = coll;

if(cljs.core.truth_(and__3546__auto____244241))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____244241;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____244242 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244242))
{return or__3548__auto____244242;
} else
{var or__3548__auto____244243 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____244243))
{return or__3548__auto____244243;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____244244 = coll;

if(cljs.core.truth_(and__3546__auto____244244))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____244244;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____244245 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244245))
{return or__3548__auto____244245;
} else
{var or__3548__auto____244246 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____244246))
{return or__3548__auto____244246;
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
var _nth__244253 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____244247 = coll;

if(cljs.core.truth_(and__3546__auto____244247))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____244247;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____244248 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244248))
{return or__3548__auto____244248;
} else
{var or__3548__auto____244249 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____244249))
{return or__3548__auto____244249;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__244254 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____244250 = coll;

if(cljs.core.truth_(and__3546__auto____244250))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____244250;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____244251 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244251))
{return or__3548__auto____244251;
} else
{var or__3548__auto____244252 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____244252))
{return or__3548__auto____244252;
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
return _nth__244253.call(this,coll,n);
case  3 :
return _nth__244254.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____244256 = coll;

if(cljs.core.truth_(and__3546__auto____244256))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____244256;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____244257 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244257))
{return or__3548__auto____244257;
} else
{var or__3548__auto____244258 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____244258))
{return or__3548__auto____244258;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____244259 = coll;

if(cljs.core.truth_(and__3546__auto____244259))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____244259;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____244260 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244260))
{return or__3548__auto____244260;
} else
{var or__3548__auto____244261 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____244261))
{return or__3548__auto____244261;
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
var _lookup__244268 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____244262 = o;

if(cljs.core.truth_(and__3546__auto____244262))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____244262;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____244263 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____244263))
{return or__3548__auto____244263;
} else
{var or__3548__auto____244264 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____244264))
{return or__3548__auto____244264;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__244269 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____244265 = o;

if(cljs.core.truth_(and__3546__auto____244265))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____244265;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____244266 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____244266))
{return or__3548__auto____244266;
} else
{var or__3548__auto____244267 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____244267))
{return or__3548__auto____244267;
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
return _lookup__244268.call(this,o,k);
case  3 :
return _lookup__244269.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____244271 = coll;

if(cljs.core.truth_(and__3546__auto____244271))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____244271;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____244272 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244272))
{return or__3548__auto____244272;
} else
{var or__3548__auto____244273 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____244273))
{return or__3548__auto____244273;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____244274 = coll;

if(cljs.core.truth_(and__3546__auto____244274))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____244274;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____244275 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244275))
{return or__3548__auto____244275;
} else
{var or__3548__auto____244276 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____244276))
{return or__3548__auto____244276;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____244277 = coll;

if(cljs.core.truth_(and__3546__auto____244277))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____244277;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____244278 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244278))
{return or__3548__auto____244278;
} else
{var or__3548__auto____244279 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____244279))
{return or__3548__auto____244279;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____244280 = coll;

if(cljs.core.truth_(and__3546__auto____244280))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____244280;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____244281 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244281))
{return or__3548__auto____244281;
} else
{var or__3548__auto____244282 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____244282))
{return or__3548__auto____244282;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____244283 = coll;

if(cljs.core.truth_(and__3546__auto____244283))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____244283;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____244284 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244284))
{return or__3548__auto____244284;
} else
{var or__3548__auto____244285 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____244285))
{return or__3548__auto____244285;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____244286 = coll;

if(cljs.core.truth_(and__3546__auto____244286))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____244286;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____244287 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244287))
{return or__3548__auto____244287;
} else
{var or__3548__auto____244288 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____244288))
{return or__3548__auto____244288;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____244289 = coll;

if(cljs.core.truth_(and__3546__auto____244289))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____244289;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____244290 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244290))
{return or__3548__auto____244290;
} else
{var or__3548__auto____244291 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____244291))
{return or__3548__auto____244291;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____244292 = o;

if(cljs.core.truth_(and__3546__auto____244292))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____244292;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____244293 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____244293))
{return or__3548__auto____244293;
} else
{var or__3548__auto____244294 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____244294))
{return or__3548__auto____244294;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____244295 = o;

if(cljs.core.truth_(and__3546__auto____244295))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____244295;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____244296 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____244296))
{return or__3548__auto____244296;
} else
{var or__3548__auto____244297 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____244297))
{return or__3548__auto____244297;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____244298 = o;

if(cljs.core.truth_(and__3546__auto____244298))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____244298;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____244299 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____244299))
{return or__3548__auto____244299;
} else
{var or__3548__auto____244300 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____244300))
{return or__3548__auto____244300;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____244301 = o;

if(cljs.core.truth_(and__3546__auto____244301))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____244301;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____244302 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____244302))
{return or__3548__auto____244302;
} else
{var or__3548__auto____244303 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____244303))
{return or__3548__auto____244303;
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
var _reduce__244310 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____244304 = coll;

if(cljs.core.truth_(and__3546__auto____244304))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____244304;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____244305 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244305))
{return or__3548__auto____244305;
} else
{var or__3548__auto____244306 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____244306))
{return or__3548__auto____244306;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__244311 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____244307 = coll;

if(cljs.core.truth_(and__3546__auto____244307))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____244307;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____244308 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____244308))
{return or__3548__auto____244308;
} else
{var or__3548__auto____244309 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____244309))
{return or__3548__auto____244309;
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
return _reduce__244310.call(this,coll,f);
case  3 :
return _reduce__244311.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____244313 = o;

if(cljs.core.truth_(and__3546__auto____244313))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____244313;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____244314 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____244314))
{return or__3548__auto____244314;
} else
{var or__3548__auto____244315 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____244315))
{return or__3548__auto____244315;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____244316 = o;

if(cljs.core.truth_(and__3546__auto____244316))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____244316;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____244317 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____244317))
{return or__3548__auto____244317;
} else
{var or__3548__auto____244318 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____244318))
{return or__3548__auto____244318;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____244319 = o;

if(cljs.core.truth_(and__3546__auto____244319))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____244319;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____244320 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____244320))
{return or__3548__auto____244320;
} else
{var or__3548__auto____244321 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____244321))
{return or__3548__auto____244321;
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
if(cljs.core.truth_((function (){var and__3546__auto____244322 = o;

if(cljs.core.truth_(and__3546__auto____244322))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____244322;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____244323 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____244323))
{return or__3548__auto____244323;
} else
{var or__3548__auto____244324 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____244324))
{return or__3548__auto____244324;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____244325 = d;

if(cljs.core.truth_(and__3546__auto____244325))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____244325;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____244326 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____244326))
{return or__3548__auto____244326;
} else
{var or__3548__auto____244327 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____244327))
{return or__3548__auto____244327;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____244328 = this$;

if(cljs.core.truth_(and__3546__auto____244328))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____244328;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____244329 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244329))
{return or__3548__auto____244329;
} else
{var or__3548__auto____244330 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____244330))
{return or__3548__auto____244330;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____244331 = this$;

if(cljs.core.truth_(and__3546__auto____244331))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____244331;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____244332 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244332))
{return or__3548__auto____244332;
} else
{var or__3548__auto____244333 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____244333))
{return or__3548__auto____244333;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____244334 = this$;

if(cljs.core.truth_(and__3546__auto____244334))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____244334;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____244335 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____244335))
{return or__3548__auto____244335;
} else
{var or__3548__auto____244336 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____244336))
{return or__3548__auto____244336;
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
var G__244337 = null;
var G__244337__244338 = (function (o,k){
return null;
});
var G__244337__244339 = (function (o,k,not_found){
return not_found;
});
G__244337 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__244337__244338.call(this,o,k);
case  3 :
return G__244337__244339.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244337;
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
var G__244341 = null;
var G__244341__244342 = (function (_,f){
return f.call(null);
});
var G__244341__244343 = (function (_,f,start){
return start;
});
G__244341 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__244341__244342.call(this,_,f);
case  3 :
return G__244341__244343.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244341;
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
var G__244345 = null;
var G__244345__244346 = (function (_,n){
return null;
});
var G__244345__244347 = (function (_,n,not_found){
return not_found;
});
G__244345 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__244345__244346.call(this,_,n);
case  3 :
return G__244345__244347.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244345;
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
var ci_reduce__244355 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__244349 = cljs.core._nth.call(null,cicoll,0);
var n__244350 = 1;

while(true){
if(cljs.core.truth_((n__244350 < cljs.core._count.call(null,cicoll))))
{{
var G__244359 = f.call(null,val__244349,cljs.core._nth.call(null,cicoll,n__244350));
var G__244360 = (n__244350 + 1);
val__244349 = G__244359;
n__244350 = G__244360;
continue;
}
} else
{return val__244349;
}
break;
}
}
});
var ci_reduce__244356 = (function (cicoll,f,val){
var val__244351 = val;
var n__244352 = 0;

while(true){
if(cljs.core.truth_((n__244352 < cljs.core._count.call(null,cicoll))))
{{
var G__244361 = f.call(null,val__244351,cljs.core._nth.call(null,cicoll,n__244352));
var G__244362 = (n__244352 + 1);
val__244351 = G__244361;
n__244352 = G__244362;
continue;
}
} else
{return val__244351;
}
break;
}
});
var ci_reduce__244357 = (function (cicoll,f,val,idx){
var val__244353 = val;
var n__244354 = idx;

while(true){
if(cljs.core.truth_((n__244354 < cljs.core._count.call(null,cicoll))))
{{
var G__244363 = f.call(null,val__244353,cljs.core._nth.call(null,cicoll,n__244354));
var G__244364 = (n__244354 + 1);
val__244353 = G__244363;
n__244354 = G__244364;
continue;
}
} else
{return val__244353;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__244355.call(this,cicoll,f);
case  3 :
return ci_reduce__244356.call(this,cicoll,f,val);
case  4 :
return ci_reduce__244357.call(this,cicoll,f,val,idx);
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
var this__244365 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__244378 = null;
var G__244378__244379 = (function (_,f){
var this__244366 = this;
return cljs.core.ci_reduce.call(null,this__244366.a,f,(this__244366.a[this__244366.i]),(this__244366.i + 1));
});
var G__244378__244380 = (function (_,f,start){
var this__244367 = this;
return cljs.core.ci_reduce.call(null,this__244367.a,f,start,this__244367.i);
});
G__244378 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__244378__244379.call(this,_,f);
case  3 :
return G__244378__244380.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244378;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__244368 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__244369 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__244382 = null;
var G__244382__244383 = (function (coll,n){
var this__244370 = this;
var i__244371 = (n + this__244370.i);

if(cljs.core.truth_((i__244371 < this__244370.a.length)))
{return (this__244370.a[i__244371]);
} else
{return null;
}
});
var G__244382__244384 = (function (coll,n,not_found){
var this__244372 = this;
var i__244373 = (n + this__244372.i);

if(cljs.core.truth_((i__244373 < this__244372.a.length)))
{return (this__244372.a[i__244373]);
} else
{return not_found;
}
});
G__244382 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__244382__244383.call(this,coll,n);
case  3 :
return G__244382__244384.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244382;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__244374 = this;
return (this__244374.a.length - this__244374.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__244375 = this;
return (this__244375.a[this__244375.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__244376 = this;
if(cljs.core.truth_(((this__244376.i + 1) < this__244376.a.length)))
{return (new cljs.core.IndexedSeq(this__244376.a,(this__244376.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__244377 = this;
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
var G__244386 = null;
var G__244386__244387 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__244386__244388 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__244386 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__244386__244387.call(this,array,f);
case  3 :
return G__244386__244388.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244386;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__244390 = null;
var G__244390__244391 = (function (array,k){
return (array[k]);
});
var G__244390__244392 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__244390 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__244390__244391.call(this,array,k);
case  3 :
return G__244390__244392.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244390;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__244394 = null;
var G__244394__244395 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__244394__244396 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__244394 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__244394__244395.call(this,array,n);
case  3 :
return G__244394__244396.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244394;
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
var temp__3698__auto____244398 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____244398))
{var s__244399 = temp__3698__auto____244398;

return cljs.core._first.call(null,s__244399);
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
var G__244400 = cljs.core.next.call(null,s);
s = G__244400;
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
var s__244401 = cljs.core.seq.call(null,x);
var n__244402 = 0;

while(true){
if(cljs.core.truth_(s__244401))
{{
var G__244403 = cljs.core.next.call(null,s__244401);
var G__244404 = (n__244402 + 1);
s__244401 = G__244403;
n__244402 = G__244404;
continue;
}
} else
{return n__244402;
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
var conj__244405 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__244406 = (function() { 
var G__244408__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__244409 = conj.call(null,coll,x);
var G__244410 = cljs.core.first.call(null,xs);
var G__244411 = cljs.core.next.call(null,xs);
coll = G__244409;
x = G__244410;
xs = G__244411;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__244408 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244408__delegate.call(this, coll, x, xs);
};
G__244408.cljs$lang$maxFixedArity = 2;
G__244408.cljs$lang$applyTo = (function (arglist__244412){
var coll = cljs.core.first(arglist__244412);
var x = cljs.core.first(cljs.core.next(arglist__244412));
var xs = cljs.core.rest(cljs.core.next(arglist__244412));
return G__244408__delegate.call(this, coll, x, xs);
});
return G__244408;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__244405.call(this,coll,x);
default:
return conj__244406.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__244406.cljs$lang$applyTo;
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
var nth__244413 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__244414 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__244413.call(this,coll,n);
case  3 :
return nth__244414.call(this,coll,n,not_found);
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
var get__244416 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__244417 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__244416.call(this,o,k);
case  3 :
return get__244417.call(this,o,k,not_found);
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
var assoc__244420 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__244421 = (function() { 
var G__244423__delegate = function (coll,k,v,kvs){
while(true){
var ret__244419 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__244424 = ret__244419;
var G__244425 = cljs.core.first.call(null,kvs);
var G__244426 = cljs.core.second.call(null,kvs);
var G__244427 = cljs.core.nnext.call(null,kvs);
coll = G__244424;
k = G__244425;
v = G__244426;
kvs = G__244427;
continue;
}
} else
{return ret__244419;
}
break;
}
};
var G__244423 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__244423__delegate.call(this, coll, k, v, kvs);
};
G__244423.cljs$lang$maxFixedArity = 3;
G__244423.cljs$lang$applyTo = (function (arglist__244428){
var coll = cljs.core.first(arglist__244428);
var k = cljs.core.first(cljs.core.next(arglist__244428));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244428)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__244428)));
return G__244423__delegate.call(this, coll, k, v, kvs);
});
return G__244423;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__244420.call(this,coll,k,v);
default:
return assoc__244421.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__244421.cljs$lang$applyTo;
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
var dissoc__244430 = (function (coll){
return coll;
});
var dissoc__244431 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__244432 = (function() { 
var G__244434__delegate = function (coll,k,ks){
while(true){
var ret__244429 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__244435 = ret__244429;
var G__244436 = cljs.core.first.call(null,ks);
var G__244437 = cljs.core.next.call(null,ks);
coll = G__244435;
k = G__244436;
ks = G__244437;
continue;
}
} else
{return ret__244429;
}
break;
}
};
var G__244434 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244434__delegate.call(this, coll, k, ks);
};
G__244434.cljs$lang$maxFixedArity = 2;
G__244434.cljs$lang$applyTo = (function (arglist__244438){
var coll = cljs.core.first(arglist__244438);
var k = cljs.core.first(cljs.core.next(arglist__244438));
var ks = cljs.core.rest(cljs.core.next(arglist__244438));
return G__244434__delegate.call(this, coll, k, ks);
});
return G__244434;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__244430.call(this,coll);
case  2 :
return dissoc__244431.call(this,coll,k);
default:
return dissoc__244432.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__244432.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____244439 = o;

if(cljs.core.truth_((function (){var and__3546__auto____244440 = x__451__auto____244439;

if(cljs.core.truth_(and__3546__auto____244440))
{var and__3546__auto____244441 = x__451__auto____244439.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____244441))
{return cljs.core.not.call(null,x__451__auto____244439.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____244441;
}
} else
{return and__3546__auto____244440;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____244439);
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
var disj__244443 = (function (coll){
return coll;
});
var disj__244444 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__244445 = (function() { 
var G__244447__delegate = function (coll,k,ks){
while(true){
var ret__244442 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__244448 = ret__244442;
var G__244449 = cljs.core.first.call(null,ks);
var G__244450 = cljs.core.next.call(null,ks);
coll = G__244448;
k = G__244449;
ks = G__244450;
continue;
}
} else
{return ret__244442;
}
break;
}
};
var G__244447 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244447__delegate.call(this, coll, k, ks);
};
G__244447.cljs$lang$maxFixedArity = 2;
G__244447.cljs$lang$applyTo = (function (arglist__244451){
var coll = cljs.core.first(arglist__244451);
var k = cljs.core.first(cljs.core.next(arglist__244451));
var ks = cljs.core.rest(cljs.core.next(arglist__244451));
return G__244447__delegate.call(this, coll, k, ks);
});
return G__244447;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__244443.call(this,coll);
case  2 :
return disj__244444.call(this,coll,k);
default:
return disj__244445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__244445.cljs$lang$applyTo;
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
{var x__451__auto____244452 = x;

if(cljs.core.truth_((function (){var and__3546__auto____244453 = x__451__auto____244452;

if(cljs.core.truth_(and__3546__auto____244453))
{var and__3546__auto____244454 = x__451__auto____244452.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____244454))
{return cljs.core.not.call(null,x__451__auto____244452.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____244454;
}
} else
{return and__3546__auto____244453;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____244452);
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
{var x__451__auto____244455 = x;

if(cljs.core.truth_((function (){var and__3546__auto____244456 = x__451__auto____244455;

if(cljs.core.truth_(and__3546__auto____244456))
{var and__3546__auto____244457 = x__451__auto____244455.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____244457))
{return cljs.core.not.call(null,x__451__auto____244455.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____244457;
}
} else
{return and__3546__auto____244456;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____244455);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____244458 = x;

if(cljs.core.truth_((function (){var and__3546__auto____244459 = x__451__auto____244458;

if(cljs.core.truth_(and__3546__auto____244459))
{var and__3546__auto____244460 = x__451__auto____244458.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____244460))
{return cljs.core.not.call(null,x__451__auto____244458.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____244460;
}
} else
{return and__3546__auto____244459;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____244458);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____244461 = x;

if(cljs.core.truth_((function (){var and__3546__auto____244462 = x__451__auto____244461;

if(cljs.core.truth_(and__3546__auto____244462))
{var and__3546__auto____244463 = x__451__auto____244461.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____244463))
{return cljs.core.not.call(null,x__451__auto____244461.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____244463;
}
} else
{return and__3546__auto____244462;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____244461);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____244464 = x;

if(cljs.core.truth_((function (){var and__3546__auto____244465 = x__451__auto____244464;

if(cljs.core.truth_(and__3546__auto____244465))
{var and__3546__auto____244466 = x__451__auto____244464.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____244466))
{return cljs.core.not.call(null,x__451__auto____244464.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____244466;
}
} else
{return and__3546__auto____244465;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____244464);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____244467 = x;

if(cljs.core.truth_((function (){var and__3546__auto____244468 = x__451__auto____244467;

if(cljs.core.truth_(and__3546__auto____244468))
{var and__3546__auto____244469 = x__451__auto____244467.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____244469))
{return cljs.core.not.call(null,x__451__auto____244467.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____244469;
}
} else
{return and__3546__auto____244468;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____244467);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____244470 = x;

if(cljs.core.truth_((function (){var and__3546__auto____244471 = x__451__auto____244470;

if(cljs.core.truth_(and__3546__auto____244471))
{var and__3546__auto____244472 = x__451__auto____244470.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____244472))
{return cljs.core.not.call(null,x__451__auto____244470.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____244472;
}
} else
{return and__3546__auto____244471;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____244470);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__244473 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__244473.push(key);
}));
return keys__244473;
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
{var x__451__auto____244474 = s;

if(cljs.core.truth_((function (){var and__3546__auto____244475 = x__451__auto____244474;

if(cljs.core.truth_(and__3546__auto____244475))
{var and__3546__auto____244476 = x__451__auto____244474.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____244476))
{return cljs.core.not.call(null,x__451__auto____244474.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____244476;
}
} else
{return and__3546__auto____244475;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____244474);
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
var and__3546__auto____244477 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____244477))
{return cljs.core.not.call(null,(function (){var or__3548__auto____244478 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____244478))
{return or__3548__auto____244478;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____244477;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____244479 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____244479))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____244479;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____244480 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____244480))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____244480;
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
var and__3546__auto____244481 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____244481))
{return (n == n.toFixed());
} else
{return and__3546__auto____244481;
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
if(cljs.core.truth_((function (){var and__3546__auto____244482 = coll;

if(cljs.core.truth_(and__3546__auto____244482))
{var and__3546__auto____244483 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____244483))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____244483;
}
} else
{return and__3546__auto____244482;
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
var distinct_QMARK___244488 = (function (x){
return true;
});
var distinct_QMARK___244489 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___244490 = (function() { 
var G__244492__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__244484 = cljs.core.set([y,x]);
var xs__244485 = more;

while(true){
var x__244486 = cljs.core.first.call(null,xs__244485);
var etc__244487 = cljs.core.next.call(null,xs__244485);

if(cljs.core.truth_(xs__244485))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__244484,x__244486)))
{return false;
} else
{{
var G__244493 = cljs.core.conj.call(null,s__244484,x__244486);
var G__244494 = etc__244487;
s__244484 = G__244493;
xs__244485 = G__244494;
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
var G__244492 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244492__delegate.call(this, x, y, more);
};
G__244492.cljs$lang$maxFixedArity = 2;
G__244492.cljs$lang$applyTo = (function (arglist__244495){
var x = cljs.core.first(arglist__244495);
var y = cljs.core.first(cljs.core.next(arglist__244495));
var more = cljs.core.rest(cljs.core.next(arglist__244495));
return G__244492__delegate.call(this, x, y, more);
});
return G__244492;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___244488.call(this,x);
case  2 :
return distinct_QMARK___244489.call(this,x,y);
default:
return distinct_QMARK___244490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___244490.cljs$lang$applyTo;
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
var r__244496 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__244496)))
{return r__244496;
} else
{if(cljs.core.truth_(r__244496))
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
var sort__244498 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__244499 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__244497 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__244497,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__244497);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__244498.call(this,comp);
case  2 :
return sort__244499.call(this,comp,coll);
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
var sort_by__244501 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__244502 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__244501.call(this,keyfn,comp);
case  3 :
return sort_by__244502.call(this,keyfn,comp,coll);
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
var reduce__244504 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__244505 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__244504.call(this,f,val);
case  3 :
return reduce__244505.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__244511 = (function (f,coll){
var temp__3695__auto____244507 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____244507))
{var s__244508 = temp__3695__auto____244507;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__244508),cljs.core.next.call(null,s__244508));
} else
{return f.call(null);
}
});
var seq_reduce__244512 = (function (f,val,coll){
var val__244509 = val;
var coll__244510 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__244510))
{{
var G__244514 = f.call(null,val__244509,cljs.core.first.call(null,coll__244510));
var G__244515 = cljs.core.next.call(null,coll__244510);
val__244509 = G__244514;
coll__244510 = G__244515;
continue;
}
} else
{return val__244509;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__244511.call(this,f,val);
case  3 :
return seq_reduce__244512.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__244516 = null;
var G__244516__244517 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__244516__244518 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__244516 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__244516__244517.call(this,coll,f);
case  3 :
return G__244516__244518.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244516;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___244520 = (function (){
return 0;
});
var _PLUS___244521 = (function (x){
return x;
});
var _PLUS___244522 = (function (x,y){
return (x + y);
});
var _PLUS___244523 = (function() { 
var G__244525__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__244525 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244525__delegate.call(this, x, y, more);
};
G__244525.cljs$lang$maxFixedArity = 2;
G__244525.cljs$lang$applyTo = (function (arglist__244526){
var x = cljs.core.first(arglist__244526);
var y = cljs.core.first(cljs.core.next(arglist__244526));
var more = cljs.core.rest(cljs.core.next(arglist__244526));
return G__244525__delegate.call(this, x, y, more);
});
return G__244525;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___244520.call(this);
case  1 :
return _PLUS___244521.call(this,x);
case  2 :
return _PLUS___244522.call(this,x,y);
default:
return _PLUS___244523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___244523.cljs$lang$applyTo;
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
var ___244527 = (function (x){
return (- x);
});
var ___244528 = (function (x,y){
return (x - y);
});
var ___244529 = (function() { 
var G__244531__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__244531 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244531__delegate.call(this, x, y, more);
};
G__244531.cljs$lang$maxFixedArity = 2;
G__244531.cljs$lang$applyTo = (function (arglist__244532){
var x = cljs.core.first(arglist__244532);
var y = cljs.core.first(cljs.core.next(arglist__244532));
var more = cljs.core.rest(cljs.core.next(arglist__244532));
return G__244531__delegate.call(this, x, y, more);
});
return G__244531;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___244527.call(this,x);
case  2 :
return ___244528.call(this,x,y);
default:
return ___244529.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___244529.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___244533 = (function (){
return 1;
});
var _STAR___244534 = (function (x){
return x;
});
var _STAR___244535 = (function (x,y){
return (x * y);
});
var _STAR___244536 = (function() { 
var G__244538__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__244538 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244538__delegate.call(this, x, y, more);
};
G__244538.cljs$lang$maxFixedArity = 2;
G__244538.cljs$lang$applyTo = (function (arglist__244539){
var x = cljs.core.first(arglist__244539);
var y = cljs.core.first(cljs.core.next(arglist__244539));
var more = cljs.core.rest(cljs.core.next(arglist__244539));
return G__244538__delegate.call(this, x, y, more);
});
return G__244538;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___244533.call(this);
case  1 :
return _STAR___244534.call(this,x);
case  2 :
return _STAR___244535.call(this,x,y);
default:
return _STAR___244536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___244536.cljs$lang$applyTo;
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
var _SLASH___244540 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___244541 = (function (x,y){
return (x / y);
});
var _SLASH___244542 = (function() { 
var G__244544__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__244544 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244544__delegate.call(this, x, y, more);
};
G__244544.cljs$lang$maxFixedArity = 2;
G__244544.cljs$lang$applyTo = (function (arglist__244545){
var x = cljs.core.first(arglist__244545);
var y = cljs.core.first(cljs.core.next(arglist__244545));
var more = cljs.core.rest(cljs.core.next(arglist__244545));
return G__244544__delegate.call(this, x, y, more);
});
return G__244544;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___244540.call(this,x);
case  2 :
return _SLASH___244541.call(this,x,y);
default:
return _SLASH___244542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___244542.cljs$lang$applyTo;
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
var _LT___244546 = (function (x){
return true;
});
var _LT___244547 = (function (x,y){
return (x < y);
});
var _LT___244548 = (function() { 
var G__244550__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__244551 = y;
var G__244552 = cljs.core.first.call(null,more);
var G__244553 = cljs.core.next.call(null,more);
x = G__244551;
y = G__244552;
more = G__244553;
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
var G__244550 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244550__delegate.call(this, x, y, more);
};
G__244550.cljs$lang$maxFixedArity = 2;
G__244550.cljs$lang$applyTo = (function (arglist__244554){
var x = cljs.core.first(arglist__244554);
var y = cljs.core.first(cljs.core.next(arglist__244554));
var more = cljs.core.rest(cljs.core.next(arglist__244554));
return G__244550__delegate.call(this, x, y, more);
});
return G__244550;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___244546.call(this,x);
case  2 :
return _LT___244547.call(this,x,y);
default:
return _LT___244548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___244548.cljs$lang$applyTo;
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
var _LT__EQ___244555 = (function (x){
return true;
});
var _LT__EQ___244556 = (function (x,y){
return (x <= y);
});
var _LT__EQ___244557 = (function() { 
var G__244559__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__244560 = y;
var G__244561 = cljs.core.first.call(null,more);
var G__244562 = cljs.core.next.call(null,more);
x = G__244560;
y = G__244561;
more = G__244562;
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
var G__244559 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244559__delegate.call(this, x, y, more);
};
G__244559.cljs$lang$maxFixedArity = 2;
G__244559.cljs$lang$applyTo = (function (arglist__244563){
var x = cljs.core.first(arglist__244563);
var y = cljs.core.first(cljs.core.next(arglist__244563));
var more = cljs.core.rest(cljs.core.next(arglist__244563));
return G__244559__delegate.call(this, x, y, more);
});
return G__244559;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___244555.call(this,x);
case  2 :
return _LT__EQ___244556.call(this,x,y);
default:
return _LT__EQ___244557.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___244557.cljs$lang$applyTo;
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
var _GT___244564 = (function (x){
return true;
});
var _GT___244565 = (function (x,y){
return (x > y);
});
var _GT___244566 = (function() { 
var G__244568__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__244569 = y;
var G__244570 = cljs.core.first.call(null,more);
var G__244571 = cljs.core.next.call(null,more);
x = G__244569;
y = G__244570;
more = G__244571;
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
var G__244568 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244568__delegate.call(this, x, y, more);
};
G__244568.cljs$lang$maxFixedArity = 2;
G__244568.cljs$lang$applyTo = (function (arglist__244572){
var x = cljs.core.first(arglist__244572);
var y = cljs.core.first(cljs.core.next(arglist__244572));
var more = cljs.core.rest(cljs.core.next(arglist__244572));
return G__244568__delegate.call(this, x, y, more);
});
return G__244568;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___244564.call(this,x);
case  2 :
return _GT___244565.call(this,x,y);
default:
return _GT___244566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___244566.cljs$lang$applyTo;
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
var _GT__EQ___244573 = (function (x){
return true;
});
var _GT__EQ___244574 = (function (x,y){
return (x >= y);
});
var _GT__EQ___244575 = (function() { 
var G__244577__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__244578 = y;
var G__244579 = cljs.core.first.call(null,more);
var G__244580 = cljs.core.next.call(null,more);
x = G__244578;
y = G__244579;
more = G__244580;
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
var G__244577 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244577__delegate.call(this, x, y, more);
};
G__244577.cljs$lang$maxFixedArity = 2;
G__244577.cljs$lang$applyTo = (function (arglist__244581){
var x = cljs.core.first(arglist__244581);
var y = cljs.core.first(cljs.core.next(arglist__244581));
var more = cljs.core.rest(cljs.core.next(arglist__244581));
return G__244577__delegate.call(this, x, y, more);
});
return G__244577;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___244573.call(this,x);
case  2 :
return _GT__EQ___244574.call(this,x,y);
default:
return _GT__EQ___244575.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___244575.cljs$lang$applyTo;
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
var max__244582 = (function (x){
return x;
});
var max__244583 = (function (x,y){
return ((x > y) ? x : y);
});
var max__244584 = (function() { 
var G__244586__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__244586 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244586__delegate.call(this, x, y, more);
};
G__244586.cljs$lang$maxFixedArity = 2;
G__244586.cljs$lang$applyTo = (function (arglist__244587){
var x = cljs.core.first(arglist__244587);
var y = cljs.core.first(cljs.core.next(arglist__244587));
var more = cljs.core.rest(cljs.core.next(arglist__244587));
return G__244586__delegate.call(this, x, y, more);
});
return G__244586;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__244582.call(this,x);
case  2 :
return max__244583.call(this,x,y);
default:
return max__244584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__244584.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__244588 = (function (x){
return x;
});
var min__244589 = (function (x,y){
return ((x < y) ? x : y);
});
var min__244590 = (function() { 
var G__244592__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__244592 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244592__delegate.call(this, x, y, more);
};
G__244592.cljs$lang$maxFixedArity = 2;
G__244592.cljs$lang$applyTo = (function (arglist__244593){
var x = cljs.core.first(arglist__244593);
var y = cljs.core.first(cljs.core.next(arglist__244593));
var more = cljs.core.rest(cljs.core.next(arglist__244593));
return G__244592__delegate.call(this, x, y, more);
});
return G__244592;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__244588.call(this,x);
case  2 :
return min__244589.call(this,x,y);
default:
return min__244590.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__244590.cljs$lang$applyTo;
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
var rem__244594 = (n % d);

return cljs.core.fix.call(null,((n - rem__244594) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__244595 = cljs.core.quot.call(null,n,d);

return (n - (d * q__244595));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__244596 = (function (){
return Math.random.call(null);
});
var rand__244597 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__244596.call(this);
case  1 :
return rand__244597.call(this,n);
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
var _EQ__EQ___244599 = (function (x){
return true;
});
var _EQ__EQ___244600 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___244601 = (function() { 
var G__244603__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__244604 = y;
var G__244605 = cljs.core.first.call(null,more);
var G__244606 = cljs.core.next.call(null,more);
x = G__244604;
y = G__244605;
more = G__244606;
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
var G__244603 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244603__delegate.call(this, x, y, more);
};
G__244603.cljs$lang$maxFixedArity = 2;
G__244603.cljs$lang$applyTo = (function (arglist__244607){
var x = cljs.core.first(arglist__244607);
var y = cljs.core.first(cljs.core.next(arglist__244607));
var more = cljs.core.rest(cljs.core.next(arglist__244607));
return G__244603__delegate.call(this, x, y, more);
});
return G__244603;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___244599.call(this,x);
case  2 :
return _EQ__EQ___244600.call(this,x,y);
default:
return _EQ__EQ___244601.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___244601.cljs$lang$applyTo;
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
var n__244608 = n;
var xs__244609 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____244610 = xs__244609;

if(cljs.core.truth_(and__3546__auto____244610))
{return (n__244608 > 0);
} else
{return and__3546__auto____244610;
}
})()))
{{
var G__244611 = (n__244608 - 1);
var G__244612 = cljs.core.next.call(null,xs__244609);
n__244608 = G__244611;
xs__244609 = G__244612;
continue;
}
} else
{return xs__244609;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__244617 = null;
var G__244617__244618 = (function (coll,n){
var temp__3695__auto____244613 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____244613))
{var xs__244614 = temp__3695__auto____244613;

return cljs.core.first.call(null,xs__244614);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__244617__244619 = (function (coll,n,not_found){
var temp__3695__auto____244615 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____244615))
{var xs__244616 = temp__3695__auto____244615;

return cljs.core.first.call(null,xs__244616);
} else
{return not_found;
}
});
G__244617 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__244617__244618.call(this,coll,n);
case  3 :
return G__244617__244619.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244617;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___244621 = (function (){
return "";
});
var str_STAR___244622 = (function (x){
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
var str_STAR___244623 = (function() { 
var G__244625__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__244626 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__244627 = cljs.core.next.call(null,more);
sb = G__244626;
more = G__244627;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__244625 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__244625__delegate.call(this, x, ys);
};
G__244625.cljs$lang$maxFixedArity = 1;
G__244625.cljs$lang$applyTo = (function (arglist__244628){
var x = cljs.core.first(arglist__244628);
var ys = cljs.core.rest(arglist__244628);
return G__244625__delegate.call(this, x, ys);
});
return G__244625;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___244621.call(this);
case  1 :
return str_STAR___244622.call(this,x);
default:
return str_STAR___244623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___244623.cljs$lang$applyTo;
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
var str__244629 = (function (){
return "";
});
var str__244630 = (function (x){
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
var str__244631 = (function() { 
var G__244633__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__244634 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__244635 = cljs.core.next.call(null,more);
sb = G__244634;
more = G__244635;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__244633 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__244633__delegate.call(this, x, ys);
};
G__244633.cljs$lang$maxFixedArity = 1;
G__244633.cljs$lang$applyTo = (function (arglist__244636){
var x = cljs.core.first(arglist__244636);
var ys = cljs.core.rest(arglist__244636);
return G__244633__delegate.call(this, x, ys);
});
return G__244633;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__244629.call(this);
case  1 :
return str__244630.call(this,x);
default:
return str__244631.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__244631.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__244637 = (function (s,start){
return s.substring(start);
});
var subs__244638 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__244637.call(this,s,start);
case  3 :
return subs__244638.call(this,s,start,end);
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
var symbol__244640 = (function (name){
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
var symbol__244641 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__244640.call(this,ns);
case  2 :
return symbol__244641.call(this,ns,name);
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
var keyword__244643 = (function (name){
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
var keyword__244644 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__244643.call(this,ns);
case  2 :
return keyword__244644.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__244646 = cljs.core.seq.call(null,x);
var ys__244647 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__244646 === null)))
{return (ys__244647 === null);
} else
{if(cljs.core.truth_((ys__244647 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__244646),cljs.core.first.call(null,ys__244647))))
{{
var G__244648 = cljs.core.next.call(null,xs__244646);
var G__244649 = cljs.core.next.call(null,ys__244647);
xs__244646 = G__244648;
ys__244647 = G__244649;
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
return cljs.core.reduce.call(null,(function (p1__244650_SHARP_,p2__244651_SHARP_){
return cljs.core.hash_combine.call(null,p1__244650_SHARP_,cljs.core.hash.call(null,p2__244651_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__244652__244653 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__244652__244653))
{var G__244655__244657 = cljs.core.first.call(null,G__244652__244653);
var vec__244656__244658 = G__244655__244657;
var key_name__244659 = cljs.core.nth.call(null,vec__244656__244658,0,null);
var f__244660 = cljs.core.nth.call(null,vec__244656__244658,1,null);
var G__244652__244661 = G__244652__244653;

var G__244655__244662 = G__244655__244657;
var G__244652__244663 = G__244652__244661;

while(true){
var vec__244664__244665 = G__244655__244662;
var key_name__244666 = cljs.core.nth.call(null,vec__244664__244665,0,null);
var f__244667 = cljs.core.nth.call(null,vec__244664__244665,1,null);
var G__244652__244668 = G__244652__244663;

var str_name__244669 = cljs.core.name.call(null,key_name__244666);

obj[str_name__244669] = f__244667;
var temp__3698__auto____244670 = cljs.core.next.call(null,G__244652__244668);

if(cljs.core.truth_(temp__3698__auto____244670))
{var G__244652__244671 = temp__3698__auto____244670;

{
var G__244672 = cljs.core.first.call(null,G__244652__244671);
var G__244673 = G__244652__244671;
G__244655__244662 = G__244672;
G__244652__244663 = G__244673;
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
var this__244674 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__244675 = this;
return (new cljs.core.List(this__244675.meta,o,coll,(this__244675.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__244676 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__244677 = this;
return this__244677.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__244678 = this;
return this__244678.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__244679 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__244680 = this;
return this__244680.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__244681 = this;
return this__244681.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__244682 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__244683 = this;
return (new cljs.core.List(meta,this__244683.first,this__244683.rest,this__244683.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__244684 = this;
return this__244684.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__244685 = this;
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
var this__244686 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__244687 = this;
return (new cljs.core.List(this__244687.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__244688 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__244689 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__244690 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__244691 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__244692 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__244693 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__244694 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__244695 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__244696 = this;
return this__244696.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__244697 = this;
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
list.cljs$lang$applyTo = (function (arglist__244698){
var items = cljs.core.seq( arglist__244698 );;
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
var this__244699 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__244700 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__244701 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__244702 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__244702.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__244703 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__244704 = this;
return this__244704.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__244705 = this;
if(cljs.core.truth_((this__244705.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__244705.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__244706 = this;
return this__244706.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__244707 = this;
return (new cljs.core.Cons(meta,this__244707.first,this__244707.rest));
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
var G__244708 = null;
var G__244708__244709 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__244708__244710 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__244708 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__244708__244709.call(this,string,f);
case  3 :
return G__244708__244710.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244708;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__244712 = null;
var G__244712__244713 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__244712__244714 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__244712 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__244712__244713.call(this,string,k);
case  3 :
return G__244712__244714.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244712;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__244716 = null;
var G__244716__244717 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__244716__244718 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__244716 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__244716__244717.call(this,string,n);
case  3 :
return G__244716__244718.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244716;
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
var G__244726 = null;
var G__244726__244727 = (function (tsym244720,coll){
var tsym244720__244722 = this;

var this$__244723 = tsym244720__244722;

return cljs.core.get.call(null,coll,this$__244723.toString());
});
var G__244726__244728 = (function (tsym244721,coll,not_found){
var tsym244721__244724 = this;

var this$__244725 = tsym244721__244724;

return cljs.core.get.call(null,coll,this$__244725.toString(),not_found);
});
G__244726 = function(tsym244721,coll,not_found){
switch(arguments.length){
case  2 :
return G__244726__244727.call(this,tsym244721,coll);
case  3 :
return G__244726__244728.call(this,tsym244721,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__244726;
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
var x__244730 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__244730;
} else
{lazy_seq.x = x__244730.call(null);
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
var this__244731 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__244732 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__244733 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__244734 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__244734.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__244735 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__244736 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__244737 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__244738 = this;
return this__244738.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__244739 = this;
return (new cljs.core.LazySeq(meta,this__244739.realized,this__244739.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__244740 = [];

var s__244741 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__244741)))
{ary__244740.push(cljs.core.first.call(null,s__244741));
{
var G__244742 = cljs.core.next.call(null,s__244741);
s__244741 = G__244742;
continue;
}
} else
{return ary__244740;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__244743 = s;
var i__244744 = n;
var sum__244745 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____244746 = (i__244744 > 0);

if(cljs.core.truth_(and__3546__auto____244746))
{return cljs.core.seq.call(null,s__244743);
} else
{return and__3546__auto____244746;
}
})()))
{{
var G__244747 = cljs.core.next.call(null,s__244743);
var G__244748 = (i__244744 - 1);
var G__244749 = (sum__244745 + 1);
s__244743 = G__244747;
i__244744 = G__244748;
sum__244745 = G__244749;
continue;
}
} else
{return sum__244745;
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
var concat__244753 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__244754 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__244755 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__244750 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__244750))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__244750),concat.call(null,cljs.core.rest.call(null,s__244750),y));
} else
{return y;
}
})));
});
var concat__244756 = (function() { 
var G__244758__delegate = function (x,y,zs){
var cat__244752 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__244751 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__244751))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__244751),cat.call(null,cljs.core.rest.call(null,xys__244751),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__244752.call(null,concat.call(null,x,y),zs);
};
var G__244758 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244758__delegate.call(this, x, y, zs);
};
G__244758.cljs$lang$maxFixedArity = 2;
G__244758.cljs$lang$applyTo = (function (arglist__244759){
var x = cljs.core.first(arglist__244759);
var y = cljs.core.first(cljs.core.next(arglist__244759));
var zs = cljs.core.rest(cljs.core.next(arglist__244759));
return G__244758__delegate.call(this, x, y, zs);
});
return G__244758;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__244753.call(this);
case  1 :
return concat__244754.call(this,x);
case  2 :
return concat__244755.call(this,x,y);
default:
return concat__244756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__244756.cljs$lang$applyTo;
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
var list_STAR___244760 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___244761 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___244762 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___244763 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___244764 = (function() { 
var G__244766__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__244766 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__244766__delegate.call(this, a, b, c, d, more);
};
G__244766.cljs$lang$maxFixedArity = 4;
G__244766.cljs$lang$applyTo = (function (arglist__244767){
var a = cljs.core.first(arglist__244767);
var b = cljs.core.first(cljs.core.next(arglist__244767));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244767)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__244767))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__244767))));
return G__244766__delegate.call(this, a, b, c, d, more);
});
return G__244766;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___244760.call(this,a);
case  2 :
return list_STAR___244761.call(this,a,b);
case  3 :
return list_STAR___244762.call(this,a,b,c);
case  4 :
return list_STAR___244763.call(this,a,b,c,d);
default:
return list_STAR___244764.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___244764.cljs$lang$applyTo;
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
var apply__244777 = (function (f,args){
var fixed_arity__244768 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__244768 + 1)) <= fixed_arity__244768)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__244778 = (function (f,x,args){
var arglist__244769 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__244770 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__244769,fixed_arity__244770) <= fixed_arity__244770)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__244769));
} else
{return f.cljs$lang$applyTo(arglist__244769);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__244769));
}
});
var apply__244779 = (function (f,x,y,args){
var arglist__244771 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__244772 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__244771,fixed_arity__244772) <= fixed_arity__244772)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__244771));
} else
{return f.cljs$lang$applyTo(arglist__244771);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__244771));
}
});
var apply__244780 = (function (f,x,y,z,args){
var arglist__244773 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__244774 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__244773,fixed_arity__244774) <= fixed_arity__244774)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__244773));
} else
{return f.cljs$lang$applyTo(arglist__244773);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__244773));
}
});
var apply__244781 = (function() { 
var G__244783__delegate = function (f,a,b,c,d,args){
var arglist__244775 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__244776 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__244775,fixed_arity__244776) <= fixed_arity__244776)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__244775));
} else
{return f.cljs$lang$applyTo(arglist__244775);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__244775));
}
};
var G__244783 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__244783__delegate.call(this, f, a, b, c, d, args);
};
G__244783.cljs$lang$maxFixedArity = 5;
G__244783.cljs$lang$applyTo = (function (arglist__244784){
var f = cljs.core.first(arglist__244784);
var a = cljs.core.first(cljs.core.next(arglist__244784));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244784)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__244784))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__244784)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__244784)))));
return G__244783__delegate.call(this, f, a, b, c, d, args);
});
return G__244783;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__244777.call(this,f,a);
case  3 :
return apply__244778.call(this,f,a,b);
case  4 :
return apply__244779.call(this,f,a,b,c);
case  5 :
return apply__244780.call(this,f,a,b,c,d);
default:
return apply__244781.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__244781.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__244785){
var obj = cljs.core.first(arglist__244785);
var f = cljs.core.first(cljs.core.next(arglist__244785));
var args = cljs.core.rest(cljs.core.next(arglist__244785));
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
var not_EQ___244786 = (function (x){
return false;
});
var not_EQ___244787 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___244788 = (function() { 
var G__244790__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__244790 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244790__delegate.call(this, x, y, more);
};
G__244790.cljs$lang$maxFixedArity = 2;
G__244790.cljs$lang$applyTo = (function (arglist__244791){
var x = cljs.core.first(arglist__244791);
var y = cljs.core.first(cljs.core.next(arglist__244791));
var more = cljs.core.rest(cljs.core.next(arglist__244791));
return G__244790__delegate.call(this, x, y, more);
});
return G__244790;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___244786.call(this,x);
case  2 :
return not_EQ___244787.call(this,x,y);
default:
return not_EQ___244788.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___244788.cljs$lang$applyTo;
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
var G__244792 = pred;
var G__244793 = cljs.core.next.call(null,coll);
pred = G__244792;
coll = G__244793;
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
{var or__3548__auto____244794 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____244794))
{return or__3548__auto____244794;
} else
{{
var G__244795 = pred;
var G__244796 = cljs.core.next.call(null,coll);
pred = G__244795;
coll = G__244796;
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
var G__244797 = null;
var G__244797__244798 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__244797__244799 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__244797__244800 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__244797__244801 = (function() { 
var G__244803__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__244803 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__244803__delegate.call(this, x, y, zs);
};
G__244803.cljs$lang$maxFixedArity = 2;
G__244803.cljs$lang$applyTo = (function (arglist__244804){
var x = cljs.core.first(arglist__244804);
var y = cljs.core.first(cljs.core.next(arglist__244804));
var zs = cljs.core.rest(cljs.core.next(arglist__244804));
return G__244803__delegate.call(this, x, y, zs);
});
return G__244803;
})()
;
G__244797 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__244797__244798.call(this);
case  1 :
return G__244797__244799.call(this,x);
case  2 :
return G__244797__244800.call(this,x,y);
default:
return G__244797__244801.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__244797.cljs$lang$maxFixedArity = 2;
G__244797.cljs$lang$applyTo = G__244797__244801.cljs$lang$applyTo;
return G__244797;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__244805__delegate = function (args){
return x;
};
var G__244805 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__244805__delegate.call(this, args);
};
G__244805.cljs$lang$maxFixedArity = 0;
G__244805.cljs$lang$applyTo = (function (arglist__244806){
var args = cljs.core.seq( arglist__244806 );;
return G__244805__delegate.call(this, args);
});
return G__244805;
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
var comp__244810 = (function (){
return cljs.core.identity;
});
var comp__244811 = (function (f){
return f;
});
var comp__244812 = (function (f,g){
return (function() {
var G__244816 = null;
var G__244816__244817 = (function (){
return f.call(null,g.call(null));
});
var G__244816__244818 = (function (x){
return f.call(null,g.call(null,x));
});
var G__244816__244819 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__244816__244820 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__244816__244821 = (function() { 
var G__244823__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__244823 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__244823__delegate.call(this, x, y, z, args);
};
G__244823.cljs$lang$maxFixedArity = 3;
G__244823.cljs$lang$applyTo = (function (arglist__244824){
var x = cljs.core.first(arglist__244824);
var y = cljs.core.first(cljs.core.next(arglist__244824));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244824)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__244824)));
return G__244823__delegate.call(this, x, y, z, args);
});
return G__244823;
})()
;
G__244816 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__244816__244817.call(this);
case  1 :
return G__244816__244818.call(this,x);
case  2 :
return G__244816__244819.call(this,x,y);
case  3 :
return G__244816__244820.call(this,x,y,z);
default:
return G__244816__244821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__244816.cljs$lang$maxFixedArity = 3;
G__244816.cljs$lang$applyTo = G__244816__244821.cljs$lang$applyTo;
return G__244816;
})()
});
var comp__244813 = (function (f,g,h){
return (function() {
var G__244825 = null;
var G__244825__244826 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__244825__244827 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__244825__244828 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__244825__244829 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__244825__244830 = (function() { 
var G__244832__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__244832 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__244832__delegate.call(this, x, y, z, args);
};
G__244832.cljs$lang$maxFixedArity = 3;
G__244832.cljs$lang$applyTo = (function (arglist__244833){
var x = cljs.core.first(arglist__244833);
var y = cljs.core.first(cljs.core.next(arglist__244833));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244833)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__244833)));
return G__244832__delegate.call(this, x, y, z, args);
});
return G__244832;
})()
;
G__244825 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__244825__244826.call(this);
case  1 :
return G__244825__244827.call(this,x);
case  2 :
return G__244825__244828.call(this,x,y);
case  3 :
return G__244825__244829.call(this,x,y,z);
default:
return G__244825__244830.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__244825.cljs$lang$maxFixedArity = 3;
G__244825.cljs$lang$applyTo = G__244825__244830.cljs$lang$applyTo;
return G__244825;
})()
});
var comp__244814 = (function() { 
var G__244834__delegate = function (f1,f2,f3,fs){
var fs__244807 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__244835__delegate = function (args){
var ret__244808 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__244807),args);
var fs__244809 = cljs.core.next.call(null,fs__244807);

while(true){
if(cljs.core.truth_(fs__244809))
{{
var G__244836 = cljs.core.first.call(null,fs__244809).call(null,ret__244808);
var G__244837 = cljs.core.next.call(null,fs__244809);
ret__244808 = G__244836;
fs__244809 = G__244837;
continue;
}
} else
{return ret__244808;
}
break;
}
};
var G__244835 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__244835__delegate.call(this, args);
};
G__244835.cljs$lang$maxFixedArity = 0;
G__244835.cljs$lang$applyTo = (function (arglist__244838){
var args = cljs.core.seq( arglist__244838 );;
return G__244835__delegate.call(this, args);
});
return G__244835;
})()
;
};
var G__244834 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__244834__delegate.call(this, f1, f2, f3, fs);
};
G__244834.cljs$lang$maxFixedArity = 3;
G__244834.cljs$lang$applyTo = (function (arglist__244839){
var f1 = cljs.core.first(arglist__244839);
var f2 = cljs.core.first(cljs.core.next(arglist__244839));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244839)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__244839)));
return G__244834__delegate.call(this, f1, f2, f3, fs);
});
return G__244834;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__244810.call(this);
case  1 :
return comp__244811.call(this,f1);
case  2 :
return comp__244812.call(this,f1,f2);
case  3 :
return comp__244813.call(this,f1,f2,f3);
default:
return comp__244814.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__244814.cljs$lang$applyTo;
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
var partial__244840 = (function (f,arg1){
return (function() { 
var G__244845__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__244845 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__244845__delegate.call(this, args);
};
G__244845.cljs$lang$maxFixedArity = 0;
G__244845.cljs$lang$applyTo = (function (arglist__244846){
var args = cljs.core.seq( arglist__244846 );;
return G__244845__delegate.call(this, args);
});
return G__244845;
})()
;
});
var partial__244841 = (function (f,arg1,arg2){
return (function() { 
var G__244847__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__244847 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__244847__delegate.call(this, args);
};
G__244847.cljs$lang$maxFixedArity = 0;
G__244847.cljs$lang$applyTo = (function (arglist__244848){
var args = cljs.core.seq( arglist__244848 );;
return G__244847__delegate.call(this, args);
});
return G__244847;
})()
;
});
var partial__244842 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__244849__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__244849 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__244849__delegate.call(this, args);
};
G__244849.cljs$lang$maxFixedArity = 0;
G__244849.cljs$lang$applyTo = (function (arglist__244850){
var args = cljs.core.seq( arglist__244850 );;
return G__244849__delegate.call(this, args);
});
return G__244849;
})()
;
});
var partial__244843 = (function() { 
var G__244851__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__244852__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__244852 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__244852__delegate.call(this, args);
};
G__244852.cljs$lang$maxFixedArity = 0;
G__244852.cljs$lang$applyTo = (function (arglist__244853){
var args = cljs.core.seq( arglist__244853 );;
return G__244852__delegate.call(this, args);
});
return G__244852;
})()
;
};
var G__244851 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__244851__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__244851.cljs$lang$maxFixedArity = 4;
G__244851.cljs$lang$applyTo = (function (arglist__244854){
var f = cljs.core.first(arglist__244854);
var arg1 = cljs.core.first(cljs.core.next(arglist__244854));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244854)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__244854))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__244854))));
return G__244851__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__244851;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__244840.call(this,f,arg1);
case  3 :
return partial__244841.call(this,f,arg1,arg2);
case  4 :
return partial__244842.call(this,f,arg1,arg2,arg3);
default:
return partial__244843.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__244843.cljs$lang$applyTo;
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
var fnil__244855 = (function (f,x){
return (function() {
var G__244859 = null;
var G__244859__244860 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__244859__244861 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__244859__244862 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__244859__244863 = (function() { 
var G__244865__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__244865 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__244865__delegate.call(this, a, b, c, ds);
};
G__244865.cljs$lang$maxFixedArity = 3;
G__244865.cljs$lang$applyTo = (function (arglist__244866){
var a = cljs.core.first(arglist__244866);
var b = cljs.core.first(cljs.core.next(arglist__244866));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244866)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__244866)));
return G__244865__delegate.call(this, a, b, c, ds);
});
return G__244865;
})()
;
G__244859 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__244859__244860.call(this,a);
case  2 :
return G__244859__244861.call(this,a,b);
case  3 :
return G__244859__244862.call(this,a,b,c);
default:
return G__244859__244863.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__244859.cljs$lang$maxFixedArity = 3;
G__244859.cljs$lang$applyTo = G__244859__244863.cljs$lang$applyTo;
return G__244859;
})()
});
var fnil__244856 = (function (f,x,y){
return (function() {
var G__244867 = null;
var G__244867__244868 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__244867__244869 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__244867__244870 = (function() { 
var G__244872__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__244872 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__244872__delegate.call(this, a, b, c, ds);
};
G__244872.cljs$lang$maxFixedArity = 3;
G__244872.cljs$lang$applyTo = (function (arglist__244873){
var a = cljs.core.first(arglist__244873);
var b = cljs.core.first(cljs.core.next(arglist__244873));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244873)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__244873)));
return G__244872__delegate.call(this, a, b, c, ds);
});
return G__244872;
})()
;
G__244867 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__244867__244868.call(this,a,b);
case  3 :
return G__244867__244869.call(this,a,b,c);
default:
return G__244867__244870.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__244867.cljs$lang$maxFixedArity = 3;
G__244867.cljs$lang$applyTo = G__244867__244870.cljs$lang$applyTo;
return G__244867;
})()
});
var fnil__244857 = (function (f,x,y,z){
return (function() {
var G__244874 = null;
var G__244874__244875 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__244874__244876 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__244874__244877 = (function() { 
var G__244879__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__244879 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__244879__delegate.call(this, a, b, c, ds);
};
G__244879.cljs$lang$maxFixedArity = 3;
G__244879.cljs$lang$applyTo = (function (arglist__244880){
var a = cljs.core.first(arglist__244880);
var b = cljs.core.first(cljs.core.next(arglist__244880));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244880)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__244880)));
return G__244879__delegate.call(this, a, b, c, ds);
});
return G__244879;
})()
;
G__244874 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__244874__244875.call(this,a,b);
case  3 :
return G__244874__244876.call(this,a,b,c);
default:
return G__244874__244877.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__244874.cljs$lang$maxFixedArity = 3;
G__244874.cljs$lang$applyTo = G__244874__244877.cljs$lang$applyTo;
return G__244874;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__244855.call(this,f,x);
case  3 :
return fnil__244856.call(this,f,x,y);
case  4 :
return fnil__244857.call(this,f,x,y,z);
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
var mapi__244883 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____244881 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____244881))
{var s__244882 = temp__3698__auto____244881;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__244882)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__244882)));
} else
{return null;
}
})));
});

return mapi__244883.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____244884 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____244884))
{var s__244885 = temp__3698__auto____244884;

var x__244886 = f.call(null,cljs.core.first.call(null,s__244885));

if(cljs.core.truth_((x__244886 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__244885));
} else
{return cljs.core.cons.call(null,x__244886,keep.call(null,f,cljs.core.rest.call(null,s__244885)));
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
var keepi__244896 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____244893 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____244893))
{var s__244894 = temp__3698__auto____244893;

var x__244895 = f.call(null,idx,cljs.core.first.call(null,s__244894));

if(cljs.core.truth_((x__244895 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__244894));
} else
{return cljs.core.cons.call(null,x__244895,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__244894)));
}
} else
{return null;
}
})));
});

return keepi__244896.call(null,0,coll);
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
var every_pred__244941 = (function (p){
return (function() {
var ep1 = null;
var ep1__244946 = (function (){
return true;
});
var ep1__244947 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__244948 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____244903 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____244903))
{return p.call(null,y);
} else
{return and__3546__auto____244903;
}
})());
});
var ep1__244949 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____244904 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____244904))
{var and__3546__auto____244905 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____244905))
{return p.call(null,z);
} else
{return and__3546__auto____244905;
}
} else
{return and__3546__auto____244904;
}
})());
});
var ep1__244950 = (function() { 
var G__244952__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____244906 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____244906))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____244906;
}
})());
};
var G__244952 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__244952__delegate.call(this, x, y, z, args);
};
G__244952.cljs$lang$maxFixedArity = 3;
G__244952.cljs$lang$applyTo = (function (arglist__244953){
var x = cljs.core.first(arglist__244953);
var y = cljs.core.first(cljs.core.next(arglist__244953));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244953)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__244953)));
return G__244952__delegate.call(this, x, y, z, args);
});
return G__244952;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__244946.call(this);
case  1 :
return ep1__244947.call(this,x);
case  2 :
return ep1__244948.call(this,x,y);
case  3 :
return ep1__244949.call(this,x,y,z);
default:
return ep1__244950.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__244950.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__244942 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__244954 = (function (){
return true;
});
var ep2__244955 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____244907 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____244907))
{return p2.call(null,x);
} else
{return and__3546__auto____244907;
}
})());
});
var ep2__244956 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____244908 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____244908))
{var and__3546__auto____244909 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____244909))
{var and__3546__auto____244910 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____244910))
{return p2.call(null,y);
} else
{return and__3546__auto____244910;
}
} else
{return and__3546__auto____244909;
}
} else
{return and__3546__auto____244908;
}
})());
});
var ep2__244957 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____244911 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____244911))
{var and__3546__auto____244912 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____244912))
{var and__3546__auto____244913 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____244913))
{var and__3546__auto____244914 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____244914))
{var and__3546__auto____244915 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____244915))
{return p2.call(null,z);
} else
{return and__3546__auto____244915;
}
} else
{return and__3546__auto____244914;
}
} else
{return and__3546__auto____244913;
}
} else
{return and__3546__auto____244912;
}
} else
{return and__3546__auto____244911;
}
})());
});
var ep2__244958 = (function() { 
var G__244960__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____244916 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____244916))
{return cljs.core.every_QMARK_.call(null,(function (p1__244887_SHARP_){
var and__3546__auto____244917 = p1.call(null,p1__244887_SHARP_);

if(cljs.core.truth_(and__3546__auto____244917))
{return p2.call(null,p1__244887_SHARP_);
} else
{return and__3546__auto____244917;
}
}),args);
} else
{return and__3546__auto____244916;
}
})());
};
var G__244960 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__244960__delegate.call(this, x, y, z, args);
};
G__244960.cljs$lang$maxFixedArity = 3;
G__244960.cljs$lang$applyTo = (function (arglist__244961){
var x = cljs.core.first(arglist__244961);
var y = cljs.core.first(cljs.core.next(arglist__244961));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244961)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__244961)));
return G__244960__delegate.call(this, x, y, z, args);
});
return G__244960;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__244954.call(this);
case  1 :
return ep2__244955.call(this,x);
case  2 :
return ep2__244956.call(this,x,y);
case  3 :
return ep2__244957.call(this,x,y,z);
default:
return ep2__244958.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__244958.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__244943 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__244962 = (function (){
return true;
});
var ep3__244963 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____244918 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____244918))
{var and__3546__auto____244919 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____244919))
{return p3.call(null,x);
} else
{return and__3546__auto____244919;
}
} else
{return and__3546__auto____244918;
}
})());
});
var ep3__244964 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____244920 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____244920))
{var and__3546__auto____244921 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____244921))
{var and__3546__auto____244922 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____244922))
{var and__3546__auto____244923 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____244923))
{var and__3546__auto____244924 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____244924))
{return p3.call(null,y);
} else
{return and__3546__auto____244924;
}
} else
{return and__3546__auto____244923;
}
} else
{return and__3546__auto____244922;
}
} else
{return and__3546__auto____244921;
}
} else
{return and__3546__auto____244920;
}
})());
});
var ep3__244965 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____244925 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____244925))
{var and__3546__auto____244926 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____244926))
{var and__3546__auto____244927 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____244927))
{var and__3546__auto____244928 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____244928))
{var and__3546__auto____244929 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____244929))
{var and__3546__auto____244930 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____244930))
{var and__3546__auto____244931 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____244931))
{var and__3546__auto____244932 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____244932))
{return p3.call(null,z);
} else
{return and__3546__auto____244932;
}
} else
{return and__3546__auto____244931;
}
} else
{return and__3546__auto____244930;
}
} else
{return and__3546__auto____244929;
}
} else
{return and__3546__auto____244928;
}
} else
{return and__3546__auto____244927;
}
} else
{return and__3546__auto____244926;
}
} else
{return and__3546__auto____244925;
}
})());
});
var ep3__244966 = (function() { 
var G__244968__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____244933 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____244933))
{return cljs.core.every_QMARK_.call(null,(function (p1__244888_SHARP_){
var and__3546__auto____244934 = p1.call(null,p1__244888_SHARP_);

if(cljs.core.truth_(and__3546__auto____244934))
{var and__3546__auto____244935 = p2.call(null,p1__244888_SHARP_);

if(cljs.core.truth_(and__3546__auto____244935))
{return p3.call(null,p1__244888_SHARP_);
} else
{return and__3546__auto____244935;
}
} else
{return and__3546__auto____244934;
}
}),args);
} else
{return and__3546__auto____244933;
}
})());
};
var G__244968 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__244968__delegate.call(this, x, y, z, args);
};
G__244968.cljs$lang$maxFixedArity = 3;
G__244968.cljs$lang$applyTo = (function (arglist__244969){
var x = cljs.core.first(arglist__244969);
var y = cljs.core.first(cljs.core.next(arglist__244969));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244969)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__244969)));
return G__244968__delegate.call(this, x, y, z, args);
});
return G__244968;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__244962.call(this);
case  1 :
return ep3__244963.call(this,x);
case  2 :
return ep3__244964.call(this,x,y);
case  3 :
return ep3__244965.call(this,x,y,z);
default:
return ep3__244966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__244966.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__244944 = (function() { 
var G__244970__delegate = function (p1,p2,p3,ps){
var ps__244936 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__244971 = (function (){
return true;
});
var epn__244972 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__244889_SHARP_){
return p1__244889_SHARP_.call(null,x);
}),ps__244936);
});
var epn__244973 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__244890_SHARP_){
var and__3546__auto____244937 = p1__244890_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____244937))
{return p1__244890_SHARP_.call(null,y);
} else
{return and__3546__auto____244937;
}
}),ps__244936);
});
var epn__244974 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__244891_SHARP_){
var and__3546__auto____244938 = p1__244891_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____244938))
{var and__3546__auto____244939 = p1__244891_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____244939))
{return p1__244891_SHARP_.call(null,z);
} else
{return and__3546__auto____244939;
}
} else
{return and__3546__auto____244938;
}
}),ps__244936);
});
var epn__244975 = (function() { 
var G__244977__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____244940 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____244940))
{return cljs.core.every_QMARK_.call(null,(function (p1__244892_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__244892_SHARP_,args);
}),ps__244936);
} else
{return and__3546__auto____244940;
}
})());
};
var G__244977 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__244977__delegate.call(this, x, y, z, args);
};
G__244977.cljs$lang$maxFixedArity = 3;
G__244977.cljs$lang$applyTo = (function (arglist__244978){
var x = cljs.core.first(arglist__244978);
var y = cljs.core.first(cljs.core.next(arglist__244978));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244978)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__244978)));
return G__244977__delegate.call(this, x, y, z, args);
});
return G__244977;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__244971.call(this);
case  1 :
return epn__244972.call(this,x);
case  2 :
return epn__244973.call(this,x,y);
case  3 :
return epn__244974.call(this,x,y,z);
default:
return epn__244975.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__244975.cljs$lang$applyTo;
return epn;
})()
};
var G__244970 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__244970__delegate.call(this, p1, p2, p3, ps);
};
G__244970.cljs$lang$maxFixedArity = 3;
G__244970.cljs$lang$applyTo = (function (arglist__244979){
var p1 = cljs.core.first(arglist__244979);
var p2 = cljs.core.first(cljs.core.next(arglist__244979));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__244979)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__244979)));
return G__244970__delegate.call(this, p1, p2, p3, ps);
});
return G__244970;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__244941.call(this,p1);
case  2 :
return every_pred__244942.call(this,p1,p2);
case  3 :
return every_pred__244943.call(this,p1,p2,p3);
default:
return every_pred__244944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__244944.cljs$lang$applyTo;
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
var some_fn__245019 = (function (p){
return (function() {
var sp1 = null;
var sp1__245024 = (function (){
return null;
});
var sp1__245025 = (function (x){
return p.call(null,x);
});
var sp1__245026 = (function (x,y){
var or__3548__auto____244981 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____244981))
{return or__3548__auto____244981;
} else
{return p.call(null,y);
}
});
var sp1__245027 = (function (x,y,z){
var or__3548__auto____244982 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____244982))
{return or__3548__auto____244982;
} else
{var or__3548__auto____244983 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____244983))
{return or__3548__auto____244983;
} else
{return p.call(null,z);
}
}
});
var sp1__245028 = (function() { 
var G__245030__delegate = function (x,y,z,args){
var or__3548__auto____244984 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____244984))
{return or__3548__auto____244984;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__245030 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__245030__delegate.call(this, x, y, z, args);
};
G__245030.cljs$lang$maxFixedArity = 3;
G__245030.cljs$lang$applyTo = (function (arglist__245031){
var x = cljs.core.first(arglist__245031);
var y = cljs.core.first(cljs.core.next(arglist__245031));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245031)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__245031)));
return G__245030__delegate.call(this, x, y, z, args);
});
return G__245030;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__245024.call(this);
case  1 :
return sp1__245025.call(this,x);
case  2 :
return sp1__245026.call(this,x,y);
case  3 :
return sp1__245027.call(this,x,y,z);
default:
return sp1__245028.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__245028.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__245020 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__245032 = (function (){
return null;
});
var sp2__245033 = (function (x){
var or__3548__auto____244985 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____244985))
{return or__3548__auto____244985;
} else
{return p2.call(null,x);
}
});
var sp2__245034 = (function (x,y){
var or__3548__auto____244986 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____244986))
{return or__3548__auto____244986;
} else
{var or__3548__auto____244987 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____244987))
{return or__3548__auto____244987;
} else
{var or__3548__auto____244988 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____244988))
{return or__3548__auto____244988;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__245035 = (function (x,y,z){
var or__3548__auto____244989 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____244989))
{return or__3548__auto____244989;
} else
{var or__3548__auto____244990 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____244990))
{return or__3548__auto____244990;
} else
{var or__3548__auto____244991 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____244991))
{return or__3548__auto____244991;
} else
{var or__3548__auto____244992 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____244992))
{return or__3548__auto____244992;
} else
{var or__3548__auto____244993 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____244993))
{return or__3548__auto____244993;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__245036 = (function() { 
var G__245038__delegate = function (x,y,z,args){
var or__3548__auto____244994 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____244994))
{return or__3548__auto____244994;
} else
{return cljs.core.some.call(null,(function (p1__244897_SHARP_){
var or__3548__auto____244995 = p1.call(null,p1__244897_SHARP_);

if(cljs.core.truth_(or__3548__auto____244995))
{return or__3548__auto____244995;
} else
{return p2.call(null,p1__244897_SHARP_);
}
}),args);
}
};
var G__245038 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__245038__delegate.call(this, x, y, z, args);
};
G__245038.cljs$lang$maxFixedArity = 3;
G__245038.cljs$lang$applyTo = (function (arglist__245039){
var x = cljs.core.first(arglist__245039);
var y = cljs.core.first(cljs.core.next(arglist__245039));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245039)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__245039)));
return G__245038__delegate.call(this, x, y, z, args);
});
return G__245038;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__245032.call(this);
case  1 :
return sp2__245033.call(this,x);
case  2 :
return sp2__245034.call(this,x,y);
case  3 :
return sp2__245035.call(this,x,y,z);
default:
return sp2__245036.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__245036.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__245021 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__245040 = (function (){
return null;
});
var sp3__245041 = (function (x){
var or__3548__auto____244996 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____244996))
{return or__3548__auto____244996;
} else
{var or__3548__auto____244997 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____244997))
{return or__3548__auto____244997;
} else
{return p3.call(null,x);
}
}
});
var sp3__245042 = (function (x,y){
var or__3548__auto____244998 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____244998))
{return or__3548__auto____244998;
} else
{var or__3548__auto____244999 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____244999))
{return or__3548__auto____244999;
} else
{var or__3548__auto____245000 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____245000))
{return or__3548__auto____245000;
} else
{var or__3548__auto____245001 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____245001))
{return or__3548__auto____245001;
} else
{var or__3548__auto____245002 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____245002))
{return or__3548__auto____245002;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__245043 = (function (x,y,z){
var or__3548__auto____245003 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____245003))
{return or__3548__auto____245003;
} else
{var or__3548__auto____245004 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____245004))
{return or__3548__auto____245004;
} else
{var or__3548__auto____245005 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____245005))
{return or__3548__auto____245005;
} else
{var or__3548__auto____245006 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____245006))
{return or__3548__auto____245006;
} else
{var or__3548__auto____245007 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____245007))
{return or__3548__auto____245007;
} else
{var or__3548__auto____245008 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____245008))
{return or__3548__auto____245008;
} else
{var or__3548__auto____245009 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____245009))
{return or__3548__auto____245009;
} else
{var or__3548__auto____245010 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____245010))
{return or__3548__auto____245010;
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
var sp3__245044 = (function() { 
var G__245046__delegate = function (x,y,z,args){
var or__3548__auto____245011 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____245011))
{return or__3548__auto____245011;
} else
{return cljs.core.some.call(null,(function (p1__244898_SHARP_){
var or__3548__auto____245012 = p1.call(null,p1__244898_SHARP_);

if(cljs.core.truth_(or__3548__auto____245012))
{return or__3548__auto____245012;
} else
{var or__3548__auto____245013 = p2.call(null,p1__244898_SHARP_);

if(cljs.core.truth_(or__3548__auto____245013))
{return or__3548__auto____245013;
} else
{return p3.call(null,p1__244898_SHARP_);
}
}
}),args);
}
};
var G__245046 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__245046__delegate.call(this, x, y, z, args);
};
G__245046.cljs$lang$maxFixedArity = 3;
G__245046.cljs$lang$applyTo = (function (arglist__245047){
var x = cljs.core.first(arglist__245047);
var y = cljs.core.first(cljs.core.next(arglist__245047));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245047)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__245047)));
return G__245046__delegate.call(this, x, y, z, args);
});
return G__245046;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__245040.call(this);
case  1 :
return sp3__245041.call(this,x);
case  2 :
return sp3__245042.call(this,x,y);
case  3 :
return sp3__245043.call(this,x,y,z);
default:
return sp3__245044.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__245044.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__245022 = (function() { 
var G__245048__delegate = function (p1,p2,p3,ps){
var ps__245014 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__245049 = (function (){
return null;
});
var spn__245050 = (function (x){
return cljs.core.some.call(null,(function (p1__244899_SHARP_){
return p1__244899_SHARP_.call(null,x);
}),ps__245014);
});
var spn__245051 = (function (x,y){
return cljs.core.some.call(null,(function (p1__244900_SHARP_){
var or__3548__auto____245015 = p1__244900_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____245015))
{return or__3548__auto____245015;
} else
{return p1__244900_SHARP_.call(null,y);
}
}),ps__245014);
});
var spn__245052 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__244901_SHARP_){
var or__3548__auto____245016 = p1__244901_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____245016))
{return or__3548__auto____245016;
} else
{var or__3548__auto____245017 = p1__244901_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____245017))
{return or__3548__auto____245017;
} else
{return p1__244901_SHARP_.call(null,z);
}
}
}),ps__245014);
});
var spn__245053 = (function() { 
var G__245055__delegate = function (x,y,z,args){
var or__3548__auto____245018 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____245018))
{return or__3548__auto____245018;
} else
{return cljs.core.some.call(null,(function (p1__244902_SHARP_){
return cljs.core.some.call(null,p1__244902_SHARP_,args);
}),ps__245014);
}
};
var G__245055 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__245055__delegate.call(this, x, y, z, args);
};
G__245055.cljs$lang$maxFixedArity = 3;
G__245055.cljs$lang$applyTo = (function (arglist__245056){
var x = cljs.core.first(arglist__245056);
var y = cljs.core.first(cljs.core.next(arglist__245056));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245056)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__245056)));
return G__245055__delegate.call(this, x, y, z, args);
});
return G__245055;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__245049.call(this);
case  1 :
return spn__245050.call(this,x);
case  2 :
return spn__245051.call(this,x,y);
case  3 :
return spn__245052.call(this,x,y,z);
default:
return spn__245053.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__245053.cljs$lang$applyTo;
return spn;
})()
};
var G__245048 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__245048__delegate.call(this, p1, p2, p3, ps);
};
G__245048.cljs$lang$maxFixedArity = 3;
G__245048.cljs$lang$applyTo = (function (arglist__245057){
var p1 = cljs.core.first(arglist__245057);
var p2 = cljs.core.first(cljs.core.next(arglist__245057));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245057)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__245057)));
return G__245048__delegate.call(this, p1, p2, p3, ps);
});
return G__245048;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__245019.call(this,p1);
case  2 :
return some_fn__245020.call(this,p1,p2);
case  3 :
return some_fn__245021.call(this,p1,p2,p3);
default:
return some_fn__245022.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__245022.cljs$lang$applyTo;
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
var map__245070 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____245058 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____245058))
{var s__245059 = temp__3698__auto____245058;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__245059)),map.call(null,f,cljs.core.rest.call(null,s__245059)));
} else
{return null;
}
})));
});
var map__245071 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__245060 = cljs.core.seq.call(null,c1);
var s2__245061 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____245062 = s1__245060;

if(cljs.core.truth_(and__3546__auto____245062))
{return s2__245061;
} else
{return and__3546__auto____245062;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__245060),cljs.core.first.call(null,s2__245061)),map.call(null,f,cljs.core.rest.call(null,s1__245060),cljs.core.rest.call(null,s2__245061)));
} else
{return null;
}
})));
});
var map__245072 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__245063 = cljs.core.seq.call(null,c1);
var s2__245064 = cljs.core.seq.call(null,c2);
var s3__245065 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____245066 = s1__245063;

if(cljs.core.truth_(and__3546__auto____245066))
{var and__3546__auto____245067 = s2__245064;

if(cljs.core.truth_(and__3546__auto____245067))
{return s3__245065;
} else
{return and__3546__auto____245067;
}
} else
{return and__3546__auto____245066;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__245063),cljs.core.first.call(null,s2__245064),cljs.core.first.call(null,s3__245065)),map.call(null,f,cljs.core.rest.call(null,s1__245063),cljs.core.rest.call(null,s2__245064),cljs.core.rest.call(null,s3__245065)));
} else
{return null;
}
})));
});
var map__245073 = (function() { 
var G__245075__delegate = function (f,c1,c2,c3,colls){
var step__245069 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__245068 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__245068)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__245068),step.call(null,map.call(null,cljs.core.rest,ss__245068)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__244980_SHARP_){
return cljs.core.apply.call(null,f,p1__244980_SHARP_);
}),step__245069.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__245075 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__245075__delegate.call(this, f, c1, c2, c3, colls);
};
G__245075.cljs$lang$maxFixedArity = 4;
G__245075.cljs$lang$applyTo = (function (arglist__245076){
var f = cljs.core.first(arglist__245076);
var c1 = cljs.core.first(cljs.core.next(arglist__245076));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245076)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__245076))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__245076))));
return G__245075__delegate.call(this, f, c1, c2, c3, colls);
});
return G__245075;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__245070.call(this,f,c1);
case  3 :
return map__245071.call(this,f,c1,c2);
case  4 :
return map__245072.call(this,f,c1,c2,c3);
default:
return map__245073.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__245073.cljs$lang$applyTo;
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
{var temp__3698__auto____245077 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____245077))
{var s__245078 = temp__3698__auto____245077;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__245078),take.call(null,(n - 1),cljs.core.rest.call(null,s__245078)));
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
var step__245081 = (function (n,coll){
while(true){
var s__245079 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____245080 = (n > 0);

if(cljs.core.truth_(and__3546__auto____245080))
{return s__245079;
} else
{return and__3546__auto____245080;
}
})()))
{{
var G__245082 = (n - 1);
var G__245083 = cljs.core.rest.call(null,s__245079);
n = G__245082;
coll = G__245083;
continue;
}
} else
{return s__245079;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__245081.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__245084 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__245085 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__245084.call(this,n);
case  2 :
return drop_last__245085.call(this,n,s);
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
var s__245087 = cljs.core.seq.call(null,coll);
var lead__245088 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__245088))
{{
var G__245089 = cljs.core.next.call(null,s__245087);
var G__245090 = cljs.core.next.call(null,lead__245088);
s__245087 = G__245089;
lead__245088 = G__245090;
continue;
}
} else
{return s__245087;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__245093 = (function (pred,coll){
while(true){
var s__245091 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____245092 = s__245091;

if(cljs.core.truth_(and__3546__auto____245092))
{return pred.call(null,cljs.core.first.call(null,s__245091));
} else
{return and__3546__auto____245092;
}
})()))
{{
var G__245094 = pred;
var G__245095 = cljs.core.rest.call(null,s__245091);
pred = G__245094;
coll = G__245095;
continue;
}
} else
{return s__245091;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__245093.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____245096 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____245096))
{var s__245097 = temp__3698__auto____245096;

return cljs.core.concat.call(null,s__245097,cycle.call(null,s__245097));
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
var repeat__245098 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__245099 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__245098.call(this,n);
case  2 :
return repeat__245099.call(this,n,x);
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
var repeatedly__245101 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__245102 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__245101.call(this,n);
case  2 :
return repeatedly__245102.call(this,n,f);
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
var interleave__245108 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__245104 = cljs.core.seq.call(null,c1);
var s2__245105 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____245106 = s1__245104;

if(cljs.core.truth_(and__3546__auto____245106))
{return s2__245105;
} else
{return and__3546__auto____245106;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__245104),cljs.core.cons.call(null,cljs.core.first.call(null,s2__245105),interleave.call(null,cljs.core.rest.call(null,s1__245104),cljs.core.rest.call(null,s2__245105))));
} else
{return null;
}
})));
});
var interleave__245109 = (function() { 
var G__245111__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__245107 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__245107)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__245107),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__245107)));
} else
{return null;
}
})));
};
var G__245111 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__245111__delegate.call(this, c1, c2, colls);
};
G__245111.cljs$lang$maxFixedArity = 2;
G__245111.cljs$lang$applyTo = (function (arglist__245112){
var c1 = cljs.core.first(arglist__245112);
var c2 = cljs.core.first(cljs.core.next(arglist__245112));
var colls = cljs.core.rest(cljs.core.next(arglist__245112));
return G__245111__delegate.call(this, c1, c2, colls);
});
return G__245111;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__245108.call(this,c1,c2);
default:
return interleave__245109.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__245109.cljs$lang$applyTo;
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
var cat__245115 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____245113 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____245113))
{var coll__245114 = temp__3695__auto____245113;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__245114),cat.call(null,cljs.core.rest.call(null,coll__245114),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__245115.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__245116 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__245117 = (function() { 
var G__245119__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__245119 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__245119__delegate.call(this, f, coll, colls);
};
G__245119.cljs$lang$maxFixedArity = 2;
G__245119.cljs$lang$applyTo = (function (arglist__245120){
var f = cljs.core.first(arglist__245120);
var coll = cljs.core.first(cljs.core.next(arglist__245120));
var colls = cljs.core.rest(cljs.core.next(arglist__245120));
return G__245119__delegate.call(this, f, coll, colls);
});
return G__245119;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__245116.call(this,f,coll);
default:
return mapcat__245117.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__245117.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____245121 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____245121))
{var s__245122 = temp__3698__auto____245121;

var f__245123 = cljs.core.first.call(null,s__245122);
var r__245124 = cljs.core.rest.call(null,s__245122);

if(cljs.core.truth_(pred.call(null,f__245123)))
{return cljs.core.cons.call(null,f__245123,filter.call(null,pred,r__245124));
} else
{return filter.call(null,pred,r__245124);
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
var walk__245126 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__245126.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__245125_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__245125_SHARP_));
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
var partition__245133 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__245134 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____245127 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____245127))
{var s__245128 = temp__3698__auto____245127;

var p__245129 = cljs.core.take.call(null,n,s__245128);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__245129))))
{return cljs.core.cons.call(null,p__245129,partition.call(null,n,step,cljs.core.drop.call(null,step,s__245128)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__245135 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____245130 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____245130))
{var s__245131 = temp__3698__auto____245130;

var p__245132 = cljs.core.take.call(null,n,s__245131);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__245132))))
{return cljs.core.cons.call(null,p__245132,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__245131)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__245132,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__245133.call(this,n,step);
case  3 :
return partition__245134.call(this,n,step,pad);
case  4 :
return partition__245135.call(this,n,step,pad,coll);
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
var get_in__245141 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__245142 = (function (m,ks,not_found){
var sentinel__245137 = cljs.core.lookup_sentinel;
var m__245138 = m;
var ks__245139 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__245139))
{var m__245140 = cljs.core.get.call(null,m__245138,cljs.core.first.call(null,ks__245139),sentinel__245137);

if(cljs.core.truth_((sentinel__245137 === m__245140)))
{return not_found;
} else
{{
var G__245144 = sentinel__245137;
var G__245145 = m__245140;
var G__245146 = cljs.core.next.call(null,ks__245139);
sentinel__245137 = G__245144;
m__245138 = G__245145;
ks__245139 = G__245146;
continue;
}
}
} else
{return m__245138;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__245141.call(this,m,ks);
case  3 :
return get_in__245142.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__245147,v){
var vec__245148__245149 = p__245147;
var k__245150 = cljs.core.nth.call(null,vec__245148__245149,0,null);
var ks__245151 = cljs.core.nthnext.call(null,vec__245148__245149,1);

if(cljs.core.truth_(ks__245151))
{return cljs.core.assoc.call(null,m,k__245150,assoc_in.call(null,cljs.core.get.call(null,m,k__245150),ks__245151,v));
} else
{return cljs.core.assoc.call(null,m,k__245150,v);
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
var update_in__delegate = function (m,p__245152,f,args){
var vec__245153__245154 = p__245152;
var k__245155 = cljs.core.nth.call(null,vec__245153__245154,0,null);
var ks__245156 = cljs.core.nthnext.call(null,vec__245153__245154,1);

if(cljs.core.truth_(ks__245156))
{return cljs.core.assoc.call(null,m,k__245155,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__245155),ks__245156,f,args));
} else
{return cljs.core.assoc.call(null,m,k__245155,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__245155),args));
}
};
var update_in = function (m,p__245152,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__245152, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__245157){
var m = cljs.core.first(arglist__245157);
var p__245152 = cljs.core.first(cljs.core.next(arglist__245157));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245157)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__245157)));
return update_in__delegate.call(this, m, p__245152, f, args);
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
var this__245158 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__245191 = null;
var G__245191__245192 = (function (coll,k){
var this__245159 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__245191__245193 = (function (coll,k,not_found){
var this__245160 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__245191 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__245191__245192.call(this,coll,k);
case  3 :
return G__245191__245193.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245191;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__245161 = this;
var new_array__245162 = cljs.core.aclone.call(null,this__245161.array);

(new_array__245162[k] = v);
return (new cljs.core.Vector(this__245161.meta,new_array__245162));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__245195 = null;
var G__245195__245196 = (function (tsym245163,k){
var this__245165 = this;
var tsym245163__245166 = this;

var coll__245167 = tsym245163__245166;

return cljs.core._lookup.call(null,coll__245167,k);
});
var G__245195__245197 = (function (tsym245164,k,not_found){
var this__245168 = this;
var tsym245164__245169 = this;

var coll__245170 = tsym245164__245169;

return cljs.core._lookup.call(null,coll__245170,k,not_found);
});
G__245195 = function(tsym245164,k,not_found){
switch(arguments.length){
case  2 :
return G__245195__245196.call(this,tsym245164,k);
case  3 :
return G__245195__245197.call(this,tsym245164,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245195;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__245171 = this;
var new_array__245172 = cljs.core.aclone.call(null,this__245171.array);

new_array__245172.push(o);
return (new cljs.core.Vector(this__245171.meta,new_array__245172));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__245199 = null;
var G__245199__245200 = (function (v,f){
var this__245173 = this;
return cljs.core.ci_reduce.call(null,this__245173.array,f);
});
var G__245199__245201 = (function (v,f,start){
var this__245174 = this;
return cljs.core.ci_reduce.call(null,this__245174.array,f,start);
});
G__245199 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__245199__245200.call(this,v,f);
case  3 :
return G__245199__245201.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245199;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__245175 = this;
if(cljs.core.truth_((this__245175.array.length > 0)))
{var vector_seq__245176 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__245175.array.length)))
{return cljs.core.cons.call(null,(this__245175.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__245176.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__245177 = this;
return this__245177.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__245178 = this;
var count__245179 = this__245178.array.length;

if(cljs.core.truth_((count__245179 > 0)))
{return (this__245178.array[(count__245179 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__245180 = this;
if(cljs.core.truth_((this__245180.array.length > 0)))
{var new_array__245181 = cljs.core.aclone.call(null,this__245180.array);

new_array__245181.pop();
return (new cljs.core.Vector(this__245180.meta,new_array__245181));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__245182 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__245183 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__245184 = this;
return (new cljs.core.Vector(meta,this__245184.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__245185 = this;
return this__245185.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__245203 = null;
var G__245203__245204 = (function (coll,n){
var this__245186 = this;
if(cljs.core.truth_((function (){var and__3546__auto____245187 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____245187))
{return (n < this__245186.array.length);
} else
{return and__3546__auto____245187;
}
})()))
{return (this__245186.array[n]);
} else
{return null;
}
});
var G__245203__245205 = (function (coll,n,not_found){
var this__245188 = this;
if(cljs.core.truth_((function (){var and__3546__auto____245189 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____245189))
{return (n < this__245188.array.length);
} else
{return and__3546__auto____245189;
}
})()))
{return (this__245188.array[n]);
} else
{return not_found;
}
});
G__245203 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__245203__245204.call(this,coll,n);
case  3 :
return G__245203__245205.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245203;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__245190 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__245190.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__245207 = pv.cnt;

if(cljs.core.truth_((cnt__245207 < 32)))
{return 0;
} else
{return (((cnt__245207 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__245208 = level;
var ret__245209 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__245208)))
{return ret__245209;
} else
{var embed__245210 = ret__245209;
var r__245211 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___245212 = (r__245211[0] = embed__245210);

{
var G__245213 = (ll__245208 - 5);
var G__245214 = r__245211;
ll__245208 = G__245213;
ret__245209 = G__245214;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__245215 = cljs.core.aclone.call(null,parent);
var subidx__245216 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__245215[subidx__245216] = tailnode);
return ret__245215;
} else
{var temp__3695__auto____245217 = (parent[subidx__245216]);

if(cljs.core.truth_(temp__3695__auto____245217))
{var child__245218 = temp__3695__auto____245217;

var node_to_insert__245219 = push_tail.call(null,pv,(level - 5),child__245218,tailnode);
var ___245220 = (ret__245215[subidx__245216] = node_to_insert__245219);

return ret__245215;
} else
{var node_to_insert__245221 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___245222 = (ret__245215[subidx__245216] = node_to_insert__245221);

return ret__245215;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____245223 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____245223))
{return (i < pv.cnt);
} else
{return and__3546__auto____245223;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__245224 = pv.root;
var level__245225 = pv.shift;

while(true){
if(cljs.core.truth_((level__245225 > 0)))
{{
var G__245226 = (node__245224[((i >> level__245225) & 31)]);
var G__245227 = (level__245225 - 5);
node__245224 = G__245226;
level__245225 = G__245227;
continue;
}
} else
{return node__245224;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__245228 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__245228[(i & 31)] = val);
return ret__245228;
} else
{var subidx__245229 = ((i >> level) & 31);
var ___245230 = (ret__245228[subidx__245229] = do_assoc.call(null,pv,(level - 5),(node[subidx__245229]),i,val));

return ret__245228;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__245231 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__245232 = pop_tail.call(null,pv,(level - 5),(node[subidx__245231]));

if(cljs.core.truth_((function (){var and__3546__auto____245233 = (new_child__245232 === null);

if(cljs.core.truth_(and__3546__auto____245233))
{return (subidx__245231 === 0);
} else
{return and__3546__auto____245233;
}
})()))
{return null;
} else
{var ret__245234 = cljs.core.aclone.call(null,node);
var ___245235 = (ret__245234[subidx__245231] = new_child__245232);

return ret__245234;
}
} else
{if(cljs.core.truth_((subidx__245231 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__245236 = cljs.core.aclone.call(null,node);
var ___245237 = (ret__245236[subidx__245231] = null);

return ret__245236;
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
var this__245238 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__245278 = null;
var G__245278__245279 = (function (coll,k){
var this__245239 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__245278__245280 = (function (coll,k,not_found){
var this__245240 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__245278 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__245278__245279.call(this,coll,k);
case  3 :
return G__245278__245280.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245278;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__245241 = this;
if(cljs.core.truth_((function (){var and__3546__auto____245242 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____245242))
{return (k < this__245241.cnt);
} else
{return and__3546__auto____245242;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__245243 = cljs.core.aclone.call(null,this__245241.tail);

(new_tail__245243[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__245241.meta,this__245241.cnt,this__245241.shift,this__245241.root,new_tail__245243));
} else
{return (new cljs.core.PersistentVector(this__245241.meta,this__245241.cnt,this__245241.shift,cljs.core.do_assoc.call(null,coll,this__245241.shift,this__245241.root,k,v),this__245241.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__245241.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__245241.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__245282 = null;
var G__245282__245283 = (function (tsym245244,k){
var this__245246 = this;
var tsym245244__245247 = this;

var coll__245248 = tsym245244__245247;

return cljs.core._lookup.call(null,coll__245248,k);
});
var G__245282__245284 = (function (tsym245245,k,not_found){
var this__245249 = this;
var tsym245245__245250 = this;

var coll__245251 = tsym245245__245250;

return cljs.core._lookup.call(null,coll__245251,k,not_found);
});
G__245282 = function(tsym245245,k,not_found){
switch(arguments.length){
case  2 :
return G__245282__245283.call(this,tsym245245,k);
case  3 :
return G__245282__245284.call(this,tsym245245,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245282;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__245252 = this;
if(cljs.core.truth_(((this__245252.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__245253 = cljs.core.aclone.call(null,this__245252.tail);

new_tail__245253.push(o);
return (new cljs.core.PersistentVector(this__245252.meta,(this__245252.cnt + 1),this__245252.shift,this__245252.root,new_tail__245253));
} else
{var root_overflow_QMARK___245254 = ((this__245252.cnt >> 5) > (1 << this__245252.shift));
var new_shift__245255 = (cljs.core.truth_(root_overflow_QMARK___245254)?(this__245252.shift + 5):this__245252.shift);
var new_root__245257 = (cljs.core.truth_(root_overflow_QMARK___245254)?(function (){var n_r__245256 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__245256[0] = this__245252.root);
(n_r__245256[1] = cljs.core.new_path.call(null,this__245252.shift,this__245252.tail));
return n_r__245256;
})():cljs.core.push_tail.call(null,coll,this__245252.shift,this__245252.root,this__245252.tail));

return (new cljs.core.PersistentVector(this__245252.meta,(this__245252.cnt + 1),new_shift__245255,new_root__245257,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__245286 = null;
var G__245286__245287 = (function (v,f){
var this__245258 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__245286__245288 = (function (v,f,start){
var this__245259 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__245286 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__245286__245287.call(this,v,f);
case  3 :
return G__245286__245288.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245286;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__245260 = this;
if(cljs.core.truth_((this__245260.cnt > 0)))
{var vector_seq__245261 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__245260.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__245261.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__245262 = this;
return this__245262.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__245263 = this;
if(cljs.core.truth_((this__245263.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__245263.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__245264 = this;
if(cljs.core.truth_((this__245264.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__245264.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__245264.meta);
} else
{if(cljs.core.truth_((1 < (this__245264.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__245264.meta,(this__245264.cnt - 1),this__245264.shift,this__245264.root,cljs.core.aclone.call(null,this__245264.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__245265 = cljs.core.array_for.call(null,coll,(this__245264.cnt - 2));
var nr__245266 = cljs.core.pop_tail.call(null,this__245264.shift,this__245264.root);
var new_root__245267 = (cljs.core.truth_((nr__245266 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__245266);
var cnt_1__245268 = (this__245264.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____245269 = (5 < this__245264.shift);

if(cljs.core.truth_(and__3546__auto____245269))
{return ((new_root__245267[1]) === null);
} else
{return and__3546__auto____245269;
}
})()))
{return (new cljs.core.PersistentVector(this__245264.meta,cnt_1__245268,(this__245264.shift - 5),(new_root__245267[0]),new_tail__245265));
} else
{return (new cljs.core.PersistentVector(this__245264.meta,cnt_1__245268,this__245264.shift,new_root__245267,new_tail__245265));
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
var this__245270 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__245271 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__245272 = this;
return (new cljs.core.PersistentVector(meta,this__245272.cnt,this__245272.shift,this__245272.root,this__245272.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__245273 = this;
return this__245273.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__245290 = null;
var G__245290__245291 = (function (coll,n){
var this__245274 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__245290__245292 = (function (coll,n,not_found){
var this__245275 = this;
if(cljs.core.truth_((function (){var and__3546__auto____245276 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____245276))
{return (n < this__245275.cnt);
} else
{return and__3546__auto____245276;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__245290 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__245290__245291.call(this,coll,n);
case  3 :
return G__245290__245292.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245290;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__245277 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__245277.meta);
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
vector.cljs$lang$applyTo = (function (arglist__245294){
var args = cljs.core.seq( arglist__245294 );;
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
var this__245295 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__245323 = null;
var G__245323__245324 = (function (coll,k){
var this__245296 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__245323__245325 = (function (coll,k,not_found){
var this__245297 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__245323 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__245323__245324.call(this,coll,k);
case  3 :
return G__245323__245325.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245323;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__245298 = this;
var v_pos__245299 = (this__245298.start + key);

return (new cljs.core.Subvec(this__245298.meta,cljs.core._assoc.call(null,this__245298.v,v_pos__245299,val),this__245298.start,((this__245298.end > (v_pos__245299 + 1)) ? this__245298.end : (v_pos__245299 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__245327 = null;
var G__245327__245328 = (function (tsym245300,k){
var this__245302 = this;
var tsym245300__245303 = this;

var coll__245304 = tsym245300__245303;

return cljs.core._lookup.call(null,coll__245304,k);
});
var G__245327__245329 = (function (tsym245301,k,not_found){
var this__245305 = this;
var tsym245301__245306 = this;

var coll__245307 = tsym245301__245306;

return cljs.core._lookup.call(null,coll__245307,k,not_found);
});
G__245327 = function(tsym245301,k,not_found){
switch(arguments.length){
case  2 :
return G__245327__245328.call(this,tsym245301,k);
case  3 :
return G__245327__245329.call(this,tsym245301,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245327;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__245308 = this;
return (new cljs.core.Subvec(this__245308.meta,cljs.core._assoc_n.call(null,this__245308.v,this__245308.end,o),this__245308.start,(this__245308.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__245331 = null;
var G__245331__245332 = (function (coll,f){
var this__245309 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__245331__245333 = (function (coll,f,start){
var this__245310 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__245331 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__245331__245332.call(this,coll,f);
case  3 :
return G__245331__245333.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245331;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__245311 = this;
var subvec_seq__245312 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__245311.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__245311.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__245312.call(null,this__245311.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__245313 = this;
return (this__245313.end - this__245313.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__245314 = this;
return cljs.core._nth.call(null,this__245314.v,(this__245314.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__245315 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__245315.start,this__245315.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__245315.meta,this__245315.v,this__245315.start,(this__245315.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__245316 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__245317 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__245318 = this;
return (new cljs.core.Subvec(meta,this__245318.v,this__245318.start,this__245318.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__245319 = this;
return this__245319.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__245335 = null;
var G__245335__245336 = (function (coll,n){
var this__245320 = this;
return cljs.core._nth.call(null,this__245320.v,(this__245320.start + n));
});
var G__245335__245337 = (function (coll,n,not_found){
var this__245321 = this;
return cljs.core._nth.call(null,this__245321.v,(this__245321.start + n),not_found);
});
G__245335 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__245335__245336.call(this,coll,n);
case  3 :
return G__245335__245337.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245335;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__245322 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__245322.meta);
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
var subvec__245339 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__245340 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__245339.call(this,v,start);
case  3 :
return subvec__245340.call(this,v,start,end);
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
var this__245342 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__245343 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__245344 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__245345 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__245345.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__245346 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__245347 = this;
return cljs.core._first.call(null,this__245347.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__245348 = this;
var temp__3695__auto____245349 = cljs.core.next.call(null,this__245348.front);

if(cljs.core.truth_(temp__3695__auto____245349))
{var f1__245350 = temp__3695__auto____245349;

return (new cljs.core.PersistentQueueSeq(this__245348.meta,f1__245350,this__245348.rear));
} else
{if(cljs.core.truth_((this__245348.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__245348.meta,this__245348.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__245351 = this;
return this__245351.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__245352 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__245352.front,this__245352.rear));
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
var this__245353 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__245354 = this;
if(cljs.core.truth_(this__245354.front))
{return (new cljs.core.PersistentQueue(this__245354.meta,(this__245354.count + 1),this__245354.front,cljs.core.conj.call(null,(function (){var or__3548__auto____245355 = this__245354.rear;

if(cljs.core.truth_(or__3548__auto____245355))
{return or__3548__auto____245355;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__245354.meta,(this__245354.count + 1),cljs.core.conj.call(null,this__245354.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__245356 = this;
var rear__245357 = cljs.core.seq.call(null,this__245356.rear);

if(cljs.core.truth_((function (){var or__3548__auto____245358 = this__245356.front;

if(cljs.core.truth_(or__3548__auto____245358))
{return or__3548__auto____245358;
} else
{return rear__245357;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__245356.front,cljs.core.seq.call(null,rear__245357)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__245359 = this;
return this__245359.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__245360 = this;
return cljs.core._first.call(null,this__245360.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__245361 = this;
if(cljs.core.truth_(this__245361.front))
{var temp__3695__auto____245362 = cljs.core.next.call(null,this__245361.front);

if(cljs.core.truth_(temp__3695__auto____245362))
{var f1__245363 = temp__3695__auto____245362;

return (new cljs.core.PersistentQueue(this__245361.meta,(this__245361.count - 1),f1__245363,this__245361.rear));
} else
{return (new cljs.core.PersistentQueue(this__245361.meta,(this__245361.count - 1),cljs.core.seq.call(null,this__245361.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__245364 = this;
return cljs.core.first.call(null,this__245364.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__245365 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__245366 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__245367 = this;
return (new cljs.core.PersistentQueue(meta,this__245367.count,this__245367.front,this__245367.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__245368 = this;
return this__245368.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__245369 = this;
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
var this__245370 = this;
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
var len__245371 = array.length;

var i__245372 = 0;

while(true){
if(cljs.core.truth_((i__245372 < len__245371)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__245372]))))
{return i__245372;
} else
{{
var G__245373 = (i__245372 + incr);
i__245372 = G__245373;
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
var obj_map_contains_key_QMARK___245375 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___245376 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____245374 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____245374))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____245374;
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
return obj_map_contains_key_QMARK___245375.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___245376.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__245379 = cljs.core.hash.call(null,a);
var b__245380 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__245379 < b__245380)))
{return -1;
} else
{if(cljs.core.truth_((a__245379 > b__245380)))
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
var this__245381 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__245408 = null;
var G__245408__245409 = (function (coll,k){
var this__245382 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__245408__245410 = (function (coll,k,not_found){
var this__245383 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__245383.strobj,(this__245383.strobj[k]),not_found);
});
G__245408 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__245408__245409.call(this,coll,k);
case  3 :
return G__245408__245410.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245408;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__245384 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__245385 = goog.object.clone.call(null,this__245384.strobj);
var overwrite_QMARK___245386 = new_strobj__245385.hasOwnProperty(k);

(new_strobj__245385[k] = v);
if(cljs.core.truth_(overwrite_QMARK___245386))
{return (new cljs.core.ObjMap(this__245384.meta,this__245384.keys,new_strobj__245385));
} else
{var new_keys__245387 = cljs.core.aclone.call(null,this__245384.keys);

new_keys__245387.push(k);
return (new cljs.core.ObjMap(this__245384.meta,new_keys__245387,new_strobj__245385));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__245384.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__245388 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__245388.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__245412 = null;
var G__245412__245413 = (function (tsym245389,k){
var this__245391 = this;
var tsym245389__245392 = this;

var coll__245393 = tsym245389__245392;

return cljs.core._lookup.call(null,coll__245393,k);
});
var G__245412__245414 = (function (tsym245390,k,not_found){
var this__245394 = this;
var tsym245390__245395 = this;

var coll__245396 = tsym245390__245395;

return cljs.core._lookup.call(null,coll__245396,k,not_found);
});
G__245412 = function(tsym245390,k,not_found){
switch(arguments.length){
case  2 :
return G__245412__245413.call(this,tsym245390,k);
case  3 :
return G__245412__245414.call(this,tsym245390,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245412;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__245397 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__245398 = this;
if(cljs.core.truth_((this__245398.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__245378_SHARP_){
return cljs.core.vector.call(null,p1__245378_SHARP_,(this__245398.strobj[p1__245378_SHARP_]));
}),this__245398.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__245399 = this;
return this__245399.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__245400 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__245401 = this;
return (new cljs.core.ObjMap(meta,this__245401.keys,this__245401.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__245402 = this;
return this__245402.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__245403 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__245403.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__245404 = this;
if(cljs.core.truth_((function (){var and__3546__auto____245405 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____245405))
{return this__245404.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____245405;
}
})()))
{var new_keys__245406 = cljs.core.aclone.call(null,this__245404.keys);
var new_strobj__245407 = goog.object.clone.call(null,this__245404.strobj);

new_keys__245406.splice(cljs.core.scan_array.call(null,1,k,new_keys__245406),1);
cljs.core.js_delete.call(null,new_strobj__245407,k);
return (new cljs.core.ObjMap(this__245404.meta,new_keys__245406,new_strobj__245407));
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
var this__245417 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__245455 = null;
var G__245455__245456 = (function (coll,k){
var this__245418 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__245455__245457 = (function (coll,k,not_found){
var this__245419 = this;
var bucket__245420 = (this__245419.hashobj[cljs.core.hash.call(null,k)]);
var i__245421 = (cljs.core.truth_(bucket__245420)?cljs.core.scan_array.call(null,2,k,bucket__245420):null);

if(cljs.core.truth_(i__245421))
{return (bucket__245420[(i__245421 + 1)]);
} else
{return not_found;
}
});
G__245455 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__245455__245456.call(this,coll,k);
case  3 :
return G__245455__245457.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245455;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__245422 = this;
var h__245423 = cljs.core.hash.call(null,k);
var bucket__245424 = (this__245422.hashobj[h__245423]);

if(cljs.core.truth_(bucket__245424))
{var new_bucket__245425 = cljs.core.aclone.call(null,bucket__245424);
var new_hashobj__245426 = goog.object.clone.call(null,this__245422.hashobj);

(new_hashobj__245426[h__245423] = new_bucket__245425);
var temp__3695__auto____245427 = cljs.core.scan_array.call(null,2,k,new_bucket__245425);

if(cljs.core.truth_(temp__3695__auto____245427))
{var i__245428 = temp__3695__auto____245427;

(new_bucket__245425[(i__245428 + 1)] = v);
return (new cljs.core.HashMap(this__245422.meta,this__245422.count,new_hashobj__245426));
} else
{new_bucket__245425.push(k,v);
return (new cljs.core.HashMap(this__245422.meta,(this__245422.count + 1),new_hashobj__245426));
}
} else
{var new_hashobj__245429 = goog.object.clone.call(null,this__245422.hashobj);

(new_hashobj__245429[h__245423] = [k,v]);
return (new cljs.core.HashMap(this__245422.meta,(this__245422.count + 1),new_hashobj__245429));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__245430 = this;
var bucket__245431 = (this__245430.hashobj[cljs.core.hash.call(null,k)]);
var i__245432 = (cljs.core.truth_(bucket__245431)?cljs.core.scan_array.call(null,2,k,bucket__245431):null);

if(cljs.core.truth_(i__245432))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__245459 = null;
var G__245459__245460 = (function (tsym245433,k){
var this__245435 = this;
var tsym245433__245436 = this;

var coll__245437 = tsym245433__245436;

return cljs.core._lookup.call(null,coll__245437,k);
});
var G__245459__245461 = (function (tsym245434,k,not_found){
var this__245438 = this;
var tsym245434__245439 = this;

var coll__245440 = tsym245434__245439;

return cljs.core._lookup.call(null,coll__245440,k,not_found);
});
G__245459 = function(tsym245434,k,not_found){
switch(arguments.length){
case  2 :
return G__245459__245460.call(this,tsym245434,k);
case  3 :
return G__245459__245461.call(this,tsym245434,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245459;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__245441 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__245442 = this;
if(cljs.core.truth_((this__245442.count > 0)))
{var hashes__245443 = cljs.core.js_keys.call(null,this__245442.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__245416_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__245442.hashobj[p1__245416_SHARP_])));
}),hashes__245443);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__245444 = this;
return this__245444.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__245445 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__245446 = this;
return (new cljs.core.HashMap(meta,this__245446.count,this__245446.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__245447 = this;
return this__245447.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__245448 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__245448.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__245449 = this;
var h__245450 = cljs.core.hash.call(null,k);
var bucket__245451 = (this__245449.hashobj[h__245450]);
var i__245452 = (cljs.core.truth_(bucket__245451)?cljs.core.scan_array.call(null,2,k,bucket__245451):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__245452)))
{return coll;
} else
{var new_hashobj__245453 = goog.object.clone.call(null,this__245449.hashobj);

if(cljs.core.truth_((3 > bucket__245451.length)))
{cljs.core.js_delete.call(null,new_hashobj__245453,h__245450);
} else
{var new_bucket__245454 = cljs.core.aclone.call(null,bucket__245451);

new_bucket__245454.splice(i__245452,2);
(new_hashobj__245453[h__245450] = new_bucket__245454);
}
return (new cljs.core.HashMap(this__245449.meta,(this__245449.count - 1),new_hashobj__245453));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__245463 = ks.length;

var i__245464 = 0;
var out__245465 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__245464 < len__245463)))
{{
var G__245466 = (i__245464 + 1);
var G__245467 = cljs.core.assoc.call(null,out__245465,(ks[i__245464]),(vs[i__245464]));
i__245464 = G__245466;
out__245465 = G__245467;
continue;
}
} else
{return out__245465;
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
var in$__245468 = cljs.core.seq.call(null,keyvals);
var out__245469 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__245468))
{{
var G__245470 = cljs.core.nnext.call(null,in$__245468);
var G__245471 = cljs.core.assoc.call(null,out__245469,cljs.core.first.call(null,in$__245468),cljs.core.second.call(null,in$__245468));
in$__245468 = G__245470;
out__245469 = G__245471;
continue;
}
} else
{return out__245469;
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
hash_map.cljs$lang$applyTo = (function (arglist__245472){
var keyvals = cljs.core.seq( arglist__245472 );;
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
{return cljs.core.reduce.call(null,(function (p1__245473_SHARP_,p2__245474_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____245475 = p1__245473_SHARP_;

if(cljs.core.truth_(or__3548__auto____245475))
{return or__3548__auto____245475;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__245474_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__245476){
var maps = cljs.core.seq( arglist__245476 );;
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
{var merge_entry__245479 = (function (m,e){
var k__245477 = cljs.core.first.call(null,e);
var v__245478 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__245477)))
{return cljs.core.assoc.call(null,m,k__245477,f.call(null,cljs.core.get.call(null,m,k__245477),v__245478));
} else
{return cljs.core.assoc.call(null,m,k__245477,v__245478);
}
});
var merge2__245481 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__245479,(function (){var or__3548__auto____245480 = m1;

if(cljs.core.truth_(or__3548__auto____245480))
{return or__3548__auto____245480;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__245481,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__245482){
var f = cljs.core.first(arglist__245482);
var maps = cljs.core.rest(arglist__245482);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__245484 = cljs.core.ObjMap.fromObject([],{});
var keys__245485 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__245485))
{var key__245486 = cljs.core.first.call(null,keys__245485);
var entry__245487 = cljs.core.get.call(null,map,key__245486,"\uFDD0'user/not-found");

{
var G__245488 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__245487,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__245484,key__245486,entry__245487):ret__245484);
var G__245489 = cljs.core.next.call(null,keys__245485);
ret__245484 = G__245488;
keys__245485 = G__245489;
continue;
}
} else
{return ret__245484;
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
var this__245490 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__245511 = null;
var G__245511__245512 = (function (coll,v){
var this__245491 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__245511__245513 = (function (coll,v,not_found){
var this__245492 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__245492.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__245511 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__245511__245512.call(this,coll,v);
case  3 :
return G__245511__245513.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245511;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__245515 = null;
var G__245515__245516 = (function (tsym245493,k){
var this__245495 = this;
var tsym245493__245496 = this;

var coll__245497 = tsym245493__245496;

return cljs.core._lookup.call(null,coll__245497,k);
});
var G__245515__245517 = (function (tsym245494,k,not_found){
var this__245498 = this;
var tsym245494__245499 = this;

var coll__245500 = tsym245494__245499;

return cljs.core._lookup.call(null,coll__245500,k,not_found);
});
G__245515 = function(tsym245494,k,not_found){
switch(arguments.length){
case  2 :
return G__245515__245516.call(this,tsym245494,k);
case  3 :
return G__245515__245517.call(this,tsym245494,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245515;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__245501 = this;
return (new cljs.core.Set(this__245501.meta,cljs.core.assoc.call(null,this__245501.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__245502 = this;
return cljs.core.keys.call(null,this__245502.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__245503 = this;
return (new cljs.core.Set(this__245503.meta,cljs.core.dissoc.call(null,this__245503.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__245504 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__245505 = this;
var and__3546__auto____245506 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____245506))
{var and__3546__auto____245507 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____245507))
{return cljs.core.every_QMARK_.call(null,(function (p1__245483_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__245483_SHARP_);
}),other);
} else
{return and__3546__auto____245507;
}
} else
{return and__3546__auto____245506;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__245508 = this;
return (new cljs.core.Set(meta,this__245508.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__245509 = this;
return this__245509.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__245510 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__245510.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__245520 = cljs.core.seq.call(null,coll);
var out__245521 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__245520))))
{{
var G__245522 = cljs.core.rest.call(null,in$__245520);
var G__245523 = cljs.core.conj.call(null,out__245521,cljs.core.first.call(null,in$__245520));
in$__245520 = G__245522;
out__245521 = G__245523;
continue;
}
} else
{return out__245521;
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
{var n__245524 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____245525 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____245525))
{var e__245526 = temp__3695__auto____245525;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__245526));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__245524,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__245519_SHARP_){
var temp__3695__auto____245527 = cljs.core.find.call(null,smap,p1__245519_SHARP_);

if(cljs.core.truth_(temp__3695__auto____245527))
{var e__245528 = temp__3695__auto____245527;

return cljs.core.second.call(null,e__245528);
} else
{return p1__245519_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__245536 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__245529,seen){
while(true){
var vec__245530__245531 = p__245529;
var f__245532 = cljs.core.nth.call(null,vec__245530__245531,0,null);
var xs__245533 = vec__245530__245531;

var temp__3698__auto____245534 = cljs.core.seq.call(null,xs__245533);

if(cljs.core.truth_(temp__3698__auto____245534))
{var s__245535 = temp__3698__auto____245534;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__245532)))
{{
var G__245537 = cljs.core.rest.call(null,s__245535);
var G__245538 = seen;
p__245529 = G__245537;
seen = G__245538;
continue;
}
} else
{return cljs.core.cons.call(null,f__245532,step.call(null,cljs.core.rest.call(null,s__245535),cljs.core.conj.call(null,seen,f__245532)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__245536.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__245539 = cljs.core.PersistentVector.fromArray([]);
var s__245540 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__245540)))
{{
var G__245541 = cljs.core.conj.call(null,ret__245539,cljs.core.first.call(null,s__245540));
var G__245542 = cljs.core.next.call(null,s__245540);
ret__245539 = G__245541;
s__245540 = G__245542;
continue;
}
} else
{return cljs.core.seq.call(null,ret__245539);
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
{if(cljs.core.truth_((function (){var or__3548__auto____245543 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____245543))
{return or__3548__auto____245543;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__245544 = x.lastIndexOf("/");

if(cljs.core.truth_((i__245544 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__245544 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____245545 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____245545))
{return or__3548__auto____245545;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__245546 = x.lastIndexOf("/");

if(cljs.core.truth_((i__245546 > -1)))
{return cljs.core.subs.call(null,x,2,i__245546);
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
var map__245549 = cljs.core.ObjMap.fromObject([],{});
var ks__245550 = cljs.core.seq.call(null,keys);
var vs__245551 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____245552 = ks__245550;

if(cljs.core.truth_(and__3546__auto____245552))
{return vs__245551;
} else
{return and__3546__auto____245552;
}
})()))
{{
var G__245553 = cljs.core.assoc.call(null,map__245549,cljs.core.first.call(null,ks__245550),cljs.core.first.call(null,vs__245551));
var G__245554 = cljs.core.next.call(null,ks__245550);
var G__245555 = cljs.core.next.call(null,vs__245551);
map__245549 = G__245553;
ks__245550 = G__245554;
vs__245551 = G__245555;
continue;
}
} else
{return map__245549;
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
var max_key__245558 = (function (k,x){
return x;
});
var max_key__245559 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__245560 = (function() { 
var G__245562__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__245547_SHARP_,p2__245548_SHARP_){
return max_key.call(null,k,p1__245547_SHARP_,p2__245548_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__245562 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__245562__delegate.call(this, k, x, y, more);
};
G__245562.cljs$lang$maxFixedArity = 3;
G__245562.cljs$lang$applyTo = (function (arglist__245563){
var k = cljs.core.first(arglist__245563);
var x = cljs.core.first(cljs.core.next(arglist__245563));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245563)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__245563)));
return G__245562__delegate.call(this, k, x, y, more);
});
return G__245562;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__245558.call(this,k,x);
case  3 :
return max_key__245559.call(this,k,x,y);
default:
return max_key__245560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__245560.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__245564 = (function (k,x){
return x;
});
var min_key__245565 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__245566 = (function() { 
var G__245568__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__245556_SHARP_,p2__245557_SHARP_){
return min_key.call(null,k,p1__245556_SHARP_,p2__245557_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__245568 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__245568__delegate.call(this, k, x, y, more);
};
G__245568.cljs$lang$maxFixedArity = 3;
G__245568.cljs$lang$applyTo = (function (arglist__245569){
var k = cljs.core.first(arglist__245569);
var x = cljs.core.first(cljs.core.next(arglist__245569));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245569)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__245569)));
return G__245568__delegate.call(this, k, x, y, more);
});
return G__245568;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__245564.call(this,k,x);
case  3 :
return min_key__245565.call(this,k,x,y);
default:
return min_key__245566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__245566.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__245572 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__245573 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____245570 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____245570))
{var s__245571 = temp__3698__auto____245570;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__245571),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__245571)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__245572.call(this,n,step);
case  3 :
return partition_all__245573.call(this,n,step,coll);
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
var temp__3698__auto____245575 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____245575))
{var s__245576 = temp__3698__auto____245575;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__245576))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__245576),take_while.call(null,pred,cljs.core.rest.call(null,s__245576)));
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
var this__245577 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__245578 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__245594 = null;
var G__245594__245595 = (function (rng,f){
var this__245579 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__245594__245596 = (function (rng,f,s){
var this__245580 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__245594 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__245594__245595.call(this,rng,f);
case  3 :
return G__245594__245596.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245594;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__245581 = this;
var comp__245582 = (cljs.core.truth_((this__245581.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__245582.call(null,this__245581.start,this__245581.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__245583 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__245583.end - this__245583.start) / this__245583.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__245584 = this;
return this__245584.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__245585 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__245585.meta,(this__245585.start + this__245585.step),this__245585.end,this__245585.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__245586 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__245587 = this;
return (new cljs.core.Range(meta,this__245587.start,this__245587.end,this__245587.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__245588 = this;
return this__245588.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__245598 = null;
var G__245598__245599 = (function (rng,n){
var this__245589 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__245589.start + (n * this__245589.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____245590 = (this__245589.start > this__245589.end);

if(cljs.core.truth_(and__3546__auto____245590))
{return cljs.core._EQ_.call(null,this__245589.step,0);
} else
{return and__3546__auto____245590;
}
})()))
{return this__245589.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__245598__245600 = (function (rng,n,not_found){
var this__245591 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__245591.start + (n * this__245591.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____245592 = (this__245591.start > this__245591.end);

if(cljs.core.truth_(and__3546__auto____245592))
{return cljs.core._EQ_.call(null,this__245591.step,0);
} else
{return and__3546__auto____245592;
}
})()))
{return this__245591.start;
} else
{return not_found;
}
}
});
G__245598 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__245598__245599.call(this,rng,n);
case  3 :
return G__245598__245600.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__245598;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__245593 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__245593.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__245602 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__245603 = (function (end){
return range.call(null,0,end,1);
});
var range__245604 = (function (start,end){
return range.call(null,start,end,1);
});
var range__245605 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__245602.call(this);
case  1 :
return range__245603.call(this,start);
case  2 :
return range__245604.call(this,start,end);
case  3 :
return range__245605.call(this,start,end,step);
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
var temp__3698__auto____245607 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____245607))
{var s__245608 = temp__3698__auto____245607;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__245608),take_nth.call(null,n,cljs.core.drop.call(null,n,s__245608)));
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
var temp__3698__auto____245610 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____245610))
{var s__245611 = temp__3698__auto____245610;

var fst__245612 = cljs.core.first.call(null,s__245611);
var fv__245613 = f.call(null,fst__245612);
var run__245614 = cljs.core.cons.call(null,fst__245612,cljs.core.take_while.call(null,(function (p1__245609_SHARP_){
return cljs.core._EQ_.call(null,fv__245613,f.call(null,p1__245609_SHARP_));
}),cljs.core.next.call(null,s__245611)));

return cljs.core.cons.call(null,run__245614,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__245614),s__245611))));
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
var reductions__245629 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____245625 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____245625))
{var s__245626 = temp__3695__auto____245625;

return reductions.call(null,f,cljs.core.first.call(null,s__245626),cljs.core.rest.call(null,s__245626));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__245630 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____245627 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____245627))
{var s__245628 = temp__3698__auto____245627;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__245628)),cljs.core.rest.call(null,s__245628));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__245629.call(this,f,init);
case  3 :
return reductions__245630.call(this,f,init,coll);
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
var juxt__245633 = (function (f){
return (function() {
var G__245638 = null;
var G__245638__245639 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__245638__245640 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__245638__245641 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__245638__245642 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__245638__245643 = (function() { 
var G__245645__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__245645 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__245645__delegate.call(this, x, y, z, args);
};
G__245645.cljs$lang$maxFixedArity = 3;
G__245645.cljs$lang$applyTo = (function (arglist__245646){
var x = cljs.core.first(arglist__245646);
var y = cljs.core.first(cljs.core.next(arglist__245646));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245646)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__245646)));
return G__245645__delegate.call(this, x, y, z, args);
});
return G__245645;
})()
;
G__245638 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__245638__245639.call(this);
case  1 :
return G__245638__245640.call(this,x);
case  2 :
return G__245638__245641.call(this,x,y);
case  3 :
return G__245638__245642.call(this,x,y,z);
default:
return G__245638__245643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__245638.cljs$lang$maxFixedArity = 3;
G__245638.cljs$lang$applyTo = G__245638__245643.cljs$lang$applyTo;
return G__245638;
})()
});
var juxt__245634 = (function (f,g){
return (function() {
var G__245647 = null;
var G__245647__245648 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__245647__245649 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__245647__245650 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__245647__245651 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__245647__245652 = (function() { 
var G__245654__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__245654 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__245654__delegate.call(this, x, y, z, args);
};
G__245654.cljs$lang$maxFixedArity = 3;
G__245654.cljs$lang$applyTo = (function (arglist__245655){
var x = cljs.core.first(arglist__245655);
var y = cljs.core.first(cljs.core.next(arglist__245655));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245655)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__245655)));
return G__245654__delegate.call(this, x, y, z, args);
});
return G__245654;
})()
;
G__245647 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__245647__245648.call(this);
case  1 :
return G__245647__245649.call(this,x);
case  2 :
return G__245647__245650.call(this,x,y);
case  3 :
return G__245647__245651.call(this,x,y,z);
default:
return G__245647__245652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__245647.cljs$lang$maxFixedArity = 3;
G__245647.cljs$lang$applyTo = G__245647__245652.cljs$lang$applyTo;
return G__245647;
})()
});
var juxt__245635 = (function (f,g,h){
return (function() {
var G__245656 = null;
var G__245656__245657 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__245656__245658 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__245656__245659 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__245656__245660 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__245656__245661 = (function() { 
var G__245663__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__245663 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__245663__delegate.call(this, x, y, z, args);
};
G__245663.cljs$lang$maxFixedArity = 3;
G__245663.cljs$lang$applyTo = (function (arglist__245664){
var x = cljs.core.first(arglist__245664);
var y = cljs.core.first(cljs.core.next(arglist__245664));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245664)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__245664)));
return G__245663__delegate.call(this, x, y, z, args);
});
return G__245663;
})()
;
G__245656 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__245656__245657.call(this);
case  1 :
return G__245656__245658.call(this,x);
case  2 :
return G__245656__245659.call(this,x,y);
case  3 :
return G__245656__245660.call(this,x,y,z);
default:
return G__245656__245661.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__245656.cljs$lang$maxFixedArity = 3;
G__245656.cljs$lang$applyTo = G__245656__245661.cljs$lang$applyTo;
return G__245656;
})()
});
var juxt__245636 = (function() { 
var G__245665__delegate = function (f,g,h,fs){
var fs__245632 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__245666 = null;
var G__245666__245667 = (function (){
return cljs.core.reduce.call(null,(function (p1__245615_SHARP_,p2__245616_SHARP_){
return cljs.core.conj.call(null,p1__245615_SHARP_,p2__245616_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__245632);
});
var G__245666__245668 = (function (x){
return cljs.core.reduce.call(null,(function (p1__245617_SHARP_,p2__245618_SHARP_){
return cljs.core.conj.call(null,p1__245617_SHARP_,p2__245618_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__245632);
});
var G__245666__245669 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__245619_SHARP_,p2__245620_SHARP_){
return cljs.core.conj.call(null,p1__245619_SHARP_,p2__245620_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__245632);
});
var G__245666__245670 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__245621_SHARP_,p2__245622_SHARP_){
return cljs.core.conj.call(null,p1__245621_SHARP_,p2__245622_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__245632);
});
var G__245666__245671 = (function() { 
var G__245673__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__245623_SHARP_,p2__245624_SHARP_){
return cljs.core.conj.call(null,p1__245623_SHARP_,cljs.core.apply.call(null,p2__245624_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__245632);
};
var G__245673 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__245673__delegate.call(this, x, y, z, args);
};
G__245673.cljs$lang$maxFixedArity = 3;
G__245673.cljs$lang$applyTo = (function (arglist__245674){
var x = cljs.core.first(arglist__245674);
var y = cljs.core.first(cljs.core.next(arglist__245674));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245674)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__245674)));
return G__245673__delegate.call(this, x, y, z, args);
});
return G__245673;
})()
;
G__245666 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__245666__245667.call(this);
case  1 :
return G__245666__245668.call(this,x);
case  2 :
return G__245666__245669.call(this,x,y);
case  3 :
return G__245666__245670.call(this,x,y,z);
default:
return G__245666__245671.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__245666.cljs$lang$maxFixedArity = 3;
G__245666.cljs$lang$applyTo = G__245666__245671.cljs$lang$applyTo;
return G__245666;
})()
};
var G__245665 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__245665__delegate.call(this, f, g, h, fs);
};
G__245665.cljs$lang$maxFixedArity = 3;
G__245665.cljs$lang$applyTo = (function (arglist__245675){
var f = cljs.core.first(arglist__245675);
var g = cljs.core.first(cljs.core.next(arglist__245675));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245675)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__245675)));
return G__245665__delegate.call(this, f, g, h, fs);
});
return G__245665;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__245633.call(this,f);
case  2 :
return juxt__245634.call(this,f,g);
case  3 :
return juxt__245635.call(this,f,g,h);
default:
return juxt__245636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__245636.cljs$lang$applyTo;
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
var dorun__245677 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__245680 = cljs.core.next.call(null,coll);
coll = G__245680;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__245678 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____245676 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____245676))
{return (n > 0);
} else
{return and__3546__auto____245676;
}
})()))
{{
var G__245681 = (n - 1);
var G__245682 = cljs.core.next.call(null,coll);
n = G__245681;
coll = G__245682;
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
return dorun__245677.call(this,n);
case  2 :
return dorun__245678.call(this,n,coll);
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
var doall__245683 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__245684 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__245683.call(this,n);
case  2 :
return doall__245684.call(this,n,coll);
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
var matches__245686 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__245686),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__245686),1)))
{return cljs.core.first.call(null,matches__245686);
} else
{return cljs.core.vec.call(null,matches__245686);
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
var matches__245687 = re.exec(s);

if(cljs.core.truth_((matches__245687 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__245687),1)))
{return cljs.core.first.call(null,matches__245687);
} else
{return cljs.core.vec.call(null,matches__245687);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__245688 = cljs.core.re_find.call(null,re,s);
var match_idx__245689 = s.search(re);
var match_str__245690 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__245688))?cljs.core.first.call(null,match_data__245688):match_data__245688);
var post_match__245691 = cljs.core.subs.call(null,s,(match_idx__245689 + cljs.core.count.call(null,match_str__245690)));

if(cljs.core.truth_(match_data__245688))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__245688,re_seq.call(null,re,post_match__245691));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__245693__245694 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___245695 = cljs.core.nth.call(null,vec__245693__245694,0,null);
var flags__245696 = cljs.core.nth.call(null,vec__245693__245694,1,null);
var pattern__245697 = cljs.core.nth.call(null,vec__245693__245694,2,null);

return (new RegExp(pattern__245697,flags__245696));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__245692_SHARP_){
return print_one.call(null,p1__245692_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____245698 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____245698))
{var and__3546__auto____245702 = (function (){var x__451__auto____245699 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____245700 = x__451__auto____245699;

if(cljs.core.truth_(and__3546__auto____245700))
{var and__3546__auto____245701 = x__451__auto____245699.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____245701))
{return cljs.core.not.call(null,x__451__auto____245699.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____245701;
}
} else
{return and__3546__auto____245700;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____245699);
}
})();

if(cljs.core.truth_(and__3546__auto____245702))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____245702;
}
} else
{return and__3546__auto____245698;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____245703 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____245704 = x__451__auto____245703;

if(cljs.core.truth_(and__3546__auto____245704))
{var and__3546__auto____245705 = x__451__auto____245703.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____245705))
{return cljs.core.not.call(null,x__451__auto____245703.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____245705;
}
} else
{return and__3546__auto____245704;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____245703);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__245706 = cljs.core.first.call(null,objs);
var sb__245707 = (new goog.string.StringBuffer());

var G__245708__245709 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__245708__245709))
{var obj__245710 = cljs.core.first.call(null,G__245708__245709);
var G__245708__245711 = G__245708__245709;

while(true){
if(cljs.core.truth_((obj__245710 === first_obj__245706)))
{} else
{sb__245707.append(" ");
}
var G__245712__245713 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__245710,opts));

if(cljs.core.truth_(G__245712__245713))
{var string__245714 = cljs.core.first.call(null,G__245712__245713);
var G__245712__245715 = G__245712__245713;

while(true){
sb__245707.append(string__245714);
var temp__3698__auto____245716 = cljs.core.next.call(null,G__245712__245715);

if(cljs.core.truth_(temp__3698__auto____245716))
{var G__245712__245717 = temp__3698__auto____245716;

{
var G__245720 = cljs.core.first.call(null,G__245712__245717);
var G__245721 = G__245712__245717;
string__245714 = G__245720;
G__245712__245715 = G__245721;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____245718 = cljs.core.next.call(null,G__245708__245711);

if(cljs.core.truth_(temp__3698__auto____245718))
{var G__245708__245719 = temp__3698__auto____245718;

{
var G__245722 = cljs.core.first.call(null,G__245708__245719);
var G__245723 = G__245708__245719;
obj__245710 = G__245722;
G__245708__245711 = G__245723;
continue;
}
} else
{}
break;
}
} else
{}
return sb__245707;
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
var sb__245724 = cljs.core.pr_sb.call(null,objs,opts);

sb__245724.append("\n");
return cljs.core.str.call(null,sb__245724);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__245725 = cljs.core.first.call(null,objs);

var G__245726__245727 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__245726__245727))
{var obj__245728 = cljs.core.first.call(null,G__245726__245727);
var G__245726__245729 = G__245726__245727;

while(true){
if(cljs.core.truth_((obj__245728 === first_obj__245725)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__245730__245731 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__245728,opts));

if(cljs.core.truth_(G__245730__245731))
{var string__245732 = cljs.core.first.call(null,G__245730__245731);
var G__245730__245733 = G__245730__245731;

while(true){
cljs.core.string_print.call(null,string__245732);
var temp__3698__auto____245734 = cljs.core.next.call(null,G__245730__245733);

if(cljs.core.truth_(temp__3698__auto____245734))
{var G__245730__245735 = temp__3698__auto____245734;

{
var G__245738 = cljs.core.first.call(null,G__245730__245735);
var G__245739 = G__245730__245735;
string__245732 = G__245738;
G__245730__245733 = G__245739;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____245736 = cljs.core.next.call(null,G__245726__245729);

if(cljs.core.truth_(temp__3698__auto____245736))
{var G__245726__245737 = temp__3698__auto____245736;

{
var G__245740 = cljs.core.first.call(null,G__245726__245737);
var G__245741 = G__245726__245737;
obj__245728 = G__245740;
G__245726__245729 = G__245741;
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
pr_str.cljs$lang$applyTo = (function (arglist__245742){
var objs = cljs.core.seq( arglist__245742 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__245743){
var objs = cljs.core.seq( arglist__245743 );;
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
pr.cljs$lang$applyTo = (function (arglist__245744){
var objs = cljs.core.seq( arglist__245744 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__245745){
var objs = cljs.core.seq( arglist__245745 );;
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
print_str.cljs$lang$applyTo = (function (arglist__245746){
var objs = cljs.core.seq( arglist__245746 );;
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
println.cljs$lang$applyTo = (function (arglist__245747){
var objs = cljs.core.seq( arglist__245747 );;
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
println_str.cljs$lang$applyTo = (function (arglist__245748){
var objs = cljs.core.seq( arglist__245748 );;
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
prn.cljs$lang$applyTo = (function (arglist__245749){
var objs = cljs.core.seq( arglist__245749 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__245750 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__245750,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____245751 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____245751))
{var nspc__245752 = temp__3698__auto____245751;

return cljs.core.str.call(null,nspc__245752,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____245753 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____245753))
{var nspc__245754 = temp__3698__auto____245753;

return cljs.core.str.call(null,nspc__245754,"/");
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
var pr_pair__245755 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__245755,"{",", ","}",opts,coll);
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
var this__245756 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__245757 = this;
var G__245758__245759 = cljs.core.seq.call(null,this__245757.watches);

if(cljs.core.truth_(G__245758__245759))
{var G__245761__245763 = cljs.core.first.call(null,G__245758__245759);
var vec__245762__245764 = G__245761__245763;
var key__245765 = cljs.core.nth.call(null,vec__245762__245764,0,null);
var f__245766 = cljs.core.nth.call(null,vec__245762__245764,1,null);
var G__245758__245767 = G__245758__245759;

var G__245761__245768 = G__245761__245763;
var G__245758__245769 = G__245758__245767;

while(true){
var vec__245770__245771 = G__245761__245768;
var key__245772 = cljs.core.nth.call(null,vec__245770__245771,0,null);
var f__245773 = cljs.core.nth.call(null,vec__245770__245771,1,null);
var G__245758__245774 = G__245758__245769;

f__245773.call(null,key__245772,this$,oldval,newval);
var temp__3698__auto____245775 = cljs.core.next.call(null,G__245758__245774);

if(cljs.core.truth_(temp__3698__auto____245775))
{var G__245758__245776 = temp__3698__auto____245775;

{
var G__245783 = cljs.core.first.call(null,G__245758__245776);
var G__245784 = G__245758__245776;
G__245761__245768 = G__245783;
G__245758__245769 = G__245784;
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
var this__245777 = this;
return this$.watches = cljs.core.assoc.call(null,this__245777.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__245778 = this;
return this$.watches = cljs.core.dissoc.call(null,this__245778.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__245779 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__245779.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__245780 = this;
return this__245780.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__245781 = this;
return this__245781.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__245782 = this;
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
var atom__245791 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__245792 = (function() { 
var G__245794__delegate = function (x,p__245785){
var map__245786__245787 = p__245785;
var map__245786__245788 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__245786__245787))?cljs.core.apply.call(null,cljs.core.hash_map,map__245786__245787):map__245786__245787);
var validator__245789 = cljs.core.get.call(null,map__245786__245788,"\uFDD0'validator");
var meta__245790 = cljs.core.get.call(null,map__245786__245788,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__245790,validator__245789,null));
};
var G__245794 = function (x,var_args){
var p__245785 = null;
if (goog.isDef(var_args)) {
  p__245785 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__245794__delegate.call(this, x, p__245785);
};
G__245794.cljs$lang$maxFixedArity = 1;
G__245794.cljs$lang$applyTo = (function (arglist__245795){
var x = cljs.core.first(arglist__245795);
var p__245785 = cljs.core.rest(arglist__245795);
return G__245794__delegate.call(this, x, p__245785);
});
return G__245794;
})()
;
atom = function(x,var_args){
var p__245785 = var_args;
switch(arguments.length){
case  1 :
return atom__245791.call(this,x);
default:
return atom__245792.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__245792.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____245796 = a.validator;

if(cljs.core.truth_(temp__3698__auto____245796))
{var validate__245797 = temp__3698__auto____245796;

if(cljs.core.truth_(validate__245797.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__245798 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__245798,new_value);
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
var swap_BANG___245799 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___245800 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___245801 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___245802 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___245803 = (function() { 
var G__245805__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__245805 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__245805__delegate.call(this, a, f, x, y, z, more);
};
G__245805.cljs$lang$maxFixedArity = 5;
G__245805.cljs$lang$applyTo = (function (arglist__245806){
var a = cljs.core.first(arglist__245806);
var f = cljs.core.first(cljs.core.next(arglist__245806));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__245806)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__245806))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__245806)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__245806)))));
return G__245805__delegate.call(this, a, f, x, y, z, more);
});
return G__245805;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___245799.call(this,a,f);
case  3 :
return swap_BANG___245800.call(this,a,f,x);
case  4 :
return swap_BANG___245801.call(this,a,f,x,y);
case  5 :
return swap_BANG___245802.call(this,a,f,x,y,z);
default:
return swap_BANG___245803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___245803.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__245807){
var iref = cljs.core.first(arglist__245807);
var f = cljs.core.first(cljs.core.next(arglist__245807));
var args = cljs.core.rest(cljs.core.next(arglist__245807));
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
var gensym__245808 = (function (){
return gensym.call(null,"G__");
});
var gensym__245809 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__245808.call(this);
case  1 :
return gensym__245809.call(this,prefix_string);
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
var this__245811 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__245811.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__245812 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__245812.state,(function (p__245813){
var curr_state__245814 = p__245813;
var curr_state__245815 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__245814))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__245814):curr_state__245814);
var done__245816 = cljs.core.get.call(null,curr_state__245815,"\uFDD0'done");

if(cljs.core.truth_(done__245816))
{return curr_state__245815;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__245812.f.call(null)});
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
var map__245817__245818 = options;
var map__245817__245819 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__245817__245818))?cljs.core.apply.call(null,cljs.core.hash_map,map__245817__245818):map__245817__245818);
var keywordize_keys__245820 = cljs.core.get.call(null,map__245817__245819,"\uFDD0'keywordize-keys");
var keyfn__245821 = (cljs.core.truth_(keywordize_keys__245820)?cljs.core.keyword:cljs.core.str);
var f__245827 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____245826 = (function iter__245822(s__245823){
return (new cljs.core.LazySeq(null,false,(function (){
var s__245823__245824 = s__245823;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__245823__245824)))
{var k__245825 = cljs.core.first.call(null,s__245823__245824);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__245821.call(null,k__245825),thisfn.call(null,(x[k__245825]))]),iter__245822.call(null,cljs.core.rest.call(null,s__245823__245824)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____245826.call(null,cljs.core.js_keys.call(null,x));
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

return f__245827.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__245828){
var x = cljs.core.first(arglist__245828);
var options = cljs.core.rest(arglist__245828);
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
var mem__245829 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__245833__delegate = function (args){
var temp__3695__auto____245830 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__245829),args);

if(cljs.core.truth_(temp__3695__auto____245830))
{var v__245831 = temp__3695__auto____245830;

return v__245831;
} else
{var ret__245832 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__245829,cljs.core.assoc,args,ret__245832);
return ret__245832;
}
};
var G__245833 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__245833__delegate.call(this, args);
};
G__245833.cljs$lang$maxFixedArity = 0;
G__245833.cljs$lang$applyTo = (function (arglist__245834){
var args = cljs.core.seq( arglist__245834 );;
return G__245833__delegate.call(this, args);
});
return G__245833;
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
var trampoline__245836 = (function (f){
while(true){
var ret__245835 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__245835)))
{{
var G__245839 = ret__245835;
f = G__245839;
continue;
}
} else
{return ret__245835;
}
break;
}
});
var trampoline__245837 = (function() { 
var G__245840__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__245840 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__245840__delegate.call(this, f, args);
};
G__245840.cljs$lang$maxFixedArity = 1;
G__245840.cljs$lang$applyTo = (function (arglist__245841){
var f = cljs.core.first(arglist__245841);
var args = cljs.core.rest(arglist__245841);
return G__245840__delegate.call(this, f, args);
});
return G__245840;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__245836.call(this,f);
default:
return trampoline__245837.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__245837.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__245842 = (function (){
return rand.call(null,1);
});
var rand__245843 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__245842.call(this);
case  1 :
return rand__245843.call(this,n);
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
var k__245845 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__245845,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__245845,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___245854 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___245855 = (function (h,child,parent){
var or__3548__auto____245846 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____245846))
{return or__3548__auto____245846;
} else
{var or__3548__auto____245847 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____245847))
{return or__3548__auto____245847;
} else
{var and__3546__auto____245848 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____245848))
{var and__3546__auto____245849 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____245849))
{var and__3546__auto____245850 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____245850))
{var ret__245851 = true;
var i__245852 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____245853 = cljs.core.not.call(null,ret__245851);

if(cljs.core.truth_(or__3548__auto____245853))
{return or__3548__auto____245853;
} else
{return cljs.core._EQ_.call(null,i__245852,cljs.core.count.call(null,parent));
}
})()))
{return ret__245851;
} else
{{
var G__245857 = isa_QMARK_.call(null,h,child.call(null,i__245852),parent.call(null,i__245852));
var G__245858 = (i__245852 + 1);
ret__245851 = G__245857;
i__245852 = G__245858;
continue;
}
}
break;
}
} else
{return and__3546__auto____245850;
}
} else
{return and__3546__auto____245849;
}
} else
{return and__3546__auto____245848;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___245854.call(this,h,child);
case  3 :
return isa_QMARK___245855.call(this,h,child,parent);
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
var parents__245859 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__245860 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__245859.call(this,h);
case  2 :
return parents__245860.call(this,h,tag);
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
var ancestors__245862 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__245863 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__245862.call(this,h);
case  2 :
return ancestors__245863.call(this,h,tag);
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
var descendants__245865 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__245866 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__245865.call(this,h);
case  2 :
return descendants__245866.call(this,h,tag);
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
var derive__245876 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__245877 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__245871 = "\uFDD0'parents".call(null,h);
var td__245872 = "\uFDD0'descendants".call(null,h);
var ta__245873 = "\uFDD0'ancestors".call(null,h);
var tf__245874 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____245875 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__245871.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__245873.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__245873.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__245871,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__245874.call(null,"\uFDD0'ancestors".call(null,h),tag,td__245872,parent,ta__245873),"\uFDD0'descendants":tf__245874.call(null,"\uFDD0'descendants".call(null,h),parent,ta__245873,tag,td__245872)});
})());

if(cljs.core.truth_(or__3548__auto____245875))
{return or__3548__auto____245875;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__245876.call(this,h,tag);
case  3 :
return derive__245877.call(this,h,tag,parent);
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
var underive__245883 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__245884 = (function (h,tag,parent){
var parentMap__245879 = "\uFDD0'parents".call(null,h);
var childsParents__245880 = (cljs.core.truth_(parentMap__245879.call(null,tag))?cljs.core.disj.call(null,parentMap__245879.call(null,tag),parent):cljs.core.set([]));
var newParents__245881 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__245880))?cljs.core.assoc.call(null,parentMap__245879,tag,childsParents__245880):cljs.core.dissoc.call(null,parentMap__245879,tag));
var deriv_seq__245882 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__245868_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__245868_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__245868_SHARP_),cljs.core.second.call(null,p1__245868_SHARP_)));
}),cljs.core.seq.call(null,newParents__245881)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__245879.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__245869_SHARP_,p2__245870_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__245869_SHARP_,p2__245870_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__245882));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__245883.call(this,h,tag);
case  3 :
return underive__245884.call(this,h,tag,parent);
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
var xprefs__245886 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____245888 = (cljs.core.truth_((function (){var and__3546__auto____245887 = xprefs__245886;

if(cljs.core.truth_(and__3546__auto____245887))
{return xprefs__245886.call(null,y);
} else
{return and__3546__auto____245887;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____245888))
{return or__3548__auto____245888;
} else
{var or__3548__auto____245890 = (function (){var ps__245889 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__245889) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__245889),prefer_table)))
{} else
{}
{
var G__245893 = cljs.core.rest.call(null,ps__245889);
ps__245889 = G__245893;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____245890))
{return or__3548__auto____245890;
} else
{var or__3548__auto____245892 = (function (){var ps__245891 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__245891) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__245891),y,prefer_table)))
{} else
{}
{
var G__245894 = cljs.core.rest.call(null,ps__245891);
ps__245891 = G__245894;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____245892))
{return or__3548__auto____245892;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____245895 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____245895))
{return or__3548__auto____245895;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__245904 = cljs.core.reduce.call(null,(function (be,p__245896){
var vec__245897__245898 = p__245896;
var k__245899 = cljs.core.nth.call(null,vec__245897__245898,0,null);
var ___245900 = cljs.core.nth.call(null,vec__245897__245898,1,null);
var e__245901 = vec__245897__245898;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__245899)))
{var be2__245903 = (cljs.core.truth_((function (){var or__3548__auto____245902 = (be === null);

if(cljs.core.truth_(or__3548__auto____245902))
{return or__3548__auto____245902;
} else
{return cljs.core.dominates.call(null,k__245899,cljs.core.first.call(null,be),prefer_table);
}
})())?e__245901:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__245903),k__245899,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__245899," and ",cljs.core.first.call(null,be2__245903),", and neither is preferred")));
}
return be2__245903;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__245904))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__245904));
return cljs.core.second.call(null,best_entry__245904);
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
if(cljs.core.truth_((function (){var and__3546__auto____245905 = mf;

if(cljs.core.truth_(and__3546__auto____245905))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____245905;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____245906 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____245906))
{return or__3548__auto____245906;
} else
{var or__3548__auto____245907 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____245907))
{return or__3548__auto____245907;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____245908 = mf;

if(cljs.core.truth_(and__3546__auto____245908))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____245908;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____245909 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____245909))
{return or__3548__auto____245909;
} else
{var or__3548__auto____245910 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____245910))
{return or__3548__auto____245910;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____245911 = mf;

if(cljs.core.truth_(and__3546__auto____245911))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____245911;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____245912 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____245912))
{return or__3548__auto____245912;
} else
{var or__3548__auto____245913 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____245913))
{return or__3548__auto____245913;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____245914 = mf;

if(cljs.core.truth_(and__3546__auto____245914))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____245914;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____245915 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____245915))
{return or__3548__auto____245915;
} else
{var or__3548__auto____245916 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____245916))
{return or__3548__auto____245916;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____245917 = mf;

if(cljs.core.truth_(and__3546__auto____245917))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____245917;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____245918 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____245918))
{return or__3548__auto____245918;
} else
{var or__3548__auto____245919 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____245919))
{return or__3548__auto____245919;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____245920 = mf;

if(cljs.core.truth_(and__3546__auto____245920))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____245920;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____245921 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____245921))
{return or__3548__auto____245921;
} else
{var or__3548__auto____245922 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____245922))
{return or__3548__auto____245922;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____245923 = mf;

if(cljs.core.truth_(and__3546__auto____245923))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____245923;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____245924 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____245924))
{return or__3548__auto____245924;
} else
{var or__3548__auto____245925 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____245925))
{return or__3548__auto____245925;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____245926 = mf;

if(cljs.core.truth_(and__3546__auto____245926))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____245926;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____245927 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____245927))
{return or__3548__auto____245927;
} else
{var or__3548__auto____245928 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____245928))
{return or__3548__auto____245928;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__245929 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__245930 = cljs.core._get_method.call(null,mf,dispatch_val__245929);

if(cljs.core.truth_(target_fn__245930))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__245929)));
}
return cljs.core.apply.call(null,target_fn__245930,args);
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
var this__245931 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__245932 = this;
cljs.core.swap_BANG_.call(null,this__245932.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__245932.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__245932.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__245932.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__245933 = this;
cljs.core.swap_BANG_.call(null,this__245933.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__245933.method_cache,this__245933.method_table,this__245933.cached_hierarchy,this__245933.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__245934 = this;
cljs.core.swap_BANG_.call(null,this__245934.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__245934.method_cache,this__245934.method_table,this__245934.cached_hierarchy,this__245934.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__245935 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__245935.cached_hierarchy),cljs.core.deref.call(null,this__245935.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__245935.method_cache,this__245935.method_table,this__245935.cached_hierarchy,this__245935.hierarchy);
}
var temp__3695__auto____245936 = cljs.core.deref.call(null,this__245935.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____245936))
{var target_fn__245937 = temp__3695__auto____245936;

return target_fn__245937;
} else
{var temp__3695__auto____245938 = cljs.core.find_and_cache_best_method.call(null,this__245935.name,dispatch_val,this__245935.hierarchy,this__245935.method_table,this__245935.prefer_table,this__245935.method_cache,this__245935.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____245938))
{var target_fn__245939 = temp__3695__auto____245938;

return target_fn__245939;
} else
{return cljs.core.deref.call(null,this__245935.method_table).call(null,this__245935.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__245940 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__245940.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__245940.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__245940.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__245940.method_cache,this__245940.method_table,this__245940.cached_hierarchy,this__245940.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__245941 = this;
return cljs.core.deref.call(null,this__245941.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__245942 = this;
return cljs.core.deref.call(null,this__245942.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__245943 = this;
return cljs.core.do_dispatch.call(null,mf,this__245943.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__245944__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__245944 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__245944__delegate.call(this, _, args);
};
G__245944.cljs$lang$maxFixedArity = 1;
G__245944.cljs$lang$applyTo = (function (arglist__245945){
var _ = cljs.core.first(arglist__245945);
var args = cljs.core.rest(arglist__245945);
return G__245944__delegate.call(this, _, args);
});
return G__245944;
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
